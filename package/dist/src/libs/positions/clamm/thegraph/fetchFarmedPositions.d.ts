import { AMM, type MerklChainId } from "@sdk";
export type FarmPositionsType = {
    [nftWrapper: string]: {
        farmAddress: string;
        id: string;
        pool: string;
        holder: string;
    }[];
};
export declare function fetchFarmedPositions(chainId: MerklChainId, owners: string[], amm: AMM): Promise<FarmPositionsType>;
