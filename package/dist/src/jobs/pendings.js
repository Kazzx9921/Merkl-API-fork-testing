// ─── Pending Rewards Etl ─────────────────────────────────────────────────────
if (!process.env.ENV || !process.env.FILENAME)
    throw new Error("[ENV]: missing variable");
import { RewardService } from "@/modules/v4/reward/reward.service";
import { log } from "@/utils/logger";
import { apiDbClient } from "@db";
import { NETWORK_LABELS, withRetry } from "@sdk";
import { S3Client } from "bun";
import moment from "moment";
// ─── Constants ───────────────────────────────────────────────
const MAX_BATCH_SIZE = 1_000;
// ─── Global Variables ────────────────────────────────────────
const [chainIdString, root, campaignId] = process.env.FILENAME.replace(".gz", "").split("_");
const chainId = Number.parseInt(chainIdString);
const gcsClient = new S3Client({
    accessKeyId: process.env.GCS_ACCESS_ID,
    secretAccessKey: process.env.GCS_SECRET,
    endpoint: process.env.GCS_ENDPOINT,
    bucket: `merkl-rewards-lake-${process.env.ENV}`,
});
const file = gcsClient.file(`pendings/${process.env.FILENAME}`);
// ─── Extract ─────────────────────────────────────────────────────────────────
const extract = async () => {
    if (!file.exists())
        throw new Error("File does not exist.");
    const textDecoder = new TextDecoder();
    let buffer = "";
    const stream = file.stream();
    let data = [];
    const loadPromises = [];
    for await (const chunk of stream) {
        buffer += textDecoder.decode(chunk);
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
            data.push(JSON.parse(line));
        }
        if (data.length < MAX_BATCH_SIZE)
            continue;
        // Retry up to 5 times with a 10s delay
        const promise = withRetry(load, [data], 5, 10_000);
        loadPromises.push(promise);
        await promise;
        data = [];
    }
    // Final batch
    // Retry up to 5 times with a 10s delay
    const promise = withRetry(load, [data], 5, 10_000);
    loadPromises.push(promise);
    await promise;
    let created = 0;
    let updated = 0;
    let failed = 0;
    const promiseResults = await Promise.allSettled(loadPromises);
    for (const x of promiseResults) {
        if (x.status === "rejected")
            failed += 1;
        else {
            updated += x.value.updated;
            created += x.value.created;
        }
    }
    return { created, updated, failed, batch: promiseResults.length };
};
// ─── Transform & Load ────────────────────────────────────────────────────────
const load = async (pendings) => {
    if (pendings.length === 0)
        return { updated: 0, created: 0 };
    log.info(`pushing ${pendings.length} pendings for token ${pendings[0].rewardToken} on ${NETWORK_LABELS[chainId]}`);
    const { updated, created } = await updatePendings({
        distributionChainId: chainId,
        rewardToken: pendings[0].rewardToken, // sometimes undefined
        campaignId,
        root,
        data: pendings,
    });
    log.info(`✅ updated ${updated} and created ${created} pendings`);
    return { updated, created };
};
const updatePendings = async (data) => {
    const rewardTokenId = Bun.hash(`${data.distributionChainId}${data.rewardToken}`).toString();
    const campaignId = Bun.hash(`${data.distributionChainId}${data.campaignId}`).toString();
    // List of identifiers of breakdowns that will be touched by this jobd
    const breakdownUniques = await data.data.map(({ recipient, reason }) => {
        const rewardId = Bun.hash(`${data.root}${recipient}${rewardTokenId}`).toString();
        return { rewardId, reason, campaignId };
    });
    // Check if these breakdowns already exist or not
    const breakdownExists = await apiDbClient.$transaction(breakdownUniques.map(x => apiDbClient.rewardBreakdown.findUnique({
        select: {
            pending: true,
        },
        where: {
            rewardId_campaignId_reason: {
                rewardId: x.rewardId,
                campaignId: x.campaignId,
                reason: x.reason,
            },
        },
    })));
    // We want to get all current pendings for the rewardIds that will be modified
    // Should contain rewardId => { pendingIncrease, recipient }
    const rewardIdToPendingIncrease = {};
    const breakdownToUpdate = [];
    const breakdownToCreate = [];
    let totalBreakdownIncrease = 0n;
    // For all point to update
    //  - compute the delta with what's in database, add it to rewardIdToPendingIncrease
    //  - add the point to breakdownToUpdate or breakdownToCreate
    for (const [pointIndex, point] of data.data.entries()) {
        const rewardId = Bun.hash(`${data.root}${point.recipient}${rewardTokenId}`).toString();
        if (!rewardIdToPendingIncrease[rewardId]) {
            rewardIdToPendingIncrease[rewardId] = { pendingIncrease: 0n, recipient: point.recipient };
        }
        const delta = BigInt(point.pending) - BigInt(breakdownExists[pointIndex]?.pending ?? "0");
        totalBreakdownIncrease += delta;
        if (delta > 0n) {
            rewardIdToPendingIncrease[rewardId].pendingIncrease += delta; // Store the delta
            if (!!breakdownExists[pointIndex]) {
                breakdownToUpdate.push(point);
            }
            else {
                breakdownToCreate.push(point);
            }
        }
    }
    const rewardToUpdate = [];
    const rewardToCreate = [];
    const RewardExists = await apiDbClient.$transaction(Object.keys(rewardIdToPendingIncrease).map(x => apiDbClient.reward.findUnique({
        select: {
            pending: true,
        },
        where: {
            id: x,
        },
    })));
    for (const [pointIndex, point] of Object.values(rewardIdToPendingIncrease).entries()) {
        if (BigInt(point.pendingIncrease) > 0n) {
            const rewardExists = RewardExists[pointIndex];
            if (!!rewardExists) {
                rewardToUpdate.push({
                    recipient: point.recipient,
                    pending: BigInt(rewardExists.pending) + BigInt(point.pendingIncrease),
                });
            }
            else {
                rewardToCreate.push({
                    recipient: point.recipient,
                    pending: BigInt(point.pendingIncrease),
                });
            }
        }
    }
    const totalRewardIncrease = Object.values(rewardIdToPendingIncrease).reduce((prev, current) => prev + BigInt(current.pendingIncrease), 0n);
    log.info(`total increase: ${totalRewardIncrease.toString()}, rewards to create:    ${rewardToCreate.length}, to update: ${rewardToUpdate.length}`);
    log.info(`total increase: ${totalBreakdownIncrease.toString()}, breakdowns to create: ${breakdownToCreate.length}, to update: ${breakdownToUpdate.length}`);
    if (rewardToCreate.length > 0) {
        const users = rewardToCreate.map(x => x.recipient);
        await apiDbClient.user.createMany({ data: users.map(x => ({ address: x, tags: [] })), skipDuplicates: true });
        await apiDbClient.reward.createMany({
            data: rewardToCreate.map(x => {
                const rewardId = Bun.hash(`${root}${x.recipient}${rewardTokenId}`).toString();
                return {
                    id: rewardId,
                    root,
                    recipient: x.recipient,
                    rewardTokenId,
                    proofs: [],
                    amount: "0",
                    pending: x.pending.toString(),
                    claimed: "0",
                };
            }),
        });
    }
    if (breakdownToCreate.length > 0) {
        await apiDbClient.rewardBreakdown.createMany({
            data: breakdownToCreate.map(x => {
                const rewardId = RewardService.hashId(data.root, x.recipient, rewardTokenId);
                return {
                    reason: x.reason,
                    amount: "0",
                    pending: x.pending,
                    claimed: "0",
                    rewardId,
                    campaignId,
                };
            }),
        });
    }
    if (breakdownToUpdate.length > 0) {
        await apiDbClient.$transaction(breakdownToUpdate.map(x => {
            return apiDbClient.rewardBreakdown.update({
                where: {
                    rewardId_campaignId_reason: {
                        rewardId: Bun.hash(`${root}${x.recipient}${rewardTokenId}`).toString(),
                        campaignId: campaignId,
                        reason: x.reason,
                    },
                },
                data: {
                    pending: x.pending,
                },
            });
        }));
    }
    if (rewardToUpdate.length > 0) {
        await apiDbClient.$transaction(rewardToUpdate.map(x => {
            const rewardId = Bun.hash(`${data.root}${x.recipient}${rewardTokenId}`).toString();
            return apiDbClient.reward.update({
                where: {
                    id: rewardId,
                },
                data: {
                    pending: x.pending.toString(),
                },
            });
        }));
    }
    return { created: breakdownToCreate.length, updated: breakdownToUpdate.length };
};
// ─────────────────────────────────────────────────────────────────────────────
export const main = async () => {
    log.info(`✅ Running for ${process.env.FILENAME}`);
    const start = moment().unix();
    // ─── Start Rewards ETL ───────────────────────────────────────────────
    const { created, updated, failed, batch } = await extract();
    log.info(`✅ Successfully created ${created} and updated ${updated} pendings records in ${batch} batches for ${process.env.FILENAME} in ${moment().unix() - start} sec`);
    if (failed !== 0) {
        log.error("pendings", `${failed} batches failed.`);
        process.exit(1);
    }
    if (failed === 0) {
        await file.delete();
    }
    process.exit(0);
};
main();
