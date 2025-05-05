export async function fetchClamInfo(campaigns) {
    // split the campaigns by chainId and pool
    const campaignsByChainIdAndPool = {};
    // mainParameter is the pool for CLAMs
    campaigns.forEach(campaign => {
        const { chainId, mainParameter } = campaign;
        if (!campaignsByChainIdAndPool[chainId]) {
            campaignsByChainIdAndPool[chainId] = {};
        }
        if (!campaignsByChainIdAndPool[chainId][mainParameter]) {
            campaignsByChainIdAndPool[chainId][mainParameter] = [];
        }
        campaignsByChainIdAndPool[chainId][mainParameter].push(campaign);
    });
    // Get the raw pool info for each chain
    // Get the ALM positions for each pool
    // BalanceOf Token0
    // BalanceOf Token1
    // Price Token0 --> from prices
    // Price Token1 --> from prices
    // What I need
    // Pool
    // TVL token0
    // TVL token1
    // ALM Positions (ALM ID --> address + amount)
    // Get the
}
