export type ClaimModel = {
    timestamp: number;
    token: string;
    user: string;
    amount: string;
    rawAmount: string;
    root: string;
    txHash?: string;
};
