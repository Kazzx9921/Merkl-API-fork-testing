import { t } from "elysia";
import { merklRoute } from "../v3/merkl";
export const query = t.Object({
    AMMs: t.Optional(t.Union([t.String(), t.Array(t.String())])),
    "AMMs[0]": t.Optional(t.String()),
    "AMMs[]": t.Optional(t.Union([t.String(), t.Array(t.String())])),
    chainIds: t.Optional(t.Union([t.Numeric(), t.Array(t.Numeric())])),
    "chainIds[0]": t.Optional(t.Numeric()),
    "chainIds[]": t.Optional(t.Union([t.Numeric(), t.Array(t.Numeric())])),
    user: t.Optional(t.String()),
    onlyLive: t.Optional(t.String()),
});
export default (app) => app.get("/merkl", merklRoute, { query, tags: ["Merkl"] });
