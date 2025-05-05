import { executeSimple } from "@/utils/execute";
// @ts-nocheck
import { Campaign, withTimeout } from "@sdk";
import { MERKL_USER_POSITION_FETCHING_GLOBAL_TIMEOUT } from "../../constants";
import { getEigenLayerUserPositions } from "./EigenLayer";
import { getAjnaUserPositions } from "./ajna";
import { getBadgerUserPositions } from "./badger";
import { getClammUserPositions } from "./clamm";
import { getCompoundUserPositions } from "./compound";
import { getDolomiteUserPositions } from "./dolomite";
import { getERC20UserPositions } from "./erc20";
import { getEulerUserPositions } from "./euler";
import { getMorphoUserPositions } from "./morpho";
import { getSiloUserPositions } from "./silo";
export async function getUserPositionsV2(positionsToCheck, // TODO: add typing (depends on campaign type)
chainId, user) {
    const promises = [];
    for (const key of Object.keys(positionsToCheck)) {
        const numkey = Number(key);
        switch (numkey) {
            case Campaign.CLAMM:
                promises.push(withTimeout(getClammUserPositions(user, chainId, positionsToCheck[numkey]), MERKL_USER_POSITION_FETCHING_GLOBAL_TIMEOUT));
                break;
            case Campaign.ERC20:
                promises.push(withTimeout(executeSimple(chainId, getERC20UserPositions(user, chainId, positionsToCheck[numkey])), MERKL_USER_POSITION_FETCHING_GLOBAL_TIMEOUT));
                break;
            case Campaign.SILO:
                promises.push(withTimeout(executeSimple(chainId, getSiloUserPositions(user, chainId, positionsToCheck[numkey])), MERKL_USER_POSITION_FETCHING_GLOBAL_TIMEOUT));
                break;
            case Campaign.DOLOMITE:
                promises.push(withTimeout(executeSimple(chainId, getDolomiteUserPositions(user, chainId, positionsToCheck[numkey])), MERKL_USER_POSITION_FETCHING_GLOBAL_TIMEOUT));
                break;
            case Campaign.EULER:
                promises.push(withTimeout(executeSimple(chainId, getEulerUserPositions(user, chainId, positionsToCheck[numkey])), MERKL_USER_POSITION_FETCHING_GLOBAL_TIMEOUT));
                break;
            case Campaign.MORPHO:
                promises.push(withTimeout(executeSimple(chainId, getMorphoUserPositions(user, chainId, positionsToCheck[numkey])), MERKL_USER_POSITION_FETCHING_GLOBAL_TIMEOUT));
                break;
            case Campaign.BADGER:
                promises.push(withTimeout(executeSimple(chainId, getBadgerUserPositions(user, chainId, positionsToCheck[numkey])), MERKL_USER_POSITION_FETCHING_GLOBAL_TIMEOUT));
                break;
            case Campaign.AJNA:
                promises.push(withTimeout(executeSimple(chainId, getAjnaUserPositions(user, chainId, positionsToCheck[numkey])), MERKL_USER_POSITION_FETCHING_GLOBAL_TIMEOUT));
                break;
            case Campaign.COMPOUND:
                promises.push(withTimeout(executeSimple(chainId, getCompoundUserPositions(user, chainId, positionsToCheck[numkey])), MERKL_USER_POSITION_FETCHING_GLOBAL_TIMEOUT));
                break;
            case Campaign.EIGENLAYER:
                promises.push(withTimeout(executeSimple(chainId, getEigenLayerUserPositions(user, chainId, positionsToCheck[numkey])), MERKL_USER_POSITION_FETCHING_GLOBAL_TIMEOUT));
        }
    }
    return Object.assign({}, ...(await Promise.all(promises)));
}
