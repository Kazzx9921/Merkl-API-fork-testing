import { BucketService } from "@/modules/v4/bucket/bucket.service";
import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { Pricer } from "@/utils/pricer";
import { engineDbClient } from "@db";
import { BN2Number, ChainInteractionService, NETWORK_LABELS, } from "@sdk";
import moment from "moment";
/**
 * Compute TVL
 * @dev important: using the most recent state save with current prices
 *      it's only an estimate
 */
async function computeEventBasedPoolRewardsFromMostRecentStateSave(chainId, campaignID, priceCurrency, decimalsCurrency, computeMethod) {
    let stateSave;
    let blockNumber;
    let states = {};
    try {
        const currentBlock = await ChainInteractionService(chainId).getBlockNumber();
        const id = `EventBasedProcessor_${computeMethod}_${chainId}_${campaignID}`;
        let mostRecentStateSave = await engineDbClient.stateSave.findFirst({
            where: {
                id: id,
                blockNumber: {
                    lte: currentBlock,
                },
            },
            orderBy: {
                blockNumber: "desc",
            },
        });
        if (!mostRecentStateSave) {
            const historicalId = `EventBasedProcessor_${chainId}_${campaignID}`;
            mostRecentStateSave = await engineDbClient.stateSave.findFirst({
                where: {
                    id: historicalId,
                    blockNumber: {
                        lte: currentBlock,
                    },
                },
                orderBy: {
                    blockNumber: "desc",
                },
            });
        }
        stateSave = mostRecentStateSave.state;
        blockNumber = mostRecentStateSave?.blockNumber;
        states = stateSave.states;
        // const globalState = stateSave.globalState as { tick: number; liquidity: string };
    }
    catch {
        log.warn(`merklDynamic data - failed to read a recent state of ${campaignID} on ${NETWORK_LABELS[chainId]}`);
    }
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
        distributedRewards = distributedRewards === 0 ? 1 : distributedRewards;
    }
    catch {
        log.warn(`merklDynamic data - failed to decode state of event based on ${NETWORK_LABELS[chainId]}`);
    }
    return { distributedRewards, blockNumber: blockNumber };
}
export class EventBasedDynamicData {
    async build(chainId, campaigns) {
        const dynamicData = [];
        const pricer = await Pricer.load();
        for (const campaign of campaigns) {
            try {
                const decimalsCurrency0 = 6;
                const symbolCurrency0 = "USDC";
                const priceToken = (await pricer.get({
                    chainId: chainId,
                    symbol: symbolCurrency0,
                }));
                const { distributedRewards } = await computeEventBasedPoolRewardsFromMostRecentStateSave(chainId, campaign.campaignId, priceToken, decimalsCurrency0, campaign.campaignParameters.computeScoreParameters.computeMethod);
                const c = campaign;
                const amount = BN2Number(c.amount, c.campaignParameters.decimalsRewardToken);
                const multiplier = 1;
                const startTimestamp = BN2Number(c.startTimestamp, 0);
                const endTimestamp = BN2Number(c.endTimestamp, 0);
                const isLive = moment().unix() > startTimestamp && moment().unix() < endTimestamp;
                let distributionMeanAPR = 0;
                const priceRewardToken = await TokenService.getRewardTokenPrice(campaign);
                const rewardTokens = await TokenService.findManyOrCreate([
                    { chainId: campaign.chainId, address: campaign.rewardToken },
                ]);
                const rewardToken = rewardTokens[0];
                const tvl = distributedRewards / multiplier;
                if (isLive) {
                    /** Yearly rewards in $ */
                    let fixRewardRate = multiplier * priceRewardToken;
                    if (distributedRewards > (amount * (moment().unix() - startTimestamp)) / (endTimestamp - startTimestamp)) {
                        fixRewardRate =
                            (fixRewardRate * amount * (moment().unix() - startTimestamp)) / (endTimestamp - startTimestamp) / tvl;
                    }
                    distributionMeanAPR = fixRewardRate * 365 * 100;
                    distributionMeanAPR = !distributionMeanAPR || Number.isNaN(distributionMeanAPR) ? 0 : distributionMeanAPR;
                    if (rewardToken.isPoint) {
                        distributionMeanAPR = distributionMeanAPR / 365 / 100;
                    }
                    dynamicData.push({
                        ...campaign,
                        apr: distributionMeanAPR,
                        priceRewardToken: priceRewardToken,
                        tvl: tvl,
                    });
                }
            }
            catch {
                dynamicData.push({
                    ...campaign,
                    apr: 0,
                    priceRewardToken: 0,
                    tvl: 1,
                });
            }
        }
        return dynamicData;
    }
}
