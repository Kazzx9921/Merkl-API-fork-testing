import { throwOnInvalidAddress } from "@/utils/throw";
export default function checkQueryAddressValidity(queryKey = "user") {
    return (app) => app.onBeforeHandle(({ query }) => {
        const address = query?.[queryKey];
        query[queryKey] = throwOnInvalidAddress(address ?? "");
    });
}
