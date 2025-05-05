export declare class TurtleRepository {
    static fetchUserBalances(address: string): Promise<{
        balance: string;
        maxBalance: string;
        tokenSymbol: string;
        token: string;
        turtleDepositBonus: string;
        user: string;
    }[]>;
    static fetchTotals(): Promise<{
        amount: number;
        id: string;
    }[]>;
}
