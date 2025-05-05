import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { Campaign as CampaignType } from "@sdk";
type campaignType = CampaignType.ERC20_SNAPSHOT;
export declare class Erc20SnapshotMetadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        name: string;
        action: "DROP";
        tokens: {
            chainId: number;
            address: any;
        }[];
    }>;
}
export {};
