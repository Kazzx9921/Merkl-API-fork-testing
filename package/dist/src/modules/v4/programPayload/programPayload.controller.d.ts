import Elysia from "elysia";
export declare const ProgramPayloadController: Elysia<"/program-payload", false, {
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
    "program-payload": {
        index: {
            get: {
                body: unknown;
                params: {};
                query: {
                    apr?: string | undefined;
                    creator: string;
                    campaign: string;
                    distributionChainId: number;
                    amount: string;
                    startTimestamp: number;
                    endTimestamp: number;
                    rewardToken: string;
                    program: string;
                };
                headers: unknown;
                response: {
                    200: {
                        version: string;
                        chainId: string;
                        createdAt: number;
                        meta: {
                            name: string;
                            txBuilderVersion: string;
                        };
                        transactions: import("./programPayload.model").transaction[];
                    };
                };
            };
        };
    };
} & {
    "program-payload": {
        config: {
            get: {
                body: unknown;
                params: {};
                query: {
                    apr?: string | undefined;
                    creator: string;
                    campaign: string;
                    distributionChainId: number;
                    amount: string;
                    startTimestamp: number;
                    endTimestamp: number;
                    rewardToken: string;
                    program: string;
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
    "program-payload": {
        "template-config": {
            ":campaignType": {
                get: {
                    body: unknown;
                    params: {
                        campaignType: number;
                    };
                    query: unknown;
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
    "program-payload": {
        campaignData: {
            get: {
                body: unknown;
                params: {};
                query: {
                    apr?: string | undefined;
                    creator: string;
                    campaign: string;
                    distributionChainId: number;
                    amount: string;
                    startTimestamp: number;
                    endTimestamp: number;
                    rewardToken: string;
                    program: string;
                };
                headers: unknown;
                response: {
                    200: {
                        args: any;
                    };
                };
            };
        };
    };
} & {
    "program-payload": {
        program: {
            get: {
                body: unknown;
                params: {};
                query: {
                    amount?: string | undefined;
                    apr?: string | undefined;
                    creator: string;
                    distributionChainId: number;
                    startTimestamp: number;
                    endTimestamp: number;
                    rewardToken: string;
                    program: string;
                };
                headers: unknown;
                response: {
                    200: {
                        version: string;
                        chainId: string;
                        createdAt: number;
                        meta: {
                            name: string;
                            txBuilderVersion: string;
                        };
                        transactions: import("./programPayload.model").transaction[];
                    } | null;
                };
            };
        };
    };
} & {
    "program-payload": {
        program: {
            withAmounts: {
                post: {
                    body: {
                        [x: string]: string;
                    };
                    params: {};
                    query: {
                        amount?: string | undefined;
                        apr?: string | undefined;
                        creator: string;
                        distributionChainId: number;
                        startTimestamp: number;
                        endTimestamp: number;
                        rewardToken: string;
                        program: string;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            version: string;
                            chainId: string;
                            createdAt: number;
                            meta: {
                                name: string;
                                txBuilderVersion: string;
                            };
                            transactions: import("./programPayload.model").transaction[];
                        } | null;
                    };
                };
            };
        };
    };
} & {
    "program-payload": {
        payload: {
            "from-config": {
                post: {
                    body: {
                        url?: string | undefined;
                        hooks?: {}[] | undefined;
                        endTimestamp?: number | undefined;
                        blacklist?: string[] | undefined;
                        poolAddress?: string | undefined;
                        tokenId?: string | undefined;
                        marketId?: string | undefined;
                        strategy?: string | undefined;
                        poolId?: string | undefined;
                        contract?: string | undefined;
                        forwarders?: (string | {})[] | undefined;
                        targetToken?: string | undefined;
                        evkAddress?: string | undefined;
                        subCampaignType?: number | undefined;
                        whitelist?: string[] | undefined;
                        isOutOfRangeIncentivized?: boolean | undefined;
                        weightFees?: number | undefined;
                        weightToken0?: number | undefined;
                        weightToken1?: number | undefined;
                        usesBlockNumber?: boolean | undefined;
                        snapshotTimestamp?: number | undefined;
                        snapshotBlockNumber?: number | undefined;
                        jsonUrl?: string | undefined;
                        repository?: string | undefined;
                        capInUSD?: string | undefined;
                        compFork?: number | undefined;
                        collateralAddress?: string | undefined;
                        creator: string;
                        computeChainId: number;
                        distributionChainId: number;
                        amount: string;
                        startTimestamp: number;
                        rewardToken: string;
                        campaignType: number;
                    };
                    params: {};
                    query: {
                        debug?: boolean | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            version: string;
                            chainId: string;
                            createdAt: number;
                            meta: {
                                name: string;
                                txBuilderVersion: string;
                            };
                            transactions: import("./programPayload.model").transaction[];
                        } | {
                            safePayload: import("./programPayload.model").safePayload;
                            nonEncodedConfig: any;
                        };
                    };
                };
            };
        };
    };
} & {
    "program-payload": {
        parse: {
            "from-campaign-data": {
                post: {
                    body: {
                        computeChainId: number;
                        amount: string;
                        startTimestamp: number;
                        chainId: number;
                        rewardToken: string;
                        campaignType: number;
                        duration: number;
                        campaignData: string;
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        [x: string]: any;
                        200: any;
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
