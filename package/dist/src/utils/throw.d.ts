import { type ChainId } from "@sdk";
/**
 * Use this function to throw an error if the address is invalid
 * and normalize the address to its checksum version
 *
 * @dev Usage: params.address = throwOnInvalidAddress(params.address);
 */
export declare const throwOnInvalidRequiredAddress: (address: string) => string;
/**
 * Use this function to throw an error if the address is invalid
 * and normalize the address to its checksum version
 *
 * Address can be null or undefined
 *
 * @dev Usage: params.address = throwOnInvalidAddress(params.address);
 */
export declare const throwOnInvalidAddress: (address: string | undefined) => string | undefined;
/**
 * Use this function to throw an error if the chainId is not supported by Merkl
 */
export declare const throwOnUnsupportedChainId: (chainId: ChainId) => void;
export declare const throwOnUnsupportedActionList: (actionList: string) => void;
