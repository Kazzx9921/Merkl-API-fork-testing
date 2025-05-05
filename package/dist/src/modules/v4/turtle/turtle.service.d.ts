import type { UserUniqueModel } from "../user/user.model";
export declare abstract class TurtleService {
    static getUserData(params: UserUniqueModel): Promise<{
        [key: string]: {
            vaultSymbol: string;
            balance: number;
            maxBalance: number;
            turtle: number;
        };
    }>;
    static getTotalDistributed(): Promise<{
        total: number;
        breakdown: {
            [key: string]: number;
        };
    }>;
}
