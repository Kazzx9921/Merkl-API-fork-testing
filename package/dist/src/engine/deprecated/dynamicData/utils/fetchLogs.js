import { log } from "@/utils/logger";
import { ChainId, ChainInteractionService, getContractCreationBlock } from "@sdk";
import axios from "axios";
export async function fetchLogs(chainId, topics, addresses, fromBlock, toBlock) {
    const url = ChainInteractionService(chainId).provider().connection.url;
    if (fromBlock === undefined || fromBlock === null || !toBlock || fromBlock > toBlock) {
        throw new Error(`fromBlock and toBlock are required and fromBlock must be less than toBlock - fromBlock: ${fromBlock} - toBlock:${toBlock}`);
    }
    // Take the min of all address creation blocks
    if (fromBlock === 0) {
        let contractCreationBlock = toBlock;
        for (const address of addresses) {
            try {
                const aux = await getContractCreationBlock(address, ChainInteractionService(chainId).provider());
                if (aux < contractCreationBlock) {
                    contractCreationBlock = aux;
                }
            }
            catch {
                contractCreationBlock = 0;
                log.warn(`⚠️ couldn't get contract creation blocknumber for ${address}`);
            }
        }
        fromBlock = contractCreationBlock;
    }
    const headers = {
        accept: "application/json",
        "content-type": "application/json",
    };
    let tempFromBlock = fromBlock;
    let tempToBlock = toBlock;
    log.info(`⏳ fetching logs between blocks ${fromBlock} and ${toBlock}`);
    let step = tempToBlock - tempFromBlock;
    // Binary search to fetch logs and avoid errors
    let logs = [];
    // Binary search to fetch logs and avoid errors
    let isRateLimitingError = false;
    let stepLimited = false;
    const maxLogsPerRequest = 10_000;
    while (true) {
        try {
            const data = {
                id: 1,
                jsonrpc: "2.0",
                method: "eth_getLogs",
                params: [
                    {
                        address: addresses,
                        topics: topics,
                        fromBlock: `0x${(tempFromBlock).toString(16)}`, // fromBlock is included
                        toBlock: `0x${tempToBlock.toString(16)}`, // toBlock is included
                    },
                ],
            };
            try {
                const res = await axios.post(url, data, { headers });
                if (res?.data?.error?.code === -32602)
                    throw new Error("Log size exceeded");
                if (res.data.error?.code === 429) {
                    isRateLimitingError = true;
                    throw new Error("Rate Limiting");
                }
                if (res.data.error?.code === 413) {
                    throw new Error("Request entity too large");
                }
                if (res.data.error?.code === -32000 && chainId === ChainId.AVALANCHE) {
                    stepLimited = true;
                    step = 2047 * 2;
                    throw new Error("Block width exceeded");
                }
                if (res.data.error?.code === -32000 && chainId === ChainId.BSC) {
                    // Reall error is: " block not found x"
                    throw new Error("Log size exceeded");
                }
                // Check if we hit the maximum log limit for a single call
                if (res.data.result?.length === 10000)
                    throw new Error("Log size exceeded");
                const logsBatch = res.data.result || [];
                logs = logs.concat(...logsBatch);
                const batchSize = logsBatch.length;
                const blockRange = tempToBlock - tempFromBlock + 1;
                if (!stepLimited) {
                    if (batchSize === 0) {
                        // Add safeguard for 0 logs case
                        // If no logs found, increase step size
                        step = Math.floor(step * 2);
                    }
                    else {
                        // Aggressive adjustment based on how far we are from optimal logs per request
                        const optimalLogsPerRequest = maxLogsPerRequest * 0.7; // Target 70% of max logs per request
                        const logsPerRequestRatio = batchSize / optimalLogsPerRequest;
                        if (batchSize < maxLogsPerRequest * 0.8) {
                            // More aggressive adjustment when far from target
                            const adjustmentFactor = (1 / logsPerRequestRatio) ** 0.7; // Non-linear scaling
                            step = Math.floor(step * adjustmentFactor);
                            // Allow for larger jumps when log density is very low
                            if (logsPerRequestRatio < 0.2) {
                                step = Math.floor(step * 2);
                            }
                        }
                        else {
                            // Quick reduction when close to limit
                            step = Math.floor(step * 0.4);
                        }
                    }
                }
                log.local(`fetched ${batchSize} logs between blocks ${tempFromBlock} and ${tempToBlock} (block range: ${blockRange})`);
            }
            catch (e) {
                if (e.toString() === "Error: Request failed with status code 429") {
                    isRateLimitingError = true;
                }
                if (isRateLimitingError) {
                    /** Sleeping to reduce the chances of being rate limited */
                    await new Promise(resolve => setTimeout(resolve, 10_000));
                    throw new Error("Rate Limiting");
                }
                const message = `error making POST request: ${e}`;
                log.error("fetchLogs", message);
                throw new Error(message);
            }
            if (tempToBlock === toBlock)
                break;
            tempFromBlock = Math.min(tempToBlock + 1, toBlock);
            tempToBlock = Math.min(tempToBlock + step, toBlock);
        }
        catch {
            if (!isRateLimitingError) {
                step = Math.floor(step / 2);
            }
            else {
                isRateLimitingError = false;
            }
            if (step === 0) {
                log.error("❌ fetchLogs", `error fetching logs for ${addresses} on ${ChainId[chainId]}`);
                return { logs, block: tempFromBlock };
            }
            tempToBlock = tempFromBlock + step;
        }
    }
    return { logs, block: toBlock };
}
export async function safeFetchLogs(chainId, topics, addresses, fromBlock, toBlock) {
    const { logs, block } = await fetchLogs(chainId, topics, addresses, fromBlock, toBlock);
    if (block !== toBlock) {
        throw new Error(`error fetching logs for ${addresses}`);
    }
    return logs;
}
