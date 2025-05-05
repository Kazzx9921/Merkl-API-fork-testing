import { ChainId, ChainInteractionService } from "@sdk";
import { decodeFunctionResult, encodeFunctionData, parseAbi, } from "viem";
export class ReferralService {
    static abi = parseAbi([
        "function getReferralKeys() external view returns (string[] memory)",
        "function getReferrerStatus(string calldata key, address user) external view returns (bytes32)",
        "function referrerCodeMapping(string key, address user) external view returns (string)",
        "function codeToReferrer(string key, string user) external view returns (address)",
        "function getReferrer(string calldata key, address user) external view returns (address)",
        "function getReferredUsers(string calldata key, address user) external view returns (address[] memory)",
        "function acknowledgeReferrerByKey(string calldata key, string calldata referrerCode) external",
        "function getCostOfReferral(string calldata key) external view returns (uint256)",
        "function getPaymentToken(string calldata key) external view returns (address)",
        "function getReferrerStatusByKey(string calldata key, address referrer) external view returns (uint8)",
        "function requiresAuthorization(string calldata key) external view returns (bool)",
        "function requiresRefererToBeSet(string calldata key) external view returns (bool)",
        "function becomeReferrer(string calldata key, string calldata referrerCode) external payable",
    ]);
    static getReferralContract(chainId) {
        if (chainId === ChainId.ETHERLINK)
            return "0xF39CC381B91f36238c77f42B9fF4D45376F80E5b";
        return;
    }
    /**
     * Makes an on-chain call to the referral contract
     * @param chainId
     * @param functionName
     * @param args
     * @returns
     */
    static async #call(chainId, functionName, args) {
        const referralContractAddress = ReferralService.getReferralContract(chainId);
        if (!referralContractAddress)
            throw new Error(`Referral contract not deployed on chain ${chainId}`);
        return await ChainInteractionService(chainId).fetchAndDecode({
            target: referralContractAddress,
            allowFailure: true,
            callData: encodeFunctionData({
                abi: ReferralService.abi,
                functionName,
                args,
            }),
        }, (r) => decodeFunctionResult({
            abi: ReferralService.abi,
            functionName,
            data: r?.returnData,
        }));
    }
    static async isKeyAvailable(key, chainId) {
        const referralKeys = await ReferralService.#call(chainId, "getReferralKeys", []);
        return referralKeys.includes(key);
    }
    static async getReferredUsers(chainId, key, address) {
        const isReferralKeyAvailable = ReferralService.isKeyAvailable(key, chainId);
        if (!isReferralKeyAvailable)
            throw new Error(`Referral key ${key} not available on ${chainId}`);
        return await ReferralService.#call(chainId, "getReferredUsers", [key, address]);
    }
    static async getReferralStatus(chainId, key, address) {
        const referralContractAddress = ReferralService.getReferralContract(chainId);
        const isReferralKeyAvailable = ReferralService.isKeyAvailable(key, chainId);
        if (!referralContractAddress)
            throw new Error(`Referral contract not deployed on chain ${chainId}`);
        if (!isReferralKeyAvailable)
            throw new Error(`Referral key ${key} not available on ${chainId}`);
        const shouldCheckStatus = await ReferralService.#call(chainId, "requiresAuthorization", [key]);
        if (!shouldCheckStatus)
            return true;
        const referralStatus = await ReferralService.#call(chainId, "getReferrerStatusByKey", [
            key,
            address,
        ]);
        return referralStatus === 1;
    }
    static generateCode(chainId, key, address) {
        const digits = [chainId, key, address, 4, 5, 6].map(() => Math.floor(Math.random() * 10)).join("");
        return `${key.toUpperCase()}-${digits}`;
    }
    static async getCode(chainId, key, address) {
        const referralContractAddress = ReferralService.getReferralContract(chainId);
        if (!referralContractAddress)
            throw new Error(`Referral contract not deployed on chain ${chainId}`);
        const code = await ReferralService.#call(chainId, "referrerCodeMapping", [key, address]);
        return code === "" ? undefined : code;
    }
    /**
     * Get state & transaction for creating a referral code
     * @param chainId of the referral contract
     * @param key of referral
     * @param address of the creator
     */
    static async getCodeOrTransaction(chainId, key, address) {
        const referralContractAddress = ReferralService.getReferralContract(chainId);
        const isReferralKeyAvailable = ReferralService.isKeyAvailable(key, chainId);
        if (!referralContractAddress)
            throw new Error(`Referral contract not deployed on chain ${chainId}`);
        if (!isReferralKeyAvailable)
            throw new Error(`Referral key ${key} not available on ${chainId}`);
        const contractCode = await ReferralService.getCode(chainId, key, address);
        if (!contractCode) {
            const code = ReferralService.generateCode(chainId, key, address);
            return {
                code,
                referrer: false,
                referredUsers: [],
                transaction: {
                    to: referralContractAddress,
                    data: encodeFunctionData({
                        abi: ReferralService.abi,
                        functionName: "becomeReferrer",
                        args: [key, code],
                    }),
                },
            };
        }
        const code = await ReferralService.getCode(chainId, key, address);
        const referredUsers = await ReferralService.getReferredUsers(chainId, key, address);
        return {
            code,
            referrer: true,
            referredUsers,
        };
    }
    /**
     * Checks if code exists in the contracts
     * @param chainId of the referral contract
     * @param key of referral
     * @param code user referral code
     * @returns referrerAddress if code exitst
     */
    static async isCodeRegistered(chainId, key, code) {
        const referralContractAddress = ReferralService.getReferralContract(chainId);
        if (!referralContractAddress)
            throw new Error(`Referral contract not deployed on chain ${chainId}`);
        const referrerAddress = await ReferralService.#call(chainId, "codeToReferrer", [key, code]);
        return referrerAddress === "" ? undefined : referrerAddress;
    }
    /**
     * Get state & transaction for redeeming a referral code
     * @param chainId of the referral contract
     * @param key of referral
     * @param code user referral code
     */
    static async getReferralTransaction(chainId, key, code) {
        const referralContractAddress = ReferralService.getReferralContract(chainId);
        const isReferralKeyAvailable = ReferralService.isKeyAvailable(key, chainId);
        if (!referralContractAddress)
            throw new Error(`Referral contract not deployed on chain ${chainId}`);
        if (!isReferralKeyAvailable)
            throw new Error(`Referral key ${key} not available on ${chainId}`);
        const referrerAddress = await ReferralService.isCodeRegistered(chainId, key, code);
        if (!referrerAddress) {
            return {
                code,
                referrer: referrerAddress,
            };
        }
        return {
            code,
            referrer: referrerAddress,
            transaction: {
                to: referralContractAddress,
                data: encodeFunctionData({
                    abi: ReferralService.abi,
                    functionName: "acknowledgeReferrerByKey",
                    args: [key, code],
                }),
            },
        };
    }
}
