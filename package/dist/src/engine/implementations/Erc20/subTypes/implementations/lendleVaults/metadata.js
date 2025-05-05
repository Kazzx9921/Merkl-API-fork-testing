import { OpportunityAction } from "@db/api";
import { ChainInteractionService, LendleVault__factory, TokenInteractionService } from "@sdk";
export class LendleMetadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        const { targetToken } = params;
        const underlyingToken = await LendleVault__factory.connect(targetToken, ChainInteractionService(computeChainId).provider()).want();
        const underlyingTokenSymbol = await TokenInteractionService(computeChainId).symbol(underlyingToken);
        return {
            action: OpportunityAction.LEND,
            mainProtocol: "lendle",
            name: `Deposit ${underlyingTokenSymbol} on Lendle vaults`,
            tokens: [
                { chainId: computeChainId, address: targetToken },
                { chainId: computeChainId, address: underlyingToken },
            ],
            explorerAddress: params.targetToken,
        };
    }
}
