import type Elysia from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    campaign: import("@sinclair/typebox").TAny;
    chainId: import("@sinclair/typebox").TNumber;
    index: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
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
    parse: {
        get: {
            body: unknown;
            params: {};
            query: {
                index?: number | undefined;
                campaign: any;
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
