import checkQueryAddressValidity from "@/hooks/checkQueryAddressValidity";
import checkQueryChainIdValidity from "@/hooks/checkQueryChainIdValidity";
import { getTokenInfo } from "@/libs/tokens/tokenInfo";
import { executeSimple } from "@/utils/execute";
import { t } from "elysia";
export const query = t.Object({
    chainId: t.Numeric(),
    address: t.String(),
});
export const response = t.Object({
    name: t.String(),
    symbol: t.String(),
    decimals: t.Number(),
});
export default (app) => app
    .use(checkQueryChainIdValidity())
    .use(checkQueryAddressValidity("address"))
    .get("/token", async ({ query: { address, chainId } }) => {
    return await executeSimple(chainId, getTokenInfo(address));
}, {
    query,
    response: { 200: response },
    tags: ["Onchain"],
});
