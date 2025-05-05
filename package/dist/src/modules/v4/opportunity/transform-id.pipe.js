import { CampaignService } from "@/modules/v4/campaign/campaign.service";
export function transformId({ params }) {
    const [chainId, type, campaignId] = params.id.split("-");
    if (!Number.isNaN(+type))
        params.id = `${chainId}-${CampaignService.getTypeFromV3(+type)}-${campaignId}`;
}
