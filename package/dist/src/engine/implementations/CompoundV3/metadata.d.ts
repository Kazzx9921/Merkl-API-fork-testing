import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import { type Campaign as CampaignType } from "@sdk";
import type { ProtocolId } from "../../../modules/v4/protocol/protocol.model";
type campaignType = CampaignType.COMPOUND_V3;
export declare class CompoundV3Metadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        action: "LEND" | "BORROW";
        name: string;
        tokens: {
            chainId: number;
            address: any;
        }[];
        mainProtocol: ProtocolId;
        depositUrl: undefined;
    }>;
}
export {};
