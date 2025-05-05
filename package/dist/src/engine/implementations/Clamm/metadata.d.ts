import type { MetadataBuilder } from "@/engine/metadata/interface";
import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import { type ProtocolId } from "@/modules/v4/protocol/protocol.model";
import { type CampaignParameters, type Campaign as CampaignType, ChainId } from "@sdk";
type campaignType = CampaignType.CLAMM;
export declare const uniswapV3OkuChains: {
    [ChainId.BLAST]: string;
    [ChainId.SCROLL]: string;
    [ChainId.LINEA]: string;
    [ChainId.MANTLE]: string;
    [ChainId.ZKSYNC]: string;
    [ChainId.GNOSIS]: string;
    [ChainId.BASE]: string;
    [ChainId.BSC]: string;
    [ChainId.MANTA]: string;
    [ChainId.ROOTSTOCK]: string;
    [ChainId.TAIKO]: string;
    [ChainId.MOONBEAM]: string;
    [ChainId.POLYGONZKEVM]: string;
    [ChainId.BOB]: string;
    [ChainId.SONIC]: string;
    [ChainId.LISK]: string;
    [ChainId.CORN]: string;
};
export declare const pancakeswapChains: {
    [C in ChainId]?: string;
};
export declare const sushiswapv3Chains: {
    [C in ChainId]?: string;
};
export declare class ClammMetadata implements MetadataBuilder<campaignType> {
    build(campaign: Omit<CampaignWithParams<campaignType>, "manualOverrides">): Promise<{
        name: string;
        action: "POOL";
        tokens: {
            chainId: number;
            address: any;
        }[];
        mainProtocol: ProtocolId;
        depositUrl: string;
        explorerAddress: `0x${string}`;
    }>;
    static generateUrl(computeChainId: ChainId, params: CampaignParameters<campaignType>["campaignParameters"]): string;
}
export {};
