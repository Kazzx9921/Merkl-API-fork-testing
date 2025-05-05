import { ProtocolService } from "@/modules/v4/protocol/protocol.service";
import { TokenService } from "@/modules/v4/token/token.service";
import { slugToProtocolId } from "./enso.model";
const ENSO = "https://api.enso.finance/api";
export class EnsoService {
    static async #fetch(route, params) {
        const res = await fetch(`${ENSO}${route}?${params?.query ? new URLSearchParams(params?.query) : ""}`, {
            headers: new Headers({
                Authorization: `Bearer ${"8dbbda50-6ed5-4bda-bf54-ea2796602057"}`,
                "Content-Type": "application/json",
            }),
        });
        const json = await res.json();
        if (res.status !== 200)
            throw new Error(json?.message);
        return json;
    }
    static getSlug(protocolId) {
        const slug = Object.entries(slugToProtocolId).find(([_slug, id]) => id === protocolId)?.[0];
        return slug;
    }
    static getProtocolId(slug) {
        return slugToProtocolId[slug];
    }
    static async getCompatibleProtocols(query) {
        const ensoProtocols = await EnsoService.#fetch("/v1/protocols");
        const protocolIds = ensoProtocols
            .filter(p => query.chainId === undefined || p.chains.some(c => c.id === query.chainId))
            .map(p => EnsoService.getProtocolId(p.slug))
            .filter(id => id !== undefined);
        return await ProtocolService.findMany({
            id: protocolIds.length === 1 ? protocolIds[0] : undefined,
            ids: protocolIds.length > 1 ? protocolIds : undefined,
        });
    }
    static async getTokens(chainId, slug, identifier) {
        const tokens = await EnsoService.#fetch("/v1/tokens", {
            query: identifier
                ? { protocolSlug: slug, chainId, page: 1, address: identifier }
                : { protocolSlug: slug, chainId, page: 1 },
        });
        return tokens.data;
    }
    static async getQuote(query) {
        return await EnsoService.#fetch("/v1/shortcuts/quote", { query });
    }
    static async getTransaction(query) {
        return await EnsoService.#fetch("/v1/shortcuts/route", { query });
    }
    static async getActions(chainId, route, amountOut) {
        return await Promise.all(route.map(async (r) => {
            switch (r.action) {
                case "deposit": {
                    const tokensIn = (await TokenService.findManyOrCreate(r.tokenIn.map(t => ({ address: t, chainId })))).filter(a => !!a);
                    const [tokenOut] = await TokenService.findManyOrCreate(r.tokenOut.map(t => ({ address: t, chainId })));
                    return {
                        action: "deposit",
                        tokens: tokensIn,
                        tokensOut: [{ ...tokenOut, amount: amountOut }],
                    };
                }
                case "swap": {
                    const [from] = await TokenService.findManyOrCreate(r.tokenIn.map(t => ({ address: t, chainId })));
                    const [to] = await TokenService.findManyOrCreate(r.tokenOut.map(t => ({ address: t, chainId })));
                    return { action: "swap", from: from, to: to };
                }
            }
        }));
    }
    static async getTargetsFromTokens(tokens) {
        const targets = [];
        for (const { address, underlyingTokens, ...target } of tokens) {
            try {
                targets.push({
                    provider: "enso",
                    chainId: target.chainId,
                    identifier: address,
                });
            }
            catch { }
        }
        return targets;
    }
    /**
     * Defines abstract router functions
     * @returns Router
     */
    static getRouter() {
        return {
            name: "enso",
            async getTarget(chainId, protocolId, identifier) {
                const slug = EnsoService.getSlug(protocolId);
                if (!slug)
                    return;
                const tokens = await EnsoService.getTokens(chainId, slug, identifier);
                const targets = await EnsoService.getTargetsFromTokens(tokens);
                return targets?.[0];
            },
            async getTransaction(chainId, _protocolId, identifier, userAddress, fromTokenAddress, fromTokenAmount, options) {
                const { tx, ...quote } = await EnsoService.getTransaction({
                    fromAddress: userAddress,
                    tokenIn: [fromTokenAddress],
                    tokenOut: [identifier],
                    routingStrategy: "router",
                    chainId,
                    amountIn: [fromTokenAmount.toString()],
                    slippage: options.slippage?.toString(),
                });
                const [LpToken] = await TokenService.findManyOrCreate([{ address: identifier, chainId }]);
                const depositValue = await TokenService.getValue([{ ...LpToken, amount: BigInt(quote.amountOut) }]);
                const actions = await EnsoService.getActions(chainId, quote.route, BigInt(quote.amountOut));
                return { transaction: tx, depositValue: depositValue, actions };
            },
        };
    }
}
