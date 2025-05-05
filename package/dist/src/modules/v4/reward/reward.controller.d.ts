import Elysia from "elysia";
export declare const RewardController: Elysia<"/rewards", false, {
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
        index: {
            get: {
                body: unknown;
                params: {};
                query: {
                    items?: number | undefined;
                    page?: number | undefined;
                    campaignId: string;
                    chainId: number;
                };
                headers: unknown;
                response: {
                    200: import("./reward.model").BreakdownForCampaignsRaw[];
                };
            };
        };
    } & {
        total: {
            get: {
                body: unknown;
                params: {};
                query: {
                    items?: number | undefined;
                    page?: number | undefined;
                    campaignId: string;
                    chainId: number;
                };
                headers: unknown;
                response: {
                    200: {
                        campaignId: string;
                        amount: bigint;
                    };
                };
            };
        };
    } & {
        count: {
            get: {
                body: unknown;
                params: {};
                query: {
                    items?: number | undefined;
                    page?: number | undefined;
                    campaignId: string;
                    chainId: number;
                };
                headers: unknown;
                response: {
                    200: {
                        count: number;
                    };
                };
            };
        };
    } & {
        campaign: {
            ":campaignId": {
                index: {
                    get: {
                        body: unknown;
                        params: {};
                        query: {
                            items?: number | undefined;
                            page?: number | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: {
                                amount: string;
                                claimed: string;
                                pending: string;
                                recipient: string;
                            }[];
                        };
                    };
                };
            };
        };
    } & {
        campaign: {
            ":campaignId": {
                total: {
                    get: {
                        body: unknown;
                        params: {};
                        query: {
                            items?: number | undefined;
                            page?: number | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: {
                                tokenId: string;
                                amount: bigint;
                            };
                        };
                    };
                };
            };
        };
    } & {
        campaign: {
            ":campaignId": {
                count: {
                    get: {
                        body: unknown;
                        params: {};
                        query: {
                            items?: number | undefined;
                            page?: number | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: {
                                count: number;
                            };
                        };
                    };
                };
            };
        };
    } & {
        token: {
            index: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        items?: number | undefined;
                        page?: number | undefined;
                        campaignIds?: string[] | undefined;
                        address: string;
                        chainId: number;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            amount: string;
                            claimed: string;
                            pending: string;
                            recipient: string;
                        }[];
                    };
                };
            };
        };
    } & {
        token: {
            total: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        items?: number | undefined;
                        page?: number | undefined;
                        campaignIds?: string[] | undefined;
                        address: string;
                        chainId: number;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            tokenId: string;
                            amount: bigint;
                        };
                    };
                };
            };
        };
    } & {
        token: {
            count: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        items?: number | undefined;
                        page?: number | undefined;
                        campaignIds?: string[] | undefined;
                        address: string;
                        chainId: number;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            count: number;
                        };
                    };
                };
            };
        };
    } & {
        engine: {
            index: {
                post: {
                    body: {
                        pending: string;
                        distributionChainId: number;
                        amount: string;
                        root: string;
                        recipient: string;
                        claimed: string;
                        proofs: string[];
                        rewardToken: string;
                    }[];
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            count: number;
                        };
                    };
                };
            };
        };
    } & {
        engine: {
            breakdowns: {
                post: {
                    body: {
                        distributionChainId: number;
                        campaignId: string;
                        root: string;
                        rewardToken: string;
                        breakdowns: {
                            protocolId?: string | undefined;
                            reason: string;
                            pending: string;
                            amount: string;
                            recipient: string;
                            claimed: string;
                        }[];
                    }[];
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            count: number;
                        } | undefined;
                    };
                };
            };
        };
    } & {
        engine: {
            claims: {
                post: {
                    body: {
                        token: string;
                        chainId: number;
                        root: string;
                        recipient: string;
                    }[];
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
        count: {
            chain: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        chainId: number;
                    };
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            [x: number]: {
                                rewardCount: number;
                                breakdownCount: number;
                            };
                        };
                    };
                };
            };
        };
    } & {
        unclaim: {
            index: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        chainId: number;
                        campaignIds: string[];
                    };
                    headers: unknown;
                    response: {
                        200: {
                            [x: string]: string;
                        };
                    };
                };
            };
        };
    };
} & {
    rewards: {
        total: {
            distributed: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        since: Date;
                    };
                    headers: unknown;
                    response: {
                        200: number;
                    };
                };
            };
        };
    };
} & {
    rewards: {
        total: {
            distributed: {
                "by-chains": {
                    get: {
                        body: unknown;
                        params: {};
                        query: {
                            since: Date;
                        };
                        headers: unknown;
                        response: {
                            [x: string]: any;
                            200: any;
                        };
                    };
                };
            };
        };
    };
} & {
    rewards: {
        total: {
            distributed: {
                "by-types": {
                    get: {
                        body: unknown;
                        params: {};
                        query: {
                            since: Date;
                        };
                        headers: unknown;
                        response: {
                            [x: string]: any;
                            200: any;
                        };
                    };
                };
            };
        };
    };
} & {
    rewards: {
        total: {
            distributed: {
                "by-protocols": {
                    get: {
                        body: unknown;
                        params: {};
                        query: {
                            since: Date;
                        };
                        headers: unknown;
                        response: {
                            [x: string]: any;
                            200: any;
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
    schema: {
        body: unknown;
        headers: unknown;
        query: {
            since: Date;
        };
        params: unknown;
        cookie: unknown;
        response: {};
    };
}>;
