import { AMM } from "@sdk";
export function isStrykeCampaign(amm) {
    return [AMM.Stryke, AMM.StrykePCS, AMM.StrykeSushi].includes(amm);
}
