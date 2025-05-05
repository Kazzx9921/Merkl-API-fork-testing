import { Erc20SubType } from ".";
import { EulerMetadata } from "./implementations/euler/metadata";
import { EulerTVLBuilder } from "./implementations/euler/tvl";
import { GearboxMetadata } from "./implementations/gearbox/metadata";
import { GearboxTVLBuilder } from "./implementations/gearbox/tvl";
import { LendleMetadata } from "./implementations/lendleVaults/metadata";
import { LendleTVLBuilder } from "./implementations/lendleVaults/tvl";
import { SuperlendMetadata } from "./implementations/superlend/metadata";
import { SuperlendTVLBuilder } from "./implementations/superlend/tvl";
import { TermMaxMetadata } from "./implementations/termmax/metadata";
import { TermMaxTVLBuilder } from "./implementations/termmax/tvl";
/**
 * @dev TYPE SAFETY DISABLED FOR NOW AS WE DON'T HAVE ALL THE CAMPAIGNS IMPLEMENTED
 *
 * @dev Casts are made to enforce type safety
 * @dev A type error must be thrown if a new erc20Subtype is added and the corresponding builder is not implemented
 */
const tvlMap = {
    [Erc20SubType.gearbox]: new GearboxTVLBuilder(),
    [Erc20SubType.superlend_borrowing]: new SuperlendTVLBuilder(),
    [Erc20SubType.superlend_lending]: new SuperlendTVLBuilder(),
    [Erc20SubType.euler_borrow]: new EulerTVLBuilder(),
    [Erc20SubType.euler_lend]: new EulerTVLBuilder(),
    [Erc20SubType.lendle_vaults]: new LendleTVLBuilder(),
    [Erc20SubType.termmax]: new TermMaxTVLBuilder(),
};
export const erc20SubTypeTVLBuilderFactory = (erc20Subtype) => {
    if (!tvlMap[erc20Subtype]) {
        return null;
    }
    return tvlMap[erc20Subtype];
};
/**
 * @dev TYPE SAFETY DISABLED FOR NOW AS WE DON'T HAVE ALL THE CAMPAIGNS IMPLEMENTED
 *
 * @dev Casts are made to enforce type safety
 * @dev A type error must be thrown if a new erc20Subtype is added and the corresponding builder is not implemented
 */
const metadataMap = {
    [Erc20SubType.gearbox]: new GearboxMetadata(),
    [Erc20SubType.superlend_borrowing]: new SuperlendMetadata(),
    [Erc20SubType.superlend_lending]: new SuperlendMetadata(),
    [Erc20SubType.euler_borrow]: new EulerMetadata(),
    [Erc20SubType.euler_lend]: new EulerMetadata(),
    [Erc20SubType.lendle_vaults]: new LendleMetadata(),
    [Erc20SubType.termmax]: new TermMaxMetadata(),
};
export const erc20SubTypeMetadataBuilderFactory = (erc20Subtype) => {
    if (!metadataMap[erc20Subtype]) {
        return null;
    }
    return metadataMap[erc20Subtype];
};
