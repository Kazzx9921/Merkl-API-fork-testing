import type { CampaignWithParams } from "@/modules/v4/campaign/campaign.model";
import { OpportunityService } from "@/modules/v4/opportunity/opportunity.service";
import { type CampaignParameters, Campaign as CampaignType, type Opportunity as OpportunityV3 } from "@sdk";
export declare abstract class OpportunityConvertorService {
    #private;
    static convertV4CampaignToV3<C extends CampaignType>(campaignType: C, campaign: Exclude<Awaited<ReturnType<(typeof OpportunityService)["findMany"]>>[number]["campaigns"], undefined>[number] | Omit<CampaignWithParams<C>, "manualOverrides">, opportunityIdentifier: string): CampaignParameters<C>;
    static convertV4toV3(opportunity: Awaited<ReturnType<(typeof OpportunityService)["findMany"]>>[number], withCampaigns?: boolean): OpportunityV3;
    static setV3Opportunities(showCampaigns: boolean, test: boolean | undefined, identifier: string | undefined, chainId: string | undefined): Promise<{}>;
    static logKeyAndTTLV3Opportunities(showCampaigns: boolean, test: boolean | undefined, identifier: string | undefined, chainId: string | undefined): Promise<void>;
    static wrapV3Opportunities(showCampaigns: boolean, test: boolean | undefined, identifier: string | undefined, chainId: string | undefined): Promise<{}>;
}
