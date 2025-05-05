export async function fetchMetamorphoTvl(chainId, vaultAddress) {
    const metamorphoAPI = "https://blue-api.morpho.org/graphql";
    const query = `
        query {
            vaultByAddress(
                address: "${vaultAddress}"
                chainId: ${chainId}
            ) {
                state {
                    allocation {
                        supplyAssetsUsd
                    }
                }
            }
        }
    `;
    const response = await fetch(metamorphoAPI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });
    const data = await response.json();
    let tvl = 0;
    if (!data?.data) {
        return tvl;
    }
    for (const allocation of data.data.vaultByAddress.state.allocation) {
        if (allocation.supplyAssetsUsd) {
            tvl += Number(allocation.supplyAssetsUsd);
        }
    }
    return tvl;
}
