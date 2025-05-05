import { dynamicDataBuilderFactory } from "@/engine/deprecated/dynamicData/factory";
import { OpportunityConvertorService } from "@/modules/v4/opportunity/opportunity.converter";
import { log } from "@/utils/logger";
import { Campaign as CampaignType } from "@sdk";
import { getAddress } from "viem";
import { ProtocolService } from "../../../modules/v4/protocol/protocol.service";
import { detectSubType } from "./subTypes/detect";
import { erc20SubTypeMetadataBuilderFactory } from "./subTypes/factories";
export class Erc20Metadata {
    async build(campaign, opportunityIdentifier) {
        const { params, computeChainId, campaignId, rewardToken, distributionChainId, type } = campaign;
        const [subType] = await detectSubType(computeChainId, [
            OpportunityConvertorService.convertV4CampaignToV3(CampaignType[type], campaign, opportunityIdentifier),
        ]);
        log.info(`building metadata for subtype ${subType}`);
        const builder = erc20SubTypeMetadataBuilderFactory(subType);
        if (!!builder) {
            return builder.build(campaign, opportunityIdentifier);
        }
        // @deprecated
        let action = "HOLD";
        let name = `Hold ${params.symbolTargetToken}`;
        let mainProtocolId = undefined;
        const depositUrl = params?.url;
        let tokens = [{ chainId: computeChainId, address: params.targetToken }];
        try {
            const [dynamicData] = await dynamicDataBuilderFactory(CampaignType.ERC20).build(computeChainId, [
                {
                    campaignId,
                    rewardToken: rewardToken.address,
                    amount: "1",
                    chainId: distributionChainId,
                    computeChainId,
                    campaignParameters: params,
                },
            ]);
            tokens = dynamicData?.typeInfo?.tokensDisplay?.map((token) => ({
                chainId: computeChainId,
                address: token.address,
            }));
            action = dynamicData?.typeInfo?.action ?? action;
            name = dynamicData?.typeInfo?.cardName;
            mainProtocolId = dynamicData?.typeInfo?.protocol?.toLowerCase().replace(" ", "");
            const protocol = !!mainProtocolId ? await ProtocolService.findUnique(mainProtocolId) : undefined;
            if (!!protocol) {
                mainProtocolId = protocol?.id;
            }
        }
        catch {
            log.warn(`failed to fetch dynamic data for ERC20 campaign ${campaignId}`);
        }
        if (mainProtocolId === "unknown") {
            mainProtocolId = undefined;
        }
        return {
            action,
            name,
            tokens,
            mainProtocol: mainProtocolId,
            depositUrl,
            explorerAddress: getAddress(params.targetToken),
        };
    }
}
