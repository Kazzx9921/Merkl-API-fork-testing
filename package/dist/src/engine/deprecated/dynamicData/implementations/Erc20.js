import { getTokenPricesInfo } from "@/engine/deprecated/erc20SubTypeProcessors/subtypesPrices";
import { getTokenTypeRound1 } from "@/engine/deprecated/erc20SubTypeProcessors/subtypesRound1";
import { getTokenTypeRound2 } from "@/engine/deprecated/erc20SubTypeProcessors/subtypesRound2";
import { getTokenTypeRound3 } from "@/engine/deprecated/erc20SubTypeProcessors/subtypesRound3";
import { getTokenTypeRound4 } from "@/engine/deprecated/erc20SubTypeProcessors/subtypesRound4";
import { Erc20SubType } from "@/engine/implementations/Erc20/subTypes";
import { ComputedValueService } from "@/modules/v4/computedValue/computedValue.service";
import { TokenRepository } from "@/modules/v4/token/token.repository";
import { TokenService } from "@/modules/v4/token/token.service";
import { log } from "@/utils/logger";
import { parseDistributionType } from "@/utils/parseDistributionType";
import { Pricer } from "@/utils/pricer";
import { DistributionType } from "@db/api";
import { BN2Number, BalancerPoolInterface, BalancerV3StablePoolInterface, ChainId, ChainInteractionService, ERC20Interface, EnzymeInterface, FactoryInterface, LayerBankERC20Interface, MetamorphoInterface, YEAR, getEnv, } from "@sdk";
import { getFixedApr } from "../utils/getFixedApr";
export class Erc20DynamicData {
    async build(chainId, campaigns) {
        const pricer = await Pricer.load();
        // Round 1: Get the high level type for each token (will need to be refined lated with more calls)
        const callsRounds1 = [];
        const tokenTypesByCampaign = {};
        for (const campaign of campaigns) {
            const typeStruct = {
                type: Erc20SubType.unknown,
                calls: [],
                typeInfo: {},
            };
            const targetToken = campaign.campaignParameters.targetToken;
            typeStruct.calls = [
                {
                    allowFailure: true,
                    callData: FactoryInterface.encodeFunctionData("factory"),
                    target: targetToken,
                },
                {
                    allowFailure: true,
                    callData: MetamorphoInterface.encodeFunctionData("MORPHO"),
                    target: targetToken,
                },
                {
                    allowFailure: true,
                    callData: ERC20Interface.encodeFunctionData("name"),
                    target: targetToken,
                },
                {
                    allowFailure: true,
                    callData: BalancerPoolInterface.encodeFunctionData("getPoolId"),
                    target: targetToken,
                },
                {
                    allowFailure: true,
                    callData: EnzymeInterface.encodeFunctionData("getCreator"),
                    target: targetToken,
                },
                {
                    allowFailure: true,
                    callData: LayerBankERC20Interface.encodeFunctionData("owner"),
                    target: targetToken,
                },
                {
                    allowFailure: true,
                    callData: BalancerV3StablePoolInterface.encodeFunctionData("getVault"),
                    target: targetToken,
                },
            ];
            callsRounds1.push(...typeStruct.calls);
            tokenTypesByCampaign[campaign.campaignId] = typeStruct;
        }
        const resultRound1 = await ChainInteractionService(chainId).fetchState(callsRounds1);
        // Round 2: Decode result from round 1 and get some additional info for the types before the final calls
        const callsRounds2 = [];
        let i = 0;
        for (const campaign of campaigns) {
            const callsForCampaign = tokenTypesByCampaign[campaign.campaignId].calls.length;
            tokenTypesByCampaign[campaign.campaignId] = getTokenTypeRound1(resultRound1, campaign.campaignParameters.targetToken, i, campaign);
            i += callsForCampaign;
            callsRounds2.push(...tokenTypesByCampaign[campaign.campaignId].calls);
        }
        const resultRound2 = await ChainInteractionService(chainId).fetchState(callsRounds2);
        // Round 3: Decode result from round 2 and get some additional info for the types before the final calls
        const callsRounds3 = [];
        let j = 0;
        for (const campaign of campaigns) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const callsForCampaign = tokenTypesByCampaign[campaign.campaignId].calls.length;
            tokenTypesByCampaign[campaign.campaignId] = getTokenTypeRound2(j, tokenTypesByCampaign[campaign.campaignId].type, tokenTypesByCampaign[campaign.campaignId].typeInfo, resultRound2, campaign);
            j += callsForCampaign;
            callsRounds3.push(...tokenTypesByCampaign[campaign.campaignId].calls);
        }
        const resultRound3 = await ChainInteractionService(chainId).fetchState(callsRounds3);
        // Final round before execute
        let callsFinal = [];
        j = 0;
        for (const campaign of campaigns) {
            const callsForCampaign = tokenTypesByCampaign[campaign.campaignId].calls.length;
            tokenTypesByCampaign[campaign.campaignId] = getTokenTypeRound3(j, tokenTypesByCampaign[campaign.campaignId].type, tokenTypesByCampaign[campaign.campaignId].typeInfo, resultRound3);
            j += callsForCampaign;
            callsFinal = callsFinal.concat(tokenTypesByCampaign[campaign.campaignId].calls);
        }
        // Round 4: Get the final data
        const resultsFinal = await ChainInteractionService(chainId).fetchState(callsFinal);
        j = 0;
        let calls = [];
        for (const campaign of campaigns) {
            const callsForCampaign = tokenTypesByCampaign[campaign.campaignId].calls.length;
            tokenTypesByCampaign[campaign.campaignId] = getTokenTypeRound4(j, tokenTypesByCampaign[campaign.campaignId].type, tokenTypesByCampaign[campaign.campaignId].typeInfo, resultsFinal, campaign);
            j += callsForCampaign;
            calls = calls.concat(tokenTypesByCampaign[campaign.campaignId].calls);
        }
        const result = await ChainInteractionService(chainId).fetchState(calls);
        i = 0;
        const dynamicData = [];
        for (const campaign of campaigns) {
            // const priceRewardToken =
            //   (await pricer.get({
            //     address: campaign.rewardToken,
            //     chainId,
            //     symbol: campaign.campaignParameters.symbolRewardToken,
            //   })) ?? 0;
            const priceRewardToken = await TokenService.getRewardTokenPrice(campaign);
            // Get the data from the final round and process it to get the price of the target token and some extra info
            const callsForCampaign = tokenTypesByCampaign[campaign.campaignId].calls.length;
            tokenTypesByCampaign[campaign.campaignId] = await getTokenPricesInfo(i, tokenTypesByCampaign[campaign.campaignId].type, tokenTypesByCampaign[campaign.campaignId].typeInfo, result.map(r => r.returnData), campaign, pricer);
            try {
                if (!!tokenTypesByCampaign[campaign.campaignId]?.typeInfo.priceTargetToken && getEnv() === "prod")
                    await TokenRepository.updateAddressPrices(campaign.campaignParameters.targetToken, tokenTypesByCampaign[campaign.campaignId]?.typeInfo.priceTargetToken);
            }
            catch (e) {
                log.warn(`failed to update target token price: ${e}`);
            }
            i += callsForCampaign;
            const whitelistedSupplyTargetToken = tokenTypesByCampaign[campaign.campaignId].typeInfo.whitelistedSupplyTargetToken;
            const totalSupplyTargetToken = whitelistedSupplyTargetToken;
            const priceTargetToken = tokenTypesByCampaign[campaign.campaignId].typeInfo.priceTargetToken;
            let lastEligibilityRatio = 1;
            if (!!campaign.campaignParameters.hooks?.length) {
                lastEligibilityRatio =
                    (await ComputedValueService.findCampaignValue(Bun.hash(`${campaign.chainId}${campaign.campaignId}`).toString(), "averageBoost"))?.averageBoost ?? 1;
            }
            const forfeitingBoost = 1;
            if (!!campaign.campaignParameters.hooks?.length) {
                lastEligibilityRatio =
                    (await ComputedValueService.findCampaignValue(Bun.hash(`${campaign.chainId}${campaign.campaignId}`).toString(), "forfeitingBoost"))?.forfeitingBoost ?? 1;
            }
            let apr = (lastEligibilityRatio *
                forfeitingBoost *
                (priceRewardToken *
                    BN2Number(campaign.amount, campaign.campaignParameters.decimalsRewardToken) *
                    YEAR *
                    100)) /
                campaign.campaignParameters.duration /
                (whitelistedSupplyTargetToken * priceTargetToken);
            const rewardTokens = await TokenService.findManyOrCreate([
                { chainId: campaign.chainId, address: campaign.rewardToken },
            ]);
            const rewardToken = rewardTokens[0];
            if (rewardToken.isPoint) {
                apr = apr / 365 / 100;
            }
            else if (parseDistributionType(campaign.campaignParameters) !== DistributionType.DUTCH_AUCTION) {
                apr = getFixedApr(campaign, priceRewardToken, priceTargetToken);
            }
            dynamicData.push({
                ...campaign,
                apr,
                totalSupplyTargetToken,
                tvl: whitelistedSupplyTargetToken * priceTargetToken,
                displayTvl: campaign.chainId === ChainId.ETHERLINK
                    ? tokenTypesByCampaign[campaign.campaignId].typeInfo.totalSupply * priceTargetToken
                    : undefined,
                type: tokenTypesByCampaign[campaign.campaignId].type,
                typeInfo: tokenTypesByCampaign[campaign.campaignId].typeInfo,
                priceRewardToken: priceRewardToken,
                lastEligibilityRatio,
            });
        }
        return dynamicData;
    }
}
