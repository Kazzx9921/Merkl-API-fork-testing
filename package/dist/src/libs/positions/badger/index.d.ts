import type { UncachedResult } from "@/utils/execute";
import { type MerklChainId } from "@sdk";
import type { BadgerFetchedCampaign, PositionType } from "../types";
export declare function getBadgerUserPositions(user: string, _chainId: MerklChainId, campaigns: {
    [mainparameter: string]: BadgerFetchedCampaign;
}): Promise<UncachedResult<PositionType>>;
