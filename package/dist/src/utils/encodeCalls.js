import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { AaveInterface, AccountantWithRateProvidersInterface, AuraInterface, AuraOperatorInterface, BalancerGaugeInterface, BalancerPoolInterface, BalancerV3StablePoolInterface, BalancerVaultInterface, BeefyInterface, BunniV2HubInterface, BunniV2TokenInterface, CPMMGammaPoolMainInterface, CompoundInterface, CurveInterface, CurveLPTokenInterface, CurveStableSwapNGInterface, DefutureVaultInterface, ERC20Interface, ERC4626Interface, EnzymeInterface, EulerInterface, FactoryInterface, FluidInterface, FraxlendInterface, GearboxVaultInterface, HourglassERC20TBTInterface, HourglassVedaLockDepositorV2Interface, IonicInterface, LPManagerHelperInterface, LPManagerInterface, LayerBankInterface, LendleInterface, MaverickBPLensInterface, MetamorphoInterface, MoonwellInterface, OneInchStakingInterface, PendleInterface, PendleYTInterface, RadiantInterface, RfxDatastoreInterface, RswEthStrategyInterface, SpectraYTInterface, StabilityVaultInterface, SturdyInterface, SymetricAmbientStrategyInterface, SyncSwapClassicPoolInterface, TorosInterface, UniswapV2PoolInterface, UniswapV3PoolInterface, VePufferInterface, ZFStableLPINterface, } from "@sdk";
export function createCall(target, key, type, metaData) {
    switch (key) {
        case "sqrtPriceX96":
            return { allowFailure: true, callData: UniswapV3PoolInterface.encodeFunctionData("slot0"), target };
        case "tokens":
            return { allowFailure: true, callData: LPManagerInterface.encodeFunctionData("tokens", [metaData]), target };
        case "getTokensCount":
            return { allowFailure: true, callData: LPManagerInterface.encodeFunctionData("getTokensCount"), target };
        case "getTotalValue":
            return {
                allowFailure: true,
                callData: LPManagerHelperInterface.encodeFunctionData("getTotalValue", [metaData]),
                target,
            };
        case "SY":
            return { allowFailure: true, callData: PendleYTInterface.encodeFunctionData("SY"), target };
        case "collateralContract":
            return { allowFailure: true, callData: SturdyInterface.encodeFunctionData("collateralContract"), target };
        case "pricePerShare":
            return { allowFailure: true, callData: FraxlendInterface.encodeFunctionData("pricePerShare"), target };
        case "lp_price":
            switch (type) {
                case Erc20SubType.curve:
                case Erc20SubType.curve_gauge:
                    return { allowFailure: true, callData: CurveInterface.encodeFunctionData("lp_price"), target };
                case Erc20SubType.curve_2:
                case Erc20SubType.maha:
                    return { allowFailure: true, callData: CurveInterface.encodeFunctionData("get_virtual_price"), target };
                default:
                    throw new Error(`Need Erc20SubType for this key ${key}`);
            }
        case "coin0":
            return { allowFailure: true, callData: CurveInterface.encodeFunctionData("coins", [0]), target };
        case "coin1":
            return { allowFailure: true, callData: CurveInterface.encodeFunctionData("coins", [1]), target };
        case "coin2":
            return { allowFailure: true, callData: CurveInterface.encodeFunctionData("coins", [2]), target };
        case "coins":
            return { allowFailure: true, callData: CurveInterface.encodeFunctionData("coins", [metaData]), target };
        case "N_COINS":
            return { allowFailure: true, callData: CurveStableSwapNGInterface.encodeFunctionData("N_COINS"), target };
        case "balances":
            return {
                allowFailure: true,
                callData: CurveStableSwapNGInterface.encodeFunctionData("balances", [metaData]),
                target,
            };
        case "operator":
            return { allowFailure: true, callData: AuraInterface.encodeFunctionData("operator"), target };
        case "pid":
            return { allowFailure: true, callData: AuraInterface.encodeFunctionData("pid"), target };
        case "lp_token":
            switch (type) {
                case Erc20SubType.beraborrow_gauge:
                case Erc20SubType.beratrax_vault:
                    return { allowFailure: true, callData: ERC4626Interface.encodeFunctionData("asset"), target };
                default:
                    return { allowFailure: true, callData: BalancerGaugeInterface.encodeFunctionData("lp_token"), target };
            }
        case "stakingToken":
            return { allowFailure: true, callData: OneInchStakingInterface.encodeFunctionData("stakingToken"), target };
        case "eVault":
            return { allowFailure: true, callData: EulerInterface.encodeFunctionData("eVault"), target };
        case "exchangeRate":
            switch (type) {
                case Erc20SubType.pendle:
                    return { allowFailure: true, callData: PendleInterface.encodeFunctionData("exchangeRate"), target };
                case Erc20SubType.ionic:
                    return { allowFailure: true, callData: IonicInterface.encodeFunctionData("exchangeRateCurrent"), target };
                case Erc20SubType.moonwell:
                case Erc20SubType.venus:
                case Erc20SubType.reactor_fusion:
                    return { allowFailure: true, callData: MoonwellInterface.encodeFunctionData("exchangeRateStored"), target };
                case Erc20SubType.layerbank:
                    return { allowFailure: true, callData: LayerBankInterface.encodeFunctionData("exchangeRate"), target };
                default:
                    throw new Error(`Need Erc20SubType for this key ${key}`);
            }
        case "shortToken": {
            return {
                allowFailure: true,
                callData: RfxDatastoreInterface.encodeFunctionData("getAddress", [metaData]),
                target,
            };
        }
        case "longToken": {
            return {
                allowFailure: true,
                callData: RfxDatastoreInterface.encodeFunctionData("getAddress", [metaData]),
                target,
            };
        }
        case "asset":
            return {
                allowFailure: true,
                callData: ERC4626Interface.encodeFunctionData("asset"),
                target,
            };
        case "underlying":
            switch (type) {
                case Erc20SubType.pendle:
                case Erc20SubType.pendleYT:
                    return { allowFailure: true, callData: PendleInterface.encodeFunctionData("yieldToken"), target };
                case Erc20SubType.metamorpho:
                    return { allowFailure: true, callData: MetamorphoInterface.encodeFunctionData("asset"), target };
                case Erc20SubType.fluid:
                    return { allowFailure: true, callData: FluidInterface.encodeFunctionData("asset"), target };
                case Erc20SubType.euler_borrow:
                case Erc20SubType.maha:
                case Erc20SubType.euler_lend:
                    return {
                        allowFailure: true,
                        callData: EulerInterface.encodeFunctionData("asset"),
                        target,
                    };
                case Erc20SubType.curve_gauge:
                    return { allowFailure: true, callData: BalancerGaugeInterface.encodeFunctionData("lp_token"), target };
                case Erc20SubType.fraxlend:
                case Erc20SubType.sturdy_aggregator:
                case Erc20SubType.sturdy_silo:
                    return { allowFailure: true, callData: FraxlendInterface.encodeFunctionData("asset"), target };
                case Erc20SubType.gearbox:
                    return {
                        allowFailure: true,
                        callData: GearboxVaultInterface.encodeFunctionData("underlyingToken"),
                        target,
                    };
                case Erc20SubType.aura:
                    return { allowFailure: true, callData: AuraInterface.encodeFunctionData("asset"), target };
                case Erc20SubType.ionic:
                case Erc20SubType.venus:
                case Erc20SubType.reactor_fusion:
                    return { allowFailure: true, callData: IonicInterface.encodeFunctionData("underlying"), target };
                case Erc20SubType.layerbank:
                    return { allowFailure: true, callData: LayerBankInterface.encodeFunctionData("underlying"), target };
                case Erc20SubType.moonwell:
                    return { allowFailure: true, callData: MoonwellInterface.encodeFunctionData("underlying"), target };
                case Erc20SubType.radiant_lend:
                case Erc20SubType.radiant_borrow:
                case Erc20SubType.lendle_lending:
                case Erc20SubType.lendle_borrowing:
                    return {
                        allowFailure: true,
                        callData: RadiantInterface.encodeFunctionData("UNDERLYING_ASSET_ADDRESS"),
                        target,
                    };
                case Erc20SubType.holdstation:
                    return {
                        allowFailure: true,
                        callData: DefutureVaultInterface.encodeFunctionData("asset"),
                        target,
                    };
                case Erc20SubType.aave_lending:
                case Erc20SubType.sake_lending:
                case Erc20SubType.sake_borrowing:
                case Erc20SubType.stability_lending:
                case Erc20SubType.aave_borrowing:
                case Erc20SubType.ironclad_lending:
                case Erc20SubType.ironclad_borrowing:
                case Erc20SubType.zerolend_lending:
                case Erc20SubType.zerolend_borrowing:
                case Erc20SubType.lnd_lending:
                case Erc20SubType.lnd_borrowing:
                case Erc20SubType.avalon_lending:
                case Erc20SubType.avalon_borrowing:
                case Erc20SubType.superlend_lending:
                case Erc20SubType.superlend_borrowing:
                case Erc20SubType.takotako_lending:
                case Erc20SubType.takotako_borrowing:
                case Erc20SubType.yei_borrowing:
                case Erc20SubType.yei_lending:
                case Erc20SubType.vicuna_borrowing:
                case Erc20SubType.vicuna_lending:
                case Erc20SubType.xlend_lending:
                case Erc20SubType.xlend_borrowing:
                    return { allowFailure: true, callData: AaveInterface.encodeFunctionData("UNDERLYING_ASSET_ADDRESS"), target };
                case Erc20SubType.hourglass:
                    return {
                        allowFailure: true,
                        callData: HourglassVedaLockDepositorV2Interface.encodeFunctionData("getUnderlying"),
                        target,
                    };
                default:
                    throw new Error(`Need Erc20SubType for this key ${key}, or unknown type ${type}`);
            }
        case "calcNetShareValue":
            return {
                allowFailure: true,
                callData: EnzymeInterface.encodeFunctionData("calcNetShareValue", [metaData]),
                target,
            };
        case "getPricePerFullShare":
            return { allowFailure: true, callData: BeefyInterface.encodeFunctionData("getPricePerFullShare"), target };
        case "token0":
            return { allowFailure: true, callData: UniswapV2PoolInterface.encodeFunctionData("token0"), target };
        case "token1":
            return { allowFailure: true, callData: UniswapV2PoolInterface.encodeFunctionData("token1"), target };
        case "baseToken":
            return { allowFailure: true, callData: CompoundInterface.encodeFunctionData("baseToken"), target };
        case "factory":
            return { allowFailure: true, callData: FactoryInterface.encodeFunctionData("factory"), target };
        case "getAssetPrice":
            return { allowFailure: true, callData: RadiantInterface.encodeFunctionData("getAssetPrice"), target };
        case "want":
            return { allowFailure: true, callData: BeefyInterface.encodeFunctionData("want"), target };
        case "price":
            return { allowFailure: true, callData: StabilityVaultInterface.encodeFunctionData("price"), target };
        case "symbol":
            return {
                allowFailure: true,
                callData: ERC20Interface.encodeFunctionData("symbol"),
                target,
            };
        case "name":
            return {
                allowFailure: true,
                callData: ERC20Interface.encodeFunctionData("name"),
                target,
            };
        case "decimals":
            return {
                allowFailure: true,
                callData: ERC20Interface.encodeFunctionData("decimals"),
                target,
            };
        case "totalSupply":
            switch (type) {
                case Erc20SubType.lendle_lending:
                case Erc20SubType.lendle_borrowing:
                    return {
                        allowFailure: true,
                        callData: LendleInterface.encodeFunctionData("scaledTotalSupply"),
                        target,
                    };
                default:
                    return {
                        allowFailure: true,
                        callData: ERC20Interface.encodeFunctionData("totalSupply"),
                        target,
                    };
            }
        case "balanceOf":
            return {
                allowFailure: true,
                callData: ERC20Interface.encodeFunctionData("balanceOf", [metaData]),
                target,
            };
        case "getPoolId":
            return {
                allowFailure: true,
                callData: BalancerPoolInterface.encodeFunctionData("getPoolId"),
                target,
            };
        case "getVault":
            return {
                allowFailure: true,
                callData: BalancerPoolInterface.encodeFunctionData("getVault"),
                target,
            };
        case "poolInfo":
            return {
                allowFailure: true,
                callData: AuraOperatorInterface.encodeFunctionData("poolInfo", [metaData]),
                target,
            };
        case "staker":
            return { allowFailure: true, callData: AuraOperatorInterface.encodeFunctionData("staker"), target };
        case "getPoolTokens":
            return {
                allowFailure: true,
                callData: BalancerVaultInterface.encodeFunctionData("getPoolTokens", [metaData]),
                target,
            };
        case "convertToAssets":
            return {
                allowFailure: true,
                callData: FluidInterface.encodeFunctionData("convertToAssets", [metaData]),
                target,
            };
        case "tokenPrice":
            return {
                allowFailure: true,
                callData: TorosInterface.encodeFunctionData("tokenPrice"),
                target,
            };
        case "totalAssets":
            switch (type) {
                case Erc20SubType.anglesLiquid:
                case Erc20SubType.cian:
                case Erc20SubType.rfx_slv:
                case Erc20SubType.metamorpho:
                case Erc20SubType.beratrax_vault:
                case Erc20SubType.beraborrow_gauge:
                    return {
                        allowFailure: true,
                        callData: ERC4626Interface.encodeFunctionData("totalAssets"),
                        target,
                    };
                case Erc20SubType.concrete:
                    return {
                        allowFailure: true,
                        callData: ERC4626Interface.encodeFunctionData("totalAssets"),
                        target,
                    };
                case Erc20SubType.euler_borrow:
                    return {
                        allowFailure: true,
                        callData: EulerInterface.encodeFunctionData("totalBorrows"),
                        target,
                    };
                case Erc20SubType.euler_lend:
                    return {
                        allowFailure: true,
                        callData: EulerInterface.encodeFunctionData("totalAssets"),
                        target,
                    };
                case Erc20SubType.gearbox:
                    return {
                        allowFailure: true,
                        callData: GearboxVaultInterface.encodeFunctionData("totalAssets"),
                        target,
                    };
                case Erc20SubType.compound:
                    return {
                        allowFailure: true,
                        callData: CompoundInterface.encodeFunctionData("totalBorrow"),
                        target: target,
                    };
                default:
                    throw new Error(`Need Erc20SubType for this key ${key}, or unknown type ${type}`);
            }
        case "readTokens0":
            return {
                allowFailure: true,
                callData: PendleInterface.encodeFunctionData("readTokens"),
                target: target,
            };
        case "readTokens2":
            return {
                allowFailure: true,
                callData: PendleInterface.encodeFunctionData("readTokens"),
                target: target,
            };
        case "boostedPositionInformation":
            return {
                allowFailure: true,
                callData: MaverickBPLensInterface.encodeFunctionData("boostedPositionInformation", [metaData]),
                target: target,
            };
        case "minter":
            switch (type) {
                case Erc20SubType.spectra_lpt:
                    return {
                        allowFailure: true,
                        callData: CurveLPTokenInterface.encodeFunctionData("minter"),
                        target: target,
                    };
                default:
                    return {
                        allowFailure: true,
                        callData: ZFStableLPINterface.encodeFunctionData("minter"),
                        target: target,
                    };
            }
        case "principalToken":
            return {
                allowFailure: true,
                callData: SpectraYTInterface.encodeFunctionData("getPT"),
                target: target,
            };
        case "getTokenAddresses":
            switch (type) {
                case Erc20SubType.tempestStaking: {
                    return {
                        allowFailure: true,
                        callData: RswEthStrategyInterface.encodeFunctionData("getTokenAddresses"),
                        target: target,
                    };
                }
                default:
                    return {
                        allowFailure: true,
                        callData: SymetricAmbientStrategyInterface.encodeFunctionData("getTokenAddresses"),
                        target: target,
                    };
            }
        case "getPositions":
            switch (type) {
                case Erc20SubType.tempestStaking: {
                    return {
                        allowFailure: true,
                        callData: RswEthStrategyInterface.encodeFunctionData("getPositions"),
                        target: target,
                    };
                }
                default:
                    return {
                        allowFailure: true,
                        callData: SymetricAmbientStrategyInterface.encodeFunctionData("getPositions"),
                        target: target,
                    };
            }
        case "tvl":
            return {
                allowFailure: true,
                callData: DefutureVaultInterface.encodeFunctionData("tvl"),
                target: target,
            };
        case "lockNFT":
            return {
                allowFailure: true,
                callData: VePufferInterface.encodeFunctionData("lockNFT"),
                target: target,
            };
        case "eip712DomainName":
            return {
                allowFailure: true,
                callData: MetamorphoInterface.encodeFunctionData("eip712Domain"),
                target: target,
            };
        case "getRate":
            return {
                allowFailure: true,
                callData: AccountantWithRateProvidersInterface.encodeFunctionData("getRate"),
                target: target,
            };
        case "base":
            return {
                allowFailure: true,
                callData: AccountantWithRateProvidersInterface.encodeFunctionData("base"),
                target: target,
            };
        case "tokensRaw":
            return {
                allowFailure: true,
                callData: CPMMGammaPoolMainInterface.encodeFunctionData("tokens"),
                target: target,
            };
        case "tokenBalances":
            return {
                allowFailure: true,
                callData: CPMMGammaPoolMainInterface.encodeFunctionData("getLatestCFMMBalances"),
                target: target,
            };
        case "getReserves":
            return {
                allowFailure: true,
                callData: UniswapV2PoolInterface.encodeFunctionData("getReserves"),
                target: target,
            };
        case "reserve0":
            return {
                allowFailure: true,
                callData: SyncSwapClassicPoolInterface.encodeFunctionData("reserve0"),
                target: target,
            };
        case "reserve1":
            return {
                allowFailure: true,
                callData: SyncSwapClassicPoolInterface.encodeFunctionData("reserve1"),
                target: target,
            };
        case "depositor":
            return {
                allowFailure: true,
                callData: HourglassERC20TBTInterface.encodeFunctionData("depositor"),
                target: target,
            };
        case "getTokens":
            return {
                allowFailure: true,
                callData: BalancerV3StablePoolInterface.encodeFunctionData("getTokens"),
                target: target,
            };
        case "getTokenInfo":
            return {
                allowFailure: true,
                callData: BalancerV3StablePoolInterface.encodeFunctionData("getTokenInfo"),
                target: target,
            };
        case "hub":
            return {
                allowFailure: true,
                callData: BunniV2TokenInterface.encodeFunctionData("hub"),
                target: target,
            };
        case "poolKey":
            return {
                allowFailure: true,
                callData: BunniV2TokenInterface.encodeFunctionData("poolKey"),
                target: target,
            };
        case "poolState":
            return {
                allowFailure: true,
                callData: BunniV2HubInterface.encodeFunctionData("poolState", [metaData]),
                target: target,
            };
        default:
            throw new Error(`Unknown key ${key}`);
    }
}
