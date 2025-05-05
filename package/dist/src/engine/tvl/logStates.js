import { BucketService } from "@/modules/v4/bucket/bucket.service";
import { engineDbClient } from "@db";
import { BN2Number, Campaign as CampaignType, ChainInteractionService, } from "@sdk";
// TODO: handle multiple main composed campaigns
export function getIdPerCampaignType(campaignType, campaign) {
    switch (campaignType) {
        case CampaignType.ERC20LOGPROCESSOR:
        case CampaignType.ERC20REBASELOGPROCESSOR:
            campaign = campaign;
            return `ERC20LogProcessor_${campaign.computeChainId}_${campaign.campaignParameters.targetToken}`;
        case CampaignType.EVENT_BASED:
            campaign = campaign;
            return `EventBasedProcessor_${campaign.computeChainId}_${campaign.campaignId}`;
        case CampaignType.LOCKER:
            campaign = campaign;
            return `LOCKER_${campaign.campaignParameters.lockerContract}`;
    }
}
/**
 * Compute TVL
 * @dev important: using the most recent state save with current prices
 *      it's only an estimate
 */
// TODO: handle multiple main composed campaigns
export async function computeEventBasedPoolRewardsFromMostRecentStateSave(chainId, campaignType, campaign) {
    let stateSave;
    let blockNumber;
    let states = {};
    try {
        const currentBlock = await ChainInteractionService(chainId).getBlockNumber();
        const mostRecentStateSave = await engineDbClient.stateSave.findFirst({
            where: {
                id: getIdPerCampaignType(campaignType, campaign),
                blockNumber: {
                    lte: currentBlock,
                },
            },
            orderBy: {
                blockNumber: "desc",
            },
        });
        stateSave = mostRecentStateSave.state;
        blockNumber = mostRecentStateSave?.blockNumber;
        states = stateSave.states;
        // const globalState = stateSave.globalState as { tick: number; liquidity: string };
    }
    catch { }
    const { fileName, bucketName } = states;
    // Bucket service
    let distributedRewards = 0;
    if (!fileName || !bucketName) {
        return { distributedRewards, blockNumber: blockNumber };
    }
    try {
        const bucket = new BucketService("merkl-production-states", "merkl-production");
        const storedStates = JSON.parse(await bucket.pull(fileName));
        for (const [_, { value, params: _params }] of Object.entries(storedStates)) {
            distributedRewards += BN2Number(value.allTimeValue, 18);
        }
        distributedRewards = Math.max(distributedRewards, 1);
    }
    catch { }
    return { distributedRewards, blockNumber: blockNumber };
}
export async function computeLockerAmountFromMostRecentStateSave(chainId, campaignType, campaign) {
    let stateSave;
    let blockNumber;
    let states = {};
    try {
        const currentBlock = await ChainInteractionService(chainId).getBlockNumber();
        const mostRecentStateSave = await engineDbClient.stateSave.findFirst({
            where: {
                id: getIdPerCampaignType(campaignType, campaign),
                blockNumber: {
                    lte: currentBlock,
                },
            },
            orderBy: {
                blockNumber: "desc",
            },
        });
        stateSave = mostRecentStateSave.state;
        blockNumber = mostRecentStateSave?.blockNumber;
        states = stateSave.states;
        // const globalState = stateSave.globalState as { tick: number; liquidity: string };
    }
    catch { }
    const { fileName, bucketName } = states;
    // Bucket service
    let lockedAmount = 0;
    if (!fileName || !bucketName) {
        return { lockedAmount, blockNumber: blockNumber };
    }
    try {
        const bucket = new BucketService("merkl-production-states", "merkl-production");
        const storedStates = JSON.parse(await bucket.pull(fileName));
        for (const [_, { value, params: _params }] of Object.entries(storedStates)) {
            for (const slot of Object.values(value.slots)) {
                lockedAmount += BN2Number(slot.lockedAmount, 18);
            }
        }
        lockedAmount = Math.max(lockedAmount, 1);
    }
    catch { }
    return { lockedAmount, blockNumber: blockNumber };
}
