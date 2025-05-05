import { MERKL_USER_POSITION_FETCHING_TIMEOUT } from "@/constants";
import { log } from "@/utils/logger";
import { ALM, NETWORK_LABELS, merklSubgraphALMEndpoints, withTimeout } from "@sdk";
import { gql, request } from "graphql-request";
const A51StrategiesQuery = gql `
  query Strategies($pool_in: [String]) {
    strategies: strategies(where: { pool_in: $pool_in }, first: 1000) {
        pool
        vault
        id
        tickLower
        tickUpper
    }
  }
`;
export async function fetchA51Strategies(chainId, pools) {
    const tgURL = merklSubgraphALMEndpoints[chainId][ALM.A51];
    const res = {};
    if (!!tgURL && tgURL !== "") {
        await withTimeout(request(tgURL, A51StrategiesQuery, {
            pool_in: pools,
        }), MERKL_USER_POSITION_FETCHING_TIMEOUT)
            .then(fetchedData => {
            for (const strategy of fetchedData.strategies) {
                const pool = strategy.pool.toLowerCase();
                const vault = strategy.vault.toLowerCase();
                if (!res[pool])
                    res[pool] = {};
                if (!res[pool][vault])
                    res[pool][vault] = [];
                res[pool][vault].push({
                    id: strategy.id,
                    tickLower: strategy.tickLower,
                    tickUpper: strategy.tickUpper,
                });
            }
        })
            .catch(error => {
            const service = `Merkl ALM Subgraph for ${NETWORK_LABELS[chainId]} A51`;
            log.error(service, error, service, tgURL);
        });
    }
    return res;
}
