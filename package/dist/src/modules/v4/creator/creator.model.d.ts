import type { Resource } from "@/modules/v4/prisma";
/**
 * Campaign Creator (Client)
 * @description A group of user that represent a campaign creator
 * @see {@link Resource}
 */
export type Creator = Resource<"Creator">;
export declare const CreatorDto: import("@sinclair/typebox").TObject<{
    addresses: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    id: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    rebateFee: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const CreateCreatorDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    addresses: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TString;
}>;
export declare const GetManyCreatorQuery: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    address: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const UpdateCreatorDto: import("@sinclair/typebox").TObject<{
    addresses: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TString;
}>;
export declare const CreatorAddressDto: import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TString;
}>;
export declare const CampaignIdDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
}>;
export declare const CampaignStatusDto: import("@sinclair/typebox").TEnum<{
    PAST: "PAST";
    LIVE: "LIVE";
    FUTURE: "FUTURE";
}>;
export declare const CampaignQueryDto: import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<{
        PAST: "PAST";
        LIVE: "LIVE";
        FUTURE: "FUTURE";
    }>>;
}>;
export declare const CreatorIdDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
}>;
export declare const UpdateCreatorRebateDto: import("@sinclair/typebox").TObject<{
    rebate: import("@sinclair/typebox").TNumber;
}>;
export type CreatorModel = typeof CreatorDto.static;
export type GetManyCreatorModel = typeof GetManyCreatorQuery.static;
export type UpdateCreatorDto = typeof UpdateCreatorDto.static;
export type UpdateCreatorRebateDto = typeof UpdateCreatorRebateDto.static;
