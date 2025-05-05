import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { ProtocolId } from "@/modules/v4/protocol/protocol.model";
import { type CampaignParameters, type Campaign as CampaignType, type ChainId } from "@sdk";
type campaignType = CampaignType.AMBIENTPROCESSOR;
export declare class AmbientMetadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        name: string;
        action: "POOL";
        tokens: {
            chainId: number;
            address: any;
        }[];
        mainProtocol: ProtocolId;
        depositUrl: string;
    }>;
    static generateUrl(computeChainId: ChainId, params: CampaignParameters<campaignType>["campaignParameters"]): string;
}
export {};
