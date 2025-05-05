import type { Resource } from "@/modules/v4/prisma";
import { type DistributionType } from "@db/api";
/**
 * Apr Record
 * @description Describes one apr snapshot for an opportunity
 * @see {@link Resource}
 */
export type AprRecord = Resource<"AprRecord", "id" | "opportunityId", {
    breakdowns: AprBreakdown["model"][];
}>;
/**
 * Apr Breakdown
 * @description Describes one apr fraction of record
 * @see {@link Resource}
 */
export type AprBreakdown = Resource<"AprBreakdown", "id" | "aprRecordId", {
    distributionType?: DistributionType;
}>;
export declare const AprBreakdownResourceDto: import("@sinclair/typebox").TObject<{
    identifier: import("@sinclair/typebox").TString;
    type: import("@sinclair/typebox").TEnum<{
        CAMPAIGN: "CAMPAIGN";
        TOKEN: "TOKEN";
        PROTOCOL: "PROTOCOL";
    }>;
    value: import("@sinclair/typebox").TNumber;
}>;
export declare const AprRecordResourceDto: import("@sinclair/typebox").TObject<{
    cumulated: import("@sinclair/typebox").TNumber;
    timestamp: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBigInt, import("@sinclair/typebox").TString]>;
    breakdowns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        identifier: import("@sinclair/typebox").TString;
        type: import("@sinclair/typebox").TEnum<{
            CAMPAIGN: "CAMPAIGN";
            TOKEN: "TOKEN";
            PROTOCOL: "PROTOCOL";
        }>;
        value: import("@sinclair/typebox").TNumber;
    }>>;
}>;
