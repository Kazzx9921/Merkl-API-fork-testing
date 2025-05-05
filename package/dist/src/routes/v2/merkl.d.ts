import type Elysia from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    AMMs: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
    "AMMs[0]": import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    "AMMs[]": import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
    chainIds: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>]>>;
    "chainIds[0]": import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    "chainIds[]": import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>]>>;
    user: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    onlyLive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
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
    merkl: {
        get: {
            body: unknown;
            params: {};
            query: {
                user?: string | undefined;
                chainIds?: number | number[] | undefined;
                AMMs?: string | string[] | undefined;
                onlyLive?: string | undefined;
                "AMMs[]"?: string | string[] | undefined;
                "AMMs[0]"?: string | undefined;
                "chainIds[]"?: number | number[] | undefined;
                "chainIds[0]"?: number | undefined;
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
