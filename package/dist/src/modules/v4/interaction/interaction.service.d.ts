import type { ProtocolId } from "@/modules/v4/protocol/protocol.model";
import type { InteractionQuote } from "./interaction.model";
export declare abstract class InteractionService {
    static routers: import("./interaction.model").Router[];
    /**
     * Returns a target entry for each router, indicating the possiblity to deposit
     * @param chainId compute
     * @param protocolId i.e. "aave", "venus"
     * @param identifier i.e. mainParameter, poolAddress
     * @returns information about available routers
     */
    static getTargets(chainId: number, protocolId: ProtocolId, identifier: string): Promise<import("./interaction.model").InteractionTarget[]>;
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
    static getTransaction(provider: string, chainId: number, protocolId: ProtocolId, identifier: string, userAddress: string, fromTokenAddress: string, fromTokenAmount: bigint, slippage?: number): Promise<InteractionQuote>;
    /**
     * Gets approval information onchain
     * @returns approved?, approval tx & allowance amount
     */
    static getApproval(chainId: number, owner: string, spender: string, tokenAddress: string, amount: bigint): Promise<{
        approved: boolean;
        allowance: any;
        approval: {
            to: string;
            data: `0x${string}`;
        };
    }>;
}
