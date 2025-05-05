export declare const getEulerBoostBody: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    addresses: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TString;
    score: import("@sinclair/typebox").TString;
}>>]>;
export declare const getZksyncBoost: import("@sinclair/typebox").TObject<{
    protocol: import("@sinclair/typebox").TString;
    target: import("@sinclair/typebox").TString;
}>;
export type getZksyncBoostModel = typeof getZksyncBoost.static;
export type getEulerBoostBodyModel = typeof getEulerBoostBody.static;
