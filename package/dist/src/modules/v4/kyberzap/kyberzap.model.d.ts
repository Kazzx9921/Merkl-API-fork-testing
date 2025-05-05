export declare const dexIdToProtocolId: {
    DEX_UNISWAPV3: "uniswap";
    DEX_UNISWAPV2: "uniswap";
    DEX_PANCAKESWAPV3: "pancake-swap";
    DEX_SUSHISWAPV3: "sushi-swap";
    DEX_CURVE: "curve";
    DEX_SYNCSWAP_V3: "syncswap";
    DEX_ZKSWAP_V3: "zk-swap";
    DEX_QUICKSWAPV3UNI: "quickswap";
    DEX_QUICKSWAPV3ALGEBRA: "quickswap";
    DEX_THRUSTERV3: "thruster";
    DEX_CAMELOTV3: "camelot";
    DEX_BEEFY: "beefy";
    DEX_KOICL: "koi";
    DEX_AERODROMECL: "aerodrome";
    DEX_BALANCER: "balancer";
};
export declare const chainToKyberLabel: {
    [chainId: number]: string;
};
export type KyberZapDexId = keyof typeof dexIdToProtocolId;
export declare const apiTypes: {
    "/api/v1/in/route": {
        query: import("@sinclair/typebox").TObject<{
            dex: import("@sinclair/typebox").TString;
            "pool.id": import("@sinclair/typebox").TString;
            "position.tickLower": import("@sinclair/typebox").TString;
            "position.tickUpper": import("@sinclair/typebox").TString;
            tokenIn: import("@sinclair/typebox").TString;
            amountIn: import("@sinclair/typebox").TString;
            feeAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            feePcm: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            slippage: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>;
        response: import("@sinclair/typebox").TObject<{
            message: import("@sinclair/typebox").TString;
            data: import("@sinclair/typebox").TObject<{
                poolDetails: import("@sinclair/typebox").TObject<{}>;
                positionDetails: import("@sinclair/typebox").TObject<{}>;
                zapDetails: import("@sinclair/typebox").TObject<{
                    actions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{}>>;
                    finalAmountUsd: import("@sinclair/typebox").TString;
                    priceImpact: import("@sinclair/typebox").TNumber;
                }>;
                route: import("@sinclair/typebox").TString;
                routerAddress: import("@sinclair/typebox").TString;
            }>;
            requestId: import("@sinclair/typebox").TString;
        }>;
    };
    "/api/v1/in/route/build": {
        query: import("@sinclair/typebox").TObject<{}>;
        body: import("@sinclair/typebox").TObject<{
            sender: import("@sinclair/typebox").TString;
            recipient: import("@sinclair/typebox").TString;
            route: import("@sinclair/typebox").TString;
            deadline: import("@sinclair/typebox").TNumber;
            source: import("@sinclair/typebox").TString;
        }>;
        response: import("@sinclair/typebox").TObject<{
            message: import("@sinclair/typebox").TString;
            data: import("@sinclair/typebox").TObject<{
                routerAddress: import("@sinclair/typebox").TString;
                callData: import("@sinclair/typebox").TString;
                value: import("@sinclair/typebox").TString;
            }>;
            requestId: import("@sinclair/typebox").TString;
        }>;
    };
};
export type ZapToken = {
    address: string;
    amount: string;
    amountUsd: string;
};
export type ZapActions = {
    ACTION_TYPE_PROTOCOL_FEE: {
        protocolFee: {
            pcm: number;
            tokens: ZapToken[];
        };
    };
    ACTION_TYPE_AGGREGATOR_SWAP: {
        aggregatorSwap: {
            swaps: {
                tokenIn: ZapToken;
                tokenOut: ZapToken;
            }[];
        };
    };
    ACTION_TYPE_POOL_SWAP: {
        poolSwap: {
            swaps: {
                tokenIn: ZapToken;
                tokenOut: ZapToken;
            }[];
        };
    };
    ACTION_TYPE_ADD_LIQUIDITY: {
        addLiquidity: {
            tokens: ZapToken[];
            token0: ZapToken;
            token1: ZapToken;
        };
    };
};
export type ZapAction<Action extends keyof ZapActions = keyof ZapActions> = {
    type: Action;
} & ZapActions[Action];
export type KyberZapRoute = keyof typeof apiTypes;
export type KyberZapPostRoute = {
    [R in KyberZapRoute]: "body" extends keyof KyberZapApi<R> ? R : never;
}[KyberZapRoute];
export type KyberZapApi<T extends KyberZapRoute> = (typeof apiTypes)[T];
