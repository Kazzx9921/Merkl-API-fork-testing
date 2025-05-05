import { TokenService } from "@/modules/v4/token/token.service";
import { TvlType } from "@db/api";
import { BN2Number, ChainInteractionService, EulerEVKInterface, EulerSubCampaignType, bigIntToNumber, } from "@sdk";
export class EulerTVLBuilder {
    async build(computeChainId, campaigns) {
        const tvls = [];
        const calls = [];
        for (const campaign of campaigns) {
            const { campaignParameters, campaignId } = campaign;
            const { evkAddress, subCampaignType } = campaignParameters;
            if (subCampaignType === EulerSubCampaignType.LEND) {
                calls.push({
                    callData: EulerEVKInterface.encodeFunctionData("totalAssets"),
                    target: evkAddress,
                    key: `totalUnderlying_${campaignId}`,
                    decoder: (data) => BigInt(EulerEVKInterface.decodeFunctionResult("totalAssets", data)[0].toString()),
                });
            }
            else {
                calls.push({
                    callData: EulerEVKInterface.encodeFunctionData("totalBorrows"),
                    target: evkAddress,
                    key: `totalUnderlying_${campaignId}`,
                    decoder: (data) => BigInt(EulerEVKInterface.decodeFunctionResult("totalBorrows", data)[0].toString()),
                });
            }
        }
        const result = await ChainInteractionService(computeChainId).fetchAndDecodeObject(calls);
        for (const [_, campaign] of campaigns.entries()) {
            const { campaignId } = campaign;
            const totalAssets = result[`totalUnderlying_${campaignId}`];
            const underlylingTokenAddress = campaign.campaignParameters.addressAsset;
            const underlyingToken = await TokenService.findUniqueFillOrThrow({
                chainId: computeChainId,
                address: underlylingTokenAddress,
            });
            if (!underlyingToken.decimals || !underlyingToken.price) {
                throw new Error(`Missing decimals or price for token ${underlylingTokenAddress}`);
            }
            const tvl = bigIntToNumber(totalAssets, underlyingToken.decimals) * underlyingToken.price;
            tvls.push({
                campaign,
                tvl,
                tvlBreakdown: [
                    {
                        identifier: underlyingToken.id,
                        type: TvlType.TOKEN,
                        value: BN2Number(totalAssets, underlyingToken.decimals),
                    },
                ],
            });
        }
        return tvls;
    }
}
