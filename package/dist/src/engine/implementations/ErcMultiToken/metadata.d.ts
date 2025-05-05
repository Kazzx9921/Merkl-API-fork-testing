import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { ProtocolId } from "@/modules/v4/protocol/protocol.model";
import { type Campaign as CampaignType } from "@sdk";
import type { MetadataBuilder } from "../../metadata/interface";
type campaignType = CampaignType.ERC1155 | CampaignType.ERC1155FIXAPR | CampaignType.ERC6909 | CampaignType.ERC6909FIXAPR;
export declare class ErcMultiTokenMetadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        action: "HOLD";
        name: string;
        tokens: {
            chainId: number;
            address: any;
        }[];
        explorerAddress: any;
        mainProtocol: ProtocolId;
        depositUrl: string;
    } | {
        action: "HOLD";
        name: string;
        tokens: {
            chainId: number;
            address: any;
        }[];
        explorerAddress: any;
        mainProtocol: undefined;
        depositUrl: undefined;
    }>;
}
export {};
