import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { Campaign as CampaignType } from "@sdk";
type campaignType = CampaignType.ERC721 | CampaignType.ERC721FIXAPR;
export declare class Erc721Metadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        action: "HOLD";
        name: string;
        tokens: {
            chainId: number;
            address: any;
        }[];
        mainProtocol: undefined;
        depositUrl: undefined;
    }>;
}
export {};
