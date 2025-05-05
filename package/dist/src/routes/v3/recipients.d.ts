import { type Elysia } from "elysia";
/**
 * @deprecated - conversion to v4 done
 */
declare const _default: (app: Elysia) => Elysia<"", false, {
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
    recipients: {
        get: {
            body: unknown;
            params: {};
            query: {
                campaignId: string;
                chainId: number;
            };
            headers: unknown;
            response: {
                200: {
                    recipient: string;
                    reason: string;
                    rewardToken: string;
                    amount: string;
                }[];
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
export default _default;
