import type Elysia from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    chainIds: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
    user: import("@sinclair/typebox").TString;
    creatorTag: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
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
    multiChainPositions: {
        get: {
            body: unknown;
            params: {};
            query: {
                chainIds?: string | string[] | undefined;
                creatorTag?: string | undefined;
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
