import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class ZkSwapThreePoolProcessor extends GenericProcessor {
    rounds = {
        round1: [{ key: "pool", call: "minter", target: "tokenAddress" }],
        round2: [
            { key: "token0Address", call: "coins", target: "pool", metaData: "token0Index" },
            { key: "balance0", call: "balances", target: "pool", metaData: "token0Index" },
            { key: "token1Address", call: "coins", target: "pool", metaData: "token1Index" },
            { key: "balance1", call: "balances", target: "pool", metaData: "token1Index" },
            { key: "token2Address", call: "coins", target: "pool", metaData: "token2Index" },
            { key: "balance2", call: "balances", target: "pool", metaData: "token2Index" },
        ],
        round3: [
            { key: "symbolToken0", call: "symbol", target: "token0Address" },
            { key: "symbolToken1", call: "symbol", target: "token1Address" },
            { key: "symbolToken2", call: "symbol", target: "token2Address" },
            { key: "decimalsToken0", call: "decimals", target: "token0Address" },
            { key: "decimalsToken1", call: "decimals", target: "token1Address" },
            { key: "decimalsToken2", call: "decimals", target: "token2Address" },
        ],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    processingRound2(typeInfo) {
        typeInfo.token0Index = "0";
        typeInfo.token1Index = "1";
        typeInfo.token2Index = "2";
    }
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const decimals0 = Number(typeInfo.decimalsToken0);
        const decimals1 = Number(typeInfo.decimalsToken1);
        const decimals2 = Number(typeInfo.decimalsToken2);
        const amount0 = BN2Number(typeInfo.balance0, decimals0);
        const amount1 = BN2Number(typeInfo.balance1, decimals1);
        const amount2 = BN2Number(typeInfo.balance2, decimals2);
        // FIXMEME issue with token0Price
        const token0Price = (await pricer.get({ symbol: typeInfo.symbolToken0 })) ?? 0;
        const token1Price = (await pricer.get({ symbol: typeInfo.symbolToken1 })) ?? 0;
        const token2Price = (await pricer.get({ symbol: typeInfo.symbolToken2 })) ?? 0;
        const tvl = token0Price * amount0 + token1Price * amount1 + token2Price * amount2;
        const priceTargetToken = tvl / totalSupply;
        const { balance0, balance1, balance2, decimalsToken0, decimalsToken1, decimalsToken2, ...rest } = typeInfo;
        return {
            ...rest,
            blacklistedSupply,
            cardName: generateCardName(type, typeInfo, campaign),
            priceTargetToken: priceTargetToken,
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            tokensDisplay: [
                { symbol: typeInfo.symbolToken0, address: typeInfo.token0Address },
                { symbol: typeInfo.symbolToken1, address: typeInfo.token1Address },
                { symbol: typeInfo.symbolToken2, address: typeInfo.token2Address },
            ],
        };
    }
}
