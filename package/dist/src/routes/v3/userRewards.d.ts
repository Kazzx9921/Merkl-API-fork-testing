import type Elysia from "elysia";
/**
 * @deprecated - conversion to v4 done
 */
export declare const query: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    reloadChainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    mainParameter: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    proof: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    rewardToken: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    user: import("@sinclair/typebox").TString;
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
    userRewards: {
        get: {
            body: unknown;
            params: {};
            query: {
                rewardToken?: string | undefined;
                proof?: string | undefined;
                mainParameter?: string | undefined;
                reloadChainId?: number | undefined;
                chainId: number;
                user: string;
            };
            headers: unknown;
            response: {
                200: {
                    [x: string]: {
                        pending?: string | undefined;
                        proof?: string[] | undefined;
                        symbol: string;
                        decimals: number;
                        unclaimed: string;
                        accumulated: string;
                        reasons: {
                            [x: string]: {
                                pending?: string | undefined;
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
