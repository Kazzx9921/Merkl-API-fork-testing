import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { ProtocolId } from "@/modules/v4/protocol/protocol.model";
import { type CampaignParameters, type Campaign as CampaignType, type ChainId } from "@sdk";
type campaignType = CampaignType.HYPERDRIVELOGPROCESSOR | CampaignType.HYPERDRIVELOGFIXPROCESSOR;
export declare class HyperdriveMetadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        action: "POOL" | "LONG" | "SHORT";
        name: string;
        tokens: {
            chainId: number;
            address: any;
        }[];
        mainProtocol: ProtocolId;
        depositUrl: string;
        explorerAddress: `0x${string}`;
    }>;
    static generateUrl(computeChainId: ChainId, params: CampaignParameters<campaignType>["campaignParameters"], subType: CampaignParameters<campaignType>["campaignSubType"]): string;
}
export {};
