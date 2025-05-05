import type { Token } from "@/modules/v4/token/token.model";
import type { UserUniqueModel } from "@/modules/v4/user/user.model";
import type { ChainId } from "@sdk";
import type { ClaimModel } from "./claims.model";
export declare abstract class ClaimService {
    static getHistoricalClaims(params: UserUniqueModel, chainFilter?: ChainId[]): Promise<(ClaimModel & {
        token?: Token["model"];
    })[]>;
}
