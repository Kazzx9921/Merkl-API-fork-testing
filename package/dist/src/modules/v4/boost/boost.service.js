import axios from "axios";
export class BoostService {
    static async getEulerBoost() {
        return (await axios.get("https://points.euler.finance/integrations/merkl/usd0multipliers")).data.map(({ address, score }) => ({ address, boost: score }));
    }
    static async getOpenBlockBoost(query, body) {
        const protocol = query.protocol;
        const target = query.target;
        const url = `https://www.data-openblocklabs.com/zksync/boosts/${protocol}/${target}`;
        const response = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.data.length === 0) {
            throw new Error("No data found");
        }
        return response.data.map(({ address, boost }) => ({ address, boost: boost.toString() }));
    }
}
