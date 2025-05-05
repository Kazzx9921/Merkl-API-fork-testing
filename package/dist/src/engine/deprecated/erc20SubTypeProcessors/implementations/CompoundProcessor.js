import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class CompoundProcessor extends GenericProcessor {
    rounds = {
        round1: [{ key: "baseToken", call: "baseToken", target: "tokenAddress" }],
        round2: [
            { key: "totalBorrow", call: "totalAssets", target: "tokenAddress" },
            { key: "balanceBaseToken", call: "balanceOf", target: "baseToken", metaData: "tokenAddress" },
            { key: "symbolBaseToken", call: "symbol", target: "baseToken" },
            { key: "decimalsBaseToken", call: "decimals", target: "baseToken" },
        ],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    // override computeRound1(): void {}
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const totalBorrow = BN2Number(typeInfo.totalBorrow, Number(typeInfo.decimalsBaseToken));
        const balanceBaseToken = BN2Number(typeInfo.balanceBaseToken, Number(typeInfo.decimalsBaseToken));
        const baseTokenPrice = (await pricer.get({ symbol: typeInfo.symbolBaseToken })) ?? 0;
        const tvl = baseTokenPrice * (totalBorrow + balanceBaseToken);
        const priceTargetToken = tvl / totalSupply;
        return {
            ...typeInfo,
            totalSupply,
            tvl: tvl,
            whitelistedSupplyTargetToken,
            totalBorrow,
            blacklistedSupply,
            balanceBaseToken,
            priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ symbol: typeInfo.symbolBaseToken, address: typeInfo.baseToken }],
        };
    }
}
