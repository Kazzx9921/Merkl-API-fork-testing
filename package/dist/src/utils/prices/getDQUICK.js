import { BN2Number } from "@sdk";
import { Contract, utils } from "ethers";
import { providers } from "../providers";
export async function getDQUICKPrice(chainId, contractAddress, assetDecimals = 18, vaultDecimals = 18) {
    const contract = new Contract(contractAddress, ["function dQUICKForQUICK(uint256) external view returns(uint256)"], providers[chainId]);
    const assetAmount = await contract.dQUICKForQUICK(utils.parseUnits("1", vaultDecimals));
    return BN2Number(assetAmount, assetDecimals);
}
