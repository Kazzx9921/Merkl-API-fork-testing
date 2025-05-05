import checkQueryAddressValidity from "@/hooks/checkQueryAddressValidity";
import checkQueryChainIdValidity from "@/hooks/checkQueryChainIdValidity";
import { getUserBalances } from "@/libs/tokens/balances";
import { executeSimple } from "@/utils/execute";
import { throwOnInvalidAddress } from "@/utils/throw";
import { t } from "elysia";
export const response = t.Record(t.String({ title: "TokenAddress" }), t.Object({ balance: t.Numeric(), decimals: t.Number(), symbol: t.String() }));
export default (app) => app
    .use(checkQueryChainIdValidity())
    .use(checkQueryAddressValidity())
    .get("/balances", async ({ query }) => {
    const { chainId, user } = query;
    const additionalTokenAddresses = query.additionalTokenAddresses;
    additionalTokenAddresses?.forEach(tokenAddress => throwOnInvalidAddress(tokenAddress));
    return !!additionalTokenAddresses?.length && additionalTokenAddresses?.length > 0
        ? await executeSimple(chainId, getUserBalances(user, chainId, additionalTokenAddresses))
        : await executeSimple(chainId, getUserBalances(user, chainId));
}, {
    query: t.Object({
        additionalTokenAddresses: t.Optional(t.Array(t.String())),
        chainId: t.Numeric(),
        user: t.String(),
    }),
    tags: ["Onchain"],
});
