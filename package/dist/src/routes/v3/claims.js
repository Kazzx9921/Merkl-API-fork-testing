import { t } from "elysia";
import checkQueryAddressValidity from "../../hooks/checkQueryAddressValidity";
export const query = t.Object({
    creatorTag: t.Optional(t.String()),
    chainIds: t.Optional(t.Union([t.String(), t.Array(t.String())])),
    byReason: t.Optional(t.BooleanString()),
    user: t.String(),
});
export default (app) => app.use(checkQueryAddressValidity()).get("/claims", async () => {
    return {
        message: "This route is now deprecated removed for performance improvement, please reach out to the team for more information.",
    };
}, {
    query,
    tags: ["Rewards"],
});
