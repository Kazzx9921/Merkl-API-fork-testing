import type { Opportunity } from "@/modules/v4/opportunity/opportunity.model";
import type { MerklChainId } from "@sdk";
export type PositionT = {
    flags: {
        range?: string;
        id?: string;
        link?: string;
    };
    opportunity: Opportunity["model"];
    tokens: {
        token: Opportunity["model"]["tokens"][0];
        breakdown: {
            type: string;
            value: number;
        }[];
    }[];
};
export interface PositionFetcher {
    fetchPositions(chainId: MerklChainId, user: string, opportunity: Opportunity["model"][]): Promise<PositionT[]>;
}
export declare const PositionsInputDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    address: import("@sinclair/typebox").TString;
}>;
export type PositionsInputModel = typeof PositionsInputDto.static;
