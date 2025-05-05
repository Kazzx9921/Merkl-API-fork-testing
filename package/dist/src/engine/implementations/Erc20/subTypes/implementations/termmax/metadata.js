import { OpportunityAction } from "@db/api";
import { ChainInteractionService, TermMaxFT__factory, TermMaxMarket__factory, TokenInteractionService } from "@sdk";
export class TermMaxMetadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        const { targetToken } = params;
        const marketAddress = await TermMaxFT__factory.connect(targetToken, ChainInteractionService(computeChainId).provider()).marketAddr();
        const tokens = await TermMaxMarket__factory.connect(marketAddress, ChainInteractionService(computeChainId).provider()).tokens();
        const underlyingToken = tokens[4];
        const underlyingTokenSymbol = await TokenInteractionService(computeChainId).symbol(underlyingToken);
        const action = OpportunityAction.HOLD;
        return {
            action,
            mainProtocol: "termmax",
            name: `Provide ${underlyingTokenSymbol} on TermMax`,
            tokens: [
                { chainId: computeChainId, address: targetToken },
                { chainId: computeChainId, address: underlyingToken },
            ],
            depositUrl: ``,
            explorerAddress: params.targetToken,
        };
    }
}
