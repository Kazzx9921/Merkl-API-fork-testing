import { Elysia } from "elysia";
export declare const CreatorController: Elysia<"/creators", false, {
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
}, {
    derive: {};
    resolve: {};
    schema: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
}>;
