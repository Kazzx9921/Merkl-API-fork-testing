import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { CampaignParameters, Campaign as CampaignType, ChainId } from "@sdk";
type campaignType = CampaignType.EVENT_BASED;
export declare class EventBasedMetadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        action: "SWAP";
        name: string;
        tokens: {
            chainId: number;
            address: string;
        }[];
        mainProtocol: "reserve" | "hanji";
        depositUrl: any;
    } | {
        action: string;
        name: string;
        tokens: never[];
        mainProtocol: undefined;
        depositUrl?: undefined;
    }>;
    static generateUrl(_computeChainId: ChainId, params: CampaignParameters<campaignType>["campaignParameters"]): any;
}
export {};
