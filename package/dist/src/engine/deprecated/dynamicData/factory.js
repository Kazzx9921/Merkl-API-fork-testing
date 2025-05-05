import { Campaign } from "@sdk";
import { AjnaDynamicData } from "./implementations/Ajna";
import { BadgerDynamicData } from "./implementations/Badger";
import { ClammDynamicData } from "./implementations/Clamm";
import { CompoundDynamicData } from "./implementations/Compound";
import { CompoundV3DynamicData } from "./implementations/CompoundV3";
import { DolomiteDynamicData } from "./implementations/Dolomite";
import { ERC721DynamicData } from "./implementations/ERC721";
import { ERCMultiTokenDynamicData } from "./implementations/ERCMultiToken";
import { EigenLayerDynamicData } from "./implementations/EigenLayer";
import { EncompassingDynamicData } from "./implementations/Encompassing";
import { Erc20DynamicData } from "./implementations/Erc20";
import { Erc20SnapshotDynamicData } from "./implementations/Erc20Snapshot";
import { EventBasedDynamicData } from "./implementations/EventBased";
import { HyperdriveDynamicData } from "./implementations/Hyperdrive";
import { MorphoDynamicData } from "./implementations/Morpho";
import { RadiantDynamicData } from "./implementations/Radiant";
import { SiloDynamicData } from "./implementations/Silo";
import { UniswapV4DynamicData } from "./implementations/UniswapV4";
import { VestDynamicData } from "./implementations/Vest";
import { DefaultDynamicData } from "./implementations/default";
// @dev Casts are made to enforce type safety
// @dev A type error must be thrown if a new campaign type is added and the corresponding builder is not implemented
const map = {
    [Campaign.INVALID]: new DefaultDynamicData(),
    [Campaign.JSON_AIRDROP]: new DefaultDynamicData(),
    [Campaign.AJNA]: new AjnaDynamicData(),
    [Campaign.AMBIENTPROCESSOR]: new DefaultDynamicData(),
    [Campaign.BADGER]: new BadgerDynamicData(),
    [Campaign.CLAMM]: new ClammDynamicData(),
    [Campaign.COMPOUND]: new CompoundDynamicData(),
    [Campaign.COMPOUND_V3]: new CompoundV3DynamicData(),
    [Campaign.COMPOUND_V3_FIXAPR]: new CompoundV3DynamicData(),
    [Campaign.DOLOMITE]: new DolomiteDynamicData(),
    [Campaign.EIGENLAYER]: new EigenLayerDynamicData(),
    [Campaign.ENCOMPASSING]: new EncompassingDynamicData(),
    [Campaign.ERC20_SNAPSHOT]: new Erc20SnapshotDynamicData(),
    [Campaign.EVENT_BASED]: new EventBasedDynamicData(),
    [Campaign.HYPERDRIVELOGFIXPROCESSOR]: new HyperdriveDynamicData(),
    [Campaign.HYPERDRIVELOGPROCESSOR]: new HyperdriveDynamicData(),
    [Campaign.ERC20]: new Erc20DynamicData(),
    [Campaign.ERC20LOGPROCESSOR]: new Erc20DynamicData(),
    [Campaign.ERC20REBASEFIXAPR]: new Erc20DynamicData(),
    [Campaign.ERC20REBASELOGPROCESSOR]: new Erc20DynamicData(),
    [Campaign.ERC20_FIX_APR]: new Erc20DynamicData(),
    [Campaign.EULER]: new Erc20DynamicData(),
    [Campaign.MORPHO]: new MorphoDynamicData(),
    [Campaign.RADIANT]: new RadiantDynamicData(),
    [Campaign.SILO]: new SiloDynamicData(),
    [Campaign.UNISWAP_V4]: new UniswapV4DynamicData(),
    [Campaign.VEST]: new VestDynamicData(),
    [Campaign.ION]: new DefaultDynamicData(), // TODO
    [Campaign.M0]: new DefaultDynamicData(), // TODO
    [Campaign.MORPHOSUPPLY]: new DefaultDynamicData(), // TODO
    [Campaign.SYNCSWAP_VAULT]: new DefaultDynamicData(), // TODO
    [Campaign.MAVERICK_BP]: new DefaultDynamicData(), // TODO
    [Campaign.ERC6909]: new ERCMultiTokenDynamicData(),
    [Campaign.ERC6909FIXAPR]: new ERCMultiTokenDynamicData(),
    [Campaign.ERC1155]: new ERCMultiTokenDynamicData(),
    [Campaign.ERC1155FIXAPR]: new ERCMultiTokenDynamicData(),
    [Campaign.ERC721]: new ERC721DynamicData(),
    [Campaign.ERC721FIXAPR]: new ERC721DynamicData(),
    [Campaign.MULTILOG]: new DefaultDynamicData(),
    [Campaign.LOCKER]: new DefaultDynamicData(), // TODO
    [Campaign.CONVEX]: new DefaultDynamicData(), // TODO
    [Campaign.CURVEVAULT]: new DefaultDynamicData(), // TODO
};
export const dynamicDataBuilderFactory = (campaignType) => map[campaignType];
