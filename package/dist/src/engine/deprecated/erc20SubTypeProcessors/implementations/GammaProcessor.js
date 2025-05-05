import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class GammaProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "tokensRaw", call: "tokensRaw", target: "tokenAddress" },
            { key: "tokenBalances", call: "tokenBalances", target: "tokenAddress" },
        ],
        round2: [
            { key: "symbolToken0", call: "symbol", target: "token0" },
            { key: "symbolToken1", call: "symbol", target: "token1" },
            { key: "decimalsToken0", call: "decimals", target: "token0" },
            { key: "decimalsToken1", call: "decimals", target: "token1" },
        ],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    processingRound2(typeInfo) {
        typeInfo.token0 = typeInfo.tokensRaw[0];
        typeInfo.token1 = typeInfo.tokensRaw[1];
        typeInfo.balanceToken0 = typeInfo.tokenBalances[0];
        typeInfo.balanceToken1 = typeInfo.tokenBalances[1];
    }
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const decimalsToken0 = Number(typeInfo.decimalsToken0);
        const decimalsToken1 = Number(typeInfo.decimalsToken1);
        const priceToken0 = (await pricer.get({ symbol: typeInfo.symbolToken0 })) ?? 0;
        const priceToken1 = (await pricer.get({ symbol: typeInfo.symbolToken1 })) ?? 0;
        const balanceToken0 = BN2Number(typeInfo.balanceToken0, decimalsToken0);
        const balanceToken1 = BN2Number(typeInfo.balanceToken1, decimalsToken1);
        let tvl = 0;
        if (priceToken0 !== 0 && priceToken1 !== 0) {
            tvl = priceToken0 * balanceToken0 + priceToken1 * balanceToken1;
        }
        const priceTargetToken = tvl / totalSupply;
        return {
            ...typeInfo,
            priceTargetToken,
            totalSupply,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            tvl,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [
                { symbol: typeInfo.symbolToken0, address: typeInfo.token0 },
                { symbol: typeInfo.symbolToken1, address: typeInfo.token1 },
            ],
        };
    }
    computeRound1(type, typeInfo) {
        return super.computeRound1(type, typeInfo);
    }
    computeRound2(index, type, typeInfo, calls) {
        return super.computeRound2(index, type, typeInfo, calls);
    }
    computeRound3(index, type, typeInfo, calls) {
        return super.computeRound3(index, type, typeInfo, calls);
    }
    computeRound4(index, type, typeInfo, calls, campaign) {
        return super.computeRound4(index, type, typeInfo, calls, campaign);
    }
    async computeRound5(index, type, typeInfo, calls, campaign, pricer) {
        return super.computeRound5(index, type, typeInfo, calls, campaign, pricer);
    }
}
