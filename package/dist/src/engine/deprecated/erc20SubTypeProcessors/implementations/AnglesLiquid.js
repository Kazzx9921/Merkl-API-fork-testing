import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class AnglesLiquidProcessor extends GenericProcessor {
    rounds = {
        round1: [],
        round2: [],
        round3: [],
        round4: [
            { key: "poolToken", call: "asset", target: "tokenAddress" },
            { key: "totalAssets", call: "totalAssets", target: "tokenAddress" },
            { key: "totalSupply", call: "totalSupply", target: "tokenAddress" },
        ],
    };
    // override computeRound1(): void {}
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const priceUnderlying = (await pricer.get({ symbol: "S" })) ?? 0;
        const tvl = priceUnderlying * BN2Number(typeInfo.totalAssets, 18);
        const priceTargetToken = totalSupply ? tvl / totalSupply : 0;
        const symbolUnderlyingToken = "S";
        return {
            ...typeInfo,
            tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            priceTargetToken,
            totalSupply,
            symbolUnderlyingToken,
            totalAssets: typeInfo.totalAssets,
            poolToken: typeInfo.poolToken,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ symbol: symbolUnderlyingToken, address: typeInfo.poolToken }],
        };
    }
    computeRound1(type, typeInfo) {
        return super.computeRound1(type, typeInfo);
    }
    computeRound2(index, type, typeInfo, calls) {
        return super.computeRound2(index, type, typeInfo, calls);
    }
    computeRound3(index, type, typeInfo, calls) {
        return super.computeRound3(index, type, typeInfo, calls);
    }
    computeRound4(index, type, typeInfo, calls, campaign) {
        return super.computeRound4(index, type, typeInfo, calls, campaign);
    }
    async computeRound5(index, type, typeInfo, calls, campaign, pricer) {
        return super.computeRound5(index, type, typeInfo, calls, campaign, pricer);
    }
}
