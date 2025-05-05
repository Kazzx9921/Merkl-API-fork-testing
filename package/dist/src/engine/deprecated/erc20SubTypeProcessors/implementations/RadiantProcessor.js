import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class RadiantProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "underlyingToken", call: "underlying", target: "tokenAddress" },
            { key: "priceBN", call: "getAssetPrice", target: "tokenAddress" },
        ],
        round2: [{ key: "symbolUnderlyingToken", call: "symbol", target: "underlyingToken" }],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // override computeRound1(): void {}
    async processingRound5(_index, type, typeInfo, _calls, campaign, _pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const priceTargetToken = BN2Number(typeInfo.priceBN, 8);
        const tvl = priceTargetToken * totalSupply;
        //  TO DO FIX THE CARD NAME
        //  SEEMS I HAVE DROPPED THE BALL ON THIS ONE
        let cardToken = typeInfo.symbolUnderlyingToken;
        if (campaign.campaignParameters.symbolTargetToken.startsWith("r")) {
            cardToken = campaign.campaignParameters.symbolTargetToken.substring(1);
        }
        let finalSymbol = typeInfo.symbolUnderlyingToken;
        if (typeInfo.symbolUnderlyingToken.toLowerCase().includes("gm") && cardToken.toLowerCase().includes("gm")) {
            // Remove gm from the card name
            finalSymbol = cardToken.substring(2);
        }
        return {
            ...typeInfo,
            priceTargetToken,
            whitelistedSupplyTargetToken,
            totalSupply,
            blacklistedSupply,
            tvl,
            cardName: generateCardName(type, typeInfo, campaign),
            symbolUnderlyingToken: finalSymbol,
            tokensDisplay: [{ symbol: typeInfo.symbolUnderlyingToken, address: typeInfo.underlyingToken }],
        };
    }
    computeRound3(index, type, typeInfo, calls) {
        // This is to enforce type checking
        try {
            return super.computeRound3(index, type, typeInfo, calls);
        }
        catch (e) {
            // usually if this fails its because of native ETH
            return {
                type: type,
                calls: [],
                typeInfo: {
                    ...typeInfo,
                    symbolUnderlyingToken: "ETH",
                },
            };
        }
    }
}
