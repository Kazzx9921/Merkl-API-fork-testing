import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class HoldStationProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "tvl", call: "tvl", target: "tokenAddress" },
            { key: "underlying", call: "underlying", target: "tokenAddress" },
        ],
        round2: [
            { key: "decimalsUnderlying", call: "decimals", target: "underlying" },
            { key: "symbolUnderlyingToken", call: "symbol", target: "underlying" },
        ],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const decimalsUnderlying = Number(typeInfo.decimalsUnderlying);
        const amountUnderlying = BN2Number(typeInfo.tvl, decimalsUnderlying);
        const underlyingPrice = (await pricer.get({ symbol: typeInfo.symbolUnderlyingToken })) ?? 0;
        const tvl = underlyingPrice * amountUnderlying;
        const priceTargetToken = tvl / totalSupply;
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
