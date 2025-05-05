import { AccountingRepository } from "@/modules/v4/accounting/accounting.repository";
import { TokenService } from "@/modules/v4/token/token.service";
import { ChainId } from "@sdk";
export class AccountingService {
    static hashId(chainId, fromTokenId, toTokenId, timestamp) {
        return Bun.hash(`${chainId}${fromTokenId}${toTokenId}${timestamp}`).toString();
    }
    static getTokenId(chainId, address) {
        return TokenService.hashId({ chainId, address });
    }
    static async findMany(query) {
        return await AccountingRepository.findMany(query);
    }
    static async getRevenue() {
        const data = await AccountingRepository.getForMultisig();
        let totalAmount = 0;
        for (const tx of data) {
            totalAmount += Number(tx.amountIn);
        }
        return { totalAmount };
    }
    static async getRevenueByChain(chainId) {
        const data = await AccountingRepository.getForMultisigByChain(chainId);
        let totalAmount = 0;
        for (const tx of data) {
            totalAmount += Number(tx.amountIn);
        }
        return { totalAmount };
    }
    static async getAllRevenueBreakdownByChain() {
        const breakdown = {};
        let consolidatedAmount = 0;
        for (const chainId of Object.values(ChainId).filter(id => typeof id === "number")) {
            const data = await AccountingRepository.getForMultisigByChain(chainId);
            let totalAmount = 0;
            for (const tx of data) {
                totalAmount += Number(tx.amountIn);
            }
            breakdown[chainId] = { chainAmount: totalAmount, percentage: 0 };
            consolidatedAmount += totalAmount;
        }
        for (const chainId of Object.values(ChainId).filter(id => typeof id === "number")) {
            const totalAmount = breakdown[chainId].chainAmount;
            breakdown[chainId] = { chainAmount: totalAmount, percentage: (totalAmount * 100) / consolidatedAmount };
        }
        return { total: consolidatedAmount, breakdown };
    }
    static async getMonthlyRevenue(year, month) {
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0, 23, 59, 59);
        const breakdown = {};
        let consolidatedAmount = 0;
        for (const chainId of Object.values(ChainId).filter(id => typeof id === "number")) {
            const monthlyData = await AccountingRepository.getForMultisigByChainBetweenDates(chainId, startDate, endDate);
            let totalAmount = 0;
            for (const tx of monthlyData) {
                totalAmount += Number(tx.amountIn);
            }
            breakdown[chainId] = { chainAmount: totalAmount, percentage: 0 };
            consolidatedAmount += totalAmount;
        }
        for (const chainId of Object.values(ChainId).filter(id => typeof id === "number")) {
            const totalAmount = breakdown[chainId].chainAmount;
            breakdown[chainId] = { chainAmount: totalAmount, percentage: (totalAmount * 100) / consolidatedAmount };
        }
        return { total: consolidatedAmount, breakdown, from: startDate.toDateString(), to: endDate.toDateString() };
    }
    static async getMonthlyRevenueByChain(chainId, year, month) {
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0, 23, 59, 59);
        const monthlyData = await AccountingRepository.getForMultisigByChainBetweenDates(chainId, startDate, endDate);
        let totalAmount = 0;
        for (const tx of monthlyData) {
            totalAmount += Number(tx.amountIn);
        }
        return { totalAmount, from: startDate.toDateString(), to: endDate.toDateString() };
    }
    static async getTokenTransaction(tokenAddress, chainId) {
        const tokenId = AccountingService.getTokenId(chainId, tokenAddress);
        const data = await AccountingRepository.getByTokenForDumper(tokenId);
        let totalAmount = 0;
        let totalAmountUSD = 0;
        for (const tx of data) {
            totalAmount += Number(tx.amountIn);
            totalAmountUSD += Number(tx.amountOut);
        }
        return { totalAmount: totalAmount, totalAmountUSD: totalAmountUSD };
    }
    static async getTokenMonthlyTransaction(tokenAddress, chainId, year, month) {
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0, 23, 59, 59);
        const tokenId = AccountingService.getTokenId(chainId, tokenAddress);
        const monthlyData = await AccountingRepository.getForDumperBetweenDates(tokenId, startDate, endDate);
        let totalAmount = 0;
        let totalAmountUSD = 0;
        for (const tx of monthlyData) {
            totalAmount += Number(tx.amountIn);
            totalAmountUSD += Number(tx.amountOut);
        }
        return {
            totalAmount: totalAmount,
            totalAmountUSD: totalAmountUSD,
            from: startDate.toDateString(),
            to: endDate.toDateString(),
        };
    }
}
