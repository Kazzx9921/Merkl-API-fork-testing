import axios from "axios";
export async function getCrossCurveTokenPrice(address) {
    const apiUrl = `https://api.crosscurve.fi/prices/${address}`;
    let price = 0;
    try {
        const response = await axios.get(apiUrl);
        if (response.data) {
            price = Number(response.data);
        }
    }
    catch (e) { }
    return price;
}
