import { Redis } from "@/cache";
import { t } from "elysia";
export const response = t.Object({ success: t.Boolean() });
export default (app) => app.get("/health", async () => {
    // Check if the cache is working
    await Redis.get("Prices");
    return {
        success: true,
    };
}, {
    query: t.Object({}),
    tags: ["Onchain"],
});
