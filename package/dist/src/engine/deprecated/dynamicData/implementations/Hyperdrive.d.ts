import { Campaign, type CampaignParameters, type MerklChainId } from "@sdk";
import type { DynamicDataBuilder } from "../interface";
type campaignType = Campaign.HYPERDRIVELOGPROCESSOR | Campaign.HYPERDRIVELOGFIXPROCESSOR;
export declare class HyperdriveDynamicData implements DynamicDataBuilder<campaignType> {
    build(chainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<any[]>;
}
export {};
