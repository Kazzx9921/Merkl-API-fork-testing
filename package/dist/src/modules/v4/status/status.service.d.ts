import type { CampaignUnique } from "@/modules/v4/campaign/campaign.model";
import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import type { DelayModel, QueryCampaignStatus, UpdateStatusModel } from "./status.model";
export declare abstract class StatusService {
    static format(status: Awaited<ReturnType<(typeof CampaignService)["findUniqueOrThrow"]>>["CampaignStatus"][number]): {
        computedUntil: number;
        processingStarted: number;
        status: import("@db/api").$Enums.RunStatus;
        error: string;
        details: import("database/api/.generated/runtime/library").JsonValue;
        campaignId: string;
    };
    static findMany(query: QueryCampaignStatus): Promise<{
        status: import("@db/api").$Enums.RunStatus;
        error: string;
        details: import("database/api/.generated/runtime/library").JsonValue;
        campaignId: string;
        computedUntil: bigint;
        processingStarted: bigint;
    }[]>;
    static findManyByCampaignId(campaignId: string): Promise<{
        status: import("@db/api").$Enums.RunStatus;
        error: string;
        details: import("database/api/.generated/runtime/library").JsonValue;
        campaignId: string;
        computedUntil: bigint;
        processingStarted: bigint;
    }[]>;
    static findUniqueOrThrow(campaignUnique: CampaignUnique | string): Promise<{
        status: import("@db/api").$Enums.RunStatus;
        error: string;
        details: import("database/api/.generated/runtime/library").JsonValue;
        campaignId: string;
        computedUntil: bigint;
        processingStarted: bigint;
    }>;
    static findUnique(campaignUnique: CampaignUnique): Promise<{
        status: import("@db/api").$Enums.RunStatus;
        error: string;
        details: import("database/api/.generated/runtime/library").JsonValue;
        campaignId: string;
        computedUntil: bigint;
        processingStarted: bigint;
    } | null>;
    static update(campaignUnique: CampaignUnique, status: UpdateStatusModel): Promise<void>;
    static updateComputedUntil(campaignUnique: CampaignUnique, computedUntil: number): Promise<void>;
    static updateErrorMessage(campaignUnique: CampaignUnique, error: string): Promise<void>;
    static isSafeForOverlaps(campaignUnique: CampaignUnique): Promise<boolean>;
    static findUpdatesAndDelays(): Promise<Record<number, {
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
        delayed: Awaited<ReturnType<(typeof StatusService)["findManyDelay"]>>;
    }>>;
    static findManyDelay(query: DelayModel): Promise<{
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
    }[]>;
}
