import { BN2Number, Stable, UniswapV2PoolInterface } from "@sdk";
import { Contract } from "ethers";
import { multicalls, providers } from "../providers";
export async function getCurveV2Price(chainId, prices, pool, token) {
    const abi = [
        "function balances(uint256) external view returns(uint256)",
        "function totalSupply() external view returns(uint256)",
        "function token() external view returns(address)",
    ];
    const contract = new Contract(pool, abi, providers[chainId]);
    const tokenContract = new Contract(token, abi, providers[chainId]);
    return ((BN2Number(await contract.balances(0)) * prices["FRAX"] +
        BN2Number(await contract.balances(1)) * prices[Stable.EUR]) /
        BN2Number(await tokenContract.totalSupply()));
}
export async function getUniV2Price(chainId, priceToken0, priceToken1, poolAddress) {
    const [, result] = await multicalls[chainId].callStatic.aggregate([
        {
            callData: UniswapV2PoolInterface.encodeFunctionData("getReserves"),
            target: poolAddress,
        },
        {
            callData: UniswapV2PoolInterface.encodeFunctionData("token0"),
            target: poolAddress,
        },
        {
            callData: UniswapV2PoolInterface.encodeFunctionData("token1"),
            target: poolAddress,
        },
        {
            callData: UniswapV2PoolInterface.encodeFunctionData("totalSupply"),
            target: poolAddress,
        },
    ]);
    const [reserve0, reserve1] = UniswapV2PoolInterface.decodeFunctionResult("getReserves", result[0]);
    const _token0 = UniswapV2PoolInterface.decodeFunctionResult("token0", result[1])[0];
    const _token1 = UniswapV2PoolInterface.decodeFunctionResult("token1", result[2])[0];
    const totalSupply = UniswapV2PoolInterface.decodeFunctionResult("token1", result[3])[0];
    return (BN2Number(reserve0) * priceToken0 + BN2Number(reserve1) * priceToken1) / BN2Number(totalSupply);
}
