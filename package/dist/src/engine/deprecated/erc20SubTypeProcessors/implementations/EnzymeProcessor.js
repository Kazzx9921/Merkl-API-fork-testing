import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class EnzymeProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "exchangeRateRaw", call: "calcNetShareValue", target: "fundValueCalculator", metaData: "tokenAddress" },
        ],
        round2: [{ key: "symbolUnderlyingToken", call: "symbol", target: "underlying" }],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const priceUnderlying = (await pricer.get({ symbol: typeInfo.symbolUnderlyingToken })) ?? 0;
        const exchangeRate = BN2Number(typeInfo.exchangeRate, 18);
        const priceTargetToken = priceUnderlying * exchangeRate;
        const tvl = priceTargetToken * totalSupply;
        return {
            ...typeInfo,
            tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            priceTargetToken,
            totalSupply,
            exchangeRate,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ symbol: typeInfo.symbolUnderlyingToken, address: typeInfo.underlying }],
        };
    }
    processingRound2(typeInfo) {
        typeInfo.underlying = typeInfo.exchangeRateRaw[0];
        typeInfo.exchangeRate = typeInfo.exchangeRateRaw[1];
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
