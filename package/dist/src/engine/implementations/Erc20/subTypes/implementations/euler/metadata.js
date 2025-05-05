import { fetchEulerVaultName } from "@/engine/deprecated/erc20SubTypeProcessors/helpers/eulerVaultNames";
import { TokenService } from "@/modules/v4/token/token.service";
import { sanitizeChainName } from "@/utils/sanitizeChain";
import { OpportunityAction } from "@db/api";
import { ChainInteractionService, EulerSubCampaignType, Euler__factory } from "@sdk";
export class EulerMetadata {
    async build(campaign) {
        const { params, computeChainId, subType } = campaign;
        let { targetToken, addressAsset: underlyingToken, symbolCollateral, evkAddress } = params;
        if (!underlyingToken)
            underlyingToken = await Euler__factory.connect(targetToken, ChainInteractionService(computeChainId).provider()).asset();
        const underlyingTokenInfo = await TokenService.findUniqueFillOrThrow({
            chainId: computeChainId,
            address: underlyingToken,
        });
        let vaultName = await fetchEulerVaultName(underlyingToken, computeChainId);
        if (!vaultName)
            vaultName = await fetchEulerVaultName(evkAddress, computeChainId);
        const action = subType === EulerSubCampaignType.BORROW_FROM_COLLATERAL || subType === EulerSubCampaignType.BORROW
            ? OpportunityAction.BORROW
            : OpportunityAction.LEND;
        const name = `${action === OpportunityAction.LEND ? `Supply ${underlyingTokenInfo.symbol} on` : "Borrow from"}${vaultName ? ` ${vaultName}` : ""} vault ${subType === EulerSubCampaignType.BORROW_FROM_COLLATERAL ? `using ${symbolCollateral}` : ""}`;
        return {
            action,
            mainProtocol: "euler",
            name,
            tokens: [
                { chainId: computeChainId, address: targetToken },
                { chainId: computeChainId, address: underlyingToken },
            ],
            depositUrl: `https://app.euler.finance/vault/${evkAddress}?network=${sanitizeChainName(computeChainId)}`,
            explorerAddress: params.targetToken,
        };
    }
}
