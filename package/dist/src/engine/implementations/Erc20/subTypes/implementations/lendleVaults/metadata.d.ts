import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { ProtocolId } from "@/modules/v4/protocol/protocol.model";
import type { Erc20LikeCampaignEnum } from "../..";
export declare class LendleMetadata implements MetadataBuilder<Erc20LikeCampaignEnum> {
    build(campaign: Omit<CampaignWithParams<Erc20LikeCampaignEnum>, "manualOverrides">): Promise<{
        action: "LEND";
        mainProtocol: ProtocolId;
        name: string;
        tokens: {
            chainId: number;
            address: any;
        }[];
        explorerAddress: any;
    }>;
}
