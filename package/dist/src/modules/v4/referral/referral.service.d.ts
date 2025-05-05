export declare abstract class ReferralService {
    #private;
    static abi: readonly [{
        readonly name: "getReferralKeys";
        readonly type: "function";
        readonly stateMutability: "view";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly type: "string[]";
        }];
    }, {
        readonly name: "getReferrerStatus";
        readonly type: "function";
        readonly stateMutability: "view";
        readonly inputs: readonly [{
            readonly type: "string";
            readonly name: "key";
        }, {
            readonly type: "address";
            readonly name: "user";
        }];
        readonly outputs: readonly [{
            readonly type: "bytes32";
        }];
    }, {
        readonly name: "referrerCodeMapping";
        readonly type: "function";
        readonly stateMutability: "view";
        readonly inputs: readonly [{
            readonly type: "string";
            readonly name: "key";
        }, {
            readonly type: "address";
            readonly name: "user";
        }];
        readonly outputs: readonly [{
            readonly type: "string";
        }];
    }, {
        readonly name: "codeToReferrer";
        readonly type: "function";
        readonly stateMutability: "view";
        readonly inputs: readonly [{
            readonly type: "string";
            readonly name: "key";
        }, {
            readonly type: "string";
            readonly name: "user";
        }];
        readonly outputs: readonly [{
            readonly type: "address";
        }];
    }, {
        readonly name: "getReferrer";
        readonly type: "function";
        readonly stateMutability: "view";
        readonly inputs: readonly [{
            readonly type: "string";
            readonly name: "key";
        }, {
            readonly type: "address";
            readonly name: "user";
        }];
        readonly outputs: readonly [{
            readonly type: "address";
        }];
    }, {
        readonly name: "getReferredUsers";
        readonly type: "function";
        readonly stateMutability: "view";
        readonly inputs: readonly [{
            readonly type: "string";
            readonly name: "key";
        }, {
            readonly type: "address";
            readonly name: "user";
        }];
        readonly outputs: readonly [{
            readonly type: "address[]";
        }];
    }, {
        readonly name: "acknowledgeReferrerByKey";
        readonly type: "function";
        readonly stateMutability: "nonpayable";
        readonly inputs: readonly [{
            readonly type: "string";
            readonly name: "key";
        }, {
            readonly type: "string";
            readonly name: "referrerCode";
        }];
        readonly outputs: readonly [];
    }, {
        readonly name: "getCostOfReferral";
        readonly type: "function";
        readonly stateMutability: "view";
        readonly inputs: readonly [{
            readonly type: "string";
            readonly name: "key";
        }];
        readonly outputs: readonly [{
            readonly type: "uint256";
        }];
    }, {
        readonly name: "getPaymentToken";
        readonly type: "function";
        readonly stateMutability: "view";
        readonly inputs: readonly [{
            readonly type: "string";
            readonly name: "key";
        }];
        readonly outputs: readonly [{
            readonly type: "address";
        }];
    }, {
        readonly name: "getReferrerStatusByKey";
        readonly type: "function";
        readonly stateMutability: "view";
        readonly inputs: readonly [{
            readonly type: "string";
            readonly name: "key";
        }, {
            readonly type: "address";
            readonly name: "referrer";
        }];
        readonly outputs: readonly [{
            readonly type: "uint8";
        }];
    }, {
        readonly name: "requiresAuthorization";
        readonly type: "function";
        readonly stateMutability: "view";
        readonly inputs: readonly [{
            readonly type: "string";
            readonly name: "key";
        }];
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly name: "requiresRefererToBeSet";
        readonly type: "function";
        readonly stateMutability: "view";
        readonly inputs: readonly [{
            readonly type: "string";
            readonly name: "key";
        }];
        readonly outputs: readonly [{
            readonly type: "bool";
        }];
    }, {
        readonly name: "becomeReferrer";
        readonly type: "function";
        readonly stateMutability: "payable";
        readonly inputs: readonly [{
            readonly type: "string";
            readonly name: "key";
        }, {
            readonly type: "string";
            readonly name: "referrerCode";
        }];
        readonly outputs: readonly [];
    }];
    static getReferralContract(chainId: number): "0xF39CC381B91f36238c77f42B9fF4D45376F80E5b" | undefined;
    static isKeyAvailable(key: string, chainId: number): Promise<any>;
    static getReferredUsers(chainId: number, key: string, address: string): Promise<any>;
    static getReferralStatus(chainId: number, key: string, address: string): Promise<boolean>;
    static generateCode(chainId: number, key: string, address: string): string;
    static getCode(chainId: number, key: string, address: string): Promise<any>;
    /**
     * Get state & transaction for creating a referral code
     * @param chainId of the referral contract
     * @param key of referral
     * @param address of the creator
     */
    static getCodeOrTransaction(chainId: number, key: string, address: string): Promise<{
        code: string;
        referrer: boolean;
        referredUsers: never[];
        transaction: {
            to: string;
            data: `0x${string}`;
        };
    } | {
        code: any;
        referrer: boolean;
        referredUsers: any;
        transaction?: undefined;
    }>;
    /**
     * Checks if code exists in the contracts
     * @param chainId of the referral contract
     * @param key of referral
     * @param code user referral code
     * @returns referrerAddress if code exitst
     */
    static isCodeRegistered(chainId: number, key: string, code: string): Promise<any>;
    /**
     * Get state & transaction for redeeming a referral code
     * @param chainId of the referral contract
     * @param key of referral
     * @param code user referral code
     */
    static getReferralTransaction(chainId: number, key: string, code: string): Promise<{
        code: string;
        referrer: any;
        transaction?: undefined;
    } | {
        code: string;
        referrer: any;
        transaction: {
            to: string;
            data: `0x${string}`;
        };
    }>;
}
