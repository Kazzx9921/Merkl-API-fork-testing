import type { Resource } from "@/modules/v4/prisma";
/**
 * Chain
 * @description Metadata for each supported network
 * @see {@link Resource}
 */
export type Chain = Resource<"Chain">;
export declare const ChainResourceDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    name: import("@sinclair/typebox").TString;
    icon: import("@sinclair/typebox").TString;
}>;
export declare const GetChainQueryDto: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    test: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export declare const ChainUniqueDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
}>;
export declare const ChainUniqueOptionalDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const ChainArrayOptionalDto: import("@sinclair/typebox").TObject<{
    chainIds: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TTransform<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>]>, number[]>>;
}>;
export declare const UpdateChainDto: import("@sinclair/typebox").TObject<{
    icon: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    dailyRewards: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    liveCampaigns: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const CreateChainDto: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    name: import("@sinclair/typebox").TString;
    icon: import("@sinclair/typebox").TString;
    explorerType: import("@sinclair/typebox").TEnum<{
        ETHERSCAN: "ETHERSCAN";
        BLOCKSCOUT: "BLOCKSCOUT";
    }>;
    explorerUrl: import("@sinclair/typebox").TString;
}>;
export type ChainUniqueModel = typeof ChainUniqueDto.static;
export type ChainSearchDto = typeof GetChainQueryDto.static;
export type UpdateChainModel = typeof UpdateChainDto.static;
export type CreateChainModel = typeof CreateChainDto.static;
