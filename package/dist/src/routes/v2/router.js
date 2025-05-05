import Elysia from "elysia";
import merkl from "./merkl";
export const v2 = new Elysia({ tags: ["v2"], prefix: "/v2" }).use(merkl);
