import Elysia from "elysia";
export declare const BlacklistController: Elysia<"/blacklists", false, {
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
    blacklists: {
        index: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        id: string;
                        chainId: number;
                        poolAddress: string;
                        userAddress: string;
                        arrestTimestamp: bigint;
                        arrestDetails: import("database/api/.generated/runtime/library").JsonValue;
                    }[];
                };
            };
        };
    };
} & {
    blacklists: {
        mapping: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: unknown;
                };
            };
        };
    };
} & {
    blacklists: {
        check: {
            ":address": {
                get: {
                    body: unknown;
                    params: {
                        address: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: boolean;
                    };
                };
            };
        };
    };
} & {
    blacklists: {
        index: {
            post: {
                body: {
                    reason?: string | undefined;
                    chainId: number;
                    poolAddress: string;
                    userAddress: string;
                };
                params: {};
                query: unknown;
                headers: {
                    authorization: string;
                };
                response: {
                    200: {
                        id: string;
                        chainId: number;
                        poolAddress: string;
                        userAddress: string;
                        arrestTimestamp: bigint;
                        arrestDetails: import("database/api/.generated/runtime/library").JsonValue;
                    };
                };
            };
        };
    };
} & {
    blacklists: {
        user: {
            ":address": {
                delete: {
                    body: unknown;
                    params: {
                        address: string;
                    };
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: boolean;
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
