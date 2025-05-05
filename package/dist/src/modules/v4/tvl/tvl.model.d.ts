import type { Resource } from "@/modules/v4/prisma";
/**
 * Tvl Record
 * @description Describes one tvl snapshot for an opportunity
 * @see {@link Resource}
 */
export type TvlRecord = Resource<"TVLRecord", "id" | "opportunityId", {
    breakdowns: TvlBreakdown["model"][];
}>;
/**
 * Tvl Breakdown
 * @description Describes one tvl fraction of record
 * @see {@link Resource}
 */
export type TvlBreakdown = Resource<"TVLBreakdown", "id" | "tvlRecordId">;
export declare const TvlBreakdownResourceDto: import("@sinclair/typebox").TObject<{
    identifier: import("@sinclair/typebox").TString;
    type: import("@sinclair/typebox").TEnum<{
        TOKEN: "TOKEN";
        PROTOCOL: "PROTOCOL";
    }>;
    value: import("@sinclair/typebox").TNumber;
}>;
export declare const TvlRecordResourceDto: import("@sinclair/typebox").TObject<{
    total: import("@sinclair/typebox").TNumber;
    timestamp: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBigInt, import("@sinclair/typebox").TString]>;
    breakdowns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        identifier: import("@sinclair/typebox").TString;
        type: import("@sinclair/typebox").TEnum<{
            TOKEN: "TOKEN";
            PROTOCOL: "PROTOCOL";
        }>;
        value: import("@sinclair/typebox").TNumber;
    }>>;
}>;
