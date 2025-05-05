import type { Resource } from "../prisma";
/**
 * Explorer
 * @description A chain explorer
 * @see {@link Resource}
 */
export type Explorer = Resource<"Explorer", "id">;
export declare const CreateExplorerDto: import("@sinclair/typebox").TObject<{
    chainId: import("@sinclair/typebox").TNumber;
    type: import("@sinclair/typebox").TEnum<{
        ETHERSCAN: "ETHERSCAN";
        BLOCKSCOUT: "BLOCKSCOUT";
    }>;
    url: import("@sinclair/typebox").TString;
}>;
export type CreateExplorerDto = typeof CreateExplorerDto.static;
