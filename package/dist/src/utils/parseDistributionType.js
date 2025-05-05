import { DistributionType } from "@db/api";
export const parseDistributionType = (params) => {
    if ("targetTokenPricing" in params && "rewardTokenPricing" in params && "apr" in params) {
        if (params.targetTokenPricing && params.rewardTokenPricing) {
            return DistributionType.FIX_REWARD_VALUE_PER_LIQUIDITY_VALUE;
        }
        if (params.rewardTokenPricing) {
            return DistributionType.FIX_REWARD_VALUE_PER_LIQUIDITY_AMOUNT;
        }
        if (params.targetTokenPricing) {
            return DistributionType.FIX_REWARD_AMOUNT_PER_LIQUIDITY_VALUE;
        }
        return DistributionType.FIX_REWARD_AMOUNT_PER_LIQUIDITY_AMOUNT;
    }
    return DistributionType.DUTCH_AUCTION;
};
