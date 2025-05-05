import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class MetamorphoProcessor extends GenericProcessor {
    rounds = {
        round1: [{ key: "underlying", call: "underlying", target: "tokenAddress" }],
        round2: [{ key: "symbolUnderlyingToken", call: "symbol", target: "underlying" }],
        round3: [
            { key: "decimalsUnderlyingToken", call: "decimals", target: "underlying" },
            { key: "totalSupply", call: "totalSupply", target: "tokenAddress" },
        ],
        round4: [{ key: "totalAssets", call: "totalAssets", target: "tokenAddress" }],
    };
    // override computeRound1(): void {}
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const totalAssets = BN2Number(typeInfo.totalAssets, Number(typeInfo.decimalsUnderlyingToken));
        const underlyingTokenPrice = (await pricer.get({ symbol: typeInfo.symbolUnderlyingToken })) ?? 0;
        const tvl = Number(totalAssets) * underlyingTokenPrice;
        return {
            ...typeInfo,
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            priceTargetToken: underlyingTokenPrice,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ symbol: typeInfo.symbolUnderlyingToken, address: typeInfo.underlying }],
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
