import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import type { ProtocolId } from "@/modules/v4/protocol/protocol.model";
import type { CampaignParameters, Campaign as CampaignType, ChainId } from "@sdk";
type campaignType = CampaignType.UNISWAP_V4;
export declare class UniswapV4Metadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        name: string;
        action: "POOL";
        tokens: {
            chainId: number;
            address: any;
        }[];
        mainProtocol: ProtocolId;
        explorerAddress: `0x${string}`;
        depositUrl: string;
    }>;
    static generateUrl(computeChainId: ChainId, params: CampaignParameters<campaignType>["campaignParameters"]): string;
}
export {};
