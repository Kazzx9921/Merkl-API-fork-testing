import { log } from "@/utils/logger";
// @ts-nocheck
import { ALM, NETWORK_LABELS, merklSubgraphALMEndpoints, withTimeout } from "@sdk";
import { BigNumber } from "ethers";
import { request } from "graphql-request";
import { almBalancesQuery, almNFTBalancesQuery } from ".";
import { MERKL_USER_POSITION_FETCHING_TIMEOUT } from "../../../../constants";
export async function fetchAlmPositions(chainId, user) {
    const res = {};
    const availableALMEndpoints = merklSubgraphALMEndpoints[chainId];
    if (Object.keys(availableALMEndpoints).length > 0) {
        const almPromises = Object.keys(availableALMEndpoints).map(async (alm) => {
            // FIXME: find another way to assess this issue
            const tgURL = availableALMEndpoints[alm];
            if (!!tgURL) {
                const query = Number.parseInt(alm) === ALM.spNFT ||
                    Number.parseInt(alm) === ALM.ConcentricStaker ||
                    Number.parseInt(alm) === ALM.GammaChef
                    ? almNFTBalancesQuery
                    : almBalancesQuery;
                await withTimeout(request(tgURL, query, {
                    owner: user.toLowerCase(),
                }).then(requestRes => {
                    requestRes.holders.forEach(holder => {
                        res[holder.token] = BigNumber.from(Number.parseInt(alm) === ALM.spNFT ? holder.tokenId : holder.balance);
                    });
                }), MERKL_USER_POSITION_FETCHING_TIMEOUT).catch(error => {
                    const service = `Merkl ALM Subgraph for ${NETWORK_LABELS[chainId]} ${ALM[alm]}`;
                    log.error(service, error, service, tgURL);
                });
            }
        });
        await Promise.all(almPromises);
    }
    return res;
}
