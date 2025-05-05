import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class CurveProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "lp_price", call: "lp_price", target: "tokenAddress" },
            { key: "token0", call: "coin0", target: "tokenAddress" },
            { key: "token1", call: "coin1", target: "tokenAddress" },
            { key: "token2", call: "coin2", target: "tokenAddress", optional: true },
        ],
        round2: [
            { key: "symbolToken0", call: "symbol", target: "token0" },
            { key: "symbolToken1", call: "symbol", target: "token1" },
            { key: "symbolToken2", call: "symbol", target: "token2", optional: true },
        ],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // override computeRound1(): void {}
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const lp_price = BN2Number(typeInfo.lp_price, 18);
        let priceTargetToken = lp_price;
        let tokensDisplay = [];
        if (typeInfo.token2) {
            typeInfo.poolTokens = {
                [typeInfo.token0]: typeInfo.symbolToken0,
                [typeInfo.token1]: typeInfo.symbolToken1,
                [typeInfo.token2]: typeInfo.symbolToken2,
            };
            typeInfo.numberTokens = 3;
            tokensDisplay = [
                { symbol: typeInfo.symbolToken0, address: typeInfo.token0 },
                { symbol: typeInfo.symbolToken1, address: typeInfo.token1 },
                { symbol: typeInfo.symbolToken2, address: typeInfo.token2 },
            ];
        }
        else {
            typeInfo.poolTokens = {
                [typeInfo.token0]: typeInfo.symbolToken0,
                [typeInfo.token1]: typeInfo.symbolToken1,
            };
            typeInfo.numberTokens = 2;
            tokensDisplay = [
                { symbol: typeInfo.symbolToken0, address: typeInfo.token0 },
                { symbol: typeInfo.symbolToken1, address: typeInfo.token1 },
            ];
        }
        if (type === Erc20SubType.curve_2) {
            const prices = [];
            for (const symbol of Object.values(typeInfo.poolTokens)) {
                const price = (await pricer.get({ symbol: symbol })) ?? 0;
                prices.push(price);
            }
            let minPrice = Math.min(...prices);
            if (!minPrice) {
                minPrice = 1;
            }
            priceTargetToken = priceTargetToken * minPrice;
        }
        const tvl = priceTargetToken * totalSupply;
        return {
            ...typeInfo,
            lp_price,
            poolTokens: {
                [typeInfo.token0]: typeInfo.symbolToken0,
                [typeInfo.token1]: typeInfo.symbolToken1,
                [typeInfo.token2]: typeInfo.symbolToken2,
            },
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay,
        };
    }
}
