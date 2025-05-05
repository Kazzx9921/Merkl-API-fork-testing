import type { Token } from "@/modules/v4/token/token.model";
import { type ProtocolId } from "../protocol/protocol.model";
/**
 * Interaction Route
 */
export interface Router {
    name: string;
    getTarget: (chainId: number, protocolId: ProtocolId, identifier: string) => Promise<InteractionTarget | undefined>;
    getTransaction: (chainId: number, protocolId: ProtocolId, identifier: string, userAddress: string, fromTokenAddress: string, fromTokenAmount: bigint, options: {
        slippage?: number;
    }) => Promise<Pick<InteractionQuote, "actions" | "transaction" | "depositValue">>;
}
export declare const participateInputTypes: readonly ["tokenAmount", "token"];
export type InteractionInputType = (typeof participateInputTypes)[number];
export type InteractionInput<T extends InteractionInputType = InteractionInputType> = {
    tokenAmount: {
        chain: number[];
        address: string[];
        amount: number[];
    };
    token: {
        address: string;
    };
}[T];
export declare const participateTypes: readonly ["link", "deposit", "withdraw"];
export type InteractionType = (typeof participateTypes)[number];
export type InteractionSchema<T extends InteractionType> = {
    link: {
        link: string;
    };
    deposit: {
        inputs: InteractionInput[];
    };
    withdraw: {
        d: string;
    };
}[T];
export type InteractionTarget = {
    provider: "enso" | "zap";
    identifier: string;
    chainId: number;
};
export type InteractionSchemas = {
    [T in InteractionType]?: InteractionSchema<T>;
};
export type UserTransaction = {
    data: string;
    to: string;
    from?: string;
    value?: string;
};
export type InteractionQuote = {
    amountIn: bigint;
    allowance: bigint;
    approved: boolean;
    transaction: UserTransaction;
    approval: UserTransaction;
    actions?: InteractionAction[];
    depositValue?: number;
};
export type InteractionActions = {
    /**
     * Fee taken by the router and/or Merkl
     */
    fee: {
        tokens: (Token["model"] & {
            amount?: bigint;
        })[];
    };
    /**
     * Amount deposited
     */
    deposit: {
        tokens: (Token["model"] & {
            amount?: bigint;
        })[];
        tokensOut?: (Token["model"] & {
            amount?: bigint;
        })[];
    };
    swap: {
        from: Token["model"] & {
            amount?: bigint;
        };
        to: Token["model"] & {
            amount?: bigint;
        };
    };
};
export type InteractionAction<Action extends keyof InteractionActions = keyof InteractionActions> = {
    action: Action;
} & InteractionActions[Action];
export declare const GetInteractionTargetsQueryDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    protocolId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    identifier: import("@sinclair/typebox").TString;
}>;
export declare const GetInteractionQuoteQueryDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    protocolId: import("@sinclair/typebox").TString;
    identifier: import("@sinclair/typebox").TString;
    userAddress: import("@sinclair/typebox").TString;
    fromTokenAddress: import("@sinclair/typebox").TString;
    fromAmount: import("@sinclair/typebox").TString;
    slippage: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const GetInteractionProtocolsQueryDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export type GetInteractionProtocolsQuery = typeof GetInteractionProtocolsQueryDto.static;
