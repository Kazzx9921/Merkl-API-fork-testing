import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { AaveInterface, AccountantWithRateProvidersInterface, AuraInterface, AuraOperatorInterface, BalancerGaugeInterface, BalancerPoolInterface, BalancerV3StablePoolInterface, BalancerVaultInterface, BeefyInterface, BunniV2HubInterface, BunniV2TokenInterface, CPMMGammaPoolMainInterface, CompoundInterface, CurveInterface, CurveLPTokenInterface, CurveStableSwapNGInterface, DefutureVaultInterface, ERC20Interface, ERC4626Interface, EnzymeInterface, EulerInterface, FactoryInterface, FluidInterface, FraxlendInterface, GearboxVaultInterface, HourglassERC20TBTInterface, HourglassVedaLockDepositorV2Interface, IonPoolInterface, IonicInterface, LPManagerHelperInterface, LPManagerInterface, LayerBankERC20Interface, LayerBankInterface, LendleInterface, MaverickBPLensInterface, MetamorphoInterface, MoonwellInterface, OneInchStakingInterface, PendleInterface, PendleYTInterface, RadiantInterface, RfxInterface, RswEthStrategyInterface, SpectraYTInterface, StabilityVaultInterface, SturdyInterface, SymetricAmbientStrategyInterface, SyncSwapClassicPoolInterface, TorosInterface, UniswapV2PoolInterface, UniswapV3PoolInterface, VePufferInterface, ZFStableLPINterface, ZFStableSwapThreePoolInterface, } from "@sdk";
import { BigNumber } from "ethers";
export function decodeCall(calls, index, key, type) {
    const returnData = calls[index];
    return decodeReturnValue(returnData, key, type);
}
export function decodeReturnValue(returnData, key, type) {
    switch (key) {
        case "treasury":
            return IonPoolInterface.decodeFunctionResult("treasury", returnData)[0];
        case "sqrtPriceX96":
            return UniswapV3PoolInterface.decodeFunctionResult("slot0", returnData)[0];
        case "tokens":
            return LPManagerInterface.decodeFunctionResult("tokens", returnData)[0];
        case "getTokensCount":
            return LPManagerInterface.decodeFunctionResult("getTokensCount", returnData)[0];
        case "getTotalValue":
            return LPManagerHelperInterface.decodeFunctionResult("getTotalValue", returnData)[0];
        case "domain":
            return CurveStableSwapNGInterface.decodeFunctionResult("DOMAIN_SEPARATOR", returnData)[0];
        case "SY":
            return PendleYTInterface.decodeFunctionResult("SY", returnData)[0];
        case "symbol":
            return ERC20Interface.decodeFunctionResult("symbol", returnData)[0];
        case "decimals":
            return ERC20Interface.decodeFunctionResult("decimals", returnData)[0];
        case "totalSupply":
            switch (type) {
                case Erc20SubType.lendle_lending:
                case Erc20SubType.lendle_borrowing:
                    return LendleInterface.decodeFunctionResult("scaledTotalSupply", returnData)[0];
                default:
                    return ERC20Interface.decodeFunctionResult("totalSupply", returnData)[0];
            }
        case "balanceOf":
            return ERC20Interface.decodeFunctionResult("balanceOf", returnData)[0];
        case "name":
            return ERC20Interface.decodeFunctionResult("name", returnData)[0];
        case "getPoolId":
            return BalancerPoolInterface.decodeFunctionResult("getPoolId", returnData)[0];
        case "MORPHO":
            return MetamorphoInterface.decodeFunctionResult("MORPHO", returnData)[0];
        case "getCreator":
            return EnzymeInterface.decodeFunctionResult("getCreator", returnData)[0];
        case "factory":
            return FactoryInterface.decodeFunctionResult("factory", returnData)[0];
        case "owner":
            return LayerBankERC20Interface.decodeFunctionResult("owner", returnData)[0];
        case "token0":
            return UniswapV2PoolInterface.decodeFunctionResult("token0", returnData)[0];
        case "token1":
            return UniswapV2PoolInterface.decodeFunctionResult("token1", returnData)[0];
        case "lp_token":
            switch (type) {
                case Erc20SubType.beraborrow_gauge:
                case Erc20SubType.beratrax_vault:
                    return ERC4626Interface.decodeFunctionResult("asset", returnData)[0];
                default:
                    return BalancerGaugeInterface.decodeFunctionResult("lp_token", returnData)[0];
            }
        case "operator":
            return AuraInterface.decodeFunctionResult("operator", returnData)[0];
        case "pid":
            return AuraInterface.decodeFunctionResult("pid", returnData)[0];
        case "stakingToken":
            return OneInchStakingInterface.decodeFunctionResult("stakingToken", returnData)[0];
        case "baseToken":
            return CompoundInterface.decodeFunctionResult("baseToken", returnData)[0];
        case "getAssetPrice":
            return RadiantInterface.decodeFunctionResult("getAssetPrice", returnData)[0];
        case "shortToken":
            return RfxInterface.decodeFunctionResult("shortToken", returnData)[0];
        case "longToken":
            return RfxInterface.decodeFunctionResult("longToken", returnData)[0];
        case "underlying":
            switch (type) {
                case Erc20SubType.pendle:
                case Erc20SubType.pendleYT:
                    return PendleInterface.decodeFunctionResult("yieldToken", returnData)[0];
                case Erc20SubType.gearbox:
                    return GearboxVaultInterface.decodeFunctionResult("underlyingToken", returnData)[0];
                case Erc20SubType.enzyme:
                    return EnzymeInterface.decodeFunctionResult("calcNetShareValue", returnData)[0];
                case Erc20SubType.aura:
                    return AuraInterface.decodeFunctionResult("asset", returnData)[0];
                case Erc20SubType.fluid:
                    return FluidInterface.decodeFunctionResult("asset", returnData)[0];
                case Erc20SubType.metamorpho:
                    return MetamorphoInterface.decodeFunctionResult("asset", returnData)[0];
                case Erc20SubType.fraxlend:
                case Erc20SubType.sturdy_aggregator:
                case Erc20SubType.sturdy_silo:
                    return FraxlendInterface.decodeFunctionResult("asset", returnData)[0];
                case Erc20SubType.aave_lending:
                case Erc20SubType.aave_borrowing:
                case Erc20SubType.sake_lending:
                case Erc20SubType.sake_borrowing:
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
                case Erc20SubType.vicuna_borrowing:
                case Erc20SubType.vicuna_lending:
                case Erc20SubType.lendle_lending:
                case Erc20SubType.lendle_borrowing:
                case Erc20SubType.yei_borrowing:
                case Erc20SubType.yei_lending:
                case Erc20SubType.xlend_lending:
                case Erc20SubType.xlend_borrowing:
                case Erc20SubType.stability_lending:
                    return AaveInterface.decodeFunctionResult("UNDERLYING_ASSET_ADDRESS", returnData)[0];
                case Erc20SubType.radiant_borrow:
                case Erc20SubType.radiant_lend:
                    return RadiantInterface.decodeFunctionResult("UNDERLYING_ASSET_ADDRESS", returnData)[0];
                case Erc20SubType.moonwell:
                    return MoonwellInterface.decodeFunctionResult("underlying", returnData)[0];
                case Erc20SubType.ionic:
                case Erc20SubType.venus:
                    return IonicInterface.decodeFunctionResult("underlying", returnData)[0];
                case Erc20SubType.reactor_fusion:
                    try {
                        return IonicInterface.decodeFunctionResult("underlying", returnData)[0];
                    }
                    catch (e) {
                        return "0x000000000000000000000000000000000000800A";
                    }
                case Erc20SubType.layerbank:
                    return LayerBankInterface.decodeFunctionResult("underlying", returnData)[0];
                case Erc20SubType.holdstation:
                    return DefutureVaultInterface.decodeFunctionResult("asset", returnData)[0];
                case Erc20SubType.euler_borrow:
                case Erc20SubType.euler_lend:
                case Erc20SubType.maha:
                    return EulerInterface.decodeFunctionResult("asset", returnData)[0];
                case Erc20SubType.hourglass:
                    return HourglassVedaLockDepositorV2Interface.decodeFunctionResult("getUnderlying", returnData)[0];
                case Erc20SubType.curve_gauge:
                    return BalancerGaugeInterface.decodeFunctionResult("lp_token", returnData)[0];
                default:
                    throw new Error(`Need Erc20SubType for this key ${key}, or type ${type} not matched`);
            }
        // case "exchangeRateCurrent":
        //   return IonicInterface.decodeFunctionResult("exchangeRateCurrent", returnData)[0];
        case "exchangeRate":
            switch (type) {
                case Erc20SubType.pendle:
                    return PendleInterface.decodeFunctionResult("exchangeRate", returnData)[0];
                case Erc20SubType.layerbank:
                    return LayerBankInterface.decodeFunctionResult("exchangeRate", returnData)[0];
                case Erc20SubType.enzyme:
                    return EnzymeInterface.decodeFunctionResult("calcNetShareValue", returnData)[1];
                case Erc20SubType.ionic:
                    return IonicInterface.decodeFunctionResult("exchangeRateCurrent", returnData)[0];
                case Erc20SubType.moonwell:
                case Erc20SubType.venus:
                case Erc20SubType.reactor_fusion:
                    return MoonwellInterface.decodeFunctionResult("exchangeRateStored", returnData)[0];
                default:
                    throw new Error(`Need Erc20SubType for this key ${key}`);
            }
        // case "exchangeRateStored":
        //   return MoonwellInterface.decodeFunctionResult("exchangeRateStored", returnData)[0];
        case "pricePerShare":
            return FraxlendInterface.decodeFunctionResult("pricePerShare", returnData)[0];
        case "collateralContract":
            return SturdyInterface.decodeFunctionResult("collateralContract", returnData)[0];
        case "lp_price":
            switch (type) {
                case Erc20SubType.curve:
                case Erc20SubType.curve_gauge:
                    return CurveInterface.decodeFunctionResult("lp_price", returnData)[0];
                case Erc20SubType.curve_2:
                case Erc20SubType.maha:
                    return CurveInterface.decodeFunctionResult("get_virtual_price", returnData)[0];
                default:
                    throw new Error(`Need Erc20SubType for this key ${key}`);
            }
        case "coin0":
            return CurveInterface.decodeFunctionResult("coins", returnData)[0];
        case "coin1":
            return CurveInterface.decodeFunctionResult("coins", returnData)[0];
        case "coin2":
            return CurveInterface.decodeFunctionResult("coins", returnData)[0];
        case "N_COINS":
            try {
                return CurveStableSwapNGInterface.decodeFunctionResult("N_COINS", returnData)[0];
            }
            catch (e) {
                return 2;
            }
        case "balances":
            return CurveStableSwapNGInterface.decodeFunctionResult("balances", returnData)[0];
        case "calcNetShareValue":
            return [
                EnzymeInterface.decodeFunctionResult("calcNetShareValue", returnData)[0],
                EnzymeInterface.decodeFunctionResult("calcNetShareValue", returnData)[1],
            ];
        case "eVault":
            return EulerInterface.decodeFunctionResult("eVault", returnData)[0];
        case "getPricePerFullShare":
            return BeefyInterface.decodeFunctionResult("getPricePerFullShare", returnData)[0];
        case "want":
            return BeefyInterface.decodeFunctionResult("want", returnData)[0];
        case "getVault":
            return BalancerPoolInterface.decodeFunctionResult("getVault", returnData)[0];
        case "poolInfo":
            return AuraOperatorInterface.decodeFunctionResult("poolInfo", returnData)[2];
        case "staker":
            return AuraOperatorInterface.decodeFunctionResult("staker", returnData)[0];
        case "totalAssets":
            switch (type) {
                case Erc20SubType.anglesLiquid:
                case Erc20SubType.cian:
                case Erc20SubType.rfx_slv:
                case Erc20SubType.beratrax_vault:
                case Erc20SubType.beraborrow_gauge:
                case Erc20SubType.metamorpho:
                    return ERC4626Interface.decodeFunctionResult("totalAssets", returnData)[0];
                case Erc20SubType.concrete:
                    return ERC4626Interface.decodeFunctionResult("totalAssets", returnData)[0];
                case Erc20SubType.gearbox:
                    return GearboxVaultInterface.decodeFunctionResult("totalAssets", returnData)[0];
                case Erc20SubType.euler_lend:
                    return EulerInterface.decodeFunctionResult("totalAssets", returnData)[0];
                case Erc20SubType.euler_borrow:
                    return EulerInterface.decodeFunctionResult("totalBorrows", returnData)[0];
                case Erc20SubType.compound:
                    return CompoundInterface.decodeFunctionResult("totalBorrow", returnData)[0];
                default:
                    throw new Error(`Need Erc20SubType for this key ${key}, or type ${type} not matched`);
            }
        case "getPoolTokens":
            return [
                BalancerVaultInterface.decodeFunctionResult("getPoolTokens", returnData)[0],
                BalancerVaultInterface.decodeFunctionResult("getPoolTokens", returnData)[1],
            ];
        case "convertToAssets":
            switch (type) {
                case Erc20SubType.curve_gauge:
                    return BigNumber.from("1000000000000000000");
                default:
                    return FluidInterface.decodeFunctionResult("convertToAssets", returnData)[0];
            }
        case "tokenPrice":
            return TorosInterface.decodeFunctionResult("tokenPrice", returnData)[0];
        case "readTokens0":
            return PendleInterface.decodeFunctionResult("readTokens", returnData)[0];
        case "readTokens2":
            return PendleInterface.decodeFunctionResult("readTokens", returnData)[2];
        case "boostedPositionInformation":
            return MaverickBPLensInterface.decodeFunctionResult("boostedPositionInformation", returnData)[0];
        case "coins":
            return ZFStableSwapThreePoolInterface.decodeFunctionResult("coins", returnData)[0];
        case "minter":
            switch (type) {
                case Erc20SubType.spectra_lpt:
                    return CurveLPTokenInterface.decodeFunctionResult("minter", returnData)[0];
                default:
                    return ZFStableLPINterface.decodeFunctionResult("minter", returnData)[0];
            }
        case "principalToken":
            return SpectraYTInterface.decodeFunctionResult("getPT", returnData)[0];
        case "getTokenAddresses":
            switch (type) {
                case Erc20SubType.tempestStaking: {
                    return RswEthStrategyInterface.decodeFunctionResult("getTokenAddresses", returnData)[0];
                }
                default:
                    return SymetricAmbientStrategyInterface.decodeFunctionResult("getTokenAddresses", returnData)[0];
            }
        case "getPositions":
            switch (type) {
                case Erc20SubType.tempestStaking: {
                    return RswEthStrategyInterface.decodeFunctionResult("getPositions", returnData);
                }
                default:
                    return SymetricAmbientStrategyInterface.decodeFunctionResult("getPositions", returnData);
            }
        case "lockNFT":
            return VePufferInterface.decodeFunctionResult("lockNFT", returnData)[0];
        case "tvl":
            return DefutureVaultInterface.decodeFunctionResult("tvl", returnData)[0];
        case "eip712DomainName":
            return MetamorphoInterface.decodeFunctionResult("eip712Domain", returnData)[1];
        case "getRate":
            return AccountantWithRateProvidersInterface.decodeFunctionResult("getRate", returnData)[0];
        case "base":
            return AccountantWithRateProvidersInterface.decodeFunctionResult("base", returnData)[0];
        case "tokensRaw":
            return [
                CPMMGammaPoolMainInterface.decodeFunctionResult("tokens", returnData)[0][0],
                CPMMGammaPoolMainInterface.decodeFunctionResult("tokens", returnData)[0][1],
            ];
        case "tokenBalances":
            return CPMMGammaPoolMainInterface.decodeFunctionResult("getLatestCFMMBalances", returnData)[0];
        case "reserve0":
            return SyncSwapClassicPoolInterface.decodeFunctionResult("reserve0", returnData)[0];
        case "reserve1":
            return SyncSwapClassicPoolInterface.decodeFunctionResult("reserve1", returnData)[0];
        case "asset":
            return ERC4626Interface.decodeFunctionResult("asset", returnData)[0];
        case "depositor":
            return HourglassERC20TBTInterface.decodeFunctionResult("depositor", returnData)[0];
        case "getTokens":
            return BalancerV3StablePoolInterface.decodeFunctionResult("getTokens", returnData)[0].length;
        case "getTokenInfo":
            return BalancerV3StablePoolInterface.decodeFunctionResult("getTokenInfo", returnData);
        case "hub":
            return BunniV2TokenInterface.decodeFunctionResult("hub", returnData)[0];
        case "poolKey":
            return BunniV2TokenInterface.decodeFunctionResult("poolKey", returnData)[0];
        case "poolState":
            return BunniV2HubInterface.decodeFunctionResult("poolState", returnData)[0];
        case "price":
            return StabilityVaultInterface.decodeFunctionResult("price", returnData)[0];
        default:
            throw new Error(`Key not recognized for ${key}`);
    }
}
