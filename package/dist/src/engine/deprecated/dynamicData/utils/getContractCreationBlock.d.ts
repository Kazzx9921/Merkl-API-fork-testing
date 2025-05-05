import type { JsonRpcProvider } from "@ethersproject/providers";
export declare function getContractCreationBlock(contractAddress: string, provider: JsonRpcProvider): Promise<number | undefined>;
