import { generateCardName } from "@/utils/generateCardName";
import { GenericProcessor } from "../GenericProcessor";
export class xU308Processor extends GenericProcessor {
    rounds = {
        round1: [],
        round2: [
            { key: "_token0", call: "token0", target: "pool" },
            { key: "_token1", call: "token1", target: "pool" },
            { key: "sqrtPriceX96", call: "sqrtPriceX96", target: "pool" },
        ],
        round3: [
            { key: "symbolToken0", call: "symbol", target: "_token0" },
            { key: "symbolToken1", call: "symbol", target: "_token1" },
            { key: "decimalsToken0", call: "decimals", target: "_token0" },
            { key: "decimalsToken1", call: "decimals", target: "_token1" },
            { key: "balanceToken0", call: "balanceOf", target: "_token0", metaData: "pool" },
            { key: "balanceToken1", call: "balanceOf", target: "_token1", metaData: "pool" },
        ],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // override computeRound1(): void {}
    processingRound2(typeInfo) {
        typeInfo.pool = "0xB387D0A73619791420De4a1e5e710023Cb0f49c0";
    }
    async processingRound5(_index, type, typeInfo, _calls, campaign, _pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const srtPrice = BigInt(typeInfo.sqrtPriceX96);
        const price = Number(srtPrice) ** 2 / 2 ** 192;
        const priceTargetToken = price * 10 ** 12;
        const tvl = priceTargetToken * totalSupply;
        return {
            ...typeInfo,
            tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            priceTargetToken,
            totalSupply,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ symbol: campaign.campaignParameters.symbolTargetToken, address: typeInfo.tokenAddress }],
        };
    }
}
