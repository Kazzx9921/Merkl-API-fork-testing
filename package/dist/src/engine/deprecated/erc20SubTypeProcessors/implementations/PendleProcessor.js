import { generateCardName } from "@/utils/generateCardName";
import { GenericProcessor } from "../GenericProcessor";
export class PendleProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "SYToken", call: "readTokens0", target: "tokenAddress" },
            { key: "totalSupply", call: "totalSupply", target: "tokenAddress" },
        ],
        round2: [{ key: "underlying", call: "underlying", target: "SYToken" }],
        round3: [{ key: "symbolUnderlyingToken", call: "symbol", target: "underlying" }],
        round4: [],
    };
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const priceTargetToken = (await pricer.get({
            symbol: typeInfo.tokenAddress,
        })) ?? 0;
        const tvl = priceTargetToken * totalSupply;
        return {
            ...typeInfo,
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            priceTargetToken: priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign),
            blacklistedSupply,
            tokensDisplay: [{ symbol: typeInfo.symbolUnderlyingToken, address: typeInfo.underlying }],
        };
    }
}
