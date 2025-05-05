import type { BytesLike } from "ethers";
export type MultiCallDataType = {
    target: string;
    callData: BytesLike;
    allowFailure?: boolean;
}[];
export type MerklChainData = {
    merkleRoot: string;
    treeRoot: string;
    lastTreeRoot: string;
    endOfDisputePeriod: number;
    disputeLive: boolean;
    message: string;
    validRewardTokens: {
        token: string;
        minimumAmountPerEpoch: number;
        decimals: number;
        symbol: string;
    }[];
};
