import { BN2Number, ERC20Interface, MorphoSubCampaignType, } from "@sdk";
const axios = require("axios");
export async function getMorphoUserPositions(user, _chainId, campaigns) {
    /**
     * Fetch user positions
     */
    const calls = [];
    for (const campaign of Object.keys(campaigns)) {
        if (campaigns[campaign].subtype === MorphoSubCampaignType.SUPPLY_BLUE) {
            const forwarders = campaigns[campaign]?.forwarders;
            if (!!forwarders) {
                for (const forwarder of Object.keys(forwarders)) {
                    calls.push({
                        allowFailure: true,
                        callData: ERC20Interface.encodeFunctionData("balanceOf", [user]),
                        target: forwarder,
                    });
                    calls.push({
                        allowFailure: true,
                        callData: ERC20Interface.encodeFunctionData("totalSupply"),
                        target: forwarder,
                    });
                }
            }
        }
        if (campaigns[campaign].subtype === MorphoSubCampaignType.META) {
            calls.push({
                allowFailure: true,
                callData: ERC20Interface.encodeFunctionData("balanceOf", [user]),
                target: campaigns[campaign].targetToken,
            });
        }
    }
    const endpoint = "https://blue-api.morpho.org/graphql";
    const headers = {
        "content-type": "application/json",
    };
    const morphoQuery = {
        query: `query($address: String!, $chainId: Int) {
  userByAddress(address: $address, chainId: $chainId) {
    address
    marketPositions {
      market {
        uniqueKey
      }
      supplyAssets
      supplyAssetsUsd
      borrowAssets
      borrowAssetsUsd
      collateral
      collateralUsd
    }
  }
}
`,
        variables: { address: user.toLowerCase(), chainId: _chainId },
    };
    let response;
    return {
        cached: false,
        call: {
            callData: calls,
            handler: () => { },
            reducer: async (result) => {
                const finalRes = {};
                let i = 0;
                for (const campaign of Object.keys(campaigns)) {
                    const marketId = campaigns[campaign].marketId;
                    // Initialization
                    const res = {
                        userPositions: [],
                        decimals: campaigns[campaign].decimals,
                        // FIXME only have the borrowed/supplied part
                        totalSupply: BN2Number(campaigns[campaign].totalSupplyTargetToken, campaigns[campaign].decimals),
                        userTVL: 0,
                    };
                    let balance = 0;
                    //TODO Check in the case of the creation of a campaign
                    if (campaigns[campaign].subtype === MorphoSubCampaignType.META) {
                        balance = BN2Number(ERC20Interface.decodeFunctionResult("balanceOf", result[i])[0], campaigns[campaign].decimals);
                    }
                    //TODO check the case for only the supply to the contract
                    if (campaigns[campaign].subtype === MorphoSubCampaignType.SUPPLY_BLUE) {
                        const forwarders = campaigns[campaign]?.forwarders;
                        if (!!forwarders) {
                            for (const forwarder of Object.keys(forwarders)) {
                                const supplyQuery = {
                                    query: `query($address: String!, $chainId: Int) {
              userByAddress(address: $address, chainId: $chainId) {
                address
                marketPositions {
                  market {
                    uniqueKey
                  }
                  supplyAssets
                  supplyAssetsUsd
                }
                }
              }
              `,
                                    variables: { address: forwarder, chainId: _chainId },
                                };
                                try {
                                    response = await axios({
                                        url: endpoint,
                                        method: "post",
                                        headers: headers,
                                        data: supplyQuery,
                                    });
                                }
                                catch (e) {
                                    console.log(e);
                                }
                                const balanceOfForwarder = BN2Number(ERC20Interface.decodeFunctionResult("balanceOf", result[i])[0], campaigns[campaign].decimals);
                                i++;
                                const totalSupply = BN2Number(ERC20Interface.decodeFunctionResult("totalSupply", result[i])[0], campaigns[campaign].decimals);
                                const marketPositions = response.data.data?.userByAddress?.marketPositions;
                                if (!!marketPositions) {
                                    for (const market of marketPositions) {
                                        if (market.market.uniqueKey === marketId && market.supplyAssets !== 0) {
                                            balance +=
                                                (balanceOfForwarder / totalSupply) *
                                                    BN2Number(market.supplyAssets, campaigns[campaign].decimals);
                                        }
                                    }
                                }
                                i++;
                            }
                        }
                    }
                    if (campaigns[campaign].subtype === MorphoSubCampaignType.BORROWING_BLUE ||
                        campaigns[campaign].subtype === MorphoSubCampaignType.COLLATERAL_BLUE) {
                        try {
                            response = await axios({
                                url: endpoint,
                                method: "post",
                                headers: headers,
                                data: morphoQuery,
                            });
                        }
                        catch (e) {
                            console.log(e);
                        }
                        const marketPositions = response.data.data?.userByAddress?.marketPositions;
                        if (!!marketPositions) {
                            for (const market of marketPositions) {
                                if (market.market.uniqueKey === marketId) {
                                    if (campaigns[campaign].subtype === 2 && market.borrowAssets !== 0) {
                                        balance = BN2Number(market.borrowAssets, campaigns[campaign].decimals);
                                    }
                                    else if (campaigns[campaign].subtype === 3 && market.collateral !== 0) {
                                        balance = BN2Number(market.collateral, campaigns[campaign].decimals);
                                    }
                                }
                            }
                        }
                    }
                    if (balance > 0) {
                        res.userPositions.push({
                            balance: balance,
                            token: campaigns[campaign].targetToken,
                            origin: "Direct",
                            totalSupply: BN2Number(campaigns[campaign].totalSupplyTargetToken, campaigns[campaign].decimals),
                            tvl: campaigns[campaign].tvl,
                        });
                        res.userTVL += campaigns[campaign].tvl;
                    }
                    // Add to final result if there are positions
                    if (res.userPositions.length > 0) {
                        finalRes[`7_${campaign}`] = { ...res };
                    }
                }
                return finalRes;
            },
        },
    };
}
