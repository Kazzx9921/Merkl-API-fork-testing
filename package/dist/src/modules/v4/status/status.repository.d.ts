import type { CampaignUnique } from "@/modules/v4/campaign/campaign.model";
import type { Prisma, RunStatus } from "@db/api";
import type { DelayModel, QueryCampaignStatus } from "./status.model";
export declare abstract class StatusRepository {
    #private;
    static findMany(query: QueryCampaignStatus): Promise<{
        status: import("@db/api").$Enums.RunStatus;
        error: string;
        details: Prisma.JsonValue;
        campaignId: string;
        computedUntil: bigint;
        processingStarted: bigint;
    }[]>;
    static findManyByCampaignId(campaignId: string): Promise<{
        status: import("@db/api").$Enums.RunStatus;
        error: string;
        details: Prisma.JsonValue;
        campaignId: string;
        computedUntil: bigint;
        processingStarted: bigint;
    }[]>;
    static findUniqueOrThrow(campaignId: string): Promise<{
        status: import("@db/api").$Enums.RunStatus;
        error: string;
        details: Prisma.JsonValue;
        campaignId: string;
        computedUntil: bigint;
        processingStarted: bigint;
    }>;
    static findUnique(campaignUnique: CampaignUnique): Promise<{
        status: import("@db/api").$Enums.RunStatus;
        error: string;
        details: Prisma.JsonValue;
        campaignId: string;
        computedUntil: bigint;
        processingStarted: bigint;
    } | null>;
    static create(campaign: CampaignUnique, startTimestamp: bigint): Promise<{
        status: import("@db/api").$Enums.RunStatus;
        error: string;
        details: Prisma.JsonValue;
        campaignId: string;
        computedUntil: bigint;
        processingStarted: bigint;
    }>;
    static updateSuccess(campaignUnique: CampaignUnique, computedUntil: number): Promise<{
        status: import("@db/api").$Enums.RunStatus;
        error: string;
        details: Prisma.JsonValue;
        campaignId: string;
        computedUntil: bigint;
        processingStarted: bigint;
    }>;
    static updateWithError(campaignUnique: CampaignUnique, status: Exclude<RunStatus, "SUCCESS" | "PROCESSING">, error: string, details: string): Promise<{
        status: import("@db/api").$Enums.RunStatus;
        error: string;
        details: Prisma.JsonValue;
        campaignId: string;
        computedUntil: bigint;
        processingStarted: bigint;
    }>;
    static updateProcessing(campaignUnique: CampaignUnique): Promise<void>;
    static updateComputedUntil(campaignUnique: CampaignUnique, computedUntil: number): Promise<{
        status: import("@db/api").$Enums.RunStatus;
        error: string;
        details: Prisma.JsonValue;
        campaignId: string;
        computedUntil: bigint;
        processingStarted: bigint;
    }>;
    static updateErrorMessage(campaignUnique: CampaignUnique, error: string): Promise<{
        status: import("@db/api").$Enums.RunStatus;
        error: string;
        details: Prisma.JsonValue;
        campaignId: string;
        computedUntil: bigint;
        processingStarted: bigint;
    }>;
    static findManyDelay(query: DelayModel): Promise<{
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
            details: Prisma.JsonValue;
            campaignId: string;
            computedUntil: bigint;
            processingStarted: bigint;
        }[];
    }[]>;
}
