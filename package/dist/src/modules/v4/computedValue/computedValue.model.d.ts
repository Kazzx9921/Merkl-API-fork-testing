import type { Resource } from "../prisma";
export type CampaignComputedFields = keyof Resource<"CampaignComputedValue", "campaignId">["model"];
export type UserComputedFields = keyof Resource<"UserComputedValue", "campaignId" | "address" | "reason">["model"];
export declare const GetCampaignComputedValue: import("@sinclair/typebox").TObject<{
    campaignId: import("@sinclair/typebox").TString;
    field: import("@sinclair/typebox").TString;
}>;
export declare const UpsertCampaignComputedValue: import("@sinclair/typebox").TObject<{
    campaignId: import("@sinclair/typebox").TString;
    value: import("@sinclair/typebox").TNumber;
    field: import("@sinclair/typebox").TString;
}>;
export declare const GetUserComputedValues: import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TString;
    field: import("@sinclair/typebox").TString;
}>;
export declare const UpsertUserComputedValues: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    campaignId: import("@sinclair/typebox").TString;
    address: import("@sinclair/typebox").TString;
    reason: import("@sinclair/typebox").TString;
    value: import("@sinclair/typebox").TNumber;
    field: import("@sinclair/typebox").TString;
}>>;
export type GetCampaignComputedValueModel = typeof GetCampaignComputedValue.static;
export type UpsertCampaignComputedValueModel = typeof UpsertCampaignComputedValue.static;
export type GetUserComputedValuesModel = typeof GetUserComputedValues.static;
export type UpsertUserComputedValuesModel = typeof UpsertUserComputedValues.static;
