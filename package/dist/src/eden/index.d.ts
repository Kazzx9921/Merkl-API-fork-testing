import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { Campaign as CampaignType } from "@sdk";
declare const eden: {
    derive: {};
    resolve: {};
    schema: {};
    index: {
        get: (options?: {
            headers?: Record<string, unknown> | undefined;
            query?: Record<string, unknown> | undefined;
            fetch?: RequestInit | undefined;
        } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
            200: string;
        }>>;
    };
    v1: {
        allowances: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    additionalTokenAddresses?: string[] | undefined;
                    chainId: number;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    [x: string]: {
                        symbol: string;
                        balance: string;
                        decimals: number;
                    };
                };
            }>>;
        };
        balances: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    additionalTokenAddresses?: string[] | undefined;
                    chainId: number;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    [x: string]: {
                        symbol: string;
                        balance: string;
                        decimals: number;
                    };
                };
            }>>;
        };
        prices: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {};
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    rate: number;
                    token: string;
                }[];
            }>>;
        };
        tokens: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {};
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
    };
    v2: {
        merkl: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    user?: string | undefined;
                    chainIds?: number | number[] | undefined;
                    AMMs?: string | string[] | undefined;
                    onlyLive?: string | undefined;
                    "AMMs[]"?: string | string[] | undefined;
                    "AMMs[0]"?: string | undefined;
                    "chainIds[]"?: number | number[] | undefined;
                    "chainIds[0]"?: number | undefined;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
    };
    v4: {
        derive: {};
        resolve: {};
        schema: {};
        opportunities: ((params: {
            id: string | number;
        }) => {
            override: {
                patch: (body: {
                    name?: string | undefined;
                    description?: string | undefined;
                    action?: "POOL" | "HOLD" | "DROP" | "LEND" | "BORROW" | "LONG" | "SHORT" | "SWAP" | "INVALID" | undefined;
                    howToSteps?: string[] | undefined;
                    depositUrl?: string | undefined;
                    explorerAddress?: string | undefined;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
                delete: (body: ("name" | "description" | "action" | "howToSteps" | "depositUrl" | "explorerAddress")[], options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            post: (body: unknown, options: {
                headers: {
                    authorization: string;
                };
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    campaigns?: boolean | undefined;
                    point?: boolean | undefined;
                    test?: boolean | undefined;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
            campaigns: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        campaigns?: boolean | undefined;
                        point?: boolean | undefined;
                        test?: boolean | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
        }) & {
            index: {
                post: (body: {
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
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            count: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: number;
                }>>;
            };
            bins: {
                apr: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
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
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            min: number;
                            max: number;
                            overThreshold: number;
                            binWidth: number;
                            bins: any[];
                        };
                    }>>;
                };
                tvl: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
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
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            min: number;
                            max: number;
                            binWidth: number;
                            bins: any[];
                        };
                    }>>;
                };
            };
            campaigns: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            aggregate: ((params: {
                field: string | number;
            }) => {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        sum: string;
                    };
                }>>;
            }) & {
                max: ((params: {
                    field: string | number;
                }) => {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
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
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            max: string;
                        };
                    }>>;
                }) & {};
                min: ((params: {
                    field: string | number;
                }) => {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
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
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            min: string;
                        };
                    }>>;
                }) & {};
            };
        };
        campaigns: ((params: {
            id: string | number;
        }) => {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
            metrics: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
        }) & {
            engine: {
                index: {
                    post: (body: {
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
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                    }>>;
                };
            };
            opportunity: {
                patch: (body: {
                    opportunityIdentifier?: string | undefined;
                    campaignId: string;
                    distributionChain: number;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: string;
                }>>;
            };
            creator: {
                patch: (body: {
                    campaignId: string;
                    creatorAddress: string;
                    distributionChain: number;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: void;
                }>>;
            };
            "remove-override": {
                patch: (body: {
                    campaignId: string;
                    field: "opportunityId" | "creatorAddress";
                    distributionChain: number;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: void;
                }>>;
            };
            metadata: {
                patch: (body: {
                    url: string;
                    campaignId: string;
                    distributionChain: number;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            tvls: ((params: {
                opportunityId: string | number;
            }) => {
                put: (body: unknown, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: unknown[];
                }>>;
            }) & {};
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            "campaigns-to-process": {
                index: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            campaignId: string;
                            endTimestamp: bigint;
                            CampaignStatus: {
                                status: import("@db/api").$Enums.RunStatus;
                                computedUntil: bigint;
                                processingStarted: bigint;
                            }[];
                        }[];
                    }>>;
                };
                count: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: number;
                    }>>;
                };
                next: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            campaignId: string;
                        };
                    }>>;
                };
                engine: {
                    post: (body: unknown, options: {
                        headers: {
                            authorization: string;
                        };
                        query: {
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            campaignId: string;
                        };
                    }>>;
                };
            };
            count: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: number;
                }>>;
                "by-types": {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
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
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            [x: string]: number;
                        };
                    }>>;
                };
                "by-protocols": {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
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
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            [x: string]: number;
                        };
                    }>>;
                };
            };
            "dry-run": {
                tvl: ((params: {
                    campaignId: string | number;
                }) => {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: unknown[];
                    }>>;
                }) & {
                    post: (body: {
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
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: unknown[];
                    }>>;
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query: {
                            decimals?: number | undefined;
                            chainId: number;
                            tokenAddress: string;
                            rewardTokenAddress: string;
                            symbolRewardToken: string;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            tvl: number;
                            totalSupply: number;
                            cardName: string;
                            blacklistedSupply: number;
                            priceTargetToken: number;
                            type: string;
                        };
                    }>>;
                };
                tvls: ((params: {
                    opportunityId: string | number;
                }) => {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: unknown[];
                    }>>;
                }) & {
                    list: {
                        post: (body: string[], options: {
                            headers: {
                                authorization: string;
                            };
                            query?: Record<string, unknown> | undefined;
                            fetch?: RequestInit | undefined;
                        }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                            200: unknown[];
                        }>>;
                    };
                };
                metadata: {
                    post: (body: {
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
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                    }>>;
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query: {
                            distributionChain?: number | undefined;
                            campaignId: string;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                    }>>;
                };
            };
        };
        campaignscount: {
            "by-chains": {
                get: (options: {
                    headers: {
                        authorization: string;
                    };
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        [x: string]: number;
                    };
                }>>;
            };
        };
        protocols: ((params: {
            id: string | number;
        }) => {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
            patch: (body: {
                url?: string | undefined;
                name?: string | undefined;
                description?: string | undefined;
                icon?: string | undefined;
            }, options: {
                headers: {
                    authorization: string;
                };
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    url: string;
                    name: string;
                    description: string;
                    id: string;
                    tags: string[];
                    icon: string;
                };
            }>>;
        }) & {
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
                post: (body: {
                    url: string;
                    name: string;
                    description: string;
                    id: string;
                    tags: string[];
                    icon: string;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        url: string;
                        name: string;
                        description: string;
                        id: string;
                        tags: string[];
                        icon: string;
                    };
                }>>;
            };
            count: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: number;
                }>>;
            };
            webhooks: {
                notion: {
                    post: (body: {
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
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            url: string;
                            name: string;
                            description: string;
                            id: string;
                            tags: string[];
                            icon: string;
                        };
                    }>>;
                };
            };
        };
        explorers: {
            post: (body: {
                url: string;
                type: "ETHERSCAN" | "BLOCKSCOUT";
                chainId: number;
            }, options: {
                headers: {
                    authorization: string;
                };
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    url: string;
                    type: import("@db/api").$Enums.ExplorerType;
                    id: string;
                    chainId: number;
                };
            }>>;
        };
        tokens: ((params: {
            id: string | number;
        }) => {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
            allowance: ((params: {
                owner: string | number;
            }) => {} & ((params: {
                spender: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            })) & {};
            patch: (body: {
                name?: string | undefined;
                icon?: string | undefined;
                displaySymbol?: string | undefined;
                verified?: boolean | undefined;
                isTest?: boolean | undefined;
                isPoint?: boolean | undefined;
                isPreTGE?: boolean | undefined;
            }, options: {
                headers: {
                    authorization: string;
                };
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
        }) & {
            reward: ((params: {
                chainId: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            }) & {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        chainId?: string | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            balances: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        verified?: boolean | undefined;
                        tokenAddress?: string | undefined;
                        additionalTokenAddresses?: string[] | undefined;
                        chainId: number;
                        userAddress: string;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
                post: (body: {
                    isTest?: boolean | undefined;
                    icon: string;
                    address: string;
                    chainId: number;
                    verified: boolean;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            count: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: number;
                }>>;
            };
            webhooks: {
                notion: {
                    post: (body: {
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
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                    }>>;
                };
            };
        };
        rewards: {
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        items?: number | undefined;
                        page?: number | undefined;
                        campaignId: string;
                        chainId: number;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: import("../modules/v4/reward/reward.model").BreakdownForCampaignsRaw[];
                }>>;
            };
            total: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        items?: number | undefined;
                        page?: number | undefined;
                        campaignId: string;
                        chainId: number;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        campaignId: string;
                        amount: bigint;
                    };
                }>>;
                distributed: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            since: Date;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: number;
                    }>>;
                    "by-chains": {
                        get: (options: {
                            headers?: Record<string, unknown> | undefined;
                            query: {
                                since: Date;
                            };
                            fetch?: RequestInit | undefined;
                        }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                            [x: string]: any;
                            200: any;
                        }>>;
                    };
                    "by-types": {
                        get: (options: {
                            headers?: Record<string, unknown> | undefined;
                            query: {
                                since: Date;
                            };
                            fetch?: RequestInit | undefined;
                        }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                            [x: string]: any;
                            200: any;
                        }>>;
                    };
                    "by-protocols": {
                        get: (options: {
                            headers?: Record<string, unknown> | undefined;
                            query: {
                                since: Date;
                            };
                            fetch?: RequestInit | undefined;
                        }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                            [x: string]: any;
                            200: any;
                        }>>;
                    };
                };
            };
            count: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        items?: number | undefined;
                        page?: number | undefined;
                        campaignId: string;
                        chainId: number;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        count: number;
                    };
                }>>;
                chain: {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query: {
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            [x: number]: {
                                rewardCount: number;
                                breakdownCount: number;
                            };
                        };
                    }>>;
                };
            };
            campaign: ((params: {
                campaignId: string | number;
            }) => {
                index: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            items?: number | undefined;
                            page?: number | undefined;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            amount: string;
                            claimed: string;
                            pending: string;
                            recipient: string;
                        }[];
                    }>>;
                };
                total: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            items?: number | undefined;
                            page?: number | undefined;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            tokenId: string;
                            amount: bigint;
                        };
                    }>>;
                };
                count: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            items?: number | undefined;
                            page?: number | undefined;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            count: number;
                        };
                    }>>;
                };
            }) & {};
            token: {
                index: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            items?: number | undefined;
                            page?: number | undefined;
                            campaignIds?: string[] | undefined;
                            address: string;
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            amount: string;
                            claimed: string;
                            pending: string;
                            recipient: string;
                        }[];
                    }>>;
                };
                total: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            items?: number | undefined;
                            page?: number | undefined;
                            campaignIds?: string[] | undefined;
                            address: string;
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            tokenId: string;
                            amount: bigint;
                        };
                    }>>;
                };
                count: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            items?: number | undefined;
                            page?: number | undefined;
                            campaignIds?: string[] | undefined;
                            address: string;
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            count: number;
                        };
                    }>>;
                };
            };
            engine: {
                index: {
                    post: (body: {
                        pending: string;
                        distributionChainId: number;
                        amount: string;
                        root: string;
                        recipient: string;
                        claimed: string;
                        proofs: string[];
                        rewardToken: string;
                    }[], options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            count: number;
                        };
                    }>>;
                };
                breakdowns: {
                    post: (body: {
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
                    }[], options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            count: number;
                        } | undefined;
                    }>>;
                };
                claims: {
                    post: (body: {
                        token: string;
                        chainId: number;
                        root: string;
                        recipient: string;
                    }[], options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: void;
                    }>>;
                };
            };
            unclaim: {
                index: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            chainId: number;
                            campaignIds: string[];
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            [x: string]: string;
                        };
                    }>>;
                };
            };
        };
        chains: ((params: {
            chainId: string | number;
        }) => {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
            patch: (body: {
                icon?: string | undefined;
                dailyRewards?: number | undefined;
                liveCampaigns?: number | undefined;
            }, options: {
                headers: {
                    authorization: string;
                };
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    name: string;
                    id: number;
                    icon: string;
                };
            }>>;
        }) & {
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        name?: string | undefined;
                        test?: boolean | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
                post: (body: {
                    name: string;
                    id: number;
                    icon: string;
                    explorerType: "ETHERSCAN" | "BLOCKSCOUT";
                    explorerUrl: string;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            count: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        name?: string | undefined;
                        test?: boolean | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: number;
                }>>;
            };
        };
        prices: {
            index: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        [x: string]: number;
                    };
                }>>;
            };
            array: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        rate: number;
                        token: string;
                    }[];
                }>>;
            };
            symbol: ((params: {
                symbol: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: number;
                }>>;
            }) & {};
            sources: {
                index: {
                    get: (options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            symbol: string;
                            method: import("@db/api").$Enums.PriceSourceMethod;
                            args: import("database/api/.generated/runtime/library").JsonValue | null;
                            id: number;
                        }[];
                    }>>;
                    post: (body: {
                        symbol: string;
                        method: "COINGECKO" | "CONSTANT" | "EQUAL_TO" | "ERC4626" | "DEXSCREENER" | "INDEXCOOP" | "DEFILLAMA";
                        args: {};
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: number;
                    }>>;
                };
                symbol: ((params: {
                    symbol: string | number;
                }) => {
                    get: (options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            symbol: string;
                            method: import("@db/api").$Enums.PriceSourceMethod;
                            args: import("database/api/.generated/runtime/library").JsonValue | null;
                            id: number;
                        };
                    }>>;
                    patch: (body: {
                        symbol?: string | undefined;
                        method?: "COINGECKO" | "CONSTANT" | "EQUAL_TO" | "ERC4626" | "DEXSCREENER" | "INDEXCOOP" | "DEFILLAMA" | undefined;
                        args?: {} | undefined;
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            symbol: string;
                            method: import("@db/api").$Enums.PriceSourceMethod;
                            args: import("database/api/.generated/runtime/library").JsonValue | null;
                            id: number;
                        };
                    }>>;
                    delete: (body: unknown, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            symbol: string;
                            method: import("@db/api").$Enums.PriceSourceMethod;
                            args: import("database/api/.generated/runtime/library").JsonValue | null;
                            id: number;
                        };
                    }>>;
                }) & {};
            };
        };
        blacklists: {
            index: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        id: string;
                        chainId: number;
                        poolAddress: string;
                        userAddress: string;
                        arrestTimestamp: bigint;
                        arrestDetails: import("database/api/.generated/runtime/library").JsonValue;
                    }[];
                }>>;
                post: (body: {
                    reason?: string | undefined;
                    chainId: number;
                    poolAddress: string;
                    userAddress: string;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        id: string;
                        chainId: number;
                        poolAddress: string;
                        userAddress: string;
                        arrestTimestamp: bigint;
                        arrestDetails: import("database/api/.generated/runtime/library").JsonValue;
                    };
                }>>;
            };
            mapping: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: unknown;
                }>>;
            };
            check: ((params: {
                address: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: boolean;
                }>>;
            }) & {};
            user: ((params: {
                address: string | number;
            }) => {
                delete: (body: unknown, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: boolean;
                }>>;
            }) & {};
        };
        users: ((params: {
            address: string | number;
        }) => {
            rewards: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        test?: boolean | undefined;
                        reloadChainId?: number | undefined;
                        claimableOnly?: boolean | undefined;
                        chainId: number[];
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: (Omit<{
                        chain: import("@db/api").Chain;
                        rewards: Awaited<ReturnType<typeof import("../modules/v4/reward/reward.service").RewardService["format"]>>;
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
                }>>;
                breakdowns: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            test?: boolean | undefined;
                            chainIds?: number[] | undefined;
                            reloadChainId?: number | undefined;
                            claimableOnly?: boolean | undefined;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: (Omit<{
                            chain: import("@db/api").Chain;
                            rewards: Awaited<ReturnType<typeof import("../modules/v4/reward/reward.service").RewardService["format"]>>;
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
                                    opportunity: import("../modules/v4/opportunity/opportunity.model").Opportunity["model"];
                                    claimed: bigint;
                                    amount: bigint;
                                    pending: bigint;
                                }[];
                            })[];
                            distributor: string;
                        })[];
                    }>>;
                };
            };
            terms: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        chainId: number;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: boolean;
                }>>;
            };
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    tags: string[];
                    address: string;
                    creatorId: string | null;
                };
            }>>;
            tags: {
                patch: (body: {
                    tags: string[];
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        tags: string[];
                        address: string;
                        creatorId: string | null;
                    };
                }>>;
            };
        }) & {
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        items?: number | undefined;
                        tags?: string[] | undefined;
                        page?: number | undefined;
                        address?: string | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        tags: string[];
                        address: string;
                        creatorId: string | null;
                    }[];
                }>>;
                post: (body: {
                    tags: string[];
                    address: string;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        tags: string[];
                        address: string;
                        creatorId: string | null;
                    };
                }>>;
            };
            tags: {
                get: (options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        tags: string[];
                        address: string;
                        creatorId: string | null;
                    }[];
                }>>;
            };
            sync: {
                post: (body: unknown, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: void;
                }>>;
            };
        };
        roots: {
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        chainId: number;
                        fromTimestamp: string;
                        toTimestamp: string;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        chainId: number;
                        timestamp: bigint;
                        root: string;
                        epoch: number;
                    }[];
                }>>;
            };
            live: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        [x: number]: {
                            live: string;
                            tree: string;
                            lastTree: string;
                            endOfDisputePeriod: number;
                            disputer: string;
                        };
                    };
                }>>;
            };
            engine: {
                post: (body: {
                    chainId: number;
                    timestamp: number;
                    root: string;
                    epoch: number;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        chainId: number;
                        timestamp: bigint;
                        root: string;
                        epoch: number;
                    };
                }>>;
            };
        };
        interaction: {
            targets: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        protocolId?: string | undefined;
                        identifier: string;
                        chainId: number;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: import("../modules/v4/interaction/interaction.model").InteractionTarget[];
                }>>;
            };
            protocols: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        chainId?: number | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            transaction: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        slippage?: number | undefined;
                        identifier: string;
                        chainId: number;
                        protocolId: string;
                        userAddress: string;
                        fromAmount: string;
                        fromTokenAddress: string;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        amountIn: bigint;
                        allowance: bigint;
                        approved: boolean;
                        transaction: import("../modules/v4/interaction/interaction.model").UserTransaction;
                        approval: import("../modules/v4/interaction/interaction.model").UserTransaction;
                        actions?: import("../modules/v4/interaction/interaction.model").InteractionAction[] | undefined;
                        depositValue?: number | undefined;
                    } | undefined;
                }>>;
            };
        };
        accounting: {
            index: {
                get: (options: {
                    headers: {
                        authorization: string;
                    };
                    query: {
                        items?: number | undefined;
                        page?: number | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            revenues: {
                get: (options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        total: number;
                        breakdown: {
                            [key: number]: {
                                chainAmount: number;
                                percentage: number;
                            };
                        };
                    };
                }>>;
                "per-month": ((params: {
                    year: string | number;
                }) => {} & ((params: {
                    month: string | number;
                }) => {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                    }>>;
                })) & {};
                chains: ((params: {
                    chainId: string | number;
                }) => {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            totalAmount: number;
                        };
                    }>>;
                    "per-month": ((params: {
                        year: string | number;
                    }) => {} & ((params: {
                        month: string | number;
                    }) => {
                        get: (options: {
                            headers: {
                                authorization: string;
                            };
                            query?: Record<string, unknown> | undefined;
                            fetch?: RequestInit | undefined;
                        }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                            200: {
                                totalAmount: number;
                                from: string;
                                to: string;
                            };
                        }>>;
                    })) & {};
                }) & {};
            };
            tokens: ((params: {
                chainId: string | number;
            }) => {} & ((params: {
                tokenAddress: string | number;
            }) => {
                get: (options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        totalAmount: number;
                        totalAmountUSD: number;
                    };
                }>>;
                "per-month": ((params: {
                    year: string | number;
                }) => {} & ((params: {
                    month: string | number;
                }) => {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            totalAmount: number;
                            totalAmountUSD: number;
                            from: string;
                            to: string;
                        };
                    }>>;
                })) & {};
            })) & {};
        };
        "campaign-status": ((params: {
            campaignId: string | number;
        }) => {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
        }) & {
            engine: ((params: {
                campaignId: string | number;
            }) => {
                put: (body: {
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
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: void;
                }>>;
            }) & {
                computedUntil: ((params: {
                    campaignId: string | number;
                }) => {
                    put: (body: {
                        computedUntil: number;
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: void;
                    }>>;
                }) & {};
                overlaps: {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query: {
                            campaignId: string;
                            distributionChain: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: boolean;
                    }>>;
                };
            };
            error: ((params: {
                campaignId: string | number;
            }) => {
                put: (body: {
                    error: string;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: void;
                }>>;
            }) & {};
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        status?: "PROCESSING" | "SUCCESS" | "FAILED" | "SKIPPED" | ("PROCESSING" | "SUCCESS" | "FAILED" | "SKIPPED")[] | undefined;
                        computeChainId?: number | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        status: import("@db/api").$Enums.RunStatus;
                        error: string;
                        details: import("database/api/.generated/runtime/library").JsonValue;
                        campaignId: string;
                        computedUntil: bigint;
                        processingStarted: bigint;
                    }[];
                }>>;
            };
            delay: {
                index: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            chainId?: number | undefined;
                            endTimestampLowerBound?: number | undefined;
                            delayLowerBound?: number | undefined;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                    }>>;
                };
                status: {
                    get: (options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                                delayed: Awaited<ReturnType<typeof import("../modules/v4/status/status.service").StatusService["findManyDelay"]>>;
                            };
                        };
                    }>>;
                };
            };
        };
        liquidity: {
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        address: string;
                        chainId: number;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: import("../modules/v4/liquidity/liquidity.model").PositionT[];
                }>>;
            };
        };
        claims: ((params: {
            address: string | number;
        }) => {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainIds?: number[] | undefined;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: (import("../modules/v4/claims/claims.model").ClaimModel & {
                    token?: import("../modules/v4/token/token.model").Token["model"];
                })[];
            }>>;
        }) & {};
        "program-payload": {
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        version: string;
                        chainId: string;
                        createdAt: number;
                        meta: {
                            name: string;
                            txBuilderVersion: string;
                        };
                        transactions: import("../modules/v4/programPayload/programPayload.model").transaction[];
                    };
                }>>;
            };
            config: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    [x: string]: any;
                    200: any;
                }>>;
            };
            "template-config": ((params: {
                campaignType: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        [x: string]: string;
                    };
                }>>;
            }) & {};
            campaignData: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        args: any;
                    };
                }>>;
            };
            program: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        version: string;
                        chainId: string;
                        createdAt: number;
                        meta: {
                            name: string;
                            txBuilderVersion: string;
                        };
                        transactions: import("../modules/v4/programPayload/programPayload.model").transaction[];
                    } | null;
                }>>;
                withAmounts: {
                    post: (body: {
                        [x: string]: string;
                    }, options: {
                        headers?: Record<string, unknown> | undefined;
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
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            version: string;
                            chainId: string;
                            createdAt: number;
                            meta: {
                                name: string;
                                txBuilderVersion: string;
                            };
                            transactions: import("../modules/v4/programPayload/programPayload.model").transaction[];
                        } | null;
                    }>>;
                };
            };
            payload: {
                "from-config": {
                    post: (body: {
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
                    }, options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            debug?: boolean | undefined;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            version: string;
                            chainId: string;
                            createdAt: number;
                            meta: {
                                name: string;
                                txBuilderVersion: string;
                            };
                            transactions: import("../modules/v4/programPayload/programPayload.model").transaction[];
                        } | {
                            safePayload: import("../modules/v4/programPayload/programPayload.model").safePayload;
                            nonEncodedConfig: any;
                        };
                    }>>;
                };
            };
            parse: {
                "from-campaign-data": {
                    post: (body: {
                        computeChainId: number;
                        amount: string;
                        startTimestamp: number;
                        chainId: number;
                        rewardToken: string;
                        campaignType: number;
                        duration: number;
                        campaignData: string;
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        [x: string]: any;
                        200: any;
                    }>>;
                };
            };
        };
        boosts: {
            euler: {
                post: (body: {
                    address: string;
                    score: string;
                }[] | {
                    addresses: string[];
                }, options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        address: string;
                        boost: string;
                    }[];
                }>>;
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        address: string;
                        boost: string;
                    }[];
                }>>;
            };
            openblock: {
                zksync: {
                    post: (body: {
                        address: string;
                        score: string;
                    }[] | {
                        addresses: string[];
                    }, options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            protocol: string;
                            target: string;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            address: string;
                            boost: string;
                        }[];
                    }>>;
                };
            };
        };
        value: {
            campaign: ((params: {
                campaignId: string | number;
            }) => {} & ((params: {
                field: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        averageBoost: number | null;
                        totalDistributedInUSD: number | null;
                        forfeitingBoost: number | null;
                    } | null;
                }>>;
            })) & {};
            user: ((params: {
                address: string | number;
            }) => {} & ((params: {
                field: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        reason: string;
                        id: string;
                        campaignId: string;
                        boost: number | null;
                    }[];
                }>>;
            })) & {};
            engine: {
                campaign: {
                    post: (body: {
                        value: number;
                        campaignId: string;
                        field: string;
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: void;
                    }>>;
                };
                user: {
                    post: (body: {
                        reason: string;
                        value: number;
                        campaignId: string;
                        address: string;
                        field: string;
                    }[], options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: void;
                    }>>;
                };
            };
        };
        creators: ((params: {
            address: string | number;
        }) => {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
            patch: (body: {
                icon?: string | undefined;
                name: string;
                addresses: string[];
            }, options: {
                headers: {
                    authorization: string;
                };
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    name: string;
                    id: string;
                    icon: string | null;
                    rebateFee: number;
                };
            }>>;
            delete: (body: unknown, options: {
                headers: {
                    authorization: string;
                };
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    name: string;
                    id: string;
                    icon: string | null;
                    rebateFee: number;
                };
            }>>;
            dashboard: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        pastCampaigns: number;
                        liveCampaigns: number;
                        futureCampaigns: number;
                        incentivizedTvl: number;
                        totalCampaigns: number;
                        creatorId: string | null;
                    };
                }>>;
            };
            campaigns: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        status?: "PAST" | "LIVE" | "FUTURE" | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
        }) & {
            index: {
                post: (body: {
                    icon?: string | undefined;
                    name: string;
                    id: string;
                    addresses: string[];
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        name: string;
                        id: string;
                        icon: string | null;
                        rebateFee: number;
                    };
                }>>;
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        id?: string | undefined;
                        items?: number | undefined;
                        page?: number | undefined;
                        address?: string | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            campaigns: ((params: {
                id: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            }) & {};
        };
        referral: {
            code: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        address: string;
                        chainId: number;
                        referralKey: string;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            redeem: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        code: string;
                        chainId: number;
                        referralKey: string;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
        };
        uniswap: {
            reward: {
                3: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            chainId?: number | undefined;
                            pool?: string | undefined;
                            positionId?: string | undefined;
                            address: string;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            [x: number]: Record<string, Record<string, {
                                campaignId: string;
                                amount: string;
                                claimed: string;
                                pending: string;
                                reason: string;
                                rewardToken: import("../modules/v4/token/token.model").Token["model"];
                                opportunity: import("../modules/v4/opportunity/opportunity.model").Opportunity["model"];
                            }[]>>;
                        };
                    }>>;
                };
                4: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            chainId?: number | undefined;
                            pool?: string | undefined;
                            positionId?: string | undefined;
                            address: string;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            [x: number]: Record<string, Record<string, {
                                campaignId: string;
                                amount: string;
                                claimed: string;
                                pending: string;
                                reason: string;
                                rewardToken: import("../modules/v4/token/token.model").Token["model"];
                                opportunity: import("../modules/v4/opportunity/opportunity.model").Opportunity["model"];
                            }[]>>;
                        };
                    }>>;
                };
            };
            v4: ((params: {
                poolId: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: UniswapV4PoolType[];
                }>>;
            }) & {
                pools: {
                    get: (options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            [x: string]: {
                                [poolId: string]: UniswapV4PoolType;
                            } | undefined;
                        };
                    }>>;
                };
                update: ((params: {
                    chainId: string | number;
                }) => {
                    post: (body: unknown, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: void;
                    }>>;
                }) & {
                    post: (body: unknown, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: void;
                    }>>;
                };
            };
            v4pools: ((params: {
                chainId: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        [x: string]: any;
                    };
                }>>;
            }) & {};
        };
        turtle: {
            tac: ((params: {
                address: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        [x: string]: {
                            vaultSymbol: string;
                            balance: number;
                            maxBalance: number;
                            turtle: number;
                        };
                    };
                }>>;
            }) & {
                total: {
                    get: (options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            total: number;
                            breakdown: {
                                [key: string]: number;
                            };
                        };
                    }>>;
                };
            };
        };
    };
    v3: {
        app: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {};
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    tokens: any;
                    prices: {
                        rate: number;
                        token: string;
                    }[];
                };
            }>>;
        };
        blacklist: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    isBlacklisted: boolean;
                };
            }>>;
        };
        campaignClaims: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    byReason?: boolean | undefined;
                    campaignId: string;
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: unknown;
            }>>;
        };
        campaigns: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    types?: string | number | number[] | string[] | undefined;
                    chainIds?: string | string[] | undefined;
                    creatorTag?: string | undefined;
                    live?: boolean | undefined;
                    hideTestTokens?: string | undefined;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        campaignsForMainParameter: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    mainParameter: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    campaignId: string;
                    campaignType: number;
                    rewardToken: string;
                    rewardTokenSymbol: string;
                    amountDecimal: number;
                    startTimestamp: number;
                    endTimestamp: number;
                }[];
            }>>;
        };
        campaignsRewardsReport: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    from?: number | undefined;
                    to?: number | undefined;
                    chain_campaignIds: string[];
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: any[];
            }>>;
        };
        campaignUnclaimed: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    campaignIds: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    [x: string]: string;
                };
            }>>;
        };
        claims: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainIds?: string | string[] | undefined;
                    creatorTag?: string | undefined;
                    byReason?: boolean | undefined;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    message: string;
                };
            }>>;
        };
        compoundV2: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {};
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        createCampaign: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    feeRebate: number | undefined;
                    message: any;
                    signed: boolean | undefined;
                    validRewardTokens: any;
                };
            }>>;
        };
        dolomite: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        euler: ((params: {
            chainId: string | number;
        }) => {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    vaultAddress?: string | undefined;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: EulerVaultType[] | undefined;
            }>>;
        }) & {
            index: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: EulerVaultType[] | null;
                }>>;
            };
            update: ((params: {
                chainId: string | number;
            }) => {
                post: (body: unknown, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: void;
                }>>;
            }) & {
                post: (body: unknown, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: void;
                }>>;
            };
        };
        fetch: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    index: number;
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: string | {
                    message: string;
                    name: string;
                };
            }>>;
        };
        health: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {};
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    success: boolean;
                };
            }>>;
        };
        lostyield: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        merkl: {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        morphoMarkets: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    repository: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        morphoVaults: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    repository: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        multiChainPositions: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainIds?: string | string[] | undefined;
                    creatorTag?: string | undefined;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        opportunity: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    type?: number | undefined;
                    tag?: string | undefined;
                    action?: string | undefined;
                    chainId?: number | undefined;
                    campaigns?: boolean | undefined;
                    mainParameter?: string | undefined;
                    testTokens?: boolean | undefined;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {};
            }>>;
        };
        overview: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId?: number | undefined;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
        };
        parse: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    index?: number | undefined;
                    campaign: any;
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: string | {
                    message: string;
                    name: string;
                };
            }>>;
        };
        payload: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    signature?: any;
                    config: string;
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
        };
        poolInfo: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    poolAddress: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        positions: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId?: number | undefined;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        radiant: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    poolAddressProvider: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        recipients: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    campaignId: string;
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    recipient: string;
                    reason: string;
                    rewardToken: string;
                    amount: string;
                }[];
            }>>;
        };
        rewards: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainIds?: string | string[] | undefined;
                    creatorTag?: string | undefined;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
        };
        rewardsReport: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    from?: number | undefined;
                    mainParameter?: string | undefined;
                    to?: number | undefined;
                    campaignId: string;
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    recipient: string;
                    reason: string;
                    rewardToken: string;
                    amount: string;
                }[];
            }>>;
        };
        silo: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    repository: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        token: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    address: string;
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    name: string;
                    symbol: string;
                    decimals: number;
                };
            }>>;
        };
        updates: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {};
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    [x: number]: {
                        [campaignId: string]: number;
                    };
                };
                readonly 400: {
                    message?: string | undefined;
                    error: string;
                };
            }>>;
        };
        userRewards: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    rewardToken?: string | undefined;
                    proof?: string | undefined;
                    mainParameter?: string | undefined;
                    reloadChainId?: number | undefined;
                    chainId: number;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
        };
        uniswapv4: ((params: {
            chainId: string | number;
        }) => {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    [x: string]: any;
                } | undefined;
            }>>;
        }) & {
            index: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        [x: string]: {
                            [poolId: string]: UniswapV4PoolType;
                        } | undefined;
                    } | null;
                }>>;
            };
            pool: ((params: {
                poolId: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: UniswapV4PoolType[];
                }>>;
            }) & {};
        };
    };
};
type Api = typeof eden;
type ApiModuleVersion = Exclude<keyof Api, "index" | "valueOf">;
type ApiModuleRoute<V extends ApiModuleVersion> = keyof Api[V];
export type OneOfRoute<R extends ApiModuleRoute<"v4">> = NonNullable<RouteType<"v4", R>["data"]>[number];
export type FromPromise<R extends (...args: any) => Promise<{
    data: any;
}>> = NonNullable<NonNullable<Awaited<ReturnType<R>>["data"]>[number]>;
type RouteType<V extends ApiModuleVersion, R extends ApiModuleRoute<V>> = Awaited<ReturnType<"get" extends keyof Api[V][R] ? (Api[V][R]["get"] extends (...args: any) => any ? Api[V][R]["get"] : never) : never>>;
export declare const MerklApi: (domain: string | import("elysia").default<"", false, {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    type: {};
    error: {
        readonly HttpError: import("../errors").HttpError;
        readonly BadRequestError: import("../errors").BadRequestError;
        readonly ConflictError: import("../errors").ConflictError;
        readonly NotFoundError: import("../errors").NotFoundError;
        readonly UnauthorizedError: import("../errors").UnauthorizedError;
        readonly InvalidParameter: import("../utils/error").InvalidParameter;
        readonly UnsupportedNetwork: import("../utils/error").UnsupportedNetwork;
        readonly OpportunityNotFound: import("../utils/error").OpportunityNotFound;
        readonly MerkleRootNotFound: import("../utils/error").MerkleRootNotFound;
        readonly ValidationError: import("elysia").ValidationError;
        readonly InvalidCacheCall: import("../utils/error").InvalidCacheCall;
    };
}, {
    schema: {};
    macro: {};
    macroFn: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
} & {
    derive: {};
    resolve: {};
    schema: {};
} & {
    index: {
        get: {
            body: unknown;
            params: {};
            query: unknown;
            headers: unknown;
            response: {
                200: string;
            };
        };
    };
} & {
    v1: {
        allowances: {
            get: {
                body: unknown;
                params: {};
                query: {
                    additionalTokenAddresses?: string[] | undefined;
                    chainId: number;
                    user: string;
                };
                headers: unknown;
                response: {
                    200: {
                        [x: string]: {
                            symbol: string;
                            balance: string;
                            decimals: number;
                        };
                    };
                };
            };
        };
    };
} & {
    v1: {
        balances: {
            get: {
                body: unknown;
                params: {};
                query: {
                    additionalTokenAddresses?: string[] | undefined;
                    chainId: number;
                    user: string;
                };
                headers: unknown;
                response: {
                    200: {
                        [x: string]: {
                            symbol: string;
                            balance: string;
                            decimals: number;
                        };
                    };
                };
            };
        };
    };
} & {
    v1: {
        prices: {
            get: {
                body: unknown;
                params: {};
                query: {};
                headers: unknown;
                response: {
                    200: {
                        rate: number;
                        token: string;
                    }[];
                };
            };
        };
    };
} & {
    v1: {
        tokens: {
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
    v2: {
        merkl: {
            get: {
                body: unknown;
                params: {};
                query: {
                    user?: string | undefined;
                    chainIds?: number | number[] | undefined;
                    AMMs?: string | string[] | undefined;
                    onlyLive?: string | undefined;
                    "AMMs[]"?: string | string[] | undefined;
                    "AMMs[0]"?: string | undefined;
                    "chainIds[]"?: number | number[] | undefined;
                    "chainIds[0]"?: number | undefined;
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
                        200: import("../modules/v4/reward/reward.model").BreakdownForCampaignsRaw[];
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
                                rewards: Awaited<ReturnType<typeof import("../modules/v4/reward/reward.service").RewardService["format"]>>;
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
                                    rewards: Awaited<ReturnType<typeof import("../modules/v4/reward/reward.service").RewardService["format"]>>;
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
                                            opportunity: import("../modules/v4/opportunity/opportunity.model").Opportunity["model"];
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
                        200: import("../modules/v4/interaction/interaction.model").InteractionTarget[];
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
                            transaction: import("../modules/v4/interaction/interaction.model").UserTransaction;
                            approval: import("../modules/v4/interaction/interaction.model").UserTransaction;
                            actions?: import("../modules/v4/interaction/interaction.model").InteractionAction[] | undefined;
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
                                    delayed: Awaited<ReturnType<typeof import("../modules/v4/status/status.service").StatusService["findManyDelay"]>>;
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
                        200: import("../modules/v4/liquidity/liquidity.model").PositionT[];
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
                        200: (import("../modules/v4/claims/claims.model").ClaimModel & {
                            token?: import("../modules/v4/token/token.model").Token["model"];
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
                            transactions: import("../modules/v4/programPayload/programPayload.model").transaction[];
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
                            transactions: import("../modules/v4/programPayload/programPayload.model").transaction[];
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
                                transactions: import("../modules/v4/programPayload/programPayload.model").transaction[];
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
                                transactions: import("../modules/v4/programPayload/programPayload.model").transaction[];
                            } | {
                                safePayload: import("../modules/v4/programPayload/programPayload.model").safePayload;
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
                                    rewardToken: import("../modules/v4/token/token.model").Token["model"];
                                    opportunity: import("../modules/v4/opportunity/opportunity.model").Opportunity["model"];
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
                                    rewardToken: import("../modules/v4/token/token.model").Token["model"];
                                    opportunity: import("../modules/v4/opportunity/opportunity.model").Opportunity["model"];
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
} & {
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
}>, config?: import("@elysiajs/eden").Treaty.Config) => {
    derive: {};
    resolve: {};
    schema: {};
    index: {
        get: (options?: {
            headers?: Record<string, unknown> | undefined;
            query?: Record<string, unknown> | undefined;
            fetch?: RequestInit | undefined;
        } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
            200: string;
        }>>;
    };
    v1: {
        allowances: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    additionalTokenAddresses?: string[] | undefined;
                    chainId: number;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    [x: string]: {
                        symbol: string;
                        balance: string;
                        decimals: number;
                    };
                };
            }>>;
        };
        balances: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    additionalTokenAddresses?: string[] | undefined;
                    chainId: number;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    [x: string]: {
                        symbol: string;
                        balance: string;
                        decimals: number;
                    };
                };
            }>>;
        };
        prices: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {};
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    rate: number;
                    token: string;
                }[];
            }>>;
        };
        tokens: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {};
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
    };
    v2: {
        merkl: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    user?: string | undefined;
                    chainIds?: number | number[] | undefined;
                    AMMs?: string | string[] | undefined;
                    onlyLive?: string | undefined;
                    "AMMs[]"?: string | string[] | undefined;
                    "AMMs[0]"?: string | undefined;
                    "chainIds[]"?: number | number[] | undefined;
                    "chainIds[0]"?: number | undefined;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
    };
    v4: {
        derive: {};
        resolve: {};
        schema: {};
        opportunities: ((params: {
            id: string | number;
        }) => {
            override: {
                patch: (body: {
                    name?: string | undefined;
                    description?: string | undefined;
                    action?: "POOL" | "HOLD" | "DROP" | "LEND" | "BORROW" | "LONG" | "SHORT" | "SWAP" | "INVALID" | undefined;
                    howToSteps?: string[] | undefined;
                    depositUrl?: string | undefined;
                    explorerAddress?: string | undefined;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
                delete: (body: ("name" | "description" | "action" | "howToSteps" | "depositUrl" | "explorerAddress")[], options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            post: (body: unknown, options: {
                headers: {
                    authorization: string;
                };
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    campaigns?: boolean | undefined;
                    point?: boolean | undefined;
                    test?: boolean | undefined;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
            campaigns: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        campaigns?: boolean | undefined;
                        point?: boolean | undefined;
                        test?: boolean | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
        }) & {
            index: {
                post: (body: {
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
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            count: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: number;
                }>>;
            };
            bins: {
                apr: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
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
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            min: number;
                            max: number;
                            overThreshold: number;
                            binWidth: number;
                            bins: any[];
                        };
                    }>>;
                };
                tvl: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
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
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            min: number;
                            max: number;
                            binWidth: number;
                            bins: any[];
                        };
                    }>>;
                };
            };
            campaigns: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            aggregate: ((params: {
                field: string | number;
            }) => {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        sum: string;
                    };
                }>>;
            }) & {
                max: ((params: {
                    field: string | number;
                }) => {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
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
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            max: string;
                        };
                    }>>;
                }) & {};
                min: ((params: {
                    field: string | number;
                }) => {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
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
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            min: string;
                        };
                    }>>;
                }) & {};
            };
        };
        campaigns: ((params: {
            id: string | number;
        }) => {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
            metrics: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
        }) & {
            engine: {
                index: {
                    post: (body: {
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
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                    }>>;
                };
            };
            opportunity: {
                patch: (body: {
                    opportunityIdentifier?: string | undefined;
                    campaignId: string;
                    distributionChain: number;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: string;
                }>>;
            };
            creator: {
                patch: (body: {
                    campaignId: string;
                    creatorAddress: string;
                    distributionChain: number;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: void;
                }>>;
            };
            "remove-override": {
                patch: (body: {
                    campaignId: string;
                    field: "opportunityId" | "creatorAddress";
                    distributionChain: number;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: void;
                }>>;
            };
            metadata: {
                patch: (body: {
                    url: string;
                    campaignId: string;
                    distributionChain: number;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            tvls: ((params: {
                opportunityId: string | number;
            }) => {
                put: (body: unknown, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: unknown[];
                }>>;
            }) & {};
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            "campaigns-to-process": {
                index: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            campaignId: string;
                            endTimestamp: bigint;
                            CampaignStatus: {
                                status: import("@db/api").$Enums.RunStatus;
                                computedUntil: bigint;
                                processingStarted: bigint;
                            }[];
                        }[];
                    }>>;
                };
                count: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: number;
                    }>>;
                };
                next: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            campaignId: string;
                        };
                    }>>;
                };
                engine: {
                    post: (body: unknown, options: {
                        headers: {
                            authorization: string;
                        };
                        query: {
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            campaignId: string;
                        };
                    }>>;
                };
            };
            count: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: number;
                }>>;
                "by-types": {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
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
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            [x: string]: number;
                        };
                    }>>;
                };
                "by-protocols": {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
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
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            [x: string]: number;
                        };
                    }>>;
                };
            };
            "dry-run": {
                tvl: ((params: {
                    campaignId: string | number;
                }) => {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: unknown[];
                    }>>;
                }) & {
                    post: (body: {
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
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: unknown[];
                    }>>;
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query: {
                            decimals?: number | undefined;
                            chainId: number;
                            tokenAddress: string;
                            rewardTokenAddress: string;
                            symbolRewardToken: string;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            tvl: number;
                            totalSupply: number;
                            cardName: string;
                            blacklistedSupply: number;
                            priceTargetToken: number;
                            type: string;
                        };
                    }>>;
                };
                tvls: ((params: {
                    opportunityId: string | number;
                }) => {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: unknown[];
                    }>>;
                }) & {
                    list: {
                        post: (body: string[], options: {
                            headers: {
                                authorization: string;
                            };
                            query?: Record<string, unknown> | undefined;
                            fetch?: RequestInit | undefined;
                        }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                            200: unknown[];
                        }>>;
                    };
                };
                metadata: {
                    post: (body: {
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
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                    }>>;
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query: {
                            distributionChain?: number | undefined;
                            campaignId: string;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                    }>>;
                };
            };
        };
        campaignscount: {
            "by-chains": {
                get: (options: {
                    headers: {
                        authorization: string;
                    };
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        [x: string]: number;
                    };
                }>>;
            };
        };
        protocols: ((params: {
            id: string | number;
        }) => {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
            patch: (body: {
                url?: string | undefined;
                name?: string | undefined;
                description?: string | undefined;
                icon?: string | undefined;
            }, options: {
                headers: {
                    authorization: string;
                };
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    url: string;
                    name: string;
                    description: string;
                    id: string;
                    tags: string[];
                    icon: string;
                };
            }>>;
        }) & {
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
                post: (body: {
                    url: string;
                    name: string;
                    description: string;
                    id: string;
                    tags: string[];
                    icon: string;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        url: string;
                        name: string;
                        description: string;
                        id: string;
                        tags: string[];
                        icon: string;
                    };
                }>>;
            };
            count: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: number;
                }>>;
            };
            webhooks: {
                notion: {
                    post: (body: {
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
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            url: string;
                            name: string;
                            description: string;
                            id: string;
                            tags: string[];
                            icon: string;
                        };
                    }>>;
                };
            };
        };
        explorers: {
            post: (body: {
                url: string;
                type: "ETHERSCAN" | "BLOCKSCOUT";
                chainId: number;
            }, options: {
                headers: {
                    authorization: string;
                };
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    url: string;
                    type: import("@db/api").$Enums.ExplorerType;
                    id: string;
                    chainId: number;
                };
            }>>;
        };
        tokens: ((params: {
            id: string | number;
        }) => {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
            allowance: ((params: {
                owner: string | number;
            }) => {} & ((params: {
                spender: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            })) & {};
            patch: (body: {
                name?: string | undefined;
                icon?: string | undefined;
                displaySymbol?: string | undefined;
                verified?: boolean | undefined;
                isTest?: boolean | undefined;
                isPoint?: boolean | undefined;
                isPreTGE?: boolean | undefined;
            }, options: {
                headers: {
                    authorization: string;
                };
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
        }) & {
            reward: ((params: {
                chainId: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            }) & {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        chainId?: string | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            balances: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        verified?: boolean | undefined;
                        tokenAddress?: string | undefined;
                        additionalTokenAddresses?: string[] | undefined;
                        chainId: number;
                        userAddress: string;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
                post: (body: {
                    isTest?: boolean | undefined;
                    icon: string;
                    address: string;
                    chainId: number;
                    verified: boolean;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            count: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: number;
                }>>;
            };
            webhooks: {
                notion: {
                    post: (body: {
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
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                    }>>;
                };
            };
        };
        rewards: {
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        items?: number | undefined;
                        page?: number | undefined;
                        campaignId: string;
                        chainId: number;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: import("../modules/v4/reward/reward.model").BreakdownForCampaignsRaw[];
                }>>;
            };
            total: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        items?: number | undefined;
                        page?: number | undefined;
                        campaignId: string;
                        chainId: number;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        campaignId: string;
                        amount: bigint;
                    };
                }>>;
                distributed: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            since: Date;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: number;
                    }>>;
                    "by-chains": {
                        get: (options: {
                            headers?: Record<string, unknown> | undefined;
                            query: {
                                since: Date;
                            };
                            fetch?: RequestInit | undefined;
                        }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                            [x: string]: any;
                            200: any;
                        }>>;
                    };
                    "by-types": {
                        get: (options: {
                            headers?: Record<string, unknown> | undefined;
                            query: {
                                since: Date;
                            };
                            fetch?: RequestInit | undefined;
                        }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                            [x: string]: any;
                            200: any;
                        }>>;
                    };
                    "by-protocols": {
                        get: (options: {
                            headers?: Record<string, unknown> | undefined;
                            query: {
                                since: Date;
                            };
                            fetch?: RequestInit | undefined;
                        }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                            [x: string]: any;
                            200: any;
                        }>>;
                    };
                };
            };
            count: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        items?: number | undefined;
                        page?: number | undefined;
                        campaignId: string;
                        chainId: number;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        count: number;
                    };
                }>>;
                chain: {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query: {
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            [x: number]: {
                                rewardCount: number;
                                breakdownCount: number;
                            };
                        };
                    }>>;
                };
            };
            campaign: ((params: {
                campaignId: string | number;
            }) => {
                index: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            items?: number | undefined;
                            page?: number | undefined;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            amount: string;
                            claimed: string;
                            pending: string;
                            recipient: string;
                        }[];
                    }>>;
                };
                total: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            items?: number | undefined;
                            page?: number | undefined;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            tokenId: string;
                            amount: bigint;
                        };
                    }>>;
                };
                count: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            items?: number | undefined;
                            page?: number | undefined;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            count: number;
                        };
                    }>>;
                };
            }) & {};
            token: {
                index: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            items?: number | undefined;
                            page?: number | undefined;
                            campaignIds?: string[] | undefined;
                            address: string;
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            amount: string;
                            claimed: string;
                            pending: string;
                            recipient: string;
                        }[];
                    }>>;
                };
                total: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            items?: number | undefined;
                            page?: number | undefined;
                            campaignIds?: string[] | undefined;
                            address: string;
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            tokenId: string;
                            amount: bigint;
                        };
                    }>>;
                };
                count: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            items?: number | undefined;
                            page?: number | undefined;
                            campaignIds?: string[] | undefined;
                            address: string;
                            chainId: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            count: number;
                        };
                    }>>;
                };
            };
            engine: {
                index: {
                    post: (body: {
                        pending: string;
                        distributionChainId: number;
                        amount: string;
                        root: string;
                        recipient: string;
                        claimed: string;
                        proofs: string[];
                        rewardToken: string;
                    }[], options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            count: number;
                        };
                    }>>;
                };
                breakdowns: {
                    post: (body: {
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
                    }[], options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            count: number;
                        } | undefined;
                    }>>;
                };
                claims: {
                    post: (body: {
                        token: string;
                        chainId: number;
                        root: string;
                        recipient: string;
                    }[], options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: void;
                    }>>;
                };
            };
            unclaim: {
                index: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            chainId: number;
                            campaignIds: string[];
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            [x: string]: string;
                        };
                    }>>;
                };
            };
        };
        chains: ((params: {
            chainId: string | number;
        }) => {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
            patch: (body: {
                icon?: string | undefined;
                dailyRewards?: number | undefined;
                liveCampaigns?: number | undefined;
            }, options: {
                headers: {
                    authorization: string;
                };
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    name: string;
                    id: number;
                    icon: string;
                };
            }>>;
        }) & {
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        name?: string | undefined;
                        test?: boolean | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
                post: (body: {
                    name: string;
                    id: number;
                    icon: string;
                    explorerType: "ETHERSCAN" | "BLOCKSCOUT";
                    explorerUrl: string;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            count: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        name?: string | undefined;
                        test?: boolean | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: number;
                }>>;
            };
        };
        prices: {
            index: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        [x: string]: number;
                    };
                }>>;
            };
            array: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        rate: number;
                        token: string;
                    }[];
                }>>;
            };
            symbol: ((params: {
                symbol: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: number;
                }>>;
            }) & {};
            sources: {
                index: {
                    get: (options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            symbol: string;
                            method: import("@db/api").$Enums.PriceSourceMethod;
                            args: import("database/api/.generated/runtime/library").JsonValue | null;
                            id: number;
                        }[];
                    }>>;
                    post: (body: {
                        symbol: string;
                        method: "COINGECKO" | "CONSTANT" | "EQUAL_TO" | "ERC4626" | "DEXSCREENER" | "INDEXCOOP" | "DEFILLAMA";
                        args: {};
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: number;
                    }>>;
                };
                symbol: ((params: {
                    symbol: string | number;
                }) => {
                    get: (options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            symbol: string;
                            method: import("@db/api").$Enums.PriceSourceMethod;
                            args: import("database/api/.generated/runtime/library").JsonValue | null;
                            id: number;
                        };
                    }>>;
                    patch: (body: {
                        symbol?: string | undefined;
                        method?: "COINGECKO" | "CONSTANT" | "EQUAL_TO" | "ERC4626" | "DEXSCREENER" | "INDEXCOOP" | "DEFILLAMA" | undefined;
                        args?: {} | undefined;
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            symbol: string;
                            method: import("@db/api").$Enums.PriceSourceMethod;
                            args: import("database/api/.generated/runtime/library").JsonValue | null;
                            id: number;
                        };
                    }>>;
                    delete: (body: unknown, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            symbol: string;
                            method: import("@db/api").$Enums.PriceSourceMethod;
                            args: import("database/api/.generated/runtime/library").JsonValue | null;
                            id: number;
                        };
                    }>>;
                }) & {};
            };
        };
        blacklists: {
            index: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        id: string;
                        chainId: number;
                        poolAddress: string;
                        userAddress: string;
                        arrestTimestamp: bigint;
                        arrestDetails: import("database/api/.generated/runtime/library").JsonValue;
                    }[];
                }>>;
                post: (body: {
                    reason?: string | undefined;
                    chainId: number;
                    poolAddress: string;
                    userAddress: string;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        id: string;
                        chainId: number;
                        poolAddress: string;
                        userAddress: string;
                        arrestTimestamp: bigint;
                        arrestDetails: import("database/api/.generated/runtime/library").JsonValue;
                    };
                }>>;
            };
            mapping: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: unknown;
                }>>;
            };
            check: ((params: {
                address: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: boolean;
                }>>;
            }) & {};
            user: ((params: {
                address: string | number;
            }) => {
                delete: (body: unknown, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: boolean;
                }>>;
            }) & {};
        };
        users: ((params: {
            address: string | number;
        }) => {
            rewards: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        test?: boolean | undefined;
                        reloadChainId?: number | undefined;
                        claimableOnly?: boolean | undefined;
                        chainId: number[];
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: (Omit<{
                        chain: import("@db/api").Chain;
                        rewards: Awaited<ReturnType<typeof import("../modules/v4/reward/reward.service").RewardService["format"]>>;
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
                }>>;
                breakdowns: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            test?: boolean | undefined;
                            chainIds?: number[] | undefined;
                            reloadChainId?: number | undefined;
                            claimableOnly?: boolean | undefined;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: (Omit<{
                            chain: import("@db/api").Chain;
                            rewards: Awaited<ReturnType<typeof import("../modules/v4/reward/reward.service").RewardService["format"]>>;
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
                                    opportunity: import("../modules/v4/opportunity/opportunity.model").Opportunity["model"];
                                    claimed: bigint;
                                    amount: bigint;
                                    pending: bigint;
                                }[];
                            })[];
                            distributor: string;
                        })[];
                    }>>;
                };
            };
            terms: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        chainId: number;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: boolean;
                }>>;
            };
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    tags: string[];
                    address: string;
                    creatorId: string | null;
                };
            }>>;
            tags: {
                patch: (body: {
                    tags: string[];
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        tags: string[];
                        address: string;
                        creatorId: string | null;
                    };
                }>>;
            };
        }) & {
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        items?: number | undefined;
                        tags?: string[] | undefined;
                        page?: number | undefined;
                        address?: string | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        tags: string[];
                        address: string;
                        creatorId: string | null;
                    }[];
                }>>;
                post: (body: {
                    tags: string[];
                    address: string;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        tags: string[];
                        address: string;
                        creatorId: string | null;
                    };
                }>>;
            };
            tags: {
                get: (options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        tags: string[];
                        address: string;
                        creatorId: string | null;
                    }[];
                }>>;
            };
            sync: {
                post: (body: unknown, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: void;
                }>>;
            };
        };
        roots: {
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        chainId: number;
                        fromTimestamp: string;
                        toTimestamp: string;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        chainId: number;
                        timestamp: bigint;
                        root: string;
                        epoch: number;
                    }[];
                }>>;
            };
            live: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        [x: number]: {
                            live: string;
                            tree: string;
                            lastTree: string;
                            endOfDisputePeriod: number;
                            disputer: string;
                        };
                    };
                }>>;
            };
            engine: {
                post: (body: {
                    chainId: number;
                    timestamp: number;
                    root: string;
                    epoch: number;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        chainId: number;
                        timestamp: bigint;
                        root: string;
                        epoch: number;
                    };
                }>>;
            };
        };
        interaction: {
            targets: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        protocolId?: string | undefined;
                        identifier: string;
                        chainId: number;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: import("../modules/v4/interaction/interaction.model").InteractionTarget[];
                }>>;
            };
            protocols: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        chainId?: number | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            transaction: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        slippage?: number | undefined;
                        identifier: string;
                        chainId: number;
                        protocolId: string;
                        userAddress: string;
                        fromAmount: string;
                        fromTokenAddress: string;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        amountIn: bigint;
                        allowance: bigint;
                        approved: boolean;
                        transaction: import("../modules/v4/interaction/interaction.model").UserTransaction;
                        approval: import("../modules/v4/interaction/interaction.model").UserTransaction;
                        actions?: import("../modules/v4/interaction/interaction.model").InteractionAction[] | undefined;
                        depositValue?: number | undefined;
                    } | undefined;
                }>>;
            };
        };
        accounting: {
            index: {
                get: (options: {
                    headers: {
                        authorization: string;
                    };
                    query: {
                        items?: number | undefined;
                        page?: number | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            revenues: {
                get: (options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        total: number;
                        breakdown: {
                            [key: number]: {
                                chainAmount: number;
                                percentage: number;
                            };
                        };
                    };
                }>>;
                "per-month": ((params: {
                    year: string | number;
                }) => {} & ((params: {
                    month: string | number;
                }) => {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                    }>>;
                })) & {};
                chains: ((params: {
                    chainId: string | number;
                }) => {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            totalAmount: number;
                        };
                    }>>;
                    "per-month": ((params: {
                        year: string | number;
                    }) => {} & ((params: {
                        month: string | number;
                    }) => {
                        get: (options: {
                            headers: {
                                authorization: string;
                            };
                            query?: Record<string, unknown> | undefined;
                            fetch?: RequestInit | undefined;
                        }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                            200: {
                                totalAmount: number;
                                from: string;
                                to: string;
                            };
                        }>>;
                    })) & {};
                }) & {};
            };
            tokens: ((params: {
                chainId: string | number;
            }) => {} & ((params: {
                tokenAddress: string | number;
            }) => {
                get: (options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        totalAmount: number;
                        totalAmountUSD: number;
                    };
                }>>;
                "per-month": ((params: {
                    year: string | number;
                }) => {} & ((params: {
                    month: string | number;
                }) => {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            totalAmount: number;
                            totalAmountUSD: number;
                            from: string;
                            to: string;
                        };
                    }>>;
                })) & {};
            })) & {};
        };
        "campaign-status": ((params: {
            campaignId: string | number;
        }) => {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
        }) & {
            engine: ((params: {
                campaignId: string | number;
            }) => {
                put: (body: {
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
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: void;
                }>>;
            }) & {
                computedUntil: ((params: {
                    campaignId: string | number;
                }) => {
                    put: (body: {
                        computedUntil: number;
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: void;
                    }>>;
                }) & {};
                overlaps: {
                    get: (options: {
                        headers: {
                            authorization: string;
                        };
                        query: {
                            campaignId: string;
                            distributionChain: number;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: boolean;
                    }>>;
                };
            };
            error: ((params: {
                campaignId: string | number;
            }) => {
                put: (body: {
                    error: string;
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: void;
                }>>;
            }) & {};
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        status?: "PROCESSING" | "SUCCESS" | "FAILED" | "SKIPPED" | ("PROCESSING" | "SUCCESS" | "FAILED" | "SKIPPED")[] | undefined;
                        computeChainId?: number | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        status: import("@db/api").$Enums.RunStatus;
                        error: string;
                        details: import("database/api/.generated/runtime/library").JsonValue;
                        campaignId: string;
                        computedUntil: bigint;
                        processingStarted: bigint;
                    }[];
                }>>;
            };
            delay: {
                index: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            chainId?: number | undefined;
                            endTimestampLowerBound?: number | undefined;
                            delayLowerBound?: number | undefined;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                    }>>;
                };
                status: {
                    get: (options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                                delayed: Awaited<ReturnType<typeof import("../modules/v4/status/status.service").StatusService["findManyDelay"]>>;
                            };
                        };
                    }>>;
                };
            };
        };
        liquidity: {
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        address: string;
                        chainId: number;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: import("../modules/v4/liquidity/liquidity.model").PositionT[];
                }>>;
            };
        };
        claims: ((params: {
            address: string | number;
        }) => {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainIds?: number[] | undefined;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: (import("../modules/v4/claims/claims.model").ClaimModel & {
                    token?: import("../modules/v4/token/token.model").Token["model"];
                })[];
            }>>;
        }) & {};
        "program-payload": {
            index: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        version: string;
                        chainId: string;
                        createdAt: number;
                        meta: {
                            name: string;
                            txBuilderVersion: string;
                        };
                        transactions: import("../modules/v4/programPayload/programPayload.model").transaction[];
                    };
                }>>;
            };
            config: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    [x: string]: any;
                    200: any;
                }>>;
            };
            "template-config": ((params: {
                campaignType: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        [x: string]: string;
                    };
                }>>;
            }) & {};
            campaignData: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        args: any;
                    };
                }>>;
            };
            program: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
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
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        version: string;
                        chainId: string;
                        createdAt: number;
                        meta: {
                            name: string;
                            txBuilderVersion: string;
                        };
                        transactions: import("../modules/v4/programPayload/programPayload.model").transaction[];
                    } | null;
                }>>;
                withAmounts: {
                    post: (body: {
                        [x: string]: string;
                    }, options: {
                        headers?: Record<string, unknown> | undefined;
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
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            version: string;
                            chainId: string;
                            createdAt: number;
                            meta: {
                                name: string;
                                txBuilderVersion: string;
                            };
                            transactions: import("../modules/v4/programPayload/programPayload.model").transaction[];
                        } | null;
                    }>>;
                };
            };
            payload: {
                "from-config": {
                    post: (body: {
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
                    }, options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            debug?: boolean | undefined;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            version: string;
                            chainId: string;
                            createdAt: number;
                            meta: {
                                name: string;
                                txBuilderVersion: string;
                            };
                            transactions: import("../modules/v4/programPayload/programPayload.model").transaction[];
                        } | {
                            safePayload: import("../modules/v4/programPayload/programPayload.model").safePayload;
                            nonEncodedConfig: any;
                        };
                    }>>;
                };
            };
            parse: {
                "from-campaign-data": {
                    post: (body: {
                        computeChainId: number;
                        amount: string;
                        startTimestamp: number;
                        chainId: number;
                        rewardToken: string;
                        campaignType: number;
                        duration: number;
                        campaignData: string;
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        [x: string]: any;
                        200: any;
                    }>>;
                };
            };
        };
        boosts: {
            euler: {
                post: (body: {
                    address: string;
                    score: string;
                }[] | {
                    addresses: string[];
                }, options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        address: string;
                        boost: string;
                    }[];
                }>>;
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        address: string;
                        boost: string;
                    }[];
                }>>;
            };
            openblock: {
                zksync: {
                    post: (body: {
                        address: string;
                        score: string;
                    }[] | {
                        addresses: string[];
                    }, options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            protocol: string;
                            target: string;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            address: string;
                            boost: string;
                        }[];
                    }>>;
                };
            };
        };
        value: {
            campaign: ((params: {
                campaignId: string | number;
            }) => {} & ((params: {
                field: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        averageBoost: number | null;
                        totalDistributedInUSD: number | null;
                        forfeitingBoost: number | null;
                    } | null;
                }>>;
            })) & {};
            user: ((params: {
                address: string | number;
            }) => {} & ((params: {
                field: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        reason: string;
                        id: string;
                        campaignId: string;
                        boost: number | null;
                    }[];
                }>>;
            })) & {};
            engine: {
                campaign: {
                    post: (body: {
                        value: number;
                        campaignId: string;
                        field: string;
                    }, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: void;
                    }>>;
                };
                user: {
                    post: (body: {
                        reason: string;
                        value: number;
                        campaignId: string;
                        address: string;
                        field: string;
                    }[], options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: void;
                    }>>;
                };
            };
        };
        creators: ((params: {
            address: string | number;
        }) => {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
            patch: (body: {
                icon?: string | undefined;
                name: string;
                addresses: string[];
            }, options: {
                headers: {
                    authorization: string;
                };
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    name: string;
                    id: string;
                    icon: string | null;
                    rebateFee: number;
                };
            }>>;
            delete: (body: unknown, options: {
                headers: {
                    authorization: string;
                };
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    name: string;
                    id: string;
                    icon: string | null;
                    rebateFee: number;
                };
            }>>;
            dashboard: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        pastCampaigns: number;
                        liveCampaigns: number;
                        futureCampaigns: number;
                        incentivizedTvl: number;
                        totalCampaigns: number;
                        creatorId: string | null;
                    };
                }>>;
            };
            campaigns: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        status?: "PAST" | "LIVE" | "FUTURE" | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
        }) & {
            index: {
                post: (body: {
                    icon?: string | undefined;
                    name: string;
                    id: string;
                    addresses: string[];
                }, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        name: string;
                        id: string;
                        icon: string | null;
                        rebateFee: number;
                    };
                }>>;
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        id?: string | undefined;
                        items?: number | undefined;
                        page?: number | undefined;
                        address?: string | undefined;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            campaigns: ((params: {
                id: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            }) & {};
        };
        referral: {
            code: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        address: string;
                        chainId: number;
                        referralKey: string;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
            redeem: {
                get: (options: {
                    headers?: Record<string, unknown> | undefined;
                    query: {
                        code: string;
                        chainId: number;
                        referralKey: string;
                    };
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
                }>>;
            };
        };
        uniswap: {
            reward: {
                3: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            chainId?: number | undefined;
                            pool?: string | undefined;
                            positionId?: string | undefined;
                            address: string;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            [x: number]: Record<string, Record<string, {
                                campaignId: string;
                                amount: string;
                                claimed: string;
                                pending: string;
                                reason: string;
                                rewardToken: import("../modules/v4/token/token.model").Token["model"];
                                opportunity: import("../modules/v4/opportunity/opportunity.model").Opportunity["model"];
                            }[]>>;
                        };
                    }>>;
                };
                4: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            chainId?: number | undefined;
                            pool?: string | undefined;
                            positionId?: string | undefined;
                            address: string;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            [x: number]: Record<string, Record<string, {
                                campaignId: string;
                                amount: string;
                                claimed: string;
                                pending: string;
                                reason: string;
                                rewardToken: import("../modules/v4/token/token.model").Token["model"];
                                opportunity: import("../modules/v4/opportunity/opportunity.model").Opportunity["model"];
                            }[]>>;
                        };
                    }>>;
                };
            };
            v4: ((params: {
                poolId: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: UniswapV4PoolType[];
                }>>;
            }) & {
                pools: {
                    get: (options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            [x: string]: {
                                [poolId: string]: UniswapV4PoolType;
                            } | undefined;
                        };
                    }>>;
                };
                update: ((params: {
                    chainId: string | number;
                }) => {
                    post: (body: unknown, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: void;
                    }>>;
                }) & {
                    post: (body: unknown, options: {
                        headers: {
                            authorization: string;
                        };
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: void;
                    }>>;
                };
            };
            v4pools: ((params: {
                chainId: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        [x: string]: any;
                    };
                }>>;
            }) & {};
        };
        turtle: {
            tac: ((params: {
                address: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        [x: string]: {
                            vaultSymbol: string;
                            balance: number;
                            maxBalance: number;
                            turtle: number;
                        };
                    };
                }>>;
            }) & {
                total: {
                    get: (options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                        200: {
                            total: number;
                            breakdown: {
                                [key: string]: number;
                            };
                        };
                    }>>;
                };
            };
        };
    };
    v3: {
        app: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {};
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    tokens: any;
                    prices: {
                        rate: number;
                        token: string;
                    }[];
                };
            }>>;
        };
        blacklist: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    isBlacklisted: boolean;
                };
            }>>;
        };
        campaignClaims: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    byReason?: boolean | undefined;
                    campaignId: string;
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: unknown;
            }>>;
        };
        campaigns: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    types?: string | number | number[] | string[] | undefined;
                    chainIds?: string | string[] | undefined;
                    creatorTag?: string | undefined;
                    live?: boolean | undefined;
                    hideTestTokens?: string | undefined;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        campaignsForMainParameter: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    mainParameter: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    campaignId: string;
                    campaignType: number;
                    rewardToken: string;
                    rewardTokenSymbol: string;
                    amountDecimal: number;
                    startTimestamp: number;
                    endTimestamp: number;
                }[];
            }>>;
        };
        campaignsRewardsReport: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    from?: number | undefined;
                    to?: number | undefined;
                    chain_campaignIds: string[];
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: any[];
            }>>;
        };
        campaignUnclaimed: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    campaignIds: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    [x: string]: string;
                };
            }>>;
        };
        claims: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainIds?: string | string[] | undefined;
                    creatorTag?: string | undefined;
                    byReason?: boolean | undefined;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    message: string;
                };
            }>>;
        };
        compoundV2: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {};
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        createCampaign: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    feeRebate: number | undefined;
                    message: any;
                    signed: boolean | undefined;
                    validRewardTokens: any;
                };
            }>>;
        };
        dolomite: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        euler: ((params: {
            chainId: string | number;
        }) => {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    vaultAddress?: string | undefined;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: EulerVaultType[] | undefined;
            }>>;
        }) & {
            index: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: EulerVaultType[] | null;
                }>>;
            };
            update: ((params: {
                chainId: string | number;
            }) => {
                post: (body: unknown, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: void;
                }>>;
            }) & {
                post: (body: unknown, options: {
                    headers: {
                        authorization: string;
                    };
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: void;
                }>>;
            };
        };
        fetch: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    index: number;
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: string | {
                    message: string;
                    name: string;
                };
            }>>;
        };
        health: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {};
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    success: boolean;
                };
            }>>;
        };
        lostyield: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        merkl: {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        morphoMarkets: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    repository: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        morphoVaults: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    repository: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        multiChainPositions: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainIds?: string | string[] | undefined;
                    creatorTag?: string | undefined;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        opportunity: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    type?: number | undefined;
                    tag?: string | undefined;
                    action?: string | undefined;
                    chainId?: number | undefined;
                    campaigns?: boolean | undefined;
                    mainParameter?: string | undefined;
                    testTokens?: boolean | undefined;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {};
            }>>;
        };
        overview: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId?: number | undefined;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
        };
        parse: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    index?: number | undefined;
                    campaign: any;
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: string | {
                    message: string;
                    name: string;
                };
            }>>;
        };
        payload: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    signature?: any;
                    config: string;
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
        };
        poolInfo: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    poolAddress: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        positions: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId?: number | undefined;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        radiant: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    poolAddressProvider: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        recipients: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    campaignId: string;
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    recipient: string;
                    reason: string;
                    rewardToken: string;
                    amount: string;
                }[];
            }>>;
        };
        rewards: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainIds?: string | string[] | undefined;
                    creatorTag?: string | undefined;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
        };
        rewardsReport: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    from?: number | undefined;
                    mainParameter?: string | undefined;
                    to?: number | undefined;
                    campaignId: string;
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    recipient: string;
                    reason: string;
                    rewardToken: string;
                    amount: string;
                }[];
            }>>;
        };
        silo: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    chainId: number;
                    repository: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                [x: string]: any;
                200: any;
            }>>;
        };
        token: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    address: string;
                    chainId: number;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    name: string;
                    symbol: string;
                    decimals: number;
                };
            }>>;
        };
        updates: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {};
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    [x: number]: {
                        [campaignId: string]: number;
                    };
                };
                readonly 400: {
                    message?: string | undefined;
                    error: string;
                };
            }>>;
        };
        userRewards: {
            get: (options: {
                headers?: Record<string, unknown> | undefined;
                query: {
                    rewardToken?: string | undefined;
                    proof?: string | undefined;
                    mainParameter?: string | undefined;
                    reloadChainId?: number | undefined;
                    chainId: number;
                    user: string;
                };
                fetch?: RequestInit | undefined;
            }) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
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
            }>>;
        };
        uniswapv4: ((params: {
            chainId: string | number;
        }) => {
            get: (options?: {
                headers?: Record<string, unknown> | undefined;
                query?: Record<string, unknown> | undefined;
                fetch?: RequestInit | undefined;
            } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                200: {
                    [x: string]: any;
                } | undefined;
            }>>;
        }) & {
            index: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: {
                        [x: string]: {
                            [poolId: string]: UniswapV4PoolType;
                        } | undefined;
                    } | null;
                }>>;
            };
            pool: ((params: {
                poolId: string | number;
            }) => {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("@elysiajs/eden").Treaty.TreatyResponse<{
                    200: UniswapV4PoolType[];
                }>>;
            }) & {};
        };
    };
};
export type Opportunity = FromPromise<Api["v4"]["opportunities"]["index"]["get"]>;
export type Protocol = FromPromise<Api["v4"]["protocols"]["index"]["get"]>;
export type Campaign = FromPromise<Api["v4"]["campaigns"]["index"]["get"]>;
export type CampaignParams<C extends CampaignType> = CampaignWithParams<C>["params"];
export type Chain = FromPromise<Api["v4"]["chains"]["index"]["get"]>;
export type Explorer = FromPromise<Api["v4"]["chains"]["index"]["get"]>["explorers"][number];
export type Token = FromPromise<Api["v4"]["tokens"]["index"]["get"]>;
export type Reward = NonNullable<Awaited<ReturnType<ReturnType<Api["v4"]["users"]>["rewards"]["breakdowns"]["get"]>>["data"]>[number];
export {};
