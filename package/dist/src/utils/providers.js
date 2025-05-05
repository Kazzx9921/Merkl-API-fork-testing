import { ChainId, MULTICALL_ADDRESS, Multicall__factory } from "@sdk";
import { providers as p } from "ethers";
const getProviders = () => {
    let parsedProviders = undefined;
    if (!!process.env.PROVIDERS)
        parsedProviders = JSON.parse(process.env.PROVIDERS);
    const providers = Object.keys(ChainId).reduce((prev, chainId) => {
        const url = !!parsedProviders ? parsedProviders[chainId] : process.env?.[`PROVIDER_${chainId}`];
        if (!!url)
            prev[chainId] = new p.StaticJsonRpcProvider(url);
        return prev;
    }, {});
    return providers;
};
export const providers = getProviders();
export const archiveProviders = Object.keys(ChainId).reduce((prev, chainId) => {
    const url = !!process.env?.[`PROVIDER_ARCHIVE_${chainId}`]
        ? process.env?.[`PROVIDER_ARCHIVE_${chainId}`]
        : process.env?.[`PROVIDER_${chainId}`];
    if (!!url)
        prev[chainId] = new p.StaticJsonRpcProvider(url);
    return prev;
}, {});
export const multicalls = Object.keys(ChainId).reduce((prev, chainId) => {
    if (!!providers[chainId])
        prev[chainId] = Multicall__factory.connect(MULTICALL_ADDRESS(chainId), providers[chainId]);
    // else {
    // if (Number.parseInt(chainId).toString() === chainId)
    // log.warn(`No provider found for chain ${NETWORK_LABELS[chainId as unknown as ChainId]}`);
    // }
    return prev;
}, {});
export const archiveMulticalls = Object.keys(ChainId).reduce((prev, chainId) => {
    if (!!archiveProviders[chainId])
        prev[chainId] = Multicall__factory.connect("0xcA11bde05977b3631167028862bE2a173976CA11", archiveProviders[chainId]);
    return prev;
}, {});
