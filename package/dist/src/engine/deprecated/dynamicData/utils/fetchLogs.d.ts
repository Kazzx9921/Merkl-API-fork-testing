import { type MerklChainId } from "@sdk";
export type LogType = {
    data: string;
    topics: ReadonlyArray<string>;
    blockNumber: string;
    address: string;
    blockHash: string;
    logIndex: string;
};
export declare function fetchLogs(chainId: MerklChainId, topics: string[], addresses: string[], fromBlock: number, toBlock: number): Promise<{
    logs: LogType[];
    block: number;
}>;
export declare function safeFetchLogs(chainId: MerklChainId, topics: string[], addresses: string[], fromBlock: number, toBlock: number): Promise<LogType[]>;
