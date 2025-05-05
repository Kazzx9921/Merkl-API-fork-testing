import { UniswapV4Addresses } from "@sdk";
import { t } from "elysia";
export const UniV4ChainIdArray = Object.keys(UniswapV4Addresses).map((x) => Number(x));
export var LoggedEntityType;
(function (LoggedEntityType) {
    LoggedEntityType["EULER"] = "EULER_VAULT";
    LoggedEntityType["UNISWAP_V4"] = "UNISWAP_V4";
})(LoggedEntityType || (LoggedEntityType = {}));
// DTOs
// const UniswapV4PoolKeyDto = t.Object({
//   currency0: t.String(),
//   currency1: t.String(),
//   fee: t.Numeric(),
//   tickSpacing: t.Numeric(),
//   hooks: t.String(),
// });
export const UniswapV4PoolDto = t.Object({
    chainId: t.Numeric(), // Assuming MerklChainId is a numeric type
    currency0: t.String(),
    currency1: t.String(),
    decimalsCurrency0: t.Numeric(),
    decimalsCurrency1: t.Numeric(),
    hooks: t.String(),
    fetchedAtBlock: t.Numeric(),
    lpFee: t.Numeric(),
    poolId: t.String(),
    symbolCurrency0: t.String(),
    symbolCurrency1: t.String(),
    tickSpacing: t.Numeric(),
});
export const Bytes32Dto = t.Object({
    poolId: t.RegExp(/^0x[a-fA-F0-9]{64}$/, {
        description: "A 32-byte hexadecimal string (bytes32)",
    }),
});
export const RewardsPerPositionDto = t.Object({
    address: t.String({ description: "Address of the rewarded user" }),
    chainId: t.Optional(t.Numeric({ description: "Filter on Uniswap pool on a given chain. Default: returns rewards for all chains." })),
    pool: t.Optional(t.String({
        description: "Address Or Id of the Uniswap pool. Default: returns rewards for all pools.",
    })),
    positionId: t.Optional(t.String({
        description: "PositionId of the Uniswap position. Can be a tokenId if the position is an NFT or a bytes32 id if held directly on the pool. Default: returns rewards for all positions on the pools.",
    })),
});
export const UniswapV4PoolsDto = t.Record(t.String(), UniswapV4PoolDto);
