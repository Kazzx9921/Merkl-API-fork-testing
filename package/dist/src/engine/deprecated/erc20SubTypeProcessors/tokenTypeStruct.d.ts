import type { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import type { CallDto } from "@sdk";
export type tokenTypeStruct = {
    type: Erc20SubType;
    calls: CallDto[];
    typeInfo: any;
};
