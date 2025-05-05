import { TTLPresets } from "@/modules/v4/cache/cache.model";
// @ts-nocheck
import { CacheService } from "@/modules/v4/cache/cache.service";
import { ChainInteractionService } from "@/modules/v4/chainInteraction/chainInteraction.service";
import { log } from "@/utils/logger";
import { Pricer } from "@/utils/pricer";
import { providers } from "@/utils/providers";
import { ALM, AMMAlgorithmMapping, BN2Number, NETWORK_LABELS, NFTManagerAddress, NonFungiblePositionManagerInterface, PoolInterface, PoolState, SqrtPrice, YEAR, getAmountsForLiquidity, getSupportedNFPWrapperMapping, getTickAtSqrtRatio, spNFTInterface, } from "@sdk";
import { BigNumber, Contract, utils } from "ethers";
import JSBI from "jsbi";
import { fetchAlmPositions } from "./thegraph/fetchAlmPositions";
import { fetchAmmPositions } from "./thegraph/fetchAmmPositions";
import { fetchFarmedPositions } from "./thegraph/fetchFarmedPositions";
export async function getClammUserPositions(user, chainId, poolsByAmm, withIndividualAPRs = true) {
    const pricer = await Pricer.load();
    /**
     * Fetch user positions
     */
    const promisePositions = [
        fetchAmmPositions(chainId, user, (!!poolsByAmm ? Object.keys(poolsByAmm) : []).map(x => Number(x))),
        fetchAlmPositions(chainId, user),
    ];
    /**
     * Per pool mapping to store all ids of positions that were wrapped into a farm
     * @notice see line 110 for more context
     */
    const farmedTokenIds = {};
    const calls = [];
    const callsByAmm = {};
    let startingIndex = 0;
    /** Add on onchain calls at the pool level */
    if (!!poolsByAmm) {
        for (const [amm, poolDatas] of Object.entries(poolsByAmm)) {
            const pools = Object.keys(poolDatas);
            if (!callsByAmm[amm]) {
                callsByAmm[amm] = {
                    start: startingIndex,
                    poolCalls: pools.length,
                    wrapperCalls: {},
                };
            }
            for (const pool of pools) {
                calls.push({
                    allowFailure: true,
                    callData: PoolInterface[AMMAlgorithmMapping[amm]].encodeFunctionData(PoolState[AMMAlgorithmMapping[amm]]),
                    target: pool,
                });
                startingIndex++;
            }
            if (getSupportedNFPWrapperMapping(chainId, amm).length > 0) {
                farmedTokenIds[amm] = await CacheService.wrap(TTLPresets.MIN_5, fetchFarmedPositions, chainId, [user], Number(amm));
            }
            for (const wrapper of getSupportedNFPWrapperMapping(chainId, amm)) {
                if (!!farmedTokenIds &&
                    !!farmedTokenIds?.[amm] &&
                    !!farmedTokenIds?.[amm]?.[wrapper] &&
                    farmedTokenIds?.[amm]?.[wrapper].length > 0) {
                    if (!callsByAmm[amm].wrapperCalls[wrapper]) {
                        callsByAmm[amm].wrapperCalls[wrapper] = 0;
                    }
                    farmedTokenIds?.[amm]?.[wrapper]
                        ?.map((pos) => pos.id)
                        ?.forEach((tokenId) => {
                        calls.push({
                            allowFailure: true,
                            callData: NonFungiblePositionManagerInterface[AMMAlgorithmMapping[amm]].encodeFunctionData("positions", [tokenId]),
                            target: NFTManagerAddress[chainId][amm],
                        });
                        callsByAmm[amm].wrapperCalls[wrapper]++;
                        startingIndex++;
                    });
                }
            }
        }
    }
    const result = await ChainInteractionService(chainId).fetchState(calls);
    const [promisePosition, promiseALMPosition] = await Promise.all(promisePositions);
    const positions = Object.values((await Promise.resolve(promisePosition))).reduce((acc, val) => {
        return acc.concat(val.nft).concat(val.direct);
    }, []);
    /** Fill user positions */
    const finalRes = {};
    if (!!poolsByAmm) {
        for (const [amm, poolDatas] of Object.entries(poolsByAmm)) {
            const pools = Object.keys(poolDatas);
            let i = callsByAmm[amm].start;
            for (const p of pools) {
                try {
                    const res = {
                        userPositions: [],
                        apr: {},
                        userTVL: 0,
                        userBalanceToken0: 0,
                        userBalanceToken1: 0,
                        userTotalLiquidity: 0,
                        userInRangeLiquidity: 0,
                    };
                    const updateUserPosition = (x) => {
                        res.userPositions?.push(x);
                        // Update global data logic
                        res.userTVL += x.tvl ?? 0;
                        res.userBalanceToken0 += x.balance0 ?? 0;
                        res.userBalanceToken1 += x.balance1 ?? 0;
                        res.userTotalLiquidity += x.totalLiquidity ?? 0;
                        res.userInRangeLiquidity += x.inRangeLiquidity ?? 0;
                    };
                    const sqrtPriceX96 = PoolInterface[AMMAlgorithmMapping[amm]]
                        .decodeFunctionResult(PoolState[AMMAlgorithmMapping[amm]], result[i++].returnData)[SqrtPrice[AMMAlgorithmMapping[amm]]].toString();
                    res.tick = getTickAtSqrtRatio(JSBI.BigInt(sqrtPriceX96));
                    res.userTVL = 0;
                    res.userBalanceToken0 = 0;
                    res.userBalanceToken1 = 0;
                    res.userTotalLiquidity = 0;
                    res.userInRangeLiquidity = 0;
                    const priceToken0 = (await pricer.get({
                        address: poolDatas[p].token0,
                        chainId,
                        symbol: poolDatas[p].symbolToken0,
                    }));
                    const priceToken1 = (await pricer.get({
                        address: poolDatas[p].token1,
                        chainId,
                        symbol: poolDatas[p].symbolToken1,
                    }));
                    /** 1_ User Liquidity Positions */
                    const userNonALMPositions = positions?.filter((x) => utils.getAddress(x.pool.id) === utils.getAddress(p));
                    for (const pos of userNonALMPositions) {
                        try {
                            const [amount0, amount1] = getAmountsForLiquidity(sqrtPriceX96, Number.parseInt(pos.tickLower), Number.parseInt(pos.tickUpper), BigNumber.from(pos.liquidity));
                            const balance0 = BN2Number(amount0, poolDatas[p].decimalsToken0);
                            const balance1 = BN2Number(amount1, poolDatas[p].decimalsToken1);
                            const tvl = balance0 * priceToken0 + balance1 * priceToken1;
                            updateUserPosition({
                                balance0,
                                balance1,
                                id: pos.id,
                                inRangeLiquidity: balance0 > 0 && balance1 > 0 ? BN2Number(pos.liquidity) : 0,
                                lowerTick: Number.parseInt(pos.tickLower),
                                origin: -1,
                                totalLiquidity: BN2Number(pos.liquidity),
                                tvl,
                                upperTick: Number.parseInt(pos.tickUpper),
                            });
                        }
                        catch {
                            log.local(`Merkl User Data: error handling positions for pool ${NETWORK_LABELS[chainId]}-${p}`);
                        }
                    }
                    /** 2_ User Positions through ALMs */
                    for (const almAddress of Object.keys(promiseALMPosition).filter(almAddress => !!poolDatas[p].forwarders[utils.getAddress(almAddress)])) {
                        try {
                            const almDetail = poolDatas[p].forwarders[utils.getAddress(almAddress)];
                            let balance;
                            if (almDetail.origin === ALM.spNFT) {
                                const tokenId = promiseALMPosition[almAddress];
                                balance = (await new Contract(almAddress, spNFTInterface, providers[chainId]).getStakingPosition(tokenId))[0];
                            }
                            else {
                                balance = promiseALMPosition[almAddress];
                            }
                            for (const pos of almDetail.positions) {
                                updateUserPosition({
                                    almAddress: almAddress, // FIXME: typing is bypassed here
                                    balance0: (BN2Number(balance) * pos?.balance0) / almDetail.totalSupply,
                                    balance1: (BN2Number(balance) * pos?.balance1) / almDetail.totalSupply,
                                    id: pos.id,
                                    inRangeLiquidity: (BN2Number(balance) * pos?.inRangeLiquidity) / almDetail.totalSupply,
                                    lowerTick: pos.lowerTick,
                                    origin: almDetail.origin,
                                    totalLiquidity: (BN2Number(balance) * pos?.totalLiquidity) / almDetail.totalSupply,
                                    tvl: (BN2Number(balance) * pos?.tvl) / almDetail.totalSupply,
                                    upperTick: pos.upperTick,
                                });
                            }
                        }
                        catch (_error) {
                            log.local(`Merkl User Data: error handling alm positions for pool ${NETWORK_LABELS[chainId]}-${p}`);
                        }
                    }
                    /** 3_ User positions that were deposited on non fungible positions wrapper contracts (eg. farms) */
                    let j = callsByAmm[amm].start + callsByAmm[amm].poolCalls;
                    if (getSupportedNFPWrapperMapping(chainId, amm).length > 0) {
                        const nonFungiblePositionManagerInterface = NonFungiblePositionManagerInterface[AMMAlgorithmMapping[amm]];
                        for (const wrapper of getSupportedNFPWrapperMapping(chainId, amm)) {
                            if (!!farmedTokenIds?.[amm] && farmedTokenIds?.[amm][wrapper].length > 0) {
                                for (let k = 0; k < farmedTokenIds[amm][wrapper].length; k++) {
                                    if (farmedTokenIds[amm][wrapper][k].pool !== p.toLowerCase()) {
                                        j++;
                                        continue;
                                    }
                                    const posLiquidity = nonFungiblePositionManagerInterface.decodeFunctionResult("positions", result[j].returnData).liquidity;
                                    const tickLower = Number.parseFloat(nonFungiblePositionManagerInterface
                                        .decodeFunctionResult("positions", result[j].returnData)
                                        .tickLower.toString());
                                    const tickUpper = Number.parseFloat(nonFungiblePositionManagerInterface
                                        .decodeFunctionResult("positions", result[j++].returnData)
                                        .tickUpper.toString());
                                    try {
                                        const [amount0, amount1] = getAmountsForLiquidity(sqrtPriceX96, tickLower, tickUpper, posLiquidity);
                                        const balance0 = BN2Number(amount0, poolDatas[p].decimalsToken0);
                                        const balance1 = BN2Number(amount1, poolDatas[p].decimalsToken1);
                                        const priceToken0 = (await pricer.get({
                                            address: poolDatas[p].token0,
                                            chainId,
                                            symbol: poolDatas[p].symbolToken0,
                                        }));
                                        const priceToken1 = (await pricer.get({
                                            address: poolDatas[p].token1,
                                            chainId,
                                            symbol: poolDatas[p].symbolToken1,
                                        }));
                                        const tvl = balance0 * priceToken0 + balance1 * priceToken1;
                                        updateUserPosition({
                                            almAddress: farmedTokenIds[amm][wrapper][k].farmAddress,
                                            balance0,
                                            balance1,
                                            id: farmedTokenIds[amm][wrapper][k].id,
                                            inRangeLiquidity: balance0 > 0 && balance1 > 0 ? BN2Number(posLiquidity) : 0,
                                            lowerTick: tickLower,
                                            origin: -2 - Number.parseInt(String(wrapper)), // -2 - X means NFT Wrapper
                                            totalLiquidity: BN2Number(posLiquidity),
                                            tvl,
                                            upperTick: tickUpper,
                                        });
                                    }
                                    catch (_e) {
                                        log.local(`Merkl User Data: error handling positions for pool ${NETWORK_LABELS[chainId]}-${p}`);
                                    }
                                }
                            }
                        }
                    }
                    if (withIndividualAPRs) {
                        /** Individual APRs */
                        let individualApr = 0;
                        const oneDistributionIsBoosted = false;
                        for (const campaignDatas of Object.values(poolDatas[p].campaigns)) {
                            const campaignData = campaignDatas;
                            let userBalance0 = res.userBalanceToken0;
                            let userBalance1 = res.userBalanceToken1;
                            let userInRangeLiquidity = res.userInRangeLiquidity;
                            let userTotalLiquidity = res.userTotalLiquidity;
                            const priceRewardToken = (await pricer.get({
                                address: campaignData.rewardToken,
                                chainId,
                                symbol: campaignData.symbolRewardToken,
                            }));
                            /** Handle whitelist to compute APR */
                            if (campaignData.whitelist.length > 0) {
                                const aux = campaignData.whitelist.reduce((acc, whitelistedAddress) => {
                                    /** 1_ User is whitelisted */
                                    if (user.toLowerCase() === whitelistedAddress.toLowerCase()) {
                                        acc.balance0 += res.userBalanceToken0;
                                        acc.balance1 += res.userBalanceToken1;
                                        acc.inRangeLiquidity += res.userInRangeLiquidity;
                                        acc.totalLiquidity += res.userTotalLiquidity;
                                    }
                                    else if (res.userPositions
                                        .map((w) => (!!w?.almAddress ? w?.almAddress?.toLowerCase() : null))
                                        ?.filter((a) => !!a)
                                        .includes(whitelistedAddress.toLowerCase())) {
                                        /**
                                         *  2_ ALM is whitelisted and/or Nf positions vault is whitelisted
                                         * @dev for simplicity purposes, vault address is marked as `almAddress`
                                         */
                                        let index = -1;
                                        const positionsAddresses = res.userPositions.map((w) => w.almAddress?.toLowerCase());
                                        while (true) {
                                            const newIndex = positionsAddresses.slice(index + 1).indexOf(whitelistedAddress.toLowerCase());
                                            if (newIndex === -1)
                                                break;
                                            index = index + 1 + newIndex;
                                            acc.balance0 += res.userPositions[index].balance0;
                                            acc.balance1 += res.userPositions[index].balance1;
                                            acc.inRangeLiquidity += res.userPositions[index].inRangeLiquidity;
                                            acc.totalLiquidity += res.userPositions[index].totalLiquidity;
                                        }
                                    }
                                    else if (res.userPositions
                                        .map((w) => !!w?.almAddress
                                        ? poolDatas[p].forwarders[utils.getAddress(w?.almAddress)]?.target?.toLowerCase()
                                        : null)
                                        ?.filter((a) => !!a)
                                        .includes(whitelistedAddress?.toLowerCase())) {
                                        /** 3_ ALM target is whitelisted */
                                        let index = -1;
                                        const positionsAddresses = res.userPositions.map((w) => !!w?.almAddress &&
                                            poolDatas[p].forwarders[utils.getAddress(w?.almAddress)]?.target.toLowerCase());
                                        while (true) {
                                            const newIndex = positionsAddresses.slice(index + 1).indexOf(whitelistedAddress.toLowerCase());
                                            if (newIndex === -1)
                                                break;
                                            index = index + 1 + newIndex;
                                            acc.balance0 += res.userPositions[index].balance0;
                                            acc.balance1 += res.userPositions[index].balance1;
                                            acc.inRangeLiquidity += res.userPositions[index].inRangeLiquidity;
                                            acc.totalLiquidity += res.userPositions[index].totalLiquidity;
                                        }
                                    }
                                    return acc;
                                }, {
                                    balance0: 0,
                                    balance1: 0,
                                    inRangeLiquidity: 0,
                                    totalLiquidity: 0,
                                });
                                userBalance0 = Math.max(0, aux.balance0);
                                userBalance1 = Math.max(0, aux.balance1);
                                userInRangeLiquidity = Math.max(0, aux.inRangeLiquidity);
                                userTotalLiquidity = Math.max(0, aux.inRangeLiquidity);
                            }
                            else if (campaignData.blacklist.length > 0) {
                                /** Handle blacklist to compute APR */
                                const aux = campaignData.blacklist.reduce((acc, blacklistedAddress) => {
                                    /** 1_ User is blacklisted */
                                    if (user.toLowerCase() === blacklistedAddress.toLowerCase()) {
                                        acc.balance0 -= res.userBalanceToken0;
                                        acc.balance1 -= res.userBalanceToken1;
                                        acc.inRangeLiquidity -= res.userInRangeLiquidity;
                                    }
                                    else if (res.userPositions
                                        .map((w) => (!!w?.almAddress ? w?.almAddress?.toLowerCase() : null))
                                        ?.filter((a) => !!a)
                                        .includes(blacklistedAddress.toLowerCase())) {
                                        /** 2_ ALM and/or NFP vault is blacklisted */
                                        let index = -1;
                                        const positionsAddresses = res.userPositions.map((w) => w.almAddress?.toLowerCase());
                                        while (true) {
                                            const newIndex = positionsAddresses.slice(index + 1).indexOf(blacklistedAddress.toLowerCase());
                                            if (newIndex === -1)
                                                break;
                                            index = index + 1 + newIndex;
                                            acc.balance0 -= res.userPositions[index].balance0;
                                            acc.balance1 -= res.userPositions[index].balance1;
                                            acc.inRangeLiquidity -= res.userPositions[index].inRangeLiquidity;
                                            acc.totalLiquidity -= res.userPositions[index].totalLiquidity;
                                        }
                                    }
                                    else if (
                                    /** 3_ Target is blacklisted */
                                    res.userPositions
                                        .map((w) => !!w?.almAddress
                                        ? poolDatas[p].forwarders[utils.getAddress(w?.almAddress)]?.target?.toLowerCase()
                                        : null)
                                        ?.filter((a) => !!a)
                                        .includes(blacklistedAddress.toLowerCase())) {
                                        let index = -1;
                                        const positionsAddresses = res.userPositions.map((w) => !!w?.almAddress &&
                                            poolDatas[p].forwarders[utils.getAddress(w?.almAddress)]?.target.toLowerCase());
                                        while (true) {
                                            const newIndex = positionsAddresses.slice(index + 1).indexOf(blacklistedAddress.toLowerCase());
                                            if (newIndex === -1)
                                                break;
                                            index = index + 1 + newIndex;
                                            acc.balance0 -= res.userPositions[index].balance0;
                                            acc.balance1 -= res.userPositions[index].balance1;
                                            acc.inRangeLiquidity -= res.userPositions[index].inRangeLiquidity;
                                            acc.totalLiquidity -= res.userPositions[index].totalLiquidity;
                                        }
                                    }
                                    return acc;
                                }, {
                                    balance0: res.userBalanceToken0,
                                    balance1: res.userBalanceToken1,
                                    inRangeLiquidity: res.userInRangeLiquidity,
                                    totalLiquidity: 0,
                                });
                                userBalance0 = Math.max(0, aux.balance0);
                                userBalance1 = Math.max(0, aux.balance1);
                                userInRangeLiquidity = Math.max(0, aux.inRangeLiquidity);
                                userTotalLiquidity = Math.max(0, aux.inRangeLiquidity);
                            }
                            /** Yearly rewards in $ */
                            const distributionDuration = campaignData.endTimestamp - campaignData.startTimestamp;
                            const yearlyAmountDistributed = priceRewardToken * campaignData.amount * YEAR;
                            const yearlyToken0Rewards = (campaignData.propToken0 * yearlyAmountDistributed) / distributionDuration;
                            const yearlyToken1Rewards = (campaignData.propToken1 * yearlyAmountDistributed) / distributionDuration;
                            const yearlyFeeRewards = (campaignData.propFees * yearlyAmountDistributed) / distributionDuration;
                            // Approximation because it uses `poolTotalLiquidity` which may contain out of range liquidity
                            // Approximation as well because the out of range / in range is for all positions and not "per position"
                            let campaignIndividualAPR = !campaignData.isOutOfRangeIncentivized && (!userBalance0 || !userBalance1)
                                ? 0
                                : ((yearlyToken0Rewards * userBalance0) /
                                    (poolDatas[p].poolBalanceToken0 - (campaignData.blacklistedBalance0 ?? 0)) +
                                    (yearlyToken1Rewards * userBalance1) /
                                        (poolDatas[p].poolBalanceToken1 - (campaignData.blacklistedBalance1 ?? 0)) +
                                    (yearlyFeeRewards *
                                        (campaignData.isOutOfRangeIncentivized ? userTotalLiquidity : userInRangeLiquidity)) /
                                        (poolDatas[p].poolTotalLiquidity - (campaignData.blacklistedLiquidity ?? 0))) /
                                    res.userTVL;
                            campaignIndividualAPR =
                                !campaignIndividualAPR || Number.isNaN(campaignIndividualAPR) ? 0 : campaignIndividualAPR;
                            individualApr += campaignIndividualAPR;
                        }
                        if (!!individualApr) {
                            res.apr[`User current APR ${oneDistributionIsBoosted ? "(based on last distribution boost)" : ""}`] =
                                individualApr;
                        }
                    }
                    if (res.userPositions.length > 0) {
                        finalRes[`2_${poolDatas[p].mainParameter ?? p}`] = { ...res };
                    }
                }
                catch (_e) {
                    console.error(_e);
                    log.local(`merkl User Data: error for pool ${NETWORK_LABELS[chainId]}-${p}`);
                }
            }
        }
    }
    return finalRes;
}
