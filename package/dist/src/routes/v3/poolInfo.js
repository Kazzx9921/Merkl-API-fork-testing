import { log } from "@/utils/logger";
import { providers } from "@/utils/providers";
import { AMM, BN2Number, FactoryAddress, IzumiPool__factory, UniswapV3Pool__factory } from "@sdk";
import { t } from "elysia";
import { ethers, utils } from "ethers";
import checkQueryChainIdValidity from "../../hooks/checkQueryChainIdValidity";
const fetchPoolData = async (poolAddress, chainId) => {
    const result = {};
    const poolContract = UniswapV3Pool__factory.connect(poolAddress.toLowerCase(), providers[chainId]);
    const izumiContract = IzumiPool__factory.connect(poolAddress.toLowerCase(), providers[chainId]);
    try {
        let poolName = "";
        const factory = await poolContract.factory();
        let found = false;
        for (const amm in AMM) {
            // enums store both name and index as keys, we are only interesed by the names one
            if (!Number.isNaN(Number(amm)))
                continue;
            const sdkFactoryAddress = FactoryAddress[chainId][AMM[amm]];
            if (!!sdkFactoryAddress &&
                utils.getAddress(factory.toLowerCase()) === utils.getAddress(sdkFactoryAddress.toLowerCase())) {
                found = true;
                result.amm = AMM[amm];
                poolName += `${amm} - `;
                break;
            }
        }
        if (!found)
            return result;
        try {
            const token0 = await poolContract.token0();
            result.token0 = token0;
            const tokenContract = new ethers.Contract(token0, ["function symbol() external view returns(string)"], providers[chainId]);
            poolName += await tokenContract.symbol();
        }
        catch (error) {
            try {
                const token0 = await izumiContract.tokenX();
                result.token0 = token0;
                const tokenContract = new ethers.Contract(token0, ["function symbol() external view returns(string)"], providers[chainId]);
                poolName += await tokenContract.symbol();
            }
            catch {
                log.error(`❌ cannot fetch token0 data for ${poolName}`, error);
            }
        }
        try {
            const token1 = await poolContract.token1();
            result.token1 = token1;
            const tokenContract = new ethers.Contract(token1, ["function symbol() external view returns(string)"], providers[chainId]);
            poolName += `/${await tokenContract.symbol()}`;
        }
        catch (error) {
            try {
                const token1 = await izumiContract.tokenY();
                result.token1 = token1;
                const tokenContract = new ethers.Contract(token1, ["function symbol() external view returns(string)"], providers[chainId]);
                poolName += await tokenContract.symbol();
            }
            catch {
                log.error(`❌ cannot fetch token1 data for ${poolName}`, error);
            }
        }
        try {
            const fee = await poolContract.fee();
            result.fee = BN2Number(fee, 4);
            poolName += `-${BN2Number(fee, 4)}%`;
        }
        catch (error) {
            log.error(`cannot fetch fee for ${poolName}`, error);
        }
        result.name = poolName;
    }
    catch (e) {
        log.error("fetchUniswapV3PoolData failed", e);
    }
    return result;
};
export const query = t.Object({
    chainId: t.Numeric(),
    poolAddress: t.String(),
});
export default (app) => app.use(checkQueryChainIdValidity()).get("/poolInfo", async ({ query }) => {
    return await fetchPoolData(query.poolAddress, query.chainId);
}, {
    query,
    tags: ["Protocols"],
});
