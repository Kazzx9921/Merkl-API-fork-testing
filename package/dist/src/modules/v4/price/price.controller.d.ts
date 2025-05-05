import Elysia from "elysia";
export declare const PriceController: Elysia<"/prices", false, {
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
    prices: {
        index: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        [x: string]: number;
                    };
                };
            };
        };
    } & {
        array: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        rate: number;
                        token: string;
                    }[];
                };
            };
        };
    } & {
        symbol: {
            ":symbol": {
                get: {
                    body: unknown;
                    params: {
                        symbol: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: number;
                    };
                };
            };
        };
    } & {
        sources: {
            index: {
                get: {
                    body: unknown;
                    params: {};
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            symbol: string;
                            method: import("@db/api").$Enums.PriceSourceMethod;
                            args: import("database/api/.generated/runtime/library").JsonValue | null;
                            id: number;
                        }[];
                    };
                };
            };
        };
    } & {
        sources: {
            symbol: {
                ":symbol": {
                    get: {
                        body: unknown;
                        params: {
                            symbol: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                symbol: string;
                                method: import("@db/api").$Enums.PriceSourceMethod;
                                args: import("database/api/.generated/runtime/library").JsonValue | null;
                                id: number;
                            };
                        };
                    };
                };
            };
        };
    } & {
        sources: {
            index: {
                post: {
                    body: {
                        symbol: string;
                        method: "COINGECKO" | "CONSTANT" | "EQUAL_TO" | "ERC4626" | "DEXSCREENER" | "INDEXCOOP" | "DEFILLAMA";
                        args: {};
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: number;
                    };
                };
            };
        };
    } & {
        sources: {
            symbol: {
                ":symbol": {
                    patch: {
                        body: {
                            symbol?: string | undefined;
                            method?: "COINGECKO" | "CONSTANT" | "EQUAL_TO" | "ERC4626" | "DEXSCREENER" | "INDEXCOOP" | "DEFILLAMA" | undefined;
                            args?: {} | undefined;
                        };
                        params: {
                            symbol: string;
                        };
                        query: unknown;
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: {
                                symbol: string;
                                method: import("@db/api").$Enums.PriceSourceMethod;
                                args: import("database/api/.generated/runtime/library").JsonValue | null;
                                id: number;
                            };
                        };
                    };
                };
            };
        };
    } & {
        sources: {
            symbol: {
                ":symbol": {
                    delete: {
                        body: unknown;
                        params: {
                            symbol: string;
                        };
                        query: unknown;
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: {
                                symbol: string;
                                method: import("@db/api").$Enums.PriceSourceMethod;
                                args: import("database/api/.generated/runtime/library").JsonValue | null;
                                id: number;
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
