import type Elysia from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    user: import("@sinclair/typebox").TString;
}>;
export declare const response: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TTemplateLiteral<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TLiteral<"_">, import("@sinclair/typebox").TString]>, import("@sinclair/typebox").TObject<{
    userPositions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<(import("@sinclair/typebox").TObject<{
        almAddress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        id: import("@sinclair/typebox").TString;
        origin: import("@sinclair/typebox").TNumber;
        inRangeLiquidity: import("@sinclair/typebox").TNumber;
        lowerTick: import("@sinclair/typebox").TNumber;
        upperTick: import("@sinclair/typebox").TNumber;
        totalLiquidity: import("@sinclair/typebox").TNumber;
        tvl: import("@sinclair/typebox").TNumber;
        balance0: import("@sinclair/typebox").TNumber;
        balance1: import("@sinclair/typebox").TNumber;
    }> | import("@sinclair/typebox").TObject<{
        origin: import("@sinclair/typebox").TString;
        totalSupply: import("@sinclair/typebox").TNumber;
        tvl: import("@sinclair/typebox").TNumber;
        balance: import("@sinclair/typebox").TNumber;
    }>)[]>>;
}>>;
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
    positions: {
        get: {
            body: unknown;
            params: {};
            query: {
                chainId?: number | undefined;
                user: string;
            };
            headers: unknown;
            response: {
                [x: string]: any;
                200: any;
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
