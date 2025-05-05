import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class StabilityProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "price", call: "price", target: "tokenAddress" },
            { key: "name", call: "name", target: "tokenAddress" },
        ],
        round2: [],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // // override computeRound1(): void {}
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const priceTargetToken = BN2Number(typeInfo.price, 18);
        const tvl = priceTargetToken * totalSupply;
        return {
            ...typeInfo,
            whitelistedSupplyTargetToken,
            tvl: tvl,
            priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign),
            blacklistedSupply,
            totalSupply,
            tokensDisplay: [],
        };
    }
}
