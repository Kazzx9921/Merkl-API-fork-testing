import type { UncachedResult } from "@/utils/execute";
import { type Forwarder, type ForwarderParameters, type MerklChainId } from "@sdk";
type FetchedCampaign = {
    rewardToken: string;
    symbolRewardToken: string;
    subtype: number;
    compFork: number;
    tvl: number;
    forwarders?: {
        [address: string]: ForwarderParameters<Forwarder>;
    };
    targetToken: string;
    decimalsTargetToken: number;
    totalSupplyTargetToken: number;
    underlyingToken: string;
    symbolUnderlyingToken: string;
    decimalsUnderlyingToken: number;
    symbolTargetToken: string;
    amount: number;
};
export declare function getCompoundUserPositions(user: string, _chainId: MerklChainId, campaigns: {
    [mainparameter: string]: FetchedCampaign;
}): Promise<UncachedResult<any>>;
export {};
