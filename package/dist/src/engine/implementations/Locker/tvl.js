import { computeLockerAmountFromMostRecentStateSave } from "@/engine/tvl/logStates";
import { getOnlyUserBalance } from "@/libs/tokens/balances";
import { TokenService } from "@/modules/v4/token/token.service";
import { BN2Number, Campaign as CampaignType } from "@sdk";
export class LockerTVLBuilder {
    async build(computeChainId, campaigns) {
        const tvls = [];
        for (const campaign of campaigns) {
            let lockedAmount = (await computeLockerAmountFromMostRecentStateSave(computeChainId, CampaignType.LOCKER, campaign)).lockedAmount;
            let tvl = 1;
            if (campaign.campaignParameters.lockerContract === "0x48e8dE138C246c14248C94d2D616a2F9eb4590D2") {
                if (lockedAmount === 0)
                    lockedAmount = BN2Number((await getOnlyUserBalance(computeChainId, "0x48e8dE138C246c14248C94d2D616a2F9eb4590D2", [
                        "0x282A69142bac47855C3fbE1693FcC4bA3B4d5Ed6",
                    ]))["0x282A69142bac47855C3fbE1693FcC4bA3B4d5Ed6"].balance);
                tvl = lockedAmount * (await TokenService.getPrice({ address: "0x8A5A5DE9db5770123Ff2145F59e9F20047f0A8EC" }));
                tvls.push({
                    campaign: campaign,
                    tvl,
                    tvlBreakdown: [],
                });
            }
        }
        return tvls;
    }
}
