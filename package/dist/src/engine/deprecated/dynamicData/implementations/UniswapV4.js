import { BucketService } from "@/modules/v4/bucket/bucket.service";
import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { Pricer } from "@/utils/pricer";
import { engineDbClient } from "@db";
import { BN2Number, ChainInteractionService, EAprBreakdownType, NETWORK_LABELS, UniswapV4Addresses, UniswapV4StateViewInterface, getSqrtRatioAtTick, shortenAddress, } from "@sdk";
import moment from "moment";
// Constants
const CALLS_LENGTH = 2;
/**
 * Compute TVL
 * @dev important: using the most recent state save with current prices
 *      it's only an estimate
 */
async function computeUniV4PoolTVLFromMostRecentStateSave(chainId, poolID, priceCurrency0, priceCurrency1, decimalsCurrency0, decimalsCurrency1) {
    let stateSave;
    let blockNumber;
    let states = {};
    try {
        const currentBlock = await ChainInteractionService(chainId).getBlockNumber();
        const mostRecentStateSave = await engineDbClient.stateSave.findFirst({
            where: {
                id: `UniswapV4_${chainId}_${poolID}`,
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
    }
    catch {
        log.warn(`merklDynamic data - failed to read a recent state of pool ${poolID} on ${NETWORK_LABELS[chainId]}`);
        return { tvl: 0, amount0: 0, amount1: 0, blockNumber: blockNumber ?? 0 };
    }
    const { fileName } = states;
    // Bucket service
    let tvl = 0;
    let amount0 = 0;
    let amount1 = 0;
    try {
        const bucket = new BucketService("merkl-production-states", "merkl-production");
        const storedStates = JSON.parse(await bucket.pull(fileName));
        for (const [_, { value, params: _params }] of Object.entries(storedStates)) {
            amount0 += BN2Number(value.amount0, decimalsCurrency0);
            amount1 += BN2Number(value.amount1, decimalsCurrency1);
        }
        tvl = amount0 * (priceCurrency0 ?? 0) + amount1 * (priceCurrency1 ?? 0);
    }
    catch {
        log.warn(`merklDynamic data - failed to decode state of pool ${poolID} on ${NETWORK_LABELS[chainId]}`);
    }
    return { tvl, amount0, amount1, blockNumber: blockNumber };
}
export class UniswapV4DynamicData {
    async build(chainId, campaigns) {
        const dynamicData = [];
        const pricer = await Pricer.load();
        const calls = [];
        /** Dedupe pools from campaigns to build pool list */
        const poolList = [];
        for (const campaign of campaigns ?? []) {
            /** Loop through all campaigns to add pools */
            if (!poolList?.map(p => p.mainParameter.toLowerCase()).includes(campaign.mainParameter.toLowerCase())) {
                poolList.push({
                    poolId: campaign.campaignParameters.poolId,
                    mainParameter: campaign.mainParameter, // FIXME
                });
            }
        }
        if (!!poolList) {
            for (const pool of poolList) {
                calls.push({
                    allowFailure: true,
                    callData: UniswapV4StateViewInterface.encodeFunctionData("getLiquidity", [pool.poolId]),
                    target: UniswapV4Addresses[chainId].StateView,
                }, {
                    allowFailure: true,
                    callData: UniswapV4StateViewInterface.encodeFunctionData("getSlot0", [pool.poolId]),
                    target: UniswapV4Addresses[chainId].StateView,
                });
            }
            const result = await ChainInteractionService(chainId).fetchState(calls);
            let i = 0;
            if (!!poolList) {
                for (const pool of poolList) {
                    // This liquidity call gives the active liquidity on the pool. To get the total liquidity we would need to loop over all positions
                    let poolTotalLiquidity;
                    let sqrtPrice;
                    let tick;
                    let poolBalanceToken0 = 0;
                    let poolBalanceToken1 = 0;
                    const campaignsForPool = campaigns?.filter(campaign => campaign.mainParameter.toLowerCase() === pool.mainParameter.toLowerCase());
                    const prevI = i;
                    try {
                        poolTotalLiquidity = UniswapV4StateViewInterface.decodeFunctionResult("getLiquidity", result[i++].returnData)[0].toString();
                        const poolData = UniswapV4StateViewInterface.decodeFunctionResult("getSlot0", result[i++].returnData);
                        tick = poolData.tick;
                        sqrtPrice = getSqrtRatioAtTick(tick).toString();
                    }
                    catch {
                        log.warn(`merklDynamic data - failed to decode state of pool ${pool.poolId} on ${NETWORK_LABELS[chainId]}`);
                        i = prevI + CALLS_LENGTH;
                        continue;
                    }
                    const decimalsCurrency0 = campaignsForPool[0].campaignParameters.decimalsCurrency0;
                    const decimalsCurrency1 = campaignsForPool[0].campaignParameters.decimalsCurrency1;
                    const symbolCurrency0 = campaignsForPool[0].campaignParameters.symbolCurrency0;
                    const symbolCurrency1 = campaignsForPool[0].campaignParameters.symbolCurrency1;
                    const priceToken0 = (await pricer.get({
                        address: campaignsForPool[0].campaignParameters.currency0,
                        chainId: chainId,
                        symbol: symbolCurrency0,
                    }));
                    const priceToken1 = (await pricer.get({
                        address: campaignsForPool[0].campaignParameters.currency1,
                        chainId: chainId,
                        symbol: symbolCurrency1,
                    }));
                    const { amount0, amount1 } = await computeUniV4PoolTVLFromMostRecentStateSave(chainId, pool.poolId, priceToken0, priceToken1, decimalsCurrency0, decimalsCurrency1);
                    poolBalanceToken0 += amount0;
                    poolBalanceToken1 += amount1;
                    /** Iterate over distributions to compute APRs */
                    for (const campaign of campaignsForPool) {
                        const c = campaign;
                        const amount = BN2Number(c.amount, c.campaignParameters.decimalsRewardToken);
                        const startTimestamp = BN2Number(c.startTimestamp, 0);
                        const endTimestamp = BN2Number(c.endTimestamp, 0);
                        const isLive = moment().unix() > startTimestamp && moment().unix() < endTimestamp;
                        const totalWeight = BN2Number(c.campaignParameters.weightFees, 4) +
                            BN2Number(c.campaignParameters.weightToken0, 4) +
                            BN2Number(c.campaignParameters.weightToken1, 4);
                        // Proportions in percentage
                        const propFees = (BN2Number(c.campaignParameters.weightFees, 4) / totalWeight) * 100;
                        const propToken0 = (BN2Number(c.campaignParameters.weightToken0, 4) / totalWeight) * 100;
                        const propToken1 = (BN2Number(c.campaignParameters.weightToken1, 4) / totalWeight) * 100;
                        let distributionMeanAPR = 0;
                        const blacklistedBalance0 = 0;
                        const blacklistedBalance1 = 0;
                        const blacklistedLiquidity = 0;
                        const aprs = {};
                        const aprBreakdowns = [];
                        let priceRewardToken = 0;
                        if (isLive && c.campaignParameters.symbolRewardToken !== "aglaMerkl") {
                            // priceRewardToken = (await pricer.get({
                            //   address: c.rewardToken,
                            //   chainId: chainId,
                            //   symbol: c.campaignParameters.symbolRewardToken,
                            // })) as number;
                            priceRewardToken = await TokenService.getRewardTokenPrice(campaign);
                            /**
                             * Handle whitelisted/blacklisted addresses to compute APR
                             */
                            if (c.campaignParameters.whitelist.length > 0) {
                                // TODO
                            }
                            else if (c.campaignParameters.blacklist.length > 0) {
                                // TODO
                            }
                            /** Yearly rewards in $ */
                            const yearlyToken0Rewards = (propToken0 * priceRewardToken * amount * (365 * 24 * 3_600)) / (endTimestamp - startTimestamp);
                            const yearlyToken1Rewards = (propToken1 * priceRewardToken * amount * (365 * 24 * 3_600)) / (endTimestamp - startTimestamp);
                            const yearlyFeeRewards = (propFees * priceRewardToken * amount * (365 * 24 * 3_600)) / (endTimestamp - startTimestamp);
                            let poolAPRkey = "";
                            /**
                             * General APR (@notice potentially with a boost)
                             */
                            const poolBalanceToken0WithoutBlacklist = poolBalanceToken0;
                            const poolBalanceToken1WithoutBlacklist = poolBalanceToken1;
                            //   const poolLiquidityWithoutBlacklist = poolTotalLiquidity - (blacklistedLiquidity ?? 0);
                            const tvl = (!!priceToken0 ? poolBalanceToken0 * priceToken0 : 0) +
                                (!!priceToken1 ? poolBalanceToken1 * priceToken1 : 0);
                            distributionMeanAPR = (yearlyToken0Rewards + yearlyToken1Rewards + yearlyFeeRewards) / tvl;
                            distributionMeanAPR = !distributionMeanAPR || Number.isNaN(distributionMeanAPR) ? 0 : distributionMeanAPR;
                            /**
                             * @dev We cannot include a whitelisted distrib apr into the mean APR
                             */
                            if (c.campaignParameters.whitelist.length === 0) {
                                poolAPRkey = "Average APR (rewards / pool TVL)";
                                if (!aprs[poolAPRkey])
                                    aprs[poolAPRkey] = 0;
                                aprs[poolAPRkey] += distributionMeanAPR;
                                // @Hugo wip: new way to structure aprBreakdowns
                                aprBreakdowns.push({
                                    address: pool.poolId,
                                    value: distributionMeanAPR,
                                    type: EAprBreakdownType.AVERAGE,
                                    label: "Average APR (rewards / pool TVL)",
                                });
                                // APR per token
                                poolAPRkey = `APR for holding ${c.campaignParameters.symbolCurrency0} in pool`;
                                if (!aprs[poolAPRkey])
                                    aprs[poolAPRkey] = 0;
                                aprs[poolAPRkey] += yearlyToken0Rewards / (poolBalanceToken0WithoutBlacklist * priceToken0);
                                // @Hugo wip: new way to structure aprBreakdowns
                                aprBreakdowns.push({
                                    address: pool.poolId,
                                    value: yearlyToken0Rewards / (poolBalanceToken0WithoutBlacklist * priceToken0),
                                    type: EAprBreakdownType.TOKEN1,
                                    label: c.campaignParameters.symbolCurrency0,
                                });
                                poolAPRkey = `APR for holding  ${c.campaignParameters.symbolCurrency1} in pool`;
                                if (!aprs[poolAPRkey])
                                    aprs[poolAPRkey] = 0;
                                aprs[poolAPRkey] += yearlyToken1Rewards / (poolBalanceToken1WithoutBlacklist * priceToken1);
                                // @Hugo wip: new way to structure aprBreakdowns
                                aprBreakdowns.push({
                                    address: pool.poolId,
                                    value: yearlyToken1Rewards / (poolBalanceToken1WithoutBlacklist * priceToken1),
                                    type: EAprBreakdownType.TOKEN2,
                                    label: c.campaignParameters.symbolCurrency1,
                                });
                            }
                            else {
                                for (const _ of c.campaignParameters.whitelist) {
                                    const poolAPRkey = `Whitelisted campaign on UniswapV4 via address ${shortenAddress(c.campaignParameters.whitelist[0])} Average APR`;
                                    if (!aprs[poolAPRkey])
                                        aprs[poolAPRkey] = 0;
                                }
                                aprs[poolAPRkey] += distributionMeanAPR;
                            }
                        }
                        const rewardTokens = await TokenService.findManyOrCreate([
                            { chainId: campaign.chainId, address: campaign.rewardToken },
                        ]);
                        const rewardToken = rewardTokens[0];
                        distributionMeanAPR = rewardToken.isPoint ? distributionMeanAPR / 365 / 100 : distributionMeanAPR;
                        dynamicData.push({
                            ...campaign,
                            apr: distributionMeanAPR,
                            aprs,
                            aprBreakdowns,
                            blacklistedBalance0,
                            blacklistedBalance1,
                            blacklistedLiquidity,
                            poolBalanceToken0,
                            poolBalanceToken1,
                            poolTotalLiquidity,
                            sqrtPrice,
                            tick: tick,
                            priceRewardToken: priceRewardToken,
                            tvl: (!!priceToken0 ? poolBalanceToken0 * priceToken0 : 0) +
                                (!!priceToken1 ? poolBalanceToken1 * priceToken1 : 0),
                        });
                    }
                }
            }
        }
        return dynamicData;
    }
}
