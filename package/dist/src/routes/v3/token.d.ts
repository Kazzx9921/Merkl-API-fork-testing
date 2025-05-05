import type Elysia from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    address: import("@sinclair/typebox").TString;
}>;
export declare const response: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    symbol: import("@sinclair/typebox").TString;
    decimals: import("@sinclair/typebox").TNumber;
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
    token: {
        get: {
            body: unknown;
            params: {};
            query: {
                address: string;
                chainId: number;
            };
            headers: unknown;
            response: {
                200: {
                    name: string;
                    symbol: string;
                    decimals: number;
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
