import axios from "axios";
export class LiquidityRepository {
    static async findManyDolomitePositions(chainId, user) {
        return (await axios.get(`https://api.dolomite.io/balances/${chainId}/users/${user}`)).data.Result;
    }
}
