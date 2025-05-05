// @ts-nocheck
import { CDPMANAGER_ADDRESS, SORTEDCDPS_ADDRESS } from "@/constants";
import { batchMulticallCallWithRetry } from "@/utils/generic";
import { BN2Number, CdpManagerInterface, SortedCdpsInterface } from "@sdk";
export async function getBadgerUserPositions(user, _chainId, campaigns) {
    /**
     * Fetch user positions
     */
    const calls = [];
    calls.push({
        allowFailure: false,
        callData: CdpManagerInterface.encodeFunctionData("getSystemDebt"),
        target: CDPMANAGER_ADDRESS,
    });
    return {
        cached: false,
        call: {
            callData: calls,
            handler: () => { },
            reducer: async (result) => {
                const finalRes = {};
                const totalSupplyEBTC = BN2Number(CdpManagerInterface.decodeFunctionResult("getSystemDebt", result[0])[0], 18);
                for (const campaignId of Object.keys(campaigns)) {
                    let calls = [];
                    let userSupply = 0;
                    const totalSupply = totalSupplyEBTC;
                    const res = {
                        userPositions: [],
                        decimals: campaigns[campaignId].decimals,
                        totalSupply: totalSupplyEBTC,
                        userTVL: 0,
                    };
                    calls.push({
                        allowFailure: false,
                        callData: SortedCdpsInterface.encodeFunctionData("getCdpsOf", [user]),
                        target: SORTEDCDPS_ADDRESS,
                    });
                    const resCdps = await batchMulticallCallWithRetry(_chainId, {
                        calls,
                    });
                    calls = [];
                    for (const res of resCdps) {
                        const cdp = SortedCdpsInterface.decodeFunctionResult("getCdpsOf", res.returnData)[0];
                        if (cdp.length !== 0) {
                            calls.push({
                                allowFailure: false,
                                callData: CdpManagerInterface.encodeFunctionData("Cdps", cdp),
                                target: CDPMANAGER_ADDRESS,
                            });
                        }
                    }
                    const resRecipient = await batchMulticallCallWithRetry(_chainId, {
                        calls,
                    });
                    for (const res of resRecipient) {
                        const cdpSupply = CdpManagerInterface.decodeFunctionResult("Cdps", res.returnData)[0];
                        userSupply += BN2Number(cdpSupply, campaigns[campaignId].decimals);
                    }
                    let i = 0;
                    if (userSupply > 0) {
                        res.userPositions.push({
                            balance: userSupply,
                            token: campaigns[campaignId].targetToken,
                            origin: "Direct",
                            totalSupply: totalSupply,
                            tvl: campaigns[campaignId].tvl,
                        });
                        // to modify
                    }
                    // Add to final result if there are positions
                    if (res.userPositions.length > 0) {
                        finalRes[`9_${campaignId}`] = { ...res };
                    }
                    i = i++;
                }
                return finalRes;
            },
        },
    };
}
