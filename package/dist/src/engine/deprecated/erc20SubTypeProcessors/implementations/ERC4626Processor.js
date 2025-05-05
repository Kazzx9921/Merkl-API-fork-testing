import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class ERC4626Processor extends GenericProcessor {
    rounds = {
        round1: [{ key: "asset", call: "asset", target: "tokenAddress" }],
        round2: [
            { key: "decimalsAsset", call: "decimals", target: "asset" },
            { key: "symbolAsset", call: "symbol", target: "asset" },
        ],
        round3: [],
        round4: [
            { key: "totalSupply", call: "totalSupply", target: "tokenAddress" },
            { key: "totalAssets", call: "totalAssets", target: "tokenAddress" },
        ],
    };
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const priceAsset = (await pricer.get({
            symbol: typeInfo.symbolAsset,
        })) ?? 0;
        const decimalsAsset = Number.parseInt(typeInfo.decimalsAsset);
        const amountAsset = BN2Number(typeInfo.totalAssets, decimalsAsset);
        const tvl = priceAsset * amountAsset;
        const priceTargetToken = tvl / totalSupply;
        return {
            ...typeInfo,
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ symbol: typeInfo.symbolAsset, address: typeInfo.asset }],
        };
    }
}
