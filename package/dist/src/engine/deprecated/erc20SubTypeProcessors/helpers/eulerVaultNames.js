// https://splice-api-ad64cd01a25d.herokuapp.com/mode/markets?market=0x34cf9BF641bd5f34197060A3f3478a1f97f78f0a
import axios from "axios";
export async function fetchEulerVaultName(vaultAddress, chainId) {
    const url = `https://raw.githubusercontent.com/euler-xyz/euler-labels/refs/heads/master/${chainId}/vaults.json`;
    try {
        const response = await axios.get(url);
        const vaultName = response.data[vaultAddress].name;
        return vaultName;
    }
    catch {
        return null;
    }
}
