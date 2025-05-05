import type Elysia from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    repository: import("@sinclair/typebox").TString;
    chainId: import("@sinclair/typebox").TNumber;
}>;
export declare const response: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    asset: import("@sinclair/typebox").TString;
    assetSymbol: import("@sinclair/typebox").TString;
    silo: import("@sinclair/typebox").TString;
    version: import("@sinclair/typebox").TNumber;
    assets: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        address: import("@sinclair/typebox").TString;
        symbol: import("@sinclair/typebox").TString;
    }>>;
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
    silo: {
        get: {
            body: unknown;
            params: {};
            query: {
                chainId: number;
                repository: string;
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
