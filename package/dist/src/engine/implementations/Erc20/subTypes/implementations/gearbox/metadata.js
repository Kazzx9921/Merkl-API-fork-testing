import { OpportunityAction } from "@db/api";
import { ChainInteractionService, GearBoxVault__factory, TokenInteractionService } from "@sdk";
export class GearboxMetadata {
    async build(campaign) {
        const { params, computeChainId } = campaign;
        const { targetToken } = params;
        const underlyingToken = await GearBoxVault__factory.connect(targetToken, ChainInteractionService(computeChainId).provider()).underlyingToken();
        const underlyingTokenSymbol = await TokenInteractionService(computeChainId).symbol(underlyingToken);
        return {
            action: OpportunityAction.LEND,
            mainProtocol: "gearbox",
            name: `Gearbox ${underlyingTokenSymbol} Deposit`,
            tokens: [
                { chainId: computeChainId, address: targetToken },
                { chainId: computeChainId, address: underlyingToken },
            ],
            depositUrl: `https://app.gearbox.fi/pools/${params.targetToken}`,
            explorerAddress: params.targetToken,
        };
    }
}
