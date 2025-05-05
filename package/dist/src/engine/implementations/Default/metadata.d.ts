import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { Campaign as CampaignType } from "@sdk";
type campaignType = CampaignType;
export declare class DefaultMetadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        action: "HOLD";
        name: string;
        tokens: never[];
        explorerAddress: string;
    }>;
}
export {};
