import { type Elysia } from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    poolAddress: import("@sinclair/typebox").TString;
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
    poolInfo: {
        get: {
            body: unknown;
            params: {};
            query: {
                chainId: number;
                poolAddress: string;
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
