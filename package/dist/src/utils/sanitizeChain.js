import { ChainId, NETWORK_LABELS } from "@sdk";
export const sanitizeChainName = (computeChainId) => {
    return computeChainId === ChainId.MAINNET
        ? "ethereum"
        : NETWORK_LABELS[computeChainId]?.toLowerCase().replaceAll(" ", "");
};
