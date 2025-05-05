import Elysia from "elysia";
export declare const v4: Elysia<"/v4", false, {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    type: {};
    error: {
        readonly HttpError: import("../../errors").HttpError;
        readonly BadRequestError: import("../../errors").BadRequestError;
        readonly ConflictError: import("../../errors").ConflictError;
        readonly NotFoundError: import("../../errors").NotFoundError;
        readonly UnauthorizedError: import("../../errors").UnauthorizedError;
    };
}, {
    schema: {};
    macro: {};
    macroFn: {};
}, {
    v4: {
        derive: {};
        resolve: {};
        schema: {};
    };
} & {
    v4: {};
} & {
    v4: {
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
    };
} & {
    v4: {
        campaigns: {
            engine: {
                index: {
                    post: {
                        body: {
                            tags?: string[] | undefined;
                            identifier?: string | undefined;
                            subType?: number | undefined;
                            rootCampaignId?: string | undefined;
                            parentCampaignId?: string | undefined;
                            type: number;
                            params: string;
                            creator: string;
                            computeChainId: number;
                            campaignId: string;
                            amount: string;
                            startTimestamp: string;
                            endTimestamp: string;
                            chainId: number;
                            rewardTokenAddress: string;
                            opportunityIdentifier: string;
                        };
                        params: {};
                        query: unknown;
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: {
                                type: string;
                                description: string | null;
                                id: string;
                                params: import("database/api/.generated/runtime/library").JsonValue;
                                subType: number | null;
                                computeChainId: number;
                                distributionChainId: number;
                                campaignId: string;
                                distributionType: import("@db/api").$Enums.DistributionType;
                                rewardTokenId: string;
                                amount: string;
                                opportunityId: string;
                                startTimestamp: bigint;
                                endTimestamp: bigint;
                                creatorAddress: string;
                                manualOverrides: import("@db/api").$Enums.CampaignManualOverride[];
                                createdAt: Date;
                                rootCampaignId: string | null;
                                parentCampaignId: string | null;
                            } | {
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
                            } | undefined;
                        };
                    };
                };
            };
        } & {
            opportunity: {
                patch: {
                    body: {
                        opportunityIdentifier?: string | undefined;
                        campaignId: string;
                        distributionChain: number;
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: string;
                    };
                };
            };
        } & {
            creator: {
                patch: {
                    body: {
                        campaignId: string;
                        creatorAddress: string;
                        distributionChain: number;
                    };
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
            "remove-override": {
                patch: {
                    body: {
                        campaignId: string;
                        field: "opportunityId" | "creatorAddress";
                        distributionChain: number;
                    };
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
            metadata: {
                patch: {
                    body: {
                        url: string;
                        campaignId: string;
                        distributionChain: number;
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            type: string;
                            description: string | null;
                            id: string;
                            params: import("database/api/.generated/runtime/library").JsonValue;
                            subType: number | null;
                            computeChainId: number;
                            distributionChainId: number;
                            campaignId: string;
                            distributionType: import("@db/api").$Enums.DistributionType;
                            rewardTokenId: string;
                            amount: string;
                            opportunityId: string;
                            startTimestamp: bigint;
                            endTimestamp: bigint;
                            creatorAddress: string;
                            manualOverrides: import("@db/api").$Enums.CampaignManualOverride[];
                            createdAt: Date;
                            rootCampaignId: string | null;
                            parentCampaignId: string | null;
                        };
                    };
                };
            };
        } & {
            tvls: {
                ":opportunityId": {
                    put: {
                        body: unknown;
                        params: {
                            opportunityId: string;
                        };
                        query: unknown;
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: unknown[];
                        };
                    };
                };
            };
        } & {
            index: {
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
                        }[];
                    };
                };
            };
        } & {
            ":id": {
                get: {
                    body: unknown;
                    params: {
                        id: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
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
                        };
                    };
                };
            };
        } & {
            ":id": {
                metrics: {
                    get: {
                        body: unknown;
                        params: {
                            id: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                tvlRecords: {
                                    total: number;
                                    timestamp: bigint;
                                }[];
                                aprRecords: {
                                    timestamp: bigint;
                                    apr: number;
                                }[];
                                dailyRewardsRecords: {
                                    total: number;
                                    timestamp: bigint;
                                }[];
                                walletCount: {
                                    timestamp: bigint;
                                    walletCount: number;
                                }[];
                                tvlInflowPerDollar: bigint;
                            };
                        };
                    };
                };
            };
        } & {
            "campaigns-to-process": {
                index: {
                    get: {
                        body: unknown;
                        params: {};
                        query: {
                            chainId: number;
                        };
                        headers: unknown;
                        response: {
                            200: {
                                campaignId: string;
                                endTimestamp: bigint;
                                CampaignStatus: {
                                    status: import("@db/api").$Enums.RunStatus;
                                    computedUntil: bigint;
                                    processingStarted: bigint;
                                }[];
                            }[];
                        };
                    };
                };
            };
        } & {
            "campaigns-to-process": {
                count: {
                    get: {
                        body: unknown;
                        params: {};
                        query: {
                            chainId: number;
                        };
                        headers: unknown;
                        response: {
                            200: number;
                        };
                    };
                };
            };
        } & {
            "campaigns-to-process": {
                next: {
                    get: {
                        body: unknown;
                        params: {};
                        query: {
                            chainId: number;
                        };
                        headers: unknown;
                        response: {
                            200: {
                                campaignId: string;
                            };
                        };
                    };
                };
            };
        } & {
            "campaigns-to-process": {
                engine: {
                    post: {
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
                                campaignId: string;
                            };
                        };
                    };
                };
            };
        };
    } & {
        campaigns: {
            index: {
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
                        }[];
                    };
                };
            };
        };
    } & {
        campaigns: {
            count: {
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
                        200: number;
                    };
                };
            };
        };
    } & {
        campaignscount: {
            "by-chains": {
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
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            [x: string]: number;
                        };
                    };
                };
            };
        };
    } & {
        campaigns: {
            count: {
                "by-types": {
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
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: {
                                [x: string]: number;
                            };
                        };
                    };
                };
            };
        };
    } & {
        campaigns: {
            count: {
                "by-protocols": {
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
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: {
                                [x: string]: number;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    v4: {
        campaigns: {
            "dry-run": {
                tvl: {
                    ":campaignId": {
                        get: {
                            body: unknown;
                            params: {
                                campaignId: string;
                            };
                            query: unknown;
                            headers: {
                                authorization: string;
                            };
                            response: {
                                200: unknown[];
                            };
                        };
                    };
                };
            };
        } & {
            "dry-run": {
                tvls: {
                    ":opportunityId": {
                        get: {
                            body: unknown;
                            params: {
                                opportunityId: string;
                            };
                            query: unknown;
                            headers: {
                                authorization: string;
                            };
                            response: {
                                200: unknown[];
                            };
                        };
                    };
                };
            };
        } & {
            "dry-run": {
                tvls: {
                    list: {
                        post: {
                            body: string[];
                            params: {};
                            query: unknown;
                            headers: {
                                authorization: string;
                            };
                            response: {
                                200: unknown[];
                            };
                        };
                    };
                };
            };
        } & {
            "dry-run": {
                tvl: {
                    post: {
                        body: {
                            id?: string | undefined;
                            subType?: number | undefined;
                            campaignId?: string | undefined;
                            amount?: string | undefined;
                            creatorAddress?: string | undefined;
                            type: string;
                            params: any;
                            computeChainId: number;
                            distributionChainId: number;
                            startTimestamp: number;
                            endTimestamp: number;
                            rewardToken: string;
                        };
                        params: {};
                        query: unknown;
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: unknown[];
                        };
                    };
                };
            };
        } & {
            "dry-run": {
                tvl: {
                    get: {
                        body: unknown;
                        params: {};
                        query: {
                            decimals?: number | undefined;
                            chainId: number;
                            tokenAddress: string;
                            rewardTokenAddress: string;
                            symbolRewardToken: string;
                        };
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: {
                                tvl: number;
                                totalSupply: number;
                                cardName: string;
                                blacklistedSupply: number;
                                priceTargetToken: number;
                                type: string;
                            };
                        };
                    };
                };
            };
        } & {
            "dry-run": {
                metadata: {
                    post: {
                        body: {
                            id?: string | undefined;
                            subType?: number | undefined;
                            campaignId?: string | undefined;
                            amount?: string | undefined;
                            creatorAddress?: string | undefined;
                            type: string;
                            params: any;
                            computeChainId: number;
                            distributionChainId: number;
                            startTimestamp: number;
                            endTimestamp: number;
                            rewardToken: string;
                        };
                        params: {};
                        query: unknown;
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: {
                                type: string;
                                description: string | null;
                                id: string;
                                params: import("database/api/.generated/runtime/library").JsonValue;
                                subType: number | null;
                                computeChainId: number;
                                distributionChainId: number;
                                campaignId: string;
                                distributionType: import("@db/api").$Enums.DistributionType;
                                rewardTokenId: string;
                                amount: string;
                                opportunityId: string;
                                startTimestamp: bigint;
                                endTimestamp: bigint;
                                creatorAddress: string;
                                manualOverrides: import("@db/api").$Enums.CampaignManualOverride[];
                                createdAt: Date;
                                rootCampaignId: string | null;
                                parentCampaignId: string | null;
                            } | {
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
                            } | undefined;
                        };
                    };
                };
            };
        } & {
            "dry-run": {
                metadata: {
                    get: {
                        body: unknown;
                        params: {};
                        query: {
                            distributionChain?: number | undefined;
                            campaignId: string;
                        };
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: {
                                type: string;
                                description: string | null;
                                id: string;
                                params: import("database/api/.generated/runtime/library").JsonValue;
                                subType: number | null;
                                computeChainId: number;
                                distributionChainId: number;
                                campaignId: string;
                                distributionType: import("@db/api").$Enums.DistributionType;
                                rewardTokenId: string;
                                amount: string;
                                opportunityId: string;
                                startTimestamp: bigint;
                                endTimestamp: bigint;
                                creatorAddress: string;
                                manualOverrides: import("@db/api").$Enums.CampaignManualOverride[];
                                createdAt: Date;
                                rootCampaignId: string | null;
                                parentCampaignId: string | null;
                            } | {
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
                            } | undefined;
                        };
                    };
                };
            };
        };
    };
} & {
    v4: {
        protocols: {
            index: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        name?: string | undefined;
                        id?: string | undefined;
                        items?: number | undefined;
                        tags?: string[] | undefined;
                        page?: number | undefined;
                        ids?: string[] | undefined;
                        test?: boolean | undefined;
                        opportunityTag?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: ({
                            url: string;
                            name: string;
                            description: string;
                            id: string;
                            tags: string[];
                            icon: string;
                        } & {
                            dailyRewards?: number | undefined;
                            numberOfLiveCampaigns?: number | undefined;
                            opportunityLiveTags?: string[] | undefined;
                        })[];
                    };
                };
            };
        } & {
            count: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        name?: string | undefined;
                        id?: string | undefined;
                        items?: number | undefined;
                        tags?: string[] | undefined;
                        page?: number | undefined;
                        ids?: string[] | undefined;
                        test?: boolean | undefined;
                        opportunityTag?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: number;
                    };
                };
            };
        } & {
            ":id": {
                get: {
                    body: unknown;
                    params: {
                        id: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            url: string;
                            name: string;
                            description: string;
                            id: string;
                            tags: string[];
                            icon: string;
                            dailyRewards?: number | undefined;
                            numberOfLiveCampaigns?: number | undefined;
                            opportunityLiveTags?: string[] | undefined;
                        };
                    };
                };
            };
        } & {
            ":id": {
                patch: {
                    body: {
                        url?: string | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        icon?: string | undefined;
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
                            url: string;
                            name: string;
                            description: string;
                            id: string;
                            tags: string[];
                            icon: string;
                        };
                    };
                };
            };
        } & {
            index: {
                post: {
                    body: {
                        url: string;
                        name: string;
                        description: string;
                        id: string;
                        tags: string[];
                        icon: string;
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            url: string;
                            name: string;
                            description: string;
                            id: string;
                            tags: string[];
                            icon: string;
                        };
                    };
                };
            };
        } & {
            webhooks: {
                notion: {
                    post: {
                        body: {
                            data: {
                                properties: {
                                    url: {
                                        url: string;
                                    };
                                    name: {
                                        rich_text: {
                                            text: {
                                                content: string;
                                            };
                                        }[];
                                    };
                                    description: {
                                        rich_text: {
                                            text: {
                                                content: string;
                                            };
                                        }[];
                                    };
                                    id: {
                                        title: {
                                            text: {
                                                content: string;
                                            };
                                        }[];
                                    };
                                    tags: {
                                        rich_text: {
                                            text: {
                                                content: string;
                                            };
                                        }[];
                                    };
                                    icon: {
                                        files: ({
                                            name: string;
                                            file: {
                                                url: string;
                                            };
                                        } | {
                                            external: {
                                                url: string;
                                            };
                                        })[];
                                    };
                                };
                            };
                        };
                        params: {};
                        query: unknown;
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: {
                                url: string;
                                name: string;
                                description: string;
                                id: string;
                                tags: string[];
                                icon: string;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    v4: {
        explorers: {
            post: {
                body: {
                    url: string;
                    type: "ETHERSCAN" | "BLOCKSCOUT";
                    chainId: number;
                };
                params: {};
                query: unknown;
                headers: {
                    authorization: string;
                };
                response: {
                    200: {
                        url: string;
                        type: import("@db/api").$Enums.ExplorerType;
                        id: string;
                        chainId: number;
                    };
                };
            };
        };
    };
} & {
    v4: {
        tokens: {
            ":id": {
                get: {
                    body: unknown;
                    params: {
                        id: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
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
                            price?: number | null | undefined;
                        } | undefined;
                    };
                };
            };
        } & {
            ":id": {
                allowance: {
                    ":owner": {
                        ":spender": {
                            get: {
                                body: unknown;
                                params: {
                                    id: string;
                                    owner: string;
                                    spender: string;
                                };
                                query: unknown;
                                headers: unknown;
                                response: {
                                    200: {
                                        allowance: bigint;
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
                                        price?: number | null | undefined;
                                    } | undefined;
                                };
                            };
                        };
                    };
                };
            };
        } & {
            reward: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        chainId?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            [x: number]: {
                                minimumAmountPerHour: any;
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
                        };
                    };
                };
            };
        } & {
            reward: {
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
                                minimumAmountPerHour: any;
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
                        };
                    };
                };
            };
        } & {
            balances: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        verified?: boolean | undefined;
                        tokenAddress?: string | undefined;
                        additionalTokenAddresses?: string[] | undefined;
                        chainId: number;
                        userAddress: string;
                    };
                    headers: unknown;
                    response: {
                        200: ({
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
                        } & {
                            balance: bigint;
                        })[];
                    };
                };
            };
        } & {
            index: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        symbol?: string | undefined;
                        search?: string | undefined;
                        name?: string | undefined;
                        id?: string[] | undefined;
                        items?: number | undefined;
                        page?: number | undefined;
                        address?: string | undefined;
                        chainId?: number | undefined;
                        displaySymbol?: string | undefined;
                        verified?: boolean | undefined;
                        isNative?: boolean | undefined;
                        test?: boolean | undefined;
                        missingIcons?: boolean | undefined;
                        missingPrice?: boolean | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: ({
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
                    };
                };
            };
        } & {
            count: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        symbol?: string | undefined;
                        search?: string | undefined;
                        name?: string | undefined;
                        id?: string[] | undefined;
                        items?: number | undefined;
                        page?: number | undefined;
                        address?: string | undefined;
                        chainId?: number | undefined;
                        displaySymbol?: string | undefined;
                        verified?: boolean | undefined;
                        isNative?: boolean | undefined;
                        test?: boolean | undefined;
                        missingIcons?: boolean | undefined;
                        missingPrice?: boolean | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: number;
                    };
                };
            };
        } & {
            index: {
                post: {
                    body: {
                        isTest?: boolean | undefined;
                        icon: string;
                        address: string;
                        chainId: number;
                        verified: boolean;
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
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
                    };
                };
            };
        } & {
            ":id": {
                patch: {
                    body: {
                        name?: string | undefined;
                        icon?: string | undefined;
                        displaySymbol?: string | undefined;
                        verified?: boolean | undefined;
                        isTest?: boolean | undefined;
                        isPoint?: boolean | undefined;
                        isPreTGE?: boolean | undefined;
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
                    };
                };
            };
        } & {
            webhooks: {
                notion: {
                    post: {
                        body: {
                            data: {
                                properties: {
                                    "Icon (Required)": {
                                        files: ({
                                            file: {
                                                url: string;
                                            };
                                        } | {
                                            external: {
                                                url: string;
                                            };
                                        })[];
                                    };
                                    "Address (in checksum format) (Required)": {
                                        rich_text: {
                                            plain_text: string;
                                        }[];
                                    };
                                    "Chain ID (Required)": {
                                        number: number;
                                    };
                                    "Symbol (Optional)": {
                                        rich_text: {
                                            plain_text: string;
                                        }[];
                                    };
                                    "CoinGecko API ID (Recommended)": {
                                        rich_text: {
                                            plain_text: string;
                                        }[];
                                    };
                                };
                            };
                        };
                        params: {};
                        query: unknown;
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: {
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
                        };
                    };
                };
            };
        };
    };
} & {
    v4: {
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
                        200: import("./reward/reward.model").BreakdownForCampaignsRaw[];
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
    };
} & {
    v4: {
        chains: {
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
                            name: string;
                            id: number;
                            icon: string;
                            explorers: {
                                url: string;
                                type: import("@db/api").$Enums.ExplorerType;
                                id: string;
                                chainId: number;
                            }[];
                        } | null;
                    };
                };
            };
        };
    } & {
        chains: {
            index: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        name?: string | undefined;
                        test?: boolean | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            name: string;
                            id: number;
                            icon: string;
                            explorers: {
                                url: string;
                                type: import("@db/api").$Enums.ExplorerType;
                                id: string;
                                chainId: number;
                            }[];
                        }[];
                    };
                };
            };
        };
    } & {
        chains: {
            count: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        name?: string | undefined;
                        test?: boolean | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: number;
                    };
                };
            };
        };
    } & {
        chains: {
            ":chainId": {
                patch: {
                    body: {
                        icon?: string | undefined;
                        dailyRewards?: number | undefined;
                        liveCampaigns?: number | undefined;
                    };
                    params: {
                        chainId: number;
                    };
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            name: string;
                            id: number;
                            icon: string;
                        };
                    };
                };
            };
        };
    } & {
        chains: {
            index: {
                post: {
                    body: {
                        name: string;
                        id: number;
                        icon: string;
                        explorerType: "ETHERSCAN" | "BLOCKSCOUT";
                        explorerUrl: string;
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            Explorer: {
                                url: string;
                                type: import("@db/api").$Enums.ExplorerType;
                                id: string;
                                chainId: number;
                            }[];
                            name: string;
                            id: number;
                            icon: string;
                        };
                    };
                };
            };
        };
    };
} & {
    v4: {
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
    };
} & {
    v4: {
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
    };
} & {
    v4: {
        users: {
            ":address": {
                rewards: {
                    get: {
                        body: unknown;
                        params: {
                            address: string;
                        };
                        query: {
                            test?: boolean | undefined;
                            reloadChainId?: number | undefined;
                            claimableOnly?: boolean | undefined;
                            chainId: number[];
                        };
                        headers: unknown;
                        response: {
                            200: (Omit<{
                                chain: import("@db/api").Chain;
                                rewards: Awaited<ReturnType<typeof import("./reward/reward.service").RewardService["format"]>>;
                            }, "rewards"> & {
                                rewards: (Omit<{
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
                                    breakdowns: {
                                        campaignId: string;
                                        subCampaignId: string | undefined;
                                        opportunity: {
                                            Chain: {
                                                name: string;
                                                id: number;
                                                icon: string;
                                            };
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
                                            MainProtocol: {
                                                url: string;
                                                name: string;
                                                description: string;
                                                id: string;
                                                tags: string[];
                                                icon: string;
                                            } | null;
                                        } & {
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
                                        reason: string;
                                        pending: string;
                                        amount: string;
                                        claimed: string;
                                    }[];
                                    claimed: bigint;
                                    amount: bigint;
                                    pending: bigint;
                                    root: string;
                                    recipient: string;
                                    proofs: string[];
                                }, "breakdowns"> & {
                                    breakdowns: {
                                        campaignId: string;
                                        subCampaignId: string | undefined;
                                        reason: string;
                                        pending: string;
                                        amount: string;
                                        claimed: string;
                                    }[];
                                })[];
                            })[];
                        };
                    };
                };
            };
        };
    } & {
        users: {
            ":address": {
                terms: {
                    get: {
                        body: unknown;
                        params: {
                            address: string;
                        };
                        query: {
                            chainId: number;
                        };
                        headers: unknown;
                        response: {
                            200: boolean;
                        };
                    };
                };
            };
        };
    } & {
        users: {
            index: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        items?: number | undefined;
                        tags?: string[] | undefined;
                        page?: number | undefined;
                        address?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            tags: string[];
                            address: string;
                            creatorId: string | null;
                        }[];
                    };
                };
            };
        };
    } & {
        users: {
            ":address": {
                get: {
                    body: unknown;
                    params: {
                        address: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            tags: string[];
                            address: string;
                            creatorId: string | null;
                        };
                    };
                };
            };
        };
    } & {
        users: {
            ":address": {
                rewards: {
                    breakdowns: {
                        get: {
                            body: unknown;
                            params: {
                                address: string;
                            };
                            query: {
                                test?: boolean | undefined;
                                chainIds?: number[] | undefined;
                                reloadChainId?: number | undefined;
                                claimableOnly?: boolean | undefined;
                            };
                            headers: unknown;
                            response: {
                                200: (Omit<{
                                    chain: import("@db/api").Chain;
                                    rewards: Awaited<ReturnType<typeof import("./reward/reward.service").RewardService["format"]>>;
                                }, "rewards"> & {
                                    rewards: (Omit<{
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
                                        breakdowns: {
                                            campaignId: string;
                                            subCampaignId: string | undefined;
                                            opportunity: {
                                                Chain: {
                                                    name: string;
                                                    id: number;
                                                    icon: string;
                                                };
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
                                                MainProtocol: {
                                                    url: string;
                                                    name: string;
                                                    description: string;
                                                    id: string;
                                                    tags: string[];
                                                    icon: string;
                                                } | null;
                                            } & {
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
                                            reason: string;
                                            pending: string;
                                            amount: string;
                                            claimed: string;
                                        }[];
                                        claimed: bigint;
                                        amount: bigint;
                                        pending: bigint;
                                        root: string;
                                        recipient: string;
                                        proofs: string[];
                                    }, "breakdowns"> & {
                                        breakdowns: {
                                            opportunity: import("./opportunity/opportunity.model").Opportunity["model"];
                                            claimed: bigint;
                                            amount: bigint;
                                            pending: bigint;
                                        }[];
                                    })[];
                                    distributor: string;
                                })[];
                            };
                        };
                    };
                };
            };
        };
    } & {
        users: {
            index: {
                post: {
                    body: {
                        tags: string[];
                        address: string;
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            tags: string[];
                            address: string;
                            creatorId: string | null;
                        };
                    };
                };
            };
        };
    } & {
        users: {
            tags: {
                get: {
                    body: unknown;
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            tags: string[];
                            address: string;
                            creatorId: string | null;
                        }[];
                    };
                };
            };
        };
    } & {
        users: {
            ":address": {
                tags: {
                    patch: {
                        body: {
                            tags: string[];
                        };
                        params: {
                            address: string;
                        };
                        query: unknown;
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: {
                                tags: string[];
                                address: string;
                                creatorId: string | null;
                            };
                        };
                    };
                };
            };
        };
    } & {
        users: {
            sync: {
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
    };
} & {
    v4: {
        roots: {
            index: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        chainId: number;
                        fromTimestamp: string;
                        toTimestamp: string;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            chainId: number;
                            timestamp: bigint;
                            root: string;
                            epoch: number;
                        }[];
                    };
                };
            };
        };
    } & {
        roots: {
            live: {
                get: {
                    body: unknown;
                    params: {};
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            [x: number]: {
                                live: string;
                                tree: string;
                                lastTree: string;
                                endOfDisputePeriod: number;
                                disputer: string;
                            };
                        };
                    };
                };
            };
        };
    } & {
        roots: {
            engine: {
                post: {
                    body: {
                        chainId: number;
                        timestamp: number;
                        root: string;
                        epoch: number;
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            chainId: number;
                            timestamp: bigint;
                            root: string;
                            epoch: number;
                        };
                    };
                };
            };
        };
    };
} & {
    v4: {
        interaction: {
            targets: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        protocolId?: string | undefined;
                        identifier: string;
                        chainId: number;
                    };
                    headers: unknown;
                    response: {
                        200: import("./interaction/interaction.model").InteractionTarget[];
                    };
                };
            };
        };
    } & {
        interaction: {
            protocols: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        chainId?: number | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: ({
                            url: string;
                            name: string;
                            description: string;
                            id: string;
                            tags: string[];
                            icon: string;
                        } & {
                            dailyRewards?: number | undefined;
                            numberOfLiveCampaigns?: number | undefined;
                            opportunityLiveTags?: string[] | undefined;
                        })[];
                    };
                };
            };
        };
    } & {
        interaction: {
            transaction: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        slippage?: number | undefined;
                        identifier: string;
                        chainId: number;
                        protocolId: string;
                        userAddress: string;
                        fromAmount: string;
                        fromTokenAddress: string;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            amountIn: bigint;
                            allowance: bigint;
                            approved: boolean;
                            transaction: import("./interaction/interaction.model").UserTransaction;
                            approval: import("./interaction/interaction.model").UserTransaction;
                            actions?: import("./interaction/interaction.model").InteractionAction[] | undefined;
                            depositValue?: number | undefined;
                        } | undefined;
                    };
                };
            };
        };
    };
} & {
    v4: {
        accounting: {
            index: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        items?: number | undefined;
                        page?: number | undefined;
                    };
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            id: string;
                            datetime: Date;
                            chainId: number;
                            timestamp: number;
                            recipient: string;
                            fromTokenId: string;
                            toTokenId: string;
                            multisig: string;
                            amountIn: string;
                            amountOut: string;
                        }[];
                    };
                };
            };
        } & {
            revenues: {
                get: {
                    body: unknown;
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            total: number;
                            breakdown: {
                                [key: number]: {
                                    chainAmount: number;
                                    percentage: number;
                                };
                            };
                        };
                    };
                };
            };
        } & {
            revenues: {
                "per-month": {
                    ":year": {
                        ":month": {
                            get: {
                                body: unknown;
                                params: {
                                    year: number;
                                    month: number;
                                };
                                query: unknown;
                                headers: {
                                    authorization: string;
                                };
                                response: {
                                    200: {
                                        total: number;
                                        breakdown: {
                                            [key: number]: {
                                                chainAmount: number;
                                                percentage: number;
                                            };
                                        };
                                        from: string;
                                        to: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        } & {
            revenues: {
                chains: {
                    ":chainId": {
                        get: {
                            body: unknown;
                            params: {
                                chainId: number;
                            };
                            query: unknown;
                            headers: {
                                authorization: string;
                            };
                            response: {
                                200: {
                                    totalAmount: number;
                                };
                            };
                        };
                    };
                };
            };
        } & {
            revenues: {
                chains: {
                    ":chainId": {
                        "per-month": {
                            ":year": {
                                ":month": {
                                    get: {
                                        body: unknown;
                                        params: {
                                            chainId: number;
                                            year: number;
                                            month: number;
                                        };
                                        query: unknown;
                                        headers: {
                                            authorization: string;
                                        };
                                        response: {
                                            200: {
                                                totalAmount: number;
                                                from: string;
                                                to: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        } & {
            tokens: {
                ":chainId": {
                    ":tokenAddress": {
                        get: {
                            body: unknown;
                            params: {
                                chainId: number;
                                tokenAddress: string;
                            };
                            query: unknown;
                            headers: {
                                authorization: string;
                            };
                            response: {
                                200: {
                                    totalAmount: number;
                                    totalAmountUSD: number;
                                };
                            };
                        };
                    };
                };
            };
        } & {
            tokens: {
                ":chainId": {
                    ":tokenAddress": {
                        "per-month": {
                            ":year": {
                                ":month": {
                                    get: {
                                        body: unknown;
                                        params: {
                                            chainId: number;
                                            year: number;
                                            month: number;
                                            tokenAddress: string;
                                        };
                                        query: unknown;
                                        headers: {
                                            authorization: string;
                                        };
                                        response: {
                                            200: {
                                                totalAmount: number;
                                                totalAmountUSD: number;
                                                from: string;
                                                to: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    v4: {
        "campaign-status": {
            engine: {
                ":campaignId": {
                    put: {
                        body: {
                            value: "SUCCESS";
                            computedUntil: number;
                        } | {
                            value: "PROCESSING";
                        } | {
                            error: string;
                            details: string;
                            value: "SKIPPED";
                        } | {
                            error: string;
                            details: string;
                            value: "FAILED";
                        };
                        params: {
                            campaignId: string;
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
        } & {
            engine: {
                computedUntil: {
                    ":campaignId": {
                        put: {
                            body: {
                                computedUntil: number;
                            };
                            params: {
                                campaignId: string;
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
        } & {
            error: {
                ":campaignId": {
                    put: {
                        body: {
                            error: string;
                        };
                        params: {
                            campaignId: string;
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
        } & {
            engine: {
                overlaps: {
                    get: {
                        body: unknown;
                        params: {};
                        query: {
                            campaignId: string;
                            distributionChain: number;
                        };
                        headers: {
                            authorization: string;
                        };
                        response: {
                            200: boolean;
                        };
                    };
                };
            };
        } & {
            index: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        status?: "PROCESSING" | "SUCCESS" | "FAILED" | "SKIPPED" | ("PROCESSING" | "SUCCESS" | "FAILED" | "SKIPPED")[] | undefined;
                        computeChainId?: number | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            status: import("@db/api").$Enums.RunStatus;
                            error: string;
                            details: import("database/api/.generated/runtime/library").JsonValue;
                            campaignId: string;
                            computedUntil: bigint;
                            processingStarted: bigint;
                        }[];
                    };
                };
            };
        } & {
            ":campaignId": {
                get: {
                    body: unknown;
                    params: {
                        campaignId: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            status: import("@db/api").$Enums.RunStatus;
                            error: string;
                            details: import("database/api/.generated/runtime/library").JsonValue;
                            campaignId: string;
                            computedUntil: bigint;
                            processingStarted: bigint;
                        }[] | {
                            status: import("@db/api").$Enums.RunStatus;
                            error: string;
                            details: import("database/api/.generated/runtime/library").JsonValue;
                            campaignId: string;
                            computedUntil: bigint;
                            processingStarted: bigint;
                        };
                    };
                };
            };
        } & {
            delay: {
                index: {
                    get: {
                        body: unknown;
                        params: {};
                        query: {
                            chainId?: number | undefined;
                            endTimestampLowerBound?: number | undefined;
                            delayLowerBound?: number | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: {
                                delay: number;
                                computedUntil: number;
                                computeChainId: number;
                                distributionChainId: number;
                                campaignId: string;
                                startTimestamp: bigint;
                                endTimestamp: bigint;
                                RewardToken: {
                                    symbol: string;
                                    address: string;
                                    isTest: boolean;
                                };
                                Opportunity: {
                                    type: string;
                                    name: string;
                                    identifier: string;
                                };
                                CampaignStatus: {
                                    status: import("@db/api").$Enums.RunStatus;
                                    error: string;
                                    details: import("database/api/.generated/runtime/library").JsonValue;
                                    campaignId: string;
                                    computedUntil: bigint;
                                    processingStarted: bigint;
                                }[];
                            }[];
                        };
                    };
                };
            };
        } & {
            delay: {
                status: {
                    get: {
                        body: unknown;
                        params: {};
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                [x: number]: {
                                    live: string;
                                    tree: string;
                                    lastTree: string;
                                    admin: string;
                                    adminUrl?: string;
                                    distributor: string;
                                    distributionCreator: string;
                                    endOfDisputePeriod: number;
                                    disputer: string;
                                    liveCampaigns: number;
                                    delayed: Awaited<ReturnType<typeof import("./status/status.service").StatusService["findManyDelay"]>>;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    v4: {
        liquidity: {
            index: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        address: string;
                        chainId: number;
                    };
                    headers: unknown;
                    response: {
                        200: import("./liquidity/liquidity.model").PositionT[];
                    };
                };
            };
        };
    };
} & {
    v4: {
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
                        200: (import("./claims/claims.model").ClaimModel & {
                            token?: import("./token/token.model").Token["model"];
                        })[];
                    };
                };
            };
        };
    };
} & {
    v4: {
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
                            transactions: import("./programPayload/programPayload.model").transaction[];
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
                            transactions: import("./programPayload/programPayload.model").transaction[];
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
                                transactions: import("./programPayload/programPayload.model").transaction[];
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
                                transactions: import("./programPayload/programPayload.model").transaction[];
                            } | {
                                safePayload: import("./programPayload/programPayload.model").safePayload;
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
    };
} & {
    v4: {
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
    };
} & {
    v4: {
        value: {
            campaign: {
                ":campaignId": {
                    ":field": {
                        get: {
                            body: unknown;
                            params: {
                                campaignId: string;
                                field: string;
                            };
                            query: unknown;
                            headers: unknown;
                            response: {
                                200: {
                                    averageBoost: number | null;
                                    totalDistributedInUSD: number | null;
                                    forfeitingBoost: number | null;
                                } | null;
                            };
                        };
                    };
                };
            };
        };
    } & {
        value: {
            user: {
                ":address": {
                    ":field": {
                        get: {
                            body: unknown;
                            params: {
                                address: string;
                                field: string;
                            };
                            query: unknown;
                            headers: unknown;
                            response: {
                                200: {
                                    reason: string;
                                    id: string;
                                    campaignId: string;
                                    boost: number | null;
                                }[];
                            };
                        };
                    };
                };
            };
        };
    } & {
        value: {
            engine: {
                campaign: {
                    post: {
                        body: {
                            value: number;
                            campaignId: string;
                            field: string;
                        };
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
        };
    } & {
        value: {
            engine: {
                user: {
                    post: {
                        body: {
                            reason: string;
                            value: number;
                            campaignId: string;
                            address: string;
                            field: string;
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
        };
    };
} & {
    v4: {
        creators: {
            index: {
                post: {
                    body: {
                        icon?: string | undefined;
                        name: string;
                        id: string;
                        addresses: string[];
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            name: string;
                            id: string;
                            icon: string | null;
                            rebateFee: number;
                        };
                    };
                };
            };
        };
    } & {
        creators: {
            index: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        id?: string | undefined;
                        items?: number | undefined;
                        page?: number | undefined;
                        address?: string | undefined;
                    };
                    headers: unknown;
                    response: {
                        200: ({
                            Users: {
                                address: string;
                            }[];
                        } & {
                            name: string;
                            id: string;
                            icon: string | null;
                            rebateFee: number;
                        })[];
                    };
                };
            };
        };
    } & {
        creators: {
            ":address": {
                get: {
                    body: unknown;
                    params: {
                        address: string;
                    };
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            Users: {
                                tags: string[];
                                address: string;
                                creatorId: string | null;
                            }[];
                            name: string;
                            id: string;
                            icon: string | null;
                            rebateFee: number;
                        };
                    };
                };
            };
        };
    } & {
        creators: {
            ":address": {
                patch: {
                    body: {
                        icon?: string | undefined;
                        name: string;
                        addresses: string[];
                    };
                    params: {
                        address: string;
                    };
                    query: unknown;
                    headers: {
                        authorization: string;
                    };
                    response: {
                        200: {
                            name: string;
                            id: string;
                            icon: string | null;
                            rebateFee: number;
                        };
                    };
                };
            };
        };
    } & {
        creators: {
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
                        200: {
                            name: string;
                            id: string;
                            icon: string | null;
                            rebateFee: number;
                        };
                    };
                };
            };
        };
    } & {
        creators: {
            ":address": {
                dashboard: {
                    get: {
                        body: unknown;
                        params: {
                            address: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                pastCampaigns: number;
                                liveCampaigns: number;
                                futureCampaigns: number;
                                incentivizedTvl: number;
                                totalCampaigns: number;
                                creatorId: string | null;
                            };
                        };
                    };
                };
            };
        };
    } & {
        creators: {
            ":address": {
                campaigns: {
                    get: {
                        body: unknown;
                        params: {
                            address: string;
                        };
                        query: {
                            status?: "PAST" | "LIVE" | "FUTURE" | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: ({
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
                            } & {
                                type: string;
                                description: string | null;
                                id: string;
                                params: import("database/api/.generated/runtime/library").JsonValue;
                                subType: number | null;
                                computeChainId: number;
                                distributionChainId: number;
                                campaignId: string;
                                distributionType: import("@db/api").$Enums.DistributionType;
                                rewardTokenId: string;
                                amount: string;
                                opportunityId: string;
                                startTimestamp: bigint;
                                endTimestamp: bigint;
                                creatorAddress: string;
                                manualOverrides: import("@db/api").$Enums.CampaignManualOverride[];
                                createdAt: Date;
                                rootCampaignId: string | null;
                                parentCampaignId: string | null;
                            })[] | {
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
                            }[];
                        };
                    };
                };
            };
        };
    } & {
        creators: {
            campaigns: {
                ":id": {
                    get: {
                        body: unknown;
                        params: {
                            id: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                tvlRecords: {
                                    total: number;
                                    timestamp: bigint;
                                }[];
                                aprRecords: {
                                    timestamp: bigint;
                                    apr: number;
                                }[];
                                dailyRewardsRecords: {
                                    total: number;
                                    timestamp: bigint;
                                }[];
                                walletCount: {
                                    timestamp: bigint;
                                    walletCount: number;
                                }[];
                                tvlInflowPerDollar: bigint;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    v4: {
        referral: {
            code: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        address: string;
                        chainId: number;
                        referralKey: string;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            code: string;
                            referrer: boolean;
                            referredUsers: never[];
                            transaction: {
                                to: string;
                                data: `0x${string}`;
                            };
                        } | {
                            code: any;
                            referrer: boolean;
                            referredUsers: any;
                            transaction?: undefined;
                        };
                    };
                };
            };
        };
    } & {
        referral: {
            redeem: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        code: string;
                        chainId: number;
                        referralKey: string;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            code: string;
                            referrer: any;
                            transaction?: undefined;
                        } | {
                            code: string;
                            referrer: any;
                            transaction: {
                                to: string;
                                data: `0x${string}`;
                            };
                        };
                    };
                };
            };
        };
    };
} & {
    v4: {
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
                                    rewardToken: import("./token/token.model").Token["model"];
                                    opportunity: import("./opportunity/opportunity.model").Opportunity["model"];
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
                                    rewardToken: import("./token/token.model").Token["model"];
                                    opportunity: import("./opportunity/opportunity.model").Opportunity["model"];
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
    };
} & {
    v4: {
        turtle: {
            tac: {
                total: {
                    get: {
                        body: unknown;
                        params: {};
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                total: number;
                                breakdown: {
                                    [key: string]: number;
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        turtle: {
            tac: {
                ":address": {
                    get: {
                        body: unknown;
                        params: {
                            address: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                [x: string]: {
                                    vaultSymbol: string;
                                    balance: number;
                                    maxBalance: number;
                                    turtle: number;
                                };
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
