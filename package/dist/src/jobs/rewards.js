// ─── Rewards ETL ─────────────────────────────────────────────────────────────
if (!process.env.ENV || !process.env.CHAIN_ID || !process.env.ROOT)
    throw new Error("[ENV]: missing variable");
import { log } from "@/utils/logger";
import { apiDbClient } from "@db";
import { withRetry } from "@sdk";
import { S3Client } from "bun";
import moment from "moment";
// ─── Global Variables ────────────────────────────────────────
const gcsClient = new S3Client({
    accessKeyId: process.env.GCS_ACCESS_ID,
    secretAccessKey: process.env.GCS_SECRET,
    endpoint: process.env.GCS_ENDPOINT,
    bucket: `merkl-rewards-lake-${process.env.ENV}`,
});
let file = gcsClient.file(`rewards/${process.env.CHAIN_ID}-${process.env.ROOT}`);
if (!(await file.exists()))
    file = gcsClient.file(`rewards/${process.env.CHAIN_ID}-${process.env.ROOT}.gz`);
if (!(await file.exists())) {
    log.error("rewards", "File does not exist.");
    process.exit(0);
}
const failedBatches = [];
// ─── Extract ─────────────────────────────────────────────────────────────────
const extract = async () => {
    if (!file.exists())
        throw new Error("File does not exist.");
    const data = [];
    const textDecoder = new TextDecoder();
    let buffer = "";
    const stream = file.stream();
    let count = 0;
    for await (const chunk of stream) {
        buffer += textDecoder.decode(chunk);
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
            if (line.trim())
                data.push(transform(JSON.parse(line)));
        }
        try {
            count += await withRetry(load, [data], 5, 60_000);
            data.length = 0;
        }
        catch (err) {
            console.error(`Failed to insert a batch, adding it to the fail queue.\n${err}`);
            failedBatches.push(data);
            data.length = 0;
        }
    }
    return count;
};
// ─── Transform ───────────────────────────────────────────────────────────────
const transform = (reward) => {
    const rewardTokenId = Bun.hash(`${process.env.CHAIN_ID}${reward.rewardToken}`).toString();
    const id = Bun.hash(`${process.env.ROOT}${reward.recipient}${rewardTokenId}`).toString();
    return {
        id,
        root: reward.root,
        amount: reward.amount,
        pending: reward.pending,
        claimed: reward.claimed,
        recipient: reward.recipient,
        rewardTokenId,
        proofs: reward.proofs,
    };
};
// ─── Load ────────────────────────────────────────────────────────────────────
const load = async (rewards) => {
    // ─── Load Users ──────────────────────────────────────────────────────
    await apiDbClient.user.createMany({
        data: rewards.map(r => {
            return {
                address: r.recipient,
            };
        }),
        skipDuplicates: true,
    });
    // ─── Load Rewards ────────────────────────────────────────────────────
    return (await apiDbClient.reward.createMany({
        data: rewards,
        skipDuplicates: true,
    })).count;
};
// ─────────────────────────────────────────────────────────────────────────────
export const main = async () => {
    const start = moment().unix();
    // ─── Create Merkle Root If Not Exists ────────────────────────────────
    await apiDbClient.merklRoot.upsert({
        create: {
            root: process.env.ROOT,
            chainId: +process.env.CHAIN_ID,
            epoch: Math.floor(start / 3_600),
            timestamp: start,
        },
        update: {},
        where: {
            root: process.env.ROOT,
        },
    });
    // ─── Start Rewards ETL ───────────────────────────────────────────────
    const count = await extract();
    log.info(`✅ Successfully created ${count} new records for ${process.env.CHAIN_ID}-${process.env.ROOT} in ${moment().unix() - start} sec`);
    if (failedBatches.length !== 0) {
        log.error("rewards", `${failedBatches.length} batches failed.`);
        process.exit(1);
    }
    if (failedBatches.length === 0) {
        // await file.delete();
    }
};
main();
