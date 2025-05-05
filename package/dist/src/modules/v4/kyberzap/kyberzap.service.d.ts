import type { ProtocolId } from "@/modules/v4/protocol/protocol.model";
import type { InteractionAction, Router } from "../interaction/interaction.model";
import { type KyberZapDexId, type ZapAction } from "./kyberzap.model";
export declare abstract class KyberZapService {
    #private;
    static getDexId(protocolId: ProtocolId | string): KyberZapDexId | undefined;
    static getChainLabel(chainId: number): string | undefined;
    static getProtocolId(dexId: KyberZapDexId | string): ProtocolId | undefined;
    /**
     * @notice We don't handle tick setting in the UI for now, until we do this give the full-range ticks
     * @param param0
     */
    static getFullRangeTicks(): number[];
    /**
     * Converts the breakdown of actions
     * @param zapActions
     * @returns provider-agnostic interaction actions
     */
    static getActions(chainId: number, zapActions: ZapAction[]): Promise<InteractionAction[]>;
    static getTransaction(chainId: number, protocol: ProtocolId, identifier: string, userAddress: string, fromTokenAddress: string, fromTokenAmount: bigint, slippage?: number): Promise<{
        actions: InteractionAction[];
        depositValue: number;
        transaction: {
            to: string;
            data: string;
            value: string;
        };
    }>;
    /**
     * Defines abstract router functions
     * @returns Router
     */
    static getRouter(): Router;
}
