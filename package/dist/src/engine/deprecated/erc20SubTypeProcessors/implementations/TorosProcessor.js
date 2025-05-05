import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class TorosProcessor extends GenericProcessor {
    rounds = {
        round1: [],
        round2: [],
        round3: [],
        round4: [
            { key: "totalSupply", call: "totalSupply", target: "tokenAddress" },
            { key: "tokenPrice", call: "tokenPrice", target: "tokenAddress" },
        ],
    };
    // override computeRound1(): void {}
    async processingRound5(_index, type, typeInfo, _calls, campaign, _pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const priceTargetToken = BN2Number(typeInfo.tokenPrice, 18);
        const tvl = priceTargetToken * totalSupply;
        let symbolUnderlyingToken = "unknown";
        const match = typeInfo.name.match(/\b[A-Z]+\b/g);
        symbolUnderlyingToken = match ? match[0] : "unknown";
        return {
            ...typeInfo,
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            priceTargetToken,
            symbolUnderlyingToken,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ symbol: symbolUnderlyingToken, address: typeInfo.tokenAddress }],
        };
    }
}
