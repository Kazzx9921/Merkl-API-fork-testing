import Elysia from "elysia";
export declare const OpportunityController: Elysia<"/opportunities", false, {
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
    opportunities: {
        index: {
            post: {
                body: {
                    name?: string | undefined;
                    description?: string | undefined;
                    tags?: string[] | undefined;
                    howToSteps?: string[] | undefined;
                    depositUrl?: string | undefined;
                    explorerAddress?: string | undefined;
                    protocols?: string[] | undefined;
                    mainProtocol?: string | undefined;
                    status: "NONE" | "PAST" | "LIVE" | "SOON";
                    type: string;
                    tokens: {
                        address: string;
                        chainId: number;
                    }[];
                    identifier: string;
                    action: "POOL" | "HOLD" | "DROP" | "LEND" | "BORROW" | "LONG" | "SHORT" | "SWAP" | "INVALID";
                    chainId: number;
                };
                params: {};
                query: unknown;
                headers: {
                    authorization: string;
                };
                response: {
                    200: {
                        Tokens: {
                            symbol: string;
                            name: string | null;
                            id: string;
                            icon: string;
                            address: string;
                            chainId: number;
                            decimals: number;
                            displaySymbol: string;
                            verified: boolean;
                            isTest: boolean;
                            isPoint: boolean;
                            isPreTGE: boolean;
                            isNative: boolean;
                            price: number | null;
                        }[];
                        Protocols: {
                            url: string;
                            name: string;
                            description: string;
                            id: string;
                            tags: string[];
                            icon: string;
                        }[];
                        status: import("@db/api").$Enums.Status;
                        type: string;
                        name: string;
                        description: string;
                        id: string;
                        tags: string[];
                        identifier: string;
                        action: import("@db/api").$Enums.OpportunityAction;
                        manualOverrides: import("@db/api").$Enums.OpportunityManualOverride[];
                        chainId: number;
                        howToSteps: string[];
                        depositUrl: string | null;
                        explorerAddress: string | null;
                        mainProtocolId: string | null;
                        tvl: number;
                        apr: number;
                        dailyRewards: number;
                        lastCampaignCreatedAt: Date;
                    };
                };
            };
        };
    };
} & {
    opportunities: {
        ":id": {
            override: {
                patch: {
                    body: {
                        name?: string | undefined;
                        description?: string | undefined;
                        action?: "POOL" | "HOLD" | "DROP" | "LEND" | "BORROW" | "LONG" | "SHORT" | "SWAP" | "INVALID" | undefined;
                        howToSteps?: string[] | undefined;
                        depositUrl?: string | undefined;
                        explorerAddress?: string | undefined;
                    };
                    params: {
                        id: string;
                    };
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            status: import("@db/api").$Enums.Status;
                            type: string;
                            name: string;
                            description: string;
                            id: string;
                            tags: string[];
                            identifier: string;
                            action: import("@db/api").$Enums.OpportunityAction;
                            manualOverrides: import("@db/api").$Enums.OpportunityManualOverride[];
                            chainId: number;
                            howToSteps: string[];
                            depositUrl: string | null;
                            explorerAddress: string | null;
                            mainProtocolId: string | null;
                            tvl: number;
                            apr: number;
                            dailyRewards: number;
                            lastCampaignCreatedAt: Date;
                        };
                    };
                };
            };
        };
    };
} & {
    opportunities: {
        ":id": {
            override: {
                delete: {
                    body: ("name" | "description" | "action" | "howToSteps" | "depositUrl" | "explorerAddress")[];
                    params: {
                        id: string;
                    };
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            Tokens: {
                                symbol: string;
                                name: string | null;
                                id: string;
                                icon: string;
                                address: string;
                                chainId: number;
                                decimals: number;
                                displaySymbol: string;
                                verified: boolean;
                                isTest: boolean;
                                isPoint: boolean;
                                isPreTGE: boolean;
                                isNative: boolean;
                                price: number | null;
                            }[];
                            Protocols: {
                                url: string;
                                name: string;
                                description: string;
                                id: string;
                                tags: string[];
                                icon: string;
                            }[];
                            status: import("@db/api").$Enums.Status;
                            type: string;
                            name: string;
                            description: string;
                            id: string;
                            tags: string[];
                            identifier: string;
                            action: import("@db/api").$Enums.OpportunityAction;
                            manualOverrides: import("@db/api").$Enums.OpportunityManualOverride[];
                            chainId: number;
                            howToSteps: string[];
                            depositUrl: string | null;
                            explorerAddress: string | null;
                            mainProtocolId: string | null;
                            tvl: number;
                            apr: number;
                            dailyRewards: number;
                            lastCampaignCreatedAt: Date;
                        } | {
                            id: string;
                            chainId: number;
                            type: string;
                            identifier: string;
                            name: string;
                            status: "PAST" | "LIVE" | "SOON";
                            action: any;
                            tokens: ({
                                symbol: string;
                                name: string | null;
                                id: string;
                                icon: string;
                                address: string;
                                chainId: number;
                                decimals: number;
                                verified: boolean;
                                isTest: boolean;
                                isPoint: boolean;
                                isPreTGE: boolean;
                                isNative: boolean;
                            } & {
                                price?: number | null | undefined;
                            })[];
                            mainProtocol: "splice" | "reserve" | "morpho" | "quickswap" | "euler" | "aura" | "poolside" | "gearbox" | "filament" | "fluid" | "compound" | "ionic" | "layerbank" | "moonwell" | "fraxlend" | "fenix" | "ra" | "syncswap" | "beefy" | "aerodrome" | "velodrome" | "curve" | "toros" | "akron" | "enzyme" | "dragonswap" | "koi" | "rfx" | "woofi" | "pendle" | "zkSwapThreePool" | "maha" | "tempest" | "holdstation" | "venus" | "reactor_fusion" | "vicuna" | "curveNPool" | "satlayer" | "veda" | "cian" | "concrete" | "hourglass" | "katana" | "gamma" | "stability" | "termmax" | "uniswap" | "ambient" | "arthswap" | "base-swap" | "camelot" | "crust" | "horiza" | "izumi" | "kim" | "pancake-swap" | "ramses" | "retro" | "stryke" | "sushi-swap" | "swapr" | "thruster" | "voltage" | "zero" | "supswap" | "zk-swap" | "thirdtrade" | "swap-x" | "balancer" | "cross_curve" | "neptune" | "maverick" | "trader-joe" | "hanji" | "radiant" | "aave" | "ironclad" | "sturdy" | "frax" | "silo" | "dolomite" | "badger" | "ajna" | "ion" | "eigenlayer" | "vest" | "zerolend" | "lnd" | "hyperdrive" | "oku" | "kyo" | "sonex" | "lendle" | "tako-tako" | "equalizer" | "spectra" | "beraborrow" | "superlend" | "avalon" | "iguana" | "xlend" | "sake" | "sonicmarket" | "angles" | "bunni" | "beratrax" | "yei" | "gammaswap" | "uranium" | "puffer" | undefined;
                            description: string;
                            howToSteps: string[];
                            depositUrl: string | undefined;
                            explorerAddress: string | undefined;
                            tags: string[];
                        };
                    };
                };
            };
        };
    };
} & {
    opportunities: {
        ":id": {
            post: {
                body: unknown;
                params: {
                    campaignId?: string | undefined;
                    id: string;
                };
                query: unknown;
                headers: {
                    authorization: string;
                };
                response: {
                    200: {
                        Tokens: {
                            symbol: string;
                            name: string | null;
                            id: string;
                            icon: string;
                            address: string;
                            chainId: number;
                            decimals: number;
                            displaySymbol: string;
                            verified: boolean;
                            isTest: boolean;
                            isPoint: boolean;
                            isPreTGE: boolean;
                            isNative: boolean;
                            price: number | null;
                        }[];
                        Protocols: {
                            url: string;
                            name: string;
                            description: string;
                            id: string;
                            tags: string[];
                            icon: string;
                        }[];
                        status: import("@db/api").$Enums.Status;
                        type: string;
                        name: string;
                        description: string;
                        id: string;
                        tags: string[];
                        identifier: string;
                        action: import("@db/api").$Enums.OpportunityAction;
                        manualOverrides: import("@db/api").$Enums.OpportunityManualOverride[];
                        chainId: number;
                        howToSteps: string[];
                        depositUrl: string | null;
                        explorerAddress: string | null;
                        mainProtocolId: string | null;
                        tvl: number;
                        apr: number;
                        dailyRewards: number;
                        lastCampaignCreatedAt: Date;
                    } | {
                        id: string;
                        chainId: number;
                        type: string;
                        identifier: string;
                        name: string;
                        status: "PAST" | "LIVE" | "SOON";
                        action: any;
                        tokens: ({
                            symbol: string;
                            name: string | null;
                            id: string;
                            icon: string;
                            address: string;
                            chainId: number;
                            decimals: number;
                            verified: boolean;
                            isTest: boolean;
                            isPoint: boolean;
                            isPreTGE: boolean;
                            isNative: boolean;
                        } & {
                            price?: number | null | undefined;
                        })[];
                        mainProtocol: "splice" | "reserve" | "morpho" | "quickswap" | "euler" | "aura" | "poolside" | "gearbox" | "filament" | "fluid" | "compound" | "ionic" | "layerbank" | "moonwell" | "fraxlend" | "fenix" | "ra" | "syncswap" | "beefy" | "aerodrome" | "velodrome" | "curve" | "toros" | "akron" | "enzyme" | "dragonswap" | "koi" | "rfx" | "woofi" | "pendle" | "zkSwapThreePool" | "maha" | "tempest" | "holdstation" | "venus" | "reactor_fusion" | "vicuna" | "curveNPool" | "satlayer" | "veda" | "cian" | "concrete" | "hourglass" | "katana" | "gamma" | "stability" | "termmax" | "uniswap" | "ambient" | "arthswap" | "base-swap" | "camelot" | "crust" | "horiza" | "izumi" | "kim" | "pancake-swap" | "ramses" | "retro" | "stryke" | "sushi-swap" | "swapr" | "thruster" | "voltage" | "zero" | "supswap" | "zk-swap" | "thirdtrade" | "swap-x" | "balancer" | "cross_curve" | "neptune" | "maverick" | "trader-joe" | "hanji" | "radiant" | "aave" | "ironclad" | "sturdy" | "frax" | "silo" | "dolomite" | "badger" | "ajna" | "ion" | "eigenlayer" | "vest" | "zerolend" | "lnd" | "hyperdrive" | "oku" | "kyo" | "sonex" | "lendle" | "tako-tako" | "equalizer" | "spectra" | "beraborrow" | "superlend" | "avalon" | "iguana" | "xlend" | "sake" | "sonicmarket" | "angles" | "bunni" | "beratrax" | "yei" | "gammaswap" | "uranium" | "puffer" | undefined;
                        description: string;
                        howToSteps: string[];
                        depositUrl: string | undefined;
                        explorerAddress: string | undefined;
                        tags: string[];
                    };
                };
            };
        };
    };
} & {
    opportunities: {
        index: {
            get: {
                body: unknown;
                params: {};
                query: {
                    status?: string | undefined;
                    search?: string | undefined;
                    sort?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    tokens?: string | undefined;
                    items?: number | undefined;
                    tags?: string | undefined;
                    identifier?: string | undefined;
                    page?: number | undefined;
                    action?: string | undefined;
                    campaignId?: string | undefined;
                    creatorAddress?: string | undefined;
                    chainId?: string | undefined;
                    mainProtocolId?: string | undefined;
                    campaigns?: boolean | undefined;
                    point?: boolean | undefined;
                    rewardTokenSymbol?: string | undefined;
                    order?: string | undefined;
                    test?: boolean | undefined;
                    minimumTvl?: number | undefined;
                };
                headers: unknown;
                response: {
                    200: {
                        apr: number;
                        aprRecord: {
                            cumulated: number;
                            timestamp: bigint;
                            breakdowns: ({
                                value: number;
                                distributionType: import("@db/api").$Enums.DistributionType;
                                identifier: string;
                                type: "CAMPAIGN";
                            } | {
                                value: number;
                                identifier: string;
                                type: import("@db/api").$Enums.AprType;
                            })[];
                        };
                        tvlRecord: {
                            id: string;
                            total: number;
                            timestamp: bigint;
                            breakdowns: {
                                type: import("@db/api").$Enums.TvlType;
                                identifier: string;
                                value: number;
                            }[];
                        };
                        rewardsRecord: {
                            id: string;
                            total: number;
                            timestamp: bigint;
                            breakdowns: {
                                id: string;
                                campaignId: string;
                                dailyRewardsRecordId: string;
                                token: {
                                    symbol: string;
                                    name: string | null;
                                    id: string;
                                    icon: string;
                                    address: string;
                                    chainId: number;
                                    decimals: number;
                                    displaySymbol: string;
                                    verified: boolean;
                                    isTest: boolean;
                                    isPoint: boolean;
                                    isPreTGE: boolean;
                                    isNative: boolean;
                                    price: number | null;
                                };
                                amount: any;
                                value: number;
                                distributionType: import("@db/api").$Enums.DistributionType;
                            }[];
                        };
                        campaigns: {
                            params: any;
                            chain: {
                                name: string;
                                id: number;
                                icon: string;
                            };
                            endTimestamp: number;
                            startTimestamp: number;
                            rewardToken: {
                                symbol: string;
                                name: string | null;
                                id: string;
                                icon: string;
                                address: string;
                                chainId: number;
                                decimals: number;
                                verified: boolean;
                                isTest: boolean;
                                isPoint: boolean;
                                isPreTGE: boolean;
                                isNative: boolean;
                            } & {
                                price?: number | null | undefined;
                            };
                            distributionChain: {
                                name: string;
                                id: number;
                                icon: string;
                            } | undefined;
                            campaignStatus: {
                                computedUntil: number;
                                processingStarted: number;
                                status: import("@db/api").$Enums.RunStatus;
                                error: string;
                                details: import("database/api/.generated/runtime/library").JsonValue;
                                campaignId: string;
                            } | undefined;
                            creatorAddress: string;
                            creator: {
                                tags: string[];
                                address: string;
                                creatorId: string | null;
                            };
                            createdAt: string;
                            description: string | undefined;
                            parentCampaignId: string | undefined;
                            rootCampaignId: string | undefined;
                            Opportunity: {
                                status: import("@db/api").$Enums.Status;
                                type: string;
                                name: string;
                                description: string;
                                id: string;
                                tags: string[];
                                identifier: string;
                                action: import("@db/api").$Enums.OpportunityAction;
                                manualOverrides: import("@db/api").$Enums.OpportunityManualOverride[];
                                chainId: number;
                                howToSteps: string[];
                                depositUrl: string | null;
                                explorerAddress: string | null;
                                mainProtocolId: string | null;
                                tvl: number;
                                apr: number;
                                dailyRewards: number;
                                lastCampaignCreatedAt: Date;
                            };
                            type: string;
                            id: string;
                            subType: number | null;
                            computeChainId: number;
                            distributionChainId: number;
                            campaignId: string;
                            distributionType: import("@db/api").$Enums.DistributionType;
                            rewardTokenId: string;
                            amount: string;
                            opportunityId: string;
                        }[] | undefined;
                        id: string;
                        depositUrl: string | undefined;
                        explorerAddress: string | undefined;
                        lastCampaignCreatedAt: string;
                        tokens: ({
                            symbol: string;
                            name: string | null;
                            id: string;
                            icon: string;
                            address: string;
                            chainId: number;
                            decimals: number;
                            verified: boolean;
                            isTest: boolean;
                            isPoint: boolean;
                            isPreTGE: boolean;
                            isNative: boolean;
                        } & {
                            price?: number | null | undefined;
                        })[];
                        chain: {
                            name: string;
                            id: number;
                            icon: string;
                        };
                        protocol: {
                            url: string;
                            name: string;
                            description: string;
                            id: string;
                            tags: string[];
                            icon: string;
                        } | undefined;
                        status: import("@db/api").$Enums.Status;
                        type: string;
                        name: string;
                        description: string;
                        tags: string[];
                        identifier: string;
                        action: import("@db/api").$Enums.OpportunityAction;
                        chainId: number;
                        howToSteps: string[];
                        tvl: number;
                        dailyRewards: number;
                    }[];
                };
            };
        };
    };
} & {
    opportunities: {
        count: {
            get: {
                body: unknown;
                params: {};
                query: {
                    status?: string | undefined;
                    search?: string | undefined;
                    sort?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    tokens?: string | undefined;
                    items?: number | undefined;
                    tags?: string | undefined;
                    identifier?: string | undefined;
                    page?: number | undefined;
                    action?: string | undefined;
                    campaignId?: string | undefined;
                    creatorAddress?: string | undefined;
                    chainId?: string | undefined;
                    mainProtocolId?: string | undefined;
                    campaigns?: boolean | undefined;
                    point?: boolean | undefined;
                    rewardTokenSymbol?: string | undefined;
                    order?: string | undefined;
                    test?: boolean | undefined;
                    minimumTvl?: number | undefined;
                };
                headers: unknown;
                response: {
                    200: number;
                };
            };
        };
    };
} & {
    opportunities: {
        bins: {
            apr: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        status?: string | undefined;
                        search?: string | undefined;
                        sort?: string | undefined;
                        type?: string | undefined;
                        name?: string | undefined;
                        tokens?: string | undefined;
                        items?: number | undefined;
                        tags?: string | undefined;
                        identifier?: string | undefined;
                        page?: number | undefined;
                        action?: string | undefined;
                        campaignId?: string | undefined;
                        creatorAddress?: string | undefined;
                        chainId?: string | undefined;
                        mainProtocolId?: string | undefined;
                        campaigns?: boolean | undefined;
                        point?: boolean | undefined;
                        rewardTokenSymbol?: string | undefined;
                        order?: string | undefined;
                        test?: boolean | undefined;
                        minimumTvl?: number | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            min: number;
                            max: number;
                            overThreshold: number;
                            binWidth: number;
                            bins: any[];
                        };
                    };
                };
            };
        };
    };
} & {
    opportunities: {
        bins: {
            tvl: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        status?: string | undefined;
                        search?: string | undefined;
                        sort?: string | undefined;
                        type?: string | undefined;
                        name?: string | undefined;
                        tokens?: string | undefined;
                        items?: number | undefined;
                        tags?: string | undefined;
                        identifier?: string | undefined;
                        page?: number | undefined;
                        action?: string | undefined;
                        campaignId?: string | undefined;
                        creatorAddress?: string | undefined;
                        chainId?: string | undefined;
                        mainProtocolId?: string | undefined;
                        campaigns?: boolean | undefined;
                        point?: boolean | undefined;
                        rewardTokenSymbol?: string | undefined;
                        order?: string | undefined;
                        test?: boolean | undefined;
                        minimumTvl?: number | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            min: number;
                            max: number;
                            binWidth: number;
                            bins: any[];
                        };
                    };
                };
            };
        };
    };
} & {
    opportunities: {
        ":id": {
            get: {
                body: unknown;
                params: {
                    id: string;
                };
                query: {
                    campaigns?: boolean | undefined;
                    point?: boolean | undefined;
                    test?: boolean | undefined;
                };
                headers: unknown;
                response: {
                    200: {
                        protocol?: {
                            url: string;
                            name: string;
                            description: string;
                            id: string;
                            tags: string[];
                            icon: string;
                        } | null | undefined;
                        distributionType?: "DUTCH_AUCTION" | "FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE" | "FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE" | "FIX_REWARD_VALUE_PER_LIQUIDITY_AMOUNT" | "FIX_REWARD_AMOUNT_PER_LIQUIDITY_AMOUNT" | undefined;
                        depositUrl?: string | undefined;
                        explorerAddress?: string | undefined;
                        aprRecord?: {
                            timestamp: string | bigint;
                            cumulated: number;
                            breakdowns: {
                                type: "CAMPAIGN" | "TOKEN" | "PROTOCOL";
                                identifier: string;
                                value: number;
                            }[];
                        } | undefined;
                        tvlRecord?: {
                            total: number;
                            timestamp: string | bigint;
                            breakdowns: {
                                type: "TOKEN" | "PROTOCOL";
                                identifier: string;
                                value: number;
                            }[];
                        } | undefined;
                        rewardsRecord?: {
                            total: number;
                            id: string;
                            timestamp: string | bigint;
                            breakdowns: {
                                token: {
                                    price?: number | null | undefined;
                                    symbol: string;
                                    name: string | null;
                                    id: string;
                                    icon: string;
                                    address: string;
                                    chainId: number;
                                    decimals: number;
                                    verified: boolean;
                                    isTest: boolean;
                                    isPoint: boolean;
                                    isPreTGE: boolean;
                                };
                                id: string;
                                value: number;
                                campaignId: string;
                                amount: string | bigint;
                                dailyRewardsRecordId: string;
                            }[];
                        } | undefined;
                        status: string;
                        type: string;
                        name: string;
                        tokens: {
                            price?: number | null | undefined;
                            symbol: string;
                            name: string | null;
                            id: string;
                            icon: string;
                            address: string;
                            chainId: number;
                            decimals: number;
                            verified: boolean;
                            isTest: boolean;
                            isPoint: boolean;
                            isPreTGE: boolean;
                        }[];
                        description: string;
                        id: string;
                        tags: string[];
                        identifier: string;
                        chain: {
                            name: string;
                            id: number;
                            icon: string;
                        };
                        action: string;
                        chainId: number;
                        howToSteps: string[];
                        tvl: number;
                        apr: number;
                        dailyRewards: number;
                        lastCampaignCreatedAt: string;
                    };
                    readonly 404: {
                        message: string;
                        name: string;
                    };
                    readonly 500: {
                        info: string;
                        code: string;
                        httpCode: number;
                    };
                };
            };
        };
    };
} & {
    opportunities: {
        campaigns: {
            get: {
                body: unknown;
                params: {};
                query: {
                    status?: "NONE" | "PAST" | "LIVE" | "SOON" | undefined;
                    type?: string | undefined;
                    items?: number | undefined;
                    subType?: number | undefined;
                    page?: number | undefined;
                    types?: string[] | undefined;
                    campaignId?: string | undefined;
                    opportunityId?: string | undefined;
                    startTimestamp?: string | undefined;
                    endTimestamp?: string | undefined;
                    creatorAddress?: string | undefined;
                    rootCampaignId?: string | undefined;
                    parentCampaignId?: string | undefined;
                    chainId?: number | undefined;
                    creatorId?: string | undefined;
                    mainParameter?: string | undefined;
                    point?: boolean | undefined;
                    tokenAddress?: string | undefined;
                    test?: boolean | undefined;
                    creatorTag?: string | undefined;
                    distributionChainIds?: number[] | undefined;
                    tokenSymbol?: string | undefined;
                    withOpportunity?: boolean | undefined;
                    createdAfter?: Date | null | undefined;
                };
                headers: unknown;
                response: {
                    200: {
                        protocol?: {
                            url: string;
                            name: string;
                            description: string;
                            id: string;
                            tags: string[];
                            icon: string;
                        } | null | undefined;
                        distributionType?: "DUTCH_AUCTION" | "FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE" | "FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE" | "FIX_REWARD_VALUE_PER_LIQUIDITY_AMOUNT" | "FIX_REWARD_AMOUNT_PER_LIQUIDITY_AMOUNT" | undefined;
                        depositUrl?: string | undefined;
                        explorerAddress?: string | undefined;
                        aprRecord?: {
                            timestamp: string | bigint;
                            cumulated: number;
                            breakdowns: {
                                type: "CAMPAIGN" | "TOKEN" | "PROTOCOL";
                                identifier: string;
                                value: number;
                            }[];
                        } | undefined;
                        tvlRecord?: {
                            total: number;
                            timestamp: string | bigint;
                            breakdowns: {
                                type: "TOKEN" | "PROTOCOL";
                                identifier: string;
                                value: number;
                            }[];
                        } | undefined;
                        rewardsRecord?: {
                            total: number;
                            id: string;
                            timestamp: string | bigint;
                            breakdowns: {
                                token: {
                                    price?: number | null | undefined;
                                    symbol: string;
                                    name: string | null;
                                    id: string;
                                    icon: string;
                                    address: string;
                                    chainId: number;
                                    decimals: number;
                                    verified: boolean;
                                    isTest: boolean;
                                    isPoint: boolean;
                                    isPreTGE: boolean;
                                };
                                id: string;
                                value: number;
                                campaignId: string;
                                amount: string | bigint;
                                dailyRewardsRecordId: string;
                            }[];
                        } | undefined;
                        status: string;
                        type: string;
                        name: string;
                        tokens: {
                            price?: number | null | undefined;
                            symbol: string;
                            name: string | null;
                            id: string;
                            icon: string;
                            address: string;
                            chainId: number;
                            decimals: number;
                            verified: boolean;
                            isTest: boolean;
                            isPoint: boolean;
                            isPreTGE: boolean;
                        }[];
                        description: string;
                        id: string;
                        tags: string[];
                        identifier: string;
                        chain: {
                            name: string;
                            id: number;
                            icon: string;
                        };
                        action: string;
                        chainId: number;
                        howToSteps: string[];
                        tvl: number;
                        apr: number;
                        dailyRewards: number;
                        lastCampaignCreatedAt: string;
                        campaigns: {
                            description?: string | undefined;
                            creator?: {
                                tags?: string[] | undefined;
                                creatorId?: string | null | undefined;
                                address: string;
                            } | undefined;
                            rootCampaignId?: string | undefined;
                            parentCampaignId?: string | undefined;
                            campaignStatus?: {
                                error?: string | undefined;
                                details?: any;
                                status: string;
                                campaignId: string;
                                computedUntil: string | number;
                                processingStarted: string | number;
                            } | undefined;
                            distributionChain?: {
                                name: string;
                                id: number;
                                icon: string;
                            } | undefined;
                            type: string;
                            id: string;
                            params: any;
                            subType: number | null;
                            chain: {
                                name: string;
                                id: number;
                                icon: string;
                            };
                            computeChainId: number;
                            distributionChainId: number;
                            campaignId: string;
                            rewardTokenId: string;
                            amount: string;
                            opportunityId: string;
                            startTimestamp: string | number;
                            endTimestamp: string | number;
                            creatorAddress: string;
                            createdAt: string;
                            rewardToken: {
                                price?: number | null | undefined;
                                symbol: string;
                                name: string | null;
                                id: string;
                                icon: string;
                                address: string;
                                chainId: number;
                                decimals: number;
                                verified: boolean;
                                isTest: boolean;
                                isPoint: boolean;
                                isPreTGE: boolean;
                            };
                        }[];
                    }[];
                    readonly 404: {
                        message: string;
                        name: string;
                    };
                    readonly 500: {
                        info: string;
                        code: string;
                        httpCode: number;
                    };
                };
            };
        };
    };
} & {
    opportunities: {
        ":id": {
            campaigns: {
                get: {
                    body: unknown;
                    params: {
                        id: string;
                    };
                    query: {
                        campaigns?: boolean | undefined;
                        point?: boolean | undefined;
                        test?: boolean | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            protocol?: {
                                url: string;
                                name: string;
                                description: string;
                                id: string;
                                tags: string[];
                                icon: string;
                            } | null | undefined;
                            distributionType?: "DUTCH_AUCTION" | "FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE" | "FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE" | "FIX_REWARD_VALUE_PER_LIQUIDITY_AMOUNT" | "FIX_REWARD_AMOUNT_PER_LIQUIDITY_AMOUNT" | undefined;
                            depositUrl?: string | undefined;
                            explorerAddress?: string | undefined;
                            aprRecord?: {
                                timestamp: string | bigint;
                                cumulated: number;
                                breakdowns: {
                                    type: "CAMPAIGN" | "TOKEN" | "PROTOCOL";
                                    identifier: string;
                                    value: number;
                                }[];
                            } | undefined;
                            tvlRecord?: {
                                total: number;
                                timestamp: string | bigint;
                                breakdowns: {
                                    type: "TOKEN" | "PROTOCOL";
                                    identifier: string;
                                    value: number;
                                }[];
                            } | undefined;
                            rewardsRecord?: {
                                total: number;
                                id: string;
                                timestamp: string | bigint;
                                breakdowns: {
                                    token: {
                                        price?: number | null | undefined;
                                        symbol: string;
                                        name: string | null;
                                        id: string;
                                        icon: string;
                                        address: string;
                                        chainId: number;
                                        decimals: number;
                                        verified: boolean;
                                        isTest: boolean;
                                        isPoint: boolean;
                                        isPreTGE: boolean;
                                    };
                                    id: string;
                                    value: number;
                                    campaignId: string;
                                    amount: string | bigint;
                                    dailyRewardsRecordId: string;
                                }[];
                            } | undefined;
                            status: string;
                            type: string;
                            name: string;
                            tokens: {
                                price?: number | null | undefined;
                                symbol: string;
                                name: string | null;
                                id: string;
                                icon: string;
                                address: string;
                                chainId: number;
                                decimals: number;
                                verified: boolean;
                                isTest: boolean;
                                isPoint: boolean;
                                isPreTGE: boolean;
                            }[];
                            description: string;
                            id: string;
                            tags: string[];
                            identifier: string;
                            chain: {
                                name: string;
                                id: number;
                                icon: string;
                            };
                            action: string;
                            chainId: number;
                            howToSteps: string[];
                            tvl: number;
                            apr: number;
                            dailyRewards: number;
                            lastCampaignCreatedAt: string;
                            campaigns: {
                                description?: string | undefined;
                                creator?: {
                                    tags?: string[] | undefined;
                                    creatorId?: string | null | undefined;
                                    address: string;
                                } | undefined;
                                rootCampaignId?: string | undefined;
                                parentCampaignId?: string | undefined;
                                campaignStatus?: {
                                    error?: string | undefined;
                                    details?: any;
                                    status: string;
                                    campaignId: string;
                                    computedUntil: string | number;
                                    processingStarted: string | number;
                                } | undefined;
                                distributionChain?: {
                                    name: string;
                                    id: number;
                                    icon: string;
                                } | undefined;
                                type: string;
                                id: string;
                                params: any;
                                subType: number | null;
                                chain: {
                                    name: string;
                                    id: number;
                                    icon: string;
                                };
                                computeChainId: number;
                                distributionChainId: number;
                                campaignId: string;
                                rewardTokenId: string;
                                amount: string;
                                opportunityId: string;
                                startTimestamp: string | number;
                                endTimestamp: string | number;
                                creatorAddress: string;
                                createdAt: string;
                                rewardToken: {
                                    price?: number | null | undefined;
                                    symbol: string;
                                    name: string | null;
                                    id: string;
                                    icon: string;
                                    address: string;
                                    chainId: number;
                                    decimals: number;
                                    verified: boolean;
                                    isTest: boolean;
                                    isPoint: boolean;
                                    isPreTGE: boolean;
                                };
                            }[];
                        };
                        readonly 404: {
                            message: string;
                            name: string;
                        };
                        readonly 500: {
                            info: string;
                            code: string;
                            httpCode: number;
                        };
                    };
                };
            };
        };
    };
} & {
    opportunities: {
        aggregate: {
            ":field": {
                get: {
                    body: unknown;
                    params: {
                        field: never;
                    };
                    query: {
                        status?: string | undefined;
                        search?: string | undefined;
                        sort?: string | undefined;
                        type?: string | undefined;
                        name?: string | undefined;
                        tokens?: string | undefined;
                        items?: number | undefined;
                        tags?: string | undefined;
                        identifier?: string | undefined;
                        page?: number | undefined;
                        action?: string | undefined;
                        campaignId?: string | undefined;
                        creatorAddress?: string | undefined;
                        chainId?: string | undefined;
                        mainProtocolId?: string | undefined;
                        campaigns?: boolean | undefined;
                        point?: boolean | undefined;
                        rewardTokenSymbol?: string | undefined;
                        order?: string | undefined;
                        test?: boolean | undefined;
                        minimumTvl?: number | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            sum: string;
                        };
                    };
                };
            };
        };
    };
} & {
    opportunities: {
        aggregate: {
            max: {
                ":field": {
                    get: {
                        body: unknown;
                        params: {
                            field: never;
                        };
                        query: {
                            status?: string | undefined;
                            search?: string | undefined;
                            sort?: string | undefined;
                            type?: string | undefined;
                            name?: string | undefined;
                            tokens?: string | undefined;
                            items?: number | undefined;
                            tags?: string | undefined;
                            identifier?: string | undefined;
                            page?: number | undefined;
                            action?: string | undefined;
                            campaignId?: string | undefined;
                            creatorAddress?: string | undefined;
                            chainId?: string | undefined;
                            mainProtocolId?: string | undefined;
                            campaigns?: boolean | undefined;
                            point?: boolean | undefined;
                            rewardTokenSymbol?: string | undefined;
                            order?: string | undefined;
                            test?: boolean | undefined;
                            minimumTvl?: number | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: {
                                max: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    opportunities: {
        aggregate: {
            min: {
                ":field": {
                    get: {
                        body: unknown;
                        params: {
                            field: never;
                        };
                        query: {
                            status?: string | undefined;
                            search?: string | undefined;
                            sort?: string | undefined;
                            type?: string | undefined;
                            name?: string | undefined;
                            tokens?: string | undefined;
                            items?: number | undefined;
                            tags?: string | undefined;
                            identifier?: string | undefined;
                            page?: number | undefined;
                            action?: string | undefined;
                            campaignId?: string | undefined;
                            creatorAddress?: string | undefined;
                            chainId?: string | undefined;
                            mainProtocolId?: string | undefined;
                            campaigns?: boolean | undefined;
                            point?: boolean | undefined;
                            rewardTokenSymbol?: string | undefined;
                            order?: string | undefined;
                            test?: boolean | undefined;
                            minimumTvl?: number | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: {
                                min: string;
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
