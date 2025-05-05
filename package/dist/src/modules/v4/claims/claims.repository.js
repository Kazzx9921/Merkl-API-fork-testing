import { merklSubgraphClaimsEndpoints } from "@sdk";
import request, { gql } from "graphql-request";
export class ClaimRepository {
    static async fetch(chainId, address) {
        try {
            return (await request(merklSubgraphClaimsEndpoints[chainId], 
            // Request is limited to first 100 by default so needs to be sorted
            gql `query MerklClaims($user: String) {
              merklClaims(where: {user: $user }, orderBy: timestamp, orderDirection: desc) {
                timestamp
                token
                user
                amount
                rawAmount
                root
                id
                txHash
              }
            }
    `, { user: address?.toLowerCase() })).merklClaims;
        }
        catch {
            return (await request(merklSubgraphClaimsEndpoints[chainId], 
            // Request is limited to first 100 by default so needs to be sorted
            gql `query MerklClaims($user: String) {
                merklClaims(where: {user: $user }, orderBy: timestamp, orderDirection: desc) {
                  timestamp
                  token
                  user
                  amount
                  rawAmount
                  root
                  id
                }
              }
      `, { user: address?.toLowerCase() })).merklClaims;
        }
    }
}
