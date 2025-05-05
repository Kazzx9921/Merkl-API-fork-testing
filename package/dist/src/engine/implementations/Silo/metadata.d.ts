import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { ProtocolId } from "@/modules/v4/protocol/protocol.model";
import type { Campaign as CampaignType } from "@sdk";
type campaignType = CampaignType.SILO;
export declare class SiloMetadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        action: "LEND" | "BORROW";
        name: string;
        tokens: {
            chainId: number;
            address: any;
        }[];
        mainProtocol: ProtocolId;
        explorerAddress: `0x${string}`;
    }>;
}
export {};
