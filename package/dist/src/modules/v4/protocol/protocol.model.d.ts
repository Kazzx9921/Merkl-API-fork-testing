import type { Resource } from "@/modules/v4/prisma";
/**
 * Protocol
 * @description Target description of rewards campaigns
 * @see {@link Resource}
 */
export type Protocol = Resource<"Protocol", undefined, {
    dailyRewards?: number;
    numberOfLiveCampaigns?: number;
    opportunityLiveTags?: string[];
}>;
export declare const protocolIdList: readonly ["uniswap", "ambient", "arthswap", "base-swap", "camelot", "crust", "fenix", "horiza", "izumi", "kim", "pancake-swap", "quickswap", "ramses", "retro", "stryke", "sushi-swap", "swapr", "thruster", "voltage", "zero", "koi", "supswap", "zk-swap", "thirdtrade", "swap-x", "velodrome", "aerodrome", "balancer", "curve", "cross_curve", "curveNPool", "aura", "akron", "beefy", "dragonswap", "poolside", "koi", "syncswap", "neptune", "zkSwapThreePool", "syncswap", "rfx", "ra", "maverick", "trader-joe", "velodrome", "hanji", "reserve", "radiant", "aave", "fraxlend", "ironclad", "euler", "gearbox", "compound", "sturdy", "frax", "ionic", "moonwell", "fluid", "silo", "morpho", "dolomite", "badger", "ajna", "layerbank", "ion", "venus", "woofi", "reactor_fusion", "eigenlayer", "vest", "zerolend", "lnd", "hyperdrive", "gamma", "oku", "hourglass", "veda", "kyo", "sonex", "lendle", "tako-tako", "equalizer", "spectra", "beraborrow", "superlend", "avalon", "iguana", "xlend", "sake", "sonicmarket", "stability", "angles", "enzyme", "toros", "vicuna", "bunni", "beratrax", "concrete", "cian", "pendle", "splice", "sturdy", "yei", "termmax", "filament", "gammaswap", "maha", "tempest", "uranium", "hanji", "holdstation", "katana", "satlayer", "puffer"];
export type ProtocolId = (typeof protocolIdList)[number];
export declare const ProtocolResourceDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    icon: import("@sinclair/typebox").TString;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    description: import("@sinclair/typebox").TString;
    url: import("@sinclair/typebox").TString;
}>;
export declare const GetProtocolsQueryDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    test: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    ids: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    opportunityTag: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const GetProtocolParamsDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
}>;
export declare const UpdateProtocolDto: import("@sinclair/typebox").TObject<{
    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const CreateProtocolDto: import("@sinclair/typebox").TObject<{
    icon: import("@sinclair/typebox").TString;
    url: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
    id: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export declare const ProtocolIdDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
}>;
export declare const NotionWebhookAddProtocolDto: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{
        properties: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TObject<{
                title: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TObject<{
                        content: import("@sinclair/typebox").TString;
                    }>;
                }>>;
            }>;
            description: import("@sinclair/typebox").TObject<{
                rich_text: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TObject<{
                        content: import("@sinclair/typebox").TString;
                    }>;
                }>>;
            }>;
            icon: import("@sinclair/typebox").TObject<{
                files: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                    name: import("@sinclair/typebox").TString;
                    file: import("@sinclair/typebox").TObject<{
                        url: import("@sinclair/typebox").TString;
                    }>;
                }>, import("@sinclair/typebox").TObject<{
                    external: import("@sinclair/typebox").TObject<{
                        url: import("@sinclair/typebox").TString;
                    }>;
                }>]>>;
            }>;
            name: import("@sinclair/typebox").TObject<{
                rich_text: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TObject<{
                        content: import("@sinclair/typebox").TString;
                    }>;
                }>>;
            }>;
            tags: import("@sinclair/typebox").TObject<{
                rich_text: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TObject<{
                        content: import("@sinclair/typebox").TString;
                    }>;
                }>>;
            }>;
            url: import("@sinclair/typebox").TObject<{
                url: import("@sinclair/typebox").TString;
            }>;
        }>;
    }>;
}>;
export type GetProtocolsQueryModel = typeof GetProtocolsQueryDto.static;
export type GetProtocolModel = typeof GetProtocolParamsDto.static;
export type UpdateProtocolModel = typeof UpdateProtocolDto.static;
export type CreateProtocolModel = typeof CreateProtocolDto.static;
