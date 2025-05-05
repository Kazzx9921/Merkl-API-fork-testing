// TODO: Enhance APR display for non-dollar denominations when front-end is ready.
// This should handle cases where one or both token price are unavailable, showing the APR as a direct ratio
// (e.g., X reward tokens per Y target tokens) instead of dollar values.
export function getFixedApr(campaignParameters, priceRewardToken, priceTargetToken) {
    const { targetTokenPricing, rewardTokenPricing, apr: fixedApr } = campaignParameters.campaignParameters;
    const targetApr = Number(fixedApr);
    // Handle all pricing configurations
    if (targetTokenPricing && rewardTokenPricing) {
        // Case 1: Fixed $ amount of reward per $ of liquidity
        return targetApr * 100;
    }
    if (targetTokenPricing && !rewardTokenPricing) {
        // Case 2: Fixed # amount of reward per $ of liquidity
        // Return 0 if reward token price is invalid
        return !priceRewardToken ? 0 : targetApr * priceRewardToken * 100;
    }
    if (!targetTokenPricing && rewardTokenPricing) {
        // Case 3: Fixed $ amount of reward per # of liquidity
        // Return 0 if target token price is invalid
        return !priceTargetToken || priceTargetToken === 0 ? 0 : targetApr * (1 / priceTargetToken) * 100;
    }
    // Case 4: Fixed # amount of reward per # of liquidity
    // Return 0 if either price is invalid
    return !priceRewardToken || !priceTargetToken || priceTargetToken === 0
        ? 0
        : targetApr * (priceRewardToken / priceTargetToken) * 100;
}
