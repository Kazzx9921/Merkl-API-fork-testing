import { type Campaign, type CampaignParameters, type MerklChainId } from "@sdk";
import type { DynamicDataBuilder } from "../interface";
type campaignType = Campaign.ERC6909 | Campaign.ERC6909FIXAPR | Campaign.ERC1155 | Campaign.ERC1155FIXAPR;
export declare class ERCMultiTokenDynamicData implements DynamicDataBuilder<campaignType> {
    build(chainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<ERC6909CampaignDynamicData[]>;
}
export {};
