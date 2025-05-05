import type { GetTransactionsQueryModel } from "@/modules/v4/accounting/accounting.model";
export declare class AccountingRepository {
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
    static getByTokenForDumper(fromTokenId: string): Promise<{
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
    static getForMonthForRecipient(recipient: string, toTokenId: string, month: number, year: number): Promise<{
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
    static getForMultisigBetweenDates(startDate: Date, endDate: Date): Promise<{
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
    static getForMultisig(): Promise<{
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
    static getForMultisigByChain(chainId: number): Promise<{
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
    static getForMultisigByChainBetweenDates(chainId: number, startDate: Date, endDate: Date): Promise<{
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
    static getForDumperBetweenDates(fromTokenId: string, startDate: Date, endDate: Date): Promise<{
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
}
