import { Redis } from "@/cache";
import { RewardConvertorService } from "@/modules/v4/reward/reward.converter";
import { log } from "@/utils/logger";
import { AMM, ANGLE_NETWORKS, Campaign, NETWORK_LABELS, } from "@sdk";
import Big from "big.js";
import { utils } from "ethers";
const fetchCachedData = async (chainIds, onlyLive) => {
    if (onlyLive === undefined) {
        onlyLive = false;
    }
    const cacheKeys = chainIds.map(chainId => onlyLive ? `LiveCampaignsOldFormat_${chainId}` : `CampaignsOldFormat_${chainId}`);
    return await Redis.findMany(cacheKeys);
};
export async function getClamsInfo(chainIds, AMMs, user, onlyLive) {
    if (!chainIds && !user && !AMMs) {
        const cachedData = await fetchCachedData(ANGLE_NETWORKS.merkl);
        const result = ANGLE_NETWORKS.merkl.reduce((acc, chainId, index) => {
            if (!cachedData[index]) {
                log.error("Merkl cache", `Data for ${NETWORK_LABELS[chainId]} not found in cache`);
            }
            else {
                acc[chainId] = cachedData[index];
            }
            return acc;
        }, {});
        return result;
    }
    if (!chainIds) {
        chainIds = ANGLE_NETWORKS.merkl;
    }
    if (onlyLive === undefined) {
        onlyLive = false;
    }
    const cachedData = await fetchCachedData(chainIds, onlyLive);
    let chainData = [];
    if (!!user) {
        chainData = await Redis.findMany(chainIds.map(chainId => `MerklChainData_${chainId}`));
    }
    /** Parallel computation of data for each chain */
    const result = {};
    const promises = chainIds.map((chainId, index) => (async () => {
        if (!cachedData[index]) {
            return;
        }
        log.local(`Redis: ${Object.keys(cachedData[index]?.pools ?? {}).length} pools found on ${NETWORK_LABELS[chainId]}`);
        /** Filter pools if an AMM filter is required */
        const filteredPools = {};
        for (const key of Object.keys(cachedData[index]?.pools ?? {})) {
            if (!!AMMs &&
                AMMs.length > 0 &&
                !!AMM[cachedData[index].pools[key].amm] &&
                AMMs.indexOf(AMM[cachedData[index].pools[key].amm].toLowerCase()) === -1) {
                continue;
            }
            filteredPools[key] = cachedData[index].pools[key];
        }
        cachedData[index].pools = filteredPools;
        /** Fetch user specific data */
        if (!!user &&
            utils.isAddress(user) &&
            utils.getAddress(user) !== "0xeeeeeEAaAeEEeEEeEeEEEeEEeEeEEEeeeEeeeEee" &&
            !!cachedData[index].merkleRoot) {
            cachedData[index] = await RewardConvertorService.convertV4toMerklV2(user, chainId, cachedData[index]);
            log.local(`Merkl: ${Object.keys(cachedData[index]?.pools ?? {}).filter(k => cachedData[index].pools[k].userBalanceToken0 > 0 ||
                cachedData[index].pools[k].userBalanceToken1 > 0).length} pool with a user position found on ${NETWORK_LABELS[chainId]}`);
        }
        /** Fill result */
        result[chainId] = cachedData[index];
    })());
    await Promise.all(promises);
    return result;
}
export function campaignsToOldFormat(campaignData, merklChainData) {
    const res = {};
    res.merkleRoot = merklChainData.merkleRoot;
    res.message = merklChainData.message;
    res.validRewardTokens = merklChainData.validRewardTokens;
    res.pools = {};
    const pools = {};
    for (const [type_mainParameter, campaigns] of Object.entries(campaignData)) {
        // if not a CLAMM campaign, skip
        if (!type_mainParameter.startsWith("2_")) {
            continue;
        }
        const mainParameter = type_mainParameter.split("_")[1];
        for (const campaign of Object.values(campaigns)) {
            if (campaign.campaignType !== Campaign.CLAMM) {
                continue;
            }
            if (!pools[mainParameter]) {
                pools[mainParameter] = {
                    alm: campaign.forwarders?.reduce((prev, curr) => {
                        if (!prev[utils.getAddress(curr.almAddress)]) {
                            prev[utils.getAddress(curr.almAddress)] = {
                                ...curr,
                                almAddress: utils.getAddress(curr.almAddress),
                            };
                        }
                        else {
                            prev[utils.getAddress(curr.almAddress)].almAPR =
                                (!!prev[utils.getAddress(curr.almAddress)].almAPR
                                    ? prev[utils.getAddress(curr.almAddress)].almAPR
                                    : 0) + (curr.almAPR ?? 0);
                        }
                        return prev;
                    }, {}),
                    amm: campaign.amm,
                    ammAlgo: campaign.ammAlgo,
                    ammAlgoName: campaign.ammAlgoName,
                    ammName: campaign.ammName,
                    aprs: campaign.aprs,
                    chainId: campaign.chainId,
                    decimalsToken0: campaign.campaignParameters.decimalsToken0,
                    decimalsToken1: campaign.campaignParameters.decimalsToken1,
                    disputeLive: merklChainData.disputeLive,
                    distributionData: [],
                    endOfDisputePeriod: merklChainData.endOfDisputePeriod,
                    meanAPR: campaign.apr,
                    pool: campaign.campaignParameters.poolAddress,
                    poolBalanceToken0: campaign.poolBalanceToken0,
                    poolBalanceToken1: campaign.poolBalanceToken1,
                    poolFee: Number.parseFloat(campaign.campaignParameters.poolFee),
                    poolTotalLiquidity: campaign.poolTotalLiquidity,
                    rewardsPerToken: {},
                    symbolToken0: campaign.campaignParameters.symbolToken0,
                    symbolToken1: campaign.campaignParameters.symbolToken1,
                    tick: campaign.tick,
                    token0: campaign.campaignParameters.token0,
                    token1: campaign.campaignParameters.token1,
                    tvl: campaign.tvl,
                };
            }
            else {
                pools[mainParameter].meanAPR += campaign.apr;
                if (!!campaign.aprs) {
                    for (const [key, value] of Object.entries(campaign.aprs)) {
                        pools[mainParameter].aprs[key] =
                            (!!pools[mainParameter].aprs[key] ? pools[mainParameter].aprs[key] : 0) + (value ?? 0);
                    }
                }
                if (!!campaign.forwarders) {
                    for (const almDetails of campaign.forwarders) {
                        if (!pools[mainParameter]?.alm?.[utils.getAddress(almDetails.almAddress)]) {
                            pools[mainParameter].alm[utils.getAddress(almDetails.almAddress)] = almDetails;
                        }
                        else {
                            pools[mainParameter].alm[utils.getAddress(almDetails.almAddress)].almAPR =
                                (!!pools[mainParameter].alm[utils.getAddress(almDetails.almAddress)].almAPR
                                    ? pools[mainParameter].alm[utils.getAddress(almDetails.almAddress)].almAPR
                                    : 0) + (almDetails.almAPR ?? 0);
                        }
                    }
                }
            }
            const amountDecimal = Number.parseFloat(new Big(campaign.amount).div(new Big(10).pow(campaign.campaignParameters.decimalsRewardToken)).toString());
            pools[mainParameter].distributionData.push({
                amount: amountDecimal,
                apr: campaign?.apr,
                blacklist: campaign.campaignParameters.blacklist,
                blacklistedBalance0: campaign.blacklistedBalance0,
                blacklistedBalance1: campaign.blacklistedBalance1,
                blacklistedLiquidity: campaign.blacklistedLiquidity,
                breakdown: {},
                decimalsRewardToken: campaign.campaignParameters.decimalsRewardToken,
                endTimestamp: campaign.endTimestamp,
                id: campaign.campaignId,
                isLive: campaign.isLive,
                isMock: campaign.isMock,
                isOutOfRangeIncentivized: campaign.campaignParameters.isOutOfRangeIncentivized,
                propFees: campaign.campaignParameters.weightFees / 100,
                propToken0: campaign.campaignParameters.weightToken0 / 100,
                propToken1: campaign.campaignParameters.weightToken1 / 100,
                rewardToken: campaign.rewardToken,
                startTimestamp: campaign.startTimestamp,
                symbolRewardToken: campaign.campaignParameters.symbolRewardToken,
                unclaimed: 0,
                whitelist: campaign.campaignParameters.whitelist,
            });
        }
        res.pools = pools;
    }
    return res;
}
