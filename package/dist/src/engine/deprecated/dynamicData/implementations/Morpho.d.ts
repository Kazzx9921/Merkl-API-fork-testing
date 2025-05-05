import { type Campaign, type CampaignParameters, type MerklChainId } from "@sdk";
import { utils } from "ethers";
import type { DynamicDataBuilder } from "../interface";
type campaignType = Campaign.MORPHO;
export declare const MORPHO_INTERFACE: utils.Interface;
export declare class MorphoDynamicData implements DynamicDataBuilder<campaignType> {
    build(chainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<MorphoCampaignDynamicData[]>;
}
export {};
