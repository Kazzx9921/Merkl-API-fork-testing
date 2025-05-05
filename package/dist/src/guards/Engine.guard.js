import { UnauthorizedError } from "@/errors";
import { t } from "elysia";
export const AuthorizationHeadersDto = t.Object({
    authorization: t.String(),
});
export async function EngineGuard({ headers }) {
    if (headers.authorization !== `Bearer ${process.env.ENGINE_SECRET}`) {
        throw new UnauthorizedError();
    }
}
