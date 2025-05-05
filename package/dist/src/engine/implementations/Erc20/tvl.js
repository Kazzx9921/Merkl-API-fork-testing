import { Erc20DynamicData } from "@/engine/deprecated/dynamicData/implementations/Erc20";
import { detectSubType } from "@/engine/implementations/Erc20/subTypes/detect";
import { log } from "@/utils/logger";
import { BN2Number, ChainInteractionService, ERC20Interface } from "@sdk";
import { erc20SubTypeTVLBuilderFactory } from "./subTypes/factories";
export class Erc20TVLBuilder {
    async build(computeChainId, campaigns) {
        const subTypes = await detectSubType(computeChainId, campaigns);
        let tvls = [];
        const promises = [];
        const processSubtype = async (subType) => {
            const builder = erc20SubTypeTVLBuilderFactory(subType);
            const campaignsOfSubType = campaigns.filter((_campaign, index) => subTypes[index] === subType);
            if (!!builder) {
                log.local(`building TVLs for subtype ${subType}`);
                const subTypeTVLs = await builder.build(computeChainId, campaignsOfSubType);
                // Impact blacklist or whitelist
                const calls = [];
                for (const { campaign } of subTypeTVLs) {
                    const { campaignParameters } = campaign;
                    const { targetToken, whitelist, blacklist } = campaignParameters;
                    if (whitelist?.length > 0) {
                        calls.push({
                            allowFailure: true,
                            callData: ERC20Interface.encodeFunctionData("totalSupply"),
                            target: targetToken,
                        });
                        for (const address of whitelist) {
                            calls.push({
                                allowFailure: true,
                                callData: ERC20Interface.encodeFunctionData("balanceOf", [address]),
                                target: targetToken,
                            });
                        }
                    }
                    if (blacklist?.length > 0) {
                        calls.push({
                            allowFailure: true,
                            callData: ERC20Interface.encodeFunctionData("totalSupply"),
                            target: targetToken,
                        });
                        for (const address of blacklist) {
                            calls.push({
                                allowFailure: true,
                                callData: ERC20Interface.encodeFunctionData("balanceOf", [address]),
                                target: targetToken,
                            });
                        }
                    }
                }
                const result = await ChainInteractionService(computeChainId).fetchState(calls);
                let index = 0;
                for (const [i, { campaign }] of subTypeTVLs.entries()) {
                    const { campaignParameters } = campaign;
                    const { whitelist, blacklist } = campaignParameters;
                    if (whitelist?.length > 0) {
                        const totalSupply = BigInt(ERC20Interface.decodeFunctionResult("totalSupply", result[index++].returnData)[0].toString());
                        let whitelistedSupply = 0n;
                        for (const _address of whitelist) {
                            whitelistedSupply += BigInt(ERC20Interface.decodeFunctionResult("balanceOf", result[index++].returnData)[0].toString());
                        }
                        subTypeTVLs[i].tvl *= BN2Number((whitelistedSupply * 10n ** 6n) / totalSupply, 6);
                    }
                    if (blacklist?.length > 0) {
                        const totalSupply = BigInt(ERC20Interface.decodeFunctionResult("totalSupply", result[index++].returnData)[0].toString());
                        let blacklistedSupply = totalSupply;
                        for (const _address of blacklist) {
                            blacklistedSupply -= BigInt(ERC20Interface.decodeFunctionResult("balanceOf", result[index++].returnData)[0].toString());
                        }
                        subTypeTVLs[i].tvl *= BN2Number((blacklistedSupply * 10n ** 6n) / totalSupply, 6);
                    }
                }
                tvls = tvls.concat(subTypeTVLs);
            }
            else {
                log.local(`building TVLs for subtype ${subType} using deprecated code`);
                // @deprecated In case we don't have the new builder, use the old erc20 dynamic data
                const dynamicDataList = await new Erc20DynamicData().build(computeChainId, campaignsOfSubType);
                if (dynamicDataList.length !== campaignsOfSubType.length) {
                    throw new Error("Erc20TVLBuilder: dynamicDataList.length !== campaignsOfSubType.length");
                }
                for (const [index, dynamicData] of dynamicDataList.entries()) {
                    tvls.push({
                        campaign: campaignsOfSubType[index],
                        tvl: dynamicData.tvl,
                        displayTvl: dynamicData.displayTvl ?? undefined,
                        tvlBreakdown: [],
                    });
                }
            }
            return;
        };
        for (const subType of new Set(subTypes)) {
            promises.push(processSubtype(subType));
        }
        await Promise.all(promises);
        return tvls;
    }
}
