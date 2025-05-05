import { Campaign } from "@sdk";
import { AjnaMetadata } from "../implementations/Ajna/metadata";
import { AmbientMetadata } from "../implementations/Ambient/metadata";
import { BadgerMetadata } from "../implementations/Badger/metadata";
import { ClammMetadata } from "../implementations/Clamm/metadata";
import { CompoundMetadata } from "../implementations/Compound/metadata";
import { CompoundV3Metadata } from "../implementations/CompoundV3/metadata";
import { DefaultMetadata } from "../implementations/Default/metadata";
import { DolomiteMetadata } from "../implementations/Dolomite/metadata";
import { EigenLayerMetadata } from "../implementations/EigenLayer/metadata";
import { EncompassingMetadata } from "../implementations/Encompassing/metadata";
import { Erc20Metadata } from "../implementations/Erc20/metadata";
import { Erc721Metadata } from "../implementations/Erc721/metadata";
import { ErcMultiTokenMetadata } from "../implementations/ErcMultiToken/metadata";
import { EventBasedMetadata } from "../implementations/EventBased/metadata";
import { HyperdriveMetadata } from "../implementations/Hyperdrive/metadata";
import { InvalidMetadata } from "../implementations/Invalid/metadata";
import { IonMetadata } from "../implementations/Ion/metadata";
import { JsonAirdropMetadata } from "../implementations/JsonAirdrop/metadata";
import { LockerMetadata } from "../implementations/Locker/metadata";
import { MorphoMetadata } from "../implementations/Morpho/metadata";
import { MultiLogMetaData } from "../implementations/MultiLog/metadata";
import { RadiantMetadata } from "../implementations/Radiant/metadata";
import { SiloMetadata } from "../implementations/Silo/metadata";
import { UniswapV4Metadata } from "../implementations/UniswapV4/metadata";
import { VestMetadata } from "../implementations/Vest/metadata";
/**
 * @dev Casts are made to enforce type safety
 * @dev A type error must be thrown if a new campaign type is added and the corresponding builder is not implemented
 */
const map = {
    [Campaign.INVALID]: new InvalidMetadata(),
    [Campaign.ERC20]: new Erc20Metadata(),
    [Campaign.CLAMM]: new ClammMetadata(),
    [Campaign.ERC20_SNAPSHOT]: new Erc20Metadata(),
    [Campaign.JSON_AIRDROP]: new JsonAirdropMetadata(),
    [Campaign.SILO]: new SiloMetadata(),
    [Campaign.RADIANT]: new RadiantMetadata(),
    [Campaign.DOLOMITE]: new DolomiteMetadata(),
    [Campaign.BADGER]: new BadgerMetadata(),
    [Campaign.AJNA]: new AjnaMetadata(),
    [Campaign.EULER]: new Erc20Metadata(),
    [Campaign.COMPOUND]: new CompoundMetadata(),
    [Campaign.COMPOUND_V3]: new CompoundV3Metadata(),
    [Campaign.COMPOUND_V3_FIXAPR]: new CompoundV3Metadata(),
    [Campaign.ION]: new IonMetadata(),
    [Campaign.MORPHO]: new MorphoMetadata(),
    [Campaign.HYPERDRIVELOGFIXPROCESSOR]: new HyperdriveMetadata(),
    [Campaign.HYPERDRIVELOGPROCESSOR]: new HyperdriveMetadata(),
    [Campaign.ERC20_FIX_APR]: new Erc20Metadata(),
    [Campaign.UNISWAP_V4]: new UniswapV4Metadata(),
    [Campaign.EIGENLAYER]: new EigenLayerMetadata(),
    [Campaign.VEST]: new VestMetadata(),
    [Campaign.ERC20LOGPROCESSOR]: new Erc20Metadata(),
    [Campaign.ERC20REBASELOGPROCESSOR]: new Erc20Metadata(),
    [Campaign.M0]: new DefaultMetadata(), // TODO
    [Campaign.MORPHOSUPPLY]: new DefaultMetadata(), // TODO
    [Campaign.SYNCSWAP_VAULT]: new DefaultMetadata(), // TODO
    [Campaign.AMBIENTPROCESSOR]: new AmbientMetadata(),
    [Campaign.ENCOMPASSING]: new EncompassingMetadata(),
    [Campaign.EVENT_BASED]: new EventBasedMetadata(),
    [Campaign.ERC20REBASEFIXAPR]: new Erc20Metadata(),
    [Campaign.MAVERICK_BP]: new DefaultMetadata(), // TODO
    [Campaign.ERC6909]: new ErcMultiTokenMetadata(),
    [Campaign.ERC6909FIXAPR]: new ErcMultiTokenMetadata(),
    [Campaign.ERC1155]: new ErcMultiTokenMetadata(),
    [Campaign.ERC1155FIXAPR]: new ErcMultiTokenMetadata(),
    [Campaign.ERC721]: new Erc721Metadata(),
    [Campaign.ERC721FIXAPR]: new Erc721Metadata(),
    [Campaign.MULTILOG]: new MultiLogMetaData(),
    [Campaign.LOCKER]: new LockerMetadata(),
    [Campaign.CONVEX]: new DefaultMetadata(), // TODO
    [Campaign.CURVEVAULT]: new DefaultMetadata(), // TODO
};
export const metadataBuilderFactory = (campaignType) => map[campaignType];
