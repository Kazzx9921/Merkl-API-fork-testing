import { log } from "@/utils/logger";
import { apiDbClient } from "@db";
import { DistributorService, NETWORK_LABELS, withTimeout } from "@sdk";
export class MerklRootRepository {
    static async firstRoot(chainId) {
        return await apiDbClient.merklRoot.findFirst({
            where: { chainId },
            orderBy: { timestamp: "desc" },
        });
    }
    static async rootForTimestamp(x) {
        const res = await apiDbClient.$transaction([
            apiDbClient.merklRoot.findFirst({
                where: { chainId: x.chainId, timestamp: { lte: BigInt(x.toTimestamp) } },
                orderBy: { timestamp: "desc" },
            }),
            apiDbClient.merklRoot.findFirst({
                where: { chainId: x.chainId, timestamp: { lte: BigInt(x.fromTimestamp) } },
                orderBy: { timestamp: "desc" },
            }),
        ]);
        if (!res[0] || !res[1]) {
            throw new Error("Root not found");
        }
        return [res[0], res[1]];
    }
    static async fetch(chainId) {
        const RPC_CALL_TIMEOUT = 10_000;
        try {
            // Try fetching the data using a RPC
            const { live, tree, lastTree, endOfDisputePeriod, disputer } = await withTimeout(DistributorService(chainId).fetchUpdateData(), RPC_CALL_TIMEOUT);
            return { live, tree, lastTree, endOfDisputePeriod, disputer };
        }
        catch (e) {
            let errorMessage = null;
            // If the error is a timeout, log a warning and return a void object
            if (e.message === `Timed out after ${RPC_CALL_TIMEOUT}ms`) {
                errorMessage = `fetching Merkle Root for chain ${NETWORK_LABELS[chainId]} timed out`;
            }
            // If the error is a rpc failure, log a warning and return a void object
            if (e.message === "EVMDistributorService: fetchUpdateData multicall failed") {
                errorMessage = `fetching Merkle Root for chain ${NETWORK_LABELS[chainId]} multicall failed`;
            }
            if (errorMessage) {
                log.warn(errorMessage);
                return {}; // Return an empty object to indicate failure and prevent further trials of fetching this
            }
            throw e;
        }
    }
    static async create(x) {
        return await apiDbClient.merklRoot.create({
            data: x,
        });
    }
}
