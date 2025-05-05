import { TokenService } from "@/modules/v4/token/token.service";
import { decodeCall } from "@/utils/decodeCalls";
import { createCall } from "@/utils/encodeCalls";
import { generateCardName } from "@/utils/generateCardName";
import { BN2Number } from "@sdk";
import { tokenTypeToProtocolAndAction } from "./tokenTypeToProtocolAndAction";
export var Round;
(function (Round) {
    Round["one"] = "round1";
    Round["two"] = "round2";
    Round["three"] = "round3";
    Round["four"] = "round4";
})(Round || (Round = {}));
/**
 * Generic Processor to compute dynamic data of ERC20 tokens
 *
 * @params Input - Sets of value that will be passed from rounds to rounds in order to query the blockchain
 * @params DataRaw - Raw data output from the view function calls
 * @params Output - Final output of the processor
 */
export class GenericProcessor {
    rounds = {
        round1: [],
        round2: [],
        round3: [],
        round4: [{ key: "totalSupply", call: "totalSupply", target: "tokenAddress" }],
    };
    stakingRounds = {
        round1: [
            { key: "lockNFT", call: "lockNFT", target: "stakingContract", optional: true },
            { key: "eip712DomainName", call: "eip712DomainName", target: "stakingContract", optional: true },
            { key: "stakingName", call: "name", target: "stakingContract", optional: true },
            { key: "stakingSymbol", call: "symbol", target: "stakingContract", optional: true },
        ],
        round2: [{ key: "stakingSymbol", call: "symbol", target: "lockNFT", optional: true }],
        round3: [],
        round4: [],
    };
    debug = false;
    processingRound1(_typeInfo) { }
    processingRound2(_typeInfo, _campaign) { }
    processingRound3(_typeInfo) { }
    processingRound4(_typeInfo) { }
    handleWhiteListBlacklistRound5(typeInfo, campaign) {
        const blacklistedSupplyBN = BigInt(typeInfo.blacklistedSupply);
        const totalSupplyBN = BigInt(typeInfo.totalSupply);
        const totalSupply = BN2Number(typeInfo.totalSupply, campaign.campaignParameters.decimalsTargetToken);
        const whitelistedSupply = BN2Number(typeInfo.whitelistedSupply, campaign.campaignParameters.decimalsTargetToken);
        const blacklistedSupply = BN2Number(typeInfo.blacklistedSupply, campaign.campaignParameters.decimalsTargetToken);
        let whitelistedSupplyTargetToken = whitelistedSupply
            ? whitelistedSupply
            : BN2Number(totalSupplyBN - blacklistedSupplyBN, campaign.campaignParameters.decimalsTargetToken);
        whitelistedSupplyTargetToken = whitelistedSupplyTargetToken ? whitelistedSupplyTargetToken : 0.00001;
        return {
            whitelistedSupplyTargetToken,
            totalSupply,
            blacklistedSupply,
        };
    }
    async processingRound5(_index, type, typeInfo, _calls, campaign, pricer) {
        const { whitelistedSupplyTargetToken, totalSupply, blacklistedSupply } = this.handleWhiteListBlacklistRound5(typeInfo, campaign);
        const priceTargetToken = await TokenService.getPrice({
            address: campaign.campaignParameters.targetToken,
            chainId: campaign.computeChainId,
        });
        const tvl = whitelistedSupplyTargetToken * priceTargetToken;
        return {
            protocol: typeInfo.protocol,
            type,
            whitelistedSupplyTargetToken,
            totalSupply,
            priceTargetToken,
            tvl,
            blacklistedSupply,
            cardName: generateCardName(type, typeInfo, campaign),
            tokensDisplay: [{ symbol: campaign.campaignParameters.symbolTargetToken, address: typeInfo.tokenAddress }],
        };
    }
    computeRound1(type, typeInfo) {
        typeInfo = { type, ...tokenTypeToProtocolAndAction[type], ...typeInfo };
        this.processingRound1(typeInfo);
        let calls = this.encodeNextRound(Round.one, type, typeInfo);
        if (typeInfo.isStaking === "true") {
            calls = calls.concat(this.encodeStakingNextRound(Round.one, type, typeInfo));
        }
        if (this.debug) {
            console.log("Round 1", {
                type: type,
                calls,
                typeInfo,
            });
        }
        return {
            type: type,
            calls,
            typeInfo,
        };
    }
    computeRound2(index, type, typeInfo, calls, campaign) {
        this.decodePreviousRound(Round.one, calls, typeInfo, type, index);
        if (typeInfo.isStaking === "true") {
            this.decodePreviousStakingRound(Round.one, calls, typeInfo, type, index + this.rounds.round1.length);
        }
        this.processingRound2(typeInfo, campaign);
        let nextCalls = this.encodeNextRound(Round.two, type, typeInfo);
        if (typeInfo.isStaking === "true") {
            nextCalls = nextCalls.concat(this.encodeStakingNextRound(Round.two, type, typeInfo));
        }
        if (this.debug) {
            console.log("Round 2", {
                type: type,
                calls: nextCalls,
                typeInfo,
            });
        }
        return {
            type: type,
            calls: nextCalls,
            typeInfo,
        };
    }
    computeRound3(index, type, typeInfo, calls) {
        this.decodePreviousRound(Round.two, calls, typeInfo, type, index);
        if (typeInfo.isStaking === "true") {
            this.decodePreviousStakingRound(Round.two, calls, typeInfo, type, index + this.rounds.round2.length);
        }
        this.processingRound3(typeInfo);
        let nextCalls = this.encodeNextRound(Round.three, type, typeInfo);
        if (typeInfo.isStaking === "true") {
            nextCalls = nextCalls.concat(this.encodeStakingNextRound(Round.three, type, typeInfo));
        }
        if (this.debug) {
            console.log("Round 3", {
                type: type,
                calls: nextCalls,
                typeInfo,
            });
        }
        return {
            type: type,
            calls: nextCalls,
            typeInfo,
        };
    }
    computeRound4(index, type, typeInfo, calls, campaign) {
        const blacklistedLiquidityCalls = this.generateBlackListCall(type, typeInfo, campaign);
        const whitelistedLiquidityCalls = this.generateWhitelistCall(type, typeInfo, campaign);
        this.decodePreviousRound(Round.three, calls, typeInfo, type, index);
        if (typeInfo.isStaking === "true") {
            this.decodePreviousStakingRound(Round.three, calls, typeInfo, type, index + this.rounds.round3.length);
        }
        this.processingRound4(typeInfo);
        let nextCalls = this.encodeNextRound(Round.four, type, typeInfo);
        if (typeInfo.isStaking === "true") {
            nextCalls = nextCalls.concat(this.encodeStakingNextRound(Round.four, type, typeInfo));
        }
        if (this.debug) {
            console.log("Round 4", {
                type: type,
                calls: nextCalls,
                typeInfo,
            });
        }
        return {
            type: type,
            calls: whitelistedLiquidityCalls.concat(blacklistedLiquidityCalls).concat(nextCalls),
            typeInfo: {
                ...typeInfo,
            },
        };
    }
    async computeRound5(index, type, typeInfo, calls, campaign, pricer) {
        typeInfo.whitelistedSupply = this.decodeListedSupply(index, campaign.campaignParameters.whitelist, calls);
        index = index + campaign.campaignParameters.whitelist.length;
        typeInfo.blacklistedSupply = this.decodeListedSupply(index, campaign.campaignParameters.blacklist, calls);
        index = index + campaign.campaignParameters.blacklist.length;
        this.decodePreviousRound(Round.four, calls, typeInfo, type, index);
        if (typeInfo.isStaking === "true") {
            this.decodePreviousStakingRound(Round.four, calls, typeInfo, type, index + this.rounds.round4.length);
        }
        const outputInfo = (await this.processingRound5(index, type, typeInfo, calls, campaign, pricer));
        if (this.debug) {
            console.log("Round 5", {
                type: type,
                calls: [],
                typeInfo: {
                    ...outputInfo,
                },
            });
        }
        return {
            type: type,
            calls: [],
            typeInfo: {
                ...outputInfo,
            },
        };
    }
    generateWhitelistCall(type, typeInfo, campaign) {
        const whitelistedLiquidityCalls = [];
        if (campaign.campaignParameters.whitelist.length > 0) {
            for (const whitelistedAddress of campaign.campaignParameters.whitelist) {
                if (!campaign.campaignParameters.blacklist.includes(whitelistedAddress)) {
                    whitelistedLiquidityCalls.push(createCall(typeInfo.tokenAddress, "balanceOf", type, whitelistedAddress));
                }
            }
        }
        return whitelistedLiquidityCalls;
    }
    generateBlackListCall(type, typeInfo, campaign) {
        const blacklistedLiquidityCalls = [];
        if (campaign.campaignParameters.blacklist.length > 0) {
            for (const blacklistedAddress of campaign.campaignParameters.blacklist) {
                blacklistedLiquidityCalls.push(createCall(typeInfo.tokenAddress, "balanceOf", type, blacklistedAddress));
            }
        }
        return blacklistedLiquidityCalls;
    }
    decodeListedSupply(index, list, calls) {
        if (list.length === 0) {
            return "0";
        }
        let listedSupply = 0n;
        for (const _ of list) {
            listedSupply += BigInt(decodeCall(calls, index++, "balanceOf"));
        }
        return listedSupply.toString();
    }
    decodeRound(round, index, calls, type, data) {
        round.map(({ key, call, optional }) => {
            if (optional) {
                try {
                    const value = decodeCall(calls, index, call, type);
                    index++;
                    data[key] = value;
                }
                catch {
                    index++;
                }
            }
            else {
                const value = decodeCall(calls, index, call, type);
                index++;
                data[key] = value;
            }
        });
    }
    decodePreviousRound(round, calls, data, type, index) {
        if (round === Round.one) {
            this.decodeRound(this.rounds.round1, index, calls, type, data);
        }
        if (round === Round.two) {
            this.decodeRound(this.rounds.round2, index, calls, type, data);
        }
        if (round === Round.three) {
            this.decodeRound(this.rounds.round3, index, calls, type, data);
        }
        if (round === Round.four) {
            this.decodeRound(this.rounds.round4, index, calls, type, data);
        }
    }
    decodePreviousStakingRound(round, calls, data, type, index) {
        if (round === Round.one) {
            this.decodeRound(this.stakingRounds.round1, index, calls, type, data);
        }
        if (round === Round.two) {
            this.decodeRound(this.stakingRounds.round2, index, calls, type, data);
        }
        if (round === Round.three) {
            this.decodeRound(this.stakingRounds.round3, index, calls, type, data);
        }
        if (round === Round.four) {
            this.decodeRound(this.stakingRounds.round4, index, calls, type, data);
        }
    }
    encodeRound(round, callInfo, type) {
        return round
            .map(({ call, target, metaData, optional }) => {
            if (optional && !callInfo[target]) {
                return [];
            }
            if (metaData) {
                return createCall(callInfo[target], call, type, callInfo[metaData]);
            }
            return createCall(callInfo[target], call, type);
        })
            .filter(call => Array.isArray(call) === false);
    }
    encodeNextRound(round, type, data) {
        const keys = Object.keys(data);
        const callInfo = keys.reduce((acc, key) => {
            if (data[key]) {
                acc[key] = data[key];
            }
            return acc;
        }, {});
        let calls = [];
        if (round === Round.one) {
            calls = this.encodeRound(this.rounds.round1, callInfo, type);
        }
        if (round === Round.two) {
            calls = this.encodeRound(this.rounds.round2, callInfo, type);
        }
        if (round === Round.three) {
            calls = this.encodeRound(this.rounds.round3, callInfo, type);
        }
        if (round === Round.four) {
            calls = this.encodeRound(this.rounds.round4, callInfo, type);
        }
        return calls;
    }
    encodeStakingNextRound(round, type, data) {
        const keys = Object.keys(data);
        const callInfo = keys.reduce((acc, key) => {
            if (data[key]) {
                acc[key] = data[key];
            }
            return acc;
        }, {});
        let calls = [];
        if (round === Round.one) {
            calls = this.encodeRound(this.stakingRounds.round1, callInfo, type);
        }
        if (round === Round.two) {
            calls = this.encodeRound(this.stakingRounds.round2, callInfo, type);
        }
        if (round === Round.three) {
            calls = this.encodeRound(this.stakingRounds.round3, callInfo, type);
        }
        if (round === Round.four) {
            calls = this.encodeRound(this.stakingRounds.round4, callInfo, type);
        }
        return calls;
    }
}
