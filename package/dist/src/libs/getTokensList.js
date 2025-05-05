import { Redis } from "@/cache";
import { log } from "@/utils/logger";
import axios from "axios";
async function getTokensList() {
    let res = {};
    try {
        res = (await axios.get("https://raw.githubusercontent.com/AngleProtocol/angle-token-list/main/ERC20_LIST.json", {
            timeout: 5000,
        })).data[0];
    }
    catch (e) {
        log.error("getTokensList failed", e);
    }
    return res;
}
/**
 * @deprecated
 */
export const getTokensListWithCache = async () => await Redis.getOrSet("TokenList", getTokensList);
