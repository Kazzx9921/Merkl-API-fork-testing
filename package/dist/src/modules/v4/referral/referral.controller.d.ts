import Elysia from "elysia";
export declare const ReferralController: Elysia<"/referral", false, {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    type: {};
    error: {};
}, {
    schema: {};
    macro: {};
    macroFn: {};
}, {
    referral: {
        code: {
            get: {
                body: unknown;
                params: {};
                query: {
                    address: string;
                    chainId: number;
                    referralKey: string;
                };
                headers: unknown;
                response: {
                    200: {
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
                    };
                };
            };
        };
    };
} & {
    referral: {
        redeem: {
            get: {
                body: unknown;
                params: {};
                query: {
                    code: string;
                    chainId: number;
                    referralKey: string;
                };
                headers: unknown;
                response: {
                    200: {
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
                    };
                };
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
}, {
    derive: {};
    resolve: {};
    schema: {};
}>;
