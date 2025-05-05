import type Elysia from "elysia";
export declare const response: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    rate: import("@sinclair/typebox").TNumber;
    token: import("@sinclair/typebox").TString;
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
    prices: {
        get: {
            body: unknown;
            params: {};
            query: {};
            headers: unknown;
            response: {
                200: {
                    rate: number;
                    token: string;
                }[];
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
