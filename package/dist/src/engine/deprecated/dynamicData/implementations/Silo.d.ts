import { type Campaign, type CampaignParameters, type MerklChainId } from "@sdk";
import { utils } from "ethers";
import type { DynamicDataBuilder } from "../interface";
export declare const SILO_INTERFACE: utils.Interface;
type campaignType = Campaign.SILO;
export declare class SiloDynamicData implements DynamicDataBuilder<campaignType> {
    build(chainId: MerklChainId, campaigns: CampaignParameters<campaignType>[]): Promise<any[]>;
}
export {};
