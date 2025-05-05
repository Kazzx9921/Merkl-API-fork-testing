import { TurtleRepository } from "./turtle.repository";
export class TurtleService {
    // ─── Get Turtle User data ─────────────────────────────────────────────────
    static async getUserData(params) {
        const userBalances = await TurtleRepository.fetchUserBalances(params.address);
        return userBalances.reduce((acc, userBalance) => {
            acc[userBalance.token] = {
                vaultSymbol: userBalance.tokenSymbol,
                balance: Number(userBalance.balance),
                maxBalance: Number(userBalance.maxBalance),
                turtle: Number(userBalance.turtleDepositBonus),
            };
            return acc;
        }, {});
    }
    // ─── Get Total Turtle Distributed ─────────────────────────────────────────
    static async getTotalDistributed() {
        const totals = await TurtleRepository.fetchTotals();
        return totals.reduce((acc, item) => {
            if (item.id === "total") {
                acc.total = Number(item.amount);
                return acc;
            }
            acc.breakdown[item.id] = Number(item.amount);
            return acc;
        }, { total: 0, breakdown: {} });
    }
}
