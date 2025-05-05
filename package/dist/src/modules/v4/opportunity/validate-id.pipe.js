import { BadRequestError } from "@/errors";
import { Campaign as CampaignType } from "@sdk";
export const validateId = ({ params }) => {
    if (!params.id.includes("-")) {
        if (/[0-9]{1,20}/.test(params.id))
            return;
        throw new BadRequestError("Invalid Opportunity id");
    }
    const [_chainId, type, _campaignId] = params.id.split("-");
    if (!Object.values(CampaignType).includes(type))
        throw new BadRequestError("Invalid Campaign type", Object.keys(CampaignType));
};
