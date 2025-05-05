import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class BeefyProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "pricePerShare", call: "getPricePerFullShare", target: "tokenAddress" },
            { key: "underlying", call: "want", target: "tokenAddress" },
        ],
        round2: [
            { key: "token0", call: "token0", target: "underlying" },
            { key: "token1", call: "token1", target: "underlying" },
        ],
        round3: [
            { key: "symbolToken0", call: "symbol", target: "token0" },
            { key: "symbolToken1", call: "symbol", target: "token1" },
            { key: "decimalsToken0", call: "decimals", target: "token0" },
            { key: "decimalsToken1", call: "decimals", target: "token1" },
            { key: "balanceToken0", call: "balanceOf", target: "token0", metaData: "underlying" },
            { key: "balanceToken1", call: "balanceOf", target: "token1", metaData: "underlying" },
        ],
        round4: [
            { key: "totalSupply", call: "totalSupply", target: "tokenAddress" },
            { key: "totalSupplyUnderlying", call: "totalSupply", target: "underlying" },
        ],
    };
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const priceToken0 = (await pricer.get({ symbol: typeInfo.symbolToken0 })) ?? 0;
        const priceToken1 = (await pricer.get({ symbol: typeInfo.symbolToken1 })) ?? 0;
        let tvl = 0;
        if (priceToken0 !== 0 && priceToken1 !== 0) {
            tvl =
                priceToken0 * BN2Number(typeInfo.balanceToken0, Number(typeInfo.decimalsToken0)) +
                    priceToken1 * BN2Number(typeInfo.balanceToken1, Number(typeInfo.decimalsToken1));
        }
        const pricePerShare = BN2Number(typeInfo.pricePerShare);
        const priceTargetToken = (pricePerShare * tvl) / BN2Number(typeInfo.totalSupplyUnderlying);
        return {
            ...typeInfo,
            priceTargetToken,
            totalSupply,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            cardName: generateCardName(type, typeInfo, campaign),
            pricePerShare,
            tvl,
            tokensDisplay: [
                { symbol: typeInfo.symbolToken0, address: typeInfo.token0 },
                { symbol: typeInfo.symbolToken1, address: typeInfo.token1 },
            ],
        };
    }
}
