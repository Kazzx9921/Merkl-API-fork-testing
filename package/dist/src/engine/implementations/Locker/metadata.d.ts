import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { CampaignParameters, Campaign as CampaignType, ChainId } from "@sdk";
type campaignType = CampaignType.LOCKER;
export declare class LockerMetadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        action: "HOLD";
        name: string;
        tokens: {
            chainId: number;
            address: string;
        }[];
        mainProtocol: "puffer";
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
