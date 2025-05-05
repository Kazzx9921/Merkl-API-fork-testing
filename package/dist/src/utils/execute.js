// @ts-nocheck
import { MAX_NUM_SUBCALLS } from "@/constants";
import { withRetry } from "@sdk";
import { constants } from "ethers";
import { log } from "./logger";
import { archiveMulticalls, multicalls } from "./providers";
/**
 * Functions
 */
export async function executeSimple(chainId, componentCall) {
    const c = await componentCall;
    if (c.cached === true)
        return c.result;
    return (await execute(chainId, [c.call]))[0];
}
const execute = async (chainId, callList, shouldRetry, blockNumber) => {
    const calls = [];
    for (const subCall of callList) {
        calls.push(...subCall.callData);
    }
    try {
        let result;
        if (calls.length > 0) {
            result = await batchMulticallCall(multicallContractCall, !!blockNumber ? archiveMulticalls[chainId] : multicalls[chainId], { blockNumber: blockNumber, data: calls }, shouldRetry);
        }
        else {
            result = [];
        }
        let startIndex = 0;
        const promises = [];
        for (const subCall of callList) {
            promises.push(subCall.reducer(result.slice(startIndex, startIndex + subCall.callData.length)));
            startIndex += subCall.callData.length;
        }
        return await Promise.all(promises);
    }
    catch (e) {
        for (const subCall of callList) {
            log.error("execute", e);
            subCall.handler();
        }
    }
    return [];
};
async function multicallContractCall(contract, args) {
    let result;
    try {
        // TO SIMULATE - USE CAUTIOUSLY AS IT USES CREDITS
        // console.log(
        //   await callTenderly(
        //     {
        //       chainId: (await contract.provider.getNetwork()).chainId.toString(),
        //       data: contract.interface.encodeFunctionData('aggregate', [args.data]),
        //       from: !!args.from ? args.from : constants.AddressZero,
        //       saveSimulation: true,
        //       to: contract.address,
        //       value: '0',
        //     },
        //     undefined,
        //     true
        //   )
        // );
        result = await contract.provider.call({
            data: contract.interface.encodeFunctionData("aggregate3", [
                args.data.map(c => {
                    return {
                        allowFailure: !!c.allowFailure,
                        callData: c.callData,
                        target: c.target,
                    };
                }),
            ]),
            from: !!args.from ? args.from : constants.AddressZero,
            to: contract.address,
        }, !!args.blockNumber ? args.blockNumber : undefined);
    }
    catch (e) {
        log.error("multicallContractCall failed", e);
        throw new Error("❌ failed to decode multicall data");
    }
    return contract.interface.decodeFunctionResult("aggregate3", result)[0].map((r) => r?.returnData);
}
async function batchMulticallCall(func, contract, args, shouldRetry = true) {
    let callsLeft = args.data.length;
    let lowerIdx = 0;
    let upperIdx = Math.min(args.data.length, MAX_NUM_SUBCALLS);
    const multicallBatch = [];
    while (callsLeft !== 0) {
        multicallBatch.push(shouldRetry
            ? withRetry(func, [
                // TODO: fix typing
                contract,
                {
                    blockNumber: args.blockNumber,
                    data: args.data.slice(lowerIdx, upperIdx),
                },
            ])
            : func(contract, args));
        callsLeft -= upperIdx - lowerIdx;
        lowerIdx = upperIdx;
        upperIdx = Math.min(args.data.length, upperIdx + MAX_NUM_SUBCALLS);
    }
    /** Executing batched multicall */
    const results = await Promise.allSettled(multicallBatch);
    let fetchedData = [];
    for (let k = 0; k < results.length; k++) {
        const res = results[k];
        if (res.status === "fulfilled") {
            fetchedData = fetchedData.concat(res.value);
        }
        else {
            log.error(`batchMulticallCall failed to ${args.data[k].target}, data: ${args.data[k].callData}`, res);
            fetchedData.concat("0x");
        }
    }
    return fetchedData;
}
