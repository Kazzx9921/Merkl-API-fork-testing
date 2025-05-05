import request, { gql } from "graphql-request";
const TURTLE_SUBGRAPH_URL = "https://api.goldsky.com/api/public/project_cltpyx1eh5g5v01xi0a5h5xea/subgraphs/merkl-tacTurtle-mainnet/prod/gn";
export class TurtleRepository {
    static async fetchUserBalances(address) {
        try {
            return (await request(TURTLE_SUBGRAPH_URL, gql `query UserBalances($where: UserBalance_filter) {
            userBalances(where: $where) {
              balance
              maxBalance
              tokenSymbol
              token
              turtleDepositBonus
              user
            }
          }
    `, {
                where: {
                    user: address.toLowerCase(),
                },
            })).userBalances;
        }
        catch {
            return [];
        }
    }
    static async fetchTotals() {
        try {
            return (await request(TURTLE_SUBGRAPH_URL, gql `query TurtleDistributeds {
            turtleDistributeds {
              amount
              id
            }
          }
    `, {})).turtleDistributeds;
        }
        catch {
            return [];
        }
    }
}
