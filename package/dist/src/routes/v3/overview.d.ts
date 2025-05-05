import { type Elysia } from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const response: import("@sinclair/typebox").TObject<{
    disputes: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
        disputeLive: import("@sinclair/typebox").TBoolean;
        endOfDisputePeriod: import("@sinclair/typebox").TNumber;
        root: import("@sinclair/typebox").TString;
        treeRoot: import("@sinclair/typebox").TString;
        lastTreeRoot: import("@sinclair/typebox").TString;
    }>>;
    rewardTokens: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        decimals: import("@sinclair/typebox").TNumber;
        minimumAmountPerEpoch: import("@sinclair/typebox").TNumber;
        symbol: import("@sinclair/typebox").TString;
        token: import("@sinclair/typebox").TString;
    }>, import("@sinclair/typebox").TObject<{
        decimals: import("@sinclair/typebox").TNumber;
        minimumAmountPerEpoch: import("@sinclair/typebox").TNumber;
        isTokenWrapper: import("@sinclair/typebox").TString;
        token: import("@sinclair/typebox").TString;
    }>]>>>;
}>;
declare const _default: (app: Elysia) => Elysia<"", false, {
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
    overview: {
        get: {
            body: unknown;
            params: {};
            query: {
                chainId?: number | undefined;
            };
            headers: unknown;
            response: {
                200: {
                    disputes: {
                        [chainId: number]: {
                            root: string;
                            endOfDisputePeriod: number;
                            disputeLive: boolean;
                            treeRoot: string;
                            lastTreeRoot: string;
                        };
                    };
                    rewardTokens: {
                        [chainId: number]: {
                            token: string;
                            minimumAmountPerEpoch: number;
                            decimals: number;
                            symbol: string;
                        }[];
                    };
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
export default _default;
