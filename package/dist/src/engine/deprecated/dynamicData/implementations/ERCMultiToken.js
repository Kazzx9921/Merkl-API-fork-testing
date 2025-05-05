import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { parseDistributionType } from "@/utils/parseDistributionType";
import { Pricer } from "@/utils/pricer";
import { DistributionType } from "@db/api";
import { BN2Number, ChainInteractionService, CloberBookManagerInterface, CloberPoolInterface, ERC20Interface, ERC6909Interface, YEAR, } from "@sdk";
import { getFixedApr } from "../utils/getFixedApr";
export class ERCMultiTokenDynamicData {
    async build(chainId, campaigns) {
        const pricer = await Pricer.load();
        const calls = [];
        for (const campaign of campaigns) {
            calls.push({
                allowFailure: true,
                callData: ERC6909Interface.encodeFunctionData("totalSupply", [campaign.campaignParameters.tokenId]),
                target: campaign.campaignParameters.targetToken,
            });
            calls.push({
                allowFailure: true,
                callData: CloberPoolInterface.encodeFunctionData("bookManager"),
                target: campaign.campaignParameters.targetToken,
            });
            calls.push({
                allowFailure: true,
                callData: CloberPoolInterface.encodeFunctionData("getBookPairs", [campaign.campaignParameters.tokenId]),
                target: campaign.campaignParameters.targetToken,
            });
            calls.push({
                allowFailure: true,
                callData: CloberPoolInterface.encodeFunctionData("getLiquidity", [campaign.campaignParameters.tokenId]),
                target: campaign.campaignParameters.targetToken,
            });
        }
        const result = await ChainInteractionService(chainId).fetchState(calls);
        let i = 0;
        const dynamicData = [];
        for (const campaign of campaigns) {
            let totalSupply;
            let tvl;
            let priceTargetToken;
            try {
                totalSupply = BN2Number(ERC6909Interface.decodeFunctionResult("totalSupply", result[i].returnData)[0], campaign.campaignParameters.decimalsTargetToken);
            }
            catch {
                log.warn(`Error getting totalSupply for campaign ${campaign.campaignId} and token ${campaign.campaignParameters.targetToken}`);
                totalSupply = 0.0000001;
            }
            i++;
            // Specific to Clober so far
            try {
                const bookManager = CloberPoolInterface.decodeFunctionResult("bookManager", result[i].returnData)[0];
                const bookPairs = CloberPoolInterface.decodeFunctionResult("getBookPairs", result[i + 1].returnData);
                const liquidity = CloberPoolInterface.decodeFunctionResult("getLiquidity", result[i + 2].returnData);
                const liquidityToken0 = BigInt(liquidity[0].reserve) + BigInt(liquidity[0].cancelable) + BigInt(liquidity[0].claimable);
                const liquidityToken1 = BigInt(liquidity[1].reserve) + BigInt(liquidity[1].cancelable) + BigInt(liquidity[1].claimable);
                const bookPair0 = bookPairs[0] < bookPairs[1] ? bookPairs[0] : bookPairs[1];
                const bookPair1 = bookPairs[0] < bookPairs[1] ? bookPairs[1] : bookPairs[0];
                let token0;
                let token1;
                let symbol0;
                let symbol1;
                let decimals0;
                let decimals1;
                {
                    const bookManagerCalls = [
                        {
                            allowFailure: true,
                            callData: CloberBookManagerInterface.encodeFunctionData("getBookKey", [bookPair0]),
                            target: bookManager,
                        },
                        {
                            allowFailure: true,
                            callData: CloberBookManagerInterface.encodeFunctionData("getBookKey", [bookPair1]),
                            target: bookManager,
                        },
                    ];
                    const resultBookManager = await ChainInteractionService(chainId).fetchState(bookManagerCalls);
                    let j = 0;
                    const bookKey0 = CloberBookManagerInterface.decodeFunctionResult("getBookKey", resultBookManager[j++].returnData)[0];
                    const bookKey1 = CloberBookManagerInterface.decodeFunctionResult("getBookKey", resultBookManager[j++].returnData)[0];
                    token0 = bookKey0[0];
                    token1 = bookKey1[0];
                }
                {
                    const tokenCalls = [
                        {
                            allowFailure: true,
                            callData: ERC20Interface.encodeFunctionData("symbol"),
                            target: token0,
                        },
                        {
                            allowFailure: true,
                            callData: ERC20Interface.encodeFunctionData("symbol"),
                            target: token1,
                        },
                        {
                            allowFailure: true,
                            callData: ERC20Interface.encodeFunctionData("decimals"),
                            target: token0,
                        },
                        {
                            allowFailure: true,
                            callData: ERC20Interface.encodeFunctionData("decimals"),
                            target: token1,
                        },
                    ];
                    const resultTokens = await ChainInteractionService(chainId).fetchState(tokenCalls);
                    let j = 0;
                    symbol0 = ERC20Interface.decodeFunctionResult("symbol", resultTokens[j++].returnData)[0];
                    symbol1 = ERC20Interface.decodeFunctionResult("symbol", resultTokens[j++].returnData)[0];
                    decimals0 = ERC20Interface.decodeFunctionResult("decimals", resultTokens[j++].returnData)[0];
                    decimals1 = ERC20Interface.decodeFunctionResult("decimals", resultTokens[j++].returnData)[0];
                }
                const priceToken0 = (await pricer.get({
                    address: token0,
                    chainId: campaign.computeChainId,
                    symbol: symbol0,
                })) ?? 0;
                const priceToken1 = (await pricer.get({
                    address: token1,
                    chainId: campaign.computeChainId,
                    symbol: symbol1,
                })) ?? 0;
                tvl = priceToken0 * BN2Number(liquidityToken0, decimals0) + priceToken1 * BN2Number(liquidityToken1, decimals1);
                priceTargetToken = tvl / totalSupply;
            }
            catch {
                priceTargetToken =
                    (await pricer.get({
                        address: campaign.campaignParameters.targetToken,
                        chainId: campaign.computeChainId,
                        symbol: campaign.campaignParameters.symbolTargetToken,
                    })) ?? 0;
                tvl = totalSupply * priceTargetToken;
            }
            i += 3;
            const priceRewardToken = await TokenService.getRewardTokenPrice(campaign);
            const rewardTokens = await TokenService.findManyOrCreate([
                { chainId: campaign.chainId, address: campaign.rewardToken },
            ]);
            const rewardToken = rewardTokens[0];
            let apr = (priceRewardToken * BN2Number(campaign.amount, campaign.campaignParameters.decimalsRewardToken) * YEAR * 100) /
                campaign.campaignParameters.duration /
                tvl;
            if (rewardToken.isPoint) {
                apr = apr / 365 / 100;
            }
            else if (parseDistributionType(campaign.campaignParameters) !== DistributionType.DUTCH_AUCTION) {
                apr = getFixedApr(campaign, priceRewardToken, priceTargetToken);
            }
            dynamicData.push({
                ...campaign,
                apr,
                totalSupplyTargetToken: totalSupply,
                tvl,
                priceRewardToken: priceRewardToken,
            });
        }
        return dynamicData;
    }
}
