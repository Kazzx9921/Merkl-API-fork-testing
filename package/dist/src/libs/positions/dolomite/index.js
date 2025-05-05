// @ts-nocheck
// import type { MerklChainId } from "@sdk";
import axios from "axios";
import { utils } from "ethers";
export async function getDolomiteUserPositions(user, _chainId, dolomitePositionFetchingData) {
    const calls = [];
    // const pricer = await Pricer.load();
    const dolomitePositionData = (await axios.get(`https://api.dolomite.io/balances/${_chainId}/users/${user}`)).data
        .Result;
    return {
        cached: false,
        call: {
            callData: calls,
            handler: () => { },
            reducer: async (_) => {
                const finalRes = {};
                for (const mainParameter of Object.keys(dolomitePositionFetchingData)) {
                    const x = dolomitePositionFetchingData[mainParameter];
                    const positionIndex = dolomitePositionData.findIndex(y => utils.getAddress(y.token.id) === utils.getAddress(x.targetToken));
                    const position = positionIndex >= 0 ? dolomitePositionData[positionIndex] : undefined;
                    if (!!position) {
                        const borrowBalance = Number.parseFloat(position.token.borrowLiquidity);
                        const supplyBalance = Number.parseFloat(position.token.supplyLiquidity);
                        // const priceTargetToken =
                        //   (await pricer.get({
                        //     symbol: x.symbol,
                        //     address: x.targetToken,
                        //     chainId: _chainId,
                        //   })) ?? 0;
                        const res = {
                            userPositions: [],
                            symbol: x.symbol,
                            decimals: x.decimals,
                            token: x.targetToken,
                        };
                        if (supplyBalance > 0 || borrowBalance > 0) {
                            res.userPositions.push({
                                borrowBalance: borrowBalance,
                                supplyBalance: supplyBalance,
                                token: utils.getAddress(res.token),
                                origin: "Direct",
                            });
                        }
                        finalRes[mainParameter] = res;
                    }
                }
                return finalRes;
            },
        },
    };
}
