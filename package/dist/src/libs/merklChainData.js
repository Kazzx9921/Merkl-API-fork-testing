import { Redis } from "@/cache";
import { TokenService } from "@/modules/v4/token/token.service";
import { batchMulticallCallWithRetry } from "@/utils/generic";
import { Interface } from "@ethersproject/abi";
import { BN2Number, DistributionCreator__factory, Distributor__factory, NETWORK_LABELS, NULL_ADDRESS, registry, } from "@sdk";
const DistributorInterface = Distributor__factory.createInterface();
const DistributorCreatorInterface = DistributionCreator__factory.createInterface();
const MTW_INTERFACE = new Interface([
    "function isTokenWrapper() pure returns (bool)",
    "function token() external view returns (address)",
]);
export async function merklChainData(chainId) {
    const distributorAddress = registry(chainId)?.Merkl?.Distributor;
    const distributionCreatorAddress = registry(chainId)?.Merkl?.DistributionCreator;
    if (!distributorAddress || !distributionCreatorAddress) {
        throw `Cannot find distributor or distribution creator address for chain ${NETWORK_LABELS[chainId]}`;
    }
    const calls = [
        {
            allowFailure: false,
            callData: DistributorInterface.encodeFunctionData("getMerkleRoot"),
            target: distributorAddress,
        },
        {
            allowFailure: false,
            callData: DistributorInterface.encodeFunctionData("tree"),
            target: distributorAddress,
        },
        {
            allowFailure: false,
            callData: DistributorInterface.encodeFunctionData("lastTree"),
            target: distributorAddress,
        },
        {
            allowFailure: false,
            callData: DistributorInterface.encodeFunctionData("endOfDisputePeriod"),
            target: distributorAddress,
        },
        {
            allowFailure: false,
            callData: DistributorInterface.encodeFunctionData("disputer"),
            target: distributorAddress,
        },
        {
            allowFailure: true,
            callData: DistributorCreatorInterface.encodeFunctionData("message"),
            target: distributionCreatorAddress,
        },
        {
            allowFailure: true,
            callData: DistributorCreatorInterface.encodeFunctionData("getValidRewardTokens()"),
            target: distributionCreatorAddress,
        },
    ];
    const result = await batchMulticallCallWithRetry(chainId, { calls });
    let i = 0;
    const merkleRoot = DistributorInterface.decodeFunctionResult("getMerkleRoot", result[i++].returnData)[0]?.toString();
    const treeRoot = DistributorInterface.decodeFunctionResult("tree", result[i++].returnData)[0].toString();
    const lastTreeRoot = DistributorInterface.decodeFunctionResult("lastTree", result[i++].returnData)[0]?.toString();
    const endOfDisputePeriod = BN2Number(DistributorInterface.decodeFunctionResult("endOfDisputePeriod", result[i++].returnData)[0], 0);
    const disputeLive = DistributorInterface.decodeFunctionResult("disputer", result[i++].returnData)[0] !== NULL_ADDRESS;
    let message = "";
    try {
        message = DistributorCreatorInterface.decodeFunctionResult("message", result[i++].returnData)[0]?.toString();
    }
    catch { }
    const tokens = await TokenService.findManyObjectPerAddress({
        chainId,
        id: DistributorCreatorInterface.decodeFunctionResult("getValidRewardTokens()", result[i].returnData)[0].map((t) => TokenService.hashId({ chainId, address: t.token })),
    });
    const validRewardTokens = DistributorCreatorInterface.decodeFunctionResult("getValidRewardTokens()", result[i++].returnData)[0].map((t) => {
        const decimals = tokens[t.token]?.decimals ? tokens[t.token]?.decimals : undefined;
        const symbol = tokens[t.token]?.symbol ? tokens[t.token]?.symbol : undefined;
        return {
            decimals: decimals,
            minimumAmountPerEpoch: decimals
                ? BN2Number(t.minimumAmountPerEpoch, decimals)
                : BN2Number(t.minimumAmountPerEpoch),
            symbol: symbol,
            token: t.token,
        };
    });
    const validRewardTokensCalls = validRewardTokens.reduce((acc, t) => {
        acc.push({
            allowFailure: true,
            target: t.token,
            callData: MTW_INTERFACE.encodeFunctionData("isTokenWrapper"),
        });
        acc.push({
            allowFailure: true,
            target: t.token,
            callData: MTW_INTERFACE.encodeFunctionData("token"),
        });
        return acc;
    }, []);
    const validRewardTokenRes = await batchMulticallCallWithRetry(chainId, { calls: validRewardTokensCalls });
    for (let index = 0; index < validRewardTokens.length; index++) {
        try {
            if (validRewardTokenRes[2 * index][0] &&
                MTW_INTERFACE.decodeFunctionResult("isTokenWrapper", validRewardTokenRes[2 * index][1])[0]) {
                validRewardTokens[index].isTokenWrapper = MTW_INTERFACE.decodeFunctionResult("token", validRewardTokenRes[2 * index + 1][1])[0];
            }
        }
        catch { }
    }
    return {
        disputeLive,
        endOfDisputePeriod,
        merkleRoot,
        treeRoot,
        lastTreeRoot,
        message,
        validRewardTokens,
    };
}
export const merklChainDataWithCache = async (chainId) => await Redis.getOrSet(`MerklChainData_${chainId}`, merklChainData, chainId);
