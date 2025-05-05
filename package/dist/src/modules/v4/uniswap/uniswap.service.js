import { safeFetchLogs } from "@/engine/deprecated/dynamicData/utils/fetchLogs";
import { BlacklistService } from "@/modules/v4/blacklist/blacklist.service";
import { ChainService } from "@/modules/v4/chain/chain.service";
import { MerklRootService } from "@/modules/v4/merklRoot/merklRoot.service";
import { OpportunityService } from "@/modules/v4/opportunity/opportunity.service";
import { RewardService } from "@/modules/v4/reward/reward.service";
import { log } from "@/utils/logger";
import { providers } from "@/utils/providers";
import { ChainInteractionService, ERC20Interface, NETWORK_LABELS, NULL_ADDRESS, UniswapV4Addresses, UniswapV4PoolManagerInterface, getContractCreationBlock, } from "@sdk";
import { getAddress } from "viem";
import { LoggedEntityType, UniV4ChainIdArray, } from "./uniswap.model";
import { UniswapRepository } from "./uniswap.repository";
export class UniswapService {
    static async findRewardsPerPosition(version, query) {
        /** Check if the user is blacklisted */
        const isBlacklisted = !!(await BlacklistService.isBlacklisted(query.address));
        // chainId => pool => NFT or Position ID => [rewards]
        const res = {};
        if (isBlacklisted)
            return res;
        const chains = await ChainService.findMany({});
        const chainIds = chains.map(({ id }) => id);
        /** Fetch current Merkle Roots */
        const merkleRootsPromises = await Promise.allSettled(chainIds.map(chainId => MerklRootService.fetchFromCache(chainId)));
        const merkleRoots = merkleRootsPromises
            .filter(({ status }) => status === "fulfilled")
            .map(x => x.value);
        /** Get breakdowns of rewards containing the correct version */
        const rewards = RewardService.format(await RewardService.getByRecipient(query.address, merkleRoots.map(({ live }) => live), true, false, null, version === "v3" ? "UniswapV3" : "UniswapV4"));
        for (const reward of rewards) {
            const rewardToken = reward.token;
            for (const breakdown of reward.breakdowns) {
                if (version === "v3" && !breakdown.opportunity.explorerAddress)
                    continue;
                const pool = version === "v3" ? getAddress(breakdown.opportunity.explorerAddress) : breakdown.reason.split("_")[1];
                const { opportunity: rawOpportunity, ...props } = breakdown;
                const opportunity = OpportunityService.formatResponseBase(rawOpportunity);
                const chainId = opportunity.chainId;
                const positionId = breakdown.reason.split("_")[version === "v3" ? 1 : 2];
                // There can be chain, pool and position Id filter in the request
                if (!!chainId && (!query.chainId || chainId === query.chainId)) {
                    if (!!pool && (!query.pool || pool === query.pool)) {
                        if (!!positionId && (!query.positionId || positionId === query.positionId)) {
                            try {
                                res[chainId] = res[chainId] ?? {};
                                res[chainId][pool] = res[chainId][pool] ?? {};
                                res[chainId][pool][positionId] = res[chainId][pool][positionId] ?? [];
                                res[chainId][pool][positionId].push({
                                    ...props,
                                    opportunity,
                                    rewardToken,
                                });
                            }
                            catch {
                                log.warn(`failed to parse positionId for reason for pool ${pool} and version ${version}`);
                            }
                        }
                    }
                }
            }
        }
        return res;
    }
    static async getUniswapV4Pools(chainId) {
        let chainIdArray;
        if (!!chainId) {
            chainIdArray = [chainId];
        }
        else {
            chainIdArray = UniV4ChainIdArray;
        }
        const pools = {};
        // 0_ Fetch all univ4 pools from API database
        const storedPools = await UniswapRepository.getStoredUniswapV4Pools(chainId);
        const res = await Promise.all(chainIdArray.map(async (chainId) => {
            chainId = chainId;
            const perChainIdRes = {};
            const poolManagerAddress = UniswapV4Addresses[chainId]?.PoolManager ?? NULL_ADDRESS;
            const jsonRPCprovider = providers[chainId];
            try {
                // 1_ Get latest uniswapV4 pools for `chainId`
                const storedPoolsPerChain = storedPools.filter(pool => pool.chainId === chainId);
                log.info(`found ${storedPoolsPerChain.length} already stored pools on ${NETWORK_LABELS[chainId]}`);
                let fromBlock;
                if (storedPoolsPerChain.length > 0) {
                    fromBlock = Math.max(...storedPoolsPerChain.map(x => x.fetchAtBlock)) + 1;
                }
                else {
                    fromBlock = await getContractCreationBlock(poolManagerAddress, jsonRPCprovider);
                }
                if (fromBlock < 0) {
                    fromBlock = 1;
                }
                const toBlock = await jsonRPCprovider.getBlockNumber();
                const logs = await safeFetchLogs(chainId, // TODO: rm type enforcing
                [UniswapV4PoolManagerInterface.getEventTopic("Initialize")], [poolManagerAddress], fromBlock, toBlock);
                const decodedPools = await Promise.all(logs.map(async (log) => {
                    const [id, currency0, currency1, fee, tickSpacing, hooks] = UniswapV4PoolManagerInterface.decodeEventLog("Initialize", log.data, log.topics);
                    // Match typing
                    return {
                        poolId: id,
                        chainId: chainId,
                        currency0: currency0,
                        currency1: currency1,
                        tickSpacing: tickSpacing,
                        lpFee: fee,
                        hooks: hooks,
                        fetchedAtBlock: Number(log.blockNumber),
                    };
                }));
                log.local(`fetched ${decodedPools.length} pool(s) on ${NETWORK_LABELS[chainId] ?? "Sepolia"} between blocks ${fromBlock} and ${toBlock}`);
                /** Extra calls batch to get the collateral addresses */
                const resCurrencies = await ChainInteractionService(chainId).fetchState(decodedPools.flatMap(pool => {
                    return [
                        {
                            allowFailure: true,
                            callData: ERC20Interface.encodeFunctionData("symbol"),
                            target: pool.currency0,
                        },
                        {
                            allowFailure: true,
                            callData: ERC20Interface.encodeFunctionData("decimals"),
                            target: pool.currency0,
                        },
                        {
                            allowFailure: true,
                            callData: ERC20Interface.encodeFunctionData("symbol"),
                            target: pool.currency1,
                        },
                        {
                            allowFailure: true,
                            callData: ERC20Interface.encodeFunctionData("decimals"),
                            target: pool.currency1,
                        },
                    ].filter(x => x.target !== NULL_ADDRESS);
                }));
                let index = 0;
                for (const pool of decodedPools) {
                    let symbolCurrency0 = "UNKNOWN";
                    let decimalsCurrency0 = 18;
                    if (pool.currency0 !== NULL_ADDRESS) {
                        try {
                            symbolCurrency0 = ERC20Interface.decodeFunctionResult("symbol", resCurrencies[index].returnData)[0];
                            if (symbolCurrency0.includes("/") || symbolCurrency0.includes("\u0000")) {
                                symbolCurrency0 = "INVALID";
                            }
                            decimalsCurrency0 = ERC20Interface.decodeFunctionResult("decimals", resCurrencies[index + 1].returnData)[0];
                        }
                        catch {
                            log.error("getUniswapV4Pools", `issue when fetching symbol / decimals for currency0 ${pool.currency0} of pool ${pool.poolId} on ${NETWORK_LABELS[chainId]}`);
                        }
                    }
                    else {
                        symbolCurrency0 = "ETH";
                        decimalsCurrency0 = 18;
                        index -= 2;
                    }
                    let symbolCurrency1 = "UNKNOWN";
                    let decimalsCurrency1 = 18;
                    if (pool.currency1 !== NULL_ADDRESS) {
                        try {
                            symbolCurrency1 = ERC20Interface.decodeFunctionResult("symbol", resCurrencies[index + 2].returnData)[0];
                            if (symbolCurrency1.includes("/") || symbolCurrency1.includes("\u0000")) {
                                symbolCurrency1 = "INVALID";
                            }
                            decimalsCurrency1 = ERC20Interface.decodeFunctionResult("decimals", resCurrencies[index + 3].returnData)[0];
                        }
                        catch {
                            log.error("getUniswapV4Pools", `issue when fetching symbol / decimals for currency1 ${pool.currency1} of pool ${pool.poolId} on ${NETWORK_LABELS[chainId]}`);
                        }
                    }
                    else {
                        symbolCurrency1 = "ETH";
                        decimalsCurrency1 = 18;
                        index -= 2;
                    }
                    const id = pool.poolId;
                    perChainIdRes[id ?? "unknownKey"] = {
                        chainId: pool.chainId,
                        currency0: pool.currency0,
                        currency1: pool.currency1,
                        decimalsCurrency0,
                        decimalsCurrency1,
                        hooks: pool.hooks,
                        fetchedAtBlock: pool.fetchedAtBlock,
                        lpFee: pool.lpFee,
                        poolId: id,
                        symbolCurrency0,
                        symbolCurrency1,
                        tickSpacing: pool.tickSpacing,
                    };
                    index += 4;
                }
            }
            catch (e) {
                log.error(`issue when fetching UniswapV4 pools on ${NETWORK_LABELS[chainId]}`, e);
            }
            return perChainIdRes;
        }));
        chainIdArray.forEach((chainId, i) => {
            if (!!res[i])
                pools[chainId] = res[i];
        });
        // Update the API database
        const tableData = Object.values(pools).flatMap(pools => Object.values(pools));
        for (const chainId of chainIdArray) {
            if (tableData.filter(p => p.chainId === chainId).length > 0) {
                try {
                    await UniswapRepository.createMany(tableData
                        .filter(point => point.chainId === chainId)
                        .map(pool => ({
                        fetchAtBlock: pool.fetchedAtBlock,
                        caughtFromAddress: UniswapV4Addresses[pool.chainId]?.PoolManager ?? NULL_ADDRESS,
                        chainId: pool.chainId,
                        entityData: pool,
                        id: Bun.hash(`${pool.poolId}-${pool.chainId}`).toString(),
                        type: LoggedEntityType.UNISWAP_V4,
                    })));
                    log.info(`✅ successfully saved vaults to API database ('Logged' table) on ${NETWORK_LABELS[chainId]}`);
                }
                catch (e) {
                    log.error("getUniswapV4Pools/LoggedTableUpdate", e);
                    throw new Error(`Error while saving UniV4 pools to API database ('Logged' table) on ${NETWORK_LABELS[chainId]}`);
                }
            }
        }
        log.info(`✅ successfully fetched ${tableData.length} new pool(s) on UniswapV4`);
        // _ Merge previoulsy stored pools with newly fetched ones
        // TODO optimize this part
        if (storedPools.length > 0) {
            for (const pool of storedPools) {
                const chainId = pool.chainId;
                if (!pools[chainId])
                    pools[chainId] = {};
                pools[chainId][pool.entityData.poolId] = pool.entityData;
            }
        }
        log.info("👋 exiting getUniswapV4Pools");
        return pools;
    }
    /** @deprecated */
    static async getUniswapV4PoolsForChain(chainId) {
        return await UniswapService.getUniswapV4Pools(chainId);
    }
}
