import type Elysia from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    campaigns: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    testTokens: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    mainParameter: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    chainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    action: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    tag: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
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
    opportunity: {
        get: {
            body: unknown;
            params: {};
            query: {
                type?: number | undefined;
                tag?: string | undefined;
                action?: string | undefined;
                chainId?: number | undefined;
                campaigns?: boolean | undefined;
                mainParameter?: string | undefined;
                testTokens?: boolean | undefined;
            };
            headers: unknown;
            response: {
                200: {};
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
