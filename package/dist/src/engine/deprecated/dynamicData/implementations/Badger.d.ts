import { type Campaign, type CampaignParameters, type MerklChainId } from "@sdk";
import type { DynamicDataBuilder } from "../interface";
type campaignType = Campaign.BADGER;
export declare class BadgerDynamicData implements DynamicDataBuilder<campaignType> {
    build(chainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<CampaignDynamicData<Campaign.BADGER>[]>;
}
export {};
