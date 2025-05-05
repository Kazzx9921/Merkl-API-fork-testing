import { UnauthorizedError } from "@/errors";
import { t } from "elysia";
export const AuthorizationHeadersDto = t.Object({
    authorization: t.String(),
});
export async function BackOfficeGuard({ headers }) {
    if (headers.authorization !== `Bearer ${process.env.BACKOFFICE_SECRET}`) {
        throw new UnauthorizedError();
    }
}
