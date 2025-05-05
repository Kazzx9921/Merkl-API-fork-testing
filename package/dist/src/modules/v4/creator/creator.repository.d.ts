import type { CreateCreatorDto, Creator, GetManyCreatorModel, UpdateCreatorDto } from "./creator.model";
export declare abstract class CreatorRepository {
    static findUnique(id: Creator["model"]["id"]): Promise<{
        Users: {
            tags: string[];
            address: string;
            creatorId: string | null;
        }[];
    } & {
        name: string;
        id: string;
        icon: string | null;
        rebateFee: number;
    }>;
    static findUniqueFromAddress(address: string): Promise<{
        name: string;
        id: string;
        icon: string | null;
        rebateFee: number;
    } | null>;
    static findMany(query: GetManyCreatorModel): Promise<({
        Users: {
            address: string;
        }[];
    } & {
        name: string;
        id: string;
        icon: string | null;
        rebateFee: number;
    })[]>;
    static create({ addresses, ...creator }: typeof CreateCreatorDto.static): Promise<{
        name: string;
        id: string;
        icon: string | null;
        rebateFee: number;
    }>;
    static update(id: Creator["model"]["id"], { addresses, ...creator }: UpdateCreatorDto): Promise<{
        name: string;
        id: string;
        icon: string | null;
        rebateFee: number;
    }>;
    static delete(id: Creator["model"]["id"]): Promise<{
        name: string;
        id: string;
        icon: string | null;
        rebateFee: number;
    }>;
    static getCampaignsFor(creatorAddress: string): Promise<({
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
    })[]>;
    static updateRebate(id: Creator["model"]["id"], rebate: number): Promise<{
        name: string;
        id: string;
        icon: string | null;
        rebateFee: number;
    }>;
}
