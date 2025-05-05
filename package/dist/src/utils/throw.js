import { OpportunityAction } from "@db/api";
import { isSupportedChain } from "@sdk";
import { utils } from "ethers";
import { InvalidParameter, UnsupportedNetwork } from "./error";
/**
 * Use this function to throw an error if the address is invalid
 * and normalize the address to its checksum version
 *
 * @dev Usage: params.address = throwOnInvalidAddress(params.address);
 */
export const throwOnInvalidRequiredAddress = (address) => {
    try {
        if (!address)
            throw new InvalidParameter("Address is required");
        return utils.getAddress(address?.toLowerCase());
    }
    catch (_) {
        throw new InvalidParameter(`Address ${address} is invalid`);
    }
};
/**
 * Use this function to throw an error if the address is invalid
 * and normalize the address to its checksum version
 *
 * Address can be null or undefined
 *
 * @dev Usage: params.address = throwOnInvalidAddress(params.address);
 */
export const throwOnInvalidAddress = (address) => {
    try {
        if (!address)
            return;
        return utils.getAddress(address?.toLowerCase());
    }
    catch (_) {
        throw new InvalidParameter(`Address ${address} is invalid`);
    }
};
/**
 * Use this function to throw an error if the chainId is not supported by Merkl
 */
export const throwOnUnsupportedChainId = (chainId) => {
    if (chainId && !isSupportedChain(chainId, "merkl"))
        throw new UnsupportedNetwork(chainId);
};
export const throwOnUnsupportedActionList = (actionList) => {
    if (!!actionList) {
        const actions = actionList.split(",");
        for (const action of actions) {
            if (!Object.values(OpportunityAction).includes(action)) {
                throw new Error(`Invalid action: ${action}`);
            }
        }
    }
};
