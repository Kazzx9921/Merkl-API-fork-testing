import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { type CallDto } from "@sdk";
export declare function createCall(target: string, key: string, type?: Erc20SubType, metaData?: any): CallDto;
