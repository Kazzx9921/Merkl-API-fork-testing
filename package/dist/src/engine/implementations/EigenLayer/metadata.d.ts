import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { ProtocolId } from "@/modules/v4/protocol/protocol.model";
import type { Campaign as CampaignType } from "@sdk";
type campaignType = CampaignType.EIGENLAYER;
export declare class EigenLayerMetadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        action: "LEND";
        name: string;
        tokens: {
            chainId: number;
            address: any;
        }[];
        mainProtocol: ProtocolId;
    }>;
}
export {};
