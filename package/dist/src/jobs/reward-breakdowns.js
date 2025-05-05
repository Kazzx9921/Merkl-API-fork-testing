// ─── Reward Breakdowns ETL ───────────────────────────────────────────────────
if (!process.env.DATABASE_API_URL || !process.env.ENV || !process.env.CHAIN_ID || !process.env.ROOT)
    throw new Error("[ENV]: missing variable");
import { BucketService } from "@/modules/v4/bucket/bucket.service";
import { log } from "@/utils/logger";
import { apiDbClient } from "@db";
import { S3Client } from "bun";
import moment from "moment";
// ─── Global Variables ────────────────────────────────────────
const gcsClient = new S3Client({
    accessKeyId: process.env.GCS_ACCESS_ID,
    secretAccessKey: process.env.GCS_SECRET,
    endpoint: process.env.GCS_ENDPOINT,
    bucket: `merkl-rewards-lake-${process.env.ENV}`,
});
const file = gcsClient.file(`breakdowns/${process.env.CHAIN_ID}-${process.env.ROOT}`);
const failedBatches = [];
const missingCampaigns = [];
// ─── Extract ─────────────────────────────────────────────────────────────────
const extract = async () => {
    if (!file.exists())
        throw new Error("File does not exist.");
    let data = [];
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
                data.push(...(await transform(JSON.parse(line))));
        }
        if (data.length < 30_000)
            continue;
        try {
            count += await load(data);
            data = [];
        }
        catch (err) {
            // log.error("Failed to insert a batch, adding it to the fail queue.", err);
            failedBatches.push(data);
            data = [];
        }
    }
    try {
        count += await load(data);
        data = [];
    }
    catch (err) {
        // log.error("Failed to insert a batch, adding it to the fail queue.", err);
        failedBatches.push(data);
        data = [];
    }
    return count;
};
// ─── Transform ───────────────────────────────────────────────────────────────
const transform = (rewardBreakdowns) => {
    const transformedBreakdowns = Array(rewardBreakdowns.length);
    let i = 0;
    for (i; i < rewardBreakdowns.length; i++) {
        const rewardTokenId = Bun.hash(`${process.env.CHAIN_ID}${rewardBreakdowns[i].token}`).toString();
        const rewardId = Bun.hash(`${process.env.ROOT}${rewardBreakdowns[i].recipient}${rewardTokenId}`).toString();
        const campaignId = Bun.hash(`${process.env.CHAIN_ID}${rewardBreakdowns[i].campaignId}`).toString();
        transformedBreakdowns[i] = {
            rewardId,
            protocolId: rewardBreakdowns[i].protocolId ? rewardBreakdowns[i].protocolId : undefined,
            campaignId,
            reason: rewardBreakdowns[i].reason ? rewardBreakdowns[i].reason : "",
            amount: rewardBreakdowns[i].amount,
            claimed: rewardBreakdowns[i].claimed,
            pending: rewardBreakdowns[i].pending,
            merklCampaignId: rewardBreakdowns[i].campaignId,
        };
    }
    return transformedBreakdowns;
};
// ─── Load ────────────────────────────────────────────────────────────────────
const load = async (rewardBreakdowns, skipSubCampaignReasons = false) => {
    const count = (await apiDbClient.rewardBreakdown.createMany({
        data: rewardBreakdowns.map(breakdown => {
            // Trying to parse subcampaign reasons only when skipSubCampaignReasons is false because priority is having the breakdowns in the DB
            if (!skipSubCampaignReasons && breakdown.reason.includes("~")) {
                // subcampaign reason will have the form <campaignId>_<protocol>_<reason> outputted by the processor>
                const subcampaignReason = breakdown.reason.split("~")[breakdown.reason.split("~").length - 1];
                breakdown.reason = subcampaignReason.split("_")[2];
                breakdown.subCampaignId = subcampaignReason.split("_")[0];
            }
            return {
                id: breakdown.id,
                protocolId: breakdown.protocolId,
                reason: breakdown.reason,
                amount: breakdown.amount,
                claimed: breakdown.claimed,
                pending: breakdown.pending,
                rewardId: breakdown.rewardId,
                campaignId: breakdown.campaignId,
                subCampaignId: breakdown.subCampaignId ?? undefined,
            };
        }),
        skipDuplicates: true,
    })).count;
    log.info(`Successfully inserted ${rewardBreakdowns.length} reward breakdown(s).`);
    return count;
};
// ─── Retry ───────────────────────────────────────────────────────────────────
// Using binary search
const retry = async (batches) => {
    log.info(`Retrying ${batches.length} batch(es)...`);
    let inserted = 0;
    while (batches.length > 0) {
        const currentBatch = batches.shift();
        const firstHalf = currentBatch.splice(0, Math.ceil(currentBatch.length / 2));
        const secondHalf = currentBatch;
        // Process first half
        try {
            inserted += await load(firstHalf, true);
        }
        catch (err) {
            log.error(JSON.stringify(firstHalf), err);
            if (firstHalf.length > 1)
                batches.push(firstHalf);
            else
                missingCampaigns.push(firstHalf[0].merklCampaignId);
        }
        // Process second half
        try {
            inserted += await load(secondHalf, true);
        }
        catch (err) {
            log.error(JSON.stringify(secondHalf), err);
            if (secondHalf.length > 1)
                batches.push(secondHalf);
            else
                missingCampaigns.push(secondHalf[0].merklCampaignId);
        }
    }
    return inserted;
};
// ─── Main ────────────────────────────────────────────────────────────────────
export const main = async () => {
    const start = moment().unix();
    const count = await extract();
    log.info(`✅ Successfully created ${count} new record(s) for ${process.env.CHAIN_ID}-${process.env.ROOT} in ${moment().unix() - start} sec.`);
    if (failedBatches.length !== 0) {
        const inserted = await retry(failedBatches);
        log.info(`Successfully inserted ${inserted} record(s) after retrying.`);
        if (inserted !== failedBatches.length) {
            log.error("breakdowns", `${failedBatches.length} breakdown(s) failed to insert.`);
            // ─── Push Missing Campaigns To Bucket ────────────────
            const bucket = new BucketService(`merkl-campaigns-lake-${process.env.ENV}`, `merkl-data-${process.env.ENV}`);
            await bucket.push(`${process.env.CHAIN_ID}_missing_campaigns.json`, JSON.stringify(missingCampaigns), {
                type: "application/json",
            });
            process.exit(1);
        }
    }
    // if (failedBatches.length === 0) await file.delete();
    process.exit(0);
};
await main();
