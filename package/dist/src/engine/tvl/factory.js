import { UniswapV4TVLBuilder } from "@/engine/implementations/UniswapV4/tvl";
import { Campaign } from "@sdk";
import { AjnaTVLBuilder } from "../implementations/Ajna/tvl";
import { AmbiantTVLBuilder } from "../implementations/Ambient/tvl";
import { EigenLayerTVLBuilder } from "../implementations/EigenLayer/tvl";
import { Erc20TVLBuilder } from "../implementations/Erc20/tvl";
import { LockerTVLBuilder } from "../implementations/Locker/tvl";
import { MultiLogTVLBuilder } from "../implementations/MultiLog/tvl";
/**
 * @dev TYPE SAFETY DISABLED FOR NOW AS WE DON'T HAVE ALL THE CAMPAIGNS IMPLEMENTED
 *
 * @dev Casts are made to enforce type safety
 * @dev A type error must be thrown if a new campaign type is added and the corresponding builder is not implemented
 */
// @ts-ignore
const map = {
    [Campaign.AJNA]: new AjnaTVLBuilder(),
    [Campaign.EIGENLAYER]: new EigenLayerTVLBuilder(),
    [Campaign.AMBIENTPROCESSOR]: new AmbiantTVLBuilder(),
    [Campaign.UNISWAP_V4]: new UniswapV4TVLBuilder(),
    [Campaign.ERC20]: new Erc20TVLBuilder(),
    [Campaign.ERC20LOGPROCESSOR]: new Erc20TVLBuilder(),
    [Campaign.ERC20REBASEFIXAPR]: new Erc20TVLBuilder(),
    [Campaign.ERC20_FIX_APR]: new Erc20TVLBuilder(),
    [Campaign.EULER]: new Erc20TVLBuilder(),
    [Campaign.MULTILOG]: new MultiLogTVLBuilder(),
    [Campaign.LOCKER]: new LockerTVLBuilder(),
};
export const campaignTVLBuilderFactory = (campaignType) => {
    if (!map[campaignType]) {
        return null;
    }
    return map[campaignType];
};
