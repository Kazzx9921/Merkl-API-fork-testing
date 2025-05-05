import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { ProtocolId } from "@/modules/v4/protocol/protocol.model";
import type { Campaign as CampaignType } from "@sdk";
type campaignType = CampaignType.DOLOMITE;
export declare class DolomiteMetadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        action: "LEND" | "BORROW";
        tokens: {
            chainId: number;
            address: any;
        }[];
        name: string;
        mainProtocol: ProtocolId;
        explorerAddress: `0x${string}`;
    }>;
}
export {};
