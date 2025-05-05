import type Elysia from "elysia";
/**
 * @deprecated - conversion to v4 done
 */
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
    rewards: {
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
                200: {
                    [x: string]: {
                        campaignData: {
                            [x: string]: {
                                [x: string]: {
                                    pending?: string | undefined;
                                    symbol: string;
                                    token: string;
                                    decimals: number;
                                    mainParameter: string;
                                    unclaimed: string;
                                    accumulated: string;
                                };
                            };
                        };
                        tokenData: {
                            [x: string]: {
                                pending?: string | undefined;
                                symbol: string;
                                decimals: number;
                                proof: string[];
                                unclaimed: string;
                                accumulated: string;
                            };
                        };
                    };
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
