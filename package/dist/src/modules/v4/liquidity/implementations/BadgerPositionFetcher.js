import { CDPMANAGER_ADDRESS, SORTEDCDPS_ADDRESS } from "@/constants";
import { CampaignService } from "@/modules/v4/campaign/campaign.service";
import { BN2Number, Campaign, CdpManagerInterface, ChainInteractionService, ERC20Interface, SortedCdpsInterface, } from "@sdk";
const campaignType = Campaign.BADGER;
export class BadgerPositionFetcher {
    fetchPositions = async (chainId, user, opportunities) => {
        opportunities = opportunities.filter(o => o.type === Campaign[campaignType] && o.tokens?.length > 0 && o.chainId === chainId);
        const calls = [];
        calls.push({
            allowFailure: false,
            callData: CdpManagerInterface.encodeFunctionData("getSystemDebt"),
            target: CDPMANAGER_ADDRESS,
        });
        for (const opportunity of opportunities) {
            // Call per opportunity
            const _campaign = CampaignService.formatAsCampaignParameters(opportunity.campaigns[0]);
            calls.push({
                allowFailure: false,
                callData: SortedCdpsInterface.encodeFunctionData("getCdpsOf", [user]),
                target: SORTEDCDPS_ADDRESS,
            });
            for (const _token of opportunity.tokens) {
                // Call per token
            }
        }
        const res = await ChainInteractionService(chainId).fetchState(calls);
        const result = [];
        let i = 0;
        const totalSupplyEBTC = BN2Number(CdpManagerInterface.decodeFunctionResult("getSystemDebt", res[i++].returnData)[0], 18);
        for (const [index, opportunity] of opportunities.entries()) {
            // Decoding per opportunity
            const campaign = CampaignService.formatAsCampaignParameters(opportunity.campaigns[0]);
            let userSupply = 0;
            const cdps = SortedCdpsInterface.decodeFunctionResult("getCdpsOf", res[i++].returnData)[0];
            if (cdps.length !== 0) {
                const secondCalls = cdps.map((cdp) => {
                    return {
                        allowFailure: false,
                        callData: CdpManagerInterface.encodeFunctionData("Cdps", cdp),
                        target: CDPMANAGER_ADDRESS,
                    };
                });
                const secondRes = await ChainInteractionService(chainId).fetchState(secondCalls);
                cdps.forEach((cdp, j) => {
                    const cdpSupply = CdpManagerInterface.decodeFunctionResult("Cdps", secondRes[j].returnData)[0];
                    userSupply += BN2Number(cdpSupply, campaign.campaignParameters.decimalsTargetToken);
                });
            }
            for (const [subIndex, token] of opportunity.tokens.entries()) {
                // Decoding per token
                const balance = ERC20Interface.decodeFunctionResult("balanceOf", res[index + subIndex].returnData)[0].toString();
                if (BigInt(balance) > 0n) {
                    const position = {
                        flags: {},
                        opportunity,
                        tokens: [
                            {
                                token,
                                breakdown: [{ type: "balance", value: BN2Number(balance, token.decimals) }],
                            },
                        ],
                    };
                    result.push(position);
                }
            }
        }
        return result;
    };
}
