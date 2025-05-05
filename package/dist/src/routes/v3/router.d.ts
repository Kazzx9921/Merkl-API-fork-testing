import Elysia from "elysia";
export declare const v3: Elysia<"/v3", false, {
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
    v3: {
        app: {
            get: {
                body: unknown;
                params: {};
                query: {};
                headers: unknown;
                response: {
                    200: {
                        tokens: any;
                        prices: {
                            rate: number;
                            token: string;
                        }[];
                    };
                };
            };
        };
    };
} & {
    v3: {
        blacklist: {
            get: {
                body: unknown;
                params: {};
                query: {
                    user: string;
                };
                headers: unknown;
                response: {
                    200: {
                        isBlacklisted: boolean;
                    };
                };
            };
        };
    };
} & {
    v3: {
        campaignClaims: {
            get: {
                body: unknown;
                params: {};
                query: {
                    byReason?: boolean | undefined;
                    campaignId: string;
                    chainId: number;
                };
                headers: unknown;
                response: {
                    200: unknown;
                };
            };
        };
    };
} & {
    v3: {
        campaigns: {
            get: {
                body: unknown;
                params: {};
                query: {
                    types?: string | number | number[] | string[] | undefined;
                    chainIds?: string | string[] | undefined;
                    creatorTag?: string | undefined;
                    live?: boolean | undefined;
                    hideTestTokens?: string | undefined;
                };
                headers: unknown;
                response: {
                    [x: string]: any;
                    200: any;
                };
            };
        };
    };
} & {
    v3: {
        campaignsForMainParameter: {
            get: {
                body: unknown;
                params: {};
                query: {
                    chainId: number;
                    mainParameter: string;
                };
                headers: unknown;
                response: {
                    200: {
                        campaignId: string;
                        campaignType: number;
                        rewardToken: string;
                        rewardTokenSymbol: string;
                        amountDecimal: number;
                        startTimestamp: number;
                        endTimestamp: number;
                    }[];
                };
            };
        };
    };
} & {
    v3: {
        campaignsRewardsReport: {
            get: {
                body: unknown;
                params: {};
                query: {
                    from?: number | undefined;
                    to?: number | undefined;
                    chain_campaignIds: string[];
                };
                headers: unknown;
                response: {
                    200: any[];
                };
            };
        };
    };
} & {
    v3: {
        campaignUnclaimed: {
            get: {
                body: unknown;
                params: {};
                query: {
                    chainId: number;
                    campaignIds: string;
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
} & {
    v3: {
        claims: {
            get: {
                body: unknown;
                params: {};
                query: {
                    chainIds?: string | string[] | undefined;
                    creatorTag?: string | undefined;
                    byReason?: boolean | undefined;
                    user: string;
                };
                headers: unknown;
                response: {
                    200: {
                        message: string;
                    };
                };
            };
        };
    };
} & {
    v3: {
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
    };
} & {
    v3: {
        createCampaign: {
            get: {
                body: unknown;
                params: {};
                query: {
                    chainId: number;
                    user: string;
                };
                headers: unknown;
                response: {
                    200: {
                        feeRebate: number | undefined;
                        message: any;
                        signed: boolean | undefined;
                        validRewardTokens: any;
                    };
                };
            };
        };
    };
} & {
    v3: {
        dolomite: {
            get: {
                body: unknown;
                params: {};
                query: {
                    chainId: number;
                };
                headers: unknown;
                response: {
                    [x: string]: any;
                    200: any;
                };
            };
        };
    };
} & {
    v3: {
        euler: {
            index: {
                get: {
                    body: unknown;
                    params: {};
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: EulerVaultType[] | null;
                    };
                };
            };
        } & {
            ":chainId": {
                get: {
                    body: unknown;
                    params: {
                        chainId: number;
                    };
                    query: {
                        vaultAddress?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: EulerVaultType[] | undefined;
                    };
                };
            };
        } & {
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
        } & {
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
} & {
    v3: {
        fetch: {
            get: {
                body: unknown;
                params: {};
                query: {
                    index: number;
                    chainId: number;
                };
                headers: unknown;
                response: {
                    200: string | {
                        message: string;
                        name: string;
                    };
                };
            };
        };
    };
} & {
    v3: {
        health: {
            get: {
                body: unknown;
                params: {};
                query: {};
                headers: unknown;
                response: {
                    200: {
                        success: boolean;
                    };
                };
            };
        };
    };
} & {
    v3: {
        lostyield: {
            get: {
                body: unknown;
                params: {};
                query: {
                    user: string;
                };
                headers: unknown;
                response: {
                    [x: string]: any;
                    200: any;
                };
            };
        };
    };
} & {
    v3: {
        merkl: {
            get: {
                body: unknown;
                params: {};
                query: unknown;
                headers: unknown;
                response: {
                    [x: string]: any;
                    200: any;
                };
            };
        };
    };
} & {
    v3: {
        morphoMarkets: {
            get: {
                body: unknown;
                params: {};
                query: {
                    chainId: number;
                    repository: string;
                };
                headers: unknown;
                response: {
                    [x: string]: any;
                    200: any;
                };
            };
        };
    };
} & {
    v3: {
        morphoVaults: {
            get: {
                body: unknown;
                params: {};
                query: {
                    chainId: number;
                    repository: string;
                };
                headers: unknown;
                response: {
                    [x: string]: any;
                    200: any;
                };
            };
        };
    };
} & {
    v3: {
        multiChainPositions: {
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
                    [x: string]: any;
                    200: any;
                };
            };
        };
    };
} & {
    v3: {
        opportunity: {
            get: {
                body: unknown;
                params: {};
                query: {
                    type?: number | undefined;
                    tag?: string | undefined;
                    action?: string | undefined;
                    chainId?: number | undefined;
                    campaigns?: boolean | undefined;
                    mainParameter?: string | undefined;
                    testTokens?: boolean | undefined;
                };
                headers: unknown;
                response: {
                    200: {};
                };
            };
        };
    };
} & {
    v3: {
        overview: {
            get: {
                body: unknown;
                params: {};
                query: {
                    chainId?: number | undefined;
                };
                headers: unknown;
                response: {
                    200: {
                        disputes: {
                            [chainId: number]: {
                                root: string;
                                endOfDisputePeriod: number;
                                disputeLive: boolean;
                                treeRoot: string;
                                lastTreeRoot: string;
                            };
                        };
                        rewardTokens: {
                            [chainId: number]: {
                                token: string;
                                minimumAmountPerEpoch: number;
                                decimals: number;
                                symbol: string;
                            }[];
                        };
                    };
                };
            };
        };
    };
} & {
    v3: {
        parse: {
            get: {
                body: unknown;
                params: {};
                query: {
                    index?: number | undefined;
                    campaign: any;
                    chainId: number;
                };
                headers: unknown;
                response: {
                    200: string | {
                        message: string;
                        name: string;
                    };
                };
            };
        };
    };
} & {
    v3: {
        payload: {
            get: {
                body: unknown;
                params: {};
                query: {
                    signature?: any;
                    config: string;
                    chainId: number;
                };
                headers: unknown;
                response: {
                    200: {
                        message: any;
                        name: string;
                        args?: undefined;
                        parsedCampaign?: undefined;
                        payload?: undefined;
                        fee?: undefined;
                    } | {
                        args: any;
                        parsedCampaign: any;
                        payload: any;
                        fee: string | undefined;
                        message?: undefined;
                        name?: undefined;
                    };
                };
            };
        };
    };
} & {
    v3: {
        poolInfo: {
            get: {
                body: unknown;
                params: {};
                query: {
                    chainId: number;
                    poolAddress: string;
                };
                headers: unknown;
                response: {
                    [x: string]: any;
                    200: any;
                };
            };
        };
    };
} & {
    v3: {
        positions: {
            get: {
                body: unknown;
                params: {};
                query: {
                    chainId?: number | undefined;
                    user: string;
                };
                headers: unknown;
                response: {
                    [x: string]: any;
                    200: any;
                };
            };
        };
    };
} & {
    v3: {
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
    };
} & {
    v3: {
        recipients: {
            get: {
                body: unknown;
                params: {};
                query: {
                    campaignId: string;
                    chainId: number;
                };
                headers: unknown;
                response: {
                    200: {
                        recipient: string;
                        reason: string;
                        rewardToken: string;
                        amount: string;
                    }[];
                };
            };
        };
    };
} & {
    v3: {
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
    };
} & {
    v3: {
        rewardsReport: {
            get: {
                body: unknown;
                params: {};
                query: {
                    from?: number | undefined;
                    mainParameter?: string | undefined;
                    to?: number | undefined;
                    campaignId: string;
                    chainId: number;
                };
                headers: unknown;
                response: {
                    200: {
                        recipient: string;
                        reason: string;
                        rewardToken: string;
                        amount: string;
                    }[];
                };
            };
        };
    };
} & {
    v3: {
        silo: {
            get: {
                body: unknown;
                params: {};
                query: {
                    chainId: number;
                    repository: string;
                };
                headers: unknown;
                response: {
                    [x: string]: any;
                    200: any;
                };
            };
        };
    };
} & {
    v3: {
        token: {
            get: {
                body: unknown;
                params: {};
                query: {
                    address: string;
                    chainId: number;
                };
                headers: unknown;
                response: {
                    200: {
                        name: string;
                        symbol: string;
                        decimals: number;
                    };
                };
            };
        };
    };
} & {
    v3: {
        updates: {
            get: {
                body: unknown;
                params: {};
                query: {};
                headers: unknown;
                response: {
                    200: {
                        [x: number]: {
                            [campaignId: string]: number;
                        };
                    };
                    readonly 400: {
                        message?: string | undefined;
                        error: string;
                    };
                };
            };
        };
    };
} & {
    v3: {
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
    };
} & {
    v3: {
        uniswapv4: {
            index: {
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
                        } | null;
                    };
                };
            };
        } & {
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
                        } | undefined;
                    };
                };
            };
        } & {
            pool: {
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
