import type Elysia from "elysia";
export type LostYieldT = {
    [chainId: string]: {
        [tokenAddress: string]: {
            total: number;
            yield: number;
        };
    };
};
export declare const query: import("@sinclair/typebox").TObject<{
    user: import("@sinclair/typebox").TString;
}>;
export declare const response: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
    total: import("@sinclair/typebox").TNumber;
    yield: import("@sinclair/typebox").TNumber;
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
    lostyield: {
        get: {
            body: unknown;
            params: {};
            query: {
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
