import { TokenService } from "@/modules/v4/token/token.service";
import { TvlType } from "@db/api";
import { BN2Number, ChainInteractionService, ERC4626Interface, GearboxVaultInterface, bigIntToNumber, } from "@sdk";
export class GearboxTVLBuilder {
    async build(computeChainId, campaigns) {
        const tvls = [];
        const calls = [];
        for (const campaign of campaigns) {
            const { targetToken } = campaign.campaignParameters;
            calls.push({
                allowFailure: true,
                callData: GearboxVaultInterface.encodeFunctionData("underlyingToken"),
                target: targetToken,
            }, {
                allowFailure: true,
                callData: ERC4626Interface.encodeFunctionData("totalAssets"),
                target: targetToken,
            });
        }
        const result = await ChainInteractionService(computeChainId).fetchState(calls);
        for (const [index, campaign] of campaigns.entries()) {
            const underlyingTokenAddress = GearboxVaultInterface.decodeFunctionResult("underlyingToken", result[2 * index].returnData)[0];
            const totalAssets = ERC4626Interface.decodeFunctionResult("totalAssets", result[2 * index + 1].returnData)[0];
            const underlyingToken = await TokenService.findUniqueFillOrThrow({
                chainId: computeChainId,
                address: underlyingTokenAddress,
            });
            if (!underlyingToken.decimals || !underlyingToken.price) {
                throw new Error(`Missing decimals or price for token ${underlyingToken.address}`);
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
