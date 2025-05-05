import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { Campaign as CampaignType } from "@sdk";
type campaignType = CampaignType.ENCOMPASSING;
export declare class EncompassingMetadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        action: "DROP";
        name: any;
        tokens: {
            chainId: number;
            address: string;
        }[];
        mainProtocol: any;
    }>;
}
export {};
