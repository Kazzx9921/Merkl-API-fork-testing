import type Elysia from "elysia";
export declare const query: import("@sinclair/typebox").TObject<{
    poolAddressProvider: import("@sinclair/typebox").TString;
    chainId: import("@sinclair/typebox").TNumber;
}>;
export declare const response: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    asset: import("@sinclair/typebox").TString;
    symbol: import("@sinclair/typebox").TString;
    aToken: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    stableDebtToken: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    variableDebtToken: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    aTokenSymbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    aTokenName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    vdTokenSymbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    vdTokenName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    vault: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    vaultSymbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
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
    radiant: {
        get: {
            body: unknown;
            params: {};
            query: {
                chainId: number;
                poolAddressProvider: string;
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
