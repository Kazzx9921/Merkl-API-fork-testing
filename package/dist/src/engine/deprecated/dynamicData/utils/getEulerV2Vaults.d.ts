import { type EulerVaultType, eulerChainIds } from "@sdk";
export declare enum LoggedEntityType {
    EULER = "EULER_VAULT",
    UNISWAP_V4 = "UNISWAP_V4"
}
type EulerChainId = (typeof eulerChainIds)[number];
export declare function getEulerV2Vaults(chainId?: EulerChainId): Promise<EulerVaultType[]>;
export declare function updateEulerVaultsCollatInDatabase(chainId?: EulerChainId): Promise<void>;
export {};
