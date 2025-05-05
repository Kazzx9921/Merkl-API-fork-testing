export declare const RootByTimestampsDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    fromTimestamp: import("@sinclair/typebox").TString;
    toTimestamp: import("@sinclair/typebox").TString;
}>;
export declare const CreateRootDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    root: import("@sinclair/typebox").TString;
    timestamp: import("@sinclair/typebox").TNumber;
    epoch: import("@sinclair/typebox").TNumber;
}>;
export type RootByTimestampModel = typeof RootByTimestampsDto.static;
export type CreateRootModel = typeof CreateRootDto.static;
