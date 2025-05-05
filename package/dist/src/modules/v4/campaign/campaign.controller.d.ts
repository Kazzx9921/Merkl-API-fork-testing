import Elysia from "elysia";
export declare const CampaignController: Elysia<"/campaigns", false, {
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
}, {
    derive: {};
    resolve: {};
    schema: {};
}, {
    derive: {};
    resolve: {};
    schema: {
        body: unknown;
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
        params: unknown;
        cookie: unknown;
        response: {
            200: {
                [x: string]: number;
            };
        };
    };
}>;
