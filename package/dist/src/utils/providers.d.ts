import { type ethers } from "ethers";
export declare const providers: {
    [x: string]: ethers.providers.StaticJsonRpcProvider | ethers.providers.InfuraProvider;
};
export declare const archiveProviders: {
    [x: string]: ethers.providers.StaticJsonRpcProvider | ethers.providers.InfuraProvider;
};
export declare const multicalls: {
    [chainId: number]: Multicall;
};
export declare const archiveMulticalls: {
    [chainId: number]: Multicall;
};
