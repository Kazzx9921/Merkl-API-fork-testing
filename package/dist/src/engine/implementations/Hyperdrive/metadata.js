import { OpportunityAction } from "@db/api";
import { HyperDriveSubCampaignType } from "@sdk";
import { getAddress } from "viem";
export class HyperdriveMetadata {
    async build(campaign) {
        let { params, computeChainId, subType } = campaign;
        const subtypes = [
            { name: "Add Liquidity on", action: OpportunityAction.POOL },
            { name: "Open Long on", action: OpportunityAction.LONG },
            { name: "Open Short on", action: OpportunityAction.SHORT },
        ];
        if (!subType || subType === HyperDriveSubCampaignType.LP) {
            subType = 0;
        }
        const subtypeData = subtypes[subType];
        return {
            action: subtypeData.action,
            name: [subtypeData.name, params.symbolTargetToken].join(" "),
            tokens: [{ chainId: computeChainId, address: params.targetToken }],
            mainProtocol: "hyperdrive",
            depositUrl: HyperdriveMetadata.generateUrl(computeChainId, params, subType),
            explorerAddress: getAddress(params.targetToken),
        };
    }
    static generateUrl(computeChainId, params, subType) {
        const campaignType = subType === 0 ? "lp" : subType === 1 ? "long" : "short";
        return `https://app.hyperdrive.box/market/${computeChainId}/${params.targetToken}?position=${campaignType}`;
    }
}
