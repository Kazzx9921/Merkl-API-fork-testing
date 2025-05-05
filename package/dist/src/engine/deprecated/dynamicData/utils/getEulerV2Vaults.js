import { fetchEulerVaultName } from "@/engine/deprecated/erc20SubTypeProcessors/helpers/eulerVaultNames";
import { batchMulticallCallWithRetry } from "@/utils/generic";
import { log, logger } from "@/utils/logger";
import { providers } from "@/utils/providers";
import { apiDbClient } from "@db";
import { ChainInteractionService, ERC20Interface, EULER_ADDRESSES, EulerEVKInterface, EulerVaultLensInterface, EulerVault__factory, NETWORK_LABELS, eulerChainIds, getContractCreationBlock, } from "@sdk";
import { getAddress } from "ethers/lib/utils";
import _ from "lodash";
import { safeFetchLogs } from "./fetchLogs";
export var LoggedEntityType;
(function (LoggedEntityType) {
    LoggedEntityType["EULER"] = "EULER_VAULT";
    LoggedEntityType["UNISWAP_V4"] = "UNISWAP_V4";
})(LoggedEntityType || (LoggedEntityType = {}));
async function computeCollatListAndReturnVaults(chainId, vaults) {
    let vaultsPerChain = [];
    /** Extra calls batch to get the collateral addresses */
    const resCollat = await batchMulticallCallWithRetry(chainId, {
        calls: vaults
            .map(vault => vault.address)
            .map(vaultAddress => {
            return {
                allowFailure: true,
                callData: EulerVaultLensInterface.encodeFunctionData("getRecognizedCollateralsLTVInfo", [vaultAddress]),
                target: EULER_ADDRESSES[chainId].VAULT_LENS,
            };
        }),
    });
    const callsToCollat = [];
    const callsToCollatUnderlying = [];
    // To keep track of all collat data
    const collateralDataArray = [];
    let k = 0;
    for (const [index, vault] of vaults.entries()) {
        const collatArray = EulerVaultLensInterface.decodeFunctionResult("getRecognizedCollateralsLTVInfo", resCollat[index].returnData)[0];
        for (const collat of collatArray) {
            if (!!vault.collaterals &&
                vault.collaterals.map(c => c.address.toLowerCase()).includes(collat.collateral.toLowerCase())) {
                continue;
            }
            log.info(`🦭 found new collateral ${collat.collateral} for vault ${vault.address} (${NETWORK_LABELS[chainId]})`);
            collateralDataArray.push({ vaultAddress: vault.address, address: collat.collateral, callsToCollatIndex: k });
            k++;
            callsToCollat.push({
                allowFailure: true,
                callData: EulerEVKInterface.encodeFunctionData("symbol"),
                target: collat.collateral,
            }, {
                allowFailure: true,
                callData: EulerEVKInterface.encodeFunctionData("asset"),
                target: collat.collateral,
            });
        }
    }
    const resCallsToCollat = await batchMulticallCallWithRetry(chainId, {
        calls: callsToCollat,
    });
    let j = 0;
    for (let i = 0; i < resCallsToCollat.length; i = i + 2) {
        const collatData = collateralDataArray.find(collat => collat.callsToCollatIndex === i / 2);
        try {
            // 1_ Collat symbol
            const symbolCollateral = EulerEVKInterface.decodeFunctionResult("symbol", resCallsToCollat[i].returnData)[0];
            collatData.symbolCollateral = symbolCollateral;
            // 2_ Underlying asset => warning it can be undefined and throw an error
            const underlyingToken = EulerEVKInterface.decodeFunctionResult("asset", resCallsToCollat[i + 1].returnData)[0];
            callsToCollatUnderlying.push({
                allowFailure: true,
                callData: ERC20Interface.encodeFunctionData("symbol"),
                target: underlyingToken,
            });
            collatData.callsToCollatUnderlyingIndex = j;
            j++;
        }
        catch {
            logger.warn(`🦭 error while decoding underlying token address for collat ${JSON.stringify(collatData)}`);
        }
    }
    let resCallsToCollatUnderlying;
    if (callsToCollatUnderlying.length > 0) {
        resCallsToCollatUnderlying = await batchMulticallCallWithRetry(chainId, {
            calls: callsToCollatUnderlying,
        });
    }
    vaultsPerChain = vaultsPerChain.concat((await Promise.all(vaults.map(async (vault, index) => {
        const collatArray = EulerVaultLensInterface.decodeFunctionResult("getRecognizedCollateralsLTVInfo", resCollat[index].returnData)[0];
        if (!vault.collaterals)
            vault.collaterals = [];
        for (const [_index, collat] of collatArray.entries()) {
            // _ Check whether the collat was already registered
            if (!!vault.collaterals &&
                vault.collaterals.map(c => c.address.toLowerCase()).includes(collat.collateral.toLowerCase())) {
                continue;
            }
            const collatData = collateralDataArray.find(c => c.vaultAddress?.toLowerCase() === vault.address?.toLowerCase() && c.address === collat.collateral);
            if (!collatData || collatData.address !== collat.collateral) {
                logger.warn(`🦭 issue when fetching data for collat ${collat.collateral} on vault ${vault.address}`);
                console.log(collatData, collat.collateral);
                process.exit(1);
            }
            // Collateral symbol
            const symbolCollateral = collatData.symbolCollateral ?? "Unknown";
            // Collat underlying symbol
            let symbolUnderlying = "Unknown";
            try {
                symbolUnderlying = ERC20Interface.decodeFunctionResult("symbol", resCallsToCollatUnderlying[collatData.callsToCollatUnderlyingIndex ?? -1].returnData)[0];
            }
            catch { }
            vault.collaterals.push({
                address: getAddress(collat.collateral),
                symbol: symbolCollateral,
                symbolUnderlying: symbolUnderlying,
                borrowLTV: collat.borrowLTV.toString(),
                name: (await fetchEulerVaultName(collat.collateral, chainId)) ?? symbolCollateral,
            });
        }
        return { ...vault };
    }))));
    return vaultsPerChain;
}
export async function getEulerV2Vaults(chainId) {
    let chainIdArray;
    if (!!chainId) {
        chainIdArray = [chainId];
    }
    else {
        chainIdArray = eulerChainIds;
    }
    let vaults = [];
    // 0_ Fetch all euler vaults from database
    const storedVaults = await apiDbClient.logged.findMany({
        where: { type: LoggedEntityType.EULER, ...(!!chainId && { chainId: chainId }) },
    });
    const res = await Promise.all(chainIdArray.map(async (chainId) => {
        let vaultsPerChain = [];
        chainId = chainId;
        try {
            // 1_ Get latest euler vaults from chain
            const storedVaultsPerChain = storedVaults.filter(vault => vault.chainId === chainId);
            log.info(`🎈 found ${storedVaultsPerChain.length} already stored vaults on ${NETWORK_LABELS[chainId]}`);
            let fromBlock;
            if (storedVaultsPerChain.length > 0) {
                fromBlock = Math.max(...storedVaultsPerChain.map(vault => vault.fetchAtBlock)) + 1;
            }
            else {
                fromBlock = await getContractCreationBlock(EULER_ADDRESSES[chainId].VAULT_FACTORY, ChainInteractionService(chainId).provider());
            }
            const toBlock = await providers[chainId].getBlockNumber();
            // Check
            if (fromBlock >= toBlock) {
                throw new Error(`fromBlock ${fromBlock} is greater than toBlock ${toBlock}`);
            }
            const logs = await safeFetchLogs(chainId, [EulerEVKInterface.getEventTopic("EVaultCreated")], [], fromBlock, toBlock);
            const decodedVaults = await Promise.all(logs.map(async (log) => {
                try {
                    const aux = EulerEVKInterface.decodeEventLog("EVaultCreated", log.data, log.topics);
                    const name = (await EulerVault__factory.connect(log.address, providers[chainId]).name()).split(" ");
                    const vaultName = (await fetchEulerVaultName(getAddress(log.address), chainId)) ?? name[name.length - 1];
                    // Match previous typings
                    return {
                        address: getAddress(log.address.toString()),
                        asset: aux[1].toString(),
                        fetchedAtBlock: Number(log.blockNumber),
                        chainId: chainId,
                        debtTokenAddress: aux[2].toString(),
                        name: vaultName,
                    };
                }
                catch {
                    logger.error(`issue when fetching data on ${NETWORK_LABELS[chainId]} for vault ${log.address}`);
                    return {};
                }
            }));
            log.info(`fetched ${decodedVaults.length} vaults(s) on ${NETWORK_LABELS[chainId]} between blocks ${fromBlock} and ${toBlock}`);
            vaultsPerChain = await computeCollatListAndReturnVaults(chainId, decodedVaults);
            return vaultsPerChain;
        }
        catch (e) {
            log.error(`issue when fetching vaults on ${NETWORK_LABELS[chainId]}`, e);
        }
        return vaultsPerChain;
    }));
    for (const resPerChain of res) {
        if (!!resPerChain && resPerChain.length > 0) {
            vaults = vaults.concat(resPerChain);
        }
    }
    // Update the API database
    if (vaults.length > 0) {
        try {
            await apiDbClient.logged.createMany({
                data: vaults.map(vault => ({
                    fetchAtBlock: vault.fetchedAtBlock,
                    caughtFromAddress: EULER_ADDRESSES[vault.chainId].VAULT_FACTORY,
                    chainId: vault.chainId,
                    address: getAddress(vault.address),
                    entityData: vault,
                    id: Bun.hash(`${vault.address}-${vault.chainId}`).toString(),
                    type: LoggedEntityType.EULER,
                })),
            });
            log.info(`✅ successfully saved ${vaults.length} new vault(s) to API database ('Logged' table)`);
        }
        catch {
            throw new Error("Error while saving vaults to API database (`Logged` table)");
        }
    }
    // Add to exising vaults
    if (storedVaults.length > 0) {
        vaults = vaults.concat(storedVaults.map(v => v.entityData));
    }
    log.info("👋 exiting getEulerV2Vaults");
    return vaults;
}
export async function updateEulerVaultsCollatInDatabase(chainId) {
    log.info("🏁 start updating vaults collat data");
    let chainIdArray;
    if (!!chainId) {
        chainIdArray = [chainId];
    }
    else {
        chainIdArray = eulerChainIds;
    }
    // 0_ Fetch all euler vaults from database
    const vaults = await apiDbClient.logged.findMany({
        where: { type: LoggedEntityType.EULER },
    });
    const clonedVaults = _.cloneDeep(vaults);
    let toUpdateVaults = [];
    // 1_ Return all vaults already stored with their collateral updated
    const res = await Promise.all(chainIdArray.map(async (chainId) => computeCollatListAndReturnVaults(chainId, clonedVaults.filter(entity => entity.chainId === chainId).map(entity => entity.entityData))));
    for (const resPerChain of res) {
        if (!!resPerChain && resPerChain.length > 0) {
            toUpdateVaults = toUpdateVaults.concat(resPerChain.filter(updatedVault => {
                return (updatedVault.collaterals.length >
                    vaults.find(vault => vault.address?.toLowerCase() === updatedVault.address.toLowerCase())
                        ?.entityData?.collaterals.length);
            }));
        }
    }
    // 2_ Update the API database
    if (toUpdateVaults.length > 0) {
        try {
            for (const vault of toUpdateVaults) {
                await apiDbClient.logged.updateMany({
                    where: {
                        address: vault.address,
                        chainId: vault.chainId,
                    },
                    data: {
                        entityData: vault,
                    },
                });
            }
            log.info(`✅ successfully updated ${toUpdateVaults.length} vault(s) collaterals in API database ('Logged' table)`);
        }
        catch {
            throw new Error("Error while updating vaults to API database (`Logged` table)");
        }
    }
    else {
        log.info("🤷🏻 no vaults to update");
    }
    log.info("🏁 exiting vault collateral update");
    return;
}
