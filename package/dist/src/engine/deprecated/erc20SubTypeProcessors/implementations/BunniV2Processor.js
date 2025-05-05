import { generateCardName } from "@/utils/generateCardName";
import { BN2Number, computeUniswapV4PoolId } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class BunniV2Processor extends GenericProcessor {
    rounds = {
        round1: [
            {
                key: "hub",
                call: "hub",
                target: "tokenAddress",
            },
            {
                key: "poolKey",
                call: "poolKey",
                target: "tokenAddress",
            },
            {
                key: "token0",
                call: "token0",
                target: "tokenAddress",
            },
            {
                key: "token1",
                call: "token1",
                target: "tokenAddress",
            },
        ],
        round2: [
            {
                key: "poolState",
                call: "poolState",
                target: "hub",
                metaData: "poolId",
            },
        ],
        round3: [
            {
                key: "decimalsToken0",
                call: "decimals",
                target: "token0",
            },
            {
                key: "symbolToken0",
                call: "symbol",
                target: "token0",
            },
            {
                key: "decimalsToken1",
                call: "decimals",
                target: "token1",
            },
            {
                key: "symbolToken1",
                call: "symbol",
                target: "token1",
            },
        ],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    processingRound2(typeInfo) {
        typeInfo.poolId = computeUniswapV4PoolId(typeInfo.poolKey);
    }
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const decimalsToken0 = Number(typeInfo.decimalsToken0);
        const decimalsToken1 = Number(typeInfo.decimalsToken1);
        const amount0 = BN2Number(typeInfo.poolState.rawBalance0, decimalsToken0) +
            BN2Number(typeInfo.poolState.reserve0, decimalsToken0);
        const amount1 = BN2Number(typeInfo.poolState.rawBalance1, decimalsToken0) +
            BN2Number(typeInfo.poolState.reserve1, decimalsToken1);
        const token0PRice = (await pricer.get({ symbol: typeInfo.symbolToken0 })) ?? 0;
        const token1Price = (await pricer.get({ symbol: typeInfo.symbolToken1 })) ?? 0;
        const tvl = token0PRice * amount0 + token1Price * amount1;
        const priceTargetToken = tvl / totalSupply;
        return {
            ...typeInfo,
            balance0: amount0.toString(),
            balance1: amount1.toString(),
            blacklistedSupply,
            cardName: generateCardName(type, typeInfo, campaign),
            priceTargetToken: priceTargetToken,
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            tokensDisplay: [
                { symbol: typeInfo.symbolToken0, address: typeInfo.token0 },
                { symbol: typeInfo.symbolToken1, address: typeInfo.token1 },
            ],
        };
    }
}
