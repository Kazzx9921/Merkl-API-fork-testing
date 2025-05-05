// @ts-nocheck
import { MERKL_USER_POSITION_FETCHING_TIMEOUT } from "@/constants";
import { log } from "@/utils/logger";
import { AMM, NETWORK_LABELS, getSupportedNFPWrapperMapping, merklSubgraphNFPWrapperEndpoints, withTimeout, } from "@sdk";
import { request } from "graphql-request";
import { nftWrapperPositionsQuery } from ".";
export async function fetchFarmedPositions(chainId, owners, amm) {
    const res = {};
    const promises = getSupportedNFPWrapperMapping(chainId, amm).map(async (wrapper) => {
        const tgURL = merklSubgraphNFPWrapperEndpoints[chainId][wrapper];
        if (!!tgURL) {
            await withTimeout((async () => {
                let hasFollowingPage = true;
                let skip = 0;
                while (hasFollowingPage) {
                    const auxRes = await request(tgURL, nftWrapperPositionsQuery, {
                        first: 1_000,
                        owners: owners.map(owner => owner.toLowerCase()),
                        skip,
                    });
                    if (auxRes.holderNFTs.length < 1000) {
                        hasFollowingPage = false;
                    }
                    skip += 1000;
                    res[wrapper] = (res[wrapper] ?? []).concat(auxRes.holderNFTs.map(p => {
                        return {
                            farmAddress: p.id.split("_")[2],
                            id: p.tokenId,
                            pool: p.token,
                            holder: p.holder,
                        };
                    }));
                }
            })(), MERKL_USER_POSITION_FETCHING_TIMEOUT).catch(error => {
                const service = `merkl non fungible pos wrapper subgraph for ${NETWORK_LABELS[chainId]} ${AMM[amm]}`;
                log.error(service, error, service, tgURL);
            });
        }
    });
    await Promise.all(promises);
    return res;
}
