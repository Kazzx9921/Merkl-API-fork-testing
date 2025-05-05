import { ChainInteractionService } from "@/modules/v4/chainInteraction/chainInteraction.service";
import { EnsoService } from "@/modules/v4/enso/enso.service";
import { KyberZapService } from "@/modules/v4/kyberzap/kyberzap.service";
import { ETH_ADDRESS, ETH_ZKSYNC_ADDRESS } from "@sdk";
import { decodeFunctionResult, encodeFunctionData, parseAbi } from "viem";
export class InteractionService {
    static routers = [KyberZapService, EnsoService].map(service => service.getRouter());
    /**
     * Returns a target entry for each router, indicating the possiblity to deposit
     * @param chainId compute
     * @param protocolId i.e. "aave", "venus"
     * @param identifier i.e. mainParameter, poolAddress
     * @returns information about available routers
     */
    static async getTargets(chainId, protocolId, identifier) {
        return (await Promise.all(InteractionService.routers?.map(router => router.getTarget(chainId, protocolId, identifier)))).filter(a => a !== undefined);
    }
    /**
     * Gets transaction to interact on opportunity via a router
     * @param provider i.e. "enso" or "zap"
     * @param chainId compute
     * @param protocolId i.e. "aave", "venus"
     * @param identifier i.e. mainParameter, poolAddress
     * @param userAddress
     * @param fromTokenAddress
     * @param fromTokenAmount
     * @param slippage
     * @returns transaction and approval state
     */
    static async getTransaction(provider, chainId, protocolId, identifier, userAddress, fromTokenAddress, fromTokenAmount, slippage) {
        const router = InteractionService.routers.find(({ name }) => name === provider);
        if (!router)
            throw new Error(`Router "${provider} not found`);
        // Normalizing ETH on ZKSync
        if (fromTokenAddress === ETH_ZKSYNC_ADDRESS)
            fromTokenAddress = ETH_ADDRESS;
        const transaction = await router.getTransaction(chainId, protocolId, identifier, userAddress, fromTokenAddress, fromTokenAmount, { slippage });
        const { allowance, approval, approved } = await InteractionService.getApproval(chainId, userAddress, transaction.transaction.to, fromTokenAddress, fromTokenAmount);
        return { amountIn: fromTokenAmount, ...transaction, allowance, approval, approved };
    }
    /**
     * Gets approval information onchain
     * @returns approved?, approval tx & allowance amount
     */
    static async getApproval(chainId, owner, spender, tokenAddress, amount) {
        // Normalizing ETH on ZKSync
        if (tokenAddress === ETH_ZKSYNC_ADDRESS)
            tokenAddress = ETH_ADDRESS;
        //TODO: add utils to make using viem type-safety more concise
        const abi = parseAbi([
            "function approve(address, uint256) returns (bool)",
            "function allowance(address owner, address spender) returns (uint256)",
        ]);
        if (tokenAddress === ETH_ADDRESS)
            return {
                approved: true,
                allowance: 0n,
                approval: {
                    to: tokenAddress,
                    data: encodeFunctionData({
                        abi,
                        functionName: "approve",
                        args: [spender, amount],
                    }),
                },
            };
        const decode = (r) => decodeFunctionResult({
            abi,
            functionName: "allowance",
            data: r?.returnData,
        });
        const allowance = await ChainInteractionService(chainId).fetchAndDecode({
            target: tokenAddress,
            allowFailure: true,
            callData: encodeFunctionData({
                abi,
                functionName: "allowance",
                args: [owner, spender],
            }),
        }, decode);
        const approved = allowance >= amount;
        return {
            approved,
            allowance,
            approval: {
                to: tokenAddress,
                data: encodeFunctionData({
                    abi,
                    functionName: "approve",
                    args: [spender, amount],
                }),
            },
        };
    }
}
