import type { TVLBuilder, TVLData } from "@/engine/tvl/interface";
import { type Campaign, type CampaignParameters, type MerklChainId } from "@sdk";
type campaignType = Campaign.UNISWAP_V4;
export declare class UniswapV4TVLBuilder implements TVLBuilder<campaignType> {
    build(computeChainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<TVLData<Campaign.UNISWAP_V4>>;
}
export {};
