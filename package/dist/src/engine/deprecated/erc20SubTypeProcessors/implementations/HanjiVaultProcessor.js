import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class HanjiVaultProcessor extends GenericProcessor {
    rounds = {
        round1: [{ key: "numberTokens", call: "getTokensCount", target: "owner" }],
        round2: [],
        round3: [],
        round4: [
            { key: "tvl", call: "getTotalValue", target: "helper", metaData: "owner" },
            { key: "totalSupply", call: "totalSupply", target: "tokenAddress" },
        ],
    };
    // override computeRound1(): void {}
    processingRound2(typeInfo) {
        typeInfo.helper = "0x6b285F02DE1a48B3D58Ab65759494f8ab83cF64d";
        typeInfo.numberTokens = Number(typeInfo.numberTokens);
        for (let i = 0; i < typeInfo.numberTokens; i++) {
            typeInfo[`${i}`] = i.toString();
            this.rounds.round2 = this.rounds.round2.concat([
                { key: `token${i}`, call: "tokens", target: "owner", metaData: i.toString() },
            ]);
        }
    }
    processingRound3(typeInfo) {
        for (let i = 0; i < typeInfo.numberTokens; i++) {
            this.rounds.round3 = this.rounds.round3.concat([{ key: `symbolToken${i}`, call: "symbol", target: `token${i}` }]);
        }
    }
    computeRound3(index, type, typeInfo, calls) {
        for (let i = 0; i < typeInfo.numberTokens; i++) {
            this.rounds.round2 = this.rounds.round2.concat([
                { key: `token${i}`, call: "tokens", target: "tokenAddress", metaData: i.toString() },
            ]);
        }
        return super.computeRound3(index, type, typeInfo, calls);
    }
    computeRound4(index, type, typeInfo, calls, campaign) {
        for (let i = 0; i < typeInfo.numberTokens; i++) {
            this.rounds.round3 = this.rounds.round3.concat([{ key: `symbolToken${i}`, call: "symbol", target: `token${i}` }]);
        }
        return super.computeRound4(index, type, typeInfo, calls, campaign);
    }
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const tokensDisplay = [];
        for (let i = 0; i < typeInfo.numberTokens; i++) {
            tokensDisplay.push({ symbol: typeInfo[`symbolToken${i}`], address: typeInfo[`token${i}`] });
        }
        const tvl = BN2Number(typeInfo.tvl, 18);
        const priceTargetToken = tvl / totalSupply;
        return {
            ...typeInfo,
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay,
        };
    }
}
