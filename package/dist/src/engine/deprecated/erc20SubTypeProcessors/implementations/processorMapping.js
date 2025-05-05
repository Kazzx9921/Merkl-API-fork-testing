import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { GenericProcessor } from "../GenericProcessor";
import { AaveProcessor } from "./AaveProcessor";
import { AnglesLiquidProcessor } from "./AnglesLiquid";
import { AssetProcessor } from "./AssetProcessor";
import { AuraProcessor } from "./AuraProcessor";
import { BEXRewardGaugeProcessor } from "./BEXRewardGaugeProcessor";
import { BalancerGaugeProcessor } from "./BalancerGaugeProcessor";
import { BalancerPoolProcessor } from "./BalancerPoolProcessor";
import { BalancerV3PoolProcessor } from "./BalancerV3PoolProcessor";
import { BeefyProcessor } from "./BeefyProcessor";
import { BunniV2Processor } from "./BunniV2Processor";
import { CompoundProcessor } from "./CompoundProcessor";
import { ERC4626Processor } from "./ERC4626Processor";
import { EnzymeProcessor } from "./EnzymeProcessor";
import { EqualizerGaugeProcessor } from "./EqualizerGaugeProcessor";
import { EulerBorrowProcessor } from "./EulerBorrowProcessor";
import { EulerLendProcessor } from "./EulerLendProcessor";
import { FluidProcessor } from "./FluidProcessor";
import { FraxProcessor } from "./FraxProcessor";
import { GammaALMProcessor } from "./GammaALMProcessor";
import { GammaProcessor } from "./GammaProcessor";
import { GearboxProcessor } from "./GearboxProcessor";
import { HanjiVaultProcessor } from "./HanjiVaultProcessor";
import { HoldStationProcessor } from "./HoldStationProcessor";
import { HourglassProcessor } from "./HourglassProcessor";
import { MaverickBPProcessor } from "./MaverickBPProcessor";
import { MetamorphoProcessor } from "./MetamorphoProcessor";
import { NoLinkVaultProcessor } from "./NoLinkVaultProcessor";
import { PendleProcessor } from "./PendleProcessor";
import { PendleYTProcessor } from "./PendleYTProcessor";
import { RadiantProcessor } from "./RadiantProcessor";
import { RfxProcessor } from "./RfxProcessor";
import { SatlayerProcessor } from "./Satlayer";
import { SpectraProcessor } from "./SpectraProcessor";
import { SpectraYTProcessor } from "./SpectraYTProcessor";
import { SpliceProcessor } from "./SpliceProcessor";
import { StabilityProcessor } from "./StabilityProcessor";
import { SturdySiloProcessor } from "./SturdySiloProcessor";
import { TempestVaultProcessor } from "./TempestVaultProcessor";
import { TorosProcessor } from "./TorosProcessor";
import { UniswapProcessor } from "./UniswapProcessor";
import { VicunaProcessor } from "./VicunaProcessor";
import { WoofiProcessor } from "./WoofiProcessor";
import { ZkSwapThreePoolProcessor } from "./ZkSwapThreePoolProcessor";
import { CurveNPoolProcessor } from "./curveNPoolProcessor";
import { CurveProcessor } from "./curveProcessor";
import { StakedCurveProcessor } from "./stakedCurveProcessor";
import { xU308Processor } from "./xU308Processor";
export const processorMapping = {
    [Erc20SubType.uniswapv2]: UniswapProcessor,
    [Erc20SubType.balancerGauge]: BalancerGaugeProcessor,
    [Erc20SubType.balancerPool]: BalancerPoolProcessor,
    [Erc20SubType.syncswap]: UniswapProcessor,
    [Erc20SubType.ra]: UniswapProcessor,
    [Erc20SubType.yei_borrowing]: AaveProcessor,
    [Erc20SubType.yei_lending]: AaveProcessor,
    [Erc20SubType.zerolend_borrowing]: AaveProcessor,
    [Erc20SubType.zerolend_lending]: AaveProcessor,
    [Erc20SubType.lnd_borrowing]: AaveProcessor,
    [Erc20SubType.lnd_lending]: AaveProcessor,
    [Erc20SubType.ironclad_lending]: AaveProcessor,
    [Erc20SubType.ironclad_borrowing]: AaveProcessor,
    [Erc20SubType.poolside]: UniswapProcessor,
    [Erc20SubType.gearbox]: GearboxProcessor,
    [Erc20SubType.compound]: CompoundProcessor,
    [Erc20SubType.radiant_borrow]: RadiantProcessor,
    [Erc20SubType.radiant_lend]: RadiantProcessor,
    [Erc20SubType.ionic]: AssetProcessor,
    [Erc20SubType.metamorpho]: MetamorphoProcessor,
    [Erc20SubType.aerodrome]: UniswapProcessor,
    [Erc20SubType.velodrome]: UniswapProcessor,
    [Erc20SubType.moonwell]: AssetProcessor,
    [Erc20SubType.aave_lending]: AaveProcessor,
    [Erc20SubType.aave_borrowing]: AaveProcessor,
    [Erc20SubType.fraxlend]: FraxProcessor,
    [Erc20SubType.curve]: CurveProcessor,
    [Erc20SubType.sturdy_aggregator]: FraxProcessor,
    [Erc20SubType.koi]: UniswapProcessor,
    [Erc20SubType.baseswap]: UniswapProcessor,
    [Erc20SubType.layerbank]: AssetProcessor,
    [Erc20SubType.zkswap]: UniswapProcessor,
    [Erc20SubType.akron]: UniswapProcessor,
    [Erc20SubType.aura]: AuraProcessor,
    [Erc20SubType.dragonswap]: UniswapProcessor,
    [Erc20SubType.sturdy_silo]: SturdySiloProcessor,
    [Erc20SubType.silostaking]: FraxProcessor,
    [Erc20SubType.fluid]: FluidProcessor,
    [Erc20SubType.filament]: FluidProcessor,
    [Erc20SubType.enzyme]: EnzymeProcessor,
    [Erc20SubType.curve_2]: CurveProcessor,
    [Erc20SubType.crosscurve]: CurveNPoolProcessor,
    [Erc20SubType.fenix]: UniswapProcessor,
    [Erc20SubType.euler_lend]: EulerLendProcessor,
    [Erc20SubType.euler_borrow]: EulerBorrowProcessor,
    [Erc20SubType.beefy]: BeefyProcessor,
    [Erc20SubType.unknown]: GenericProcessor,
    [Erc20SubType.toros]: TorosProcessor,
    [Erc20SubType.splice]: SpliceProcessor,
    [Erc20SubType.pendle]: PendleProcessor,
    [Erc20SubType.ironcladStaking]: GenericProcessor,
    [Erc20SubType.rfx]: RfxProcessor,
    [Erc20SubType.woofi]: WoofiProcessor,
    [Erc20SubType.maverickBoostedPosition]: MaverickBPProcessor,
    [Erc20SubType.zkSwapThreePool]: ZkSwapThreePoolProcessor,
    [Erc20SubType.maha]: StakedCurveProcessor,
    [Erc20SubType.tempest]: TempestVaultProcessor,
    [Erc20SubType.pendleYT]: PendleYTProcessor,
    [Erc20SubType.pancakeswap]: UniswapProcessor,
    [Erc20SubType.tempestStaking]: TempestVaultProcessor,
    [Erc20SubType.holdstation]: HoldStationProcessor,
    [Erc20SubType.noLinkVault]: NoLinkVaultProcessor,
    [Erc20SubType.cpmmGamma]: GammaProcessor,
    [Erc20SubType.venus]: AssetProcessor,
    [Erc20SubType.reactor_fusion]: AssetProcessor,
    [Erc20SubType.vicuna]: VicunaProcessor,
    [Erc20SubType.traderJoe]: UniswapProcessor,
    [Erc20SubType.curveNPool]: CurveNPoolProcessor,
    [Erc20SubType.avalon_lending]: AaveProcessor,
    [Erc20SubType.avalon_borrowing]: AaveProcessor,
    [Erc20SubType.satlayer]: SatlayerProcessor,
    [Erc20SubType.veda]: NoLinkVaultProcessor,
    [Erc20SubType.superlend_lending]: AaveProcessor,
    [Erc20SubType.superlend_borrowing]: AaveProcessor,
    [Erc20SubType.cian]: ERC4626Processor,
    [Erc20SubType.concrete]: ERC4626Processor,
    [Erc20SubType.lendle_borrowing]: AaveProcessor,
    [Erc20SubType.lendle_lending]: AaveProcessor,
    [Erc20SubType.takotako_lending]: AaveProcessor,
    [Erc20SubType.takotako_borrowing]: AaveProcessor,
    [Erc20SubType.equalizer_gauge]: EqualizerGaugeProcessor,
    [Erc20SubType.vicuna_borrowing]: AaveProcessor,
    [Erc20SubType.vicuna_lending]: AaveProcessor,
    [Erc20SubType.anglesLiquid]: AnglesLiquidProcessor,
    [Erc20SubType.spectra_lpt]: SpectraProcessor,
    [Erc20SubType.spectra_yt]: SpectraYTProcessor,
    [Erc20SubType.rfx_slv]: ERC4626Processor,
    [Erc20SubType.hourglass]: HourglassProcessor,
    [Erc20SubType.katana]: UniswapProcessor,
    [Erc20SubType.balancerV3]: BalancerV3PoolProcessor,
    [Erc20SubType.hanji_liquidity_vault_token]: HanjiVaultProcessor,
    [Erc20SubType.xU308]: xU308Processor,
    [Erc20SubType.bunniV2]: BunniV2Processor,
    [Erc20SubType.beraborrow_gauge]: BEXRewardGaugeProcessor,
    [Erc20SubType.beratrax_vault]: BEXRewardGaugeProcessor,
    [Erc20SubType.xlend_borrowing]: AaveProcessor,
    [Erc20SubType.xlend_lending]: AaveProcessor,
    [Erc20SubType.curve_gauge]: StakedCurveProcessor,
    [Erc20SubType.sake_borrowing]: AaveProcessor,
    [Erc20SubType.sake_lending]: AaveProcessor,
    [Erc20SubType.gamma]: GammaALMProcessor,
    [Erc20SubType.stability]: StabilityProcessor,
    [Erc20SubType.stability_lending]: AaveProcessor,
};
