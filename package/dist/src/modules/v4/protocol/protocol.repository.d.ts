import type { CreateProtocolModel, GetProtocolsQueryModel, UpdateProtocolModel } from "./protocol.model";
export declare abstract class ProtocolRepository {
    #private;
    static create(data: CreateProtocolModel): Promise<{
        url: string;
        name: string;
        description: string;
        id: string;
        tags: string[];
        icon: string;
    }>;
    static upsert(data: CreateProtocolModel): Promise<{
        url: string;
        name: string;
        description: string;
        id: string;
        tags: string[];
        icon: string;
    }>;
    static changeId(oldId: string, newId: string): Promise<void>;
    static findUnique(type: string): Promise<{
        url: string;
        name: string;
        description: string;
        id: string;
        tags: string[];
        icon: string;
    } | null>;
    static findMany(query: GetProtocolsQueryModel): Promise<({
        MainOpportunities: ({
            Campaigns: {
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
        })[];
    } & {
        url: string;
        name: string;
        description: string;
        id: string;
        tags: string[];
        icon: string;
    })[]>;
    static countMany(query: GetProtocolsQueryModel): Promise<number>;
    static update(id: string, data: UpdateProtocolModel): Promise<{
        url: string;
        name: string;
        description: string;
        id: string;
        tags: string[];
        icon: string;
    }>;
}
