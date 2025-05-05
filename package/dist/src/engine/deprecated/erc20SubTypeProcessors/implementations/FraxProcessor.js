import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { GenericProcessor } from "../GenericProcessor";
export class FraxProcessor extends GenericProcessor {
    rounds = {
        round1: [
            { key: "underlying", call: "underlying", target: "tokenAddress" },
            { key: "sharePrice", call: "pricePerShare", target: "tokenAddress" },
        ],
        round2: [
            { key: "symbolUnderlyingToken", call: "symbol", target: "underlying" },
            { key: "decimalsUnderlyingToken", call: "decimals", target: "underlying" },
        ],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const sharePrice = BN2Number(typeInfo.sharePrice, 18);
        const priceUnderlying = (await pricer.get({ symbol: typeInfo.symbolUnderlyingToken })) ?? 1;
        let priceTargetToken = 0;
        let tvl = 0;
        if (type === Erc20SubType.silostaking) {
            priceTargetToken = priceUnderlying;
            tvl = priceTargetToken * BN2Number(totalSupply, campaign.campaignParameters.decimalsTargetToken);
        }
        tvl = sharePrice * totalSupply * priceUnderlying;
        priceTargetToken = tvl / totalSupply;
        return {
            ...typeInfo,
            totalSupply,
            tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            sharePrice,
            priceTargetToken,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ symbol: typeInfo.symbolUnderlyingToken, address: typeInfo.underlying }],
        };
    }
}
