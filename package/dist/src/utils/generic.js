import { withRetry } from "@sdk";
import { BigNumber } from "ethers";
import { MAX_NUM_SUBCALLS } from "../constants";
import { multicalls } from "./providers";
async function archiveContractMethodCall(contract, args) {
    return contract.interface.decodeFunctionResult("aggregate3", !!args.blockNumber
        ? await contract.provider.call({
            data: contract.interface.encodeFunctionData("aggregate3", [args.calls]),
            to: contract.address,
        }, BigNumber.from(args.blockNumber).toNumber())
        : await contract.provider.call({
            data: contract.interface.encodeFunctionData("aggregate3", [args.calls]),
            to: contract.address,
        }))[0];
}
export async function batchMulticallCallWithRetry(chainId, args) {
    let fetchedData = [];
    let remainingCalls = args.calls.length;
    let lowerIdx = 0;
    let upperIdx = Math.min(args.calls.length, MAX_NUM_SUBCALLS);
    const multicallBatch = [];
    while (remainingCalls !== 0) {
        multicallBatch.push(await withRetry(archiveContractMethodCall, [
            multicalls[chainId],
            {
                blockNumber: args.blockNumber,
                calls: args.calls.slice(lowerIdx, upperIdx),
            },
        ]));
        remainingCalls -= upperIdx - lowerIdx;
        lowerIdx = upperIdx;
        upperIdx = Math.min(args.calls.length, upperIdx + MAX_NUM_SUBCALLS);
    }
    /** Executing batched multicall */
    const results = await Promise.allSettled(multicallBatch);
    for (let k = 0; k < results.length; k++) {
        const res = results[k];
        if (res.status === "fulfilled") {
            fetchedData = fetchedData.concat(res.value);
        }
    }
    return fetchedData;
}
