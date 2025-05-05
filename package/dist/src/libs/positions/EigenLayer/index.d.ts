import type { UncachedResult } from "@/utils/execute";
import { type MerklChainId } from "@sdk";
import type { EigenLayerFetchedCampaign, PositionType } from "../types";
export declare function getEigenLayerUserPositions(user: string, _chainId: MerklChainId, campaigns: {
    [mainparameter: string]: EigenLayerFetchedCampaign;
}): Promise<UncachedResult<PositionType>>;
