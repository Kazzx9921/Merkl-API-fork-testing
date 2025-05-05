import { TokenService } from "@/modules/v4/token/token.service";
import { chainToKyberLabel, dexIdToProtocolId, } from "./kyberzap.model";
const KYBERZAP = "https://zap-api.kyberswap.com/";
export class KyberZapService {
    static async #fetch(route, params) {
        const res = await fetch(`${KYBERZAP}${chainToKyberLabel[params?.chainId] ?? ""}${route}?${params?.query ? new URLSearchParams(params?.query) : ""}`, {
            headers: new Headers({
                Authorization: `Bearer ${process.env.KYBERSWAP_ZAP_API_KEY}`,
                "Content-Type": "application/json",
                "X-Client-Id": "merkl",
            }),
        });
        if (res.status !== 200)
            throw new Error((await res.json())?.message);
        return (await res.json());
    }
    static async #post(route, params) {
        const res = await fetch(`${KYBERZAP}${chainToKyberLabel[params?.chainId] ?? ""}${route}`, {
            method: "POST",
            body: JSON.stringify(params?.body),
            headers: new Headers({
                Authorization: `Bearer ${process.env.KYBERSWAP_ZAP_API_KEY}`,
                "Content-Type": "application/json",
                "X-Client-Id": "merkl",
            }),
        });
        if (res.status !== 200)
            throw new Error((await res.json())?.message);
        return (await res.json());
    }
    static getDexId(protocolId) {
        const dexId = Object.entries(dexIdToProtocolId).find(([_, id]) => id === protocolId)?.[0];
        return dexId;
    }
    static getChainLabel(chainId) {
        return chainToKyberLabel?.[chainId];
    }
    static getProtocolId(dexId) {
        return dexIdToProtocolId[dexId];
    }
    /**
     * @notice We don't handle tick setting in the UI for now, until we do this give the full-range ticks
     * @param param0
     */
    static getFullRangeTicks() {
        return [-886800, 886800];
    }
    /**
     * Converts the breakdown of actions
     * @param zapActions
     * @returns provider-agnostic interaction actions
     */
    static async getActions(chainId, zapActions) {
        const actions = [];
        const processors = {
            ACTION_TYPE_PROTOCOL_FEE: async ({ protocolFee: { tokens: zapTokens } }) => {
                const tokens = await TokenService.findManyOrCreate(zapTokens.map(({ address }) => ({ address, chainId })));
                return [
                    {
                        action: "fee",
                        tokens: tokens.filter(t => !!t).map((t, i) => ({ ...t, amount: BigInt(zapTokens[i].amount) })),
                    },
                ];
            },
            ACTION_TYPE_AGGREGATOR_SWAP: async ({ aggregatorSwap: { swaps } }) => {
                const swapActions = [];
                for (const { tokenIn, tokenOut } of swaps) {
                    const [from, to] = await TokenService.findManyOrCreate([
                        { address: tokenIn.address, chainId },
                        { address: tokenOut.address, chainId },
                    ]);
                    swapActions.push({
                        action: "swap",
                        from: { ...from, amount: BigInt(tokenIn.amount) },
                        to: { ...to, amount: BigInt(tokenOut.amount) },
                    });
                }
                return swapActions;
            },
            ACTION_TYPE_POOL_SWAP: async ({ poolSwap: { swaps } }) => {
                const swapActions = [];
                for (const { tokenIn, tokenOut } of swaps) {
                    const [from, to] = await TokenService.findManyOrCreate([
                        { address: tokenIn.address, chainId },
                        { address: tokenOut.address, chainId },
                    ]);
                    swapActions.push({
                        action: "swap",
                        from: { ...from, amount: BigInt(tokenIn.amount) },
                        to: { ...to, amount: BigInt(tokenOut.amount) },
                    });
                }
                return swapActions;
            },
            ACTION_TYPE_ADD_LIQUIDITY: async ({ addLiquidity: { tokens: zapTokens } }) => {
                const tokens = await TokenService.findManyOrCreate(zapTokens.map(({ address }) => ({ address, chainId })));
                return [
                    {
                        action: "deposit",
                        tokens: tokens.filter(t => !!t).map((t, i) => ({ ...t, amount: BigInt(zapTokens[i].amount) })),
                    },
                ];
            },
        };
        for (const { type, ...zapAction } of zapActions) {
            const action = await processors[type](zapAction);
            actions.push(...action);
        }
        return actions;
    }
    static async getTransaction(chainId, protocol, identifier, userAddress, fromTokenAddress, fromTokenAmount, slippage) {
        const [lower, upper] = KyberZapService.getFullRangeTicks();
        const { data: route } = await KyberZapService.#fetch("/api/v1/in/route", {
            query: {
                tokenIn: fromTokenAddress,
                amountIn: fromTokenAmount?.toString(),
                "pool.id": identifier,
                "position.tickLower": lower?.toString(),
                "position.tickUpper": upper?.toString(),
                dex: KyberZapService.getDexId(protocol),
                //TODO: add a lesser value here (2% by default)
                slippage: slippage ?? 200,
            },
            chainId,
        });
        const actions = await KyberZapService.getActions(chainId, route.zapDetails.actions);
        const [tokenIn] = await TokenService.findManyOrCreate([{ address: fromTokenAddress, chainId }]);
        const deposit = actions.findLast(({ action }) => action === "deposit");
        const tokenInValue = await TokenService.getValue([{ ...tokenIn, amount: fromTokenAmount }]);
        const depositValue = await TokenService.getValue(deposit.tokens);
        const { data: transaction } = await KyberZapService.#post("/api/v1/in/route/build", {
            query: {},
            body: {
                //TODO: add a more relevant value here
                deadline: 1800000000,
                recipient: userAddress,
                sender: userAddress,
                route: route.route,
                source: "merkl",
            },
            chainId,
        });
        return {
            actions,
            depositValue,
            transaction: {
                to: transaction.routerAddress,
                data: transaction.callData,
                value: transaction.value,
            },
        };
    }
    /**
     * Defines abstract router functions
     * @returns Router
     */
    static getRouter() {
        return {
            name: "zap",
            async getTarget(chainId, protocolId, identifier) {
                const dexId = KyberZapService.getDexId(protocolId);
                const chainLabel = KyberZapService.getChainLabel(chainId);
                if (!dexId || !chainLabel)
                    return;
                return {
                    provider: "zap",
                    chainId: chainId,
                    identifier: identifier,
                };
            },
            async getTransaction(chainId, protocolId, identifier, userAddress, fromTokenAddress, fromTokenAmount, options) {
                return await KyberZapService.getTransaction(chainId, protocolId, identifier, userAddress, fromTokenAddress, fromTokenAmount, options.slippage);
            },
        };
    }
}
