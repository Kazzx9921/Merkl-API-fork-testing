import type { CampaignsCacheUpdaterReturnType } from "@/jobs/dynamic-data";
import { AMM, type ChainId, type MerklAPIType } from "@sdk";
import type { MerklChainData } from "../../types";
export declare function getClamsInfo(chainIds?: number[] | readonly ChainId[], AMMs?: Lowercase<keyof typeof AMM>[], user?: string, onlyLive?: boolean): Promise<MerklAPIType>;
export declare function campaignsToOldFormat(campaignData: CampaignsCacheUpdaterReturnType, merklChainData: MerklChainData): MerklAPIType[number];
