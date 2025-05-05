import { TokenService } from "@/modules/v4/token/token.service";
import { OpportunityAction } from "@db/api";
import { Aave__factory, ChainInteractionService, TokenInteractionService } from "@sdk";
export class SuperlendMetadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        const { targetToken } = params;
        const targetTokenInfo = await TokenService.fetchOnChain({
            chainId: computeChainId,
            address: targetToken,
        });
        const underlyingToken = await Aave__factory.connect(targetToken, ChainInteractionService(computeChainId).provider()).UNDERLYING_ASSET_ADDRESS();
        const underlyingTokenSymbol = await TokenInteractionService(computeChainId).symbol(underlyingToken);
        const action = targetTokenInfo?.name?.toLowerCase().includes("debt")
            ? OpportunityAction.BORROW
            : OpportunityAction.LEND;
        return {
            action,
            mainProtocol: "superlend",
            name: `${action === OpportunityAction.BORROW ? "Borrow" : "Supply"} ${underlyingTokenSymbol} on Superlend`,
            tokens: [
                { chainId: computeChainId, address: targetToken },
                { chainId: computeChainId, address: underlyingToken },
            ],
            depositUrl: `https://markets.superlend.xyz/reserve-overview/?underlyingAsset=${underlyingToken}`,
            explorerAddress: params.targetToken,
        };
    }
}
