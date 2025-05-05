import type { UncachedResult } from "@/utils/execute";
import { type MerklChainId } from "@sdk";
import type { MorphoFetchedCampaign, PositionType } from "../types";
export declare function getMorphoUserPositions(user: string, _chainId: MerklChainId, campaigns: {
    [mainparameter: string]: MorphoFetchedCampaign;
}): Promise<UncachedResult<PositionType>>;
