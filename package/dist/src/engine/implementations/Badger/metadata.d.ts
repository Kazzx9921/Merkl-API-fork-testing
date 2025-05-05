import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { ProtocolId } from "@/modules/v4/protocol/protocol.model";
import type { CampaignParameters, Campaign as CampaignType, ChainId } from "@sdk";
import type { MetadataBuilder } from "../../metadata/interface";
type campaignType = CampaignType.BADGER;
export declare class BadgerMetadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        action: "BORROW";
        name: string;
        tokens: {
            chainId: number;
            address: any;
        }[];
        mainProtocol: ProtocolId;
        depositUrl: string;
    }>;
    static generateUrl(_computeChainId: ChainId, _params: CampaignParameters<campaignType>["campaignParameters"]): string;
}
export {};
