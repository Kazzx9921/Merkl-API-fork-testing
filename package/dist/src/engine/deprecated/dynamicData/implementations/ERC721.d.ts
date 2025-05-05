import { type Campaign, type CampaignParameters, type MerklChainId } from "@sdk";
import type { DynamicDataBuilder } from "../interface";
type campaignType = Campaign.ERC721 | Campaign.ERC721FIXAPR;
export declare class ERC721DynamicData implements DynamicDataBuilder<campaignType> {
    build(chainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<ERC721CampaignDynamicData[]>;
}
export {};
