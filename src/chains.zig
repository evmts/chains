// This file is auto-generated from DefiLlama/chainlist
// Do not edit manually - run `bun run generate` to regenerate

pub const NativeCurrency = struct {
    name: []const u8,
    symbol: []const u8,
    decimals: u8,
};

pub const Explorer = struct {
    name: []const u8,
    url: []const u8,
};

pub const Chain = struct {
    name: []const u8,
    chain: []const u8,
    chain_id: u64,
    network_id: u64,
    short_name: []const u8,
    rpc: []const []const u8,
    native_currency: NativeCurrency,
    info_url: ?[]const u8,
    explorers: []const Explorer,
};

// Chain IDs
pub const CHAIN_ID_QUAI_9: u64 = 9;
pub const CHAIN_ID_FLR_14: u64 = 14;
pub const CHAIN_ID_PLATO_53: u64 = 53;
pub const CHAIN_ID_PLATO_62: u64 = 62;
pub const CHAIN_ID_AMZG_65: u64 = 65;
pub const CHAIN_ID_PLATO_71: u64 = 71;
pub const CHAIN_ID_SHIBARIUMECOSYSTEM_109: u64 = 109;
pub const CHAIN_ID_MONAD_143: u64 = 143;
pub const CHAIN_ID_JITO149_149: u64 = 149;
pub const CHAIN_ID_FARM_165: u64 = 165;
pub const CHAIN_ID_NOMINA_166: u64 = 166;
pub const CHAIN_ID_WATR_MAINNET_192: u64 = 192;
pub const CHAIN_ID_VC_TESTNET_206: u64 = 206;
pub const CHAIN_ID_VC_207: u64 = 207;
pub const CHAIN_ID_IOPN_222: u64 = 222;
pub const CHAIN_ID_TACCHAIN_239: u64 = 239;
pub const CHAIN_ID_ORBINUM_270: u64 = 270;
pub const CHAIN_ID_DRBY_275: u64 = 275;
pub const CHAIN_ID_NETX_287: u64 = 287;
pub const CHAIN_ID_HSP_292_292: u64 = 292;
pub const CHAIN_ID_GOLIATH_327: u64 = 327;
pub const CHAIN_ID_VIRBICOIN_329: u64 = 329;
pub const CHAIN_ID_BOURSE_343: u64 = 343;
pub const CHAIN_ID_KSS_347: u64 = 347;
pub const CHAIN_ID_DNC_362: u64 = 362;
pub const CHAIN_ID_LNR_389: u64 = 389;
pub const CHAIN_ID_ACTUMIC_402: u64 = 402;
pub const CHAIN_ID_D_TESTNET_430: u64 = 430;
pub const CHAIN_ID_D_MAINNET_433: u64 = 433;
pub const CHAIN_ID_AREUM_463: u64 = 463;
pub const CHAIN_ID_CAMPMAINNET_484: u64 = 484;
pub const CHAIN_ID_LCAI_504: u64 = 504;
pub const CHAIN_ID_DOTO_505: u64 = 505;
pub const CHAIN_ID_BTB_509: u64 = 509;
pub const CHAIN_ID_SYNDICATE_510: u64 = 510;
pub const CHAIN_ID_FYRO_511: u64 = 511;
pub const CHAIN_ID_MAWARI_576: u64 = 576;
pub const CHAIN_ID_CAPY_586: u64 = 586;
pub const CHAIN_ID_NETX_TESTNET_587: u64 = 587;
pub const CHAIN_ID_BATTLECHAIN_TESTNET_627: u64 = 627;
pub const CHAIN_ID_BOT_677: u64 = 677;
pub const CHAIN_ID_JASMY_681: u64 = 681;
pub const CHAIN_ID_UNIOCEAN_684: u64 = 684;
pub const CHAIN_ID_LXON_724: u64 = 724;
pub const CHAIN_ID_CAPX_TESTNET_756: u64 = 756;
pub const CHAIN_ID_CAPX_757: u64 = 757;
pub const CHAIN_ID_QRDX_762: u64 = 762;
pub const CHAIN_ID_QELT_770: u64 = 770;
pub const CHAIN_ID_QELT_TESTNET_771: u64 = 771;
pub const CHAIN_ID_RITUAL_784: u64 = 784;
pub const CHAIN_ID_BINARYHOLDINGS_MAINNET_836: u64 = 836;
pub const CHAIN_ID_AMN_870: u64 = 870;
pub const CHAIN_ID_MARS_890: u64 = 890;
pub const CHAIN_ID_WBTC_892: u64 = 892;
pub const CHAIN_ID_FENE_920: u64 = 920;
pub const CHAIN_ID_ZEL_935: u64 = 935;
pub const CHAIN_ID_IOPN_984: u64 = 984;
pub const CHAIN_ID_STABLE_988: u64 = 988;
pub const CHAIN_ID_HYPER_EVM_999: u64 = 999;
pub const CHAIN_ID_NURA_1020: u64 = 1020;
pub const CHAIN_ID_BDAG_1043: u64 = 1043;
pub const CHAIN_ID_ANTA_1082: u64 = 1082;
pub const CHAIN_ID_XENEA_1096: u64 = 1096;
pub const CHAIN_ID_REALCHAIN_1098: u64 = 1098;
pub const CHAIN_ID_GRX_1110: u64 = 1110;
pub const CHAIN_ID_ECM_1124: u64 = 1124;
pub const CHAIN_ID_TAKER_1125: u64 = 1125;
pub const CHAIN_ID_QRY_1129: u64 = 1129;
pub const CHAIN_ID_ION_1143: u64 = 1143;
pub const CHAIN_ID_INTUITION_MAINNET_1155: u64 = 1155;
pub const CHAIN_ID_JOA_1191: u64 = 1191;
pub const CHAIN_ID_BMC_1199: u64 = 1199;
pub const CHAIN_ID_FITOCHAIN_1233: u64 = 1233;
pub const CHAIN_ID_ONN_1330: u64 = 1330;
pub const CHAIN_ID_BIE_1342: u64 = 1342;
pub const CHAIN_ID_MIDX_1394: u64 = 1394;
pub const CHAIN_ID_BDAG_1404: u64 = 1404;
pub const CHAIN_ID_VFL_1408: u64 = 1408;
pub const CHAIN_ID_TVFL_1409: u64 = 1409;
pub const CHAIN_ID_LRX_1410: u64 = 1410;
pub const CHAIN_ID_INJECTIVE_TESTNET_1439: u64 = 1439;
pub const CHAIN_ID_CMXR_1475: u64 = 1475;
pub const CHAIN_ID_ROONCHAIN_1492: u64 = 1492;
pub const CHAIN_ID_MIDL_1500: u64 = 1500;
pub const CHAIN_ID_DOLPHINET_TESTNET_1519: u64 = 1519;
pub const CHAIN_ID_DOLPHINET_1520: u64 = 1520;
pub const CHAIN_ID_MAWARI_1576: u64 = 1576;
pub const CHAIN_ID_NVNM_EVM_1611: u64 = 1611;
pub const CHAIN_ID_TREX_1628: u64 = 1628;
pub const CHAIN_ID_XGR_1643: u64 = 1643;
pub const CHAIN_ID_PHAROS_1672: u64 = 1672;
pub const CHAIN_ID_OBS_1719: u64 = 1719;
pub const CHAIN_ID_INJECTIVE_1776: u64 = 1776;
pub const CHAIN_ID_RUBY_TESTNET_1810: u64 = 1810;
pub const CHAIN_ID_WCH_SEPOLIA_1874: u64 = 1874;
pub const CHAIN_ID_XGRT_1879: u64 = 1879;
pub const CHAIN_ID_RECR_1888: u64 = 1888;
pub const CHAIN_ID_EPIX_1916: u64 = 1916;
pub const CHAIN_ID_TURKCHAIN_1919: u64 = 1919;
pub const CHAIN_ID_TPC_1925: u64 = 1925;
pub const CHAIN_ID_EGOLD_1932: u64 = 1932;
pub const CHAIN_ID_TOKB_1952: u64 = 1952;
pub const CHAIN_ID_QIEV3_1990: u64 = 1990;
pub const CHAIN_ID_DNA_1991: u64 = 1991;
pub const CHAIN_ID_RONIN_2020: u64 = 2020;
pub const CHAIN_ID_EROL_2027: u64 = 2027;
pub const CHAIN_ID_ARMA_TESTNET_2028: u64 = 2028;
pub const CHAIN_ID_FST_2034: u64 = 2034;
pub const CHAIN_ID_NTX_2070: u64 = 2070;
pub const CHAIN_ID_REALCHAINTEST_2098: u64 = 2098;
pub const CHAIN_ID_IBVM_2105: u64 = 2105;
pub const CHAIN_ID_IBVMT_2107: u64 = 2107;
pub const CHAIN_ID_PARALLAX_2110: u64 = 2110;
pub const CHAIN_ID_AUTHEO_2127: u64 = 2127;
pub const CHAIN_ID_MEMENTO_TESTNET_2129: u64 = 2129;
pub const CHAIN_ID_MORPHTACHYON_2184: u64 = 2184;
pub const CHAIN_ID_STABLE_TESTNET_2201: u64 = 2201;
pub const CHAIN_ID_MOCA_2288: u64 = 2288;
pub const CHAIN_ID_BESC_2372: u64 = 2372;
pub const CHAIN_ID_T_HAUS_2443: u64 = 2443;
pub const CHAIN_ID_CCC_2500: u64 = 2500;
pub const CHAIN_ID_SVP_TESTNET_2517: u64 = 2517;
pub const CHAIN_ID_SVP_2518: u64 = 2518;
pub const CHAIN_ID_ANUBI_2526: u64 = 2526;
pub const CHAIN_ID_H2_2582: u64 = 2582;
pub const CHAIN_ID_KTO_2643: u64 = 2643;
pub const CHAIN_ID_SPLD_2691: u64 = 2691;
pub const CHAIN_ID_SPLDT_2692: u64 = 2692;
pub const CHAIN_ID_ORBINUM_2700: u64 = 2700;
pub const CHAIN_ID_CLAW_WORLD_BOX_2721: u64 = 2721;
pub const CHAIN_ID_CREATOR_CHAIN_MAINNET_2787: u64 = 2787;
pub const CHAIN_ID_AERE_2800: u64 = 2800;
pub const CHAIN_ID_ALPEN_2892: u64 = 2892;
pub const CHAIN_ID_MORPH_2910: u64 = 2910;
pub const CHAIN_ID_BGG_3005: u64 = 3005;
pub const CHAIN_ID_AIC_3018: u64 = 3018;
pub const CHAIN_ID_SVM_3109: u64 = 3109;
pub const CHAIN_ID_ALPHA_3111: u64 = 3111;
pub const CHAIN_ID_BKC_3188: u64 = 3188;
pub const CHAIN_ID_QBC_3303: u64 = 3303;
pub const CHAIN_ID_VORA_3318: u64 = 3318;
pub const CHAIN_ID_AET_3355: u64 = 3355;
pub const CHAIN_ID_TJR_3377: u64 = 3377;
pub const CHAIN_ID_BYTECHAINTEST_3399: u64 = 3399;
pub const CHAIN_ID_AMX_3535: u64 = 3535;
pub const CHAIN_ID_TRUSTGREEN_3567: u64 = 3567;
pub const CHAIN_ID_AIFI_3600: u64 = 3600;
pub const CHAIN_ID_INRI_3777: u64 = 3777;
pub const CHAIN_ID_HAUST_NETWORK_3864: u64 = 3864;
pub const CHAIN_ID_NEX_3945: u64 = 3945;
pub const CHAIN_ID_NEX_3946: u64 = 3946;
pub const CHAIN_ID_GAN_4048: u64 = 4048;
pub const CHAIN_ID_ECNA_4111: u64 = 4111;
pub const CHAIN_ID_TECNA_4112: u64 = 4112;
pub const CHAIN_ID_CITREA_4114: u64 = 4114;
pub const CHAIN_ID_RISE_4153: u64 = 4153;
pub const CHAIN_ID_SX_MAINNET_4162: u64 = 4162;
pub const CHAIN_ID_TEMPO_PRESTO_4217: u64 = 4217;
pub const CHAIN_ID_GENLAYER_TESTNETS_4221: u64 = 4221;
pub const CHAIN_ID_HASHFIRE_4227: u64 = 4227;
pub const CHAIN_ID_TPIX_4289: u64 = 4289;
pub const CHAIN_ID_MEGAETH_4326: u64 = 4326;
pub const CHAIN_ID_LITEFORGE_4441: u64 = 4441;
pub const CHAIN_ID_DEN_TESTNET_4442: u64 = 4442;
pub const CHAIN_ID_OXIN_4457: u64 = 4457;
pub const CHAIN_ID_SC_4509: u64 = 4509;
pub const CHAIN_ID_GTBS_4599: u64 = 4599;
pub const CHAIN_ID_HSP_4611_4611: u64 = 4611;
pub const CHAIN_ID_HSP_4612_4612: u64 = 4612;
pub const CHAIN_ID_ROBINHOODCHAIN_4663: u64 = 4663;
pub const CHAIN_ID_BSURE_4848: u64 = 4848;
pub const CHAIN_ID_PRODAO_4936: u64 = 4936;
pub const CHAIN_ID_MATRIX_4959: u64 = 4959;
pub const CHAIN_ID_HYPR_TESTNET_4978: u64 = 4978;
pub const CHAIN_ID_SOMNIA_5031: u64 = 5031;
pub const CHAIN_ID_ARC_5042: u64 = 5042;
pub const CHAIN_ID_FUSIONLAYER_5070: u64 = 5070;
pub const CHAIN_ID_ANC_5108: u64 = 5108;
pub const CHAIN_ID_MOCAT_5151: u64 = 5151;
pub const CHAIN_ID_SBTC_5200: u64 = 5200;
pub const CHAIN_ID_YEYING_5432: u64 = 5432;
pub const CHAIN_ID_TAAQO_5566: u64 = 5566;
pub const CHAIN_ID_TREASURENET_5570: u64 = 5570;
pub const CHAIN_ID_MSC_5577: u64 = 5577;
pub const CHAIN_ID_EVO_NOVA_5641: u64 = 5641;
pub const CHAIN_ID_TBURN_5800: u64 = 5800;
pub const CHAIN_ID_SHIB_5816: u64 = 5816;
pub const CHAIN_ID_DUKONG_5887: u64 = 5887;
pub const CHAIN_ID_TEA_6122: u64 = 6122;
pub const CHAIN_ID_BMZ_6162: u64 = 6162;
pub const CHAIN_ID_BMZ_6163: u64 = 6163;
pub const CHAIN_ID_BMZ_6165: u64 = 6165;
pub const CHAIN_ID_DUAL_6301: u64 = 6301;
pub const CHAIN_ID_LRB_6359: u64 = 6359;
pub const CHAIN_ID_YNXTEST_6423: u64 = 6423;
pub const CHAIN_ID_AWAJI_6497: u64 = 6497;
pub const CHAIN_ID_MIZUHIKI_6498: u64 = 6498;
pub const CHAIN_ID_KALIS_6533: u64 = 6533;
pub const CHAIN_ID_OMA_MAINNET_6623: u64 = 6623;
pub const CHAIN_ID_ANUBI_6714: u64 = 6714;
pub const CHAIN_ID_VEX_6736: u64 = 6736;
pub const CHAIN_ID_LUST_6923: u64 = 6923;
pub const CHAIN_ID_GROWFITTER_MAINNET_7084: u64 = 7084;
pub const CHAIN_ID_SRX_7119: u64 = 7119;
pub const CHAIN_ID_SRX_TESTNET_7120: u64 = 7120;
pub const CHAIN_ID_VRCN_7131: u64 = 7131;
pub const CHAIN_ID_VYRE_TESTNET_7357: u64 = 7357;
pub const CHAIN_ID_CMXR_L2_7373: u64 = 7373;
pub const CHAIN_ID_LIBERTAS_7474: u64 = 7474;
pub const CHAIN_ID_CARRCHAIN_7667: u64 = 7667;
pub const CHAIN_ID_TJR_TESTNET_7733: u64 = 7733;
pub const CHAIN_ID_EMBR_7773: u64 = 7773;
pub const CHAIN_ID_PANDASEA_MAINNET_7776: u64 = 7776;
pub const CHAIN_ID_PTB_7820: u64 = 7820;
pub const CHAIN_ID_HYVE_7847: u64 = 7847;
pub const CHAIN_ID_PC_7890: u64 = 7890;
pub const CHAIN_ID_UNIVEX_7932: u64 = 7932;
pub const CHAIN_ID_BMN_8006: u64 = 8006;
pub const CHAIN_ID_LERAX_8125: u64 = 8125;
pub const CHAIN_ID_ALPEN_8150: u64 = 8150;
pub const CHAIN_ID_SVM_TESTNET_8163: u64 = 8163;
pub const CHAIN_ID_LCAI_T_8200: u64 = 8200;
pub const CHAIN_ID_FORKNET_8338: u64 = 8338;
pub const CHAIN_ID_BRY_8379: u64 = 8379;
pub const CHAIN_ID_ACN_8700: u64 = 8700;
pub const CHAIN_ID_EBC_8721: u64 = 8721;
pub const CHAIN_ID_WARD_8765: u64 = 8765;
pub const CHAIN_ID_TICS_9030: u64 = 9030;
pub const CHAIN_ID_XYB_TESTNET_9194: u64 = 9194;
pub const CHAIN_ID_LCAI_9200: u64 = 9200;
pub const CHAIN_ID_ZEL_9350: u64 = 9350;
pub const CHAIN_ID_KUB_9601: u64 = 9601;
pub const CHAIN_ID_PLASMA_9745: u64 = 9745;
pub const CHAIN_ID_PLASMA_TESTNET_9746: u64 = 9746;
pub const CHAIN_ID_PLASMA_DEVNET_9747: u64 = 9747;
pub const CHAIN_ID_TIMP_9818: u64 = 9818;
pub const CHAIN_ID_IMP_9819: u64 = 9819;
pub const CHAIN_ID_BYTECHAIN_9933: u64 = 9933;
pub const CHAIN_ID_BREVIS_NETWORK_9973: u64 = 9973;
pub const CHAIN_ID_ETHW_10001: u64 = 10001;
pub const CHAIN_ID_GATELAYER_10088: u64 = 10088;
pub const CHAIN_ID_OZONE_10120: u64 = 10120;
pub const CHAIN_ID_OZONE_10121: u64 = 10121;
pub const CHAIN_ID_MOVA_10323: u64 = 10323;
pub const CHAIN_ID_LIMONATA_TESTNET_10777: u64 = 10777;
pub const CHAIN_ID_GLEEC_11169: u64 = 11169;
pub const CHAIN_ID_ETH_11417: u64 = 11417;
pub const CHAIN_ID_NKM_11941: u64 = 11941;
pub const CHAIN_ID_KUDORA_12000: u64 = 12000;
pub const CHAIN_ID_MOC_12026: u64 = 12026;
pub const CHAIN_ID_L2P_12216: u64 = 12216;
pub const CHAIN_ID_AMAX_12248: u64 = 12248;
pub const CHAIN_ID_CTCCHAIN_12301: u64 = 12301;
pub const CHAIN_ID_CTCCHAIN_12302: u64 = 12302;
pub const CHAIN_ID_ELA_12343: u64 = 12343;
pub const CHAIN_ID_CLY_12369: u64 = 12369;
pub const CHAIN_ID_BRICK_12786: u64 = 12786;
pub const CHAIN_ID_LIBERLAND_TESTNET_12865: u64 = 12865;
pub const CHAIN_ID_RNTX_13113: u64 = 13113;
pub const CHAIN_ID_BKC_13188: u64 = 13188;
pub const CHAIN_ID_MEE_13390: u64 = 13390;
pub const CHAIN_ID_BRIDGELESS_13441: u64 = 13441;
pub const CHAIN_ID_INTUITION_TESTNET_13579: u64 = 13579;
pub const CHAIN_ID_BTZ_14204: u64 = 14204;
pub const CHAIN_ID_SONIC_TESTNET_14601: u64 = 14601;
pub const CHAIN_ID_QUAIT_15000: u64 = 15000;
pub const CHAIN_ID_MIDL_TESTNET_15001: u64 = 15001;
pub const CHAIN_ID_INFRA_TESTNET_15324: u64 = 15324;
pub const CHAIN_ID_BIMBO_15497: u64 = 15497;
pub const CHAIN_ID_NRXN_15526: u64 = 15526;
pub const CHAIN_ID_HOLO_15675: u64 = 15675;
pub const CHAIN_ID_HOLO_TESTNET_15676: u64 = 15676;
pub const CHAIN_ID__0G_GALILEO_16601: u64 = 16601;
pub const CHAIN_ID__0G_16661: u64 = 16661;
pub const CHAIN_ID_BOTCY_16963: u64 = 16963;
pub const CHAIN_ID_DMD_17771: u64 = 17771;
pub const CHAIN_ID_TRECR_18882: u64 = 18882;
pub const CHAIN_ID_YUUCHAIN_19001: u64 = 19001;
pub const CHAIN_ID_IGRA_CARAVEL_TESTNET_19416: u64 = 19416;
pub const CHAIN_ID_STC_TESTNET_19517: u64 = 19517;
pub const CHAIN_ID_STC_MAINNET_19518: u64 = 19518;
pub const CHAIN_ID_MON_19901: u64 = 19901;
pub const CHAIN_ID_ENTROPY_19911: u64 = 19911;
pub const CHAIN_ID_ATRNXOS_19966: u64 = 19966;
pub const CHAIN_ID_SUP_19998: u64 = 19998;
pub const CHAIN_ID_MANDALA_20010: u64 = 20010;
pub const CHAIN_ID_MANDALA_TESTNET_20011: u64 = 20011;
pub const CHAIN_ID_AGLS_20033: u64 = 20033;
pub const CHAIN_ID_NCH_20250: u64 = 20250;
pub const CHAIN_ID_ALPEN_20310: u64 = 20310;
pub const CHAIN_ID_EFIK_20488: u64 = 20488;
pub const CHAIN_ID_FLUENT_TESTNET_20994: u64 = 20994;
pub const CHAIN_ID_FLASHNET_21021: u64 = 21021;
pub const CHAIN_ID_FLASHNET_TESTNET_21022: u64 = 21022;
pub const CHAIN_ID_AUTHEO_TESTNET_21270: u64 = 21270;
pub const CHAIN_ID_APCHAIN_21970: u64 = 21970;
pub const CHAIN_ID_CLES_22225: u64 = 22225;
pub const CHAIN_ID_INCENTIV_24101: u64 = 24101;
pub const CHAIN_ID_AGENTSCOIN_24368: u64 = 24368;
pub const CHAIN_ID_FLUENT_25363: u64 = 25363;
pub const CHAIN_ID_H2LAMBDA_25821: u64 = 25821;
pub const CHAIN_ID_TCENT_28802: u64 = 28802;
pub const CHAIN_ID_ALPEN_29032: u64 = 29032;
pub const CHAIN_ID_TAIC_30181: u64 = 30181;
pub const CHAIN_ID_ETHIQ_30303: u64 = 30303;
pub const CHAIN_ID_TRXC_30485: u64 = 30485;
pub const CHAIN_ID_DAWN_MAINNET_30715: u64 = 30715;
pub const CHAIN_ID_ZKSYNC_PRIVIDIUM_MAINNET_30716: u64 = 30716;
pub const CHAIN_ID_BVM20_31338: u64 = 31338;
pub const CHAIN_ID_PAIX_32380: u64 = 32380;
pub const CHAIN_ID_ZIL_32769: u64 = 32769;
pub const CHAIN_ID_ECX_32904: u64 = 32904;
pub const CHAIN_ID_ZERO_BEACON_33000: u64 = 33000;
pub const CHAIN_ID_ZERO_SYSTEM_33001: u64 = 33001;
pub const CHAIN_ID_ZERO_INTEROP_33002: u64 = 33002;
pub const CHAIN_ID_ZERO_ATLAS_33003: u64 = 33003;
pub const CHAIN_ID_ZERO_PRIVATE_33004: u64 = 33004;
pub const CHAIN_ID_ZIL_TESTNET_33101: u64 = 33101;
pub const CHAIN_ID_ECX_TESTNET_33160: u64 = 33160;
pub const CHAIN_ID_QOM_33303: u64 = 33303;
pub const CHAIN_ID_ZQ2_DEVNET_33469: u64 = 33469;
pub const CHAIN_ID_MORPHTACHYON_TESTNET_34952: u64 = 34952;
pub const CHAIN_ID_TRCT_35935: u64 = 35935;
pub const CHAIN_ID_TC_36000: u64 = 36000;
pub const CHAIN_ID_ABCORE_36888: u64 = 36888;
pub const CHAIN_ID_WEICHAIN_37771: u64 = 37771;
pub const CHAIN_ID_IGRA_38833: u64 = 38833;
pub const CHAIN_ID_IGRA_TESTNET_38836: u64 = 38836;
pub const CHAIN_ID_CIN_39500: u64 = 39500;
pub const CHAIN_ID_SALT_40204: u64 = 40204;
pub const CHAIN_ID_ROOTVX_41295: u64 = 41295;
pub const CHAIN_ID_NESA_41444: u64 = 41444;
pub const CHAIN_ID_EDU_CHAIN_41923: u64 = 41923;
pub const CHAIN_ID_TEMPO_MODERATO_42431: u64 = 42431;
pub const CHAIN_ID_ZERO_BEACON_TESTNET_43000: u64 = 43000;
pub const CHAIN_ID_ZERO_SYSTEM_TESTNET_43001: u64 = 43001;
pub const CHAIN_ID_ZERO_INTEROP_TESTNET_43002: u64 = 43002;
pub const CHAIN_ID_ZERO_ATLAS_TESTNET_43003: u64 = 43003;
pub const CHAIN_ID_ZERO_PRIVATE_TESTNET_43004: u64 = 43004;
pub const CHAIN_ID_RIC_TEST_45578: u64 = 45578;
pub const CHAIN_ID_ROBINHOODCHAINTESTNET_46630: u64 = 46630;
pub const CHAIN_ID_TXCL_47294: u64 = 47294;
pub const CHAIN_ID_BITBADGES_50024: u64 = 50024;
pub const CHAIN_ID_BITBADGES_TESTNET_50025: u64 = 50025;
pub const CHAIN_ID_SOMNIATESTNET_50312: u64 = 50312;
pub const CHAIN_ID_RISA_51014: u64 = 51014;
pub const CHAIN_ID_MEMENTO_MAINNET_51888: u64 = 51888;
pub const CHAIN_ID_LAZAI_52924: u64 = 52924;
pub const CHAIN_ID_DATAHAVEN_55930: u64 = 55930;
pub const CHAIN_ID_DATAHAVEN_55931: u64 = 55931;
pub const CHAIN_ID_ZKTANENBAUM_57057: u64 = 57057;
pub const CHAIN_ID_MEV_COMMIT_57173: u64 = 57173;
pub const CHAIN_ID_JELLO_61564: u64 = 61564;
pub const CHAIN_ID_MOVA_61900: u64 = 61900;
pub const CHAIN_ID_APOLLO_62606: u64 = 62606;
pub const CHAIN_ID_VERI5_63868: u64 = 63868;
pub const CHAIN_ID_GALD_64137: u64 = 64137;
pub const CHAIN_ID_OMACHAIN_TESTNET_66238: u64 = 66238;
pub const CHAIN_ID_NXPC_68414: u64 = 68414;
pub const CHAIN_ID_ETO_69670: u64 = 69670;
pub const CHAIN_ID_PYRA_70003: u64 = 70003;
pub const CHAIN_ID_SEVEN_70007: u64 = 70007;
pub const CHAIN_ID_EKI_70101: u64 = 70101;
pub const CHAIN_ID_CX_TESTNET_70707: u64 = 70707;
pub const CHAIN_ID_WCN_TESTNET_71117: u64 = 71117;
pub const CHAIN_ID_RLS_72957: u64 = 72957;
pub const CHAIN_ID_SELEMAN_73571: u64 = 73571;
pub const CHAIN_ID_CARRCHAIN_76672: u64 = 76672;
pub const CHAIN_ID_VENTURES_77717: u64 = 77717;
pub const CHAIN_ID_BSOS_77888: u64 = 77888;
pub const CHAIN_ID_BRADI_78168: u64 = 78168;
pub const CHAIN_ID_PEXLI_TESTNET_78901: u64 = 78901;
pub const CHAIN_ID_HPX_80808: u64 = 80808;
pub const CHAIN_ID_ONYX_80888: u64 = 80888;
pub const CHAIN_ID_CODEX_81224: u64 = 81224;
pub const CHAIN_ID_STEEMVM_81630: u64 = 81630;
pub const CHAIN_ID_TICKO_84256: u64 = 84256;
pub const CHAIN_ID_TICKO_TESTNET_84257: u64 = 84257;
pub const CHAIN_ID_PLUS_88088: u64 = 88088;
pub const CHAIN_ID_PTEK_88788: u64 = 88788;
pub const CHAIN_ID_QTSCHAIN_88868: u64 = 88868;
pub const CHAIN_ID_CHILIZ_88888: u64 = 88888;
pub const CHAIN_ID_VALUEX_90000: u64 = 90000;
pub const CHAIN_ID_APAW_90025: u64 = 90025;
pub const CHAIN_ID_WATR_TESTNET_92870: u64 = 92870;
pub const CHAIN_ID_PEPU_97741: u64 = 97741;
pub const CHAIN_ID_GOGO_99001: u64 = 99001;
pub const CHAIN_ID_MC_99002: u64 = 99002;
pub const CHAIN_ID_TRCT_99566: u64 = 99566;
pub const CHAIN_ID_ELYSIUM_TESTNET_99801: u64 = 99801;
pub const CHAIN_ID_ELYSIUM_99901: u64 = 99901;
pub const CHAIN_ID_QSN_99991: u64 = 99991;
pub const CHAIN_ID_CTC_102030: u64 = 102030;
pub const CHAIN_ID_CTCTEST_102031: u64 = 102031;
pub const CHAIN_ID_CTCDEV_102032: u64 = 102032;
pub const CHAIN_ID_MTF_114514: u64 = 114514;
pub const CHAIN_ID_SWSS_122605: u64 = 122605;
pub const CHAIN_ID_IDS_123999: u64 = 123999;
pub const CHAIN_ID_MITOSIS_124816: u64 = 124816;
pub const CHAIN_ID_GRAV_127001: u64 = 127001;
pub const CHAIN_ID_ETLS_127823: u64 = 127823;
pub const CHAIN_ID_FUEL_SEPOLIA_129514: u64 = 129514;
pub const CHAIN_ID_RPHX_130526: u64 = 130526;
pub const CHAIN_ID_ARIA_134235: u64 = 134235;
pub const CHAIN_ID_MIDXT_139420: u64 = 139420;
pub const CHAIN_ID_BEXCHAIN_140586: u64 = 140586;
pub const CHAIN_ID_KASPLEX_167012: u64 = 167012;
pub const CHAIN_ID_WCN_171717: u64 = 171717;
pub const CHAIN_ID_LIT_175200: u64 = 175200;
pub const CHAIN_ID_DPN_179205: u64 = 179205;
pub const CHAIN_ID_HPP_SEPOLIA_181228: u64 = 181228;
pub const CHAIN_ID_GOMCHAIN_MAINNET_190278: u64 = 190278;
pub const CHAIN_ID_HPP_MAINNET_190415: u64 = 190415;
pub const CHAIN_ID_R0AR_193939: u64 = 193939;
pub const CHAIN_ID_EADX_198724: u64 = 198724;
pub const CHAIN_ID_NOS_200024: u64 = 200024;
pub const CHAIN_ID_FSC_201022: u64 = 201022;
pub const CHAIN_ID_DFN_202110: u64 = 202110;
pub const CHAIN_ID_SVS_202308: u64 = 202308;
pub const CHAIN_ID_PROPULENCE_TESTNET_202500: u64 = 202500;
pub const CHAIN_ID_AUREXT_202506: u64 = 202506;
pub const CHAIN_ID_KASPLEX_202555: u64 = 202555;
pub const CHAIN_ID_JU_202599: u64 = 202599;
pub const CHAIN_ID_RONIN_SAIGON_202601: u64 = 202601;
pub const CHAIN_ID_MIAMA_202610: u64 = 202610;
pub const CHAIN_ID_JUCHAIN_210000: u64 = 210000;
pub const CHAIN_ID_KLT_220312: u64 = 220312;
pub const CHAIN_ID_SIVZ_MAINNET_222345: u64 = 222345;
pub const CHAIN_ID_MOCAT_222888: u64 = 222888;
pub const CHAIN_ID_ARES_232425: u64 = 232425;
pub const CHAIN_ID_CODENEKT_MAINNET_235235: u64 = 235235;
pub const CHAIN_ID_ULALO_MAINNET_237007: u64 = 237007;
pub const CHAIN_ID_SIN_250225: u64 = 250225;
pub const CHAIN_ID_KUB_259251: u64 = 259251;
pub const CHAIN_ID_DATACHAIN_271828: u64 = 271828;
pub const CHAIN_ID_MBTX_271831: u64 = 271831;
pub const CHAIN_ID_MBTXL2_271832: u64 = 271832;
pub const CHAIN_ID_CREATOR_CHAIN_TESTNET_278701: u64 = 278701;
pub const CHAIN_ID_VALUECHAIN_286623: u64 = 286623;
pub const CHAIN_ID_PMT_290290: u64 = 290290;
pub const CHAIN_ID_T1_299792: u64 = 299792;
pub const CHAIN_ID_T1T_299892: u64 = 299892;
pub const CHAIN_ID_AXION_303030: u64 = 303030;
pub const CHAIN_ID_VCR_314169: u64 = 314169;
pub const CHAIN_ID_DCOMM_MAINNET_326663: u64 = 326663;
pub const CHAIN_ID_LAX_333222: u64 = 333222;
pub const CHAIN_ID_DEN_MAINNET_369369: u64 = 369369;
pub const CHAIN_ID_TEQOIN_420377: u64 = 420377;
pub const CHAIN_ID_INFINITE_421018: u64 = 421018;
pub const CHAIN_ID_MTX_478549: u64 = 478549;
pub const CHAIN_ID_BTCWCHAIN_482120: u64 = 482120;
pub const CHAIN_ID_COMMONS_510003: u64 = 510003;
pub const CHAIN_ID_ALPHA_511111: u64 = 511111;
pub const CHAIN_ID_TONE_612044: u64 = 612044;
pub const CHAIN_ID_ONE_612055: u64 = 612055;
pub const CHAIN_ID_GALACTICA_613419: u64 = 613419;
pub const CHAIN_ID_TGALD_641371: u64 = 641371;
pub const CHAIN_ID_MDX_648529: u64 = 648529;
pub const CHAIN_ID_EDU_CHAIN_TESTNET_656476: u64 = 656476;
pub const CHAIN_ID_AZTEC_677868: u64 = 677868;
pub const CHAIN_ID_PHAROS_TESTNET_688688: u64 = 688688;
pub const CHAIN_ID_PHAROS_ATLANTIC_688689: u64 = 688689;
pub const CHAIN_ID_MARSCHAIN_704851: u64 = 704851;
pub const CHAIN_ID_MARSCHAIN_TESTNET_704852: u64 = 704852;
pub const CHAIN_ID_DRAMA_710520: u64 = 710520;
pub const CHAIN_ID_PRANA_712217: u64 = 712217;
pub const CHAIN_ID_ZBX_728990: u64 = 728990;
pub const CHAIN_ID_CX_737373: u64 = 737373;
pub const CHAIN_ID_TOOG_777001: u64 = 777001;
pub const CHAIN_ID_MAKACHAIN_MAINNET_777178: u64 = 777178;
pub const CHAIN_ID_FLXG_778400: u64 = 778400;
pub const CHAIN_ID_UST_778889: u64 = 778889;
pub const CHAIN_ID_NVNM_CHAIN_DEVNET_787222: u64 = 787222;
pub const CHAIN_ID_NVNM_CHAIN_TESTNET_787223: u64 = 787223;
pub const CHAIN_ID_SPACEOS_TESTNET_800000: u64 = 800000;
pub const CHAIN_ID_ZUG_824642: u64 = 824642;
pub const CHAIN_ID_BINI_837291: u64 = 837291;
pub const CHAIN_ID_HYPERCLUSTER_838838: u64 = 838838;
pub const CHAIN_ID_GALACTICA_TESTNET_843843: u64 = 843843;
pub const CHAIN_ID_HAQQ_TESTETHIQ_853211: u64 = 853211;
pub const CHAIN_ID_WRG_882026: u64 = 882026;
pub const CHAIN_ID_ZENITH_EVM_TESTNET_936485: u64 = 936485;
pub const CHAIN_ID_PRIMOX_970803: u64 = 970803;
pub const CHAIN_ID_QANTERA_974621: u64 = 974621;
pub const CHAIN_ID_BREVIS_PROVERNET_TESTNET_999983: u64 = 999983;
pub const CHAIN_ID_XO_1000101: u64 = 1000101;
pub const CHAIN_ID_WIREX_TESTNET_1001996: u64 = 1001996;
pub const CHAIN_ID_ROONCHAIN_1314520: u64 = 1314520;
pub const CHAIN_ID_XRPLEVM_1440000: u64 = 1440000;
pub const CHAIN_ID_VXS_TESTNET_1618032: u64 = 1618032;
pub const CHAIN_ID_DUCK_2026001: u64 = 2026001;
pub const CHAIN_ID_CASHCAT_2274228: u64 = 2274228;
pub const CHAIN_ID_PRV_TESTNET_2718281: u64 = 2718281;
pub const CHAIN_ID_ARC_TESTNET_5042002: u64 = 5042002;
pub const CHAIN_ID_ETHEREAL_5064014: u64 = 5064014;
pub const CHAIN_ID_LOOT_5151706: u64 = 5151706;
pub const CHAIN_ID_WIND_5552020: u64 = 5552020;
pub const CHAIN_ID_DOGEOS_CHIKYU_6281971: u64 = 6281971;
pub const CHAIN_ID_JMDT_7000700: u64 = 7000700;
pub const CHAIN_ID_NVM_7575757: u64 = 7575757;
pub const CHAIN_ID_DOGITA_7770777: u64 = 7770777;
pub const CHAIN_ID_GRAVITY_TESTNET_7771625: u64 = 7771625;
pub const CHAIN_ID_VPC_8678671: u64 = 8678671;
pub const CHAIN_ID_DAVENTRE_8770570: u64 = 8770570;
pub const CHAIN_ID_CC_TESTNET_11111110: u64 = 11111110;
pub const CHAIN_ID_CC_11111111: u64 = 11111111;
pub const CHAIN_ID_CWN_TESTNET_11111327: u64 = 11111327;
pub const CHAIN_ID_CELO_SEP_11142220: u64 = 11142220;
pub const CHAIN_ID_RISE_TESTNET_11155931: u64 = 11155931;
pub const CHAIN_ID_R0ART_11166111: u64 = 11166111;
pub const CHAIN_ID_WINMAR_12142816: u64 = 12142816;
pub const CHAIN_ID_ROONCHAIN_13145201: u64 = 13145201;
pub const CHAIN_ID_ETHEREAL_TESTNET_0_13374202: u64 = 13374202;
pub const CHAIN_ID_HP_13600000: u64 = 13600000;
pub const CHAIN_ID_SIS_13863860: u64 = 13863860;
pub const CHAIN_ID_BLENO_15112026: u64 = 15112026;
pub const CHAIN_ID_TIPS_19251925: u64 = 19251925;
pub const CHAIN_ID_MA_20260131: u64 = 20260131;
pub const CHAIN_ID_GRIDMINDT_20260532: u64 = 20260532;
pub const CHAIN_ID_COOK_20261001: u64 = 20261001;
pub const CHAIN_ID_ZAGROS_21072026: u64 = 21072026;
pub const CHAIN_ID_TJR_DEVNET_21519080: u64 = 21519080;
pub const CHAIN_ID_NOWA_TESTNET_22052010: u64 = 22052010;
pub const CHAIN_ID_PECU_27272727: u64 = 27272727;
pub const CHAIN_ID_GBDO_38391207: u64 = 38391207;
pub const CHAIN_ID_TENSORA_44444444: u64 = 44444444;
pub const CHAIN_ID_UNP_47382916: u64 = 47382916;
pub const CHAIN_ID_ELYON_55452773: u64 = 55452773;
pub const CHAIN_ID_AUT_65000000: u64 = 65000000;
pub const CHAIN_ID_AUT_BAKERLOO_65010004: u64 = 65010004;
pub const CHAIN_ID_SOVRA_65536001: u64 = 65536001;
pub const CHAIN_ID_KRYVORA_73829164: u64 = 73829164;
pub const CHAIN_ID_SX_TORONTO_79479957: u64 = 79479957;
pub const CHAIN_ID_BASE_VIBENET_84538453: u64 = 84538453;
pub const CHAIN_ID_SHINZO_TESTNET_91273001: u64 = 91273001;
pub const CHAIN_ID_PRSM_101001000: u64 = 101001000;
pub const CHAIN_ID_ISTCHAIN_MAINNET_286022981: u64 = 286022981;
pub const CHAIN_ID_DNACHAIN_MAINNET_287022981: u64 = 287022981;
pub const CHAIN_ID_SLCCHAIN_MAINNET_288022981: u64 = 288022981;
pub const CHAIN_ID_PAS_420420417: u64 = 420420417;
pub const CHAIN_ID_KSM_420420418: u64 = 420420418;
pub const CHAIN_ID_DOT_420420419: u64 = 420420419;
pub const CHAIN_ID_INFINITE_TESTNET_421018001: u64 = 421018001;
pub const CHAIN_ID_SOPHON_OS_TESTNET_531050204: u64 = 531050204;
pub const CHAIN_ID_ZEN_845320009: u64 = 845320009;
pub const CHAIN_ID_MIRASMANDA_1213549903: u64 = 1213549903;
pub const CHAIN_ID_MIRASMANDA_UAT_1215655279: u64 = 1215655279;
pub const CHAIN_ID_ITANI_1229800785: u64 = 1229800785;
pub const CHAIN_ID_OMEGA_1313161916: u64 = 1313161916;
pub const CHAIN_ID_RARI_1380012617: u64 = 1380012617;
pub const CHAIN_ID_LUMIA_BEAM_TESTNET_2030232745: u64 = 2030232745;
pub const CHAIN_ID_EDENT_3735928814: u64 = 3735928814;
pub const CHAIN_ID_FCO_11111111111: u64 = 11111111111;
pub const CHAIN_ID_BUB_30143370385: u64 = 30143370385;
pub const CHAIN_ID_SOBYA_357812033857: u64 = 357812033857;
pub const CHAIN_ID_GXY_420420420420: u64 = 420420420420;
pub const CHAIN_ID_STRATO_123354377739506: u64 = 123354377739506;

pub const quai_9_rpcs = [_][]const u8{
    "https://rpc.quai.network/cyprus1",
};

pub const quai_9_explorers = [_]Explorer{
    .{
        .name = "Quaiscan",
        .url = "https://quaiscan.io",
    },
};

pub const quai_9 = Chain{
    .name = "Quai Mainnet",
    .chain = "QUAI",
    .chain_id = 9,
    .network_id = 9,
    .short_name = "quai",
    .rpc = &quai_9_rpcs,
    .native_currency = .{
        .name = "Quai",
        .symbol = "QUAI",
        .decimals = 18,
    },
    .info_url = "https://qu.ai",
    .explorers = &quai_9_explorers,
};

pub const flr_14_rpcs = [_][]const u8{
    "https://flare-api.flare.network/ext/C/rpc",
    "https://flare.rpc.thirdweb.com",
    "https://flare-bundler.etherspot.io",
    "https://rpc.ankr.com/flare",
    "https://rpc.au.cc/flare",
    "https://flare.enosys.global/ext/C/rpc",
    "https://flare.solidifi.app/ext/C/rpc",
};

pub const flr_14_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://flare-explorer.flare.network",
    },
    .{
        .name = "Routescan",
        .url = "https://mainnet.flarescan.com",
    },
};

pub const flr_14 = Chain{
    .name = "Flare Mainnet",
    .chain = "FLR",
    .chain_id = 14,
    .network_id = 14,
    .short_name = "flr",
    .rpc = &flr_14_rpcs,
    .native_currency = .{
        .name = "Flare",
        .symbol = "FLR",
        .decimals = 18,
    },
    .info_url = "https://flare.network",
    .explorers = &flr_14_explorers,
};

pub const plato_53_rpcs = [_][]const u8{
    "https://api-mainnet.plato.xyz",
};

pub const plato_53_explorers = [_]Explorer{
    .{
        .name = "Plato Mainnet Explorer",
        .url = "https://app.plato.xyz/explorer",
    },
};

pub const plato_53 = Chain{
    .name = "Plato Mainnet",
    .chain = "Plato",
    .chain_id = 53,
    .network_id = 53,
    .short_name = "plato",
    .rpc = &plato_53_rpcs,
    .native_currency = .{
        .name = "Plato USDC",
        .symbol = "USDC",
        .decimals = 6,
    },
    .info_url = null,
    .explorers = &plato_53_explorers,
};

pub const plato_62_rpcs = [_][]const u8{
    "https://api-testnet.plato.xyz",
};

pub const plato_62_explorers = [_]Explorer{
    .{
        .name = "Plato Testnet Explorer",
        .url = "https://app.plato.xyz/explorer",
    },
};

pub const plato_62 = Chain{
    .name = "Plato Testnet",
    .chain = "Plato",
    .chain_id = 62,
    .network_id = 62,
    .short_name = "plato",
    .rpc = &plato_62_rpcs,
    .native_currency = .{
        .name = "Plato USDC",
        .symbol = "USDC",
        .decimals = 6,
    },
    .info_url = null,
    .explorers = &plato_62_explorers,
};

pub const amzg_65_rpcs = [_][]const u8{
    "https://rpc.amz1.com.br",
};

pub const amzg_65_explorers = [_]Explorer{
    .{
        .name = "AMZ Scan",
        .url = "https://amzexplorer.com",
    },
};

pub const amzg_65 = Chain{
    .name = "Amazonic Blockchain",
    .chain = "AMZG",
    .chain_id = 65,
    .network_id = 65,
    .short_name = "amzg",
    .rpc = &amzg_65_rpcs,
    .native_currency = .{
        .name = "Amazonic Green",
        .symbol = "AMZG",
        .decimals = 18,
    },
    .info_url = "https://amazonicone.com.br",
    .explorers = &amzg_65_explorers,
};

pub const plato_71_rpcs = [_][]const u8{
    "https://api-devnet.plato.xyz",
};

pub const plato_71_explorers = [_]Explorer{
    .{
        .name = "Plato Devnet Explorer",
        .url = "https://dev.plato.xyz/explorer",
    },
};

pub const plato_71 = Chain{
    .name = "Plato Devnet",
    .chain = "Plato",
    .chain_id = 71,
    .network_id = 71,
    .short_name = "plato",
    .rpc = &plato_71_rpcs,
    .native_currency = .{
        .name = "Plato USDC",
        .symbol = "USDC",
        .decimals = 6,
    },
    .info_url = null,
    .explorers = &plato_71_explorers,
};

pub const shibariumecosystem_109_rpcs = [_][]const u8{
    "https://rpc.shibarium.shib.io",
    "https://rpc.shibrpc.com",
    "https://shib.nownodes.io",
};

pub const shibariumecosystem_109_explorers = [_]Explorer{
    .{
        .name = "shibariumscan",
        .url = "https://shibariumscan.io",
    },
};

pub const shibariumecosystem_109 = Chain{
    .name = "Shibarium",
    .chain = "Shibarium",
    .chain_id = 109,
    .network_id = 109,
    .short_name = "shibariumecosystem",
    .rpc = &shibariumecosystem_109_rpcs,
    .native_currency = .{
        .name = "BONE Shibarium",
        .symbol = "BONE",
        .decimals = 18,
    },
    .info_url = "https://shibariumecosystem.com",
    .explorers = &shibariumecosystem_109_explorers,
};

pub const monad_143_rpcs = [_][]const u8{
    "https://rpc.monad.xyz",
    "https://rpc1.monad.xyz",
    "https://rpc2.monad.xyz",
    "https://rpc3.monad.xyz",
    "https://rpc4.monad.xyz",
    "https://rpc-mainnet.monadinfra.com",
    "https://monad.rpc.blxrbdn.com",
};

pub const monad_143_explorers = [_]Explorer{
    .{
        .name = "Monad Vision",
        .url = "https://monadvision.com",
    },
    .{
        .name = "Monadscan",
        .url = "https://monadscan.com",
    },
    .{
        .name = "Valopers",
        .url = "https://monad.valopers.com",
    },
};

pub const monad_143 = Chain{
    .name = "Monad",
    .chain = "MON",
    .chain_id = 143,
    .network_id = 143,
    .short_name = "monad",
    .rpc = &monad_143_rpcs,
    .native_currency = .{
        .name = "Monad",
        .symbol = "MON",
        .decimals = 18,
    },
    .info_url = "https://monad.xyz",
    .explorers = &monad_143_explorers,
};

pub const jito149_149_rpcs = [_][]const u8{
    "https://rpc.flowpe.io",
};

pub const jito149_149_explorers = [_]Explorer{
    .{
        .name = "jito-explorer",
        .url = "https://explorer.flowpe.io",
    },
};

pub const jito149_149 = Chain{
    .name = "JITO Public Network",
    .chain = "JITO",
    .chain_id = 149,
    .network_id = 149,
    .short_name = "jito149",
    .rpc = &jito149_149_rpcs,
    .native_currency = .{
        .name = "JITO",
        .symbol = "JITO",
        .decimals = 18,
    },
    .info_url = "https://jito.flowpe.io",
    .explorers = &jito149_149_explorers,
};

pub const Farm_165_rpcs = [_][]const u8{
    "https://rpc.fmcscan.com",
};

pub const Farm_165_explorers = [_]Explorer{
    .{
        .name = "FMCScan",
        .url = "https://fmcscan.com",
    },
};

pub const Farm_165 = Chain{
    .name = "Farm Chain",
    .chain = "Farm Chain",
    .chain_id = 165,
    .network_id = 165,
    .short_name = "Farm",
    .rpc = &Farm_165_rpcs,
    .native_currency = .{
        .name = "Farm Coin",
        .symbol = "FMC",
        .decimals = 18,
    },
    .info_url = "https://fmcscan.com",
    .explorers = &Farm_165_explorers,
};

pub const nomina_166_rpcs = [_][]const u8{
    "https://mainnet.nomina.io",
};

pub const nomina_166_explorers = [_]Explorer{
    .{
        .name = "Nomina Explorer",
        .url = "https://nomscan.io/",
    },
};

pub const nomina_166 = Chain{
    .name = "Nomina Mainnet",
    .chain = "NOM",
    .chain_id = 166,
    .network_id = 166,
    .short_name = "nomina",
    .rpc = &nomina_166_rpcs,
    .native_currency = .{
        .name = "NOM",
        .symbol = "NOM",
        .decimals = 18,
    },
    .info_url = "https://www.nomina.io",
    .explorers = &nomina_166_explorers,
};

pub const watr_mainnet_192_rpcs = [_][]const u8{
    "https://rpc.watr.org/ext/bc/EypLFUSzC2wdbFJovYS3Af1E7ch1DJf7KxKoGR5QFPErxQkG1/rpc",
};

pub const watr_mainnet_192_explorers = [_]Explorer{
    .{
        .name = "Watr Explorer",
        .url = "https://explorer.watr.org",
    },
};

pub const watr_mainnet_192 = Chain{
    .name = "Watr Mainnet",
    .chain = "WATR",
    .chain_id = 192,
    .network_id = 192,
    .short_name = "watr-mainnet",
    .rpc = &watr_mainnet_192_rpcs,
    .native_currency = .{
        .name = "WAT",
        .symbol = "WAT",
        .decimals = 18,
    },
    .info_url = "https://www.watr.org",
    .explorers = &watr_mainnet_192_explorers,
};

pub const vc_testnet_206_rpcs = [_][]const u8{
    "https://testnet-rpc.vinuchain.org",
    "https://vinufoundation-rpc.com",
};

pub const vc_testnet_206_explorers = [_]Explorer{
    .{
        .name = "VinuExplorer Testnet",
        .url = "https://testnet.vinuexplorer.org",
    },
    .{
        .name = "VinuScan Testnet",
        .url = "https://testnet.vinuscan.com",
    },
};

pub const vc_testnet_206 = Chain{
    .name = "VinuChain Testnet",
    .chain = "VC",
    .chain_id = 206,
    .network_id = 206,
    .short_name = "vc-testnet",
    .rpc = &vc_testnet_206_rpcs,
    .native_currency = .{
        .name = "VinuChain",
        .symbol = "VC",
        .decimals = 18,
    },
    .info_url = "https://vinuchain.org",
    .explorers = &vc_testnet_206_explorers,
};

pub const vc_207_rpcs = [_][]const u8{
    "https://rpc.vinuchain.org",
    "https://vinuchain-rpc.com",
};

pub const vc_207_explorers = [_]Explorer{
    .{
        .name = "VinuExplorer",
        .url = "https://vinuexplorer.org",
    },
    .{
        .name = "VinuScan",
        .url = "https://mainnet.vinuscan.com",
    },
};

pub const vc_207 = Chain{
    .name = "VinuChain",
    .chain = "VC",
    .chain_id = 207,
    .network_id = 207,
    .short_name = "vc",
    .rpc = &vc_207_rpcs,
    .native_currency = .{
        .name = "VinuChain",
        .symbol = "VC",
        .decimals = 18,
    },
    .info_url = "https://vinuchain.org",
    .explorers = &vc_207_explorers,
};

pub const iopn_222_rpcs = [_][]const u8{
    "https://mainnet-rpc.iopn.tech",
    "https://mainnet-rpc2.iopn.tech",
    "https://mainnet-rpc3.iopn.tech",
};

pub const iopn_222_explorers = [_]Explorer{
    .{
        .name = "OPNScan",
        .url = "https://opnscan.io",
    },
};

pub const iopn_222 = Chain{
    .name = "OPN Chain Mainnet",
    .chain = "IOPN",
    .chain_id = 222,
    .network_id = 222,
    .short_name = "iopn",
    .rpc = &iopn_222_rpcs,
    .native_currency = .{
        .name = "IOPN",
        .symbol = "IOPN",
        .decimals = 18,
    },
    .info_url = "https://chain.iopn.io",
    .explorers = &iopn_222_explorers,
};

pub const tacchain_239_rpcs = [_][]const u8{
    "https://rpc.tac.build",
    "https://rpc.ankr.com/tac",
    "https://ws.rpc.tac.build",
};

pub const tacchain_239_explorers = [_]Explorer{
    .{
        .name = "TAC Explorer",
        .url = "https://explorer.tac.build",
    },
    .{
        .name = "Blockscout",
        .url = "https://tac.blockscout.com",
    },
};

pub const tacchain_239 = Chain{
    .name = "TAC Mainnet",
    .chain = "TAC",
    .chain_id = 239,
    .network_id = 239,
    .short_name = "tacchain",
    .rpc = &tacchain_239_rpcs,
    .native_currency = .{
        .name = "TAC",
        .symbol = "TAC",
        .decimals = 18,
    },
    .info_url = "https://tac.build/",
    .explorers = &tacchain_239_explorers,
};

pub const orbinum_270_rpcs = [_][]const u8{
    "https://rpc-1.orbinum.io",
    "https://rpc-2.orbinum.io",
};

pub const orbinum_270_explorers = [_]Explorer{
    .{
        .name = "Orbinum Privacy Explorer",
        .url = "https://explorer.orbinum.network",
    },
};

pub const orbinum_270 = Chain{
    .name = "Orbinum",
    .chain = "ORB",
    .chain_id = 270,
    .network_id = 270,
    .short_name = "orbinum",
    .rpc = &orbinum_270_rpcs,
    .native_currency = .{
        .name = "ORB",
        .symbol = "ORB",
        .decimals = 18,
    },
    .info_url = "https://www.orbinum.network",
    .explorers = &orbinum_270_explorers,
};

pub const drby_275_rpcs = [_][]const u8{
    "https://rpc.drilbyte.com",
};

pub const drby_275_explorers = [_]Explorer{
    .{
        .name = "DrilByte Explorer",
        .url = "https://explorer.drilbyte.com",
    },
};

pub const drby_275 = Chain{
    .name = "DrilByte Mainnet",
    .chain = "DRBY",
    .chain_id = 275,
    .network_id = 275,
    .short_name = "drby",
    .rpc = &drby_275_rpcs,
    .native_currency = .{
        .name = "DrilByte",
        .symbol = "DRBY",
        .decimals = 18,
    },
    .info_url = "https://drilbyte.com",
    .explorers = &drby_275_explorers,
};

pub const netx_287_rpcs = [_][]const u8{
    "https://rpc.netxscan.io",
};

pub const netx_287_explorers = [_]Explorer{
    .{
        .name = "NetXScan",
        .url = "https://netxscan.io",
    },
};

pub const netx_287 = Chain{
    .name = "NetX Mainnet",
    .chain = "NETX",
    .chain_id = 287,
    .network_id = 287,
    .short_name = "netx",
    .rpc = &netx_287_rpcs,
    .native_currency = .{
        .name = "NETX",
        .symbol = "NETX",
        .decimals = 18,
    },
    .info_url = "https://netxscan.io/",
    .explorers = &netx_287_explorers,
};

pub const hsp_292_292_rpcs = [_][]const u8{
    "http://rpc-292.champagnesphere.net/",
};

pub const hsp_292_292_explorers = [_]Explorer{
    .{
        .name = "HashSphere Explorer 292",
        .url = "http://explorer-292.champagnesphere.net",
    },
};

pub const hsp_292_292 = Chain{
    .name = "HashSphere Private Network 292",
    .chain = "HashSphere-292",
    .chain_id = 292,
    .network_id = 292,
    .short_name = "hsp-292",
    .rpc = &hsp_292_292_rpcs,
    .native_currency = .{
        .name = "hbar",
        .symbol = "HBAR",
        .decimals = 18,
    },
    .info_url = "https://hashgraph.com",
    .explorers = &hsp_292_292_explorers,
};

pub const goliath_327_rpcs = [_][]const u8{
    "https://rpc.goliath.net",
};

pub const goliath_327_explorers = [_]Explorer{
    .{
        .name = "Goliath Explorer",
        .url = "https://explorer.goliath.net",
    },
};

pub const goliath_327 = Chain{
    .name = "Goliath",
    .chain = "GOLIATH",
    .chain_id = 327,
    .network_id = 327,
    .short_name = "goliath",
    .rpc = &goliath_327_rpcs,
    .native_currency = .{
        .name = "XCN",
        .symbol = "XCN",
        .decimals = 18,
    },
    .info_url = "https://docs.goliath.net",
    .explorers = &goliath_327_explorers,
};

pub const virbicoin_329_rpcs = [_][]const u8{
    "https://rpc.digitalregion.jp",
};

pub const virbicoin_329_explorers = [_]Explorer{
    .{
        .name = "VirBiCoin Explorer",
        .url = "https://explorer.digitalregion.jp",
    },
};

pub const virbicoin_329 = Chain{
    .name = "VirBiCoin",
    .chain = "VBC",
    .chain_id = 329,
    .network_id = 329,
    .short_name = "virbicoin",
    .rpc = &virbicoin_329_rpcs,
    .native_currency = .{
        .name = "VBC",
        .symbol = "VBC",
        .decimals = 18,
    },
    .info_url = "https://vbc.digitalregion.jp",
    .explorers = &virbicoin_329_explorers,
};

pub const bourse_343_rpcs = [_][]const u8{
    "https://rpc.capitalexchange.com",
    "https://rpc.capitalexchange.digital",
};

pub const bourse_343_explorers = [_]Explorer{
    .{
        .name = "Capital Exchange | Digital",
        .url = "https://bourse.capitalexchange.com",
    },
};

pub const bourse_343 = Chain{
    .name = "Capital Exchange",
    .chain = "BOURSE",
    .chain_id = 343,
    .network_id = 343,
    .short_name = "bourse",
    .rpc = &bourse_343_rpcs,
    .native_currency = .{
        .name = "Bourse",
        .symbol = "BOURSE",
        .decimals = 18,
    },
    .info_url = "https://about.capitalexchange.com",
    .explorers = &bourse_343_explorers,
};

pub const kss_347_rpcs = [_][]const u8{
    "https://rpc-v1.kross.network",
};

pub const kss_347_explorers = [_]Explorer{
    .{
        .name = "Kross Network Explorer",
        .url = "https://explorer.kross.network",
    },
};

pub const kss_347 = Chain{
    .name = "Kross Network Mainnet",
    .chain = "KSS",
    .chain_id = 347,
    .network_id = 347,
    .short_name = "kss",
    .rpc = &kss_347_rpcs,
    .native_currency = .{
        .name = "Kross",
        .symbol = "KSS",
        .decimals = 18,
    },
    .info_url = "https://kross.network",
    .explorers = &kss_347_explorers,
};

pub const dnc_362_rpcs = [_][]const u8{
    "https://rpc.dancorescan.com",
};

pub const dnc_362_explorers = [_]Explorer{
    .{
        .name = "dancorescan",
        .url = "https://dancorescan.com",
    },
};

pub const dnc_362 = Chain{
    .name = "Dancore",
    .chain = "DNC",
    .chain_id = 362,
    .network_id = 362,
    .short_name = "dnc",
    .rpc = &dnc_362_rpcs,
    .native_currency = .{
        .name = "Dancore",
        .symbol = "DNC",
        .decimals = 18,
    },
    .info_url = "https://dancore.io",
    .explorers = &dnc_362_explorers,
};

pub const lnr_389_rpcs = [_][]const u8{
    "https://rpc.lunaro.network",
};

pub const lnr_389_explorers = [_]Explorer{
    .{
        .name = "LunaroScan",
        .url = "https://scan.lunaro.network",
    },
};

pub const lnr_389 = Chain{
    .name = "LunaroChain Mainnet",
    .chain = "LNR",
    .chain_id = 389,
    .network_id = 389,
    .short_name = "lnr",
    .rpc = &lnr_389_rpcs,
    .native_currency = .{
        .name = "Lunaro",
        .symbol = "LNR",
        .decimals = 18,
    },
    .info_url = "https://lunaro.network",
    .explorers = &lnr_389_explorers,
};

pub const actumic_402_rpcs = [_][]const u8{
    "https://scan.actumic.com/rpc",
};

pub const actumic_402_explorers = [_]Explorer{
    .{
        .name = "Actumic Explorer",
        .url = "https://scan.actumic.com",
    },
};

pub const actumic_402 = Chain{
    .name = "Actumic Mainnet",
    .chain = "actumic",
    .chain_id = 402,
    .network_id = 402,
    .short_name = "actumic",
    .rpc = &actumic_402_rpcs,
    .native_currency = .{
        .name = "USD Coin",
        .symbol = "USDC",
        .decimals = 6,
    },
    .info_url = "https://actumic.com",
    .explorers = &actumic_402_explorers,
};

pub const d_testnet_430_rpcs = [_][]const u8{
    "https://eth-testnet.platformd.io",
};

pub const d_testnet_430 = Chain{
    .name = "D Testnet",
    .chain = "Dchain",
    .chain_id = 430,
    .network_id = 430,
    .short_name = "d-testnet",
    .rpc = &d_testnet_430_rpcs,
    .native_currency = .{
        .name = "Dchain",
        .symbol = "DT",
        .decimals = 18,
    },
    .info_url = "https://platformd.io",
    .explorers = &.{},
};

pub const d_mainnet_433_rpcs = [_][]const u8{
    "https://eth.platformd.io",
};

pub const d_mainnet_433 = Chain{
    .name = "D Mainnet",
    .chain = "Dchain",
    .chain_id = 433,
    .network_id = 433,
    .short_name = "d-mainnet",
    .rpc = &d_mainnet_433_rpcs,
    .native_currency = .{
        .name = "Dchain",
        .symbol = "DT",
        .decimals = 18,
    },
    .info_url = "https://platformd.io",
    .explorers = &.{},
};

pub const areum_463_rpcs = [_][]const u8{
    "https://mainnet-rpc.areum.network",
    "https://mainnet-rpc2.areum.network",
    "https://mainnet-rpc3.areum.network",
    "https://mainnet-rpc4.areum.network",
    "https://mainnet-rpc5.areum.network",
};

pub const areum_463_explorers = [_]Explorer{
    .{
        .name = "Areum Explorer",
        .url = "https://explorer.areum.network",
    },
};

pub const areum_463 = Chain{
    .name = "Areum Mainnet",
    .chain = "AREUM",
    .chain_id = 463,
    .network_id = 463,
    .short_name = "areum",
    .rpc = &areum_463_rpcs,
    .native_currency = .{
        .name = "Areum",
        .symbol = "AREA",
        .decimals = 18,
    },
    .info_url = "https://areum.network",
    .explorers = &areum_463_explorers,
};

pub const campmainnet_484_rpcs = [_][]const u8{
    "https://rpc-mainnet.campnetwork.xyz/",
};

pub const campmainnet_484_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://camp.cloud.blockscout.com",
    },
};

pub const campmainnet_484 = Chain{
    .name = "Camp Network Mainnet",
    .chain = "CAMP",
    .chain_id = 484,
    .network_id = 484,
    .short_name = "campmainnet",
    .rpc = &campmainnet_484_rpcs,
    .native_currency = .{
        .name = "CAMP",
        .symbol = "CAMP",
        .decimals = 18,
    },
    .info_url = "https://docs.campnetwork.xyz",
    .explorers = &campmainnet_484_explorers,
};

pub const lcai_504_rpcs = [_][]const u8{
    "https://light-testnet-rpc.lightchain.ai",
};

pub const lcai_504_explorers = [_]Explorer{
    .{
        .name = "lightchain explorer",
        .url = "https://testnet.lightscan.app",
    },
};

pub const lcai_504 = Chain{
    .name = "LightchainAI Testnet",
    .chain = "LCAI",
    .chain_id = 504,
    .network_id = 504,
    .short_name = "lcai",
    .rpc = &lcai_504_rpcs,
    .native_currency = .{
        .name = "LightchainAI",
        .symbol = "LCAI",
        .decimals = 18,
    },
    .info_url = "https://lightchain.ai",
    .explorers = &lcai_504_explorers,
};

pub const doto_505_rpcs = [_][]const u8{
    "https://rpc.dotone.online",
};

pub const doto_505_explorers = [_]Explorer{
    .{
        .name = "dotscan",
        .url = "https://dotscan.one",
    },
};

pub const doto_505 = Chain{
    .name = "DotOne Smart Chain",
    .chain = "DOTO",
    .chain_id = 505,
    .network_id = 505,
    .short_name = "doto",
    .rpc = &doto_505_rpcs,
    .native_currency = .{
        .name = "Doto",
        .symbol = "DOTO",
        .decimals = 18,
    },
    .info_url = "https://dotone.online",
    .explorers = &doto_505_explorers,
};

pub const btb_509_rpcs = [_][]const u8{
    "https://btb-dataseed.btbchain.org",
};

pub const btb_509_explorers = [_]Explorer{
    .{
        .name = "BTB Chain Explorer",
        .url = "https://btb-explorer.btbchain.org",
    },
};

pub const btb_509 = Chain{
    .name = "BTB Chain Mainnet",
    .chain = "BTB",
    .chain_id = 509,
    .network_id = 509,
    .short_name = "btb",
    .rpc = &btb_509_rpcs,
    .native_currency = .{
        .name = "BitTap Chain Token",
        .symbol = "BTB",
        .decimals = 18,
    },
    .info_url = "https://www.btbchain.org/",
    .explorers = &btb_509_explorers,
};

pub const syndicate_510_rpcs = [_][]const u8{
    "https://rpc.syndicate.io",
};

pub const syndicate_510_explorers = [_]Explorer{
    .{
        .name = "Syndicate Explorer",
        .url = "https://explorer.syndicate.io",
    },
};

pub const syndicate_510 = Chain{
    .name = "Syndicate Mainnet",
    .chain = "Syndicate",
    .chain_id = 510,
    .network_id = 510,
    .short_name = "syndicate",
    .rpc = &syndicate_510_rpcs,
    .native_currency = .{
        .name = "Syndicate",
        .symbol = "SYND",
        .decimals = 18,
    },
    .info_url = "https://syndicate.io",
    .explorers = &syndicate_510_explorers,
};

pub const fyro_511_rpcs = [_][]const u8{
    "https://rpc.fyrochain.org",
};

pub const fyro_511_explorers = [_]Explorer{
    .{
        .name = "FyroScan",
        .url = "https://fyrochain.org",
    },
};

pub const fyro_511 = Chain{
    .name = "FyroChain Mainnet",
    .chain = "FYRO",
    .chain_id = 511,
    .network_id = 511,
    .short_name = "fyro",
    .rpc = &fyro_511_rpcs,
    .native_currency = .{
        .name = "Fyro",
        .symbol = "FYRO",
        .decimals = 18,
    },
    .info_url = "https://fyrochain.org",
    .explorers = &fyro_511_explorers,
};

pub const mawari_576_rpcs = [_][]const u8{
    "https://rpc.testnet.mawari.net/http",
};

pub const mawari_576_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://explorer.testnet.mawari.net/",
    },
};

pub const mawari_576 = Chain{
    .name = "Mawari Testnet",
    .chain = "MAWARI",
    .chain_id = 576,
    .network_id = 576,
    .short_name = "mawari",
    .rpc = &mawari_576_rpcs,
    .native_currency = .{
        .name = "Mawari",
        .symbol = "MAWARI",
        .decimals = 18,
    },
    .info_url = "https://testnet.mawari.net",
    .explorers = &mawari_576_explorers,
};

pub const capy_586_rpcs = [_][]const u8{
    "https://fraa-flashbox-4646-rpc.a.stagenet.tanssi.network",
};

pub const capy_586_explorers = [_]Explorer{
    .{
        .name = "Capy Explorer",
        .url = "https://explorer.marketcapy.xyz/",
    },
};

pub const capy_586 = Chain{
    .name = "MarketCapy TestNet 1",
    .chain = "CAPY",
    .chain_id = 586,
    .network_id = 586,
    .short_name = "capy",
    .rpc = &capy_586_rpcs,
    .native_currency = .{
        .name = "CAPY",
        .symbol = "CAPY",
        .decimals = 18,
    },
    .info_url = "https://marketcapy.xyz/",
    .explorers = &capy_586_explorers,
};

pub const netx_testnet_587_rpcs = [_][]const u8{
    "https://testnetrpc.netxscan.io",
};

pub const netx_testnet_587_explorers = [_]Explorer{
    .{
        .name = "NetXScan Testnet",
        .url = "https://testnet.netxscan.io",
    },
};

pub const netx_testnet_587 = Chain{
    .name = "NetX Testnet",
    .chain = "NETX",
    .chain_id = 587,
    .network_id = 587,
    .short_name = "netx-testnet",
    .rpc = &netx_testnet_587_rpcs,
    .native_currency = .{
        .name = "NETX",
        .symbol = "NETX",
        .decimals = 18,
    },
    .info_url = "https://netx.world/",
    .explorers = &netx_testnet_587_explorers,
};

pub const battlechain_testnet_627_rpcs = [_][]const u8{
    "https://testnet.battlechain.com",
};

pub const battlechain_testnet_627_explorers = [_]Explorer{
    .{
        .name = "BattleChain Testnet Explorer",
        .url = "https://explorer.testnet.battlechain.com",
    },
};

pub const battlechain_testnet_627 = Chain{
    .name = "BattleChain Testnet",
    .chain = "BattleChain",
    .chain_id = 627,
    .network_id = 627,
    .short_name = "battlechain-testnet",
    .rpc = &battlechain_testnet_627_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://battlechain.com",
    .explorers = &battlechain_testnet_627_explorers,
};

pub const bot_677_rpcs = [_][]const u8{
    "https://rpc.botchain.ai",
};

pub const bot_677_explorers = [_]Explorer{
    .{
        .name = "botscan",
        .url = "https://scan.botchain.ai/",
    },
};

pub const bot_677 = Chain{
    .name = "BOT Chain Mainnet",
    .chain = "BOT",
    .chain_id = 677,
    .network_id = 677,
    .short_name = "bot",
    .rpc = &bot_677_rpcs,
    .native_currency = .{
        .name = "BOT",
        .symbol = "BOT",
        .decimals = 18,
    },
    .info_url = "https://www.botchain.ai/",
    .explorers = &bot_677_explorers,
};

pub const jasmy_681_rpcs = [_][]const u8{
    "https://jasmy-chain-testnet.alt.technology",
};

pub const jasmy_681_explorers = [_]Explorer{
    .{
        .name = "JASMY Chain Testnet Explorer",
        .url = "https://jasmy-chain-testnet-explorer.alt.technology",
    },
};

pub const jasmy_681 = Chain{
    .name = "JASMY Chain Testnet",
    .chain = "JASMY",
    .chain_id = 681,
    .network_id = 681,
    .short_name = "jasmy",
    .rpc = &jasmy_681_rpcs,
    .native_currency = .{
        .name = "JasmyCoin",
        .symbol = "JASMY",
        .decimals = 18,
    },
    .info_url = "https://www.jasmy.co.jp/en.html",
    .explorers = &jasmy_681_explorers,
};

pub const uniocean_684_rpcs = [_][]const u8{
    "https://rpc1.testnet.uniocean.network",
};

pub const uniocean_684_explorers = [_]Explorer{
    .{
        .name = "Uniocean Explorer",
        .url = "https://explorer.testnet.uniocean.network",
    },
};

pub const uniocean_684 = Chain{
    .name = "Uniocean Testnet",
    .chain = "Uniocean",
    .chain_id = 684,
    .network_id = 684,
    .short_name = "uniocean",
    .rpc = &uniocean_684_rpcs,
    .native_currency = .{
        .name = "OCEANX",
        .symbol = "OCEANX",
        .decimals = 18,
    },
    .info_url = "https://www.uniocean.network",
    .explorers = &uniocean_684_explorers,
};

pub const lxon_724_rpcs = [_][]const u8{
    "https://rpc.lxon.in",
};

pub const lxon_724_explorers = [_]Explorer{
    .{
        .name = "LXON Explorer",
        .url = "https://explorer.lxon.in",
    },
};

pub const lxon_724 = Chain{
    .name = "LXON Mainnet",
    .chain = "LXON",
    .chain_id = 724,
    .network_id = 724,
    .short_name = "lxon",
    .rpc = &lxon_724_rpcs,
    .native_currency = .{
        .name = "LXON",
        .symbol = "XON",
        .decimals = 18,
    },
    .info_url = "https://www.lxon.in",
    .explorers = &lxon_724_explorers,
};

pub const capx_testnet_756_rpcs = [_][]const u8{
    "https://capx-testnet-c1.rpc.caldera.xyz/http",
};

pub const capx_testnet_756_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://testnet.capxscan.com",
    },
};

pub const capx_testnet_756 = Chain{
    .name = "CAPX Testnet",
    .chain = "CAPX",
    .chain_id = 756,
    .network_id = 756,
    .short_name = "capx-testnet",
    .rpc = &capx_testnet_756_rpcs,
    .native_currency = .{
        .name = "CAPX",
        .symbol = "CAPX",
        .decimals = 18,
    },
    .info_url = "https://www.capx.ai/",
    .explorers = &capx_testnet_756_explorers,
};

pub const capx_757_rpcs = [_][]const u8{
    "https://capx-mainnet.calderachain.xyz/http",
};

pub const capx_757_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://capxscan.com",
    },
};

pub const capx_757 = Chain{
    .name = "CAPX",
    .chain = "CAPX",
    .chain_id = 757,
    .network_id = 757,
    .short_name = "capx",
    .rpc = &capx_757_rpcs,
    .native_currency = .{
        .name = "CAPX",
        .symbol = "CAPX",
        .decimals = 18,
    },
    .info_url = "https://www.capx.ai/",
    .explorers = &capx_757_explorers,
};

pub const qrdx_762_rpcs = [_][]const u8{
    "https://rpc.qrdx.org",
};

pub const qrdx_762_explorers = [_]Explorer{
    .{
        .name = "qrdx-explorer",
        .url = "https://explorer.qrdx.org",
    },
};

pub const qrdx_762 = Chain{
    .name = "QRDX Mainnet",
    .chain = "QRDX",
    .chain_id = 762,
    .network_id = 762,
    .short_name = "qrdx",
    .rpc = &qrdx_762_rpcs,
    .native_currency = .{
        .name = "QRDX",
        .symbol = "QRDX",
        .decimals = 18,
    },
    .info_url = "https://qrdx.org",
    .explorers = &qrdx_762_explorers,
};

pub const qelt_770_rpcs = [_][]const u8{
    "https://mainnet.qelt.ai",
    "https://mainnet2.qelt.ai",
    "https://mainnet3.qelt.ai",
    "https://mainnet4.qelt.ai",
    "https://mainnet5.qelt.ai",
    "https://archivem.qelt.ai",
};

pub const qelt_770_explorers = [_]Explorer{
    .{
        .name = "QELTScan",
        .url = "https://qeltscan.ai",
    },
};

pub const qelt_770 = Chain{
    .name = "QELT Mainnet",
    .chain = "QELT",
    .chain_id = 770,
    .network_id = 770,
    .short_name = "qelt",
    .rpc = &qelt_770_rpcs,
    .native_currency = .{
        .name = "QELT",
        .symbol = "QELT",
        .decimals = 18,
    },
    .info_url = "https://qelt.ai",
    .explorers = &qelt_770_explorers,
};

pub const qelt_testnet_771_rpcs = [_][]const u8{
    "https://testnet.qelt.ai",
    "https://archive.qelt.ai",
};

pub const qelt_testnet_771_explorers = [_]Explorer{
    .{
        .name = "QELTScan Testnet",
        .url = "https://testnet.qeltscan.ai",
    },
};

pub const qelt_testnet_771 = Chain{
    .name = "QELT Testnet",
    .chain = "QELT",
    .chain_id = 771,
    .network_id = 771,
    .short_name = "qelt-testnet",
    .rpc = &qelt_testnet_771_rpcs,
    .native_currency = .{
        .name = "QELT",
        .symbol = "QELT",
        .decimals = 18,
    },
    .info_url = "https://qelt.ai",
    .explorers = &qelt_testnet_771_explorers,
};

pub const ritual_784_rpcs = [_][]const u8{
    "https://rpc.ritualfoundation.org",
};

pub const ritual_784_explorers = [_]Explorer{
    .{
        .name = "Ritual Network Explorer",
        .url = "https://explorer.ritualfoundation.org",
    },
};

pub const ritual_784 = Chain{
    .name = "Ritual Network",
    .chain = "Ritual Network",
    .chain_id = 784,
    .network_id = 784,
    .short_name = "ritual",
    .rpc = &ritual_784_rpcs,
    .native_currency = .{
        .name = "Ritual",
        .symbol = "RITUAL",
        .decimals = 18,
    },
    .info_url = "https://docs.ritualfoundation.org",
    .explorers = &ritual_784_explorers,
};

pub const binaryholdings_mainnet_836_rpcs = [_][]const u8{
    "https://rpc-binaryholdings.cogitus.io/ext/bc/J3MYb3rDARLmB7FrRybinyjKqVTqmerbCr9bAXDatrSaHiLxQ/rpc",
};

pub const binaryholdings_mainnet_836_explorers = [_]Explorer{
    .{
        .name = "Binary Explorer",
        .url = "https://explorer-binaryholdings.cogitus.io",
    },
};

pub const binaryholdings_mainnet_836 = Chain{
    .name = "BinaryHoldings Mainnet",
    .chain = "BnryMainnet",
    .chain_id = 836,
    .network_id = 836,
    .short_name = "binaryholdings-mainnet",
    .rpc = &binaryholdings_mainnet_836_rpcs,
    .native_currency = .{
        .name = "BNRY",
        .symbol = "BNRY",
        .decimals = 18,
    },
    .info_url = "https://www.thebinaryholdings.com/",
    .explorers = &binaryholdings_mainnet_836_explorers,
};

pub const AMN_870_rpcs = [_][]const u8{
    "https://auto-evm.mainnet.autonomys.xyz/ws",
};

pub const AMN_870 = Chain{
    .name = "Autonomys Mainnet",
    .chain = "autonomys-mainnet",
    .chain_id = 870,
    .network_id = 870,
    .short_name = "AMN",
    .rpc = &AMN_870_rpcs,
    .native_currency = .{
        .name = "AI3",
        .symbol = "AI3",
        .decimals = 18,
    },
    .info_url = "https://www.autonomys.xyz",
    .explorers = &.{},
};

pub const mars_890_rpcs = [_][]const u8{
    "https://rpcs.marschain.net/",
};

pub const mars_890_explorers = [_]Explorer{
    .{
        .name = "Mars Explorer",
        .url = "https://explorer.marschain.net",
    },
};

pub const mars_890 = Chain{
    .name = "Marschain",
    .chain = "MARS",
    .chain_id = 890,
    .network_id = 890,
    .short_name = "mars",
    .rpc = &mars_890_rpcs,
    .native_currency = .{
        .name = "Mars",
        .symbol = "MARSCHAIN",
        .decimals = 18,
    },
    .info_url = "https://marschain.net",
    .explorers = &mars_890_explorers,
};

pub const wbtc_892_rpcs = [_][]const u8{
    "https://rpc1.advanceblockchain.io",
    "https://rpc2.advanceblockchain.io",
};

pub const wbtc_892_explorers = [_]Explorer{
    .{
        .name = "advanceblockchainexplorer",
        .url = "https://explorer.advanceblockchain.io/",
    },
};

pub const wbtc_892 = Chain{
    .name = "Advance Blockchain Mainnet",
    .chain = "ABC",
    .chain_id = 892,
    .network_id = 892,
    .short_name = "wbtc",
    .rpc = &wbtc_892_rpcs,
    .native_currency = .{
        .name = "White Bitcoin",
        .symbol = "WBTC",
        .decimals = 18,
    },
    .info_url = "https://advanceblockchain.io",
    .explorers = &wbtc_892_explorers,
};

pub const fene_920_rpcs = [_][]const u8{
    "https://rpc.fene.app",
};

pub const fene_920_explorers = [_]Explorer{
    .{
        .name = "Fenscan Testnet",
        .url = "https://explorer.fene.app",
    },
};

pub const fene_920 = Chain{
    .name = "Fenine Testnet",
    .chain = "Fenine",
    .chain_id = 920,
    .network_id = 920,
    .short_name = "fene",
    .rpc = &fene_920_rpcs,
    .native_currency = .{
        .name = "Fenine",
        .symbol = "FENE",
        .decimals = 18,
    },
    .info_url = "https://fene.app",
    .explorers = &fene_920_explorers,
};

pub const zel_935_rpcs = [_][]const u8{
    "https://eth-rpc.node1.zano.org",
};

pub const zel_935 = Chain{
    .name = "Zano Execution Layer",
    .chain = "ZEL",
    .chain_id = 935,
    .network_id = 935,
    .short_name = "zel",
    .rpc = &zel_935_rpcs,
    .native_currency = .{
        .name = "Zel",
        .symbol = "ZEL",
        .decimals = 18,
    },
    .info_url = "https://zano.com",
    .explorers = &.{},
};

pub const iopn_984_rpcs = [_][]const u8{
    "https://testnet-rpc.iopn.tech",
    "https://testnet-rpc2.iopn.tech",
};

pub const iopn_984_explorers = [_]Explorer{
    .{
        .name = "OPNScan Testnet",
        .url = "https://testnet.iopn.tech",
    },
};

pub const iopn_984 = Chain{
    .name = "OPN Chain Testnet",
    .chain = "IOPN",
    .chain_id = 984,
    .network_id = 984,
    .short_name = "iopn",
    .rpc = &iopn_984_rpcs,
    .native_currency = .{
        .name = "IOPN",
        .symbol = "IOPN",
        .decimals = 18,
    },
    .info_url = "https://chain.iopn.io",
    .explorers = &iopn_984_explorers,
};

pub const stable_988_rpcs = [_][]const u8{
    "https://rpc.stable.xyz",
};

pub const stable_988_explorers = [_]Explorer{
    .{
        .name = "stablescan",
        .url = "https://stablescan.xyz",
    },
};

pub const stable_988 = Chain{
    .name = "Stable Mainnet",
    .chain = "stable",
    .chain_id = 988,
    .network_id = 988,
    .short_name = "stable",
    .rpc = &stable_988_rpcs,
    .native_currency = .{
        .name = "USDT0",
        .symbol = "USDT0",
        .decimals = 18,
    },
    .info_url = "https://stable.xyz",
    .explorers = &stable_988_explorers,
};

pub const hyper_evm_999_rpcs = [_][]const u8{
    "https://rpc.hyperliquid.xyz/evm",
    "https://rpc.hypurrscan.io",
    "https://hyperliquid-json-rpc.stakely.io",
    "https://hyperliquid.drpc.org",
    "https://rpc.hyperlend.finance",
    "https://hyperliquid.api.onfinality.io/evm/public",
    "https://hyperliquid.rpc.blxrbdn.com",
};

pub const hyper_evm_999_explorers = [_]Explorer{
    .{
        .name = "HyperEVMScan",
        .url = "https://hyperevmscan.io/",
    },
};

pub const hyper_evm_999 = Chain{
    .name = "HyperEVM",
    .chain = "HYPE",
    .chain_id = 999,
    .network_id = 999,
    .short_name = "hyper_evm",
    .rpc = &hyper_evm_999_rpcs,
    .native_currency = .{
        .name = "HYPE",
        .symbol = "HYPE",
        .decimals = 18,
    },
    .info_url = "https://hyperfoundation.org/",
    .explorers = &hyper_evm_999_explorers,
};

pub const nura_1020_rpcs = [_][]const u8{
    "https://rpc.nurachain.net",
};

pub const nura_1020_explorers = [_]Explorer{
    .{
        .name = "Nura Explorer",
        .url = "https://explorer.nurachain.net",
    },
};

pub const nura_1020 = Chain{
    .name = "Nura Chain",
    .chain = "Nura",
    .chain_id = 1020,
    .network_id = 1020,
    .short_name = "nura",
    .rpc = &nura_1020_rpcs,
    .native_currency = .{
        .name = "Nura Coin",
        .symbol = "NURA",
        .decimals = 18,
    },
    .info_url = "https://nurachain.net",
    .explorers = &nura_1020_explorers,
};

pub const bdag_1043_rpcs = [_][]const u8{
    "https://relay.awakening.bdagscan.com",
};

pub const bdag_1043_explorers = [_]Explorer{
    .{
        .name = "BlockDAG Explorer",
        .url = "https://awakening.bdagscan.com/",
    },
};

pub const bdag_1043 = Chain{
    .name = "Awakening Testnet",
    .chain = "BDAG",
    .chain_id = 1043,
    .network_id = 1043,
    .short_name = "bdag",
    .rpc = &bdag_1043_rpcs,
    .native_currency = .{
        .name = "BlockDAG",
        .symbol = "BDAG",
        .decimals = 18,
    },
    .info_url = "https://www.blockdag.network/",
    .explorers = &bdag_1043_explorers,
};

pub const anta_1082_rpcs = [_][]const u8{
    "https://rpc-anant.ananntascan.io",
};

pub const anta_1082_explorers = [_]Explorer{
    .{
        .name = "Anannta Explorer",
        .url = "https://ananntascan.io",
    },
};

pub const anta_1082 = Chain{
    .name = "Anannta",
    .chain = "ANANT",
    .chain_id = 1082,
    .network_id = 1082,
    .short_name = "anta",
    .rpc = &anta_1082_rpcs,
    .native_currency = .{
        .name = "Anannta",
        .symbol = "ANANT",
        .decimals = 18,
    },
    .info_url = "https://anannta.io",
    .explorers = &anta_1082_explorers,
};

pub const Xenea_1096_rpcs = [_][]const u8{
    "https://rpc-ubusuna.xeneascan.com",
};

pub const Xenea_1096_explorers = [_]Explorer{
    .{
        .name = "Xenea Ubusuna Testnet Explorer",
        .url = "https://ubusuna.xeneascan.com",
    },
};

pub const Xenea_1096 = Chain{
    .name = "Xenea Ubusuna Testnet",
    .chain = "TXENE",
    .chain_id = 1096,
    .network_id = 1096,
    .short_name = "Xenea",
    .rpc = &Xenea_1096_rpcs,
    .native_currency = .{
        .name = "Xenea Ubusuna Testnet Token",
        .symbol = "TXENE",
        .decimals = 18,
    },
    .info_url = "https://xenea.io",
    .explorers = &Xenea_1096_explorers,
};

pub const realchain_1098_rpcs = [_][]const u8{
    "https://rpc.realchain.io",
};

pub const realchain_1098_explorers = [_]Explorer{
    .{
        .name = "RealChain explorer",
        .url = "https://scan.realchain.io/",
    },
};

pub const realchain_1098 = Chain{
    .name = "RealChain Mainnet",
    .chain = "RealChain",
    .chain_id = 1098,
    .network_id = 1098,
    .short_name = "realchain",
    .rpc = &realchain_1098_rpcs,
    .native_currency = .{
        .name = "RealCoin",
        .symbol = "R",
        .decimals = 18,
    },
    .info_url = "https://www.realchain.io/",
    .explorers = &realchain_1098_explorers,
};

pub const grx_1110_rpcs = [_][]const u8{
    "https://rpc.grxchain.io",
};

pub const grx_1110_explorers = [_]Explorer{
    .{
        .name = "grxscan",
        .url = "https://grxscan.io",
    },
};

pub const grx_1110 = Chain{
    .name = "GRX Mainnet",
    .chain = "GRX",
    .chain_id = 1110,
    .network_id = 1110,
    .short_name = "grx",
    .rpc = &grx_1110_rpcs,
    .native_currency = .{
        .name = "GRX",
        .symbol = "GRX",
        .decimals = 18,
    },
    .info_url = "https://docs.grxchain.io",
    .explorers = &grx_1110_explorers,
};

pub const ecm_1124_rpcs = [_][]const u8{
    "https://rpc.testnet.ecmscan.io",
};

pub const ecm_1124_explorers = [_]Explorer{
    .{
        .name = "ecmscan",
        .url = "https://explorer.testnet.ecmscan.io/",
    },
};

pub const ecm_1124 = Chain{
    .name = "ECM Chain Testnet",
    .chain = "ECM Chain",
    .chain_id = 1124,
    .network_id = 1124,
    .short_name = "ecm",
    .rpc = &ecm_1124_rpcs,
    .native_currency = .{
        .name = "ECM",
        .symbol = "ECM",
        .decimals = 18,
    },
    .info_url = "https://ecmcoin.com",
    .explorers = &ecm_1124_explorers,
};

pub const taker_1125_rpcs = [_][]const u8{
    "https://rpc-mainnet.taker.xyz",
};

pub const taker_1125_explorers = [_]Explorer{
    .{
        .name = "TakerScan",
        .url = "https://explorer.taker.xyz",
    },
};

pub const taker_1125 = Chain{
    .name = "Taker Chain Mainnet",
    .chain = "Taker",
    .chain_id = 1125,
    .network_id = 1125,
    .short_name = "taker",
    .rpc = &taker_1125_rpcs,
    .native_currency = .{
        .name = "Taker",
        .symbol = "TAKER",
        .decimals = 18,
    },
    .info_url = "https://www.taker.xyz",
    .explorers = &taker_1125_explorers,
};

pub const qry_1129_rpcs = [_][]const u8{
    "https://rpc.testnet.quarrychain.network",
};

pub const qry_1129_explorers = [_]Explorer{
    .{
        .name = "QuarryScan",
        .url = "https://explorer.testnet.quarrychain.network",
    },
};

pub const qry_1129 = Chain{
    .name = "QuarryChain Testnet",
    .chain = "QuarryChain",
    .chain_id = 1129,
    .network_id = 1129,
    .short_name = "qry",
    .rpc = &qry_1129_rpcs,
    .native_currency = .{
        .name = "Quarry",
        .symbol = "QRY",
        .decimals = 18,
    },
    .info_url = "https://quarrychain.network",
    .explorers = &qry_1129_explorers,
};

pub const ion_1143_rpcs = [_][]const u8{
    "https://ion.qaflanti.ir/api/rpc",
};

pub const ion_1143 = Chain{
    .name = "ION Network",
    .chain = "ION",
    .chain_id = 1143,
    .network_id = 1143,
    .short_name = "ion",
    .rpc = &ion_1143_rpcs,
    .native_currency = .{
        .name = "ION",
        .symbol = "ION",
        .decimals = 4,
    },
    .info_url = "https://ion.qaflanti.ir",
    .explorers = &.{},
};

pub const intuition_mainnet_1155_rpcs = [_][]const u8{
    "https://intuition.calderachain.xyz/http",
    "https://rpc.intuition.systems",
};

pub const intuition_mainnet_1155_explorers = [_]Explorer{
    .{
        .name = "Intuition Explorer (Mainnet)",
        .url = "https://intuition.calderaexplorer.xyz",
    },
    .{
        .name = "Intuition Explorer (Mainnet)",
        .url = "https://explorer.intuition.systems",
    },
};

pub const intuition_mainnet_1155 = Chain{
    .name = "Intuition Mainnet",
    .chain = "INTUITION",
    .chain_id = 1155,
    .network_id = 1155,
    .short_name = "intuition-mainnet",
    .rpc = &intuition_mainnet_1155_rpcs,
    .native_currency = .{
        .name = "Intuition",
        .symbol = "TRUST",
        .decimals = 18,
    },
    .info_url = "https://intuition.systems",
    .explorers = &intuition_mainnet_1155_explorers,
};

pub const joa_1191_rpcs = [_][]const u8{
    "https://rpc.joachain.live",
};

pub const joa_1191_explorers = [_]Explorer{
    .{
        .name = "JOA Explorer",
        .url = "https://scan.joachain.live",
    },
};

pub const joa_1191 = Chain{
    .name = "JOA Chain",
    .chain = "JOA",
    .chain_id = 1191,
    .network_id = 1191,
    .short_name = "joa",
    .rpc = &joa_1191_rpcs,
    .native_currency = .{
        .name = "JOA Coin",
        .symbol = "JOA",
        .decimals = 18,
    },
    .info_url = "https://joachain.live",
    .explorers = &joa_1191_explorers,
};

pub const bmc_1199_rpcs = [_][]const u8{
    "https://mainnet-rpc.bmcscan.io",
};

pub const bmc_1199_explorers = [_]Explorer{
    .{
        .name = "BMCScan",
        .url = "https://bmcscan.io",
    },
};

pub const bmc_1199 = Chain{
    .name = "BMC Chain",
    .chain = "BMC",
    .chain_id = 1199,
    .network_id = 1199,
    .short_name = "bmc",
    .rpc = &bmc_1199_rpcs,
    .native_currency = .{
        .name = "Bitmeta Coin",
        .symbol = "BMC",
        .decimals = 18,
    },
    .info_url = "https://bmcscan.io",
    .explorers = &bmc_1199_explorers,
};

pub const fitochain_1233_rpcs = [_][]const u8{
    "https://rpc.fitochain.com",
};

pub const fitochain_1233_explorers = [_]Explorer{
    .{
        .name = "Fitochain Explorer",
        .url = "https://explorer.fitochain.com",
    },
};

pub const fitochain_1233 = Chain{
    .name = "Fitochain",
    .chain = "FITO",
    .chain_id = 1233,
    .network_id = 1233,
    .short_name = "fitochain",
    .rpc = &fitochain_1233_rpcs,
    .native_currency = .{
        .name = "FITO",
        .symbol = "FITO",
        .decimals = 18,
    },
    .info_url = "https://fitochain.com",
    .explorers = &fitochain_1233_explorers,
};

pub const onn_1330_rpcs = [_][]const u8{
    "https://mainnet.onnscan.org",
};

pub const onn_1330_explorers = [_]Explorer{
    .{
        .name = "ONNChain Explorer",
        .url = "https://onnscan.com",
    },
};

pub const onn_1330 = Chain{
    .name = "ONNChain",
    .chain = "ONN",
    .chain_id = 1330,
    .network_id = 1330,
    .short_name = "onn",
    .rpc = &onn_1330_rpcs,
    .native_currency = .{
        .name = "ONN",
        .symbol = "ONN",
        .decimals = 18,
    },
    .info_url = "https://onnscan.com",
    .explorers = &onn_1330_explorers,
};

pub const bie_1342_rpcs = [_][]const u8{
    "https://rpc.bie.ai",
    "https://api.bie.ai",
};

pub const bie_1342_explorers = [_]Explorer{
    .{
        .name = "BIE Explorer",
        .url = "https://app.bie.ai/explorer",
    },
};

pub const bie_1342 = Chain{
    .name = "BIE",
    .chain = "BIE",
    .chain_id = 1342,
    .network_id = 1342,
    .short_name = "bie",
    .rpc = &bie_1342_rpcs,
    .native_currency = .{
        .name = "BIE",
        .symbol = "BIE",
        .decimals = 18,
    },
    .info_url = "https://bie.ai",
    .explorers = &bie_1342_explorers,
};

pub const midx_1394_rpcs = [_][]const u8{
    "https://mainnet.midpointcross.com",
};

pub const midx_1394_explorers = [_]Explorer{
    .{
        .name = "Midpoint Cross",
        .url = "https://transactions.midpointcross.com",
    },
};

pub const midx_1394 = Chain{
    .name = "Midpoint Cross",
    .chain = "MIDX",
    .chain_id = 1394,
    .network_id = 1394,
    .short_name = "midx",
    .rpc = &midx_1394_rpcs,
    .native_currency = .{
        .name = "Midpoint Cross",
        .symbol = "MIDX",
        .decimals = 18,
    },
    .info_url = "https://www.midpointcross.com",
    .explorers = &midx_1394_explorers,
};

pub const bdag_1404_rpcs = [_][]const u8{
    "https://rpc.bdagscan.com",
};

pub const bdag_1404_explorers = [_]Explorer{
    .{
        .name = "BlockDAG Explorer",
        .url = "https://bdagscan.com/",
    },
    .{
        .name = "WelshDAG Explorer",
        .url = "https://scan.welshdag.trade",
    },
};

pub const bdag_1404 = Chain{
    .name = "BlockDAG Network",
    .chain = "BDAG",
    .chain_id = 1404,
    .network_id = 1404,
    .short_name = "bdag",
    .rpc = &bdag_1404_rpcs,
    .native_currency = .{
        .name = "BlockDAG",
        .symbol = "BDAG",
        .decimals = 18,
    },
    .info_url = "https://www.blockdag.network/",
    .explorers = &bdag_1404_explorers,
};

pub const vfl_1408_rpcs = [_][]const u8{
    "https://vflow-rpc.zkverify.io",
};

pub const vfl_1408_explorers = [_]Explorer{
    .{
        .name = "subscan",
        .url = "https://vflow.subscan.io",
    },
};

pub const vfl_1408 = Chain{
    .name = "VFlow",
    .chain = "VFL",
    .chain_id = 1408,
    .network_id = 1408,
    .short_name = "vfl",
    .rpc = &vfl_1408_rpcs,
    .native_currency = .{
        .name = "zkVerify",
        .symbol = "VFY",
        .decimals = 18,
    },
    .info_url = "https://zkverify.io",
    .explorers = &vfl_1408_explorers,
};

pub const tvfl_1409_rpcs = [_][]const u8{
    "https://vflow-volta-rpc.zkverify.io",
};

pub const tvfl_1409_explorers = [_]Explorer{
    .{
        .name = "subscan",
        .url = "https://vflow-testnet.subscan.io",
    },
};

pub const tvfl_1409 = Chain{
    .name = "VFlow Volta Testnet",
    .chain = "TVFL",
    .chain_id = 1409,
    .network_id = 1409,
    .short_name = "tvfl",
    .rpc = &tvfl_1409_rpcs,
    .native_currency = .{
        .name = "Testnet zkVerify",
        .symbol = "tVFY",
        .decimals = 18,
    },
    .info_url = "https://zkverify.io",
    .explorers = &tvfl_1409_explorers,
};

pub const lrx_1410_rpcs = [_][]const u8{
    "https://rpc.lrxmining.com",
};

pub const lrx_1410_explorers = [_]Explorer{
    .{
        .name = "LRXScan",
        .url = "https://scan.lrxmining.com",
    },
};

pub const lrx_1410 = Chain{
    .name = "Liberty Reserve Chain",
    .chain = "LRX",
    .chain_id = 1410,
    .network_id = 1410,
    .short_name = "lrx",
    .rpc = &lrx_1410_rpcs,
    .native_currency = .{
        .name = "Liberty Reserve",
        .symbol = "LRX",
        .decimals = 18,
    },
    .info_url = "https://lrxmining.com",
    .explorers = &lrx_1410_explorers,
};

pub const injective_testnet_1439_rpcs = [_][]const u8{
    "https://testnet.sentry.chain.json-rpc.injective.network",
    "https://injectiveevm-testnet-rpc.polkachu.com",
};

pub const injective_testnet_1439_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://testnet.blockscout.injective.network",
    },
};

pub const injective_testnet_1439 = Chain{
    .name = "Injective Testnet",
    .chain = "Injective",
    .chain_id = 1439,
    .network_id = 1439,
    .short_name = "injective-testnet",
    .rpc = &injective_testnet_1439_rpcs,
    .native_currency = .{
        .name = "Injective",
        .symbol = "INJ",
        .decimals = 18,
    },
    .info_url = "https://injective.com",
    .explorers = &injective_testnet_1439_explorers,
};

pub const cmxr_1475_rpcs = [_][]const u8{
    "https://rpc.cmxofficial.com",
};

pub const cmxr_1475_explorers = [_]Explorer{
    .{
        .name = "CRYMAD Chain Explorer",
        .url = "https://explorer.cmxofficial.com/",
    },
};

pub const cmxr_1475 = Chain{
    .name = "CRYMAD Chain",
    .chain = "CMX",
    .chain_id = 1475,
    .network_id = 1475,
    .short_name = "cmxr",
    .rpc = &cmxr_1475_rpcs,
    .native_currency = .{
        .name = "CryMadX",
        .symbol = "CMX-R",
        .decimals = 18,
    },
    .info_url = "https://cmxofficial.com/",
    .explorers = &cmxr_1475_explorers,
};

pub const roonchain_1492_rpcs = [_][]const u8{
    "https://rpc.roonchain.com",
};

pub const roonchain_1492_explorers = [_]Explorer{
    .{
        .name = "Roon Mainnet explorer",
        .url = "https://browser.roonchain.com",
    },
};

pub const roonchain_1492 = Chain{
    .name = "ROON Mainnet",
    .chain = "ROON",
    .chain_id = 1492,
    .network_id = 1492,
    .short_name = "roonchain",
    .rpc = &roonchain_1492_rpcs,
    .native_currency = .{
        .name = "ROON",
        .symbol = "ROON",
        .decimals = 18,
    },
    .info_url = "https://roonchain.com",
    .explorers = &roonchain_1492_explorers,
};

pub const midl_1500_rpcs = [_][]const u8{
    "https://rpc.midl.xyz",
};

pub const midl_1500_explorers = [_]Explorer{
    .{
        .name = "Midl Mainnet Explorer",
        .url = "blockscout.midl.xyz",
    },
};

pub const midl_1500 = Chain{
    .name = "Midl Mainnet",
    .chain = "MIDL",
    .chain_id = 1500,
    .network_id = 1500,
    .short_name = "midl",
    .rpc = &midl_1500_rpcs,
    .native_currency = .{
        .name = "Bitcoin",
        .symbol = "BTC",
        .decimals = 18,
    },
    .info_url = "https://midl.xyz/",
    .explorers = &midl_1500_explorers,
};

pub const dolphinet_testnet_1519_rpcs = [_][]const u8{
    "https://rpc-testnet.dolphinode.world",
};

pub const dolphinet_testnet_1519_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://explorer-testnet.dolphinode.world/",
    },
};

pub const dolphinet_testnet_1519 = Chain{
    .name = "Dolphinet Testnet",
    .chain = "DOL",
    .chain_id = 1519,
    .network_id = 1519,
    .short_name = "dolphinet-testnet",
    .rpc = &dolphinet_testnet_1519_rpcs,
    .native_currency = .{
        .name = "DOL",
        .symbol = "DOL",
        .decimals = 18,
    },
    .info_url = "https://explorer-testnet.dolphinode.world/",
    .explorers = &dolphinet_testnet_1519_explorers,
};

pub const dolphinet_1520_rpcs = [_][]const u8{
    "https://rpc.dolphinode.world",
    "https://rpc-dev01.dolphinode.world",
};

pub const dolphinet_1520_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://explorer.dolphinode.world/",
    },
};

pub const dolphinet_1520 = Chain{
    .name = "Dolphinet Mainnet",
    .chain = "DOL",
    .chain_id = 1520,
    .network_id = 1520,
    .short_name = "dolphinet",
    .rpc = &dolphinet_1520_rpcs,
    .native_currency = .{
        .name = "DOL",
        .symbol = "DOL",
        .decimals = 18,
    },
    .info_url = "https://chain.dolphinode.world/",
    .explorers = &dolphinet_1520_explorers,
};

pub const mawari_1576_rpcs = [_][]const u8{
    "https://rpc.mawari.net/http",
};

pub const mawari_1576_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://explorer.mainnet.mawari.net",
    },
};

pub const mawari_1576 = Chain{
    .name = "Mawari Mainnet",
    .chain = "MAWARI",
    .chain_id = 1576,
    .network_id = 1576,
    .short_name = "mawari",
    .rpc = &mawari_1576_rpcs,
    .native_currency = .{
        .name = "MAWARI",
        .symbol = "MAWARI",
        .decimals = 18,
    },
    .info_url = "https://mawari.net",
    .explorers = &mawari_1576_explorers,
};

pub const nvnm_evm_1611_rpcs = [_][]const u8{
    "https://evm.nvnmchain.io",
};

pub const nvnm_evm_1611_explorers = [_]Explorer{
    .{
        .name = "NVNM Chain Mainnet explorer",
        .url = "https://explorer.evm.nvnmchain.io/",
    },
};

pub const nvnm_evm_1611 = Chain{
    .name = "NVNM Mainnet EVM",
    .chain = "NVNM",
    .chain_id = 1611,
    .network_id = 1611,
    .short_name = "nvnm-evm",
    .rpc = &nvnm_evm_1611_rpcs,
    .native_currency = .{
        .name = "MANTRA USD",
        .symbol = "MANTRAUSD",
        .decimals = 18,
    },
    .info_url = "https://www.nvnmchain.io/",
    .explorers = &nvnm_evm_1611_explorers,
};

pub const TREX_1628_rpcs = [_][]const u8{
    "https://rpc.trex.xyz",
};

pub const TREX_1628_explorers = [_]Explorer{
    .{
        .name = "T-REX blockchain explorer",
        .url = "https://explorer.trex.xyz",
    },
};

pub const TREX_1628 = Chain{
    .name = "T-Rex",
    .chain = "T-Rex",
    .chain_id = 1628,
    .network_id = 1628,
    .short_name = "TREX",
    .rpc = &TREX_1628_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://trex.xyz/",
    .explorers = &TREX_1628_explorers,
};

pub const xgr_1643_rpcs = [_][]const u8{
    "https://rpc.xgr.network",
    "https://rpc1.xgr.network",
    "https://rpc2.xgr.network",
};

pub const xgr_1643_explorers = [_]Explorer{
    .{
        .name = "XGR Explorer",
        .url = "https://explorer.xgr.network",
    },
};

pub const xgr_1643 = Chain{
    .name = "XGR Mainnet",
    .chain = "XGR",
    .chain_id = 1643,
    .network_id = 1643,
    .short_name = "xgr",
    .rpc = &xgr_1643_rpcs,
    .native_currency = .{
        .name = "XGR",
        .symbol = "XGR",
        .decimals = 18,
    },
    .info_url = "https://xgr.network",
    .explorers = &xgr_1643_explorers,
};

pub const pharos_1672_rpcs = [_][]const u8{
    "https://rpc.pharos.xyz",
};

pub const pharos_1672_explorers = [_]Explorer{
    .{
        .name = "Pharos Explorer",
        .url = "https://pharosscan.xyz",
    },
};

pub const pharos_1672 = Chain{
    .name = "Pharos Mainnet",
    .chain = "Pharos",
    .chain_id = 1672,
    .network_id = 1672,
    .short_name = "pharos",
    .rpc = &pharos_1672_rpcs,
    .native_currency = .{
        .name = "PharosCoin",
        .symbol = "PROS",
        .decimals = 18,
    },
    .info_url = "https://pharos.xyz/",
    .explorers = &pharos_1672_explorers,
};

pub const OBS_1719_rpcs = [_][]const u8{
    "https://kr-4.pixelzx.com",
};

pub const OBS_1719 = Chain{
    .name = "Obsidian Mainnet",
    .chain = "OBS",
    .chain_id = 1719,
    .network_id = 1719,
    .short_name = "OBS",
    .rpc = &OBS_1719_rpcs,
    .native_currency = .{
        .name = "Obsidian",
        .symbol = "OBS",
        .decimals = 18,
    },
    .info_url = "https://pistonx.neocities.org/",
    .explorers = &.{},
};

pub const injective_1776_rpcs = [_][]const u8{
    "https://sentry.evm-rpc.injective.network",
    "https://injectiveevm-rpc.polkachu.com",
    "https://injective-evm-rpc.scvsecurity.io",
};

pub const injective_1776_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://blockscout.injective.network",
    },
};

pub const injective_1776 = Chain{
    .name = "Injective",
    .chain = "Injective",
    .chain_id = 1776,
    .network_id = 1776,
    .short_name = "injective",
    .rpc = &injective_1776_rpcs,
    .native_currency = .{
        .name = "Injective",
        .symbol = "INJ",
        .decimals = 18,
    },
    .info_url = "https://injective.com",
    .explorers = &injective_1776_explorers,
};

pub const ruby_testnet_1810_rpcs = [_][]const u8{
    "https://rpc.ruby.testnet.finetry.win",
    "https://rpc2.ruby.testnet.finetry.win",
};

pub const ruby_testnet_1810_explorers = [_]Explorer{
    .{
        .name = "Ruby Chain Explorer",
        .url = "https://explorer.ruby.testnet.finetry.win",
    },
};

pub const ruby_testnet_1810 = Chain{
    .name = "Ruby Chain Testnet",
    .chain = "RUBY",
    .chain_id = 1810,
    .network_id = 1810,
    .short_name = "ruby-testnet",
    .rpc = &ruby_testnet_1810_rpcs,
    .native_currency = .{
        .name = "Ruby",
        .symbol = "RUBY",
        .decimals = 18,
    },
    .info_url = "https://elektrum.io",
    .explorers = &ruby_testnet_1810_explorers,
};

pub const WCH_Sepolia_1874_rpcs = [_][]const u8{
    "https://rpc.testnet.whitechain.io",
};

pub const WCH_Sepolia_1874_explorers = [_]Explorer{
    .{
        .name = "Whitechain Testnet Explorer",
        .url = "https://explorer.testnet.whitechain.io",
    },
};

pub const WCH_Sepolia_1874 = Chain{
    .name = "Whitechain Sepolia",
    .chain = "WCH",
    .chain_id = 1874,
    .network_id = 1874,
    .short_name = "WCH Sepolia",
    .rpc = &WCH_Sepolia_1874_rpcs,
    .native_currency = .{
        .name = "WBT",
        .symbol = "WBT",
        .decimals = 18,
    },
    .info_url = "https://docs.whitechain.io",
    .explorers = &WCH_Sepolia_1874_explorers,
};

pub const xgrt_1879_rpcs = [_][]const u8{
    "https://rpc.testnet.xgr.network",
    "https://rpc1.testnet.xgr.network",
    "https://rpc2.testnet.xgr.network",
};

pub const xgrt_1879_explorers = [_]Explorer{
    .{
        .name = "XGR Testnet Explorer",
        .url = "https://explorer.testnet.xgr.network",
    },
};

pub const xgrt_1879 = Chain{
    .name = "XGR Testnet",
    .chain = "XGR",
    .chain_id = 1879,
    .network_id = 1879,
    .short_name = "xgrt",
    .rpc = &xgrt_1879_rpcs,
    .native_currency = .{
        .name = "XGR",
        .symbol = "XGR",
        .decimals = 18,
    },
    .info_url = "https://xgr.network",
    .explorers = &xgrt_1879_explorers,
};

pub const recr_1888_rpcs = [_][]const u8{
    "https://rpc.recordercoin.org",
    "https://rpc1.recordercoin.org",
};

pub const recr_1888_explorers = [_]Explorer{
    .{
        .name = "RecorderCoin Explorer",
        .url = "https://explorer.recordercoin.org",
    },
};

pub const recr_1888 = Chain{
    .name = "RecorderCoin Mainnet",
    .chain = "RECR",
    .chain_id = 1888,
    .network_id = 223344,
    .short_name = "recr",
    .rpc = &recr_1888_rpcs,
    .native_currency = .{
        .name = "RecorderCoin",
        .symbol = "RECR",
        .decimals = 18,
    },
    .info_url = "https://recordercoin.org",
    .explorers = &recr_1888_explorers,
};

pub const epix_1916_rpcs = [_][]const u8{
    "https://evmrpc.epix.zone/",
};

pub const epix_1916_explorers = [_]Explorer{
    .{
        .name = "Epix Explorer",
        .url = "http://scan.epix.zone/",
    },
};

pub const epix_1916 = Chain{
    .name = "Epix",
    .chain = "EPIX",
    .chain_id = 1916,
    .network_id = 1916,
    .short_name = "epix",
    .rpc = &epix_1916_rpcs,
    .native_currency = .{
        .name = "Epix",
        .symbol = "EPIX",
        .decimals = 18,
    },
    .info_url = "https://epix.zone",
    .explorers = &epix_1916_explorers,
};

pub const turkchain_1919_rpcs = [_][]const u8{
    "https://rpc.turkscan.com",
};

pub const turkchain_1919_explorers = [_]Explorer{
    .{
        .name = "TURKCHAIN Explorer",
        .url = "https://turkscan.com",
    },
};

pub const turkchain_1919 = Chain{
    .name = "Turkchain",
    .chain = "Turkchain",
    .chain_id = 1919,
    .network_id = 1919,
    .short_name = "turkchain",
    .rpc = &turkchain_1919_rpcs,
    .native_currency = .{
        .name = "TC",
        .symbol = "TURK",
        .decimals = 18,
    },
    .info_url = "https://turkchain1919.com",
    .explorers = &turkchain_1919_explorers,
};

pub const tpc_1925_rpcs = [_][]const u8{
    "https://rpc.tipschain.org",
};

pub const tpc_1925_explorers = [_]Explorer{
    .{
        .name = "Tipschainscan",
        .url = "https://tipschain.online",
    },
};

pub const tpc_1925 = Chain{
    .name = "Tipschain Mainnet",
    .chain = "TPC",
    .chain_id = 1925,
    .network_id = 1925,
    .short_name = "tpc",
    .rpc = &tpc_1925_rpcs,
    .native_currency = .{
        .name = "Tipscoin",
        .symbol = "TPC",
        .decimals = 18,
    },
    .info_url = "https://tipschain.org",
    .explorers = &tpc_1925_explorers,
};

pub const egold_1932_rpcs = [_][]const u8{
    "https://rpc.goldscan.gold",
};

pub const egold_1932_explorers = [_]Explorer{
    .{
        .name = "GoldScan Explorer",
        .url = "https://goldscan.gold",
    },
};

pub const egold_1932 = Chain{
    .name = "EGoldChain Mainnet",
    .chain = "EGold",
    .chain_id = 1932,
    .network_id = 1932,
    .short_name = "egold",
    .rpc = &egold_1932_rpcs,
    .native_currency = .{
        .name = "EGold",
        .symbol = "XAU",
        .decimals = 18,
    },
    .info_url = "https://webgold.gold/",
    .explorers = &egold_1932_explorers,
};

pub const tokb_1952_rpcs = [_][]const u8{
    "https://testrpc.xlayer.tech",
    "https://xlayertestrpc.okx.com",
    "https://endpoints.omniatech.io/v1/xlayer/testnet/public",
    "https://rpc.ankr.com/xlayer_testnet",
    "https://xlayer-testnet.drpc.org",
    "https://moonbase-rpc.dwellir.com",
};

pub const tokb_1952_explorers = [_]Explorer{
    .{
        .name = "OKLink",
        .url = "https://www.oklink.com/xlayer-test",
    },
};

pub const tokb_1952 = Chain{
    .name = "X Layer Testnet",
    .chain = "X Layer",
    .chain_id = 1952,
    .network_id = 1952,
    .short_name = "tokb",
    .rpc = &tokb_1952_rpcs,
    .native_currency = .{
        .name = "X Layer Global Utility Token in testnet",
        .symbol = "OKB",
        .decimals = 18,
    },
    .info_url = "https://www.okx.com/xlayer",
    .explorers = &tokb_1952_explorers,
};

pub const QIEV3_1990_rpcs = [_][]const u8{
    "https://rpc1mainnet.qie.digital",
    "https://rpc5mainnet.qie.digital",
};

pub const QIEV3_1990_explorers = [_]Explorer{
    .{
        .name = "QIE mainnet explorer",
        .url = "https://mainnet.qie.digital/",
    },
};

pub const QIEV3_1990 = Chain{
    .name = "QIEMainnet",
    .chain = "QIEV3",
    .chain_id = 1990,
    .network_id = 1990,
    .short_name = "QIEV3",
    .rpc = &QIEV3_1990_rpcs,
    .native_currency = .{
        .name = "QIE",
        .symbol = "QIE",
        .decimals = 18,
    },
    .info_url = "https://www.qie.digital/",
    .explorers = &QIEV3_1990_explorers,
};

pub const dna_1991_rpcs = [_][]const u8{
    "https://rpc.dnetwork.ai",
};

pub const dna_1991_explorers = [_]Explorer{
    .{
        .name = "DNetwork Scan",
        .url = "https://scan.dnetwork.ai",
    },
};

pub const dna_1991 = Chain{
    .name = "DNetwork",
    .chain = "DNetwork",
    .chain_id = 1991,
    .network_id = 1991,
    .short_name = "dna",
    .rpc = &dna_1991_rpcs,
    .native_currency = .{
        .name = "D Network Asset",
        .symbol = "DNA",
        .decimals = 18,
    },
    .info_url = "https://dnetwork.ai",
    .explorers = &dna_1991_explorers,
};

pub const ronin_2020_rpcs = [_][]const u8{
    "https://api.roninchain.com/rpc",
    "https://api-gateway.skymavis.com/rpc?apikey=9aqYLBbxSC6LROynQJBvKkEIsioqwHmr",
    "https://ronin.drpc.org",
};

pub const ronin_2020_explorers = [_]Explorer{
    .{
        .name = "Ronin Explorer",
        .url = "https://explorer.roninchain.com/",
    },
};

pub const ronin_2020 = Chain{
    .name = "Ronin",
    .chain = "RON",
    .chain_id = 2020,
    .network_id = 2020,
    .short_name = "ronin",
    .rpc = &ronin_2020_rpcs,
    .native_currency = .{
        .name = "Ronin",
        .symbol = "RON",
        .decimals = 18,
    },
    .info_url = "https://roninchain.com/",
    .explorers = &ronin_2020_explorers,
};

pub const erol_2027_rpcs = [_][]const u8{
    "https://martian-rpc1.martianchain.com",
    "https://martian-rpc2.martianchain.com",
    "https://martian-rpc3.martianchain.com",
    "https://martian-rpc4.martianchain.com",
    "https://martian-rpc5.martianchain.com",
};

pub const erol_2027_explorers = [_]Explorer{
    .{
        .name = "routescan",
        .url = "https://devnet.routescan.io/?rpc=https://rpc1.martianchain.com",
    },
    .{
        .name = "subnets avax",
        .url = "https://subnets.avax.network/subnets/28aQXYENwytzxEwyYMZDtGjpUmP67eWkyoHdGGyid6gEACeg9x",
    },
    .{
        .name = "ErolExplorer",
        .url = "https://explorer.martianchain.com",
    },
};

pub const erol_2027 = Chain{
    .name = "Martian Chain",
    .chain = "EROL",
    .chain_id = 2027,
    .network_id = 2027,
    .short_name = "erol",
    .rpc = &erol_2027_rpcs,
    .native_currency = .{
        .name = "Erol Musk",
        .symbol = "EROL",
        .decimals = 18,
    },
    .info_url = "martianchain.com",
    .explorers = &erol_2027_explorers,
};

pub const arma_testnet_2028_rpcs = [_][]const u8{
    "https://rpc.armascan.io",
};

pub const arma_testnet_2028_explorers = [_]Explorer{
    .{
        .name = "ArmaScan",
        .url = "https://armascan.io",
    },
};

pub const arma_testnet_2028 = Chain{
    .name = "ArmaChain Testnet",
    .chain = "ArmaChain",
    .chain_id = 2028,
    .network_id = 2028,
    .short_name = "arma-testnet",
    .rpc = &arma_testnet_2028_rpcs,
    .native_currency = .{
        .name = "Testnet ARMA",
        .symbol = "tARMA",
        .decimals = 18,
    },
    .info_url = "https://armadex.io",
    .explorers = &arma_testnet_2028_explorers,
};

pub const fst_2034_rpcs = [_][]const u8{
    "https://mainnet.fenixst.io",
    "https://node2.fenixst.io",
    "https://node3.fenixst.io",
    "https://node4.fenixst.io",
    "https://node5.fenixst.io",
};

pub const fst_2034_explorers = [_]Explorer{
    .{
        .name = "FSTScan",
        .url = "https://fstscan.fenixst.io",
    },
};

pub const fst_2034 = Chain{
    .name = "FST Smart Chain",
    .chain = "FST",
    .chain_id = 2034,
    .network_id = 2034,
    .short_name = "fst",
    .rpc = &fst_2034_rpcs,
    .native_currency = .{
        .name = "FST",
        .symbol = "FST",
        .decimals = 18,
    },
    .info_url = null,
    .explorers = &fst_2034_explorers,
};

pub const ntx_2070_rpcs = [_][]const u8{
    "https://rpc.neutronchain.io",
};

pub const ntx_2070_explorers = [_]Explorer{
    .{
        .name = "NeutronX Explorer",
        .url = "https://explorer.neutronchain.io",
    },
};

pub const ntx_2070 = Chain{
    .name = "NeutronX Mainnet",
    .chain = "NTX",
    .chain_id = 2070,
    .network_id = 2070,
    .short_name = "ntx",
    .rpc = &ntx_2070_rpcs,
    .native_currency = .{
        .name = "NeutronX",
        .symbol = "NTX",
        .decimals = 18,
    },
    .info_url = "https://neutronx.com",
    .explorers = &ntx_2070_explorers,
};

pub const realchaintest_2098_rpcs = [_][]const u8{
    "https://rlc.devlab.vip/rpc",
};

pub const realchaintest_2098_explorers = [_]Explorer{
    .{
        .name = "RealChainTest explorer",
        .url = "https://rlc.devlab.vip/",
    },
};

pub const realchaintest_2098 = Chain{
    .name = "RealChain Testnet",
    .chain = "RealChainTest",
    .chain_id = 2098,
    .network_id = 2098,
    .short_name = "realchaintest",
    .rpc = &realchaintest_2098_rpcs,
    .native_currency = .{
        .name = "RealCoinTest",
        .symbol = "RT",
        .decimals = 18,
    },
    .info_url = "https://www.realchain.io/",
    .explorers = &realchaintest_2098_explorers,
};

pub const IBVM_2105_rpcs = [_][]const u8{
    "https://rpc-mainnet.ibvm.io/",
};

pub const IBVM_2105_explorers = [_]Explorer{
    .{
        .name = "IBVM explorer",
        .url = "https://ibvmscan.io",
    },
};

pub const IBVM_2105 = Chain{
    .name = "IBVM Mainnet",
    .chain = "IBVM Mainnet",
    .chain_id = 2105,
    .network_id = 2105,
    .short_name = "IBVM",
    .rpc = &IBVM_2105_rpcs,
    .native_currency = .{
        .name = "IBVM",
        .symbol = "IBVM",
        .decimals = 18,
    },
    .info_url = "https://ibvm.io/",
    .explorers = &IBVM_2105_explorers,
};

pub const IBVMT_2107_rpcs = [_][]const u8{
    "https://rpc-testnet.ibvm.io/",
};

pub const IBVMT_2107_explorers = [_]Explorer{
    .{
        .name = "IBVM Testnet explorer",
        .url = "https://testnet.ibvmscan.io",
    },
};

pub const IBVMT_2107 = Chain{
    .name = "IBVM Testnet",
    .chain = "IBVM Testnet",
    .chain_id = 2107,
    .network_id = 2107,
    .short_name = "IBVMT",
    .rpc = &IBVMT_2107_rpcs,
    .native_currency = .{
        .name = "IBVM Bitcoin",
        .symbol = "IBVM",
        .decimals = 18,
    },
    .info_url = "https://ibvm.io/",
    .explorers = &IBVMT_2107_explorers,
};

pub const parallax_2110_rpcs = [_][]const u8{
    "https://rpc.parallaxprotocol.org",
};

pub const parallax_2110_explorers = [_]Explorer{
    .{
        .name = "Parallax Blockscout",
        .url = "https://explorer.parallaxprotocol.org",
    },
};

pub const parallax_2110 = Chain{
    .name = "Parallax",
    .chain = "PARALLAX",
    .chain_id = 2110,
    .network_id = 2110,
    .short_name = "parallax",
    .rpc = &parallax_2110_rpcs,
    .native_currency = .{
        .name = "Parallax",
        .symbol = "LAX",
        .decimals = 18,
    },
    .info_url = "https://parallaxprotocol.org",
    .explorers = &parallax_2110_explorers,
};

pub const autheo_2127_rpcs = [_][]const u8{
    "https://rpc1.autheo.com",
    "https://rpc2.autheo.com",
    "https://rpc3.autheo.com",
};

pub const autheo_2127_explorers = [_]Explorer{
    .{
        .name = "Autheo Cosmos Explorer",
        .url = "https://cosmos.autheo.com",
    },
    .{
        .name = "Autheo Mainnet EVM Explorer",
        .url = "https://evm-explorer.autheo.com",
    },
};

pub const autheo_2127 = Chain{
    .name = "Autheo Mainnet",
    .chain = "Autheo",
    .chain_id = 2127,
    .network_id = 2127,
    .short_name = "autheo",
    .rpc = &autheo_2127_rpcs,
    .native_currency = .{
        .name = "THEO",
        .symbol = "THEO",
        .decimals = 18,
    },
    .info_url = "https://autheo.com",
    .explorers = &autheo_2127_explorers,
};

pub const memento_testnet_2129_rpcs = [_][]const u8{
    "https://rpc.memento.zeeve.online",
};

pub const memento_testnet_2129 = Chain{
    .name = "Memento Testnet",
    .chain = "Memento",
    .chain_id = 2129,
    .network_id = 2129,
    .short_name = "memento-testnet",
    .rpc = &memento_testnet_2129_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://mementoblockchain.com/zk-chain",
    .explorers = &.{},
};

pub const morphtachyon_2184_rpcs = [_][]const u8{
    "https://api.popdex.xyz/api/v1/web3/rpc",
};

pub const morphtachyon_2184_explorers = [_]Explorer{
    .{
        .name = "Morph Tachyon Explorer",
        .url = "https://app.popdex.xyz/explorer",
    },
};

pub const morphtachyon_2184 = Chain{
    .name = "Morph Tachyon",
    .chain = "Morph Tachyon",
    .chain_id = 2184,
    .network_id = 2184,
    .short_name = "morphtachyon",
    .rpc = &morphtachyon_2184_rpcs,
    .native_currency = .{
        .name = "BGB",
        .symbol = "BGB",
        .decimals = 18,
    },
    .info_url = "https://popdex.xyz",
    .explorers = &morphtachyon_2184_explorers,
};

pub const stable_testnet_2201_rpcs = [_][]const u8{
    "https://rpc.testnet.stable.xyz",
};

pub const stable_testnet_2201_explorers = [_]Explorer{
    .{
        .name = "Stablescan",
        .url = "https://testnet.stablescan.xyz",
    },
};

pub const stable_testnet_2201 = Chain{
    .name = "Stable Testnet",
    .chain = "stable",
    .chain_id = 2201,
    .network_id = 2201,
    .short_name = "stable-testnet",
    .rpc = &stable_testnet_2201_rpcs,
    .native_currency = .{
        .name = "USDT0",
        .symbol = "USDT0",
        .decimals = 18,
    },
    .info_url = "https://stable.xyz",
    .explorers = &stable_testnet_2201_explorers,
};

pub const moca_2288_rpcs = [_][]const u8{
    "https://rpc.mocachain.org",
};

pub const moca_2288_explorers = [_]Explorer{
    .{
        .name = "Moca Chain Scan",
        .url = "https://scan.mocachain.org",
    },
};

pub const moca_2288 = Chain{
    .name = "Moca Chain Mainnet",
    .chain = "Moca Chain",
    .chain_id = 2288,
    .network_id = 2288,
    .short_name = "moca",
    .rpc = &moca_2288_rpcs,
    .native_currency = .{
        .name = "MOCA",
        .symbol = "MOCA",
        .decimals = 18,
    },
    .info_url = "https://mocachain.org",
    .explorers = &moca_2288_explorers,
};

pub const besc_2372_rpcs = [_][]const u8{
    "https://rpc.beschyperchain.com",
};

pub const besc_2372_explorers = [_]Explorer{
    .{
        .name = "BESC Explorer",
        .url = "https://explorer.beschyperchain.com",
    },
};

pub const besc_2372 = Chain{
    .name = "BESC HYPERCHAIN",
    .chain = "BESC",
    .chain_id = 2372,
    .network_id = 2372,
    .short_name = "besc",
    .rpc = &besc_2372_rpcs,
    .native_currency = .{
        .name = "BESC HyperChain",
        .symbol = "BESC",
        .decimals = 18,
    },
    .info_url = "https://beschyperchain.com",
    .explorers = &besc_2372_explorers,
};

pub const t_haus_2443_rpcs = [_][]const u8{
    "https://rpc-testnet.hausserver.xyz",
};

pub const t_haus_2443_explorers = [_]Explorer{
    .{
        .name = "Haus Chain Testnet Explorer",
        .url = "https://explorer-testnet.hausserver.xyz",
    },
};

pub const t_haus_2443 = Chain{
    .name = "Haus Chain Testnet",
    .chain = "HAUS",
    .chain_id = 2443,
    .network_id = 2443,
    .short_name = "t-haus",
    .rpc = &t_haus_2443_rpcs,
    .native_currency = .{
        .name = "Haus",
        .symbol = "HAUS",
        .decimals = 18,
    },
    .info_url = "https://www.hausserver.xyz",
    .explorers = &t_haus_2443_explorers,
};

pub const ccc_2500_rpcs = [_][]const u8{
    "https://rpc.cchain.cc",
};

pub const ccc_2500_explorers = [_]Explorer{
    .{
        .name = "cchainscan",
        .url = "https://cchainscan.cc",
    },
};

pub const ccc_2500 = Chain{
    .name = "CChain",
    .chain = "CChain",
    .chain_id = 2500,
    .network_id = 2500,
    .short_name = "ccc",
    .rpc = &ccc_2500_rpcs,
    .native_currency = .{
        .name = "CCC",
        .symbol = "CCC",
        .decimals = 18,
    },
    .info_url = "https://cchain.cc",
    .explorers = &ccc_2500_explorers,
};

pub const svp_testnet_2517_rpcs = [_][]const u8{
    "https://svp-dataseed1-testnet.svpchain.org",
    "https://svp-dataseed2-testnet.svpchain.org",
    "https://svp-dataseed3-testnet.svpchain.org",
};

pub const svp_testnet_2517_explorers = [_]Explorer{
    .{
        .name = "SVP Testnet Explorer",
        .url = "https://testnet.svpchain.com",
    },
};

pub const svp_testnet_2517 = Chain{
    .name = "SVP Chain Testnet",
    .chain = "SVPTEST",
    .chain_id = 2517,
    .network_id = 2517,
    .short_name = "svp-testnet",
    .rpc = &svp_testnet_2517_rpcs,
    .native_currency = .{
        .name = "SVP Coin",
        .symbol = "SVP",
        .decimals = 18,
    },
    .info_url = "https://svpchain.org",
    .explorers = &svp_testnet_2517_explorers,
};

pub const svp_2518_rpcs = [_][]const u8{
    "https://svp-dataseed1.svpchain.org",
    "https://svp-dataseed2.svpchain.org",
    "https://svp-dataseed3.svpchain.org",
};

pub const svp_2518_explorers = [_]Explorer{
    .{
        .name = "SVP Explorer",
        .url = "https://explorer.svpchain.com",
    },
};

pub const svp_2518 = Chain{
    .name = "SVP Chain",
    .chain = "SVP",
    .chain_id = 2518,
    .network_id = 2518,
    .short_name = "svp",
    .rpc = &svp_2518_rpcs,
    .native_currency = .{
        .name = "SVP Coin",
        .symbol = "SVP",
        .decimals = 18,
    },
    .info_url = "https://svpchain.org",
    .explorers = &svp_2518_explorers,
};

pub const anubi_2526_rpcs = [_][]const u8{
    "https://test-rpc.anubispace.org",
};

pub const anubi_2526_explorers = [_]Explorer{
    .{
        .name = "anubiscan",
        .url = "https://test-scan.anubispace.org",
    },
};

pub const anubi_2526 = Chain{
    .name = "ANUBIS Testnet",
    .chain = "ANUBIS",
    .chain_id = 2526,
    .network_id = 2526,
    .short_name = "anubi",
    .rpc = &anubi_2526_rpcs,
    .native_currency = .{
        .name = "ANUBI",
        .symbol = "ANUBI",
        .decimals = 18,
    },
    .info_url = "https://docs.anubispace.org",
    .explorers = &anubi_2526_explorers,
};

pub const h2_2582_rpcs = [_][]const u8{
    "https://rpc.h2chain.io",
};

pub const h2_2582_explorers = [_]Explorer{
    .{
        .name = "H2Scan",
        .url = "https://h2scan.io",
    },
};

pub const h2_2582 = Chain{
    .name = "H2",
    .chain = "H2",
    .chain_id = 2582,
    .network_id = 2582,
    .short_name = "h2",
    .rpc = &h2_2582_rpcs,
    .native_currency = .{
        .name = "H2",
        .symbol = "H2",
        .decimals = 18,
    },
    .info_url = "https://h2chain.io",
    .explorers = &h2_2582_explorers,
};

pub const kto_2643_rpcs = [_][]const u8{
    "https://rpc-mainnet.noschain.org",
};

pub const kto_2643_explorers = [_]Explorer{
    .{
        .name = "NosScan",
        .url = "https://nosscan.noschain.org",
    },
};

pub const kto_2643 = Chain{
    .name = "Notes Network Mainnet",
    .chain = "NOTES",
    .chain_id = 2643,
    .network_id = 2643,
    .short_name = "kto",
    .rpc = &kto_2643_rpcs,
    .native_currency = .{
        .name = "Kto",
        .symbol = "KTO",
        .decimals = 11,
    },
    .info_url = "https://note.bet",
    .explorers = &kto_2643_explorers,
};

pub const spld_2691_rpcs = [_][]const u8{
    "https://mainnet-rpc.splendor.org",
};

pub const spld_2691_explorers = [_]Explorer{
    .{
        .name = "Splendor Explorer",
        .url = "https://explorer.splendor.org",
    },
};

pub const spld_2691 = Chain{
    .name = "Splendor Mainnet",
    .chain = "SPLENDOR",
    .chain_id = 2691,
    .network_id = 2691,
    .short_name = "spld",
    .rpc = &spld_2691_rpcs,
    .native_currency = .{
        .name = "Splendor Token",
        .symbol = "SPLD",
        .decimals = 18,
    },
    .info_url = "https://splendor.org",
    .explorers = &spld_2691_explorers,
};

pub const spldt_2692_rpcs = [_][]const u8{
    "https://testnet-rpc.splendor.org",
};

pub const spldt_2692_explorers = [_]Explorer{
    .{
        .name = "Splendor Testnet Explorer",
        .url = "https://testnet-explorer.splendor.org",
    },
};

pub const spldt_2692 = Chain{
    .name = "Splendor Testnet",
    .chain = "SPLD-TESTNET",
    .chain_id = 2692,
    .network_id = 2692,
    .short_name = "spldt",
    .rpc = &spldt_2692_rpcs,
    .native_currency = .{
        .name = "Splendor Test Token",
        .symbol = "SPLDT",
        .decimals = 18,
    },
    .info_url = "https://splendor.org",
    .explorers = &spldt_2692_explorers,
};

pub const orbinum_2700_rpcs = [_][]const u8{
    "https://rpc.testnet.orbinum.io",
};

pub const orbinum_2700_explorers = [_]Explorer{
    .{
        .name = "Orbinum Privacy Explorer",
        .url = "https://explorer.testnet.orbinum.network",
    },
};

pub const orbinum_2700 = Chain{
    .name = "Orbinum Testnet",
    .chain = "ORB",
    .chain_id = 2700,
    .network_id = 2700,
    .short_name = "orbinum",
    .rpc = &orbinum_2700_rpcs,
    .native_currency = .{
        .name = "ORB",
        .symbol = "ORB",
        .decimals = 18,
    },
    .info_url = "https://www.orbinum.network",
    .explorers = &orbinum_2700_explorers,
};

pub const claw_world_box_2721_rpcs = [_][]const u8{
    "https://rpc.clawworldbox.com",
};

pub const claw_world_box_2721_explorers = [_]Explorer{
    .{
        .name = "Claw World Box Explorer",
        .url = "https://explorer.clawworldbox.com/",
    },
};

pub const claw_world_box_2721 = Chain{
    .name = "claw world box",
    .chain = "AGW",
    .chain_id = 2721,
    .network_id = 2721,
    .short_name = "claw-world-box",
    .rpc = &claw_world_box_2721_rpcs,
    .native_currency = .{
        .name = "DA",
        .symbol = "DA",
        .decimals = 18,
    },
    .info_url = "https://www.clawworldbox.com",
    .explorers = &claw_world_box_2721_explorers,
};

pub const creator_chain_mainnet_2787_rpcs = [_][]const u8{
    "https://rpc.mainnet.oncreator.com",
};

pub const creator_chain_mainnet_2787_explorers = [_]Explorer{
    .{
        .name = "Creator Chain Mainnet Explorer",
        .url = "https://explorer.mainnet.oncreator.com",
    },
};

pub const creator_chain_mainnet_2787 = Chain{
    .name = "Creator Chain Mainnet",
    .chain = "Creator Chain",
    .chain_id = 2787,
    .network_id = 2787,
    .short_name = "creator-chain-mainnet",
    .rpc = &creator_chain_mainnet_2787_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://www.oncreator.com",
    .explorers = &creator_chain_mainnet_2787_explorers,
};

pub const aere_2800_rpcs = [_][]const u8{
    "https://rpc.aere.network",
};

pub const aere_2800_explorers = [_]Explorer{
    .{
        .name = "AERE Explorer",
        .url = "https://explorer.aere.network",
    },
};

pub const aere_2800 = Chain{
    .name = "AERE Network",
    .chain = "AERE",
    .chain_id = 2800,
    .network_id = 2800,
    .short_name = "aere",
    .rpc = &aere_2800_rpcs,
    .native_currency = .{
        .name = "AERE",
        .symbol = "AERE",
        .decimals = 18,
    },
    .info_url = "https://aere.network",
    .explorers = &aere_2800_explorers,
};

pub const alpen_2892_rpcs = [_][]const u8{
    "https://rpc.testnet.alpenlabs.io",
};

pub const alpen_2892_explorers = [_]Explorer{
    .{
        .name = "explorer",
        .url = "https://explorer.testnet.alpenlabs.io",
    },
};

pub const alpen_2892 = Chain{
    .name = "Alpen Testnet",
    .chain = "Alpen",
    .chain_id = 2892,
    .network_id = 2892,
    .short_name = "alpen",
    .rpc = &alpen_2892_rpcs,
    .native_currency = .{
        .name = "Signet BTC",
        .symbol = "sBTC",
        .decimals = 8,
    },
    .info_url = null,
    .explorers = &alpen_2892_explorers,
};

pub const morph_2910_rpcs = [_][]const u8{
    "https://rpc-hoodi-bgw.morph.network",
    "https://rpc-hoodi.morph.network",
};

pub const morph_2910_explorers = [_]Explorer{
    .{
        .name = "Morph Hoodi Testnet Explorer",
        .url = "https://explorer-hoodi.morph.network",
    },
};

pub const morph_2910 = Chain{
    .name = "Morph Hoodi",
    .chain = "ETH",
    .chain_id = 2910,
    .network_id = 2910,
    .short_name = "morph",
    .rpc = &morph_2910_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://www.morph.network",
    .explorers = &morph_2910_explorers,
};

pub const bgg_3005_rpcs = [_][]const u8{
    "https://rpc.bggchain.com",
};

pub const bgg_3005_explorers = [_]Explorer{
    .{
        .name = "bggchain",
        .url = "https://bggscan.com/",
    },
};

pub const bgg_3005 = Chain{
    .name = "BGGChain",
    .chain = "BGG",
    .chain_id = 3005,
    .network_id = 3005,
    .short_name = "bgg",
    .rpc = &bgg_3005_rpcs,
    .native_currency = .{
        .name = "BGGChain",
        .symbol = "BGG",
        .decimals = 18,
    },
    .info_url = "https://bggchain.com/",
    .explorers = &bgg_3005_explorers,
};

pub const aic_3018_rpcs = [_][]const u8{
    "https://rpc.aicchain.io",
};

pub const aic_3018_explorers = [_]Explorer{
    .{
        .name = "AICChain Explorer",
        .url = "https://scan.aicchain.io",
    },
};

pub const aic_3018 = Chain{
    .name = "AICChain Mainnet",
    .chain = "AIC",
    .chain_id = 3018,
    .network_id = 3018,
    .short_name = "aic",
    .rpc = &aic_3018_rpcs,
    .native_currency = .{
        .name = "AICChain",
        .symbol = "AIC",
        .decimals = 18,
    },
    .info_url = "https://www.aicchain.io",
    .explorers = &aic_3018_explorers,
};

pub const svm_3109_rpcs = [_][]const u8{
    "https://alpha-rpc-node-http.svmscan.io/",
};

pub const svm_3109_explorers = [_]Explorer{
    .{
        .name = "Svmscan",
        .url = "https://svmscan.io/",
    },
};

pub const svm_3109 = Chain{
    .name = "SatoshiVM",
    .chain = "BTC",
    .chain_id = 3109,
    .network_id = 3109,
    .short_name = "svm",
    .rpc = &svm_3109_rpcs,
    .native_currency = .{
        .name = "SatoshiVM",
        .symbol = "BTC",
        .decimals = 18,
    },
    .info_url = "https://www.satoshivm.io/",
    .explorers = &svm_3109_explorers,
};

pub const alpha_3111_rpcs = [_][]const u8{
    "https://rpc.goalpha.org",
};

pub const alpha_3111_explorers = [_]Explorer{
    .{
        .name = "Alpha Chain Scan",
        .url = "https://scan.goalpha.org",
    },
};

pub const alpha_3111 = Chain{
    .name = "Alpha Chain Mainnet",
    .chain = "Alpha Chain",
    .chain_id = 3111,
    .network_id = 3111,
    .short_name = "alpha",
    .rpc = &alpha_3111_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://docs.alphatoken.com/AlphaChain/about-alpha-chain",
    .explorers = &alpha_3111_explorers,
};

pub const BKC_3188_rpcs = [_][]const u8{
    "https://rpc.beechain.ai",
};

pub const BKC_3188_explorers = [_]Explorer{
    .{
        .name = "BeeChainScan",
        .url = "https://scan.beechain.ai",
    },
};

pub const BKC_3188 = Chain{
    .name = "BeeChain Mainnet",
    .chain = "BKC",
    .chain_id = 3188,
    .network_id = 3188,
    .short_name = "BKC",
    .rpc = &BKC_3188_rpcs,
    .native_currency = .{
        .name = "BeeChain",
        .symbol = "BKC",
        .decimals = 18,
    },
    .info_url = "https://beechain.ai",
    .explorers = &BKC_3188_explorers,
};

pub const qbc_3303_rpcs = [_][]const u8{
    "https://qbc.network/rpc",
};

pub const qbc_3303_explorers = [_]Explorer{
    .{
        .name = "Qubitcoin Explorer",
        .url = "https://qbc.network/explorer",
    },
};

pub const qbc_3303 = Chain{
    .name = "Qubitcoin",
    .chain = "QBC",
    .chain_id = 3303,
    .network_id = 3303,
    .short_name = "qbc",
    .rpc = &qbc_3303_rpcs,
    .native_currency = .{
        .name = "Qubitcoin",
        .symbol = "QBC",
        .decimals = 8,
    },
    .info_url = "https://qbc.network",
    .explorers = &qbc_3303_explorers,
};

pub const vora_3318_rpcs = [_][]const u8{
    "https://vorascan.io/rpc",
};

pub const vora_3318_explorers = [_]Explorer{
    .{
        .name = "vorascan",
        .url = "https://vorascan.io",
    },
};

pub const vora_3318 = Chain{
    .name = "VORA Chain",
    .chain = "VORA",
    .chain_id = 3318,
    .network_id = 3318,
    .short_name = "vora",
    .rpc = &vora_3318_rpcs,
    .native_currency = .{
        .name = "VORA",
        .symbol = "VRA",
        .decimals = 18,
    },
    .info_url = "https://vorachain.com",
    .explorers = &vora_3318_explorers,
};

pub const aet_3355_rpcs = [_][]const u8{
    "https://entrypoint-mainnet.aetron.ai/",
};

pub const aet_3355 = Chain{
    .name = "AETRON Mainnet",
    .chain = "AETRON",
    .chain_id = 3355,
    .network_id = 3355,
    .short_name = "aet",
    .rpc = &aet_3355_rpcs,
    .native_currency = .{
        .name = "AETRON",
        .symbol = "AET",
        .decimals = 18,
    },
    .info_url = "https://aetron.io",
    .explorers = &.{},
};

pub const tjr_3377_rpcs = [_][]const u8{
    "https://rpc.tajirchain.com",
};

pub const tjr_3377_explorers = [_]Explorer{
    .{
        .name = "Tajirchain Explorer",
        .url = "https://tjrscan.com/",
    },
};

pub const tjr_3377 = Chain{
    .name = "Tajirchain",
    .chain = "TJR",
    .chain_id = 3377,
    .network_id = 3377,
    .short_name = "tjr",
    .rpc = &tjr_3377_rpcs,
    .native_currency = .{
        .name = "Tajir",
        .symbol = "TJR",
        .decimals = 18,
    },
    .info_url = "https://tajirchain.com",
    .explorers = &tjr_3377_explorers,
};

pub const bytechaintest_3399_rpcs = [_][]const u8{
    "https://test-rpc.bexc.io",
};

pub const bytechaintest_3399_explorers = [_]Explorer{
    .{
        .name = "ByteChain Testnet Explorer",
        .url = "https://testnet.bexc.io",
    },
};

pub const bytechaintest_3399 = Chain{
    .name = "ByteChain Testnet",
    .chain = "tBEXC",
    .chain_id = 3399,
    .network_id = 3399,
    .short_name = "bytechaintest",
    .rpc = &bytechaintest_3399_rpcs,
    .native_currency = .{
        .name = "BEXC",
        .symbol = "BEXC",
        .decimals = 18,
    },
    .info_url = "https://bexc.io",
    .explorers = &bytechaintest_3399_explorers,
};

pub const amx_3535_rpcs = [_][]const u8{
    "https://amxrpc.link/public/rpc",
};

pub const amx_3535_explorers = [_]Explorer{
    .{
        .name = "Amero X Scan",
        .url = "https://amxscan.com",
    },
};

pub const amx_3535 = Chain{
    .name = "Amero X Network",
    .chain = "AMX",
    .chain_id = 3535,
    .network_id = 3535,
    .short_name = "amx",
    .rpc = &amx_3535_rpcs,
    .native_currency = .{
        .name = "Amero X",
        .symbol = "AMX",
        .decimals = 18,
    },
    .info_url = "https://amxscan.com",
    .explorers = &amx_3535_explorers,
};

pub const Trustgreen_3567_rpcs = [_][]const u8{
    "https://rpc.trustgreenscan.com",
};

pub const Trustgreen_3567_explorers = [_]Explorer{
    .{
        .name = "trustgreenscan",
        .url = "https://trustgreenscan.com/",
    },
};

pub const Trustgreen_3567 = Chain{
    .name = "Trustgreen Chain",
    .chain = "Trustgreen",
    .chain_id = 3567,
    .network_id = 3567,
    .short_name = "Trustgreen",
    .rpc = &Trustgreen_3567_rpcs,
    .native_currency = .{
        .name = "Trustgreen",
        .symbol = "IT",
        .decimals = 18,
    },
    .info_url = "https://trustgreenchain.com/",
    .explorers = &Trustgreen_3567_explorers,
};

pub const AiFi_3600_rpcs = [_][]const u8{
    "https://rpc.aifisc.io",
    "https://rpc.ascscan.io",
    "https://rpc.aifiv2.ai",
};

pub const AiFi_3600_explorers = [_]Explorer{
    .{
        .name = "AiFiScan",
        .url = "https://ascscan.io/",
    },
};

pub const AiFi_3600 = Chain{
    .name = "AiFinance Smart Chain",
    .chain = "AiFi",
    .chain_id = 3600,
    .network_id = 3600,
    .short_name = "AiFi",
    .rpc = &AiFi_3600_rpcs,
    .native_currency = .{
        .name = "AIFI",
        .symbol = "AIFI",
        .decimals = 18,
    },
    .info_url = "https://aifisc.io/",
    .explorers = &AiFi_3600_explorers,
};

pub const inri_3777_rpcs = [_][]const u8{
    "https://rpc.inri.life",
    "https://rpc-chain.inri.life",
};

pub const inri_3777_explorers = [_]Explorer{
    .{
        .name = "INRI Explorer",
        .url = "https://explorer.inri.life",
    },
};

pub const inri_3777 = Chain{
    .name = "INRI CHAIN",
    .chain = "INRI",
    .chain_id = 3777,
    .network_id = 3777,
    .short_name = "inri",
    .rpc = &inri_3777_rpcs,
    .native_currency = .{
        .name = "INRI",
        .symbol = "INRI",
        .decimals = 18,
    },
    .info_url = "https://inri.life",
    .explorers = &inri_3777_explorers,
};

pub const haust_network_3864_rpcs = [_][]const u8{
    "https://haust-network-rpc.eu-north-2.gateway.fm/",
};

pub const haust_network_3864_explorers = [_]Explorer{
    .{
        .name = "Haust Network blockchain explorer",
        .url = "https://haustscan.com",
    },
};

pub const haust_network_3864 = Chain{
    .name = "Haust Network",
    .chain = "HAUST",
    .chain_id = 3864,
    .network_id = 3864,
    .short_name = "haust-network",
    .rpc = &haust_network_3864_rpcs,
    .native_currency = .{
        .name = "Haust",
        .symbol = "HAUST",
        .decimals = 18,
    },
    .info_url = "https://haust.network/",
    .explorers = &haust_network_3864_explorers,
};

pub const NEX_3945_rpcs = [_][]const u8{
    "https://testnet.rpc.nexus.xyz",
};

pub const NEX_3945_explorers = [_]Explorer{
    .{
        .name = "Nexus Testnet Explorer",
        .url = "https://nexus.testnet.blockscout.com",
    },
};

pub const NEX_3945 = Chain{
    .name = "Nexus Testnet",
    .chain = "Nexus Testnet",
    .chain_id = 3945,
    .network_id = 3495,
    .short_name = "NEX",
    .rpc = &NEX_3945_rpcs,
    .native_currency = .{
        .name = "Nexus",
        .symbol = "NEX",
        .decimals = 18,
    },
    .info_url = "https://nexus.xyz",
    .explorers = &NEX_3945_explorers,
};

pub const nex_3946_rpcs = [_][]const u8{
    "https://mainnet.rpc.nexus.xyz",
};

pub const nex_3946_explorers = [_]Explorer{
    .{
        .name = "Nexus Explorer",
        .url = "https://explorer.nexus.xyz",
    },
};

pub const nex_3946 = Chain{
    .name = "Nexus Mainnet",
    .chain = "NEX",
    .chain_id = 3946,
    .network_id = 3946,
    .short_name = "nex",
    .rpc = &nex_3946_rpcs,
    .native_currency = .{
        .name = "Nexus",
        .symbol = "NEX",
        .decimals = 18,
    },
    .info_url = "https://nexus.xyz",
    .explorers = &nex_3946_explorers,
};

pub const gan_4048_rpcs = [_][]const u8{
    "https://rpc.gpu.net",
};

pub const gan_4048_explorers = [_]Explorer{
    .{
        .name = "ganscan",
        .url = "https://ganscan.gpu.net",
    },
};

pub const gan_4048 = Chain{
    .name = "GANchain L1",
    .chain = "GAN",
    .chain_id = 4048,
    .network_id = 4048,
    .short_name = "gan",
    .rpc = &gan_4048_rpcs,
    .native_currency = .{
        .name = "GPUnet",
        .symbol = "GPU",
        .decimals = 18,
    },
    .info_url = "https://gpu.net",
    .explorers = &gan_4048_explorers,
};

pub const ecna_4111_rpcs = [_][]const u8{
    "https://rpc.ecnascan.com",
};

pub const ecna_4111_explorers = [_]Explorer{
    .{
        .name = "ecnascan",
        .url = "https://explorer.ecnascan.com",
    },
};

pub const ecna_4111 = Chain{
    .name = "E Canna Mainnet",
    .chain = "ECNA",
    .chain_id = 4111,
    .network_id = 4111,
    .short_name = "ecna",
    .rpc = &ecna_4111_rpcs,
    .native_currency = .{
        .name = "E Canna",
        .symbol = "ECNA",
        .decimals = 18,
    },
    .info_url = "https://ecnascan.com",
    .explorers = &ecna_4111_explorers,
};

pub const tecna_4112_rpcs = [_][]const u8{
    "https://testnetrpc.ecnascan.com",
};

pub const tecna_4112_explorers = [_]Explorer{
    .{
        .name = "ecnascan-testnet",
        .url = "https://testnetexplorer.ecnascan.com",
    },
};

pub const tecna_4112 = Chain{
    .name = "E Canna Testnet",
    .chain = "tECNA",
    .chain_id = 4112,
    .network_id = 4112,
    .short_name = "tecna",
    .rpc = &tecna_4112_rpcs,
    .native_currency = .{
        .name = "E Canna Testnet",
        .symbol = "tECNA",
        .decimals = 18,
    },
    .info_url = "https://ecnascan.com",
    .explorers = &tecna_4112_explorers,
};

pub const citrea_4114_rpcs = [_][]const u8{
    "https://rpc.mainnet.citrea.xyz/",
};

pub const citrea_4114_explorers = [_]Explorer{
    .{
        .name = "Citrea Mainnet Explorer",
        .url = "https://explorer.mainnet.citrea.xyz",
    },
};

pub const citrea_4114 = Chain{
    .name = "Citrea Mainnet",
    .chain = "Citrea",
    .chain_id = 4114,
    .network_id = 4114,
    .short_name = "citrea",
    .rpc = &citrea_4114_rpcs,
    .native_currency = .{
        .name = "Citrea BTC",
        .symbol = "cBTC",
        .decimals = 18,
    },
    .info_url = "https://citrea.xyz/",
    .explorers = &citrea_4114_explorers,
};

pub const rise_4153_rpcs = [_][]const u8{
    "https://rpc.risechain.com/",
};

pub const rise_4153_explorers = [_]Explorer{
    .{
        .name = "Blockscout",
        .url = "https://explorer.risechain.com/",
    },
};

pub const rise_4153 = Chain{
    .name = "RISE",
    .chain = "ETH",
    .chain_id = 4153,
    .network_id = 4153,
    .short_name = "rise",
    .rpc = &rise_4153_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://risechain.com",
    .explorers = &rise_4153_explorers,
};

pub const sx_mainnet_4162_rpcs = [_][]const u8{
    "https://rpc-rollup.sx.technology",
};

pub const sx_mainnet_4162_explorers = [_]Explorer{
    .{
        .name = "SX Explorer",
        .url = "https://explorer.sx.technology",
    },
};

pub const sx_mainnet_4162 = Chain{
    .name = "SX Network",
    .chain = "SXR",
    .chain_id = 4162,
    .network_id = 4162,
    .short_name = "sx-mainnet",
    .rpc = &sx_mainnet_4162_rpcs,
    .native_currency = .{
        .name = "SX Token",
        .symbol = "SX",
        .decimals = 18,
    },
    .info_url = "https://sx.technology",
    .explorers = &sx_mainnet_4162_explorers,
};

pub const tempo_presto_4217_rpcs = [_][]const u8{
    "https://tempo-mainnet.drpc.org",
    "https://rpc.mainnet.tempo.xyz",
};

pub const tempo_presto_4217_explorers = [_]Explorer{
    .{
        .name = "Tempo Explorer",
        .url = "https://explore.tempo.xyz",
    },
};

pub const tempo_presto_4217 = Chain{
    .name = "Tempo Mainnet",
    .chain = "Tempo",
    .chain_id = 4217,
    .network_id = 4217,
    .short_name = "tempo-presto",
    .rpc = &tempo_presto_4217_rpcs,
    .native_currency = .{
        .name = "US Dollar",
        .symbol = "USD",
        .decimals = 18,
    },
    .info_url = "https://tempo.xyz",
    .explorers = &tempo_presto_4217_explorers,
};

pub const genlayer_testnets_4221_rpcs = [_][]const u8{
    "https://zksync-os-testnet-genlayer.zksync.dev",
};

pub const genlayer_testnets_4221_explorers = [_]Explorer{
    .{
        .name = "GenLayer Testnets Explorer",
        .url = "https://zksync-os-testnet-genlayer.explorer.zksync.dev",
    },
};

pub const genlayer_testnets_4221 = Chain{
    .name = "GenLayer Testnets",
    .chain = "GenLayer",
    .chain_id = 4221,
    .network_id = 4221,
    .short_name = "genlayer-testnets",
    .rpc = &genlayer_testnets_4221_rpcs,
    .native_currency = .{
        .name = "GEN Token",
        .symbol = "GEN",
        .decimals = 18,
    },
    .info_url = "https://www.genlayer.com",
    .explorers = &genlayer_testnets_4221_explorers,
};

pub const hashfire_4227_rpcs = [_][]const u8{
    "https://subnets.avax.network/hashfire/testnet/rpc",
};

pub const hashfire_4227_explorers = [_]Explorer{
    .{
        .name = "Avalanche L1 Explorer",
        .url = "https://subnets-test.avax.network/hashfire/",
    },
};

pub const hashfire_4227 = Chain{
    .name = "Hashfire Testnet",
    .chain = "Hashfire Testnet",
    .chain_id = 4227,
    .network_id = 4227,
    .short_name = "hashfire",
    .rpc = &hashfire_4227_rpcs,
    .native_currency = .{
        .name = "HASHD",
        .symbol = "HASHD",
        .decimals = 18,
    },
    .info_url = "https://hashfire.xyz/",
    .explorers = &hashfire_4227_explorers,
};

pub const tpix_4289_rpcs = [_][]const u8{
    "https://rpc.tpix.online",
};

pub const tpix_4289_explorers = [_]Explorer{
    .{
        .name = "TPIX Explorer",
        .url = "https://explorer.tpix.online",
    },
};

pub const tpix_4289 = Chain{
    .name = "TPIX Chain",
    .chain = "TPIX",
    .chain_id = 4289,
    .network_id = 4289,
    .short_name = "tpix",
    .rpc = &tpix_4289_rpcs,
    .native_currency = .{
        .name = "TPIX",
        .symbol = "TPIX",
        .decimals = 18,
    },
    .info_url = "https://tpix.online",
    .explorers = &tpix_4289_explorers,
};

pub const megaeth_4326_rpcs = [_][]const u8{
    "https://mainnet.megaeth.com/rpc",
};

pub const megaeth_4326_explorers = [_]Explorer{
    .{
        .name = "Etherscan",
        .url = "https://mega.etherscan.io",
    },
    .{
        .name = "Blockscout",
        .url = "https://megaeth.blockscout.com",
    },
};

pub const megaeth_4326 = Chain{
    .name = "MegaETH",
    .chain = "MEGA",
    .chain_id = 4326,
    .network_id = 4326,
    .short_name = "megaeth",
    .rpc = &megaeth_4326_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://www.megaeth.com",
    .explorers = &megaeth_4326_explorers,
};

pub const liteforge_4441_rpcs = [_][]const u8{
    "https://rpc.testnet.liteforge.zeeve.net/",
};

pub const liteforge_4441_explorers = [_]Explorer{
    .{
        .name = "Liteforge Explorer",
        .url = "https://explorer.testnet.liteforge.zeeve.net",
    },
};

pub const liteforge_4441 = Chain{
    .name = "LitVM Liteforge Testnet",
    .chain = "Liteforge",
    .chain_id = 4441,
    .network_id = 4441,
    .short_name = "liteforge",
    .rpc = &liteforge_4441_rpcs,
    .native_currency = .{
        .name = "zkLTC",
        .symbol = "zkLTC",
        .decimals = 18,
    },
    .info_url = null,
    .explorers = &liteforge_4441_explorers,
};

pub const den_testnet_4442_rpcs = [_][]const u8{
    "https://rpc.denergytestnet.com/",
};

pub const den_testnet_4442_explorers = [_]Explorer{
    .{
        .name = "Denergy Explorer",
        .url = "https://explorer.denergytestnet.com",
    },
};

pub const den_testnet_4442 = Chain{
    .name = "Denergy Testnet",
    .chain = "DEN",
    .chain_id = 4442,
    .network_id = 4442,
    .short_name = "den-testnet",
    .rpc = &den_testnet_4442_rpcs,
    .native_currency = .{
        .name = "WATT",
        .symbol = "WATT",
        .decimals = 18,
    },
    .info_url = "https://d.energy/",
    .explorers = &den_testnet_4442_explorers,
};

pub const oxin_4457_rpcs = [_][]const u8{
    "https://rpc.oxinchain.io",
    "https://rpc1.oxinchain.io",
    "https://rpc2.oxinchain.io",
};

pub const oxin_4457_explorers = [_]Explorer{
    .{
        .name = "oxinscan",
        .url = "https://scan.oxinchain.io",
    },
};

pub const oxin_4457 = Chain{
    .name = "Oxin Chain",
    .chain = "OXIN",
    .chain_id = 4457,
    .network_id = 4457,
    .short_name = "oxin",
    .rpc = &oxin_4457_rpcs,
    .native_currency = .{
        .name = "Oxin",
        .symbol = "OXIN",
        .decimals = 18,
    },
    .info_url = "https://oxinchain.io",
    .explorers = &oxin_4457_explorers,
};

pub const SC_4509_rpcs = [_][]const u8{
    "https://studiochain-cf4a1621.calderachain.xyz/",
};

pub const SC_4509_explorers = [_]Explorer{
    .{
        .name = "Studio Chain explorer",
        .url = "https://studiochain-cf4a1621.calderaexplorer.xyz/",
    },
};

pub const SC_4509 = Chain{
    .name = "Studio Chain",
    .chain = "SC",
    .chain_id = 4509,
    .network_id = 4509,
    .short_name = "SC",
    .rpc = &SC_4509_rpcs,
    .native_currency = .{
        .name = "Karrat coin",
        .symbol = "KARRAT",
        .decimals = 18,
    },
    .info_url = "https://studiochain-cf4a1621.hub.caldera.xyz",
    .explorers = &SC_4509_explorers,
};

pub const gtbs_4599_rpcs = [_][]const u8{
    "https://mainnet-rpc.gtbsblockchain.com",
};

pub const gtbs_4599_explorers = [_]Explorer{
    .{
        .name = "gtbs",
        .url = "https://gtbsblockchain.com",
    },
};

pub const gtbs_4599 = Chain{
    .name = "GTBS Chain",
    .chain = "GTBS",
    .chain_id = 4599,
    .network_id = 4599,
    .short_name = "gtbs",
    .rpc = &gtbs_4599_rpcs,
    .native_currency = .{
        .name = "GTBS",
        .symbol = "GTBS",
        .decimals = 18,
    },
    .info_url = "https://gtbs.live",
    .explorers = &gtbs_4599_explorers,
};

pub const hsp_4611_4611_rpcs = [_][]const u8{
    "http://rpc-4611.champagnesphere.net/",
};

pub const hsp_4611_4611_explorers = [_]Explorer{
    .{
        .name = "HashSphere Explorer 4611",
        .url = "http://explorer-4611.champagnesphere.net",
    },
};

pub const hsp_4611_4611 = Chain{
    .name = "HashSphere Private Network 4611",
    .chain = "hsphere-private-4611",
    .chain_id = 4611,
    .network_id = 4611,
    .short_name = "hsp-4611",
    .rpc = &hsp_4611_4611_rpcs,
    .native_currency = .{
        .name = "hbar",
        .symbol = "HBAR",
        .decimals = 18,
    },
    .info_url = "https://hashgraph.com",
    .explorers = &hsp_4611_4611_explorers,
};

pub const hsp_4612_4612_rpcs = [_][]const u8{
    "http://rpc-4612.champagnesphere.net/",
};

pub const hsp_4612_4612_explorers = [_]Explorer{
    .{
        .name = "HashSphere Explorer 4612",
        .url = "http://explorer-4612.champagnesphere.net",
    },
};

pub const hsp_4612_4612 = Chain{
    .name = "HashSphere Private Network 4612",
    .chain = "hsphere-private-4612",
    .chain_id = 4612,
    .network_id = 4612,
    .short_name = "hsp-4612",
    .rpc = &hsp_4612_4612_rpcs,
    .native_currency = .{
        .name = "hbar",
        .symbol = "HBAR",
        .decimals = 18,
    },
    .info_url = "https://hashgraph.com",
    .explorers = &hsp_4612_4612_explorers,
};

pub const robinhoodchain_4663_rpcs = [_][]const u8{
    "https://rpc.mainnet.chain.robinhood.com",
};

pub const robinhoodchain_4663_explorers = [_]Explorer{
    .{
        .name = "Robinhood Chain Blockscout Explorer",
        .url = "https://robinhoodchain.blockscout.com",
    },
    .{
        .name = "RobinScanner",
        .url = "https://robinscanner.com",
    },
};

pub const robinhoodchain_4663 = Chain{
    .name = "Robinhood Chain",
    .chain = "Robinhood Chain",
    .chain_id = 4663,
    .network_id = 4663,
    .short_name = "robinhoodchain",
    .rpc = &robinhoodchain_4663_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://docs.robinhood.com/chain",
    .explorers = &robinhoodchain_4663_explorers,
};

pub const BSURE_4848_rpcs = [_][]const u8{
    "https://rpc.blocksurety.net/",
};

pub const BSURE_4848_explorers = [_]Explorer{
    .{
        .name = "BlockSurety Explorer",
        .url = "https://blocksurety.net",
    },
};

pub const BSURE_4848 = Chain{
    .name = "BlockSurety",
    .chain = "BSURE",
    .chain_id = 4848,
    .network_id = 4848,
    .short_name = "BSURE",
    .rpc = &BSURE_4848_rpcs,
    .native_currency = .{
        .name = "BSURE",
        .symbol = "BSURE",
        .decimals = 18,
    },
    .info_url = "https://rpc.blocksurety.net/",
    .explorers = &BSURE_4848_explorers,
};

pub const prodao_4936_rpcs = [_][]const u8{
    "https://rpc.prodao.club",
};

pub const prodao_4936_explorers = [_]Explorer{
    .{
        .name = "ProDAO Explorer",
        .url = "https://explorer.prodao.club",
    },
};

pub const prodao_4936 = Chain{
    .name = "Prodao Mainnet",
    .chain = "PROD",
    .chain_id = 4936,
    .network_id = 4936,
    .short_name = "prodao",
    .rpc = &prodao_4936_rpcs,
    .native_currency = .{
        .name = "ProDAO Token",
        .symbol = "PROD",
        .decimals = 18,
    },
    .info_url = "https://prodao.club",
    .explorers = &prodao_4936_explorers,
};

pub const MATRIX_4959_rpcs = [_][]const u8{
    "https://rpc.matrix.io",
};

pub const MATRIX_4959_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://scan.matrix.io",
    },
};

pub const MATRIX_4959 = Chain{
    .name = "Matrix AI Network",
    .chain = "MATRIX",
    .chain_id = 4959,
    .network_id = 4959,
    .short_name = "MATRIX",
    .rpc = &MATRIX_4959_rpcs,
    .native_currency = .{
        .name = "Matrix AI Network",
        .symbol = "MAN",
        .decimals = 18,
    },
    .info_url = "https://matrix.io",
    .explorers = &MATRIX_4959_explorers,
};

pub const hypr_testnet_4978_rpcs = [_][]const u8{
    "https://hypr-testnet.tail9d9f7e.ts.net",
};

pub const hypr_testnet_4978_explorers = [_]Explorer{
    .{
        .name = "hypr testnet explorer",
        .url = "https://hypr-testnet.tail9d9f7e.ts.net",
    },
};

pub const hypr_testnet_4978 = Chain{
    .name = "hypr testnet",
    .chain = "HYPR",
    .chain_id = 4978,
    .network_id = 4978,
    .short_name = "hypr-testnet",
    .rpc = &hypr_testnet_4978_rpcs,
    .native_currency = .{
        .name = "hypr testnet",
        .symbol = "HYPR",
        .decimals = 18,
    },
    .info_url = "https://hypr-testnet.tail9d9f7e.ts.net",
    .explorers = &hypr_testnet_4978_explorers,
};

pub const Somnia_5031_rpcs = [_][]const u8{
    "https://api.infra.mainnet.somnia.network",
    "https://somnia-rpc.publicnode.com",
    "https://rpc.ankr.com/somnia_mainnet",
};

pub const Somnia_5031_explorers = [_]Explorer{
    .{
        .name = "Somnia Explorer",
        .url = "https://explorer.somnia.network",
    },
};

pub const Somnia_5031 = Chain{
    .name = "Somnia Mainnet",
    .chain = "SOMNIA",
    .chain_id = 5031,
    .network_id = 5031,
    .short_name = "Somnia",
    .rpc = &Somnia_5031_rpcs,
    .native_currency = .{
        .name = "SOMI",
        .symbol = "SOMI",
        .decimals = 18,
    },
    .info_url = "https://somnia.network",
    .explorers = &Somnia_5031_explorers,
};

pub const arc_5042_rpcs = [_][]const u8{
    "https://rpc.mainnet.arc.io",
    "https://rpc.blockdaemon.mainnet.arc.io",
    "https://rpc.drpc.mainnet.arc.io",
    "https://rpc.quicknode.mainnet.arc.io",
};

pub const arc_5042_explorers = [_]Explorer{
    .{
        .name = "Arc Explorer",
        .url = "https://explorer.arc.io/",
    },
};

pub const arc_5042 = Chain{
    .name = "Arc",
    .chain = "arc",
    .chain_id = 5042,
    .network_id = 5042,
    .short_name = "arc",
    .rpc = &arc_5042_rpcs,
    .native_currency = .{
        .name = "USDC",
        .symbol = "USDC",
        .decimals = 18,
    },
    .info_url = "https://www.arc.io/",
    .explorers = &arc_5042_explorers,
};

pub const fusionlayer_5070_rpcs = [_][]const u8{
    "https://rpc.fusionlayer.org",
    "https://rpc.fusionscan.net",
};

pub const fusionlayer_5070_explorers = [_]Explorer{
    .{
        .name = "FusionScan",
        .url = "https://fusionscan.net",
    },
};

pub const fusionlayer_5070 = Chain{
    .name = "FusionLayer",
    .chain = "FusionLayer",
    .chain_id = 5070,
    .network_id = 5070,
    .short_name = "fusionlayer",
    .rpc = &fusionlayer_5070_rpcs,
    .native_currency = .{
        .name = "FusionLayer",
        .symbol = "FXL",
        .decimals = 18,
    },
    .info_url = "https://fusionlayer.org",
    .explorers = &fusionlayer_5070_explorers,
};

pub const ANC_5108_rpcs = [_][]const u8{
    "https://mainnet.anychainscan.org",
};

pub const ANC_5108_explorers = [_]Explorer{
    .{
        .name = "AnyChain Explorer",
        .url = "https://anychainscan.com",
    },
};

pub const ANC_5108 = Chain{
    .name = "AnyChain",
    .chain = "ANC",
    .chain_id = 5108,
    .network_id = 5108,
    .short_name = "ANC",
    .rpc = &ANC_5108_rpcs,
    .native_currency = .{
        .name = "ANC",
        .symbol = "ANC",
        .decimals = 18,
    },
    .info_url = "https://anychainscan.com",
    .explorers = &ANC_5108_explorers,
};

pub const mocat_5151_rpcs = [_][]const u8{
    "https://devnet-rpc.mocachain.org",
};

pub const mocat_5151_explorers = [_]Explorer{
    .{
        .name = "Moca Chain Scan",
        .url = "https://devnet-scan.mocachain.org",
    },
};

pub const mocat_5151 = Chain{
    .name = "Moca Chain Devnet",
    .chain = "Moca Chain",
    .chain_id = 5151,
    .network_id = 5151,
    .short_name = "mocat",
    .rpc = &mocat_5151_rpcs,
    .native_currency = .{
        .name = "MOCA",
        .symbol = "MOCA",
        .decimals = 18,
    },
    .info_url = "https://mocachain.org",
    .explorers = &mocat_5151_explorers,
};

pub const sbtc_5200_rpcs = [_][]const u8{
    "https://rpc.silverbitcoin.org",
};

pub const sbtc_5200_explorers = [_]Explorer{
    .{
        .name = "SilverBitcoin Explorer",
        .url = "https://explorer.silverbitcoin.org/",
    },
};

pub const sbtc_5200 = Chain{
    .name = "SilverBitcoin",
    .chain = "SBTC",
    .chain_id = 5200,
    .network_id = 5200,
    .short_name = "sbtc",
    .rpc = &sbtc_5200_rpcs,
    .native_currency = .{
        .name = "SilverBitcoin",
        .symbol = "SBTC",
        .decimals = 18,
    },
    .info_url = "https://silverbitcoin.org/",
    .explorers = &sbtc_5200_explorers,
};

pub const YeYing_5432_rpcs = [_][]const u8{
    "https://blockchain.yeying.pub",
};

pub const YeYing_5432_explorers = [_]Explorer{
    .{
        .name = "YeYing Blockscout",
        .url = "https://blockscout.yeying.pub",
    },
};

pub const YeYing_5432 = Chain{
    .name = "YeYing Network",
    .chain = "YeYing",
    .chain_id = 5432,
    .network_id = 5432,
    .short_name = "YeYing",
    .rpc = &YeYing_5432_rpcs,
    .native_currency = .{
        .name = "YeYing Token",
        .symbol = "YYT",
        .decimals = 18,
    },
    .info_url = "https://yeying.pub",
    .explorers = &YeYing_5432_explorers,
};

pub const taaqo_5566_rpcs = [_][]const u8{
    "https://rpc.taaqo.com",
    "https://rpc2.taaqo.com",
    "https://rpc3.taaqo.com",
};

pub const taaqo_5566_explorers = [_]Explorer{
    .{
        .name = "TAAQO Scan",
        .url = "https://taaqoscan.com",
    },
};

pub const taaqo_5566 = Chain{
    .name = "TAAQO Mainnet",
    .chain = "TAAQO",
    .chain_id = 5566,
    .network_id = 5566,
    .short_name = "taaqo",
    .rpc = &taaqo_5566_rpcs,
    .native_currency = .{
        .name = "TAAQO",
        .symbol = "TAAQO",
        .decimals = 18,
    },
    .info_url = "https://taaqo.com",
    .explorers = &taaqo_5566_explorers,
};

pub const treasurenet_5570_rpcs = [_][]const u8{
    "https://rpc.treasurenet.io",
};

pub const treasurenet_5570_explorers = [_]Explorer{
    .{
        .name = "Treasurenet EVM BlockExplorer",
        .url = "https://scan.treasurenet.io",
    },
};

pub const treasurenet_5570 = Chain{
    .name = "Treasurenet Aurora",
    .chain = "Treasurenet Aurora",
    .chain_id = 5570,
    .network_id = 5570,
    .short_name = "treasurenet",
    .rpc = &treasurenet_5570_rpcs,
    .native_currency = .{
        .name = "UNIT",
        .symbol = "UNIT",
        .decimals = 18,
    },
    .info_url = "https://www.treasurenet.io",
    .explorers = &treasurenet_5570_explorers,
};

pub const msc_5577_rpcs = [_][]const u8{
    "https://rpc.taaqo.com",
};

pub const msc_5577 = Chain{
    .name = "MSC Blockchain",
    .chain = "MSC",
    .chain_id = 5577,
    .network_id = 5577,
    .short_name = "msc",
    .rpc = &msc_5577_rpcs,
    .native_currency = .{
        .name = "MSC Token",
        .symbol = "MSC",
        .decimals = 18,
    },
    .info_url = "https://taaqo.com",
    .explorers = &.{},
};

pub const evo_nova_5641_rpcs = [_][]const u8{
    "https://rpc-nova.evorium.network",
};

pub const evo_nova_5641_explorers = [_]Explorer{
    .{
        .name = "Evorium Nova Explorer",
        .url = "https://testnet.evorium.network",
    },
};

pub const evo_nova_5641 = Chain{
    .name = "Evorium Nova Testnet",
    .chain = "EvoriumEVM",
    .chain_id = 5641,
    .network_id = 5641,
    .short_name = "evo-nova",
    .rpc = &evo_nova_5641_rpcs,
    .native_currency = .{
        .name = "Testnet EVO",
        .symbol = "tEVO",
        .decimals = 18,
    },
    .info_url = "https://evorium.network",
    .explorers = &evo_nova_5641_explorers,
};

pub const tburn_5800_rpcs = [_][]const u8{
    "https://rpc.tburn.io",
    "https://rpc2.tburn.io",
    "https://rpc3.tburn.io",
    "https://rpc4.tburn.io",
    "https://rpc5.tburn.io",
};

pub const tburn_5800_explorers = [_]Explorer{
    .{
        .name = "TBURNScan",
        .url = "https://scan.tburn.io/scan",
    },
};

pub const tburn_5800 = Chain{
    .name = "TBURN Mainnet",
    .chain = "TBURN",
    .chain_id = 5800,
    .network_id = 5800,
    .short_name = "tburn",
    .rpc = &tburn_5800_rpcs,
    .native_currency = .{
        .name = "TBURN",
        .symbol = "TBURN",
        .decimals = 18,
    },
    .info_url = "https://tburn.io",
    .explorers = &tburn_5800_explorers,
};

pub const shib_5816_rpcs = [_][]const u8{
    "https://rpc.shib.club/",
};

pub const shib_5816_explorers = [_]Explorer{
    .{
        .name = "Shib Explorer",
        .url = "https://explorer.shib.club/",
    },
};

pub const shib_5816 = Chain{
    .name = "Shib Mainnet",
    .chain = "SHIB",
    .chain_id = 5816,
    .network_id = 5816,
    .short_name = "shib",
    .rpc = &shib_5816_rpcs,
    .native_currency = .{
        .name = "SHIB",
        .symbol = "SHIB",
        .decimals = 18,
    },
    .info_url = "https://doc.shib.club/",
    .explorers = &shib_5816_explorers,
};

pub const dukong_5887_rpcs = [_][]const u8{
    "https://evm.dukong.mantrachain.io",
};

pub const dukong_5887_explorers = [_]Explorer{
    .{
        .name = "Dukong Explorer",
        .url = "http://mantrascan.io",
    },
};

pub const dukong_5887 = Chain{
    .name = "MANTRACHAIN Testnet",
    .chain = "Dukong",
    .chain_id = 5887,
    .network_id = 5887,
    .short_name = "dukong",
    .rpc = &dukong_5887_rpcs,
    .native_currency = .{
        .name = "OM",
        .symbol = "OM",
        .decimals = 18,
    },
    .info_url = "https://mantrachain.io",
    .explorers = &dukong_5887_explorers,
};

pub const tea_6122_rpcs = [_][]const u8{
    "https://rpc.tea.xyz",
};

pub const tea_6122_explorers = [_]Explorer{
    .{
        .name = "Blockscout",
        .url = "https://explorer.tea.xyz",
    },
};

pub const tea_6122 = Chain{
    .name = "Tea Mainnet",
    .chain = "TEA",
    .chain_id = 6122,
    .network_id = 6122,
    .short_name = "tea",
    .rpc = &tea_6122_rpcs,
    .native_currency = .{
        .name = "Tea",
        .symbol = "TEA",
        .decimals = 18,
    },
    .info_url = "https://tea.xyz",
    .explorers = &tea_6122_explorers,
};

pub const bmz_6162_rpcs = [_][]const u8{
    "https://testnet-evm-rpc.blockmaze.com",
    "https://testnet-evm-rpc-arc.blockmaze.com",
};

pub const bmz_6162_explorers = [_]Explorer{
    .{
        .name = "Blockmaze testnet explorer",
        .url = "https://testnet-explorer.bmzscan.com/",
    },
};

pub const bmz_6162 = Chain{
    .name = "Blockmaze Testnet V2",
    .chain = "BLOCKMAZE",
    .chain_id = 6162,
    .network_id = 6162,
    .short_name = "bmz",
    .rpc = &bmz_6162_rpcs,
    .native_currency = .{
        .name = "BMZ",
        .symbol = "BMZ",
        .decimals = 18,
    },
    .info_url = "https://blockmaze.com",
    .explorers = &bmz_6162_explorers,
};

pub const BMZ_6163_rpcs = [_][]const u8{
    "https://evm-rpc.testnet.stackflow.site",
};

pub const BMZ_6163_explorers = [_]Explorer{
    .{
        .name = "Blockmaze testnet explorer",
        .url = "https://explorer.testnet.stackflow.site",
    },
};

pub const BMZ_6163 = Chain{
    .name = "Blockmaze Testnet",
    .chain = "BLOCKMAZE",
    .chain_id = 6163,
    .network_id = 6163,
    .short_name = "BMZ",
    .rpc = &BMZ_6163_rpcs,
    .native_currency = .{
        .name = "BMZ",
        .symbol = "BMZ",
        .decimals = 18,
    },
    .info_url = "https://blockmaze.com",
    .explorers = &BMZ_6163_explorers,
};

pub const bmz_6165_rpcs = [_][]const u8{
    "https://rpc.blockmaze.org",
};

pub const bmz_6165_explorers = [_]Explorer{
    .{
        .name = "Blockmaze mainnet explorer",
        .url = "https://bmzscan.com/",
    },
};

pub const bmz_6165 = Chain{
    .name = "Blockmaze Mainnet",
    .chain = "BLOCKMAZE",
    .chain_id = 6165,
    .network_id = 6165,
    .short_name = "bmz",
    .rpc = &bmz_6165_rpcs,
    .native_currency = .{
        .name = "BMZ",
        .symbol = "BMZ",
        .decimals = 18,
    },
    .info_url = "https://blockmaze.com",
    .explorers = &bmz_6165_explorers,
};

pub const dual_6301_rpcs = [_][]const u8{
    "https://rpc.dual.network",
};

pub const dual_6301_explorers = [_]Explorer{
    .{
        .name = "Dual Network",
        .url = "https://blockscout.dual.network",
    },
};

pub const dual_6301 = Chain{
    .name = "dual network",
    .chain = "DUAL",
    .chain_id = 6301,
    .network_id = 6301,
    .short_name = "dual",
    .rpc = &dual_6301_rpcs,
    .native_currency = .{
        .name = "dual",
        .symbol = "dual",
        .decimals = 18,
    },
    .info_url = "https://dual.org",
    .explorers = &dual_6301_explorers,
};

pub const lrb_6359_rpcs = [_][]const u8{
    "https://rpc.lorachain.org",
};

pub const lrb_6359_explorers = [_]Explorer{
    .{
        .name = "lorachain",
        .url = "https://explorer.lorachain.org",
    },
};

pub const lrb_6359 = Chain{
    .name = "LoraChain Mainnet",
    .chain = "LRB",
    .chain_id = 6359,
    .network_id = 6359,
    .short_name = "lrb",
    .rpc = &lrb_6359_rpcs,
    .native_currency = .{
        .name = "LRB",
        .symbol = "LRB",
        .decimals = 18,
    },
    .info_url = "https://www.deeplink.world",
    .explorers = &lrb_6359_explorers,
};

pub const ynxtest_6423_rpcs = [_][]const u8{
    "https://evm.ynxweb4.com",
};

pub const ynxtest_6423_explorers = [_]Explorer{
    .{
        .name = "YNX Explorer",
        .url = "https://explorer.ynxweb4.com",
    },
};

pub const ynxtest_6423 = Chain{
    .name = "YNX Testnet",
    .chain = "YNX",
    .chain_id = 6423,
    .network_id = 6423,
    .short_name = "ynxtest",
    .rpc = &ynxtest_6423_rpcs,
    .native_currency = .{
        .name = "YNXT",
        .symbol = "YNXT",
        .decimals = 18,
    },
    .info_url = "https://ynxweb4.com",
    .explorers = &ynxtest_6423_explorers,
};

pub const awaji_6497_rpcs = [_][]const u8{
    "https://rpc.awaji.mizuhiki.io",
};

pub const awaji_6497_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://awaji.blockscout.com",
    },
};

pub const awaji_6497 = Chain{
    .name = "MIZUHIKI Testnet Awaji",
    .chain = "MIZU",
    .chain_id = 6497,
    .network_id = 6497,
    .short_name = "awaji",
    .rpc = &awaji_6497_rpcs,
    .native_currency = .{
        .name = "MIZU",
        .symbol = "MIZU",
        .decimals = 18,
    },
    .info_url = "https://mizuhiki.io/",
    .explorers = &awaji_6497_explorers,
};

pub const mizuhiki_6498_rpcs = [_][]const u8{
    "https://rpc.mizuhiki.io",
};

pub const mizuhiki_6498_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://mizuhiki.blockscout.com",
    },
};

pub const mizuhiki_6498 = Chain{
    .name = "MIZUHIKI Mainnet",
    .chain = "MIZU",
    .chain_id = 6498,
    .network_id = 6498,
    .short_name = "mizuhiki",
    .rpc = &mizuhiki_6498_rpcs,
    .native_currency = .{
        .name = "MIZU",
        .symbol = "MIZU",
        .decimals = 18,
    },
    .info_url = "https://mizuhiki.io/",
    .explorers = &mizuhiki_6498_explorers,
};

pub const kalis_6533_rpcs = [_][]const u8{
    "https://subnets.avax.network/kalichain/mainnet/rpc",
};

pub const kalis_6533_explorers = [_]Explorer{
    .{
        .name = "Kalichain Explorer",
        .url = "https://scan.kalichain.com",
    },
};

pub const kalis_6533 = Chain{
    .name = "Kalichain",
    .chain = "Kalichain",
    .chain_id = 6533,
    .network_id = 6533,
    .short_name = "kalis",
    .rpc = &kalis_6533_rpcs,
    .native_currency = .{
        .name = "Kalis",
        .symbol = "KALIS",
        .decimals = 18,
    },
    .info_url = "https://kalichain.com",
    .explorers = &kalis_6533_explorers,
};

pub const oma_mainnet_6623_rpcs = [_][]const u8{
    "https://rpc.omachain.org/",
};

pub const oma_mainnet_6623_explorers = [_]Explorer{
    .{
        .name = "OMAChain Explorer",
        .url = "https://explorer.omachain.org",
    },
};

pub const oma_mainnet_6623 = Chain{
    .name = "OMAChain Mainnet",
    .chain = "OMAChain",
    .chain_id = 6623,
    .network_id = 6623,
    .short_name = "oma-mainnet",
    .rpc = &oma_mainnet_6623_rpcs,
    .native_currency = .{
        .name = "OMA",
        .symbol = "OMA",
        .decimals = 18,
    },
    .info_url = null,
    .explorers = &oma_mainnet_6623_explorers,
};

pub const anubi_6714_rpcs = [_][]const u8{
    "https://rpc.anubispace.org",
};

pub const anubi_6714_explorers = [_]Explorer{
    .{
        .name = "browser",
        .url = "https://browser.anubispace.org",
    },
};

pub const anubi_6714 = Chain{
    .name = "ANUBIS Mainnet",
    .chain = "ANUBIS",
    .chain_id = 6714,
    .network_id = 6714,
    .short_name = "anubi",
    .rpc = &anubi_6714_rpcs,
    .native_currency = .{
        .name = "gasDAI",
        .symbol = "gasDAI",
        .decimals = 18,
    },
    .info_url = "https://docs.anubispace.org",
    .explorers = &anubi_6714_explorers,
};

pub const vex_6736_rpcs = [_][]const u8{
    "https://vexascan.com/rpc",
};

pub const vex_6736_explorers = [_]Explorer{
    .{
        .name = "Vexascan",
        .url = "https://vexascan.com/evm",
    },
    .{
        .name = "WIND Explorer",
        .url = "https://explorer.windcrypto.com/evm",
    },
};

pub const vex_6736 = Chain{
    .name = "Vexanium Mainnet",
    .chain = "VEX",
    .chain_id = 6736,
    .network_id = 6736,
    .short_name = "vex",
    .rpc = &vex_6736_rpcs,
    .native_currency = .{
        .name = "Vexanium",
        .symbol = "VEX",
        .decimals = 18,
    },
    .info_url = "https://vexascan.com",
    .explorers = &vex_6736_explorers,
};

pub const lust_6923_rpcs = [_][]const u8{
    "https://rpc.lustchain.org",
};

pub const lust_6923_explorers = [_]Explorer{
    .{
        .name = "LUST Explorer",
        .url = "https://explorer.lustchain.org/",
    },
};

pub const lust_6923 = Chain{
    .name = "LUST Chain",
    .chain = "LUST",
    .chain_id = 6923,
    .network_id = 6923,
    .short_name = "lust",
    .rpc = &lust_6923_rpcs,
    .native_currency = .{
        .name = "LUST",
        .symbol = "LST",
        .decimals = 18,
    },
    .info_url = "https://lustchain.org/",
    .explorers = &lust_6923_explorers,
};

pub const Growfitter_mainnet_7084_rpcs = [_][]const u8{
    "https://rpc-mainnet-growfitter-rl.cogitus.io/ext/bc/2PdUCtQocNDvbVWy8ch4PdaicTHA2h5keHLAAPcs9Pr8tYaUg3/rpc",
};

pub const Growfitter_mainnet_7084_explorers = [_]Explorer{
    .{
        .name = "Growfitter Explorer",
        .url = "https://explorer-growfitter-mainnet.cogitus.io",
    },
};

pub const Growfitter_mainnet_7084 = Chain{
    .name = "Growfitter Mainnet",
    .chain = "Growfitter",
    .chain_id = 7084,
    .network_id = 7084,
    .short_name = "Growfitter-mainnet",
    .rpc = &Growfitter_mainnet_7084_rpcs,
    .native_currency = .{
        .name = "GFIT",
        .symbol = "GFIT",
        .decimals = 18,
    },
    .info_url = "https://www.growfitter.com/",
    .explorers = &Growfitter_mainnet_7084_explorers,
};

pub const srx_7119_rpcs = [_][]const u8{
    "https://rpc.sentrixchain.com",
};

pub const srx_7119_explorers = [_]Explorer{
    .{
        .name = "Sentrix Scan",
        .url = "https://scan.sentrixchain.com",
    },
};

pub const srx_7119 = Chain{
    .name = "Sentrix Chain",
    .chain = "SRX",
    .chain_id = 7119,
    .network_id = 7119,
    .short_name = "srx",
    .rpc = &srx_7119_rpcs,
    .native_currency = .{
        .name = "Sentrix",
        .symbol = "SRX",
        .decimals = 18,
    },
    .info_url = "https://sentrixchain.com",
    .explorers = &srx_7119_explorers,
};

pub const srx_testnet_7120_rpcs = [_][]const u8{
    "https://testnet-rpc.sentrixchain.com",
};

pub const srx_testnet_7120_explorers = [_]Explorer{
    .{
        .name = "Sentrix Scan (Testnet)",
        .url = "https://scan-testnet.sentrixchain.com",
    },
};

pub const srx_testnet_7120 = Chain{
    .name = "Sentrix Testnet",
    .chain = "SRX",
    .chain_id = 7120,
    .network_id = 7120,
    .short_name = "srx-testnet",
    .rpc = &srx_testnet_7120_rpcs,
    .native_currency = .{
        .name = "Sentrix",
        .symbol = "SRX",
        .decimals = 18,
    },
    .info_url = "https://sentrixchain.com",
    .explorers = &srx_testnet_7120_explorers,
};

pub const vrcn_7131_rpcs = [_][]const u8{
    "https://rpc-mainnet-4.vrcchain.com/",
};

pub const vrcn_7131_explorers = [_]Explorer{
    .{
        .name = "VRC Explorer",
        .url = "https://explorer.vrcchain.com",
    },
    .{
        .name = "VRCNChain",
        .url = "https://vrcchain.com",
    },
    .{
        .name = "dxbchain",
        .url = "https://dxb.vrcchain.com",
    },
};

pub const vrcn_7131 = Chain{
    .name = "VRCN Chain Mainnet",
    .chain = "VRCN",
    .chain_id = 7131,
    .network_id = 7131,
    .short_name = "vrcn",
    .rpc = &vrcn_7131_rpcs,
    .native_currency = .{
        .name = "VRCN Chain",
        .symbol = "VRCN",
        .decimals = 18,
    },
    .info_url = "https://vrccoin.com",
    .explorers = &vrcn_7131_explorers,
};

pub const vyre_testnet_7357_rpcs = [_][]const u8{
    "https://testnet-rpc.vyrechain.com",
};

pub const vyre_testnet_7357_explorers = [_]Explorer{
    .{
        .name = "VYRE Testnet Explorer",
        .url = "https://explorer.vyrechain.com",
    },
};

pub const vyre_testnet_7357 = Chain{
    .name = "VYRE Testnet",
    .chain = "VYRE",
    .chain_id = 7357,
    .network_id = 7357,
    .short_name = "vyre-testnet",
    .rpc = &vyre_testnet_7357_rpcs,
    .native_currency = .{
        .name = "USDC",
        .symbol = "USDC",
        .decimals = 18,
    },
    .info_url = "https://vyrechain.com",
    .explorers = &vyre_testnet_7357_explorers,
};

pub const cmxr_l2_7373_rpcs = [_][]const u8{
    "https://rpcl2.cmxofficial.com",
};

pub const cmxr_l2_7373 = Chain{
    .name = "CRYMAD Chain Mainnet L2 Network",
    .chain = "CMX",
    .chain_id = 7373,
    .network_id = 7373,
    .short_name = "cmxr-l2",
    .rpc = &cmxr_l2_7373_rpcs,
    .native_currency = .{
        .name = "CRYMADX REAL",
        .symbol = "CMX-R",
        .decimals = 18,
    },
    .info_url = "https://cmxofficial.com/",
    .explorers = &.{},
};

pub const libertas_7474_rpcs = [_][]const u8{
    "https://rpc.libertas.network",
};

pub const libertas_7474 = Chain{
    .name = "LIBERTAS Mainnet",
    .chain = "LBT",
    .chain_id = 7474,
    .network_id = 7474,
    .short_name = "libertas",
    .rpc = &libertas_7474_rpcs,
    .native_currency = .{
        .name = "Libertas Token",
        .symbol = "LBT",
        .decimals = 18,
    },
    .info_url = "https://closefast.tech",
    .explorers = &.{},
};

pub const carrchain_7667_rpcs = [_][]const u8{
    "https://rpc.carrchain.io",
};

pub const carrchain_7667_explorers = [_]Explorer{
    .{
        .name = "CarrScan",
        .url = "https://carrscan.io",
    },
};

pub const carrchain_7667 = Chain{
    .name = "CarrChain Mainnet",
    .chain = "CARR",
    .chain_id = 7667,
    .network_id = 7667,
    .short_name = "carrchain",
    .rpc = &carrchain_7667_rpcs,
    .native_currency = .{
        .name = "CARR",
        .symbol = "CARR",
        .decimals = 18,
    },
    .info_url = "https://carrchain.io",
    .explorers = &carrchain_7667_explorers,
};

pub const tjr_testnet_7733_rpcs = [_][]const u8{
    "https://rpc.testnet.tajirchain.com",
};

pub const tjr_testnet_7733_explorers = [_]Explorer{
    .{
        .name = "TJR Scan",
        .url = "https://testnet.tjrscan.com",
    },
};

pub const tjr_testnet_7733 = Chain{
    .name = "Tajirchain Testnet",
    .chain = "TJR",
    .chain_id = 7733,
    .network_id = 7733,
    .short_name = "tjr-testnet",
    .rpc = &tjr_testnet_7733_rpcs,
    .native_currency = .{
        .name = "Tajirchain Test Token",
        .symbol = "TJR",
        .decimals = 18,
    },
    .info_url = "https://tajirchain.com",
    .explorers = &tjr_testnet_7733_explorers,
};

pub const embr_7773_rpcs = [_][]const u8{
    "https://emberchain.org/api/rpc",
};

pub const embr_7773_explorers = [_]Explorer{
    .{
        .name = "Emberchain Explorer",
        .url = "https://emberchain.org/ledger",
    },
};

pub const embr_7773 = Chain{
    .name = "Emberchain",
    .chain = "EMBR",
    .chain_id = 7773,
    .network_id = 7773,
    .short_name = "embr",
    .rpc = &embr_7773_rpcs,
    .native_currency = .{
        .name = "Ember",
        .symbol = "EMBR",
        .decimals = 18,
    },
    .info_url = "https://emberchain.org",
    .explorers = &embr_7773_explorers,
};

pub const PandaSea_mainnet_7776_rpcs = [_][]const u8{
    "https://rpc-mainnet-pandasea-rl.cogitus.io/ext/bc/2gYSmRb7tjS4wb5FHFx8NBhwQgARWEdr8MGVC7v8UWJJFkEpTj/rpc",
};

pub const PandaSea_mainnet_7776_explorers = [_]Explorer{
    .{
        .name = "PandaSea Explorer",
        .url = "https://explorer.pandasea.io",
    },
};

pub const PandaSea_mainnet_7776 = Chain{
    .name = "PandaSea Mainnet",
    .chain = "PandaSea",
    .chain_id = 7776,
    .network_id = 7776,
    .short_name = "PandaSea mainnet",
    .rpc = &PandaSea_mainnet_7776_rpcs,
    .native_currency = .{
        .name = "PANDA",
        .symbol = "PANDA",
        .decimals = 18,
    },
    .info_url = "https://pandasea.io/",
    .explorers = &PandaSea_mainnet_7776_explorers,
};

pub const ptb_7820_rpcs = [_][]const u8{
    "https://mainnet.portaltobitcoin.net",
};

pub const ptb_7820_explorers = [_]Explorer{
    .{
        .name = "Portal-To-Bitcoin Explorer",
        .url = "https://explorer.portaltobitcoin.net",
    },
};

pub const ptb_7820 = Chain{
    .name = "Portal-To-Bitcoin Mainnet",
    .chain = "PTB",
    .chain_id = 7820,
    .network_id = 7820,
    .short_name = "ptb",
    .rpc = &ptb_7820_rpcs,
    .native_currency = .{
        .name = "Portal-To-Bitcoin",
        .symbol = "PTB",
        .decimals = 18,
    },
    .info_url = "https://portaltobitcoin.com",
    .explorers = &ptb_7820_explorers,
};

pub const hyve_7847_rpcs = [_][]const u8{
    "https://rpc.hyvechain.com",
};

pub const hyve_7847_explorers = [_]Explorer{
    .{
        .name = "HyveChain Explorer",
        .url = "https://explorer.hyvechain.com",
    },
};

pub const hyve_7847 = Chain{
    .name = "HyveChain",
    .chain = "HYVE",
    .chain_id = 7847,
    .network_id = 7847,
    .short_name = "hyve",
    .rpc = &hyve_7847_rpcs,
    .native_currency = .{
        .name = "HYVE",
        .symbol = "HYVE",
        .decimals = 18,
    },
    .info_url = "https://hyvechain.com",
    .explorers = &hyve_7847_explorers,
};

pub const pc_7890_rpcs = [_][]const u8{
    "https://publicrpc.panchain.io",
};

pub const pc_7890_explorers = [_]Explorer{
    .{
        .name = "Blockscout",
        .url = "https://scan.panchain.io",
    },
};

pub const pc_7890 = Chain{
    .name = "Panchain Mainnet",
    .chain = "PC",
    .chain_id = 7890,
    .network_id = 7890,
    .short_name = "pc",
    .rpc = &pc_7890_rpcs,
    .native_currency = .{
        .name = "Pan Coin",
        .symbol = "PC",
        .decimals = 18,
    },
    .info_url = "https://panchain.io",
    .explorers = &pc_7890_explorers,
};

pub const univex_7932_rpcs = [_][]const u8{
    "https://rpc.univexnetwork.org",
};

pub const univex_7932_explorers = [_]Explorer{
    .{
        .name = "Univex Explorer",
        .url = "https://explorer.univexnetwork.org",
    },
};

pub const univex_7932 = Chain{
    .name = "Univex Network",
    .chain = "UNIVEX",
    .chain_id = 7932,
    .network_id = 7932,
    .short_name = "univex",
    .rpc = &univex_7932_rpcs,
    .native_currency = .{
        .name = "Univex",
        .symbol = "UNIVEX",
        .decimals = 18,
    },
    .info_url = "https://univexnetwork.org",
    .explorers = &univex_7932_explorers,
};

pub const bmn_8006_rpcs = [_][]const u8{
    "https://connect.bmnscan.com",
};

pub const bmn_8006_explorers = [_]Explorer{
    .{
        .name = "bmnscan",
        .url = "https://bmnscan.com",
    },
};

pub const bmn_8006 = Chain{
    .name = "BMN Smart Chain",
    .chain = "BMN",
    .chain_id = 8006,
    .network_id = 8006,
    .short_name = "bmn",
    .rpc = &bmn_8006_rpcs,
    .native_currency = .{
        .name = "BMN Coin",
        .symbol = "BMN",
        .decimals = 18,
    },
    .info_url = "https://bmncoin.com",
    .explorers = &bmn_8006_explorers,
};

pub const lerax_8125_rpcs = [_][]const u8{
    "https://rpc-testnet-dataseed.lerax.org",
};

pub const lerax_8125_explorers = [_]Explorer{
    .{
        .name = "Leraxscan Testnet",
        .url = "https://testnet.leraxscan.com/",
    },
};

pub const lerax_8125 = Chain{
    .name = "Lerax Chain Testnet",
    .chain = "LERAX",
    .chain_id = 8125,
    .network_id = 8125,
    .short_name = "lerax",
    .rpc = &lerax_8125_rpcs,
    .native_currency = .{
        .name = "Lerax",
        .symbol = "tLRX",
        .decimals = 18,
    },
    .info_url = "https://lerax.org/",
    .explorers = &lerax_8125_explorers,
};

pub const alpen_8150_rpcs = [_][]const u8{
    "https://rpc.testnet.alpenlabs.io",
};

pub const alpen_8150_explorers = [_]Explorer{
    .{
        .name = "Alpen Testnet Explorer",
        .url = "https://explorer.testnet.alpenlabs.io",
    },
};

pub const alpen_8150 = Chain{
    .name = "Alpen Testnet II",
    .chain = "Alpen",
    .chain_id = 8150,
    .network_id = 8150,
    .short_name = "alpen",
    .rpc = &alpen_8150_rpcs,
    .native_currency = .{
        .name = "Signet BTC",
        .symbol = "sBTC",
        .decimals = 8,
    },
    .info_url = "https://docs.alpenlabs.io",
    .explorers = &alpen_8150_explorers,
};

pub const svm_testnet_8163_rpcs = [_][]const u8{
    "https://evmrpc.blazescanner.org",
};

pub const svm_testnet_8163_explorers = [_]Explorer{
    .{
        .name = "SVM Scan",
        .url = "https://svmscan.blazeapps.org",
    },
};

pub const svm_testnet_8163 = Chain{
    .name = "Steem Virtual Machine Testnet",
    .chain = "SVM",
    .chain_id = 8163,
    .network_id = 8163,
    .short_name = "svm-testnet",
    .rpc = &svm_testnet_8163_rpcs,
    .native_currency = .{
        .name = "STEEM",
        .symbol = "STEEM",
        .decimals = 18,
    },
    .info_url = "https://svmscan.blazeapps.org",
    .explorers = &svm_testnet_8163_explorers,
};

pub const lcai_t_8200_rpcs = [_][]const u8{
    "https://rpc.testnet.lightchain.ai",
};

pub const lcai_t_8200_explorers = [_]Explorer{
    .{
        .name = "Lightchain Testnet Explorer",
        .url = "https://testnet.lightscan.app",
    },
};

pub const lcai_t_8200 = Chain{
    .name = "LightchainAI Testnet",
    .chain = "LCAI",
    .chain_id = 8200,
    .network_id = 8200,
    .short_name = "lcai-t",
    .rpc = &lcai_t_8200_rpcs,
    .native_currency = .{
        .name = "LightchainAI",
        .symbol = "LCAI",
        .decimals = 18,
    },
    .info_url = "https://lightchain.ai",
    .explorers = &lcai_t_8200_explorers,
};

pub const forknet_8338_rpcs = [_][]const u8{
    "https://rpc-forknet.t.conduit.xyz",
};

pub const forknet_8338_explorers = [_]Explorer{
    .{
        .name = "forkscan",
        .url = "https://forkscan.org",
    },
};

pub const forknet_8338 = Chain{
    .name = "Forknet",
    .chain = "Forknet",
    .chain_id = 8338,
    .network_id = 8338,
    .short_name = "forknet",
    .rpc = &forknet_8338_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://forknet.io",
    .explorers = &forknet_8338_explorers,
};

pub const bry_8379_rpcs = [_][]const u8{
    "https://bery.in/rpc",
};

pub const bry_8379_explorers = [_]Explorer{
    .{
        .name = "Bery Explorer",
        .url = "https://bery.in/explorer",
    },
};

pub const bry_8379 = Chain{
    .name = "Bery",
    .chain = "BRY",
    .chain_id = 8379,
    .network_id = 8379,
    .short_name = "bry",
    .rpc = &bry_8379_rpcs,
    .native_currency = .{
        .name = "BRY",
        .symbol = "BRY",
        .decimals = 18,
    },
    .info_url = "https://bery.in",
    .explorers = &bry_8379_explorers,
};

pub const ACN_8700_rpcs = [_][]const u8{
    "https://auto-evm.chronos.autonomys.xyz/ws",
};

pub const ACN_8700_explorers = [_]Explorer{
    .{
        .name = "Autonomys Chronos Testnet Explorer",
        .url = "https://explorer.auto-evm.chronos.autonomys.xyz",
    },
};

pub const ACN_8700 = Chain{
    .name = "Autonomys Chronos Testnet",
    .chain = "Autonomys EVM Chronos",
    .chain_id = 8700,
    .network_id = 8700,
    .short_name = "ACN",
    .rpc = &ACN_8700_rpcs,
    .native_currency = .{
        .name = "tAI3",
        .symbol = "tAI3",
        .decimals = 18,
    },
    .info_url = "https://www.autonomys.xyz",
    .explorers = &ACN_8700_explorers,
};

pub const ebc_8721_rpcs = [_][]const u8{
    "https://rpc.ebcscan.net",
};

pub const ebc_8721_explorers = [_]Explorer{
    .{
        .name = "EBCScan",
        .url = "https://ebcscan.net",
    },
};

pub const ebc_8721 = Chain{
    .name = "EB-Chain",
    .chain = "EBC",
    .chain_id = 8721,
    .network_id = 8721,
    .short_name = "ebc",
    .rpc = &ebc_8721_rpcs,
    .native_currency = .{
        .name = "EBC Token",
        .symbol = "EBC",
        .decimals = 18,
    },
    .info_url = "https://eb-chain.com",
    .explorers = &ebc_8721_explorers,
};

pub const ward_8765_rpcs = [_][]const u8{
    "https://evm.wardenprotocol.org",
};

pub const ward_8765_explorers = [_]Explorer{
    .{
        .name = "Warden Labs",
        .url = "https://explorer.wardenprotocol.org",
    },
};

pub const ward_8765 = Chain{
    .name = "Warden",
    .chain = "WARD",
    .chain_id = 8765,
    .network_id = 8765,
    .short_name = "ward",
    .rpc = &ward_8765_rpcs,
    .native_currency = .{
        .name = "WARD",
        .symbol = "WARD",
        .decimals = 18,
    },
    .info_url = "https://wardenprotocol.org/",
    .explorers = &ward_8765_explorers,
};

pub const TICS_9030_rpcs = [_][]const u8{
    "https://rpc.qubetics.com",
};

pub const TICS_9030_explorers = [_]Explorer{
    .{
        .name = "QUBETICS mainnet explorer",
        .url = "https://ticsscan.com",
    },
};

pub const TICS_9030 = Chain{
    .name = "Qubetics Mainnet",
    .chain = "QUBETICS",
    .chain_id = 9030,
    .network_id = 9030,
    .short_name = "TICS",
    .rpc = &TICS_9030_rpcs,
    .native_currency = .{
        .name = "TICS",
        .symbol = "TICS",
        .decimals = 18,
    },
    .info_url = "https://www.qubetics.com",
    .explorers = &TICS_9030_explorers,
};

pub const xyb_testnet_9194_rpcs = [_][]const u8{
    "https://xyberchain-rpc.xyz/",
};

pub const xyb_testnet_9194_explorers = [_]Explorer{
    .{
        .name = "Xyberchain Explorer",
        .url = "https://xyberchainexplorer.xyz/",
    },
};

pub const xyb_testnet_9194 = Chain{
    .name = "Xyberchain Testnet",
    .chain = "XYB",
    .chain_id = 9194,
    .network_id = 9194,
    .short_name = "xyb-testnet",
    .rpc = &xyb_testnet_9194_rpcs,
    .native_currency = .{
        .name = "XYB",
        .symbol = "XYB",
        .decimals = 18,
    },
    .info_url = "https://www.xyberchain.network/",
    .explorers = &xyb_testnet_9194_explorers,
};

pub const lcai_9200_rpcs = [_][]const u8{
    "https://rpc.mainnet.lightchain.ai",
};

pub const lcai_9200_explorers = [_]Explorer{
    .{
        .name = "Lightchain Explorer",
        .url = "https://lightscan.app",
    },
};

pub const lcai_9200 = Chain{
    .name = "LightchainAI Mainnet",
    .chain = "LCAI",
    .chain_id = 9200,
    .network_id = 9200,
    .short_name = "lcai",
    .rpc = &lcai_9200_rpcs,
    .native_currency = .{
        .name = "LightchainAI",
        .symbol = "LCAI",
        .decimals = 18,
    },
    .info_url = "https://lightchain.ai",
    .explorers = &lcai_9200_explorers,
};

pub const zel_9350_rpcs = [_][]const u8{
    "https://eth-rpc.node1.testnet.zano.org",
};

pub const zel_9350_explorers = [_]Explorer{
    .{
        .name = "zel",
        .url = "https://explorer.testnet.zano.org/",
    },
};

pub const zel_9350 = Chain{
    .name = "Zano Execution Layer Testnet",
    .chain = "ZEL",
    .chain_id = 9350,
    .network_id = 9350,
    .short_name = "zel",
    .rpc = &zel_9350_rpcs,
    .native_currency = .{
        .name = "Zel",
        .symbol = "ZEL",
        .decimals = 18,
    },
    .info_url = "https://zano.com",
    .explorers = &zel_9350_explorers,
};

pub const kub_9601_rpcs = [_][]const u8{
    "https://kublayer2.kubchain.io",
};

pub const kub_9601_explorers = [_]Explorer{
    .{
        .name = "KUB Layer 2 Mainnet Explorer",
        .url = "https://kublayer2.kubscan.com",
    },
};

pub const kub_9601 = Chain{
    .name = "KUB Layer 2 Mainnet",
    .chain = "KUB",
    .chain_id = 9601,
    .network_id = 9601,
    .short_name = "kub",
    .rpc = &kub_9601_rpcs,
    .native_currency = .{
        .name = "KUB",
        .symbol = "KUB",
        .decimals = 18,
    },
    .info_url = null,
    .explorers = &kub_9601_explorers,
};

pub const plasma_9745_rpcs = [_][]const u8{
    "https://rpc.plasma.to",
};

pub const plasma_9745_explorers = [_]Explorer{
    .{
        .name = "Routescan",
        .url = "https://plasmascan.to",
    },
};

pub const plasma_9745 = Chain{
    .name = "Plasma Mainnet",
    .chain = "Plasma",
    .chain_id = 9745,
    .network_id = 9745,
    .short_name = "plasma",
    .rpc = &plasma_9745_rpcs,
    .native_currency = .{
        .name = "Plasma",
        .symbol = "XPL",
        .decimals = 18,
    },
    .info_url = "https://plasma.to",
    .explorers = &plasma_9745_explorers,
};

pub const plasma_testnet_9746_rpcs = [_][]const u8{
    "https://testnet-rpc.plasma.to",
};

pub const plasma_testnet_9746_explorers = [_]Explorer{
    .{
        .name = "Routescan",
        .url = "https://testnet.plasmascan.to",
    },
};

pub const plasma_testnet_9746 = Chain{
    .name = "Plasma Testnet",
    .chain = "Plasma",
    .chain_id = 9746,
    .network_id = 9746,
    .short_name = "plasma-testnet",
    .rpc = &plasma_testnet_9746_rpcs,
    .native_currency = .{
        .name = "Plasma",
        .symbol = "XPL",
        .decimals = 18,
    },
    .info_url = "https://plasma.to",
    .explorers = &plasma_testnet_9746_explorers,
};

pub const plasma_devnet_9747_rpcs = [_][]const u8{
    "https://devnet-rpc.plasma.to",
};

pub const plasma_devnet_9747 = Chain{
    .name = "Plasma Devnet",
    .chain = "Plasma",
    .chain_id = 9747,
    .network_id = 9747,
    .short_name = "plasma-devnet",
    .rpc = &plasma_devnet_9747_rpcs,
    .native_currency = .{
        .name = "Plasma",
        .symbol = "XPL",
        .decimals = 18,
    },
    .info_url = "https://plasma.to",
    .explorers = &.{},
};

pub const timp_9818_rpcs = [_][]const u8{
    "https://rpc-testnet.imperiumscan.com",
};

pub const timp_9818_explorers = [_]Explorer{
    .{
        .name = "Imperium Scan",
        .url = "https://imperiumscan.com",
    },
};

pub const timp_9818 = Chain{
    .name = "Imperium Testnet",
    .chain = "tIMP",
    .chain_id = 9818,
    .network_id = 9818,
    .short_name = "timp",
    .rpc = &timp_9818_rpcs,
    .native_currency = .{
        .name = "Test Imperium",
        .symbol = "tIMP",
        .decimals = 18,
    },
    .info_url = "https://imperiumscan.com",
    .explorers = &timp_9818_explorers,
};

pub const imp_9819_rpcs = [_][]const u8{
    "https://rpc.imperiumscan.com",
};

pub const imp_9819_explorers = [_]Explorer{
    .{
        .name = "Imperium Scan",
        .url = "https://imperiumscan.com",
    },
};

pub const imp_9819 = Chain{
    .name = "Imperium Mainnet",
    .chain = "IMP",
    .chain_id = 9819,
    .network_id = 9819,
    .short_name = "imp",
    .rpc = &imp_9819_rpcs,
    .native_currency = .{
        .name = "Imperium",
        .symbol = "IMP",
        .decimals = 18,
    },
    .info_url = "https://imperiumscan.com",
    .explorers = &imp_9819_explorers,
};

pub const bytechain_9933_rpcs = [_][]const u8{
    "https://rpc.bexc.io",
    "https://rpc2.bexc.io",
};

pub const bytechain_9933_explorers = [_]Explorer{
    .{
        .name = "ByteChain Explorer",
        .url = "https://mainnet.bexc.io",
    },
};

pub const bytechain_9933 = Chain{
    .name = "ByteChain Mainnet",
    .chain = "BEXC",
    .chain_id = 9933,
    .network_id = 9933,
    .short_name = "bytechain",
    .rpc = &bytechain_9933_rpcs,
    .native_currency = .{
        .name = "BEXC",
        .symbol = "BEXC",
        .decimals = 18,
    },
    .info_url = "https://bexc.io",
    .explorers = &bytechain_9933_explorers,
};

pub const brevis_network_9973_rpcs = [_][]const u8{
    "https://evmrpc.brevis.network/",
};

pub const brevis_network_9973_explorers = [_]Explorer{
    .{
        .name = "Breivs ProverNet Explorer",
        .url = "https://provernet.brevis.network/",
    },
};

pub const brevis_network_9973 = Chain{
    .name = "Breivs ProverNet",
    .chain = "BREV",
    .chain_id = 9973,
    .network_id = 9973,
    .short_name = "brevis-network",
    .rpc = &brevis_network_9973_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://brevis.network/",
    .explorers = &brevis_network_9973_explorers,
};

pub const ethw_10001_rpcs = [_][]const u8{
    "https://mainnet.ethereumpow.org/",
};

pub const ethw_10001_explorers = [_]Explorer{
    .{
        .name = "Oklink",
        .url = "https://www.oklink.com/ethw/",
    },
};

pub const ethw_10001 = Chain{
    .name = "ETHW-mainnet",
    .chain = "ETHW",
    .chain_id = 10001,
    .network_id = 10001,
    .short_name = "ethw",
    .rpc = &ethw_10001_rpcs,
    .native_currency = .{
        .name = "EthereumPoW",
        .symbol = "ETHW",
        .decimals = 18,
    },
    .info_url = "https://ethereumpow.org/",
    .explorers = &ethw_10001_explorers,
};

pub const GateLayer_10088_rpcs = [_][]const u8{
    "https://gatelayer-mainnet.gatenode.cc",
};

pub const GateLayer_10088_explorers = [_]Explorer{
    .{
        .name = "GateLayer",
        .url = "https://www.gatescan.org/gatelayer",
    },
};

pub const GateLayer_10088 = Chain{
    .name = "Gate Layer",
    .chain = "GT",
    .chain_id = 10088,
    .network_id = 10088,
    .short_name = "GateLayer",
    .rpc = &GateLayer_10088_rpcs,
    .native_currency = .{
        .name = "GT",
        .symbol = "GT",
        .decimals = 18,
    },
    .info_url = "https://gatechain.io/gatelayer",
    .explorers = &GateLayer_10088_explorers,
};

pub const ozone_10120_rpcs = [_][]const u8{
    "https://rpc-testnet.ozonescan.com",
};

pub const ozone_10120_explorers = [_]Explorer{
    .{
        .name = "Ozone Chain Explorer",
        .url = "https://testnet.ozonescan.com",
    },
};

pub const ozone_10120 = Chain{
    .name = "Ozone Testnet",
    .chain = "OZONE",
    .chain_id = 10120,
    .network_id = 10120,
    .short_name = "ozone",
    .rpc = &ozone_10120_rpcs,
    .native_currency = .{
        .name = "TestOzone",
        .symbol = "tOZONE",
        .decimals = 18,
    },
    .info_url = "https://ozonechain.com",
    .explorers = &ozone_10120_explorers,
};

pub const ozone_10121_rpcs = [_][]const u8{
    "https://chain.ozonescan.com",
};

pub const ozone_10121_explorers = [_]Explorer{
    .{
        .name = "Ozone Chain Explorer",
        .url = "https://ozonescan.com",
    },
};

pub const ozone_10121 = Chain{
    .name = "Ozone Mainnet",
    .chain = "OZONE",
    .chain_id = 10121,
    .network_id = 10121,
    .short_name = "ozone",
    .rpc = &ozone_10121_rpcs,
    .native_currency = .{
        .name = "Ozone",
        .symbol = "OZONE",
        .decimals = 18,
    },
    .info_url = "https://ozonechain.com",
    .explorers = &ozone_10121_explorers,
};

pub const mova_10323_rpcs = [_][]const u8{
    "https://mars.rpc.movachain.com",
};

pub const mova_10323_explorers = [_]Explorer{
    .{
        .name = "marsscan",
        .url = "https://scan.mars.movachain.com",
    },
};

pub const mova_10323 = Chain{
    .name = "Mova Beta",
    .chain = "MOVA",
    .chain_id = 10323,
    .network_id = 10323,
    .short_name = "mova",
    .rpc = &mova_10323_rpcs,
    .native_currency = .{
        .name = "MARS Testnet GasCoin",
        .symbol = "MARS",
        .decimals = 18,
    },
    .info_url = "https://movachain.com",
    .explorers = &mova_10323_explorers,
};

pub const limonata_testnet_10777_rpcs = [_][]const u8{
    "https://rpc.limonata.xyz",
};

pub const limonata_testnet_10777_explorers = [_]Explorer{
    .{
        .name = "Limonata Explorer",
        .url = "https://explorer.limonata.xyz",
    },
};

pub const limonata_testnet_10777 = Chain{
    .name = "Limonata Testnet",
    .chain = "LIMO",
    .chain_id = 10777,
    .network_id = 10777,
    .short_name = "limonata-testnet",
    .rpc = &limonata_testnet_10777_rpcs,
    .native_currency = .{
        .name = "Limonata",
        .symbol = "LIMO",
        .decimals = 18,
    },
    .info_url = "https://limonata.xyz",
    .explorers = &limonata_testnet_10777_explorers,
};

pub const gleec_11169_rpcs = [_][]const u8{
    "https://evm-rpc.gleec.com",
};

pub const gleec_11169_explorers = [_]Explorer{
    .{
        .name = "Gleec EVM Explorer",
        .url = "https://evm-explorer.gleec.com",
    },
};

pub const gleec_11169 = Chain{
    .name = "Gleec Mainnet",
    .chain = "GLEEC",
    .chain_id = 11169,
    .network_id = 11169,
    .short_name = "gleec",
    .rpc = &gleec_11169_rpcs,
    .native_currency = .{
        .name = "GLEEC",
        .symbol = "GLEEC",
        .decimals = 18,
    },
    .info_url = "https://evm-info.gleec.com/",
    .explorers = &gleec_11169_explorers,
};

pub const eth_11417_rpcs = [_][]const u8{
    "https://rpc-public-test.anq.world",
};

pub const eth_11417_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://blockscout-test.anq.world",
    },
};

pub const eth_11417 = Chain{
    .name = "Anq World Testnet",
    .chain = "ETH",
    .chain_id = 11417,
    .network_id = 11417,
    .short_name = "eth",
    .rpc = &eth_11417_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://anquantum.com/chain",
    .explorers = &eth_11417_explorers,
};

pub const nkm_11941_rpcs = [_][]const u8{
    "https://rpc.nakamcoin.com",
};

pub const nkm_11941_explorers = [_]Explorer{
    .{
        .name = "NAKAM Explorer",
        .url = "https://explorer.nakamcoin.com",
    },
};

pub const nkm_11941 = Chain{
    .name = "NAKAM Chain",
    .chain = "NKM",
    .chain_id = 11941,
    .network_id = 11941,
    .short_name = "nkm",
    .rpc = &nkm_11941_rpcs,
    .native_currency = .{
        .name = "NAKAM",
        .symbol = "NKM",
        .decimals = 18,
    },
    .info_url = "https://nakamcoin.com",
    .explorers = &nkm_11941_explorers,
};

pub const kudora_12000_rpcs = [_][]const u8{
    "https://rpc.kudora.org",
};

pub const kudora_12000_explorers = [_]Explorer{
    .{
        .name = "Kudora Explorer",
        .url = "https://blockscout.kudora.org",
    },
};

pub const kudora_12000 = Chain{
    .name = "Kudora Mainnet",
    .chain = "KUD",
    .chain_id = 12000,
    .network_id = 12000,
    .short_name = "kudora",
    .rpc = &kudora_12000_rpcs,
    .native_currency = .{
        .name = "Kudo",
        .symbol = "KUD",
        .decimals = 18,
    },
    .info_url = "https://kudora.org/",
    .explorers = &kudora_12000_explorers,
};

pub const moc_12026_rpcs = [_][]const u8{
    "https://mochan.org/api/rpc",
};

pub const moc_12026_explorers = [_]Explorer{
    .{
        .name = "MOC Explorer",
        .url = "https://mochan.org/explorer",
    },
};

pub const moc_12026 = Chain{
    .name = "MOC Blockchain",
    .chain = "MOC",
    .chain_id = 12026,
    .network_id = 12026,
    .short_name = "moc",
    .rpc = &moc_12026_rpcs,
    .native_currency = .{
        .name = "MOC",
        .symbol = "MOC",
        .decimals = 18,
    },
    .info_url = "https://mochan.org",
    .explorers = &moc_12026_explorers,
};

pub const l2p_12216_rpcs = [_][]const u8{
    "https://rpc.l2protocol.com",
};

pub const l2p_12216_explorers = [_]Explorer{
    .{
        .name = "L2 Protocol explorer",
        .url = "https://l2pscan.com",
    },
};

pub const l2p_12216 = Chain{
    .name = "L2 Protocol Mainnet",
    .chain = "L2P",
    .chain_id = 12216,
    .network_id = 12216,
    .short_name = "l2p",
    .rpc = &l2p_12216_rpcs,
    .native_currency = .{
        .name = "L2P",
        .symbol = "L2P",
        .decimals = 18,
    },
    .info_url = "https://l2protocol.com",
    .explorers = &l2p_12216_explorers,
};

pub const amax_12248_rpcs = [_][]const u8{
    "https://tntrpc.evascan.io/",
};

pub const amax_12248_explorers = [_]Explorer{
    .{
        .name = "evascan",
        .url = "https://testnet.evascan.io/",
    },
};

pub const amax_12248 = Chain{
    .name = "Armonia Eva Chain Testnet",
    .chain = "AMAX",
    .chain_id = 12248,
    .network_id = 12248,
    .short_name = "amax",
    .rpc = &amax_12248_rpcs,
    .native_currency = .{
        .name = "AMAX",
        .symbol = "AMAX",
        .decimals = 18,
    },
    .info_url = "https://amax.network/",
    .explorers = &amax_12248_explorers,
};

pub const ctcchain_12301_rpcs = [_][]const u8{
    "https://rpc.tantin.com",
};

pub const ctcchain_12301_explorers = [_]Explorer{
    .{
        .name = "CTC Chain Explorer",
        .url = "https://scan.tantin.com",
    },
};

pub const ctcchain_12301 = Chain{
    .name = "CTC Chain Mainnet",
    .chain = "CTC",
    .chain_id = 12301,
    .network_id = 12301,
    .short_name = "ctcchain",
    .rpc = &ctcchain_12301_rpcs,
    .native_currency = .{
        .name = "CTC",
        .symbol = "CTC",
        .decimals = 18,
    },
    .info_url = "https://tantin.com/",
    .explorers = &ctcchain_12301_explorers,
};

pub const ctcchain_12302_rpcs = [_][]const u8{
    "https://test-rpc.tantin.com",
};

pub const ctcchain_12302_explorers = [_]Explorer{
    .{
        .name = "CTC Chain Testnet Explorer",
        .url = "https://test-scan.tantin.com",
    },
};

pub const ctcchain_12302 = Chain{
    .name = "CTC Chain Testnet",
    .chain = "CTC",
    .chain_id = 12302,
    .network_id = 12302,
    .short_name = "ctcchain",
    .rpc = &ctcchain_12302_rpcs,
    .native_currency = .{
        .name = "CTC",
        .symbol = "CTC",
        .decimals = 18,
    },
    .info_url = "https://tantin.com/",
    .explorers = &ctcchain_12302_explorers,
};

pub const ela_12343_rpcs = [_][]const u8{
    "https://api.elastos.io/eco",
};

pub const ela_12343_explorers = [_]Explorer{
    .{
        .name = "ECO Explorer",
        .url = "https://eco.elastos.io/",
    },
};

pub const ela_12343 = Chain{
    .name = "ECO Mainnet",
    .chain = "ECO",
    .chain_id = 12343,
    .network_id = 12343,
    .short_name = "ela",
    .rpc = &ela_12343_rpcs,
    .native_currency = .{
        .name = "ELA",
        .symbol = "ELA",
        .decimals = 18,
    },
    .info_url = "https://eco.elastos.io/",
    .explorers = &ela_12343_explorers,
};

pub const CLY_12369_rpcs = [_][]const u8{
    "https://mainnet.calyra.cloud/evm",
};

pub const CLY_12369_explorers = [_]Explorer{
    .{
        .name = "calyrascan",
        .url = "https://calyrascan.xyz",
    },
};

pub const CLY_12369 = Chain{
    .name = "Calyra",
    .chain = "CLY",
    .chain_id = 12369,
    .network_id = 12369,
    .short_name = "CLY",
    .rpc = &CLY_12369_rpcs,
    .native_currency = .{
        .name = "Calyra",
        .symbol = "CLY",
        .decimals = 18,
    },
    .info_url = "https://calyra.cloud",
    .explorers = &CLY_12369_explorers,
};

pub const brick_12786_rpcs = [_][]const u8{
    "https://rpc.firstbrick.cloud",
};

pub const brick_12786_explorers = [_]Explorer{
    .{
        .name = "BrickChain Explorer",
        .url = "https://explorer.firstbrick.cloud",
    },
};

pub const brick_12786 = Chain{
    .name = "BrickChain",
    .chain = "BRKG",
    .chain_id = 12786,
    .network_id = 12786,
    .short_name = "brick",
    .rpc = &brick_12786_rpcs,
    .native_currency = .{
        .name = "Brick Gas",
        .symbol = "BRKG",
        .decimals = 18,
    },
    .info_url = "https://firstbrick.cloud",
    .explorers = &brick_12786_explorers,
};

pub const liberland_testnet_12865_rpcs = [_][]const u8{
    "https://testnet.liberland.org:9944",
};

pub const liberland_testnet_12865 = Chain{
    .name = "Liberland testnet",
    .chain = "LLT",
    .chain_id = 12865,
    .network_id = 12865,
    .short_name = "liberland-testnet",
    .rpc = &liberland_testnet_12865_rpcs,
    .native_currency = .{
        .name = "Liberland Dollar",
        .symbol = "LDN",
        .decimals = 18,
    },
    .info_url = "https://testnet.liberland.org",
    .explorers = &.{},
};

pub const rntx_13113_rpcs = [_][]const u8{
    "https://rpc.rannta.com/",
};

pub const rntx_13113_explorers = [_]Explorer{
    .{
        .name = "RANNTA X-Chain Explorer",
        .url = "https://explorer.rannta.com/",
    },
};

pub const rntx_13113 = Chain{
    .name = "RANNTA X-Chain",
    .chain = "RANNTA",
    .chain_id = 13113,
    .network_id = 13113,
    .short_name = "rntx",
    .rpc = &rntx_13113_rpcs,
    .native_currency = .{
        .name = "RANNTA Core X",
        .symbol = "RNTX",
        .decimals = 18,
    },
    .info_url = "https://rannta.com/",
    .explorers = &rntx_13113_explorers,
};

pub const BKC_13188_rpcs = [_][]const u8{
    "https://rpctest.beechain.ai",
};

pub const BKC_13188_explorers = [_]Explorer{
    .{
        .name = "BeeChainScan",
        .url = "https://scantest.beechain.ai",
    },
};

pub const BKC_13188 = Chain{
    .name = "BeeChain Testnet",
    .chain = "BKC",
    .chain_id = 13188,
    .network_id = 13188,
    .short_name = "BKC",
    .rpc = &BKC_13188_rpcs,
    .native_currency = .{
        .name = "BeeChain",
        .symbol = "BKC",
        .decimals = 18,
    },
    .info_url = "https://beechain.ai",
    .explorers = &BKC_13188_explorers,
};

pub const mee_13390_rpcs = [_][]const u8{
    "https://rpc.meechain.live/rpc",
};

pub const mee_13390_explorers = [_]Explorer{
    .{
        .name = "MeeScan",
        .url = "https://scan.meechain.live",
    },
};

pub const mee_13390 = Chain{
    .name = "MeeChain Network",
    .chain = "MeeChain",
    .chain_id = 13390,
    .network_id = 13390,
    .short_name = "mee",
    .rpc = &mee_13390_rpcs,
    .native_currency = .{
        .name = "Mee",
        .symbol = "MEE",
        .decimals = 18,
    },
    .info_url = "https://scan.meechain.live",
    .explorers = &mee_13390_explorers,
};

pub const bridgeless_13441_rpcs = [_][]const u8{
    "https://eth-rpc.node0.mainnet.bridgeless.com",
};

pub const bridgeless_13441_explorers = [_]Explorer{
    .{
        .name = "bridgeless",
        .url = "https://explorer.mainnet.bridgeless.com/",
    },
};

pub const bridgeless_13441 = Chain{
    .name = "Bridgeless Mainnet",
    .chain = "BRIDGELESS",
    .chain_id = 13441,
    .network_id = 13441,
    .short_name = "bridgeless",
    .rpc = &bridgeless_13441_rpcs,
    .native_currency = .{
        .name = "Bridge",
        .symbol = "BRIDGE",
        .decimals = 18,
    },
    .info_url = "https://bridgeless.com",
    .explorers = &bridgeless_13441_explorers,
};

pub const intuition_testnet_13579_rpcs = [_][]const u8{
    "https://testnet.rpc.intuition.systems",
};

pub const intuition_testnet_13579_explorers = [_]Explorer{
    .{
        .name = "IntuitionScan (Testnet)",
        .url = "https://testnet.explorer.intuition.systems",
    },
};

pub const intuition_testnet_13579 = Chain{
    .name = "Intuition Testnet",
    .chain = "INTUITION",
    .chain_id = 13579,
    .network_id = 13579,
    .short_name = "intuition-testnet",
    .rpc = &intuition_testnet_13579_rpcs,
    .native_currency = .{
        .name = "Testnet TRUST",
        .symbol = "TTRUST",
        .decimals = 18,
    },
    .info_url = "https://intuition.systems",
    .explorers = &intuition_testnet_13579_explorers,
};

pub const btz_14204_rpcs = [_][]const u8{
    "https://rpc.btzchain.org",
};

pub const btz_14204_explorers = [_]Explorer{
    .{
        .name = "BTZ Chain Explorer",
        .url = "https://explorer.btzchain.org",
    },
};

pub const btz_14204 = Chain{
    .name = "BTZ Chain",
    .chain = "BTZ",
    .chain_id = 14204,
    .network_id = 14204,
    .short_name = "btz",
    .rpc = &btz_14204_rpcs,
    .native_currency = .{
        .name = "BTZ",
        .symbol = "BTZ",
        .decimals = 18,
    },
    .info_url = "https://btzchain.org",
    .explorers = &btz_14204_explorers,
};

pub const sonic_testnet_14601_rpcs = [_][]const u8{
    "https://rpc.testnet.soniclabs.com",
};

pub const sonic_testnet_14601_explorers = [_]Explorer{
    .{
        .name = "Sonic Testnet Explorer",
        .url = "https://explorer.testnet.soniclabs.com",
    },
};

pub const sonic_testnet_14601 = Chain{
    .name = "Sonic Testnet",
    .chain = "sonic-testnet",
    .chain_id = 14601,
    .network_id = 14601,
    .short_name = "sonic-testnet",
    .rpc = &sonic_testnet_14601_rpcs,
    .native_currency = .{
        .name = "Sonic",
        .symbol = "S",
        .decimals = 18,
    },
    .info_url = "https://testnet.soniclabs.com",
    .explorers = &sonic_testnet_14601_explorers,
};

pub const quait_15000_rpcs = [_][]const u8{
    "https://orchard.rpc.quai.network/cyprus1",
};

pub const quait_15000_explorers = [_]Explorer{
    .{
        .name = "Orchard Quaiscan",
        .url = "https://orchard.quaiscan.io",
    },
};

pub const quait_15000 = Chain{
    .name = "Quai Orchard Testnet",
    .chain = "QUAI",
    .chain_id = 15000,
    .network_id = 15000,
    .short_name = "quait",
    .rpc = &quait_15000_rpcs,
    .native_currency = .{
        .name = "Quai",
        .symbol = "QUAI",
        .decimals = 18,
    },
    .info_url = "https://qu.ai",
    .explorers = &quait_15000_explorers,
};

pub const midl_testnet_15001_rpcs = [_][]const u8{
    "https://rpc.testnet.midl.xyz",
};

pub const midl_testnet_15001_explorers = [_]Explorer{
    .{
        .name = "Midl Testnet Explorer",
        .url = "blockscout.regtest.midl.xyz",
    },
};

pub const midl_testnet_15001 = Chain{
    .name = "Midl Testnet",
    .chain = "MIDL",
    .chain_id = 15001,
    .network_id = 15001,
    .short_name = "midl-testnet",
    .rpc = &midl_testnet_15001_rpcs,
    .native_currency = .{
        .name = "Bitcoin",
        .symbol = "BTC",
        .decimals = 18,
    },
    .info_url = "https://midl.xyz/",
    .explorers = &midl_testnet_15001_explorers,
};

pub const infra_testnet_15324_rpcs = [_][]const u8{
    "https://ppprototype.vercel.app/api/infra-rpc",
};

pub const infra_testnet_15324_explorers = [_]Explorer{
    .{
        .name = "Block Explorer",
        .url = "http://208.115.109.202",
    },
};

pub const infra_testnet_15324 = Chain{
    .name = "INFRA-testnet",
    .chain = "INFRA",
    .chain_id = 15324,
    .network_id = 15324,
    .short_name = "infra-testnet",
    .rpc = &infra_testnet_15324_rpcs,
    .native_currency = .{
        .name = "reAED",
        .symbol = "reAED",
        .decimals = 18,
    },
    .info_url = "https://infrablockchain.com/",
    .explorers = &infra_testnet_15324_explorers,
};

pub const bimbo_15497_rpcs = [_][]const u8{
    "https://bimborpc.com",
};

pub const bimbo_15497_explorers = [_]Explorer{
    .{
        .name = "bimboscan",
        .url = "https://bimboscan.com",
    },
};

pub const bimbo_15497 = Chain{
    .name = "Bimbo Chain",
    .chain = "BMC",
    .chain_id = 15497,
    .network_id = 15497,
    .short_name = "bimbo",
    .rpc = &bimbo_15497_rpcs,
    .native_currency = .{
        .name = "Bimbo Coin",
        .symbol = "BMC",
        .decimals = 18,
    },
    .info_url = "https://bimbochain.com",
    .explorers = &bimbo_15497_explorers,
};

pub const nrxn_15526_rpcs = [_][]const u8{
    "https://rpc.nirmalxscan.com",
};

pub const nrxn_15526_explorers = [_]Explorer{
    .{
        .name = "NirmalX Explorer",
        .url = "https://nirmalxscan.com",
    },
};

pub const nrxn_15526 = Chain{
    .name = "NirmalX Smart Chain",
    .chain = "NRXN",
    .chain_id = 15526,
    .network_id = 15526,
    .short_name = "nrxn",
    .rpc = &nrxn_15526_rpcs,
    .native_currency = .{
        .name = "NirmalX Smart Chain",
        .symbol = "NRXN",
        .decimals = 18,
    },
    .info_url = "https://nirmalxscan.com/",
    .explorers = &nrxn_15526_explorers,
};

pub const holo_15675_rpcs = [_][]const u8{
    "https://rpc.holodao.ai",
};

pub const holo_15675_explorers = [_]Explorer{
    .{
        .name = "holoscan",
        .url = "https://holoscan.holodao.ai",
    },
};

pub const holo_15675 = Chain{
    .name = "HOLODAO Mainnet",
    .chain = "HOLODAO",
    .chain_id = 15675,
    .network_id = 15675,
    .short_name = "holo",
    .rpc = &holo_15675_rpcs,
    .native_currency = .{
        .name = "HOLO COIN",
        .symbol = "HOLO",
        .decimals = 18,
    },
    .info_url = "https://holodao.ai",
    .explorers = &holo_15675_explorers,
};

pub const holo_testnet_15676_rpcs = [_][]const u8{
    "https://rpc-testnet.holodao.ai",
};

pub const holo_testnet_15676_explorers = [_]Explorer{
    .{
        .name = "holoscan",
        .url = "https://holoscan-testnet.holodao.ai",
    },
};

pub const holo_testnet_15676 = Chain{
    .name = "HOLODAO TESTNET",
    .chain = "HOLODAO",
    .chain_id = 15676,
    .network_id = 15676,
    .short_name = "holo-testnet",
    .rpc = &holo_testnet_15676_rpcs,
    .native_currency = .{
        .name = "HOLO COIN",
        .symbol = "HOLO",
        .decimals = 18,
    },
    .info_url = "https://holodao.ai",
    .explorers = &holo_testnet_15676_explorers,
};

pub const _0g_galileo_16601_rpcs = [_][]const u8{
    "https://evmrpc-testnet.0g.ai",
};

pub const _0g_galileo_16601_explorers = [_]Explorer{
    .{
        .name = "0G Chain Explorer",
        .url = "https://chainscan-galileo.0g.ai",
    },
};

pub const _0g_galileo_16601 = Chain{
    .name = "0G-Galileo-Testnet",
    .chain = "0G",
    .chain_id = 16601,
    .network_id = 16601,
    .short_name = "0g-galileo",
    .rpc = &_0g_galileo_16601_rpcs,
    .native_currency = .{
        .name = "OG",
        .symbol = "OG",
        .decimals = 18,
    },
    .info_url = "https://0g.ai",
    .explorers = &_0g_galileo_16601_explorers,
};

pub const _0g_16661_rpcs = [_][]const u8{
    "https://evmrpc.0g.ai",
};

pub const _0g_16661_explorers = [_]Explorer{
    .{
        .name = "0G Chain Explorer",
        .url = "https://chainscan.0g.ai",
    },
};

pub const _0g_16661 = Chain{
    .name = "0G Mainnet",
    .chain = "0G",
    .chain_id = 16661,
    .network_id = 16661,
    .short_name = "0g",
    .rpc = &_0g_16661_rpcs,
    .native_currency = .{
        .name = "0G",
        .symbol = "0G",
        .decimals = 18,
    },
    .info_url = "https://0g.ai",
    .explorers = &_0g_16661_explorers,
};

pub const botcy_16963_rpcs = [_][]const u8{
    "https://rpc.botcash.io",
};

pub const botcy_16963_explorers = [_]Explorer{
    .{
        .name = "CashScan",
        .url = "https://scan.botcash.io",
    },
};

pub const botcy_16963 = Chain{
    .name = "BotCash Sovereign L2",
    .chain = "BOTCY",
    .chain_id = 16963,
    .network_id = 16963,
    .short_name = "botcy",
    .rpc = &botcy_16963_rpcs,
    .native_currency = .{
        .name = "Bot Cash",
        .symbol = "BOTCY",
        .decimals = 18,
    },
    .info_url = "https://botcash.io",
    .explorers = &botcy_16963_explorers,
};

pub const dmd_17771_rpcs = [_][]const u8{
    "https://rpc.bit.diamonds",
};

pub const dmd_17771_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://explorer.bit.diamonds",
    },
};

pub const dmd_17771 = Chain{
    .name = "DMD Diamond",
    .chain = "DMD",
    .chain_id = 17771,
    .network_id = 17771,
    .short_name = "dmd",
    .rpc = &dmd_17771_rpcs,
    .native_currency = .{
        .name = "DMD",
        .symbol = "DMD",
        .decimals = 18,
    },
    .info_url = "https://bit.diamonds",
    .explorers = &dmd_17771_explorers,
};

pub const trecr_18882_rpcs = [_][]const u8{
    "https://testnet-rpc.recordercoin.org",
};

pub const trecr_18882_explorers = [_]Explorer{
    .{
        .name = "RecorderCoin Testnet Explorer",
        .url = "https://explorer-testnet.recordercoin.org",
    },
};

pub const trecr_18882 = Chain{
    .name = "RecorderCoin Testnet",
    .chain = "tRECR",
    .chain_id = 18882,
    .network_id = 2233441,
    .short_name = "trecr",
    .rpc = &trecr_18882_rpcs,
    .native_currency = .{
        .name = "Test RecorderCoin",
        .symbol = "tRECR",
        .decimals = 18,
    },
    .info_url = "https://recordercoin.org",
    .explorers = &trecr_18882_explorers,
};

pub const yuuchain_19001_rpcs = [_][]const u8{
    "https://rpc.theyuusystem.com",
};

pub const yuuchain_19001_explorers = [_]Explorer{
    .{
        .name = "YuuChain Explorer",
        .url = "https://explorer.theyuusystem.com",
    },
};

pub const yuuchain_19001 = Chain{
    .name = "YuuChain",
    .chain = "YUU",
    .chain_id = 19001,
    .network_id = 19001,
    .short_name = "yuuchain",
    .rpc = &yuuchain_19001_rpcs,
    .native_currency = .{
        .name = "Yuu",
        .symbol = "YUU",
        .decimals = 18,
    },
    .info_url = "https://theyuusystem.com",
    .explorers = &yuuchain_19001_explorers,
};

pub const igra_caravel_testnet_19416_rpcs = [_][]const u8{
    "https://caravel.igralabs.com:8545",
};

pub const igra_caravel_testnet_19416_explorers = [_]Explorer{
    .{
        .name = "Igra Explorer",
        .url = "https://explorer.caravel.igralabs.com/",
    },
};

pub const igra_caravel_testnet_19416 = Chain{
    .name = "Igra Caravel Testnet",
    .chain = "IGRA",
    .chain_id = 19416,
    .network_id = 19416,
    .short_name = "igra-caravel-testnet",
    .rpc = &igra_caravel_testnet_19416_rpcs,
    .native_currency = .{
        .name = "iKAS",
        .symbol = "iKAS",
        .decimals = 18,
    },
    .info_url = "https://docs.igralabs.com/",
    .explorers = &igra_caravel_testnet_19416_explorers,
};

pub const stc_testnet_19517_rpcs = [_][]const u8{
    "https://testnet-rpc.stcexplorer.io",
};

pub const stc_testnet_19517_explorers = [_]Explorer{
    .{
        .name = "Smart Technology Chain Explorer",
        .url = "https://testnet.stcexplorer.io",
    },
};

pub const stc_testnet_19517 = Chain{
    .name = "Smart Technology Chain Testnet",
    .chain = "Smart Technology Chain",
    .chain_id = 19517,
    .network_id = 19517,
    .short_name = "stc-testnet",
    .rpc = &stc_testnet_19517_rpcs,
    .native_currency = .{
        .name = "SEP",
        .symbol = "SEP",
        .decimals = 18,
    },
    .info_url = null,
    .explorers = &stc_testnet_19517_explorers,
};

pub const stc_mainnet_19518_rpcs = [_][]const u8{
    "https://rpc.stcexplorer.io",
};

pub const stc_mainnet_19518_explorers = [_]Explorer{
    .{
        .name = "Smart Technology Chain Explorer",
        .url = "https://stcexplorer.io",
    },
};

pub const stc_mainnet_19518 = Chain{
    .name = "Smart Technology Chain",
    .chain = "Smart Technology Chain",
    .chain_id = 19518,
    .network_id = 19518,
    .short_name = "stc-mainnet",
    .rpc = &stc_mainnet_19518_rpcs,
    .native_currency = .{
        .name = "SEP",
        .symbol = "SEP",
        .decimals = 18,
    },
    .info_url = null,
    .explorers = &stc_mainnet_19518_explorers,
};

pub const mon_19901_rpcs = [_][]const u8{
    "https://rpc.monlite.online",
};

pub const mon_19901_explorers = [_]Explorer{
    .{
        .name = "MON CHAIN Explorer",
        .url = "https://scan.monlite.online",
    },
};

pub const mon_19901 = Chain{
    .name = "MON CHAIN",
    .chain = "MON",
    .chain_id = 19901,
    .network_id = 19901,
    .short_name = "mon",
    .rpc = &mon_19901_rpcs,
    .native_currency = .{
        .name = "Monetae",
        .symbol = "MON",
        .decimals = 18,
    },
    .info_url = "https://monlite.online",
    .explorers = &mon_19901_explorers,
};

pub const entropy_19911_rpcs = [_][]const u8{
    "https://rpc-mainnet.entropychain.live",
};

pub const entropy_19911_explorers = [_]Explorer{
    .{
        .name = "Entropy Explorer",
        .url = "https://scan.entropychain.live",
    },
};

pub const entropy_19911 = Chain{
    .name = "Entropy Chain",
    .chain = "Entropy",
    .chain_id = 19911,
    .network_id = 19911,
    .short_name = "entropy",
    .rpc = &entropy_19911_rpcs,
    .native_currency = .{
        .name = "KGFe",
        .symbol = "KGFe",
        .decimals = 18,
    },
    .info_url = "https://entropychain.live",
    .explorers = &entropy_19911_explorers,
};

pub const atrnxos_19966_rpcs = [_][]const u8{
    "https://rpc.bas.atrnx.com",
};

pub const atrnxos_19966_explorers = [_]Explorer{
    .{
        .name = "ATRNXOS Explorer",
        .url = "https://explorer.bas.atrnx.com",
    },
};

pub const atrnxos_19966 = Chain{
    .name = "ATRNXOS Chain",
    .chain = "ATRNXOS",
    .chain_id = 19966,
    .network_id = 19966,
    .short_name = "atrnxos",
    .rpc = &atrnxos_19966_rpcs,
    .native_currency = .{
        .name = "ATRNXOS",
        .symbol = "EATB",
        .decimals = 18,
    },
    .info_url = "https://atrnx.org",
    .explorers = &atrnxos_19966_explorers,
};

pub const sup_19998_rpcs = [_][]const u8{
    "https://rpc.superaichain.ai",
};

pub const sup_19998_explorers = [_]Explorer{
    .{
        .name = "SuperAIChain Explorer",
        .url = "https://scan.superaichain.ai",
    },
};

pub const sup_19998 = Chain{
    .name = "SuperAIChain Mainnet",
    .chain = "SuperAIChain",
    .chain_id = 19998,
    .network_id = 19998,
    .short_name = "sup",
    .rpc = &sup_19998_rpcs,
    .native_currency = .{
        .name = "SUP",
        .symbol = "SUP",
        .decimals = 18,
    },
    .info_url = "https://superaichain.ai",
    .explorers = &sup_19998_explorers,
};

pub const mandala_20010_rpcs = [_][]const u8{
    "https://rpc1-mainnet.mandalachain.io",
};

pub const mandala_20010_explorers = [_]Explorer{
    .{
        .name = "Blockscout",
        .url = "https://explorer.mandalachain.io",
    },
};

pub const mandala_20010 = Chain{
    .name = "Mandala Chain",
    .chain = "MANDALA",
    .chain_id = 20010,
    .network_id = 20010,
    .short_name = "mandala",
    .rpc = &mandala_20010_rpcs,
    .native_currency = .{
        .name = "Kepeng",
        .symbol = "KPG",
        .decimals = 18,
    },
    .info_url = "https://mandalachain.io",
    .explorers = &mandala_20010_explorers,
};

pub const mandala_testnet_20011_rpcs = [_][]const u8{
    "https://rpc1-testnet.mandalachain.io",
};

pub const mandala_testnet_20011_explorers = [_]Explorer{
    .{
        .name = "Blockscout",
        .url = "https://explorer.testnet.mandalachain.io",
    },
};

pub const mandala_testnet_20011 = Chain{
    .name = "Mandala Chain Testnet",
    .chain = "MANDALA",
    .chain_id = 20011,
    .network_id = 20011,
    .short_name = "mandala-testnet",
    .rpc = &mandala_testnet_20011_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://mandalachain.io",
    .explorers = &mandala_testnet_20011_explorers,
};

pub const agls_20033_rpcs = [_][]const u8{
    "https://evm-rpc.aglais.quip.network:20049",
};

pub const agls_20033_explorers = [_]Explorer{
    .{
        .name = "Aglais Explorer",
        .url = "https://explorer.aglais.quip.network",
    },
};

pub const agls_20033 = Chain{
    .name = "Aglais Testnet (Quip Network)",
    .chain = "AGLS",
    .chain_id = 20033,
    .network_id = 20033,
    .short_name = "agls",
    .rpc = &agls_20033_rpcs,
    .native_currency = .{
        .name = "AGLS",
        .symbol = "AGLS",
        .decimals = 18,
    },
    .info_url = "https://agls.quip.network",
    .explorers = &agls_20033_explorers,
};

pub const nch_20250_rpcs = [_][]const u8{
    "https://cheeseblockchain.com/api/rpc",
};

pub const nch_20250_explorers = [_]Explorer{
    .{
        .name = "CHEESE Blockchain Explorer",
        .url = "https://cheeseblockchain.com/explorer",
    },
};

pub const nch_20250 = Chain{
    .name = "CHEESE Blockchain",
    .chain = "CHEESE",
    .chain_id = 20250,
    .network_id = 20250,
    .short_name = "nch",
    .rpc = &nch_20250_rpcs,
    .native_currency = .{
        .name = "Native Cheesecoin",
        .symbol = "NCH",
        .decimals = 18,
    },
    .info_url = "https://cheeseblockchain.com",
    .explorers = &nch_20250_explorers,
};

pub const alpen_20310_rpcs = [_][]const u8{
    "https://alpen.testnet.alpen.org",
};

pub const alpen_20310_explorers = [_]Explorer{
    .{
        .name = "Alpen Testnet Explorer",
        .url = "https://explorer.testnet.alpen.org",
    },
};

pub const alpen_20310 = Chain{
    .name = "Alpen Testnet III",
    .chain = "Alpen",
    .chain_id = 20310,
    .network_id = 20310,
    .short_name = "alpen",
    .rpc = &alpen_20310_rpcs,
    .native_currency = .{
        .name = "Signet BTC",
        .symbol = "sBTC",
        .decimals = 18,
    },
    .info_url = "https://docs.alpenlabs.io",
    .explorers = &alpen_20310_explorers,
};

pub const efik_20488_rpcs = [_][]const u8{
    "https://rpc.efikcoin.com/rpc",
};

pub const efik_20488_explorers = [_]Explorer{
    .{
        .name = "EfikcoinScan",
        .url = "https://explorer.efikcoin.com",
    },
};

pub const efik_20488 = Chain{
    .name = "Efikcoin Mainnet",
    .chain = "EFIK",
    .chain_id = 20488,
    .network_id = 20488,
    .short_name = "efik",
    .rpc = &efik_20488_rpcs,
    .native_currency = .{
        .name = "Efikcoin",
        .symbol = "EFIK",
        .decimals = 18,
    },
    .info_url = "https://efikcoin.com",
    .explorers = &efik_20488_explorers,
};

pub const fluent_testnet_20994_rpcs = [_][]const u8{
    "https://rpc.testnet.fluent.xyz",
};

pub const fluent_testnet_20994_explorers = [_]Explorer{
    .{
        .name = "Fluent Testnet Explorer",
        .url = "https://testnet.fluentscan.xyz/",
    },
};

pub const fluent_testnet_20994 = Chain{
    .name = "Fluent Testnet",
    .chain = "FLUENT",
    .chain_id = 20994,
    .network_id = 20994,
    .short_name = "fluent-testnet",
    .rpc = &fluent_testnet_20994_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://www.fluent.xyz/",
    .explorers = &fluent_testnet_20994_explorers,
};

pub const flashnet_21021_rpcs = [_][]const u8{
    "https://rpc.flashnet.xyz",
};

pub const flashnet_21021 = Chain{
    .name = "Flashnet Mainnet",
    .chain = "Flashnet",
    .chain_id = 21021,
    .network_id = 21021,
    .short_name = "flashnet",
    .rpc = &flashnet_21021_rpcs,
    .native_currency = .{
        .name = "Bitcoin",
        .symbol = "BTC",
        .decimals = 18,
    },
    .info_url = "https://flashnet.xyz",
    .explorers = &.{},
};

pub const flashnet_testnet_21022_rpcs = [_][]const u8{
    "https://rpc.makebitcoingreatagain.dev",
};

pub const flashnet_testnet_21022 = Chain{
    .name = "Flashnet Testnet",
    .chain = "Flashnet",
    .chain_id = 21022,
    .network_id = 21022,
    .short_name = "flashnet-testnet",
    .rpc = &flashnet_testnet_21022_rpcs,
    .native_currency = .{
        .name = "Bitcoin",
        .symbol = "BTC",
        .decimals = 18,
    },
    .info_url = "https://flashnet.xyz",
    .explorers = &.{},
};

pub const autheo_testnet_21270_rpcs = [_][]const u8{
    "https://rpc.testnet.autheo.com",
};

pub const autheo_testnet_21270_explorers = [_]Explorer{
    .{
        .name = "Autheo Testnet Cosmos Explorer",
        .url = "https://cosmos.testnet.autheo.com",
    },
    .{
        .name = "Autheo Testnet EVM Explorer",
        .url = "https://evm-explorer.testnet.autheo.com",
    },
};

pub const autheo_testnet_21270 = Chain{
    .name = "Autheo Testnet",
    .chain = "Autheo",
    .chain_id = 21270,
    .network_id = 21270,
    .short_name = "autheo-testnet",
    .rpc = &autheo_testnet_21270_rpcs,
    .native_currency = .{
        .name = "THEO",
        .symbol = "THEO",
        .decimals = 18,
    },
    .info_url = "https://autheo.com",
    .explorers = &autheo_testnet_21270_explorers,
};

pub const apchain_21970_rpcs = [_][]const u8{
    "https://rpc.apchain.io/",
};

pub const apchain_21970_explorers = [_]Explorer{
    .{
        .name = "APChain Scan",
        .url = "http://scan.apchain.io",
    },
};

pub const apchain_21970 = Chain{
    .name = "APChain",
    .chain = "AP",
    .chain_id = 21970,
    .network_id = 21970,
    .short_name = "apchain",
    .rpc = &apchain_21970_rpcs,
    .native_currency = .{
        .name = "APX",
        .symbol = "APX",
        .decimals = 18,
    },
    .info_url = "http://scan.apchain.io",
    .explorers = &apchain_21970_explorers,
};

pub const cles_22225_rpcs = [_][]const u8{
    "https://rpc-testnet.celeschain.org",
};

pub const cles_22225_explorers = [_]Explorer{
    .{
        .name = "Celes Testnet Explorer",
        .url = "https://testnet-explorer.celeschain.org",
    },
};

pub const cles_22225 = Chain{
    .name = "Celes Testnet",
    .chain = "CLES",
    .chain_id = 22225,
    .network_id = 22225,
    .short_name = "cles",
    .rpc = &cles_22225_rpcs,
    .native_currency = .{
        .name = "CLES",
        .symbol = "CLES",
        .decimals = 18,
    },
    .info_url = "https://celeschain.org",
    .explorers = &cles_22225_explorers,
};

pub const incentiv_24101_rpcs = [_][]const u8{
    "https://rpc.incentiv.io",
    "https://rpc-archive.incentiv.io",
};

pub const incentiv_24101_explorers = [_]Explorer{
    .{
        .name = "Incentiv Mainnet Explorer",
        .url = "https://explorer.incentiv.io",
    },
};

pub const incentiv_24101 = Chain{
    .name = "Incentiv",
    .chain = "Incentiv",
    .chain_id = 24101,
    .network_id = 24101,
    .short_name = "incentiv",
    .rpc = &incentiv_24101_rpcs,
    .native_currency = .{
        .name = "CENT",
        .symbol = "CENT",
        .decimals = 18,
    },
    .info_url = "https://incentiv.io",
    .explorers = &incentiv_24101_explorers,
};

pub const agentscoin_24368_rpcs = [_][]const u8{
    "https://rpc.agents-coin.com",
};

pub const agentscoin_24368_explorers = [_]Explorer{
    .{
        .name = "Blockscout",
        .url = "https://explorer.agents-coin.com",
    },
};

pub const agentscoin_24368 = Chain{
    .name = "AgentsCoin",
    .chain = "AGENT",
    .chain_id = 24368,
    .network_id = 24368,
    .short_name = "agentscoin",
    .rpc = &agentscoin_24368_rpcs,
    .native_currency = .{
        .name = "AgentsCoin",
        .symbol = "AGENT",
        .decimals = 18,
    },
    .info_url = "https://agents-coin.com",
    .explorers = &agentscoin_24368_explorers,
};

pub const fluent_25363_rpcs = [_][]const u8{
    "https://rpc.fluent.xyz",
};

pub const fluent_25363_explorers = [_]Explorer{
    .{
        .name = "Fluent Explorer",
        .url = "https://fluentscan.xyz",
    },
};

pub const fluent_25363 = Chain{
    .name = "Fluent",
    .chain = "FLUENT",
    .chain_id = 25363,
    .network_id = 25363,
    .short_name = "fluent",
    .rpc = &fluent_25363_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://www.fluent.xyz/",
    .explorers = &fluent_25363_explorers,
};

pub const h2lambda_25821_rpcs = [_][]const u8{
    "https://rpc.h-1.io",
};

pub const h2lambda_25821_explorers = [_]Explorer{
    .{
        .name = "H2Scan",
        .url = "https://lambda.h2scan.io",
    },
};

pub const h2lambda_25821 = Chain{
    .name = "H2 Lambda",
    .chain = "H2",
    .chain_id = 25821,
    .network_id = 25821,
    .short_name = "h2lambda",
    .rpc = &h2lambda_25821_rpcs,
    .native_currency = .{
        .name = "H2",
        .symbol = "H2",
        .decimals = 18,
    },
    .info_url = "https://h2chain.io",
    .explorers = &h2lambda_25821_explorers,
};

pub const tcent_28802_rpcs = [_][]const u8{
    "https://rpc3.testnet.incentiv.io",
};

pub const tcent_28802_explorers = [_]Explorer{
    .{
        .name = "Incentiv Testnet Explorer",
        .url = "https://explorer-testnet.incentiv.io/",
    },
};

pub const tcent_28802 = Chain{
    .name = "Incentiv Testnet",
    .chain = "TCENT",
    .chain_id = 28802,
    .network_id = 28802,
    .short_name = "tcent",
    .rpc = &tcent_28802_rpcs,
    .native_currency = .{
        .name = "Testnet Incentiv Coin",
        .symbol = "TCENT",
        .decimals = 18,
    },
    .info_url = "https://incentiv.net",
    .explorers = &tcent_28802_explorers,
};

pub const alpen_29032_rpcs = [_][]const u8{
    "https://alpen.mainnet.alpen.org",
};

pub const alpen_29032_explorers = [_]Explorer{
    .{
        .name = "Alpen Explorer",
        .url = "https://explorer.mainnet.alpen.org",
    },
};

pub const alpen_29032 = Chain{
    .name = "Alpen",
    .chain = "Alpen",
    .chain_id = 29032,
    .network_id = 29032,
    .short_name = "alpen",
    .rpc = &alpen_29032_rpcs,
    .native_currency = .{
        .name = "BTC",
        .symbol = "BTC",
        .decimals = 18,
    },
    .info_url = "https://docs.alpen.org",
    .explorers = &alpen_29032_explorers,
};

pub const taic_30181_rpcs = [_][]const u8{
    "https://testrpc.aicchain.io",
};

pub const taic_30181_explorers = [_]Explorer{
    .{
        .name = "AICChain Testnet Explorer",
        .url = "https://testscan.aicchain.io",
    },
};

pub const taic_30181 = Chain{
    .name = "AICChain Testnet",
    .chain = "tAIC",
    .chain_id = 30181,
    .network_id = 30181,
    .short_name = "taic",
    .rpc = &taic_30181_rpcs,
    .native_currency = .{
        .name = "AICChain Testnet",
        .symbol = "tAIC",
        .decimals = 18,
    },
    .info_url = "https://www.aicchain.io",
    .explorers = &taic_30181_explorers,
};

pub const Ethiq_30303_rpcs = [_][]const u8{
    "https://rpc.ethiq.network",
};

pub const Ethiq_30303_explorers = [_]Explorer{
    .{
        .name = "Ethiq Blockscout",
        .url = "https://explorer.ethiq.network",
    },
};

pub const Ethiq_30303 = Chain{
    .name = "Ethiq",
    .chain = "ETH",
    .chain_id = 30303,
    .network_id = 30303,
    .short_name = "Ethiq",
    .rpc = &Ethiq_30303_rpcs,
    .native_currency = .{
        .name = "ETH",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://www.ethiq.network",
    .explorers = &Ethiq_30303_explorers,
};

pub const trxc_30485_rpcs = [_][]const u8{
    "https://rpc.tronclassicscan.org:8545",
};

pub const trxc_30485_explorers = [_]Explorer{
    .{
        .name = "TronClassicScan",
        .url = "https://tronclassicscan.org",
    },
};

pub const trxc_30485 = Chain{
    .name = "Tron Classic",
    .chain = "TRXC",
    .chain_id = 30485,
    .network_id = 30485,
    .short_name = "trxc",
    .rpc = &trxc_30485_rpcs,
    .native_currency = .{
        .name = "Tron Classic",
        .symbol = "TRXC",
        .decimals = 6,
    },
    .info_url = "https://trxclassic.com",
    .explorers = &trxc_30485_explorers,
};

pub const dawn_mainnet_30715_rpcs = [_][]const u8{};

pub const dawn_mainnet_30715 = Chain{
    .name = "Dawn Mainnet",
    .chain = "Dawn",
    .chain_id = 30715,
    .network_id = 30715,
    .short_name = "dawn-mainnet",
    .rpc = &dawn_mainnet_30715_rpcs,
    .native_currency = .{
        .name = "ZKsync",
        .symbol = "ZK",
        .decimals = 18,
    },
    .info_url = "https://www.zksync.io",
    .explorers = &.{},
};

pub const zksync_prividium_mainnet_30716_rpcs = [_][]const u8{};

pub const zksync_prividium_mainnet_30716 = Chain{
    .name = "ZKsync Prividium Mainnet",
    .chain = "ZKsync Prividium",
    .chain_id = 30716,
    .network_id = 30716,
    .short_name = "zksync-prividium-mainnet",
    .rpc = &zksync_prividium_mainnet_30716_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://www.zksync.io",
    .explorers = &.{},
};

pub const bvm20_31338_rpcs = [_][]const u8{
    "https://rpc.bitvault.club",
};

pub const bvm20_31338_explorers = [_]Explorer{
    .{
        .name = "BitVault Explorer",
        .url = "https://explorer.bitvault.club",
    },
};

pub const bvm20_31338 = Chain{
    .name = "BitVault BVM20",
    .chain = "BVM20",
    .chain_id = 31338,
    .network_id = 31338,
    .short_name = "bvm20",
    .rpc = &bvm20_31338_rpcs,
    .native_currency = .{
        .name = "BitVault",
        .symbol = "BVT",
        .decimals = 18,
    },
    .info_url = "https://bitvault.club",
    .explorers = &bvm20_31338_explorers,
};

pub const paix_32380_rpcs = [_][]const u8{
    "https://devnet.ppaix.com",
};

pub const paix_32380_explorers = [_]Explorer{
    .{
        .name = "PAIX BlockScout",
        .url = "https://blockscout.ppaix.com",
    },
};

pub const paix_32380 = Chain{
    .name = "PAIX Development Network",
    .chain = "PAIX",
    .chain_id = 32380,
    .network_id = 32380,
    .short_name = "paix",
    .rpc = &paix_32380_rpcs,
    .native_currency = .{
        .name = "PAIX Token",
        .symbol = "PAIX",
        .decimals = 18,
    },
    .info_url = "https://ppaix.com",
    .explorers = &paix_32380_explorers,
};

pub const zil_32769_rpcs = [_][]const u8{
    "https://api.zilliqa.com",
};

pub const zil_32769_explorers = [_]Explorer{
    .{
        .name = "Zilliqa 2 Mainnet Explorer",
        .url = "https://zilliqa.blockscout.com/",
    },
};

pub const zil_32769 = Chain{
    .name = "Zilliqa 2",
    .chain = "ZIL",
    .chain_id = 32769,
    .network_id = 32769,
    .short_name = "zil",
    .rpc = &zil_32769_rpcs,
    .native_currency = .{
        .name = "Zilliqa",
        .symbol = "ZIL",
        .decimals = 18,
    },
    .info_url = "https://www.zilliqa.com/",
    .explorers = &zil_32769_explorers,
};

pub const ecx_32904_rpcs = [_][]const u8{
    "https://rpc.snowside.network/mainnet",
};

pub const ecx_32904_explorers = [_]Explorer{
    .{
        .name = "Snowside Explorer",
        .url = "https://explorer.snowside.network",
    },
};

pub const ecx_32904 = Chain{
    .name = "Snowside",
    .chain = "ECX",
    .chain_id = 32904,
    .network_id = 32904,
    .short_name = "ecx",
    .rpc = &ecx_32904_rpcs,
    .native_currency = .{
        .name = "ECash",
        .symbol = "ECX",
        .decimals = 18,
    },
    .info_url = "https://snowside.network",
    .explorers = &ecx_32904_explorers,
};

pub const zero_beacon_33000_rpcs = [_][]const u8{};

pub const zero_beacon_33000 = Chain{
    .name = "Zero Beacon",
    .chain = "ZERO",
    .chain_id = 33000,
    .network_id = 33000,
    .short_name = "zero-beacon",
    .rpc = &zero_beacon_33000_rpcs,
    .native_currency = .{
        .name = "ZRO",
        .symbol = "ZRO",
        .decimals = 18,
    },
    .info_url = "https://layerzero.network",
    .explorers = &.{},
};

pub const zero_system_33001_rpcs = [_][]const u8{};

pub const zero_system_33001 = Chain{
    .name = "Zero System Zone",
    .chain = "ZERO",
    .chain_id = 33001,
    .network_id = 33001,
    .short_name = "zero-system",
    .rpc = &zero_system_33001_rpcs,
    .native_currency = .{
        .name = "ZRO",
        .symbol = "ZRO",
        .decimals = 18,
    },
    .info_url = "https://layerzero.network",
    .explorers = &.{},
};

pub const zero_interop_33002_rpcs = [_][]const u8{};

pub const zero_interop_33002 = Chain{
    .name = "Zero Interop Zone",
    .chain = "ZERO",
    .chain_id = 33002,
    .network_id = 33002,
    .short_name = "zero-interop",
    .rpc = &zero_interop_33002_rpcs,
    .native_currency = .{
        .name = "ZRO",
        .symbol = "ZRO",
        .decimals = 18,
    },
    .info_url = "https://layerzero.network",
    .explorers = &.{},
};

pub const zero_atlas_33003_rpcs = [_][]const u8{};

pub const zero_atlas_33003 = Chain{
    .name = "LayerZero ATLAS",
    .chain = "ZERO",
    .chain_id = 33003,
    .network_id = 33003,
    .short_name = "zero-atlas",
    .rpc = &zero_atlas_33003_rpcs,
    .native_currency = .{
        .name = "ZRO",
        .symbol = "ZRO",
        .decimals = 18,
    },
    .info_url = "https://layerzero.network",
    .explorers = &.{},
};

pub const zero_private_33004_rpcs = [_][]const u8{};

pub const zero_private_33004 = Chain{
    .name = "Zero Private Zone",
    .chain = "ZERO",
    .chain_id = 33004,
    .network_id = 33004,
    .short_name = "zero-private",
    .rpc = &zero_private_33004_rpcs,
    .native_currency = .{
        .name = "ZRO",
        .symbol = "ZRO",
        .decimals = 18,
    },
    .info_url = "https://layerzero.network",
    .explorers = &.{},
};

pub const zil_testnet_33101_rpcs = [_][]const u8{
    "https://api.testnet.zilliqa.com",
};

pub const zil_testnet_33101_explorers = [_]Explorer{
    .{
        .name = "Zilliqa 2 Testnet Explorer",
        .url = "https://testnet.zilliqa.blockscout.com/",
    },
};

pub const zil_testnet_33101 = Chain{
    .name = "Zilliqa 2 Testnet",
    .chain = "ZIL",
    .chain_id = 33101,
    .network_id = 33101,
    .short_name = "zil-testnet",
    .rpc = &zil_testnet_33101_rpcs,
    .native_currency = .{
        .name = "Zilliqa",
        .symbol = "ZIL",
        .decimals = 18,
    },
    .info_url = "https://www.zilliqa.com/",
    .explorers = &zil_testnet_33101_explorers,
};

pub const ecx_testnet_33160_rpcs = [_][]const u8{
    "https://rpc.snowside.network/testnet",
};

pub const ecx_testnet_33160_explorers = [_]Explorer{
    .{
        .name = "Snowside Testnet Explorer",
        .url = "https://explorer-testnet.snowside.network",
    },
};

pub const ecx_testnet_33160 = Chain{
    .name = "Snowside Testnet",
    .chain = "ECX",
    .chain_id = 33160,
    .network_id = 33160,
    .short_name = "ecx-testnet",
    .rpc = &ecx_testnet_33160_rpcs,
    .native_currency = .{
        .name = "ECash",
        .symbol = "ECX",
        .decimals = 18,
    },
    .info_url = "https://snowside.network",
    .explorers = &ecx_testnet_33160_explorers,
};

pub const qom_33303_rpcs = [_][]const u8{
    "https://rpc.qomx.io",
};

pub const qom_33303_explorers = [_]Explorer{
    .{
        .name = "QOM Explorer",
        .url = "https://scan.qomx.io",
    },
};

pub const qom_33303 = Chain{
    .name = "QOM",
    .chain = "QOM",
    .chain_id = 33303,
    .network_id = 33303,
    .short_name = "qom",
    .rpc = &qom_33303_rpcs,
    .native_currency = .{
        .name = "QOMX",
        .symbol = "QOMX",
        .decimals = 18,
    },
    .info_url = "https://qomx.io",
    .explorers = &qom_33303_explorers,
};

pub const zq2_devnet_33469_rpcs = [_][]const u8{
    "https://api.zq2-devnet.zilliqa.com",
};

pub const zq2_devnet_33469_explorers = [_]Explorer{
    .{
        .name = "Zilliqa 2 Devnet Explorer",
        .url = "https://otterscan.zq2-devnet.zilliqa.com",
    },
};

pub const zq2_devnet_33469 = Chain{
    .name = "Zilliqa 2 Devnet",
    .chain = "ZIL",
    .chain_id = 33469,
    .network_id = 33469,
    .short_name = "zq2-devnet",
    .rpc = &zq2_devnet_33469_rpcs,
    .native_currency = .{
        .name = "Zilliqa",
        .symbol = "ZIL",
        .decimals = 18,
    },
    .info_url = "https://www.zilliqa.com/",
    .explorers = &zq2_devnet_33469_explorers,
};

pub const morphtachyon_testnet_34952_rpcs = [_][]const u8{
    "https://testnet-api.popdex.xyz/api/v1/web3/rpc",
};

pub const morphtachyon_testnet_34952_explorers = [_]Explorer{
    .{
        .name = "Morph Tachyon Testnet Explorer",
        .url = "https://testnet-app.popdex.xyz/explorer",
    },
};

pub const morphtachyon_testnet_34952 = Chain{
    .name = "Morph Tachyon Testnet",
    .chain = "Morph Tachyon",
    .chain_id = 34952,
    .network_id = 34952,
    .short_name = "morphtachyon testnet",
    .rpc = &morphtachyon_testnet_34952_rpcs,
    .native_currency = .{
        .name = "BGB",
        .symbol = "BGB",
        .decimals = 18,
    },
    .info_url = "https://popdex.xyz",
    .explorers = &morphtachyon_testnet_34952_explorers,
};

pub const trct_35935_rpcs = [_][]const u8{
    "https://tapi.tractsafe.com",
};

pub const trct_35935_explorers = [_]Explorer{
    .{
        .name = "tractsafescan",
        .url = "https://testnet.tractsafe.com",
    },
};

pub const trct_35935 = Chain{
    .name = "Tractsafe Testnet",
    .chain = "TRCT",
    .chain_id = 35935,
    .network_id = 35935,
    .short_name = "trct",
    .rpc = &trct_35935_rpcs,
    .native_currency = .{
        .name = "Tractsafe",
        .symbol = "TRCT",
        .decimals = 18,
    },
    .info_url = "https://tractsafe.com",
    .explorers = &trct_35935_explorers,
};

pub const tc_36000_rpcs = [_][]const u8{
    "https://wallet.voidchain.net/api",
};

pub const tc_36000_explorers = [_]Explorer{
    .{
        .name = "voidchainscan",
        .url = "https://explorer.voidchain.net",
    },
};

pub const tc_36000 = Chain{
    .name = "Voidchain Mainnet",
    .chain = "TC",
    .chain_id = 36000,
    .network_id = 36000,
    .short_name = "tc",
    .rpc = &tc_36000_rpcs,
    .native_currency = .{
        .name = "Voidchain",
        .symbol = "TC",
        .decimals = 9,
    },
    .info_url = "https://ethereum.org",
    .explorers = &tc_36000_explorers,
};

pub const abcore_36888_rpcs = [_][]const u8{
    "https://rpc.core.ab.org",
    "https://rpc1.core.ab.org",
};

pub const abcore_36888_explorers = [_]Explorer{
    .{
        .name = "AB Core Explorer",
        .url = "https://explorer.core.ab.org",
    },
};

pub const abcore_36888 = Chain{
    .name = "AB Core Mainnet",
    .chain = "AB",
    .chain_id = 36888,
    .network_id = 36888,
    .short_name = "abcore",
    .rpc = &abcore_36888_rpcs,
    .native_currency = .{
        .name = "AB",
        .symbol = "AB",
        .decimals = 18,
    },
    .info_url = "https://ab.org",
    .explorers = &abcore_36888_explorers,
};

pub const weichain_37771_rpcs = [_][]const u8{
    "http://1.15.137.12:8545",
};

pub const weichain_37771_explorers = [_]Explorer{
    .{
        .name = "weichainscan",
        .url = "http://1.15.137.12:5200/",
    },
};

pub const weichain_37771 = Chain{
    .name = "Weichain net",
    .chain = "Weichain",
    .chain_id = 37771,
    .network_id = 37771,
    .short_name = "weichain",
    .rpc = &weichain_37771_rpcs,
    .native_currency = .{
        .name = "Weichain",
        .symbol = "WeiC",
        .decimals = 18,
    },
    .info_url = null,
    .explorers = &weichain_37771_explorers,
};

pub const igra_38833_rpcs = [_][]const u8{
    "https://rpc.igralabs.com:8545",
};

pub const igra_38833_explorers = [_]Explorer{
    .{
        .name = "Igra Explorer",
        .url = "https://explorer.igralabs.com",
    },
};

pub const igra_38833 = Chain{
    .name = "Igra Mainnet",
    .chain = "Igra",
    .chain_id = 38833,
    .network_id = 38833,
    .short_name = "igra",
    .rpc = &igra_38833_rpcs,
    .native_currency = .{
        .name = "IKas",
        .symbol = "IKAS",
        .decimals = 18,
    },
    .info_url = "https://igralabs.com",
    .explorers = &igra_38833_explorers,
};

pub const igra_testnet_38836_rpcs = [_][]const u8{
    "https://galleon-testnet.igralabs.com:8545",
};

pub const igra_testnet_38836_explorers = [_]Explorer{
    .{
        .name = "Igra Testnet Explorer",
        .url = "https://explorer.galleon-testnet.igralabs.com",
    },
};

pub const igra_testnet_38836 = Chain{
    .name = "Igra Testnet",
    .chain = "Igra",
    .chain_id = 38836,
    .network_id = 38836,
    .short_name = "igra-testnet",
    .rpc = &igra_testnet_38836_rpcs,
    .native_currency = .{
        .name = "IKas",
        .symbol = "IKAS",
        .decimals = 18,
    },
    .info_url = "https://igralabs.com",
    .explorers = &igra_testnet_38836_explorers,
};

pub const cin_39500_rpcs = [_][]const u8{
    "https://rpc.cincoin.asia/",
};

pub const cin_39500_explorers = [_]Explorer{
    .{
        .name = "cincoin explorer",
        .url = "https://scan.cincoin.asia",
    },
};

pub const cin_39500 = Chain{
    .name = "Cincoin Mainnet",
    .chain = "CIN",
    .chain_id = 39500,
    .network_id = 39500,
    .short_name = "cin",
    .rpc = &cin_39500_rpcs,
    .native_currency = .{
        .name = "Cincoin",
        .symbol = "CIN",
        .decimals = 18,
    },
    .info_url = "https://cincoin.asia",
    .explorers = &cin_39500_explorers,
};

pub const salt_40204_rpcs = [_][]const u8{
    "https://rpc.citrate.ai",
};

pub const salt_40204_explorers = [_]Explorer{
    .{
        .name = "Citrate Explorer",
        .url = "https://explorer.citrate.ai",
    },
};

pub const salt_40204 = Chain{
    .name = "Citrate Testnet",
    .chain = "CITRATE",
    .chain_id = 40204,
    .network_id = 40204,
    .short_name = "salt",
    .rpc = &salt_40204_rpcs,
    .native_currency = .{
        .name = "SALT",
        .symbol = "SALT",
        .decimals = 18,
    },
    .info_url = "https://citrate.ai",
    .explorers = &salt_40204_explorers,
};

pub const rootVX_41295_rpcs = [_][]const u8{
    "http://34.60.253.118:9545",
};

pub const rootVX_41295_explorers = [_]Explorer{
    .{
        .name = "rootVXscan",
        .url = "https://explorer.rootvx.com",
    },
};

pub const rootVX_41295 = Chain{
    .name = "rootVX testnet",
    .chain = "rootVX",
    .chain_id = 41295,
    .network_id = 42079,
    .short_name = "rootVX",
    .rpc = &rootVX_41295_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://rootvx.com",
    .explorers = &rootVX_41295_explorers,
};

pub const nesa_41444_rpcs = [_][]const u8{
    "https://erpc.nesa.ai",
};

pub const nesa_41444_explorers = [_]Explorer{
    .{
        .name = "Nesa EVM Explorer",
        .url = "https://explorer-evm.nesa.ai",
    },
};

pub const nesa_41444 = Chain{
    .name = "Nesa",
    .chain = "NES",
    .chain_id = 41444,
    .network_id = 41444,
    .short_name = "nesa",
    .rpc = &nesa_41444_rpcs,
    .native_currency = .{
        .name = "Nesa",
        .symbol = "NES",
        .decimals = 18,
    },
    .info_url = "https://nesa.ai",
    .explorers = &nesa_41444_explorers,
};

pub const edu_chain_41923_rpcs = [_][]const u8{
    "https://rpc.educhain.xyz",
};

pub const edu_chain_41923_explorers = [_]Explorer{
    .{
        .name = "EDU Chain Explorer",
        .url = "https://explorer.educhain.xyz",
    },
};

pub const edu_chain_41923 = Chain{
    .name = "EDU Chain",
    .chain = "EDU Chain",
    .chain_id = 41923,
    .network_id = 41923,
    .short_name = "edu-chain",
    .rpc = &edu_chain_41923_rpcs,
    .native_currency = .{
        .name = "EDU",
        .symbol = "EDU",
        .decimals = 18,
    },
    .info_url = "https://www.educhain.xyz/",
    .explorers = &edu_chain_41923_explorers,
};

pub const tempo_moderato_42431_rpcs = [_][]const u8{
    "https://rpc.testnet.tempo.xyz",
};

pub const tempo_moderato_42431_explorers = [_]Explorer{
    .{
        .name = "Tempo Testnet Explorer",
        .url = "https://explore.testnet.tempo.xyz",
    },
};

pub const tempo_moderato_42431 = Chain{
    .name = "Tempo Testnet",
    .chain = "Tempo",
    .chain_id = 42431,
    .network_id = 42431,
    .short_name = "tempo-moderato",
    .rpc = &tempo_moderato_42431_rpcs,
    .native_currency = .{
        .name = "US Dollar",
        .symbol = "USD",
        .decimals = 18,
    },
    .info_url = "https://tempo.xyz",
    .explorers = &tempo_moderato_42431_explorers,
};

pub const zero_beacon_testnet_43000_rpcs = [_][]const u8{};

pub const zero_beacon_testnet_43000 = Chain{
    .name = "Zero Beacon Testnet",
    .chain = "ZERO",
    .chain_id = 43000,
    .network_id = 43000,
    .short_name = "zero-beacon-testnet",
    .rpc = &zero_beacon_testnet_43000_rpcs,
    .native_currency = .{
        .name = "ZRO",
        .symbol = "ZRO",
        .decimals = 18,
    },
    .info_url = "https://layerzero.network",
    .explorers = &.{},
};

pub const zero_system_testnet_43001_rpcs = [_][]const u8{};

pub const zero_system_testnet_43001 = Chain{
    .name = "Zero System Zone Testnet",
    .chain = "ZERO",
    .chain_id = 43001,
    .network_id = 43001,
    .short_name = "zero-system-testnet",
    .rpc = &zero_system_testnet_43001_rpcs,
    .native_currency = .{
        .name = "ZRO",
        .symbol = "ZRO",
        .decimals = 18,
    },
    .info_url = "https://layerzero.network",
    .explorers = &.{},
};

pub const zero_interop_testnet_43002_rpcs = [_][]const u8{};

pub const zero_interop_testnet_43002 = Chain{
    .name = "Zero Interop Zone Testnet",
    .chain = "ZERO",
    .chain_id = 43002,
    .network_id = 43002,
    .short_name = "zero-interop-testnet",
    .rpc = &zero_interop_testnet_43002_rpcs,
    .native_currency = .{
        .name = "ZRO",
        .symbol = "ZRO",
        .decimals = 18,
    },
    .info_url = "https://layerzero.network",
    .explorers = &.{},
};

pub const zero_atlas_testnet_43003_rpcs = [_][]const u8{};

pub const zero_atlas_testnet_43003 = Chain{
    .name = "LayerZero ATLAS Testnet",
    .chain = "ZERO",
    .chain_id = 43003,
    .network_id = 43003,
    .short_name = "zero-atlas-testnet",
    .rpc = &zero_atlas_testnet_43003_rpcs,
    .native_currency = .{
        .name = "ZRO",
        .symbol = "ZRO",
        .decimals = 18,
    },
    .info_url = "https://layerzero.network",
    .explorers = &.{},
};

pub const zero_private_testnet_43004_rpcs = [_][]const u8{};

pub const zero_private_testnet_43004 = Chain{
    .name = "Zero Private Zone Testnet",
    .chain = "ZERO",
    .chain_id = 43004,
    .network_id = 43004,
    .short_name = "zero-private-testnet",
    .rpc = &zero_private_testnet_43004_rpcs,
    .native_currency = .{
        .name = "ZRO",
        .symbol = "ZRO",
        .decimals = 18,
    },
    .info_url = "https://layerzero.network",
    .explorers = &.{},
};

pub const ric_test_45578_rpcs = [_][]const u8{
    "https://rpcrichechain.com",
};

pub const ric_test_45578_explorers = [_]Explorer{
    .{
        .name = "RicheScan",
        .url = "https://richescan-testnet.com/",
    },
};

pub const ric_test_45578 = Chain{
    .name = "Riche Chain Testnet",
    .chain = "RIC",
    .chain_id = 45578,
    .network_id = 45578,
    .short_name = "ric-test",
    .rpc = &ric_test_45578_rpcs,
    .native_currency = .{
        .name = "Riche",
        .symbol = "RIC",
        .decimals = 18,
    },
    .info_url = "https://rpcrichechain.com",
    .explorers = &ric_test_45578_explorers,
};

pub const robinhoodchaintestnet_46630_rpcs = [_][]const u8{
    "https://rpc.testnet.chain.robinhood.com",
};

pub const robinhoodchaintestnet_46630_explorers = [_]Explorer{
    .{
        .name = "Robinhood Chain Testnet Explorer",
        .url = "https://explorer.testnet.chain.robinhood.com",
    },
};

pub const robinhoodchaintestnet_46630 = Chain{
    .name = "Robinhood Chain Testnet",
    .chain = "Robinhood Chain Testnet",
    .chain_id = 46630,
    .network_id = 46630,
    .short_name = "robinhoodchaintestnet",
    .rpc = &robinhoodchaintestnet_46630_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://docs.robinhood.com/chain",
    .explorers = &robinhoodchaintestnet_46630_explorers,
};

pub const txcl_47294_rpcs = [_][]const u8{
    "https://tradexcele.cloud/rpc/",
};

pub const txcl_47294_explorers = [_]Explorer{
    .{
        .name = "TXCL Explorer",
        .url = "https://tradexcele.cloud/chain",
    },
};

pub const txcl_47294 = Chain{
    .name = "TradeXcele",
    .chain = "TXCL",
    .chain_id = 47294,
    .network_id = 47294,
    .short_name = "txcl",
    .rpc = &txcl_47294_rpcs,
    .native_currency = .{
        .name = "TXCL",
        .symbol = "TXCL",
        .decimals = 18,
    },
    .info_url = "https://tradexcele.com/chain",
    .explorers = &txcl_47294_explorers,
};

pub const bitbadges_50024_rpcs = [_][]const u8{
    "https://evm-rpc.bitbadges.io",
};

pub const bitbadges_50024_explorers = [_]Explorer{
    .{
        .name = "BitBadges Explorer",
        .url = "https://evm.explorer.bitbadges.io",
    },
};

pub const bitbadges_50024 = Chain{
    .name = "BitBadges",
    .chain = "BitBadges",
    .chain_id = 50024,
    .network_id = 50024,
    .short_name = "bitbadges",
    .rpc = &bitbadges_50024_rpcs,
    .native_currency = .{
        .name = "BitBadges",
        .symbol = "BADGE",
        .decimals = 18,
    },
    .info_url = "https://bitbadges.io",
    .explorers = &bitbadges_50024_explorers,
};

pub const bitbadges_testnet_50025_rpcs = [_][]const u8{
    "https://evm-rpc-testnet.bitbadges.io",
};

pub const bitbadges_testnet_50025_explorers = [_]Explorer{
    .{
        .name = "BitBadges Testnet Explorer",
        .url = "https://evm-testnet.explorer.bitbadges.io",
    },
};

pub const bitbadges_testnet_50025 = Chain{
    .name = "BitBadges Testnet",
    .chain = "BitBadges",
    .chain_id = 50025,
    .network_id = 50025,
    .short_name = "bitbadges-testnet",
    .rpc = &bitbadges_testnet_50025_rpcs,
    .native_currency = .{
        .name = "BitBadges",
        .symbol = "BADGE",
        .decimals = 18,
    },
    .info_url = "https://bitbadges.io",
    .explorers = &bitbadges_testnet_50025_explorers,
};

pub const SomniaTestnet_50312_rpcs = [_][]const u8{
    "https://api.infra.testnet.somnia.network",
};

pub const SomniaTestnet_50312_explorers = [_]Explorer{
    .{
        .name = "Shannon Explorer",
        .url = "https://shannon-explorer.somnia.network",
    },
};

pub const SomniaTestnet_50312 = Chain{
    .name = "Somnia Testnet",
    .chain = "Somnia",
    .chain_id = 50312,
    .network_id = 50312,
    .short_name = "SomniaTestnet",
    .rpc = &SomniaTestnet_50312_rpcs,
    .native_currency = .{
        .name = "Somnia Testnet",
        .symbol = "STT",
        .decimals = 18,
    },
    .info_url = "https://somnia.network",
    .explorers = &SomniaTestnet_50312_explorers,
};

pub const risa_51014_rpcs = [_][]const u8{
    "https://rpc.testnet.syndicate.io",
};

pub const risa_51014_explorers = [_]Explorer{
    .{
        .name = "Risa Testnet Explorer",
        .url = "https://explorer.testnet.syndicate.io",
    },
};

pub const risa_51014 = Chain{
    .name = "Risa Testnet",
    .chain = "Risa Testnet",
    .chain_id = 51014,
    .network_id = 51014,
    .short_name = "risa",
    .rpc = &risa_51014_rpcs,
    .native_currency = .{
        .name = "Testnet Syndicate",
        .symbol = "SYND",
        .decimals = 18,
    },
    .info_url = "https://syndicate.io",
    .explorers = &risa_51014_explorers,
};

pub const memento_mainnet_51888_rpcs = [_][]const u8{
    "https://rpc.mementoblockchain.com",
};

pub const memento_mainnet_51888 = Chain{
    .name = "Memento Mainnet",
    .chain = "Memento",
    .chain_id = 51888,
    .network_id = 51888,
    .short_name = "memento-mainnet",
    .rpc = &memento_mainnet_51888_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = null,
    .explorers = &.{},
};

pub const lazai_52924_rpcs = [_][]const u8{
    "https://mainnet.lazai.network/",
};

pub const lazai_52924_explorers = [_]Explorer{
    .{
        .name = "LazAI Mainnet Explorer",
        .url = "https://explorer.mainnet.lazai.network",
    },
};

pub const lazai_52924 = Chain{
    .name = "LazAI Mainnet",
    .chain = "LazAI",
    .chain_id = 52924,
    .network_id = 52924,
    .short_name = "lazai",
    .rpc = &lazai_52924_rpcs,
    .native_currency = .{
        .name = "METIS Token",
        .symbol = "METIS",
        .decimals = 18,
    },
    .info_url = "https://lazai.network",
    .explorers = &lazai_52924_explorers,
};

pub const datahaven_55930_rpcs = [_][]const u8{
    "https://services.datahaven-mainnet.network/mainnet",
};

pub const datahaven_55930_explorers = [_]Explorer{
    .{
        .name = "Blockscout",
        .url = "https://dhscan.io",
    },
};

pub const datahaven_55930 = Chain{
    .name = "DataHaven Mainnet",
    .chain = "datahaven",
    .chain_id = 55930,
    .network_id = 55930,
    .short_name = "datahaven",
    .rpc = &datahaven_55930_rpcs,
    .native_currency = .{
        .name = "HAVE",
        .symbol = "HAVE",
        .decimals = 18,
    },
    .info_url = "https://datahaven.xyz",
    .explorers = &datahaven_55930_explorers,
};

pub const datahaven_55931_rpcs = [_][]const u8{
    "https://services.datahaven-testnet.network/testnet",
};

pub const datahaven_55931_explorers = [_]Explorer{
    .{
        .name = "Blockscout",
        .url = "https://testnet.dhscan.io",
    },
};

pub const datahaven_55931 = Chain{
    .name = "DataHaven Testnet",
    .chain = "datahaven-testnet",
    .chain_id = 55931,
    .network_id = 55931,
    .short_name = "datahaven",
    .rpc = &datahaven_55931_rpcs,
    .native_currency = .{
        .name = "MOCK",
        .symbol = "MOCK",
        .decimals = 18,
    },
    .info_url = "https://datahaven.xyz",
    .explorers = &datahaven_55931_explorers,
};

pub const zktanenbaum_57057_rpcs = [_][]const u8{
    "https://rpc-zk.tanenbaum.io",
};

pub const zktanenbaum_57057_explorers = [_]Explorer{
    .{
        .name = "zkTanenbaum Block Explorer",
        .url = "https://explorer-zk.tanenbaum.io",
    },
};

pub const zktanenbaum_57057 = Chain{
    .name = "zkTanenbaum Testnet",
    .chain = "ZKSYS",
    .chain_id = 57057,
    .network_id = 57057,
    .short_name = "zktanenbaum",
    .rpc = &zktanenbaum_57057_rpcs,
    .native_currency = .{
        .name = "Testnet Syscoin",
        .symbol = "TSYS",
        .decimals = 18,
    },
    .info_url = "https://syscoin.org",
    .explorers = &zktanenbaum_57057_explorers,
};

pub const mev_commit_57173_rpcs = [_][]const u8{
    "https://chainrpc.mev-commit.xyz",
};

pub const mev_commit_57173_explorers = [_]Explorer{
    .{
        .name = "mev-commit Xplorer",
        .url = "https://www.mev-commit.xyz",
    },
};

pub const mev_commit_57173 = Chain{
    .name = "mev-commit Mainnet",
    .chain = "mev-commit",
    .chain_id = 57173,
    .network_id = 57173,
    .short_name = "mev-commit",
    .rpc = &mev_commit_57173_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://www.primev.xyz",
    .explorers = &mev_commit_57173_explorers,
};

pub const jello_61564_rpcs = [_][]const u8{
    "https://rpc.pine.ink",
};

pub const jello_61564_explorers = [_]Explorer{
    .{
        .name = "Gelatine Explorer",
        .url = "https://explorer.pine.ink",
    },
};

pub const jello_61564 = Chain{
    .name = "Gelatine Network",
    .chain = "JELLO",
    .chain_id = 61564,
    .network_id = 61564,
    .short_name = "jello",
    .rpc = &jello_61564_rpcs,
    .native_currency = .{
        .name = "JELLO",
        .symbol = "JELLO",
        .decimals = 18,
    },
    .info_url = "https://gelatine.pine.ink",
    .explorers = &jello_61564_explorers,
};

pub const mova_61900_rpcs = [_][]const u8{
    "https://rpc.movachain.com",
};

pub const mova_61900_explorers = [_]Explorer{
    .{
        .name = "movascan",
        .url = "https://scan.movachain.com",
    },
};

pub const mova_61900 = Chain{
    .name = "Mova Mainnet",
    .chain = "MOVA",
    .chain_id = 61900,
    .network_id = 61900,
    .short_name = "mova",
    .rpc = &mova_61900_rpcs,
    .native_currency = .{
        .name = "MOVA Mainnet GasCoin",
        .symbol = "MOVA",
        .decimals = 18,
    },
    .info_url = "https://movachain.com",
    .explorers = &mova_61900_explorers,
};

pub const apollo_62606_rpcs = [_][]const u8{
    "https://mainnet-rpc.apolloscan.io",
};

pub const apollo_62606_explorers = [_]Explorer{
    .{
        .name = "Apollo Mainnet Explorer",
        .url = "https://apolloscan.io",
    },
};

pub const apollo_62606 = Chain{
    .name = "Apollo Mainnet",
    .chain = "APOLLO",
    .chain_id = 62606,
    .network_id = 62606,
    .short_name = "apollo",
    .rpc = &apollo_62606_rpcs,
    .native_currency = .{
        .name = "Apollo",
        .symbol = "APOLLO",
        .decimals = 18,
    },
    .info_url = "https://apolloscan.io",
    .explorers = &apollo_62606_explorers,
};

pub const veri5_63868_rpcs = [_][]const u8{
    "https://rpc0.veri5.network",
};

pub const veri5_63868_explorers = [_]Explorer{
    .{
        .name = "Veri5 Explorer",
        .url = "https://explorer.veri5.network",
    },
};

pub const veri5_63868 = Chain{
    .name = "Veri5",
    .chain = "VERI5",
    .chain_id = 63868,
    .network_id = 63868,
    .short_name = "veri5",
    .rpc = &veri5_63868_rpcs,
    .native_currency = .{
        .name = "Unit",
        .symbol = "UNIT",
        .decimals = 18,
    },
    .info_url = "https://veri5.technology",
    .explorers = &veri5_63868_explorers,
};

pub const gald_64137_rpcs = [_][]const u8{
    "https://rpc-mainnet.galdrionscan.com",
};

pub const gald_64137_explorers = [_]Explorer{
    .{
        .name = "GaldrionScan",
        .url = "https://galdrionscan.com",
    },
};

pub const gald_64137 = Chain{
    .name = "Galdrion Mainnet",
    .chain = "GALD",
    .chain_id = 64137,
    .network_id = 64137,
    .short_name = "gald",
    .rpc = &gald_64137_rpcs,
    .native_currency = .{
        .name = "Galdrion",
        .symbol = "GALD",
        .decimals = 18,
    },
    .info_url = "https://galdrion.com",
    .explorers = &gald_64137_explorers,
};

pub const omachain_testnet_66238_rpcs = [_][]const u8{
    "https://rpc.testnet.chain.oma3.org/",
};

pub const omachain_testnet_66238_explorers = [_]Explorer{
    .{
        .name = "OMAChain Testnet Explorer",
        .url = "https://explorer.testnet.chain.oma3.org/",
    },
};

pub const omachain_testnet_66238 = Chain{
    .name = "OMAChain Testnet",
    .chain = "OMAChain",
    .chain_id = 66238,
    .network_id = 66238,
    .short_name = "omachain-testnet",
    .rpc = &omachain_testnet_66238_rpcs,
    .native_currency = .{
        .name = "OMA",
        .symbol = "OMA",
        .decimals = 18,
    },
    .info_url = "https://www.oma3.org/",
    .explorers = &omachain_testnet_66238_explorers,
};

pub const nxpc_68414_rpcs = [_][]const u8{
    "https://henesys-rpc.msu.io",
};

pub const nxpc_68414_explorers = [_]Explorer{
    .{
        .name = "Xangle MSU Explorer",
        .url = "https://msu-explorer.xangle.io",
    },
    .{
        .name = "Avalanche Explorer",
        .url = "https://subnets.avax.network/henesys",
    },
};

pub const nxpc_68414 = Chain{
    .name = "Henesys",
    .chain = "Henesys",
    .chain_id = 68414,
    .network_id = 68414,
    .short_name = "nxpc",
    .rpc = &nxpc_68414_rpcs,
    .native_currency = .{
        .name = "Nexpace",
        .symbol = "NXPC",
        .decimals = 18,
    },
    .info_url = "https://nexpace.io/",
    .explorers = &nxpc_68414_explorers,
};

pub const eto_69670_rpcs = [_][]const u8{
    "https://eto.ash.center/rpc",
};

pub const eto_69670_explorers = [_]Explorer{
    .{
        .name = "ETO Explorer",
        .url = "https://eto-explorer.ash.center",
    },
};

pub const eto_69670 = Chain{
    .name = "ETO L1",
    .chain = "ETO",
    .chain_id = 69670,
    .network_id = 69670,
    .short_name = "eto",
    .rpc = &eto_69670_rpcs,
    .native_currency = .{
        .name = "eGAS",
        .symbol = "eGAS",
        .decimals = 18,
    },
    .info_url = "https://eto.ash.center",
    .explorers = &eto_69670_explorers,
};

pub const pyra_70003_rpcs = [_][]const u8{
    "https://rpc.pyrachain.io",
};

pub const pyra_70003_explorers = [_]Explorer{
    .{
        .name = "Pyra Chain Explorer",
        .url = "https://explorer.pyrachain.io",
    },
};

pub const pyra_70003 = Chain{
    .name = "Pyra Chain",
    .chain = "PYRA",
    .chain_id = 70003,
    .network_id = 70003,
    .short_name = "pyra",
    .rpc = &pyra_70003_rpcs,
    .native_currency = .{
        .name = "PYRA",
        .symbol = "PYRA",
        .decimals = 9,
    },
    .info_url = "https://pyrachain.io",
    .explorers = &pyra_70003_explorers,
};

pub const seven_70007_rpcs = [_][]const u8{
    "https://theseven.meme/api/seven-chain/jsonrpc",
};

pub const seven_70007_explorers = [_]Explorer{
    .{
        .name = "Seven Chain Explorer",
        .url = "https://theseven.meme/blockchain/explorer",
    },
};

pub const seven_70007 = Chain{
    .name = "Seven Chain",
    .chain = "SEVEN",
    .chain_id = 70007,
    .network_id = 70007,
    .short_name = "seven",
    .rpc = &seven_70007_rpcs,
    .native_currency = .{
        .name = "Seven",
        .symbol = "SEVEN",
        .decimals = 18,
    },
    .info_url = "https://theseven.meme",
    .explorers = &seven_70007_explorers,
};

pub const eki_70101_rpcs = [_][]const u8{
    "https://eki-chain.onrender.com/rpc",
};

pub const eki_70101_explorers = [_]Explorer{
    .{
        .name = "EKI Explorer",
        .url = "https://eki-chain.onrender.com",
    },
};

pub const eki_70101 = Chain{
    .name = "EKI Chain",
    .chain = "EKI",
    .chain_id = 70101,
    .network_id = 70101,
    .short_name = "eki",
    .rpc = &eki_70101_rpcs,
    .native_currency = .{
        .name = "EKI",
        .symbol = "EKI",
        .decimals = 18,
    },
    .info_url = "https://eki-chain.onrender.com",
    .explorers = &eki_70101_explorers,
};

pub const cx_testnet_70707_rpcs = [_][]const u8{
    "https://subnets.avax.network/cxctestnet/testnet/rpc",
};

pub const cx_testnet_70707_explorers = [_]Explorer{
    .{
        .name = "CX Chain Testnet Explorer",
        .url = "https://subnets-test.avax.network/cxctestnet",
    },
};

pub const cx_testnet_70707 = Chain{
    .name = "CX Chain Testnet",
    .chain = "CX",
    .chain_id = 70707,
    .network_id = 70707,
    .short_name = "cx-testnet",
    .rpc = &cx_testnet_70707_rpcs,
    .native_currency = .{
        .name = "CX",
        .symbol = "CX",
        .decimals = 18,
    },
    .info_url = "https://www.cxchain.xyz/",
    .explorers = &cx_testnet_70707_explorers,
};

pub const wcn_testnet_71117_rpcs = [_][]const u8{
    "https://rpc-testnet.w-chain.com",
};

pub const wcn_testnet_71117_explorers = [_]Explorer{
    .{
        .name = "W Scan Testnet",
        .url = "https://scan-testnet.w-chain.com",
    },
};

pub const wcn_testnet_71117 = Chain{
    .name = "W Chain Testnet",
    .chain = "WCN",
    .chain_id = 71117,
    .network_id = 71117,
    .short_name = "wcn-testnet",
    .rpc = &wcn_testnet_71117_rpcs,
    .native_currency = .{
        .name = "W Coin",
        .symbol = "WCO",
        .decimals = 18,
    },
    .info_url = "https://w-chain.com",
    .explorers = &wcn_testnet_71117_explorers,
};

pub const RLS_72957_rpcs = [_][]const u8{
    "https://mainnet-rpc.rayls.com",
};

pub const RLS_72957_explorers = [_]Explorer{
    .{
        .name = "Rayls Mainnet Explorer",
        .url = "https://explorer.rayls.com",
    },
};

pub const RLS_72957 = Chain{
    .name = "Rayls Mainnet",
    .chain = "RLS",
    .chain_id = 72957,
    .network_id = 72957,
    .short_name = "RLS",
    .rpc = &RLS_72957_rpcs,
    .native_currency = .{
        .name = "USD Rayls",
        .symbol = "USDr",
        .decimals = 18,
    },
    .info_url = "https://rayls.com",
    .explorers = &RLS_72957_explorers,
};

pub const seleman_73571_rpcs = [_][]const u8{
    "https://explorer.primevertexlabs.com.mx/rpc",
};

pub const seleman_73571_explorers = [_]Explorer{
    .{
        .name = "seleman",
        .url = "https://explorer.primevertexlabs.com.mx",
    },
};

pub const seleman_73571 = Chain{
    .name = "SELEMAN Chain",
    .chain = "SMN",
    .chain_id = 73571,
    .network_id = 73571,
    .short_name = "seleman",
    .rpc = &seleman_73571_rpcs,
    .native_currency = .{
        .name = "SELEMAN",
        .symbol = "SMN",
        .decimals = 18,
    },
    .info_url = "https://explorer.primevertexlabs.com.mx/explorer",
    .explorers = &seleman_73571_explorers,
};

pub const carrchain_76672_rpcs = [_][]const u8{
    "https://rpc-testnet.carrchain.io",
};

pub const carrchain_76672_explorers = [_]Explorer{
    .{
        .name = "CarrScan",
        .url = "https://testnet.carrscan.io",
    },
};

pub const carrchain_76672 = Chain{
    .name = "CarrChain Testnet",
    .chain = "CARR",
    .chain_id = 76672,
    .network_id = 76672,
    .short_name = "carrchain",
    .rpc = &carrchain_76672_rpcs,
    .native_currency = .{
        .name = "CARR",
        .symbol = "CARR",
        .decimals = 18,
    },
    .info_url = "https://carrchain.io",
    .explorers = &carrchain_76672_explorers,
};

pub const ventures_77717_rpcs = [_][]const u8{
    "https://rpc.venturesblockchain.io",
};

pub const ventures_77717_explorers = [_]Explorer{
    .{
        .name = "Ventures Explorer",
        .url = "https://explorer.venturesblockchain.io",
    },
};

pub const ventures_77717 = Chain{
    .name = "Ventures Blockchain",
    .chain = "Ventures",
    .chain_id = 77717,
    .network_id = 77717,
    .short_name = "ventures",
    .rpc = &ventures_77717_rpcs,
    .native_currency = .{
        .name = "Ventures Coin",
        .symbol = "VC",
        .decimals = 18,
    },
    .info_url = "https://www.venturesblockchain.io",
    .explorers = &ventures_77717_explorers,
};

pub const bsos_77888_rpcs = [_][]const u8{
    "https://rpc.one.bsos.co",
};

pub const bsos_77888_explorers = [_]Explorer{
    .{
        .name = "BSOS Chain Explorer",
        .url = "https://explorer.one.bsos.co",
    },
};

pub const bsos_77888 = Chain{
    .name = "BSOS Chain",
    .chain = "BSOS",
    .chain_id = 77888,
    .network_id = 77888,
    .short_name = "bsos",
    .rpc = &bsos_77888_rpcs,
    .native_currency = .{
        .name = "BSOS",
        .symbol = "BSOS",
        .decimals = 18,
    },
    .info_url = "https://www.bsos.co",
    .explorers = &bsos_77888_explorers,
};

pub const bradi_78168_rpcs = [_][]const u8{
    "https://bradicoin-api.onrender.com",
};

pub const bradi_78168 = Chain{
    .name = "Bradicoin",
    .chain = "BRADI",
    .chain_id = 78168,
    .network_id = 78168,
    .short_name = "bradi",
    .rpc = &bradi_78168_rpcs,
    .native_currency = .{
        .name = "Bradicoin",
        .symbol = "BRD",
        .decimals = 18,
    },
    .info_url = "https://www.bradichain.com",
    .explorers = &.{},
};

pub const pexli_testnet_78901_rpcs = [_][]const u8{
    "https://testrpc.pex.li",
};

pub const pexli_testnet_78901_explorers = [_]Explorer{
    .{
        .name = "Pexli Explorer",
        .url = "https://explorer.pex.li",
    },
};

pub const pexli_testnet_78901 = Chain{
    .name = "Pexli Testnet",
    .chain = "PEX",
    .chain_id = 78901,
    .network_id = 78901,
    .short_name = "pexli-testnet",
    .rpc = &pexli_testnet_78901_rpcs,
    .native_currency = .{
        .name = "Pexli",
        .symbol = "PEX",
        .decimals = 18,
    },
    .info_url = "https://pex.li",
    .explorers = &pexli_testnet_78901_explorers,
};

pub const hpx_80808_rpcs = [_][]const u8{
    "https://rpc.hyperx.technology",
};

pub const hpx_80808_explorers = [_]Explorer{
    .{
        .name = "HyperX Explorer",
        .url = "https://scan.hyperx.technology",
    },
};

pub const hpx_80808 = Chain{
    .name = "HyperX",
    .chain = "HPX",
    .chain_id = 80808,
    .network_id = 80808,
    .short_name = "hpx",
    .rpc = &hpx_80808_rpcs,
    .native_currency = .{
        .name = "HPX",
        .symbol = "HPX",
        .decimals = 18,
    },
    .info_url = "https://hyperx.technology",
    .explorers = &hpx_80808_explorers,
};

pub const onyx_80888_rpcs = [_][]const u8{
    "https://rpc.onyx.org",
};

pub const onyx_80888_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://explorer.onyx.org",
    },
};

pub const onyx_80888 = Chain{
    .name = "Onyx",
    .chain = "onyx",
    .chain_id = 80888,
    .network_id = 80888,
    .short_name = "onyx",
    .rpc = &onyx_80888_rpcs,
    .native_currency = .{
        .name = "Onyxcoin",
        .symbol = "XCN",
        .decimals = 18,
    },
    .info_url = "https://onyx.org",
    .explorers = &onyx_80888_explorers,
};

pub const codex_81224_rpcs = [_][]const u8{
    "https://rpc.codex.xyz",
};

pub const codex_81224_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://explorer.codex.xyz",
    },
};

pub const codex_81224 = Chain{
    .name = "Codex Mainnet",
    .chain = "CODEX",
    .chain_id = 81224,
    .network_id = 81224,
    .short_name = "codex",
    .rpc = &codex_81224_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://www.codex.xyz/",
    .explorers = &codex_81224_explorers,
};

pub const steemvm_81630_rpcs = [_][]const u8{
    "https://evm.steemvmscan.com",
};

pub const steemvm_81630_explorers = [_]Explorer{
    .{
        .name = "SVM EVM Scan",
        .url = "https://evmscan.steemvmscan.com",
    },
};

pub const steemvm_81630 = Chain{
    .name = "SteemVM",
    .chain = "SVM",
    .chain_id = 81630,
    .network_id = 81630,
    .short_name = "steemvm",
    .rpc = &steemvm_81630_rpcs,
    .native_currency = .{
        .name = "STEEM",
        .symbol = "STEEM",
        .decimals = 18,
    },
    .info_url = "https://steemvmscan.com",
    .explorers = &steemvm_81630_explorers,
};

pub const ticko_84256_rpcs = [_][]const u8{
    "https://miner.ticko.xyz",
};

pub const ticko_84256_explorers = [_]Explorer{
    .{
        .name = "ticko explorer",
        .url = "https://app.ticko.xyz/explorer",
    },
};

pub const ticko_84256 = Chain{
    .name = "Ticko",
    .chain = "Ticko",
    .chain_id = 84256,
    .network_id = 84256,
    .short_name = "ticko",
    .rpc = &ticko_84256_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://ticko.xyz/",
    .explorers = &ticko_84256_explorers,
};

pub const ticko_testnet_84257_rpcs = [_][]const u8{
    "https://miner.testnet.ticko.xyz:4556",
};

pub const ticko_testnet_84257_explorers = [_]Explorer{
    .{
        .name = "ticko explorer",
        .url = "https://testnet.ticko.xyz/explorer",
    },
};

pub const ticko_testnet_84257 = Chain{
    .name = "Ticko Testnet",
    .chain = "Ticko",
    .chain_id = 84257,
    .network_id = 84257,
    .short_name = "ticko-testnet",
    .rpc = &ticko_testnet_84257_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://testnet.ticko.xyz/",
    .explorers = &ticko_testnet_84257_explorers,
};

pub const plus_88088_rpcs = [_][]const u8{
    "https://plusmain.net/api/rpc",
    "https://rpc.plusmain.net",
};

pub const plus_88088_explorers = [_]Explorer{
    .{
        .name = "PLUS Mainnet Explorer",
        .url = "https://scan.plusmain.net",
    },
};

pub const plus_88088 = Chain{
    .name = "PLUS Mainnet",
    .chain = "PLUS",
    .chain_id = 88088,
    .network_id = 88088,
    .short_name = "plus",
    .rpc = &plus_88088_rpcs,
    .native_currency = .{
        .name = "PLUS Coin",
        .symbol = "PLUS",
        .decimals = 18,
    },
    .info_url = "https://plusmain.net",
    .explorers = &plus_88088_explorers,
};

pub const ptek_88788_rpcs = [_][]const u8{
    "https://mainnet.ptekcoin.com",
};

pub const ptek_88788_explorers = [_]Explorer{
    .{
        .name = "PropTech Blockchain Explorer",
        .url = "https://explorer.ptekcoin.com",
    },
};

pub const ptek_88788 = Chain{
    .name = "PropTech Mainnet",
    .chain = "PTEK",
    .chain_id = 88788,
    .network_id = 88788,
    .short_name = "ptek",
    .rpc = &ptek_88788_rpcs,
    .native_currency = .{
        .name = "PropTech Token",
        .symbol = "PTEK",
        .decimals = 18,
    },
    .info_url = "https://ptekcoin.com",
    .explorers = &ptek_88788_explorers,
};

pub const qtschain_88868_rpcs = [_][]const u8{
    "https://rpc-1.qts-chain.com",
    "https://rpc-2.qts-chain.com",
    "https://rpc-3.qts-chain.com",
};

pub const qtschain_88868_explorers = [_]Explorer{
    .{
        .name = "QTS Explorer",
        .url = "https://explorer.qts-chain.com",
    },
};

pub const qtschain_88868 = Chain{
    .name = "QTSCHAIN Mainnet",
    .chain = "QTS",
    .chain_id = 88868,
    .network_id = 88868,
    .short_name = "qtschain",
    .rpc = &qtschain_88868_rpcs,
    .native_currency = .{
        .name = "QTS",
        .symbol = "QTS",
        .decimals = 18,
    },
    .info_url = "https://qts-chain.com",
    .explorers = &qtschain_88868_explorers,
};

pub const chiliz_88888_rpcs = [_][]const u8{
    "https://rpc.chiliz.com",
    "https://rpc.ankr.com/chiliz/",
    "https://chiliz.publicnode.com",
};

pub const chiliz_88888_explorers = [_]Explorer{
    .{
        .name = "Chiliscan",
        .url = "https://chiliscan.com/",
    },
    .{
        .name = "Scan Chiliz",
        .url = "https://scan.chiliz.com",
    },
};

pub const chiliz_88888 = Chain{
    .name = "Chiliz Chain",
    .chain = "CHZ",
    .chain_id = 88888,
    .network_id = 88888,
    .short_name = "chiliz",
    .rpc = &chiliz_88888_rpcs,
    .native_currency = .{
        .name = "Chiliz",
        .symbol = "CHZ",
        .decimals = 18,
    },
    .info_url = "https://www.chiliz.com/",
    .explorers = &chiliz_88888_explorers,
};

pub const valuex_90000_rpcs = [_][]const u8{
    "https://node.valuex-foundation.com/rpc",
};

pub const valuex_90000_explorers = [_]Explorer{
    .{
        .name = "VLX Explorer",
        .url = "https://scan.valuex-foundation.com",
    },
};

pub const valuex_90000 = Chain{
    .name = "ValueX Chain",
    .chain = "VLX",
    .chain_id = 90000,
    .network_id = 90000,
    .short_name = "valuex",
    .rpc = &valuex_90000_rpcs,
    .native_currency = .{
        .name = "ValueX Token",
        .symbol = "VLX",
        .decimals = 18,
    },
    .info_url = "https://valuex-foundation.com",
    .explorers = &valuex_90000_explorers,
};

pub const apaw_90025_rpcs = [_][]const u8{
    "https://rpc.aipaw.xyz",
};

pub const apaw_90025 = Chain{
    .name = "AIPaw Mainnet",
    .chain = "aipaw",
    .chain_id = 90025,
    .network_id = 90025,
    .short_name = "apaw",
    .rpc = &apaw_90025_rpcs,
    .native_currency = .{
        .name = "Aipaw",
        .symbol = "AIPAW",
        .decimals = 18,
    },
    .info_url = "https://aipaw.top",
    .explorers = &.{},
};

pub const watr_testnet_92870_rpcs = [_][]const u8{
    "https://rpc.testnet.watr.org/ext/bc/2ZZiR6T2sJjebQguABb53rRpzme8zfK4R9zt5vMM8MX1oUm3g/rpc",
};

pub const watr_testnet_92870_explorers = [_]Explorer{
    .{
        .name = "Watr Explorer",
        .url = "https://explorer.testnet.watr.org",
    },
};

pub const watr_testnet_92870 = Chain{
    .name = "Watr Testnet",
    .chain = "WATR",
    .chain_id = 92870,
    .network_id = 92870,
    .short_name = "watr-testnet",
    .rpc = &watr_testnet_92870_rpcs,
    .native_currency = .{
        .name = "Watr",
        .symbol = "WATR",
        .decimals = 18,
    },
    .info_url = "https://www.watr.org",
    .explorers = &watr_testnet_92870_explorers,
};

pub const pepu_97741_rpcs = [_][]const u8{
    "https://rpc-pepu-v2-mainnet-0.t.conduit.xyz",
};

pub const pepu_97741_explorers = [_]Explorer{
    .{
        .name = "PEPUScan",
        .url = "https://pepuscan.com/",
    },
};

pub const pepu_97741 = Chain{
    .name = "PEPE Unchained",
    .chain = "PEPU",
    .chain_id = 97741,
    .network_id = 97741,
    .short_name = "pepu",
    .rpc = &pepu_97741_rpcs,
    .native_currency = .{
        .name = "Pepe Unchained",
        .symbol = "PEPU",
        .decimals = 18,
    },
    .info_url = "https://pepeunchained.com/",
    .explorers = &pepu_97741_explorers,
};

pub const GOGO_99001_rpcs = [_][]const u8{
    "https://gogoblockchain.wuaze.com/node_rpc.php",
};

pub const GOGO_99001_explorers = [_]Explorer{
    .{
        .name = "GogoScan",
        .url = "https://gogoblockchain.wuaze.com/explorer.php",
    },
};

pub const GOGO_99001 = Chain{
    .name = "Gogo Mainnet",
    .chain = "GOGO",
    .chain_id = 99001,
    .network_id = 99001,
    .short_name = "GOGO",
    .rpc = &GOGO_99001_rpcs,
    .native_currency = .{
        .name = "Gogo",
        .symbol = "GOGO",
        .decimals = 18,
    },
    .info_url = null,
    .explorers = &GOGO_99001_explorers,
};

pub const MC_99002_rpcs = [_][]const u8{
    "https://mars.free.nf/rpc.php",
};

pub const MC_99002_explorers = [_]Explorer{
    .{
        .name = "MarsScan",
        .url = "https://mars.free.nf/explorer.php",
    },
};

pub const MC_99002 = Chain{
    .name = "Mars Mainnet",
    .chain = "MC",
    .chain_id = 99002,
    .network_id = 99002,
    .short_name = "MC",
    .rpc = &MC_99002_rpcs,
    .native_currency = .{
        .name = "Mars Coin",
        .symbol = "MC",
        .decimals = 18,
    },
    .info_url = null,
    .explorers = &MC_99002_explorers,
};

pub const trct_99566_rpcs = [_][]const u8{
    "https://xapi.tractsafe.com",
};

pub const trct_99566_explorers = [_]Explorer{
    .{
        .name = "tractsafescan",
        .url = "https://explorer.tractsafe.com",
    },
};

pub const trct_99566 = Chain{
    .name = "Tractsafe Mainnet",
    .chain = "TRCT",
    .chain_id = 99566,
    .network_id = 99566,
    .short_name = "trct",
    .rpc = &trct_99566_rpcs,
    .native_currency = .{
        .name = "Tractsafe",
        .symbol = "TRCT",
        .decimals = 18,
    },
    .info_url = "https://tractsafe.com",
    .explorers = &trct_99566_explorers,
};

pub const elysium_testnet_99801_rpcs = [_][]const u8{
    "https://testnet-rpc.elysium.kinetiq.xyz",
};

pub const elysium_testnet_99801_explorers = [_]Explorer{
    .{
        .name = "Elysium Testnet Explorer",
        .url = "https://testnet.elysium.kinetiq.xyz",
    },
};

pub const elysium_testnet_99801 = Chain{
    .name = "Elysium Testnet",
    .chain = "Elysium Testnet",
    .chain_id = 99801,
    .network_id = 99801,
    .short_name = "elysium-testnet",
    .rpc = &elysium_testnet_99801_rpcs,
    .native_currency = .{
        .name = "HYPE",
        .symbol = "HYPE",
        .decimals = 18,
    },
    .info_url = "https://elysium.kinetiq.xyz/docs/what-is-elysium",
    .explorers = &elysium_testnet_99801_explorers,
};

pub const elysium_99901_rpcs = [_][]const u8{
    "https://rpc.elysium.kinetiq.xyz",
};

pub const elysium_99901_explorers = [_]Explorer{
    .{
        .name = "Elysium Explorer",
        .url = "https://elysium.kinetiq.xyz",
    },
};

pub const elysium_99901 = Chain{
    .name = "Elysium",
    .chain = "Elysium",
    .chain_id = 99901,
    .network_id = 99901,
    .short_name = "elysium",
    .rpc = &elysium_99901_rpcs,
    .native_currency = .{
        .name = "HYPE",
        .symbol = "HYPE",
        .decimals = 18,
    },
    .info_url = "https://elysium.kinetiq.xyz/docs/what-is-elysium",
    .explorers = &elysium_99901_explorers,
};

pub const qsn_99991_rpcs = [_][]const u8{
    "https://node.qsnchain.com/testnet/",
};

pub const qsn_99991_explorers = [_]Explorer{
    .{
        .name = "QSN Explorer",
        .url = "https://qsnscan.io",
    },
};

pub const qsn_99991 = Chain{
    .name = "Quantum Sharded Network Testnet",
    .chain = "QSN",
    .chain_id = 99991,
    .network_id = 99991,
    .short_name = "qsn",
    .rpc = &qsn_99991_rpcs,
    .native_currency = .{
        .name = "Quantum Sharded Network",
        .symbol = "tQSN",
        .decimals = 18,
    },
    .info_url = "https://qsnchain.com",
    .explorers = &qsn_99991_explorers,
};

pub const ctc_102030_rpcs = [_][]const u8{
    "https://mainnet3.creditcoin.network",
};

pub const ctc_102030_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://creditcoin.blockscout.com",
    },
};

pub const ctc_102030 = Chain{
    .name = "Creditcoin",
    .chain = "CTC",
    .chain_id = 102030,
    .network_id = 102030,
    .short_name = "ctc",
    .rpc = &ctc_102030_rpcs,
    .native_currency = .{
        .name = "CTC",
        .symbol = "CTC",
        .decimals = 18,
    },
    .info_url = "https://creditcoin.org",
    .explorers = &ctc_102030_explorers,
};

pub const ctctest_102031_rpcs = [_][]const u8{
    "https://rpc.cc3-testnet.creditcoin.network",
};

pub const ctctest_102031_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://creditcoin-testnet.blockscout.com",
    },
};

pub const ctctest_102031 = Chain{
    .name = "Creditcoin Testnet",
    .chain = "CTC",
    .chain_id = 102031,
    .network_id = 102031,
    .short_name = "ctctest",
    .rpc = &ctctest_102031_rpcs,
    .native_currency = .{
        .name = "Testnet CTC",
        .symbol = "tCTC",
        .decimals = 18,
    },
    .info_url = "https://creditcoin.org",
    .explorers = &ctctest_102031_explorers,
};

pub const ctcdev_102032_rpcs = [_][]const u8{
    "https://rpc.cc3-devnet.creditcoin.network",
};

pub const ctcdev_102032_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://creditcoin-devnet.blockscout.com",
    },
};

pub const ctcdev_102032 = Chain{
    .name = "Creditcoin Devnet",
    .chain = "CTC",
    .chain_id = 102032,
    .network_id = 102032,
    .short_name = "ctcdev",
    .rpc = &ctcdev_102032_rpcs,
    .native_currency = .{
        .name = "Devnet CTC",
        .symbol = "devCTC",
        .decimals = 18,
    },
    .info_url = "https://creditcoin.org",
    .explorers = &ctcdev_102032_explorers,
};

pub const mtf_114514_rpcs = [_][]const u8{
    "https://api.testnet.mtf.exchange/evm",
};

pub const mtf_114514 = Chain{
    .name = "MetaFlux Testnet",
    .chain = "MetaFluxEVM",
    .chain_id = 114514,
    .network_id = 114514,
    .short_name = "mtf",
    .rpc = &mtf_114514_rpcs,
    .native_currency = .{
        .name = "MetaFlux",
        .symbol = "MTF",
        .decimals = 18,
    },
    .info_url = "https://mtf.exchange",
    .explorers = &.{},
};

pub const swss_122605_rpcs = [_][]const u8{
    "https://swssrpc.swss.io",
};

pub const swss_122605_explorers = [_]Explorer{
    .{
        .name = "SWSS Chain Scan",
        .url = "https://swssscan.swss.io",
    },
};

pub const swss_122605 = Chain{
    .name = "SWSS Chain",
    .chain = "SWSS",
    .chain_id = 122605,
    .network_id = 122605,
    .short_name = "swss",
    .rpc = &swss_122605_rpcs,
    .native_currency = .{
        .name = "SWSS Coin",
        .symbol = "SWSS",
        .decimals = 18,
    },
    .info_url = "https://swss.io",
    .explorers = &swss_122605_explorers,
};

pub const ids_123999_rpcs = [_][]const u8{
    "https://a-rpc.nobody.network",
};

pub const ids_123999_explorers = [_]Explorer{
    .{
        .name = "nobodyscan",
        .url = "https://a-scan.nobody.network",
    },
};

pub const ids_123999 = Chain{
    .name = "Nobody Mainnet",
    .chain = "IDS",
    .chain_id = 123999,
    .network_id = 123999,
    .short_name = "ids",
    .rpc = &ids_123999_rpcs,
    .native_currency = .{
        .name = "IDS",
        .symbol = "IDS",
        .decimals = 18,
    },
    .info_url = "https://www.nobody.network",
    .explorers = &ids_123999_explorers,
};

pub const mitosis_124816_rpcs = [_][]const u8{
    "https://rpc.mitosis.org",
};

pub const mitosis_124816_explorers = [_]Explorer{
    .{
        .name = "Mitoscan",
        .url = "https://mitoscan.io/",
    },
};

pub const mitosis_124816 = Chain{
    .name = "Mitosis",
    .chain = "MITO",
    .chain_id = 124816,
    .network_id = 124816,
    .short_name = "mitosis",
    .rpc = &mitosis_124816_rpcs,
    .native_currency = .{
        .name = "Mitosis",
        .symbol = "MITO",
        .decimals = 18,
    },
    .info_url = "https://mitosis.org",
    .explorers = &mitosis_124816_explorers,
};

pub const grav_127001_rpcs = [_][]const u8{
    "https://mainnet-rpc.gravity.xyz",
};

pub const grav_127001_explorers = [_]Explorer{
    .{
        .name = "Gravity Mainnet Explorer",
        .url = "https://mainnet-explorer.gravity.xyz",
    },
};

pub const grav_127001 = Chain{
    .name = "Gravity",
    .chain = "Gravity",
    .chain_id = 127001,
    .network_id = 127001,
    .short_name = "grav",
    .rpc = &grav_127001_rpcs,
    .native_currency = .{
        .name = "Gravity",
        .symbol = "G",
        .decimals = 18,
    },
    .info_url = "https://gravity.xyz",
    .explorers = &grav_127001_explorers,
};

pub const etls_127823_rpcs = [_][]const u8{
    "https://node.shadownet.etherlink.com",
};

pub const etls_127823_explorers = [_]Explorer{
    .{
        .name = "Etherlink Shadownet Explorer",
        .url = "https://shadownet.explorer.etherlink.com",
    },
};

pub const etls_127823 = Chain{
    .name = "Etherlink Shadownet Testnet",
    .chain = "Etherlink",
    .chain_id = 127823,
    .network_id = 127823,
    .short_name = "etls",
    .rpc = &etls_127823_rpcs,
    .native_currency = .{
        .name = "tez",
        .symbol = "XTZ",
        .decimals = 18,
    },
    .info_url = "https://etherlink.com",
    .explorers = &etls_127823_explorers,
};

pub const fuel_sepolia_129514_rpcs = [_][]const u8{
    "https://fuel-testnet-rpc.getzapped.org",
};

pub const fuel_sepolia_129514_explorers = [_]Explorer{
    .{
        .name = "Fuel Sepolia Testnet Explorer",
        .url = "https://fuel-testnet-explorer.getzapped.org",
    },
};

pub const fuel_sepolia_129514 = Chain{
    .name = "Fuel Sepolia Testnet",
    .chain = "ETH",
    .chain_id = 129514,
    .network_id = 129514,
    .short_name = "fuel-sepolia",
    .rpc = &fuel_sepolia_129514_rpcs,
    .native_currency = .{
        .name = "Ethereum",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://fuel.network/",
    .explorers = &fuel_sepolia_129514_explorers,
};

pub const rphx_130526_rpcs = [_][]const u8{
    "https://rpc.rphxscan.com",
};

pub const rphx_130526_explorers = [_]Explorer{
    .{
        .name = "RphxScan",
        .url = "https://rphxscan.com",
    },
};

pub const rphx_130526 = Chain{
    .name = "RPHX Mainnet",
    .chain = "RPHX",
    .chain_id = 130526,
    .network_id = 130526,
    .short_name = "rphx",
    .rpc = &rphx_130526_rpcs,
    .native_currency = .{
        .name = "RPHX",
        .symbol = "RPHX",
        .decimals = 18,
    },
    .info_url = "https://rphxscan.com",
    .explorers = &rphx_130526_explorers,
};

pub const aria_134235_rpcs = [_][]const u8{
    "https://rpc.ariascan.org",
};

pub const aria_134235_explorers = [_]Explorer{
    .{
        .name = "ARIA Explorer",
        .url = "https://explorer.ariascan.org",
    },
};

pub const aria_134235 = Chain{
    .name = "ARIA Chain",
    .chain = "ARIA",
    .chain_id = 134235,
    .network_id = 134235,
    .short_name = "aria",
    .rpc = &aria_134235_rpcs,
    .native_currency = .{
        .name = "ARIA",
        .symbol = "ARIA",
        .decimals = 18,
    },
    .info_url = "https://ariascan.org",
    .explorers = &aria_134235_explorers,
};

pub const midxt_139420_rpcs = [_][]const u8{
    "https://testnet.midpointcross.com",
};

pub const midxt_139420_explorers = [_]Explorer{
    .{
        .name = "Midpoint Cross Testnet",
        .url = "https://testnet-transactions.midpointcross.com",
    },
};

pub const midxt_139420 = Chain{
    .name = "Midpoint Cross Testnet",
    .chain = "MIDX",
    .chain_id = 139420,
    .network_id = 139420,
    .short_name = "midxt",
    .rpc = &midxt_139420_rpcs,
    .native_currency = .{
        .name = "Midpoint Cross Testnet",
        .symbol = "tMIDX",
        .decimals = 18,
    },
    .info_url = "https://www.midpointcross.com",
    .explorers = &midxt_139420_explorers,
};

pub const bexchain_140586_rpcs = [_][]const u8{
    "https://rpc.bexchain.com",
};

pub const bexchain_140586_explorers = [_]Explorer{
    .{
        .name = "BEXChain Scan",
        .url = "https://scan.bexchain.com",
    },
};

pub const bexchain_140586 = Chain{
    .name = "BEXChain",
    .chain = "BEX",
    .chain_id = 140586,
    .network_id = 140586,
    .short_name = "bexchain",
    .rpc = &bexchain_140586_rpcs,
    .native_currency = .{
        .name = "BEX",
        .symbol = "BEX",
        .decimals = 18,
    },
    .info_url = "https://bexchain.com",
    .explorers = &bexchain_140586_explorers,
};

pub const kasplex_167012_rpcs = [_][]const u8{
    "https://rpc.kasplextest.xyz/",
};

pub const kasplex_167012_explorers = [_]Explorer{
    .{
        .name = "Kasplex Explorer",
        .url = "https://explorer.testnet.kasplextest.xyz/",
    },
};

pub const kasplex_167012 = Chain{
    .name = "Kasplex zkEVM Testnet",
    .chain = "KASPLEX",
    .chain_id = 167012,
    .network_id = 167012,
    .short_name = "kasplex",
    .rpc = &kasplex_167012_rpcs,
    .native_currency = .{
        .name = "KAS",
        .symbol = "KAS",
        .decimals = 18,
    },
    .info_url = "https://kasplex.org/",
    .explorers = &kasplex_167012_explorers,
};

pub const wcn_171717_rpcs = [_][]const u8{
    "https://rpc.w-chain.com",
};

pub const wcn_171717_explorers = [_]Explorer{
    .{
        .name = "W Scan",
        .url = "https://scan.w-chain.com",
    },
};

pub const wcn_171717 = Chain{
    .name = "W Chain Mainnet",
    .chain = "WCN",
    .chain_id = 171717,
    .network_id = 171717,
    .short_name = "wcn",
    .rpc = &wcn_171717_rpcs,
    .native_currency = .{
        .name = "W Coin",
        .symbol = "WCO",
        .decimals = 18,
    },
    .info_url = "https://w-chain.com",
    .explorers = &wcn_171717_explorers,
};

pub const lit_175200_rpcs = [_][]const u8{
    "https://lit-chain-rpc.litprotocol.com",
};

pub const lit_175200_explorers = [_]Explorer{
    .{
        .name = "Lit Chain Explorer",
        .url = "https://lit-chain-explorer.litprotocol.com",
    },
};

pub const lit_175200 = Chain{
    .name = "Lit Chain Mainnet",
    .chain = "LITKEY",
    .chain_id = 175200,
    .network_id = 175200,
    .short_name = "lit",
    .rpc = &lit_175200_rpcs,
    .native_currency = .{
        .name = "Lit Protocol",
        .symbol = "LITKEY",
        .decimals = 18,
    },
    .info_url = "https://litprotocol.com",
    .explorers = &lit_175200_explorers,
};

pub const dpn_179205_rpcs = [_][]const u8{
    "https://subnets.avax.network/dfnpaper/testnet/rpc",
};

pub const dpn_179205_explorers = [_]Explorer{
    .{
        .name = "Dinari Paper Ledger",
        .url = "https://subnets-test.avax.network/dfnpaper",
    },
};

pub const dpn_179205 = Chain{
    .name = "Dinari Financial Network Paper",
    .chain = "DFNP",
    .chain_id = 179205,
    .network_id = 179205,
    .short_name = "dpn",
    .rpc = &dpn_179205_rpcs,
    .native_currency = .{
        .name = "Dinari Gas",
        .symbol = "DGAS",
        .decimals = 18,
    },
    .info_url = "https://dinari.com",
    .explorers = &dpn_179205_explorers,
};

pub const hpp_sepolia_181228_rpcs = [_][]const u8{
    "https://sepolia.hpp.io",
};

pub const hpp_sepolia_181228_explorers = [_]Explorer{
    .{
        .name = "HPP Sepolia Explorer",
        .url = "https://sepolia-explorer.hpp.io",
    },
};

pub const hpp_sepolia_181228 = Chain{
    .name = "HPP Sepolia",
    .chain = "HPP",
    .chain_id = 181228,
    .network_id = 181228,
    .short_name = "hpp-sepolia",
    .rpc = &hpp_sepolia_181228_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://www.hpp.io",
    .explorers = &hpp_sepolia_181228_explorers,
};

pub const gomchain_mainnet_190278_rpcs = [_][]const u8{
    "https://rpc.gomchain.com",
};

pub const gomchain_mainnet_190278_explorers = [_]Explorer{
    .{
        .name = "gomscan",
        .url = "https://scan.gomchain.com",
    },
};

pub const gomchain_mainnet_190278 = Chain{
    .name = "GomChain Mainnet",
    .chain = "GomChain",
    .chain_id = 190278,
    .network_id = 190278,
    .short_name = "gomchain-mainnet",
    .rpc = &gomchain_mainnet_190278_rpcs,
    .native_currency = .{
        .name = "GOM",
        .symbol = "GOM",
        .decimals = 18,
    },
    .info_url = "https://gomchain.com",
    .explorers = &gomchain_mainnet_190278_explorers,
};

pub const hpp_mainnet_190415_rpcs = [_][]const u8{
    "https://mainnet.hpp.io",
};

pub const hpp_mainnet_190415_explorers = [_]Explorer{
    .{
        .name = "HPP Mainnet Explorer",
        .url = "https://explorer.hpp.io",
    },
};

pub const hpp_mainnet_190415 = Chain{
    .name = "HPP Mainnet",
    .chain = "HPP",
    .chain_id = 190415,
    .network_id = 190415,
    .short_name = "hpp-mainnet",
    .rpc = &hpp_mainnet_190415_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://www.hpp.io",
    .explorers = &hpp_mainnet_190415_explorers,
};

pub const r0ar_193939_rpcs = [_][]const u8{
    "https://rpc-r0ar.io",
};

pub const r0ar_193939_explorers = [_]Explorer{
    .{
        .name = "R0ARscan",
        .url = "https://r0arscan.io",
    },
};

pub const r0ar_193939 = Chain{
    .name = "R0AR Chain",
    .chain = "R0AR",
    .chain_id = 193939,
    .network_id = 193939,
    .short_name = "r0ar",
    .rpc = &r0ar_193939_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://r0ar.io",
    .explorers = &r0ar_193939_explorers,
};

pub const eadx_198724_rpcs = [_][]const u8{
    "https://rpc.eadx.network",
};

pub const eadx_198724_explorers = [_]Explorer{
    .{
        .name = "EADX Explorer",
        .url = "https://explorer.eadx.network",
    },
};

pub const eadx_198724 = Chain{
    .name = "EADX Network",
    .chain = "EADX",
    .chain_id = 198724,
    .network_id = 198724,
    .short_name = "eadx",
    .rpc = &eadx_198724_rpcs,
    .native_currency = .{
        .name = "EADX",
        .symbol = "EDX",
        .decimals = 18,
    },
    .info_url = "https://eadxexchange.com",
    .explorers = &eadx_198724_explorers,
};

pub const nos_200024_rpcs = [_][]const u8{
    "https://rpc-testnet.nitrograph.foundation",
};

pub const nos_200024_explorers = [_]Explorer{
    .{
        .name = "nitroscan",
        .url = "https://explorer-testnet.nitrograph.foundation",
    },
};

pub const nos_200024 = Chain{
    .name = "NitroGraph Testnet",
    .chain = "NOS",
    .chain_id = 200024,
    .network_id = 200024,
    .short_name = "nos",
    .rpc = &nos_200024_rpcs,
    .native_currency = .{
        .name = "Nitro",
        .symbol = "NOS",
        .decimals = 18,
    },
    .info_url = "https://nitrograph.com",
    .explorers = &nos_200024_explorers,
};

pub const fsc_201022_rpcs = [_][]const u8{
    "https://fsc-dataseed1.fonscan.io",
    "https://fsc-dataseed2.fonscan.io",
    "https://fsc-dataseed3.fonscan.io",
    "https://fsc-dataseed4.fonscan.io",
};

pub const fsc_201022_explorers = [_]Explorer{
    .{
        .name = "fonscan",
        .url = "https://fonscan.io",
    },
};

pub const fsc_201022 = Chain{
    .name = "FONChain Mainnet",
    .chain = "FSC",
    .chain_id = 201022,
    .network_id = 201022,
    .short_name = "fsc",
    .rpc = &fsc_201022_rpcs,
    .native_currency = .{
        .name = "FON",
        .symbol = "FON",
        .decimals = 18,
    },
    .info_url = "https://fonchain.io",
    .explorers = &fsc_201022_explorers,
};

pub const dfn_202110_rpcs = [_][]const u8{
    "https://subnets.avax.network/dinari/mainnet/rpc",
};

pub const dfn_202110_explorers = [_]Explorer{
    .{
        .name = "Dinari Ledger",
        .url = "https://subnets.avax.network/dinari",
    },
};

pub const dfn_202110 = Chain{
    .name = "Dinari Financial Network",
    .chain = "DFN",
    .chain_id = 202110,
    .network_id = 202110,
    .short_name = "dfn",
    .rpc = &dfn_202110_rpcs,
    .native_currency = .{
        .name = "Dinari Gas",
        .symbol = "DGAS",
        .decimals = 18,
    },
    .info_url = "https://dinari.com",
    .explorers = &dfn_202110_explorers,
};

pub const SVS_202308_rpcs = [_][]const u8{
    "https://rpc.starryscan.com",
};

pub const SVS_202308_explorers = [_]Explorer{
    .{
        .name = "starryscan",
        .url = "https://www.starryscan.com",
    },
};

pub const SVS_202308 = Chain{
    .name = "StarChain",
    .chain = "SVS",
    .chain_id = 202308,
    .network_id = 202308,
    .short_name = "SVS",
    .rpc = &SVS_202308_rpcs,
    .native_currency = .{
        .name = "SVS",
        .symbol = "SVS",
        .decimals = 18,
    },
    .info_url = "https://www.starrychain.net",
    .explorers = &SVS_202308_explorers,
};

pub const Propulence_testnet_202500_rpcs = [_][]const u8{
    "https://rpc.testnet.thepropulence.com",
};

pub const Propulence_testnet_202500_explorers = [_]Explorer{
    .{
        .name = "Propulence Testnet Explorer",
        .url = "https://explorer.testnet.thepropulence.com",
    },
};

pub const Propulence_testnet_202500 = Chain{
    .name = "Propulence Testnet",
    .chain = "Propulence",
    .chain_id = 202500,
    .network_id = 202500,
    .short_name = "Propulence-testnet",
    .rpc = &Propulence_testnet_202500_rpcs,
    .native_currency = .{
        .name = "Propulence",
        .symbol = "PROPX",
        .decimals = 18,
    },
    .info_url = null,
    .explorers = &Propulence_testnet_202500_explorers,
};

pub const aurext_202506_rpcs = [_][]const u8{
    "https://aurexgold.com:3000",
};

pub const aurext_202506_explorers = [_]Explorer{
    .{
        .name = "Aurex Testnet Explorer",
        .url = "https://aurexgold.com:4001",
    },
};

pub const aurext_202506 = Chain{
    .name = "Aurex Testnet",
    .chain = "AUREX",
    .chain_id = 202506,
    .network_id = 202506,
    .short_name = "aurext",
    .rpc = &aurext_202506_rpcs,
    .native_currency = .{
        .name = "Aurex",
        .symbol = "AUREX",
        .decimals = 18,
    },
    .info_url = "https://aurexgold.com",
    .explorers = &aurext_202506_explorers,
};

pub const kasplex_202555_rpcs = [_][]const u8{
    "https://evmrpc.kasplex.org",
};

pub const kasplex_202555_explorers = [_]Explorer{
    .{
        .name = "Kasplex Explorer",
        .url = "https://explorer.kasplex.org",
    },
};

pub const kasplex_202555 = Chain{
    .name = "Kasplex zkEVM Mainnet",
    .chain = "KASPLEX",
    .chain_id = 202555,
    .network_id = 202555,
    .short_name = "kasplex",
    .rpc = &kasplex_202555_rpcs,
    .native_currency = .{
        .name = "KAS",
        .symbol = "KAS",
        .decimals = 18,
    },
    .info_url = "https://kasplex.org/",
    .explorers = &kasplex_202555_explorers,
};

pub const ju_202599_rpcs = [_][]const u8{
    "https://testnet-rpc.juchain.org",
};

pub const ju_202599_explorers = [_]Explorer{
    .{
        .name = "juscan-testnet",
        .url = "https://testnet.juscan.io",
    },
};

pub const ju_202599 = Chain{
    .name = "JuChain Testnet",
    .chain = "JU",
    .chain_id = 202599,
    .network_id = 202599,
    .short_name = "ju",
    .rpc = &ju_202599_rpcs,
    .native_currency = .{
        .name = "JUcoin",
        .symbol = "JU",
        .decimals = 18,
    },
    .info_url = "https://juchain.org",
    .explorers = &ju_202599_explorers,
};

pub const ronin_saigon_202601_rpcs = [_][]const u8{
    "https://saigon-testnet.roninchain.com/rpc",
    "https://ronin-saigon.gateway.tatum.io/",
    "https://ronin-saigon.drpc.org",
};

pub const ronin_saigon_202601_explorers = [_]Explorer{
    .{
        .name = "Ronin Saigon Explorer",
        .url = "https://saigon-explorer.roninchain.com",
    },
};

pub const ronin_saigon_202601 = Chain{
    .name = "Ronin Saigon Testnet",
    .chain = "RON",
    .chain_id = 202601,
    .network_id = 202601,
    .short_name = "ronin-saigon",
    .rpc = &ronin_saigon_202601_rpcs,
    .native_currency = .{
        .name = "Ronin",
        .symbol = "RON",
        .decimals = 18,
    },
    .info_url = "https://roninchain.com",
    .explorers = &ronin_saigon_202601_explorers,
};

pub const miama_202610_rpcs = [_][]const u8{
    "https://miama.vidainnovasystem.top/rpc",
};

pub const miama_202610_explorers = [_]Explorer{
    .{
        .name = "miama-explorer",
        .url = "https://miama.vidainnovasystem.top/explorador",
    },
};

pub const miama_202610 = Chain{
    .name = "MIAMA Chain",
    .chain = "MIAMA",
    .chain_id = 202610,
    .network_id = 202610,
    .short_name = "miama",
    .rpc = &miama_202610_rpcs,
    .native_currency = .{
        .name = "MIAMA",
        .symbol = "MIAMA",
        .decimals = 18,
    },
    .info_url = "https://miama.vidainnovasystem.top",
    .explorers = &miama_202610_explorers,
};

pub const juchain_210000_rpcs = [_][]const u8{
    "https://rpc.juchain.org",
};

pub const juchain_210000_explorers = [_]Explorer{
    .{
        .name = "juscan",
        .url = "https://juscan.io",
    },
};

pub const juchain_210000 = Chain{
    .name = "JuChain Mainnet",
    .chain = "JU",
    .chain_id = 210000,
    .network_id = 210000,
    .short_name = "juchain",
    .rpc = &juchain_210000_rpcs,
    .native_currency = .{
        .name = "JUcoin",
        .symbol = "JU",
        .decimals = 18,
    },
    .info_url = "https://juchain.org",
    .explorers = &juchain_210000_explorers,
};

pub const klt_220312_rpcs = [_][]const u8{
    "https://rpc.kultchain.com",
    "http://217.154.10.57:8545",
};

pub const klt_220312_explorers = [_]Explorer{
    .{
        .name = "KultChain Explorer",
        .url = "https://explorer.kultchain.com",
    },
};

pub const klt_220312 = Chain{
    .name = "KultChain",
    .chain = "KLT",
    .chain_id = 220312,
    .network_id = 220312,
    .short_name = "klt",
    .rpc = &klt_220312_rpcs,
    .native_currency = .{
        .name = "KultCoin",
        .symbol = "KLT",
        .decimals = 18,
    },
    .info_url = "https://kultchain.com",
    .explorers = &klt_220312_explorers,
};

pub const sivz_mainnet_222345_rpcs = [_][]const u8{
    "https://apiprod.sshivanshcoin.com/ext/bc/2XWN3PW4Qdjw3AtG6eqH8PCzj49G9Qay6SLNWbGLjsDF1qPgsW/rpc",
};

pub const sivz_mainnet_222345_explorers = [_]Explorer{
    .{
        .name = "SSHIVANSH Explorer",
        .url = "https://explorer.sshivanshcoin.com",
    },
};

pub const sivz_mainnet_222345 = Chain{
    .name = "SSHIVANSH Mainnet",
    .chain = "SSHIVANSH",
    .chain_id = 222345,
    .network_id = 222345,
    .short_name = "sivz-mainnet",
    .rpc = &sivz_mainnet_222345_rpcs,
    .native_currency = .{
        .name = "SIVZ",
        .symbol = "SIVZ",
        .decimals = 18,
    },
    .info_url = "https://sshivanshcoin.com",
    .explorers = &sivz_mainnet_222345_explorers,
};

pub const mocat_222888_rpcs = [_][]const u8{
    "https://testnet-rpc.mocachain.org",
};

pub const mocat_222888_explorers = [_]Explorer{
    .{
        .name = "Moca Chain Scan",
        .url = "https://testnet-scan.mocachain.org",
    },
};

pub const mocat_222888 = Chain{
    .name = "Moca Chain Testnet",
    .chain = "Moca Chain",
    .chain_id = 222888,
    .network_id = 222888,
    .short_name = "mocat",
    .rpc = &mocat_222888_rpcs,
    .native_currency = .{
        .name = "MOCA",
        .symbol = "MOCA",
        .decimals = 18,
    },
    .info_url = "https://mocachain.org",
    .explorers = &mocat_222888_explorers,
};

pub const ares_232425_rpcs = [_][]const u8{
    "https://rpc.arieschain.org",
};

pub const ares_232425_explorers = [_]Explorer{
    .{
        .name = "AriesScan",
        .url = "https://scan.arieschain.org",
    },
};

pub const ares_232425 = Chain{
    .name = "Aries Chain Mainnet",
    .chain = "ARES",
    .chain_id = 232425,
    .network_id = 232425,
    .short_name = "ares",
    .rpc = &ares_232425_rpcs,
    .native_currency = .{
        .name = "Aries",
        .symbol = "ARES",
        .decimals = 18,
    },
    .info_url = "https://arieschain.org",
    .explorers = &ares_232425_explorers,
};

pub const CodeNekt_mainnet_235235_rpcs = [_][]const u8{
    "https://rpc-mainnet-codenekt-rl.cogitus.io/ext/bc/ZG7cT4B1u3y7piZ9CzfejnTKnNAoehcifbJWUwBqgyD3RuEqK/rpc",
};

pub const CodeNekt_mainnet_235235_explorers = [_]Explorer{
    .{
        .name = "CodeNekt Explorer",
        .url = "https://explorer-codenekt-mainnet.cogitus.io",
    },
};

pub const CodeNekt_mainnet_235235 = Chain{
    .name = "CodeNekt Mainnet",
    .chain = "CodeNekt",
    .chain_id = 235235,
    .network_id = 235235,
    .short_name = "CodeNekt-mainnet",
    .rpc = &CodeNekt_mainnet_235235_rpcs,
    .native_currency = .{
        .name = "CDK",
        .symbol = "CDK",
        .decimals = 18,
    },
    .info_url = "https://codenekt-ecosystem.io/",
    .explorers = &CodeNekt_mainnet_235235_explorers,
};

pub const ulalo_mainnet_237007_rpcs = [_][]const u8{
    "https://grpc.ulalo.xyz/ext/bc/2uN4Y9JHkLeAJK85Y48LExpNnEiepf7VoZAtmjnwDSZzpZcNig/rpc",
};

pub const ulalo_mainnet_237007_explorers = [_]Explorer{
    .{
        .name = "ULALO Explorer",
        .url = "https://tracehawk.ulalo.xyz",
    },
};

pub const ulalo_mainnet_237007 = Chain{
    .name = "ULALO Mainnet",
    .chain = "ULALO",
    .chain_id = 237007,
    .network_id = 237007,
    .short_name = "ulalo-mainnet",
    .rpc = &ulalo_mainnet_237007_rpcs,
    .native_currency = .{
        .name = "ULA",
        .symbol = "ULA",
        .decimals = 18,
    },
    .info_url = "https://ulalo.xyz",
    .explorers = &ulalo_mainnet_237007_explorers,
};

pub const sin_250225_rpcs = [_][]const u8{
    "https://rpc.sintrop.com",
};

pub const sin_250225_explorers = [_]Explorer{
    .{
        .name = "Sintrop Explorer",
        .url = "https://explorer.sintrop.com",
    },
};

pub const sin_250225 = Chain{
    .name = "Sintrop Impact Blockchain",
    .chain = "SINTROP",
    .chain_id = 250225,
    .network_id = 250225,
    .short_name = "sin",
    .rpc = &sin_250225_rpcs,
    .native_currency = .{
        .name = "Sintrop",
        .symbol = "SIN",
        .decimals = 18,
    },
    .info_url = "https://sintrop.com",
    .explorers = &sin_250225_explorers,
};

pub const kub_259251_rpcs = [_][]const u8{
    "https://kublayer2.testnet.kubchain.io",
};

pub const kub_259251_explorers = [_]Explorer{
    .{
        .name = "KUB Layer2 Testnet Explorer",
        .url = "https://kublayer2.testnet.kubscan.com",
    },
};

pub const kub_259251 = Chain{
    .name = "KUB Layer 2 Testnet",
    .chain = "KUB",
    .chain_id = 259251,
    .network_id = 259251,
    .short_name = "kub",
    .rpc = &kub_259251_rpcs,
    .native_currency = .{
        .name = "tKUB",
        .symbol = "tKUB",
        .decimals = 18,
    },
    .info_url = null,
    .explorers = &kub_259251_explorers,
};

pub const datachain_271828_rpcs = [_][]const u8{
    "https://erpc.datachain.network",
    "https://ws.datachain.network",
    "https://erpc.rope.network",
};

pub const datachain_271828_explorers = [_]Explorer{
    .{
        .name = "DC Scan",
        .url = "https://dcscan.io",
    },
};

pub const datachain_271828 = Chain{
    .name = "Datachain Rope",
    .chain = "DATACHAIN",
    .chain_id = 271828,
    .network_id = 271828,
    .short_name = "datachain",
    .rpc = &datachain_271828_rpcs,
    .native_currency = .{
        .name = "DC FAT",
        .symbol = "FAT",
        .decimals = 18,
    },
    .info_url = "https://datachain.network",
    .explorers = &datachain_271828_explorers,
};

pub const mbtx_271831_rpcs = [_][]const u8{
    "https://candied-undecided-straggler.ngrok-free.dev/l1",
};

pub const mbtx_271831_explorers = [_]Explorer{
    .{
        .name = "MBTX Explorer",
        .url = "https://mbtux.uxi.rocks/mbtx",
    },
};

pub const mbtx_271831 = Chain{
    .name = "MBTX Mainnet",
    .chain = "MBTX",
    .chain_id = 271831,
    .network_id = 271831,
    .short_name = "mbtx",
    .rpc = &mbtx_271831_rpcs,
    .native_currency = .{
        .name = "MBTX",
        .symbol = "MBTX",
        .decimals = 18,
    },
    .info_url = "https://mbtux.uxi.rocks/mbtx",
    .explorers = &mbtx_271831_explorers,
};

pub const mbtxl2_271832_rpcs = [_][]const u8{
    "https://candied-undecided-straggler.ngrok-free.dev/l2",
};

pub const mbtxl2_271832_explorers = [_]Explorer{
    .{
        .name = "MBTX Nexus Explorer",
        .url = "https://mbtux.uxi.rocks/mbtx/",
    },
};

pub const mbtxl2_271832 = Chain{
    .name = "MBTX Nexus",
    .chain = "MBTX",
    .chain_id = 271832,
    .network_id = 271832,
    .short_name = "mbtxl2",
    .rpc = &mbtxl2_271832_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://mbtux.uxi.rocks/mbtx",
    .explorers = &mbtxl2_271832_explorers,
};

pub const creator_chain_testnet_278701_rpcs = [_][]const u8{
    "https://rpc.testnet.oncreator.com",
};

pub const creator_chain_testnet_278701_explorers = [_]Explorer{
    .{
        .name = "Creator Chain Testnet Explorer",
        .url = "https://explorer.testnet.oncreator.com",
    },
};

pub const creator_chain_testnet_278701 = Chain{
    .name = "Creator Chain Testnet",
    .chain = "Creator Chain",
    .chain_id = 278701,
    .network_id = 278701,
    .short_name = "creator-chain-testnet",
    .rpc = &creator_chain_testnet_278701_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://www.oncreator.com",
    .explorers = &creator_chain_testnet_278701_explorers,
};

pub const valuechain_286623_rpcs = [_][]const u8{
    "https://mainnet.valuechain.xyz",
};

pub const valuechain_286623_explorers = [_]Explorer{
    .{
        .name = "ValueChain Explorer",
        .url = "https://main-scan.valuechain.xyz",
    },
};

pub const valuechain_286623 = Chain{
    .name = "ValueChain",
    .chain = "SOSO",
    .chain_id = 286623,
    .network_id = 286623,
    .short_name = "valuechain",
    .rpc = &valuechain_286623_rpcs,
    .native_currency = .{
        .name = "SoSoValue",
        .symbol = "SOSO",
        .decimals = 18,
    },
    .info_url = "https://sodex.com/",
    .explorers = &valuechain_286623_explorers,
};

pub const pmt_290290_rpcs = [_][]const u8{
    "https://node1.pmtchain.com",
    "https://node2.pmtchain.com",
    "https://node3.pmtchain.com",
    "https://node4.pmtchain.com",
};

pub const pmt_290290_explorers = [_]Explorer{
    .{
        .name = "PMTScan",
        .url = "https://pmtscan.com",
    },
};

pub const pmt_290290 = Chain{
    .name = "PMT Mainnet",
    .chain = "PMT",
    .chain_id = 290290,
    .network_id = 290290,
    .short_name = "pmt",
    .rpc = &pmt_290290_rpcs,
    .native_currency = .{
        .name = "PMT",
        .symbol = "PMT",
        .decimals = 18,
    },
    .info_url = "https://publicmasterpiece.com",
    .explorers = &pmt_290290_explorers,
};

pub const t1_299792_rpcs = [_][]const u8{
    "https://rpc.mainnet.t1protocol.com",
};

pub const t1_299792_explorers = [_]Explorer{
    .{
        .name = "t1 Explorer",
        .url = "https://explorer.mainnet.t1protocol.com",
    },
};

pub const t1_299792 = Chain{
    .name = "t1 Mainnet",
    .chain = "t1",
    .chain_id = 299792,
    .network_id = 299792,
    .short_name = "t1",
    .rpc = &t1_299792_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://mainnet.t1protocol.com/",
    .explorers = &t1_299792_explorers,
};

pub const t1t_299892_rpcs = [_][]const u8{
    "https://rpc.testnet.t1protocol.com",
};

pub const t1t_299892_explorers = [_]Explorer{
    .{
        .name = "t1 Explorer",
        .url = "https://explorer.testnet.t1protocol.com",
    },
};

pub const t1t_299892 = Chain{
    .name = "t1 Testnet",
    .chain = "t1",
    .chain_id = 299892,
    .network_id = 299892,
    .short_name = "t1t",
    .rpc = &t1t_299892_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://testnet.t1protocol.com/",
    .explorers = &t1t_299892_explorers,
};

pub const axion_303030_rpcs = [_][]const u8{
    "https://rpc.axiondefi.com",
};

pub const axion_303030_explorers = [_]Explorer{
    .{
        .name = "AXSCAN",
        .url = "https://axscan.axiondefi.com",
    },
};

pub const axion_303030 = Chain{
    .name = "AXION Mainnet",
    .chain = "AXION",
    .chain_id = 303030,
    .network_id = 303030,
    .short_name = "axion",
    .rpc = &axion_303030_rpcs,
    .native_currency = .{
        .name = "AXION",
        .symbol = "AXION",
        .decimals = 18,
    },
    .info_url = "https://www.axiondefi.com",
    .explorers = &axion_303030_explorers,
};

pub const vcr_314169_rpcs = [_][]const u8{
    "https://rpc.vcrchain.com",
};

pub const vcr_314169_explorers = [_]Explorer{
    .{
        .name = "VCR Chain Explorer",
        .url = "https://scan.vcrchain.com",
    },
};

pub const vcr_314169 = Chain{
    .name = "VCR Chain",
    .chain = "VCR",
    .chain_id = 314169,
    .network_id = 314169,
    .short_name = "vcr",
    .rpc = &vcr_314169_rpcs,
    .native_currency = .{
        .name = "CCR",
        .symbol = "CCR",
        .decimals = 18,
    },
    .info_url = "https://www.vcrchain.com",
    .explorers = &vcr_314169_explorers,
};

pub const DComm_mainnet_326663_rpcs = [_][]const u8{
    "https://rpc-mainnet-dcomm-rl.cogitus.io/ext/bc/2QJ6d1ue6UyXNXrMdGnELFc2AjMdMqs8YbX3sT3k4Nin2RcWSm/rpc",
};

pub const DComm_mainnet_326663_explorers = [_]Explorer{
    .{
        .name = "DComm Explorer",
        .url = "https://explorer-dcomm.cogitus.io",
    },
};

pub const DComm_mainnet_326663 = Chain{
    .name = "DComm Mainnet",
    .chain = "DComm",
    .chain_id = 326663,
    .network_id = 326663,
    .short_name = "DComm-mainnet",
    .rpc = &DComm_mainnet_326663_rpcs,
    .native_currency = .{
        .name = "DCM",
        .symbol = "DCM",
        .decimals = 18,
    },
    .info_url = "https://www.dcomm.community/",
    .explorers = &DComm_mainnet_326663_explorers,
};

pub const lax_333222_rpcs = [_][]const u8{
    "http://54.252.195.55:9945",
};

pub const lax_333222_explorers = [_]Explorer{
    .{
        .name = "Laxaum Explorer",
        .url = "http://54.252.195.55:3002",
    },
};

pub const lax_333222 = Chain{
    .name = "Laxaum Testnet",
    .chain = "LXM",
    .chain_id = 333222,
    .network_id = 333222,
    .short_name = "lax",
    .rpc = &lax_333222_rpcs,
    .native_currency = .{
        .name = "Laxaum",
        .symbol = "LXM",
        .decimals = 18,
    },
    .info_url = "http://www.laxaum.com",
    .explorers = &lax_333222_explorers,
};

pub const den_mainnet_369369_rpcs = [_][]const u8{
    "https://rpc.d.energy/",
};

pub const den_mainnet_369369_explorers = [_]Explorer{
    .{
        .name = "Denergy Explorer",
        .url = "https://explorer.denergychain.com",
    },
};

pub const den_mainnet_369369 = Chain{
    .name = "Denergy Network",
    .chain = "DEN",
    .chain_id = 369369,
    .network_id = 369369,
    .short_name = "den-mainnet",
    .rpc = &den_mainnet_369369_rpcs,
    .native_currency = .{
        .name = "WATT",
        .symbol = "WATT",
        .decimals = 18,
    },
    .info_url = "https://d.energy/",
    .explorers = &den_mainnet_369369_explorers,
};

pub const teqoin_420377_rpcs = [_][]const u8{
    "https://rpc.teqoin.io",
};

pub const teqoin_420377_explorers = [_]Explorer{
    .{
        .name = "TeQoin Blockscan Testnet",
        .url = "https://testnet-blockscan.teqoin.io/",
    },
};

pub const teqoin_420377 = Chain{
    .name = "TeQoin Sepolia Testnet",
    .chain = "ETH",
    .chain_id = 420377,
    .network_id = 420377,
    .short_name = "teqoin",
    .rpc = &teqoin_420377_rpcs,
    .native_currency = .{
        .name = "Sepolia Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://teqoin.io",
    .explorers = &teqoin_420377_explorers,
};

pub const infinite_421018_rpcs = [_][]const u8{
    "https://evm.infinitedrive.xyz",
};

pub const infinite_421018_explorers = [_]Explorer{
    .{
        .name = "Infinite Drive Explorer",
        .url = "https://scan.infinitedrive.xyz",
    },
};

pub const infinite_421018 = Chain{
    .name = "Infinite Drive",
    .chain = "INFINITE",
    .chain_id = 421018,
    .network_id = 421018,
    .short_name = "infinite",
    .rpc = &infinite_421018_rpcs,
    .native_currency = .{
        .name = "Improbability",
        .symbol = "42",
        .decimals = 18,
    },
    .info_url = "https://infinitedrive.xyz",
    .explorers = &infinite_421018_explorers,
};

pub const mtx_478549_rpcs = [_][]const u8{
    "https://rpc.mintrax.network",
};

pub const mtx_478549_explorers = [_]Explorer{
    .{
        .name = "Mintrax Explorer",
        .url = "https://explorer.mintrax.network",
    },
};

pub const mtx_478549 = Chain{
    .name = "MintraxChain",
    .chain = "MTX",
    .chain_id = 478549,
    .network_id = 478549,
    .short_name = "mtx",
    .rpc = &mtx_478549_rpcs,
    .native_currency = .{
        .name = "Mintrax",
        .symbol = "MTX",
        .decimals = 18,
    },
    .info_url = "https://mintrax.network",
    .explorers = &mtx_478549_explorers,
};

pub const btcwchain_482120_rpcs = [_][]const u8{
    "https://rpc.btcw.tech",
};

pub const btcwchain_482120_explorers = [_]Explorer{
    .{
        .name = "Bitcoin Swap Explorer",
        .url = "https://explorer.btcw.tech",
    },
};

pub const btcwchain_482120 = Chain{
    .name = "Bitcoin Swap",
    .chain = "BTCw",
    .chain_id = 482120,
    .network_id = 482120,
    .short_name = "btcwchain",
    .rpc = &btcwchain_482120_rpcs,
    .native_currency = .{
        .name = "Bitcoin Swap",
        .symbol = "BTCw",
        .decimals = 18,
    },
    .info_url = "https://btcw.tech",
    .explorers = &btcwchain_482120_explorers,
};

pub const commons_510003_rpcs = [_][]const u8{
    "https://commons.rpc.syndicate.io",
};

pub const commons_510003_explorers = [_]Explorer{
    .{
        .name = "Commons Explorer",
        .url = "https://explorer.commons.syndicate.io",
    },
};

pub const commons_510003 = Chain{
    .name = "Syndicate Commons",
    .chain = "Commons",
    .chain_id = 510003,
    .network_id = 510003,
    .short_name = "commons",
    .rpc = &commons_510003_rpcs,
    .native_currency = .{
        .name = "Syndicate",
        .symbol = "SYND",
        .decimals = 18,
    },
    .info_url = "https://syndicate.io",
    .explorers = &commons_510003_explorers,
};

pub const alpha_511111_rpcs = [_][]const u8{
    "https://testnet-rpc.goalpha.org",
};

pub const alpha_511111_explorers = [_]Explorer{
    .{
        .name = "Alpha Chain Scan",
        .url = "https://testnet-scan.goalpha.org",
    },
};

pub const alpha_511111 = Chain{
    .name = "Alpha Chain Testnet",
    .chain = "Alpha Chain",
    .chain_id = 511111,
    .network_id = 511111,
    .short_name = "alpha",
    .rpc = &alpha_511111_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://docs.alphatoken.com/AlphaChain/about-alpha-chain",
    .explorers = &alpha_511111_explorers,
};

pub const tone_612044_rpcs = [_][]const u8{
    "https://testnet.onechain.nexus:22001",
};

pub const tone_612044_explorers = [_]Explorer{
    .{
        .name = "ONE Testnet Explorer",
        .url = "https://explorer.onechain.nexus",
    },
};

pub const tone_612044 = Chain{
    .name = "ONE Chain Testnet",
    .chain = "ONE",
    .chain_id = 612044,
    .network_id = 612044,
    .short_name = "tone",
    .rpc = &tone_612044_rpcs,
    .native_currency = .{
        .name = "TestnetONE",
        .symbol = "tONE",
        .decimals = 18,
    },
    .info_url = "https://onechain.nexus",
    .explorers = &tone_612044_explorers,
};

pub const one_612055_rpcs = [_][]const u8{
    "https://mainnet.onechain.nexus:22001",
};

pub const one_612055_explorers = [_]Explorer{
    .{
        .name = "ONE Explorer",
        .url = "https://explorer.onechain.nexus",
    },
};

pub const one_612055 = Chain{
    .name = "ONE Chain Mainnet",
    .chain = "ONE",
    .chain_id = 612055,
    .network_id = 612055,
    .short_name = "one",
    .rpc = &one_612055_rpcs,
    .native_currency = .{
        .name = "ONE",
        .symbol = "ONE",
        .decimals = 18,
    },
    .info_url = "https://onechain.nexus",
    .explorers = &one_612055_explorers,
};

pub const galactica_613419_rpcs = [_][]const u8{
    "https://galactica-mainnet.g.alchemy.com/public",
};

pub const galactica_613419_explorers = [_]Explorer{
    .{
        .name = "Blockscout",
        .url = "https://explorer.galactica.com",
    },
};

pub const galactica_613419 = Chain{
    .name = "Galactica Mainnet",
    .chain = "GNET",
    .chain_id = 613419,
    .network_id = 613419,
    .short_name = "galactica",
    .rpc = &galactica_613419_rpcs,
    .native_currency = .{
        .name = "GNET",
        .symbol = "GNET",
        .decimals = 18,
    },
    .info_url = "https://galactica.com",
    .explorers = &galactica_613419_explorers,
};

pub const tgald_641371_rpcs = [_][]const u8{
    "https://rpc-testnet.galdrionscan.com",
};

pub const tgald_641371_explorers = [_]Explorer{
    .{
        .name = "GaldrionScan Testnet",
        .url = "https://galdrionscan.com",
    },
};

pub const tgald_641371 = Chain{
    .name = "Galdrion Testnet",
    .chain = "tGALD",
    .chain_id = 641371,
    .network_id = 641371,
    .short_name = "tgald",
    .rpc = &tgald_641371_rpcs,
    .native_currency = .{
        .name = "Testnet Galdrion",
        .symbol = "tGALD",
        .decimals = 18,
    },
    .info_url = "https://galdrion.com",
    .explorers = &tgald_641371_explorers,
};

pub const mdx_648529_rpcs = [_][]const u8{
    "https://rpc.modulax.org",
};

pub const mdx_648529_explorers = [_]Explorer{
    .{
        .name = "modulax",
        .url = "https://explorer.modulax.org",
    },
};

pub const mdx_648529 = Chain{
    .name = "Modulax Mainnet",
    .chain = "MDX",
    .chain_id = 648529,
    .network_id = 648529,
    .short_name = "mdx",
    .rpc = &mdx_648529_rpcs,
    .native_currency = .{
        .name = "Modulax",
        .symbol = "MDX",
        .decimals = 18,
    },
    .info_url = "https://modulax.org",
    .explorers = &mdx_648529_explorers,
};

pub const edu_chain_testnet_656476_rpcs = [_][]const u8{
    "https://rpc.testnet.educhain.xyz",
};

pub const edu_chain_testnet_656476_explorers = [_]Explorer{
    .{
        .name = "EDU Chain Testnet Explorer",
        .url = "https://explorer.testnet.educhain.xyz",
    },
};

pub const edu_chain_testnet_656476 = Chain{
    .name = "EDU Chain Testnet",
    .chain = "EDU Chain Testnet",
    .chain_id = 656476,
    .network_id = 656476,
    .short_name = "edu-chain-testnet",
    .rpc = &edu_chain_testnet_656476_rpcs,
    .native_currency = .{
        .name = "EDU",
        .symbol = "EDU",
        .decimals = 18,
    },
    .info_url = "https://www.educhain.xyz/",
    .explorers = &edu_chain_testnet_656476_explorers,
};

pub const aztec_677868_rpcs = [_][]const u8{
    "https://aztec-mainnet.drpc.org",
};

pub const aztec_677868_explorers = [_]Explorer{
    .{
        .name = "AztecScan",
        .url = "https://aztecscan.xyz/",
    },
};

pub const aztec_677868 = Chain{
    .name = "Aztec Mainnet",
    .chain = "Aztec",
    .chain_id = 677868,
    .network_id = 677868,
    .short_name = "aztec",
    .rpc = &aztec_677868_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://aztec.network/",
    .explorers = &aztec_677868_explorers,
};

pub const pharos_testnet_688688_rpcs = [_][]const u8{
    "https://testnet.dplabs-internal.com",
};

pub const pharos_testnet_688688_explorers = [_]Explorer{
    .{
        .name = "Pharos Testnet Explorer",
        .url = "https://testnet.pharosscan.xyz",
    },
};

pub const pharos_testnet_688688 = Chain{
    .name = "Pharos Testnet",
    .chain = "Pharos",
    .chain_id = 688688,
    .network_id = 688688,
    .short_name = "pharos-testnet",
    .rpc = &pharos_testnet_688688_rpcs,
    .native_currency = .{
        .name = "PHRS",
        .symbol = "PHRS",
        .decimals = 18,
    },
    .info_url = "https://testnet.pharosnetwork.xyz/",
    .explorers = &pharos_testnet_688688_explorers,
};

pub const pharos_atlantic_688689_rpcs = [_][]const u8{
    "https://atlantic.dplabs-internal.com",
};

pub const pharos_atlantic_688689_explorers = [_]Explorer{
    .{
        .name = "Pharos Atlantic Testnet Explorer",
        .url = "https://atlantic.pharosscan.xyz",
    },
};

pub const pharos_atlantic_688689 = Chain{
    .name = "Pharos Atlantic Testnet",
    .chain = "Pharos",
    .chain_id = 688689,
    .network_id = 688689,
    .short_name = "pharos-atlantic",
    .rpc = &pharos_atlantic_688689_rpcs,
    .native_currency = .{
        .name = "PHRS",
        .symbol = "PHRS",
        .decimals = 18,
    },
    .info_url = "https://atlantic.pharosnetwork.xyz/",
    .explorers = &pharos_atlantic_688689_explorers,
};

pub const marschain_704851_rpcs = [_][]const u8{
    "https://rpc.mars-scan.io",
};

pub const marschain_704851_explorers = [_]Explorer{
    .{
        .name = "Mars Chain Explorer",
        .url = "https://explorer.mars-chain.io/",
    },
};

pub const marschain_704851 = Chain{
    .name = "Mars Chain",
    .chain = "MARS",
    .chain_id = 704851,
    .network_id = 704851,
    .short_name = "marschain",
    .rpc = &marschain_704851_rpcs,
    .native_currency = .{
        .name = "Mars Coin",
        .symbol = "MarsC",
        .decimals = 18,
    },
    .info_url = "https://explorer.mars-chain.io/",
    .explorers = &marschain_704851_explorers,
};

pub const marschain_testnet_704852_rpcs = [_][]const u8{
    "https://testnet-rpc.mars-chain.io",
};

pub const marschain_testnet_704852_explorers = [_]Explorer{
    .{
        .name = "Mars Chain Testnet Explorer",
        .url = "https://testnet-explorer.mars-chain.io/",
    },
};

pub const marschain_testnet_704852 = Chain{
    .name = "Mars Chain Testnet",
    .chain = "MARS",
    .chain_id = 704852,
    .network_id = 704852,
    .short_name = "marschain-testnet",
    .rpc = &marschain_testnet_704852_rpcs,
    .native_currency = .{
        .name = "Mars Coin",
        .symbol = "MarsC",
        .decimals = 18,
    },
    .info_url = "https://testnet-explorer.mars-chain.io/",
    .explorers = &marschain_testnet_704852_explorers,
};

pub const drama_710520_rpcs = [_][]const u8{
    "https://rpc.drama.center",
};

pub const drama_710520_explorers = [_]Explorer{
    .{
        .name = "Drama Explorer",
        .url = "https://scan.drama.center",
    },
};

pub const drama_710520 = Chain{
    .name = "Drama",
    .chain = "DRAMA",
    .chain_id = 710520,
    .network_id = 710520,
    .short_name = "drama",
    .rpc = &drama_710520_rpcs,
    .native_currency = .{
        .name = "DRAMA",
        .symbol = "DRAMA",
        .decimals = 18,
    },
    .info_url = "https://drama.center",
    .explorers = &drama_710520_explorers,
};

pub const prana_712217_rpcs = [_][]const u8{
    "https://rpc.prana.melek.salon",
};

pub const prana_712217_explorers = [_]Explorer{
    .{
        .name = "PRANAScan",
        .url = "https://pranascan.soapbox.community",
    },
};

pub const prana_712217 = Chain{
    .name = "PRANA Mainnet",
    .chain = "PRANA",
    .chain_id = 712217,
    .network_id = 712217,
    .short_name = "prana",
    .rpc = &prana_712217_rpcs,
    .native_currency = .{
        .name = "PRANA",
        .symbol = "PRANA",
        .decimals = 18,
    },
    .info_url = "https://wiki.soapbox.community/wiki/PRANA",
    .explorers = &prana_712217_explorers,
};

pub const zbx_728990_rpcs = [_][]const u8{
    "https://rpc.zebvixchain.com/",
};

pub const zbx_728990_explorers = [_]Explorer{
    .{
        .name = "Zebvix Scan",
        .url = "https://scan.zebvixchain.com",
    },
};

pub const zbx_728990 = Chain{
    .name = "Zebvix Mainnet",
    .chain = "ZBX",
    .chain_id = 728990,
    .network_id = 728990,
    .short_name = "zbx",
    .rpc = &zbx_728990_rpcs,
    .native_currency = .{
        .name = "Zebvix",
        .symbol = "ZBX",
        .decimals = 18,
    },
    .info_url = "https://zebvixchain.com/",
    .explorers = &zbx_728990_explorers,
};

pub const cx_737373_rpcs = [_][]const u8{
    "https://subnets.avax.network/cx/mainnet/rpc",
};

pub const cx_737373_explorers = [_]Explorer{
    .{
        .name = "CX Chain Mainnet Explorer",
        .url = "https://subnets.avax.network/cx",
    },
};

pub const cx_737373 = Chain{
    .name = "CX Chain Mainnet",
    .chain = "CX",
    .chain_id = 737373,
    .network_id = 737373,
    .short_name = "cx",
    .rpc = &cx_737373_rpcs,
    .native_currency = .{
        .name = "CX",
        .symbol = "CX",
        .decimals = 18,
    },
    .info_url = "https://www.cxchain.xyz/",
    .explorers = &cx_737373_explorers,
};

pub const toog_777001_rpcs = [_][]const u8{
    "https://toog-proxy.toog-chain.workers.dev/rpc",
};

pub const toog_777001_explorers = [_]Explorer{
    .{
        .name = "TOOG Explorer",
        .url = "https://toog-proxy.toog-chain.workers.dev/",
    },
};

pub const toog_777001 = Chain{
    .name = "TOOG Chain",
    .chain = "TOOG",
    .chain_id = 777001,
    .network_id = 777001,
    .short_name = "toog",
    .rpc = &toog_777001_rpcs,
    .native_currency = .{
        .name = "TEST",
        .symbol = "TEST",
        .decimals = 18,
    },
    .info_url = "https://toogchain.com",
    .explorers = &toog_777001_explorers,
};

pub const MakaChain_mainnet_777178_rpcs = [_][]const u8{
    "https://api.makachain.io/ext/bc/2TfGh1pyDoumsDgTxDmWoseRD7GGRwrpX19HLsQdeCRqwK9BqZ/rpc",
};

pub const MakaChain_mainnet_777178_explorers = [_]Explorer{
    .{
        .name = "MakaChain Explorer",
        .url = "https://makascan.io/",
    },
};

pub const MakaChain_mainnet_777178 = Chain{
    .name = "MakaChain Mainnet",
    .chain = "MakaChain",
    .chain_id = 777178,
    .network_id = 777178,
    .short_name = "MakaChain mainnet",
    .rpc = &MakaChain_mainnet_777178_rpcs,
    .native_currency = .{
        .name = "MFUEL",
        .symbol = "MFUEL",
        .decimals = 18,
    },
    .info_url = "https://makachain.io/",
    .explorers = &MakaChain_mainnet_777178_explorers,
};

pub const flxg_778400_rpcs = [_][]const u8{
    "https://rpc.felixexplorer.com",
};

pub const flxg_778400_explorers = [_]Explorer{
    .{
        .name = "Felix Smart Chain Explorer",
        .url = "https://felixexplorer.com",
    },
};

pub const flxg_778400 = Chain{
    .name = "Felix Smart Chain",
    .chain = "FLXG",
    .chain_id = 778400,
    .network_id = 778400,
    .short_name = "flxg",
    .rpc = &flxg_778400_rpcs,
    .native_currency = .{
        .name = "FLXG",
        .symbol = "FLXG",
        .decimals = 18,
    },
    .info_url = "https://felixexplorer.com",
    .explorers = &flxg_778400_explorers,
};

pub const ust_778889_rpcs = [_][]const u8{
    "https://147-45-143-23.sslip.io/rpc",
};

pub const ust_778889_explorers = [_]Explorer{
    .{
        .name = "Unitsky Explorer",
        .url = "https://147-45-143-23.sslip.io",
    },
};

pub const ust_778889 = Chain{
    .name = "Unitsky String Technologies",
    .chain = "Unitsky",
    .chain_id = 778889,
    .network_id = 778889,
    .short_name = "ust",
    .rpc = &ust_778889_rpcs,
    .native_currency = .{
        .name = "Unitsky Token",
        .symbol = "UST",
        .decimals = 18,
    },
    .info_url = "https://147-45-143-23.sslip.io",
    .explorers = &ust_778889_explorers,
};

pub const nvnm_chain_devnet_787222_rpcs = [_][]const u8{
    "https://rpc.nvnm.canary.mantrachain.dev",
};

pub const nvnm_chain_devnet_787222_explorers = [_]Explorer{
    .{
        .name = "NVNM Explorer",
        .url = "https://explorer.nvnm.canary.mantrachain.dev",
    },
    .{
        .name = "NVNM Tempo Explorer",
        .url = "https://scan.nvnm.canary.mantrachain.dev",
    },
};

pub const nvnm_chain_devnet_787222 = Chain{
    .name = "NVNM Chain Devnet",
    .chain = "NVNM",
    .chain_id = 787222,
    .network_id = 787222,
    .short_name = "nvnm-chain-devnet",
    .rpc = &nvnm_chain_devnet_787222_rpcs,
    .native_currency = .{
        .name = "NVNM USD",
        .symbol = "nUSD",
        .decimals = 6,
    },
    .info_url = "https://www.nvnmchain.io",
    .explorers = &nvnm_chain_devnet_787222_explorers,
};

pub const nvnm_chain_testnet_787223_rpcs = [_][]const u8{
    "https://rpc.nvnm.testnet.nvnmchain.io",
};

pub const nvnm_chain_testnet_787223_explorers = [_]Explorer{
    .{
        .name = "NVNM Explorer",
        .url = "https://explorer.nvnm.testnet.nvnmchain.io",
    },
    .{
        .name = "NVNM Tempo Explorer",
        .url = "https://scan.nvnm.testnet.nvnmchain.io",
    },
};

pub const nvnm_chain_testnet_787223 = Chain{
    .name = "NVNM Chain Testnet",
    .chain = "NVNM",
    .chain_id = 787223,
    .network_id = 787223,
    .short_name = "nvnm-chain-testnet",
    .rpc = &nvnm_chain_testnet_787223_rpcs,
    .native_currency = .{
        .name = "NVNM USD",
        .symbol = "nUSD",
        .decimals = 6,
    },
    .info_url = "https://www.nvnmchain.io",
    .explorers = &nvnm_chain_testnet_787223_explorers,
};

pub const spaceos_testnet_800000_rpcs = [_][]const u8{
    "https://testnet.evm.spaceos.com/",
};

pub const spaceos_testnet_800000_explorers = [_]Explorer{
    .{
        .name = "SPACE OS Explorer",
        .url = "https://testnet.evm-explorer.spaceos.com/",
    },
};

pub const spaceos_testnet_800000 = Chain{
    .name = "SPACE OS Testnet",
    .chain = "SPACE",
    .chain_id = 800000,
    .network_id = 800000,
    .short_name = "spaceos-testnet",
    .rpc = &spaceos_testnet_800000_rpcs,
    .native_currency = .{
        .name = "SPACE",
        .symbol = "SPACE",
        .decimals = 18,
    },
    .info_url = "https://spaceos.com/",
    .explorers = &spaceos_testnet_800000_explorers,
};

pub const zug_824642_rpcs = [_][]const u8{
    "https://rpc.zugchain.org",
};

pub const zug_824642_explorers = [_]Explorer{
    .{
        .name = "ZugChain Explorer",
        .url = "https://explorer.zugchain.org",
    },
};

pub const zug_824642 = Chain{
    .name = "ZugChain Testnet",
    .chain = "ZUG",
    .chain_id = 824642,
    .network_id = 824642,
    .short_name = "zug",
    .rpc = &zug_824642_rpcs,
    .native_currency = .{
        .name = "ZUG",
        .symbol = "ZUG",
        .decimals = 18,
    },
    .info_url = "https://zugchain.org",
    .explorers = &zug_824642_explorers,
};

pub const bini_837291_rpcs = [_][]const u8{
    "https://rpc.binibit.com",
};

pub const bini_837291_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://scan.binibit.com",
    },
};

pub const bini_837291 = Chain{
    .name = "BiniChain",
    .chain = "BINI",
    .chain_id = 837291,
    .network_id = 837291,
    .short_name = "bini",
    .rpc = &bini_837291_rpcs,
    .native_currency = .{
        .name = "BINI",
        .symbol = "BINI",
        .decimals = 18,
    },
    .info_url = "https://binibit.com",
    .explorers = &bini_837291_explorers,
};

pub const hypercluster_838838_rpcs = [_][]const u8{
    "https://rpc.hypercluster.org",
};

pub const hypercluster_838838_explorers = [_]Explorer{
    .{
        .name = "HyperCluster Explorer",
        .url = "https://explorer.hypercluster.org/",
    },
};

pub const hypercluster_838838 = Chain{
    .name = "HyperCluster",
    .chain = "HyperCluster",
    .chain_id = 838838,
    .network_id = 838838,
    .short_name = "hypercluster",
    .rpc = &hypercluster_838838_rpcs,
    .native_currency = .{
        .name = "HYPEC",
        .symbol = "HYPEC",
        .decimals = 18,
    },
    .info_url = "https://hypercluster.org/",
    .explorers = &hypercluster_838838_explorers,
};

pub const galactica_testnet_843843_rpcs = [_][]const u8{
    "https://galactica-cassiopeia.g.alchemy.com/public",
};

pub const galactica_testnet_843843_explorers = [_]Explorer{
    .{
        .name = "Blockscout",
        .url = "https://galactica-cassiopeia.explorer.alchemy.com",
    },
};

pub const galactica_testnet_843843 = Chain{
    .name = "Galactica Testnet",
    .chain = "GNET",
    .chain_id = 843843,
    .network_id = 843843,
    .short_name = "galactica-testnet",
    .rpc = &galactica_testnet_843843_rpcs,
    .native_currency = .{
        .name = "Gnet",
        .symbol = "GNET",
        .decimals = 18,
    },
    .info_url = "https://galactica.com",
    .explorers = &galactica_testnet_843843_explorers,
};

pub const haqq_testethiq_853211_rpcs = [_][]const u8{
    "https://rpc.testnet.ethiq.network",
};

pub const haqq_testethiq_853211_explorers = [_]Explorer{
    .{
        .name = "HAQQ Testethiq Blockscout",
        .url = "https://explorer.testnet.ethiq.network",
    },
};

pub const haqq_testethiq_853211 = Chain{
    .name = "HAQQ Testethiq (L2 Sepolia Testnet)",
    .chain = "ETH",
    .chain_id = 853211,
    .network_id = 853211,
    .short_name = "haqq-testethiq",
    .rpc = &haqq_testethiq_853211_rpcs,
    .native_currency = .{
        .name = "ETH",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://ethiq.network",
    .explorers = &haqq_testethiq_853211_explorers,
};

pub const wrg_882026_rpcs = [_][]const u8{
    "https://umkmrumahan.com/rpc",
};

pub const wrg_882026_explorers = [_]Explorer{
    .{
        .name = "Warga Explorer",
        .url = "https://umkmrumahan.com/explorer",
    },
};

pub const wrg_882026 = Chain{
    .name = "Warga Network L1",
    .chain = "WRG",
    .chain_id = 882026,
    .network_id = 882026,
    .short_name = "wrg",
    .rpc = &wrg_882026_rpcs,
    .native_currency = .{
        .name = "Warga Coin",
        .symbol = "WRG",
        .decimals = 18,
    },
    .info_url = "https://umkmrumahan.com",
    .explorers = &wrg_882026_explorers,
};

pub const zenith_evm_testnet_936485_rpcs = [_][]const u8{
    "https://rpc.testnet.zenith.network/",
};

pub const zenith_evm_testnet_936485_explorers = [_]Explorer{
    .{
        .name = "Zenith EVM Explorer",
        .url = "https://explorer.testnet.zenith.network",
    },
};

pub const zenith_evm_testnet_936485 = Chain{
    .name = "Zenith EVM Testnet",
    .chain = "ZENITH",
    .chain_id = 936485,
    .network_id = 936485,
    .short_name = "zenith-evm-testnet",
    .rpc = &zenith_evm_testnet_936485_rpcs,
    .native_currency = .{
        .name = "Zenith token",
        .symbol = "ZTH",
        .decimals = 18,
    },
    .info_url = "https://docs.zenith.network/zenith-testnet",
    .explorers = &zenith_evm_testnet_936485_explorers,
};

pub const primox_970803_rpcs = [_][]const u8{
    "https://rpc.primox.online",
};

pub const primox_970803_explorers = [_]Explorer{
    .{
        .name = "Primox Scan",
        .url = "https://scan.primox.online/",
    },
};

pub const primox_970803 = Chain{
    .name = "Primox Chain",
    .chain = "PXC",
    .chain_id = 970803,
    .network_id = 970803,
    .short_name = "primox",
    .rpc = &primox_970803_rpcs,
    .native_currency = .{
        .name = "Primox Token",
        .symbol = "PXT",
        .decimals = 18,
    },
    .info_url = "https://chain.primox.online",
    .explorers = &primox_970803_explorers,
};

pub const qantera_974621_rpcs = [_][]const u8{
    "https://rpc1.qantera.network",
    "https://rpc2.qantera.network",
};

pub const qantera_974621_explorers = [_]Explorer{
    .{
        .name = "QanTera Explorer",
        .url = "https://explorer.qantera.network",
    },
};

pub const qantera_974621 = Chain{
    .name = "QanTera Testnet",
    .chain = "QTER",
    .chain_id = 974621,
    .network_id = 974621,
    .short_name = "qantera",
    .rpc = &qantera_974621_rpcs,
    .native_currency = .{
        .name = "QanTera",
        .symbol = "QTER",
        .decimals = 18,
    },
    .info_url = "https://qantera.network",
    .explorers = &qantera_974621_explorers,
};

pub const brevis_provernet_testnet_999983_rpcs = [_][]const u8{
    "https://evmrpc-testnet.brevis.network/",
};

pub const brevis_provernet_testnet_999983_explorers = [_]Explorer{
    .{
        .name = "Breivs ProverNet Testnet Explorer",
        .url = "https://blockscout-testnet.brevis.network/",
    },
};

pub const brevis_provernet_testnet_999983 = Chain{
    .name = "Breivs ProverNet Testnet",
    .chain = "BREV",
    .chain_id = 999983,
    .network_id = 999983,
    .short_name = "brevis-provernet-testnet",
    .rpc = &brevis_provernet_testnet_999983_rpcs,
    .native_currency = .{
        .name = "Brevis Token",
        .symbol = "BREV",
        .decimals = 18,
    },
    .info_url = "https://brevis.network/",
    .explorers = &brevis_provernet_testnet_999983_explorers,
};

pub const xo_1000101_rpcs = [_][]const u8{
    "https://testnet-rpc-1.xo.market",
};

pub const xo_1000101_explorers = [_]Explorer{
    .{
        .name = "xo explorer",
        .url = "https://explorer-testnet.xo.market",
    },
};

pub const xo_1000101 = Chain{
    .name = "XO Chain Testnet",
    .chain = "XO",
    .chain_id = 1000101,
    .network_id = 1000101,
    .short_name = "xo",
    .rpc = &xo_1000101_rpcs,
    .native_currency = .{
        .name = "XO Token",
        .symbol = "XO",
        .decimals = 18,
    },
    .info_url = "https://xo.market",
    .explorers = &xo_1000101_explorers,
};

pub const wirex_testnet_1001996_rpcs = [_][]const u8{
    "https://rpc-dev.wirexpaychain.com",
};

pub const wirex_testnet_1001996_explorers = [_]Explorer{
    .{
        .name = "Wirex Pay Testnet Explorer",
        .url = "https://explorer-dev.wirexpaychain.com",
    },
};

pub const wirex_testnet_1001996 = Chain{
    .name = "Wirex Pay Testnet",
    .chain = "WirexPay",
    .chain_id = 1001996,
    .network_id = 1001996,
    .short_name = "wirex-testnet",
    .rpc = &wirex_testnet_1001996_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://docs.wirexpaychain.com/tech/wirex-pay-chain",
    .explorers = &wirex_testnet_1001996_explorers,
};

pub const roonchain_1314520_rpcs = [_][]const u8{
    "https://mainnet-rpc.roonchain.com",
};

pub const roonchain_1314520_explorers = [_]Explorer{
    .{
        .name = "RoonChain Mainnet explorer",
        .url = "https://mainnet.roonchain.com",
    },
};

pub const roonchain_1314520 = Chain{
    .name = "RoonChain Mainnet",
    .chain = "ROON",
    .chain_id = 1314520,
    .network_id = 1314520,
    .short_name = "roonchain",
    .rpc = &roonchain_1314520_rpcs,
    .native_currency = .{
        .name = "ROON",
        .symbol = "ROON",
        .decimals = 18,
    },
    .info_url = "https://roonchain.com",
    .explorers = &roonchain_1314520_explorers,
};

pub const xrplevm_1440000_rpcs = [_][]const u8{
    "https://rpc.xrplevm.org/",
};

pub const xrplevm_1440000_explorers = [_]Explorer{
    .{
        .name = "XRPL EVM Explorer",
        .url = "https://explorer.xrplevm.org",
    },
};

pub const xrplevm_1440000 = Chain{
    .name = "XRPL EVM",
    .chain = "XRPL",
    .chain_id = 1440000,
    .network_id = 1440000,
    .short_name = "xrplevm",
    .rpc = &xrplevm_1440000_rpcs,
    .native_currency = .{
        .name = "XRP",
        .symbol = "XRP",
        .decimals = 18,
    },
    .info_url = "https://www.xrplevm.org/",
    .explorers = &xrplevm_1440000_explorers,
};

pub const vxs_testnet_1618032_rpcs = [_][]const u8{
    "https://testnet.vexidus.io",
};

pub const vxs_testnet_1618032_explorers = [_]Explorer{
    .{
        .name = "VexScan",
        .url = "https://vexscan.io",
    },
};

pub const vxs_testnet_1618032 = Chain{
    .name = "Vexidus Testnet",
    .chain = "VXS",
    .chain_id = 1618032,
    .network_id = 1618032,
    .short_name = "vxs-testnet",
    .rpc = &vxs_testnet_1618032_rpcs,
    .native_currency = .{
        .name = "Vexidus",
        .symbol = "VXS",
        .decimals = 18,
    },
    .info_url = "https://vexidus.io",
    .explorers = &vxs_testnet_1618032_explorers,
};

pub const duck_2026001_rpcs = [_][]const u8{
    "https://rpc.duckpot.xyz",
};

pub const duck_2026001_explorers = [_]Explorer{
    .{
        .name = "Duckpot Explorer",
        .url = "https://duckpot-nexus.lovable.app/explorer",
    },
};

pub const duck_2026001 = Chain{
    .name = "Duckpot Testnet",
    .chain = "DUCK",
    .chain_id = 2026001,
    .network_id = 2026001,
    .short_name = "duck",
    .rpc = &duck_2026001_rpcs,
    .native_currency = .{
        .name = "Duckpot",
        .symbol = "DUCK",
        .decimals = 18,
    },
    .info_url = "https://duckpot-nexus.lovable.app",
    .explorers = &duck_2026001_explorers,
};

pub const cashcat_2274228_rpcs = [_][]const u8{
    "https://rpc.cashcat.network",
};

pub const cashcat_2274228_explorers = [_]Explorer{
    .{
        .name = "CashCat Explorer",
        .url = "https://explorer.cashcat.network",
    },
};

pub const cashcat_2274228 = Chain{
    .name = "CashCat Chain",
    .chain = "CASHCAT",
    .chain_id = 2274228,
    .network_id = 2274228,
    .short_name = "cashcat",
    .rpc = &cashcat_2274228_rpcs,
    .native_currency = .{
        .name = "Cash Cat",
        .symbol = "CASHCAT",
        .decimals = 18,
    },
    .info_url = "https://cashcat.network",
    .explorers = &cashcat_2274228_explorers,
};

pub const prv_testnet_2718281_rpcs = [_][]const u8{
    "https://rpc.privaterounds.com",
};

pub const prv_testnet_2718281_explorers = [_]Explorer{
    .{
        .name = "PrivateRounds Explorer",
        .url = "https://explorer.privaterounds.com",
    },
};

pub const prv_testnet_2718281 = Chain{
    .name = "PrivateRounds Testnet",
    .chain = "PRV",
    .chain_id = 2718281,
    .network_id = 2718281,
    .short_name = "prv-testnet",
    .rpc = &prv_testnet_2718281_rpcs,
    .native_currency = .{
        .name = "PrivateRounds",
        .symbol = "PRV",
        .decimals = 18,
    },
    .info_url = "https://privaterounds.com",
    .explorers = &prv_testnet_2718281_explorers,
};

pub const arc_testnet_5042002_rpcs = [_][]const u8{
    "https://rpc.testnet.arc.network",
};

pub const arc_testnet_5042002_explorers = [_]Explorer{
    .{
        .name = "Arc Testnet Explorer",
        .url = "https://testnet.arcscan.app/",
    },
};

pub const arc_testnet_5042002 = Chain{
    .name = "Arc Testnet",
    .chain = "arc-testnet",
    .chain_id = 5042002,
    .network_id = 5042002,
    .short_name = "arc-testnet",
    .rpc = &arc_testnet_5042002_rpcs,
    .native_currency = .{
        .name = "USDC",
        .symbol = "USDC",
        .decimals = 18,
    },
    .info_url = "https://www.arc.network/",
    .explorers = &arc_testnet_5042002_explorers,
};

pub const ethereal_5064014_rpcs = [_][]const u8{
    "https://rpc.ethereal.trade",
};

pub const ethereal_5064014_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://explorer.ethereal.trade",
    },
};

pub const ethereal_5064014 = Chain{
    .name = "Ethereal Mainnet",
    .chain = "Ethereal",
    .chain_id = 5064014,
    .network_id = 5064014,
    .short_name = "ethereal",
    .rpc = &ethereal_5064014_rpcs,
    .native_currency = .{
        .name = "USDe",
        .symbol = "USDe",
        .decimals = 18,
    },
    .info_url = "https://www.ethereal.trade",
    .explorers = &ethereal_5064014_explorers,
};

pub const loot_5151706_rpcs = [_][]const u8{
    "https://rpc.lootchain.com/http/",
};

pub const loot_5151706_explorers = [_]Explorer{
    .{
        .name = "Lootscan",
        .url = "https://explorer.lootchain.com/",
    },
};

pub const loot_5151706 = Chain{
    .name = "Loot Mainnet",
    .chain = "LOOT",
    .chain_id = 5151706,
    .network_id = 5151706,
    .short_name = "loot",
    .rpc = &loot_5151706_rpcs,
    .native_currency = .{
        .name = "Adventure Gold",
        .symbol = "AGLD",
        .decimals = 18,
    },
    .info_url = "https://adventuregold.org/",
    .explorers = &loot_5151706_explorers,
};

pub const WIND_5552020_rpcs = [_][]const u8{
    "https://rpc.windpay.org/rpc",
};

pub const WIND_5552020_explorers = [_]Explorer{
    .{
        .name = "windpay explorer",
        .url = "https://explorer.windpay.org",
    },
};

pub const WIND_5552020 = Chain{
    .name = "Windpay Mainnet",
    .chain = "WIND",
    .chain_id = 5552020,
    .network_id = 5552020,
    .short_name = "WIND",
    .rpc = &WIND_5552020_rpcs,
    .native_currency = .{
        .name = "Windpay",
        .symbol = "WIND",
        .decimals = 18,
    },
    .info_url = "https://windpay.org",
    .explorers = &WIND_5552020_explorers,
};

pub const dogeos_chikyu_6281971_rpcs = [_][]const u8{
    "https://rpc.testnet.dogeos.com",
};

pub const dogeos_chikyu_6281971_explorers = [_]Explorer{
    .{
        .name = "DogeOS Chikyū Testnet Explorer",
        .url = "https://blockscout.testnet.dogeos.com",
    },
    .{
        .name = "L2Scan",
        .url = "https://dogeos-testnet.l2scan.co",
    },
};

pub const dogeos_chikyu_6281971 = Chain{
    .name = "DogeOS Chikyū Testnet",
    .chain = "DogeOS",
    .chain_id = 6281971,
    .network_id = 6281971,
    .short_name = "dogeos-chikyu",
    .rpc = &dogeos_chikyu_6281971_rpcs,
    .native_currency = .{
        .name = "Dogecoin",
        .symbol = "DOGE",
        .decimals = 18,
    },
    .info_url = "https://www.dogeos.com",
    .explorers = &dogeos_chikyu_6281971_explorers,
};

pub const jmdt_7000700_rpcs = [_][]const u8{
    "https://rpc.jmdt.io",
};

pub const jmdt_7000700_explorers = [_]Explorer{
    .{
        .name = "JMDT Explorer",
        .url = "https://explorer.jmdt.io",
    },
};

pub const jmdt_7000700 = Chain{
    .name = "JMDT Mainnet",
    .chain = "JMDT",
    .chain_id = 7000700,
    .network_id = 7000700,
    .short_name = "jmdt",
    .rpc = &jmdt_7000700_rpcs,
    .native_currency = .{
        .name = "JMDT",
        .symbol = "JMDT",
        .decimals = 18,
    },
    .info_url = "https://jmdt.io",
    .explorers = &jmdt_7000700_explorers,
};

pub const nvm_7575757_rpcs = [_][]const u8{
    "http://rpc.novamoney.site",
};

pub const nvm_7575757_explorers = [_]Explorer{
    .{
        .name = "NovaMoney Explorer",
        .url = "http://explorer.novamoney.site",
    },
};

pub const nvm_7575757 = Chain{
    .name = "NovaMoney",
    .chain = "NVM",
    .chain_id = 7575757,
    .network_id = 7575757,
    .short_name = "nvm",
    .rpc = &nvm_7575757_rpcs,
    .native_currency = .{
        .name = "NovaMoney",
        .symbol = "NVM",
        .decimals = 18,
    },
    .info_url = "http://novamoney.site",
    .explorers = &nvm_7575757_explorers,
};

pub const dogita_7770777_rpcs = [_][]const u8{
    "http://2.25.155.110:8545",
};

pub const dogita_7770777_explorers = [_]Explorer{
    .{
        .name = "Dogita Explorer",
        .url = "http://2.25.155.110:8080",
    },
};

pub const dogita_7770777 = Chain{
    .name = "Dogita Chain",
    .chain = "DOGA",
    .chain_id = 7770777,
    .network_id = 7770777,
    .short_name = "dogita",
    .rpc = &dogita_7770777_rpcs,
    .native_currency = .{
        .name = "Dogita",
        .symbol = "DOGA",
        .decimals = 18,
    },
    .info_url = "https://dogita-website.netlify.app",
    .explorers = &dogita_7770777_explorers,
};

pub const gravity_testnet_7771625_rpcs = [_][]const u8{
    "https://rpc-testnet.gravity.xyz",
};

pub const gravity_testnet_7771625_explorers = [_]Explorer{
    .{
        .name = "Gravity Testnet Explorer",
        .url = "https://explorer-testnet.gravity.xyz",
    },
};

pub const gravity_testnet_7771625 = Chain{
    .name = "Gravity Longevity Testnet",
    .chain = "Gravity",
    .chain_id = 7771625,
    .network_id = 7771625,
    .short_name = "gravity-testnet",
    .rpc = &gravity_testnet_7771625_rpcs,
    .native_currency = .{
        .name = "Gravity",
        .symbol = "G",
        .decimals = 18,
    },
    .info_url = "https://gravity.xyz",
    .explorers = &gravity_testnet_7771625_explorers,
};

pub const vpc_8678671_rpcs = [_][]const u8{
    "https://vncscan.io",
};

pub const vpc_8678671_explorers = [_]Explorer{
    .{
        .name = "vncscan",
        .url = "https://beta.vncscan.io",
    },
};

pub const vpc_8678671 = Chain{
    .name = "VinaChain Mainnet",
    .chain = "VPC",
    .chain_id = 8678671,
    .network_id = 8678671,
    .short_name = "vpc",
    .rpc = &vpc_8678671_rpcs,
    .native_currency = .{
        .name = "VPC",
        .symbol = "VPC",
        .decimals = 18,
    },
    .info_url = null,
    .explorers = &vpc_8678671_explorers,
};

pub const daventre_8770570_rpcs = [_][]const u8{
    "https://rpc.8770570.xyz",
};

pub const daventre_8770570_explorers = [_]Explorer{
    .{
        .name = "daventre Explorer",
        .url = "https://explorer.8770570.xyz",
    },
};

pub const daventre_8770570 = Chain{
    .name = "daventre Chain",
    .chain = "DEV",
    .chain_id = 8770570,
    .network_id = 8770570,
    .short_name = "daventre",
    .rpc = &daventre_8770570_rpcs,
    .native_currency = .{
        .name = "DEV",
        .symbol = "DEV",
        .decimals = 18,
    },
    .info_url = "http://8770570.xyz",
    .explorers = &daventre_8770570_explorers,
};

pub const cc_testnet_11111110_rpcs = [_][]const u8{
    "https://evm-testnet.clawcoin.com",
};

pub const cc_testnet_11111110 = Chain{
    .name = "ClawCoin Testnet",
    .chain = "CC",
    .chain_id = 11111110,
    .network_id = 11111110,
    .short_name = "cc-testnet",
    .rpc = &cc_testnet_11111110_rpcs,
    .native_currency = .{
        .name = "ClawCoin",
        .symbol = "CC",
        .decimals = 18,
    },
    .info_url = "https://clawcoin.com",
    .explorers = &.{},
};

pub const cc_11111111_rpcs = [_][]const u8{
    "https://evm.clawcoin.com",
};

pub const cc_11111111 = Chain{
    .name = "ClawCoin",
    .chain = "CC",
    .chain_id = 11111111,
    .network_id = 11111111,
    .short_name = "cc",
    .rpc = &cc_11111111_rpcs,
    .native_currency = .{
        .name = "ClawCoin",
        .symbol = "CC",
        .decimals = 18,
    },
    .info_url = "https://clawcoin.com",
    .explorers = &.{},
};

pub const cwn_testnet_11111327_rpcs = [_][]const u8{
    "https://rpc-testnet.commonworld.one",
};

pub const cwn_testnet_11111327_explorers = [_]Explorer{
    .{
        .name = "Commonworld Testnet Explorer",
        .url = "https://explorer-testnet.commonworld.one",
    },
};

pub const cwn_testnet_11111327 = Chain{
    .name = "Commonworld Testnet",
    .chain = "CWN",
    .chain_id = 11111327,
    .network_id = 11111327,
    .short_name = "cwn-testnet",
    .rpc = &cwn_testnet_11111327_rpcs,
    .native_currency = .{
        .name = "Test Commonworld",
        .symbol = "tCWN",
        .decimals = 18,
    },
    .info_url = "https://commonworld.one/",
    .explorers = &cwn_testnet_11111327_explorers,
};

pub const celo_sep_11142220_rpcs = [_][]const u8{
    "https://forno.celo-sepolia.celo-testnet.org",
};

pub const celo_sep_11142220 = Chain{
    .name = "Celo Sepolia Testnet",
    .chain = "CELO",
    .chain_id = 11142220,
    .network_id = 11142220,
    .short_name = "celo-sep",
    .rpc = &celo_sep_11142220_rpcs,
    .native_currency = .{
        .name = "CELO-S",
        .symbol = "CELO",
        .decimals = 18,
    },
    .info_url = "https://sepolia.celoscan.io/",
    .explorers = &.{},
};

pub const rise_testnet_11155931_rpcs = [_][]const u8{
    "https://testnet.riselabs.xyz",
};

pub const rise_testnet_11155931_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://explorer.testnet.riselabs.xyz",
    },
};

pub const rise_testnet_11155931 = Chain{
    .name = "RISE Testnet",
    .chain = "ETH",
    .chain_id = 11155931,
    .network_id = 11155931,
    .short_name = "rise-testnet",
    .rpc = &rise_testnet_11155931_rpcs,
    .native_currency = .{
        .name = "RISE Testnet Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://www.riselabs.xyz/",
    .explorers = &rise_testnet_11155931_explorers,
};

pub const r0art_11166111_rpcs = [_][]const u8{
    "https://testnet.rpc-r0ar.io",
};

pub const r0art_11166111_explorers = [_]Explorer{
    .{
        .name = "R0ARscan (testnet)",
        .url = "https://testnet.r0arscan.io",
    },
};

pub const r0art_11166111 = Chain{
    .name = "R0AR Testnet",
    .chain = "R0AR",
    .chain_id = 11166111,
    .network_id = 11166111,
    .short_name = "r0art",
    .rpc = &r0art_11166111_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://r0ar.io",
    .explorers = &r0art_11166111_explorers,
};

pub const winmar_12142816_rpcs = [_][]const u8{
    "https://rpc.winmarchain.io",
};

pub const winmar_12142816_explorers = [_]Explorer{
    .{
        .name = "Winmar Chain Explorer",
        .url = "https://scan.winmarchain.io",
    },
};

pub const winmar_12142816 = Chain{
    .name = "Winmar Chain",
    .chain = "WMC",
    .chain_id = 12142816,
    .network_id = 12142816,
    .short_name = "winmar",
    .rpc = &winmar_12142816_rpcs,
    .native_currency = .{
        .name = "Winmar Coin",
        .symbol = "WMC",
        .decimals = 18,
    },
    .info_url = "https://winmarchain.io",
    .explorers = &winmar_12142816_explorers,
};

pub const roonchain_13145201_rpcs = [_][]const u8{
    "https://testnet-rpc.roonchain.com",
};

pub const roonchain_13145201_explorers = [_]Explorer{
    .{
        .name = "RoonChain Testnet explorer",
        .url = "https://testnets.roonchain.com",
    },
};

pub const roonchain_13145201 = Chain{
    .name = "RoonChain Testnet",
    .chain = "ROON",
    .chain_id = 13145201,
    .network_id = 13145201,
    .short_name = "roonchain",
    .rpc = &roonchain_13145201_rpcs,
    .native_currency = .{
        .name = "ROON",
        .symbol = "ROON",
        .decimals = 18,
    },
    .info_url = "https://roonchain.com",
    .explorers = &roonchain_13145201_explorers,
};

pub const ethereal_testnet_0_13374202_rpcs = [_][]const u8{
    "https://rpc.etherealtest.net",
    "https://rpc-ethereal-testnet-0.t.conduit.xyz",
};

pub const ethereal_testnet_0_13374202_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://explorer.etherealtest.net",
    },
};

pub const ethereal_testnet_0_13374202 = Chain{
    .name = "Ethereal Testnet",
    .chain = "Ethereal",
    .chain_id = 13374202,
    .network_id = 13374202,
    .short_name = "ethereal-testnet-0",
    .rpc = &ethereal_testnet_0_13374202_rpcs,
    .native_currency = .{
        .name = "USDe",
        .symbol = "USDe",
        .decimals = 18,
    },
    .info_url = "https://www.ethereal.trade/",
    .explorers = &ethereal_testnet_0_13374202_explorers,
};

pub const hp_13600000_rpcs = [_][]const u8{
    "https://humanity-main.g.alchemy.com/public",
};

pub const hp_13600000_explorers = [_]Explorer{
    .{
        .name = "Humanity Mainnet explorer",
        .url = "https://humanity-main.explorer.alchemy.com",
    },
};

pub const hp_13600000 = Chain{
    .name = "Humanity",
    .chain = "Humanity",
    .chain_id = 13600000,
    .network_id = 13600000,
    .short_name = "hp",
    .rpc = &hp_13600000_rpcs,
    .native_currency = .{
        .name = "H",
        .symbol = "H",
        .decimals = 18,
    },
    .info_url = "https://humanity.org",
    .explorers = &hp_13600000_explorers,
};

pub const sis_13863860_rpcs = [_][]const u8{
    "https://symbiosis.calderachain.xyz/http",
};

pub const sis_13863860_explorers = [_]Explorer{
    .{
        .name = "Symbiosis explorer",
        .url = "https://symbiosis.calderaexplorer.xyz",
    },
};

pub const sis_13863860 = Chain{
    .name = "Symbiosis",
    .chain = "SIS",
    .chain_id = 13863860,
    .network_id = 13863860,
    .short_name = "sis",
    .rpc = &sis_13863860_rpcs,
    .native_currency = .{
        .name = "Symbiosis",
        .symbol = "SIS",
        .decimals = 18,
    },
    .info_url = "https://symbiosis.finance",
    .explorers = &sis_13863860_explorers,
};

pub const bleno_15112026_rpcs = [_][]const u8{
    "https://bleno.com.br/hub/rpc",
};

pub const bleno_15112026_explorers = [_]Explorer{
    .{
        .name = "BlenoScan",
        .url = "https://bleno.com.br",
    },
};

pub const bleno_15112026 = Chain{
    .name = "Bleno Network",
    .chain = "BLENO",
    .chain_id = 15112026,
    .network_id = 15112026,
    .short_name = "bleno",
    .rpc = &bleno_15112026_rpcs,
    .native_currency = .{
        .name = "Bleno",
        .symbol = "BLENO",
        .decimals = 18,
    },
    .info_url = "https://bleno.com.br/hub/welcome.html",
    .explorers = &bleno_15112026_explorers,
};

pub const tips_19251925_rpcs = [_][]const u8{
    "http://rpc2.tipspay.org",
};

pub const tips_19251925_explorers = [_]Explorer{
    .{
        .name = "tipscan",
        .url = "https://scan.tipspay.org",
    },
};

pub const tips_19251925 = Chain{
    .name = "Tipschain TESTNET",
    .chain = "Tipschain TESTNET",
    .chain_id = 19251925,
    .network_id = 19251925,
    .short_name = "tips",
    .rpc = &tips_19251925_rpcs,
    .native_currency = .{
        .name = "Tipschain Coin",
        .symbol = "TPC",
        .decimals = 18,
    },
    .info_url = "https://tipspay.org",
    .explorers = &tips_19251925_explorers,
};

pub const ma_20260131_rpcs = [_][]const u8{
    "https://rpc.ma-chain.xyz",
};

pub const ma_20260131_explorers = [_]Explorer{
    .{
        .name = "Meta Assets Chain Explorer",
        .url = "https://ma-chain.xyz",
    },
};

pub const ma_20260131 = Chain{
    .name = "Meta Assets Chain",
    .chain = "MA",
    .chain_id = 20260131,
    .network_id = 20260131,
    .short_name = "ma",
    .rpc = &ma_20260131_rpcs,
    .native_currency = .{
        .name = "MetaAssets",
        .symbol = "MA",
        .decimals = 18,
    },
    .info_url = "https://ma-chain.xyz",
    .explorers = &ma_20260131_explorers,
};

pub const gridmindt_20260532_rpcs = [_][]const u8{
    "https://testnet-rpc.grid-mind.com",
};

pub const gridmindt_20260532_explorers = [_]Explorer{
    .{
        .name = "GridMind Testnet Explorer",
        .url = "https://gridmindblockchain.com",
    },
    .{
        .name = "GridMind Technical Explorer",
        .url = "https://testnet-explorer.grid-mind.com",
    },
};

pub const gridmindt_20260532 = Chain{
    .name = "GridMind Testnet",
    .chain = "GRD",
    .chain_id = 20260532,
    .network_id = 20260532,
    .short_name = "gridmindt",
    .rpc = &gridmindt_20260532_rpcs,
    .native_currency = .{
        .name = "GridMind Test GRD",
        .symbol = "testGRD",
        .decimals = 18,
    },
    .info_url = "https://www.grid-mind.com/blockchain",
    .explorers = &gridmindt_20260532_explorers,
};

pub const cook_20261001_rpcs = [_][]const u8{
    "https://rpc.cookscan.net/evm",
    "https://rpc.cookdex.net",
    "https://rpc.ldbl.net",
    "https://rpc.zeven.zone",
};

pub const cook_20261001_explorers = [_]Explorer{
    .{
        .name = "Cookscan",
        .url = "https://cookscan.net",
    },
};

pub const cook_20261001 = Chain{
    .name = "Cookchain Mainnet",
    .chain = "COOK",
    .chain_id = 20261001,
    .network_id = 20261001,
    .short_name = "cook",
    .rpc = &cook_20261001_rpcs,
    .native_currency = .{
        .name = "COOK",
        .symbol = "COOK",
        .decimals = 18,
    },
    .info_url = "https://cookscan.net",
    .explorers = &cook_20261001_explorers,
};

pub const zagros_21072026_rpcs = [_][]const u8{
    "https://rpc.zagros.network",
    "https://rpc.zagrosnetwork.com",
};

pub const zagros_21072026_explorers = [_]Explorer{
    .{
        .name = "ZagrosRadar",
        .url = "https://zagrosradar.com",
    },
};

pub const zagros_21072026 = Chain{
    .name = "Zagros Mainnet",
    .chain = "ZAGROS",
    .chain_id = 21072026,
    .network_id = 21072026,
    .short_name = "zagros",
    .rpc = &zagros_21072026_rpcs,
    .native_currency = .{
        .name = "Zagros",
        .symbol = "ZAGROS",
        .decimals = 18,
    },
    .info_url = "https://zagros.network",
    .explorers = &zagros_21072026_explorers,
};

pub const tjr_devnet_21519080_rpcs = [_][]const u8{
    "https://rpc.devnet.tajirchain.com",
};

pub const tjr_devnet_21519080_explorers = [_]Explorer{
    .{
        .name = "Blockscout",
        .url = "https://explorer.devnet.tajirchain.com",
    },
};

pub const tjr_devnet_21519080 = Chain{
    .name = "Tajirchain Devnet",
    .chain = "TJR",
    .chain_id = 21519080,
    .network_id = 21519080,
    .short_name = "tjr-devnet",
    .rpc = &tjr_devnet_21519080_rpcs,
    .native_currency = .{
        .name = "Tajirchain Test Token",
        .symbol = "tTJR",
        .decimals = 18,
    },
    .info_url = "https://tajirchain.com",
    .explorers = &tjr_devnet_21519080_explorers,
};

pub const nowa_testnet_22052010_rpcs = [_][]const u8{
    "https://tnode1.nowa.finance",
    "https://tnode2.nowa.finance",
    "https://tnode3.nowa.finance",
};

pub const nowa_testnet_22052010_explorers = [_]Explorer{
    .{
        .name = "Nowa Testnet Explorer",
        .url = "https://testnet.nowa.finance",
    },
};

pub const nowa_testnet_22052010 = Chain{
    .name = "Nowa Testnet",
    .chain = "NOWA",
    .chain_id = 22052010,
    .network_id = 22052010,
    .short_name = "nowa-testnet",
    .rpc = &nowa_testnet_22052010_rpcs,
    .native_currency = .{
        .name = "Nowa",
        .symbol = "NOWA",
        .decimals = 18,
    },
    .info_url = "https://nowa.finance",
    .explorers = &nowa_testnet_22052010_explorers,
};

pub const pecu_27272727_rpcs = [_][]const u8{
    "https://mainnet.pecunovus.net",
};

pub const pecu_27272727_explorers = [_]Explorer{
    .{
        .name = "pecuscan",
        .url = "https://www.pecuscan.com",
    },
};

pub const pecu_27272727 = Chain{
    .name = "Pecu Novus Mainnet",
    .chain = "PECU",
    .chain_id = 27272727,
    .network_id = 27272727,
    .short_name = "pecu",
    .rpc = &pecu_27272727_rpcs,
    .native_currency = .{
        .name = "Pecu Novus",
        .symbol = "PECU",
        .decimals = 18,
    },
    .info_url = "https://www.pecunovus.com",
    .explorers = &pecu_27272727_explorers,
};

pub const gbdo_38391207_rpcs = [_][]const u8{
    "https://rpc.brantley-global.com",
};

pub const gbdo_38391207_explorers = [_]Explorer{
    .{
        .name = "globaldash",
        .url = "https://brantley-global.com/dashboard",
    },
};

pub const gbdo_38391207 = Chain{
    .name = "GLOBALCHAIN",
    .chain = "GBDo",
    .chain_id = 38391207,
    .network_id = 38391207,
    .short_name = "gbdo",
    .rpc = &gbdo_38391207_rpcs,
    .native_currency = .{
        .name = "Global Dollar",
        .symbol = "GBDo",
        .decimals = 18,
    },
    .info_url = "https://brantley-global.com",
    .explorers = &gbdo_38391207_explorers,
};

pub const tensora_44444444_rpcs = [_][]const u8{
    "https://rpc.tensora.sh",
    "http://63.250.32.66:8545",
};

pub const tensora_44444444_explorers = [_]Explorer{
    .{
        .name = "Tensora Explorer",
        .url = "https://explorer.tensora.sh",
    },
};

pub const tensora_44444444 = Chain{
    .name = "Tensora",
    .chain = "Tensora",
    .chain_id = 44444444,
    .network_id = 44444444,
    .short_name = "tensora",
    .rpc = &tensora_44444444_rpcs,
    .native_currency = .{
        .name = "BNB",
        .symbol = "BNB",
        .decimals = 18,
    },
    .info_url = "https://tensora.ai",
    .explorers = &tensora_44444444_explorers,
};

pub const unp_47382916_rpcs = [_][]const u8{
    "https://rpc.unpchain.com",
};

pub const unp_47382916_explorers = [_]Explorer{
    .{
        .name = "UNP Chain Explorer",
        .url = "https://explorer.unpchain.com",
    },
};

pub const unp_47382916 = Chain{
    .name = "Unipoly Chain Mainnet",
    .chain = "UNP",
    .chain_id = 47382916,
    .network_id = 47382916,
    .short_name = "unp",
    .rpc = &unp_47382916_rpcs,
    .native_currency = .{
        .name = "Unipoly Coin",
        .symbol = "UNP",
        .decimals = 18,
    },
    .info_url = "https://unipoly.network",
    .explorers = &unp_47382916_explorers,
};

pub const elyon_55452773_rpcs = [_][]const u8{
    "https://mainnet.elyon.network/rpc",
};

pub const elyon_55452773_explorers = [_]Explorer{
    .{
        .name = "Elyon Explorer",
        .url = "https://explorer.elyon.network",
    },
};

pub const elyon_55452773 = Chain{
    .name = "ElyonChain",
    .chain = "ELN",
    .chain_id = 55452773,
    .network_id = 55452773,
    .short_name = "elyon",
    .rpc = &elyon_55452773_rpcs,
    .native_currency = .{
        .name = "ELN",
        .symbol = "ELN",
        .decimals = 18,
    },
    .info_url = "https://elyon.network",
    .explorers = &elyon_55452773_explorers,
};

pub const aut_65000000_rpcs = [_][]const u8{
    "https://autonity.rpc.web3cdn.network",
    "https://autonity.rpc.subquery.network/public",
    "https://rpc.autonity-apis.com",
};

pub const aut_65000000_explorers = [_]Explorer{
    .{
        .name = "autonityscan",
        .url = "https://autonityscan.org",
    },
};

pub const aut_65000000 = Chain{
    .name = "Autonity Mainnet",
    .chain = "AUT",
    .chain_id = 65000000,
    .network_id = 65000000,
    .short_name = "aut",
    .rpc = &aut_65000000_rpcs,
    .native_currency = .{
        .name = "Auton",
        .symbol = "ATN",
        .decimals = 18,
    },
    .info_url = "https://autonity.org/",
    .explorers = &aut_65000000_explorers,
};

pub const aut_bakerloo_65010004_rpcs = [_][]const u8{
    "https://autonity.rpc.web3cdn.network/testnet",
    "https://bakerloo.autonity-apis.com",
};

pub const aut_bakerloo_65010004_explorers = [_]Explorer{
    .{
        .name = "autonity-bakerloo-explorer",
        .url = "https://bakerloo.autonity.org",
    },
};

pub const aut_bakerloo_65010004 = Chain{
    .name = "Autonity Bakerloo (Nile) Testnet",
    .chain = "AUT",
    .chain_id = 65010004,
    .network_id = 65010004,
    .short_name = "aut-bakerloo",
    .rpc = &aut_bakerloo_65010004_rpcs,
    .native_currency = .{
        .name = "Bakerloo Auton",
        .symbol = "ATN",
        .decimals = 18,
    },
    .info_url = "https://autonity.org/",
    .explorers = &aut_bakerloo_65010004_explorers,
};

pub const sovra_65536001_rpcs = [_][]const u8{
    "https://rpc.sovra.io",
};

pub const sovra_65536001_explorers = [_]Explorer{
    .{
        .name = "Sovra Explorer",
        .url = "https://explorer.sovra.io",
    },
};

pub const sovra_65536001 = Chain{
    .name = "Sovra",
    .chain = "Sovra",
    .chain_id = 65536001,
    .network_id = 65536001,
    .short_name = "sovra",
    .rpc = &sovra_65536001_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://sovra.io",
    .explorers = &sovra_65536001_explorers,
};

pub const kryvora_73829164_rpcs = [_][]const u8{
    "https://rpc-testnet.kryvora.network/",
};

pub const kryvora_73829164_explorers = [_]Explorer{
    .{
        .name = "Kryvora Explorer",
        .url = "https://explorer-testnet.kryvora.network",
    },
};

pub const kryvora_73829164 = Chain{
    .name = "Kryvora Testnet",
    .chain = "KRY",
    .chain_id = 73829164,
    .network_id = 73829164,
    .short_name = "kryvora",
    .rpc = &kryvora_73829164_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://kryvora.network",
    .explorers = &kryvora_73829164_explorers,
};

pub const sx_toronto_79479957_rpcs = [_][]const u8{
    "https://rpc-rollup.toronto.sx.technology",
};

pub const sx_toronto_79479957_explorers = [_]Explorer{
    .{
        .name = "SX Toronto Explorer",
        .url = "https://explorerl2.toronto.sx.technology/",
    },
};

pub const sx_toronto_79479957 = Chain{
    .name = "SX Toronto Network",
    .chain = "SXR",
    .chain_id = 79479957,
    .network_id = 79479957,
    .short_name = "sx-toronto",
    .rpc = &sx_toronto_79479957_rpcs,
    .native_currency = .{
        .name = "SX Token",
        .symbol = "SX",
        .decimals = 18,
    },
    .info_url = "https://sx.technology",
    .explorers = &sx_toronto_79479957_explorers,
};

pub const base_vibenet_84538453_rpcs = [_][]const u8{
    "https://rpc.vibes.base.org",
};

pub const base_vibenet_84538453_explorers = [_]Explorer{
    .{
        .name = "Base Vibenet Explorer",
        .url = "https://chain.base.org/vibenet/explorer",
    },
};

pub const base_vibenet_84538453 = Chain{
    .name = "Base Vibenet",
    .chain = "ETH",
    .chain_id = 84538453,
    .network_id = 84538453,
    .short_name = "base-vibenet",
    .rpc = &base_vibenet_84538453_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://docs.base.org/base-chain/quickstart/connecting-to-base",
    .explorers = &base_vibenet_84538453_explorers,
};

pub const shinzo_testnet_91273001_rpcs = [_][]const u8{
    "https://shinzo-testnet.web3cdn.rest",
    "http://testnet.shinzo.network:8545",
};

pub const shinzo_testnet_91273001 = Chain{
    .name = "Shinzo Testnet",
    .chain = "SHNZ",
    .chain_id = 91273001,
    .network_id = 91273001,
    .short_name = "shinzo-testnet",
    .rpc = &shinzo_testnet_91273001_rpcs,
    .native_currency = .{
        .name = "Shinzo",
        .symbol = "SHNZ",
        .decimals = 18,
    },
    .info_url = "https://shinzo.network",
    .explorers = &.{},
};

pub const prsm_101001000_rpcs = [_][]const u8{
    "https://rpc.glassnet.prismo.network",
};

pub const prsm_101001000_explorers = [_]Explorer{
    .{
        .name = "Glassnet Explorer",
        .url = "https://explorer.glassnet.prismo.network",
    },
};

pub const prsm_101001000 = Chain{
    .name = "Prismo Glassnet",
    .chain = "PRISMO",
    .chain_id = 101001000,
    .network_id = 101001000,
    .short_name = "prsm",
    .rpc = &prsm_101001000_rpcs,
    .native_currency = .{
        .name = "USDC",
        .symbol = "USDC",
        .decimals = 18,
    },
    .info_url = "https://prismo.technology",
    .explorers = &prsm_101001000_explorers,
};

pub const istchain_mainnet_286022981_rpcs = [_][]const u8{
    "https://rpc1.istchain.org",
    "https://rpc2.istchain.org",
    "https://rpc3.istchain.org",
    "https://rpc4.istchain.org",
    "https://rpc5.istchain.org",
    "https://rpc6.istchain.org",
};

pub const istchain_mainnet_286022981_explorers = [_]Explorer{
    .{
        .name = "istscan",
        .url = "https://scan.istchain.org",
    },
};

pub const istchain_mainnet_286022981 = Chain{
    .name = "ISTChain Mainnet",
    .chain = "Openverse",
    .chain_id = 286022981,
    .network_id = 286022981,
    .short_name = "istchain-mainnet",
    .rpc = &istchain_mainnet_286022981_rpcs,
    .native_currency = .{
        .name = "IST",
        .symbol = "IST",
        .decimals = 18,
    },
    .info_url = "https://istchain.org",
    .explorers = &istchain_mainnet_286022981_explorers,
};

pub const dnachain_mainnet_287022981_rpcs = [_][]const u8{
    "https://rpc1.gene.network",
    "https://rpc2.gene.network",
    "https://rpc3.gene.network",
    "https://rpc4.gene.network",
    "https://rpc5.gene.network",
    "https://rpc6.gene.network",
};

pub const dnachain_mainnet_287022981_explorers = [_]Explorer{
    .{
        .name = "dnascan",
        .url = "https://scan.gene.network",
    },
};

pub const dnachain_mainnet_287022981 = Chain{
    .name = "DNAChain Mainnet",
    .chain = "Openverse",
    .chain_id = 287022981,
    .network_id = 287022981,
    .short_name = "dnachain-mainnet",
    .rpc = &dnachain_mainnet_287022981_rpcs,
    .native_currency = .{
        .name = "DNA",
        .symbol = "DNA",
        .decimals = 18,
    },
    .info_url = "https://gene.network",
    .explorers = &dnachain_mainnet_287022981_explorers,
};

pub const slcchain_mainnet_288022981_rpcs = [_][]const u8{
    "https://rpc1.sl.cool",
    "https://rpc2.sl.cool",
    "https://rpc3.sl.cool",
    "https://rpc4.sl.cool",
    "https://rpc5.sl.cool",
    "https://rpc6.sl.cool",
};

pub const slcchain_mainnet_288022981_explorers = [_]Explorer{
    .{
        .name = "slcscan",
        .url = "https://scan.sl.cool",
    },
};

pub const slcchain_mainnet_288022981 = Chain{
    .name = "SLCChain Mainnet",
    .chain = "Openverse",
    .chain_id = 288022981,
    .network_id = 288022981,
    .short_name = "slcchain-mainnet",
    .rpc = &slcchain_mainnet_288022981_rpcs,
    .native_currency = .{
        .name = "Super Link Coin",
        .symbol = "SLC",
        .decimals = 18,
    },
    .info_url = "https://sl.cool",
    .explorers = &slcchain_mainnet_288022981_explorers,
};

pub const pas_420420417_rpcs = [_][]const u8{
    "https://eth-rpc-testnet.polkadot.io",
};

pub const pas_420420417_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://blockscout-testnet.polkadot.io",
    },
    .{
        .name = "routescan",
        .url = "https://polkadot.testnet.routescan.io",
    },
};

pub const pas_420420417 = Chain{
    .name = "Polkadot Testnet",
    .chain = "PAS",
    .chain_id = 420420417,
    .network_id = 420420417,
    .short_name = "pas",
    .rpc = &pas_420420417_rpcs,
    .native_currency = .{
        .name = "PAS",
        .symbol = "PAS",
        .decimals = 18,
    },
    .info_url = "https://polkadot.com",
    .explorers = &pas_420420417_explorers,
};

pub const ksm_420420418_rpcs = [_][]const u8{
    "https://eth-rpc-kusama.polkadot.io",
};

pub const ksm_420420418_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://blockscout-kusama.polkadot.io",
    },
};

pub const ksm_420420418 = Chain{
    .name = "Kusama",
    .chain = "KSM",
    .chain_id = 420420418,
    .network_id = 420420418,
    .short_name = "ksm",
    .rpc = &ksm_420420418_rpcs,
    .native_currency = .{
        .name = "KSM",
        .symbol = "KSM",
        .decimals = 18,
    },
    .info_url = "https://polkadot.com",
    .explorers = &ksm_420420418_explorers,
};

pub const dot_420420419_rpcs = [_][]const u8{
    "https://eth-rpc.polkadot.io",
};

pub const dot_420420419_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://blockscout.polkadot.io",
    },
    .{
        .name = "routescan",
        .url = "https://polkadot.routescan.io",
    },
};

pub const dot_420420419 = Chain{
    .name = "Polkadot",
    .chain = "DOT",
    .chain_id = 420420419,
    .network_id = 420420419,
    .short_name = "dot",
    .rpc = &dot_420420419_rpcs,
    .native_currency = .{
        .name = "DOT",
        .symbol = "DOT",
        .decimals = 18,
    },
    .info_url = "https://polkadot.com",
    .explorers = &dot_420420419_explorers,
};

pub const infinite_testnet_421018001_rpcs = [_][]const u8{
    "https://evm-rpc-testnet.infinitedrive.xyz",
};

pub const infinite_testnet_421018001_explorers = [_]Explorer{
    .{
        .name = "Infinite Drive Explorer - Testnet",
        .url = "https://testnet-scan.infinitedrive.xyz",
    },
};

pub const infinite_testnet_421018001 = Chain{
    .name = "Infinite Improbability Drive Testnet",
    .chain = "INFINITE",
    .chain_id = 421018001,
    .network_id = 421018001,
    .short_name = "infinite-testnet",
    .rpc = &infinite_testnet_421018001_rpcs,
    .native_currency = .{
        .name = "TestImprobability",
        .symbol = "TEST42",
        .decimals = 18,
    },
    .info_url = "https://infinitedrive.xyz",
    .explorers = &infinite_testnet_421018001_explorers,
};

pub const sophon_os_testnet_531050204_rpcs = [_][]const u8{
    "https://rpc.testnet.os.sophon.com/",
};

pub const sophon_os_testnet_531050204_explorers = [_]Explorer{
    .{
        .name = "Sophscan Testnet",
        .url = "https://testnet.sophscan.com/",
    },
    .{
        .name = "Sophon OS Testnet Explorer",
        .url = "https://explorer.testnet.os.sophon.com/",
    },
};

pub const sophon_os_testnet_531050204 = Chain{
    .name = "Sophon OS Testnet",
    .chain = "Sophon OS",
    .chain_id = 531050204,
    .network_id = 531050204,
    .short_name = "sophon-os-testnet",
    .rpc = &sophon_os_testnet_531050204_rpcs,
    .native_currency = .{
        .name = "Sophon",
        .symbol = "SOPH",
        .decimals = 18,
    },
    .info_url = "https://sophon.xyz/",
    .explorers = &sophon_os_testnet_531050204_explorers,
};

pub const zen_845320009_rpcs = [_][]const u8{
    "https://horizen-rpc-testnet.appchain.base.org",
};

pub const zen_845320009_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://horizen-explorer-testnet.appchain.base.org/",
    },
};

pub const zen_845320009 = Chain{
    .name = "Horizen Testnet",
    .chain = "ZEN",
    .chain_id = 845320009,
    .network_id = 845320009,
    .short_name = "zen",
    .rpc = &zen_845320009_rpcs,
    .native_currency = .{
        .name = "Ether",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://www.horizen.io/",
    .explorers = &zen_845320009_explorers,
};

pub const mirasmanda_1213549903_rpcs = [_][]const u8{
    "https://rpc.evm.mirasmanda.uz",
};

pub const mirasmanda_1213549903_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://blockscout.evm.mirasmanda.uz",
    },
};

pub const mirasmanda_1213549903 = Chain{
    .name = "Mirasmanda",
    .chain = "MIRASMANDA",
    .chain_id = 1213549903,
    .network_id = 1213549903,
    .short_name = "mirasmanda",
    .rpc = &mirasmanda_1213549903_rpcs,
    .native_currency = .{
        .name = "Gas",
        .symbol = "GAS",
        .decimals = 18,
    },
    .info_url = "https://asterium.uz",
    .explorers = &mirasmanda_1213549903_explorers,
};

pub const mirasmanda_uat_1215655279_rpcs = [_][]const u8{
    "https://rpc-uat.evm.mirasmanda.uz",
};

pub const mirasmanda_uat_1215655279_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://blockscout-uat.evm.mirasmanda.uz",
    },
};

pub const mirasmanda_uat_1215655279 = Chain{
    .name = "Mirasmanda UAT",
    .chain = "MIRASMANDA",
    .chain_id = 1215655279,
    .network_id = 1215655279,
    .short_name = "mirasmanda-uat",
    .rpc = &mirasmanda_uat_1215655279_rpcs,
    .native_currency = .{
        .name = "Gas",
        .symbol = "GAS",
        .decimals = 18,
    },
    .info_url = "https://asterium.uz",
    .explorers = &mirasmanda_uat_1215655279_explorers,
};

pub const itani_1229800785_rpcs = [_][]const u8{
    "https://rpc.itaninetworkchain.com/jsonrpc",
    "https://node.itaninetworkchain.com/jsonrpc",
};

pub const itani_1229800785_explorers = [_]Explorer{
    .{
        .name = "iTani Explorer",
        .url = "https://explorer.itaninetworkchain.com",
    },
};

pub const itani_1229800785 = Chain{
    .name = "iTani Network Chain",
    .chain = "ITANI",
    .chain_id = 1229800785,
    .network_id = 1229800785,
    .short_name = "itani",
    .rpc = &itani_1229800785_rpcs,
    .native_currency = .{
        .name = "iTani",
        .symbol = "ITANI",
        .decimals = 18,
    },
    .info_url = "https://www.itaninetworkchain.com",
    .explorers = &itani_1229800785_explorers,
};

pub const omega_1313161916_rpcs = [_][]const u8{
    "https://0x4e4542bc.rpc.aurora-cloud.dev/",
};

pub const omega_1313161916_explorers = [_]Explorer{
    .{
        .name = "Omega Mainnet",
        .url = "https://0x4e4542bc.explorer.aurora-cloud.dev/",
    },
};

pub const omega_1313161916 = Chain{
    .name = "Omega Mainnet",
    .chain = "Omega",
    .chain_id = 1313161916,
    .network_id = 1313161916,
    .short_name = "omega",
    .rpc = &omega_1313161916_rpcs,
    .native_currency = .{
        .name = "Omega",
        .symbol = "OMEGA",
        .decimals = 18,
    },
    .info_url = "https://omeganetwork.co/",
    .explorers = &omega_1313161916_explorers,
};

pub const rari_1380012617_rpcs = [_][]const u8{
    "https://mainnet.rpc.rarichain.org/http/",
};

pub const rari_1380012617_explorers = [_]Explorer{
    .{
        .name = "Blockscout",
        .url = "https://mainnet.explorer.rarichain.org/",
    },
};

pub const rari_1380012617 = Chain{
    .name = "RARI Chain",
    .chain = "RARI",
    .chain_id = 1380012617,
    .network_id = 1380012617,
    .short_name = "rari",
    .rpc = &rari_1380012617_rpcs,
    .native_currency = .{
        .name = "Ethereum",
        .symbol = "ETH",
        .decimals = 18,
    },
    .info_url = "https://rarichain.org/",
    .explorers = &rari_1380012617_explorers,
};

pub const lumia_beam_testnet_2030232745_rpcs = [_][]const u8{
    "https://beam-rpc.lumia.org",
};

pub const lumia_beam_testnet_2030232745_explorers = [_]Explorer{
    .{
        .name = "Lumia Beam Testnet Explorer",
        .url = "https://beam-explorer.lumia.org",
    },
};

pub const lumia_beam_testnet_2030232745 = Chain{
    .name = "Lumia Beam Testnet",
    .chain = "ETH",
    .chain_id = 2030232745,
    .network_id = 2030232745,
    .short_name = "lumia-beam-testnet",
    .rpc = &lumia_beam_testnet_2030232745_rpcs,
    .native_currency = .{
        .name = "Lumia",
        .symbol = "LUMIA",
        .decimals = 18,
    },
    .info_url = "https://lumia.org",
    .explorers = &lumia_beam_testnet_2030232745_explorers,
};

pub const edent_3735928814_rpcs = [_][]const u8{
    "https://rpc.testnet.eden.gateway.fm",
};

pub const edent_3735928814_explorers = [_]Explorer{
    .{
        .name = "Eden Testnet Explorer",
        .url = "https://eden-testnet.blockscout.com",
    },
};

pub const edent_3735928814 = Chain{
    .name = "Eden testnet",
    .chain = "Eden testnet",
    .chain_id = 3735928814,
    .network_id = 3735928814,
    .short_name = "edent",
    .rpc = &edent_3735928814_rpcs,
    .native_currency = .{
        .name = "TIA",
        .symbol = "TIA",
        .decimals = 18,
    },
    .info_url = null,
    .explorers = &edent_3735928814_explorers,
};

pub const fco_11111111111_rpcs = [_][]const u8{
    "https://rpc.fanati.co",
};

pub const fco_11111111111_explorers = [_]Explorer{
    .{
        .name = "Fanatico Explorer",
        .url = "https://explorer.fanati.co",
    },
};

pub const fco_11111111111 = Chain{
    .name = "Fanatico",
    .chain = "FCO",
    .chain_id = 11111111111,
    .network_id = 11111111111,
    .short_name = "fco",
    .rpc = &fco_11111111111_rpcs,
    .native_currency = .{
        .name = "Fanatico",
        .symbol = "FCO",
        .decimals = 18,
    },
    .info_url = "https://chain.fanati.co",
    .explorers = &fco_11111111111_explorers,
};

pub const BUB_30143370385_rpcs = [_][]const u8{
    "https://rpc-mainnet.buburuza.com/rpc",
};

pub const BUB_30143370385_explorers = [_]Explorer{
    .{
        .name = "Buburuza Explorer",
        .url = "https://explorer-mainnet.buburuza.com/",
    },
};

pub const BUB_30143370385 = Chain{
    .name = "Buburuza Mainnet",
    .chain = "BUBU",
    .chain_id = 30143370385,
    .network_id = 30143370385,
    .short_name = "BUB",
    .rpc = &BUB_30143370385_rpcs,
    .native_currency = .{
        .name = "BUBU",
        .symbol = "BUB",
        .decimals = 18,
    },
    .info_url = "https://buburuza.com",
    .explorers = &BUB_30143370385_explorers,
};

pub const sobya_357812033857_rpcs = [_][]const u8{
    "https://sobya-evm-rpc.nodesafe-app.xyz",
};

pub const sobya_357812033857_explorers = [_]Explorer{
    .{
        .name = "SOBYA Explorer",
        .url = "https://explorer.nodesafe-app.xyz/sobya",
    },
};

pub const sobya_357812033857 = Chain{
    .name = "SOBYA Mainnet",
    .chain = "SOBYA",
    .chain_id = 357812033857,
    .network_id = 357812033857,
    .short_name = "sobya",
    .rpc = &sobya_357812033857_rpcs,
    .native_currency = .{
        .name = "SOBYA",
        .symbol = "SOBY",
        .decimals = 18,
    },
    .info_url = "https://github.com/snforem-cpu/sobya-chain",
    .explorers = &sobya_357812033857_explorers,
};

pub const gxy_420420420420_rpcs = [_][]const u8{
    "https://archive.galaxychain.co",
};

pub const gxy_420420420420_explorers = [_]Explorer{
    .{
        .name = "blockscout",
        .url = "https://scan.galaxychain.co",
    },
};

pub const gxy_420420420420 = Chain{
    .name = "Galaxy Chain",
    .chain = "GALAXY",
    .chain_id = 420420420420,
    .network_id = 420420420420,
    .short_name = "gxy",
    .rpc = &gxy_420420420420_rpcs,
    .native_currency = .{
        .name = "Star",
        .symbol = "STAR",
        .decimals = 18,
    },
    .info_url = "https://galaxychain.co",
    .explorers = &gxy_420420420420_explorers,
};

pub const strato_123354377739506_rpcs = [_][]const u8{
    "https://noderpc.strato.nexus/rpc",
};

pub const strato_123354377739506_explorers = [_]Explorer{
    .{
        .name = "Strato Explorer",
        .url = "https://stratoscan.strato.nexus/",
    },
};

pub const strato_123354377739506 = Chain{
    .name = "Strato",
    .chain = "Strato",
    .chain_id = 123354377739506,
    .network_id = 123354377739506,
    .short_name = "strato",
    .rpc = &strato_123354377739506_rpcs,
    .native_currency = .{
        .name = "Strato USDST",
        .symbol = "USDST",
        .decimals = 18,
    },
    .info_url = "https://strato.nexus/",
    .explorers = &strato_123354377739506_explorers,
};

pub const CHAIN_ID_STABLE_2201 = CHAIN_ID_STABLE_TESTNET_2201;
pub const stable_2201 = stable_testnet_2201;
pub const stable_2201_rpcs = stable_testnet_2201_rpcs;
pub const stable_2201_explorers = stable_testnet_2201_explorers;

pub const CHAIN_ID_PCN_7890 = CHAIN_ID_PC_7890;
pub const pcn_7890 = pc_7890;
pub const pcn_7890_rpcs = pc_7890_rpcs;
pub const pcn_7890_explorers = pc_7890_explorers;

pub const CHAIN_ID_TCROSS_612044 = CHAIN_ID_TONE_612044;
pub const tcross_612044 = tone_612044;
pub const tcross_612044_rpcs = tone_612044_rpcs;
pub const tcross_612044_explorers = tone_612044_explorers;

pub const CHAIN_ID_CROSS_612055 = CHAIN_ID_ONE_612055;
pub const cross_612055 = one_612055;
pub const cross_612055_rpcs = one_612055_rpcs;
pub const cross_612055_explorers = one_612055_explorers;

pub const CHAIN_ID_SOPHON_TESTNET_531050204 = CHAIN_ID_SOPHON_OS_TESTNET_531050204;
pub const sophon_testnet_531050204 = sophon_os_testnet_531050204;
pub const sophon_testnet_531050204_rpcs = sophon_os_testnet_531050204_rpcs;
pub const sophon_testnet_531050204_explorers = sophon_os_testnet_531050204_explorers;

pub const all_chains = [_]Chain{
    quai_9,
    flr_14,
    plato_53,
    plato_62,
    amzg_65,
    plato_71,
    shibariumecosystem_109,
    monad_143,
    jito149_149,
    Farm_165,
    nomina_166,
    watr_mainnet_192,
    vc_testnet_206,
    vc_207,
    iopn_222,
    tacchain_239,
    orbinum_270,
    drby_275,
    netx_287,
    hsp_292_292,
    goliath_327,
    virbicoin_329,
    bourse_343,
    kss_347,
    dnc_362,
    lnr_389,
    actumic_402,
    d_testnet_430,
    d_mainnet_433,
    areum_463,
    campmainnet_484,
    lcai_504,
    doto_505,
    btb_509,
    syndicate_510,
    fyro_511,
    mawari_576,
    capy_586,
    netx_testnet_587,
    battlechain_testnet_627,
    bot_677,
    jasmy_681,
    uniocean_684,
    lxon_724,
    capx_testnet_756,
    capx_757,
    qrdx_762,
    qelt_770,
    qelt_testnet_771,
    ritual_784,
    binaryholdings_mainnet_836,
    AMN_870,
    mars_890,
    wbtc_892,
    fene_920,
    zel_935,
    iopn_984,
    stable_988,
    hyper_evm_999,
    nura_1020,
    bdag_1043,
    anta_1082,
    Xenea_1096,
    realchain_1098,
    grx_1110,
    ecm_1124,
    taker_1125,
    qry_1129,
    ion_1143,
    intuition_mainnet_1155,
    joa_1191,
    bmc_1199,
    fitochain_1233,
    onn_1330,
    bie_1342,
    midx_1394,
    bdag_1404,
    vfl_1408,
    tvfl_1409,
    lrx_1410,
    injective_testnet_1439,
    cmxr_1475,
    roonchain_1492,
    midl_1500,
    dolphinet_testnet_1519,
    dolphinet_1520,
    mawari_1576,
    nvnm_evm_1611,
    TREX_1628,
    xgr_1643,
    pharos_1672,
    OBS_1719,
    injective_1776,
    ruby_testnet_1810,
    WCH_Sepolia_1874,
    xgrt_1879,
    recr_1888,
    epix_1916,
    turkchain_1919,
    tpc_1925,
    egold_1932,
    tokb_1952,
    QIEV3_1990,
    dna_1991,
    ronin_2020,
    erol_2027,
    arma_testnet_2028,
    fst_2034,
    ntx_2070,
    realchaintest_2098,
    IBVM_2105,
    IBVMT_2107,
    parallax_2110,
    autheo_2127,
    memento_testnet_2129,
    morphtachyon_2184,
    stable_testnet_2201,
    moca_2288,
    besc_2372,
    t_haus_2443,
    ccc_2500,
    svp_testnet_2517,
    svp_2518,
    anubi_2526,
    h2_2582,
    kto_2643,
    spld_2691,
    spldt_2692,
    orbinum_2700,
    claw_world_box_2721,
    creator_chain_mainnet_2787,
    aere_2800,
    alpen_2892,
    morph_2910,
    bgg_3005,
    aic_3018,
    svm_3109,
    alpha_3111,
    BKC_3188,
    qbc_3303,
    vora_3318,
    aet_3355,
    tjr_3377,
    bytechaintest_3399,
    amx_3535,
    Trustgreen_3567,
    AiFi_3600,
    inri_3777,
    haust_network_3864,
    NEX_3945,
    nex_3946,
    gan_4048,
    ecna_4111,
    tecna_4112,
    citrea_4114,
    rise_4153,
    sx_mainnet_4162,
    tempo_presto_4217,
    genlayer_testnets_4221,
    hashfire_4227,
    tpix_4289,
    megaeth_4326,
    liteforge_4441,
    den_testnet_4442,
    oxin_4457,
    SC_4509,
    gtbs_4599,
    hsp_4611_4611,
    hsp_4612_4612,
    robinhoodchain_4663,
    BSURE_4848,
    prodao_4936,
    MATRIX_4959,
    hypr_testnet_4978,
    Somnia_5031,
    arc_5042,
    fusionlayer_5070,
    ANC_5108,
    mocat_5151,
    sbtc_5200,
    YeYing_5432,
    taaqo_5566,
    treasurenet_5570,
    msc_5577,
    evo_nova_5641,
    tburn_5800,
    shib_5816,
    dukong_5887,
    tea_6122,
    bmz_6162,
    BMZ_6163,
    bmz_6165,
    dual_6301,
    lrb_6359,
    ynxtest_6423,
    awaji_6497,
    mizuhiki_6498,
    kalis_6533,
    oma_mainnet_6623,
    anubi_6714,
    vex_6736,
    lust_6923,
    Growfitter_mainnet_7084,
    srx_7119,
    srx_testnet_7120,
    vrcn_7131,
    vyre_testnet_7357,
    cmxr_l2_7373,
    libertas_7474,
    carrchain_7667,
    tjr_testnet_7733,
    embr_7773,
    PandaSea_mainnet_7776,
    ptb_7820,
    hyve_7847,
    pc_7890,
    univex_7932,
    bmn_8006,
    lerax_8125,
    alpen_8150,
    svm_testnet_8163,
    lcai_t_8200,
    forknet_8338,
    bry_8379,
    ACN_8700,
    ebc_8721,
    ward_8765,
    TICS_9030,
    xyb_testnet_9194,
    lcai_9200,
    zel_9350,
    kub_9601,
    plasma_9745,
    plasma_testnet_9746,
    plasma_devnet_9747,
    timp_9818,
    imp_9819,
    bytechain_9933,
    brevis_network_9973,
    ethw_10001,
    GateLayer_10088,
    ozone_10120,
    ozone_10121,
    mova_10323,
    limonata_testnet_10777,
    gleec_11169,
    eth_11417,
    nkm_11941,
    kudora_12000,
    moc_12026,
    l2p_12216,
    amax_12248,
    ctcchain_12301,
    ctcchain_12302,
    ela_12343,
    CLY_12369,
    brick_12786,
    liberland_testnet_12865,
    rntx_13113,
    BKC_13188,
    mee_13390,
    bridgeless_13441,
    intuition_testnet_13579,
    btz_14204,
    sonic_testnet_14601,
    quait_15000,
    midl_testnet_15001,
    infra_testnet_15324,
    bimbo_15497,
    nrxn_15526,
    holo_15675,
    holo_testnet_15676,
    _0g_galileo_16601,
    _0g_16661,
    botcy_16963,
    dmd_17771,
    trecr_18882,
    yuuchain_19001,
    igra_caravel_testnet_19416,
    stc_testnet_19517,
    stc_mainnet_19518,
    mon_19901,
    entropy_19911,
    atrnxos_19966,
    sup_19998,
    mandala_20010,
    mandala_testnet_20011,
    agls_20033,
    nch_20250,
    alpen_20310,
    efik_20488,
    fluent_testnet_20994,
    flashnet_21021,
    flashnet_testnet_21022,
    autheo_testnet_21270,
    apchain_21970,
    cles_22225,
    incentiv_24101,
    agentscoin_24368,
    fluent_25363,
    h2lambda_25821,
    tcent_28802,
    alpen_29032,
    taic_30181,
    Ethiq_30303,
    trxc_30485,
    dawn_mainnet_30715,
    zksync_prividium_mainnet_30716,
    bvm20_31338,
    paix_32380,
    zil_32769,
    ecx_32904,
    zero_beacon_33000,
    zero_system_33001,
    zero_interop_33002,
    zero_atlas_33003,
    zero_private_33004,
    zil_testnet_33101,
    ecx_testnet_33160,
    qom_33303,
    zq2_devnet_33469,
    morphtachyon_testnet_34952,
    trct_35935,
    tc_36000,
    abcore_36888,
    weichain_37771,
    igra_38833,
    igra_testnet_38836,
    cin_39500,
    salt_40204,
    rootVX_41295,
    nesa_41444,
    edu_chain_41923,
    tempo_moderato_42431,
    zero_beacon_testnet_43000,
    zero_system_testnet_43001,
    zero_interop_testnet_43002,
    zero_atlas_testnet_43003,
    zero_private_testnet_43004,
    ric_test_45578,
    robinhoodchaintestnet_46630,
    txcl_47294,
    bitbadges_50024,
    bitbadges_testnet_50025,
    SomniaTestnet_50312,
    risa_51014,
    memento_mainnet_51888,
    lazai_52924,
    datahaven_55930,
    datahaven_55931,
    zktanenbaum_57057,
    mev_commit_57173,
    jello_61564,
    mova_61900,
    apollo_62606,
    veri5_63868,
    gald_64137,
    omachain_testnet_66238,
    nxpc_68414,
    eto_69670,
    pyra_70003,
    seven_70007,
    eki_70101,
    cx_testnet_70707,
    wcn_testnet_71117,
    RLS_72957,
    seleman_73571,
    carrchain_76672,
    ventures_77717,
    bsos_77888,
    bradi_78168,
    pexli_testnet_78901,
    hpx_80808,
    onyx_80888,
    codex_81224,
    steemvm_81630,
    ticko_84256,
    ticko_testnet_84257,
    plus_88088,
    ptek_88788,
    qtschain_88868,
    chiliz_88888,
    valuex_90000,
    apaw_90025,
    watr_testnet_92870,
    pepu_97741,
    GOGO_99001,
    MC_99002,
    trct_99566,
    elysium_testnet_99801,
    elysium_99901,
    qsn_99991,
    ctc_102030,
    ctctest_102031,
    ctcdev_102032,
    mtf_114514,
    swss_122605,
    ids_123999,
    mitosis_124816,
    grav_127001,
    etls_127823,
    fuel_sepolia_129514,
    rphx_130526,
    aria_134235,
    midxt_139420,
    bexchain_140586,
    kasplex_167012,
    wcn_171717,
    lit_175200,
    dpn_179205,
    hpp_sepolia_181228,
    gomchain_mainnet_190278,
    hpp_mainnet_190415,
    r0ar_193939,
    eadx_198724,
    nos_200024,
    fsc_201022,
    dfn_202110,
    SVS_202308,
    Propulence_testnet_202500,
    aurext_202506,
    kasplex_202555,
    ju_202599,
    ronin_saigon_202601,
    miama_202610,
    juchain_210000,
    klt_220312,
    sivz_mainnet_222345,
    mocat_222888,
    ares_232425,
    CodeNekt_mainnet_235235,
    ulalo_mainnet_237007,
    sin_250225,
    kub_259251,
    datachain_271828,
    mbtx_271831,
    mbtxl2_271832,
    creator_chain_testnet_278701,
    valuechain_286623,
    pmt_290290,
    t1_299792,
    t1t_299892,
    axion_303030,
    vcr_314169,
    DComm_mainnet_326663,
    lax_333222,
    den_mainnet_369369,
    teqoin_420377,
    infinite_421018,
    mtx_478549,
    btcwchain_482120,
    commons_510003,
    alpha_511111,
    tone_612044,
    one_612055,
    galactica_613419,
    tgald_641371,
    mdx_648529,
    edu_chain_testnet_656476,
    aztec_677868,
    pharos_testnet_688688,
    pharos_atlantic_688689,
    marschain_704851,
    marschain_testnet_704852,
    drama_710520,
    prana_712217,
    zbx_728990,
    cx_737373,
    toog_777001,
    MakaChain_mainnet_777178,
    flxg_778400,
    ust_778889,
    nvnm_chain_devnet_787222,
    nvnm_chain_testnet_787223,
    spaceos_testnet_800000,
    zug_824642,
    bini_837291,
    hypercluster_838838,
    galactica_testnet_843843,
    haqq_testethiq_853211,
    wrg_882026,
    zenith_evm_testnet_936485,
    primox_970803,
    qantera_974621,
    brevis_provernet_testnet_999983,
    xo_1000101,
    wirex_testnet_1001996,
    roonchain_1314520,
    xrplevm_1440000,
    vxs_testnet_1618032,
    duck_2026001,
    cashcat_2274228,
    prv_testnet_2718281,
    arc_testnet_5042002,
    ethereal_5064014,
    loot_5151706,
    WIND_5552020,
    dogeos_chikyu_6281971,
    jmdt_7000700,
    nvm_7575757,
    dogita_7770777,
    gravity_testnet_7771625,
    vpc_8678671,
    daventre_8770570,
    cc_testnet_11111110,
    cc_11111111,
    cwn_testnet_11111327,
    celo_sep_11142220,
    rise_testnet_11155931,
    r0art_11166111,
    winmar_12142816,
    roonchain_13145201,
    ethereal_testnet_0_13374202,
    hp_13600000,
    sis_13863860,
    bleno_15112026,
    tips_19251925,
    ma_20260131,
    gridmindt_20260532,
    cook_20261001,
    zagros_21072026,
    tjr_devnet_21519080,
    nowa_testnet_22052010,
    pecu_27272727,
    gbdo_38391207,
    tensora_44444444,
    unp_47382916,
    elyon_55452773,
    aut_65000000,
    aut_bakerloo_65010004,
    sovra_65536001,
    kryvora_73829164,
    sx_toronto_79479957,
    base_vibenet_84538453,
    shinzo_testnet_91273001,
    prsm_101001000,
    istchain_mainnet_286022981,
    dnachain_mainnet_287022981,
    slcchain_mainnet_288022981,
    pas_420420417,
    ksm_420420418,
    dot_420420419,
    infinite_testnet_421018001,
    sophon_os_testnet_531050204,
    zen_845320009,
    mirasmanda_1213549903,
    mirasmanda_uat_1215655279,
    itani_1229800785,
    omega_1313161916,
    rari_1380012617,
    lumia_beam_testnet_2030232745,
    edent_3735928814,
    fco_11111111111,
    BUB_30143370385,
    sobya_357812033857,
    gxy_420420420420,
    strato_123354377739506,
};

pub fn getChainById(chain_id: u64) ?Chain {
    var low: usize = 0;
    var high: usize = all_chains.len;
    while (low < high) {
        const middle = low + (high - low) / 2;
        const chain = all_chains[middle];
        if (chain.chain_id == chain_id) return chain;
        if (chain.chain_id < chain_id) {
            low = middle + 1;
        } else {
            high = middle;
        }
    }
    return null;
}
