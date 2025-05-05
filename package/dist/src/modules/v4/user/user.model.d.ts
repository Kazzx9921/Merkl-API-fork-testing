import type { Resource } from "@/modules/v4/prisma";
/**
 * User
 * @description A user represented by its address
 * @see {@link Resource}
 */
export type User = Resource<"User">;
export type Creator = Resource<"Creator">;
export declare const UserRewardRouteDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TTransform<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>]>, number[]>;
    reloadChainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    test: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    claimableOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export declare const UserRewardsResourceDto: import("@sinclair/typebox").TObject<{
    chain: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        name: import("@sinclair/typebox").TString;
        icon: import("@sinclair/typebox").TString;
    }>;
    rewards: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        root: import("@sinclair/typebox").TString;
        recipient: import("@sinclair/typebox").TString;
        proofs: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        token: import("@sinclair/typebox").TObject<{
            address: import("@sinclair/typebox").TString;
            chainId: import("@sinclair/typebox").TNumber;
            symbol: import("@sinclair/typebox").TString;
            decimals: import("@sinclair/typebox").TNumber;
        }>;
        breakdowns: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            reason: import("@sinclair/typebox").TString;
            amount: import("@sinclair/typebox").TString;
            claimed: import("@sinclair/typebox").TString;
            pending: import("@sinclair/typebox").TString;
            campaignId: import("@sinclair/typebox").TString;
        }>>;
        claimed: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBigInt, import("@sinclair/typebox").TString]>;
        amount: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBigInt, import("@sinclair/typebox").TString]>;
        pending: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBigInt, import("@sinclair/typebox").TString]>;
    }>>;
}>;
export declare const UserUniqueDto: import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TString;
}>;
export declare const OptionalChainIdDto: import("@sinclair/typebox").TObject<{
    chainIds: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TTransform<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>]>, number[]>>;
    reloadChainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    test: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    claimableOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export declare const UserDto: import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TString;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export declare const CreatorDto: import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TString;
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export declare const GetManyUserQuery: import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    items: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const CheckTerms: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
}>;
export declare const UserTagsDto: import("@sinclair/typebox").TObject<{
    tags: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export type UserUniqueModel = typeof UserUniqueDto.static;
export type UserModel = typeof UserDto.static;
export type OptionalChainIdModel = typeof OptionalChainIdDto.static;
export type GetManyUserModel = typeof GetManyUserQuery.static;
