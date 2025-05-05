import type Elysia from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    repository: import("@sinclair/typebox").TString;
    chainId: import("@sinclair/typebox").TNumber;
}>;
export declare const response: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    whitelisted: import("@sinclair/typebox").TBoolean;
    symbol: import("@sinclair/typebox").TString;
    chain: import("@sinclair/typebox").TObject<{
        network: import("@sinclair/typebox").TString;
    }>;
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
    morphoVaults: {
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
