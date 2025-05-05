import { OpportunityAction } from "@db/api";
import { BN2Number, ChainId, MorphoSubCampaignType, NETWORK_LABELS, } from "@sdk";
import { getAddress } from "viem";
export class MorphoMetadata {
    async build(campaign) {
        let { params, computeChainId, subType } = campaign;
        if (!subType)
            subType = 0;
        const morphoParams = params;
        const market = `${morphoParams.symbolLoanToken}/${morphoParams.symbolBorrowToken} ${morphoParams?.LLTV && BN2Number(morphoParams?.LLTV, 16)}%`;
        const subtypes = [
            { name: `Deposit in ${morphoParams.nameTargetToken} - Metamorpho`, action: OpportunityAction.LEND },
            { name: `Supply ${morphoParams.symbolLoanToken} on ${market}`, action: OpportunityAction.LEND },
            { name: `Borrow ${morphoParams.symbolLoanToken} on ${market}`, action: OpportunityAction.BORROW },
            { name: `Lend ${morphoParams.symbolBorrowToken} on ${market}`, action: OpportunityAction.LEND },
        ];
        const subtype = subtypes[subType];
        const tokens = [{ chainId: computeChainId, address: params.targetToken }];
        if (subType === MorphoSubCampaignType.META) {
            const typedParams = params;
            tokens.push({ chainId: computeChainId, address: typedParams.underlyingToken });
        }
        return {
            action: subtype.action,
            tokens,
            name: subtype.name,
            mainProtocol: (computeChainId === ChainId.POLYGON ? "compound" : "morpho"),
            depositUrl: MorphoMetadata.generateUrl(computeChainId, params, morphoParams, subType),
            explorerAddress: getAddress(params.targetToken),
        };
    }
    static generateUrl(computeChainId, params, _morphoParams, subType) {
        // Compound blue
        if (computeChainId === ChainId.POLYGON) {
            switch (subType) {
                case MorphoSubCampaignType.META: {
                    return `https://www.compound.blue/${params.targetToken.toLowerCase()}`;
                }
                case MorphoSubCampaignType.SUPPLY_BLUE: {
                    return `https://www.compound.blue/${params.targetToken.toLowerCase()}`;
                }
                case MorphoSubCampaignType.BORROWING_BLUE:
                case MorphoSubCampaignType.COLLATERAL_BLUE: {
                    const typedParams = params;
                    return `https://www.compound.blue/borrow/${typedParams.marketId.toLowerCase()}`;
                }
            }
        }
        switch (subType) {
            case MorphoSubCampaignType.META: {
                return `https://app.morpho.org/vault?vault=${params.targetToken}&network=${NETWORK_LABELS[computeChainId]?.toLowerCase()}`;
            }
            case MorphoSubCampaignType.SUPPLY_BLUE: {
                return `https://app.morpho.org/?network=${NETWORK_LABELS[computeChainId]?.toLowerCase()}`;
            }
            case MorphoSubCampaignType.BORROWING_BLUE:
            case MorphoSubCampaignType.COLLATERAL_BLUE: {
                const typedParams = params;
                return `https://app.morpho.org/market?id=${typedParams.marketId}&network=${NETWORK_LABELS[computeChainId]?.toLowerCase()}`;
            }
        }
    }
}
