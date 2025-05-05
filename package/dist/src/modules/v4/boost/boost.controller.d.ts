import Elysia from "elysia";
export declare const BoostController: Elysia<"/boosts", false, {
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
    boosts: {
        euler: {
            post: {
                body: {
                    addresses: string[];
                } | {
                    address: string;
                    score: string;
                }[];
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        address: string;
                        boost: string;
                    }[];
                };
            };
        };
    };
} & {
    boosts: {
        euler: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    200: {
                        address: string;
                        boost: string;
                    }[];
                };
            };
        };
    };
} & {
    boosts: {
        openblock: {
            zksync: {
                post: {
                    body: {
                        addresses: string[];
                    } | {
                        address: string;
                        score: string;
                    }[];
                    params: {};
                    query: {
                        protocol: string;
                        target: string;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            address: string;
                            boost: string;
                        }[];
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
