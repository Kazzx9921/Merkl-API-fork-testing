import { type Campaign as CampaignType } from "@sdk";
import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
type campaignType = CampaignType.MULTILOG;
export declare class MultiLogMetaData implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<import("@/engine/metadata/interface").Metadata>;
}
export {};
