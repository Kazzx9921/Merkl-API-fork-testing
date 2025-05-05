import type { partialConfig } from "./programPayload.model";
export declare enum program {
    Puffer = "Puffer",
    ZkSync = "ZkSync",
    Mode = "Mode",
    Vicuna = "Vicuna",
    Sonicmarket = "Sonicmarket",
    Reserve = "Reserve",
    Beets = "Beets",
    Celo = "Celo",
    Swapx = "Swapx",
    Etherlink = "Etherlink",
    Angles = "Angles",
    Ronin = "Ronin",
    TAC = "TAC",
    HypurrFi = "HypurrFi",
    WorldChain = "WorldChain",
    StableJack = "StableJack",
    Corn = "Corn"
}
export declare enum roninCampaigns {
    Katana_WETH_RON_Ronin = "Katana WETH-RON Ronin 0x90f31f1907a4d1443a6aacdc91ac2312f91bafa7",
    Katana_AXS_RON_Ronin = "Katana AXS-RON Ronin 0x3230b903e8a5d6e46b5a5028470dd33e7b673722",
    Katana_USDC_RON_Ronin = "Katana USDC-RON Ronin 0x392d372f2a51610e9ac5b741379d5631ca9a1c7f",
    Katana_LRON_RON_Ronin = "Katana LRON-RON Ronin 0x0fbe1a7f0f006a4a4d817b2aa922889612758ce8",
    Supply_WETH_Compound_Ronin = "Supply WETH Compound Ronin 0x4006ed4097ee51c09a04c3b0951d28ccf19e6dfe"
}
export declare enum cornCampaigns {
    Uniswap_USDT_WBTCN_Corn = "Uniswap USDT/WBTCN Corn 0x660C6C6C2ad9bE9fca2D40dA22E1e6142ce5e7ca",
    Uniswap_CORN_WBTCN_Corn = "Uniswap CORN/WBTCN Corn 0xE05EC6d50A4E03C2EeaDe6A1a91732f62E982e52",
    Uniswap_CORN_BABY_Corn = "Uniswap CORN/BABY Corn 0x255F0b304f701A0530F5dc1739A3d1469e21dd5f",
    Uniswap_BTCN_LBTC_Corn = "Uniswap BTCN/LBTC Corn 0xbd108c1dd7802dff6c24138a72949184ffbe006f",
    Concrete_CornUSDT_Vault_Corn = "Concrete CornUSDT Vault Corn 0x3Eb6464A77D7B619AaAfa7e9FFC0fBe3ed7084B3"
}
export declare enum anglesCampaigns {
    Angles_supply_in_angles_liquid = "0x15E96CDecA34B9DE1B31586c1206206aDb92E69D",
    hold_anS = "0x0C4E186Eae8aCAA7F7de1315D5AD174BE39Ec987",
    hold_wANS = "0xfA85Fe5A8F5560e9039C04f2b0a90dE1415aBD70",
    pendle_YT = "0x081424EC3F4BFe0ad829297D6Cb73997656F56ac",
    pendle_PT = "0x9700C4C218237550EAd3a78022d43215A717e5e7"
}
export declare enum etherlinkCampaigns {
    Superlend_Supply_WBTC_Etherlink = "Superlend Supply WBTC Etherlink 0xfCA0802cb10b3b134a91e07f03965f63eF4B23eA",
    Superlend_Supply_WETH_Etherlink = "Superlend Supply WETH Etherlink 0x301bea8B7c0eF6722c937C07Da4d53931F61969c",
    Superlend_Supply_USDC_Etherlink = "Superlend Supply USDC Etherlink 0xd03bfdF9B26DB1e6764724d914d7c3d18106a9Fb",
    Superlend_Supply_USDT_Etherlink = "Superlend Supply USDT Etherlink 0x998098A1B2E95e2b8f15360676428EdFd976861f",
    Superlend_Supply_WXTZ_Etherlink = "Superlend Supply WXTZ Etherlink 0x008ae222661B6A42e3A097bd7AAC15412829106b",
    Superlend_Supply_mTBILL_Etherlink = "Superlend Supply mTBILL Etherlink 0x187B7b83e8CaB442AD0BFEAe38067f3eb38a2d72",
    Superlend_Supply_mBASIS_Etherlink = "Superlend Supply mBASIS Etherlink 0x660ADeF5993167ACdb490DF287f4Db6Cc226fFeB",
    Iguana_WETH_WXTZ = "Iguana WETH/WXTZ Etherlink 0x478F067b0Ed73d120BBcd8c6f4f33438FC483912",
    Iguana_USDC_USDT = "Iguana USDC/USDT Etherlink 0x86456e2E2A203Da82E61ed34eF4137Fbe545f0DC",
    Iguana_XTZ_USDC = "Iguana XTZ/USDT Etherlink 0x508060A01f11d6a2Eb774B55aEba95931265E0cc",
    Iguana_WBTC_XTZ = "Iguana WBTC/XTZ Etherlink 0x8930e315fa6D704A94bE6E14DaD66f6d66FfF7DF",
    Iguana_mTBILL_USDC = "Iguana mTBILL/USDC Etherlink 0x643D7CF86262b287b8548e840b4081c1A1525355",
    Iguana_mBASIS_USDC = "Iguana mBASIS/USDC Etherlink 0xc2AF49072611f63894F761c8a354419dD0486826",
    Hanji_HJLP = "Hanji HJLP Etherlink 0x1cd88fBD530281Ad6c639E2B897c4E239003A930",
    Uranium_Hold_xU308_Etherlink = "Uranium Hold xU308 Etherlink 0x79052Ab3C166D4899a1e0DD033aC3b379AF0B1fD",
    referral_test = "referral test Etherlink 0x0",
    Hanji_XTZ_USDC = "Hanji XTZ/USDC Etherlink 0xd0bc067cf877f7b76ceb331891331d9e6acda1a7",
    Hanji_WETH_USDC = "Hanji WETH/USDC Etherlink 0x65ea4dd7f789c71c0f57ed84b3bdc3062898d3cb",
    Hanji_WBTC_USDC = "Hanji WBTC/USDC Etherlink 0xbb6b01d94e3f6ebae8647cb56d544f57928ab758"
}
export declare enum swapxCampaigns {
    Swapx_SWPx_USDCe_Swapx = "Swapx SWPx/USDC.e Swapx 0x467865E7Ce29E7ED8f362D51Fd7141117B234b44",
    Swapx_SWPx_wS_Swapx = "Swapx SWPx/wS Swapx 0xbeca246A76942502f61bFe88F60bbc87DaFefe80",
    Swapx_SWPx_Weth_Swapx = "Swapx SWPx/Weth Swapx 0x9c2a7bb01951bE15fe835886188fA13255eF9486",
    Swapx_SWPx_OS_Swapx = "Swapx SWPx/OS Swapx 0x9Cb484FAD38D953bc79e2a39bBc93655256F0B16",
    Swapx_USDCe_wS_Swapx = "Swapx USDC.e/wS Swapx 0x5C4B7d607aAF7B5CDE9F09b5F03Cf3b5c923AEEa",
    Swapx_USDCe_scUSD_USDCe_gauge_Swapx = "Swapx USDC.e/scUSD USDC.e gauge Swapx 0xDd35c88B1754879EF86BBF3A24F81fCCA5Eb6B5D",
    Swapx_USDCe_scUSD_scUSD_gauge_Swapx = "Swapx USDC.e/scUSD scUSD gauge Swapx 0xDd35c88B1754879EF86BBF3A24F81fCCA5Eb6B5D",
    Swapx_scETH_wS_Swapx = "Swapx scETH/wS Swapx 0xFC64BD7c84F7Dc1387D6E752679a533F22f6F1DB",
    Swapx_stS_wS_stS_gauge_Swapx = "Swapx stS/wS stS gauge Swapx 0xD760791B29e7894FB827A94Ca433254bb5aFB653",
    Swapx_stS_wS_wS_gauge_Swapx = "Swapx stS/wS wS gauge Swapx 0xD760791B29e7894FB827A94Ca433254bb5aFB653",
    Swapx_WETH_USDCe_Swapx = "Swapx WETH/USDC.e Swapx 0xeC4Ee7d6988Ab06F7a8DAaf8C5FDfFdE6321Be68",
    Swapx_stS_USDCe_stS_gauge_Swapx = "Swapx stS/USDC.e stS gauge Swapx 0x5DDbeF774488cc68266d5F15bFB08eaA7cd513F9",
    Swapx_stS_USDCe_USDCe_gauge_Swapx = "Swapx stS/USDC.e USDC.e gauge Swapx 0x5DDbeF774488cc68266d5F15bFB08eaA7cd513F9",
    Swapx_wETH_wS_Swapx = "Swapx wETH/wS Swapx 0xF58fC088C33aD46113940173cB0da3Dd08c4AA88",
    Swapx_ANON_USDC_Swapx = "Swapx ANON/USDC Swapx 0x6F7C5f531024216CD8156D0B4E271E0C92a8A4E6",
    Swapx_ANON_wS_Swapx = "Swapx ANON/wS Swapx 0xb73a4d63fa27EB0Ded5305C5D4D1cE488edfE2A1",
    Swapx_USDC_OS_Swapx = "Swapx USDC/OS Swapx 0x84EA9fAfD41abAEc5a53248f79Fa05ADA0058a96",
    Swapx_OS_wS_Swapx = "Swapx OS/wS Swapx 0xa76Beaf111BaD5dD866fa4835D66b9aA2Eb1FdEc",
    Swapx_scETH_WETH_Swapx = "Swapx scETH/WETH Swapx 0xDa2fDdeb3D654E1F32E2664d8d95C9329e34E5c8",
    Swapx_OS_GEMSx_Swapx = "Swapx OS/GEMSx Swapx 0x9ac7F5961a452e9cD5Be5717bD2c3dF412D1c1a5",
    Swapx_USDT_USDCe_USDT_gauge_Swapx = "Swapx USDT/USDC.e USDT gauge Swapx 0x0d13400CC7c46D77a43957fE614ba58C827dfde6",
    Swapx_USDT_USDCe_USDCe_gauge_Swapx = "Swapx USDT/USDC.e USDC.e gauge Swapx 0x0d13400CC7c46D77a43957fE614ba58C827dfde6",
    Swapx_frxUSD_scUSD_Swapx = "Swapx frxUSD/scUSD Swapx 0x63a66Dd60b0F2812249802477adA8a890A030Eca",
    Swapx_frxETH_scETH_Swapx = "Swapx frxETH/scETH Swapx 0x77BF14037D3f72c65CbaEa92FA3f09f2f8978cBe",
    Swapx_FXS_frxETH_Swapx = "Swapx FXS/frxETH Swapx 0x3f74c162E4B2baeBA31Ac1698fEB7c5DB3aFFE4A",
    Swapx_sfrxUSD_frxUSD_Swapx = "Swapx sfrxUSD/frxUSD Swapx 0x7d709a567BA2fdBbB92E94E5fE74b9cbbc590835",
    Swapx_sfrxETH_frxETH_Swapx = "Swapx sfrxETH/frxETH Swapx 0x586C118d62664C5D253272357359A14349219EBA",
    Swapx_sfrxUSD_OS_sfrxUSD_gauge_Swapx = "Swapx sfrxUSD/OS sfrxUSD gauge Swapx 0x9255F31eF9B35d085cED6fE29F9E077EB1f513C6",
    Swapx_sfrxUSD_OS_OS_gauge_Swapx = "Swapx sfrxUSD/OS OS gauge Swapx 0x9255F31eF9B35d085cED6fE29F9E077EB1f513C6",
    Swapx_WBTC_SCBTC_Swapx = "Swapx WBTC/SCBTC Swapx 0xb96F401F789271bc14ADe2229E6189084805c50C",
    Swapx_ws_scbtc_Swapx = "Swapx ws/scbtc Swapx 0xcD531DAfD592be3CA9bef79cDb4C0dF8A5104b81",
    Swapx_scUSD_OS_Swapx = "Swapx scUSD/OS Swapx 0x370428430503B3b5970Ccaf530CbC71d02C3B61a",
    Swapx_V2_USDCe_scUSD_Swapx = "Swapx V2 USDCe/scUSD 0xBb8aE5b889243561ac9261F22F592B72250AFd1F",
    Swapx_wstkscUSD_scUSD_wstkscUSD_gauge_Swapx = "Swapx wstkscUSD/scUSD wstkscUSD gauge Swapx 0xEd08f5caD599E7F523d6B3FD598005B43aA003bb",
    Swapx_wstkscUSD_scUSD_scUSD_gauge_Swapx = "Swapx wstkscUSD/scUSD scUSD gauge Swapx 0xEd08f5caD599E7F523d6B3FD598005B43aA003bb",
    Swapx_wstkscUSD_bUSDCe20_wstkscUSD_gauge_Swapx = "Swapx wstkscUSD/bUSDC.e-20 wstkscUSD gauge Swapx 0x85279f76f6ce5bb26f721931ba4e3188cd28ad51",
    Swapx_wstkscUSD_bUSDCe20_bUSDCe20_gauge_Swapx = "Swapx wstkscUSD/bUSDC.e-20 bUSDC.e-20 gauge Swapx 0x85279f76f6ce5bb26f721931ba4e3188cd28ad51",
    Swapx_wstkscUSD_aSonUSDC_aSonUSDC_gauge_Swapx = "Swapx wstkscUSD/aSonUSDC aSonUSDC gauge Swapx 0xf248b0EF6d45Aa492C73699B71748b5D1a6770C6",
    Swapx_wstkscUSD_aSonUSDC_wstkscUSD_gauge_Swapx = "Swapx wstkscUSD/aSonUSDC wstkscUSD gauge Swapx 0xF2a497F783C6bfEe0670757462a31f9429fdE53d",
    Swapx_beS_OS_beS_gauge_Swapx = "Swapx beS/OS beS gauge Swapx 0xfBA3606310f3d492031176eC85DFbeD67F5799F2",
    Swapx_beS_OS_OS_gauge_Swapx = "Swapx beS/OS OS gauge Swapx 0x77546B40445d3eca6111944DFe902de0514A4F80"
}
export declare enum celoCampaigns {
    UniswapV3_cUSD_USDT_Celo = "UniswapV3 cUSD/USDT Celo 0x5dC631aD6C26BEA1a59fBF2C2680CF3df43d249f",
    UniswapV3_USDT_WETH_Celo = "UniswapV3 USDT/WETH Celo 0xF55791AfBB35aD42984f18D6Fe3e1fF73D81900c",
    UniswapV3_USDT_cGHS_Celo = "UniswapV3 USDT/cGHS Celo 0x6BAB3AfA6d0c42d539bcbc33Ffb68C0406913413",
    UniswapV3_USDC_USDT_Celo = "UniswapV3 USDC/USDT Celo 0x1a810e0B6c2dd5629AFa2f0c898b9512C6F78846",
    UniswapV3_cUSD_USDC_Celo = "UniswapV3 cUSD/USDC Celo 0x34757893070B0FC5de37AaF2844255fF90F7F1E0",
    UniswapV3_cEUR_USDT_Celo = "UniswapV3 cEUR/USDT Celo 0x628Cb3a5a206956423D158009612813B64B19dab",
    UniswapV3_cEUR_cUSD_Celo = "UniswapV3 cEUR/cUSD Celo 0x1c8DafD358d308b880F71eDB5170B010b106Ca60",
    UniswapV3_cKES_USDT_Celo = "UniswapV3 cKES/USDT Celo 0x61Ef8708fc240DC7f9F2c0d81c3124Df2fd8829F",
    UniswapV3_USDGLO_cUSD_Celo = "UniswapV3 USDGLO/cUSD Celo 0x7B9A5BC920610F54881f2F6359007957DE504862",
    UniswapV3_cUSD_CELO_Celo = "UniswapV3 cUSD/CELO Celo 0x2d70cBAbf4d8e61d5317b62cBe912935FD94e0FE",
    UniswapV3_USDT_CELO_Celo = "UniswapV3 USDT/CELO Celo 0x6cde5f5a192fBf3fD84df983aa6DC30dbd9f8Fac",
    UniswapV3_USDC_CELO_Celo = "UniswapV3 USDC/CELO Celo 0xA1777e082fA1746eB78DD9C1fbB515419CF6e538",
    UniswapV3_PUSO_USDC_Celo = "UniswapV3 PUSO/USDC Celo 0xb466d5429D6AD9999Bf112C225d9D7b15e96c658",
    UniswapV3_PUSO_USDT_Celo = "UniswapV3 PUSO/USDT Celo 0x87deC9a2589d9e6511Df84C193561b3A16cF6238",
    UniswapV3_cEUR_CELO_Celo = "UniswapV3 cEUR/CELO Celo 0xf130F72F8190f662522774C3367E6e8814f5e219",
    UniswapV3_cCOP_USDT_Celo = "UniswapV3 cCOP/USDT Celo 0x2ac5baa668a8a58fd0e302b9896717484fd217b0",
    UniswapV3_cREAL_cUSD_Celo = "UniswapV3 cREAL/cUSD Celo 0x72Dd8fe09B5b493012e5816068Dfc6Fb26a2A9e6",
    UniswapV3_cEUR_cREAL_Celo = "UniswapV3 cEUR/cREAL Celo 0xb6c8f9490314394CFc6EDacb8717bFDC1EB8dab5",
    UniswapV3_BRLA_USDT_Celo = "UniswapV3 BRLA/USDT Celo 0x14E577e42d45Fd2200A9B0e31D87Fe826467111a",
    UniswapV3_COPM_USDT_Celo = "UniswapV3 COPM/USDT Celo 0x4495F525C4ECaCF9713a51eC3e8d1e81d7dFf870",
    UniswapV3_cREAL_USDT_Celo = "UniswapV3 cREAL/USDT Celo 0x1625fE58Cdb3726e5841Fb2bb367Dde9AAa009B3",
    UniswapV3_cKES_cREAL_Celo = "UniswapV3 cKES/cREAL Celo 0xb1Ed164c736909bA7ddBC1FeB7CEd4EAAD854a87",
    UniswapV3_eXOF_cEUR_Celo = "UniswapV3 eXOF/cEUR Celo 0x625cB959213D18a9853973C2220Df7287F1e5B7d",
    UniswapV3_cKES_cEUR_Celo = "UniswapV3 cKES/cEUR Celo 0xA143ccF73C25eeC6f38bD1b741043ebeA228b8e9",
    UniswapV3_eXOF_CELO_Celo = "UniswapV3 eXOF/CELO Celo 0xc767C0b2E2e56C455fd29f9eE9b6e6F035C71Ed4",
    UniswapV3_cREAL_CELO_Celo = "UniswapV3 cREAL/CELO Celo 0x2E067E0eAB7fd31c01473c0f56f3295Afb82e461",
    UniswapV3_cKES_CELO_Celo = "UniswapV3 cKES/CELO Celo 0xbC83c60E853398d263C1d88899cf5A8B408F9654",
    Aave_Supply_CELO_on_Aave_Celo = "Aave Supply CELO on Aave Celo 0xC3e77dC389537Db1EEc7C33B95Cf3beECA71A209",
    Aave_Supply_USDT_on_Aave_Celo = "Aave Supply USDT on Aave Celo 0xDeE98402A302e4D707fB9bf2bac66fAEEc31e8Df",
    Aave_Supply_USDC_on_Aave_Celo = "Aave Supply USDC on Aave Celo 0xFF8309b9e99bfd2D4021bc71a362aBD93dBd4785",
    UniswapV3_USDGLO_cCOP_Celo = "UniswapV3 USDGLO/cCOP Celo 0xbbe2c8e6149c8b92ffd4c79876694c04fa0fdf39",
    UniswapV3_USDT_cZAR_Celo = "UniswapV3 USDT/cZAR Celo 0xb793ff8031FCe64b3f553DBf40a70370FDEAC1C7",
    UniswapV3_USDT_cAUD_Celo = "UniswapV3 USDT/cAUD Celo 0x59aBE068150BE95582479a405f2734cB533f9354",
    UniswapV3_USDT_cCAD_Celo = "UniswapV3 USDT/cCAD Celo 0x0D95d04c72fe3B0F17963779138C504Fdd365C03",
    UniswapV3_USDT_cGBP_Celo = "UniswapV3 USDT/cGBP Celo 0xb1ea2E17C8aBCFA5Ba111c92A9a1ad8C5728153f",
    UniswapV3_USDT_UNI_Celo = "UniswapV3 USDT/UNI Celo 0xC5a5caebf3bF6220A3Efa222710Ab488943A73f8"
}
export declare enum beetsCampaigns {
    Staked_Sonic_Symphony_Beets = "Staked Sonic Symphony Beets 0x374641076B68371e69D03C417DAc3E5F236c32FA",
    Boosted_Stable_Rings_Beets = "Boosted Stable rings Beets 0x43026d483f42fb35efe03c20b251142d022783f2",
    Echoes_of_Ether = "Echoes of Ether Beets 0xe54dd58a6d4e04687f2034dd4ddab49da55f8aff",
    Put_A_Ring_On_It = "Put A Ring On It Beets 0x25ca5451cd5a50ab1d324b5e64f32c0799661891",
    Sonic_Fugue_Staked_and_Staked = "Sonic Fugue: Staked & Staked Beets 0xd2efc016650695c56b514d6a2133ad85afb86d8a",
    Sonic_Quartet_Audition_Act_II_Beets = "Sonic Quartet Audition - Act II Beets 0xbd4a2ecdcd7acb0d2b20744ac4cc1368dd8fdc41",
    Concentrated_Ringing_Notes_1400_3000_Beets = "Concentrated Ringing Notes 1400-3000 Beets 0xE7734B495a552aB6f4C78406E672cCa7175181e1"
}
export declare enum reserveCampaigns {
    Alpha_Base_Index_Reserve = "Alpha Base Index Reserve Base 0xeBcda5b80f62DD4DD2A96357b42BB6Facbf30267",
    Clanker_Index_Reserve = "Clanker Index Reserve Base 0x44551CA46Fa5592bb572E20043f7C3D54c85cAD7",
    AIndex_Reserve = "AIndex Reserve Base 0xfe45EDa533e97198d9f3dEEDA9aE6c147141f6F9",
    Virtual_Index_Reserve = "Virtual Index Reserve Base 0x47686106181b3CEfe4eAf94C4c10b48Ac750370b",
    MarketVector_Digital_Assets_25_Index_Reserve = "MarketVector Digital Assets 25 Index Reserve Base 0xD600e748C17Ca237Fcb5967Fa13d688AFf17Be78",
    Bloomberg_Galaxy_Crypto_Index_Reserve = "Bloomberg Galaxy Crypto Index Reserve Base 0x23418De10d422AD71C9D5713a2B8991a9c586443",
    MarketVector_Token_Terminal_Fundamental_Index_Reserve = "MarketVector Token Terminal Fundamental Index Reserve Base 0xe8b46b116D3BdFA787CE9CF3f5aCC78dc7cA380E",
    Base_MemeIndexer_DTF_Reserve = "Base MemeIndexer DTF Reserve Base 0xb8753941196692E322846cfEE9C14C97AC81928A",
    Large_Cap_DeFi_Index_Reserve = "Large Cap DeFi Index Reserve Mainnet 0x20d81101D254729a6E689418526bE31e2c544290",
    DeFi_Growth_Index_Reserve = "DeFi Growth Index Reserve Mainnet 0x9a1741E151233a82Cf69209A2F1bC7442B1fB29C",
    CoinDesk_DeFi_Select_Index_Reserve = "CoinDesk DeFi Select Index Reserve Mainnet 0x188D12Eb13a5Eadd0867074ce8354B1AD6f4790b",
    RWA_Index_Reserve = "RWA Index Reserve Mainnet 0xA5cdea03B11042fc10B52aF9eCa48bb17A2107d2",
    Imagine_the_SMEL_Reserve = "Imagine the SMEL Reserve Mainnet 0xF91384484F4717314798E8975BCd904A35fc2BF1",
    BTC_ETH_DCA_Index_Reserve = "BTC ETH DCA Index Reserve Mainnet 0x4E3B170DcBe704b248df5f56D488114acE01B1C5",
    trading_competition_ABX_base = "trading competition on 0xE207FAb5839CA5bCc0d930761755cC7d82C1f19c",
    trading_competition_CLX_base = "trading competition on 0xFdCCD04DDCa9eCf052E8e9eF6BD09a9b323fBF49",
    trading_competition_AI_base = "trading competition on 0xeD5210Bd97d855E8BEc2389439B8487eEcC3FC60",
    trading_competition_VTF_base = "trading competition on 0x130C5bc30567987861620971C6B60C08D3784eF8",
    trading_competition_MVDA25_base = "trading competition on 0xF37631E6481e61011FbDccbCE714ab06A031FBa8",
    trading_competition_BGCI_base = "trading competition on 0xD38d1AB8A150e6eE0AE70C86A8E9Fb0c83255b76",
    trading_competition_MVTT10F_base = "trading competition on 0xd19c0dbbC5Ba2eC4faa0e3FFf892F0E95F23D9e0",
    trading_competition_BDTF_base = "trading competition on 0x477172B5176CC93e8766860fd58b0C640898080d",
    trading_competition_mvDEFI_mainnet = "trading competition on 0x479e82b60f5885A3569d618d027Ef1Ac2020Ee82",
    trading_competition_DGI_mainnet = "trading competition on 0x4BaF786bd59022c942DceE4282b17D1bc681C99f",
    trading_competition_DFX_mainnet = "trading competition on 0x1914256C2F70aAc87e097Cd8B07958e9F17F2BCd",
    trading_competition_mvRWA_mainnet = "trading competition on 0xB986a32F468EdaD2F2F890094Ea39aE484FBCaF4",
    trading_competition_SMEL_mainnet = "trading competition on 0xB76726B4befE761a1859C1c02E7d157142E077c0",
    trading_competition_BED_mainnet = "trading competition on 0xAED9261caa6A795178a4ab4D3Be62f2D01b2c214"
}
export declare enum sonicmarketCampaigns {
    USDCe_S_Vault_Sonic_Market = "USDC.e/S Vault Sonic Market 0x46107Ec44112675689053b96aea2127fD952bd47",
    wS_USDCe_V2_Pool_Sonic_Market = "wS/USDC.e V2 Pool Sonic Market 0x0D0Abc4e8AFDfb5257fA455dFAf18f79df11065c",
    ONIC_wS_V2_Pool_Sonic_Market = "ONIC/xS V2 Pool Sonic Market 0xF64a4542AeC6Bba0c52b7F0D7823A81FE3c33850",
    stS_wS_V2_Pool_Sonic_Market = "stS/wS V2 Pool Sonic Market 0xb44119E9F6369438A51eAdd0Fe15b94Fa296dEE9"
}
export declare enum vicunaCampaigns {
    wS_USDC_Equalizer_Vault_Vicuna = "wS/USDC Equalizer Vault 0xc83CE82CEb536a6bCf6678EC4B308A6739057050",
    wS_EQUAL_Equalizer_Vault_Vicuna = "wS/EQUAL Equalizer Vault 0x3D66328c513ed56D5dB02eE7dFBF5D0E1d90836D",
    wS_stS_Equalizer_Vault_Vicuna = "wS/stS Equalizer Vault 0x9418FDfcDdC546ADb990a575e2a31E4D30c2e36C",
    wS_BRUSH_Equalizer_Vault_Vicuna = "wS/BRUSH Equalizer Vault 0x585A8941a9faeD644829Ce5CF7919776DBd53990",
    wS_GOGLZ_Equalizer_Vault_Vicuna = "wS/GOGLZ Equalizer Vault 0xf82d99F2a745e479f27b191fdF74b338887e73e2",
    wS_ECO_Equalizer_Vault_Vicuna = "wS/ECO Equalizer Vault 0x845Df2f5f394879caB662247cFF77fE18787e7Ad",
    wS_ANON_Equalizer_Vault_Vicuna = "wS/ANON Equalizer Vault 0x15be5c53Aa95e6c418BCB365081ab3e786904b04",
    wS_THC_Equalizer_Vault_Vicuna = "wS/THC Equalizer Vault 0x89fcD4093719e1d539F4A7953c53020C7b6d2e2E",
    wS_stS_Balancer_Vault_Vicuna = "wS/stS Balancer Vault 0x02D742f182D2a588c54E7DC998aD19f9D795bC51",
    scUSD_stS_Balancer_Vault_Vicuna = "scUSDC/stS Balancer Vault 0xca830eaE0b3F65c6FB4fD824F1b442956fE5D424",
    wS_SWPX_Swapx_Vault_Vicuna = "wS/SWPX Swapx Vault 0x183d7f69F581A97A5343dF8828b1303bf9eC27b0",
    wS_USDC_Swapx_Vault_Vicuna = "wS/USDC Swapx Vault 0xb57A91b7DD83E2E3B7cDf17D0912B03Bc0bf7327",
    wS_scETH_Swapx_Vault_Vicuna = "wS/scETH Swapx Vault 0xD6141D887E6A16f7AAbdFAf77ACfFC1b3Ee27be5",
    wS_stS_Swapx_Vault_Vicuna = "wS/stS Swapx Vault 0xd50190C922f252dA3A8106f527F41dFFe1B16067",
    wS_wETH_Swapx_Vault_Vicuna = "wS/wETH Swapx Vault 0xB59f7edC55760DB39b4a69dc44eb0B34d66589d6",
    wS_oS_Swapx_Vault_Vicuna = "wS/oS Swapx Vault 0xF58653cCE3E68F769A75924dd83dD3bd24C04104",
    USDC_SWPX_Swapx_Vault_Vicuna = "USDC/SWPX Swapx Vault 0xc90781e2fbBb748Dae79EE179173eF0C783476e8",
    USDC_wETH_Swapx_Vault_Vicuna = "USDC/wETH Swapx Vault 0x1d9cf65B2468075A38fFE5d32D83E31AC1539Ccc",
    USDC_scUSD_Swapx_Vault_Vicuna = "USDC/scUSD Swapx Vault 0xC36F478888dDDfa1a50f27442c610ac5dbA8C22A",
    USDC_stS_Swapx_Vault_Vicuna = "USDC/stS Swapx Vault 0x51D5871a9c865FEA9fAF86e48Cc5e999106baEe4",
    wETH_USDC_Swapx_Vault_Vicuna = "wETH/USDC Swapx Vault 0x953fB377Ef19D29117C4F7020F4492a1692A493a",
    oS_wS_Swapx_Vault_Vicuna = "oS/wS Swapx Vault 0xfe4812f9e6c7a098CBA5c43B8F2c4D9F87a4D6a7",
    scUSD_USDC_Swapx_Vault_Vicuna = "scUSD/USDC Swapx Vault 0x6De36C1Af417A438a69d4AAa3655022E52bbC606",
    stS_wS_Swapx_Vault_Vicuna = "stS/wS Swapx Vault 0xf462864B174d7A084881A6F1E61553318E3D6471",
    SACRA_wS_Swapx_Vault_Vicuna = "SACRA/wS Swapx Vault Vicuna 0xE253373E5e424BE330DC41837054462f6e6d66aE",
    wS_ECO_Swapx_Vault_Vicuna = "wS/ECO Swapx Vault 0x975ba9fcaeb197c3e615f9dffcafe8c7fcd4d8ea",
    wS_GOGLZ_Swapx_Vault_Vicuna = "wS/GOGLZ Swapx Vault 0xe3243b741a54a1a5d29bcd7856c7b70cfdd76f1b",
    wS_HEDGY_Swapx_Vault_Vicuna = "wS/HEDGY Swapx Vault 0x517cf3dd00b7bae948b42adb5532d32c5e665580",
    wS_TYSG_Swapx_Vault_Vicuna = "wS/TYSG Swapx Vault 0x90decf248b0e386d7538437cb548dad9d61bce24",
    wS_sDOG_Swapx_Vault_Vicuna = "wS/sDOG Swapx Vault 0xbae81e65ff1a9e3170afadb23d7a2b6cec6079b8",
    wS_SHIBA_Swapx_Vault_Vicuna = "wS/SHIBA Swapx Vault 0xdf78107cf7d4568e1e5a750a3cc9558034b07502",
    wS_Vicuna_Sonic = "wS Vicuna Sonic 0x9E581fC9181f99c3c4DAB344B91C55DaEb9413fe",
    USDCe_Vicuna_Sonic = "USDC.e Vicuna Sonic 0xF224CB039F2B5909197c019b1972E62d7fdCdA0f",
    scUSD_Vicuna_Sonic = "scUSD Vicuna Sonic 0xF9f65F8c6566d71C5966a0a1852cEd1Eb978bafb",
    wETH_Vicuna_Sonic = "wETH Vicuna Sonic 0xA1241Ce1fBB74Ff37D5c73dcB84326766C3852C0",
    USDTe_Vicuna_Sonic = "USDT.e Vicuna Sonic 0xb401dc6D04fd6D3993345dE2858065ddC9a36b79",
    wOS_Vicuna_Sonic = "wOS Vicuna Sonic 0x9BF96Dee5b4161c5cA3DDDf2D19cc677B6832644",
    stS_Vicuna_Sonic = "stS Vicuna Sonic 0x4C8D17317884B53bEfE5abeF884818b2fbe0A2dD",
    wS_Variable_Debt_Vicuna_Sonic = "wS Variable Debt Vicuna Sonic 0x1b0ce878895518Fb2067cFB56B50b376b2d62c72",
    USDCe_Variable_Debt_Vicuna_Sonic = "USDC.e Variable Debt Vicuna Sonic 0x083b54e455430c2fca30C7dF6538423155f04e8c",
    scUSD_Variable_Debt_Vicuna_Sonic = "scUSD Variable Debt Vicuna Sonic 0xDA02eA41574b31ab95E50ec1E6F1315543F30Ca8",
    wETH_Variable_Debt_Vicuna_Sonic = "wETH Variable Debt Vicuna Sonic 0x50b547B44182973066607fA030cE9B8C7CE05A80",
    USDTe_Variable_Debt_Vicuna_Sonic = "USDT.e Variable Debt Vicuna Sonic 0x7e5EC2B98691d20FfDf4d1F37c7B1733a03C3a84",
    wOS_Variable_Debt_Vicuna_Sonic = "wOS Variable Debt Vicuna Sonic 0xcbf8f9bA27a1377CDEa79457EE7Df8fe66f21F55",
    stS_Variable_Debt_Vicuna_Sonic = "stS Variable Debt Vicuna Sonic 0x7E82597B158663ECA96f9C65DeFCB02d55c3BC1f",
    Vicuna_Sonic_WS_Sonic_Market_Vicuna = "Vicuna Sonic WS (Sonic Market) Vicuna 0x9e07EF144325DAe02ff92910aDd1FE91581D4798",
    Vicuna_Sonic_stS_Sonic_Market_Vicuna = "Vicuna Sonic stS (Sonic Market) Vicuna 0xFB56Cd34244985222068ae1C384ecE4215528D04",
    Vicuna_Sonic_USDCe_Stable_Market_Vicuna = "Vicuna Sonic USDC.E (Stable Market) Vicuna 0x0127C186D905Ddaf323e76c4f6AB41cDD66619e5",
    Vicuna_Sonic_SCUSD_Stable_Market_Vicuna = "Vicuna Sonic SCUSD (Stable Market) Vicuna 0xfb2e5Fd5de4E0757062363dfA44dF2e3654A35A5",
    Vicuna_Sonic_USDTe_Stable_Market_Vicuna = "Vicuna Sonic USDT.E (Stable Market) Vicuna 0x11054544BEbab950B3B2F88fBb73B10550d4FF5c",
    Swapx_SWAPX_wS_stS_Sonic_Market_Vicuna = "Swapx SWAPX wS-stS Sonic Market Vicuna 0x5cd355CC40A0657C8c6B38F30Bb0B66D3D638bcf",
    Swapx_SWAPX_stS_wS_Sonic_Market_Vicuna = "Swapx SWAPX stS-wS Sonic Market Vicuna 0xeb5A1E2209Bb52B2F6eB846Ff15e221dc356c74a",
    Swapx_SWAPX_scUSD_USDC_Stable_market_Vicuna = "Swapx SWAPX scUSD-USDC Stable market Vicuna 0xb31fb82458CaD3Bfa658659ef4a464176Ff2F155",
    Swapx_SWAPX_USDC_USDT_Stable_market_Vicuna = "Swapx SWAPX USDC-USDT Stable market Vicuna 0x6895439e47C362c1fBEFCcaCB8f4CC0d36AEf231",
    Swapx_SWAPX_USDC_scUSD_Stable_market_Vicuna = "Swapx SWAPX USDC-scUSD Stable market Vicuna 0xa52d70EFf22A8302e91A86f2ac9D95318063Da10",
    Swapx_SWAPX_USDT_USDC_Stable_market_Vicuna = "Swapx SWAPX USDT-USDC Stable market Vicuna 0xd320C24844EADb0710B31F92E4215Dd7fE480460",
    Vicuna_Sonic_wOS_Sonic_Market_Vicuna = "Vicuna Sonic wOS (Sonic Market) 0xdf19a33B4f542203d1E99329694bd57882d862A6",
    SWAPX_OS_wS_Sonic_Market_Vicuna = "SWAPX OS-wS (Sonic Market) 0x52E30abd7505227d6853E882fA4C71D2826f1AC4",
    SWAPX_wS_OS_Sonic_Market_Vicuna = "SWAPX wS-OS(Sonic Market) 0x9a349528E79b0e773C9dAcDAAd6f56B26Eb25a71"
}
export declare enum pufferCampaigns {
    Zircuit_Restaking_Pool = "0xF047ab4c75cebf0eB9ed34Ae2c186f3611aEAfa6",
    Pendle_26_JUN_2025 = "0x58612beB0e8a126735b19BB222cbC7fC2C162D2a",
    Pendle_26_JUN_2025_YT = "0x784A0bb8208C70290cac6bcBC3650cEb9227813E",
    Karak = "0x1f2aa9680910aC5a4527FA72001dC249943f60b4",
    Curve_pufEth = "0xEEda34A377dD0ca676b9511EE1324974fA8d980D",
    Curve_pufEth_wETH = "0x39F5b252dE249790fAEd0C2F05aBead56D2088e1",
    Morpho_pufETH_WETH = "0x0eed5a89c7d397d02fd0b9b8e42811ca67e50ed5aeaa4f22e506516c716cfbbf",
    Pencils_ppufEth = "0x0C530882C0900b13FC6E8312B52c26e7a5b8e505",
    Morpho_pufETH_USDC = "0x7e9c708876fa3816c46aeb08937b51aa0461c2af3865ecb306433db8a80b1d1b",
    balancer_wstETH_pufETH = "0x63E0d47A6964aD1565345Da9bfA66659F4983F02",
    curve_llamalend = "0xcd28cF8f7755f03967D27E128B38022B63919836",
    cyber_staking_pool = "0x18eeD20f71BEf84B605253C89A7576E3634134C0",
    aura_balancer_wstETH_pufETH = "0x6Ea41486A8f21EED7B20AfDB681b90a5B6C6D029",
    kinza_pufETH = "0x64274835D88F5c0215da8AADd9A5f2D2A2569381",
    zerolend_pufETH = "0xdD7Afc0f014A1E1716307Ff040704fA12E8D33A3",
    desyn_pufETH = "0x3a8099D8FE5C072bB035381003993393072D3ec7",
    gamma_swap_pufETH = "0x1a33B9be3Fe58C1Bde4325A68c09C1F7fA8aA1e5",
    Morpho_pufETH_USDA = "0xa42ba90e4d3013dee8eb0d7bb7ae0817297337eeecd525dbdd48c7b5c5e6988d",
    pufETH_hold = "0xD9A442856C234a39a81a089C06451EBAa4306a72",
    unifiETH_hold = "0x196ead472583Bc1e9aF7A05F860D9857e1Bd3dCc",
    vePuffer = "0x1b6ec227ceBeC25118270efbb4b67642fc29965E",
    mindNetwork_pufETH = "0xdf69c0F65e1A2F50f15E531ea23bDd9cC5CFeA8d",
    pancakeSwap_xpufEth = "0x2b8d093f22f7b6f53d02aca106de3eabc0937d45",
    aerodrome_cl50_xpufETH = "0xCDf927C0F7b81b146C0C9e9323eb5A28D1BFA183",
    uniswapv3_eth_pufETH = "0xBDB04e915B94FbFD6e8552ff7860E59Db7d4499a",
    uniswapv3_weth_PUFFER = "0xc5c9a9AB6403CDBa9722463000146C18b504F0bA",
    uniswapv3_vt_weth = "0xa56600e670724b42F38d3A6e4B25e8D786B4F5f9",
    venus_pufeth = "0xE0ee5dDeBFe0abe0a4Af50299D68b74Cec31668e",
    unifiBTC = "0x170D847A8320F3B6A77eE15B0CAE430e3eC933a0",
    unifiUSD = "0x82c40e07277eBb92935f79cE92268F80dDc7caB4",
    CARROT_USDC = "0xf00032d0F95e8f43E750C51d0188DCa33cC5a8eA",
    sonex_pufETH_USDCe_1 = "0x4A0e0E8d5DF4AEC0a08359e599720628b179F7eD",
    sonex_pufETH_USDCe_5 = "0x2646FAD13ef9BD063790d2719De1da290865D58f",
    kyo_pufETH_ETH = "0x8C4f743C763aBe5CBAe4E50358b05C7D45921638",
    apufETH = "0x0526CF96Ad808f8E11A5a9F1012edf67F4BAf519",
    carrot_Staking = "0x48e8dE138C246c14248C94d2D616a2F9eb4590D2",
    xpufETH_zircuit = "0x9346A5043C590133FE900aec643D9622EDddBA57",
    tac_puf_eth = "0x78f314241df1ac151bFD0413EEB51979515f6Abd",
    pufETH_TermMax = "0xE8a7A6dD9218202996D9cF825426Ab283b3396eD"
}
export declare enum zkSyncCampaigns {
    Izumi_Finance_Zk_Weth = "Izumi Finance ZK/WETH 0xd62bc9f19bd94fde9c41df4b6eb6419ea6b8e25c",
    Izumi_Finance_WBTC_BTC = "Izumi Finance WBTC/BTC 0x6e357cd3a4b38bbca4c34777379cf6989e3da501",
    Izumi_Finance_WETH_USDC = "Izumi Finance WETH/USDC 0x43ff8a10b6678462265b00286796e88f03c8839a",
    Venus_USDCe = "Venus USDCe 0x1af23bd57c62a99c59ad48236553d0dd11e49d2d",
    Venus_USDC = "Venus USDC 0x84064c058f2efea4ab648bb6bd7e40f83ffde39a",
    Venus_WBTC = "Venus WBTC 0xaf8fd83cfcbe963211faaf1847f0f217f80b4719",
    Venus_ZK = "Venus ZK 0x697a70779c1a03ba2bd28b7627a902bff831b616",
    Venus_WETH = "Venus WETH 0x1fa916c27c7c2c4602124a14c77dbb40a5ff1be8",
    Aave_USDC = "Aave USDC 0xe977f9b2a5ccf0457870a67231f23be4daecfbdb",
    Aave_WETH = "Aave WETH 0xb7b93bcf82519bb757fd18b23a389245dbd8ca64",
    Aave_ZK = "Aave ZK 0xd6cd2c0fc55936498726cacc497832052a9b2d1b",
    Aave_WstETH = "Aave WstETH 0xd4e607633f3d984633e946aea4eb71f92564c1c9",
    Zerolend_WETH = "Zerolend WETH 0x9002ecb8a06060e3b56669c6b8f18e1c3b119914",
    Zerolend_USDCe = "Zerolend USDCe 0x016341e6da8da66b33fd32189328c102f32da7cc",
    Zerolend_USDC = "Zerolend USDC 0x9e20e83d636870a887ce7c85cecfb8b3e95c9db2",
    Zerolend_M_BTC = "Zerolend M_BTC 0xafe91971600af83d23ab691b0a1a566d5f8e42c0",
    Zerolend_ZK = "Zerolend ZK 0x072416442a0e40135e75c0eefb4be708b74b6c8a",
    Zerolend_USN = "Zerolend USN 0xe2b026b30dea792e56201308bd566c1e1f43fb2c",
    ReactorFusion_USDCe = "ReactorFusion USDCe 0x04e9db37d8ea0760072e1ace3f2a219988fdac29",
    ReactorFusion_WETH = "ReactorFusion WETH 0xc5db68f30d21cbe0c9eac7be5ea83468d69297e6",
    ReactorFusion_ZK = "ReactorFusion ZK 0x0e392b6b05c112677096920ad938a0752d1451f3",
    ReactorFusion_USDC = "ReactorFusion USDC 0x930da5e58f7f0d6dc417ab07e07558c78cff1445",
    HoldSation_USDC = "HoldSation USDC 0xaf08a9d918f16332f22cf8dc9abe9d9e14ddcbc2",
    RFX_ZK_USD = "RFX ZK USD 0x9d4d54c8661a17604a46b849ded78cf20127fb92",
    RFX_ETH_USD = "RFX ETH USD 0x8efa54951bf70d9775dfe8f9364df83ad1e1a8cf",
    RFX_BTC_USD = "RFX BTC USD 0x62170af269e9acd09a89279c0485e89aa42857a3",
    RFX_Vault_USN_USDCe = "RFX USN USDC.e 0x8D6E3e44FbE9A53564ED42b83961bb6f790C3063",
    Vest_USDC = "Vext USDC 0x7ccf5bbec69c790d27da3b5398b9e0d6d6eec9f3",
    Koi_Finance_ZK_WETH = "Koi Finance ZK/wETH Normal 1pct 0x58fb07e1fd51edd7bba91f870ff751e67e33cec5",
    Koi_Finance_USDCe_USDT = "Koi Finance USDC.e/USDT CL 0.01pct 0x57cc53def9f5ca7ef4da51082dd874867e56ba14",
    Koi_Finance_wETH_wstETH = "Koi Finance wETH/wstETH CL 0.01pct 0x66e050b921ba87259bb6627acedd2d1faef85cf5",
    Koi_Finance_wETH_wrsETH = "Koi Finance wETH/wrsETH CL 0.01pct 0xc0f4a1e34ec35b225939bc75336fdb787e432e3b",
    Koi_Finance_USDC_USDM_01 = "Koi Finance USDC/USDM CL 0.01pct 0x9be3c0ca9e36117c717e12fee7ea6673985b929b",
    Koi_Finance_USDC_USDT_01 = "Koi Finance USDC/USDM CL 0.01pct 0x64972fddf1ddda49c6d5979dcd43cec19f47ddf6",
    Koi_Finance_USDCe_WETH_50 = "Koi Finance USDCe/WETH CL 0.5pct 0x9c40de601340650bac1813f925f7cff9178c4c2c",
    Koi_Finance_ZK_WETH_50 = "Koi Finance ZK/WETH CL 0.5pct 0x95138f634fa2309ede488fe382ad3a9e5d8aa131",
    Koi_Finance_USDCe_wETH = "Koi Finance USDC.e/wETH Normal 0.5pct 0xdfaab828f5f515e104baaba4d8d554da9096f0e4",
    PancakeSwap_USDC_USDT = "PancakeSwap USDC/USDT v3 0.01pct 0xd05eef3792276e92bb051029dadfc2bf81121692",
    PancakeSwap_USDCe_wETH = "PancakeSwap USDC.e/wETH v3 0.05pct 0x291d9f9764c72c9ba6ff47b451a9f7885ebf9977",
    PancakeSwap_USDCe_ZK = "PancakeSwap USDC.e/ZK v3 1pct 0x3bf35ac7bf2e4aaf98e007c9c3e0d214562a3dbb",
    PancakeSwap_USDC_USDCe = "PancakeSwap USDC/USDC.e v3 0.01pct 0x3aef05a8e7d7a83f5527eded214e0b24a87d0991",
    PancakeSwap_wETH_wstETH = "PancakeSwap wETH/wstETH v3 0.05pct 0x5631fe6d29e3cb717517da05a9970e499def5e31",
    PancakeSwap_ZK_wETH = "PancakeSwap ZK/wETH v3 0.25pct 0xc081eacc77c75ce1f39a43c04b53d90adad35ffd",
    Uniswap_USDC_USDCe = "Uniswap USDC/USDC.e v3 0.01pct 0x23c77a553aac0ad009441c856c05d117c1131e3d",
    Uniswap_USDC_ETH = "Uniswap USDC/ETH v3 0.3pct 0xeecb86c38c4667b46487255f41c6904df3d76f8f",
    Uniswap_USDCe_ZK = "Uniswap USDC.e/ZK v3 0.3pct 0xa0769a3c6af68812bb3a5cbd511f7879033440eb",
    Uniswap_ZK_ETH = "Uniswap ZK/ETH v3 0.3pct 0x3d7264539e6e3f596bb485e3091f3ae02ad01ef8",
    Maverick_USDC_USDCe_Boosted = "Maverick USDC/USDC.e Boosted Position 0.001pct Fee 0.01pct Width Both 0x7b069aa2b92d356db4e6b9552d541f5aab4415fc",
    Maverick_USDC_USDCe_Boosted_V2 = "Maverick USDC/USDC.e Boosted Position 0.001pct Fee 0.01pct Width Both v2 0xe1c44ac789f24de3fe45695f988606fe2a5e80f0",
    Maverick_ETH_wstETH_Boosted = "Maverick ETH/wstETH Boosted Position 0.002pct Fee 0.10pct Width Both 0x5f2f2d05618b5a2e3d0e32604ac02efc3fca888c",
    Maverick_ZK_ETH_Boosted = "Maverick ZK-ETH Boosted Position 0.02% Fee 25.00% Width Mode Static Width Both 0x940350023026b52ae8b1997f15166b2060e04940",
    Maverick_ETH_zkETH_Boosted = "Maverick ETH-zkETH ETH-zkETH Boosted Position 0.03% Fee 0.10% Width Mode Static 0xf7cCdB990b31D2902D99F508bbBdd3ACb7937bcf",
    Maverick_WETH_wstETH_Boosted_V2 = "Maverick WETH-wstETH Boosted Position 0x1595bCdbfB7B6df20d56666f78a94ee5b23F3b93",
    SyncSwap_wBTC_MBTC = "SyncSwap WBTC/M-BTC Stable Pool v2.1 0x57b11c2c0cdc81517662698a48473938e81d5834",
    SyncSwap_USDC_USDT = "SyncSwap USDC/USDT Stable Pool 0x0259d9dfb638775858b1d072222237e2ce7111c0",
    SyncSwap_USDC_USDCe = "SyncSwap USDC/USDC.e Stable Pool 0xa93472c1b88243793e145b237b7172f1ee547836",
    SyncSwap_wETH_wstETH = "SyncSwap WETH/wstETH Aqua Pool 0x12e7a9423d9128287e63017ee6d1f20e1c237f15",
    SyncSwap_ETH_wrsETH = "SyncSwap ETH/wrsETH Aqua Pool 0x58ba6ddb7af82a106219dc412395ad56284bc5b3",
    SyncSwap_ZK_ETH = "SyncSwap ZK-ETH 0x45856bd6bb9f076f4c558a4d5932c6c8d832b0d0",
    SyncSwap_USDCe_ETH = "SyncSwap USDCe-ETH 0x80115c708e12edd42e504c1cd52aea96c547c05c",
    SyncSwap_USDC_USDM_Range = "SyncSwap USDC/USDM Range Pool 0xc9d2f9f56904dd71de34f2d696f5afc508f93ac3",
    SyncSwap_ETH_wrsETH_Range = "SyncSwap USDC/USDM Range Pool 0xfe1fc5128b5f5e7c0742bf4bfcbb5466fdf96e12",
    SyncSwap_ZK_ETH_Range = "SyncSwap ZK/ETH Range Pool 0x01e00f0064fa11bb35d1251df35376d60af7d435",
    SyncSwap_USDCe_ETH_Range = "SyncSwap USDCe/ETH Range Pool 0xbeac8553817d719c83f876681917ab2d7e5c4500",
    SyncSwap_ETH_wstETH_Range = "SyncSwap ETH/wstETH Range Pool 0xb249b76c7bda837b8a507a0e12caeda90d25d32f",
    SyncSwap_USDC_ETH_Range = "SyncSwap USDC/ETH Range Pool 0xe955c98e8411ee4c7332ebe48df7f0ca12711dc2",
    Woofi_ETH = "Woofi ETH 0x1d686250bbffa9fe120b591f5992dd7fc0fd99a4",
    Woofi_USDC = "Woofi USDC 0xdca324bdd4ebb6b8a1802959324ce125b5d57921",
    Woofi_ZK = "Woofi ZK 0x85167f7f3f367e0be7b4d3a8c2b1648f56dfdb45",
    ZKSwap_wrsETH_ETH = "ZKSwap Finance wrsETH/ETH v2 0.1pct 0xeb9fd198b20dc73e63668b89a735b7dc84e13ea0",
    ZKSwap_ETH_USDCe = "ZKSwap Finance ETH/USDC.e v2 0.1pct 0x7642e38867860d4512fcce1116e2fb539c5cdd21",
    ZKSwap_USDC_USDCe_USDT = "ZKSwap Finance USDC/USDC.e/USDT Stable 0.01pct 0x15309aaf4fedf346e5204331027b4ef7b75b1dd7",
    ZKSwap_wstETH_ETH = "ZKSwap Finance wstETH/ETH v2 0.1pct 0x4848204d1ee4422d91d91b1c89f6d2f9ace09e2c",
    ZKSwap_ZK_ETH = "ZKSwap Finance ZK/ETH v2 0.1pct 0x9ee3178701d91cc7b01d5b2d2cae65ccb29b3de4",
    ZKSwap_ZK_ETH_20 = "ZKSwap Finance ZK/ETH v3 0.2pct 0x1556d5a73963d53c11c779893df6fd8c865ac459",
    ZKSwap_ETH_USDCe_20 = "ZKSwap Finance ETH/USDC v3 0.2pct 0x6480665e22d82b3b9079b44e421a62c185b9bd77",
    ZKSwap_wstETH_ETH_20 = "ZKSwap Finance wstETH/ETH v3 0.01pct 0xd587b615ac1acb6c1f95242a1bcac512d2cd8122",
    ZKSwap_wrsETH_ETH_20 = "ZKSwap Finance wrsETH/ETH v3 0.01pct 0xcd6d8b89f24b017dbbdc0c13a99d29edc13e2189",
    ZKSwap_ZF_ETH = "ZKSwap Finance ZF/ETH v2 0.1pct ZKSwap Finance ZF/ETH v2 0xd33a17c883d5aa79470cd2522abb213dc4017e01",
    raffle_jumper = "raffle jumper 31/01/25",
    airdrop_jumper = "airdrop jumper 31/01/25",
    Syncswap_USN_USDCe_Range = "SyncSwap USN/USDC.e Range Pool 0xe6ed575d9627942893f12bf9c2cc3c47cd11d002",
    Syncswap_USN_sUSN_Range = "SyncSwap USN/sUSN Range Pool 0x12bf23c2fe929c23ab375199efad425e70c0ece1",
    Izumi_Finance_WETH_WBTC = "Izumi Finance WETH/WBTC 0xee0f2c77b0fd3daaa7fb332c8f6589f73b29ecfc",
    Maverick_WETH_zkETH_Boosted_V2 = "Maverick WETH-zkETH Boosted Position 0.03% Fee 0.10% Width Mode Static 0xfb3874c26729a9ef9c3ea9a05b99a45d75cc1243",
    ZKSwap_WETH_WBTC = "ZKSwap Finance WETH/WBTC v3 0.01pct 0xb6a5cc74a348be4e999a7ba1032de390dd3e993a",
    ReactorFusion_WBTC = "ReactorFusion WBTC 0x0a976e1e7d3052beb46085acbe1e0daccf4a19cf",
    Venus_wUSDM = "Venus wUSDM 0x183de3c349fcf546aae925e1c7f364ea6fb4033c",
    Zerolend_WBTC = "Zerolend WBTC 0x7c65e6ec6feceb333092e6fe69672a3475c591fb",
    raffle_jumper_2 = "raffle jumper 14/02/25",
    airdrop_jumper_2 = "airdrop jumper 14/02/25"
}
export declare enum modeCampaigns {
    Steer_EES_V2_Weth_USDC_Kim_Mode = "SteerEESV2 Kim WETH/USDC 0x468cc91df6f669cae6cdce766995bd7874052fbc",
    Steer_CRS_V2_Weth_Mode_Kim_Mode = "SteerCRSV2 Kim WETH/MODE 0x8cfe2a02dfbabc56ae7e573170e35f88a38bea55",
    Steer_CRS_V2_Weth_Wrseth_Kim_Mode = "SteerCRSV2 Kim WETH/wrsETH 0x27f0976b26194c448d987c275bb409eab6083964",
    Steer_SSS_V2_Weth_Wrseth_Kim_Mode = "SteerSSSV2 Kim weETH.mode/WETH 0xe24c8feb38ca2b18b542994bfba7e70880171035",
    Steer_CRS_V2_Weth_Wbtc_Kim_Mode = "SteerCRSV2 Kim WBTC/WETH 0x15173cca4c4c4e5a3f4b5c0e81a1aef7c0bd6ede",
    Ichi_SSD_USDC_Alex_Kim_Mode = "IchiSSSD Kim USDC/ALEX 0x34D6146f8FdD9599f574fC6a686d6f6498217b7E",
    Gamma_WETH_USDC_Kim_Mode = "Gamma Kim WETH/USDC 0x468cc91df6f669cae6cdce766995bd7874052fbc",
    Izumi_WETH_Mode_Mode = "Izumi WETH/MODE 0x250F5d65A75459F04F1b8654855aE85364F1ff9B",
    Izumi_WETH_m_BTC_Mode = "Izumi WETH/m-BTC 0xD40B3D30aEe24e7B8d3aE6501024203e6c4e9EB6",
    Swapmode_WETH_SMD_Mode = "Swapmode WETH/SMD 0xd7a1fa0b633f44248aF92614604820a29a995513",
    Swapmode_Mode_SMD_Mode = "Swapmode MODE/SMD 0x9B6da2948dA8D601951b756CAb22b1e33efb7f82",
    Swapmode_WETH_MODE_Mode = "Swapmode WETH/MODE 0x1a35841de219c2bba920759dc1e6a51391ab886c",
    Swapmode_WETH_USDC_Mode = "Swapmode WETH/USDC 0x25ba258e510faca5ab7ff941a1584bdd2174c94d",
    Swapmode_USDC_USDT = "Swapmode USDC/USDT 0xA1C6800788482BA0eeb85f47322bb789986EE2F3",
    Supswap_WETH_USDC_Mode = "Supswap WETH/USDC 0xf2e9C024F1C0B7a2a4ea11243C2D86A7b38DD72f",
    Sturdy_supply_WETH_Renzo_Aggregator = "Sturdy supply WETH Renzo Aggregator 0xd60DD6981Ec336fDa40820f8cA5E99CD17dD25A0",
    Sturdy_supply_WETH_Stone_Aggregator = "Sturdy supply WETH Stone Aggregator 0x2dE57F6432Ac67A99aF5aB17017005048AE7A24C",
    Kelp_Kim_WETH_wrsETH_Mode = "Kelp Kim WETH/wrsETH 0x27f0976b26194c448d987c275bb409eab6083964",
    Balancer_mBTC_uniBTC_Mode = "Balancer mBTC/uniBTC 0x1224d4e918E69189760888fd40EC1491c93CD59B",
    Balancer_uBTC_oBTC_Mode = "Balancer uBTC/oBTC 0x68b1b4CDAB705047C1703365D62D90aD1A2c98E4",
    Balancer_ezETH_MODE_Mode = "Balancer ezETH/Mode 0xcF376Bc82686BE7f88fa8936C18C62a2F11c4003",
    Desyn_oBTC_liquid_strategy_pool_5_Mode = "Desyn Hold OBTC Liquid Strategy Pool 5 (dOBTC5) 0xFDff68F2B20637E4e72aB057922ca3c0A1b74d13",
    Desyn_mBTC_liquid_strategy_pool_2_Mode = "Desyn Hold MBTC Liquid Strategy Fund 2 (dmbtc2) 0x6761d0a177D34502F727DC19Ab3a9E00fDd258B2",
    Desyn_uniBTC_liquid_strategy_pool_2_Mode = "Desyn Hold uniBTC Liquid Strategy Fund 2 (dunibtc2) 0x415886B5903DEe899e3C50E4648f01A109DdfDc4",
    Desyn_oBTC_liquid_strategy_pool_6_Mode = "Desyn Hold OBTC Liquid Strategy Pool 6 (dOBTC6) 0xFA6F2d31dcC73cA76da36818aDC8cDB2ec33fc39",
    Ironclad_Supply_Weth_Mode = "Ironclad Supply WETH 0x9c29a8eC901DBec4fFf165cD57D4f9E03D4838f7",
    Ironclad_Borrow_Usdc_Mode = "Ironclad Borrow USDC 0xe5415Fa763489C813694D7A79d133F0A7363310C",
    Ironclad_Borrow_Usdt_Mode = "Ironclad Borrow USDT 0xBcE07537DF8AD5519C1d65e902e10aA48AF83d88",
    Ironclad_Borrow_Mode_Mode = "Ironclad Borrow MODE 0xe57Bf381Fc0a7C5e6c2A3A38Cc09de37b29CC4C3",
    Ironclad_Borrow_sUSDe_Mode = "Ironclad Borrow sUSDe 0xE6075A86F4517B1B8136498fe23640C73aa1b711",
    Ironclad_Borrow_Weth_Mode = "Ironclad Borrow WETH 0x06D38c309d1dC541a23b0025B35d163c25754288",
    Ironclad_Stake_ICL_Mode = "Ironclad Stake ICL 0x95177295A394f2b9B04545FFf58f4aF0673E839d",
    Ironclad_iUSD_USDC_Mode = "Ironclad Kim iUSD/USDC 0xA7F102e1CeC3883C2e7Ae3cD24126f836675EfEB",
    Xlink_Kim_USDC_ALEX_Mode = "Xlink Kim USDC/ALEX 0x34D6146f8FdD9599f574fC6a686d6f6498217b7E",
    Bedrock_Velodrome_Basic_Stable_mBTC_uniBTC_Mode = "Bedrock Velodrome Basic Stable m-BTC/uniBTC 0xeC466fCcE54BC5d6fB8BA2F5e9e962506cA423e8",
    Bedrock_Balancer_mBTC_uniBTC_Mode = "Bedrock Balancer m-BTC/uniBTC 0x1224d4e918E69189760888fd40EC1491c93CD59B",
    Bedrock_Desyn_uniBTC_liquid_strategy_pool_2_Mode = "Bedrock Desyn Hold uniBTC Liquid Strategy Fund 2 (dunibtc2) 0x415886B5903DEe899e3C50E4648f01A109DdfDc4",
    Lisa_Labs_Hold_vLiSTX_Mode = "Lisa Labs Hold vLiSTX (vLiSTX) 0x70727228DB8C7491bF0aD42C180dbf8D95B257e2",
    Beefy_Kim_WETH_MODE_Mode = "Beefy Kim WETH/MODE 0x8cfE2A02dfBAbC56aE7e573170E35f88A38BeA55",
    Mitosis_Hold_Mitosis_weETH_Mode = "Mitosis Hold Mitosis weETH 0xa30c1544d12309a519A205A486f6AF0515dFA442",
    Mitosis_Hold_Mitosis_ezETH_Mode = "Mitosis Hold Mitosis ezETH 0xbEd575b0FeDa4F84b71144634693DaCc07749471",
    B2_Network_Balancer_uBTC_oBTC_Mode = "B2 Network Balancer uBTC/oBTC 0x68b1b4cdab705047c1703365d62d90ad1a2c98e4",
    Obelisk_Balancer_uBTC_oBTC_Mode = "Obelisk Balancer uBTC/oBTC 0x68b1b4cdab705047c1703365d62d90ad1a2c98e4",
    Ionic_Supply_ionM_BTC_Mode = "Ionic supply m-BTC 0x19f245782b1258cf3e11eda25784a378cc18c108",
    Ionic_Borrow_ionUSDC_Mode = "Ionic borrow ionUSDC 0x2be717340023c9e14c1bb12cb3ecbcfd3c3fb039",
    Ionic_Borrow_ionWETH_Mode = "Ionic borrow ionWETH 0x71ef7eda2be775e5a7aa8afd02c45f059833e9d3",
    Ionic_Borrow_ionMODE_modenative_Mode = "Ionic borrow ionMODE.modenative 0x4341620757bee7eb4553912fafc963e59c949148",
    Layerbank_Supply_iETH_Mode = "Layerbank Supply iETH 0xe855B8018C22A05F84724e93693caf166912aDD5",
    Layerbank_Supply_iUSDC_Mode = "Layerbank Supply iUSDC 0xBa6e89c9cDa3d72B7D8D5B05547a29f9BdBDBaec",
    Layerbank_Supply_iUSDT_Mode = "Layerbank Supply iUSDT 0xC5b9CB1A26Fb1f9b8e26D8D357Cb950f53Df4959",
    Meson_Izumi_WETH_mBTC_Mode = "Meson Izumi WETH/m-BTC 0xD40B3D30aEe24e7B8d3aE6501024203e6c4e9EB6",
    Ionic_Supply_ionoBTC_Mode = "Ionic supply oBTC 0x48c234ab217f077df3c7f541b67d90436cf59b27",
    Ionic_Supply_ionuniBTC_Mode = "Ionic supply uniBTC 0xa48750877a83f7dec11f722178c317b54a44d142",
    Lisa_Labs_Kim_vLISTX_USDC_Mode = "Lisa Labs Kim vLISTX/USDC 0xd54aba804a676c8f265e2e6742d7b86d383d093b",
    BMX_Hold_sbfBMX_Mode = "BMX Hold sbfBMX 0x548f93779fBC992010C07467cBaf329DD5F059B7",
    Etherfi_Add_liquidity_wMLT_vault_Mode = "Add Liquidity to wMLT vault 0x8b2EeA0999876AAB1E7955fe01A5D261b570452C",
    Etherfi_Kim_weETH_WETH_Mode = "Ether.fi Kim weETH/WETH 0xE24C8feB38ca2B18b542994BFBA7E70880171035",
    Etherfi_Velodrome_vAMM_BMX_wMLT = "Ether.fi Velodrome vAMM BMX/VLT 0x70f531F133C7De52F0b06F193D862f5a8f17A0cF",
    Kim_Steer_FLS_WETH_USDC_Mode = "Kim Steer FLS WETH/USDC 0x468cc91df6f669cae6cdce766995bd7874052fbc",
    Kim_Steer_EES_v2_WETH_USDC_Mode = "Kim Steer EES V2 WETH/USDC 0x468cc91df6f669cae6cdce766995bd7874052fbc",
    Kim_Steer_CRS_v2_WETH_USDC_Mode = "Kim Steer CRS V2 WETH/USDC 0x468cc91df6f669cae6cdce766995bd7874052fbc",
    Kim_Gamma_WETH_USDC_Mode = "Kim Gamma Long-Short WETH/USDC 0x468cc91df6f669cae6cdce766995bd7874052fbc",
    Kim_v4_WETH_USDC_Mode = "Kim v4 WETH/USDC 0x468cc91df6f669cae6cdce766995bd7874052fbc",
    Kim_Ichi_SSD_WETH_KIM_Mode = "Kim Ichi SSD WETH/KIM 0x3C3a173984e3152FEd868345904eC0C9325FA516",
    Kim_Steer_CRS_V2_WETH_KIM_Mode = "Kim Steer CRS V2 WETH/KIM 0x3C3a173984e3152FEd868345904eC0C9325FA516",
    Kim_Gamma_WETH_KIM_Mode = "Kim Gamma Long-Short WETH/KIM 0x3C3a173984e3152FEd868345904eC0C9325FA516",
    Kim_v4_WETH_KIM_Mode = "Kim v4 WETH/Kim 0x3C3a173984e3152FEd868345904eC0C9325FA516",
    Kim_Ichi_SSD_WETH_MODE_Mode = "Kim Ichi SSD WETH/Mode 0x8cfE2A02dfBAbC56aE7e573170E35f88A38BeA55",
    Kim_Steer_CRS_V2_WETH_MODE_Mode = "Kim Steer CRS V2 WETH/Mode 0x8cfE2A02dfBAbC56aE7e573170E35f88A38BeA55",
    Kim_Gamma_WETH_MODE_Mode = "Kim Gamma Narrow WETH/Mode 0x8cfE2A02dfBAbC56aE7e573170E35f88A38BeA55",
    Kim_V4_WETH_MODE_Mode = "Kim V4 WETH/Mode 0x8cfE2A02dfBAbC56aE7e573170E35f88A38BeA55",
    Kim_Steer_CRS_V2_KIM_MODE_Mode = "Kim Steer CRS V2 Kim/Mode 0x86D9d9dd7A2c3146c6FAd51646F210Cb2E5FC12F",
    Kim_Steer_CRS_V2_and_EES_V2_WETH_USDT = "Kim Steer CRS V2 & EES V2 WETH/USDT 0xD8Abc2be7AD5D17940112969973357a3a3562998",
    Kim_Ichi_SSD_Mode_Kim = "Kim Ichi SSD Mode/Kim 0x86d9d9dd7a2c3146c6fad51646f210cb2e5fc12f",
    Kim_Steer_SSS_V2_weETH_ETH = "Kim Steer SSS V2 weETH/ETH 0xe24c8feb38ca2b18b542994bfba7e70880171035",
    Kim_Ichi_SSD_wMLT_Mode = "Kim Ichi SSD wMLT/Mode 0xa186548320bdb79c714719e107ad5753ecb452d4",
    Kim_Steer_CRS_V2_ezETH_ETH = "Kim Steer CRS V2 ezETH/ETH 0xd9a06f63e523757973ffd1a4606a1260252636d2",
    Ironclad_Borrow_uniBTC_Mode = "Ironclad Borrow uniBTC 0x80215c38DCb6ae91520F8251A077c124e7259688",
    Bedrock_Ionic_Supply_ionuniBTC_Mode = "Bedrock Ionic Supply uniBTC 0xa48750877a83f7dec11f722178c317b54a44d142",
    Bedrock_Ironclad_Supply_uniBTC_Mode = "Bedrock Ironclad Supply uniBTC 0x0F041cf2ae959f39215EFfB50d681Df55D4d90B1"
}
declare const RoninInterfaceCampaigns: {
    "Katana WETH-RON Ronin 0x90f31f1907a4d1443a6aacdc91ac2312f91bafa7": {
        campaignType: any;
        computeChainId: any;
        hooks: never[];
        poolAddress: string;
        whitelist: never[];
        blacklist: never[];
        url: string;
        forwarders: never[];
        isOutOfRangeIncentivized: boolean;
        weightFees: number;
        weightToken0: number;
        weightToken1: number;
    };
    "Katana AXS-RON Ronin 0x3230b903e8a5d6e46b5a5028470dd33e7b673722": {
        campaignType: any;
        computeChainId: any;
        hooks: never[];
        poolAddress: string;
        whitelist: never[];
        blacklist: never[];
        url: string;
        forwarders: never[];
        isOutOfRangeIncentivized: boolean;
        weightFees: number;
        weightToken0: number;
        weightToken1: number;
    };
    "Katana USDC-RON Ronin 0x392d372f2a51610e9ac5b741379d5631ca9a1c7f": {
        campaignType: any;
        computeChainId: any;
        hooks: never[];
        poolAddress: string;
        whitelist: never[];
        blacklist: never[];
        url: string;
        forwarders: never[];
        isOutOfRangeIncentivized: boolean;
        weightFees: number;
        weightToken0: number;
        weightToken1: number;
    };
    "Katana LRON-RON Ronin 0x0fbe1a7f0f006a4a4d817b2aa922889612758ce8": {
        campaignType: any;
        computeChainId: any;
        hooks: never[];
        poolAddress: string;
        whitelist: never[];
        blacklist: never[];
        url: string;
        forwarders: never[];
        isOutOfRangeIncentivized: boolean;
        weightFees: number;
        weightToken0: number;
        weightToken1: number;
    };
    "Supply WETH Compound Ronin 0x4006ed4097ee51c09a04c3b0951d28ccf19e6dfe": {
        campaignType: any;
        computeChainId: any;
        hooks: never[];
        targetToken: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        subCampaignType: any;
    };
};
declare const CornInterfaceCampaigns: {
    "Uniswap USDT/WBTCN Corn 0x660C6C6C2ad9bE9fca2D40dA22E1e6142ce5e7ca": {
        campaignType: any;
        computeChainId: any;
        hooks: never[];
        poolAddress: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
        isOutOfRangeIncentivized: boolean;
        weightFees: number;
        weightToken0: number;
        weightToken1: number;
    };
    "Uniswap CORN/WBTCN Corn 0xE05EC6d50A4E03C2EeaDe6A1a91732f62E982e52": {
        campaignType: any;
        computeChainId: any;
        hooks: never[];
        poolAddress: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
        isOutOfRangeIncentivized: boolean;
        weightFees: number;
        weightToken0: number;
        weightToken1: number;
    };
    "Uniswap CORN/BABY Corn 0x255F0b304f701A0530F5dc1739A3d1469e21dd5f": {
        campaignType: any;
        computeChainId: any;
        hooks: never[];
        poolAddress: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
        isOutOfRangeIncentivized: boolean;
        weightFees: number;
        weightToken0: number;
        weightToken1: number;
    };
    "Uniswap BTCN/LBTC Corn 0xbd108c1dd7802dff6c24138a72949184ffbe006f": {
        campaignType: any;
        computeChainId: any;
        hooks: never[];
        poolAddress: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
        isOutOfRangeIncentivized: boolean;
        weightFees: number;
        weightToken0: number;
        weightToken1: number;
    };
    "Concrete CornUSDT Vault Corn 0x3Eb6464A77D7B619AaAfa7e9FFC0fBe3ed7084B3": {
        campaignType: any;
        computeChainId: any;
        hooks: never[];
        targetToken: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
    };
};
export declare enum tacCampaigns {
    TAC_Supply_TACETH = "TAC Supply tacETH 0x294eecec65A0142e84AEdfD8eB2FBEA8c9a9fbad",
    TAC_Supply_TACBTC = "TAC Supply tacBTC 0x6Bf340dB729d82af1F6443A0Ea0d79647b1c3DDf",
    TAC_Supply_TACUSD = "TAC Supply tacUSD 0x699e04F98dE2Fc395a7dcBf36B48EC837A976490",
    TAC_Supply_TACrsEth = "TAC Supply TACrsEth 0x419386E3Ef42368e602720CC458e00c0B28c47A7",
    TAC_Supply_TACmBTC = "TAC Supply TACmBTC 0x307267989A7bec3A57FD7fd96017C49803589Fd0",
    TAC_Supply_TACcbBTC = "TAC Supply TACcbBTC 0xeb402fc96C7ed2f889d837C9976D6d821c1B5f01",
    TAC_Supply_TACmMEV = "TAC Supply TACmMEV 0xC2C26520256D5920B8aa1DA91F211222B2083B46",
    TAC_Supply_TACmEDGE = "TAC Supply TACmEDGE 0xaa7BeE2d7dE06cB4E30564323Fb17C5029e7D567",
    TAC_Supply_tacLBTCv = "TAC Supply tacLBTCv 0xD86fC1CaA0a5B82cC16B16B70DFC59F6f034C348",
    TAC_Supply_tacUSR = "TAC Supply tacUSR 0x686c83Aa81ba206354fDcbc2cd282B4531365E29",
    TAC_Supply_ctTACezETH = "TAC Supply ctTACezETH 0x25763b6597c9e0f10cb8481ef924472851480376",
    TAC_Supply_ctTACSTONE = "TAC Supply ctTACSTONE 0x83a197fc495881d149e6843b20f0027a622dfb0a",
    TAC_Supply_ctTACpufETH = "TAC Supply ctTACpufETH 0x78f314241df1ac151bfd0413eeb51979515f6abd",
    TAC_Supply_ctTAClvlUSD = "TAC Supply ctTAClvlUSD 0x2119787c73c95d0c4d54ed8395c3f9593f70e136",
    TAC_Supply_ylxSolvBTCs = "TAC Supply ylxSolvBTCs 0x0982eB22086183bF10acd2991A2dBeD1e3B9Ac2A",
    TAC_Supply_ylpumpBTC = "TAC Supply ylpumpBTC 0xd72c3a44b51C8D6631C004ecf3A318b9D2c58F80",
    TAC_Supply_ylxSolvBTC = "TAC Supply ylxSolvBTC 0x76f31800eFdE39A5f98189447c7a514d974f4364",
    TAC_Supply_ctTACUSDB = "TAC Supply ctTACUSDB 0x729fcddf4cbbc9dce721a8378c25a726fe7e43d3",
    TAC_Supply_ylFBTC = "TAC Supply ylFBTC 0x6945f516413cB2d7311297e8A39E7D004dEB5566",
    TAC_Supply_ylMBTC = "TAC Supply ylMBTC 0x2B11527e1fab84a5382D20efD198BF3d332f7E73",
    TAC_Supply_tacUSN = "TAC Supply tacUSN 0x7895A046b26CC07272B022a0C9BAFC046E6F6396",
    TAC_Supply_TACyUSD = "TAC Supply TACyUSD 0x2799dE2E1e769fA58dd3787F70BcD839AF3a1F39",
    TAC_Supply_tacETH9s = "TAC Supply tacETH9s 0xDe7CFf032D453Ce6B0a796043E75d380Df258812",
    TAC_Supply_ylSolvBTCtac = "TAC Supply ylSolvBTC.tac 0x34d16e4fB8757A88D986f9EfE2484F0badBF22C1",
    TAC_Supply_xUpUSDC = "TAC Supply xUpUSDC 0x396A3f77EE1faf5A3C46e878bA7b7a2dcbe55517",
    TAC_Supply_ylbfBTCtac = "TAC Supply ylbfBTC.tac 0x0d1862e73a1430A5FD3245B47859c1BEcD6f3A1D",
    TAC_Supply_uTAC = "TAC Supply uTAC++ 0xAF87B90E8a3035905697E07Bb813d2d59D2b0951"
}
declare const AnglesInterfaceCampaigns: {
    "0x15E96CDecA34B9DE1B31586c1206206aDb92E69D": {
        campaignType: any;
        computeChainId: any;
        hooks: never[];
        targetToken: string;
        whitelist: never[];
        blacklist: never[];
        targetTokenPricing: boolean;
        rewardTokenPricing: boolean;
        apr: string;
        url: string;
        forwarders: never[];
    };
    "0x9700C4C218237550EAd3a78022d43215A717e5e7": {
        campaignType: any;
        computeChainId: any;
        hooks: never[];
        targetToken: string;
        whitelist: never[];
        blacklist: never[];
        apr: string;
        url: string;
        forwarders: never[];
    };
    "0x081424EC3F4BFe0ad829297D6Cb73997656F56ac": {
        campaignType: any;
        computeChainId: any;
        hooks: never[];
        targetToken: string;
        whitelist: never[];
        blacklist: never[];
        apr: string;
        url: string;
        forwarders: never[];
    };
    "0x0C4E186Eae8aCAA7F7de1315D5AD174BE39Ec987": {
        campaignType: any;
        computeChainId: any;
        hooks: never[];
        targetToken: string;
        whitelist: never[];
        blacklist: never[];
        targetTokenPricing: boolean;
        rewardTokenPricing: boolean;
        apr: string;
        url: string;
        forwarders: never[];
    };
    "0xfA85Fe5A8F5560e9039C04f2b0a90dE1415aBD70": {
        campaignType: any;
        computeChainId: any;
        hooks: never[];
        targetToken: string;
        whitelist: never[];
        blacklist: never[];
        targetTokenPricing: boolean;
        rewardTokenPricing: boolean;
        apr: string;
        url: string;
        forwarders: never[];
    };
};
declare const EtherlinkInterfaceCampaigns: {
    "Superlend Supply WBTC Etherlink 0xfCA0802cb10b3b134a91e07f03965f63eF4B23eA": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        targetToken: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
    };
    "Superlend Supply WETH Etherlink 0x301bea8B7c0eF6722c937C07Da4d53931F61969c": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        targetToken: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
    };
    "Superlend Supply USDC Etherlink 0xd03bfdF9B26DB1e6764724d914d7c3d18106a9Fb": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        targetToken: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
    };
    "Superlend Supply USDT Etherlink 0x998098A1B2E95e2b8f15360676428EdFd976861f": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        targetToken: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
    };
    "Superlend Supply WXTZ Etherlink 0x008ae222661B6A42e3A097bd7AAC15412829106b": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        targetToken: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
    };
    "Superlend Supply mBASIS Etherlink 0x660ADeF5993167ACdb490DF287f4Db6Cc226fFeB": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        targetToken: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
    };
    "Superlend Supply mTBILL Etherlink 0x187B7b83e8CaB442AD0BFEAe38067f3eb38a2d72": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        targetToken: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
    };
    "Uranium Hold xU308 Etherlink 0x79052Ab3C166D4899a1e0DD033aC3b379AF0B1fD": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        targetToken: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
    };
    "Hanji HJLP Etherlink 0x1cd88fBD530281Ad6c639E2B897c4E239003A930": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        targetToken: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
    };
    "Iguana WETH/WXTZ Etherlink 0x478F067b0Ed73d120BBcd8c6f4f33438FC483912": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        poolAddress: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
        isOutOfRangeIncentivized: boolean;
        weightFees: number;
        weightToken0: number;
        weightToken1: number;
    };
    "Iguana USDC/USDT Etherlink 0x86456e2E2A203Da82E61ed34eF4137Fbe545f0DC": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        poolAddress: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
        isOutOfRangeIncentivized: boolean;
        weightFees: number;
        weightToken0: number;
        weightToken1: number;
    };
    "Iguana XTZ/USDT Etherlink 0x508060A01f11d6a2Eb774B55aEba95931265E0cc": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        poolAddress: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
        isOutOfRangeIncentivized: boolean;
        weightFees: number;
        weightToken0: number;
        weightToken1: number;
    };
    "Iguana WBTC/XTZ Etherlink 0x8930e315fa6D704A94bE6E14DaD66f6d66FfF7DF": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        poolAddress: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
        isOutOfRangeIncentivized: boolean;
        weightFees: number;
        weightToken0: number;
        weightToken1: number;
    };
    "Iguana mBASIS/USDC Etherlink 0xc2AF49072611f63894F761c8a354419dD0486826": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        poolAddress: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
        isOutOfRangeIncentivized: boolean;
        weightFees: number;
        weightToken0: number;
        weightToken1: number;
    };
    "Iguana mTBILL/USDC Etherlink 0x643D7CF86262b287b8548e840b4081c1A1525355": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        poolAddress: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
        isOutOfRangeIncentivized: boolean;
        weightFees: number;
        weightToken0: number;
        weightToken1: number;
    };
    "referral test Etherlink 0x0": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        targetToken: string;
        whitelist: never[];
        blacklist: string[];
        url: string;
        forwarders: never[];
    };
    "Hanji XTZ/USDC Etherlink 0xd0bc067cf877f7b76ceb331891331d9e6acda1a7": {
        campaignType: any;
        contract: string;
        eventID: string;
        topicToData: {
            topicIndex: number;
            decodeKeyTopic: string;
            dataIndexes: number[];
            multipliers: string[];
            computeFormula: string;
        }[];
        computeScoreParameters: {
            computeMethod: any;
            computeSettings: {
                maxRewards: string;
            };
        };
        decodeDataValue: string[];
        expectedChecks: never[];
        whitelist: never[];
        blacklist: string[];
        forwarders: never[];
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        url: string;
    };
    "Hanji WETH/USDC Etherlink 0x65ea4dd7f789c71c0f57ed84b3bdc3062898d3cb": {
        campaignType: any;
        contract: string;
        eventID: string;
        topicToData: {
            topicIndex: number;
            decodeKeyTopic: string;
            dataIndexes: number[];
            multipliers: string[];
            computeFormula: string;
        }[];
        computeScoreParameters: {
            computeMethod: any;
            computeSettings: {
                maxRewards: string;
            };
        };
        decodeDataValue: string[];
        expectedChecks: never[];
        whitelist: never[];
        blacklist: string[];
        forwarders: never[];
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        url: string;
    };
    "Hanji WBTC/USDC Etherlink 0xbb6b01d94e3f6ebae8647cb56d544f57928ab758": {
        campaignType: any;
        contract: string;
        eventID: string;
        topicToData: {
            topicIndex: number;
            decodeKeyTopic: string;
            dataIndexes: number[];
            multipliers: string[];
            computeFormula: string;
        }[];
        computeScoreParameters: {
            computeMethod: any;
            computeSettings: {
                maxRewards: string;
            };
        };
        decodeDataValue: string[];
        expectedChecks: never[];
        whitelist: never[];
        blacklist: string[];
        forwarders: never[];
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        url: string;
    };
};
export declare enum HypurrFiCampaigns {
    test = "mock program with referral",
    hypurrfi = "hypurrfi",
    HypurrFi_Borrow_Pooled_USDXL = "HypurrFi Borrow Pooled USDXL 0xa0399Ff8F46Ce6C2Cfee05C5F67307C7F390a439"
}
declare const HypurrFiCampaignsInterface: {
    "mock program with referral": {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        targetToken: string;
        whitelist: never[];
        blacklist: never[];
        url: string;
        forwarders: never[];
    };
    hypurrfi: {
        campaignType: any;
        computeChainId: any;
        hooks: {
            hookType: any;
            key: string;
            chainId: any;
            contractAddress: string;
            contractState: any;
            boostForReferrer: any;
            valueForBoostForReferrer: number;
            boostForInvited: any;
            valueForBoostForInvited: number;
            defaultBoost: any;
            maximumBoostReferrer: number;
            maximumBoostInvited: number;
            cumulativeBoost: boolean;
        }[];
        targetToken: string;
        whitelist: never[];
        blacklist: never[];
        url: string;
        forwarders: never[];
    };
    "HypurrFi Borrow Pooled USDXL 0xa0399Ff8F46Ce6C2Cfee05C5F67307C7F390a439": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
};
declare const SwapxInterfaceCampaigns: {
    [key in swapxCampaigns]: partialConfig;
};
declare const CeloInterfaceCampaigns: {
    [key in celoCampaigns]: partialConfig;
};
declare const BeetsInterfaceCampaigns: {
    [key in beetsCampaigns]: partialConfig;
};
declare const ReserveInterfaceCampaigns: {
    [key in reserveCampaigns]: partialConfig;
};
declare const SonicmarketInterfaceCampaigns: {
    [key in sonicmarketCampaigns]: partialConfig;
};
declare const VicunaInterfaceCampaigns: {
    [key in vicunaCampaigns]: partialConfig;
};
declare const ModeInterfaceCampaigns: {
    [key in modeCampaigns]: partialConfig;
};
declare const ZkSyncInterfaceCampaigns: {
    [key in zkSyncCampaigns]: partialConfig;
};
declare const PufferInterfaceCampaigns: {
    [key in pufferCampaigns]: partialConfig;
};
declare const TACInterfaceCampaigns: {
    "TAC Supply tacETH 0x294eecec65A0142e84AEdfD8eB2FBEA8c9a9fbad": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply tacBTC 0x6Bf340dB729d82af1F6443A0Ea0d79647b1c3DDf": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply tacUSD 0x699e04F98dE2Fc395a7dcBf36B48EC837A976490": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply TACrsEth 0x419386E3Ef42368e602720CC458e00c0B28c47A7": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply TACmBTC 0x307267989A7bec3A57FD7fd96017C49803589Fd0": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply TACcbBTC 0xeb402fc96C7ed2f889d837C9976D6d821c1B5f01": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply TACmMEV 0xC2C26520256D5920B8aa1DA91F211222B2083B46": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply TACmEDGE 0xaa7BeE2d7dE06cB4E30564323Fb17C5029e7D567": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply tacLBTCv 0xD86fC1CaA0a5B82cC16B16B70DFC59F6f034C348": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply tacUSR 0x686c83Aa81ba206354fDcbc2cd282B4531365E29": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply ctTACezETH 0x25763b6597c9e0f10cb8481ef924472851480376": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply ctTACSTONE 0x83a197fc495881d149e6843b20f0027a622dfb0a": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply ctTACpufETH 0x78f314241df1ac151bfd0413eeb51979515f6abd": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply ctTAClvlUSD 0x2119787c73c95d0c4d54ed8395c3f9593f70e136": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply ylxSolvBTCs 0x0982eB22086183bF10acd2991A2dBeD1e3B9Ac2A": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply ylpumpBTC 0xd72c3a44b51C8D6631C004ecf3A318b9D2c58F80": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply ylxSolvBTC 0x76f31800eFdE39A5f98189447c7a514d974f4364": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply ctTACUSDB 0x729fcddf4cbbc9dce721a8378c25a726fe7e43d3": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply ylFBTC 0x6945f516413cB2d7311297e8A39E7D004dEB5566": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply ylMBTC 0x2B11527e1fab84a5382D20efD198BF3d332f7E73": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply tacUSN 0x7895A046b26CC07272B022a0C9BAFC046E6F6396": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply TACyUSD 0x2799dE2E1e769fA58dd3787F70BcD839AF3a1F39": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply tacETH9s 0xDe7CFf032D453Ce6B0a796043E75d380Df258812": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply ylSolvBTC.tac 0x34d16e4fB8757A88D986f9EfE2484F0badBF22C1": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply xUpUSDC 0x396A3f77EE1faf5A3C46e878bA7b7a2dcbe55517": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply ylbfBTC.tac 0x0d1862e73a1430A5FD3245B47859c1BEcD6f3A1D": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
    "TAC Supply uTAC++ 0xAF87B90E8a3035905697E07Bb813d2d59D2b0951": {
        campaignType: any;
        computeChainId: any;
        distributionChainId: any;
        targetToken: string;
        rewardToken: string;
        creator: string;
        hooks: never[];
        whitelist: never[];
        blacklist: never[];
        forwarders: never[];
        rewardTokenPricing: boolean;
        targetTokenPricing: boolean;
        apr: string;
    };
};
export declare enum WorldChainCampaigns {
    WorldChain_Vault_Re7USDC = "WorldChain Vault Re7 USDC 0xb1E80387EbE53Ff75a89736097D34dC8D9E9045B",
    WorldChain_Vault_Re7WLD = "WorldChain Vault Re7 WLD 0x348831b46876d3dF2Db98BdEc5E3B4083329Ab9f",
    WorldChain_Vault_Re7WETH = "WorldChain Vault Re7 WETH 0x0Db7E405278c2674F462aC9D9eb8b8346D1c1571",
    WorldChain_MorphoBorrow_WLD_USDC = "WorldChain MorphoBorrow WLD/USDC 0xba0ae12a5cdbf9a458566be68055f30c859771612950b5e43428a51becc6f6e9",
    WorldChain_MorphoBorrow_WETH_USDC = "WorldChain MorphoBorrow WETH/USDC 0x5fadb14df6523eb13a939f8024dbc54b10bdb4e521741e9995e2951337134b53",
    WorldChain_MorphoBorrow_WBTC_USDC = "WorldChain MorphoBorrow WBTC/USDC 0x787c5ff694f04e20cc6b3932cd662425161109bb0d63b189c48d99e714a3bd69",
    WorldChain_Vault_WORLDID_USDC = "WorldChain Vault World ID USDC 0xb1E80387EbE53Ff75a89736097D34dC8D9E9045B",
    WorldChain_Vault_WORLDID_WLD = "WorldChain Vault World ID WLD 0x348831b46876d3dF2Db98BdEc5E3B4083329Ab9f"
}
declare const WorldChainInterfaceCampaigns: {
    [key in WorldChainCampaigns]: partialConfig;
};
export declare enum StableJackCampaigns {
    StableJackPTstS = "StbleJack PT-stS 0xFCA91fEEe65DB34448A83a74f4f8970b5dddfa7c",
    StableJackPTwOS = "StbleJack PT-wOS 0xbe1B1dd422d94f9c1784FB9356ef83A29E1A8cFa",
    StableJackPTscUSD = "StbleJack PT-scUSD 0x11d686EF994648Ead6180c722F122169058389ee",
    StableJackPTscUSDRetroActive = "StbleJack PT-scUSD retroActive 0x11d686EF994648Ead6180c722F122169058389ee",
    StableJackPTstSPriceLow = "StbleJack PT-stS Price 0.41 0xFCA91fEEe65DB34448A83a74f4f8970b5dddfa7c",
    StableJackPTstSPriceMedium = "StbleJack PT-stS Price 0.53 0xFCA91fEEe65DB34448A83a74f4f8970b5dddfa7c",
    StableJackPTstSPriceHigh = "StbleJack PT-stS Price 0.6 0xFCA91fEEe65DB34448A83a74f4f8970b5dddfa7c",
    StableJackPTstSPriceVeryHigh = "StbleJack PT-stS Price 0.74 0xFCA91fEEe65DB34448A83a74f4f8970b5dddfa7c",
    StableJackPTstSPriceSuperHigh = "StbleJack PT-stS Price 0.84 0xFCA91fEEe65DB34448A83a74f4f8970b5dddfa7c",
    StableJackPTwOSPriceLow = "StbleJack PT-wOS Price 0.41 0xbe1B1dd422d94f9c1784FB9356ef83A29E1A8cFa",
    StableJackPTwOSPriceMedium = "StbleJack PT-wOS Price 0.53 0xbe1B1dd422d94f9c1784FB9356ef83A29E1A8cFa",
    StableJackPTwOSPriceHigh = "StbleJack PT-wOS Price 0.6 0xbe1B1dd422d94f9c1784FB9356ef83A29E1A8cFa",
    StableJackPTwOSPriceVeryHigh = "StbleJack PT-wOS Price 0.74 0xbe1B1dd422d94f9c1784FB9356ef83A29E1A8cFa",
    StableJackPTwOSPriceSuperHigh = "StbleJack PT-wOS Price 0.84 0xbe1B1dd422d94f9c1784FB9356ef83A29E1A8cFa"
}
declare const StableJackInterfaceCampaigns: {
    [key in StableJackCampaigns]: partialConfig;
};
export declare const MerklInterfaceCampaigns: {
    [key in program]: typeof PufferInterfaceCampaigns | typeof ZkSyncInterfaceCampaigns | typeof ModeInterfaceCampaigns | typeof VicunaInterfaceCampaigns | typeof SonicmarketInterfaceCampaigns | typeof ReserveInterfaceCampaigns | typeof BeetsInterfaceCampaigns | typeof CeloInterfaceCampaigns | typeof EtherlinkInterfaceCampaigns | typeof SwapxInterfaceCampaigns | typeof AnglesInterfaceCampaigns | typeof RoninInterfaceCampaigns | typeof TACInterfaceCampaigns | typeof HypurrFiCampaignsInterface | typeof WorldChainInterfaceCampaigns | typeof StableJackInterfaceCampaigns | typeof CornInterfaceCampaigns;
};
export {};
