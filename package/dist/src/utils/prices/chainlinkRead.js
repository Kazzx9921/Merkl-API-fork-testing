import { BN2Number } from "@sdk";
import { Contract, utils } from "ethers";
import { providers } from "../providers";
export async function getChainlinkLatestPrice(chainId, oracle) {
    const abi = new utils.Interface(["function latestAnswer() external view returns(int256)"]);
    const contract = new Contract(oracle, abi, providers[chainId]);
    return BN2Number(await contract.latestAnswer(), 8);
}
