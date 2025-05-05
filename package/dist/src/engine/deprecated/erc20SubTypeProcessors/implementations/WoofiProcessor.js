import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class WoofiProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "pricePerShare", call: "getPricePerFullShare", target: "tokenAddress" },
            { key: "underlying", call: "want", target: "tokenAddress" },
        ],
        round2: [
            { key: "symbolUnderlyingToken", call: "symbol", target: "underlying" },
            { key: "totalSupply", call: "totalSupply", target: "tokenAddress" },
            { key: "decimalsToken", call: "decimals", target: "underlying" },
        ],
        round3: [],
        round4: [],
    };
    // override computeRound1(): void {}
    async processingRound5(index, type, typeInfo, calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const priceToken = (await pricer.get({ symbol: typeInfo.symbolUnderlyingToken })) ?? 0;
        let normalizedFactor = 1;
        if (Number(typeInfo.decimalsToken) < campaign.campaignParameters.decimalsTargetToken) {
            normalizedFactor = 10 ** (campaign.campaignParameters.decimalsTargetToken - Number(typeInfo.decimalsToken));
        }
        const pricePerShare = BN2Number(typeInfo.pricePerShare);
        const priceTargetToken = priceToken * pricePerShare * normalizedFactor;
        const tvl = priceTargetToken * totalSupply;
        return {
            ...typeInfo,
            priceTargetToken,
            totalSupply,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            cardName: generateCardName(type, typeInfo, campaign),
            pricePerShare,
            tvl,
            tokensDisplay: [{ symbol: typeInfo.symbolUnderlyingToken, address: typeInfo.underlying }],
        };
    }
}
