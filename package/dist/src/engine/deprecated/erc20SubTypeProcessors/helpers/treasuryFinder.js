import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
const treasuryAddresses = {
    "0x3E965117A51186e41c2BB58b729A1e518A715e5F": Erc20SubType.gearbox, // Gearbox ETH Treasury
};
export function getTypeFromTreasuryAddress(address) {
    if (treasuryAddresses[address]) {
        return treasuryAddresses[address];
    }
    return Erc20SubType.unknown;
}
