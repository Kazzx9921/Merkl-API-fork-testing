import { TokenService } from "@/modules/v4/token/token.service";
import { OpportunityAction } from "@db/api";
import { NETWORK_LABELS } from "@sdk";
export class AjnaMetadata {
    async build(campaign) {
        const { params, computeChainId, subType } = campaign;
        try {
            const [collateral, quote] = await TokenService.findManyOrCreate([
                {
                    chainId: computeChainId,
                    address: params.collateralToken,
                },
                {
                    chainId: computeChainId,
                    address: params.quoteToken,
                },
            ]);
            if (!collateral || !quote)
                throw new Error("Failed to fetch tokens");
            const market = `${params.symbolQuoteToken}/${collateral?.symbol}`;
            const subtypes = [
                { name: `Supply ${collateral?.symbol} on ${market}`, action: OpportunityAction.LEND },
                { name: `Borrow ${quote?.symbol} on ${market}`, action: OpportunityAction.BORROW },
            ];
            const subtype = subtypes[subType ?? 0];
            return {
                action: subtype.action,
                name: subtype.name,
                tokens: [
                    { chainId: computeChainId, address: collateral.address },
                    { chainId: computeChainId, address: quote.address },
                ],
                mainProtocol: "ajna",
                depositUrl: AjnaMetadata.generateUrl(computeChainId, params),
            };
        }
        catch (_err) {
            const market = `${params.symbolQuoteToken}/${params.symbolCollateralToken}`;
            const subtypes = [
                { name: `Supply ${params.symbolCollateralToken} on ${market}`, action: OpportunityAction.LEND },
                { name: `Borrow ${params.symbolQuoteToken} on ${market}`, action: OpportunityAction.BORROW },
            ];
            const subtype = subtypes[subType ?? 0];
            return {
                action: subtype.action,
                name: subtype.name,
                tokens: [
                    { chainId: computeChainId, address: params.collateralToken },
                    { chainId: computeChainId, address: params.quoteToken },
                ],
                mainProtocol: "ajna",
                depositUrl: AjnaMetadata.generateUrl(computeChainId, params),
            };
        }
    }
    static generateUrl(computeChainId, params) {
        return `https://ajnafi.com/${NETWORK_LABELS[computeChainId].toLowerCase()}/pools/${params.poolId}`;
    }
}
