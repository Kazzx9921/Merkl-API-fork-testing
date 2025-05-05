import { GenericProcessor } from "../GenericProcessor";
import { fetchSpliceInformation } from "../helpers/spliceTVL";
export class SpliceProcessor extends GenericProcessor {
    // override computeRound1(): void {}
    async processingRound5(_index, _type, typeInfo, _calls, campaign, _pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const { symbolUnderlyingToken, address, priceTargetToken, tvl } = await fetchSpliceInformation(campaign.campaignParameters.targetToken);
        return {
            ...typeInfo,
            totalSupply,
            priceTargetToken,
            tvl,
            whitelistedSupplyTargetToken,
            blacklistedSupply,
            cardName: `Supply ${symbolUnderlyingToken} on Splice`,
            tokenAddress: typeInfo.tokenAddress,
            tokensDisplay: [{ symbol: symbolUnderlyingToken, address: address }],
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
