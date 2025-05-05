// @ts-nocheck
import { VEST_TOKEN } from "@/engine/deprecated/dynamicData/implementations/Vest";
import { Campaign, Forwarder, MorphoSubCampaignType, } from "@sdk";
import { utils } from "ethers";
function prepareClammFetch(previous, campaign) {
    if (campaign.campaignType !== Campaign.CLAMM) {
        return previous;
    }
    const amm = campaign.campaignParameters.amm;
    // if (Object.values(PriorityAMM?.[campaign.chainId as any] ?? {}).includes(amm)) amm = AMM.UniswapV3;
    if (!previous[amm]) {
        previous[amm] = {};
    }
    if (!previous[amm][campaign.campaignParameters.poolAddress]) {
        const forwarders = {};
        if (campaign.forwarders && campaign.forwarders.length > 0) {
            for (const forwarder of campaign.forwarders) {
                forwarders[utils.getAddress(forwarder.almAddress)] = forwarder;
            }
        }
        previous[amm][campaign.campaignParameters.poolAddress] = {
            token0: campaign.campaignParameters.token0,
            token1: campaign.campaignParameters.token1,
            symbolToken0: campaign.campaignParameters.symbolToken0,
            symbolToken1: campaign.campaignParameters.symbolToken1,
            decimalsToken0: campaign.campaignParameters.decimalsToken0,
            decimalsToken1: campaign.campaignParameters.decimalsToken1,
            forwarders: forwarders,
            poolBalanceToken0: campaign.poolBalanceToken0,
            poolBalanceToken1: campaign.poolBalanceToken1,
            poolTotalLiquidity: campaign.poolTotalLiquidity,
            campaigns: {},
        };
    }
    else {
        const forwarders = previous[amm][campaign.campaignParameters.poolAddress].forwarders;
        if (campaign.forwarders && campaign.forwarders.length > 0) {
            for (const forwarder of campaign.forwarders) {
                if (!forwarders[utils.getAddress(forwarder.almAddress)]) {
                    forwarders[utils.getAddress(forwarder.almAddress)] = forwarder;
                }
            }
        }
        previous[amm][campaign.campaignParameters.poolAddress].forwarders = forwarders;
    }
    previous[amm][campaign.campaignParameters.poolAddress].campaigns[campaign.campaignId] = {
        whitelist: campaign.campaignParameters.whitelist,
        blacklist: campaign.campaignParameters.blacklist,
        rewardToken: campaign.rewardToken,
        decimalsRewardToken: campaign.campaignParameters.decimalsRewardToken,
        symbolRewardToken: campaign.campaignParameters.symbolRewardToken,
        startTimestamp: campaign.startTimestamp,
        endTimestamp: campaign.endTimestamp,
        isOutOfRangeIncentivized: campaign.campaignParameters.isOutOfRangeIncentivized,
        blacklistedLiquidity: campaign.blacklistedLiquidity,
        blacklistedBalance0: campaign.blacklistedBalance0,
        blacklistedBalance1: campaign.blacklistedBalance1,
        amount: Number.parseFloat((BigInt(campaign.amount) / BigInt(10 ** campaign.campaignParameters.decimalsRewardToken)).toString()),
        propToken0: campaign.campaignParameters.weightToken0 / 1e5,
        propToken1: campaign.campaignParameters.weightToken1 / 1e5,
        propFees: campaign.campaignParameters.weightFees / 1e5,
        mainParameter: campaign.mainParameter,
    };
    return previous;
}
function prepareERC20Fetch(previous, campaign) {
    if (campaign.campaignType !== Campaign.ERC20) {
        return previous;
    }
    if (!previous[campaign.campaignParameters.targetToken]) {
        previous[campaign.campaignParameters.targetToken] = {
            decimals: campaign.campaignParameters.decimalsTargetToken,
            totalSupplyTargetToken: campaign.totalSupplyTargetToken,
            priceTargetToken: !!campaign.typeInfo?.priceTargetToken ? campaign.typeInfo.priceTargetToken : 0,
            campaigns: {},
        };
    }
    previous[campaign.campaignParameters.targetToken].campaigns[campaign.campaignId] = {
        rewardToken: campaign.rewardToken,
        symbolRewardToken: campaign.campaignParameters.symbolRewardToken,
        amount: Number.parseFloat((BigInt(campaign.amount) / BigInt(10 ** campaign.campaignParameters.decimalsRewardToken)).toString()),
    };
    return previous;
}
function prepareDolomiteFetch(previous, campaign) {
    if (campaign.campaignType !== Campaign.DOLOMITE) {
        return previous;
    }
    if (!previous[campaign.mainParameter]) {
        previous[campaign.mainParameter] = {
            symbol: campaign.campaignParameters.symbolTargetToken,
            decimals: campaign.campaignParameters.decimalsTargetToken,
            targetToken: campaign.campaignParameters.targetToken,
            totalSupplyTargetToken: campaign.totalSupplyTargetToken,
            subCampaignType: campaign.campaignParameters.subCampaignType,
            marketIndex: campaign.campaignParameters.marketIndex,
            campaigns: {},
        };
    }
    previous[campaign.mainParameter].campaigns[campaign.campaignId] = {
        rewardToken: campaign.rewardToken,
        symbolRewardToken: campaign.campaignParameters.symbolRewardToken,
        amount: Number.parseFloat((BigInt(campaign.amount) / BigInt(10 ** campaign.campaignParameters.decimalsRewardToken)).toString()),
    };
    return previous;
}
/**
 * Silo
 */
function addForwarderToSiloCampaign(previousForwarder, // TODO @BaptistG typings
newForward) {
    if (!previousForwarder[newForward.sender]) {
        previousForwarder[newForward.sender] = [];
    }
    if (newForward.forwarderType === Forwarder.ERC20) {
        if (!previousForwarder[newForward.sender].includes(newForward.token)) {
            previousForwarder[newForward.sender].push(newForward.token);
        }
    }
    return previousForwarder;
}
function prepareSiloFetch(previous, campaign) {
    if (campaign.campaignType !== Campaign.SILO) {
        return previous;
    }
    if (!previous["allForwarders"]) {
        previous["allForwarders"] = {};
        previous["mainParameters"] = {};
    }
    if (!previous["mainParameters"][campaign.mainParameter]) {
        previous["mainParameters"][campaign.mainParameter] = {
            token: campaign.campaignParameters.targetToken,
            decimals: campaign.campaignParameters.decimalsTargetToken,
            symbol: campaign.campaignParameters.symbolTargetToken,
            priceTargetToken: !!campaign.totalSupplyTargetToken && !!campaign.tvl ? campaign.tvl / campaign.totalSupplyTargetToken : 0,
            campaigns: {},
            allForwarders: {},
        };
    }
    const forwarders = {};
    if (campaign.campaignParameters.forwarders && campaign.campaignParameters.forwarders.length > 0) {
        for (const forwarder of campaign.campaignParameters.forwarders) {
            if (campaign.campaignParameters.whitelist.length === 0 && campaign.campaignParameters.blacklist.length === 0) {
                forwarders[utils.getAddress(forwarder.sender)] = forwarder;
                previous["allForwarders"] = addForwarderToSiloCampaign(previous["allForwarders"], forwarder);
                previous["mainParameters"][campaign.mainParameter].allForwarders = addForwarderToSiloCampaign(previous["mainParameters"][campaign.mainParameter].allForwarders, forwarder);
            }
            else if (campaign.campaignParameters.whitelist.length > 0) {
                if (campaign.campaignParameters.whitelist.includes(utils.getAddress(forwarder.sender))) {
                    forwarders[utils.getAddress(forwarder.sender)] = forwarder;
                    previous["allForwarders"] = addForwarderToSiloCampaign(previous["allForwarders"], forwarder);
                    previous["mainParameters"][campaign.mainParameter].allForwarders = addForwarderToSiloCampaign(previous["mainParameters"][campaign.mainParameter].allForwarders, forwarder);
                }
            }
            else if (campaign.campaignParameters.blacklist.length > 0) {
                if (!campaign.campaignParameters.blacklist.includes(utils.getAddress(forwarder.sender))) {
                    forwarders[utils.getAddress(forwarder.sender)] = forwarder;
                    previous["allForwarders"] = addForwarderToSiloCampaign(previous["allForwarders"], forwarder);
                    previous["mainParameters"][campaign.mainParameter].allForwarders = addForwarderToSiloCampaign(previous["mainParameters"][campaign.mainParameter].allForwarders, forwarder);
                }
            }
        }
    }
    previous["mainParameters"][campaign.mainParameter].campaigns[campaign.campaignId] = {
        rewardToken: campaign.rewardToken,
        symbolRewardToken: campaign.campaignParameters.symbolRewardToken,
        amount: Number.parseFloat((BigInt(campaign.amount) / BigInt(10 ** campaign.campaignParameters.decimalsRewardToken)).toString()),
        forwarders: forwarders,
    };
    return previous;
}
/**
 * Morpho
 */
function prepareMorphoFetch(previous, campaign) {
    if (campaign.campaignType !== Campaign.MORPHO) {
        return previous;
    }
    if (campaign.campaignSubType === MorphoSubCampaignType.META) {
        previous[campaign.mainParameter] = {
            rewardToken: campaign.rewardToken,
            targetToken: campaign.campaignParameters.targetToken,
            symbolRewardToken: campaign.campaignParameters.symbolRewardToken,
            subtype: campaign.campaignSubType,
            tvl: campaign.tvl,
            marketId: campaign.campaignParameters.marketId,
            decimals: campaign.campaignParameters.decimalsTargetToken,
            totalSupplyTargetToken: campaign.totalSupplyTargetToken,
            amount: Number.parseFloat((BigInt(campaign.amount) / BigInt(10 ** campaign.campaignParameters.decimalsRewardToken)).toString()),
            forwarders: {},
        };
    }
    const forwarders = {};
    if (campaign.campaignParameters.forwarders && campaign.campaignParameters.forwarders.length > 0) {
        for (const forwarder of campaign.campaignParameters.forwarders) {
            forwarders[utils.getAddress(forwarder.sender)] = forwarder;
        }
    }
    previous[campaign.mainParameter] = {
        rewardToken: campaign.rewardToken,
        targetToken: campaign.campaignParameters.targetToken,
        symbolRewardToken: campaign.campaignParameters.symbolRewardToken,
        subtype: campaign.campaignSubType,
        tvl: campaign.tvl,
        marketId: campaign.campaignParameters.marketId,
        forwarders: forwarders,
        decimals: campaign.campaignParameters.decimalsTargetToken,
        totalSupplyTargetToken: campaign.totalSupplyTargetToken,
        amount: Number.parseFloat((BigInt(campaign.amount) / BigInt(10 ** campaign.campaignParameters.decimalsRewardToken)).toString()),
    };
    return previous;
}
/**
 * Badger
 */
function prepareBadgerFetch(previous, campaign) {
    if (campaign.campaignType !== Campaign.BADGER) {
        return previous;
    }
    const forwarders = {};
    if (campaign.campaignParameters.forwarders && campaign.campaignParameters.forwarders.length > 0) {
        for (const forwarder of campaign.campaignParameters.forwarders) {
            forwarders[utils.getAddress(forwarder.sender)] = forwarder;
        }
    }
    previous[campaign.mainParameter] = {
        rewardToken: campaign.rewardToken,
        targetToken: campaign.campaignParameters.targetToken,
        symbolRewardToken: campaign.campaignParameters.symbolRewardToken,
        subtype: campaign.campaignSubType,
        tvl: campaign.tvl,
        forwarders: forwarders,
        decimals: campaign.campaignParameters.decimalsTargetToken,
        totalSupplyTargetToken: campaign.totalSupplyTargetToken,
        amount: Number.parseFloat((BigInt(campaign.amount) / BigInt(10 ** campaign.campaignParameters.decimalsRewardToken)).toString()),
    };
    return previous;
}
/**
 * Ajna
 */
function prepareAjnaFetch(previous, campaign) {
    if (campaign.campaignType !== Campaign.AJNA) {
        return previous;
    }
    const forwarders = {};
    if (campaign.campaignParameters.forwarders && campaign.campaignParameters.forwarders.length > 0) {
        for (const forwarder of campaign.campaignParameters.forwarders) {
            forwarders[utils.getAddress(forwarder.sender)] = forwarder;
        }
    }
    previous[campaign.mainParameter] = {
        rewardToken: campaign.rewardToken,
        symbolRewardToken: campaign.campaignParameters.symbolRewardToken,
        subtype: campaign.campaignSubType,
        tvl: campaign.tvl,
        forwarders: forwarders,
        quoteToken: campaign.campaignParameters.quoteToken,
        poolId: campaign.campaignParameters.poolId,
        decimalsQuoteToken: campaign.campaignParameters.decimalsQuoteToken,
        totalSupplyTargetToken: campaign.totalSupplyTargetToken,
        computedtotalSupply: campaign.computedtotalSupply,
        amount: Number.parseFloat((BigInt(campaign.amount) / BigInt(10 ** campaign.campaignParameters.decimalsRewardToken)).toString()),
    };
    return previous;
}
/**
 * Euler
 */
function prepareEulerFetch(previous, campaign) {
    if (campaign.campaignType !== Campaign.EULER) {
        return previous;
    }
    if (!previous[campaign.campaignParameters.targetToken]) {
        previous[campaign.campaignParameters.targetToken] = {
            decimals: campaign.campaignParameters.decimalsTargetToken,
            totalSupplyTargetToken: campaign.totalSupplyTargetToken,
            priceTargetToken: !!campaign.typeInfo?.priceTargetToken ? campaign.typeInfo.priceTargetToken : 0,
            campaigns: {},
        };
    }
    previous[campaign.campaignParameters.targetToken].campaigns[campaign.campaignId] = {
        rewardToken: campaign.rewardToken,
        symbolRewardToken: campaign.campaignParameters.symbolRewardToken,
        amount: Number.parseFloat((BigInt(campaign.amount) / BigInt(10 ** campaign.campaignParameters.decimalsRewardToken)).toString()),
    };
    return previous;
}
function prepareCompoundFetch(previous, campaign) {
    if (campaign.campaignType !== Campaign.COMPOUND) {
        return previous;
    }
    const forwarders = {};
    if (campaign.campaignParameters.forwarders && campaign.campaignParameters.forwarders.length > 0) {
        for (const forwarder of campaign.campaignParameters.forwarders) {
            forwarders[utils.getAddress(forwarder.sender)] = forwarder;
        }
    }
    previous[campaign.mainParameter] = {
        rewardToken: campaign.rewardToken,
        symbolRewardToken: campaign.campaignParameters.symbolRewardToken,
        subtype: campaign.campaignSubType,
        compFork: campaign.campaignParameters.compFork,
        tvl: campaign.tvl,
        forwarders: forwarders,
        targetToken: campaign.campaignParameters.targetToken,
        decimalsTargetToken: campaign.campaignParameters.decimalsTargetToken,
        totalSupplyTargetToken: campaign.totalSupplyTargetToken,
        underlyingToken: campaign.campaignParameters.underlyingToken,
        symbolUnderlyingToken: campaign.campaignParameters.symbolUnderlyingToken,
        decimalsUnderlyingToken: campaign.campaignParameters.decimalsUnderlyingToken,
        symbolTargetToken: campaign.campaignParameters.symbolTargetToken,
        amount: Number.parseFloat((BigInt(campaign.amount) / BigInt(10 ** campaign.campaignParameters.decimalsRewardToken)).toString()),
    };
    return previous;
}
function prepareEigenLayerFetch(previous, campaign) {
    if (campaign.campaignType !== Campaign.EIGENLAYER) {
        return previous;
    }
    const forwarders = {};
    if (campaign.campaignParameters.forwarders && campaign.campaignParameters.forwarders.length > 0) {
        for (const forwarder of campaign.campaignParameters.forwarders) {
            forwarders[utils.getAddress(forwarder.sender)] = forwarder;
        }
    }
    previous[campaign.mainParameter] = {
        rewardToken: campaign.rewardToken,
        symbolRewardToken: campaign.campaignParameters.symbolRewardToken,
        tvl: campaign.tvl,
        forwarders: forwarders,
        targetToken: campaign.campaignParameters.strategy,
        decimalsTargetToken: campaign.campaignParameters.decimalsUnderlyingToken,
        totalSupplyTargetToken: campaign.totalSupplyTargetToken,
        underlyingToken: campaign.campaignParameters.underlyingToken,
        symbolUnderlyingToken: campaign.campaignParameters.symbolUnderlyingToken,
        decimals: campaign.campaignParameters.decimalsUnderlyingToken,
        amount: Number.parseFloat((BigInt(campaign.amount) / BigInt(10 ** campaign.campaignParameters.decimalsRewardToken)).toString()),
    };
    return previous;
}
function prepareVestFetch(previous, campaign) {
    if (campaign.campaignType !== Campaign.VEST) {
        return previous;
    }
    const forwarders = {};
    if (campaign.campaignParameters.forwarders && campaign.campaignParameters.forwarders.length > 0) {
        for (const forwarder of campaign.campaignParameters.forwarders) {
            forwarders[utils.getAddress(forwarder.sender)] = forwarder;
        }
    }
    previous[campaign.mainParameter] = {
        rewardToken: campaign.rewardToken,
        symbolRewardToken: campaign.campaignParameters.symbolRewardToken,
        tvl: campaign.tvl,
        forwarders: forwarders,
        targetToken: VEST_TOKEN,
        decimalsTargetToken: 6,
        totalSupplyTargetToken: campaign.totalSupplyTargetToken,
        decimals: 6,
        amount: Number.parseFloat((BigInt(campaign.amount) / BigInt(10 ** campaign.campaignParameters.decimalsRewardToken)).toString()),
    };
    return previous;
}
export function prepareFetch(type, previous, // FIXME
campaign //FIXME
) {
    switch (type) {
        case Campaign.CLAMM:
            return prepareClammFetch(previous, campaign);
        case Campaign.ERC20:
            return prepareERC20Fetch(previous, campaign);
        case Campaign.SILO:
            return prepareSiloFetch(previous, campaign);
        case Campaign.DOLOMITE:
            return prepareDolomiteFetch(previous, campaign);
        case Campaign.MORPHO:
            return prepareMorphoFetch(previous, campaign);
        case Campaign.BADGER:
            return prepareBadgerFetch(previous, campaign);
        case Campaign.EULER:
            return prepareEulerFetch(previous, campaign);
        case Campaign.AJNA:
            return prepareAjnaFetch(previous, campaign);
        case Campaign.COMPOUND:
            return prepareCompoundFetch(previous, campaign);
        case Campaign.EIGENLAYER:
            return prepareEigenLayerFetch(previous, campaign);
        default:
            return previous;
    }
}
