import { ComposedType } from "@sdk";
import { metadataBuilderFactory } from "@/engine/metadata/factory";
export class MultiLogMetaData {
    async build(campaign) {
        const mainComposed = campaign.params.composedCampaigns.find(composedCampaign => composedCampaign.composedType === ComposedType.MAIN);
        if (!mainComposed) {
            throw new Error("Main composed campaign not found");
        }
        const mainComposedComplete = {
            ...mainComposed,
            id: campaign.id,
            campaignType: mainComposed.campaignType,
            campaignSubType: mainComposed.campaignSubType,
            distributionChainId: campaign.distributionChainId,
            type: "",
            distributionType: campaign.distributionType,
            subType: null,
            params: mainComposed.campaignParameters,
            computeChainId: mainComposed.computeChainId,
            creator: {
                address: "",
                tags: [],
                creatorId: null,
            },
            creatorAddress: campaign.creatorAddress,
            createdAt: campaign.createdAt,
            chain: {
                id: 0,
                name: "",
                icon: "",
            },
            rewardToken: campaign.rewardToken,
        };
        return await metadataBuilderFactory(mainComposed.campaignType).build(mainComposedComplete, "");
    }
}
