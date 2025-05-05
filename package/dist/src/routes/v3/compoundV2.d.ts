import { type Elysia } from "elysia";
export declare const response: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TString;
    asset: import("@sinclair/typebox").TString;
    chaind: import("@sinclair/typebox").TNumber;
    debtTokenAddress: import("@sinclair/typebox").TString;
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
    compoundV2: {
        get: {
            body: unknown;
            params: {};
            query: {};
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
