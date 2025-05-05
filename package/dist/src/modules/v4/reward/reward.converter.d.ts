import type { MerklAPIType, MerklChainId } from "@sdk";
import type { RewardV3Model, UserRewardV3Model } from "./reward.model";
import { RewardService } from "./reward.service";
export declare class RewardConvertorService {
    /**
     * Convert the v4 reward data to the v3 model used in the v3/userRewards route
     */
    static convertV4toUserRewardV3(data: Awaited<ReturnType<(typeof RewardService)["getUserRewardsByChain"]>>, includeProofs?: boolean): UserRewardV3Model;
    /**
     * Convert the v4 reward data to the v3 model used in the v3/rewards route
     */
    static convertV4toRewardV3(data: Awaited<ReturnType<(typeof RewardService)["getUserRewardsByChain"]>>): RewardV3Model;
    static convertV4toMerklV2(user: string, chainId: MerklChainId, data: MerklAPIType[number]): Promise<MerklAPIType[number]>;
}
