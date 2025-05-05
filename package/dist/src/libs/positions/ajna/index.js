import { batchMulticallCallWithRetry } from "@/utils/generic";
import { AjnaSubCampaignType, BN2Number, NETWORK_LABELS, PoolInfoUtilsInterface } from "@sdk";
import { POOL_INFO_UTILS } from "@sdk";
import axios from "axios";
export async function getAjnaUserPositions(user, _chainId, campaigns) {
    /**
     * Fetch user positions
     */
    const calls = [];
    for (const campaign of Object.values(campaigns)) {
        if (campaign.subtype === AjnaSubCampaignType.lend) {
            calls.push({
                allowFailure: true,
                callData: PoolInfoUtilsInterface.encodeFunctionData("poolPricesInfo", [campaign.poolId]),
                target: POOL_INFO_UTILS[_chainId],
            });
        }
        else {
            calls.push({
                allowFailure: true,
                callData: PoolInfoUtilsInterface.encodeFunctionData("borrowerInfo", [campaign.poolId, user]),
                target: POOL_INFO_UTILS[_chainId],
            });
        }
    }
    return {
        cached: false,
        call: {
            callData: calls,
            handler: () => { },
            reducer: async (_result) => {
                const finalRes = {};
                const resCalls = await batchMulticallCallWithRetry(_chainId, {
                    calls,
                });
                for (const [index, campaignId] of Object.keys(campaigns).entries()) {
                    let userSupply = 0;
                    const res = {
                        userPositions: [],
                        decimals: campaigns[campaignId].decimals,
                        totalSupply: campaigns[campaignId].computedtotalSupply,
                        userTVL: 0,
                    };
                    const resAjna = await axios.get(`https://ajna-api.blockanalitica.com/v4/${NETWORK_LABELS[_chainId].toLowerCase()}/wallets/${user.toLowerCase()}/pools/${campaigns[campaignId].poolId.toLowerCase()}/buckets/?p=1&p_size=50`);
                    if (resAjna.data.count === 0) {
                        res.userTVL = 0;
                        userSupply = 0;
                    }
                    else {
                        if (campaigns[campaignId].subtype === AjnaSubCampaignType.lend) {
                            const htpIndex = PoolInfoUtilsInterface.decodeFunctionResult("poolPricesInfo", resCalls[index].returnData)[3];
                            const lupIndex = PoolInfoUtilsInterface.decodeFunctionResult("poolPricesInfo", resCalls[index].returnData)[5];
                            const threshold = BN2Number(BN2Number(lupIndex, 0) === 0 ? lupIndex : lupIndex.gt(htpIndex) ? lupIndex.add(22) : htpIndex.add(22), 0);
                            let nextRoute = null;
                            if (!!resAjna.data.next) {
                                nextRoute = `https://${resAjna.data.next.slice(resAjna.data.next.indexOf(":") + 1)}`;
                            }
                            let position;
                            for (position of resAjna.data.results) {
                                if (position.bucket_index < threshold) {
                                    res.userTVL += Number(position.deposit);
                                    userSupply += Number(position.deposit);
                                }
                            }
                            while (nextRoute !== null) {
                                const resNext = await axios.get(nextRoute);
                                let position;
                                for (position of resNext.data.results) {
                                    if (position.bucket_index < threshold) {
                                        res.userTVL += Number(position.deposit);
                                        userSupply += Number(position.deposit);
                                    }
                                }
                                if (!!resNext.data.next) {
                                    nextRoute = `https://${resNext.data.next.slice(resNext.data.next.indexOf(":") + 1)}`;
                                }
                                else {
                                    nextRoute = null;
                                }
                            }
                        }
                        else {
                            userSupply = BN2Number(PoolInfoUtilsInterface.decodeFunctionResult("borrowerInfo", resCalls[index].returnData)[0], 18);
                            res.userTVL = BN2Number(PoolInfoUtilsInterface.decodeFunctionResult("borrowerInfo", resCalls[index].returnData)[0], 18);
                        }
                    }
                    /////
                    if (userSupply > 0) {
                        res.userPositions.push({
                            balance: userSupply,
                            token: campaigns[campaignId].quoteToken,
                            origin: "Direct",
                            totalSupply: campaigns[campaignId].computedtotalSupply,
                            tvl: campaigns[campaignId].tvl,
                        });
                        // to modify
                    }
                    // Add to final result if there are positions
                    if (res.userPositions.length > 0) {
                        finalRes[`11_${campaignId}`] = { ...res };
                    }
                }
                return finalRes;
            },
        },
    };
}
