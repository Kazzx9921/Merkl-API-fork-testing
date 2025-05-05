import { TokenService } from "@/modules/v4/token/token.service";
import { TvlType } from "@db/api";
import { AaveInterface, ChainInteractionService, ERC20Interface, TermMaxFTInterface, TermMaxMarketInterface, bigIntToNumber, } from "@sdk";
export class TermMaxTVLBuilder {
    async build(computeChainId, campaigns) {
        const tvls = [];
        const firstRound = await ChainInteractionService(computeChainId).fetchAndDecodeObject(campaigns.flatMap(campaign => {
            const { campaignId, campaignParameters } = campaign;
            const { targetToken } = campaignParameters;
            return [
                {
                    callData: TermMaxFTInterface.encodeFunctionData("marketAddr"),
                    target: targetToken,
                    key: `${campaignId}_marketAddr`,
                    decoder: (data) => AaveInterface.decodeFunctionResult("UNDERLYING_ASSET_ADDRESS", data)[0],
                },
            ];
        }));
        const secondRound = await ChainInteractionService(computeChainId).fetchAndDecodeObject(campaigns.flatMap(campaign => {
            const { campaignId, campaignParameters } = campaign;
            return [
                {
                    callData: TermMaxMarketInterface.encodeFunctionData("tokens"),
                    target: firstRound[`${campaignId}_marketAddr`],
                    key: `${campaignId}_underlyingToken`,
                    decoder: (data) => TermMaxMarketInterface.decodeFunctionResult("tokens", data)[4],
                },
            ];
        }));
        const thirdRound = await ChainInteractionService(computeChainId).fetchAndDecodeObject(campaigns.flatMap(campaign => {
            const { campaignId, campaignParameters } = campaign;
            return [
                {
                    callData: ERC20Interface.encodeFunctionData("balanceOf", [
                        firstRound[`${campaignId}_marketAddr`],
                    ]),
                    target: secondRound[`${campaignId}_underlyingToken`],
                    key: `${campaignId}_totalSupplyUnderlyingToken`,
                    decoder: (data) => ERC20Interface.decodeFunctionResult("balanceOf", data)[0],
                },
            ];
        }));
        for (const campaign of campaigns) {
            const { campaignId } = campaign;
            const underlyingTokenAddress = secondRound[`${campaignId}_underlyingToken`];
            const underlyingTokenSupply = thirdRound[`${campaignId}_totalSupplyUnderlyingToken`];
            // We don't fetch token data everytime, we use the database and the associated service
            const underlyingToken = await TokenService.findUniqueFillOrThrow({
                chainId: computeChainId,
                address: underlyingTokenAddress,
            });
            if (!underlyingToken.decimals || !underlyingToken.price) {
                throw new Error(`Missing decimals or price for token ${underlyingToken.address}`);
            }
            tvls.push({
                campaign,
                tvl: bigIntToNumber(underlyingTokenSupply, underlyingToken.decimals) * underlyingToken.price,
                tvlBreakdown: [
                    {
                        identifier: underlyingToken.id,
                        type: TvlType.TOKEN,
                        value: bigIntToNumber(underlyingTokenSupply, underlyingToken.decimals),
                    },
                ],
            });
        }
        return tvls;
    }
}
