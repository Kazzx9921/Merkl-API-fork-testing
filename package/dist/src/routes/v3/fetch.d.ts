import type Elysia from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    index: import("@sinclair/typebox").TNumber;
}>;
/** Fetch params  */
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
    fetch: {
        get: {
            body: unknown;
            params: {};
            query: {
                index: number;
                chainId: number;
            };
            headers: unknown;
            response: {
                200: string | {
                    message: string;
                    name: string;
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
