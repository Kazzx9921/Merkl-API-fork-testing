import { UnauthorizedError } from "@/errors";
import { t } from "elysia";
export const AuthorizationHeadersDto = t.Object({
    authorization: t.String(),
});
export async function TokenAuthGuard({ headers }) {
    if (headers.authorization !== `Bearer ${process.env.API_SECRET}`) {
        throw new UnauthorizedError();
    }
}
