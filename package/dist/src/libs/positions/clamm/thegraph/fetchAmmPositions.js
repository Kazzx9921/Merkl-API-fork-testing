import { log } from "@/utils/logger";
// @ts-nocheck
import { AMM, NETWORK_LABELS, merklSubgraphAMMEndpoints, withTimeout } from "@sdk";
import { request } from "graphql-request";
import { positionsQuery } from ".";
import { MERKL_USER_POSITION_FETCHING_TIMEOUT } from "../../../../constants";
export async function fetchAmmPositions(chainId, user, amms) {
    const res = {};
    const promises = amms.map(async (amm) => {
        const tgURL = merklSubgraphAMMEndpoints[chainId][amm];
        if (!!tgURL && tgURL !== "") {
            await withTimeout(request(tgURL, positionsQuery, {
                owner: user?.toLowerCase(),
            }), MERKL_USER_POSITION_FETCHING_TIMEOUT)
                .then(fetchedData => {
                res[amm] = { nft: [], direct: [] };
                res[amm].nft = fetchedData?.nft?.reduce((prev, curr) => {
                    if (!prev.map(i => i.id).includes(curr.id))
                        prev.push(curr);
                    return prev;
                }, []);
                res[amm].direct = fetchedData?.direct?.reduce((prev, curr) => {
                    if (!prev.map(i => i.id).includes(curr.id))
                        prev.push(curr);
                    return prev;
                }, []);
            })
                .catch(error => {
                const service = `Merkl AMM Subgraph for ${NETWORK_LABELS[chainId]} ${AMM[amm]}`;
                log.error(service, error, service, tgURL);
            });
        }
    });
    await Promise.all(promises);
    return res;
}
