import { throwOnInvalidRequiredAddress } from "@/utils/throw";
import Elysia from "elysia";
import { UserUniqueDto } from "../user/user.model";
import { TurtleService } from "./turtle.service";
// ─── Claim Controller ───────────────────────────────────────────────────────
export const TurtleController = new Elysia({ prefix: "/turtle", detail: { tags: ["Turtle"] } })
    .get("/tac/total", async () => await TurtleService.getTotalDistributed(), {
    detail: {
        description: "Get total TAC distributed and the associated breakdown",
    },
})
    .get("/tac/:address", async ({ params }) => await TurtleService.getUserData(params), {
    params: UserUniqueDto,
    beforeHandle: ({ params }) => {
        params.address = throwOnInvalidRequiredAddress(params.address);
    },
    detail: {
        description: "Get the max balance and balance of the user for its turtle vaults",
    },
});
