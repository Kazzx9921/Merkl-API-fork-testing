import type { apiDbClient } from "@db";
import type { Prisma } from "@db/api";
import { type MerklChainId, type UniswapV4PoolType } from "@sdk";
export declare const UniV4ChainIdArray: MerklChainId[];
export declare enum LoggedEntityType {
    EULER = "EULER_VAULT",
    UNISWAP_V4 = "UNISWAP_V4"
}
export type UniV4ChainId = (typeof UniV4ChainIdArray)[number];
export type UniswapV4PoolsReturnType = {
    [chainId in MerklChainId]?: {
        [poolId: string]: UniswapV4PoolType;
    };
};
export type LoggedCreateBody = Prisma.Args<typeof apiDbClient.logged, "createMany">["data"];
export declare const UniswapV4PoolDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    currency0: import("@sinclair/typebox").TString;
    currency1: import("@sinclair/typebox").TString;
    decimalsCurrency0: import("@sinclair/typebox").TNumber;
    decimalsCurrency1: import("@sinclair/typebox").TNumber;
    hooks: import("@sinclair/typebox").TString;
    fetchedAtBlock: import("@sinclair/typebox").TNumber;
    lpFee: import("@sinclair/typebox").TNumber;
    poolId: import("@sinclair/typebox").TString;
    symbolCurrency0: import("@sinclair/typebox").TString;
    symbolCurrency1: import("@sinclair/typebox").TString;
    tickSpacing: import("@sinclair/typebox").TNumber;
}>;
export declare const Bytes32Dto: import("@sinclair/typebox").TObject<{
    poolId: import("@sinclair/typebox").TRegExp;
}>;
export declare const RewardsPerPositionDto: import("@sinclair/typebox").TObject<{
    address: import("@sinclair/typebox").TString;
    chainId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    pool: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    positionId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const UniswapV4PoolsDto: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    currency0: import("@sinclair/typebox").TString;
    currency1: import("@sinclair/typebox").TString;
    decimalsCurrency0: import("@sinclair/typebox").TNumber;
    decimalsCurrency1: import("@sinclair/typebox").TNumber;
    hooks: import("@sinclair/typebox").TString;
    fetchedAtBlock: import("@sinclair/typebox").TNumber;
    lpFee: import("@sinclair/typebox").TNumber;
    poolId: import("@sinclair/typebox").TString;
    symbolCurrency0: import("@sinclair/typebox").TString;
    symbolCurrency1: import("@sinclair/typebox").TString;
    tickSpacing: import("@sinclair/typebox").TNumber;
}>>;
export type RewardsPerPositionModel = typeof RewardsPerPositionDto.static;
