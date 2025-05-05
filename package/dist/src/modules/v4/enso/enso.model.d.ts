export declare const slugToProtocolId: {
    "uniswap-v2": "uniswap";
    "aave-v3": "aave";
    "aave-v2": "aave";
    "aave-static-atokens": "aave";
    "camelot-v2": "camelot";
    "meta-morpho": "morpho";
    "morpho-blue-vaults": "morpho";
    "balancer-v2": "balancer";
    "balancer-gauge": "balancer";
    "aura-lp": "aura";
    aura: "aura";
    beefy: "beefy";
    venus: "venus";
    "compound-v3": "compound";
    "curve-gauge": "curve";
    "euler-v2": "euler";
    fluid: "fluid";
    fraxlend: "frax";
    "frax-ether": "frax";
    "gearbox-v3": "gearbox";
    gearbox: "gearbox";
    moonwell: "moonwell";
    "pancakeswap-amm-v3": "pancake-swap";
    "quickswap-dex": "quickswap";
    "silo-protected": "silo";
    silo: "silo";
    "velodrome-v2-staking": "velodrome";
    zerolend: "zerolend";
};
export type EnsoSlug = keyof typeof slugToProtocolId;
export declare const apiTypes: {
    "/v1/protocols": {
        query: import("@sinclair/typebox").TObject<{
            slug: import("@sinclair/typebox").TString;
        }>;
        response: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            slug: import("@sinclair/typebox").TString;
            name: import("@sinclair/typebox").TString;
            desription: import("@sinclair/typebox").TString;
            url: import("@sinclair/typebox").TString;
            logosUri: import("@sinclair/typebox").TString;
            chains: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString;
            }>>;
        }>>;
    };
    "/v1/tokens": {
        query: import("@sinclair/typebox").TObject<{
            protocolSlug: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            primaryAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            address: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            chainId: import("@sinclair/typebox").TNumber;
            type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
                defi: "defi";
                base: "base";
            }>>;
            page: import("@sinclair/typebox").TNumber;
            inludeMetadata: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        response: import("@sinclair/typebox").TObject<{
            data: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                chainId: import("@sinclair/typebox").TNumber;
                address: import("@sinclair/typebox").TString;
                type: import("@sinclair/typebox").TEnum<{
                    defi: "defi";
                    base: "base";
                }>;
                primaryAddress: import("@sinclair/typebox").TString;
                underlyingTokens: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    address: import("@sinclair/typebox").TString;
                    chainId: import("@sinclair/typebox").TNumber;
                    type: import("@sinclair/typebox").TEnum<{
                        defi: "defi";
                        base: "base";
                    }>;
                }>>;
                apy: import("@sinclair/typebox").TNumber;
            }>>;
            meta: import("@sinclair/typebox").TObject<{
                total: import("@sinclair/typebox").TNumber;
                lastPage: import("@sinclair/typebox").TNumber;
                currentPage: import("@sinclair/typebox").TNumber;
                perPage: import("@sinclair/typebox").TNumber;
                prev: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TNumber]>;
                next: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNull, import("@sinclair/typebox").TNumber]>;
            }>;
        }>;
    };
    "/v1/shortcuts/quote": {
        query: import("@sinclair/typebox").TObject<{
            chainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            fromAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            routingStrategy: import("@sinclair/typebox").TEnum<{
                ensowallet: "ensowallet";
                delegate: "delegate";
                router: "router";
            }>;
            feeReceiver: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            tokenIn: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            tokenOut: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            amountIn: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            fee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            disableRFQs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            ignoreAggregators: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            ignoreStandards: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
        }>;
        response: import("@sinclair/typebox").TObject<{
            gas: import("@sinclair/typebox").TString;
            amountOut: import("@sinclair/typebox").TObject<{}>;
            priceImpact: import("@sinclair/typebox").TNumber;
            feeAmount: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        }>;
    };
    "/v1/shortcuts/route": {
        query: import("@sinclair/typebox").TObject<{
            chainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            fromAddress: import("@sinclair/typebox").TString;
            routingStrategy: import("@sinclair/typebox").TEnum<{
                ensowallet: "ensowallet";
                delegate: "delegate";
                router: "router";
            }>;
            receiver: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            spender: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            amountIn: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            amountOut: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            minAmountOut: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            slippage: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            fee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            feeReceiver: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            disableRFQs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            ignoreAggregators: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            ignoreStandards: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
            tokenIn: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            tokenOut: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        }>;
        response: import("@sinclair/typebox").TObject<{
            gas: import("@sinclair/typebox").TString;
            amountOut: import("@sinclair/typebox").TString;
            priceImpact: import("@sinclair/typebox").TNumber;
            feeAmount: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            createAt: import("@sinclair/typebox").TNumber;
            route: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                action: import("@sinclair/typebox").TLiteral<"swap">;
                protocol: import("@sinclair/typebox").TString;
                tokenIn: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
                tokenOut: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TObject<{
                action: import("@sinclair/typebox").TLiteral<"deposit">;
                primary: import("@sinclair/typebox").TString;
                tokenIn: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
                tokenOut: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            }>]>>;
            tx: import("@sinclair/typebox").TObject<{
                data: import("@sinclair/typebox").TString;
                to: import("@sinclair/typebox").TString;
                from: import("@sinclair/typebox").TString;
                value: import("@sinclair/typebox").TString;
            }>;
        }>;
    };
};
export type EnsoRoute = keyof typeof apiTypes;
export type EnsoApi<T extends EnsoRoute> = (typeof apiTypes)[T];
