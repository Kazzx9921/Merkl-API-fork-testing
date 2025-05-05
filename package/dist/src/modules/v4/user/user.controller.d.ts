import { RewardService } from "@/modules/v4/reward/reward.service";
import { Elysia } from "elysia";
export declare const UserController: Elysia<"/users", false, {
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
                            rewards: Awaited<ReturnType<(typeof RewardService)["format"]>>;
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
                                rewards: Awaited<ReturnType<(typeof RewardService)["format"]>>;
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
                                        opportunity: import("../opportunity/opportunity.model").Opportunity["model"];
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
        query: unknown;
        params: unknown;
        cookie: unknown;
        response: {};
    };
}>;
