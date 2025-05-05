import type { CampaignWithParams, GetCampaignQueryModel } from "@/modules/v4/campaign/campaign.model";
import { type OpportunityAction, type OpportunityManualOverride, type Prisma } from "@db/api";
import { type MerklChainId } from "@sdk";
import type { Protocol } from "../protocol/protocol.model";
import type { Token } from "../token/token.model";
import type { CreateOpportunityModel, GetOpportunitiesQueryModel, LightOpportunityFromDB, Opportunity, OpportunityOverrideModel, OpportunityResourceModel, OpportunityUnique } from "./opportunity.model";
import { OpportunityRepository } from "./opportunity.repository";
export declare abstract class OpportunityService {
    #private;
    static hashId(opportunity: OpportunityUnique): string;
    static getAprBins(query: GetOpportunitiesQueryModel): Promise<{
        min: number;
        max: number;
        overThreshold: number;
        binWidth: number;
        bins: any[];
    }>;
    static getTvlBins(query: GetOpportunitiesQueryModel): Promise<{
        min: number;
        max: number;
        binWidth: number;
        bins: any[];
    }>;
    static override(id: string, data: OpportunityOverrideModel): Promise<{
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
    }>;
    static deleteOverrides(id: string, overridesToDelete: OpportunityManualOverride[]): Promise<({
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
    }) | {
        id: string;
        chainId: number;
        type: string;
        identifier: string;
        name: string;
        status: "PAST" | "LIVE" | "SOON";
        action: OpportunityAction;
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
    }>;
    /**
     * create an opportunity without campaigns
     * @param newOpp the new opportunity to create
     * @returns {Promise<Opportunity|undefined>}
     */
    static create(newOpp: CreateOpportunityModel): Promise<{
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
    }>;
    /**
     * @param upsert whether to update the opportunity if it already exists in database
     * @param dryRun whether to skip the opportunity table interaction and just return the computed opportunity
     * @returns the opportunity entity computed
     */
    static createFromCampaign(campaign: Omit<CampaignWithParams, "manualOverrides">, opportunityIdentifier: string, upsert?: boolean, dryRun?: boolean): Promise<({
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
    }) | {
        id: string;
        chainId: number;
        type: string;
        identifier: string;
        name: string;
        status: "PAST" | "LIVE" | "SOON";
        action: OpportunityAction;
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
    }>;
    /**
     * deletes and recreates an opportunity with fresh data
     */
    static recreate(opportunityId: string, campaignId?: string): Promise<({
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
    }) | {
        id: string;
        chainId: number;
        type: string;
        identifier: string;
        name: string;
        status: "PAST" | "LIVE" | "SOON";
        action: OpportunityAction;
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
    }>;
    /**
     * Finds opportunities based on filters of its campaigns
     * @notice campaigns are filtered as well
     * @param where
     * @returns opportunities
     */
    static findManyByCampaigns(where: GetCampaignQueryModel): Promise<{
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
    }[]>;
    static getUniqueWithCampaignsOrThrow(opportunityId: string | OpportunityUnique, withTest?: boolean, withPoints?: boolean): Promise<{
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
    }>;
    static findUniqueOrThrow(opportunityId: string | OpportunityUnique, withCampaigns?: boolean, withTest?: boolean, withPoints?: boolean): Promise<OpportunityResourceModel>;
    /**
     * Get the list of opportunities satisfying the query
     * @param query
     * @returns A list of opportunities
     */
    static findMany(query: GetOpportunitiesQueryModel): Promise<{
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
                details: Prisma.JsonValue;
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
    }[]>;
    /**
     * Counts the number of opportunities that complies to query
     * @description used for pagination purposes
     * @param query
     * @returns the number of opportunities
     */
    static countMany(query: GetOpportunitiesQueryModel): Promise<number>;
    static findLiveWithCampaigns(chainId: MerklChainId, take?: number): Promise<{
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
                details: Prisma.JsonValue;
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
    }[]>;
    static formatResponse(opportunity: Awaited<ReturnType<typeof OpportunityRepository.findUniqueOrThrow>>): {
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
                details: Prisma.JsonValue;
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
    };
    static formatResponseBase(opportunity: LightOpportunityFromDB): {
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
        apr: number;
        dailyRewards: number;
    };
    static aggregate(query: GetOpportunitiesQueryModel, field: keyof Prisma.OpportunitySumAggregateInputType): Promise<{
        sum: string;
    }>;
    static aggregateMin(query: GetOpportunitiesQueryModel, field: keyof Prisma.OpportunityMinAggregateInputType): Promise<{
        min: string;
    }>;
    static aggregateMax(query: GetOpportunitiesQueryModel, field: keyof Prisma.OpportunityMaxAggregateInputType): Promise<{
        max: string;
    }>;
    static update(id: string, data: Partial<Opportunity["raw"]>): Promise<{
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
    }>;
    static updateMany(ids: string[], data: Partial<Opportunity["raw"]>): Promise<import("database/api/.generated/runtime/library").GetBatchResult>;
    static description(action: OpportunityAction, tokens: Token["model"][], protocol: Protocol["model"], chainId: number): Promise<string>;
    static howToSteps(action: OpportunityAction, tokens: Token["model"][], protocol: Protocol["model"]): string[];
}
