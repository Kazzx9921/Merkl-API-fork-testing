import type { Campaign } from "@/modules/v4/campaign/campaign.model";
import type { Resource } from "@/modules/v4/prisma";
export type Status = Resource<"CampaignStatus", "campaignId", {
    computedUntil: number;
    processingStarted: number;
}>;
export type StatusWithCampaign = Status & {
    campaign: Campaign["model"];
};
export declare const CampaignUniqueDto: import("@sinclair/typebox").TObject<{
    distributionChain: import("@sinclair/typebox").TNumber;
    campaignId: import("@sinclair/typebox").TString;
}>;
export declare const DelayDto: import("@sinclair/typebox").TObject<{
    endTimestampLowerBound: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    delayLowerBound: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    chainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const CampaignStatusResourceDto: import("@sinclair/typebox").TObject<{
    campaignId: import("@sinclair/typebox").TString;
    computedUntil: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
    processingStarted: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
    status: import("@sinclair/typebox").TString;
    error: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    details: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
}>;
export declare const UpdateCampaignStatusDto: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    value: import("@sinclair/typebox").TLiteral<"SUCCESS">;
    computedUntil: import("@sinclair/typebox").TNumber;
}>, import("@sinclair/typebox").TObject<{
    value: import("@sinclair/typebox").TLiteral<"PROCESSING">;
}>, import("@sinclair/typebox").TObject<{
    value: import("@sinclair/typebox").TLiteral<"SKIPPED">;
    error: import("@sinclair/typebox").TString;
    details: import("@sinclair/typebox").TString;
}>, import("@sinclair/typebox").TObject<{
    value: import("@sinclair/typebox").TLiteral<"FAILED">;
    error: import("@sinclair/typebox").TString;
    details: import("@sinclair/typebox").TString;
}>]>;
export declare const ComputedUntilDto: import("@sinclair/typebox").TObject<{
    computedUntil: import("@sinclair/typebox").TNumber;
}>;
export declare const StatusErrorDto: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const QueryCampaignStatusDto: import("@sinclair/typebox").TObject<{
    computeChainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<{
        PROCESSING: "PROCESSING";
        SUCCESS: "SUCCESS";
        FAILED: "FAILED";
        SKIPPED: "SKIPPED";
    }>>, import("@sinclair/typebox").TEnum<{
        PROCESSING: "PROCESSING";
        SUCCESS: "SUCCESS";
        FAILED: "FAILED";
        SKIPPED: "SKIPPED";
    }>]>>;
}>;
export type DelayModel = typeof DelayDto.static;
export type UpdateStatusModel = typeof UpdateCampaignStatusDto.static;
export type QueryCampaignStatus = typeof QueryCampaignStatusDto.static;
