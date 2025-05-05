import { TokenService } from "@/modules/v4/token/token.service";
import { TvlType } from "@db/api";
import { ChainInteractionService, LendleVaultInterface, bigIntToNumber, } from "@sdk";
export class LendleTVLBuilder {
    async build(computeChainId, campaigns) {
        const tvls = [];
        const calls = [];
        for (const campaign of campaigns) {
            const { targetToken } = campaign.campaignParameters;
            calls.push({
                allowFailure: true,
                callData: LendleVaultInterface.encodeFunctionData("want"),
                target: targetToken,
            }, {
                allowFailure: true,
                callData: LendleVaultInterface.encodeFunctionData("getPricePerFullShare"),
                target: targetToken,
            }, {
                allowFailure: true,
                callData: LendleVaultInterface.encodeFunctionData("totalSupply"),
                target: targetToken,
            });
        }
        const result = await ChainInteractionService(computeChainId).fetchState(calls);
        for (const [index, campaign] of campaigns.entries()) {
            const underlyingTokenAddress = LendleVaultInterface.decodeFunctionResult("want", result[3 * index].returnData)[0];
            const underlyingPerShare = LendleVaultInterface.decodeFunctionResult("getPricePerFullShare", result[3 * index + 1].returnData)[0];
            const totalSupply = LendleVaultInterface.decodeFunctionResult("totalSupply", result[3 * index + 2].returnData)[0];
            const underlyingToken = await TokenService.findUniqueFillOrThrow({
                chainId: computeChainId,
                address: underlyingTokenAddress,
            });
            if (!underlyingToken.decimals || !underlyingToken.price) {
                throw new Error(`Missing decimals or price for token ${underlyingToken.address}`);
            }
            const totalAssets = bigIntToNumber(BigInt(underlyingPerShare) * BigInt(totalSupply), campaign.campaignParameters.decimalsTargetToken + underlyingToken.decimals);
            const tvl = totalAssets * underlyingToken.price;
            tvls.push({
                campaign,
                tvl,
                tvlBreakdown: [
                    {
                        identifier: underlyingToken.id,
                        type: TvlType.TOKEN,
                        value: totalAssets,
                    },
                ],
            });
        }
        return tvls;
    }
}
