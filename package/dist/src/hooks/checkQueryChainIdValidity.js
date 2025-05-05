import { throwOnUnsupportedChainId } from "@/utils/throw";
export default function checkQueryChainIdValidity(queryKey = "chainId") {
    return (app) => app.onBeforeHandle(({ query }) => {
        const chainId = query?.[queryKey];
        chainId !== undefined && throwOnUnsupportedChainId(chainId);
    });
}
