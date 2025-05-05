import type { GetTransactionsQueryModel } from "@/modules/v4/accounting/accounting.model";
import { ChainId } from "@sdk";
export declare class AccountingService {
    static hashId(chainId: ChainId, fromTokenId: string, toTokenId: string, timestamp: number): string;
    static getTokenId(chainId: number, address: string): string;
    static findMany(query: GetTransactionsQueryModel): Promise<{
        id: string;
        datetime: Date;
        chainId: number;
        timestamp: number;
        recipient: string;
        fromTokenId: string;
        toTokenId: string;
        multisig: string;
        amountIn: string;
        amountOut: string;
    }[]>;
    static getRevenue(): Promise<{
        totalAmount: number;
    }>;
    static getRevenueByChain(chainId: number): Promise<{
        totalAmount: number;
    }>;
    static getAllRevenueBreakdownByChain(): Promise<{
        total: number;
        breakdown: {
            [key: number]: {
                chainAmount: number;
                percentage: number;
            };
        };
    }>;
    static getMonthlyRevenue(year: number, month: number): Promise<{
        total: number;
        breakdown: {
            [key: number]: {
                chainAmount: number;
                percentage: number;
            };
        };
        from: string;
        to: string;
    }>;
    static getMonthlyRevenueByChain(chainId: number, year: number, month: number): Promise<{
        totalAmount: number;
        from: string;
        to: string;
    }>;
    static getTokenTransaction(tokenAddress: string, chainId: number): Promise<{
        totalAmount: number;
        totalAmountUSD: number;
    }>;
    static getTokenMonthlyTransaction(tokenAddress: string, chainId: number, year: number, month: number): Promise<{
        totalAmount: number;
        totalAmountUSD: number;
        from: string;
        to: string;
    }>;
}
