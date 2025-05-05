import Elysia from "elysia";
export declare const ClaimController: Elysia<"/claims", false, {
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
    claims: {
        ":address": {
            get: {
                body: unknown;
                params: {
                    address: string;
                };
                query: {
                    chainIds?: number[] | undefined;
                };
                headers: unknown;
                response: {
                    200: (import("./claims.model").ClaimModel & {
                        token?: import("../token/token.model").Token["model"];
                    })[];
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
