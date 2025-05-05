import type { UncachedResult } from "@/utils/execute";
import { type MerklChainId } from "@sdk";
import type { AjnaFetchedCampaign, PositionType } from "../types";
export declare function getAjnaUserPositions(user: string, _chainId: MerklChainId, campaigns: {
    [mainparameter: string]: AjnaFetchedCampaign;
}): Promise<UncachedResult<PositionType>>;
