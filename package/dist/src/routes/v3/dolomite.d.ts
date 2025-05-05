import type Elysia from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
}>;
export declare const response: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    index: import("@sinclair/typebox").TNumber;
    token: import("@sinclair/typebox").TString;
    symbol: import("@sinclair/typebox").TString;
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
    dolomite: {
        get: {
            body: unknown;
            params: {};
            query: {
                chainId: number;
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
