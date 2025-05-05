// https://splice-api-ad64cd01a25d.herokuapp.com/mode/markets?market=0x34cf9BF641bd5f34197060A3f3478a1f97f78f0a
import axios from "axios";
export async function fetchSpliceInformation(marketAddress) {
    const url = `https://splice-api-ad64cd01a25d.herokuapp.com/mode/markets?market=${marketAddress}`;
    try {
        const response = await axios.get(url);
        const market = response.data?.markets[0];
        return {
            symbolUnderlyingToken: market.token.symbol,
            address: market.token.address,
            priceTargetToken: market.pool.price,
            tvl: market.pool.tvl,
        };
    }
    catch (e) {
        return {
            symbolUnderlyingToken: "",
            priceTargetToken: 0,
            address: "",
            tvl: 1,
        };
    }
}
