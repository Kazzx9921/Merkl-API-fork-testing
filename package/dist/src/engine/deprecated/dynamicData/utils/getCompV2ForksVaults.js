import { Redis } from "@/cache";
import { batchMulticallCallWithRetry } from "@/utils/generic";
import { log } from "@/utils/logger";
import { providers } from "@/utils/providers";
import { CTokenInterface, ChainId, CompFork, Comptrollers, ERC20Interface, NULL_ADDRESS, } from "@sdk";
import { defaultAbiCoder } from "ethers/lib/utils";
import { safeFetchLogs } from "./fetchLogs";
import { getContractCreationBlock } from "./getContractCreationBlock";
const MARKET_SUPPORTED_EVENT_HASH = "0xaf16ad15f9e29d5140e8e81a30a92a755aa8edff3d301053c84392b70c0d09a3"; // For the case of Venus
const MARKET_LISTED_EVENT_HASH = "0xcf583bb0c569eb967f806b11601c4cb93c10310485c67add5f8362c2f212321f";
async function getCompoundV2ForksVaults() {
    const compoundVaults = {};
    //TODO can be optimized by looking to the same event over all forks for the same chain, then filtering out for each fork
    for (const compFork of Object.keys(Comptrollers).map(compFork => Number(compFork))) {
        for (const chainId of Object.keys(Comptrollers[compFork]).map(compFork => Number(compFork))) {
            if ([ChainId.LINEA].includes(chainId)) {
                continue;
            }
            log.local(`Fetching Compound V2 vaults on ${ChainId[chainId]}, for ${CompFork[compFork]}`);
            const toBlock = await providers[chainId].getBlockNumber();
            const comptrollerAddress = Comptrollers[compFork][chainId];
            if (!comptrollerAddress) {
                continue;
            }
            const creationBlock = (await getContractCreationBlock(comptrollerAddress, providers[chainId])) ?? 0;
            let logs = [];
            let topic;
            if (compFork === CompFork.Venus && (chainId === ChainId.ZKSYNC || chainId === ChainId.SONIC)) {
                topic = MARKET_SUPPORTED_EVENT_HASH;
            }
            else if (compFork === CompFork.Enclabs) {
                topic = MARKET_SUPPORTED_EVENT_HASH;
            }
            else {
                topic = MARKET_LISTED_EVENT_HASH;
            }
            logs = await safeFetchLogs(chainId, [topic], [comptrollerAddress], creationBlock, toBlock);
            if (compFork === CompFork.Ionic && chainId === ChainId.MODE) {
                const isolatedIonicMarketUnitroller = "0x8Fb3D4a94D0aA5D6EDaAC3Ed82B59a27f56d923a";
                const creationBlock = (await getContractCreationBlock(isolatedIonicMarketUnitroller, providers[chainId])) ?? 0;
                const isolatedMarketLogs = await safeFetchLogs(chainId, [topic], [isolatedIonicMarketUnitroller], creationBlock, toBlock);
                logs = logs.concat(isolatedMarketLogs);
            }
            const vaults = Object.keys(logs.reduce((acc, transfer) => {
                if (transfer.data !== "0x") {
                    const [cToken] = defaultAbiCoder.decode(["address"], transfer.data);
                    if (!!cToken) {
                        acc[cToken] = true;
                    }
                }
                else {
                    const [cToken] = defaultAbiCoder.decode(["address"], transfer.topics[1]);
                    if (!!cToken) {
                        acc[cToken] = true;
                    }
                }
                return acc;
            }, {}));
            // Ensure that the entry in compoundVaults for the current chainId and compFork exists
            const key = `${String(chainId)}_${String(compFork)}`;
            if (!compoundVaults[key]) {
                compoundVaults[key] = [];
            }
            const callsUnderlying = [];
            vaults.forEach(vaultAddress => {
                callsUnderlying.push({
                    allowFailure: true,
                    callData: CTokenInterface.encodeFunctionData("underlying"),
                    target: vaultAddress,
                });
            });
            const resUnderlying = await batchMulticallCallWithRetry(chainId, {
                calls: callsUnderlying,
            });
            const calls = [];
            for (const [index, vaultAddress] of vaults.entries()) {
                let underlying = NULL_ADDRESS;
                if (!resUnderlying[index].success || resUnderlying[index].returnData === "0x") {
                    // const message = `Failed to fetch underlying of ${vaultAddress}`;
                    // log.warn(message);
                }
                else {
                    underlying = CTokenInterface.decodeFunctionResult("underlying", resUnderlying[index].returnData)[0];
                }
                calls.push({
                    allowFailure: true,
                    callData: CTokenInterface.encodeFunctionData("symbol"),
                    target: vaultAddress,
                }, {
                    allowFailure: true,
                    callData: CTokenInterface.encodeFunctionData("decimals"),
                    target: vaultAddress,
                }, {
                    allowFailure: true,
                    callData: ERC20Interface.encodeFunctionData("symbol"),
                    target: underlying,
                }, {
                    allowFailure: true,
                    callData: ERC20Interface.encodeFunctionData("decimals"),
                    target: underlying,
                });
            }
            const res = await batchMulticallCallWithRetry(chainId, {
                calls,
            });
            // Add the found vaults to the compoundVaults object
            let index = 0;
            for (const [vaultIndex, vaultAddress] of vaults.entries()) {
                let underlying = NULL_ADDRESS;
                let symbolUnderlying = "ETH";
                let decimalsUnderlying = 18;
                if (!resUnderlying[vaultIndex].success || resUnderlying[vaultIndex].returnData === "0x") {
                    // const message = `Failed to fetch underlying of ${vaultAddress}`;
                    // log.warn(message);
                }
                else {
                    underlying = CTokenInterface.decodeFunctionResult("underlying", resUnderlying[vaultIndex].returnData)[0];
                }
                if (res[index + 2].returnData !== "0x") {
                    symbolUnderlying = ERC20Interface.decodeFunctionResult("symbol", res[index + 2].returnData)[0];
                }
                if (res[index + 3].returnData !== "0x") {
                    decimalsUnderlying = ERC20Interface.decodeFunctionResult("decimals", res[index + 3].returnData)[0];
                }
                const symbolCToken = CTokenInterface.decodeFunctionResult("symbol", res[index].returnData)[0];
                const decimalsCToken = CTokenInterface.decodeFunctionResult("decimals", res[index + 1].returnData)[0];
                compoundVaults[key].push({
                    address: vaultAddress,
                    symbolCToken: symbolCToken,
                    underlying: underlying,
                    decimalsCToken: decimalsCToken,
                    symbolUnderlying: symbolUnderlying,
                    decimalsUnderlying: decimalsUnderlying,
                });
                index += 4;
            }
        }
    }
    return compoundVaults;
}
export const getCompoundV2ForksVaultsWithCache = async () => await Redis.getOrSet("CompoundV2ForksVaults", getCompoundV2ForksVaults);
