import { ChainId, ChainInteractionService, ETH_ZKSYNC_ADDRESS, Erc20__factory, EthOnZKSync_INTERFACE } from "@sdk";
export async function getUserAllowance(chainId, tokenAddress, userAddress, spenderAddresses) {
    const ERC20_Interface = Erc20__factory.createInterface();
    const allowanceCall = chainId === ChainId.ZKSYNC && tokenAddress === ETH_ZKSYNC_ADDRESS
        ? {
            allowFailure: true,
            callData: EthOnZKSync_INTERFACE.encodeFunctionData("allowance", [userAddress, spenderAddresses]),
            target: tokenAddress,
        }
        : {
            allowFailure: true,
            callData: ERC20_Interface.encodeFunctionData("allowance", [userAddress, spenderAddresses]),
            target: tokenAddress,
        };
    const [result] = await ChainInteractionService(chainId).fetchState([allowanceCall]);
    const allowance = ERC20_Interface.decodeFunctionResult("allowance", result.returnData)[0].toString();
    return BigInt(allowance);
}
