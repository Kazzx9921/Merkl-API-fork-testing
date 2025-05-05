import Elysia from "elysia";
export declare const CampaignTestController: Elysia<"/campaigns", false, {
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
}, {
    derive: {};
    resolve: {};
    schema: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
}>;
