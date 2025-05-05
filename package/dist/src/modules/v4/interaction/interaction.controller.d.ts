import Elysia from "elysia";
export declare const InteractionController: Elysia<"/interaction", false, {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    type: {};
    error: {};
}, {
    schema: {};
    macro: {};
    macroFn: {};
}, {
    interaction: {
        targets: {
            get: {
                body: unknown;
                params: {};
                query: {
                    protocolId?: string | undefined;
                    identifier: string;
                    chainId: number;
                };
                headers: unknown;
                response: {
                    200: import("./interaction.model").InteractionTarget[];
                };
            };
        };
    };
} & {
    interaction: {
        protocols: {
            get: {
                body: unknown;
                params: {};
                query: {
                    chainId?: number | undefined;
                };
                headers: unknown;
                response: {
                    200: ({
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
                    })[];
                };
            };
        };
    };
} & {
    interaction: {
        transaction: {
            get: {
                body: unknown;
                params: {};
                query: {
                    slippage?: number | undefined;
                    identifier: string;
                    chainId: number;
                    protocolId: string;
                    userAddress: string;
                    fromAmount: string;
                    fromTokenAddress: string;
                };
                headers: unknown;
                response: {
                    200: {
                        amountIn: bigint;
                        allowance: bigint;
                        approved: boolean;
                        transaction: import("./interaction.model").UserTransaction;
                        approval: import("./interaction.model").UserTransaction;
                        actions?: import("./interaction.model").InteractionAction[] | undefined;
                        depositValue?: number | undefined;
                    } | undefined;
                };
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
}>;
