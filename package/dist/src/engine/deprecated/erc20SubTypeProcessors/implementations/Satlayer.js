import { generateCardName } from "@/utils/generateCardName";
import { GenericProcessor } from "../GenericProcessor";
export class SatlayerProcessor extends GenericProcessor {
    rounds = {
        round1: [{ key: "symbol", call: "symbol", target: "tokenAddress" }],
        round2: [],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // // override computeRound1(): void {}
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        typeInfo.symbolUnderlyingToken = typeInfo.symbol.replace("sat", "");
        const priceUnderlying = (await pricer.get({ symbol: typeInfo.symbolUnderlyingToken })) ?? 0;
        const tvl = priceUnderlying * totalSupply;
        const priceTargetToken = priceUnderlying;
        return {
            ...typeInfo,
            whitelistedSupplyTargetToken,
            tvl: tvl,
            priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign),
            blacklistedSupply,
            totalSupply,
            tokensDisplay: [{ symbol: typeInfo.symbolUnderlyingToken, address: typeInfo.underlying }],
        };
    }
}
