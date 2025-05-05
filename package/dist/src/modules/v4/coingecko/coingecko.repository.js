import axios from "axios";
export class CoingeckoRepository {
    static async findList() {
        return (await axios.get("https://api.coingecko.com/api/v3/coins/list")).data;
    }
    static async findMarkets(ids) {
        return (await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250${!!ids ? `&ids=${ids.join(",")}` : ""}`)).data;
    }
}
