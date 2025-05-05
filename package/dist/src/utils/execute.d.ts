import type { MultiCallDataType } from "../types";
/**
 * Types
 */
type CachedResult<T> = {
    cached: true;
    result: T;
};
type ComponentReturnType<T> = Promise<CachedResult<T> | UncachedResult<T>>;
export type UncachedResult<T> = {
    cached: false;
    call: {
        callData: MultiCallDataType;
        reducer: (result: string[]) => Promise<T>;
        handler: () => void;
    };
};
/**
 * Functions
 */
export declare function executeSimple<T>(chainId: number, componentCall: ComponentReturnType<T>): Promise<T>;
export {};
