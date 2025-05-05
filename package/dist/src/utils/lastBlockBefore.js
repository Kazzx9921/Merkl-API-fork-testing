import { Redis } from "@/cache";
import { hashArray } from "@/utils/hashArray";
import { BigNumber } from "ethers";
import moment from "moment";
import { log } from "./logger";
import { providers } from "./providers";
/**
 * Fetches the timestamp of a block with up to RETRIES retries in case of failure
 */
const RETRIES = 10;
export const getBlockTimestamp = async (provider, blockNumber) => {
    let res = null;
    let trial = 0;
    while (res === null && trial < RETRIES) {
        try {
            res = await provider.send("eth_getBlockByNumber", [`0x${blockNumber.toString(16)}`, false]);
        }
        catch { }
        trial++;
    }
    if (trial > 1) {
        console.log(`${trial - 1} calls failed fetching blocktimestamp for block ${blockNumber}.`);
    }
    return BigNumber.from(res?.timestamp).toNumber();
};
/**
 * Binary search to search the last block before a given timestamp
 */
const getLastBlockBefore = async (timestamp, chainId) => {
    if (moment().unix() < timestamp) {
        log.error("getLastBlockBefore", `Timestamp ${timestamp} is in the future`);
        return 0;
    }
    const provider = providers[chainId];
    const current = await provider.getBlockNumber();
    let upper = current;
    let lower = 0;
    let step = Math.floor((upper - lower) / 2);
    let fixUpper = false;
    let fixLower = false;
    while (upper - lower > 1) {
        // Reduce step size of interval has been found
        if (upper - lower < 2 * step) {
            step = Math.floor(step / 2);
            fixUpper = false;
            fixLower = false;
        }
        // Check reduction of upper bound
        if (!fixUpper) {
            const auxUpper = upper - step;
            const auxUpperTimestamp = await getBlockTimestamp(provider, auxUpper);
            if (auxUpperTimestamp > timestamp) {
                upper = auxUpper;
            }
            else {
                fixUpper = true;
            }
        }
        // Check reduction of lower bound
        if (!fixLower) {
            const auxLower = lower + step;
            const auxLowerTimestamp = await getBlockTimestamp(provider, auxLower);
            if (auxLowerTimestamp <= timestamp) {
                lower = auxLower;
            }
            else {
                // auxLower timestamp >= timestamp
                // We want to return the last block with a timestamp <= timestamp
                fixLower = true;
                if (auxLowerTimestamp === timestamp) {
                    return auxLower;
                }
            }
        }
    }
    return lower;
};
export const getLastBlockBeforeWithCache = async (timestamp, chainId) => await Redis.getOrSet(`LastBlockBefore_${hashArray([timestamp, chainId])}`, getLastBlockBefore, timestamp, chainId);
