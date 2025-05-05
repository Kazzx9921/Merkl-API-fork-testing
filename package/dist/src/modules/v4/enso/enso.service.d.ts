import type { GetInteractionProtocolsQuery, InteractionAction, InteractionTarget, Router } from "@/modules/v4/interaction/interaction.model";
import type { ProtocolId } from "@/modules/v4/protocol/protocol.model";
import { type EnsoApi, type EnsoSlug } from "./enso.model";
export declare abstract class EnsoService {
    #private;
    static getSlug(protocolId: ProtocolId | string): EnsoSlug | undefined;
    static getProtocolId(slug: EnsoSlug | string): ProtocolId | undefined;
    static getCompatibleProtocols(query: GetInteractionProtocolsQuery): Promise<({
        url: string;
        name: string;
        description: string;
        id: string;
        tags: string[];
        icon: string;
    } & {
        dailyRewards?: number | undefined;
        numberOfLiveCampaigns?: number | undefined;
        opportunityLiveTags?: string[] | undefined;
    })[]>;
    static getTokens(chainId: number, slug: EnsoSlug, identifier?: string): Promise<{
        type: "base" | "defi";
        address: string;
        chainId: number;
        primaryAddress: string;
        underlyingTokens: {
            type: "base" | "defi";
            address: string;
            chainId: number;
        }[];
        apy: number;
    }[]>;
    static getQuote(query: EnsoApi<"/v1/shortcuts/quote">["query"]["static"]): Promise<{
        amountOut: {};
        gas: string;
        feeAmount: string[];
        priceImpact: number;
    }>;
    static getTransaction(query: EnsoApi<"/v1/shortcuts/route">["query"]["static"]): Promise<{
        route: ({
            protocol: string;
            action: "swap";
            tokenIn: string[];
            tokenOut: string[];
        } | {
            action: "deposit";
            primary: string;
            tokenIn: string[];
            tokenOut: string[];
        })[];
        amountOut: string;
        gas: string;
        feeAmount: string[];
        priceImpact: number;
        createAt: number;
        tx: {
            data: string;
            from: string;
            value: string;
            to: string;
        };
    }>;
    static getActions(chainId: number, route: EnsoApi<"/v1/shortcuts/route">["response"]["static"]["route"], amountOut: bigint): Promise<InteractionAction[]>;
    static getTargetsFromTokens(tokens: Awaited<ReturnType<typeof EnsoService.getTokens>>): Promise<InteractionTarget[]>;
    /**
     * Defines abstract router functions
     * @returns Router
     */
    static getRouter(): Router;
}
