import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
const ownerAddresses = {
    "0xbF7E49483881C76487b0989CD7d9A8239B20CA41": Erc20SubType.curve_2,
    "0x42a856dbEBB97AbC1269EAB32f3bb40C15102819": Erc20SubType.satlayer,
    "0x4C911bf7A008C497719CBEb1a376f1cEc9e2c1d6": Erc20SubType.hanji_liquidity_vault_token,
    "0x6e9d701fB6478Ed5972a37886C2BA6C82a4cBb4C": Erc20SubType.gamma, // Gamma Bob owner
    "0x14fB20565a11b15cA2065A06740A0C46F5986eD0": Erc20SubType.lendle_vaults, // Gamma Alice owner
    "0xBebB5CEe893110cF477901AF7FA94E4840606421": Erc20SubType.termmax,
};
export function getTypeFromOwnerAddress(address) {
    if (ownerAddresses[address]) {
        return ownerAddresses[address];
    }
    return Erc20SubType.unknown;
}
