import { BN2Number } from "@sdk";
import { Contract } from "ethers";
import { providers } from "../providers";
export async function getVirtualPrice(chainId, pool) {
    const contract = new Contract(pool, ["function get_virtual_price() external view returns(uint256)"], providers[chainId]);
    return BN2Number(await contract.get_virtual_price());
}
