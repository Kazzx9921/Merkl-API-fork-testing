import Elysia from "elysia";
import allowances from "./allowances";
import balances from "./balances";
import prices from "./prices";
import tokens from "./tokens";
export const v1 = new Elysia({ tags: ["v1"], prefix: "/v1" }).use(allowances).use(balances).use(prices).use(tokens);
