import { MERKL_ALM_POSITION_FETCHING_TIMEOUT } from "@/constants";
import { nftPositionByIdsQuery, positionMultipleOwnersQuery } from "@/libs/positions/clamm/thegraph";
import { fetchFarmedPositions } from "@/libs/positions/clamm/thegraph/fetchFarmedPositions";
import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { isStrykeCampaign } from "@/utils/stryke";
import { A51Factory__factory, ALM, ALMMapping, AMM, AMMAlgorithm, AMMAlgorithmMapping, BN2Number, ChainInteractionService, DecodeLiquidity, EAprBreakdownType, ERC20Interface, Forwarder, JonesDoubleRewardTracker__factory, Liquidity, NETWORK_LABELS, NitroInterface, PoolInterface, PoolState, PriorityAMM, SqrtPrice, almName, ammName, getAmountsForLiquidity, getTickAtSqrtRatio, isBlacklisted, isWhitelisted, merklSubgraphAMMEndpoints, shortenAddress, spNFTInterface, withTimeout, } from "@sdk";
import axios from "axios";
import { BigNumber, utils } from "ethers";
import request from "graphql-request";
import JSBI from "jsbi";
import moment from "moment";
import { fetchA51Strategies } from "../utils/fetchA51Strategies";
export class ClammDynamicData {
    async build(chainId, campaigns) {
        const dynamicData = [];
        const calls = [];
        const A51Interface = A51Factory__factory.createInterface();
        /** Dedupe pools from campaigns to build pool list */
        let poolList = [];
        for (const campaign of campaigns ?? []) {
            /** Loop through all campaigns to add pools */
            if (!poolList?.map(p => p.mainParameter.toLowerCase()).includes(campaign.mainParameter.toLowerCase())) {
                if (AMMAlgorithmMapping[campaign.campaignParameters.amm] === undefined) {
                    console.log("Invalid AMM", campaign.campaignParameters.amm);
                    continue;
                }
                poolList.push({
                    address: campaign.campaignParameters.poolAddress,
                    mainParameter: campaign.mainParameter, // main parameter containes info of poolAddress + AMM (in case its a priority AMM)
                    alms: [],
                    amm: campaign.campaignParameters.amm,
                });
            }
            /** Now we have an entry with campaign.mainParameter in poolList */
            const poolIndex = poolList
                ?.map(p => p.mainParameter.toLowerCase())
                .findIndex(a => a === campaign.mainParameter.toLowerCase());
            /** Fill ALMs per pools */
            for (const forwarder of campaign.campaignParameters.forwarders
                .filter(f => f.forwarderType === Forwarder.CLAMM)
                .sort((a, b) => a.priority - b.priority)) {
                const alm = {
                    address: forwarder.sender,
                    ...(!!forwarder.owner && { owner: forwarder.owner?.toLowerCase() }),
                    target: forwarder.target.toLowerCase(),
                    type: forwarder.type,
                    priority: forwarder.priority,
                };
                /** If the ALM is not found - add it */
                if (poolList[poolIndex].alms.findIndex(a => alm.address === a.address && alm.target === a.target) === -1) {
                    poolList[poolIndex].alms.push(alm);
                }
            }
        }
        poolList = poolList.filter(p => p.amm !== undefined && p.amm !== null);
        if (!!poolList) {
            // Prepare A51 fetching
            const A51Pools = [];
            for (const pool of poolList) {
                for (const _ of pool.alms.filter(a => a.type === ALM.A51)) {
                    A51Pools.push(pool.address.toLowerCase());
                }
            }
            let A51Strategies = {};
            if (A51Pools.length > 0) {
                A51Strategies = await fetchA51Strategies(chainId, [...new Set(A51Pools)]);
            }
            for (const pool of poolList) {
                const poolInterface = PoolInterface[AMMAlgorithmMapping[pool.amm]];
                const d = campaigns?.filter(campaign => campaign.mainParameter.toLowerCase() === pool.mainParameter.toLowerCase())[0];
                calls.push({
                    allowFailure: true,
                    callData: poolInterface.encodeFunctionData(Liquidity[AMMAlgorithmMapping[pool.amm]]),
                    target: pool.address,
                }, {
                    allowFailure: true,
                    callData: poolInterface.encodeFunctionData(PoolState[AMMAlgorithmMapping[pool.amm]]),
                    target: pool.address,
                }, {
                    allowFailure: true,
                    callData: ERC20Interface.encodeFunctionData("balanceOf", [pool.address]),
                    target: d.campaignParameters.token0,
                }, {
                    allowFailure: true,
                    callData: ERC20Interface.encodeFunctionData("balanceOf", [pool.address]),
                    target: d.campaignParameters.token1,
                });
                /** Direct ALMs */
                for (const alm of pool.alms.filter(a => a.target.toLowerCase() === pool.address.toLowerCase() && a.type !== ALM.A51)) {
                    let almAddress = alm.address;
                    if (alm.type === ALM.Beefy) {
                        almAddress = alm.owner ?? alm.address;
                    }
                    calls.push({
                        allowFailure: true,
                        callData: ERC20Interface.encodeFunctionData("totalSupply"),
                        target: alm.address,
                    });
                    calls.push({
                        allowFailure: true,
                        callData: ERC20Interface.encodeFunctionData("balanceOf", [almAddress]),
                        target: d.campaignParameters.token0,
                    });
                    calls.push({
                        allowFailure: true,
                        callData: ERC20Interface.encodeFunctionData("balanceOf", [almAddress]),
                        target: d.campaignParameters.token1,
                    });
                }
                /** Multi-hop ALMs */
                for (const alm of pool.alms.filter(a => a.target !== pool.address.toLowerCase())) {
                    if (alm.type === ALM.spNFT) {
                        calls.push({
                            allowFailure: true,
                            callData: spNFTInterface.encodeFunctionData("getPoolInfo"),
                            target: alm.address,
                        });
                    }
                    else if (alm.type === ALM.kpNFT) {
                        calls.push({
                            allowFailure: true,
                            callData: spNFTInterface.encodeFunctionData("getPoolInfo"),
                            target: alm.address,
                        });
                    }
                    else if (alm.type === ALM.Nitro) {
                        calls.push({
                            allowFailure: true,
                            callData: NitroInterface.encodeFunctionData("totalDepositAmount"),
                            target: alm.address,
                        });
                    }
                    else if ([ALM.ConcentricStaker, ALM.GammaChef].includes(alm.type)) {
                        calls.push({
                            allowFailure: true,
                            callData: ERC20Interface.encodeFunctionData("balanceOf", [alm.address]),
                            target: alm.target,
                        });
                    }
                    else if (alm.type === ALM.JonesTracker) {
                        calls.push({
                            allowFailure: true,
                            callData: JonesDoubleRewardTracker__factory.createInterface().encodeFunctionData("totalStakedAmount"),
                            target: alm.address,
                        });
                    }
                    else {
                        calls.push({
                            allowFailure: true,
                            callData: ERC20Interface.encodeFunctionData("totalSupply"),
                            target: alm.address,
                        });
                    }
                }
                /** A51 Strategies */
                for (const w of pool.alms.filter(a => a.type === ALM.A51)) {
                    const strategies = A51Strategies?.[pool.address.toLowerCase()]?.[w.address] ?? [];
                    for (const strategy of strategies) {
                        calls.push({
                            allowFailure: true,
                            callData: A51Interface.encodeFunctionData("strategies", [strategy.id]),
                            target: w.address,
                        });
                    }
                }
            }
            /**
             * Fetch all ALM vaults positions for the pools.
             * @dev Do it in parallel with 1 call / AMM subgraph to save time.
             */
            const positions = {};
            const positionsPromise = Object.keys(AMM)
                .filter(amm => !!merklSubgraphAMMEndpoints[chainId][Number.parseInt(amm)])
                .map(async (amm) => {
                const tgURL = merklSubgraphAMMEndpoints[chainId][Number.parseInt(amm)];
                let targetAddressesList = [];
                if (!!poolList) {
                    for (const pool of poolList) {
                        if (pool.amm === Number.parseInt(amm)) {
                            /** Add direct alm addresses */
                            targetAddressesList = targetAddressesList.concat(pool.alms
                                .filter(a => a.target.toLowerCase() === pool.address.toLowerCase())
                                ?.map(w => {
                                return !!w?.owner && Number.parseInt(amm) !== AMM.Stryke
                                    ? w.owner.toLowerCase()
                                    : w.address.toLowerCase();
                            }) ?? []);
                            /** Add blacklisted / whitelisted addresses (optional) */
                            for (const campaign of campaigns.filter(campaign => campaign.mainParameter.toLowerCase() === pool.mainParameter.toLowerCase())) {
                                const distributionBlacklist = campaign.campaignId === "0x4a805dd97d823dfbc34d138af3d09536ac792b6ad73079573df082c71d4b057c"
                                    ? [...campaign.campaignParameters.blacklist, "0x657e6d2073A99aF61952beb7EE564169616b90C1"]
                                    : campaign.campaignParameters.blacklist;
                                if (!!distributionBlacklist && distributionBlacklist.length > 0)
                                    targetAddressesList = targetAddressesList.concat(distributionBlacklist.map((address) => address.toLowerCase()));
                                let distributionWhitelist = campaign.campaignParameters?.whitelist;
                                if (distributionWhitelist.length === 1 &&
                                    distributionWhitelist[0].toLowerCase() ===
                                        "0xE4bA6740aF4c666325D49B3112E4758371386aDc".toLowerCase()) {
                                    distributionWhitelist = ["0xe11d346757d052214686bCbC860C94363AfB4a9A"];
                                }
                                if (!isStrykeCampaign(pool.amm) && !!distributionWhitelist && distributionWhitelist.length > 0)
                                    targetAddressesList = targetAddressesList.concat(distributionWhitelist.map((address) => address.toLowerCase()));
                            }
                        }
                    }
                }
                targetAddressesList = targetAddressesList.filter((a, index, self) => self.indexOf(a) === index); // Dedupe
                if (targetAddressesList?.length > 0) {
                    positions[Number.parseInt(amm)] = [];
                    /** Fetch NFT Wrapper positions */
                    const farmedPositionsList = await fetchFarmedPositions(chainId, targetAddressesList, Number(amm));
                    const farmedPositionsById = Object.keys(farmedPositionsList).reduce((acc, curr) => {
                        for (const pos of farmedPositionsList[curr]) {
                            acc[pos.id] = pos;
                        }
                        return acc;
                    }, {});
                    if (Object.keys(farmedPositionsById).length > 0) {
                        let hasFollowingPage = true;
                        let skip = 0;
                        const res = { nft: [] };
                        while (hasFollowingPage) {
                            const auxRes = await request(tgURL, nftPositionByIdsQuery, {
                                ids: Object.keys(farmedPositionsById),
                                skip,
                            });
                            res.nft = res.nft.concat(auxRes.nft ?? []);
                            if (auxRes.nft.length < 1000) {
                                hasFollowingPage = false;
                            }
                            skip += 1000;
                        }
                        if (!!res.nft) {
                            for (const pos of res.nft) {
                                positions[Number.parseInt(amm)]?.push({
                                    ...pos,
                                    owner: farmedPositionsById[pos.id].holder,
                                });
                            }
                        }
                    }
                    await withTimeout((async () => {
                        let hasFollowingPage = true;
                        let skip = 0;
                        const res = { direct: [], nft: [] };
                        while (hasFollowingPage) {
                            const auxRes = await request(tgURL, positionMultipleOwnersQuery, {
                                owners: targetAddressesList,
                                skip,
                            });
                            res.direct = res.direct.concat(auxRes.direct ?? []);
                            res.nft = res.nft.concat(auxRes.nft ?? []);
                            if (auxRes.direct.length < 1000 && auxRes.nft.length < 1000) {
                                hasFollowingPage = false;
                            }
                            skip += 1000;
                        }
                        return res;
                    })().then(res => {
                        if (!!res.direct) {
                            for (const pos of res.direct) {
                                positions[Number.parseInt(amm)]?.push(pos);
                            }
                        }
                        if (!!res.nft) {
                            for (const pos of res.nft) {
                                positions[Number.parseInt(amm)]?.push(pos);
                            }
                        }
                    }), MERKL_ALM_POSITION_FETCHING_TIMEOUT).catch(error => {
                        const service = `Merkl AMM Subgraph for ${NETWORK_LABELS[chainId]} ${AMM[Number.parseInt(amm)]}`;
                        log.error(service, error, service, tgURL);
                    });
                }
            });
            const result = await ChainInteractionService(chainId).fetchState(calls);
            // Wait for position fetching before finalizing the data
            await Promise.all(positionsPromise);
            let i = 0;
            if (!!poolList) {
                for (const pool of poolList) {
                    const poolInterface = PoolInterface[AMMAlgorithmMapping[pool.amm]];
                    // This liquidity call gives the active liquidity on the pool. To get the total liquidity we would need to loop over all positions
                    let poolTotalLiquidity;
                    let sqrtPrice;
                    let poolBalanceToken0;
                    let poolBalanceToken1;
                    const d = campaigns?.filter(campaign => campaign.mainParameter.toLowerCase() === pool.mainParameter.toLowerCase())[0];
                    const decimalsToken0 = d.campaignParameters.decimalsToken0;
                    const decimalsToken1 = d.campaignParameters.decimalsToken1;
                    const symbolToken0 = d.campaignParameters.symbolToken0;
                    const symbolToken1 = d.campaignParameters.symbolToken1;
                    const prevI = i;
                    try {
                        poolTotalLiquidity = BN2Number(poolInterface.decodeFunctionResult(Liquidity[AMMAlgorithmMapping[pool.amm]], result[i++].returnData)[DecodeLiquidity[AMMAlgorithmMapping[pool.amm]]]);
                        sqrtPrice = poolInterface
                            .decodeFunctionResult(PoolState[AMMAlgorithmMapping[pool.amm]], result[i++].returnData)[SqrtPrice[AMMAlgorithmMapping[pool.amm]]].toString();
                        poolBalanceToken0 = BN2Number(ERC20Interface.decodeFunctionResult("balanceOf", result[i++].returnData)[0], decimalsToken0);
                        poolBalanceToken1 = BN2Number(ERC20Interface.decodeFunctionResult("balanceOf", result[i++].returnData)[0], decimalsToken1);
                    }
                    catch (e) {
                        log.warn(`merklDynamic data - failed to decode state of pool ${pool.address} on ${NETWORK_LABELS[chainId]}`);
                        i = prevI + 4;
                        continue;
                    }
                    const priceToken0 = await TokenService.getPrice({
                        address: d.campaignParameters.token0,
                        chainId: chainId,
                        symbol: symbolToken0,
                    });
                    const priceToken1 = await TokenService.getPrice({
                        address: d.campaignParameters.token1,
                        chainId: chainId,
                        symbol: symbolToken1,
                    });
                    const almDetails = [];
                    /** Direct ALMs */
                    for (const w of pool.alms.filter(a => a.target.toLowerCase() === pool.address.toLowerCase() && a.type !== ALM.A51)) {
                        const prevI = i;
                        try {
                            const totalSupply = BN2Number(ERC20Interface.decodeFunctionResult("totalSupply", result[i++].returnData)[0]);
                            const almIdleBalance0 = BN2Number(ERC20Interface.decodeFunctionResult("balanceOf", result[i++].returnData)[0], d.campaignParameters.decimalsToken0);
                            let almBalance0 = almIdleBalance0;
                            const almIdleBalance1 = BN2Number(ERC20Interface.decodeFunctionResult("balanceOf", result[i++].returnData)[0], d.campaignParameters.decimalsToken1);
                            let almBalance1 = almIdleBalance1;
                            let almTotalLiquidity = 0;
                            let almInRangeLiquidity = 0;
                            const almPositions = positions?.[pool.amm]?.filter(pos => pos.pool.id === pool.address.toLowerCase() &&
                                [w.address.toLowerCase(), ...[!!w?.owner && w.owner.toLowerCase()]].includes(pos.owner.toLowerCase()));
                            const almPositionsWithAPIType = [];
                            if (!!almPositions) {
                                for (const position of almPositions) {
                                    const upperTick = Number.parseInt(position.tickUpper);
                                    const lowerTick = Number.parseInt(position.tickLower);
                                    const [amount0, amount1] = getAmountsForLiquidity(sqrtPrice, lowerTick, upperTick, BigNumber.from(position.liquidity));
                                    const balance0 = BN2Number(amount0, decimalsToken0);
                                    const balance1 = BN2Number(amount1, decimalsToken1);
                                    const totalLiquidity = BN2Number(position.liquidity);
                                    const inRangeLiquidity = balance0 > 0 && balance1 > 0 ? (BN2Number(position.liquidity) ?? 0) : 0;
                                    almTotalLiquidity += totalLiquidity;
                                    almInRangeLiquidity += inRangeLiquidity;
                                    almBalance0 += balance0;
                                    almBalance1 += balance1;
                                    almPositionsWithAPIType.push({
                                        balance0,
                                        balance1,
                                        id: position.id,
                                        inRangeLiquidity,
                                        lowerTick,
                                        totalLiquidity,
                                        tvl: priceToken0 * balance0 + priceToken1 * balance1,
                                        upperTick,
                                    });
                                }
                                // The wrapper type can exist in the subgraph without being declared in the SDK which can lead to type errors
                                if (!!ALMMapping[pool.amm] && w.type in ALMMapping[pool.amm]) {
                                    almDetails.push({
                                        almAPR: 0, // filled later on
                                        almAddress: utils.getAddress(w.address),
                                        almBalance0,
                                        almIdleBalance0,
                                        almIdleBalance1,
                                        almBalance1,
                                        almInRangeLiquidity,
                                        almTVL: almBalance0 * priceToken0 + almBalance1 * priceToken1,
                                        almTotalLiquidity,
                                        forwarderType: Forwarder.CLAMM,
                                        label: `${ALMMapping[pool.amm]?.[w.type]} ${w.address}`,
                                        origin: w.type,
                                        positions: almPositionsWithAPIType,
                                        priority: 0,
                                        sender: utils.getAddress(w.address),
                                        target: w.target,
                                        owner: utils.getAddress(w.owner ?? w.address),
                                        totalSupply,
                                        type: w.type,
                                    });
                                }
                            }
                        }
                        catch (e) {
                            log.warn(`merklDynamic data - failed to handle direct alm data of pool ${pool.address} on ${NETWORK_LABELS[chainId]} - ${w.address}`);
                            i = prevI + 3;
                        }
                    }
                    /** Multi-hop ALMs */
                    for (const w of pool.alms.filter(a => a.target !== pool.address.toLowerCase())) {
                        const prevI = i;
                        try {
                            let totalSupply;
                            if (w.type === ALM.spNFT) {
                                totalSupply = BN2Number(spNFTInterface.decodeFunctionResult("getPoolInfo", result[i++].returnData)[5]);
                            }
                            else if (w.type === ALM.kpNFT) {
                                totalSupply = BN2Number(spNFTInterface.decodeFunctionResult("getPoolInfo", result[i++].returnData)[5]);
                            }
                            else if (w.type === ALM.Nitro) {
                                totalSupply = BN2Number(NitroInterface.decodeFunctionResult("totalDepositAmount", result[i++].returnData)[0]);
                            }
                            else if ([ALM.ConcentricStaker, ALM.GammaChef].includes(w.type)) {
                                totalSupply = BN2Number(ERC20Interface.decodeFunctionResult("balanceOf", result[i++].returnData)[0]);
                            }
                            else if (w.type === ALM.JonesTracker) {
                                totalSupply = BN2Number(JonesDoubleRewardTracker__factory.createInterface().decodeFunctionResult("totalStakedAmount", result[i++].returnData)[0]);
                            }
                            else {
                                totalSupply = BN2Number(ERC20Interface.decodeFunctionResult("totalSupply", result[i++].returnData)[0]);
                            }
                            const wrappedALM = almDetails.filter(a => utils.getAddress(a.almAddress) === utils.getAddress(w.target))[0];
                            if (!!wrappedALM && !!wrappedALM.totalSupply) {
                                const ratio = totalSupply / wrappedALM.totalSupply;
                                almDetails.push({
                                    almAPR: 0,
                                    // filled later on
                                    almAddress: w.address,
                                    almIdleBalance0: 0,
                                    almIdleBalance1: 0,
                                    almBalance0: ratio * wrappedALM.almBalance0,
                                    almBalance1: ratio * wrappedALM.almBalance1,
                                    almInRangeLiquidity: ratio * wrappedALM.almInRangeLiquidity,
                                    almTVL: ratio * wrappedALM.almTVL,
                                    almTotalLiquidity: ratio * wrappedALM.almTotalLiquidity,
                                    forwarderType: Forwarder.CLAMM,
                                    label: `${ALMMapping[pool.amm]?.[w.type]} ${w.address}`,
                                    origin: w.type,
                                    positions: wrappedALM.positions.map(pos => {
                                        return {
                                            ...pos,
                                            balance0: ratio * pos.balance0,
                                            balance1: ratio * pos.balance1,
                                            inRangeLiquidity: ratio * pos.inRangeLiquidity,
                                            totalLiquidity: ratio * pos.totalLiquidity,
                                            tvl: ratio * pos.tvl,
                                        };
                                    }),
                                    priority: wrappedALM.priority + 1,
                                    sender: utils.getAddress(w.address),
                                    target: w.target,
                                    owner: w.owner ?? w.address,
                                    totalSupply,
                                    type: w.type,
                                });
                            }
                            else {
                                log.local(`Target ALM not found (${NETWORK_LABELS[chainId]}). Address: ${w.address}, Target: ${w.target}`);
                            }
                        }
                        catch {
                            log.warn(`merklDynamic data - failed to handle multi hop alm data of pool ${pool.address} on ${NETWORK_LABELS[chainId]} - ${w.address}`);
                            i = prevI + 1;
                        }
                    }
                    /** A51 Strategies */
                    for (const w of pool.alms.filter(a => a.type === ALM.A51)) {
                        const prevI = i;
                        const strategies = A51Strategies?.[pool.address.toLowerCase()]?.[w.address] ?? [];
                        let j = 0;
                        for (const strategy of strategies) {
                            j++;
                            const almPositionsWithAPIType = [];
                            let almTotalLiquidity = 0;
                            let almInRangeLiquidity = 0;
                            let almBalance0 = 0;
                            let almBalance1 = 0;
                            try {
                                //   struct StrategyData {
                                //     StrategyKey key; 0
                                //     address owner; 1
                                //     bytes actions; 2
                                //     bytes actionStatus; 3
                                //     bool isCompound; 4
                                //     bool isPrivate; 5
                                //     uint256 managementFee; 6
                                //     uint256 performanceFee; 7
                                //     Account account; 8
                                // }
                                const strategyAccount = A51Interface.decodeFunctionResult("strategies", result[i++].returnData)[8];
                                //   struct Account {
                                //     uint256 fee0; 0
                                //     uint256 fee1; 1
                                //     uint256 balance0; 2
                                //     uint256 balance1; 3
                                //     uint256 totalShares; 4
                                //     uint128 uniswapLiquidity;
                                //     uint256 feeGrowthInside0LastX128;
                                //     uint256 feeGrowthInside1LastX128;
                                //     uint256 feeGrowthOutside0LastX128;
                                //     uint256 feeGrowthOutside1LastX128;
                                //   }
                                const a51Positions = positions?.[pool.amm]?.filter(pos => pos.pool.id === pool.address.toLowerCase() &&
                                    pos.owner === w.address.toLowerCase() &&
                                    pos.tickLower === strategy.tickLower.toString() &&
                                    pos.tickUpper === strategy.tickUpper.toString());
                                if (!!a51Positions) {
                                    for (const position of a51Positions) {
                                        const upperTick = Number.parseInt(position.tickUpper);
                                        const lowerTick = Number.parseInt(position.tickLower);
                                        const [amount0, amount1] = getAmountsForLiquidity(sqrtPrice, lowerTick, upperTick, BigNumber.from(position.liquidity));
                                        const balance0 = BN2Number(amount0, decimalsToken0);
                                        const balance1 = BN2Number(amount1, decimalsToken1);
                                        const totalLiquidity = BN2Number(position.liquidity);
                                        const inRangeLiquidity = balance0 > 0 && balance1 > 0 ? (BN2Number(position.liquidity) ?? 0) : 0;
                                        almTotalLiquidity += totalLiquidity;
                                        almInRangeLiquidity += inRangeLiquidity;
                                        almBalance0 += balance0;
                                        almBalance1 += balance1;
                                        almPositionsWithAPIType.push({
                                            balance0,
                                            balance1,
                                            id: position.id,
                                            inRangeLiquidity,
                                            lowerTick,
                                            totalLiquidity,
                                            tvl: priceToken0 * balance0 + priceToken1 * balance1,
                                            upperTick,
                                        });
                                    }
                                }
                                if (!!ALMMapping[pool.amm] && w.type in ALMMapping[pool.amm]) {
                                    almDetails.push({
                                        almAPR: 0,
                                        // filled later on
                                        almAddress: utils.getAddress(w.address),
                                        almBalance0,
                                        almBalance1,
                                        almIdleBalance0: 0,
                                        almIdleBalance1: 0,
                                        almInRangeLiquidity,
                                        almTVL: almBalance0 * priceToken0 + almBalance1 * priceToken1,
                                        almTotalLiquidity,
                                        forwarderType: Forwarder.CLAMM,
                                        label: `${ALMMapping[pool.amm]?.[w.type]} ${w.address} - ${strategy.id}`,
                                        origin: w.type,
                                        positions: almPositionsWithAPIType,
                                        priority: 0,
                                        sender: w.address,
                                        target: w.target,
                                        owner: w.owner ?? w.address,
                                        totalSupply: strategyAccount[4].toString(),
                                        type: w.type,
                                    });
                                }
                            }
                            catch (e) {
                                log.warn(`merklDynamic data - failed to handle A51 data of pool ${pool.address} on ${NETWORK_LABELS[chainId]} - ${w.address}`);
                                i = prevI + j;
                            }
                        }
                    }
                    /** Iterate over distributions to compute APRs */
                    for (const campaign of campaigns.filter(campaign => campaign.mainParameter.toLowerCase() === pool.mainParameter.toLowerCase())) {
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
                        let blacklistedBalance0 = 0;
                        let blacklistedBalance1 = 0;
                        let blacklistedLiquidity = 0;
                        /**
                         * @dev In case there is a super amm handling some other amm lp positions,
                         *      we only need to check the positions associated to this super amm subgraph
                         *      in order to compute the APRs.
                         *      Yet, the pool will still be labelled with the main amm
                         */
                        const amm = c.campaignParameters.whitelist.length > 0 && !!PriorityAMM?.[chainId]?.[c.campaignParameters.whitelist[0]]
                            ? PriorityAMM[chainId]?.[c.campaignParameters.whitelist[0]]
                            : pool.amm;
                        const aprs = {};
                        const aprBreakdowns = [];
                        /** Clear alm APRs */
                        const distributionForwarders = almDetails.map(x => ({ ...x }));
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
                                blacklistedBalance0 = poolBalanceToken0;
                                blacklistedBalance1 = poolBalanceToken1;
                                blacklistedLiquidity = poolTotalLiquidity;
                                // Get all beefy staker is whitelisted, get a list of all senders
                                let targetToMatch = "";
                                for (const alm of almDetails.filter(a => a.type === ALM.BeefyStaker)) {
                                    if (c.campaignParameters.whitelist.includes(alm.sender)) {
                                        targetToMatch = alm.target;
                                    }
                                }
                                if (targetToMatch !== "") {
                                    for (const alm of almDetails.filter(a => a.type === ALM.Beefy)) {
                                        if (targetToMatch === alm.sender.toLowerCase()) {
                                            c.campaignParameters.whitelist.push(alm.owner);
                                        }
                                    }
                                }
                                positions?.[pool.amm]?.forEach(pos => {
                                    if (pos.pool.id === pool.address.toLowerCase() &&
                                        (isWhitelisted(pos.owner, c.campaignParameters.whitelist) || isStrykeCampaign(pool.amm))) {
                                        let [amount0, amount1] = [BigNumber.from(0), BigNumber.from(0)];
                                        try {
                                            [amount0, amount1] = getAmountsForLiquidity(sqrtPrice, Number.parseInt(pos.tickLower), Number.parseInt(pos.tickUpper), BigNumber.from(pos.liquidity));
                                        }
                                        catch {
                                            log.warn(`merklDynamic data - failed to handle whitelisted positions of pool ${pool.address} on ${NETWORK_LABELS[chainId]} - ${pos.owner} ${pos.tickLower} ${pos.tickUpper} ${pos.liquidity}`);
                                        }
                                        blacklistedBalance0 -= BN2Number(amount0, decimalsToken0);
                                        blacklistedBalance1 -= BN2Number(amount1, decimalsToken1);
                                        if (c.campaignParameters.isOutOfRangeIncentivized
                                            ? BN2Number(amount0, decimalsToken0) > 0 || BN2Number(amount1, decimalsToken1) > 0
                                            : BN2Number(amount0, decimalsToken0) > 0 && BN2Number(amount1, decimalsToken1) > 0)
                                            blacklistedLiquidity -= BN2Number(pos.liquidity);
                                    }
                                    // Handling the case of a ALM of priority 2 being whitelisted
                                    else if (pos.pool.id === pool.address.toLowerCase() &&
                                        almDetails.map(a => a.target.toLowerCase()).includes(pos.owner.toLowerCase()) // If pos owner is an ALM
                                    ) {
                                        // If we're in this branch it means the ALM owning the position is not whitelisted
                                        const almHolding = almDetails.filter(a => a.almAddress.toLowerCase() === pos.owner.toLowerCase())[0];
                                        for (const whitelistedAddress of c.campaignParameters.whitelist) {
                                            const forwarderIndex = distributionForwarders.findIndex(f => utils.getAddress(f.almAddress) === utils.getAddress(whitelistedAddress));
                                            if (forwarderIndex !== -1 &&
                                                almHolding.almAddress.toLowerCase() ===
                                                    distributionForwarders[forwarderIndex].target.toLowerCase()) {
                                                // If we are here it means one of the ALM whitelisted is a "child" of the ALM holding the position
                                                const childALM = distributionForwarders[forwarderIndex];
                                                let [amount0, amount1] = [BigNumber.from(0), BigNumber.from(0)];
                                                try {
                                                    [amount0, amount1] = getAmountsForLiquidity(sqrtPrice, Number.parseInt(pos.tickLower), Number.parseInt(pos.tickUpper), BigNumber.from(pos.liquidity));
                                                }
                                                catch {
                                                    log.warn(`merklDynamic data - failed to handle whitelisted positions of pool ${pool.address} on ${NETWORK_LABELS[chainId]} - ${pos.owner} ${pos.tickLower} ${pos.tickUpper} ${pos.liquidity}`);
                                                }
                                                blacklistedBalance0 -=
                                                    (BN2Number(amount0, decimalsToken0) * childALM.almBalance0) / almHolding.almBalance0;
                                                blacklistedBalance1 -=
                                                    (BN2Number(amount1, decimalsToken1) * childALM.almBalance1) / almHolding.almBalance1;
                                                if (c.campaignParameters.isOutOfRangeIncentivized
                                                    ? BN2Number(amount0, decimalsToken0) > 0 || BN2Number(amount1, decimalsToken1) > 0
                                                    : BN2Number(amount0, decimalsToken0) > 0 && BN2Number(amount1, decimalsToken1) > 0)
                                                    blacklistedLiquidity -=
                                                        (BN2Number(pos.liquidity) * childALM.almTotalLiquidity) / almHolding.almTotalLiquidity;
                                            }
                                        }
                                    }
                                });
                            }
                            else if (c.campaignParameters.blacklist.length > 0) {
                                blacklistedBalance0 = 0;
                                blacklistedBalance1 = 0;
                                blacklistedLiquidity = 0;
                                for (const blacklistedAddress of c.campaignParameters.blacklist) {
                                    const blackAddressPositions = positions?.[amm]?.filter(pos => pos.pool.id === pool.address.toLowerCase() && pos.owner === blacklistedAddress.toLowerCase());
                                    if (!!blackAddressPositions) {
                                        for (const position of blackAddressPositions) {
                                            const [amount0, amount1] = getAmountsForLiquidity(sqrtPrice, Number.parseInt(position.tickLower), Number.parseInt(position.tickUpper), BigNumber.from(position.liquidity));
                                            blacklistedBalance0 += BN2Number(amount0, decimalsToken0);
                                            blacklistedBalance1 += BN2Number(amount1, decimalsToken1);
                                            if (BN2Number(amount0, decimalsToken0) > 0 && BN2Number(amount1, decimalsToken1) > 0)
                                                blacklistedLiquidity += BN2Number(position.liquidity);
                                        }
                                    }
                                }
                            }
                            /** Yearly rewards in $ */
                            const yearlyToken0Rewards = (propToken0 * priceRewardToken * amount * (365 * 24 * 3_600)) / (endTimestamp - startTimestamp);
                            const yearlyToken1Rewards = (propToken1 * priceRewardToken * amount * (365 * 24 * 3_600)) / (endTimestamp - startTimestamp);
                            const yearlyFeeRewards = (propFees * priceRewardToken * amount * (365 * 24 * 3_600)) / (endTimestamp - startTimestamp);
                            let poolAPRkey = "";
                            // /**
                            //  * @notice Stryke users receive rewards with respect to their LP positions (they hold through
                            //  *         Stryke contracts and the `used liquidity` hold in the Stryke option market contracts
                            //  */
                            // if (amm === AMM.Stryke || amm === AMM.StrykePCS) {
                            //   try {
                            //     poolBalanceToken0 +=
                            //       BN2Number(
                            //         await Erc20__factory.connect(c.campaignParameters.token0, providers[chainId]).balanceOf(
                            //           DOPEX_OPTION_MARKET[pool.address.toLowerCase()]
                            //         ),
                            //         c.campaignParameters.decimalsToken0
                            //       ) / 2;
                            //     poolBalanceToken1 +=
                            //       BN2Number(
                            //         await Erc20__factory.connect(c.campaignParameters.token1, providers[chainId]).balanceOf(
                            //           DOPEX_OPTION_MARKET[pool.address.toLowerCase()]
                            //         ),
                            //         c.campaignParameters.decimalsToken1
                            //       ) / 2;
                            //   } catch {
                            //     log.error(
                            //       "clamm dynamic data fetching",
                            //       `failed to handle dopex option market - ${pool.address}`
                            //     );
                            //   }
                            // }
                            /**
                             * General APR (@notice potentially with a boost)
                             */
                            const poolBalanceToken0WithoutBlacklist = Math.max(poolBalanceToken0 - (blacklistedBalance0 ?? 0), 0.00001);
                            const poolBalanceToken1WithoutBlacklist = Math.max(poolBalanceToken1 - (blacklistedBalance1 ?? 0), 0.00001);
                            const poolLiquidityWithoutBlacklist = Math.max(poolTotalLiquidity - (blacklistedLiquidity ?? 0), 0);
                            const tvl = isStrykeCampaign(amm)
                                ? (await axios.get(`https://api.stryke.xyz/clamm/stats/tvl/${pool.address}?chainId=${chainId}`))
                                    .data
                                : poolBalanceToken0WithoutBlacklist * priceToken0 + poolBalanceToken1WithoutBlacklist * priceToken1;
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
                                    address: pool.address,
                                    value: distributionMeanAPR,
                                    type: EAprBreakdownType.AVERAGE,
                                    label: "Average APR (rewards / pool TVL)",
                                });
                                // APR per token
                                poolAPRkey = `APR for holding ${c.campaignParameters.symbolToken0} in pool`;
                                if (!aprs[poolAPRkey])
                                    aprs[poolAPRkey] = 0;
                                aprs[poolAPRkey] += yearlyToken0Rewards / (poolBalanceToken0WithoutBlacklist * priceToken0);
                                // @Hugo wip: new way to structure aprBreakdowns
                                aprBreakdowns.push({
                                    address: pool.address,
                                    value: yearlyToken0Rewards / (poolBalanceToken0WithoutBlacklist * priceToken0),
                                    type: EAprBreakdownType.TOKEN1,
                                    label: c.campaignParameters.symbolToken0,
                                });
                                poolAPRkey = `APR for holding  ${c.campaignParameters.symbolToken1} in pool`;
                                if (!aprs[poolAPRkey])
                                    aprs[poolAPRkey] = 0;
                                aprs[poolAPRkey] += yearlyToken1Rewards / (poolBalanceToken1WithoutBlacklist * priceToken1);
                                // @Hugo wip: new way to structure aprBreakdowns
                                aprBreakdowns.push({
                                    address: pool.address,
                                    value: yearlyToken1Rewards / (poolBalanceToken1WithoutBlacklist * priceToken1),
                                    type: EAprBreakdownType.TOKEN2,
                                    label: c.campaignParameters.symbolToken1,
                                });
                            }
                            else {
                                for (const whitelistedAddress of c.campaignParameters.whitelist) {
                                    const forwarderIndex = distributionForwarders.findIndex(f => utils.getAddress(f.almAddress) === utils.getAddress(whitelistedAddress));
                                    const poolAPRkey = `Whitelisted campaign on ${ammName(amm)} via address ${shortenAddress(c.campaignParameters.whitelist[0])} Average APR`;
                                    if (!aprs[poolAPRkey])
                                        aprs[poolAPRkey] = 0;
                                    // Account for idle liquidity
                                    if (forwarderIndex > -1) {
                                        // @Hugo wip: new way to structure aprBreakdowns
                                        const breakdownWl = {
                                            address: c.campaignParameters.whitelist[0],
                                            value: 0,
                                            type: EAprBreakdownType.WHITELIST,
                                            label: ammName(amm),
                                        };
                                        if (distributionForwarders[forwarderIndex].priority === 2) {
                                            distributionMeanAPR =
                                                (yearlyToken0Rewards + yearlyToken1Rewards + yearlyFeeRewards) /
                                                    (tvl +
                                                        distributionForwarders[forwarderIndex].almBalance0 * priceToken0 +
                                                        distributionForwarders[forwarderIndex].almBalance1 * priceToken1);
                                        }
                                        else {
                                            distributionMeanAPR =
                                                (yearlyToken0Rewards + yearlyToken1Rewards + yearlyFeeRewards) /
                                                    (tvl +
                                                        distributionForwarders[forwarderIndex].almIdleBalance0 * priceToken0 +
                                                        distributionForwarders[forwarderIndex].almIdleBalance1 * priceToken1);
                                        }
                                        distributionMeanAPR =
                                            !distributionMeanAPR || Number.isNaN(distributionMeanAPR) ? 0 : distributionMeanAPR;
                                        // @Hugo wip: new way to structure aprBreakdowns
                                        breakdownWl.value = distributionMeanAPR;
                                        aprBreakdowns.push(breakdownWl);
                                    }
                                }
                                aprs[poolAPRkey] += distributionMeanAPR;
                            }
                            /**
                             * ALM APRs
                             * @notice given a campaign
                             * */
                            distributionForwarders.forEach((alm, index) => {
                                const targetForwarder = distributionForwarders.filter(f => f.almAddress.toLowerCase() === alm.target.toLowerCase())?.[0];
                                // @Hugo wip: new way to structure aprBreakdowns
                                const aprsBreakdown = getForwarderAprbreakDown(distributionForwarders, alm, c, pool, yearlyToken0Rewards, yearlyToken1Rewards, yearlyFeeRewards, poolBalanceToken0WithoutBlacklist, poolBalanceToken1WithoutBlacklist, poolLiquidityWithoutBlacklist, tvl, distributionMeanAPR, index, chainId, amm);
                                // @Hugo wip: new way to structure aprBreakdowns
                                aprsBreakdown && aprBreakdowns.push(aprsBreakdown);
                                const isALMWhitelisted = c.campaignParameters.whitelist.length > 0
                                    ? isStrykeCampaign(pool.amm)
                                        ? true
                                        : isWhitelisted(alm.sender, c.campaignParameters.whitelist) ||
                                            isWhitelisted(alm.almAddress, c.campaignParameters.whitelist) ||
                                            isWhitelisted(!!alm?.owner ? alm.owner : "", c.campaignParameters.whitelist) ||
                                            isWhitelisted(!!alm?.target ? alm.target : "", c.campaignParameters.whitelist) ||
                                            (!!targetForwarder?.owner &&
                                                isWhitelisted(targetForwarder?.owner, c.campaignParameters.whitelist))
                                    : true;
                                const isBlacklistedByCampaign = isBlacklisted(alm.sender, c.campaignParameters.blacklist) ||
                                    isBlacklisted(alm.almAddress, c.campaignParameters.blacklist) ||
                                    (!!alm?.target && isBlacklisted(alm?.target, c.campaignParameters.blacklist)) ||
                                    !isALMWhitelisted;
                                if (!isBlacklistedByCampaign && !!alm.almTVL && alm.almTVL > 0) {
                                    try {
                                        poolAPRkey = `${almName(alm.origin)} ${alm.almAddress}`;
                                        if (!aprs[poolAPRkey])
                                            aprs[poolAPRkey] = 0;
                                        // Token 0 APR
                                        const almToken0APR = (yearlyToken0Rewards * (alm?.almBalance0 ?? 0 - alm?.almIdleBalance0 ?? 0)) /
                                            poolBalanceToken0WithoutBlacklist /
                                            alm.almTVL;
                                        aprs[poolAPRkey] += almToken0APR;
                                        // Token 1 APR
                                        const almToken1APR = (yearlyToken1Rewards * (alm?.almBalance1 ?? 0 - alm?.almIdleBalance1 ?? 0)) /
                                            poolBalanceToken1WithoutBlacklist /
                                            alm.almTVL;
                                        ((alm.almBalance1 / (alm?.almBalance1 ?? 0 + alm?.almIdleBalance1 ?? 0)) *
                                            alm.almBalance1 *
                                            yearlyToken1Rewards) /
                                            poolBalanceToken1WithoutBlacklist /
                                            alm.almTVL;
                                        aprs[poolAPRkey] += almToken1APR;
                                        // Fee APR
                                        const almFeeAPR = (yearlyFeeRewards * (alm?.almInRangeLiquidity ?? 0)) / poolLiquidityWithoutBlacklist / alm.almTVL;
                                        aprs[poolAPRkey] += almFeeAPR;
                                        if (isStrykeCampaign(amm)) {
                                            // computation is less precise here as we don't have the details of balances
                                            aprs[poolAPRkey] = (yearlyToken0Rewards + yearlyToken1Rewards + yearlyFeeRewards) / tvl;
                                        }
                                        /** Fix to tackle discrepancies in the APRs when there is a whitelist */
                                        if ((c.campaignParameters.whitelist?.length === 1 &&
                                            (isWhitelisted(alm.sender, c.campaignParameters.whitelist) ||
                                                isWhitelisted(alm.almAddress, c.campaignParameters.whitelist) ||
                                                isWhitelisted(!!alm?.target ? alm.target : "", c.campaignParameters.whitelist) ||
                                                isWhitelisted(!!alm?.owner ? alm.owner : "", c.campaignParameters.whitelist))) ||
                                            (!!targetForwarder?.owner &&
                                                isWhitelisted(targetForwarder?.owner, c.campaignParameters.whitelist))) {
                                            if (aprs[poolAPRkey] < distributionMeanAPR || !aprs[poolAPRkey] || aprs[poolAPRkey] > 1e12) {
                                                aprs[poolAPRkey] = distributionMeanAPR;
                                            }
                                        }
                                        distributionForwarders[index].almAPR = aprs[poolAPRkey];
                                    }
                                    catch (e) {
                                        log.error("CLAMMDynamicData", `failed to compute ALM APR for ${alm.almAddress} (sender ${alm.sender}) on ${NETWORK_LABELS[chainId]}: ${e}`);
                                    }
                                }
                            });
                        }
                        const rewardTokens = await TokenService.findManyOrCreate([
                            { chainId: campaign.chainId, address: campaign.rewardToken },
                        ]);
                        const rewardToken = rewardTokens[0];
                        distributionMeanAPR = rewardToken.isPoint ? distributionMeanAPR / 365 / 100 : distributionMeanAPR;
                        let poolBalanceToken0WithoutBlacklist = poolBalanceToken0 - (blacklistedBalance0 ?? 0);
                        poolBalanceToken0WithoutBlacklist = !!poolBalanceToken0WithoutBlacklist
                            ? poolBalanceToken0WithoutBlacklist
                            : 0.00001;
                        let poolBalanceToken1WithoutBlacklist = poolBalanceToken1 - (blacklistedBalance1 ?? 0);
                        poolBalanceToken1WithoutBlacklist = !!poolBalanceToken1WithoutBlacklist
                            ? poolBalanceToken1WithoutBlacklist
                            : 0.00001;
                        dynamicData.push({
                            ...campaign,
                            amm: pool.amm,
                            ammAlgo: AMMAlgorithmMapping[pool.amm],
                            ammAlgoName: AMMAlgorithm[AMMAlgorithmMapping[pool.amm]],
                            ammName: AMM[pool.amm],
                            apr: distributionMeanAPR,
                            aprs,
                            aprBreakdowns,
                            blacklistedBalance0,
                            blacklistedBalance1,
                            blacklistedLiquidity,
                            forwarders: distributionForwarders,
                            isLive,
                            isMock: c.campaignParameters.symbolRewardToken === "aglaMerkl",
                            poolBalanceToken0,
                            poolBalanceToken1,
                            poolTotalLiquidity,
                            symbolToken0,
                            symbolToken1,
                            tick: getTickAtSqrtRatio(JSBI.BigInt(sqrtPrice)),
                            priceRewardToken: priceRewardToken,
                            tvl: isStrykeCampaign(pool.amm)
                                ? (await axios.get(`https://api.stryke.xyz/clamm/stats/tvl/${pool.address}?chainId=${chainId}`))
                                    .data
                                : poolBalanceToken0 * priceToken0 + poolBalanceToken1 * priceToken1,
                        });
                    }
                }
            }
        }
        return dynamicData;
    }
}
function getForwarderAprbreakDown(distributionForwarders, alm, campaign, pool, yearlyToken0Rewards, yearlyToken1Rewards, yearlyFeeRewards, poolBalanceToken0WithoutBlacklist, poolBalanceToken1WithoutBlacklist, poolLiquidityWithoutBlacklist, tvl, distributionMeanAPR, index, chainId, amm) {
    if (!distributionForwarders)
        return null;
    let aprBreakdowns = null;
    const targetForwarder = distributionForwarders.filter(f => f.almAddress.toLowerCase() === alm.target.toLowerCase())?.[0];
    const isALMWhitelisted = campaign.campaignParameters.whitelist.length > 0
        ? isStrykeCampaign(pool.amm)
            ? true
            : isWhitelisted(alm.sender, campaign.campaignParameters.whitelist) ||
                isWhitelisted(alm.almAddress, campaign.campaignParameters.whitelist) ||
                isWhitelisted(!!alm?.owner ? alm.owner : "", campaign.campaignParameters.whitelist) ||
                isWhitelisted(!!alm?.target ? alm.target : "", campaign.campaignParameters.whitelist) ||
                (!!targetForwarder?.owner && isWhitelisted(targetForwarder?.owner, campaign.campaignParameters.whitelist))
        : true;
    const isBlacklistedByCampaign = isBlacklisted(alm.sender, campaign.campaignParameters.blacklist) ||
        isBlacklisted(alm.almAddress, campaign.campaignParameters.blacklist) ||
        (!!alm?.target && isBlacklisted(alm?.target, campaign.campaignParameters.blacklist)) ||
        !isALMWhitelisted;
    if (!isBlacklistedByCampaign && !!alm.almTVL && alm.almTVL > 0) {
        try {
            // Token 0 APR
            const almToken0APR = (yearlyToken0Rewards * (alm?.almBalance0 ?? 0 - alm?.almIdleBalance0 ?? 0)) /
                poolBalanceToken0WithoutBlacklist /
                alm.almTVL;
            // Token 1 APR
            const almToken1APR = (yearlyToken1Rewards * (alm?.almBalance1 ?? 0 - alm?.almIdleBalance1 ?? 0)) /
                poolBalanceToken1WithoutBlacklist /
                alm.almTVL;
            // Fee APR
            const almFeeAPR = (yearlyFeeRewards * (alm?.almInRangeLiquidity ?? 0)) / poolLiquidityWithoutBlacklist / alm.almTVL;
            let aprValue = almToken0APR + almToken1APR + almFeeAPR;
            // computation is less precise here as we don't have the details of balances
            if (isStrykeCampaign(amm))
                aprValue = (yearlyToken0Rewards + yearlyToken1Rewards + yearlyFeeRewards) / tvl;
            /** Fix to tackle discrepancies in the APRs when there is a whitelist */
            if ((campaign.campaignParameters.whitelist?.length === 1 &&
                (isWhitelisted(alm.sender, campaign.campaignParameters.whitelist) ||
                    isWhitelisted(alm.almAddress, campaign.campaignParameters.whitelist) ||
                    isWhitelisted(!!alm?.target ? alm.target : "", campaign.campaignParameters.whitelist) ||
                    isWhitelisted(!!alm?.owner ? alm.owner : "", campaign.campaignParameters.whitelist))) ||
                (!!targetForwarder?.owner && isWhitelisted(targetForwarder?.owner, campaign.campaignParameters.whitelist))) {
                if (aprValue < distributionMeanAPR || !aprValue || aprValue > 1e12)
                    aprValue = distributionMeanAPR;
            }
            aprBreakdowns = {
                address: pool.address,
                value: aprValue,
                type: EAprBreakdownType.FORWARDER,
                label: almName(alm.origin),
            };
            distributionForwarders[index].almAPR = aprValue; // @Hugo wip: new way to structure aprBreakdowns + check this
        }
        catch (e) {
            log.error("CLAMMDynamicData", `failed to compute ALM APR for ${alm.almAddress} (sender ${alm.sender}) on ${NETWORK_LABELS[chainId]}: ${e}`);
        }
    }
    return aprBreakdowns;
}
