export declare const AddBlacklistDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    userAddress: import("@sinclair/typebox").TString;
    poolAddress: import("@sinclair/typebox").TString;
    reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const CheckBlacklistDto: import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TString;
}>;
export declare const RemoveBlacklistDto: import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TString;
}>;
export type AddBlacklistModel = typeof AddBlacklistDto.static & {
    id: string;
};
