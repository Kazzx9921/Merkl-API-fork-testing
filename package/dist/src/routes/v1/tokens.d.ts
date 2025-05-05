import type Elysia from "elysia";
export declare const response: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    decimals: import("@sinclair/typebox").TNumber;
    symbol: import("@sinclair/typebox").TString;
    hasPermit: import("@sinclair/typebox").TBoolean;
    useInSwap: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    logoURI: import("@sinclair/typebox").TString;
}>>>;
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
    tokens: {
        get: {
            body: unknown;
            params: {};
            query: {};
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
