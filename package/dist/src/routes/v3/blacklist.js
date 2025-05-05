import { BlacklistService } from "@/modules/v4/blacklist/blacklist.service";
import { t } from "elysia";
import checkQueryAddressValidity from "../../hooks/checkQueryAddressValidity";
// @dev DEPRECATED - conversion to v4 done
export const query = t.Object({
    user: t.String(),
});
export const response = t.Object({
    isBlacklisted: t.Boolean(),
});
export default (app) => app.use(checkQueryAddressValidity()).get("/blacklist", async ({ query }) => {
    return { isBlacklisted: await BlacklistService.isBlacklisted(query.user) };
}, {
    query,
    response: {
        200: response,
    },
    tags: ["Merkl"],
});
