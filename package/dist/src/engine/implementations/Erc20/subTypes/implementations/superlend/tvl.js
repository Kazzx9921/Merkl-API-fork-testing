import { TokenService } from "@/modules/v4/token/token.service";
import { TvlType } from "@db/api";
import { AaveInterface, ChainInteractionService, ERC20Interface, bigIntToNumber, } from "@sdk";
export class SuperlendTVLBuilder {
    async build(computeChainId, campaigns) {
        const tvls = [];
        const firstRound = await ChainInteractionService(computeChainId).fetchAndDecodeObject(campaigns.flatMap(campaign => {
            const { campaignId, campaignParameters } = campaign;
            const { targetToken } = campaignParameters;
            return [
                {
                    callData: AaveInterface.encodeFunctionData("UNDERLYING_ASSET_ADDRESS"),
                    target: targetToken,
                    key: `${campaignId}_underlyingToken`,
                    decoder: (data) => AaveInterface.decodeFunctionResult("UNDERLYING_ASSET_ADDRESS", data)[0],
                },
                {
                    callData: ERC20Interface.encodeFunctionData("totalSupply"),
                    target: targetToken,
                    key: `${campaignId}_totalSupply`,
                    decoder: (data) => BigInt(ERC20Interface.decodeFunctionResult("totalSupply", data)[0].toString()),
                },
            ];
        }));
        for (const campaign of campaigns) {
            const { campaignId } = campaign;
            const underlyingTokenAddress = firstRound[`${campaignId}_underlyingToken`];
            const totalSupply = firstRound[`${campaignId}_totalSupply`];
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
                tvl: bigIntToNumber(totalSupply, underlyingToken.decimals) * underlyingToken.price,
                tvlBreakdown: [
                    {
                        identifier: underlyingToken.id,
                        type: TvlType.TOKEN,
                        value: bigIntToNumber(totalSupply, underlyingToken.decimals),
                    },
                ],
            });
        }
        return tvls;
    }
}
