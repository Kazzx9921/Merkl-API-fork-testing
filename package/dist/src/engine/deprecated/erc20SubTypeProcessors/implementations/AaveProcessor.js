import { generateCardName } from "@/utils/generateCardName";
import { GenericProcessor } from "../GenericProcessor";
export class AaveProcessor extends GenericProcessor {
    rounds = {
        round1: [{ key: "underlying", call: "underlying", target: "tokenAddress" }],
        round2: [{ key: "symbolUnderlyingToken", call: "symbol", target: "underlying" }],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // // override computeRound1(): void {}
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const priceTargetToken = (await pricer.get({ symbol: typeInfo.symbolUnderlyingToken })) ?? 0;
        const tvl = priceTargetToken * totalSupply;
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
