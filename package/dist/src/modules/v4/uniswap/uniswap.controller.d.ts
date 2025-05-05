import Elysia from "elysia";
export declare const UniswapController: Elysia<"uniswap", false, {
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
    uniswap: {
        reward: {
            3: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        chainId?: number | undefined;
                        pool?: string | undefined;
                        positionId?: string | undefined;
                        address: string;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            [x: number]: Record<string, Record<string, {
                                campaignId: string;
                                amount: string;
                                claimed: string;
                                pending: string;
                                reason: string;
                                rewardToken: import("../token/token.model").Token["model"];
                                opportunity: import("../opportunity/opportunity.model").Opportunity["model"];
                            }[]>>;
                        };
                    };
                };
            };
        };
    } & {
        reward: {
            4: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        chainId?: number | undefined;
                        pool?: string | undefined;
                        positionId?: string | undefined;
                        address: string;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            [x: number]: Record<string, Record<string, {
                                campaignId: string;
                                amount: string;
                                claimed: string;
                                pending: string;
                                reason: string;
                                rewardToken: import("../token/token.model").Token["model"];
                                opportunity: import("../opportunity/opportunity.model").Opportunity["model"];
                            }[]>>;
                        };
                    };
                };
            };
        };
    } & {
        v4: {
            pools: {
                get: {
                    body: unknown;
                    params: {};
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            [x: string]: {
                                [poolId: string]: UniswapV4PoolType;
                            } | undefined;
                        };
                    };
                };
            };
        };
    } & {
        v4pools: {
            ":chainId": {
                get: {
                    body: unknown;
                    params: {
                        chainId: number;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            [x: string]: any;
                        };
                    };
                };
            };
        };
    } & {
        v4: {
            ":poolId": {
                get: {
                    body: unknown;
                    params: {
                        poolId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: UniswapV4PoolType[];
                    };
                };
            };
        };
    } & {
        v4: {
            update: {
                post: {
                    body: unknown;
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: void;
                    };
                };
            };
        };
    } & {
        v4: {
            update: {
                ":chainId": {
                    post: {
                        body: unknown;
                        params: {
                            chainId: number;
                        };
                        query: unknown;
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: void;
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
