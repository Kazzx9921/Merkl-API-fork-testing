import { AMM, type ANGLE_NETWORKS } from "@sdk";
import { type PositionType } from ".";
export declare function fetchAmmPositions(chainId: (typeof ANGLE_NETWORKS.merkl)[number], user: string, amms: AMM[]): Promise<{
    [amm in AMM]?: {
        nft: PositionType[];
        direct: PositionType[];
    };
}>;
