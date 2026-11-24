// This file is auto-generated from DefiLlama/chainlist
// Do not edit manually - run `bun run generate` to regenerate

export interface NativeCurrency {
  name: string;
  symbol: string;
  decimals: number;
  [key: string]: any;
}

export interface Explorer {
  name: string;
  url: string;
  standard?: string;
  [key: string]: any;
}

export interface Chain {
  name: string;
  chain: string;
  chainId: number;
  networkId?: number;
  shortName: string;
  rpc: string[];
  nativeCurrency: NativeCurrency;
  infoURL?: string;
  explorers?: Explorer[];
  [key: string]: any;
}

// Chain IDs
export const CHAIN_ID_QUAI9 = 9;
export const CHAIN_ID_FLR14 = 14;
export const CHAIN_ID_PLATO53 = 53;
export const CHAIN_ID_PLATO62 = 62;
export const CHAIN_ID_AMZG65 = 65;
export const CHAIN_ID_PLATO71 = 71;
export const CHAIN_ID_SHIBARIUMECOSYSTEM109 = 109;
export const CHAIN_ID_MONAD143 = 143;
export const CHAIN_ID_JITO149149 = 149;
export const CHAIN_ID_FARM165 = 165;
export const CHAIN_ID_NOMINA166 = 166;
export const CHAIN_ID_WATR_MAINNET192 = 192;
export const CHAIN_ID_VC_TESTNET206 = 206;
export const CHAIN_ID_VC207 = 207;
export const CHAIN_ID_IOPN222 = 222;
export const CHAIN_ID_TACCHAIN239 = 239;
export const CHAIN_ID_ORBINUM270 = 270;
export const CHAIN_ID_DRBY275 = 275;
export const CHAIN_ID_NETX287 = 287;
export const CHAIN_ID_HSP292292 = 292;
export const CHAIN_ID_GOLIATH327 = 327;
export const CHAIN_ID_VIRBICOIN329 = 329;
export const CHAIN_ID_BOURSE343 = 343;
export const CHAIN_ID_KSS347 = 347;
export const CHAIN_ID_DNC362 = 362;
export const CHAIN_ID_LNR389 = 389;
export const CHAIN_ID_ACTUMIC402 = 402;
export const CHAIN_ID_D_TESTNET430 = 430;
export const CHAIN_ID_D_MAINNET433 = 433;
export const CHAIN_ID_AREUM463 = 463;
export const CHAIN_ID_CAMPMAINNET484 = 484;
export const CHAIN_ID_LCAI504 = 504;
export const CHAIN_ID_DOTO505 = 505;
export const CHAIN_ID_BTB509 = 509;
export const CHAIN_ID_SYNDICATE510 = 510;
export const CHAIN_ID_FYRO511 = 511;
export const CHAIN_ID_MAWARI576 = 576;
export const CHAIN_ID_CAPY586 = 586;
export const CHAIN_ID_NETX_TESTNET587 = 587;
export const CHAIN_ID_BATTLECHAIN_TESTNET627 = 627;
export const CHAIN_ID_BOT677 = 677;
export const CHAIN_ID_JASMY681 = 681;
export const CHAIN_ID_UNIOCEAN684 = 684;
export const CHAIN_ID_LXON724 = 724;
export const CHAIN_ID_CAPX_TESTNET756 = 756;
export const CHAIN_ID_CAPX757 = 757;
export const CHAIN_ID_QRDX762 = 762;
export const CHAIN_ID_QELT770 = 770;
export const CHAIN_ID_QELT_TESTNET771 = 771;
export const CHAIN_ID_RITUAL784 = 784;
export const CHAIN_ID_BINARYHOLDINGS_MAINNET836 = 836;
export const CHAIN_ID_A_M_N870 = 870;
export const CHAIN_ID_MARS890 = 890;
export const CHAIN_ID_WBTC892 = 892;
export const CHAIN_ID_FENE920 = 920;
export const CHAIN_ID_ZEL935 = 935;
export const CHAIN_ID_IOPN984 = 984;
export const CHAIN_ID_STABLE988 = 988;
export const CHAIN_ID_HYPER_EVM999 = 999;
export const CHAIN_ID_NURA1020 = 1020;
export const CHAIN_ID_BDAG1043 = 1043;
export const CHAIN_ID_ANTA1082 = 1082;
export const CHAIN_ID_XENEA1096 = 1096;
export const CHAIN_ID_REALCHAIN1098 = 1098;
export const CHAIN_ID_GRX1110 = 1110;
export const CHAIN_ID_ECM1124 = 1124;
export const CHAIN_ID_TAKER1125 = 1125;
export const CHAIN_ID_QRY1129 = 1129;
export const CHAIN_ID_ION1143 = 1143;
export const CHAIN_ID_INTUITION_MAINNET1155 = 1155;
export const CHAIN_ID_JOA1191 = 1191;
export const CHAIN_ID_BMC1199 = 1199;
export const CHAIN_ID_FITOCHAIN1233 = 1233;
export const CHAIN_ID_ONN1330 = 1330;
export const CHAIN_ID_BIE1342 = 1342;
export const CHAIN_ID_MIDX1394 = 1394;
export const CHAIN_ID_BDAG1404 = 1404;
export const CHAIN_ID_VFL1408 = 1408;
export const CHAIN_ID_TVFL1409 = 1409;
export const CHAIN_ID_LRX1410 = 1410;
export const CHAIN_ID_INJECTIVE_TESTNET1439 = 1439;
export const CHAIN_ID_CMXR1475 = 1475;
export const CHAIN_ID_ROONCHAIN1492 = 1492;
export const CHAIN_ID_MIDL1500 = 1500;
export const CHAIN_ID_DOLPHINET_TESTNET1519 = 1519;
export const CHAIN_ID_DOLPHINET1520 = 1520;
export const CHAIN_ID_MAWARI1576 = 1576;
export const CHAIN_ID_NVNM_EVM1611 = 1611;
export const CHAIN_ID_T_R_E_X1628 = 1628;
export const CHAIN_ID_XGR1643 = 1643;
export const CHAIN_ID_PHAROS1672 = 1672;
export const CHAIN_ID_O_B_S1719 = 1719;
export const CHAIN_ID_INJECTIVE1776 = 1776;
export const CHAIN_ID_RUBY_TESTNET1810 = 1810;
export const CHAIN_ID_W_C_H_SEPOLIA1874 = 1874;
export const CHAIN_ID_XGRT1879 = 1879;
export const CHAIN_ID_RECR1888 = 1888;
export const CHAIN_ID_EPIX1916 = 1916;
export const CHAIN_ID_TURKCHAIN1919 = 1919;
export const CHAIN_ID_TPC1925 = 1925;
export const CHAIN_ID_EGOLD1932 = 1932;
export const CHAIN_ID_TOKB1952 = 1952;
export const CHAIN_ID_Q_I_E_V31990 = 1990;
export const CHAIN_ID_DNA1991 = 1991;
export const CHAIN_ID_RONIN2020 = 2020;
export const CHAIN_ID_EROL2027 = 2027;
export const CHAIN_ID_ARMA_TESTNET2028 = 2028;
export const CHAIN_ID_FST2034 = 2034;
export const CHAIN_ID_NTX2070 = 2070;
export const CHAIN_ID_REALCHAINTEST2098 = 2098;
export const CHAIN_ID_I_B_V_M2105 = 2105;
export const CHAIN_ID_I_B_V_M_T2107 = 2107;
export const CHAIN_ID_PARALLAX2110 = 2110;
export const CHAIN_ID_AUTHEO2127 = 2127;
export const CHAIN_ID_MEMENTO_TESTNET2129 = 2129;
export const CHAIN_ID_MORPHTACHYON2184 = 2184;
export const CHAIN_ID_STABLE_TESTNET2201 = 2201;
export const CHAIN_ID_MOCA2288 = 2288;
export const CHAIN_ID_BESC2372 = 2372;
export const CHAIN_ID_T_HAUS2443 = 2443;
export const CHAIN_ID_CCC2500 = 2500;
export const CHAIN_ID_SVP_TESTNET2517 = 2517;
export const CHAIN_ID_SVP2518 = 2518;
export const CHAIN_ID_ANUBI2526 = 2526;
export const CHAIN_ID_H22582 = 2582;
export const CHAIN_ID_KTO2643 = 2643;
export const CHAIN_ID_SPLD2691 = 2691;
export const CHAIN_ID_SPLDT2692 = 2692;
export const CHAIN_ID_ORBINUM2700 = 2700;
export const CHAIN_ID_CLAW_WORLD_BOX2721 = 2721;
export const CHAIN_ID_CREATOR_CHAIN_MAINNET2787 = 2787;
export const CHAIN_ID_AERE2800 = 2800;
export const CHAIN_ID_ALPEN2892 = 2892;
export const CHAIN_ID_MORPH2910 = 2910;
export const CHAIN_ID_BGG3005 = 3005;
export const CHAIN_ID_AIC3018 = 3018;
export const CHAIN_ID_SVM3109 = 3109;
export const CHAIN_ID_ALPHA3111 = 3111;
export const CHAIN_ID_B_K_C3188 = 3188;
export const CHAIN_ID_QBC3303 = 3303;
export const CHAIN_ID_VORA3318 = 3318;
export const CHAIN_ID_AET3355 = 3355;
export const CHAIN_ID_TJR3377 = 3377;
export const CHAIN_ID_BYTECHAINTEST3399 = 3399;
export const CHAIN_ID_AMX3535 = 3535;
export const CHAIN_ID_TRUSTGREEN3567 = 3567;
export const CHAIN_ID_AI_FI3600 = 3600;
export const CHAIN_ID_INRI3777 = 3777;
export const CHAIN_ID_HAUST_NETWORK3864 = 3864;
export const CHAIN_ID_N_E_X3945 = 3945;
export const CHAIN_ID_NEX3946 = 3946;
export const CHAIN_ID_GAN4048 = 4048;
export const CHAIN_ID_ECNA4111 = 4111;
export const CHAIN_ID_TECNA4112 = 4112;
export const CHAIN_ID_CITREA4114 = 4114;
export const CHAIN_ID_RISE4153 = 4153;
export const CHAIN_ID_SX_MAINNET4162 = 4162;
export const CHAIN_ID_TEMPO_PRESTO4217 = 4217;
export const CHAIN_ID_GENLAYER_TESTNETS4221 = 4221;
export const CHAIN_ID_HASHFIRE4227 = 4227;
export const CHAIN_ID_TPIX4289 = 4289;
export const CHAIN_ID_MEGAETH4326 = 4326;
export const CHAIN_ID_LITEFORGE4441 = 4441;
export const CHAIN_ID_DEN_TESTNET4442 = 4442;
export const CHAIN_ID_OXIN4457 = 4457;
export const CHAIN_ID_S_C4509 = 4509;
export const CHAIN_ID_GTBS4599 = 4599;
export const CHAIN_ID_HSP46114611 = 4611;
export const CHAIN_ID_HSP46124612 = 4612;
export const CHAIN_ID_ROBINHOODCHAIN4663 = 4663;
export const CHAIN_ID_B_S_U_R_E4848 = 4848;
export const CHAIN_ID_PRODAO4936 = 4936;
export const CHAIN_ID_M_A_T_R_I_X4959 = 4959;
export const CHAIN_ID_HYPR_TESTNET4978 = 4978;
export const CHAIN_ID_SOMNIA5031 = 5031;
export const CHAIN_ID_ARC5042 = 5042;
export const CHAIN_ID_FUSIONLAYER5070 = 5070;
export const CHAIN_ID_A_N_C5108 = 5108;
export const CHAIN_ID_MOCAT5151 = 5151;
export const CHAIN_ID_SBTC5200 = 5200;
export const CHAIN_ID_YE_YING5432 = 5432;
export const CHAIN_ID_TAAQO5566 = 5566;
export const CHAIN_ID_TREASURENET5570 = 5570;
export const CHAIN_ID_MSC5577 = 5577;
export const CHAIN_ID_EVO_NOVA5641 = 5641;
export const CHAIN_ID_TBURN5800 = 5800;
export const CHAIN_ID_SHIB5816 = 5816;
export const CHAIN_ID_DUKONG5887 = 5887;
export const CHAIN_ID_TEA6122 = 6122;
export const CHAIN_ID_BMZ6162 = 6162;
export const CHAIN_ID_B_M_Z6163 = 6163;
export const CHAIN_ID_BMZ6165 = 6165;
export const CHAIN_ID_DUAL6301 = 6301;
export const CHAIN_ID_LRB6359 = 6359;
export const CHAIN_ID_YNXTEST6423 = 6423;
export const CHAIN_ID_AWAJI6497 = 6497;
export const CHAIN_ID_MIZUHIKI6498 = 6498;
export const CHAIN_ID_KALIS6533 = 6533;
export const CHAIN_ID_OMA_MAINNET6623 = 6623;
export const CHAIN_ID_ANUBI6714 = 6714;
export const CHAIN_ID_VEX6736 = 6736;
export const CHAIN_ID_LUST6923 = 6923;
export const CHAIN_ID_GROWFITTER_MAINNET7084 = 7084;
export const CHAIN_ID_SRX7119 = 7119;
export const CHAIN_ID_SRX_TESTNET7120 = 7120;
export const CHAIN_ID_VRCN7131 = 7131;
export const CHAIN_ID_VYRE_TESTNET7357 = 7357;
export const CHAIN_ID_CMXR_L27373 = 7373;
export const CHAIN_ID_LIBERTAS7474 = 7474;
export const CHAIN_ID_CARRCHAIN7667 = 7667;
export const CHAIN_ID_TJR_TESTNET7733 = 7733;
export const CHAIN_ID_EMBR7773 = 7773;
export const CHAIN_ID_PANDA_SEA_MAINNET7776 = 7776;
export const CHAIN_ID_PTB7820 = 7820;
export const CHAIN_ID_HYVE7847 = 7847;
export const CHAIN_ID_PC7890 = 7890;
export const CHAIN_ID_UNIVEX7932 = 7932;
export const CHAIN_ID_BMN8006 = 8006;
export const CHAIN_ID_LERAX8125 = 8125;
export const CHAIN_ID_ALPEN8150 = 8150;
export const CHAIN_ID_SVM_TESTNET8163 = 8163;
export const CHAIN_ID_LCAI_T8200 = 8200;
export const CHAIN_ID_FORKNET8338 = 8338;
export const CHAIN_ID_BRY8379 = 8379;
export const CHAIN_ID_A_C_N8700 = 8700;
export const CHAIN_ID_EBC8721 = 8721;
export const CHAIN_ID_WARD8765 = 8765;
export const CHAIN_ID_T_I_C_S9030 = 9030;
export const CHAIN_ID_XYB_TESTNET9194 = 9194;
export const CHAIN_ID_LCAI9200 = 9200;
export const CHAIN_ID_ZEL9350 = 9350;
export const CHAIN_ID_KUB9601 = 9601;
export const CHAIN_ID_PLASMA9745 = 9745;
export const CHAIN_ID_PLASMA_TESTNET9746 = 9746;
export const CHAIN_ID_PLASMA_DEVNET9747 = 9747;
export const CHAIN_ID_TIMP9818 = 9818;
export const CHAIN_ID_IMP9819 = 9819;
export const CHAIN_ID_BYTECHAIN9933 = 9933;
export const CHAIN_ID_BREVIS_NETWORK9973 = 9973;
export const CHAIN_ID_ETHW10001 = 10001;
export const CHAIN_ID_GATE_LAYER10088 = 10088;
export const CHAIN_ID_OZONE10120 = 10120;
export const CHAIN_ID_OZONE10121 = 10121;
export const CHAIN_ID_MOVA10323 = 10323;
export const CHAIN_ID_LIMONATA_TESTNET10777 = 10777;
export const CHAIN_ID_GLEEC11169 = 11169;
export const CHAIN_ID_ETH11417 = 11417;
export const CHAIN_ID_NKM11941 = 11941;
export const CHAIN_ID_KUDORA12000 = 12000;
export const CHAIN_ID_MOC12026 = 12026;
export const CHAIN_ID_L2P12216 = 12216;
export const CHAIN_ID_AMAX12248 = 12248;
export const CHAIN_ID_CTCCHAIN12301 = 12301;
export const CHAIN_ID_CTCCHAIN12302 = 12302;
export const CHAIN_ID_ELA12343 = 12343;
export const CHAIN_ID_C_L_Y12369 = 12369;
export const CHAIN_ID_BRICK12786 = 12786;
export const CHAIN_ID_LIBERLAND_TESTNET12865 = 12865;
export const CHAIN_ID_RNTX13113 = 13113;
export const CHAIN_ID_B_K_C13188 = 13188;
export const CHAIN_ID_MEE13390 = 13390;
export const CHAIN_ID_BRIDGELESS13441 = 13441;
export const CHAIN_ID_INTUITION_TESTNET13579 = 13579;
export const CHAIN_ID_BTZ14204 = 14204;
export const CHAIN_ID_SONIC_TESTNET14601 = 14601;
export const CHAIN_ID_QUAIT15000 = 15000;
export const CHAIN_ID_MIDL_TESTNET15001 = 15001;
export const CHAIN_ID_INFRA_TESTNET15324 = 15324;
export const CHAIN_ID_BIMBO15497 = 15497;
export const CHAIN_ID_NRXN15526 = 15526;
export const CHAIN_ID_HOLO15675 = 15675;
export const CHAIN_ID_HOLO_TESTNET15676 = 15676;
export const CHAIN_ID_0G_GALILEO16601 = 16601;
export const CHAIN_ID_0G16661 = 16661;
export const CHAIN_ID_BOTCY16963 = 16963;
export const CHAIN_ID_DMD17771 = 17771;
export const CHAIN_ID_TRECR18882 = 18882;
export const CHAIN_ID_YUUCHAIN19001 = 19001;
export const CHAIN_ID_IGRA_CARAVEL_TESTNET19416 = 19416;
export const CHAIN_ID_STC_TESTNET19517 = 19517;
export const CHAIN_ID_STC_MAINNET19518 = 19518;
export const CHAIN_ID_MON19901 = 19901;
export const CHAIN_ID_ENTROPY19911 = 19911;
export const CHAIN_ID_ATRNXOS19966 = 19966;
export const CHAIN_ID_SUP19998 = 19998;
export const CHAIN_ID_MANDALA20010 = 20010;
export const CHAIN_ID_MANDALA_TESTNET20011 = 20011;
export const CHAIN_ID_AGLS20033 = 20033;
export const CHAIN_ID_NCH20250 = 20250;
export const CHAIN_ID_ALPEN20310 = 20310;
export const CHAIN_ID_EFIK20488 = 20488;
export const CHAIN_ID_FLUENT_TESTNET20994 = 20994;
export const CHAIN_ID_FLASHNET21021 = 21021;
export const CHAIN_ID_FLASHNET_TESTNET21022 = 21022;
export const CHAIN_ID_AUTHEO_TESTNET21270 = 21270;
export const CHAIN_ID_APCHAIN21970 = 21970;
export const CHAIN_ID_CLES22225 = 22225;
export const CHAIN_ID_INCENTIV24101 = 24101;
export const CHAIN_ID_AGENTSCOIN24368 = 24368;
export const CHAIN_ID_FLUENT25363 = 25363;
export const CHAIN_ID_H2LAMBDA25821 = 25821;
export const CHAIN_ID_TCENT28802 = 28802;
export const CHAIN_ID_ALPEN29032 = 29032;
export const CHAIN_ID_TAIC30181 = 30181;
export const CHAIN_ID_ETHIQ30303 = 30303;
export const CHAIN_ID_TRXC30485 = 30485;
export const CHAIN_ID_DAWN_MAINNET30715 = 30715;
export const CHAIN_ID_ZKSYNC_PRIVIDIUM_MAINNET30716 = 30716;
export const CHAIN_ID_BVM2031338 = 31338;
export const CHAIN_ID_PAIX32380 = 32380;
export const CHAIN_ID_ZIL32769 = 32769;
export const CHAIN_ID_ECX32904 = 32904;
export const CHAIN_ID_ZERO_BEACON33000 = 33000;
export const CHAIN_ID_ZERO_SYSTEM33001 = 33001;
export const CHAIN_ID_ZERO_INTEROP33002 = 33002;
export const CHAIN_ID_ZERO_ATLAS33003 = 33003;
export const CHAIN_ID_ZERO_PRIVATE33004 = 33004;
export const CHAIN_ID_ZIL_TESTNET33101 = 33101;
export const CHAIN_ID_ECX_TESTNET33160 = 33160;
export const CHAIN_ID_QOM33303 = 33303;
export const CHAIN_ID_ZQ2_DEVNET33469 = 33469;
export const CHAIN_ID_MORPHTACHYON_TESTNET34952 = 34952;
export const CHAIN_ID_TRCT35935 = 35935;
export const CHAIN_ID_TC36000 = 36000;
export const CHAIN_ID_ABCORE36888 = 36888;
export const CHAIN_ID_WEICHAIN37771 = 37771;
export const CHAIN_ID_IGRA38833 = 38833;
export const CHAIN_ID_IGRA_TESTNET38836 = 38836;
export const CHAIN_ID_CIN39500 = 39500;
export const CHAIN_ID_SALT40204 = 40204;
export const CHAIN_ID_ROOT_V_X41295 = 41295;
export const CHAIN_ID_NESA41444 = 41444;
export const CHAIN_ID_EDU_CHAIN41923 = 41923;
export const CHAIN_ID_TEMPO_MODERATO42431 = 42431;
export const CHAIN_ID_ZERO_BEACON_TESTNET43000 = 43000;
export const CHAIN_ID_ZERO_SYSTEM_TESTNET43001 = 43001;
export const CHAIN_ID_ZERO_INTEROP_TESTNET43002 = 43002;
export const CHAIN_ID_ZERO_ATLAS_TESTNET43003 = 43003;
export const CHAIN_ID_ZERO_PRIVATE_TESTNET43004 = 43004;
export const CHAIN_ID_RIC_TEST45578 = 45578;
export const CHAIN_ID_ROBINHOODCHAINTESTNET46630 = 46630;
export const CHAIN_ID_TXCL47294 = 47294;
export const CHAIN_ID_BITBADGES50024 = 50024;
export const CHAIN_ID_BITBADGES_TESTNET50025 = 50025;
export const CHAIN_ID_SOMNIA_TESTNET50312 = 50312;
export const CHAIN_ID_RISA51014 = 51014;
export const CHAIN_ID_MEMENTO_MAINNET51888 = 51888;
export const CHAIN_ID_LAZAI52924 = 52924;
export const CHAIN_ID_DATAHAVEN55930 = 55930;
export const CHAIN_ID_DATAHAVEN55931 = 55931;
export const CHAIN_ID_ZKTANENBAUM57057 = 57057;
export const CHAIN_ID_MEV_COMMIT57173 = 57173;
export const CHAIN_ID_JELLO61564 = 61564;
export const CHAIN_ID_MOVA61900 = 61900;
export const CHAIN_ID_APOLLO62606 = 62606;
export const CHAIN_ID_VERI563868 = 63868;
export const CHAIN_ID_GALD64137 = 64137;
export const CHAIN_ID_OMACHAIN_TESTNET66238 = 66238;
export const CHAIN_ID_NXPC68414 = 68414;
export const CHAIN_ID_ETO69670 = 69670;
export const CHAIN_ID_PYRA70003 = 70003;
export const CHAIN_ID_SEVEN70007 = 70007;
export const CHAIN_ID_EKI70101 = 70101;
export const CHAIN_ID_CX_TESTNET70707 = 70707;
export const CHAIN_ID_WCN_TESTNET71117 = 71117;
export const CHAIN_ID_R_L_S72957 = 72957;
export const CHAIN_ID_SELEMAN73571 = 73571;
export const CHAIN_ID_CARRCHAIN76672 = 76672;
export const CHAIN_ID_VENTURES77717 = 77717;
export const CHAIN_ID_BSOS77888 = 77888;
export const CHAIN_ID_BRADI78168 = 78168;
export const CHAIN_ID_PEXLI_TESTNET78901 = 78901;
export const CHAIN_ID_HPX80808 = 80808;
export const CHAIN_ID_ONYX80888 = 80888;
export const CHAIN_ID_CODEX81224 = 81224;
export const CHAIN_ID_STEEMVM81630 = 81630;
export const CHAIN_ID_TICKO84256 = 84256;
export const CHAIN_ID_TICKO_TESTNET84257 = 84257;
export const CHAIN_ID_PLUS88088 = 88088;
export const CHAIN_ID_PTEK88788 = 88788;
export const CHAIN_ID_QTSCHAIN88868 = 88868;
export const CHAIN_ID_CHILIZ88888 = 88888;
export const CHAIN_ID_VALUEX90000 = 90000;
export const CHAIN_ID_APAW90025 = 90025;
export const CHAIN_ID_WATR_TESTNET92870 = 92870;
export const CHAIN_ID_PEPU97741 = 97741;
export const CHAIN_ID_G_O_G_O99001 = 99001;
export const CHAIN_ID_M_C99002 = 99002;
export const CHAIN_ID_TRCT99566 = 99566;
export const CHAIN_ID_ELYSIUM_TESTNET99801 = 99801;
export const CHAIN_ID_ELYSIUM99901 = 99901;
export const CHAIN_ID_QSN99991 = 99991;
export const CHAIN_ID_CTC102030 = 102030;
export const CHAIN_ID_CTCTEST102031 = 102031;
export const CHAIN_ID_CTCDEV102032 = 102032;
export const CHAIN_ID_MTF114514 = 114514;
export const CHAIN_ID_SWSS122605 = 122605;
export const CHAIN_ID_IDS123999 = 123999;
export const CHAIN_ID_MITOSIS124816 = 124816;
export const CHAIN_ID_GRAV127001 = 127001;
export const CHAIN_ID_ETLS127823 = 127823;
export const CHAIN_ID_FUEL_SEPOLIA129514 = 129514;
export const CHAIN_ID_RPHX130526 = 130526;
export const CHAIN_ID_ARIA134235 = 134235;
export const CHAIN_ID_MIDXT139420 = 139420;
export const CHAIN_ID_BEXCHAIN140586 = 140586;
export const CHAIN_ID_KASPLEX167012 = 167012;
export const CHAIN_ID_WCN171717 = 171717;
export const CHAIN_ID_LIT175200 = 175200;
export const CHAIN_ID_DPN179205 = 179205;
export const CHAIN_ID_HPP_SEPOLIA181228 = 181228;
export const CHAIN_ID_GOMCHAIN_MAINNET190278 = 190278;
export const CHAIN_ID_HPP_MAINNET190415 = 190415;
export const CHAIN_ID_R0AR193939 = 193939;
export const CHAIN_ID_EADX198724 = 198724;
export const CHAIN_ID_NOS200024 = 200024;
export const CHAIN_ID_FSC201022 = 201022;
export const CHAIN_ID_DFN202110 = 202110;
export const CHAIN_ID_S_V_S202308 = 202308;
export const CHAIN_ID_PROPULENCE_TESTNET202500 = 202500;
export const CHAIN_ID_AUREXT202506 = 202506;
export const CHAIN_ID_KASPLEX202555 = 202555;
export const CHAIN_ID_JU202599 = 202599;
export const CHAIN_ID_RONIN_SAIGON202601 = 202601;
export const CHAIN_ID_MIAMA202610 = 202610;
export const CHAIN_ID_JUCHAIN210000 = 210000;
export const CHAIN_ID_KLT220312 = 220312;
export const CHAIN_ID_SIVZ_MAINNET222345 = 222345;
export const CHAIN_ID_MOCAT222888 = 222888;
export const CHAIN_ID_ARES232425 = 232425;
export const CHAIN_ID_CODE_NEKT_MAINNET235235 = 235235;
export const CHAIN_ID_ULALO_MAINNET237007 = 237007;
export const CHAIN_ID_SIN250225 = 250225;
export const CHAIN_ID_KUB259251 = 259251;
export const CHAIN_ID_DATACHAIN271828 = 271828;
export const CHAIN_ID_MBTX271831 = 271831;
export const CHAIN_ID_MBTXL2271832 = 271832;
export const CHAIN_ID_CREATOR_CHAIN_TESTNET278701 = 278701;
export const CHAIN_ID_VALUECHAIN286623 = 286623;
export const CHAIN_ID_PMT290290 = 290290;
export const CHAIN_ID_T1299792 = 299792;
export const CHAIN_ID_T1T299892 = 299892;
export const CHAIN_ID_AXION303030 = 303030;
export const CHAIN_ID_VCR314169 = 314169;
export const CHAIN_ID_D_COMM_MAINNET326663 = 326663;
export const CHAIN_ID_LAX333222 = 333222;
export const CHAIN_ID_DEN_MAINNET369369 = 369369;
export const CHAIN_ID_TEQOIN420377 = 420377;
export const CHAIN_ID_INFINITE421018 = 421018;
export const CHAIN_ID_MTX478549 = 478549;
export const CHAIN_ID_BTCWCHAIN482120 = 482120;
export const CHAIN_ID_COMMONS510003 = 510003;
export const CHAIN_ID_ALPHA511111 = 511111;
export const CHAIN_ID_TONE612044 = 612044;
export const CHAIN_ID_ONE612055 = 612055;
export const CHAIN_ID_GALACTICA613419 = 613419;
export const CHAIN_ID_TGALD641371 = 641371;
export const CHAIN_ID_MDX648529 = 648529;
export const CHAIN_ID_EDU_CHAIN_TESTNET656476 = 656476;
export const CHAIN_ID_AZTEC677868 = 677868;
export const CHAIN_ID_PHAROS_TESTNET688688 = 688688;
export const CHAIN_ID_PHAROS_ATLANTIC688689 = 688689;
export const CHAIN_ID_MARSCHAIN704851 = 704851;
export const CHAIN_ID_MARSCHAIN_TESTNET704852 = 704852;
export const CHAIN_ID_DRAMA710520 = 710520;
export const CHAIN_ID_PRANA712217 = 712217;
export const CHAIN_ID_ZBX728990 = 728990;
export const CHAIN_ID_CX737373 = 737373;
export const CHAIN_ID_TOOG777001 = 777001;
export const CHAIN_ID_MAKA_CHAIN_MAINNET777178 = 777178;
export const CHAIN_ID_FLXG778400 = 778400;
export const CHAIN_ID_UST778889 = 778889;
export const CHAIN_ID_NVNM_CHAIN_DEVNET787222 = 787222;
export const CHAIN_ID_NVNM_CHAIN_TESTNET787223 = 787223;
export const CHAIN_ID_SPACEOS_TESTNET800000 = 800000;
export const CHAIN_ID_ZUG824642 = 824642;
export const CHAIN_ID_BINI837291 = 837291;
export const CHAIN_ID_HYPERCLUSTER838838 = 838838;
export const CHAIN_ID_GALACTICA_TESTNET843843 = 843843;
export const CHAIN_ID_HAQQ_TESTETHIQ853211 = 853211;
export const CHAIN_ID_WRG882026 = 882026;
export const CHAIN_ID_ZENITH_EVM_TESTNET936485 = 936485;
export const CHAIN_ID_PRIMOX970803 = 970803;
export const CHAIN_ID_QANTERA974621 = 974621;
export const CHAIN_ID_BREVIS_PROVERNET_TESTNET999983 = 999983;
export const CHAIN_ID_XO1000101 = 1000101;
export const CHAIN_ID_WIREX_TESTNET1001996 = 1001996;
export const CHAIN_ID_ROONCHAIN1314520 = 1314520;
export const CHAIN_ID_XRPLEVM1440000 = 1440000;
export const CHAIN_ID_VXS_TESTNET1618032 = 1618032;
export const CHAIN_ID_DUCK2026001 = 2026001;
export const CHAIN_ID_CASHCAT2274228 = 2274228;
export const CHAIN_ID_PRV_TESTNET2718281 = 2718281;
export const CHAIN_ID_ARC_TESTNET5042002 = 5042002;
export const CHAIN_ID_ETHEREAL5064014 = 5064014;
export const CHAIN_ID_LOOT5151706 = 5151706;
export const CHAIN_ID_W_I_N_D5552020 = 5552020;
export const CHAIN_ID_DOGEOS_CHIKYU6281971 = 6281971;
export const CHAIN_ID_JMDT7000700 = 7000700;
export const CHAIN_ID_NVM7575757 = 7575757;
export const CHAIN_ID_DOGITA7770777 = 7770777;
export const CHAIN_ID_GRAVITY_TESTNET7771625 = 7771625;
export const CHAIN_ID_VPC8678671 = 8678671;
export const CHAIN_ID_DAVENTRE8770570 = 8770570;
export const CHAIN_ID_CC_TESTNET11111110 = 11111110;
export const CHAIN_ID_CC11111111 = 11111111;
export const CHAIN_ID_CWN_TESTNET11111327 = 11111327;
export const CHAIN_ID_CELO_SEP11142220 = 11142220;
export const CHAIN_ID_RISE_TESTNET11155931 = 11155931;
export const CHAIN_ID_R0ART11166111 = 11166111;
export const CHAIN_ID_WINMAR12142816 = 12142816;
export const CHAIN_ID_ROONCHAIN13145201 = 13145201;
export const CHAIN_ID_ETHEREAL_TESTNET013374202 = 13374202;
export const CHAIN_ID_HP13600000 = 13600000;
export const CHAIN_ID_SIS13863860 = 13863860;
export const CHAIN_ID_BLENO15112026 = 15112026;
export const CHAIN_ID_TIPS19251925 = 19251925;
export const CHAIN_ID_MA20260131 = 20260131;
export const CHAIN_ID_GRIDMINDT20260532 = 20260532;
export const CHAIN_ID_COOK20261001 = 20261001;
export const CHAIN_ID_ZAGROS21072026 = 21072026;
export const CHAIN_ID_TJR_DEVNET21519080 = 21519080;
export const CHAIN_ID_NOWA_TESTNET22052010 = 22052010;
export const CHAIN_ID_PECU27272727 = 27272727;
export const CHAIN_ID_GBDO38391207 = 38391207;
export const CHAIN_ID_TENSORA44444444 = 44444444;
export const CHAIN_ID_UNP47382916 = 47382916;
export const CHAIN_ID_ELYON55452773 = 55452773;
export const CHAIN_ID_AUT65000000 = 65000000;
export const CHAIN_ID_AUT_BAKERLOO65010004 = 65010004;
export const CHAIN_ID_SOVRA65536001 = 65536001;
export const CHAIN_ID_KRYVORA73829164 = 73829164;
export const CHAIN_ID_SX_TORONTO79479957 = 79479957;
export const CHAIN_ID_BASE_VIBENET84538453 = 84538453;
export const CHAIN_ID_SHINZO_TESTNET91273001 = 91273001;
export const CHAIN_ID_PRSM101001000 = 101001000;
export const CHAIN_ID_ISTCHAIN_MAINNET286022981 = 286022981;
export const CHAIN_ID_DNACHAIN_MAINNET287022981 = 287022981;
export const CHAIN_ID_SLCCHAIN_MAINNET288022981 = 288022981;
export const CHAIN_ID_PAS420420417 = 420420417;
export const CHAIN_ID_KSM420420418 = 420420418;
export const CHAIN_ID_DOT420420419 = 420420419;
export const CHAIN_ID_INFINITE_TESTNET421018001 = 421018001;
export const CHAIN_ID_SOPHON_OS_TESTNET531050204 = 531050204;
export const CHAIN_ID_ZEN845320009 = 845320009;
export const CHAIN_ID_MIRASMANDA1213549903 = 1213549903;
export const CHAIN_ID_MIRASMANDA_UAT1215655279 = 1215655279;
export const CHAIN_ID_ITANI1229800785 = 1229800785;
export const CHAIN_ID_OMEGA1313161916 = 1313161916;
export const CHAIN_ID_RARI1380012617 = 1380012617;
export const CHAIN_ID_LUMIA_BEAM_TESTNET2030232745 = 2030232745;
export const CHAIN_ID_EDENT3735928814 = 3735928814;
export const CHAIN_ID_FCO11111111111 = 11111111111;
export const CHAIN_ID_B_U_B30143370385 = 30143370385;
export const CHAIN_ID_SOBYA357812033857 = 357812033857;
export const CHAIN_ID_GXY420420420420 = 420420420420;
export const CHAIN_ID_STRATO123354377739506 = 123354377739506;

export const quai9: Chain = {
  "name": "Quai Mainnet",
  "chain": "QUAI",
  "rpc": [
    "https://rpc.quai.network/cyprus1"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Quai",
    "symbol": "QUAI",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://qu.ai",
  "shortName": "quai",
  "chainId": 9,
  "networkId": 9,
  "icon": "quai",
  "explorers": [
    {
      "name": "Quaiscan",
      "url": "https://quaiscan.io",
      "icon": "quaiscan",
      "standard": "EIP3091"
    }
  ]
};

export const flr14: Chain = {
  "name": "Flare Mainnet",
  "chain": "FLR",
  "icon": "flare",
  "rpc": [
    "https://flare-api.flare.network/ext/C/rpc",
    "https://flare.rpc.thirdweb.com",
    "https://flare-bundler.etherspot.io",
    "https://rpc.ankr.com/flare",
    "https://rpc.au.cc/flare",
    "https://flare.enosys.global/ext/C/rpc",
    "https://flare.solidifi.app/ext/C/rpc"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Flare",
    "symbol": "FLR",
    "decimals": 18
  },
  "infoURL": "https://flare.network",
  "shortName": "flr",
  "chainId": 14,
  "networkId": 14,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://flare-explorer.flare.network",
      "standard": "EIP3091"
    },
    {
      "name": "Routescan",
      "url": "https://mainnet.flarescan.com",
      "standard": "EIP3091"
    }
  ]
};

export const plato53: Chain = {
  "name": "Plato Mainnet",
  "chain": "Plato",
  "rpc": [
    "https://api-mainnet.plato.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Plato USDC",
    "symbol": "USDC",
    "decimals": 6
  },
  "shortName": "plato",
  "chainId": 53,
  "networkId": 53,
  "explorers": [
    {
      "name": "Plato Mainnet Explorer",
      "url": "https://app.plato.xyz/explorer"
    }
  ]
};

export const plato62: Chain = {
  "name": "Plato Testnet",
  "chain": "Plato",
  "rpc": [
    "https://api-testnet.plato.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Plato USDC",
    "symbol": "USDC",
    "decimals": 6
  },
  "shortName": "plato",
  "chainId": 62,
  "networkId": 62,
  "explorers": [
    {
      "name": "Plato Testnet Explorer",
      "url": "https://app.plato.xyz/explorer"
    }
  ]
};

export const amzg65: Chain = {
  "name": "Amazonic Blockchain",
  "chain": "AMZG",
  "rpc": [
    "https://rpc.amz1.com.br"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Amazonic Green",
    "symbol": "AMZG",
    "decimals": 18
  },
  "infoURL": "https://amazonicone.com.br",
  "shortName": "amzg",
  "chainId": 65,
  "networkId": 65,
  "icon": "https://amazonicone.com.br/wp-content/uploads/2025/10/800X800-1.png",
  "explorers": [
    {
      "name": "AMZ Scan",
      "url": "https://amzexplorer.com",
      "icon": "https://amazonicone.com.br/wp-content/uploads/2025/10/800X800-1.png",
      "standard": "EIP3091"
    }
  ]
};

export const plato71: Chain = {
  "name": "Plato Devnet",
  "chain": "Plato",
  "rpc": [
    "https://api-devnet.plato.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Plato USDC",
    "symbol": "USDC",
    "decimals": 6
  },
  "shortName": "plato",
  "chainId": 71,
  "networkId": 71,
  "explorers": [
    {
      "name": "Plato Devnet Explorer",
      "url": "https://dev.plato.xyz/explorer"
    }
  ]
};

export const shibariumecosystem109: Chain = {
  "name": "Shibarium",
  "chain": "Shibarium",
  "icon": "shibarium",
  "rpc": [
    "https://rpc.shibarium.shib.io",
    "https://rpc.shibrpc.com",
    "https://shib.nownodes.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BONE Shibarium",
    "symbol": "BONE",
    "decimals": 18
  },
  "infoURL": "https://shibariumecosystem.com",
  "shortName": "shibariumecosystem",
  "chainId": 109,
  "networkId": 109,
  "explorers": [
    {
      "name": "shibariumscan",
      "url": "https://shibariumscan.io",
      "standard": "none"
    }
  ]
};

export const monad143: Chain = {
  "name": "Monad",
  "chain": "MON",
  "icon": "monad",
  "rpc": [
    "https://rpc.monad.xyz",
    "https://rpc1.monad.xyz",
    "https://rpc2.monad.xyz",
    "https://rpc3.monad.xyz",
    "https://rpc4.monad.xyz",
    "https://rpc-mainnet.monadinfra.com",
    "https://monad.rpc.blxrbdn.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "nativeCurrency": {
    "name": "Monad",
    "symbol": "MON",
    "decimals": 18
  },
  "infoURL": "https://monad.xyz",
  "shortName": "monad",
  "chainId": 143,
  "networkId": 143,
  "explorers": [
    {
      "name": "Monad Vision",
      "url": "https://monadvision.com",
      "standard": "EIP3091"
    },
    {
      "name": "Monadscan",
      "url": "https://monadscan.com",
      "standard": "EIP3091"
    },
    {
      "name": "Valopers",
      "url": "https://monad.valopers.com",
      "standard": "EIP3091"
    }
  ]
};

export const jito149149: Chain = {
  "name": "JITO Public Network",
  "chain": "JITO",
  "rpc": [
    "https://rpc.flowpe.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "JITO",
    "symbol": "JITO",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://jito.flowpe.io",
  "shortName": "jito149",
  "chainId": 149,
  "networkId": 149,
  "explorers": [
    {
      "name": "jito-explorer",
      "url": "https://explorer.flowpe.io",
      "standard": "EIP3091"
    }
  ]
};

export const farm165: Chain = {
  "name": "Farm Chain",
  "chain": "Farm Chain",
  "icon": "farmchain",
  "rpc": [
    "https://rpc.fmcscan.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Farm Coin",
    "symbol": "FMC",
    "decimals": 18
  },
  "infoURL": "https://fmcscan.com",
  "shortName": "Farm",
  "chainId": 165,
  "networkId": 165,
  "explorers": [
    {
      "name": "FMCScan",
      "url": "https://fmcscan.com",
      "standard": "EIP3091"
    }
  ]
};

export const nomina166: Chain = {
  "name": "Nomina Mainnet",
  "chain": "NOM",
  "icon": "https://raw.githubusercontent.com/omni-network/omni/refs/heads/main/docs/docs/public/nom/logo.png",
  "rpc": [
    "https://mainnet.nomina.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "NOM",
    "symbol": "NOM",
    "decimals": 18
  },
  "infoURL": "https://www.nomina.io",
  "shortName": "nomina",
  "chainId": 166,
  "networkId": 166,
  "explorers": [
    {
      "name": "Nomina Explorer",
      "url": "https://nomscan.io/",
      "icon": "https://raw.githubusercontent.com/omni-network/omni/refs/heads/main/docs/docs/public/nom/logo.png",
      "standard": "EIP3091"
    }
  ]
};

export const watrMainnet192: Chain = {
  "name": "Watr Mainnet",
  "chain": "WATR",
  "icon": "watr",
  "rpc": [
    "https://rpc.watr.org/ext/bc/EypLFUSzC2wdbFJovYS3Af1E7ch1DJf7KxKoGR5QFPErxQkG1/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "WAT",
    "symbol": "WAT",
    "decimals": 18
  },
  "infoURL": "https://www.watr.org",
  "shortName": "watr-mainnet",
  "chainId": 192,
  "networkId": 192,
  "explorers": [
    {
      "name": "Watr Explorer",
      "url": "https://explorer.watr.org",
      "icon": "watr",
      "standard": "EIP3091"
    }
  ]
};

export const vcTestnet206: Chain = {
  "name": "VinuChain Testnet",
  "chain": "VC",
  "icon": "vinuchain",
  "rpc": [
    "https://testnet-rpc.vinuchain.org",
    "https://vinufoundation-rpc.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "VinuChain",
    "symbol": "VC",
    "decimals": 18
  },
  "infoURL": "https://vinuchain.org",
  "shortName": "vc-testnet",
  "chainId": 206,
  "networkId": 206,
  "explorers": [
    {
      "name": "VinuExplorer Testnet",
      "url": "https://testnet.vinuexplorer.org",
      "standard": "EIP3091"
    },
    {
      "name": "VinuScan Testnet",
      "url": "https://testnet.vinuscan.com",
      "standard": "EIP3091"
    }
  ]
};

export const vc207: Chain = {
  "name": "VinuChain",
  "chain": "VC",
  "icon": "vinuchain",
  "rpc": [
    "https://rpc.vinuchain.org",
    "https://vinuchain-rpc.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "VinuChain",
    "symbol": "VC",
    "decimals": 18
  },
  "infoURL": "https://vinuchain.org",
  "shortName": "vc",
  "chainId": 207,
  "networkId": 207,
  "explorers": [
    {
      "name": "VinuExplorer",
      "url": "https://vinuexplorer.org",
      "standard": "EIP3091"
    },
    {
      "name": "VinuScan",
      "url": "https://mainnet.vinuscan.com",
      "standard": "EIP3091"
    }
  ]
};

export const iopn222: Chain = {
  "name": "OPN Chain Mainnet",
  "chain": "IOPN",
  "rpc": [
    "https://mainnet-rpc.iopn.tech",
    "https://mainnet-rpc2.iopn.tech",
    "https://mainnet-rpc3.iopn.tech",
    "wss://mainnet-rpc.iopn.tech/ws",
    "wss://mainnet-rpc2.iopn.tech/ws",
    "wss://mainnet-rpc3.iopn.tech/ws"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "IOPN",
    "symbol": "IOPN",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    },
    {
      "name": "EIP7702"
    }
  ],
  "infoURL": "https://chain.iopn.io",
  "shortName": "iopn",
  "chainId": 222,
  "networkId": 222,
  "icon": "iopn",
  "explorers": [
    {
      "name": "OPNScan",
      "url": "https://opnscan.io",
      "icon": "iopn",
      "standard": "none"
    }
  ]
};

export const tacchain239: Chain = {
  "name": "TAC Mainnet",
  "title": "TAC Mainnet",
  "chain": "TAC",
  "icon": "tac",
  "rpc": [
    "https://rpc.tac.build",
    "https://rpc.ankr.com/tac",
    "https://ws.rpc.tac.build"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "TAC",
    "symbol": "TAC",
    "decimals": 18
  },
  "infoURL": "https://tac.build/",
  "shortName": "tacchain",
  "slip44": 60,
  "chainId": 239,
  "networkId": 239,
  "explorers": [
    {
      "name": "TAC Explorer",
      "url": "https://explorer.tac.build",
      "standard": "EIP3091"
    },
    {
      "name": "Blockscout",
      "url": "https://tac.blockscout.com",
      "standard": "EIP3091"
    }
  ]
};

export const orbinum270: Chain = {
  "name": "Orbinum",
  "chain": "ORB",
  "icon": "https://cdn.orbinum.io/assets/isotipo-black.png",
  "rpc": [
    "https://rpc-1.orbinum.io",
    "https://rpc-2.orbinum.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ORB",
    "symbol": "ORB",
    "decimals": 18
  },
  "infoURL": "https://www.orbinum.network",
  "shortName": "orbinum",
  "chainId": 270,
  "networkId": 270,
  "explorers": [
    {
      "name": "Orbinum Privacy Explorer",
      "url": "https://explorer.orbinum.network",
      "icon": "https://cdn.orbinum.io/assets/isotipo-black.png",
      "standard": "EIP3091"
    }
  ]
};

export const drby275: Chain = {
  "name": "DrilByte Mainnet",
  "chain": "DRBY",
  "rpc": [
    "https://rpc.drilbyte.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "DrilByte",
    "symbol": "DRBY",
    "decimals": 18
  },
  "infoURL": "https://drilbyte.com",
  "shortName": "drby",
  "chainId": 275,
  "networkId": 275,
  "explorers": [
    {
      "name": "DrilByte Explorer",
      "url": "https://explorer.drilbyte.com",
      "standard": "EIP3091"
    }
  ]
};

export const netx287: Chain = {
  "name": "NetX Mainnet",
  "chain": "NETX",
  "rpc": [
    "https://rpc.netxscan.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "NETX",
    "symbol": "NETX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://netxscan.io/",
  "shortName": "netx",
  "chainId": 287,
  "networkId": 287,
  "explorers": [
    {
      "name": "NetXScan",
      "url": "https://netxscan.io",
      "standard": "EIP3091"
    }
  ]
};

export const hsp292292: Chain = {
  "name": "HashSphere Private Network 292",
  "chain": "HashSphere-292",
  "rpc": [
    "http://rpc-292.champagnesphere.net/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "hbar",
    "symbol": "HBAR",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://hashgraph.com",
  "shortName": "hsp-292",
  "chainId": 292,
  "networkId": 292,
  "explorers": [
    {
      "name": "HashSphere Explorer 292",
      "url": "http://explorer-292.champagnesphere.net",
      "standard": "none"
    }
  ]
};

export const goliath327: Chain = {
  "name": "Goliath",
  "chain": "GOLIATH",
  "rpc": [
    "https://rpc.goliath.net"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "XCN",
    "symbol": "XCN",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://docs.goliath.net",
  "shortName": "goliath",
  "chainId": 327,
  "networkId": 327,
  "explorers": [
    {
      "name": "Goliath Explorer",
      "url": "https://explorer.goliath.net",
      "standard": "EIP3091"
    }
  ]
};

export const virbicoin329: Chain = {
  "name": "VirBiCoin",
  "chain": "VBC",
  "rpc": [
    "https://rpc.digitalregion.jp"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "VBC",
    "symbol": "VBC",
    "decimals": 18
  },
  "infoURL": "https://vbc.digitalregion.jp",
  "shortName": "virbicoin",
  "chainId": 329,
  "networkId": 329,
  "icon": "vbc",
  "explorers": [
    {
      "name": "VirBiCoin Explorer",
      "url": "https://explorer.digitalregion.jp",
      "icon": "vbc",
      "standard": "EIP3091"
    }
  ]
};

export const bourse343: Chain = {
  "name": "Capital Exchange",
  "chain": "BOURSE",
  "rpc": [
    "https://rpc.capitalexchange.com",
    "https://rpc.capitalexchange.digital"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bourse",
    "symbol": "BOURSE",
    "decimals": 18
  },
  "infoURL": "https://about.capitalexchange.com",
  "shortName": "bourse",
  "chainId": 343,
  "networkId": 343,
  "icon": "bourse",
  "explorers": [
    {
      "name": "Capital Exchange | Digital",
      "url": "https://bourse.capitalexchange.com",
      "icon": "bourse",
      "standard": "EIP3091"
    }
  ]
};

export const kss347: Chain = {
  "name": "Kross Network Mainnet",
  "chain": "KSS",
  "rpc": [
    "https://rpc-v1.kross.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Kross",
    "symbol": "KSS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://kross.network",
  "shortName": "kss",
  "chainId": 347,
  "networkId": 347,
  "icon": "kross",
  "explorers": [
    {
      "name": "Kross Network Explorer",
      "url": "https://explorer.kross.network",
      "icon": "kross",
      "standard": "EIP3091"
    }
  ]
};

export const dnc362: Chain = {
  "name": "Dancore",
  "chain": "DNC",
  "icon": "dancore",
  "rpc": [
    "https://rpc.dancorescan.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Dancore",
    "symbol": "DNC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://dancore.io",
  "shortName": "dnc",
  "chainId": 362,
  "networkId": 362,
  "explorers": [
    {
      "name": "dancorescan",
      "url": "https://dancorescan.com",
      "standard": "EIP3091"
    }
  ]
};

export const lnr389: Chain = {
  "name": "LunaroChain Mainnet",
  "chain": "LNR",
  "rpc": [
    "https://rpc.lunaro.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Lunaro",
    "symbol": "LNR",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://lunaro.network",
  "shortName": "lnr",
  "chainId": 389,
  "networkId": 389,
  "icon": "lunaro",
  "explorers": [
    {
      "name": "LunaroScan",
      "url": "https://scan.lunaro.network",
      "icon": "lunaro",
      "standard": "EIP3091"
    }
  ]
};

export const actumic402: Chain = {
  "name": "Actumic Mainnet",
  "rpc": [
    "https://scan.actumic.com/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "USD Coin",
    "symbol": "USDC",
    "decimals": 6
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://actumic.com",
  "shortName": "actumic",
  "chainId": 402,
  "networkId": 402,
  "icon": "actumic",
  "explorers": [
    {
      "name": "Actumic Explorer",
      "url": "https://scan.actumic.com",
      "icon": "actumic",
      "standard": "EIP3091"
    }
  ],
  "status": "active",
  "chain": "actumic"
};

export const dTestnet430: Chain = {
  "name": "D Testnet",
  "chain": "Dchain",
  "rpc": [
    "https://eth-testnet.platformd.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Dchain",
    "symbol": "DT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://platformd.io",
  "shortName": "d-testnet",
  "chainId": 430,
  "networkId": 430,
  "icon": "d-chain",
  "explorers": []
};

export const dMainnet433: Chain = {
  "name": "D Mainnet",
  "chain": "Dchain",
  "rpc": [
    "https://eth.platformd.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Dchain",
    "symbol": "DT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://platformd.io",
  "shortName": "d-mainnet",
  "chainId": 433,
  "networkId": 433,
  "icon": "d-chain",
  "explorers": []
};

export const areum463: Chain = {
  "name": "Areum Mainnet",
  "chain": "AREUM",
  "rpc": [
    "https://mainnet-rpc.areum.network",
    "https://mainnet-rpc2.areum.network",
    "https://mainnet-rpc3.areum.network",
    "https://mainnet-rpc4.areum.network",
    "https://mainnet-rpc5.areum.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Areum",
    "symbol": "AREA",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://areum.network",
  "shortName": "areum",
  "chainId": 463,
  "networkId": 463,
  "icon": "areum",
  "explorers": [
    {
      "name": "Areum Explorer",
      "url": "https://explorer.areum.network",
      "icon": "areum",
      "standard": "EIP3091"
    }
  ]
};

export const campmainnet484: Chain = {
  "name": "Camp Network Mainnet",
  "chain": "CAMP",
  "rpc": [
    "https://rpc-mainnet.campnetwork.xyz/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "CAMP",
    "symbol": "CAMP",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://docs.campnetwork.xyz",
  "shortName": "campmainnet",
  "chainId": 484,
  "networkId": 484,
  "icon": "camp",
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://camp.cloud.blockscout.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const lcai504: Chain = {
  "name": "LightchainAI Testnet",
  "chain": "LCAI",
  "rpc": [
    "https://light-testnet-rpc.lightchain.ai"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "LightchainAI",
    "symbol": "LCAI",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://lightchain.ai",
  "shortName": "lcai",
  "chainId": 504,
  "networkId": 504,
  "icon": "lcai",
  "explorers": [
    {
      "name": "lightchain explorer",
      "url": "https://testnet.lightscan.app",
      "icon": "lcai",
      "standard": "EIP3091"
    }
  ]
};

export const doto505: Chain = {
  "name": "DotOne Smart Chain",
  "chain": "DOTO",
  "rpc": [
    "https://rpc.dotone.online"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Doto",
    "symbol": "DOTO",
    "decimals": 18
  },
  "infoURL": "https://dotone.online",
  "shortName": "doto",
  "chainId": 505,
  "networkId": 505,
  "icon": "dotone",
  "explorers": [
    {
      "name": "dotscan",
      "url": "https://dotscan.one",
      "icon": "dotone",
      "standard": "EIP3091"
    }
  ]
};

export const btb509: Chain = {
  "name": "BTB Chain Mainnet",
  "chain": "BTB",
  "rpc": [
    "https://btb-dataseed.btbchain.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BitTap Chain Token",
    "symbol": "BTB",
    "decimals": 18
  },
  "infoURL": "https://www.btbchain.org/",
  "shortName": "btb",
  "chainId": 509,
  "networkId": 509,
  "explorers": [
    {
      "name": "BTB Chain Explorer",
      "url": "https://btb-explorer.btbchain.org",
      "standard": "EIP3091"
    }
  ],
  "chainSlug": "btb",
  "isTestnet": false
};

export const syndicate510: Chain = {
  "name": "Syndicate Mainnet",
  "chain": "Syndicate",
  "shortName": "syndicate",
  "infoURL": "https://syndicate.io",
  "icon": "syndicate",
  "chainId": 510,
  "networkId": 510,
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "nativeCurrency": {
    "name": "Syndicate",
    "symbol": "SYND",
    "decimals": 18
  },
  "rpc": [
    "https://rpc.syndicate.io"
  ],
  "faucets": [],
  "explorers": [
    {
      "name": "Syndicate Explorer",
      "url": "https://explorer.syndicate.io",
      "logo": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const fyro511: Chain = {
  "name": "FyroChain Mainnet",
  "chain": "FYRO",
  "rpc": [
    "https://rpc.fyrochain.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Fyro",
    "symbol": "FYRO",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://fyrochain.org",
  "shortName": "fyro",
  "chainId": 511,
  "networkId": 511,
  "explorers": [
    {
      "name": "FyroScan",
      "url": "https://fyrochain.org",
      "standard": "EIP3091"
    }
  ]
};

export const mawari576: Chain = {
  "name": "Mawari Testnet",
  "chain": "MAWARI",
  "rpc": [
    "https://rpc.testnet.mawari.net/http"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Mawari",
    "symbol": "MAWARI",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://testnet.mawari.net",
  "shortName": "mawari",
  "chainId": 576,
  "networkId": 576,
  "icon": "mawari",
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer.testnet.mawari.net/",
      "standard": "EIP3091"
    }
  ]
};

export const capy586: Chain = {
  "name": "MarketCapy TestNet 1",
  "chain": "CAPY",
  "rpc": [
    "https://fraa-flashbox-4646-rpc.a.stagenet.tanssi.network"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "CAPY",
    "symbol": "CAPY",
    "decimals": 18
  },
  "infoURL": "https://marketcapy.xyz/",
  "shortName": "capy",
  "chainId": 586,
  "networkId": 586,
  "explorers": [
    {
      "name": "Capy Explorer",
      "url": "https://explorer.marketcapy.xyz/"
    }
  ]
};

export const netxTestnet587: Chain = {
  "name": "NetX Testnet",
  "chain": "NETX",
  "rpc": [
    "https://testnetrpc.netxscan.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "NETX",
    "symbol": "NETX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://netx.world/",
  "shortName": "netx-testnet",
  "chainId": 587,
  "networkId": 587,
  "explorers": [
    {
      "name": "NetXScan Testnet",
      "url": "https://testnet.netxscan.io",
      "standard": "EIP3091"
    }
  ]
};

export const battlechainTestnet627: Chain = {
  "name": "BattleChain Testnet",
  "chain": "BattleChain",
  "rpc": [
    "https://testnet.battlechain.com"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://battlechain.com",
  "shortName": "battlechain-testnet",
  "chainId": 627,
  "networkId": 627,
  "slip44": 1,
  "status": "active",
  "explorers": [
    {
      "name": "BattleChain Testnet Explorer",
      "url": "https://explorer.testnet.battlechain.com",
      "standard": "EIP3091"
    }
  ]
};

export const bot677: Chain = {
  "name": "BOT Chain Mainnet",
  "chain": "BOT",
  "rpc": [
    "https://rpc.botchain.ai"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BOT",
    "symbol": "BOT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.botchain.ai/",
  "shortName": "bot",
  "chainId": 677,
  "networkId": 677,
  "icon": "bot",
  "explorers": [
    {
      "name": "botscan",
      "url": "https://scan.botchain.ai/"
    }
  ]
};

export const jasmy681: Chain = {
  "name": "JASMY Chain Testnet",
  "chain": "JASMY",
  "rpc": [
    "wss://jasmy-chain-testnet.alt.technology/ws",
    "https://jasmy-chain-testnet.alt.technology"
  ],
  "faucets": [
    "https://faucet.janction.ai"
  ],
  "nativeCurrency": {
    "name": "JasmyCoin",
    "symbol": "JASMY",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.jasmy.co.jp/en.html",
  "shortName": "jasmy",
  "chainId": 681,
  "networkId": 681,
  "icon": "jasmy",
  "explorers": [
    {
      "name": "JASMY Chain Testnet Explorer",
      "url": "https://jasmy-chain-testnet-explorer.alt.technology",
      "icon": "jasmy",
      "standard": "EIP3091"
    }
  ]
};

export const uniocean684: Chain = {
  "name": "Uniocean Testnet",
  "chain": "Uniocean",
  "rpc": [
    "https://rpc1.testnet.uniocean.network"
  ],
  "faucets": [
    "https://faucet.testnet.uniocean.network"
  ],
  "nativeCurrency": {
    "name": "OCEANX",
    "symbol": "OCEANX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.uniocean.network",
  "shortName": "uniocean",
  "chainId": 684,
  "networkId": 684,
  "icon": "uniocean",
  "explorers": [
    {
      "name": "Uniocean Explorer",
      "url": "https://explorer.testnet.uniocean.network",
      "icon": "uniocean",
      "standard": "none"
    }
  ]
};

export const lxon724: Chain = {
  "name": "LXON Mainnet",
  "chain": "LXON",
  "rpc": [
    "https://rpc.lxon.in"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "LXON",
    "symbol": "XON",
    "decimals": 18
  },
  "infoURL": "https://www.lxon.in",
  "shortName": "lxon",
  "chainId": 724,
  "networkId": 724,
  "icon": "lxon",
  "explorers": [
    {
      "name": "LXON Explorer",
      "url": "https://explorer.lxon.in",
      "standard": "EIP3091"
    }
  ],
  "status": "active",
  "features": [
    {
      "name": "EIP155"
    }
  ]
};

export const capxTestnet756: Chain = {
  "name": "CAPX Testnet",
  "chain": "CAPX",
  "rpc": [
    "https://capx-testnet-c1.rpc.caldera.xyz/http",
    "wss://capx-testnet-c1.rpc.caldera.xyz/ws"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "CAPX",
    "symbol": "CAPX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.capx.ai/",
  "shortName": "capx-testnet",
  "chainId": 756,
  "networkId": 756,
  "icon": "capx",
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://testnet.capxscan.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const capx757: Chain = {
  "name": "CAPX",
  "chain": "CAPX",
  "rpc": [
    "https://capx-mainnet.calderachain.xyz/http",
    "wss://capx-mainnet.calderachain.xyz/ws"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "CAPX",
    "symbol": "CAPX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.capx.ai/",
  "shortName": "capx",
  "chainId": 757,
  "networkId": 757,
  "icon": "capx",
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://capxscan.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const qrdx762: Chain = {
  "name": "QRDX Mainnet",
  "chain": "QRDX",
  "rpc": [
    "https://rpc.qrdx.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "QRDX",
    "symbol": "QRDX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://qrdx.org",
  "shortName": "qrdx",
  "chainId": 762,
  "networkId": 762,
  "icon": "qrdx",
  "explorers": [
    {
      "name": "qrdx-explorer",
      "url": "https://explorer.qrdx.org",
      "icon": "qrdx-explorer",
      "standard": "EIP3091"
    }
  ]
};

export const qelt770: Chain = {
  "name": "QELT Mainnet",
  "chain": "QELT",
  "rpc": [
    "https://mainnet.qelt.ai",
    "https://mainnet2.qelt.ai",
    "https://mainnet3.qelt.ai",
    "https://mainnet4.qelt.ai",
    "https://mainnet5.qelt.ai",
    "https://archivem.qelt.ai"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "QELT",
    "symbol": "QELT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://qelt.ai",
  "shortName": "qelt",
  "chainId": 770,
  "networkId": 770,
  "icon": "qelt",
  "explorers": [
    {
      "name": "QELTScan",
      "url": "https://qeltscan.ai",
      "icon": "qelt",
      "standard": "EIP3091"
    }
  ]
};

export const qeltTestnet771: Chain = {
  "name": "QELT Testnet",
  "chain": "QELT",
  "rpc": [
    "https://testnet.qelt.ai",
    "https://archive.qelt.ai",
    "wss://ws.qelt.ai"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "QELT",
    "symbol": "QELT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://qelt.ai",
  "shortName": "qelt-testnet",
  "chainId": 771,
  "networkId": 771,
  "icon": "qelt",
  "explorers": [
    {
      "name": "QELTScan Testnet",
      "url": "https://testnet.qeltscan.ai",
      "icon": "qelt",
      "standard": "EIP3091"
    }
  ]
};

export const ritual784: Chain = {
  "name": "Ritual Network",
  "title": "Ritual Network",
  "chain": "Ritual Network",
  "icon": "ritual",
  "rpc": [
    "https://rpc.ritualfoundation.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ritual",
    "symbol": "RITUAL",
    "decimals": 18
  },
  "infoURL": "https://docs.ritualfoundation.org",
  "shortName": "ritual",
  "chainId": 784,
  "networkId": 784,
  "explorers": [
    {
      "name": "Ritual Network Explorer",
      "url": "https://explorer.ritualfoundation.org",
      "standard": "none"
    }
  ]
};

export const binaryholdingsMainnet836: Chain = {
  "name": "BinaryHoldings Mainnet",
  "chain": "BnryMainnet",
  "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/BinaryHoldings/Light.png",
  "rpc": [
    "https://rpc-binaryholdings.cogitus.io/ext/bc/J3MYb3rDARLmB7FrRybinyjKqVTqmerbCr9bAXDatrSaHiLxQ/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BNRY",
    "symbol": "BNRY",
    "decimals": 18
  },
  "infoURL": "https://www.thebinaryholdings.com/",
  "shortName": "binaryholdings-mainnet",
  "chainId": 836,
  "networkId": 836,
  "explorers": [
    {
      "name": "Binary Explorer",
      "url": "https://explorer-binaryholdings.cogitus.io",
      "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/BinaryHoldings/Light.png",
      "standard": "EIP3091"
    }
  ]
};

export const aMN870: Chain = {
  "name": "Autonomys Mainnet",
  "chain": "autonomys-mainnet",
  "rpc": [
    "https://auto-evm.mainnet.autonomys.xyz/ws"
  ],
  "icon": "autonomys",
  "faucets": [],
  "nativeCurrency": {
    "name": "AI3",
    "symbol": "AI3",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.autonomys.xyz",
  "shortName": "AMN",
  "chainId": 870,
  "networkId": 870,
  "explorers": []
};

export const mars890: Chain = {
  "name": "Marschain",
  "chain": "MARS",
  "rpc": [
    "https://rpcs.marschain.net/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Mars",
    "symbol": "MARSCHAIN",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://marschain.net",
  "shortName": "mars",
  "chainId": 890,
  "networkId": 890,
  "icon": "ipfs://bafkreidjevwbk3kslq6gspdpzdn3jrm7kxepd2oaem3o7u2zspmqlk7ksa",
  "explorers": [
    {
      "name": "Mars Explorer",
      "url": "https://explorer.marschain.net",
      "standard": "EIP3091"
    }
  ]
};

export const wbtc892: Chain = {
  "name": "Advance Blockchain Mainnet",
  "chain": "ABC",
  "rpc": [
    "https://rpc1.advanceblockchain.io",
    "https://rpc2.advanceblockchain.io",
    "wss://rpc1-wss.advanceblockchain.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "White Bitcoin",
    "symbol": "WBTC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://advanceblockchain.io",
  "shortName": "wbtc",
  "chainId": 892,
  "networkId": 892,
  "icon": "advanceblockchain",
  "explorers": [
    {
      "name": "advanceblockchainexplorer",
      "url": "https://explorer.advanceblockchain.io/",
      "icon": "advanceblockchain",
      "standard": "none"
    }
  ]
};

export const fene920: Chain = {
  "name": "Fenine Testnet",
  "chain": "Fenine",
  "icon": "fenine",
  "rpc": [
    "https://rpc.fene.app",
    "wss://rpc.fene.app/ws"
  ],
  "faucets": [
    "https://faucet.fene.app"
  ],
  "nativeCurrency": {
    "name": "Fenine",
    "symbol": "FENE",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://fene.app",
  "shortName": "fene",
  "chainId": 920,
  "networkId": 920,
  "explorers": [
    {
      "name": "Fenscan Testnet",
      "url": "https://explorer.fene.app",
      "icon": "fenine",
      "standard": "none"
    }
  ]
};

export const zel935: Chain = {
  "name": "Zano Execution Layer",
  "chain": "ZEL",
  "rpc": [
    "https://eth-rpc.node1.zano.org"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Zel",
    "symbol": "ZEL",
    "decimals": 18
  },
  "infoURL": "https://zano.com",
  "shortName": "zel",
  "chainId": 935,
  "networkId": 935,
  "explorers": []
};

export const iopn984: Chain = {
  "name": "OPN Chain Testnet",
  "chain": "IOPN",
  "rpc": [
    "https://testnet-rpc.iopn.tech",
    "https://testnet-rpc2.iopn.tech",
    "wss://testnet-rpc.iopn.tech/ws",
    "wss://testnet-rpc2.iopn.tech/ws"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "IOPN",
    "symbol": "IOPN",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    },
    {
      "name": "EIP7702"
    }
  ],
  "infoURL": "https://chain.iopn.io",
  "shortName": "iopn",
  "chainId": 984,
  "networkId": 984,
  "icon": "iopn",
  "explorers": [
    {
      "name": "OPNScan Testnet",
      "url": "https://testnet.iopn.tech",
      "icon": "iopn",
      "standard": "none"
    }
  ]
};

export const stable988: Chain = {
  "name": "Stable Mainnet",
  "chain": "stable",
  "rpc": [
    "https://rpc.stable.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "USDT0",
    "symbol": "USDT0",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://stable.xyz",
  "shortName": "stable",
  "chainId": 988,
  "networkId": 988,
  "icon": "stable",
  "explorers": [
    {
      "name": "stablescan",
      "url": "https://stablescan.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const hyperEvm999: Chain = {
  "name": "HyperEVM",
  "chain": "HYPE",
  "icon": "hyperliquid",
  "rpc": [
    "https://rpc.hyperliquid.xyz/evm",
    "https://rpc.hypurrscan.io",
    "https://hyperliquid-json-rpc.stakely.io",
    "https://hyperliquid.drpc.org",
    "wss://hyperliquid.drpc.org",
    "https://rpc.hyperlend.finance",
    "https://hyperliquid.api.onfinality.io/evm/public",
    "https://hyperliquid.rpc.blxrbdn.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "HYPE",
    "symbol": "HYPE",
    "decimals": 18
  },
  "infoURL": "https://hyperfoundation.org/",
  "shortName": "hyper_evm",
  "chainId": 999,
  "networkId": 999,
  "explorers": [
    {
      "name": "HyperEVMScan",
      "url": "https://hyperevmscan.io/"
    }
  ]
};

export const nura1020: Chain = {
  "name": "Nura Chain",
  "chain": "Nura",
  "icon": "ipfs://bafkreiefrfdeu63qoclrozh5pguctlu3zcoqqeyqaqofocgsxqvljjr4u4",
  "rpc": [
    "https://rpc.nurachain.net"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Nura Coin",
    "symbol": "NURA",
    "decimals": 18
  },
  "infoURL": "https://nurachain.net",
  "shortName": "nura",
  "chainId": 1020,
  "networkId": 1020,
  "explorers": [
    {
      "name": "Nura Explorer",
      "url": "https://explorer.nurachain.net",
      "standard": "EIP3091"
    }
  ]
};

export const bdag1043: Chain = {
  "name": "Awakening Testnet",
  "chain": "BDAG",
  "icon": "BDAG",
  "rpc": [
    "​https://rpc.awakening.bdagscan.com",
    "https://relay.awakening.bdagscan.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [
    "https://awakening.bdagscan.com/faucet"
  ],
  "nativeCurrency": {
    "name": "BlockDAG",
    "symbol": "BDAG",
    "decimals": 18
  },
  "infoURL": "https://www.blockdag.network/",
  "shortName": "bdag",
  "chainId": 1043,
  "networkId": 1043,
  "explorers": [
    {
      "name": "BlockDAG Explorer",
      "url": "https://awakening.bdagscan.com/"
    }
  ],
  "status": "active"
};

export const anta1082: Chain = {
  "name": "Anannta",
  "chain": "ANANT",
  "rpc": [
    "https://rpc-anant.ananntascan.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Anannta",
    "symbol": "ANANT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EVM"
    },
    {
      "name": "Cosmos-SDK"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://anannta.io",
  "shortName": "anta",
  "chainId": 1082,
  "networkId": 1082,
  "icon": "anannta",
  "explorers": [
    {
      "name": "Anannta Explorer",
      "url": "https://ananntascan.io",
      "icon": "anannta",
      "standard": "EIP3091"
    }
  ]
};

export const xenea1096: Chain = {
  "name": "Xenea Ubusuna Testnet",
  "chain": "TXENE",
  "rpc": [
    "https://rpc-ubusuna.xeneascan.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Xenea Ubusuna Testnet Token",
    "symbol": "TXENE",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://xenea.io",
  "shortName": "Xenea",
  "chainId": 1096,
  "networkId": 1096,
  "icon": "xenea",
  "explorers": [
    {
      "name": "Xenea Ubusuna Testnet Explorer",
      "url": "https://ubusuna.xeneascan.com",
      "icon": "xenea",
      "standard": "EIP3091"
    }
  ]
};

export const realchain1098: Chain = {
  "name": "RealChain Mainnet",
  "chain": "RealChain",
  "icon": "realchain",
  "rpc": [
    "https://rpc.realchain.io"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "RealCoin",
    "symbol": "R",
    "decimals": 18
  },
  "infoURL": "https://www.realchain.io/",
  "shortName": "realchain",
  "chainId": 1098,
  "networkId": 1098,
  "explorers": [
    {
      "name": "RealChain explorer",
      "url": "https://scan.realchain.io/"
    }
  ]
};

export const grx1110: Chain = {
  "name": "GRX Mainnet",
  "chain": "GRX",
  "rpc": [
    "https://rpc.grxchain.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "GRX",
    "symbol": "GRX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://docs.grxchain.io",
  "shortName": "grx",
  "chainId": 1110,
  "networkId": 1110,
  "icon": "grx",
  "explorers": [
    {
      "name": "grxscan",
      "url": "https://grxscan.io",
      "icon": "grx",
      "standard": "EIP3091"
    }
  ]
};

export const ecm1124: Chain = {
  "name": "ECM Chain Testnet",
  "chain": "ECM Chain",
  "rpc": [
    "https://rpc.testnet.ecmscan.io"
  ],
  "faucets": [
    "https://faucet.testnet.ecmscan.io/"
  ],
  "nativeCurrency": {
    "name": "ECM",
    "symbol": "ECM",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://ecmcoin.com",
  "shortName": "ecm",
  "chainId": 1124,
  "networkId": 1124,
  "icon": "ecmchain",
  "explorers": [
    {
      "name": "ecmscan",
      "url": "https://explorer.testnet.ecmscan.io/",
      "icon": "ecmchain",
      "standard": "EIP3091"
    }
  ]
};

export const taker1125: Chain = {
  "name": "Taker Chain Mainnet",
  "chain": "Taker",
  "rpc": [
    "https://rpc-mainnet.taker.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Taker",
    "symbol": "TAKER",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.taker.xyz",
  "shortName": "taker",
  "chainId": 1125,
  "networkId": 1125,
  "icon": "taker",
  "explorers": [
    {
      "name": "TakerScan",
      "url": "https://explorer.taker.xyz",
      "icon": "taker",
      "standard": "none"
    }
  ]
};

export const qry1129: Chain = {
  "name": "QuarryChain Testnet",
  "chain": "QuarryChain",
  "rpc": [
    "https://rpc.testnet.quarrychain.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Quarry",
    "symbol": "QRY",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://quarrychain.network",
  "shortName": "qry",
  "chainId": 1129,
  "networkId": 1129,
  "icon": "https://quarrychain.network/quarryTokenLogo.svg",
  "explorers": [
    {
      "name": "QuarryScan",
      "url": "https://explorer.testnet.quarrychain.network",
      "icon": "https://quarrychain.network/quarryTokenLogo.svg",
      "standard": "EIP3091"
    }
  ]
};

export const ion1143: Chain = {
  "name": "ION Network",
  "chain": "ION",
  "rpc": [
    "https://ion.qaflanti.ir/api/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ION",
    "symbol": "ION",
    "decimals": 4
  },
  "features": [],
  "infoURL": "https://ion.qaflanti.ir",
  "shortName": "ion",
  "chainId": 1143,
  "networkId": 1143,
  "icon": "ion",
  "explorers": []
};

export const intuitionMainnet1155: Chain = {
  "name": "Intuition Mainnet",
  "chain": "INTUITION",
  "rpc": [
    "https://intuition.calderachain.xyz/http",
    "https://rpc.intuition.systems"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Intuition",
    "symbol": "TRUST",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://intuition.systems",
  "shortName": "intuition-mainnet",
  "chainId": 1155,
  "networkId": 1155,
  "icon": "intuition",
  "explorers": [
    {
      "name": "Intuition Explorer (Mainnet)",
      "url": "https://intuition.calderaexplorer.xyz",
      "standard": "EIP3091"
    },
    {
      "name": "Intuition Explorer (Mainnet)",
      "url": "https://explorer.intuition.systems",
      "standard": "EIP3091"
    }
  ],
  "testnet": false
};

export const joa1191: Chain = {
  "name": "JOA Chain",
  "chain": "JOA",
  "rpc": [
    "https://rpc.joachain.live"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "JOA Coin",
    "symbol": "JOA",
    "decimals": 18
  },
  "infoURL": "https://joachain.live",
  "shortName": "joa",
  "chainId": 1191,
  "networkId": 1191,
  "explorers": [
    {
      "name": "JOA Explorer",
      "url": "https://scan.joachain.live",
      "standard": "EIP3091"
    }
  ]
};

export const bmc1199: Chain = {
  "chainId": 1199,
  "name": "BMC Chain",
  "shortName": "bmc",
  "chain": "BMC",
  "networkId": 1199,
  "infoURL": "https://bmcscan.io",
  "rpc": [
    "https://mainnet-rpc.bmcscan.io"
  ],
  "nativeCurrency": {
    "name": "Bitmeta Coin",
    "symbol": "BMC",
    "decimals": 18
  },
  "explorers": [
    {
      "name": "BMCScan",
      "url": "https://bmcscan.io",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "features": [
    "EVM Compatible",
    "MetaMask Supported"
  ],
  "icon": "https://raw.githubusercontent.com/King11919/BMC-Chain/refs/heads/main/1758714840_BMC (4).png"
};

export const fitochain1233: Chain = {
  "name": "Fitochain",
  "chain": "FITO",
  "rpc": [
    "https://rpc.fitochain.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "FITO",
    "symbol": "FITO",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://fitochain.com",
  "shortName": "fitochain",
  "chainId": 1233,
  "networkId": 1233,
  "icon": "https://fitotechnology.com/wp-content/uploads/2025/08/fito.svg",
  "explorers": [
    {
      "name": "Fitochain Explorer",
      "url": "https://explorer.fitochain.com",
      "standard": "EIP3091"
    }
  ]
};

export const onn1330: Chain = {
  "name": "ONNChain",
  "chain": "ONN",
  "icon": "https://github.com/mkd951/chainscout/blob/main/onnchain.png?raw=true",
  "rpc": [
    "https://mainnet.onnscan.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONN",
    "symbol": "ONN",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://onnscan.com",
  "shortName": "onn",
  "chainId": 1330,
  "networkId": 1330,
  "explorers": [
    {
      "name": "ONNChain Explorer",
      "url": "https://onnscan.com",
      "icon": "https://github.com/mkd951/chainscout/blob/main/onnchain.png?raw=true",
      "standard": "EIP3091"
    }
  ]
};

export const bie1342: Chain = {
  "name": "BIE",
  "chain": "BIE",
  "rpc": [
    "https://rpc.bie.ai",
    "https://api.bie.ai"
  ],
  "faucets": [
    "https://app.bie.ai/faucet"
  ],
  "nativeCurrency": {
    "name": "BIE",
    "symbol": "BIE",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://bie.ai",
  "shortName": "bie",
  "chainId": 1342,
  "networkId": 1342,
  "explorers": [
    {
      "name": "BIE Explorer",
      "url": "https://app.bie.ai/explorer",
      "standard": "EIP3091"
    }
  ]
};

export const midx1394: Chain = {
  "name": "Midpoint Cross",
  "chain": "MIDX",
  "rpc": [
    "https://mainnet.midpointcross.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Midpoint Cross",
    "symbol": "MIDX",
    "decimals": 18
  },
  "infoURL": "https://www.midpointcross.com",
  "shortName": "midx",
  "chainId": 1394,
  "networkId": 1394,
  "icon": "midpointcross",
  "explorers": [
    {
      "name": "Midpoint Cross",
      "url": "https://transactions.midpointcross.com",
      "icon": "midpointcross",
      "standard": "EIP3091"
    }
  ]
};

export const bdag1404: Chain = {
  "name": "BlockDAG Network",
  "chain": "BDAG",
  "icon": "BDAG",
  "rpc": [
    "https://rpc.bdagscan.com"
  ],
  "faucets": [],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "nativeCurrency": {
    "name": "BlockDAG",
    "symbol": "BDAG",
    "decimals": 18
  },
  "infoURL": "https://www.blockdag.network/",
  "shortName": "bdag",
  "chainId": 1404,
  "networkId": 1404,
  "explorers": [
    {
      "name": "BlockDAG Explorer",
      "url": "https://bdagscan.com/"
    },
    {
      "name": "WelshDAG Explorer",
      "url": "https://scan.welshdag.trade",
      "standard": "EIP3091"
    }
  ],
  "status": "active"
};

export const vfl1408: Chain = {
  "name": "VFlow",
  "chain": "VFL",
  "rpc": [
    "wss://vflow-rpc.zkverify.io",
    "https://vflow-rpc.zkverify.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "zkVerify",
    "symbol": "VFY",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://zkverify.io",
  "shortName": "vfl",
  "chainId": 1408,
  "networkId": 1408,
  "icon": "ethereum",
  "explorers": [
    {
      "name": "subscan",
      "url": "https://vflow.subscan.io",
      "icon": "subscan",
      "standard": "EIP3091"
    }
  ]
};

export const tvfl1409: Chain = {
  "name": "VFlow Volta Testnet",
  "chain": "TVFL",
  "rpc": [
    "wss://vflow-volta-rpc.zkverify.io",
    "https://vflow-volta-rpc.zkverify.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Testnet zkVerify",
    "symbol": "tVFY",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://zkverify.io",
  "shortName": "tvfl",
  "chainId": 1409,
  "networkId": 1409,
  "icon": "ethereum",
  "explorers": [
    {
      "name": "subscan",
      "url": "https://vflow-testnet.subscan.io",
      "icon": "subscan",
      "standard": "EIP3091"
    }
  ]
};

export const lrx1410: Chain = {
  "name": "Liberty Reserve Chain",
  "chain": "LRX",
  "rpc": [
    "https://rpc.lrxmining.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Liberty Reserve",
    "symbol": "LRX",
    "decimals": 18
  },
  "infoURL": "https://lrxmining.com",
  "shortName": "lrx",
  "chainId": 1410,
  "networkId": 1410,
  "explorers": [
    {
      "name": "LRXScan",
      "url": "https://scan.lrxmining.com",
      "standard": "EIP3091"
    }
  ]
};

export const injectiveTestnet1439: Chain = {
  "name": "Injective Testnet",
  "chain": "Injective",
  "icon": "injective",
  "rpc": [
    "https://testnet.sentry.chain.json-rpc.injective.network",
    "wss://testnet.sentry.chain.json-rpc.injective.network",
    "https://injectiveevm-testnet-rpc.polkachu.com",
    "wss://injectiveevm-testnet-rpc.polkachu.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [
    "https://testnet.faucet.injective.network"
  ],
  "nativeCurrency": {
    "name": "Injective",
    "symbol": "INJ",
    "decimals": 18
  },
  "infoURL": "https://injective.com",
  "shortName": "injective-testnet",
  "chainId": 1439,
  "networkId": 1439,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://testnet.blockscout.injective.network",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const cmxr1475: Chain = {
  "name": "CRYMAD Chain",
  "chain": "CMX",
  "icon": "crymadchain",
  "rpc": [
    "https://rpc.cmxofficial.com"
  ],
  "faucets": [],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "nativeCurrency": {
    "name": "CryMadX",
    "symbol": "CMX-R",
    "decimals": 18
  },
  "infoURL": "https://cmxofficial.com/",
  "shortName": "cmxr",
  "chainId": 1475,
  "networkId": 1475,
  "explorers": [
    {
      "name": "CRYMAD Chain Explorer",
      "url": "https://explorer.cmxofficial.com/"
    }
  ],
  "status": "active"
};

export const roonchain1492: Chain = {
  "name": "ROON Mainnet",
  "chain": "ROON",
  "rpc": [
    "https://rpc.roonchain.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ROON",
    "symbol": "ROON",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://roonchain.com",
  "shortName": "roonchain",
  "chainId": 1492,
  "networkId": 1492,
  "icon": "roonchain",
  "explorers": [
    {
      "name": "Roon Mainnet explorer",
      "url": "https://browser.roonchain.com",
      "icon": "roonchain",
      "standard": "EIP3091"
    }
  ]
};

export const midl1500: Chain = {
  "name": "Midl Mainnet",
  "chain": "MIDL",
  "rpc": [
    "https://rpc.midl.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bitcoin",
    "symbol": "BTC",
    "decimals": 18
  },
  "infoURL": "https://midl.xyz/",
  "shortName": "midl",
  "chainId": 1500,
  "networkId": 1500,
  "explorers": [
    {
      "name": "Midl Mainnet Explorer",
      "url": "blockscout.midl.xyz",
      "icon": "midl",
      "standard": "EIP3091"
    }
  ]
};

export const dolphinetTestnet1519: Chain = {
  "name": "Dolphinet Testnet",
  "chain": "DOL",
  "icon": "dolphinet-testnet",
  "rpc": [
    "https://rpc-testnet.dolphinode.world",
    "wss://wss-testnet.dolphinode.world"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "DOL",
    "symbol": "DOL",
    "decimals": 18
  },
  "infoURL": "https://explorer-testnet.dolphinode.world/",
  "shortName": "dolphinet-testnet",
  "chainId": 1519,
  "networkId": 1519,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer-testnet.dolphinode.world/"
    }
  ]
};

export const dolphinet1520: Chain = {
  "name": "Dolphinet Mainnet",
  "chain": "DOL",
  "icon": "dolphinet",
  "rpc": [
    "https://rpc.dolphinode.world",
    "wss://wss.dolphinode.world",
    "https://rpc-dev01.dolphinode.world",
    "wss://wss-dev01.dolphinode.world"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "DOL",
    "symbol": "DOL",
    "decimals": 18
  },
  "infoURL": "https://chain.dolphinode.world/",
  "shortName": "dolphinet",
  "chainId": 1520,
  "networkId": 1520,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer.dolphinode.world/"
    }
  ]
};

export const mawari1576: Chain = {
  "name": "Mawari Mainnet",
  "chain": "MAWARI",
  "rpc": [
    "https://rpc.mawari.net/http",
    "wss://rpc.mawari.net/ws"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "MAWARI",
    "symbol": "MAWARI",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://mawari.net",
  "shortName": "mawari",
  "chainId": 1576,
  "networkId": 1576,
  "icon": "mawari",
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer.mainnet.mawari.net",
      "standard": "EIP3091"
    }
  ]
};

export const nvnmEvm1611: Chain = {
  "name": "NVNM Mainnet EVM",
  "chain": "NVNM",
  "icon": "nvnm",
  "rpc": [
    "https://evm.nvnmchain.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "MANTRA USD",
    "symbol": "MANTRAUSD",
    "decimals": 18
  },
  "infoURL": "https://www.nvnmchain.io/",
  "shortName": "nvnm-evm",
  "chainId": 1611,
  "networkId": 1611,
  "explorers": [
    {
      "name": "NVNM Chain Mainnet explorer",
      "url": "https://explorer.evm.nvnmchain.io/",
      "standard": "EIP3091",
      "icon": "nvnm"
    }
  ]
};

export const tREX1628: Chain = {
  "name": "T-Rex",
  "chain": "T-Rex",
  "rpc": [
    "https://rpc.trex.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://trex.xyz/",
  "shortName": "TREX",
  "chainId": 1628,
  "networkId": 1628,
  "icon": "trex",
  "explorers": [
    {
      "name": "T-REX blockchain explorer",
      "url": "https://explorer.trex.xyz",
      "standard": "none"
    }
  ]
};

export const xgr1643: Chain = {
  "name": "XGR Mainnet",
  "chain": "XGR",
  "rpc": [
    "https://rpc.xgr.network",
    "https://rpc1.xgr.network",
    "https://rpc2.xgr.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "XGR",
    "symbol": "XGR",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://xgr.network",
  "shortName": "xgr",
  "chainId": 1643,
  "networkId": 1643,
  "icon": "https://xgr.network//Graphics/xgr_logo200.png",
  "explorers": [
    {
      "name": "XGR Explorer",
      "url": "https://explorer.xgr.network",
      "icon": "https://xgr.network//Graphics/xgr_logo200.png",
      "standard": "EIP3091"
    }
  ]
};

export const pharos1672: Chain = {
  "name": "Pharos Mainnet",
  "title": "Pharos Mainnet",
  "chain": "Pharos",
  "icon": "pharosmainnet",
  "rpc": [
    "https://rpc.pharos.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "PharosCoin",
    "symbol": "PROS",
    "decimals": 18
  },
  "infoURL": "https://pharos.xyz/",
  "shortName": "pharos",
  "chainId": 1672,
  "networkId": 1672,
  "explorers": [
    {
      "name": "Pharos Explorer",
      "url": "https://pharosscan.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const oBS1719: Chain = {
  "name": "Obsidian Mainnet",
  "chain": "OBS",
  "icon": "ipfs://QmTiLhRqYb8YbBuXAkTxoJsDjzGeZY1QHVMkG5iSGZaeYY",
  "rpc": [
    "https://kr-4.pixelzx.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Obsidian",
    "symbol": "OBS",
    "decimals": 18
  },
  "infoURL": "https://pistonx.neocities.org/",
  "shortName": "OBS",
  "chainId": 1719,
  "networkId": 1719,
  "explorers": []
};

export const injective1776: Chain = {
  "name": "Injective",
  "chain": "Injective",
  "icon": "injective",
  "rpc": [
    "https://sentry.evm-rpc.injective.network",
    "wss://sentry.evm-ws.injective.network",
    "https://injectiveevm-rpc.polkachu.com",
    "wss://injectiveevm-ws.polkachu.com",
    "https://injective-evm-rpc.scvsecurity.io",
    "wss://injective-evm-ws.scvsecurity.io"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [
    "https://injective.com/getinj"
  ],
  "nativeCurrency": {
    "name": "Injective",
    "symbol": "INJ",
    "decimals": 18
  },
  "infoURL": "https://injective.com",
  "shortName": "injective",
  "chainId": 1776,
  "networkId": 1776,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://blockscout.injective.network",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const rubyTestnet1810: Chain = {
  "name": "Ruby Chain Testnet",
  "title": "Ruby Chain Testnet",
  "shortName": "ruby-testnet",
  "chain": "RUBY",
  "rpc": [
    "https://rpc.ruby.testnet.finetry.win",
    "https://rpc2.ruby.testnet.finetry.win"
  ],
  "faucets": [
    "https://faucet.ruby.testnet.finetry.win"
  ],
  "nativeCurrency": {
    "name": "Ruby",
    "symbol": "RUBY",
    "decimals": 18
  },
  "infoURL": "https://elektrum.io",
  "chainId": 1810,
  "networkId": 1810,
  "explorers": [
    {
      "name": "Ruby Chain Explorer",
      "url": "https://explorer.ruby.testnet.finetry.win",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111",
    "bridges": []
  },
  "icon": "https://ipfs.io/ipfs/bafkreickc2hgej3bjhlj24k7dqupsrki3cp7xpzrj25s3g46iltteufi7i",
  "status": "active"
};

export const wCHSepolia1874: Chain = {
  "name": "Whitechain Sepolia",
  "chain": "WCH",
  "rpc": [
    "https://rpc.testnet.whitechain.io"
  ],
  "faucets": [
    "https://faucet.testnet.whitechain.io"
  ],
  "nativeCurrency": {
    "name": "WBT",
    "symbol": "WBT",
    "decimals": 18
  },
  "infoURL": "https://docs.whitechain.io",
  "shortName": "WCH Sepolia",
  "chainId": 1874,
  "networkId": 1874,
  "icon": "https://a.whitechain.io/assets/brand/symbol/png/symbol-on-dark-256.png",
  "explorers": [
    {
      "name": "Whitechain Testnet Explorer",
      "url": "https://explorer.testnet.whitechain.io",
      "standard": "EIP3091"
    }
  ]
};

export const xgrt1879: Chain = {
  "name": "XGR Testnet",
  "chain": "XGR",
  "rpc": [
    "https://rpc.testnet.xgr.network",
    "https://rpc1.testnet.xgr.network",
    "https://rpc2.testnet.xgr.network"
  ],
  "faucets": [
    "https://faucet.xgr.network/"
  ],
  "nativeCurrency": {
    "name": "XGR",
    "symbol": "XGR",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://xgr.network",
  "shortName": "xgrt",
  "chainId": 1879,
  "networkId": 1879,
  "icon": "https://xgr.network/Graphics/xgr_logo200.png",
  "explorers": [
    {
      "name": "XGR Testnet Explorer",
      "url": "https://explorer.testnet.xgr.network",
      "icon": "https://xgr.network/Graphics/xgr_logo200.png",
      "standard": "EIP3091"
    }
  ]
};

export const recr1888: Chain = {
  "name": "RecorderCoin Mainnet",
  "chain": "RECR",
  "icon": "https://recordercoin.org/Recorder%20Coin%20Logo%20256x256.png",
  "rpc": [
    "https://rpc.recordercoin.org",
    "https://rpc1.recordercoin.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "RecorderCoin",
    "symbol": "RECR",
    "decimals": 18
  },
  "infoURL": "https://recordercoin.org",
  "shortName": "recr",
  "chainId": 1888,
  "networkId": 223344,
  "explorers": [
    {
      "name": "RecorderCoin Explorer",
      "url": "https://explorer.recordercoin.org",
      "standard": "EIP3091"
    }
  ]
};

export const epix1916: Chain = {
  "name": "Epix",
  "chain": "EPIX",
  "rpc": [
    "https://evmrpc.epix.zone/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Epix",
    "symbol": "EPIX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://epix.zone",
  "shortName": "epix",
  "chainId": 1916,
  "networkId": 1916,
  "slip44": 60,
  "icon": "epix",
  "explorers": [
    {
      "name": "Epix Explorer",
      "url": "http://scan.epix.zone/",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const turkchain1919: Chain = {
  "name": "Turkchain",
  "chain": "Turkchain",
  "rpc": [
    "https://rpc.turkscan.com",
    "wss://evm-ws.turkscan.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "TC",
    "symbol": "TURK",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EVM"
    }
  ],
  "infoURL": "https://turkchain1919.com",
  "shortName": "turkchain",
  "chainId": 1919,
  "networkId": 1919,
  "icon": "turkchain",
  "explorers": [
    {
      "name": "TURKCHAIN Explorer",
      "url": "https://turkscan.com",
      "icon": "turkchain",
      "standard": "EIP3091"
    }
  ],
  "icons": [
    {
      "url": "https://turkchain1919.com/logo.png",
      "width": 512,
      "height": 512,
      "format": "png"
    }
  ]
};

export const tpc1925: Chain = {
  "name": "Tipschain Mainnet",
  "chain": "TPC",
  "rpc": [
    "https://rpc.tipschain.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Tipscoin",
    "symbol": "TPC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://tipschain.org",
  "shortName": "tpc",
  "chainId": 1925,
  "networkId": 1925,
  "icon": "TPC",
  "explorers": [
    {
      "name": "Tipschainscan",
      "url": "https://tipschain.online",
      "icon": "tipschainscan",
      "standard": "EIP3091"
    }
  ]
};

export const egold1932: Chain = {
  "name": "EGoldChain Mainnet",
  "chain": "EGold",
  "rpc": [
    "https://rpc.goldscan.gold"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "EGold",
    "symbol": "XAU",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://webgold.gold/",
  "shortName": "egold",
  "chainId": 1932,
  "networkId": 1932,
  "icon": "egold",
  "explorers": [
    {
      "name": "GoldScan Explorer",
      "url": "https://goldscan.gold",
      "icon": "goldscan",
      "standard": "EIP3091"
    }
  ]
};

export const tokb1952: Chain = {
  "name": "X Layer Testnet",
  "chain": "X Layer",
  "icon": "x layer",
  "rpc": [
    "https://testrpc.xlayer.tech",
    "https://xlayertestrpc.okx.com",
    "https://endpoints.omniatech.io/v1/xlayer/testnet/public",
    "https://rpc.ankr.com/xlayer_testnet",
    "https://xlayer-testnet.drpc.org",
    "wss://xlayer-testnet.drpc.org",
    "https://moonbase-rpc.dwellir.com",
    "wss://moonbase-rpc.dwellir.com"
  ],
  "faucets": [
    "https://www.okx.com/xlayer/faucet"
  ],
  "nativeCurrency": {
    "name": "X Layer Global Utility Token in testnet",
    "symbol": "OKB",
    "decimals": 18
  },
  "infoURL": "https://www.okx.com/xlayer",
  "shortName": "tokb",
  "chainId": 1952,
  "networkId": 1952,
  "explorers": [
    {
      "name": "OKLink",
      "url": "https://www.oklink.com/xlayer-test",
      "standard": "EIP3091"
    }
  ]
};

export const qIEV31990: Chain = {
  "name": "QIEMainnet",
  "chain": "QIEV3",
  "rpc": [
    "https://rpc1mainnet.qie.digital",
    "https://rpc5mainnet.qie.digital"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "QIE",
    "symbol": "QIE",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.qie.digital/",
  "shortName": "QIEV3",
  "chainId": 1990,
  "networkId": 1990,
  "icon": "qiev3",
  "explorers": [
    {
      "name": "QIE mainnet explorer",
      "url": "https://mainnet.qie.digital/"
    }
  ]
};

export const dna1991: Chain = {
  "name": "DNetwork",
  "chain": "DNetwork",
  "rpc": [
    "https://rpc.dnetwork.ai"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "D Network Asset",
    "symbol": "DNA",
    "decimals": 18
  },
  "infoURL": "https://dnetwork.ai",
  "shortName": "dna",
  "chainId": 1991,
  "networkId": 1991,
  "explorers": [
    {
      "name": "DNetwork Scan",
      "url": "https://scan.dnetwork.ai",
      "standard": "EIP3091"
    }
  ]
};

export const ronin2020: Chain = {
  "name": "Ronin",
  "chain": "RON",
  "icon": "ronin",
  "rpc": [
    "https://api.roninchain.com/rpc",
    "https://api-gateway.skymavis.com/rpc?apikey=9aqYLBbxSC6LROynQJBvKkEIsioqwHmr",
    "https://ronin.drpc.org"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [
    "https://faucet.roninchain.com"
  ],
  "nativeCurrency": {
    "name": "Ronin",
    "symbol": "RON",
    "decimals": 18
  },
  "infoURL": "https://roninchain.com/",
  "shortName": "ronin",
  "chainId": 2020,
  "networkId": 2020,
  "explorers": [
    {
      "name": "Ronin Explorer",
      "url": "https://explorer.roninchain.com/"
    }
  ]
};

export const erol2027: Chain = {
  "name": "Martian Chain",
  "chain": "EROL",
  "rpc": [
    "https://martian-rpc1.martianchain.com",
    "https://martian-rpc2.martianchain.com",
    "https://martian-rpc3.martianchain.com",
    "https://martian-rpc4.martianchain.com",
    "https://martian-rpc5.martianchain.com"
  ],
  "faucets": [
    "app.ami.finance"
  ],
  "nativeCurrency": {
    "name": "Erol Musk",
    "symbol": "EROL",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "martianchain.com",
  "shortName": "erol",
  "chainId": 2027,
  "networkId": 2027,
  "icon": "https://martianchain.com/img/martian.png",
  "explorers": [
    {
      "name": "routescan",
      "url": "https://devnet.routescan.io/?rpc=https://rpc1.martianchain.com",
      "icon": "https://cdn.routescan.io/cdn/svg/routescan-new.svg",
      "standard": "EIP3091"
    },
    {
      "name": "subnets avax",
      "url": "https://subnets.avax.network/subnets/28aQXYENwytzxEwyYMZDtGjpUmP67eWkyoHdGGyid6gEACeg9x",
      "icon": "avax",
      "standard": "EIP3091"
    },
    {
      "name": "ErolExplorer",
      "url": "https://explorer.martianchain.com",
      "standard": "EIP3091"
    }
  ]
};

export const armaTestnet2028: Chain = {
  "name": "ArmaChain Testnet",
  "chain": "ArmaChain",
  "icon": "armachain",
  "rpc": [
    "https://rpc.armascan.io"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [
    "https://armafaucet.io"
  ],
  "nativeCurrency": {
    "name": "Testnet ARMA",
    "symbol": "tARMA",
    "decimals": 18
  },
  "infoURL": "https://armadex.io",
  "shortName": "arma-testnet",
  "chainId": 2028,
  "networkId": 2028,
  "explorers": [
    {
      "name": "ArmaScan",
      "url": "https://armascan.io",
      "icon": "armachain",
      "standard": "EIP3091"
    }
  ]
};

export const fst2034: Chain = {
  "name": "FST Smart Chain",
  "chain": "FST",
  "network": "mainnet",
  "rpc": [
    "https://mainnet.fenixst.io",
    "https://node2.fenixst.io",
    "https://node3.fenixst.io",
    "https://node4.fenixst.io",
    "https://node5.fenixst.io"
  ],
  "faucets": [
    "https://faucet.fenixst.io"
  ],
  "nativeCurrency": {
    "name": "FST",
    "symbol": "FST",
    "decimals": 18
  },
  "infoURL": "",
  "shortName": "fst",
  "chainId": 2034,
  "networkId": 2034,
  "explorers": [
    {
      "name": "FSTScan",
      "url": "https://fstscan.fenixst.io",
      "standard": "EIP3091"
    }
  ]
};

export const ntx2070: Chain = {
  "name": "NeutronX Mainnet",
  "chain": "NTX",
  "icon": "neutronx",
  "rpc": [
    "https://rpc.neutronchain.io"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "NeutronX",
    "symbol": "NTX",
    "decimals": 18
  },
  "infoURL": "https://neutronx.com",
  "shortName": "ntx",
  "chainId": 2070,
  "networkId": 2070,
  "explorers": [
    {
      "name": "NeutronX Explorer",
      "url": "https://explorer.neutronchain.io"
    }
  ]
};

export const realchaintest2098: Chain = {
  "name": "RealChain Testnet",
  "chain": "RealChainTest",
  "icon": "realchain",
  "rpc": [
    "https://rlc.devlab.vip/rpc"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "RealCoinTest",
    "symbol": "RT",
    "decimals": 18
  },
  "infoURL": "https://www.realchain.io/",
  "shortName": "realchaintest",
  "chainId": 2098,
  "networkId": 2098,
  "explorers": [
    {
      "name": "RealChainTest explorer",
      "url": "https://rlc.devlab.vip/"
    }
  ]
};

export const iBVM2105: Chain = {
  "name": "IBVM Mainnet",
  "chain": "IBVM Mainnet",
  "icon": "ibvm",
  "rpc": [
    "https://rpc-mainnet.ibvm.io/"
  ],
  "nativeCurrency": {
    "name": "IBVM",
    "symbol": "IBVM",
    "decimals": 18
  },
  "infoURL": "https://ibvm.io/",
  "shortName": "IBVM",
  "chainId": 2105,
  "networkId": 2105,
  "explorers": [
    {
      "name": "IBVM explorer",
      "url": "https://ibvmscan.io",
      "standard": "EIP3091"
    }
  ],
  "status": "active"
};

export const iBVMT2107: Chain = {
  "name": "IBVM Testnet",
  "chain": "IBVM Testnet",
  "icon": "ibvmtest",
  "rpc": [
    "https://rpc-testnet.ibvm.io/"
  ],
  "faucets": [
    "https://faucet.ibvm.io"
  ],
  "nativeCurrency": {
    "name": "IBVM Bitcoin",
    "symbol": "IBVM",
    "decimals": 18
  },
  "infoURL": "https://ibvm.io/",
  "shortName": "IBVMT",
  "chainId": 2107,
  "networkId": 2107,
  "explorers": [
    {
      "name": "IBVM Testnet explorer",
      "url": "https://testnet.ibvmscan.io",
      "standard": "EIP3091"
    }
  ],
  "status": "active"
};

export const parallax2110: Chain = {
  "name": "Parallax",
  "chain": "PARALLAX",
  "rpc": [
    "https://rpc.parallaxprotocol.org"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [
    "https://faucet.parallaxprotocol.org"
  ],
  "nativeCurrency": {
    "name": "Parallax",
    "symbol": "LAX",
    "decimals": 18
  },
  "icon": "parallax",
  "infoURL": "https://parallaxprotocol.org",
  "shortName": "parallax",
  "chainId": 2110,
  "networkId": 2110,
  "explorers": [
    {
      "name": "Parallax Blockscout",
      "url": "https://explorer.parallaxprotocol.org"
    }
  ]
};

export const autheo2127: Chain = {
  "name": "Autheo Mainnet",
  "chain": "Autheo",
  "rpc": [
    "https://rpc1.autheo.com",
    "https://rpc2.autheo.com",
    "https://rpc3.autheo.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "THEO",
    "symbol": "THEO",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://autheo.com",
  "shortName": "autheo",
  "chainId": 2127,
  "networkId": 2127,
  "icon": "autheo",
  "explorers": [
    {
      "name": "Autheo Cosmos Explorer",
      "url": "https://cosmos.autheo.com",
      "icon": "autheo",
      "standard": "none"
    },
    {
      "name": "Autheo Mainnet EVM Explorer",
      "url": "https://evm-explorer.autheo.com",
      "icon": "autheo",
      "standard": "none"
    }
  ]
};

export const mementoTestnet2129: Chain = {
  "name": "Memento Testnet",
  "chain": "Memento",
  "rpc": [
    "https://rpc.memento.zeeve.online"
  ],
  "faucets": [
    "https://faucet.memento.zeeve.online"
  ],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://mementoblockchain.com/zk-chain",
  "shortName": "memento-testnet",
  "chainId": 2129,
  "networkId": 2129,
  "explorers": []
};

export const morphtachyon2184: Chain = {
  "name": "Morph Tachyon",
  "chain": "Morph Tachyon",
  "rpc": [
    "https://api.popdex.xyz/api/v1/web3/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BGB",
    "symbol": "BGB",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://popdex.xyz",
  "shortName": "morphtachyon",
  "chainId": 2184,
  "networkId": 2184,
  "explorers": [
    {
      "name": "Morph Tachyon Explorer",
      "url": "https://app.popdex.xyz/explorer",
      "standard": "EIP3091"
    }
  ]
};

export const stableTestnet2201: Chain = {
  "name": "Stable Testnet",
  "chain": "stable",
  "rpc": [
    "https://rpc.testnet.stable.xyz"
  ],
  "faucets": [
    "https://faucet.stable.xyz"
  ],
  "nativeCurrency": {
    "name": "USDT0",
    "symbol": "USDT0",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP1559"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://stable.xyz",
  "shortName": "stable-testnet",
  "chainId": 2201,
  "networkId": 2201,
  "icon": "stable",
  "explorers": [
    {
      "name": "Stablescan",
      "url": "https://testnet.stablescan.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const moca2288: Chain = {
  "name": "Moca Chain Mainnet",
  "chain": "Moca Chain",
  "rpc": [
    "https://rpc.mocachain.org"
  ],
  "faucets": [
    "https://scan.mocachain.org/faucet"
  ],
  "nativeCurrency": {
    "name": "MOCA",
    "symbol": "MOCA",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://mocachain.org",
  "shortName": "moca",
  "chainId": 2288,
  "networkId": 2288,
  "icon": "moca",
  "explorers": [
    {
      "name": "Moca Chain Scan",
      "url": "https://scan.mocachain.org",
      "icon": "moca",
      "standard": "EIP3091"
    }
  ]
};

export const besc2372: Chain = {
  "name": "BESC HYPERCHAIN",
  "chain": "BESC",
  "rpc": [
    "https://rpc.beschyperchain.com",
    "wss://rpc.beschyperchain.com/ws"
  ],
  "faucets": "https://faucet.beschyperchain.com",
  "nativeCurrency": {
    "name": "BESC HyperChain",
    "symbol": "BESC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://beschyperchain.com",
  "shortName": "besc",
  "chainId": 2372,
  "networkId": 2372,
  "icon": "beschyperchain",
  "explorers": [
    {
      "name": "BESC Explorer",
      "url": "https://explorer.beschyperchain.com",
      "icon": "beschyperchain",
      "standard": "EIP3091"
    }
  ]
};

export const tHaus2443: Chain = {
  "name": "Haus Chain Testnet",
  "chain": "HAUS",
  "rpc": [
    "https://rpc-testnet.hausserver.xyz"
  ],
  "faucets": [
    "https://faucet-testnet.hausserver.xyz"
  ],
  "nativeCurrency": {
    "name": "Haus",
    "symbol": "HAUS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.hausserver.xyz",
  "shortName": "t-haus",
  "chainId": 2443,
  "networkId": 2443,
  "icon": "haus",
  "explorers": [
    {
      "name": "Haus Chain Testnet Explorer",
      "url": "https://explorer-testnet.hausserver.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const ccc2500: Chain = {
  "name": "CChain",
  "chain": "CChain",
  "rpc": [
    "https://rpc.cchain.cc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "CCC",
    "symbol": "CCC",
    "decimals": 18
  },
  "infoURL": "https://cchain.cc",
  "shortName": "ccc",
  "chainId": 2500,
  "networkId": 2500,
  "explorers": [
    {
      "name": "cchainscan",
      "url": "https://cchainscan.cc",
      "standard": "EIP3091"
    }
  ]
};

export const svpTestnet2517: Chain = {
  "name": "SVP Chain Testnet",
  "title": "SVP Testnet",
  "chain": "SVPTEST",
  "status": "active",
  "rpc": [
    "https://svp-dataseed1-testnet.svpchain.org",
    "https://svp-dataseed2-testnet.svpchain.org",
    "https://svp-dataseed3-testnet.svpchain.org"
  ],
  "nativeCurrency": {
    "name": "SVP Coin",
    "symbol": "SVP",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://svpchain.org",
  "shortName": "svp-testnet",
  "chainId": 2517,
  "networkId": 2517,
  "icon": "svp",
  "explorers": [
    {
      "name": "SVP Testnet Explorer",
      "url": "https://testnet.svpchain.com",
      "standard": "EIP3091",
      "icon": "svp"
    }
  ],
  "faucets": [
    "https://faucet.svpchain.org"
  ]
};

export const svp2518: Chain = {
  "name": "SVP Chain",
  "title": "SVP Mainnet",
  "chain": "SVP",
  "status": "active",
  "rpc": [
    "https://svp-dataseed1.svpchain.org",
    "https://svp-dataseed2.svpchain.org",
    "https://svp-dataseed3.svpchain.org"
  ],
  "nativeCurrency": {
    "name": "SVP Coin",
    "symbol": "SVP",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://svpchain.org",
  "shortName": "svp",
  "chainId": 2518,
  "networkId": 2518,
  "icon": "svp",
  "explorers": [
    {
      "name": "SVP Explorer",
      "url": "https://explorer.svpchain.com",
      "standard": "EIP3091",
      "icon": "svp"
    }
  ]
};

export const anubi2526: Chain = {
  "name": "ANUBIS Testnet",
  "chain": "ANUBIS",
  "rpc": [
    "https://test-rpc.anubispace.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ANUBI",
    "symbol": "ANUBI",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://docs.anubispace.org",
  "shortName": "anubi",
  "chainId": 2526,
  "networkId": 2526,
  "icon": "https://test-scan.anubispace.org/images/anubis_icon_800.png",
  "explorers": [
    {
      "name": "anubiscan",
      "url": "https://test-scan.anubispace.org",
      "icon": "https://test-scan.anubispace.org/images/anubis_icon_800.png",
      "standard": "EIP3091"
    }
  ]
};

export const h22582: Chain = {
  "name": "H2",
  "chain": "H2",
  "rpc": [
    "https://rpc.h2chain.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "H2",
    "symbol": "H2",
    "decimals": 18
  },
  "infoURL": "https://h2chain.io",
  "shortName": "h2",
  "chainId": 2582,
  "networkId": 2582,
  "icon": "https://h2inno.com/logo.svg",
  "explorers": [
    {
      "name": "H2Scan",
      "url": "https://h2scan.io",
      "standard": "EIP3091"
    }
  ]
};

export const kto2643: Chain = {
  "name": "Notes Network Mainnet",
  "chain": "NOTES",
  "rpc": [
    "https://rpc-mainnet.noschain.org"
  ],
  "chainId": 2643,
  "icon": "https://ipfs.io/ipfs/bafkreidogvpead527s7yyfujjs32jdcsuckee7jafvj6eoeew33ozj3p4q",
  "shortName": "kto",
  "networkId": 2643,
  "nativeCurrency": {
    "name": "Kto",
    "symbol": "KTO",
    "decimals": 11
  },
  "infoURL": "https://note.bet",
  "explorers": [
    {
      "name": "NosScan",
      "url": "https://nosscan.noschain.org",
      "standard": "EIP3091"
    }
  ]
};

export const spld2691: Chain = {
  "name": "Splendor Mainnet",
  "chain": "SPLENDOR",
  "rpc": [
    "https://mainnet-rpc.splendor.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Splendor Token",
    "symbol": "SPLD",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://splendor.org",
  "shortName": "spld",
  "chainId": 2691,
  "networkId": 2691,
  "icon": "splendor",
  "explorers": [
    {
      "name": "Splendor Explorer",
      "url": "https://explorer.splendor.org",
      "icon": "splendor",
      "standard": "EIP3091"
    }
  ]
};

export const spldt2692: Chain = {
  "name": "Splendor Testnet",
  "chain": "SPLD-TESTNET",
  "rpc": [
    "https://testnet-rpc.splendor.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Splendor Test Token",
    "symbol": "SPLDT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://splendor.org",
  "shortName": "spldt",
  "chainId": 2692,
  "networkId": 2692,
  "icon": "spld-testnet",
  "explorers": [
    {
      "name": "Splendor Testnet Explorer",
      "url": "https://testnet-explorer.splendor.org",
      "icon": "splendor",
      "standard": "EIP3091"
    }
  ]
};

export const orbinum2700: Chain = {
  "name": "Orbinum Testnet",
  "chain": "ORB",
  "icon": "https://cdn.orbinum.io/assets/isotipo-black.png",
  "rpc": [
    "https://rpc.testnet.orbinum.io"
  ],
  "faucets": [
    "https://faucet.orbinum.network"
  ],
  "nativeCurrency": {
    "name": "ORB",
    "symbol": "ORB",
    "decimals": 18
  },
  "infoURL": "https://www.orbinum.network",
  "shortName": "orbinum",
  "chainId": 2700,
  "networkId": 2700,
  "explorers": [
    {
      "name": "Orbinum Privacy Explorer",
      "url": "https://explorer.testnet.orbinum.network",
      "icon": "https://cdn.orbinum.io/assets/isotipo-black.png",
      "standard": "EIP3091"
    }
  ]
};

export const clawWorldBox2721: Chain = {
  "name": "claw world box",
  "chain": "AGW",
  "icon": "https://raw.githubusercontent.com/claw-world-box/claw-world-box-website/refs/heads/main/public/logo-rgb.svg",
  "rpc": [
    "https://rpc.clawworldbox.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "DA",
    "symbol": "DA",
    "decimals": 18
  },
  "infoURL": "https://www.clawworldbox.com",
  "shortName": "claw-world-box",
  "chainId": 2721,
  "networkId": 2721,
  "explorers": [
    {
      "name": "Claw World Box Explorer",
      "url": "https://explorer.clawworldbox.com/",
      "icon": "https://raw.githubusercontent.com/claw-world-box/claw-world-box-website/refs/heads/main/public/logo-rgb.svg",
      "standard": "EIP3091"
    }
  ]
};

export const creatorChainMainnet2787: Chain = {
  "name": "Creator Chain Mainnet",
  "chain": "Creator Chain",
  "rpc": [
    "https://rpc.mainnet.oncreator.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.oncreator.com",
  "shortName": "creator-chain-mainnet",
  "chainId": 2787,
  "networkId": 2787,
  "explorers": [
    {
      "name": "Creator Chain Mainnet Explorer",
      "url": "https://explorer.mainnet.oncreator.com",
      "standard": "EIP3091"
    }
  ]
};

export const aere2800: Chain = {
  "name": "AERE Network",
  "chain": "AERE",
  "rpc": [
    "https://rpc.aere.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "AERE",
    "symbol": "AERE",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://aere.network",
  "shortName": "aere",
  "chainId": 2800,
  "networkId": 2800,
  "explorers": [
    {
      "name": "AERE Explorer",
      "url": "https://explorer.aere.network",
      "standard": "EIP3091"
    }
  ]
};

export const alpen2892: Chain = {
  "name": "Alpen Testnet",
  "chain": "Alpen",
  "rpc": [
    "https://rpc.testnet.alpenlabs.io"
  ],
  "faucets": [
    "https://faucet.testnet.alpenlabs.io/"
  ],
  "nativeCurrency": {
    "name": "Signet BTC",
    "symbol": "sBTC",
    "decimals": 8
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "",
  "shortName": "alpen",
  "chainId": 2892,
  "networkId": 2892,
  "icon": "https://avatars.githubusercontent.com/u/113091135",
  "explorers": [
    {
      "name": "explorer",
      "url": "https://explorer.testnet.alpenlabs.io",
      "icon": "",
      "standard": ""
    }
  ]
};

export const morph2910: Chain = {
  "name": "Morph Hoodi",
  "chain": "ETH",
  "rpc": [
    "https://rpc-hoodi-bgw.morph.network",
    "https://rpc-hoodi.morph.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.morph.network",
  "shortName": "morph",
  "chainId": 2910,
  "networkId": 2910,
  "icon": "https://icons.llamao.fi/icons/chains/rsz_morph.jpg",
  "explorers": [
    {
      "name": "Morph Hoodi Testnet Explorer",
      "url": "https://explorer-hoodi.morph.network",
      "standard": "EIP3091"
    }
  ]
};

export const bgg3005: Chain = {
  "name": "BGGChain",
  "chain": "BGG",
  "rpc": [
    "https://rpc.bggchain.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BGGChain",
    "symbol": "BGG",
    "decimals": 18
  },
  "infoURL": "https://bggchain.com/",
  "shortName": "bgg",
  "chainId": 3005,
  "networkId": 3005,
  "icon": "bgg",
  "explorers": [
    {
      "name": "bggchain",
      "url": "https://bggscan.com/",
      "icon": "bgg",
      "standard": "EIP3091"
    }
  ]
};

export const aic3018: Chain = {
  "name": "AICChain Mainnet",
  "chain": "AIC",
  "rpc": [
    "https://rpc.aicchain.io"
  ],
  "wss": [
    "wss://ws.aicchain.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "AICChain",
    "symbol": "AIC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.aicchain.io",
  "shortName": "aic",
  "chainId": 3018,
  "networkId": 3018,
  "icon": "https://aic-assets.aicchain.io/android-chrome-192x192.png",
  "explorers": [
    {
      "name": "AICChain Explorer",
      "url": "https://scan.aicchain.io",
      "icon": "aic",
      "standard": "EIP3091"
    }
  ]
};

export const svm3109: Chain = {
  "name": "SatoshiVM",
  "chain": "BTC",
  "icon": "satoshivm",
  "rpc": [
    "https://alpha-rpc-node-http.svmscan.io/"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "SatoshiVM",
    "symbol": "BTC",
    "decimals": 18
  },
  "infoURL": "https://www.satoshivm.io/",
  "shortName": "svm",
  "chainId": 3109,
  "networkId": 3109,
  "explorers": [
    {
      "name": "Svmscan",
      "url": "https://svmscan.io/"
    }
  ]
};

export const alpha3111: Chain = {
  "name": "Alpha Chain Mainnet",
  "chain": "Alpha Chain",
  "rpc": [
    "https://rpc.goalpha.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://docs.alphatoken.com/AlphaChain/about-alpha-chain",
  "shortName": "alpha",
  "chainId": 3111,
  "networkId": 3111,
  "icon": "alphachain",
  "explorers": [
    {
      "name": "Alpha Chain Scan",
      "url": "https://scan.goalpha.org",
      "icon": "alphachain",
      "standard": "EIP3091"
    }
  ]
};

export const bKC3188: Chain = {
  "name": "BeeChain Mainnet",
  "chain": "BKC",
  "rpc": [
    "https://rpc.beechain.ai"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BeeChain",
    "symbol": "BKC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://beechain.ai",
  "shortName": "BKC",
  "chainId": 3188,
  "networkId": 3188,
  "icon": "BKC",
  "explorers": [
    {
      "name": "BeeChainScan",
      "url": "https://scan.beechain.ai",
      "icon": "BeeScan",
      "standard": "EIP3091"
    }
  ]
};

export const qbc3303: Chain = {
  "name": "Qubitcoin",
  "chain": "QBC",
  "rpc": [
    "https://qbc.network/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Qubitcoin",
    "symbol": "QBC",
    "decimals": 8
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://qbc.network",
  "shortName": "qbc",
  "chainId": 3303,
  "networkId": 3303,
  "explorers": [
    {
      "name": "Qubitcoin Explorer",
      "url": "https://qbc.network/explorer",
      "standard": "EIP3091"
    }
  ],
  "status": "active"
};

export const vora3318: Chain = {
  "name": "VORA Chain",
  "chain": "VORA",
  "icon": "vora",
  "rpc": [
    "https://vorascan.io/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "VORA",
    "symbol": "VRA",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://vorachain.com",
  "shortName": "vora",
  "chainId": 3318,
  "networkId": 3318,
  "explorers": [
    {
      "name": "vorascan",
      "url": "https://vorascan.io",
      "standard": "EIP3091"
    }
  ]
};

export const aet3355: Chain = {
  "name": "AETRON Mainnet",
  "chain": "AETRON",
  "rpc": [
    "https://entrypoint-mainnet.aetron.ai/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "AETRON",
    "symbol": "AET",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://aetron.io",
  "shortName": "aet",
  "chainId": 3355,
  "networkId": 3355
};

export const tjr3377: Chain = {
  "name": "Tajirchain",
  "chain": "TJR",
  "rpc": [
    "https://rpc.tajirchain.com",
    "wss://ws.tajirchain.com"
  ],
  "faucets": [],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "nativeCurrency": {
    "name": "Tajir",
    "symbol": "TJR",
    "decimals": 18
  },
  "infoURL": "https://tajirchain.com",
  "shortName": "tjr",
  "chainId": 3377,
  "networkId": 3377,
  "status": "active",
  "explorers": [
    {
      "name": "Tajirchain Explorer",
      "url": "https://tjrscan.com/",
      "icon": "tajir",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [
      {
        "url": "https://bridge.tajirchain.com"
      }
    ]
  }
};

export const bytechaintest3399: Chain = {
  "name": "ByteChain Testnet",
  "chain": "tBEXC",
  "rpc": [
    "https://test-rpc.bexc.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BEXC",
    "symbol": "BEXC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://bexc.io",
  "shortName": "bytechaintest",
  "chainId": 3399,
  "networkId": 3399,
  "icon": "bytechain",
  "explorers": [
    {
      "name": "ByteChain Testnet Explorer",
      "url": "https://testnet.bexc.io",
      "icon": "bytechain",
      "standard": "EIP3091"
    }
  ]
};

export const amx3535: Chain = {
  "name": "Amero X Network",
  "chain": "AMX",
  "rpc": [
    "https://amxrpc.link/public/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Amero X",
    "symbol": "AMX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://amxscan.com",
  "shortName": "amx",
  "chainId": 3535,
  "networkId": 3535,
  "icon": "https://amxscan.com/images/amero_x_logo.png",
  "explorers": [
    {
      "name": "Amero X Scan",
      "url": "https://amxscan.com",
      "icon": "https://amxscan.com/images/amero_x_logo.png",
      "standard": "EIP3091"
    }
  ]
};

export const trustgreen3567: Chain = {
  "name": "Trustgreen Chain",
  "chain": "Trustgreen",
  "rpc": [
    "https://rpc.trustgreenscan.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Trustgreen",
    "symbol": "IT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://trustgreenchain.com/",
  "shortName": "Trustgreen",
  "chainId": 3567,
  "networkId": 3567,
  "icon": "https://trustgreenchain.com/favicon.png",
  "explorers": [
    {
      "name": "trustgreenscan",
      "url": "https://trustgreenscan.com/",
      "icon": "trustgreenscan",
      "standard": "EIP3091"
    }
  ]
};

export const aiFi3600: Chain = {
  "name": "AiFinance Smart Chain",
  "chain": "AiFi",
  "rpc": [
    "https://rpc.aifisc.io",
    "https://rpc.ascscan.io",
    "https://rpc.aifiv2.ai"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "AIFI",
    "symbol": "AIFI",
    "decimals": 18
  },
  "infoURL": "https://aifisc.io/",
  "shortName": "AiFi",
  "chainId": 3600,
  "networkId": 3600,
  "explorers": [
    {
      "name": "AiFiScan",
      "url": "https://ascscan.io/",
      "standard": "EIP3091"
    }
  ]
};

export const inri3777: Chain = {
  "name": "INRI CHAIN",
  "chain": "INRI",
  "icon": "inri",
  "rpc": [
    "https://rpc.inri.life",
    "https://rpc-chain.inri.life"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "INRI",
    "symbol": "INRI",
    "decimals": 18
  },
  "infoURL": "https://inri.life",
  "shortName": "inri",
  "chainId": 3777,
  "networkId": 3777,
  "explorers": [
    {
      "name": "INRI Explorer",
      "url": "https://explorer.inri.life",
      "standard": "EIP3091"
    }
  ]
};

export const haustNetwork3864: Chain = {
  "name": "Haust Network",
  "chain": "HAUST",
  "icon": "https://ipfs.io/ipfs/QmXVnvLrEEj9Nev2r67Z1tRc1jLDeqC3y95thAkEiCyjwb",
  "rpc": [
    "https://haust-network-rpc.eu-north-2.gateway.fm/",
    "wss://haust-network-rpc.eu-north-2.gateway.fm/ws"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Haust",
    "symbol": "HAUST",
    "decimals": 18
  },
  "infoURL": "https://haust.network/",
  "shortName": "haust-network",
  "chainId": 3864,
  "networkId": 3864,
  "explorers": [
    {
      "name": "Haust Network blockchain explorer",
      "url": "https://haustscan.com",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [
      {
        "url": "https://haustbridge.com"
      }
    ]
  }
};

export const nEX3945: Chain = {
  "name": "Nexus Testnet",
  "chain": "Nexus Testnet",
  "rpc": [
    "https://testnet.rpc.nexus.xyz"
  ],
  "faucets": [
    "https://faucet.nexus.xyz"
  ],
  "nativeCurrency": {
    "name": "Nexus",
    "symbol": "NEX",
    "decimals": 18
  },
  "infoURL": "https://nexus.xyz",
  "shortName": "NEX",
  "chainId": 3945,
  "networkId": 3495,
  "icon": "https://framerusercontent.com/images/AeDwlPlZaXChRFVGExpfgFn1crs.png?width=433&height=497",
  "explorers": [
    {
      "name": "Nexus Testnet Explorer",
      "url": "https://nexus.testnet.blockscout.com",
      "icon": "https://framerusercontent.com/images/AeDwlPlZaXChRFVGExpfgFn1crs.png?width=433&height=497",
      "standard": "EIP3091"
    }
  ]
};

export const nex3946: Chain = {
  "name": "Nexus Mainnet",
  "chain": "NEX",
  "rpc": [
    "https://mainnet.rpc.nexus.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Nexus",
    "symbol": "NEX",
    "decimals": 18
  },
  "infoURL": "https://nexus.xyz",
  "shortName": "nex",
  "chainId": 3946,
  "networkId": 3946,
  "icon": "https://framerusercontent.com/images/AeDwlPlZaXChRFVGExpfgFn1crs.png?width=433&height=497",
  "explorers": [
    {
      "name": "Nexus Explorer",
      "url": "https://explorer.nexus.xyz",
      "icon": "https://framerusercontent.com/images/AeDwlPlZaXChRFVGExpfgFn1crs.png?width=433&height=497",
      "standard": "EIP3091"
    }
  ]
};

export const gan4048: Chain = {
  "name": "GANchain L1",
  "chain": "GAN",
  "rpc": [
    "https://rpc.gpu.net"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "GPUnet",
    "symbol": "GPU",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://gpu.net",
  "shortName": "gan",
  "chainId": 4048,
  "networkId": 4048,
  "icon": "gpu",
  "explorers": [
    {
      "name": "ganscan",
      "url": "https://ganscan.gpu.net",
      "icon": "gpu",
      "standard": "EIP3091"
    }
  ]
};

export const ecna4111: Chain = {
  "name": "E Canna Mainnet",
  "chain": "ECNA",
  "rpc": [
    "https://rpc.ecnascan.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "E Canna",
    "symbol": "ECNA",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://ecnascan.com",
  "shortName": "ecna",
  "chainId": 4111,
  "networkId": 4111,
  "explorers": [
    {
      "name": "ecnascan",
      "url": "https://explorer.ecnascan.com",
      "standard": "EIP3091"
    }
  ]
};

export const tecna4112: Chain = {
  "name": "E Canna Testnet",
  "chain": "tECNA",
  "rpc": [
    "https://testnetrpc.ecnascan.com"
  ],
  "faucets": [
    "https://testnetexplorer.ecnascan.com/faucet"
  ],
  "nativeCurrency": {
    "name": "E Canna Testnet",
    "symbol": "tECNA",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://ecnascan.com",
  "shortName": "tecna",
  "chainId": 4112,
  "networkId": 4112,
  "explorers": [
    {
      "name": "ecnascan-testnet",
      "url": "https://testnetexplorer.ecnascan.com",
      "standard": "EIP3091"
    }
  ]
};

export const citrea4114: Chain = {
  "name": "Citrea Mainnet",
  "chain": "Citrea",
  "rpc": [
    "https://rpc.mainnet.citrea.xyz/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Citrea BTC",
    "symbol": "cBTC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://citrea.xyz/",
  "shortName": "citrea",
  "chainId": 4114,
  "networkId": 4114,
  "icon": "citrea",
  "explorers": [
    {
      "name": "Citrea Mainnet Explorer",
      "url": "https://explorer.mainnet.citrea.xyz",
      "icon": "citrea",
      "standard": "EIP3091"
    }
  ]
};

export const rise4153: Chain = {
  "name": "RISE",
  "chain": "ETH",
  "rpc": [
    "https://rpc.risechain.com/",
    "wss://rpc.risechain.com/ws"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    },
    {
      "name": "EIP7702"
    }
  ],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://risechain.com",
  "shortName": "rise",
  "chainId": 4153,
  "networkId": 4153,
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://explorer.risechain.com/",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [
      {
        "url": "https://bridge.risechain.com"
      }
    ]
  }
};

export const sxMainnet4162: Chain = {
  "name": "SX Network",
  "chain": "SXR",
  "rpc": [
    "https://rpc-rollup.sx.technology"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "SX Token",
    "symbol": "SX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://sx.technology",
  "shortName": "sx-mainnet",
  "chainId": 4162,
  "networkId": 4162,
  "explorers": [
    {
      "name": "SX Explorer",
      "url": "https://explorer.sx.technology",
      "standard": "EIP3091"
    }
  ]
};

export const tempoPresto4217: Chain = {
  "name": "Tempo Mainnet",
  "chain": "Tempo",
  "icon": "tempo",
  "rpc": [
    "https://tempo-mainnet.drpc.org",
    "wss://tempo-mainnet.drpc.org",
    "https://rpc.mainnet.tempo.xyz",
    "wss://rpc.mainnet.tempo.xyz"
  ],
  "faucets": [
    "https://docs.tempo.xyz/quickstart/faucet"
  ],
  "nativeCurrency": {
    "name": "US Dollar",
    "symbol": "USD",
    "decimals": 18
  },
  "infoURL": "https://tempo.xyz",
  "shortName": "tempo-presto",
  "chainId": 4217,
  "networkId": 4217,
  "explorers": [
    {
      "name": "Tempo Explorer",
      "url": "https://explore.tempo.xyz",
      "standard": "EIP3091"
    }
  ],
  "status": "active"
};

export const genlayerTestnets4221: Chain = {
  "name": "GenLayer Testnets",
  "chain": "GenLayer",
  "rpc": [
    "https://zksync-os-testnet-genlayer.zksync.dev"
  ],
  "faucets": [
    "https://testnet-faucet.genlayer.foundation/"
  ],
  "nativeCurrency": {
    "name": "GEN Token",
    "symbol": "GEN",
    "decimals": 18
  },
  "infoURL": "https://www.genlayer.com",
  "shortName": "genlayer-testnets",
  "chainId": 4221,
  "networkId": 4221,
  "explorers": [
    {
      "name": "GenLayer Testnets Explorer",
      "url": "https://zksync-os-testnet-genlayer.explorer.zksync.dev",
      "standard": "EIP3091"
    }
  ]
};

export const hashfire4227: Chain = {
  "name": "Hashfire Testnet",
  "chain": "Hashfire Testnet",
  "icon": "hashfire",
  "rpc": [
    "https://subnets.avax.network/hashfire/testnet/rpc"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "HASHD",
    "symbol": "HASHD",
    "decimals": 18
  },
  "infoURL": "https://hashfire.xyz/",
  "shortName": "hashfire",
  "chainId": 4227,
  "networkId": 4227,
  "explorers": [
    {
      "name": "Avalanche L1 Explorer",
      "url": "https://subnets-test.avax.network/hashfire/",
      "standard": "EIP3091"
    }
  ]
};

export const tpix4289: Chain = {
  "name": "TPIX Chain",
  "chain": "TPIX",
  "rpc": [
    "https://rpc.tpix.online"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "TPIX",
    "symbol": "TPIX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://tpix.online",
  "shortName": "tpix",
  "chainId": 4289,
  "networkId": 4289,
  "explorers": [
    {
      "name": "TPIX Explorer",
      "url": "https://explorer.tpix.online",
      "standard": "EIP3091"
    }
  ]
};

export const megaeth4326: Chain = {
  "name": "MegaETH",
  "chain": "MEGA",
  "rpc": [
    "https://mainnet.megaeth.com/rpc"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://www.megaeth.com",
  "shortName": "megaeth",
  "chainId": 4326,
  "networkId": 4326,
  "explorers": [
    {
      "name": "Etherscan",
      "url": "https://mega.etherscan.io",
      "standard": "EIP3091"
    },
    {
      "name": "Blockscout",
      "url": "https://megaeth.blockscout.com",
      "standard": "EIP3091"
    }
  ]
};

export const liteforge4441: Chain = {
  "name": "LitVM Liteforge Testnet",
  "chain": "Liteforge",
  "rpc": [
    "https://rpc.testnet.liteforge.zeeve.net/"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [
    "https://faucet.testnet.liteforge.zeeve.net/"
  ],
  "nativeCurrency": {
    "name": "zkLTC",
    "symbol": "zkLTC",
    "decimals": 18
  },
  "shortName": "liteforge",
  "chainId": 4441,
  "networkId": 4441,
  "explorers": [
    {
      "name": "Liteforge Explorer",
      "url": "https://explorer.testnet.liteforge.zeeve.net",
      "standard": "EIP3091"
    }
  ]
};

export const denTestnet4442: Chain = {
  "name": "Denergy Testnet",
  "chain": "DEN",
  "rpc": [
    "https://rpc.denergytestnet.com/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "WATT",
    "symbol": "WATT",
    "decimals": 18
  },
  "infoURL": "https://d.energy/",
  "shortName": "den-testnet",
  "chainId": 4442,
  "networkId": 4442,
  "icon": "denergy",
  "explorers": [
    {
      "name": "Denergy Explorer",
      "url": "https://explorer.denergytestnet.com",
      "icon": "denergy",
      "standard": "EIP3091"
    }
  ]
};

export const oxin4457: Chain = {
  "name": "Oxin Chain",
  "chain": "OXIN",
  "rpc": [
    "https://rpc.oxinchain.io",
    "https://rpc1.oxinchain.io",
    "https://rpc2.oxinchain.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Oxin",
    "symbol": "OXIN",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://oxinchain.io",
  "shortName": "oxin",
  "chainId": 4457,
  "networkId": 4457,
  "explorers": [
    {
      "name": "oxinscan",
      "url": "https://scan.oxinchain.io",
      "standard": "EIP3091"
    }
  ]
};

export const sC4509: Chain = {
  "name": "Studio Chain",
  "chain": "SC",
  "rpc": [
    "https://studiochain-cf4a1621.calderachain.xyz/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Karrat coin",
    "symbol": "KARRAT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://studiochain-cf4a1621.hub.caldera.xyz",
  "shortName": "SC",
  "chainId": 4509,
  "networkId": 4509,
  "icon": "karrat",
  "explorers": [
    {
      "name": "Studio Chain explorer",
      "url": "https://studiochain-cf4a1621.calderaexplorer.xyz/",
      "icon": "karrat",
      "standard": "EIP3091"
    }
  ]
};

export const gtbs4599: Chain = {
  "name": "GTBS Chain",
  "chain": "GTBS",
  "rpc": [
    "https://mainnet-rpc.gtbsblockchain.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "GTBS",
    "symbol": "GTBS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://gtbs.live",
  "shortName": "gtbs",
  "chainId": 4599,
  "networkId": 4599,
  "icon": "gtbs",
  "explorers": [
    {
      "name": "gtbs",
      "url": "https://gtbsblockchain.com",
      "icon": "gtbs",
      "standard": "EIP3091"
    }
  ]
};

export const hsp46114611: Chain = {
  "name": "HashSphere Private Network 4611",
  "chain": "hsphere-private-4611",
  "rpc": [
    "http://rpc-4611.champagnesphere.net/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "hbar",
    "symbol": "HBAR",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://hashgraph.com",
  "shortName": "hsp-4611",
  "chainId": 4611,
  "networkId": 4611,
  "explorers": [
    {
      "name": "HashSphere Explorer 4611",
      "url": "http://explorer-4611.champagnesphere.net",
      "standard": "none"
    }
  ]
};

export const hsp46124612: Chain = {
  "name": "HashSphere Private Network 4612",
  "chain": "hsphere-private-4612",
  "rpc": [
    "http://rpc-4612.champagnesphere.net/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "hbar",
    "symbol": "HBAR",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://hashgraph.com",
  "shortName": "hsp-4612",
  "chainId": 4612,
  "networkId": 4612,
  "explorers": [
    {
      "name": "HashSphere Explorer 4612",
      "url": "http://explorer-4612.champagnesphere.net",
      "standard": "none"
    }
  ]
};

export const robinhoodchain4663: Chain = {
  "name": "Robinhood Chain",
  "chain": "Robinhood Chain",
  "icon": "https://cdn.robinhood.com/assets/generated_assets/hoodchain_docsite/rh_favicon_120.png",
  "rpc": [
    "https://rpc.mainnet.chain.robinhood.com"
  ],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://docs.robinhood.com/chain",
  "shortName": "robinhoodchain",
  "chainId": 4663,
  "networkId": 4663,
  "explorers": [
    {
      "name": "Robinhood Chain Blockscout Explorer",
      "url": "https://robinhoodchain.blockscout.com",
      "standard": "EIP3091"
    },
    {
      "name": "RobinScanner",
      "url": "https://robinscanner.com",
      "standard": "EIP3091"
    }
  ],
  "status": "active"
};

export const bSURE4848: Chain = {
  "name": "BlockSurety",
  "chain": "BSURE",
  "rpc": [
    "https://rpc.blocksurety.net/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BSURE",
    "symbol": "BSURE",
    "decimals": 18
  },
  "infoURL": "https://rpc.blocksurety.net/",
  "shortName": "BSURE",
  "chainId": 4848,
  "networkId": 4848,
  "explorers": [
    {
      "name": "BlockSurety Explorer",
      "url": "https://blocksurety.net",
      "standard": "none"
    }
  ]
};

export const prodao4936: Chain = {
  "name": "Prodao Mainnet",
  "chain": "PROD",
  "rpc": [
    "https://rpc.prodao.club"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ProDAO Token",
    "symbol": "PROD",
    "decimals": 18
  },
  "infoURL": "https://prodao.club",
  "shortName": "prodao",
  "chainId": 4936,
  "networkId": 4936,
  "icon": "prodao",
  "explorers": [
    {
      "name": "ProDAO Explorer",
      "url": "https://explorer.prodao.club",
      "standard": "EIP3091"
    }
  ]
};

export const mATRIX4959: Chain = {
  "name": "Matrix AI Network",
  "chain": "MATRIX",
  "rpc": [
    "https://rpc.matrix.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Matrix AI Network",
    "symbol": "MAN",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://matrix.io",
  "shortName": "MATRIX",
  "chainId": 4959,
  "networkId": 4959,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://scan.matrix.io",
      "standard": "EIP3091"
    }
  ]
};

export const hyprTestnet4978: Chain = {
  "name": "hypr testnet",
  "chain": "HYPR",
  "rpc": [
    "https://hypr-testnet.tail9d9f7e.ts.net"
  ],
  "faucets": [
    "https://hypr-testnet.tail9d9f7e.ts.net/faucet"
  ],
  "nativeCurrency": {
    "name": "hypr testnet",
    "symbol": "HYPR",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://hypr-testnet.tail9d9f7e.ts.net",
  "shortName": "hypr-testnet",
  "chainId": 4978,
  "networkId": 4978,
  "icon": "hypr-network",
  "explorers": [
    {
      "name": "hypr testnet explorer",
      "url": "https://hypr-testnet.tail9d9f7e.ts.net",
      "standard": "none"
    }
  ]
};

export const somnia5031: Chain = {
  "name": "Somnia Mainnet",
  "chain": "SOMNIA",
  "rpc": [
    "https://api.infra.mainnet.somnia.network",
    "https://somnia-rpc.publicnode.com",
    "https://rpc.ankr.com/somnia_mainnet"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "SOMI",
    "symbol": "SOMI",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://somnia.network",
  "shortName": "Somnia",
  "chainId": 5031,
  "networkId": 5031,
  "icon": "somnia",
  "explorers": [
    {
      "name": "Somnia Explorer",
      "url": "https://explorer.somnia.network",
      "icon": "somnia explorer",
      "standard": "EIP3091"
    }
  ]
};

export const arc5042: Chain = {
  "name": "Arc",
  "chain": "arc",
  "rpc": [
    "https://rpc.mainnet.arc.io",
    "https://rpc.blockdaemon.mainnet.arc.io",
    "https://rpc.drpc.mainnet.arc.io",
    "https://rpc.quicknode.mainnet.arc.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "USDC",
    "symbol": "USDC",
    "decimals": 18
  },
  "infoURL": "https://www.arc.io/",
  "shortName": "arc",
  "chainId": 5042,
  "networkId": 5042,
  "icon": "arc",
  "explorers": [
    {
      "name": "Arc Explorer",
      "url": "https://explorer.arc.io/",
      "icon": "arc",
      "standard": "EIP3091"
    }
  ]
};

export const fusionlayer5070: Chain = {
  "name": "FusionLayer",
  "chain": "FusionLayer",
  "icon": "fusionlayer",
  "rpc": [
    "https://rpc.fusionlayer.org",
    "https://rpc.fusionscan.net"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "FusionLayer",
    "symbol": "FXL",
    "decimals": 18
  },
  "infoURL": "https://fusionlayer.org",
  "shortName": "fusionlayer",
  "chainId": 5070,
  "networkId": 5070,
  "explorers": [
    {
      "name": "FusionScan",
      "url": "https://fusionscan.net",
      "standard": "none"
    }
  ]
};

export const aNC5108: Chain = {
  "name": "AnyChain",
  "chain": "ANC",
  "icon": "https://raw.githubusercontent.com/solutionprovider25/anychain-assets/679a9a295981b2d0a9b7445ce1b3d670e82d972d/anychainscan_icon.png",
  "rpc": [
    "https://mainnet.anychainscan.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ANC",
    "symbol": "ANC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://anychainscan.com",
  "shortName": "ANC",
  "chainId": 5108,
  "networkId": 5108,
  "explorers": [
    {
      "name": "AnyChain Explorer",
      "url": "https://anychainscan.com",
      "icon": "https://raw.githubusercontent.com/solutionprovider25/anychain-assets/679a9a295981b2d0a9b7445ce1b3d670e82d972d/anychainscan_icon.png",
      "standard": "EIP3091"
    }
  ]
};

export const mocat5151: Chain = {
  "name": "Moca Chain Devnet",
  "chain": "Moca Chain",
  "rpc": [
    "https://devnet-rpc.mocachain.org"
  ],
  "faucets": [
    "https://devnet-scan.mocachain.org/faucet"
  ],
  "nativeCurrency": {
    "name": "MOCA",
    "symbol": "MOCA",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://mocachain.org",
  "shortName": "mocat",
  "chainId": 5151,
  "networkId": 5151,
  "icon": "moca",
  "explorers": [
    {
      "name": "Moca Chain Scan",
      "url": "https://devnet-scan.mocachain.org",
      "icon": "moca",
      "standard": "EIP3091"
    }
  ]
};

export const sbtc5200: Chain = {
  "name": "SilverBitcoin",
  "chain": "SBTC",
  "icon": "silverbitcoin",
  "rpc": [
    "https://rpc.silverbitcoin.org"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "SilverBitcoin",
    "symbol": "SBTC",
    "decimals": 18
  },
  "infoURL": "https://silverbitcoin.org/",
  "shortName": "sbtc",
  "chainId": 5200,
  "networkId": 5200,
  "explorers": [
    {
      "name": "SilverBitcoin Explorer",
      "url": "https://explorer.silverbitcoin.org/",
      "standard": "EIP3091"
    }
  ]
};

export const yeYing5432: Chain = {
  "name": "YeYing Network",
  "chain": "YeYing",
  "rpc": [
    "https://blockchain.yeying.pub"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "YeYing Token",
    "symbol": "YYT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://yeying.pub",
  "shortName": "YeYing",
  "chainId": 5432,
  "networkId": 5432,
  "icon": "yeying",
  "explorers": [
    {
      "name": "YeYing Blockscout",
      "url": "https://blockscout.yeying.pub",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const taaqo5566: Chain = {
  "name": "TAAQO Mainnet",
  "chain": "TAAQO",
  "rpc": [
    "https://rpc.taaqo.com",
    "https://rpc2.taaqo.com",
    "https://rpc3.taaqo.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "TAAQO",
    "symbol": "TAAQO",
    "decimals": 18
  },
  "infoURL": "https://taaqo.com",
  "shortName": "taaqo",
  "chainId": 5566,
  "networkId": 5566,
  "explorers": [
    {
      "name": "TAAQO Scan",
      "url": "https://taaqoscan.com",
      "standard": "EIP3091"
    }
  ]
};

export const treasurenet5570: Chain = {
  "name": "Treasurenet Aurora",
  "chain": "Treasurenet Aurora",
  "rpc": [
    "https://rpc.treasurenet.io"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "UNIT",
    "symbol": "UNIT",
    "decimals": 18
  },
  "infoURL": "https://www.treasurenet.io",
  "shortName": "treasurenet",
  "chainId": 5570,
  "networkId": 5570,
  "explorers": [
    {
      "name": "Treasurenet EVM BlockExplorer",
      "url": "https://scan.treasurenet.io",
      "standard": "none"
    }
  ]
};

export const msc5577: Chain = {
  "name": "MSC Blockchain",
  "chain": "MSC",
  "rpc": [
    "https://rpc.taaqo.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "MSC Token",
    "symbol": "MSC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://taaqo.com",
  "shortName": "msc",
  "chainId": 5577,
  "networkId": 5577,
  "explorers": []
};

export const evoNova5641: Chain = {
  "name": "Evorium Nova Testnet",
  "chain": "EvoriumEVM",
  "rpc": [
    "https://rpc-nova.evorium.network"
  ],
  "faucets": [
    "https://faucet-nova.evorium.network"
  ],
  "nativeCurrency": {
    "name": "Testnet EVO",
    "symbol": "tEVO",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://evorium.network",
  "shortName": "evo-nova",
  "chainId": 5641,
  "networkId": 5641,
  "icon": "https://evorium.network/assets/evorium-logo-BvLsajxH.png",
  "explorers": [
    {
      "name": "Evorium Nova Explorer",
      "url": "https://testnet.evorium.network",
      "standard": "EIP3091"
    }
  ]
};

export const tburn5800: Chain = {
  "name": "TBURN Mainnet",
  "chain": "TBURN",
  "icon": "tburn",
  "rpc": [
    "https://rpc.tburn.io",
    "https://rpc2.tburn.io",
    "https://rpc3.tburn.io",
    "https://rpc4.tburn.io",
    "https://rpc5.tburn.io"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "TBURN",
    "symbol": "TBURN",
    "decimals": 18
  },
  "infoURL": "https://tburn.io",
  "shortName": "tburn",
  "chainId": 5800,
  "networkId": 5800,
  "explorers": [
    {
      "name": "TBURNScan",
      "url": "https://scan.tburn.io/scan",
      "standard": "EIP3091"
    }
  ]
};

export const shib5816: Chain = {
  "name": "Shib Mainnet",
  "chain": "SHIB",
  "rpc": [
    "https://rpc.shib.club/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "SHIB",
    "symbol": "SHIB",
    "decimals": 18
  },
  "infoURL": "https://doc.shib.club/",
  "shortName": "shib",
  "chainId": 5816,
  "networkId": 5816,
  "explorers": [
    {
      "name": "Shib Explorer",
      "url": "https://explorer.shib.club/"
    }
  ]
};

export const dukong5887: Chain = {
  "name": "MANTRACHAIN Testnet",
  "chain": "Dukong",
  "icon": "om",
  "rpc": [
    "https://evm.dukong.mantrachain.io",
    "wss://evm.dukong.mantrachain.io/ws"
  ],
  "faucets": [
    "https://faucet.dukong.mantrachain.io"
  ],
  "nativeCurrency": {
    "name": "OM",
    "symbol": "OM",
    "decimals": 18
  },
  "infoURL": "https://mantrachain.io",
  "shortName": "dukong",
  "chainId": 5887,
  "networkId": 5887,
  "explorers": [
    {
      "name": "Dukong Explorer",
      "url": "http://mantrascan.io",
      "standard": "none",
      "icon": "om"
    }
  ]
};

export const tea6122: Chain = {
  "name": "Tea Mainnet",
  "chain": "TEA",
  "rpc": [
    "https://rpc.tea.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Tea",
    "symbol": "TEA",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://tea.xyz",
  "shortName": "tea",
  "chainId": 6122,
  "networkId": 6122,
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://explorer.tea.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const bmz6162: Chain = {
  "name": "Blockmaze Testnet V2",
  "chain": "BLOCKMAZE",
  "rpc": [
    "https://testnet-evm-rpc.blockmaze.com",
    "https://testnet-evm-rpc-arc.blockmaze.com",
    "wss://testnet-evm-ws-arc.blockmaze.com",
    "wss://testnet-evm-ws.blockmaze.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BMZ",
    "symbol": "BMZ",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://blockmaze.com",
  "shortName": "bmz",
  "chainId": 6162,
  "networkId": 6162,
  "icon": "BMZ",
  "explorers": [
    {
      "name": "Blockmaze testnet explorer",
      "url": "https://testnet-explorer.bmzscan.com/"
    }
  ]
};

export const bMZ6163: Chain = {
  "name": "Blockmaze Testnet",
  "chain": "BLOCKMAZE",
  "rpc": [
    "https://evm-rpc.testnet.stackflow.site"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BMZ",
    "symbol": "BMZ",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://blockmaze.com",
  "shortName": "BMZ",
  "chainId": 6163,
  "networkId": 6163,
  "icon": "BMZ",
  "explorers": [
    {
      "name": "Blockmaze testnet explorer",
      "url": "https://explorer.testnet.stackflow.site"
    }
  ]
};

export const bmz6165: Chain = {
  "name": "Blockmaze Mainnet",
  "chain": "BLOCKMAZE",
  "rpc": [
    "https://rpc.blockmaze.org",
    "wss://ws.blockmaze.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BMZ",
    "symbol": "BMZ",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://blockmaze.com",
  "shortName": "bmz",
  "chainId": 6165,
  "networkId": 6165,
  "icon": "BMZ",
  "explorers": [
    {
      "name": "Blockmaze mainnet explorer",
      "url": "https://bmzscan.com/"
    }
  ]
};

export const dual6301: Chain = {
  "name": "dual network",
  "chain": "DUAL",
  "icon": "dual",
  "rpc": [
    "https://rpc.dual.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "dual",
    "symbol": "dual",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://dual.org",
  "shortName": "dual",
  "chainId": 6301,
  "networkId": 6301,
  "explorers": [
    {
      "name": "Dual Network",
      "url": "https://blockscout.dual.network",
      "standard": "EIP3091"
    }
  ]
};

export const lrb6359: Chain = {
  "name": "LoraChain Mainnet",
  "chain": "LRB",
  "rpc": [
    "https://rpc.lorachain.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "LRB",
    "symbol": "LRB",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.deeplink.world",
  "shortName": "lrb",
  "chainId": 6359,
  "networkId": 6359,
  "icon": "lorachain",
  "explorers": [
    {
      "name": "lorachain",
      "url": "https://explorer.lorachain.org",
      "icon": "lorachain",
      "standard": "EIP3091"
    }
  ]
};

export const ynxtest6423: Chain = {
  "name": "YNX Testnet",
  "chain": "YNX",
  "icon": "ynx",
  "rpc": [
    "https://evm.ynxweb4.com"
  ],
  "faucets": [
    "https://www.ynxweb4.com/dapp/faucet"
  ],
  "nativeCurrency": {
    "name": "YNXT",
    "symbol": "YNXT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://ynxweb4.com",
  "shortName": "ynxtest",
  "chainId": 6423,
  "networkId": 6423,
  "explorers": [
    {
      "name": "YNX Explorer",
      "url": "https://explorer.ynxweb4.com",
      "standard": "EIP3091"
    }
  ],
  "status": "active"
};

export const awaji6497: Chain = {
  "name": "MIZUHIKI Testnet Awaji",
  "chain": "MIZU",
  "rpc": [
    "https://rpc.awaji.mizuhiki.io"
  ],
  "faucets": [
    "https://faucet.awaji.mizuhiki.io"
  ],
  "nativeCurrency": {
    "name": "MIZU",
    "symbol": "MIZU",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://mizuhiki.io/",
  "shortName": "awaji",
  "chainId": 6497,
  "networkId": 6497,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://awaji.blockscout.com",
      "standard": "EIP3091"
    }
  ]
};

export const mizuhiki6498: Chain = {
  "name": "MIZUHIKI Mainnet",
  "chain": "MIZU",
  "rpc": [
    "https://rpc.mizuhiki.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "MIZU",
    "symbol": "MIZU",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://mizuhiki.io/",
  "shortName": "mizuhiki",
  "chainId": 6498,
  "networkId": 6498,
  "icon": "https://mizuhiki.io/mizuhiki-logo-256.png",
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://mizuhiki.blockscout.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const kalis6533: Chain = {
  "name": "Kalichain",
  "chain": "Kalichain",
  "rpc": [
    "https://subnets.avax.network/kalichain/mainnet/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Kalis",
    "symbol": "KALIS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://kalichain.com",
  "shortName": "kalis",
  "chainId": 6533,
  "networkId": 6533,
  "icon": "kalichain",
  "explorers": [
    {
      "name": "Kalichain Explorer",
      "url": "https://scan.kalichain.com",
      "icon": "kalichain",
      "standard": "EIP3091"
    }
  ]
};

export const omaMainnet6623: Chain = {
  "name": "OMAChain Mainnet",
  "chain": "OMAChain",
  "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/OMA3/OMA3_Logo.png",
  "rpc": [
    "https://rpc.omachain.org/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "OMA",
    "symbol": "OMA",
    "decimals": 18
  },
  "infoURL": "",
  "shortName": "oma-mainnet",
  "chainId": 6623,
  "networkId": 6623,
  "explorers": [
    {
      "name": "OMAChain Explorer",
      "url": "https://explorer.omachain.org",
      "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/OMA3/OMA3_Logo.png",
      "standard": "EIP3091"
    }
  ]
};

export const anubi6714: Chain = {
  "name": "ANUBIS Mainnet",
  "chain": "ANUBIS",
  "rpc": [
    "https://rpc.anubispace.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "gasDAI",
    "symbol": "gasDAI",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://docs.anubispace.org",
  "shortName": "anubi",
  "chainId": 6714,
  "networkId": 6714,
  "icon": "https://browser.anubispace.org/images/anubis_icon_800.png",
  "explorers": [
    {
      "name": "browser",
      "url": "https://browser.anubispace.org",
      "icon": "https://browser.anubispace.org/images/anubis_icon_800.png",
      "standard": "EIP3091"
    }
  ]
};

export const vex6736: Chain = {
  "name": "Vexanium Mainnet",
  "chain": "VEX",
  "icon": "vex",
  "rpc": [
    "https://vexascan.com/rpc"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Vexanium",
    "symbol": "VEX",
    "decimals": 18
  },
  "infoURL": "https://vexascan.com",
  "shortName": "vex",
  "chainId": 6736,
  "networkId": 6736,
  "explorers": [
    {
      "name": "Vexascan",
      "url": "https://vexascan.com/evm",
      "standard": "EIP3091"
    },
    {
      "name": "WIND Explorer",
      "url": "https://explorer.windcrypto.com/evm",
      "standard": "EIP3091"
    }
  ]
};

export const lust6923: Chain = {
  "name": "LUST Chain",
  "chain": "LUST",
  "icon": "lust",
  "rpc": [
    "https://rpc.lustchain.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "LUST",
    "symbol": "LST",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://lustchain.org/",
  "shortName": "lust",
  "chainId": 6923,
  "networkId": 6923,
  "explorers": [
    {
      "name": "LUST Explorer",
      "url": "https://explorer.lustchain.org/",
      "standard": "EIP3091"
    }
  ]
};

export const growfitterMainnet7084: Chain = {
  "name": "Growfitter Mainnet",
  "chain": "Growfitter",
  "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/GrowFitter/Light.png",
  "rpc": [
    "https://rpc-mainnet-growfitter-rl.cogitus.io/ext/bc/2PdUCtQocNDvbVWy8ch4PdaicTHA2h5keHLAAPcs9Pr8tYaUg3/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "GFIT",
    "symbol": "GFIT",
    "decimals": 18
  },
  "infoURL": "https://www.growfitter.com/",
  "shortName": "Growfitter-mainnet",
  "chainId": 7084,
  "networkId": 7084,
  "explorers": [
    {
      "name": "Growfitter Explorer",
      "url": "https://explorer-growfitter-mainnet.cogitus.io",
      "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/GrowFitter/Light.png",
      "standard": "EIP3091"
    }
  ]
};

export const srx7119: Chain = {
  "name": "Sentrix Chain",
  "chain": "SRX",
  "rpc": [
    "https://rpc.sentrixchain.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Sentrix",
    "symbol": "SRX",
    "decimals": 18
  },
  "infoURL": "https://sentrixchain.com",
  "shortName": "srx",
  "chainId": 7119,
  "networkId": 7119,
  "explorers": [
    {
      "name": "Sentrix Scan",
      "url": "https://scan.sentrixchain.com",
      "standard": "EIP3091"
    }
  ]
};

export const srxTestnet7120: Chain = {
  "name": "Sentrix Testnet",
  "chain": "SRX",
  "rpc": [
    "https://testnet-rpc.sentrixchain.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [
    "https://faucet.sentrixchain.com"
  ],
  "nativeCurrency": {
    "name": "Sentrix",
    "symbol": "SRX",
    "decimals": 18
  },
  "infoURL": "https://sentrixchain.com",
  "shortName": "srx-testnet",
  "chainId": 7120,
  "networkId": 7120,
  "explorers": [
    {
      "name": "Sentrix Scan (Testnet)",
      "url": "https://scan-testnet.sentrixchain.com",
      "standard": "EIP3091"
    }
  ]
};

export const vrcn7131: Chain = {
  "name": "VRCN Chain Mainnet",
  "chain": "VRCN",
  "icon": "VRCNChain",
  "rpc": [
    "https://rpc-mainnet-4.vrcchain.com/"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "VRCN Chain",
    "symbol": "VRCN",
    "decimals": 18
  },
  "infoURL": "https://vrccoin.com",
  "shortName": "vrcn",
  "chainId": 7131,
  "networkId": 7131,
  "explorers": [
    {
      "name": "VRC Explorer",
      "url": "https://explorer.vrcchain.com",
      "standard": "EIP3091"
    },
    {
      "name": "VRCNChain",
      "url": "https://vrcchain.com",
      "standard": "EIP3091"
    },
    {
      "name": "dxbchain",
      "url": "https://dxb.vrcchain.com",
      "standard": "EIP3091"
    }
  ]
};

export const vyreTestnet7357: Chain = {
  "name": "VYRE Testnet",
  "chain": "VYRE",
  "rpc": [
    "https://testnet-rpc.vyrechain.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "USDC",
    "symbol": "USDC",
    "decimals": 18
  },
  "infoURL": "https://vyrechain.com",
  "shortName": "vyre-testnet",
  "chainId": 7357,
  "networkId": 7357,
  "explorers": [
    {
      "name": "VYRE Testnet Explorer",
      "url": "https://explorer.vyrechain.com",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-5042002"
  }
};

export const cmxrL27373: Chain = {
  "name": "CRYMAD Chain Mainnet L2 Network",
  "chain": "CMX",
  "icon": "crymadchain",
  "rpc": [
    "https://rpcl2.cmxofficial.com"
  ],
  "faucets": [],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "nativeCurrency": {
    "name": "CRYMADX REAL",
    "symbol": "CMX-R",
    "decimals": 18
  },
  "infoURL": "https://cmxofficial.com/",
  "shortName": "cmxr-l2",
  "chainId": 7373,
  "networkId": 7373,
  "parent": {
    "type": "L2",
    "chain": "eip155-1475"
  },
  "status": "active"
};

export const libertas7474: Chain = {
  "name": "LIBERTAS Mainnet",
  "chain": "LBT",
  "rpc": [
    "https://rpc.libertas.network"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Libertas Token",
    "symbol": "LBT",
    "decimals": 18
  },
  "infoURL": "https://closefast.tech",
  "shortName": "libertas",
  "chainId": 7474,
  "networkId": 7474,
  "explorers": []
};

export const carrchain7667: Chain = {
  "name": "CarrChain Mainnet",
  "chain": "CARR",
  "rpc": [
    "https://rpc.carrchain.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "CARR",
    "symbol": "CARR",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://carrchain.io",
  "shortName": "carrchain",
  "chainId": 7667,
  "networkId": 7667,
  "icon": "carrchain",
  "explorers": [
    {
      "name": "CarrScan",
      "url": "https://carrscan.io",
      "standard": "EIP3091",
      "icon": "carrchain"
    }
  ]
};

export const tjrTestnet7733: Chain = {
  "name": "Tajirchain Testnet",
  "chain": "TJR",
  "rpc": [
    "https://rpc.testnet.tajirchain.com",
    "wss://wss.testnet.tajirchain.com"
  ],
  "faucets": [
    "https://faucet.testnet.tajirchain.com"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "nativeCurrency": {
    "name": "Tajirchain Test Token",
    "symbol": "TJR",
    "decimals": 18
  },
  "infoURL": "https://tajirchain.com",
  "shortName": "tjr-testnet",
  "chainId": 7733,
  "networkId": 7733,
  "status": "active",
  "explorers": [
    {
      "name": "TJR Scan",
      "url": "https://testnet.tjrscan.com",
      "icon": "tajir",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111",
    "bridges": [
      {
        "url": "https://bridge.testnet.tajirchain.com"
      }
    ]
  }
};

export const embr7773: Chain = {
  "name": "Emberchain",
  "chain": "EMBR",
  "rpc": [
    "https://emberchain.org/api/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ember",
    "symbol": "EMBR",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://emberchain.org",
  "shortName": "embr",
  "chainId": 7773,
  "networkId": 7773,
  "icon": "https://emberchain.org/ember-coin.svg",
  "explorers": [
    {
      "name": "Emberchain Explorer",
      "url": "https://emberchain.org/ledger",
      "icon": "https://emberchain.org/ember-coin.svg",
      "standard": "EIP3091"
    }
  ]
};

export const pandaSeaMainnet7776: Chain = {
  "name": "PandaSea Mainnet",
  "chain": "PandaSea",
  "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/Pandasea/Dark.png",
  "rpc": [
    "https://rpc-mainnet-pandasea-rl.cogitus.io/ext/bc/2gYSmRb7tjS4wb5FHFx8NBhwQgARWEdr8MGVC7v8UWJJFkEpTj/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "PANDA",
    "symbol": "PANDA",
    "decimals": 18
  },
  "infoURL": "https://pandasea.io/",
  "shortName": "PandaSea mainnet",
  "chainId": 7776,
  "networkId": 7776,
  "explorers": [
    {
      "name": "PandaSea Explorer",
      "url": "https://explorer.pandasea.io",
      "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/Pandasea/Dark.png",
      "standard": "EIP3091"
    }
  ]
};

export const ptb7820: Chain = {
  "name": "Portal-To-Bitcoin Mainnet",
  "chain": "PTB",
  "rpc": [
    "https://mainnet.portaltobitcoin.net",
    "wss://mainnet.portaltobitcoin.net/ws"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Portal-To-Bitcoin",
    "symbol": "PTB",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://portaltobitcoin.com",
  "shortName": "ptb",
  "chainId": 7820,
  "networkId": 7820,
  "explorers": [
    {
      "name": "Portal-To-Bitcoin Explorer",
      "url": "https://explorer.portaltobitcoin.net",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const hyve7847: Chain = {
  "name": "HyveChain",
  "chain": "HYVE",
  "icon": "hyvechain",
  "rpc": [
    "https://rpc.hyvechain.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "HYVE",
    "symbol": "HYVE",
    "decimals": 18
  },
  "infoURL": "https://hyvechain.com",
  "shortName": "hyve",
  "chainId": 7847,
  "networkId": 7847,
  "explorers": [
    {
      "name": "HyveChain Explorer",
      "url": "https://explorer.hyvechain.com"
    }
  ],
  "status": "active"
};

export const pc7890: Chain = {
  "name": "Panchain Mainnet",
  "chain": "PC",
  "rpc": [
    "https://publicrpc.panchain.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Pan Coin",
    "symbol": "PC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://panchain.io",
  "shortName": "pc",
  "chainId": 7890,
  "networkId": 7890,
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://scan.panchain.io",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const univex7932: Chain = {
  "name": "Univex Network",
  "chain": "UNIVEX",
  "rpc": [
    "https://rpc.univexnetwork.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Univex",
    "symbol": "UNIVEX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://univexnetwork.org",
  "shortName": "univex",
  "chainId": 7932,
  "networkId": 7932,
  "icon": "univex",
  "explorers": [
    {
      "name": "Univex Explorer",
      "url": "https://explorer.univexnetwork.org",
      "standard": "EIP3091"
    }
  ]
};

export const bmn8006: Chain = {
  "name": "BMN Smart Chain",
  "chain": "BMN",
  "rpc": [
    "https://connect.bmnscan.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BMN Coin",
    "symbol": "BMN",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://bmncoin.com",
  "shortName": "bmn",
  "chainId": 8006,
  "networkId": 8006,
  "icon": "bmn",
  "explorers": [
    {
      "name": "bmnscan",
      "url": "https://bmnscan.com",
      "icon": "bmnscan",
      "standard": "EIP3091"
    }
  ]
};

export const lerax8125: Chain = {
  "name": "Lerax Chain Testnet",
  "chain": "LERAX",
  "rpc": [
    "https://rpc-testnet-dataseed.lerax.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Lerax",
    "symbol": "tLRX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://lerax.org/",
  "shortName": "lerax",
  "chainId": 8125,
  "networkId": 8125,
  "icon": "https://testnet.leraxscan.com/assets/configs/network_icon.svg",
  "explorers": [
    {
      "name": "Leraxscan Testnet",
      "url": "https://testnet.leraxscan.com/",
      "icon": "https://testnet.leraxscan.com/assets/configs/network_icon.svg",
      "standard": "EIP3091"
    }
  ]
};

export const alpen8150: Chain = {
  "name": "Alpen Testnet II",
  "chain": "Alpen",
  "rpc": [
    "https://rpc.testnet.alpenlabs.io"
  ],
  "faucets": [
    "https://faucet.testnet.alpenlabs.io/"
  ],
  "nativeCurrency": {
    "name": "Signet BTC",
    "symbol": "sBTC",
    "decimals": 8
  },
  "features": [
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://docs.alpenlabs.io",
  "shortName": "alpen",
  "chainId": 8150,
  "networkId": 8150,
  "icon": "https://avatars.githubusercontent.com/u/113091135",
  "explorers": [
    {
      "name": "Alpen Testnet Explorer",
      "url": "https://explorer.testnet.alpenlabs.io",
      "icon": "",
      "standard": "EIP3091"
    }
  ]
};

export const svmTestnet8163: Chain = {
  "name": "Steem Virtual Machine Testnet",
  "chain": "SVM",
  "rpc": [
    "https://evmrpc.blazescanner.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "STEEM",
    "symbol": "STEEM",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://svmscan.blazeapps.org",
  "shortName": "svm-testnet",
  "chainId": 8163,
  "networkId": 8163,
  "icon": "steem",
  "explorers": [
    {
      "name": "SVM Scan",
      "url": "https://svmscan.blazeapps.org",
      "standard": "EIP3091"
    }
  ]
};

export const lcaiT8200: Chain = {
  "name": "LightchainAI Testnet",
  "chain": "LCAI",
  "rpc": [
    "https://rpc.testnet.lightchain.ai"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "LightchainAI",
    "symbol": "LCAI",
    "decimals": 18
  },
  "infoURL": "https://lightchain.ai",
  "shortName": "lcai-t",
  "chainId": 8200,
  "networkId": 8200,
  "icon": "lcai",
  "explorers": [
    {
      "name": "Lightchain Testnet Explorer",
      "url": "https://testnet.lightscan.app",
      "icon": "lcai",
      "standard": "EIP3091"
    }
  ]
};

export const forknet8338: Chain = {
  "name": "Forknet",
  "chain": "Forknet",
  "rpc": [
    "https://rpc-forknet.t.conduit.xyz",
    "wss://rpc-forknet.t.conduit.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://forknet.io",
  "shortName": "forknet",
  "chainId": 8338,
  "networkId": 8338,
  "icon": "forknet",
  "explorers": [
    {
      "name": "forkscan",
      "url": "https://forkscan.org"
    }
  ]
};

export const bry8379: Chain = {
  "name": "Bery",
  "chain": "BRY",
  "rpc": [
    "https://bery.in/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BRY",
    "symbol": "BRY",
    "decimals": 18
  },
  "infoURL": "https://bery.in",
  "shortName": "bry",
  "chainId": 8379,
  "networkId": 8379,
  "explorers": [
    {
      "name": "Bery Explorer",
      "url": "https://bery.in/explorer",
      "standard": "EIP3091"
    }
  ]
};

export const aCN8700: Chain = {
  "name": "Autonomys Chronos Testnet",
  "title": "Autonomys Chronos Testnet",
  "chain": "Autonomys EVM Chronos",
  "icon": "autonomys",
  "rpc": [
    "https://auto-evm.chronos.autonomys.xyz/ws"
  ],
  "faucets": [
    "https://autonomysfaucet.xyz"
  ],
  "nativeCurrency": {
    "name": "tAI3",
    "symbol": "tAI3",
    "decimals": 18
  },
  "infoURL": "https://www.autonomys.xyz",
  "shortName": "ACN",
  "chainId": 8700,
  "networkId": 8700,
  "explorers": [
    {
      "name": "Autonomys Chronos Testnet Explorer",
      "url": "https://explorer.auto-evm.chronos.autonomys.xyz",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const ebc8721: Chain = {
  "name": "EB-Chain",
  "chain": "EBC",
  "rpc": [
    "https://rpc.ebcscan.net"
  ],
  "faucets": [
    "https://ebcscan.net/faucet"
  ],
  "nativeCurrency": {
    "name": "EBC Token",
    "symbol": "EBC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://eb-chain.com",
  "shortName": "ebc",
  "chainId": 8721,
  "networkId": 8721,
  "explorers": [
    {
      "name": "EBCScan",
      "url": "https://ebcscan.net",
      "standard": "EIP3091"
    }
  ]
};

export const ward8765: Chain = {
  "name": "Warden",
  "chain": "WARD",
  "icon": "warden",
  "rpc": [
    "https://evm.wardenprotocol.org",
    "wss://evm-ws.wardenprotocol.org"
  ],
  "nativeCurrency": {
    "name": "WARD",
    "symbol": "WARD",
    "decimals": 18
  },
  "infoURL": "https://wardenprotocol.org/",
  "shortName": "ward",
  "chainId": 8765,
  "networkId": 8765,
  "explorers": [
    {
      "name": "Warden Labs",
      "url": "https://explorer.wardenprotocol.org"
    }
  ]
};

export const tICS9030: Chain = {
  "name": "Qubetics Mainnet",
  "chain": "QUBETICS",
  "rpc": [
    "https://rpc.qubetics.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "TICS",
    "symbol": "TICS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.qubetics.com",
  "shortName": "TICS",
  "chainId": 9030,
  "networkId": 9030,
  "icon": "TICS",
  "explorers": [
    {
      "name": "QUBETICS mainnet explorer",
      "url": "https://ticsscan.com"
    }
  ]
};

export const xybTestnet9194: Chain = {
  "name": "Xyberchain Testnet",
  "chain": "XYB",
  "rpc": [
    "https://xyberchain-rpc.xyz/"
  ],
  "faucets": [
    "https://xyberchainexplorer.xyz/faucet"
  ],
  "nativeCurrency": {
    "name": "XYB",
    "symbol": "XYB",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.xyberchain.network/",
  "shortName": "xyb-testnet",
  "chainId": 9194,
  "networkId": 9194,
  "icon": "https://uploads.onecompiler.io/42p32vw56/44bwn2gs2/splash-icon.png",
  "explorers": [
    {
      "name": "Xyberchain Explorer",
      "url": "https://xyberchainexplorer.xyz/",
      "icon": "https://uploads.onecompiler.io/42p32vw56/44bwn2gs2/splash-icon.png",
      "standard": "EIP3091"
    }
  ]
};

export const lcai9200: Chain = {
  "name": "LightchainAI Mainnet",
  "chain": "LCAI",
  "rpc": [
    "https://rpc.mainnet.lightchain.ai"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "LightchainAI",
    "symbol": "LCAI",
    "decimals": 18
  },
  "infoURL": "https://lightchain.ai",
  "shortName": "lcai",
  "chainId": 9200,
  "networkId": 9200,
  "icon": "lcai",
  "explorers": [
    {
      "name": "Lightchain Explorer",
      "url": "https://lightscan.app",
      "icon": "lcai",
      "standard": "EIP3091"
    }
  ]
};

export const zel9350: Chain = {
  "name": "Zano Execution Layer Testnet",
  "chain": "ZEL",
  "rpc": [
    "https://eth-rpc.node1.testnet.zano.org"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Zel",
    "symbol": "ZEL",
    "decimals": 18
  },
  "infoURL": "https://zano.com",
  "shortName": "zel",
  "chainId": 9350,
  "networkId": 9350,
  "explorers": [
    {
      "name": "zel",
      "url": "https://explorer.testnet.zano.org/"
    }
  ]
};

export const kub9601: Chain = {
  "name": "KUB Layer 2 Mainnet",
  "chain": "KUB",
  "rpc": [
    "https://kublayer2.kubchain.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "KUB",
    "symbol": "KUB",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "",
  "shortName": "kub",
  "chainId": 9601,
  "networkId": 9601,
  "icon": "kub",
  "explorers": [
    {
      "name": "KUB Layer 2 Mainnet Explorer",
      "url": "https://kublayer2.kubscan.com",
      "icon": "kub",
      "standard": "EIP3091"
    }
  ]
};

export const plasma9745: Chain = {
  "name": "Plasma Mainnet",
  "chain": "Plasma",
  "rpc": [
    "https://rpc.plasma.to"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Plasma",
    "symbol": "XPL",
    "decimals": 18
  },
  "infoURL": "https://plasma.to",
  "shortName": "plasma",
  "chainId": 9745,
  "networkId": 9745,
  "icon": "plasma",
  "explorers": [
    {
      "name": "Routescan",
      "url": "https://plasmascan.to",
      "standard": "EIP3091"
    }
  ]
};

export const plasmaTestnet9746: Chain = {
  "name": "Plasma Testnet",
  "chain": "Plasma",
  "rpc": [
    "https://testnet-rpc.plasma.to"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Plasma",
    "symbol": "XPL",
    "decimals": 18
  },
  "infoURL": "https://plasma.to",
  "shortName": "plasma-testnet",
  "chainId": 9746,
  "networkId": 9746,
  "icon": "plasma",
  "explorers": [
    {
      "name": "Routescan",
      "url": "https://testnet.plasmascan.to",
      "standard": "EIP3091"
    }
  ],
  "testnet": true
};

export const plasmaDevnet9747: Chain = {
  "name": "Plasma Devnet",
  "chain": "Plasma",
  "rpc": [
    "https://devnet-rpc.plasma.to"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Plasma",
    "symbol": "XPL",
    "decimals": 18
  },
  "infoURL": "https://plasma.to",
  "shortName": "plasma-devnet",
  "chainId": 9747,
  "networkId": 9747,
  "icon": "plasma",
  "explorers": [],
  "testnet": true
};

export const timp9818: Chain = {
  "name": "Imperium Testnet",
  "chain": "tIMP",
  "rpc": [
    "https://rpc-testnet.imperiumscan.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Test Imperium",
    "symbol": "tIMP",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://imperiumscan.com",
  "shortName": "timp",
  "chainId": 9818,
  "networkId": 9818,
  "explorers": [
    {
      "name": "Imperium Scan",
      "url": "https://imperiumscan.com",
      "standard": "none"
    }
  ]
};

export const imp9819: Chain = {
  "name": "Imperium Mainnet",
  "chain": "IMP",
  "rpc": [
    "https://rpc.imperiumscan.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Imperium",
    "symbol": "IMP",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://imperiumscan.com",
  "shortName": "imp",
  "chainId": 9819,
  "networkId": 9819,
  "explorers": [
    {
      "name": "Imperium Scan",
      "url": "https://imperiumscan.com",
      "standard": "none"
    }
  ]
};

export const bytechain9933: Chain = {
  "name": "ByteChain Mainnet",
  "chain": "BEXC",
  "rpc": [
    "https://rpc.bexc.io",
    "https://rpc2.bexc.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BEXC",
    "symbol": "BEXC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://bexc.io",
  "shortName": "bytechain",
  "chainId": 9933,
  "networkId": 9933,
  "icon": "bytechain",
  "explorers": [
    {
      "name": "ByteChain Explorer",
      "url": "https://mainnet.bexc.io",
      "icon": "bytechain",
      "standard": "EIP3091"
    }
  ]
};

export const brevisNetwork9973: Chain = {
  "name": "Breivs ProverNet",
  "chain": "BREV",
  "rpc": [
    "https://evmrpc.brevis.network/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://brevis.network/",
  "shortName": "brevis-network",
  "chainId": 9973,
  "networkId": 9973,
  "explorers": [
    {
      "name": "Breivs ProverNet Explorer",
      "url": "https://provernet.brevis.network/",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const ethw10001: Chain = {
  "name": "ETHW-mainnet",
  "chain": "ETHW",
  "icon": "ethpow",
  "rpc": [
    "https://mainnet.ethereumpow.org/"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "EthereumPoW",
    "symbol": "ETHW",
    "decimals": 18
  },
  "infoURL": "https://ethereumpow.org/",
  "shortName": "ethw",
  "chainId": 10001,
  "networkId": 10001,
  "explorers": [
    {
      "name": "Oklink",
      "url": "https://www.oklink.com/ethw/"
    }
  ]
};

export const gateLayer10088: Chain = {
  "name": "Gate Layer",
  "chain": "GT",
  "rpc": [
    "https://gatelayer-mainnet.gatenode.cc"
  ],
  "nativeCurrency": {
    "name": "GT",
    "symbol": "GT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP1559"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://gatechain.io/gatelayer",
  "shortName": "GateLayer",
  "chainId": 10088,
  "networkId": 10088,
  "icon": "https://www.woofswap.finance/image/tokens/gatelayer.png",
  "explorers": [
    {
      "name": "GateLayer",
      "url": "https://www.gatescan.org/gatelayer",
      "icon": "https://www.woofswap.finance/image/tokens/gatelayer.png",
      "standard": "EIP-1559"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "ethereum",
    "bridges": [
      {
        "url": "https://www.gate.com/"
      }
    ]
  }
};

export const ozone10120: Chain = {
  "name": "Ozone Testnet",
  "chain": "OZONE",
  "icon": "ozone",
  "rpc": [
    "https://rpc-testnet.ozonescan.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "TestOzone",
    "symbol": "tOZONE",
    "decimals": 18
  },
  "infoURL": "https://ozonechain.com",
  "shortName": "ozone",
  "chainId": 10120,
  "networkId": 10120,
  "explorers": [
    {
      "name": "Ozone Chain Explorer",
      "url": "https://testnet.ozonescan.com"
    }
  ]
};

export const ozone10121: Chain = {
  "name": "Ozone Mainnet",
  "chain": "OZONE",
  "icon": "ozone",
  "rpc": [
    "https://chain.ozonescan.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ozone",
    "symbol": "OZONE",
    "decimals": 18
  },
  "infoURL": "https://ozonechain.com",
  "shortName": "ozone",
  "chainId": 10121,
  "networkId": 10121,
  "explorers": [
    {
      "name": "Ozone Chain Explorer",
      "url": "https://ozonescan.com"
    }
  ]
};

export const mova10323: Chain = {
  "name": "Mova Beta",
  "chain": "MOVA",
  "rpc": [
    "https://mars.rpc.movachain.com"
  ],
  "faucets": [
    "https://faucet.mars.movachain.com"
  ],
  "nativeCurrency": {
    "name": "MARS Testnet GasCoin",
    "symbol": "MARS",
    "decimals": 18
  },
  "infoURL": "https://movachain.com",
  "shortName": "mova",
  "chainId": 10323,
  "networkId": 10323,
  "icon": "mova",
  "explorers": [
    {
      "name": "marsscan",
      "url": "https://scan.mars.movachain.com",
      "standard": "EIP3091"
    }
  ]
};

export const limonataTestnet10777: Chain = {
  "name": "Limonata Testnet",
  "chain": "LIMO",
  "rpc": [
    "https://rpc.limonata.xyz"
  ],
  "faucets": [
    "https://faucet.limonata.xyz"
  ],
  "nativeCurrency": {
    "name": "Limonata",
    "symbol": "LIMO",
    "decimals": 18
  },
  "infoURL": "https://limonata.xyz",
  "shortName": "limonata-testnet",
  "chainId": 10777,
  "networkId": 10777,
  "icon": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/limonatatestnet/images/limonatatestnet.png",
  "explorers": [
    {
      "name": "Limonata Explorer",
      "url": "https://explorer.limonata.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const gleec11169: Chain = {
  "name": "Gleec Mainnet",
  "chain": "GLEEC",
  "rpc": [
    "https://evm-rpc.gleec.com",
    "wss://evm-ws.gleec.com"
  ],
  "faucets": [],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "nativeCurrency": {
    "name": "GLEEC",
    "symbol": "GLEEC",
    "decimals": 18
  },
  "infoURL": "https://evm-info.gleec.com/",
  "shortName": "gleec",
  "chainId": 11169,
  "networkId": 11169,
  "explorers": [
    {
      "name": "Gleec EVM Explorer",
      "url": "https://evm-explorer.gleec.com",
      "standard": "EIP3091"
    }
  ]
};

export const eth11417: Chain = {
  "name": "Anq World Testnet",
  "chain": "ETH",
  "rpc": [
    "https://rpc-public-test.anq.world"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://anquantum.com/chain",
  "shortName": "eth",
  "chainId": 11417,
  "networkId": 11417,
  "icon": "anq",
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://blockscout-test.anq.world",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const nkm11941: Chain = {
  "chainId": 11941,
  "name": "NAKAM Chain",
  "shortName": "nkm",
  "chain": "NKM",
  "networkId": 11941,
  "infoURL": "https://nakamcoin.com",
  "rpc": [
    "https://rpc.nakamcoin.com"
  ],
  "nativeCurrency": {
    "name": "NAKAM",
    "symbol": "NKM",
    "decimals": 18
  },
  "explorers": [
    {
      "name": "NAKAM Explorer",
      "url": "https://explorer.nakamcoin.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "features": [
    "EVM Compatible",
    "MetaMask Supported"
  ],
  "icon": ""
};

export const kudora12000: Chain = {
  "name": "Kudora Mainnet",
  "chain": "KUD",
  "icon": "kudora",
  "rpc": [
    "https://rpc.kudora.org"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Kudo",
    "symbol": "KUD",
    "decimals": 18
  },
  "infoURL": "https://kudora.org/",
  "shortName": "kudora",
  "chainId": 12000,
  "networkId": 12000,
  "explorers": [
    {
      "name": "Kudora Explorer",
      "url": "https://blockscout.kudora.org"
    }
  ]
};

export const moc12026: Chain = {
  "name": "MOC Blockchain",
  "chain": "MOC",
  "rpc": [
    "https://mochan.org/api/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "MOC",
    "symbol": "MOC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://mochan.org",
  "shortName": "moc",
  "chainId": 12026,
  "networkId": 12026,
  "icon": "moc",
  "explorers": [
    {
      "name": "MOC Explorer",
      "url": "https://mochan.org/explorer",
      "standard": "EIP3091"
    }
  ]
};

export const l2p12216: Chain = {
  "name": "L2 Protocol Mainnet",
  "chain": "L2P",
  "icon": "l2p",
  "rpc": [
    "https://rpc.l2protocol.com",
    "wss://rpc.l2protocol.com"
  ],
  "features": [
    {
      "name": "EIP150"
    },
    {
      "name": "EIP155"
    },
    {
      "name": "EIP158"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "L2P",
    "symbol": "L2P",
    "decimals": 18
  },
  "infoURL": "https://l2protocol.com",
  "shortName": "l2p",
  "chainId": 12216,
  "networkId": 12216,
  "explorers": [
    {
      "name": "L2 Protocol explorer",
      "url": "https://l2pscan.com"
    }
  ]
};

export const amax12248: Chain = {
  "name": "Armonia Eva Chain Testnet",
  "chain": "AMAX",
  "rpc": [
    "https://tntrpc.evascan.io/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "AMAX",
    "symbol": "AMAX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://amax.network/",
  "shortName": "amax",
  "chainId": 12248,
  "networkId": 12248,
  "icon": "amax",
  "explorers": [
    {
      "name": "evascan",
      "url": "https://testnet.evascan.io/",
      "icon": "evascan",
      "standard": "EIP3091"
    }
  ]
};

export const ctcchain12301: Chain = {
  "name": "CTC Chain Mainnet",
  "chain": "CTC",
  "icon": "ctcchain",
  "rpc": [
    "https://rpc.tantin.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "CTC",
    "symbol": "CTC",
    "decimals": 18
  },
  "infoURL": "https://tantin.com/",
  "shortName": "ctcchain",
  "chainId": 12301,
  "networkId": 12301,
  "explorers": [
    {
      "name": "CTC Chain Explorer",
      "url": "https://scan.tantin.com"
    }
  ]
};

export const ctcchain12302: Chain = {
  "name": "CTC Chain Testnet",
  "chain": "CTC",
  "icon": "ctcchain",
  "rpc": [
    "https://test-rpc.tantin.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "CTC",
    "symbol": "CTC",
    "decimals": 18
  },
  "infoURL": "https://tantin.com/",
  "shortName": "ctcchain",
  "chainId": 12302,
  "networkId": 12302,
  "explorers": [
    {
      "name": "CTC Chain Testnet Explorer",
      "url": "https://test-scan.tantin.com"
    }
  ]
};

export const ela12343: Chain = {
  "name": "ECO Mainnet",
  "chain": "ECO",
  "icon": "ela",
  "rpc": [
    "https://api.elastos.io/eco"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ELA",
    "symbol": "ELA",
    "decimals": 18
  },
  "infoURL": "https://eco.elastos.io/",
  "shortName": "ela",
  "chainId": 12343,
  "networkId": 12343,
  "explorers": [
    {
      "name": "ECO Explorer",
      "url": "https://eco.elastos.io/"
    }
  ]
};

export const cLY12369: Chain = {
  "name": "Calyra",
  "chain": "CLY",
  "rpc": [
    "https://mainnet.calyra.cloud/evm"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Calyra",
    "symbol": "CLY",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://calyra.cloud",
  "shortName": "CLY",
  "chainId": 12369,
  "networkId": 12369,
  "icon": "Calyra",
  "explorers": [
    {
      "name": "calyrascan",
      "url": "https://calyrascan.xyz",
      "icon": "calyscan",
      "standard": "EIP3091"
    }
  ]
};

export const brick12786: Chain = {
  "name": "BrickChain",
  "chain": "BRKG",
  "rpc": [
    "https://rpc.firstbrick.cloud"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Brick Gas",
    "symbol": "BRKG",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://firstbrick.cloud",
  "shortName": "brick",
  "chainId": 12786,
  "networkId": 12786,
  "icon": "brickchain",
  "explorers": [
    {
      "name": "BrickChain Explorer",
      "url": "https://explorer.firstbrick.cloud",
      "standard": "EIP3091"
    }
  ]
};

export const liberlandTestnet12865: Chain = {
  "name": "Liberland testnet",
  "chain": "LLT",
  "rpc": [
    "https://testnet.liberland.org:9944"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Liberland Dollar",
    "symbol": "LDN",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://testnet.liberland.org",
  "shortName": "liberland-testnet",
  "chainId": 12865,
  "networkId": 12865,
  "icon": "liberland",
  "explorers": []
};

export const rntx13113: Chain = {
  "name": "RANNTA X-Chain",
  "chain": "RANNTA",
  "rpc": [
    "https://rpc.rannta.com/"
  ],
  "nativeCurrency": {
    "name": "RANNTA Core X",
    "symbol": "RNTX",
    "decimals": 18
  },
  "features": [],
  "infoURL": "https://rannta.com/",
  "shortName": "rntx",
  "chainId": 13113,
  "networkId": 13113,
  "icon": "https://emerald-important-bat-644.mypinata.cloud/ipfs/bafkreidh2qtmdplg7wi2le7ump57gvfhoyrg565m4tgua3d4b6zgmojqwm",
  "explorers": [
    {
      "name": "RANNTA X-Chain Explorer",
      "url": "https://explorer.rannta.com/",
      "icon": "https://emerald-important-bat-644.mypinata.cloud/ipfs/bafkreidh2qtmdplg7wi2le7ump57gvfhoyrg565m4tgua3d4b6zgmojqwm",
      "standard": "EIP3091"
    }
  ]
};

export const bKC13188: Chain = {
  "name": "BeeChain Testnet",
  "chain": "BKC",
  "rpc": [
    "https://rpctest.beechain.ai"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BeeChain",
    "symbol": "BKC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://beechain.ai",
  "shortName": "BKC",
  "chainId": 13188,
  "networkId": 13188,
  "icon": "BKC",
  "explorers": [
    {
      "name": "BeeChainScan",
      "url": "https://scantest.beechain.ai",
      "icon": "BeeScan",
      "standard": "EIP3091"
    }
  ]
};

export const mee13390: Chain = {
  "name": "MeeChain Network",
  "chain": "MeeChain",
  "rpc": [
    "https://rpc.meechain.live/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Mee",
    "symbol": "MEE",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://scan.meechain.live",
  "shortName": "mee",
  "chainId": 13390,
  "networkId": 13390,
  "icon": "meechain",
  "explorers": [
    {
      "name": "MeeScan",
      "url": "https://scan.meechain.live",
      "standard": "EIP3091"
    }
  ]
};

export const bridgeless13441: Chain = {
  "name": "Bridgeless Mainnet",
  "chain": "BRIDGELESS",
  "rpc": [
    "https://eth-rpc.node0.mainnet.bridgeless.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bridge",
    "symbol": "BRIDGE",
    "decimals": 18
  },
  "infoURL": "https://bridgeless.com",
  "shortName": "bridgeless",
  "chainId": 13441,
  "networkId": 13441,
  "explorers": [
    {
      "name": "bridgeless",
      "url": "https://explorer.mainnet.bridgeless.com/"
    }
  ]
};

export const intuitionTestnet13579: Chain = {
  "name": "Intuition Testnet",
  "chain": "INTUITION",
  "rpc": [
    "https://testnet.rpc.intuition.systems"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Testnet TRUST",
    "symbol": "TTRUST",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://intuition.systems",
  "shortName": "intuition-testnet",
  "chainId": 13579,
  "networkId": 13579,
  "icon": "intuition",
  "explorers": [
    {
      "name": "IntuitionScan (Testnet)",
      "url": "https://testnet.explorer.intuition.systems",
      "icon": "intuitionscan",
      "standard": "EIP3091"
    }
  ],
  "testnet": true
};

export const btz14204: Chain = {
  "name": "BTZ Chain",
  "chain": "BTZ",
  "rpc": [
    "https://rpc.btzchain.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BTZ",
    "symbol": "BTZ",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://btzchain.org",
  "shortName": "btz",
  "chainId": 14204,
  "networkId": 14204,
  "explorers": [
    {
      "name": "BTZ Chain Explorer",
      "url": "https://explorer.btzchain.org",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-42161"
  }
};

export const sonicTestnet14601: Chain = {
  "name": "Sonic Testnet",
  "chain": "sonic-testnet",
  "rpc": [
    "https://rpc.testnet.soniclabs.com"
  ],
  "faucets": [
    "https://testnet.soniclabs.com/account"
  ],
  "nativeCurrency": {
    "name": "Sonic",
    "symbol": "S",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://testnet.soniclabs.com",
  "shortName": "sonic-testnet",
  "chainId": 14601,
  "networkId": 14601,
  "icon": "sonic",
  "explorers": [
    {
      "name": "Sonic Testnet Explorer",
      "url": "https://explorer.testnet.soniclabs.com",
      "icon": "sonic",
      "standard": "none"
    }
  ]
};

export const quait15000: Chain = {
  "name": "Quai Orchard Testnet",
  "chain": "QUAI",
  "rpc": [
    "https://orchard.rpc.quai.network/cyprus1"
  ],
  "faucets": [
    "https://orchard.faucet.quai.network"
  ],
  "nativeCurrency": {
    "name": "Quai",
    "symbol": "QUAI",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://qu.ai",
  "shortName": "quait",
  "chainId": 15000,
  "networkId": 15000,
  "icon": "quai",
  "explorers": [
    {
      "name": "Orchard Quaiscan",
      "url": "https://orchard.quaiscan.io",
      "icon": "quaiscan",
      "standard": "EIP3091"
    }
  ]
};

export const midlTestnet15001: Chain = {
  "name": "Midl Testnet",
  "chain": "MIDL",
  "rpc": [
    "https://rpc.testnet.midl.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bitcoin",
    "symbol": "BTC",
    "decimals": 18
  },
  "infoURL": "https://midl.xyz/",
  "shortName": "midl-testnet",
  "chainId": 15001,
  "networkId": 15001,
  "explorers": [
    {
      "name": "Midl Testnet Explorer",
      "url": "blockscout.regtest.midl.xyz",
      "icon": "midl",
      "standard": "EIP3091"
    }
  ]
};

export const infraTestnet15324: Chain = {
  "name": "INFRA-testnet",
  "chain": "INFRA",
  "icon": "infra",
  "rpc": [
    "https://ppprototype.vercel.app/api/infra-rpc"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "reAED",
    "symbol": "reAED",
    "decimals": 18
  },
  "infoURL": "https://infrablockchain.com/",
  "shortName": "infra-testnet",
  "chainId": 15324,
  "networkId": 15324,
  "explorers": [
    {
      "name": "Block Explorer",
      "url": "http://208.115.109.202",
      "standard": "EIP3091"
    }
  ]
};

export const bimbo15497: Chain = {
  "name": "Bimbo Chain",
  "chain": "BMC",
  "rpc": [
    "https://bimborpc.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bimbo Coin",
    "symbol": "BMC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://bimbochain.com",
  "shortName": "bimbo",
  "chainId": 15497,
  "networkId": 15497,
  "explorers": [
    {
      "name": "bimboscan",
      "url": "https://bimboscan.com",
      "standard": "EIP3091"
    }
  ]
};

export const nrxn15526: Chain = {
  "name": "NirmalX Smart Chain",
  "chain": "NRXN",
  "rpc": [
    "https://rpc.nirmalxscan.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "NirmalX Smart Chain",
    "symbol": "NRXN",
    "decimals": 18
  },
  "infoURL": "https://nirmalxscan.com/",
  "shortName": "nrxn",
  "chainId": 15526,
  "networkId": 15526,
  "explorers": [
    {
      "name": "NirmalX Explorer",
      "url": "https://nirmalxscan.com",
      "standard": "EIP3091"
    }
  ]
};

export const holo15675: Chain = {
  "name": "HOLODAO Mainnet",
  "chain": "HOLODAO",
  "rpc": [
    "https://rpc.holodao.ai"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "HOLO COIN",
    "symbol": "HOLO",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://holodao.ai",
  "shortName": "holo",
  "chainId": 15675,
  "networkId": 15675,
  "icon": "holo",
  "explorers": [
    {
      "name": "holoscan",
      "url": "https://holoscan.holodao.ai",
      "icon": "holoscan"
    }
  ]
};

export const holoTestnet15676: Chain = {
  "name": "HOLODAO TESTNET",
  "chain": "HOLODAO",
  "rpc": [
    "https://rpc-testnet.holodao.ai"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "HOLO COIN",
    "symbol": "HOLO",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://holodao.ai",
  "shortName": "holo-testnet",
  "chainId": 15676,
  "networkId": 15676,
  "icon": "holo testnet",
  "explorers": [
    {
      "name": "holoscan",
      "url": "https://holoscan-testnet.holodao.ai",
      "icon": "holoscan"
    }
  ]
};

export const _0gGalileo16601: Chain = {
  "name": "0G-Galileo-Testnet",
  "chain": "0G",
  "rpc": [
    "https://evmrpc-testnet.0g.ai"
  ],
  "faucets": [
    "https://faucet.0g.ai"
  ],
  "nativeCurrency": {
    "name": "OG",
    "symbol": "OG",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://0g.ai",
  "shortName": "0g-galileo",
  "chainId": 16601,
  "networkId": 16601,
  "testnet": true,
  "explorers": [
    {
      "name": "0G Chain Explorer",
      "url": "https://chainscan-galileo.0g.ai",
      "standard": "EIP3091"
    }
  ]
};

export const _0g16661: Chain = {
  "name": "0G Mainnet",
  "chain": "0G",
  "rpc": [
    "https://evmrpc.0g.ai"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "0G",
    "symbol": "0G",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://0g.ai",
  "shortName": "0g",
  "chainId": 16661,
  "networkId": 16661,
  "testnet": false,
  "explorers": [
    {
      "name": "0G Chain Explorer",
      "url": "https://chainscan.0g.ai",
      "standard": "EIP3091"
    }
  ]
};

export const botcy16963: Chain = {
  "name": "BotCash Sovereign L2",
  "chain": "BOTCY",
  "rpc": [
    "https://rpc.botcash.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bot Cash",
    "symbol": "BOTCY",
    "decimals": 18
  },
  "features": [],
  "infoURL": "https://botcash.io",
  "shortName": "botcy",
  "chainId": 16963,
  "networkId": 16963,
  "icon": "botcash",
  "explorers": [
    {
      "name": "CashScan",
      "url": "https://scan.botcash.io",
      "icon": "botcash",
      "standard": "EIP3091"
    }
  ]
};

export const dmd17771: Chain = {
  "name": "DMD Diamond",
  "chain": "DMD",
  "rpc": [
    "https://rpc.bit.diamonds"
  ],
  "faucets": [
    "https://faucet.bit.diamonds"
  ],
  "nativeCurrency": {
    "name": "DMD",
    "symbol": "DMD",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://bit.diamonds",
  "shortName": "dmd",
  "chainId": 17771,
  "networkId": 17771,
  "icon": "https://ipfs.io/ipfs/bafkreieaev7npoq4zzd3kn352nkbqw3jsh22rf6wqypovpljyx6pb2meom",
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer.bit.diamonds",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const trecr18882: Chain = {
  "name": "RecorderCoin Testnet",
  "chain": "tRECR",
  "icon": "https://recordercoin.org/Recorder%20Coin%20Logo%20256x256.png",
  "rpc": [
    "https://testnet-rpc.recordercoin.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Test RecorderCoin",
    "symbol": "tRECR",
    "decimals": 18
  },
  "infoURL": "https://recordercoin.org",
  "shortName": "trecr",
  "chainId": 18882,
  "networkId": 2233441,
  "explorers": [
    {
      "name": "RecorderCoin Testnet Explorer",
      "url": "https://explorer-testnet.recordercoin.org",
      "standard": "EIP3091"
    }
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "testnet": true
};

export const yuuchain19001: Chain = {
  "name": "YuuChain",
  "chain": "YUU",
  "rpc": [
    "https://rpc.theyuusystem.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Yuu",
    "symbol": "YUU",
    "decimals": 18
  },
  "infoURL": "https://theyuusystem.com",
  "shortName": "yuuchain",
  "chainId": 19001,
  "networkId": 19001,
  "icon": "yuuchain",
  "explorers": [
    {
      "name": "YuuChain Explorer",
      "url": "https://explorer.theyuusystem.com",
      "standard": "EIP3091"
    }
  ]
};

export const igraCaravelTestnet19416: Chain = {
  "name": "Igra Caravel Testnet",
  "chain": "IGRA",
  "rpc": [
    "https://caravel.igralabs.com:8545"
  ],
  "faucets": [
    "https://igra-faucet-ec24dbd67d05.herokuapp.com"
  ],
  "nativeCurrency": {
    "name": "iKAS",
    "symbol": "iKAS",
    "decimals": 18
  },
  "infoURL": "https://docs.igralabs.com/",
  "shortName": "igra-caravel-testnet",
  "chainId": 19416,
  "networkId": 19416,
  "explorers": [
    {
      "name": "Igra Explorer",
      "url": "https://explorer.caravel.igralabs.com/",
      "standard": "EIP3091"
    }
  ]
};

export const stcTestnet19517: Chain = {
  "name": "Smart Technology Chain Testnet",
  "chain": "Smart Technology Chain",
  "rpc": [
    "https://testnet-rpc.stcexplorer.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "SEP",
    "symbol": "SEP",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "shortName": "stc-testnet",
  "chainId": 19517,
  "networkId": 19517,
  "icon": "sep",
  "explorers": [
    {
      "name": "Smart Technology Chain Explorer",
      "url": "https://testnet.stcexplorer.io",
      "icon": "stcexplorer",
      "standard": "EIP3091"
    }
  ]
};

export const stcMainnet19518: Chain = {
  "name": "Smart Technology Chain",
  "chain": "Smart Technology Chain",
  "rpc": [
    "https://rpc.stcexplorer.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "SEP",
    "symbol": "SEP",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "shortName": "stc-mainnet",
  "chainId": 19518,
  "networkId": 19518,
  "icon": "sep",
  "explorers": [
    {
      "name": "Smart Technology Chain Explorer",
      "url": "https://stcexplorer.io",
      "icon": "stcexplorer",
      "standard": "EIP3091"
    }
  ]
};

export const mon19901: Chain = {
  "name": "MON CHAIN",
  "chain": "MON",
  "rpc": [
    "https://rpc.monlite.online"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Monetae",
    "symbol": "MON",
    "decimals": 18
  },
  "infoURL": "https://monlite.online",
  "shortName": "mon",
  "chainId": 19901,
  "networkId": 19901,
  "explorers": [
    {
      "name": "MON CHAIN Explorer",
      "url": "https://scan.monlite.online"
    }
  ]
};

export const entropy19911: Chain = {
  "name": "Entropy Chain",
  "chain": "Entropy",
  "rpc": [
    "https://rpc-mainnet.entropychain.live"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "KGFe",
    "symbol": "KGFe",
    "decimals": 18
  },
  "infoURL": "https://entropychain.live",
  "shortName": "entropy",
  "chainId": 19911,
  "networkId": 19911,
  "explorers": [
    {
      "name": "Entropy Explorer",
      "url": "https://scan.entropychain.live",
      "standard": "EIP3091"
    }
  ]
};

export const atrnxos19966: Chain = {
  "name": "ATRNXOS Chain",
  "chain": "ATRNXOS",
  "rpc": [
    "https://rpc.bas.atrnx.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ATRNXOS",
    "symbol": "EATB",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://atrnx.org",
  "shortName": "atrnxos",
  "chainId": 19966,
  "networkId": 19966,
  "icon": "https://atrnxos.github.io/images/atrnxos-icon.png",
  "explorers": [
    {
      "name": "ATRNXOS Explorer",
      "url": "https://explorer.bas.atrnx.com"
    }
  ]
};

export const sup19998: Chain = {
  "name": "SuperAIChain Mainnet",
  "chain": "SuperAIChain",
  "icon": "https://ipfs.io/ipfs/bafkreiendbioz6nnvlmwyv5zfqzsh2m5pdz47vrjlmhjve5vflk7yshyye",
  "rpc": [
    "https://rpc.superaichain.ai"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "SUP",
    "symbol": "SUP",
    "decimals": 18
  },
  "infoURL": "https://superaichain.ai",
  "shortName": "sup",
  "chainId": 19998,
  "networkId": 19998,
  "slip44": 60,
  "explorers": [
    {
      "name": "SuperAIChain Explorer",
      "url": "https://scan.superaichain.ai",
      "standard": "EIP3091"
    }
  ],
  "status": "active"
};

export const mandala20010: Chain = {
  "name": "Mandala Chain",
  "chain": "MANDALA",
  "icon": "mandala",
  "rpc": [
    "https://rpc1-mainnet.mandalachain.io"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Kepeng",
    "symbol": "KPG",
    "decimals": 18
  },
  "infoURL": "https://mandalachain.io",
  "shortName": "mandala",
  "chainId": 20010,
  "networkId": 20010,
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://explorer.mandalachain.io",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [
      {
        "url": "https://bridge.arbitrum.io"
      }
    ]
  }
};

export const mandalaTestnet20011: Chain = {
  "name": "Mandala Chain Testnet",
  "chain": "MANDALA",
  "icon": "mandala",
  "rpc": [
    "https://rpc1-testnet.mandalachain.io"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [
    "https://dripper.mandalachain.io"
  ],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://mandalachain.io",
  "shortName": "mandala-testnet",
  "chainId": 20011,
  "networkId": 20011,
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://explorer.testnet.mandalachain.io",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111"
  }
};

export const agls20033: Chain = {
  "name": "Aglais Testnet (Quip Network)",
  "chain": "AGLS",
  "icon": "ipfs://QmbVscoh7LthwT7U3gyyTErSokYG5SM85EpSETpmHuATwi",
  "rpc": [
    "https://evm-rpc.aglais.quip.network:20049"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "AGLS",
    "symbol": "AGLS",
    "decimals": 18
  },
  "infoURL": "https://agls.quip.network",
  "shortName": "agls",
  "chainId": 20033,
  "networkId": 20033,
  "explorers": [
    {
      "name": "Aglais Explorer",
      "url": "https://explorer.aglais.quip.network",
      "standard": "EIP3091"
    }
  ]
};

export const nch20250: Chain = {
  "name": "CHEESE Blockchain",
  "chain": "CHEESE",
  "icon": "cheese",
  "rpc": [
    "https://cheeseblockchain.com/api/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Native Cheesecoin",
    "symbol": "NCH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://cheeseblockchain.com",
  "shortName": "nch",
  "chainId": 20250,
  "networkId": 20250,
  "explorers": [
    {
      "name": "CHEESE Blockchain Explorer",
      "url": "https://cheeseblockchain.com/explorer",
      "standard": "EIP3091"
    }
  ]
};

export const alpen20310: Chain = {
  "name": "Alpen Testnet III",
  "chain": "Alpen",
  "rpc": [
    "https://alpen.testnet.alpen.org"
  ],
  "faucets": [
    "https://tally.so/r/aQKLZZ"
  ],
  "nativeCurrency": {
    "name": "Signet BTC",
    "symbol": "sBTC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://docs.alpenlabs.io",
  "shortName": "alpen",
  "chainId": 20310,
  "networkId": 20310,
  "icon": "https://avatars.githubusercontent.com/u/113091135",
  "explorers": [
    {
      "name": "Alpen Testnet Explorer",
      "url": "https://explorer.testnet.alpen.org",
      "standard": "EIP3091"
    }
  ]
};

export const efik20488: Chain = {
  "name": "Efikcoin Mainnet",
  "chain": "EFIK",
  "rpc": [
    "https://rpc.efikcoin.com/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Efikcoin",
    "symbol": "EFIK",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://efikcoin.com",
  "shortName": "efik",
  "chainId": 20488,
  "networkId": 20488,
  "icon": "efikcoin",
  "explorers": [
    {
      "name": "EfikcoinScan",
      "url": "https://explorer.efikcoin.com",
      "icon": "efikcoin",
      "standard": "EIP3091"
    }
  ]
};

export const fluentTestnet20994: Chain = {
  "name": "Fluent Testnet",
  "chain": "FLUENT",
  "rpc": [
    "https://rpc.testnet.fluent.xyz"
  ],
  "faucets": [
    "https://testnet.fluent.xyz/dev-portal"
  ],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    },
    {
      "name": "EIP4844"
    }
  ],
  "infoURL": "https://www.fluent.xyz/",
  "shortName": "fluent-testnet",
  "chainId": 20994,
  "networkId": 20994,
  "explorers": [
    {
      "name": "Fluent Testnet Explorer",
      "url": "https://testnet.fluentscan.xyz/",
      "standard": "EIP3091"
    }
  ]
};

export const flashnet21021: Chain = {
  "name": "Flashnet Mainnet",
  "chain": "Flashnet",
  "rpc": [
    "https://rpc.flashnet.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bitcoin",
    "symbol": "BTC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://flashnet.xyz",
  "shortName": "flashnet",
  "chainId": 21021,
  "networkId": 21021,
  "explorers": []
};

export const flashnetTestnet21022: Chain = {
  "name": "Flashnet Testnet",
  "chain": "Flashnet",
  "rpc": [
    "https://rpc.makebitcoingreatagain.dev"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bitcoin",
    "symbol": "BTC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://flashnet.xyz",
  "shortName": "flashnet-testnet",
  "chainId": 21022,
  "networkId": 21022,
  "explorers": []
};

export const autheoTestnet21270: Chain = {
  "name": "Autheo Testnet",
  "chain": "Autheo",
  "rpc": [
    "https://rpc.testnet.autheo.com"
  ],
  "faucets": [
    "https://faucet.testnet.autheo.com"
  ],
  "nativeCurrency": {
    "name": "THEO",
    "symbol": "THEO",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://autheo.com",
  "shortName": "autheo-testnet",
  "chainId": 21270,
  "networkId": 21270,
  "icon": "autheo",
  "explorers": [
    {
      "name": "Autheo Testnet Cosmos Explorer",
      "url": "https://cosmos.testnet.autheo.com",
      "icon": "autheo",
      "standard": "none"
    },
    {
      "name": "Autheo Testnet EVM Explorer",
      "url": "https://evm-explorer.testnet.autheo.com",
      "icon": "autheo",
      "standard": "none"
    }
  ]
};

export const apchain21970: Chain = {
  "name": "APChain",
  "chain": "AP",
  "rpc": [
    "https://rpc.apchain.io/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "APX",
    "symbol": "APX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "http://scan.apchain.io",
  "shortName": "apchain",
  "chainId": 21970,
  "networkId": 21970,
  "explorers": [
    {
      "name": "APChain Scan",
      "url": "http://scan.apchain.io",
      "standard": "EIP3091"
    }
  ]
};

export const cles22225: Chain = {
  "name": "Celes Testnet",
  "chain": "CLES",
  "rpc": [
    "https://rpc-testnet.celeschain.org",
    "wss://rpc-testnet.celeschain.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "CLES",
    "symbol": "CLES",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://celeschain.org",
  "shortName": "cles",
  "chainId": 22225,
  "networkId": 22225,
  "icon": "celes",
  "explorers": [
    {
      "name": "Celes Testnet Explorer",
      "url": "https://testnet-explorer.celeschain.org",
      "icon": "celes",
      "standard": "EIP3091"
    }
  ]
};

export const incentiv24101: Chain = {
  "name": "Incentiv",
  "chain": "Incentiv",
  "rpc": [
    "https://rpc.incentiv.io",
    "https://rpc-archive.incentiv.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "CENT",
    "symbol": "CENT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://incentiv.io",
  "shortName": "incentiv",
  "chainId": 24101,
  "networkId": 24101,
  "icon": "incentiv",
  "explorers": [
    {
      "name": "Incentiv Mainnet Explorer",
      "url": "https://explorer.incentiv.io",
      "icon": "etherscan",
      "standard": "EIP3091"
    }
  ]
};

export const agentscoin24368: Chain = {
  "name": "AgentsCoin",
  "chain": "AGENT",
  "rpc": [
    "https://rpc.agents-coin.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [
    "https://faucet.agents-coin.com"
  ],
  "nativeCurrency": {
    "name": "AgentsCoin",
    "symbol": "AGENT",
    "decimals": 18
  },
  "infoURL": "https://agents-coin.com",
  "shortName": "agentscoin",
  "chainId": 24368,
  "networkId": 24368,
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://explorer.agents-coin.com",
      "standard": "EIP3091"
    }
  ]
};

export const fluent25363: Chain = {
  "name": "Fluent",
  "chain": "FLUENT",
  "rpc": [
    "https://rpc.fluent.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.fluent.xyz/",
  "shortName": "fluent",
  "chainId": 25363,
  "networkId": 25363,
  "explorers": [
    {
      "name": "Fluent Explorer",
      "url": "https://fluentscan.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const h2lambda25821: Chain = {
  "name": "H2 Lambda",
  "chain": "H2",
  "rpc": [
    "https://rpc.h-1.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "H2",
    "symbol": "H2",
    "decimals": 18
  },
  "infoURL": "https://h2chain.io",
  "shortName": "h2lambda",
  "chainId": 25821,
  "networkId": 25821,
  "icon": "https://h2inno.com/logo.svg",
  "explorers": [
    {
      "name": "H2Scan",
      "url": "https://lambda.h2scan.io",
      "standard": "EIP3091"
    }
  ]
};

export const tcent28802: Chain = {
  "name": "Incentiv Testnet",
  "chain": "TCENT",
  "rpc": [
    "https://rpc3.testnet.incentiv.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Testnet Incentiv Coin",
    "symbol": "TCENT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://incentiv.net",
  "shortName": "tcent",
  "chainId": 28802,
  "networkId": 28802,
  "icon": "incentiv",
  "explorers": [
    {
      "name": "Incentiv Testnet Explorer",
      "url": "https://explorer-testnet.incentiv.io/",
      "icon": "etherscan",
      "standard": "EIP3091"
    }
  ]
};

export const alpen29032: Chain = {
  "name": "Alpen",
  "chain": "Alpen",
  "rpc": [
    "https://alpen.mainnet.alpen.org"
  ],
  "nativeCurrency": {
    "name": "BTC",
    "symbol": "BTC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://docs.alpen.org",
  "shortName": "alpen",
  "chainId": 29032,
  "networkId": 29032,
  "icon": "https://avatars.githubusercontent.com/u/113091135",
  "explorers": [
    {
      "name": "Alpen Explorer",
      "url": "https://explorer.mainnet.alpen.org",
      "standard": "EIP3091"
    }
  ]
};

export const taic30181: Chain = {
  "name": "AICChain Testnet",
  "chain": "tAIC",
  "rpc": [
    "https://testrpc.aicchain.io"
  ],
  "wss": [
    "wss://testws.aicchain.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "AICChain Testnet",
    "symbol": "tAIC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.aicchain.io",
  "shortName": "taic",
  "chainId": 30181,
  "networkId": 30181,
  "icon": "https://aic-assets.aicchain.io/android-chrome-192x192.png",
  "explorers": [
    {
      "name": "AICChain Testnet Explorer",
      "url": "https://testscan.aicchain.io",
      "icon": "aic",
      "standard": "EIP3091"
    }
  ]
};

export const ethiq30303: Chain = {
  "name": "Ethiq",
  "chain": "ETH",
  "rpc": [
    "https://rpc.ethiq.network",
    "wss://rpc.ethiq.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ETH",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    },
    {
      "name": "EIP2718"
    },
    {
      "name": "EIP2930"
    }
  ],
  "infoURL": "https://www.ethiq.network",
  "shortName": "Ethiq",
  "chainId": 30303,
  "networkId": 30303,
  "testnet": false,
  "icon": "ethiq",
  "explorers": [
    {
      "name": "Ethiq Blockscout",
      "url": "https://explorer.ethiq.network",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [
      {
        "url": "https://shell.haqq.network/bridge"
      }
    ]
  }
};

export const trxc30485: Chain = {
  "name": "Tron Classic",
  "chain": "TRXC",
  "rpc": [
    "https://rpc.tronclassicscan.org:8545"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Tron Classic",
    "symbol": "TRXC",
    "decimals": 6
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://trxclassic.com",
  "shortName": "trxc",
  "chainId": 30485,
  "networkId": 30485,
  "explorers": [
    {
      "name": "TronClassicScan",
      "url": "https://tronclassicscan.org",
      "standard": "EIP3091"
    }
  ]
};

export const dawnMainnet30715: Chain = {
  "name": "Dawn Mainnet",
  "chain": "Dawn",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "ZKsync",
    "symbol": "ZK",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.zksync.io",
  "shortName": "dawn-mainnet",
  "chainId": 30715,
  "networkId": 30715,
  "explorers": []
};

export const zksyncPrividiumMainnet30716: Chain = {
  "name": "ZKsync Prividium Mainnet",
  "chain": "ZKsync Prividium",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.zksync.io",
  "shortName": "zksync-prividium-mainnet",
  "chainId": 30716,
  "networkId": 30716,
  "explorers": []
};

export const bvm2031338: Chain = {
  "name": "BitVault BVM20",
  "chain": "BVM20",
  "rpc": [
    "https://rpc.bitvault.club"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BitVault",
    "symbol": "BVT",
    "decimals": 18
  },
  "infoURL": "https://bitvault.club",
  "shortName": "bvm20",
  "chainId": 31338,
  "networkId": 31338,
  "explorers": [
    {
      "name": "BitVault Explorer",
      "url": "https://explorer.bitvault.club",
      "standard": "EIP3091"
    }
  ]
};

export const paix32380: Chain = {
  "name": "PAIX Development Network",
  "chain": "PAIX",
  "rpc": [
    "https://devnet.ppaix.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "PAIX Token",
    "symbol": "PAIX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://ppaix.com",
  "shortName": "paix",
  "chainId": 32380,
  "networkId": 32380,
  "icon": "paix",
  "explorers": [
    {
      "name": "PAIX BlockScout",
      "url": "https://blockscout.ppaix.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const zil32769: Chain = {
  "name": "Zilliqa 2",
  "chain": "ZIL",
  "rpc": [
    "https://api.zilliqa.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Zilliqa",
    "symbol": "ZIL",
    "decimals": 18
  },
  "infoURL": "https://www.zilliqa.com/",
  "shortName": "zil",
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "chainId": 32769,
  "networkId": 32769,
  "icon": "zilliqa",
  "explorers": [
    {
      "name": "Zilliqa 2 Mainnet Explorer",
      "url": "https://zilliqa.blockscout.com/",
      "standard": "EIP3091"
    }
  ]
};

export const ecx32904: Chain = {
  "name": "Snowside",
  "chain": "ECX",
  "rpc": [
    "https://rpc.snowside.network/mainnet"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ECash",
    "symbol": "ECX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://snowside.network",
  "shortName": "ecx",
  "chainId": 32904,
  "networkId": 32904,
  "icon": "ipfs://bafkreig3ioaoqiyvd3uinf5p5qtvvhhzxbbvb3ukljezanccsrc5mfp62y",
  "explorers": [
    {
      "name": "Snowside Explorer",
      "url": "https://explorer.snowside.network",
      "icon": "ipfs://bafkreig3ioaoqiyvd3uinf5p5qtvvhhzxbbvb3ukljezanccsrc5mfp62y",
      "standard": "EIP3091"
    }
  ]
};

export const zeroBeacon33000: Chain = {
  "name": "Zero Beacon",
  "chain": "ZERO",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "ZRO",
    "symbol": "ZRO",
    "decimals": 18
  },
  "infoURL": "https://layerzero.network",
  "shortName": "zero-beacon",
  "chainId": 33000,
  "networkId": 33000,
  "explorers": []
};

export const zeroSystem33001: Chain = {
  "name": "Zero System Zone",
  "chain": "ZERO",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "ZRO",
    "symbol": "ZRO",
    "decimals": 18
  },
  "infoURL": "https://layerzero.network",
  "shortName": "zero-system",
  "chainId": 33001,
  "networkId": 33001,
  "explorers": []
};

export const zeroInterop33002: Chain = {
  "name": "Zero Interop Zone",
  "chain": "ZERO",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "ZRO",
    "symbol": "ZRO",
    "decimals": 18
  },
  "infoURL": "https://layerzero.network",
  "shortName": "zero-interop",
  "chainId": 33002,
  "networkId": 33002,
  "explorers": []
};

export const zeroAtlas33003: Chain = {
  "name": "LayerZero ATLAS",
  "chain": "ZERO",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "ZRO",
    "symbol": "ZRO",
    "decimals": 18
  },
  "infoURL": "https://layerzero.network",
  "shortName": "zero-atlas",
  "chainId": 33003,
  "networkId": 33003,
  "explorers": []
};

export const zeroPrivate33004: Chain = {
  "name": "Zero Private Zone",
  "chain": "ZERO",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "ZRO",
    "symbol": "ZRO",
    "decimals": 18
  },
  "infoURL": "https://layerzero.network",
  "shortName": "zero-private",
  "chainId": 33004,
  "networkId": 33004,
  "explorers": []
};

export const zilTestnet33101: Chain = {
  "name": "Zilliqa 2 Testnet",
  "chain": "ZIL",
  "rpc": [
    "https://api.testnet.zilliqa.com"
  ],
  "faucets": [
    "https://faucet.testnet.zilliqa.com"
  ],
  "nativeCurrency": {
    "name": "Zilliqa",
    "symbol": "ZIL",
    "decimals": 18
  },
  "infoURL": "https://www.zilliqa.com/",
  "shortName": "zil-testnet",
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "chainId": 33101,
  "networkId": 33101,
  "slip44": 1,
  "explorers": [
    {
      "name": "Zilliqa 2 Testnet Explorer",
      "url": "https://testnet.zilliqa.blockscout.com/",
      "standard": "EIP3091"
    }
  ]
};

export const ecxTestnet33160: Chain = {
  "name": "Snowside Testnet",
  "chain": "ECX",
  "rpc": [
    "https://rpc.snowside.network/testnet"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ECash",
    "symbol": "ECX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://snowside.network",
  "shortName": "ecx-testnet",
  "chainId": 33160,
  "networkId": 33160,
  "icon": "ipfs://bafkreig3ioaoqiyvd3uinf5p5qtvvhhzxbbvb3ukljezanccsrc5mfp62y",
  "explorers": [
    {
      "name": "Snowside Testnet Explorer",
      "url": "https://explorer-testnet.snowside.network",
      "icon": "ipfs://bafkreig3ioaoqiyvd3uinf5p5qtvvhhzxbbvb3ukljezanccsrc5mfp62y",
      "standard": "EIP3091"
    }
  ]
};

export const qom33303: Chain = {
  "name": "QOM",
  "chain": "QOM",
  "rpc": [
    "https://rpc.qomx.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "QOMX",
    "symbol": "QOMX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://qomx.io",
  "shortName": "qom",
  "chainId": 33303,
  "networkId": 33303,
  "icon": "qom",
  "explorers": [
    {
      "name": "QOM Explorer",
      "url": "https://scan.qomx.io",
      "icon": "qom",
      "standard": "EIP3091"
    }
  ]
};

export const zq2Devnet33469: Chain = {
  "name": "Zilliqa 2 Devnet",
  "chain": "ZIL",
  "rpc": [
    "https://api.zq2-devnet.zilliqa.com"
  ],
  "faucets": [
    "https://faucet.zq2-devnet.zilliqa.com"
  ],
  "nativeCurrency": {
    "name": "Zilliqa",
    "symbol": "ZIL",
    "decimals": 18
  },
  "infoURL": "https://www.zilliqa.com/",
  "shortName": "zq2-devnet",
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "chainId": 33469,
  "networkId": 33469,
  "icon": "zilliqa",
  "explorers": [
    {
      "name": "Zilliqa 2 Devnet Explorer",
      "url": "https://otterscan.zq2-devnet.zilliqa.com",
      "standard": "EIP3091"
    }
  ]
};

export const morphtachyonTestnet34952: Chain = {
  "name": "Morph Tachyon Testnet",
  "chain": "Morph Tachyon",
  "rpc": [
    "https://testnet-api.popdex.xyz/api/v1/web3/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BGB",
    "symbol": "BGB",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://popdex.xyz",
  "shortName": "morphtachyon testnet",
  "chainId": 34952,
  "networkId": 34952,
  "explorers": [
    {
      "name": "Morph Tachyon Testnet Explorer",
      "url": "https://testnet-app.popdex.xyz/explorer",
      "standard": "EIP3091"
    }
  ],
  "testnet": true
};

export const trct35935: Chain = {
  "name": "Tractsafe Testnet",
  "chain": "TRCT",
  "rpc": [
    "https://tapi.tractsafe.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Tractsafe",
    "symbol": "TRCT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://tractsafe.com",
  "shortName": "trct",
  "chainId": 35935,
  "networkId": 35935,
  "icon": "tractsafe",
  "explorers": [
    {
      "name": "tractsafescan",
      "url": "https://testnet.tractsafe.com",
      "icon": "tractsafe",
      "standard": "EIP3091"
    }
  ]
};

export const tc36000: Chain = {
  "name": "Voidchain Mainnet",
  "chain": "TC",
  "rpc": [
    "https://wallet.voidchain.net/api"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Voidchain",
    "symbol": "TC",
    "decimals": 9
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://ethereum.org",
  "shortName": "tc",
  "chainId": 36000,
  "networkId": 36000,
  "icon": "voidchain",
  "explorers": [
    {
      "name": "voidchainscan",
      "url": "https://explorer.voidchain.net",
      "icon": "voidchainscan",
      "standard": "EIP3091"
    }
  ]
};

export const abcore36888: Chain = {
  "name": "AB Core Mainnet",
  "chain": "AB",
  "rpc": [
    "https://rpc.core.ab.org",
    "https://rpc1.core.ab.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "AB",
    "symbol": "AB",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://ab.org",
  "shortName": "abcore",
  "chainId": 36888,
  "networkId": 36888,
  "icon": "ab",
  "explorers": [
    {
      "name": "AB Core Explorer",
      "url": "https://explorer.core.ab.org",
      "standard": "EIP3091"
    }
  ]
};

export const weichain37771: Chain = {
  "name": "Weichain net",
  "chain": "Weichain",
  "rpc": [
    "http://1.15.137.12:8545"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Weichain",
    "symbol": "WeiC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "",
  "shortName": "weichain",
  "chainId": 37771,
  "networkId": 37771,
  "icon": "weichain",
  "explorers": [
    {
      "name": "weichainscan",
      "url": "http://1.15.137.12:5200/",
      "icon": "weichainscan",
      "standard": "EIP3091"
    }
  ]
};

export const igra38833: Chain = {
  "name": "Igra Mainnet",
  "chain": "Igra",
  "rpc": [
    "https://rpc.igralabs.com:8545"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "IKas",
    "symbol": "IKAS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://igralabs.com",
  "shortName": "igra",
  "chainId": 38833,
  "networkId": 38833,
  "icon": "https://ipfs.io/ipfs/bafkreigamdso3uh3pabmjoci7yyomvrhg2ynocp6fbagbaufsu7wzkaahy",
  "explorers": [
    {
      "name": "Igra Explorer",
      "url": "https://explorer.igralabs.com",
      "standard": "EIP3091"
    }
  ]
};

export const igraTestnet38836: Chain = {
  "name": "Igra Testnet",
  "chain": "Igra",
  "rpc": [
    "https://galleon-testnet.igralabs.com:8545"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "IKas",
    "symbol": "IKAS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://igralabs.com",
  "shortName": "igra-testnet",
  "chainId": 38836,
  "networkId": 38836,
  "icon": "https://ipfs.io/ipfs/bafkreigamdso3uh3pabmjoci7yyomvrhg2ynocp6fbagbaufsu7wzkaahy",
  "explorers": [
    {
      "name": "Igra Testnet Explorer",
      "url": "https://explorer.galleon-testnet.igralabs.com",
      "standard": "EIP3091"
    }
  ],
  "testnet": true
};

export const cin39500: Chain = {
  "name": "Cincoin Mainnet",
  "chain": "CIN",
  "rpc": [
    "https://rpc.cincoin.asia/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Cincoin",
    "symbol": "CIN",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://cincoin.asia",
  "shortName": "cin",
  "chainId": 39500,
  "networkId": 39500,
  "icon": "cincoin",
  "explorers": [
    {
      "name": "cincoin explorer",
      "url": "https://scan.cincoin.asia",
      "standard": "EIP3091"
    }
  ]
};

export const salt40204: Chain = {
  "name": "Citrate Testnet",
  "chain": "CITRATE",
  "rpc": [
    "https://rpc.citrate.ai"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [
    "https://faucet.citrate.ai"
  ],
  "nativeCurrency": {
    "name": "SALT",
    "symbol": "SALT",
    "decimals": 18
  },
  "infoURL": "https://citrate.ai",
  "shortName": "salt",
  "chainId": 40204,
  "networkId": 40204,
  "slip44": 1,
  "status": "active",
  "explorers": [
    {
      "name": "Citrate Explorer",
      "url": "https://explorer.citrate.ai",
      "standard": "EIP3091"
    }
  ]
};

export const rootVX41295: Chain = {
  "name": "rootVX testnet",
  "chain": "rootVX",
  "rpc": [
    "http://34.60.253.118:9545"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://rootvx.com",
  "shortName": "rootVX",
  "chainId": 41295,
  "networkId": 42079,
  "icon": "rootVX",
  "explorers": [
    {
      "name": "rootVXscan",
      "url": "https://explorer.rootvx.com",
      "icon": "rootVXscan",
      "standard": "EIP3091"
    }
  ]
};

export const nesa41444: Chain = {
  "name": "Nesa",
  "chain": "NES",
  "rpc": [
    "https://erpc.nesa.ai"
  ],
  "nativeCurrency": {
    "name": "Nesa",
    "symbol": "NES",
    "decimals": 18
  },
  "infoURL": "https://nesa.ai",
  "shortName": "nesa",
  "chainId": 41444,
  "networkId": 41444,
  "icon": "nesa",
  "explorers": [
    {
      "name": "Nesa EVM Explorer",
      "url": "https://explorer-evm.nesa.ai",
      "standard": "EIP3091"
    }
  ]
};

export const eduChain41923: Chain = {
  "name": "EDU Chain",
  "chain": "EDU Chain",
  "rpc": [
    "https://rpc.educhain.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "EDU",
    "symbol": "EDU",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.educhain.xyz/",
  "shortName": "edu-chain",
  "chainId": 41923,
  "networkId": 41923,
  "icon": "edu-chain",
  "explorers": [
    {
      "name": "EDU Chain Explorer",
      "url": "https://explorer.educhain.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const tempoModerato42431: Chain = {
  "name": "Tempo Testnet",
  "chain": "Tempo",
  "icon": "tempo",
  "rpc": [
    "https://rpc.testnet.tempo.xyz",
    "wss://rpc.testnet.tempo.xyz"
  ],
  "faucets": [
    "https://docs.tempo.xyz/quickstart/faucet"
  ],
  "nativeCurrency": {
    "name": "US Dollar",
    "symbol": "USD",
    "decimals": 18
  },
  "infoURL": "https://tempo.xyz",
  "shortName": "tempo-moderato",
  "chainId": 42431,
  "networkId": 42431,
  "explorers": [
    {
      "name": "Tempo Testnet Explorer",
      "url": "https://explore.testnet.tempo.xyz",
      "standard": "EIP3091"
    }
  ],
  "status": "active"
};

export const zeroBeaconTestnet43000: Chain = {
  "name": "Zero Beacon Testnet",
  "chain": "ZERO",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "ZRO",
    "symbol": "ZRO",
    "decimals": 18
  },
  "infoURL": "https://layerzero.network",
  "shortName": "zero-beacon-testnet",
  "chainId": 43000,
  "networkId": 43000,
  "explorers": []
};

export const zeroSystemTestnet43001: Chain = {
  "name": "Zero System Zone Testnet",
  "chain": "ZERO",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "ZRO",
    "symbol": "ZRO",
    "decimals": 18
  },
  "infoURL": "https://layerzero.network",
  "shortName": "zero-system-testnet",
  "chainId": 43001,
  "networkId": 43001,
  "explorers": []
};

export const zeroInteropTestnet43002: Chain = {
  "name": "Zero Interop Zone Testnet",
  "chain": "ZERO",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "ZRO",
    "symbol": "ZRO",
    "decimals": 18
  },
  "infoURL": "https://layerzero.network",
  "shortName": "zero-interop-testnet",
  "chainId": 43002,
  "networkId": 43002,
  "explorers": []
};

export const zeroAtlasTestnet43003: Chain = {
  "name": "LayerZero ATLAS Testnet",
  "chain": "ZERO",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "ZRO",
    "symbol": "ZRO",
    "decimals": 18
  },
  "infoURL": "https://layerzero.network",
  "shortName": "zero-atlas-testnet",
  "chainId": 43003,
  "networkId": 43003,
  "explorers": []
};

export const zeroPrivateTestnet43004: Chain = {
  "name": "Zero Private Zone Testnet",
  "chain": "ZERO",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "ZRO",
    "symbol": "ZRO",
    "decimals": 18
  },
  "infoURL": "https://layerzero.network",
  "shortName": "zero-private-testnet",
  "chainId": 43004,
  "networkId": 43004,
  "explorers": []
};

export const ricTest45578: Chain = {
  "name": "Riche Chain Testnet",
  "chain": "RIC",
  "rpc": [
    "https://rpcrichechain.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Riche",
    "symbol": "RIC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://rpcrichechain.com",
  "shortName": "ric-test",
  "chainId": 45578,
  "networkId": 45578,
  "explorers": [
    {
      "name": "RicheScan",
      "url": "https://richescan-testnet.com/",
      "standard": "EIP3091"
    }
  ]
};

export const robinhoodchaintestnet46630: Chain = {
  "name": "Robinhood Chain Testnet",
  "chain": "Robinhood Chain Testnet",
  "icon": "https://cdn.robinhood.com/assets/generated_assets/hoodchain_docsite/rh_favicon_120.png",
  "rpc": [
    "https://rpc.testnet.chain.robinhood.com"
  ],
  "faucets": [
    "https://faucet.testnet.chain.robinhood.com"
  ],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://docs.robinhood.com/chain",
  "shortName": "robinhoodchaintestnet",
  "chainId": 46630,
  "networkId": 46630,
  "explorers": [
    {
      "name": "Robinhood Chain Testnet Explorer",
      "url": "https://explorer.testnet.chain.robinhood.com",
      "standard": "EIP3091"
    }
  ],
  "status": "active"
};

export const txcl47294: Chain = {
  "name": "TradeXcele",
  "chain": "TXCL",
  "rpc": [
    "https://tradexcele.cloud/rpc/"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [
    "https://tradexcele.cloud/chain/faucet/"
  ],
  "nativeCurrency": {
    "name": "TXCL",
    "symbol": "TXCL",
    "decimals": 18
  },
  "infoURL": "https://tradexcele.com/chain",
  "shortName": "txcl",
  "chainId": 47294,
  "networkId": 47294,
  "explorers": [
    {
      "name": "TXCL Explorer",
      "url": "https://tradexcele.cloud/chain"
    }
  ]
};

export const bitbadges50024: Chain = {
  "name": "BitBadges",
  "chain": "BitBadges",
  "rpc": [
    "https://evm-rpc.bitbadges.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BitBadges",
    "symbol": "BADGE",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://bitbadges.io",
  "shortName": "bitbadges",
  "chainId": 50024,
  "networkId": 50024,
  "explorers": [
    {
      "name": "BitBadges Explorer",
      "url": "https://evm.explorer.bitbadges.io",
      "standard": "EIP3091"
    }
  ]
};

export const bitbadgesTestnet50025: Chain = {
  "name": "BitBadges Testnet",
  "chain": "BitBadges",
  "rpc": [
    "https://evm-rpc-testnet.bitbadges.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BitBadges",
    "symbol": "BADGE",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://bitbadges.io",
  "shortName": "bitbadges-testnet",
  "chainId": 50025,
  "networkId": 50025,
  "explorers": [
    {
      "name": "BitBadges Testnet Explorer",
      "url": "https://evm-testnet.explorer.bitbadges.io",
      "standard": "EIP3091"
    }
  ]
};

export const somniaTestnet50312: Chain = {
  "name": "Somnia Testnet",
  "chain": "Somnia",
  "rpc": [
    "https://api.infra.testnet.somnia.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Somnia Testnet",
    "symbol": "STT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://somnia.network",
  "shortName": "SomniaTestnet",
  "chainId": 50312,
  "networkId": 50312,
  "icon": "somnia",
  "explorers": [
    {
      "name": "Shannon Explorer",
      "url": "https://shannon-explorer.somnia.network",
      "standard": "EIP3091"
    }
  ]
};

export const risa51014: Chain = {
  "name": "Risa Testnet",
  "chain": "Risa Testnet",
  "shortName": "risa",
  "infoURL": "https://syndicate.io",
  "icon": "syndicate",
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "chainId": 51014,
  "networkId": 51014,
  "nativeCurrency": {
    "name": "Testnet Syndicate",
    "symbol": "SYND",
    "decimals": 18
  },
  "rpc": [
    "https://rpc.testnet.syndicate.io"
  ],
  "faucets": [],
  "explorers": [
    {
      "name": "Risa Testnet Explorer",
      "url": "https://explorer.testnet.syndicate.io",
      "logo": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const mementoMainnet51888: Chain = {
  "name": "Memento Mainnet",
  "chain": "Memento",
  "rpc": [
    "https://rpc.mementoblockchain.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "",
  "shortName": "memento-mainnet",
  "chainId": 51888,
  "networkId": 51888,
  "explorers": []
};

export const lazai52924: Chain = {
  "name": "LazAI Mainnet",
  "chain": "LazAI",
  "rpc": [
    "https://mainnet.lazai.network/",
    "wss://mainnet.lazai.network/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "METIS Token",
    "symbol": "METIS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://lazai.network",
  "shortName": "lazai",
  "chainId": 52924,
  "networkId": 52924,
  "icon": "metis",
  "explorers": [
    {
      "name": "LazAI Mainnet Explorer",
      "url": "https://explorer.mainnet.lazai.network",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const datahaven55930: Chain = {
  "name": "DataHaven Mainnet",
  "chain": "datahaven",
  "icon": "datahaven",
  "rpc": [
    "https://services.datahaven-mainnet.network/mainnet",
    "wss://services.datahaven-mainnet.network/mainnet"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "HAVE",
    "symbol": "HAVE",
    "decimals": 18
  },
  "infoURL": "https://datahaven.xyz",
  "shortName": "datahaven",
  "chainId": 55930,
  "networkId": 55930,
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://dhscan.io",
      "standard": "none"
    }
  ]
};

export const datahaven55931: Chain = {
  "name": "DataHaven Testnet",
  "chain": "datahaven-testnet",
  "icon": "datahaven",
  "rpc": [
    "https://services.datahaven-testnet.network/testnet",
    "wss://services.datahaven-testnet.network/testnet"
  ],
  "faucets": [
    "https://apps.datahaven.xyz/faucet"
  ],
  "nativeCurrency": {
    "name": "MOCK",
    "symbol": "MOCK",
    "decimals": 18
  },
  "infoURL": "https://datahaven.xyz",
  "shortName": "datahaven",
  "chainId": 55931,
  "networkId": 55931,
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://testnet.dhscan.io",
      "standard": "none"
    }
  ]
};

export const zktanenbaum57057: Chain = {
  "name": "zkTanenbaum Testnet",
  "chain": "ZKSYS",
  "rpc": [
    "https://rpc-zk.tanenbaum.io"
  ],
  "faucets": [
    "https://faucet-zk.tanenbaum.io"
  ],
  "nativeCurrency": {
    "name": "Testnet Syscoin",
    "symbol": "TSYS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://syscoin.org",
  "shortName": "zktanenbaum",
  "chainId": 57057,
  "networkId": 57057,
  "explorers": [
    {
      "name": "zkTanenbaum Block Explorer",
      "url": "https://explorer-zk.tanenbaum.io",
      "standard": "EIP3091"
    }
  ]
};

export const mevCommit57173: Chain = {
  "name": "mev-commit Mainnet",
  "chain": "mev-commit",
  "rpc": [
    "https://chainrpc.mev-commit.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://www.primev.xyz",
  "shortName": "mev-commit",
  "chainId": 57173,
  "networkId": 57173,
  "icon": "mev-commit",
  "explorers": [
    {
      "name": "mev-commit Xplorer",
      "url": "https://www.mev-commit.xyz",
      "icon": "mev-commit"
    }
  ]
};

export const jello61564: Chain = {
  "name": "Gelatine Network",
  "chain": "JELLO",
  "rpc": [
    "https://rpc.pine.ink"
  ],
  "faucets": [
    "https://gelatine.pine.ink"
  ],
  "nativeCurrency": {
    "name": "JELLO",
    "symbol": "JELLO",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://gelatine.pine.ink",
  "shortName": "jello",
  "chainId": 61564,
  "networkId": 61564,
  "icon": "jello",
  "explorers": [
    {
      "name": "Gelatine Explorer",
      "url": "https://explorer.pine.ink",
      "standard": "EIP3091"
    }
  ]
};

export const mova61900: Chain = {
  "name": "Mova Mainnet",
  "chain": "MOVA",
  "rpc": [
    "https://rpc.movachain.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "MOVA Mainnet GasCoin",
    "symbol": "MOVA",
    "decimals": 18
  },
  "infoURL": "https://movachain.com",
  "shortName": "mova",
  "chainId": 61900,
  "networkId": 61900,
  "icon": "mova",
  "explorers": [
    {
      "name": "movascan",
      "url": "https://scan.movachain.com",
      "standard": "EIP3091"
    }
  ]
};

export const apollo62606: Chain = {
  "name": "Apollo Mainnet",
  "chain": "APOLLO",
  "rpc": [
    "https://mainnet-rpc.apolloscan.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Apollo",
    "symbol": "APOLLO",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://apolloscan.io",
  "shortName": "apollo",
  "chainId": 62606,
  "networkId": 62606,
  "icon": "apollo",
  "explorers": [
    {
      "name": "Apollo Mainnet Explorer",
      "url": "https://apolloscan.io",
      "standard": "EIP3091"
    }
  ],
  "chainSlug": "apollo",
  "isTestnet": false
};

export const veri563868: Chain = {
  "name": "Veri5",
  "chain": "VERI5",
  "icon": "https://gateway.pinata.cloud/ipfs/bafybeihqekabx2rg2m2crfg3r63fmcngqj5ghk4gucknmr66empihp6bfq",
  "rpc": [
    "https://rpc0.veri5.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Unit",
    "symbol": "UNIT",
    "decimals": 18
  },
  "infoURL": "https://veri5.technology",
  "shortName": "veri5",
  "chainId": 63868,
  "networkId": 63868,
  "explorers": [
    {
      "name": "Veri5 Explorer",
      "url": "https://explorer.veri5.network",
      "icon": "https://gateway.pinata.cloud/ipfs/bafybeihqekabx2rg2m2crfg3r63fmcngqj5ghk4gucknmr66empihp6bfq",
      "standard": "EIP3091"
    }
  ]
};

export const gald64137: Chain = {
  "name": "Galdrion Mainnet",
  "chain": "GALD",
  "icon": "https://galdrionscan.com/logo.png",
  "rpc": [
    "https://rpc-mainnet.galdrionscan.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Galdrion",
    "symbol": "GALD",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://galdrion.com",
  "shortName": "gald",
  "chainId": 64137,
  "networkId": 64137,
  "explorers": [
    {
      "name": "GaldrionScan",
      "url": "https://galdrionscan.com",
      "icon": "https://galdrionscan.com/logo.png",
      "standard": "EIP3091"
    }
  ]
};

export const omachainTestnet66238: Chain = {
  "name": "OMAChain Testnet",
  "chain": "OMAChain",
  "rpc": [
    "https://rpc.testnet.chain.oma3.org/"
  ],
  "faucets": [
    "https://faucet.testnet.chain.oma3.org/"
  ],
  "nativeCurrency": {
    "name": "OMA",
    "symbol": "OMA",
    "decimals": 18
  },
  "infoURL": "https://www.oma3.org/",
  "shortName": "omachain-testnet",
  "chainId": 66238,
  "networkId": 66238,
  "explorers": [
    {
      "name": "OMAChain Testnet Explorer",
      "url": "https://explorer.testnet.chain.oma3.org/",
      "standard": "EIP3091"
    }
  ]
};

export const nxpc68414: Chain = {
  "name": "Henesys",
  "chain": "Henesys",
  "rpc": [
    "https://henesys-rpc.msu.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Nexpace",
    "symbol": "NXPC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://nexpace.io/",
  "shortName": "nxpc",
  "chainId": 68414,
  "networkId": 68414,
  "icon": "nexpace",
  "explorers": [
    {
      "name": "Xangle MSU Explorer",
      "url": "https://msu-explorer.xangle.io",
      "standard": "EIP3091"
    },
    {
      "name": "Avalanche Explorer",
      "url": "https://subnets.avax.network/henesys",
      "standard": "EIP3091"
    }
  ]
};

export const eto69670: Chain = {
  "name": "ETO L1",
  "chain": "ETO",
  "icon": "eto",
  "rpc": [
    "https://eto.ash.center/rpc",
    "wss://eto.ash.center/ws"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "eGAS",
    "symbol": "eGAS",
    "decimals": 18
  },
  "infoURL": "https://eto.ash.center",
  "shortName": "eto",
  "chainId": 69670,
  "networkId": 69670,
  "explorers": [
    {
      "name": "ETO Explorer",
      "url": "https://eto-explorer.ash.center"
    }
  ]
};

export const pyra70003: Chain = {
  "name": "Pyra Chain",
  "chain": "PYRA",
  "rpc": [
    "https://rpc.pyrachain.io",
    "wss://ws.pyrachain.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "PYRA",
    "symbol": "PYRA",
    "decimals": 9
  },
  "features": [],
  "infoURL": "https://pyrachain.io",
  "shortName": "pyra",
  "chainId": 70003,
  "networkId": 70003,
  "icon": "pyra",
  "explorers": [
    {
      "name": "Pyra Chain Explorer",
      "url": "https://explorer.pyrachain.io",
      "standard": "none"
    }
  ],
  "icons": [
    {
      "url": "https://pub-8fc3afdc9d7448b8bd5fc1f378c24a88.r2.dev/system/pyra.jpg",
      "width": 512,
      "height": 512,
      "format": "jpg"
    }
  ]
};

export const seven70007: Chain = {
  "name": "Seven Chain",
  "chain": "SEVEN",
  "rpc": [
    "https://theseven.meme/api/seven-chain/jsonrpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Seven",
    "symbol": "SEVEN",
    "decimals": 18
  },
  "infoURL": "https://theseven.meme",
  "shortName": "seven",
  "chainId": 70007,
  "networkId": 70007,
  "explorers": [
    {
      "name": "Seven Chain Explorer",
      "url": "https://theseven.meme/blockchain/explorer",
      "standard": "EIP3091"
    }
  ]
};

export const eki70101: Chain = {
  "name": "EKI Chain",
  "chain": "EKI",
  "chainId": 70101,
  "networkId": 70101,
  "infoURL": "https://eki-chain.onrender.com",
  "shortName": "eki",
  "rpc": [
    "https://eki-chain.onrender.com/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "EKI",
    "symbol": "EKI",
    "decimals": 18
  },
  "icon": "eki",
  "explorers": [
    {
      "name": "EKI Explorer",
      "url": "https://eki-chain.onrender.com",
      "standard": "none"
    }
  ]
};

export const cxTestnet70707: Chain = {
  "name": "CX Chain Testnet",
  "chain": "CX",
  "icon": "ipfs://bafkreiemtyffyyodqiqxinaejvytbzcfn4n572waybnpknzzehtawumrla",
  "rpc": [
    "https://subnets.avax.network/cxctestnet/testnet/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "CX",
    "symbol": "CX",
    "decimals": 18
  },
  "infoURL": "https://www.cxchain.xyz/",
  "shortName": "cx-testnet",
  "chainId": 70707,
  "networkId": 70707,
  "explorers": [
    {
      "name": "CX Chain Testnet Explorer",
      "url": "https://subnets-test.avax.network/cxctestnet"
    }
  ]
};

export const wcnTestnet71117: Chain = {
  "name": "W Chain Testnet",
  "chain": "WCN",
  "rpc": [
    "https://rpc-testnet.w-chain.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "W Coin",
    "symbol": "WCO",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://w-chain.com",
  "shortName": "wcn-testnet",
  "chainId": 71117,
  "networkId": 71117,
  "icon": "https://apricot-deep-swordtail-337.mypinata.cloud/ipfs/bafkreifnbotmhobqceuj5ghefo76gherr2pjugc2g6jssy4w5dlexqgvue",
  "explorers": [
    {
      "name": "W Scan Testnet",
      "url": "https://scan-testnet.w-chain.com",
      "icon": "https://apricot-deep-swordtail-337.mypinata.cloud/ipfs/bafkreifnbotmhobqceuj5ghefo76gherr2pjugc2g6jssy4w5dlexqgvue",
      "standard": "EIP3091"
    }
  ]
};

export const rLS72957: Chain = {
  "name": "Rayls Mainnet",
  "chain": "RLS",
  "rpc": [
    "https://mainnet-rpc.rayls.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "USD Rayls",
    "symbol": "USDr",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://rayls.com",
  "shortName": "RLS",
  "chainId": 72957,
  "networkId": 72957,
  "icon": "rayls",
  "explorers": [
    {
      "name": "Rayls Mainnet Explorer",
      "url": "https://explorer.rayls.com",
      "icon": "rayls",
      "standard": "EIP3091"
    }
  ]
};

export const seleman73571: Chain = {
  "name": "SELEMAN Chain",
  "chain": "SMN",
  "rpc": [
    "https://explorer.primevertexlabs.com.mx/rpc",
    "wss://explorer-ws.primevertexlabs.com.mx"
  ],
  "faucets": [
    "https://explorer.primevertexlabs.com.mx/faucet"
  ],
  "nativeCurrency": {
    "name": "SELEMAN",
    "symbol": "SMN",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://explorer.primevertexlabs.com.mx/explorer",
  "shortName": "seleman",
  "chainId": 73571,
  "networkId": 73571,
  "slip44": 73571,
  "chainSlug": "seleman",
  "icon": "seleman",
  "explorers": [
    {
      "name": "seleman",
      "url": "https://explorer.primevertexlabs.com.mx",
      "standard": "EIP3091"
    }
  ]
};

export const carrchain76672: Chain = {
  "name": "CarrChain Testnet",
  "chain": "CARR",
  "rpc": [
    "https://rpc-testnet.carrchain.io"
  ],
  "faucets": [
    "http://faucet.carrchain.io"
  ],
  "nativeCurrency": {
    "name": "CARR",
    "symbol": "CARR",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://carrchain.io",
  "shortName": "carrchain",
  "chainId": 76672,
  "networkId": 76672,
  "icon": "carrchain",
  "explorers": [
    {
      "name": "CarrScan",
      "url": "https://testnet.carrscan.io",
      "standard": "EIP3091",
      "icon": "carrchain"
    }
  ]
};

export const ventures77717: Chain = {
  "name": "Ventures Blockchain",
  "chain": "Ventures",
  "rpc": [
    "https://rpc.venturesblockchain.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ventures Coin",
    "symbol": "VC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.venturesblockchain.io",
  "shortName": "ventures",
  "chainId": 77717,
  "networkId": 77717,
  "explorers": [
    {
      "name": "Ventures Explorer",
      "url": "https://explorer.venturesblockchain.io",
      "standard": "EIP3091"
    }
  ]
};

export const bsos77888: Chain = {
  "name": "BSOS Chain",
  "chain": "BSOS",
  "rpc": [
    "https://rpc.one.bsos.co"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BSOS",
    "symbol": "BSOS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.bsos.co",
  "shortName": "bsos",
  "chainId": 77888,
  "networkId": 77888,
  "explorers": [
    {
      "name": "BSOS Chain Explorer",
      "url": "https://explorer.one.bsos.co",
      "standard": "none"
    }
  ]
};

export const bradi78168: Chain = {
  "name": "Bradicoin",
  "chain": "BRADI",
  "rpc": [
    "https://bradicoin-api.onrender.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bradicoin",
    "symbol": "BRD",
    "decimals": 18
  },
  "infoURL": "https://www.bradichain.com",
  "shortName": "bradi",
  "chainId": 78168,
  "networkId": 78168,
  "explorers": []
};

export const pexliTestnet78901: Chain = {
  "name": "Pexli Testnet",
  "chain": "PEX",
  "rpc": [
    "https://testrpc.pex.li"
  ],
  "faucets": [
    "https://faucet.pex.li"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "nativeCurrency": {
    "name": "Pexli",
    "symbol": "PEX",
    "decimals": 18
  },
  "infoURL": "https://pex.li",
  "shortName": "pexli-testnet",
  "chainId": 78901,
  "networkId": 78901,
  "explorers": [
    {
      "name": "Pexli Explorer",
      "url": "https://explorer.pex.li",
      "standard": "EIP3091"
    }
  ]
};

export const hpx80808: Chain = {
  "name": "HyperX",
  "chain": "HPX",
  "rpc": [
    "https://rpc.hyperx.technology"
  ],
  "faucets": [
    "https://faucet.hyperx.technology"
  ],
  "nativeCurrency": {
    "name": "HPX",
    "symbol": "HPX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://hyperx.technology",
  "shortName": "hpx",
  "chainId": 80808,
  "networkId": 80808,
  "explorers": [
    {
      "name": "HyperX Explorer",
      "url": "https://scan.hyperx.technology",
      "standard": "EIP3091"
    }
  ]
};

export const onyx80888: Chain = {
  "name": "Onyx",
  "chain": "onyx",
  "rpc": [
    "https://rpc.onyx.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Onyxcoin",
    "symbol": "XCN",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://onyx.org",
  "shortName": "onyx",
  "chainId": 80888,
  "networkId": 80888,
  "icon": "onyx",
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer.onyx.org",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const codex81224: Chain = {
  "name": "Codex Mainnet",
  "chain": "CODEX",
  "rpc": [
    "https://rpc.codex.xyz",
    "wss://rpc.codex.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.codex.xyz/",
  "shortName": "codex",
  "chainId": 81224,
  "networkId": 81224,
  "icon": "codex",
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer.codex.xyz",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const steemvm81630: Chain = {
  "name": "SteemVM",
  "title": "SteemVM Manaslu Mainnet",
  "chain": "SVM",
  "rpc": [
    "https://evm.steemvmscan.com",
    "wss://evm-ws.steemvmscan.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "STEEM",
    "symbol": "STEEM",
    "decimals": 18
  },
  "infoURL": "https://steemvmscan.com",
  "shortName": "steemvm",
  "icon": "steem",
  "chainId": 81630,
  "networkId": 81630,
  "explorers": [
    {
      "name": "SVM EVM Scan",
      "url": "https://evmscan.steemvmscan.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const ticko84256: Chain = {
  "name": "Ticko",
  "chain": "Ticko",
  "rpc": [
    "https://miner.ticko.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://ticko.xyz/",
  "shortName": "ticko",
  "chainId": 84256,
  "networkId": 84256,
  "icon": "ticko",
  "explorers": [
    {
      "name": "ticko explorer",
      "url": "https://app.ticko.xyz/explorer",
      "icon": "ticko",
      "standard": "EIP3091"
    }
  ]
};

export const tickoTestnet84257: Chain = {
  "name": "Ticko Testnet",
  "chain": "Ticko",
  "rpc": [
    "https://miner.testnet.ticko.xyz:4556"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://testnet.ticko.xyz/",
  "shortName": "ticko-testnet",
  "chainId": 84257,
  "networkId": 84257,
  "icon": "ticko",
  "explorers": [
    {
      "name": "ticko explorer",
      "url": "https://testnet.ticko.xyz/explorer",
      "icon": "ticko",
      "standard": "EIP3091"
    }
  ]
};

export const plus88088: Chain = {
  "name": "PLUS Mainnet",
  "chain": "PLUS",
  "icon": "plus",
  "rpc": [
    "https://plusmain.net/api/rpc",
    "https://rpc.plusmain.net"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "PLUS Coin",
    "symbol": "PLUS",
    "decimals": 18
  },
  "infoURL": "https://plusmain.net",
  "shortName": "plus",
  "chainId": 88088,
  "networkId": 88088,
  "explorers": [
    {
      "name": "PLUS Mainnet Explorer",
      "url": "https://scan.plusmain.net",
      "standard": "EIP3091"
    }
  ]
};

export const ptek88788: Chain = {
  "name": "PropTech Mainnet",
  "chain": "PTEK",
  "rpc": [
    "https://mainnet.ptekcoin.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "PropTech Token",
    "symbol": "PTEK",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://ptekcoin.com",
  "shortName": "ptek",
  "chainId": 88788,
  "networkId": 88788,
  "icon": "ptek",
  "explorers": [
    {
      "name": "PropTech Blockchain Explorer",
      "url": "https://explorer.ptekcoin.com",
      "icon": "ptek",
      "standard": "EIP3091"
    }
  ]
};

export const qtschain88868: Chain = {
  "name": "QTSCHAIN Mainnet",
  "chain": "QTS",
  "icon": "https://qts-chain.com/icon/qts.png",
  "rpc": [
    "https://rpc-1.qts-chain.com",
    "https://rpc-2.qts-chain.com",
    "https://rpc-3.qts-chain.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "nativeCurrency": {
    "name": "QTS",
    "symbol": "QTS",
    "decimals": 18
  },
  "infoURL": "https://qts-chain.com",
  "shortName": "qtschain",
  "chainId": 88868,
  "networkId": 88868,
  "explorers": [
    {
      "name": "QTS Explorer",
      "url": "https://explorer.qts-chain.com",
      "icon": "https://qts-chain.com/icon/qts.png",
      "standard": "EIP3091"
    }
  ]
};

export const chiliz88888: Chain = {
  "name": "Chiliz Chain",
  "chain": "CHZ",
  "icon": "chiliz",
  "rpc": [
    "https://rpc.chiliz.com",
    "https://rpc.ankr.com/chiliz/",
    "https://chiliz.publicnode.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Chiliz",
    "symbol": "CHZ",
    "decimals": 18
  },
  "infoURL": "https://www.chiliz.com/",
  "shortName": "chiliz",
  "chainId": 88888,
  "networkId": 88888,
  "explorers": [
    {
      "name": "Chiliscan",
      "url": "https://chiliscan.com/",
      "standard": "EIP3091"
    },
    {
      "name": "Scan Chiliz",
      "url": "https://scan.chiliz.com"
    }
  ]
};

export const valuex90000: Chain = {
  "name": "ValueX Chain",
  "chain": "VLX",
  "rpc": [
    "https://node.valuex-foundation.com/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ValueX Token",
    "symbol": "VLX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://valuex-foundation.com",
  "shortName": "valuex",
  "chainId": 90000,
  "networkId": 90000,
  "icon": "vlx",
  "explorers": [
    {
      "name": "VLX Explorer",
      "url": "https://scan.valuex-foundation.com",
      "icon": "vlx",
      "standard": "EIP3091"
    }
  ]
};

export const apaw90025: Chain = {
  "name": "AIPaw Mainnet",
  "chain": "aipaw",
  "rpc": [
    "https://rpc.aipaw.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Aipaw",
    "symbol": "AIPAW",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://aipaw.top",
  "shortName": "apaw",
  "chainId": 90025,
  "networkId": 90025,
  "icon": "aipaw",
  "explorers": []
};

export const watrTestnet92870: Chain = {
  "name": "Watr Testnet",
  "chain": "WATR",
  "icon": "watr",
  "rpc": [
    "https://rpc.testnet.watr.org/ext/bc/2ZZiR6T2sJjebQguABb53rRpzme8zfK4R9zt5vMM8MX1oUm3g/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Watr",
    "symbol": "WATR",
    "decimals": 18
  },
  "infoURL": "https://www.watr.org",
  "shortName": "watr-testnet",
  "chainId": 92870,
  "networkId": 92870,
  "explorers": [
    {
      "name": "Watr Explorer",
      "url": "https://explorer.testnet.watr.org",
      "icon": "watr",
      "standard": "EIP3091"
    }
  ]
};

export const pepu97741: Chain = {
  "name": "PEPE Unchained",
  "chain": "PEPU",
  "icon": "pepu",
  "rpc": [
    "https://rpc-pepu-v2-mainnet-0.t.conduit.xyz"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Pepe Unchained",
    "symbol": "PEPU",
    "decimals": 18
  },
  "infoURL": "https://pepeunchained.com/",
  "shortName": "pepu",
  "chainId": 97741,
  "networkId": 97741,
  "explorers": [
    {
      "name": "PEPUScan",
      "url": "https://pepuscan.com/"
    }
  ]
};

export const gOGO99001: Chain = {
  "name": "Gogo Mainnet",
  "chain": "GOGO",
  "icon": "https://gogoblockchain.wuaze.com/gogoimg/gogoimg.png",
  "rpc": [
    "https://gogoblockchain.wuaze.com/node_rpc.php"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Gogo",
    "symbol": "GOGO",
    "decimals": 18
  },
  "shortName": "GOGO",
  "chainId": 99001,
  "networkId": 99001,
  "explorers": [
    {
      "name": "GogoScan",
      "url": "https://gogoblockchain.wuaze.com/explorer.php",
      "standard": "EIP3091"
    }
  ]
};

export const mC99002: Chain = {
  "name": "Mars Mainnet",
  "chain": "MC",
  "icon": "https://mars.free.nf/mars.png",
  "rpc": [
    "https://mars.free.nf/rpc.php"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Mars Coin",
    "symbol": "MC",
    "decimals": 18
  },
  "shortName": "MC",
  "chainId": 99002,
  "networkId": 99002,
  "explorers": [
    {
      "name": "MarsScan",
      "url": "https://mars.free.nf/explorer.php",
      "standard": "EIP3091"
    }
  ]
};

export const trct99566: Chain = {
  "name": "Tractsafe Mainnet",
  "chain": "TRCT",
  "rpc": [
    "https://xapi.tractsafe.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Tractsafe",
    "symbol": "TRCT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://tractsafe.com",
  "shortName": "trct",
  "chainId": 99566,
  "networkId": 99566,
  "icon": "tractsafe",
  "explorers": [
    {
      "name": "tractsafescan",
      "url": "https://explorer.tractsafe.com",
      "icon": "tractsafe",
      "standard": "EIP3091"
    }
  ]
};

export const elysiumTestnet99801: Chain = {
  "name": "Elysium Testnet",
  "chain": "Elysium Testnet",
  "icon": "https://elysium.kinetiq.xyz/assets/brand/elysium/elysium-logomark-colorized.svg",
  "rpc": [
    "https://testnet-rpc.elysium.kinetiq.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "HYPE",
    "symbol": "HYPE",
    "decimals": 18
  },
  "infoURL": "https://elysium.kinetiq.xyz/docs/what-is-elysium",
  "shortName": "elysium-testnet",
  "chainId": 99801,
  "networkId": 99801,
  "explorers": [
    {
      "name": "Elysium Testnet Explorer",
      "url": "https://testnet.elysium.kinetiq.xyz"
    }
  ],
  "status": "active"
};

export const elysium99901: Chain = {
  "name": "Elysium",
  "chain": "Elysium",
  "icon": "https://elysium.kinetiq.xyz/assets/brand/elysium/elysium-logomark-colorized.png",
  "rpc": [
    "https://rpc.elysium.kinetiq.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "HYPE",
    "symbol": "HYPE",
    "decimals": 18
  },
  "infoURL": "https://elysium.kinetiq.xyz/docs/what-is-elysium",
  "shortName": "elysium",
  "chainId": 99901,
  "networkId": 99901,
  "explorers": [
    {
      "name": "Elysium Explorer",
      "url": "https://elysium.kinetiq.xyz"
    }
  ],
  "status": "active"
};

export const qsn99991: Chain = {
  "name": "Quantum Sharded Network Testnet",
  "chain": "QSN",
  "rpc": [
    "https://node.qsnchain.com/testnet/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Quantum Sharded Network",
    "symbol": "tQSN",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://qsnchain.com",
  "shortName": "qsn",
  "chainId": 99991,
  "networkId": 99991,
  "icon": "qsn",
  "explorers": [
    {
      "name": "QSN Explorer",
      "url": "https://qsnscan.io",
      "icon": "qsn",
      "standard": "EIP3091"
    }
  ]
};

export const ctc102030: Chain = {
  "name": "Creditcoin",
  "chain": "CTC",
  "rpc": [
    "https://mainnet3.creditcoin.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "CTC",
    "symbol": "CTC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://creditcoin.org",
  "shortName": "ctc",
  "chainId": 102030,
  "networkId": 102030,
  "icon": "creditcoin",
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://creditcoin.blockscout.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const ctctest102031: Chain = {
  "name": "Creditcoin Testnet",
  "chain": "CTC",
  "rpc": [
    "https://rpc.cc3-testnet.creditcoin.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Testnet CTC",
    "symbol": "tCTC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://creditcoin.org",
  "shortName": "ctctest",
  "chainId": 102031,
  "networkId": 102031,
  "icon": "creditcoin",
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://creditcoin-testnet.blockscout.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const ctcdev102032: Chain = {
  "name": "Creditcoin Devnet",
  "chain": "CTC",
  "rpc": [
    "https://rpc.cc3-devnet.creditcoin.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Devnet CTC",
    "symbol": "devCTC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://creditcoin.org",
  "shortName": "ctcdev",
  "chainId": 102032,
  "networkId": 102032,
  "icon": "creditcoin",
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://creditcoin-devnet.blockscout.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const mtf114514: Chain = {
  "name": "MetaFlux Testnet",
  "chain": "MetaFluxEVM",
  "rpc": [
    "https://api.testnet.mtf.exchange/evm"
  ],
  "faucets": [
    "https://app.mtf.exchange/faucet?cluster=testnet"
  ],
  "nativeCurrency": {
    "name": "MetaFlux",
    "symbol": "MTF",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://mtf.exchange",
  "shortName": "mtf",
  "chainId": 114514,
  "networkId": 114514,
  "icon": "https://mtf.exchange/logo/metaflux-mark-square-mono.svg"
};

export const swss122605: Chain = {
  "name": "SWSS Chain",
  "chain": "SWSS",
  "icon": "swss",
  "rpc": [
    "https://swssrpc.swss.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "SWSS Coin",
    "symbol": "SWSS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://swss.io",
  "shortName": "swss",
  "chainId": 122605,
  "networkId": 122605,
  "explorers": [
    {
      "name": "SWSS Chain Scan",
      "url": "https://swssscan.swss.io",
      "icon": "swss",
      "standard": "EIP3091"
    }
  ]
};

export const ids123999: Chain = {
  "name": "Nobody Mainnet",
  "chain": "IDS",
  "rpc": [
    "https://a-rpc.nobody.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "IDS",
    "symbol": "IDS",
    "decimals": 18
  },
  "features": [],
  "infoURL": "https://www.nobody.network",
  "shortName": "ids",
  "chainId": 123999,
  "networkId": 123999,
  "icon": "nobody",
  "explorers": [
    {
      "name": "nobodyscan",
      "url": "https://a-scan.nobody.network",
      "icon": "nobody",
      "standard": "EIP3091"
    }
  ]
};

export const mitosis124816: Chain = {
  "name": "Mitosis",
  "chain": "MITO",
  "rpc": [
    "https://rpc.mitosis.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Mitosis",
    "symbol": "MITO",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://mitosis.org",
  "shortName": "mitosis",
  "chainId": 124816,
  "networkId": 124816,
  "icon": "https://storage.googleapis.com/mitosis-statics/logos/mitosis_logo_symbol_basic.png",
  "explorers": [
    {
      "name": "Mitoscan",
      "url": "https://mitoscan.io/",
      "standard": "EIP3091"
    }
  ]
};

export const grav127001: Chain = {
  "name": "Gravity",
  "chain": "Gravity",
  "icon": "gravity",
  "rpc": [
    "https://mainnet-rpc.gravity.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Gravity",
    "symbol": "G",
    "decimals": 18
  },
  "infoURL": "https://gravity.xyz",
  "shortName": "grav",
  "chainId": 127001,
  "networkId": 127001,
  "explorers": [
    {
      "name": "Gravity Mainnet Explorer",
      "url": "https://mainnet-explorer.gravity.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const etls127823: Chain = {
  "name": "Etherlink Shadownet Testnet",
  "chain": "Etherlink",
  "rpc": [
    "https://node.shadownet.etherlink.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "tez",
    "symbol": "XTZ",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://etherlink.com",
  "shortName": "etls",
  "chainId": 127823,
  "networkId": 127823,
  "icon": "etherlink",
  "explorers": [
    {
      "name": "Etherlink Shadownet Explorer",
      "url": "https://shadownet.explorer.etherlink.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const fuelSepolia129514: Chain = {
  "name": "Fuel Sepolia Testnet",
  "chain": "ETH",
  "icon": "fuel",
  "rpc": [
    "https://fuel-testnet-rpc.getzapped.org"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [
    "https://faucet-testnet.fuel.network/"
  ],
  "nativeCurrency": {
    "name": "Ethereum",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://fuel.network/",
  "shortName": "fuel-sepolia",
  "chainId": 129514,
  "networkId": 129514,
  "explorers": [
    {
      "name": "Fuel Sepolia Testnet Explorer",
      "url": "https://fuel-testnet-explorer.getzapped.org",
      "standard": "none"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111",
    "bridges": [
      {
        "url": "https://app-testnet.fuel.network/bridge"
      }
    ]
  }
};

export const rphx130526: Chain = {
  "name": "RPHX Mainnet",
  "chain": "RPHX",
  "icon": "rphx",
  "rpc": [
    "https://rpc.rphxscan.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "RPHX",
    "symbol": "RPHX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://rphxscan.com",
  "shortName": "rphx",
  "chainId": 130526,
  "networkId": 130526,
  "explorers": [
    {
      "name": "RphxScan",
      "url": "https://rphxscan.com",
      "standard": "EIP3091"
    }
  ]
};

export const aria134235: Chain = {
  "name": "ARIA Chain",
  "chain": "ARIA",
  "rpc": [
    "https://rpc.ariascan.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ARIA",
    "symbol": "ARIA",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://ariascan.org",
  "shortName": "aria",
  "chainId": 134235,
  "networkId": 134235,
  "explorers": [
    {
      "name": "ARIA Explorer",
      "url": "https://explorer.ariascan.org",
      "standard": "EIP3091"
    }
  ]
};

export const midxt139420: Chain = {
  "name": "Midpoint Cross Testnet",
  "chain": "MIDX",
  "rpc": [
    "https://testnet.midpointcross.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Midpoint Cross Testnet",
    "symbol": "tMIDX",
    "decimals": 18
  },
  "infoURL": "https://www.midpointcross.com",
  "shortName": "midxt",
  "chainId": 139420,
  "networkId": 139420,
  "slip44": 1,
  "explorers": [
    {
      "name": "Midpoint Cross Testnet",
      "url": "https://testnet-transactions.midpointcross.com",
      "standard": "EIP3091"
    }
  ]
};

export const bexchain140586: Chain = {
  "name": "BEXChain",
  "chain": "BEX",
  "icon": "bexchain",
  "rpc": [
    "https://rpc.bexchain.com"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BEX",
    "symbol": "BEX",
    "decimals": 18
  },
  "infoURL": "https://bexchain.com",
  "shortName": "bexchain",
  "chainId": 140586,
  "networkId": 140586,
  "explorers": [
    {
      "name": "BEXChain Scan",
      "url": "https://scan.bexchain.com",
      "standard": "EIP3091"
    }
  ]
};

export const kasplex167012: Chain = {
  "name": "Kasplex zkEVM Testnet",
  "chain": "KASPLEX",
  "icon": "kasplex",
  "rpc": [
    "https://rpc.kasplextest.xyz/"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "KAS",
    "symbol": "KAS",
    "decimals": 18
  },
  "infoURL": "https://kasplex.org/",
  "shortName": "kasplex",
  "chainId": 167012,
  "networkId": 167012,
  "explorers": [
    {
      "name": "Kasplex Explorer",
      "url": "https://explorer.testnet.kasplextest.xyz/"
    }
  ]
};

export const wcn171717: Chain = {
  "name": "W Chain Mainnet",
  "chain": "WCN",
  "rpc": [
    "https://rpc.w-chain.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "W Coin",
    "symbol": "WCO",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://w-chain.com",
  "shortName": "wcn",
  "chainId": 171717,
  "networkId": 171717,
  "icon": "https://apricot-deep-swordtail-337.mypinata.cloud/ipfs/bafkreifnbotmhobqceuj5ghefo76gherr2pjugc2g6jssy4w5dlexqgvue",
  "explorers": [
    {
      "name": "W Scan",
      "url": "https://scan.w-chain.com",
      "icon": "https://apricot-deep-swordtail-337.mypinata.cloud/ipfs/bafkreifnbotmhobqceuj5ghefo76gherr2pjugc2g6jssy4w5dlexqgvue",
      "standard": "EIP3091"
    }
  ]
};

export const lit175200: Chain = {
  "name": "Lit Chain Mainnet",
  "chain": "LITKEY",
  "rpc": [
    "https://lit-chain-rpc.litprotocol.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Lit Protocol",
    "symbol": "LITKEY",
    "decimals": 18
  },
  "infoURL": "https://litprotocol.com",
  "shortName": "lit",
  "chainId": 175200,
  "networkId": 175200,
  "icon": "https://arweave.net/N-8JO-TorSdG2v9FUdvNpkQw11EYL47wEFbYA-KAMBg",
  "explorers": [
    {
      "name": "Lit Chain Explorer",
      "url": "https://lit-chain-explorer.litprotocol.com",
      "icon": "lit",
      "standard": "EIP3091"
    }
  ]
};

export const dpn179205: Chain = {
  "name": "Dinari Financial Network Paper",
  "chain": "DFNP",
  "rpc": [
    "https://subnets.avax.network/dfnpaper/testnet/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Dinari Gas",
    "symbol": "DGAS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://dinari.com",
  "shortName": "dpn",
  "chainId": 179205,
  "networkId": 179205,
  "icon": "dpn",
  "explorers": [
    {
      "name": "Dinari Paper Ledger",
      "url": "https://subnets-test.avax.network/dfnpaper",
      "icon": "dinari"
    }
  ]
};

export const hppSepolia181228: Chain = {
  "name": "HPP Sepolia",
  "chain": "HPP",
  "rpc": [
    "https://sepolia.hpp.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.hpp.io",
  "shortName": "hpp-sepolia",
  "chainId": 181228,
  "networkId": 181228,
  "icon": "ethereum",
  "explorers": [
    {
      "name": "HPP Sepolia Explorer",
      "url": "https://sepolia-explorer.hpp.io",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const gomchainMainnet190278: Chain = {
  "name": "GomChain Mainnet",
  "chain": "GomChain",
  "rpc": [
    "https://rpc.gomchain.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "GOM",
    "symbol": "GOM",
    "decimals": 18
  },
  "infoURL": "https://gomchain.com",
  "shortName": "gomchain-mainnet",
  "chainId": 190278,
  "networkId": 190278,
  "icon": "gom",
  "explorers": [
    {
      "name": "gomscan",
      "url": "https://scan.gomchain.com",
      "standard": "EIP3091"
    }
  ]
};

export const hppMainnet190415: Chain = {
  "name": "HPP Mainnet",
  "chain": "HPP",
  "rpc": [
    "https://mainnet.hpp.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.hpp.io",
  "shortName": "hpp-mainnet",
  "chainId": 190415,
  "networkId": 190415,
  "icon": "ethereum",
  "explorers": [
    {
      "name": "HPP Mainnet Explorer",
      "url": "https://explorer.hpp.io",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const r0ar193939: Chain = {
  "name": "R0AR Chain",
  "chain": "R0AR",
  "rpc": [
    "https://rpc-r0ar.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://r0ar.io",
  "shortName": "r0ar",
  "chainId": 193939,
  "networkId": 193939,
  "icon": {
    "url": "https://amaranth-elaborate-primate-236.mypinata.cloud/ipfs/bafkreibqk63qcgukyunft3h2qxh56cg6mtvzlrnxw4mbpxgahdk2litxqi",
    "format": "svg",
    "width": 512,
    "height": 512
  },
  "explorers": [
    {
      "name": "R0ARscan",
      "url": "https://r0arscan.io",
      "icon": "r0ar",
      "standard": "EIP3091"
    }
  ]
};

export const eadx198724: Chain = {
  "name": "EADX Network",
  "chain": "EADX",
  "rpc": [
    "https://rpc.eadx.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "EADX",
    "symbol": "EDX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://eadxexchange.com",
  "shortName": "eadx",
  "chainId": 198724,
  "networkId": 198724,
  "explorers": [
    {
      "name": "EADX Explorer",
      "url": "https://explorer.eadx.network",
      "standard": "EIP3091"
    }
  ]
};

export const nos200024: Chain = {
  "name": "NitroGraph Testnet",
  "chain": "NOS",
  "rpc": [
    "https://rpc-testnet.nitrograph.foundation"
  ],
  "faucets": [
    "https://faucet-testnet.nitrograph.foundation"
  ],
  "nativeCurrency": {
    "name": "Nitro",
    "symbol": "NOS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://nitrograph.com",
  "shortName": "nos",
  "chainId": 200024,
  "networkId": 200024,
  "icon": "https://github.com/nitrographtech/ng-assets/blob/main/logos/nitro_token_red.png",
  "explorers": [
    {
      "name": "nitroscan",
      "url": "https://explorer-testnet.nitrograph.foundation",
      "icon": "nitroscan",
      "standard": "EIP3091"
    }
  ]
};

export const fsc201022: Chain = {
  "name": "FONChain Mainnet",
  "chain": "FSC",
  "rpc": [
    "https://fsc-dataseed1.fonscan.io",
    "https://fsc-dataseed2.fonscan.io",
    "https://fsc-dataseed3.fonscan.io",
    "https://fsc-dataseed4.fonscan.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "FON",
    "symbol": "FON",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://fonchain.io",
  "shortName": "fsc",
  "chainId": 201022,
  "networkId": 201022,
  "icon": "fonchain",
  "explorers": [
    {
      "name": "fonscan",
      "url": "https://fonscan.io",
      "icon": "fonscan",
      "standard": "EIP3091"
    }
  ]
};

export const dfn202110: Chain = {
  "name": "Dinari Financial Network",
  "chain": "DFN",
  "rpc": [
    "https://subnets.avax.network/dinari/mainnet/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Dinari Gas",
    "symbol": "DGAS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://dinari.com",
  "shortName": "dfn",
  "chainId": 202110,
  "networkId": 202110,
  "icon": "dfn",
  "explorers": [
    {
      "name": "Dinari Ledger",
      "url": "https://subnets.avax.network/dinari",
      "icon": "dinari"
    }
  ]
};

export const sVS202308: Chain = {
  "name": "StarChain",
  "chain": "SVS",
  "rpc": [
    "https://rpc.starryscan.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "SVS",
    "symbol": "SVS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.starrychain.net",
  "shortName": "SVS",
  "chainId": 202308,
  "networkId": 202308,
  "explorers": [
    {
      "name": "starryscan",
      "url": "https://www.starryscan.com",
      "standard": "EIP3091"
    }
  ]
};

export const propulenceTestnet202500: Chain = {
  "name": "Propulence Testnet",
  "chain": "Propulence",
  "rpc": [
    "https://rpc.testnet.thepropulence.com"
  ],
  "faucets": [
    "https://faucet.testnet.thepropulence.com"
  ],
  "nativeCurrency": {
    "name": "Propulence",
    "symbol": "PROPX",
    "decimals": 18
  },
  "shortName": "Propulence-testnet",
  "chainId": 202500,
  "networkId": 202500,
  "explorers": [
    {
      "name": "Propulence Testnet Explorer",
      "url": "https://explorer.testnet.thepropulence.com",
      "standard": "EIP3091"
    }
  ]
};

export const aurext202506: Chain = {
  "name": "Aurex Testnet",
  "chain": "AUREX",
  "rpc": [
    "https://aurexgold.com:3000"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Aurex",
    "symbol": "AUREX",
    "decimals": 18
  },
  "infoURL": "https://aurexgold.com",
  "shortName": "aurext",
  "chainId": 202506,
  "networkId": 202506,
  "slip44": 1,
  "explorers": [
    {
      "name": "Aurex Testnet Explorer",
      "url": "https://aurexgold.com:4001",
      "standard": "EIP3091"
    }
  ]
};

export const kasplex202555: Chain = {
  "name": "Kasplex zkEVM Mainnet",
  "chain": "KASPLEX",
  "icon": "kasplex",
  "rpc": [
    "https://evmrpc.kasplex.org"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "KAS",
    "symbol": "KAS",
    "decimals": 18
  },
  "infoURL": "https://kasplex.org/",
  "shortName": "kasplex",
  "chainId": 202555,
  "networkId": 202555,
  "explorers": [
    {
      "name": "Kasplex Explorer",
      "url": "https://explorer.kasplex.org"
    }
  ]
};

export const ju202599: Chain = {
  "name": "JuChain Testnet",
  "chain": "JU",
  "rpc": [
    "https://testnet-rpc.juchain.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "JUcoin",
    "symbol": "JU",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://juchain.org",
  "shortName": "ju",
  "chainId": 202599,
  "icon": "juchain",
  "explorers": [
    {
      "name": "juscan-testnet",
      "url": "https://testnet.juscan.io",
      "icon": "juscan",
      "standard": "EIP3091"
    }
  ]
};

export const roninSaigon202601: Chain = {
  "name": "Ronin Saigon Testnet",
  "chain": "RON",
  "icon": "ronin",
  "rpc": [
    "https://saigon-testnet.roninchain.com/rpc",
    "https://ronin-saigon.gateway.tatum.io/",
    "https://ronin-saigon.drpc.org"
  ],
  "faucets": [
    "https://faucet.roninchain.com/"
  ],
  "nativeCurrency": {
    "name": "Ronin",
    "symbol": "RON",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://roninchain.com",
  "shortName": "ronin-saigon",
  "chainId": 202601,
  "networkId": 202601,
  "explorers": [
    {
      "name": "Ronin Saigon Explorer",
      "url": "https://saigon-explorer.roninchain.com",
      "standard": "EIP3091"
    }
  ]
};

export const miama202610: Chain = {
  "name": "MIAMA Chain",
  "chain": "MIAMA",
  "rpc": [
    "https://miama.vidainnovasystem.top/rpc"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [
    "https://t.me/IDCryptoSci_bot"
  ],
  "nativeCurrency": {
    "name": "MIAMA",
    "symbol": "MIAMA",
    "decimals": 18
  },
  "infoURL": "https://miama.vidainnovasystem.top",
  "shortName": "miama",
  "chainId": 202610,
  "networkId": 202610,
  "icon": "https://miama.vidainnovasystem.top/miama-icon-256.png",
  "explorers": [
    {
      "name": "miama-explorer",
      "url": "https://miama.vidainnovasystem.top/explorador",
      "standard": "EIP3091"
    }
  ]
};

export const juchain210000: Chain = {
  "name": "JuChain Mainnet",
  "chain": "JU",
  "rpc": [
    "https://rpc.juchain.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "JUcoin",
    "symbol": "JU",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://juchain.org",
  "shortName": "juchain",
  "chainId": 210000,
  "icon": "juchain",
  "explorers": [
    {
      "name": "juscan",
      "url": "https://juscan.io",
      "icon": "juscan",
      "standard": "EIP3091"
    }
  ]
};

export const klt220312: Chain = {
  "name": "KultChain",
  "chain": "KLT",
  "rpc": [
    "https://rpc.kultchain.com",
    "http://217.154.10.57:8545"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "KultCoin",
    "symbol": "KLT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://kultchain.com",
  "shortName": "klt",
  "chainId": 220312,
  "networkId": 220312,
  "icon": "kultchain",
  "explorers": [
    {
      "name": "KultChain Explorer",
      "url": "https://explorer.kultchain.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const sivzMainnet222345: Chain = {
  "name": "SSHIVANSH Mainnet",
  "chain": "SSHIVANSH",
  "icon": "https://sivz-kyc-data.s3.amazonaws.com/files/6836cca140f7398eae369fba_logo3.png",
  "rpc": [
    "https://apiprod.sshivanshcoin.com/ext/bc/2XWN3PW4Qdjw3AtG6eqH8PCzj49G9Qay6SLNWbGLjsDF1qPgsW/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "SIVZ",
    "symbol": "SIVZ",
    "decimals": 18
  },
  "infoURL": "https://sshivanshcoin.com",
  "shortName": "sivz-mainnet",
  "chainId": 222345,
  "networkId": 222345,
  "explorers": [
    {
      "name": "SSHIVANSH Explorer",
      "url": "https://explorer.sshivanshcoin.com",
      "icon": "https://sivz-kyc-data.s3.amazonaws.com/files/6836cca140f7398eae369fba_logo3.png",
      "standard": "EIP3091"
    }
  ]
};

export const mocat222888: Chain = {
  "name": "Moca Chain Testnet",
  "chain": "Moca Chain",
  "rpc": [
    "https://testnet-rpc.mocachain.org"
  ],
  "faucets": [
    "https://testnet-scan.mocachain.org/faucet"
  ],
  "nativeCurrency": {
    "name": "MOCA",
    "symbol": "MOCA",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://mocachain.org",
  "shortName": "mocat",
  "chainId": 222888,
  "networkId": 222888,
  "icon": "moca",
  "explorers": [
    {
      "name": "Moca Chain Scan",
      "url": "https://testnet-scan.mocachain.org",
      "icon": "moca",
      "standard": "EIP3091"
    }
  ]
};

export const ares232425: Chain = {
  "name": "Aries Chain Mainnet",
  "chain": "ARES",
  "rpc": [
    "https://rpc.arieschain.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Aries",
    "symbol": "ARES",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://arieschain.org",
  "shortName": "ares",
  "chainId": 232425,
  "networkId": 232425,
  "explorers": [
    {
      "name": "AriesScan",
      "url": "https://scan.arieschain.org",
      "standard": "EIP3091"
    }
  ]
};

export const codeNektMainnet235235: Chain = {
  "name": "CodeNekt Mainnet",
  "chain": "CodeNekt",
  "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/codenekt/Light.png",
  "rpc": [
    "https://rpc-mainnet-codenekt-rl.cogitus.io/ext/bc/ZG7cT4B1u3y7piZ9CzfejnTKnNAoehcifbJWUwBqgyD3RuEqK/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "CDK",
    "symbol": "CDK",
    "decimals": 18
  },
  "infoURL": "https://codenekt-ecosystem.io/",
  "shortName": "CodeNekt-mainnet",
  "chainId": 235235,
  "networkId": 235235,
  "explorers": [
    {
      "name": "CodeNekt Explorer",
      "url": "https://explorer-codenekt-mainnet.cogitus.io",
      "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/codenekt/Light.png",
      "standard": "EIP3091"
    }
  ]
};

export const ulaloMainnet237007: Chain = {
  "name": "ULALO Mainnet",
  "chain": "ULALO",
  "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/UOLO/Light.png",
  "rpc": [
    "https://grpc.ulalo.xyz/ext/bc/2uN4Y9JHkLeAJK85Y48LExpNnEiepf7VoZAtmjnwDSZzpZcNig/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ULA",
    "symbol": "ULA",
    "decimals": 18
  },
  "infoURL": "https://ulalo.xyz",
  "shortName": "ulalo-mainnet",
  "chainId": 237007,
  "networkId": 237007,
  "explorers": [
    {
      "name": "ULALO Explorer",
      "url": "https://tracehawk.ulalo.xyz",
      "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/UOLO/Light.png",
      "standard": "EIP3091"
    }
  ]
};

export const sin250225: Chain = {
  "name": "Sintrop Impact Blockchain",
  "chain": "SINTROP",
  "rpc": [
    "https://rpc.sintrop.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Sintrop",
    "symbol": "SIN",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://sintrop.com",
  "shortName": "sin",
  "chainId": 250225,
  "networkId": 250225,
  "icon": "https://www.sintrop.com/assets/images/icon-chain.png",
  "explorers": [
    {
      "name": "Sintrop Explorer",
      "url": "https://explorer.sintrop.com",
      "icon": "https://www.sintrop.com/assets/images/icon-chain.png"
    }
  ]
};

export const kub259251: Chain = {
  "name": "KUB Layer 2 Testnet",
  "chain": "KUB",
  "rpc": [
    "https://kublayer2.testnet.kubchain.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "tKUB",
    "symbol": "tKUB",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "",
  "shortName": "kub",
  "chainId": 259251,
  "networkId": 259251,
  "icon": "kub",
  "explorers": [
    {
      "name": "KUB Layer2 Testnet Explorer",
      "url": "https://kublayer2.testnet.kubscan.com",
      "icon": "kub",
      "standard": "EIP3091"
    }
  ]
};

export const datachain271828: Chain = {
  "name": "Datachain Rope",
  "chain": "DATACHAIN",
  "rpc": [
    "https://erpc.datachain.network",
    "https://ws.datachain.network",
    "https://erpc.rope.network"
  ],
  "faucets": [
    "https://faucet.datachain.network"
  ],
  "nativeCurrency": {
    "name": "DC FAT",
    "symbol": "FAT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://datachain.network",
  "shortName": "datachain",
  "chainId": 271828,
  "networkId": 271828,
  "icon": "datachain",
  "explorers": [
    {
      "name": "DC Scan",
      "url": "https://dcscan.io",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const mbtx271831: Chain = {
  "name": "MBTX Mainnet",
  "chain": "MBTX",
  "icon": "https://mbtux.uxi.rocks/static/photo_mainnet.jpg",
  "rpc": [
    "https://candied-undecided-straggler.ngrok-free.dev/l1"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "MBTX",
    "symbol": "MBTX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://mbtux.uxi.rocks/mbtx",
  "shortName": "mbtx",
  "chainId": 271831,
  "networkId": 271831,
  "explorers": [
    {
      "name": "MBTX Explorer",
      "url": "https://mbtux.uxi.rocks/mbtx",
      "icon": "https://mbtux.uxi.rocks/static/photo_mainnet.jpg",
      "standard": "EIP3091"
    }
  ]
};

export const mbtxl2271832: Chain = {
  "name": "MBTX Nexus",
  "chain": "MBTX",
  "icon": "https://mbtux.uxi.rocks/static/photo_mbtxnexus.png",
  "rpc": [
    "https://candied-undecided-straggler.ngrok-free.dev/l2"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://mbtux.uxi.rocks/mbtx",
  "shortName": "mbtxl2",
  "chainId": 271832,
  "networkId": 271832,
  "parent": {
    "type": "L2",
    "chain": "eip155-271831",
    "bridges": [
      {
        "url": "https://mbtux.uxi.rocks/mbtx"
      }
    ]
  },
  "explorers": [
    {
      "name": "MBTX Nexus Explorer",
      "url": "https://mbtux.uxi.rocks/mbtx/",
      "icon": "https://mbtux.uxi.rocks/static/photo_mbtxnexus.png",
      "standard": "EIP3091"
    }
  ]
};

export const creatorChainTestnet278701: Chain = {
  "name": "Creator Chain Testnet",
  "chain": "Creator Chain",
  "rpc": [
    "https://rpc.testnet.oncreator.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.oncreator.com",
  "shortName": "creator-chain-testnet",
  "chainId": 278701,
  "networkId": 278701,
  "explorers": [
    {
      "name": "Creator Chain Testnet Explorer",
      "url": "https://explorer.testnet.oncreator.com",
      "standard": "EIP3091"
    }
  ]
};

export const valuechain286623: Chain = {
  "name": "ValueChain",
  "chain": "SOSO",
  "rpc": [
    "https://mainnet.valuechain.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "SoSoValue",
    "symbol": "SOSO",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://sodex.com/",
  "shortName": "valuechain",
  "chainId": 286623,
  "networkId": 286623,
  "explorers": [
    {
      "name": "ValueChain Explorer",
      "url": "https://main-scan.valuechain.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const pmt290290: Chain = {
  "name": "PMT Mainnet",
  "chain": "PMT",
  "rpc": [
    "https://node1.pmtchain.com",
    "https://node2.pmtchain.com",
    "https://node3.pmtchain.com",
    "https://node4.pmtchain.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "PMT",
    "symbol": "PMT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://publicmasterpiece.com",
  "shortName": "pmt",
  "chainId": 290290,
  "networkId": 290290,
  "explorers": [
    {
      "name": "PMTScan",
      "url": "https://pmtscan.com",
      "standard": "EIP3091"
    }
  ]
};

export const t1299792: Chain = {
  "name": "t1 Mainnet",
  "chain": "t1",
  "rpc": [
    "https://rpc.mainnet.t1protocol.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://mainnet.t1protocol.com/",
  "shortName": "t1",
  "chainId": 299792,
  "networkId": 299792,
  "icon": "t1",
  "explorers": [
    {
      "name": "t1 Explorer",
      "url": "https://explorer.mainnet.t1protocol.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const t1t299892: Chain = {
  "name": "t1 Testnet",
  "chain": "t1",
  "rpc": [
    "https://rpc.testnet.t1protocol.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://testnet.t1protocol.com/",
  "shortName": "t1t",
  "chainId": 299892,
  "networkId": 299892,
  "icon": "t1",
  "explorers": [
    {
      "name": "t1 Explorer",
      "url": "https://explorer.testnet.t1protocol.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const axion303030: Chain = {
  "name": "AXION Mainnet",
  "chain": "AXION",
  "rpc": [
    "https://rpc.axiondefi.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "AXION",
    "symbol": "AXION",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.axiondefi.com",
  "shortName": "axion",
  "chainId": 303030,
  "networkId": 303030,
  "icon": "axion",
  "explorers": [
    {
      "name": "AXSCAN",
      "url": "https://axscan.axiondefi.com",
      "standard": "EIP3091"
    }
  ]
};

export const vcr314169: Chain = {
  "name": "VCR Chain",
  "chain": "VCR",
  "rpc": [
    "https://rpc.vcrchain.com"
  ],
  "faucets": [
    "https://vcrchain.com/faucet"
  ],
  "nativeCurrency": {
    "name": "CCR",
    "symbol": "CCR",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.vcrchain.com",
  "shortName": "vcr",
  "chainId": 314169,
  "networkId": 314169,
  "icon": "vcr",
  "explorers": [
    {
      "name": "VCR Chain Explorer",
      "url": "https://scan.vcrchain.com",
      "standard": "EIP3091"
    }
  ]
};

export const dCommMainnet326663: Chain = {
  "name": "DComm Mainnet",
  "chain": "DComm",
  "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/dcomm/Light.png",
  "rpc": [
    "https://rpc-mainnet-dcomm-rl.cogitus.io/ext/bc/2QJ6d1ue6UyXNXrMdGnELFc2AjMdMqs8YbX3sT3k4Nin2RcWSm/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "DCM",
    "symbol": "DCM",
    "decimals": 18
  },
  "infoURL": "https://www.dcomm.community/",
  "shortName": "DComm-mainnet",
  "chainId": 326663,
  "networkId": 326663,
  "explorers": [
    {
      "name": "DComm Explorer",
      "url": "https://explorer-dcomm.cogitus.io",
      "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/dcomm/Light.png",
      "standard": "EIP3091"
    }
  ]
};

export const lax333222: Chain = {
  "name": "Laxaum Testnet",
  "chain": "LXM",
  "rpc": [
    "http://54.252.195.55:9945"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Laxaum",
    "symbol": "LXM",
    "decimals": 18
  },
  "features": [],
  "infoURL": "http://www.laxaum.com",
  "shortName": "lax",
  "chainId": 333222,
  "networkId": 333222,
  "icon": "polkadot",
  "explorers": [
    {
      "name": "Laxaum Explorer",
      "url": "http://54.252.195.55:3002",
      "icon": "polkadot",
      "standard": "EIP3091"
    }
  ]
};

export const denMainnet369369: Chain = {
  "name": "Denergy Network",
  "chain": "DEN",
  "rpc": [
    "https://rpc.d.energy/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "WATT",
    "symbol": "WATT",
    "decimals": 18
  },
  "infoURL": "https://d.energy/",
  "shortName": "den-mainnet",
  "chainId": 369369,
  "networkId": 369369,
  "icon": "denergy",
  "explorers": [
    {
      "name": "Denergy Explorer",
      "url": "https://explorer.denergychain.com",
      "icon": "denergy",
      "standard": "EIP3091"
    }
  ]
};

export const teqoin420377: Chain = {
  "name": "TeQoin Sepolia Testnet",
  "chain": "ETH",
  "rpc": [
    "https://rpc.teqoin.io"
  ],
  "faucets": [
    "https://teqoin.io/faucet",
    "https://t.me/TeQoinFaucetBot",
    "https://t.me/TeQoinTestnetFaucetBot"
  ],
  "nativeCurrency": {
    "name": "Sepolia Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://teqoin.io",
  "shortName": "teqoin",
  "chainId": 420377,
  "networkId": 420377,
  "icon": "teqoin",
  "explorers": [
    {
      "name": "TeQoin Blockscan Testnet",
      "url": "https://testnet-blockscan.teqoin.io/",
      "standard": "EIP3091"
    }
  ]
};

export const infinite421018: Chain = {
  "name": "Infinite Drive",
  "chain": "INFINITE",
  "rpc": [
    "https://evm.infinitedrive.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Improbability",
    "symbol": "42",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://infinitedrive.xyz",
  "shortName": "infinite",
  "chainId": 421018,
  "networkId": 421018,
  "icon": "infinite",
  "explorers": [
    {
      "name": "Infinite Drive Explorer",
      "url": "https://scan.infinitedrive.xyz",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const mtx478549: Chain = {
  "name": "MintraxChain",
  "chain": "MTX",
  "rpc": [
    "https://rpc.mintrax.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Mintrax",
    "symbol": "MTX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://mintrax.network",
  "shortName": "mtx",
  "chainId": 478549,
  "networkId": 478549,
  "icon": "mintrax",
  "explorers": [
    {
      "name": "Mintrax Explorer",
      "url": "https://explorer.mintrax.network",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const btcwchain482120: Chain = {
  "name": "Bitcoin Swap",
  "chain": "BTCw",
  "rpc": [
    "https://rpc.btcw.tech",
    "wss://rpc.btcw.tech/ws"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bitcoin Swap",
    "symbol": "BTCw",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://btcw.tech",
  "shortName": "btcwchain",
  "chainId": 482120,
  "networkId": 482120,
  "explorers": [
    {
      "name": "Bitcoin Swap Explorer",
      "url": "https://explorer.btcw.tech",
      "standard": "EIP3091"
    }
  ]
};

export const commons510003: Chain = {
  "name": "Syndicate Commons",
  "chain": "Commons",
  "shortName": "commons",
  "infoURL": "https://syndicate.io",
  "icon": "syndicate",
  "chainId": 510003,
  "networkId": 510003,
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "nativeCurrency": {
    "name": "Syndicate",
    "symbol": "SYND",
    "decimals": 18
  },
  "rpc": [
    "https://commons.rpc.syndicate.io"
  ],
  "faucets": [],
  "explorers": [
    {
      "name": "Commons Explorer",
      "url": "https://explorer.commons.syndicate.io",
      "logo": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const alpha511111: Chain = {
  "name": "Alpha Chain Testnet",
  "chain": "Alpha Chain",
  "rpc": [
    "https://testnet-rpc.goalpha.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://docs.alphatoken.com/AlphaChain/about-alpha-chain",
  "shortName": "alpha",
  "chainId": 511111,
  "networkId": 511111,
  "icon": "alphachain",
  "explorers": [
    {
      "name": "Alpha Chain Scan",
      "url": "https://testnet-scan.goalpha.org",
      "icon": "alphachain",
      "standard": "EIP3091"
    }
  ]
};

export const tone612044: Chain = {
  "name": "ONE Chain Testnet",
  "chain": "ONE",
  "rpc": [
    "https://testnet.onechain.nexus:22001",
    "wss://testnet.onechain.nexus:32001"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "TestnetONE",
    "symbol": "tONE",
    "decimals": 18
  },
  "infoURL": "https://onechain.nexus",
  "shortName": "tone",
  "chainId": 612044,
  "networkId": 612044,
  "icon": "one",
  "slip44": 1,
  "explorers": [
    {
      "name": "ONE Testnet Explorer",
      "url": "https://explorer.onechain.nexus",
      "icon": "one",
      "standard": "EIP3091"
    }
  ]
};

export const one612055: Chain = {
  "name": "ONE Chain Mainnet",
  "chain": "ONE",
  "rpc": [
    "https://mainnet.onechain.nexus:22001",
    "wss://mainnet.onechain.nexus:32001"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://onechain.nexus",
  "shortName": "one",
  "chainId": 612055,
  "networkId": 612055,
  "icon": "one",
  "slip44": 1100,
  "explorers": [
    {
      "name": "ONE Explorer",
      "url": "https://explorer.onechain.nexus",
      "icon": "one",
      "standard": "EIP3091"
    }
  ]
};

export const galactica613419: Chain = {
  "name": "Galactica Mainnet",
  "chain": "GNET",
  "rpc": [
    "https://galactica-mainnet.g.alchemy.com/public"
  ],
  "nativeCurrency": {
    "name": "GNET",
    "symbol": "GNET",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://galactica.com",
  "shortName": "galactica",
  "chainId": 613419,
  "networkId": 613419,
  "icon": "https://galactica-com.s3.eu-central-1.amazonaws.com/icon_galactica.png",
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://explorer.galactica.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "ethereum",
    "bridges": [
      {
        "url": "https://portal.arbitrum.io/bridge?destinationChain=galactica-mainnet&sanitized=true&sourceChain=ethereum"
      }
    ]
  }
};

export const tgald641371: Chain = {
  "name": "Galdrion Testnet",
  "chain": "tGALD",
  "icon": "https://galdrionscan.com/logo.png",
  "rpc": [
    "https://rpc-testnet.galdrionscan.com"
  ],
  "faucets": [
    "https://galdrionscan.com/faucet"
  ],
  "nativeCurrency": {
    "name": "Testnet Galdrion",
    "symbol": "tGALD",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://galdrion.com",
  "shortName": "tgald",
  "chainId": 641371,
  "networkId": 641371,
  "explorers": [
    {
      "name": "GaldrionScan Testnet",
      "url": "https://galdrionscan.com",
      "icon": "https://galdrionscan.com/logo.png",
      "standard": "EIP3091"
    }
  ]
};

export const mdx648529: Chain = {
  "name": "Modulax Mainnet",
  "chain": "MDX",
  "rpc": [
    "https://rpc.modulax.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Modulax",
    "symbol": "MDX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://modulax.org",
  "shortName": "mdx",
  "chainId": 648529,
  "networkId": 648529,
  "icon": "modulax",
  "explorers": [
    {
      "name": "modulax",
      "url": "https://explorer.modulax.org",
      "icon": "modulax"
    }
  ]
};

export const eduChainTestnet656476: Chain = {
  "name": "EDU Chain Testnet",
  "chain": "EDU Chain Testnet",
  "icon": "edu",
  "rpc": [
    "https://rpc.testnet.educhain.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "EDU",
    "symbol": "EDU",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.educhain.xyz/",
  "shortName": "edu-chain-testnet",
  "chainId": 656476,
  "networkId": 656476,
  "explorers": [
    {
      "name": "EDU Chain Testnet Explorer",
      "url": "https://explorer.testnet.educhain.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const aztec677868: Chain = {
  "name": "Aztec Mainnet",
  "chain": "Aztec",
  "rpc": [
    "https://aztec-mainnet.drpc.org",
    "wss://aztec-mainnet.drpc.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://aztec.network/",
  "shortName": "aztec",
  "chainId": 677868,
  "networkId": 677868,
  "explorers": [
    {
      "name": "AztecScan",
      "url": "https://aztecscan.xyz/",
      "standard": "EIP3091"
    }
  ],
  "status": "active"
};

export const pharosTestnet688688: Chain = {
  "name": "Pharos Testnet",
  "title": "Pharos Testnet",
  "chain": "Pharos",
  "icon": "pharostestnet",
  "rpc": [
    "https://testnet.dplabs-internal.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "PHRS",
    "symbol": "PHRS",
    "decimals": 18
  },
  "infoURL": "https://testnet.pharosnetwork.xyz/",
  "shortName": "pharos-testnet",
  "chainId": 688688,
  "networkId": 688688,
  "explorers": [
    {
      "name": "Pharos Testnet Explorer",
      "url": "https://testnet.pharosscan.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const pharosAtlantic688689: Chain = {
  "name": "Pharos Atlantic Testnet",
  "title": "Pharos Atlantic Testnet",
  "chain": "Pharos",
  "icon": "pharostestnet",
  "rpc": [
    "https://atlantic.dplabs-internal.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "PHRS",
    "symbol": "PHRS",
    "decimals": 18
  },
  "infoURL": "https://atlantic.pharosnetwork.xyz/",
  "shortName": "pharos-atlantic",
  "chainId": 688689,
  "networkId": 688689,
  "explorers": [
    {
      "name": "Pharos Atlantic Testnet Explorer",
      "url": "https://atlantic.pharosscan.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const marschain704851: Chain = {
  "name": "Mars Chain",
  "title": "Mars Chain",
  "shortName": "marschain",
  "chain": "MARS",
  "rpc": [
    "https://rpc.mars-scan.io",
    "wss://rpc.mars-scan.io/ws"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Mars Coin",
    "symbol": "MarsC",
    "decimals": 18
  },
  "infoURL": "https://explorer.mars-chain.io/",
  "chainId": 704851,
  "networkId": 704851,
  "explorers": [
    {
      "name": "Mars Chain Explorer",
      "url": "https://explorer.mars-chain.io/",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111",
    "bridges": [
      {
        "url": "https://portal.arbitrum.io/bridge"
      }
    ]
  },
  "icon": "https://ipfs.io/ipfs/bafkreiahnorlibpuklbzedc3x3lw6mqry2kjmaqh3rtkdlw2ydpom2gs7y",
  "status": "active"
};

export const marschainTestnet704852: Chain = {
  "name": "Mars Chain Testnet",
  "title": "Mars Chain Testnet",
  "shortName": "marschain-testnet",
  "chain": "MARS",
  "rpc": [
    "https://testnet-rpc.mars-chain.io",
    "wss://testnet-rpc.mars-chain.io/ws"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Mars Coin",
    "symbol": "MarsC",
    "decimals": 18
  },
  "infoURL": "https://testnet-explorer.mars-chain.io/",
  "chainId": 704852,
  "networkId": 704852,
  "explorers": [
    {
      "name": "Mars Chain Testnet Explorer",
      "url": "https://testnet-explorer.mars-chain.io/",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111",
    "bridges": [
      {
        "url": "https://portal.arbitrum.io/bridge?destinationChain=704852&sanitized=true&sourceChain=sepolia"
      }
    ]
  },
  "icon": "https://ipfs.io/ipfs/bafkreiahnorlibpuklbzedc3x3lw6mqry2kjmaqh3rtkdlw2ydpom2gs7y",
  "status": "active"
};

export const drama710520: Chain = {
  "name": "Drama",
  "chain": "DRAMA",
  "rpc": [
    "https://rpc.drama.center"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "DRAMA",
    "symbol": "DRAMA",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://drama.center",
  "shortName": "drama",
  "chainId": 710520,
  "networkId": 710520,
  "icon": "drama",
  "explorers": [
    {
      "name": "Drama Explorer",
      "url": "https://scan.drama.center",
      "icon": "drama",
      "standard": "EIP3091"
    }
  ]
};

export const prana712217: Chain = {
  "name": "PRANA Mainnet",
  "chain": "PRANA",
  "rpc": [
    "https://rpc.prana.melek.salon"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "PRANA",
    "symbol": "PRANA",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://wiki.soapbox.community/wiki/PRANA",
  "shortName": "prana",
  "chainId": 712217,
  "networkId": 712217,
  "explorers": [
    {
      "name": "PRANAScan",
      "url": "https://pranascan.soapbox.community",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const zbx728990: Chain = {
  "name": "Zebvix Mainnet",
  "chain": "ZBX",
  "rpc": [
    "https://rpc.zebvixchain.com/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Zebvix",
    "symbol": "ZBX",
    "decimals": 18
  },
  "infoURL": "https://zebvixchain.com/",
  "shortName": "zbx",
  "chainId": 728990,
  "networkId": 728990,
  "explorers": [
    {
      "name": "Zebvix Scan",
      "url": "https://scan.zebvixchain.com",
      "standard": "EIP3091"
    }
  ]
};

export const cx737373: Chain = {
  "name": "CX Chain Mainnet",
  "chain": "CX",
  "icon": "cxchain",
  "rpc": [
    "https://subnets.avax.network/cx/mainnet/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "CX",
    "symbol": "CX",
    "decimals": 18
  },
  "infoURL": "https://www.cxchain.xyz/",
  "shortName": "cx",
  "chainId": 737373,
  "networkId": 737373,
  "explorers": [
    {
      "name": "CX Chain Mainnet Explorer",
      "url": "https://subnets.avax.network/cx"
    }
  ]
};

export const toog777001: Chain = {
  "name": "TOOG Chain",
  "chain": "TOOG",
  "rpc": [
    "https://toog-proxy.toog-chain.workers.dev/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "TEST",
    "symbol": "TEST",
    "decimals": 18
  },
  "infoURL": "https://toogchain.com",
  "shortName": "toog",
  "chainId": 777001,
  "networkId": 777001,
  "explorers": [
    {
      "name": "TOOG Explorer",
      "url": "https://toog-proxy.toog-chain.workers.dev/",
      "standard": "EIP3091"
    }
  ]
};

export const makaChainMainnet777178: Chain = {
  "name": "MakaChain Mainnet",
  "chain": "MakaChain",
  "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/MakaChain/Light.png",
  "rpc": [
    "https://api.makachain.io/ext/bc/2TfGh1pyDoumsDgTxDmWoseRD7GGRwrpX19HLsQdeCRqwK9BqZ/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "MFUEL",
    "symbol": "MFUEL",
    "decimals": 18
  },
  "infoURL": "https://makachain.io/",
  "shortName": "MakaChain mainnet",
  "chainId": 777178,
  "networkId": 777178,
  "explorers": [
    {
      "name": "MakaChain Explorer",
      "url": "https://makascan.io/",
      "icon": "https://f005.backblazeb2.com/file/tracehawk-prod/logo/MakaChain/Light.png",
      "standard": "EIP3091"
    }
  ]
};

export const flxg778400: Chain = {
  "name": "Felix Smart Chain",
  "chain": "FLXG",
  "icon": "https://plum-geographical-dinosaur-799.mypinata.cloud/ipfs/bafybeiaq6gzygs2hx2xh2rl4nbeaegcnww65xcmjcevdxdols56jsyskeu",
  "rpc": [
    "https://rpc.felixexplorer.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "FLXG",
    "symbol": "FLXG",
    "decimals": 18
  },
  "infoURL": "https://felixexplorer.com",
  "shortName": "flxg",
  "chainId": 778400,
  "networkId": 778400,
  "explorers": [
    {
      "name": "Felix Smart Chain Explorer",
      "url": "https://felixexplorer.com",
      "standard": "EIP3091"
    }
  ]
};

export const ust778889: Chain = {
  "name": "Unitsky String Technologies",
  "chain": "Unitsky",
  "rpc": [
    "https://147-45-143-23.sslip.io/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Unitsky Token",
    "symbol": "UST",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://147-45-143-23.sslip.io",
  "shortName": "ust",
  "chainId": 778889,
  "networkId": 778889,
  "icon": "https://147-45-143-23.sslip.io/icon.svg",
  "explorers": [
    {
      "name": "Unitsky Explorer",
      "url": "https://147-45-143-23.sslip.io",
      "standard": "none"
    }
  ]
};

export const nvnmChainDevnet787222: Chain = {
  "name": "NVNM Chain Devnet",
  "chain": "NVNM",
  "icon": "nvnm",
  "rpc": [
    "https://rpc.nvnm.canary.mantrachain.dev",
    "wss://rpc.nvnm.canary.mantrachain.dev"
  ],
  "faucets": [
    "https://faucet.nvnm.canary.mantrachain.dev"
  ],
  "nativeCurrency": {
    "name": "NVNM USD",
    "symbol": "nUSD",
    "decimals": 6
  },
  "infoURL": "https://www.nvnmchain.io",
  "shortName": "nvnm-chain-devnet",
  "chainId": 787222,
  "networkId": 787222,
  "explorers": [
    {
      "name": "NVNM Explorer",
      "url": "https://explorer.nvnm.canary.mantrachain.dev",
      "standard": "EIP3091"
    },
    {
      "name": "NVNM Tempo Explorer",
      "url": "https://scan.nvnm.canary.mantrachain.dev",
      "standard": "EIP3091"
    }
  ],
  "status": "active"
};

export const nvnmChainTestnet787223: Chain = {
  "name": "NVNM Chain Testnet",
  "chain": "NVNM",
  "icon": "nvnm",
  "rpc": [
    "https://rpc.nvnm.testnet.nvnmchain.io",
    "wss://rpc.nvnm.testnet.nvnmchain.io"
  ],
  "faucets": [
    "https://faucet.nvnm.testnet.nvnmchain.io"
  ],
  "nativeCurrency": {
    "name": "NVNM USD",
    "symbol": "nUSD",
    "decimals": 6
  },
  "infoURL": "https://www.nvnmchain.io",
  "shortName": "nvnm-chain-testnet",
  "chainId": 787223,
  "networkId": 787223,
  "explorers": [
    {
      "name": "NVNM Explorer",
      "url": "https://explorer.nvnm.testnet.nvnmchain.io",
      "standard": "EIP3091"
    },
    {
      "name": "NVNM Tempo Explorer",
      "url": "https://scan.nvnm.testnet.nvnmchain.io",
      "standard": "EIP3091"
    }
  ],
  "status": "active"
};

export const spaceosTestnet800000: Chain = {
  "name": "SPACE OS Testnet",
  "chain": "SPACE",
  "icon": "spaceos",
  "rpc": [
    "https://testnet.evm.spaceos.com/"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [
    "https://faucet.spaceos.com/"
  ],
  "nativeCurrency": {
    "name": "SPACE",
    "symbol": "SPACE",
    "decimals": 18
  },
  "infoURL": "https://spaceos.com/",
  "shortName": "spaceos-testnet",
  "chainId": 800000,
  "networkId": 800000,
  "testnet": true,
  "explorers": [
    {
      "name": "SPACE OS Explorer",
      "url": "https://testnet.evm-explorer.spaceos.com/",
      "standard": "EIP3091"
    }
  ]
};

export const zug824642: Chain = {
  "name": "ZugChain Testnet",
  "chain": "ZUG",
  "rpc": [
    "https://rpc.zugchain.org"
  ],
  "faucets": [
    "https://testnet.zugchain.org/faucet"
  ],
  "nativeCurrency": {
    "name": "ZUG",
    "symbol": "ZUG",
    "decimals": 18
  },
  "infoURL": "https://zugchain.org",
  "shortName": "zug",
  "chainId": 824642,
  "networkId": 824642,
  "explorers": [
    {
      "name": "ZugChain Explorer",
      "url": "https://explorer.zugchain.org",
      "standard": "EIP3091"
    }
  ]
};

export const bini837291: Chain = {
  "name": "BiniChain",
  "chain": "BINI",
  "rpc": [
    "https://rpc.binibit.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BINI",
    "symbol": "BINI",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://binibit.com",
  "shortName": "bini",
  "chainId": 837291,
  "networkId": 837291,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://scan.binibit.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const hypercluster838838: Chain = {
  "name": "HyperCluster",
  "chain": "HyperCluster",
  "icon": "https://hypercluster.org/img/favicon.png",
  "rpc": [
    "https://rpc.hypercluster.org"
  ],
  "faucets": [
    "https://faucet.hypercluster.org"
  ],
  "nativeCurrency": {
    "name": "HYPEC",
    "symbol": "HYPEC",
    "decimals": 18
  },
  "infoURL": "https://hypercluster.org/",
  "shortName": "hypercluster",
  "chainId": 838838,
  "networkId": 838838,
  "explorers": [
    {
      "name": "HyperCluster Explorer",
      "url": "https://explorer.hypercluster.org/",
      "icon": "https://hypercluster.org/img/favicon.png",
      "standard": "EIP3091"
    }
  ]
};

export const galacticaTestnet843843: Chain = {
  "name": "Galactica Testnet",
  "chain": "GNET",
  "rpc": [
    "https://galactica-cassiopeia.g.alchemy.com/public"
  ],
  "faucets": [
    "https://faucet-cassiopeia.galactica.com"
  ],
  "nativeCurrency": {
    "name": "Gnet",
    "symbol": "GNET",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://galactica.com",
  "shortName": "galactica-testnet",
  "chainId": 843843,
  "networkId": 843843,
  "icon": "https://galactica-com.s3.eu-central-1.amazonaws.com/icon_galactica.png",
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://galactica-cassiopeia.explorer.alchemy.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const haqqTestethiq853211: Chain = {
  "name": "HAQQ Testethiq (L2 Sepolia Testnet)",
  "chain": "ETH",
  "rpc": [
    "https://rpc.testnet.ethiq.network",
    "wss://rpc.testnet.ethiq.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ETH",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    },
    {
      "name": "EIP2930"
    },
    {
      "name": "EIP4844"
    }
  ],
  "infoURL": "https://ethiq.network",
  "shortName": "haqq-testethiq",
  "chainId": 853211,
  "networkId": 853211,
  "testnet": true,
  "icon": "haqq",
  "explorers": [
    {
      "name": "HAQQ Testethiq Blockscout",
      "url": "https://explorer.testnet.ethiq.network",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111",
    "bridges": [
      {
        "url": "https://shell.haqq.network/bridge"
      }
    ]
  }
};

export const wrg882026: Chain = {
  "name": "Warga Network L1",
  "chain": "WRG",
  "rpc": [
    "https://umkmrumahan.com/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Warga Coin",
    "symbol": "WRG",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://umkmrumahan.com",
  "shortName": "wrg",
  "chainId": 882026,
  "networkId": 882026,
  "icon": "warga",
  "explorers": [
    {
      "name": "Warga Explorer",
      "url": "https://umkmrumahan.com/explorer",
      "icon": "warga",
      "standard": "EIP3091"
    }
  ]
};

export const zenithEvmTestnet936485: Chain = {
  "name": "Zenith EVM Testnet",
  "chain": "ZENITH",
  "rpc": [
    "https://rpc.testnet.zenith.network/"
  ],
  "faucets": [
    "https://explorer.testnet.zenith.network/faucet"
  ],
  "nativeCurrency": {
    "name": "Zenith token",
    "symbol": "ZTH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://docs.zenith.network/zenith-testnet",
  "shortName": "zenith-evm-testnet",
  "chainId": 936485,
  "networkId": 936485,
  "explorers": [
    {
      "name": "Zenith EVM Explorer",
      "url": "https://explorer.testnet.zenith.network",
      "standard": "EIP3091"
    }
  ]
};

export const primox970803: Chain = {
  "name": "Primox Chain",
  "chain": "PXC",
  "rpc": [
    "https://rpc.primox.online"
  ],
  "faucets": [],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "nativeCurrency": {
    "name": "Primox Token",
    "symbol": "PXT",
    "decimals": 18
  },
  "infoURL": "https://chain.primox.online",
  "shortName": "primox",
  "chainId": 970803,
  "networkId": 970803,
  "explorers": [
    {
      "name": "Primox Scan",
      "url": "https://scan.primox.online/",
      "standard": "EIP3091"
    }
  ]
};

export const qantera974621: Chain = {
  "name": "QanTera Testnet",
  "chain": "QTER",
  "rpc": [
    "https://rpc1.qantera.network",
    "https://rpc2.qantera.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "QanTera",
    "symbol": "QTER",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://qantera.network",
  "shortName": "qantera",
  "chainId": 974621,
  "networkId": 974621,
  "icon": "qantera",
  "explorers": [
    {
      "name": "QanTera Explorer",
      "url": "https://explorer.qantera.network",
      "icon": "qantera",
      "standard": "EIP3091"
    }
  ]
};

export const brevisProvernetTestnet999983: Chain = {
  "name": "Breivs ProverNet Testnet",
  "chain": "BREV",
  "rpc": [
    "https://evmrpc-testnet.brevis.network/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Brevis Token",
    "symbol": "BREV",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://brevis.network/",
  "shortName": "brevis-provernet-testnet",
  "chainId": 999983,
  "networkId": 999983,
  "explorers": [
    {
      "name": "Breivs ProverNet Testnet Explorer",
      "url": "https://blockscout-testnet.brevis.network/",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111"
  }
};

export const xo1000101: Chain = {
  "name": "XO Chain Testnet",
  "chain": "XO",
  "rpc": [
    "https://testnet-rpc-1.xo.market"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "XO Token",
    "symbol": "XO",
    "decimals": 18
  },
  "infoURL": "https://xo.market",
  "shortName": "xo",
  "chainId": 1000101,
  "networkId": 1000101,
  "icon": "xo",
  "explorers": [
    {
      "name": "xo explorer",
      "url": "https://explorer-testnet.xo.market",
      "icon": "xo",
      "standard": "EIP3091"
    }
  ]
};

export const wirexTestnet1001996: Chain = {
  "name": "Wirex Pay Testnet",
  "chain": "WirexPay",
  "icon": "wpay",
  "rpc": [
    "https://rpc-dev.wirexpaychain.com"
  ],
  "faucets": [
    "https://faucet-dev.wirexpaychain.com"
  ],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://docs.wirexpaychain.com/tech/wirex-pay-chain",
  "shortName": "wirex-testnet",
  "chainId": 1001996,
  "networkId": 1001996,
  "explorers": [
    {
      "name": "Wirex Pay Testnet Explorer",
      "url": "https://explorer-dev.wirexpaychain.com",
      "standard": "none"
    }
  ]
};

export const roonchain1314520: Chain = {
  "name": "RoonChain Mainnet",
  "chain": "ROON",
  "icon": "roonchain",
  "rpc": [
    "https://mainnet-rpc.roonchain.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ROON",
    "symbol": "ROON",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://roonchain.com",
  "shortName": "roonchain",
  "chainId": 1314520,
  "networkId": 1314520,
  "explorers": [
    {
      "name": "RoonChain Mainnet explorer",
      "url": "https://mainnet.roonchain.com",
      "icon": "roonchain",
      "standard": "EIP3091"
    }
  ]
};

export const xrplevm1440000: Chain = {
  "name": "XRPL EVM",
  "chain": "XRPL",
  "icon": "xrpl evm",
  "rpc": [
    "https://rpc.xrplevm.org/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "XRP",
    "symbol": "XRP",
    "decimals": 18
  },
  "infoURL": "https://www.xrplevm.org/",
  "shortName": "xrplevm",
  "chainId": 1440000,
  "networkId": 1440000,
  "slip44": 144,
  "explorers": [
    {
      "name": "XRPL EVM Explorer",
      "url": "https://explorer.xrplevm.org"
    }
  ]
};

export const vxsTestnet1618032: Chain = {
  "name": "Vexidus Testnet",
  "chain": "VXS",
  "rpc": [
    "https://testnet.vexidus.io"
  ],
  "faucets": [
    "https://vexswap.xyz"
  ],
  "nativeCurrency": {
    "name": "Vexidus",
    "symbol": "VXS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://vexidus.io",
  "shortName": "vxs-testnet",
  "chainId": 1618032,
  "networkId": 1618032,
  "explorers": [
    {
      "name": "VexScan",
      "url": "https://vexscan.io",
      "standard": "EIP3091"
    }
  ]
};

export const duck2026001: Chain = {
  "name": "Duckpot Testnet",
  "chain": "DUCK",
  "rpc": [
    "https://rpc.duckpot.xyz"
  ],
  "faucets": [
    "https://duckpot-nexus.lovable.app/faucet"
  ],
  "nativeCurrency": {
    "name": "Duckpot",
    "symbol": "DUCK",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://duckpot-nexus.lovable.app",
  "shortName": "duck",
  "chainId": 2026001,
  "networkId": 2026001,
  "icon": "duckpot",
  "explorers": [
    {
      "name": "Duckpot Explorer",
      "url": "https://duckpot-nexus.lovable.app/explorer",
      "standard": "none"
    }
  ]
};

export const cashcat2274228: Chain = {
  "name": "CashCat Chain",
  "chain": "CASHCAT",
  "rpc": [
    "https://rpc.cashcat.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Cash Cat",
    "symbol": "CASHCAT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://cashcat.network",
  "shortName": "cashcat",
  "chainId": 2274228,
  "networkId": 2274228,
  "explorers": [
    {
      "name": "CashCat Explorer",
      "url": "https://explorer.cashcat.network",
      "standard": "EIP3091"
    }
  ]
};

export const prvTestnet2718281: Chain = {
  "name": "PrivateRounds Testnet",
  "chain": "PRV",
  "rpc": [
    "https://rpc.privaterounds.com"
  ],
  "faucets": [
    "https://faucet.privaterounds.com"
  ],
  "nativeCurrency": {
    "name": "PrivateRounds",
    "symbol": "PRV",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://privaterounds.com",
  "shortName": "prv-testnet",
  "chainId": 2718281,
  "networkId": 2718281,
  "explorers": [
    {
      "name": "PrivateRounds Explorer",
      "url": "https://explorer.privaterounds.com",
      "standard": "EIP3091"
    }
  ]
};

export const arcTestnet5042002: Chain = {
  "name": "Arc Testnet",
  "chain": "arc-testnet",
  "rpc": [
    "https://rpc.testnet.arc.network"
  ],
  "faucets": [
    "https://faucet.circle.com/"
  ],
  "nativeCurrency": {
    "name": "USDC",
    "symbol": "USDC",
    "decimals": 18
  },
  "infoURL": "https://www.arc.network/",
  "shortName": "arc-testnet",
  "chainId": 5042002,
  "networkId": 5042002,
  "icon": "arc",
  "explorers": [
    {
      "name": "Arc Testnet Explorer",
      "url": "https://testnet.arcscan.app/",
      "icon": "arc",
      "standard": "none"
    }
  ]
};

export const ethereal5064014: Chain = {
  "name": "Ethereal Mainnet",
  "chain": "Ethereal",
  "rpc": [
    "https://rpc.ethereal.trade"
  ],
  "icon": "ethereal",
  "faucets": [],
  "nativeCurrency": {
    "name": "USDe",
    "symbol": "USDe",
    "decimals": 18
  },
  "infoURL": "https://www.ethereal.trade",
  "shortName": "ethereal",
  "chainId": 5064014,
  "networkId": 5064014,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer.ethereal.trade",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const loot5151706: Chain = {
  "name": "Loot Mainnet",
  "chain": "LOOT",
  "icon": "loot",
  "rpc": [
    "https://rpc.lootchain.com/http/",
    "wss://rpc.lootchain.com/ws"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Adventure Gold",
    "symbol": "AGLD",
    "decimals": 18
  },
  "infoURL": "https://adventuregold.org/",
  "shortName": "loot",
  "chainId": 5151706,
  "networkId": 5151706,
  "explorers": [
    {
      "name": "Lootscan",
      "url": "https://explorer.lootchain.com/"
    }
  ]
};

export const wIND5552020: Chain = {
  "name": "Windpay Mainnet",
  "chain": "WIND",
  "rpc": [
    "https://rpc.windpay.org/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Windpay",
    "symbol": "WIND",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://windpay.org",
  "shortName": "WIND",
  "chainId": 5552020,
  "networkId": 5552020,
  "icon": "https://github.com/xwindpay/logo/blob/main/windpay%20logo.jpeg?raw=true",
  "explorers": [
    {
      "name": "windpay explorer",
      "url": "https://explorer.windpay.org",
      "icon": "windpay",
      "standard": "EIP3091"
    }
  ]
};

export const dogeosChikyu6281971: Chain = {
  "name": "DogeOS Chikyū Testnet",
  "chain": "DogeOS",
  "rpc": [
    "https://rpc.testnet.dogeos.com"
  ],
  "faucets": [
    "https://faucet.testnet.dogeos.com",
    "https://faucets.chain.link/dogeos-testnet-chikyu"
  ],
  "nativeCurrency": {
    "name": "Dogecoin",
    "symbol": "DOGE",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.dogeos.com",
  "shortName": "dogeos-chikyu",
  "chainId": 6281971,
  "networkId": 6281971,
  "icon": "dogeos",
  "explorers": [
    {
      "name": "DogeOS Chikyū Testnet Explorer",
      "url": "https://blockscout.testnet.dogeos.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    },
    {
      "name": "L2Scan",
      "url": "https://dogeos-testnet.l2scan.co",
      "standard": "EIP3091"
    }
  ]
};

export const jmdt7000700: Chain = {
  "name": "JMDT Mainnet",
  "chain": "JMDT",
  "rpc": [
    "https://rpc.jmdt.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "JMDT",
    "symbol": "JMDT",
    "decimals": 18
  },
  "infoURL": "https://jmdt.io",
  "shortName": "jmdt",
  "chainId": 7000700,
  "networkId": 7000700,
  "icon": "jmdt",
  "explorers": [
    {
      "name": "JMDT Explorer",
      "url": "https://explorer.jmdt.io",
      "icon": "jmdt",
      "standard": "EIP3091"
    }
  ]
};

export const nvm7575757: Chain = {
  "name": "NovaMoney",
  "chain": "NVM",
  "rpc": [
    "http://rpc.novamoney.site"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "NovaMoney",
    "symbol": "NVM",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "http://novamoney.site",
  "shortName": "nvm",
  "chainId": 7575757,
  "networkId": 7575757,
  "explorers": [
    {
      "name": "NovaMoney Explorer",
      "url": "http://explorer.novamoney.site",
      "standard": "EIP3091"
    }
  ]
};

export const dogita7770777: Chain = {
  "name": "Dogita Chain",
  "chain": "DOGA",
  "icon": "https://dogita-website.netlify.app/logo.png",
  "rpc": [
    "http://2.25.155.110:8545"
  ],
  "faucets": [
    "http://2.25.155.110:3080"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "nativeCurrency": {
    "name": "Dogita",
    "symbol": "DOGA",
    "decimals": 18
  },
  "infoURL": "https://dogita-website.netlify.app",
  "shortName": "dogita",
  "chainId": 7770777,
  "networkId": 7770777,
  "explorers": [
    {
      "name": "Dogita Explorer",
      "url": "http://2.25.155.110:8080",
      "standard": "none"
    }
  ]
};

export const gravityTestnet7771625: Chain = {
  "name": "Gravity Longevity Testnet",
  "chain": "Gravity",
  "icon": "gravity",
  "rpc": [
    "https://rpc-testnet.gravity.xyz"
  ],
  "faucets": [
    "https://faucet.gravity.xyz"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    },
    {
      "name": "EIP1108"
    }
  ],
  "nativeCurrency": {
    "name": "Gravity",
    "symbol": "G",
    "decimals": 18
  },
  "infoURL": "https://gravity.xyz",
  "shortName": "gravity-testnet",
  "chainId": 7771625,
  "networkId": 7771625,
  "explorers": [
    {
      "name": "Gravity Testnet Explorer",
      "url": "https://explorer-testnet.gravity.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const vpc8678671: Chain = {
  "name": "VinaChain Mainnet",
  "chain": "VPC",
  "rpc": [
    "https://vncscan.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "VPC",
    "symbol": "VPC",
    "decimals": 18
  },
  "features": [],
  "infoURL": "",
  "shortName": "vpc",
  "chainId": 8678671,
  "networkId": 8678671,
  "icon": "vinachain",
  "explorers": [
    {
      "name": "vncscan",
      "url": "https://beta.vncscan.io",
      "icon": "vinachain",
      "standard": "EIP3091"
    }
  ]
};

export const daventre8770570: Chain = {
  "name": "daventre Chain",
  "chain": "DEV",
  "rpc": [
    "https://rpc.8770570.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "DEV",
    "symbol": "DEV",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "http://8770570.xyz",
  "shortName": "daventre",
  "chainId": 8770570,
  "networkId": 8770570,
  "explorers": [
    {
      "name": "daventre Explorer",
      "url": "https://explorer.8770570.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const ccTestnet11111110: Chain = {
  "name": "ClawCoin Testnet",
  "chain": "CC",
  "rpc": [
    "https://evm-testnet.clawcoin.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ClawCoin",
    "symbol": "CC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://clawcoin.com",
  "shortName": "cc-testnet",
  "chainId": 11111110,
  "networkId": 11111110,
  "icon": "clawcoin"
};

export const cc11111111: Chain = {
  "name": "ClawCoin",
  "chain": "CC",
  "rpc": [
    "https://evm.clawcoin.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ClawCoin",
    "symbol": "CC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://clawcoin.com",
  "shortName": "cc",
  "chainId": 11111111,
  "networkId": 11111111,
  "icon": "clawcoin"
};

export const cwnTestnet11111327: Chain = {
  "name": "Commonworld Testnet",
  "chain": "CWN",
  "rpc": [
    "https://rpc-testnet.commonworld.one"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Test Commonworld",
    "symbol": "tCWN",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://commonworld.one/",
  "shortName": "cwn-testnet",
  "chainId": 11111327,
  "networkId": 11111327,
  "explorers": [
    {
      "name": "Commonworld Testnet Explorer",
      "url": "https://explorer-testnet.commonworld.one"
    }
  ]
};

export const celoSep11142220: Chain = {
  "name": "Celo Sepolia Testnet",
  "chain": "CELO",
  "rpc": [
    "https://forno.celo-sepolia.celo-testnet.org"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [
    "https://faucet.celo.org"
  ],
  "nativeCurrency": {
    "name": "CELO-S",
    "symbol": "CELO",
    "decimals": 18
  },
  "infoURL": "https://sepolia.celoscan.io/",
  "shortName": "celo-sep",
  "chainId": 11142220,
  "networkId": 11142220
};

export const riseTestnet11155931: Chain = {
  "name": "RISE Testnet",
  "chain": "ETH",
  "rpc": [
    "https://testnet.riselabs.xyz",
    "wss://testnet.riselabs.xyz/ws"
  ],
  "faucets": [
    "https://faucet.testnet.riselabs.xyz"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    },
    {
      "name": "EIP7702"
    }
  ],
  "nativeCurrency": {
    "name": "RISE Testnet Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://www.riselabs.xyz/",
  "shortName": "rise-testnet",
  "chainId": 11155931,
  "networkId": 11155931,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer.testnet.riselabs.xyz",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111",
    "bridges": [
      {
        "url": "https://bridge-ui.testnet.riselabs.xyz"
      }
    ]
  }
};

export const r0art11166111: Chain = {
  "name": "R0AR Testnet",
  "chain": "R0AR",
  "rpc": [
    "https://testnet.rpc-r0ar.io"
  ],
  "faucets": [
    "https://testnet.r0arfaucet.io"
  ],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://r0ar.io",
  "shortName": "r0art",
  "chainId": 11166111,
  "networkId": 11166111,
  "icon": {
    "url": "https://amaranth-elaborate-primate-236.mypinata.cloud/ipfs/bafkreibqk63qcgukyunft3h2qxh56cg6mtvzlrnxw4mbpxgahdk2litxqi",
    "format": "svg",
    "width": 512,
    "height": 512
  },
  "explorers": [
    {
      "name": "R0ARscan (testnet)",
      "url": "https://testnet.r0arscan.io",
      "icon": "r0ar",
      "standard": "EIP3091"
    }
  ]
};

export const winmar12142816: Chain = {
  "name": "Winmar Chain",
  "chain": "WMC",
  "rpc": [
    "https://rpc.winmarchain.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Winmar Coin",
    "symbol": "WMC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://winmarchain.io",
  "shortName": "winmar",
  "chainId": 12142816,
  "networkId": 12142816,
  "chainSlug": "winmar",
  "icon": "winmar",
  "explorers": [
    {
      "name": "Winmar Chain Explorer",
      "url": "https://scan.winmarchain.io",
      "standard": "EIP3091"
    }
  ]
};

export const roonchain13145201: Chain = {
  "name": "RoonChain Testnet",
  "chain": "ROON",
  "icon": "roonchain",
  "rpc": [
    "https://testnet-rpc.roonchain.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ROON",
    "symbol": "ROON",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://roonchain.com",
  "shortName": "roonchain",
  "chainId": 13145201,
  "networkId": 13145201,
  "explorers": [
    {
      "name": "RoonChain Testnet explorer",
      "url": "https://testnets.roonchain.com",
      "icon": "roonchain",
      "standard": "EIP3091"
    }
  ]
};

export const etherealTestnet013374202: Chain = {
  "name": "Ethereal Testnet",
  "title": "Ethereal Testnet",
  "chain": "Ethereal",
  "rpc": [
    "https://rpc.etherealtest.net",
    "https://rpc-ethereal-testnet-0.t.conduit.xyz"
  ],
  "icon": "etherealtestnet",
  "faucets": [],
  "nativeCurrency": {
    "name": "USDe",
    "symbol": "USDe",
    "decimals": 18
  },
  "infoURL": "https://www.ethereal.trade/",
  "shortName": "ethereal-testnet-0",
  "chainId": 13374202,
  "networkId": 13374202,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://explorer.etherealtest.net",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const hp13600000: Chain = {
  "name": "Humanity",
  "chain": "Humanity",
  "rpc": [
    "https://humanity-main.g.alchemy.com/public"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "H",
    "symbol": "H",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://humanity.org",
  "shortName": "hp",
  "chainId": 13600000,
  "networkId": 13600000,
  "parent": {
    "type": "L2",
    "chain": "eip155-42161",
    "bridges": [
      {
        "url": "https://bridge.humanity.org"
      }
    ]
  },
  "explorers": [
    {
      "name": "Humanity Mainnet explorer",
      "url": "https://humanity-main.explorer.alchemy.com",
      "standard": "EIP3091"
    }
  ]
};

export const sis13863860: Chain = {
  "name": "Symbiosis",
  "chain": "SIS",
  "icon": "symbiosis",
  "rpc": [
    "https://symbiosis.calderachain.xyz/http"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Symbiosis",
    "symbol": "SIS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://symbiosis.finance",
  "shortName": "sis",
  "chainId": 13863860,
  "networkId": 13863860,
  "explorers": [
    {
      "name": "Symbiosis explorer",
      "url": "https://symbiosis.calderaexplorer.xyz"
    }
  ]
};

export const bleno15112026: Chain = {
  "name": "Bleno Network",
  "chain": "BLENO",
  "icon": "bleno",
  "rpc": [
    "https://bleno.com.br/hub/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bleno",
    "symbol": "BLENO",
    "decimals": 18
  },
  "infoURL": "https://bleno.com.br/hub/welcome.html",
  "shortName": "bleno",
  "chainId": 15112026,
  "networkId": 15112026,
  "explorers": [
    {
      "name": "BlenoScan",
      "url": "https://bleno.com.br",
      "standard": "EIP3091"
    }
  ]
};

export const tips19251925: Chain = {
  "name": "Tipschain TESTNET",
  "chain": "Tipschain TESTNET",
  "rpc": [
    "http://rpc2.tipspay.org"
  ],
  "faucets": [
    "http://faucet.tipspay.org"
  ],
  "nativeCurrency": {
    "name": "Tipschain Coin",
    "symbol": "TPC",
    "decimals": 18
  },
  "infoURL": "https://tipspay.org",
  "shortName": "tips",
  "chainId": 19251925,
  "networkId": 19251925,
  "icon": "tpc",
  "explorers": [
    {
      "name": "tipscan",
      "url": "https://scan.tipspay.org",
      "standard": "EIP3091"
    }
  ]
};

export const ma20260131: Chain = {
  "name": "Meta Assets Chain",
  "chain": "MA",
  "icon": "unknown",
  "rpc": [
    "https://rpc.ma-chain.xyz"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "MetaAssets",
    "symbol": "MA",
    "decimals": 18
  },
  "infoURL": "https://ma-chain.xyz",
  "shortName": "ma",
  "chainId": 20260131,
  "networkId": 20260131,
  "explorers": [
    {
      "name": "Meta Assets Chain Explorer",
      "url": "https://ma-chain.xyz",
      "standard": "EIP3091"
    }
  ]
};

export const gridmindt20260532: Chain = {
  "name": "GridMind Testnet",
  "title": "GridMind Testnet",
  "chain": "GRD",
  "rpc": [
    "https://testnet-rpc.grid-mind.com"
  ],
  "faucets": [
    "https://testnet-faucet.grid-mind.com"
  ],
  "nativeCurrency": {
    "name": "GridMind Test GRD",
    "symbol": "testGRD",
    "decimals": 18
  },
  "infoURL": "https://www.grid-mind.com/blockchain",
  "shortName": "gridmindt",
  "chainId": 20260532,
  "networkId": 20260532,
  "explorers": [
    {
      "name": "GridMind Testnet Explorer",
      "url": "https://gridmindblockchain.com",
      "standard": "EIP3091"
    },
    {
      "name": "GridMind Technical Explorer",
      "url": "https://testnet-explorer.grid-mind.com",
      "standard": "EIP3091"
    }
  ],
  "testnet": true
};

export const cook20261001: Chain = {
  "name": "Cookchain Mainnet",
  "chain": "COOK",
  "rpc": [
    "https://rpc.cookscan.net/evm",
    "https://rpc.cookdex.net",
    "https://rpc.ldbl.net",
    "https://rpc.zeven.zone"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "COOK",
    "symbol": "COOK",
    "decimals": 18
  },
  "infoURL": "https://cookscan.net",
  "shortName": "cook",
  "chainId": 20261001,
  "networkId": 20261001,
  "icon": "cookchain",
  "explorers": [
    {
      "name": "Cookscan",
      "url": "https://cookscan.net",
      "standard": "EIP3091"
    }
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ]
};

export const zagros21072026: Chain = {
  "name": "Zagros Mainnet",
  "chain": "ZAGROS",
  "rpc": [
    "https://rpc.zagros.network",
    "https://rpc.zagrosnetwork.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Zagros",
    "symbol": "ZAGROS",
    "decimals": 18
  },
  "infoURL": "https://zagros.network",
  "shortName": "zagros",
  "chainId": 21072026,
  "networkId": 21072026,
  "icon": "zagros",
  "explorers": [
    {
      "name": "ZagrosRadar",
      "url": "https://zagrosradar.com",
      "standard": "EIP3091"
    }
  ]
};

export const tjrDevnet21519080: Chain = {
  "name": "Tajirchain Devnet",
  "chain": "TJR",
  "rpc": [
    "https://rpc.devnet.tajirchain.com",
    "wss://wss.devnet.tajirchain.com"
  ],
  "faucets": [
    "https://faucet.devnet.tajirchain.com"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "nativeCurrency": {
    "name": "Tajirchain Test Token",
    "symbol": "tTJR",
    "decimals": 18
  },
  "infoURL": "https://tajirchain.com",
  "shortName": "tjr-devnet",
  "chainId": 21519080,
  "networkId": 21519080,
  "status": "active",
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://explorer.devnet.tajirchain.com",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111",
    "bridges": [
      {
        "url": "https://bridge.devnet.tajirchain.com"
      }
    ]
  }
};

export const nowaTestnet22052010: Chain = {
  "name": "Nowa Testnet",
  "chain": "NOWA",
  "rpc": [
    "https://tnode1.nowa.finance",
    "https://tnode2.nowa.finance",
    "https://tnode3.nowa.finance"
  ],
  "faucets": [
    "https://faucet.nowa.finance"
  ],
  "nativeCurrency": {
    "name": "Nowa",
    "symbol": "NOWA",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://nowa.finance",
  "shortName": "nowa-testnet",
  "chainId": 22052010,
  "networkId": 22052010,
  "icon": "https://nowa.finance/favicon.svg",
  "explorers": [
    {
      "name": "Nowa Testnet Explorer",
      "url": "https://testnet.nowa.finance",
      "standard": "EIP3091",
      "icon": "https://nowa.finance/favicon.svg"
    }
  ]
};

export const pecu27272727: Chain = {
  "name": "Pecu Novus Mainnet",
  "chain": "PECU",
  "rpc": [
    "https://mainnet.pecunovus.net"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Pecu Novus",
    "symbol": "PECU",
    "decimals": 18
  },
  "infoURL": "https://www.pecunovus.com",
  "shortName": "pecu",
  "chainId": 27272727,
  "networkId": 27272727,
  "icon": "pecu",
  "explorers": [
    {
      "name": "pecuscan",
      "url": "https://www.pecuscan.com",
      "icon": "pecuscan",
      "standard": "EIP3091"
    }
  ]
};

export const gbdo38391207: Chain = {
  "name": "GLOBALCHAIN",
  "chain": "GBDo",
  "rpc": [
    "https://rpc.brantley-global.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Global Dollar",
    "symbol": "GBDo",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://brantley-global.com",
  "shortName": "gbdo",
  "chainId": 38391207,
  "networkId": 38391207,
  "icon": "gbdo",
  "explorers": [
    {
      "name": "globaldash",
      "url": "https://brantley-global.com/dashboard",
      "icon": "bg",
      "standard": "EIP3091"
    }
  ]
};

export const tensora44444444: Chain = {
  "name": "Tensora",
  "chain": "Tensora",
  "rpc": [
    "https://rpc.tensora.sh",
    "http://63.250.32.66:8545"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BNB",
    "symbol": "BNB",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://tensora.ai",
  "shortName": "tensora",
  "chainId": 44444444,
  "networkId": 44444444,
  "icon": "tensora",
  "explorers": [
    {
      "name": "Tensora Explorer",
      "url": "https://explorer.tensora.sh",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-56",
    "bridges": [
      {
        "url": "https://bridge.tensora.sh"
      }
    ]
  }
};

export const unp47382916: Chain = {
  "name": "Unipoly Chain Mainnet",
  "chain": "UNP",
  "rpc": [
    "https://rpc.unpchain.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Unipoly Coin",
    "symbol": "UNP",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://unipoly.network",
  "shortName": "unp",
  "chainId": 47382916,
  "networkId": 47382916,
  "icon": "https://unipoly.network/favicon.ico",
  "explorers": [
    {
      "name": "UNP Chain Explorer",
      "url": "https://explorer.unpchain.com",
      "icon": "https://unipoly.network/favicon.ico",
      "standard": "EIP3091"
    }
  ]
};

export const elyon55452773: Chain = {
  "name": "ElyonChain",
  "chain": "ELN",
  "icon": "elyon",
  "rpc": [
    "https://mainnet.elyon.network/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "ELN",
    "symbol": "ELN",
    "decimals": 18
  },
  "infoURL": "https://elyon.network",
  "shortName": "elyon",
  "chainId": 55452773,
  "networkId": 55452773,
  "explorers": [
    {
      "name": "Elyon Explorer",
      "url": "https://explorer.elyon.network",
      "standard": "none"
    }
  ]
};

export const aut65000000: Chain = {
  "name": "Autonity Mainnet",
  "chain": "AUT",
  "icon": "aut",
  "rpc": [
    "https://autonity.rpc.web3cdn.network",
    "wss://autonity.rpc.web3cdn.network",
    "https://autonity.rpc.subquery.network/public",
    "wss://autonity.rpc.subquery.network/public",
    "https://rpc.autonity-apis.com",
    "wss://rpc.autonity-apis.com"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Auton",
    "symbol": "ATN",
    "decimals": 18
  },
  "infoURL": "https://autonity.org/",
  "shortName": "aut",
  "chainId": 65000000,
  "networkId": 65000000,
  "explorers": [
    {
      "name": "autonityscan",
      "url": "https://autonityscan.org"
    }
  ]
};

export const autBakerloo65010004: Chain = {
  "name": "Autonity Bakerloo (Nile) Testnet",
  "chain": "AUT",
  "icon": "aut",
  "rpc": [
    "https://autonity.rpc.web3cdn.network/testnet",
    "wss://autonity.rpc.web3cdn.network/testnet/ws",
    "https://bakerloo.autonity-apis.com",
    "wss://bakerloo.autonity-apis.com"
  ],
  "faucets": [
    "https://autonity.faucetme.pro"
  ],
  "nativeCurrency": {
    "name": "Bakerloo Auton",
    "symbol": "ATN",
    "decimals": 18
  },
  "infoURL": "https://autonity.org/",
  "shortName": "aut-bakerloo",
  "chainId": 65010004,
  "networkId": 65010004,
  "explorers": [
    {
      "name": "autonity-bakerloo-explorer",
      "url": "https://bakerloo.autonity.org"
    }
  ]
};

export const sovra65536001: Chain = {
  "name": "Sovra",
  "chain": "Sovra",
  "rpc": [
    "https://rpc.sovra.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://sovra.io",
  "shortName": "sovra",
  "chainId": 65536001,
  "networkId": 65536001,
  "icon": "sovra",
  "explorers": [
    {
      "name": "Sovra Explorer",
      "url": "https://explorer.sovra.io",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const kryvora73829164: Chain = {
  "name": "Kryvora Testnet",
  "chain": "KRY",
  "rpc": [
    "https://rpc-testnet.kryvora.network/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://kryvora.network",
  "shortName": "kryvora",
  "chainId": 73829164,
  "networkId": 73829164,
  "explorers": [
    {
      "name": "Kryvora Explorer",
      "url": "https://explorer-testnet.kryvora.network",
      "standard": "EIP3091"
    }
  ]
};

export const sxToronto79479957: Chain = {
  "name": "SX Toronto Network",
  "chain": "SXR",
  "rpc": [
    "https://rpc-rollup.toronto.sx.technology"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "SX Token",
    "symbol": "SX",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://sx.technology",
  "shortName": "sx-toronto",
  "chainId": 79479957,
  "networkId": 79479957,
  "explorers": [
    {
      "name": "SX Toronto Explorer",
      "url": "https://explorerl2.toronto.sx.technology/",
      "standard": "EIP3091"
    }
  ]
};

export const baseVibenet84538453: Chain = {
  "name": "Base Vibenet",
  "chain": "ETH",
  "icon": "base",
  "rpc": [
    "https://rpc.vibes.base.org"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [
    "https://chain.base.org/vibenet/faucet"
  ],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://docs.base.org/base-chain/quickstart/connecting-to-base",
  "shortName": "base-vibenet",
  "chainId": 84538453,
  "networkId": 84538453,
  "explorers": [
    {
      "name": "Base Vibenet Explorer",
      "url": "https://chain.base.org/vibenet/explorer",
      "standard": "EIP3091"
    }
  ]
};

export const shinzoTestnet91273001: Chain = {
  "name": "Shinzo Testnet",
  "chain": "SHNZ",
  "rpc": [
    "https://shinzo-testnet.web3cdn.rest",
    "wss://shinzo-testnet.web3cdn.rest",
    "http://testnet.shinzo.network:8545"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Shinzo",
    "symbol": "SHNZ",
    "decimals": 18
  },
  "features": [],
  "infoURL": "https://shinzo.network",
  "shortName": "shinzo-testnet",
  "chainId": 91273001,
  "networkId": 91273001,
  "icon": "shinzo",
  "explorers": []
};

export const prsm101001000: Chain = {
  "name": "Prismo Glassnet",
  "chain": "PRISMO",
  "rpc": [
    "https://rpc.glassnet.prismo.network",
    "wss://rpc.glassnet.prismo.network"
  ],
  "faucets": [
    "https://faucet.glassnet.prismo.network"
  ],
  "nativeCurrency": {
    "name": "USDC",
    "symbol": "USDC",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://prismo.technology",
  "shortName": "prsm",
  "chainId": 101001000,
  "networkId": 101001000,
  "icon": {
    "url": "ipfs://bafkreihx2y5xfpk5kzhypo4z4ugzjqgnslqkfgyhpl5uo2wba77epg4lgq",
    "format": "svg",
    "width": 512,
    "height": 512
  },
  "explorers": [
    {
      "name": "Glassnet Explorer",
      "url": "https://explorer.glassnet.prismo.network",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const istchainMainnet286022981: Chain = {
  "name": "ISTChain Mainnet",
  "chain": "Openverse",
  "rpc": [
    "https://rpc1.istchain.org",
    "https://rpc2.istchain.org",
    "https://rpc3.istchain.org",
    "https://rpc4.istchain.org",
    "https://rpc5.istchain.org",
    "https://rpc6.istchain.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "IST",
    "symbol": "IST",
    "decimals": 18
  },
  "infoURL": "https://istchain.org",
  "shortName": "istchain-mainnet",
  "chainId": 286022981,
  "networkId": 286022981,
  "icon": "ist",
  "explorers": [
    {
      "name": "istscan",
      "url": "https://scan.istchain.org",
      "standard": "EIP3091"
    }
  ]
};

export const dnachainMainnet287022981: Chain = {
  "name": "DNAChain Mainnet",
  "chain": "Openverse",
  "rpc": [
    "https://rpc1.gene.network",
    "https://rpc2.gene.network",
    "https://rpc3.gene.network",
    "https://rpc4.gene.network",
    "https://rpc5.gene.network",
    "https://rpc6.gene.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "DNA",
    "symbol": "DNA",
    "decimals": 18
  },
  "infoURL": "https://gene.network",
  "shortName": "dnachain-mainnet",
  "chainId": 287022981,
  "networkId": 287022981,
  "icon": "dna",
  "explorers": [
    {
      "name": "dnascan",
      "url": "https://scan.gene.network",
      "standard": "EIP3091"
    }
  ]
};

export const slcchainMainnet288022981: Chain = {
  "name": "SLCChain Mainnet",
  "chain": "Openverse",
  "rpc": [
    "https://rpc1.sl.cool",
    "https://rpc2.sl.cool",
    "https://rpc3.sl.cool",
    "https://rpc4.sl.cool",
    "https://rpc5.sl.cool",
    "https://rpc6.sl.cool"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Super Link Coin",
    "symbol": "SLC",
    "decimals": 18
  },
  "infoURL": "https://sl.cool",
  "shortName": "slcchain-mainnet",
  "chainId": 288022981,
  "networkId": 288022981,
  "icon": "slc",
  "explorers": [
    {
      "name": "slcscan",
      "url": "https://scan.sl.cool",
      "standard": "EIP3091"
    }
  ]
};

export const pas420420417: Chain = {
  "name": "Polkadot Testnet",
  "chain": "PAS",
  "rpc": [
    "https://eth-rpc-testnet.polkadot.io",
    "wss://eth-rpc-testnet.polkadot.io"
  ],
  "faucets": [
    "https://faucet.polkadot.io/"
  ],
  "nativeCurrency": {
    "name": "PAS",
    "symbol": "PAS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://polkadot.com",
  "shortName": "pas",
  "chainId": 420420417,
  "networkId": 420420417,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://blockscout-testnet.polkadot.io",
      "standard": "none"
    },
    {
      "name": "routescan",
      "url": "https://polkadot.testnet.routescan.io",
      "standard": "none"
    }
  ]
};

export const ksm420420418: Chain = {
  "name": "Kusama",
  "chain": "KSM",
  "rpc": [
    "https://eth-rpc-kusama.polkadot.io",
    "wss://eth-rpc-kusama.polkadot.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "KSM",
    "symbol": "KSM",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://polkadot.com",
  "shortName": "ksm",
  "chainId": 420420418,
  "networkId": 420420418,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://blockscout-kusama.polkadot.io",
      "standard": "none"
    }
  ]
};

export const dot420420419: Chain = {
  "name": "Polkadot",
  "chain": "DOT",
  "rpc": [
    "https://eth-rpc.polkadot.io",
    "wss://eth-rpc.polkadot.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "DOT",
    "symbol": "DOT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://polkadot.com",
  "shortName": "dot",
  "chainId": 420420419,
  "networkId": 420420419,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://blockscout.polkadot.io",
      "standard": "none"
    },
    {
      "name": "routescan",
      "url": "https://polkadot.routescan.io",
      "standard": "none"
    }
  ]
};

export const infiniteTestnet421018001: Chain = {
  "name": "Infinite Improbability Drive Testnet",
  "chain": "INFINITE",
  "rpc": [
    "https://evm-rpc-testnet.infinitedrive.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "TestImprobability",
    "symbol": "TEST42",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://infinitedrive.xyz",
  "shortName": "infinite-testnet",
  "chainId": 421018001,
  "networkId": 421018001,
  "icon": "infinite",
  "explorers": [
    {
      "name": "Infinite Drive Explorer - Testnet",
      "url": "https://testnet-scan.infinitedrive.xyz",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const sophonOsTestnet531050204: Chain = {
  "name": "Sophon OS Testnet",
  "chain": "Sophon OS",
  "rpc": [
    "https://rpc.testnet.os.sophon.com/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Sophon",
    "symbol": "SOPH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://sophon.xyz/",
  "shortName": "sophon-os-testnet",
  "chainId": 531050204,
  "networkId": 531050204,
  "explorers": [
    {
      "name": "Sophscan Testnet",
      "url": "https://testnet.sophscan.com/",
      "standard": "EIP3091"
    },
    {
      "name": "Sophon OS Testnet Explorer",
      "url": "https://explorer.testnet.os.sophon.com/",
      "standard": "EIP3091"
    }
  ]
};

export const zen845320009: Chain = {
  "name": "Horizen Testnet",
  "chain": "ZEN",
  "rpc": [
    "https://horizen-rpc-testnet.appchain.base.org"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://www.horizen.io/",
  "shortName": "zen",
  "chainId": 845320009,
  "networkId": 845320009,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://horizen-explorer-testnet.appchain.base.org/",
      "standard": "EIP3091"
    }
  ]
};

export const mirasmanda1213549903: Chain = {
  "name": "Mirasmanda",
  "chain": "MIRASMANDA",
  "rpc": [
    "https://rpc.evm.mirasmanda.uz"
  ],
  "faucets": [
    "https://faucet.evm.mirasmanda.uz"
  ],
  "nativeCurrency": {
    "name": "Gas",
    "symbol": "GAS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://asterium.uz",
  "shortName": "mirasmanda",
  "chainId": 1213549903,
  "networkId": 1213549903,
  "icon": "mirasmanda",
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://blockscout.evm.mirasmanda.uz",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const mirasmandaUat1215655279: Chain = {
  "name": "Mirasmanda UAT",
  "chain": "MIRASMANDA",
  "rpc": [
    "https://rpc-uat.evm.mirasmanda.uz"
  ],
  "faucets": [
    "https://faucet-uat.evm.mirasmanda.uz"
  ],
  "nativeCurrency": {
    "name": "Gas",
    "symbol": "GAS",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://asterium.uz",
  "shortName": "mirasmanda-uat",
  "chainId": 1215655279,
  "networkId": 1215655279,
  "icon": "mirasmanda",
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://blockscout-uat.evm.mirasmanda.uz",
      "icon": "blockscout",
      "standard": "EIP3091"
    }
  ]
};

export const itani1229800785: Chain = {
  "name": "iTani Network Chain",
  "chain": "ITANI",
  "icon": "itani",
  "rpc": [
    "https://rpc.itaninetworkchain.com/jsonrpc",
    "https://node.itaninetworkchain.com/jsonrpc"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "iTani",
    "symbol": "ITANI",
    "decimals": 18
  },
  "infoURL": "https://www.itaninetworkchain.com",
  "shortName": "itani",
  "chainId": 1229800785,
  "networkId": 1229800785,
  "explorers": [
    {
      "name": "iTani Explorer",
      "url": "https://explorer.itaninetworkchain.com",
      "icon": "itani",
      "standard": "EIP3091"
    }
  ]
};

export const omega1313161916: Chain = {
  "name": "Omega Mainnet",
  "chain": "Omega",
  "icon": "omega",
  "rpc": [
    "https://0x4e4542bc.rpc.aurora-cloud.dev/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Omega",
    "symbol": "OMEGA",
    "decimals": 18
  },
  "infoURL": "https://omeganetwork.co/",
  "shortName": "omega",
  "chainId": 1313161916,
  "networkId": 1313161916,
  "explorers": [
    {
      "name": "Omega Mainnet",
      "url": "https://0x4e4542bc.explorer.aurora-cloud.dev/"
    }
  ]
};

export const rari1380012617: Chain = {
  "name": "RARI Chain",
  "chain": "RARI",
  "icon": "rari",
  "rpc": [
    "https://mainnet.rpc.rarichain.org/http/",
    "wss://mainnet.rpc.rarichain.org/ws"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ethereum",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://rarichain.org/",
  "shortName": "rari",
  "chainId": 1380012617,
  "networkId": 1380012617,
  "explorers": [
    {
      "name": "Blockscout",
      "url": "https://mainnet.explorer.rarichain.org/"
    }
  ]
};

export const lumiaBeamTestnet2030232745: Chain = {
  "name": "Lumia Beam Testnet",
  "shortName": "lumia-beam-testnet",
  "title": "Lumia Beam Testnet",
  "chain": "ETH",
  "icon": "lumia",
  "rpc": [
    "https://beam-rpc.lumia.org"
  ],
  "faucets": [
    "https://beam-faucet.lumia.org/"
  ],
  "nativeCurrency": {
    "name": "Lumia",
    "symbol": "LUMIA",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://lumia.org",
  "chainId": 2030232745,
  "networkId": 2030232745,
  "explorers": [
    {
      "name": "Lumia Beam Testnet Explorer",
      "url": "https://beam-explorer.lumia.org",
      "icon": "lumia",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-1",
    "bridges": [
      {
        "url": "https://beam-bridge.lumia.org"
      }
    ]
  }
};

export const edent3735928814: Chain = {
  "name": "Eden testnet",
  "chain": "Eden testnet",
  "rpc": [
    "https://rpc.testnet.eden.gateway.fm"
  ],
  "faucets": [
    "https://faucet-eden-testnet.binarybuilders.services"
  ],
  "nativeCurrency": {
    "name": "TIA",
    "symbol": "TIA",
    "decimals": 18
  },
  "infoURL": "",
  "shortName": "edent",
  "chainId": 3735928814,
  "networkId": 3735928814,
  "icon": "celestia",
  "explorers": [
    {
      "name": "Eden Testnet Explorer",
      "url": "https://eden-testnet.blockscout.com",
      "icon": "celestia",
      "standard": "EIP3091"
    }
  ]
};

export const fco11111111111: Chain = {
  "name": "Fanatico",
  "chain": "FCO",
  "icon": "https://d37ow1hrtyzl5c.cloudfront.net/icons/fanatico_logo.svg",
  "rpc": [
    "https://rpc.fanati.co"
  ],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Fanatico",
    "symbol": "FCO",
    "decimals": 18
  },
  "infoURL": "https://chain.fanati.co",
  "shortName": "fco",
  "chainId": 11111111111,
  "networkId": 11111111111,
  "explorers": [
    {
      "name": "Fanatico Explorer",
      "url": "https://explorer.fanati.co",
      "standard": "EIP3091"
    }
  ]
};

export const bUB30143370385: Chain = {
  "name": "Buburuza Mainnet",
  "chain": "BUBU",
  "rpc": [
    "https://rpc-mainnet.buburuza.com/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "BUBU",
    "symbol": "BUB",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://buburuza.com",
  "shortName": "BUB",
  "chainId": 30143370385,
  "networkId": 30143370385,
  "icon": "buburuza",
  "explorers": [
    {
      "name": "Buburuza Explorer",
      "url": "https://explorer-mainnet.buburuza.com/",
      "icon": "buburuza",
      "standard": "EIP3091"
    }
  ]
};

export const sobya357812033857: Chain = {
  "name": "SOBYA Mainnet",
  "chain": "SOBYA",
  "rpc": [
    "https://sobya-evm-rpc.nodesafe-app.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "SOBYA",
    "symbol": "SOBY",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://github.com/snforem-cpu/sobya-chain",
  "shortName": "sobya",
  "icon": "sobya",
  "chainId": 357812033857,
  "networkId": 357812033857,
  "explorers": [
    {
      "name": "SOBYA Explorer",
      "url": "https://explorer.nodesafe-app.xyz/sobya",
      "standard": "EIP3091"
    }
  ]
};

export const gxy420420420420: Chain = {
  "name": "Galaxy Chain",
  "chain": "GALAXY",
  "rpc": [
    "https://archive.galaxychain.co"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Star",
    "symbol": "STAR",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://galaxychain.co",
  "shortName": "gxy",
  "chainId": 420420420420,
  "networkId": 420420420420,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://scan.galaxychain.co",
      "standard": "EIP3091"
    }
  ]
};

export const strato123354377739506: Chain = {
  "name": "Strato",
  "chain": "Strato",
  "rpc": [
    "https://noderpc.strato.nexus/rpc"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Strato USDST",
    "symbol": "USDST",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "infoURL": "https://strato.nexus/",
  "shortName": "strato",
  "chainId": 123354377739506,
  "networkId": 123354377739506,
  "explorers": [
    {
      "name": "Strato Explorer",
      "url": "https://stratoscan.strato.nexus/",
      "standard": "EIP3091"
    }
  ]
};

export const CHAIN_ID_STABLE2201 = CHAIN_ID_STABLE_TESTNET2201;
export const stable2201 = stableTestnet2201;
export const CHAIN_ID_PCN7890 = CHAIN_ID_PC7890;
export const pcn7890 = pc7890;
export const CHAIN_ID_TCROSS612044 = CHAIN_ID_TONE612044;
export const tcross612044 = tone612044;
export const CHAIN_ID_CROSS612055 = CHAIN_ID_ONE612055;
export const cross612055 = one612055;
export const CHAIN_ID_SOPHON_TESTNET531050204 = CHAIN_ID_SOPHON_OS_TESTNET531050204;
export const sophonTestnet531050204 = sophonOsTestnet531050204;

export const allChains: Chain[] = [
  quai9,
  flr14,
  plato53,
  plato62,
  amzg65,
  plato71,
  shibariumecosystem109,
  monad143,
  jito149149,
  farm165,
  nomina166,
  watrMainnet192,
  vcTestnet206,
  vc207,
  iopn222,
  tacchain239,
  orbinum270,
  drby275,
  netx287,
  hsp292292,
  goliath327,
  virbicoin329,
  bourse343,
  kss347,
  dnc362,
  lnr389,
  actumic402,
  dTestnet430,
  dMainnet433,
  areum463,
  campmainnet484,
  lcai504,
  doto505,
  btb509,
  syndicate510,
  fyro511,
  mawari576,
  capy586,
  netxTestnet587,
  battlechainTestnet627,
  bot677,
  jasmy681,
  uniocean684,
  lxon724,
  capxTestnet756,
  capx757,
  qrdx762,
  qelt770,
  qeltTestnet771,
  ritual784,
  binaryholdingsMainnet836,
  aMN870,
  mars890,
  wbtc892,
  fene920,
  zel935,
  iopn984,
  stable988,
  hyperEvm999,
  nura1020,
  bdag1043,
  anta1082,
  xenea1096,
  realchain1098,
  grx1110,
  ecm1124,
  taker1125,
  qry1129,
  ion1143,
  intuitionMainnet1155,
  joa1191,
  bmc1199,
  fitochain1233,
  onn1330,
  bie1342,
  midx1394,
  bdag1404,
  vfl1408,
  tvfl1409,
  lrx1410,
  injectiveTestnet1439,
  cmxr1475,
  roonchain1492,
  midl1500,
  dolphinetTestnet1519,
  dolphinet1520,
  mawari1576,
  nvnmEvm1611,
  tREX1628,
  xgr1643,
  pharos1672,
  oBS1719,
  injective1776,
  rubyTestnet1810,
  wCHSepolia1874,
  xgrt1879,
  recr1888,
  epix1916,
  turkchain1919,
  tpc1925,
  egold1932,
  tokb1952,
  qIEV31990,
  dna1991,
  ronin2020,
  erol2027,
  armaTestnet2028,
  fst2034,
  ntx2070,
  realchaintest2098,
  iBVM2105,
  iBVMT2107,
  parallax2110,
  autheo2127,
  mementoTestnet2129,
  morphtachyon2184,
  stableTestnet2201,
  moca2288,
  besc2372,
  tHaus2443,
  ccc2500,
  svpTestnet2517,
  svp2518,
  anubi2526,
  h22582,
  kto2643,
  spld2691,
  spldt2692,
  orbinum2700,
  clawWorldBox2721,
  creatorChainMainnet2787,
  aere2800,
  alpen2892,
  morph2910,
  bgg3005,
  aic3018,
  svm3109,
  alpha3111,
  bKC3188,
  qbc3303,
  vora3318,
  aet3355,
  tjr3377,
  bytechaintest3399,
  amx3535,
  trustgreen3567,
  aiFi3600,
  inri3777,
  haustNetwork3864,
  nEX3945,
  nex3946,
  gan4048,
  ecna4111,
  tecna4112,
  citrea4114,
  rise4153,
  sxMainnet4162,
  tempoPresto4217,
  genlayerTestnets4221,
  hashfire4227,
  tpix4289,
  megaeth4326,
  liteforge4441,
  denTestnet4442,
  oxin4457,
  sC4509,
  gtbs4599,
  hsp46114611,
  hsp46124612,
  robinhoodchain4663,
  bSURE4848,
  prodao4936,
  mATRIX4959,
  hyprTestnet4978,
  somnia5031,
  arc5042,
  fusionlayer5070,
  aNC5108,
  mocat5151,
  sbtc5200,
  yeYing5432,
  taaqo5566,
  treasurenet5570,
  msc5577,
  evoNova5641,
  tburn5800,
  shib5816,
  dukong5887,
  tea6122,
  bmz6162,
  bMZ6163,
  bmz6165,
  dual6301,
  lrb6359,
  ynxtest6423,
  awaji6497,
  mizuhiki6498,
  kalis6533,
  omaMainnet6623,
  anubi6714,
  vex6736,
  lust6923,
  growfitterMainnet7084,
  srx7119,
  srxTestnet7120,
  vrcn7131,
  vyreTestnet7357,
  cmxrL27373,
  libertas7474,
  carrchain7667,
  tjrTestnet7733,
  embr7773,
  pandaSeaMainnet7776,
  ptb7820,
  hyve7847,
  pc7890,
  univex7932,
  bmn8006,
  lerax8125,
  alpen8150,
  svmTestnet8163,
  lcaiT8200,
  forknet8338,
  bry8379,
  aCN8700,
  ebc8721,
  ward8765,
  tICS9030,
  xybTestnet9194,
  lcai9200,
  zel9350,
  kub9601,
  plasma9745,
  plasmaTestnet9746,
  plasmaDevnet9747,
  timp9818,
  imp9819,
  bytechain9933,
  brevisNetwork9973,
  ethw10001,
  gateLayer10088,
  ozone10120,
  ozone10121,
  mova10323,
  limonataTestnet10777,
  gleec11169,
  eth11417,
  nkm11941,
  kudora12000,
  moc12026,
  l2p12216,
  amax12248,
  ctcchain12301,
  ctcchain12302,
  ela12343,
  cLY12369,
  brick12786,
  liberlandTestnet12865,
  rntx13113,
  bKC13188,
  mee13390,
  bridgeless13441,
  intuitionTestnet13579,
  btz14204,
  sonicTestnet14601,
  quait15000,
  midlTestnet15001,
  infraTestnet15324,
  bimbo15497,
  nrxn15526,
  holo15675,
  holoTestnet15676,
  _0gGalileo16601,
  _0g16661,
  botcy16963,
  dmd17771,
  trecr18882,
  yuuchain19001,
  igraCaravelTestnet19416,
  stcTestnet19517,
  stcMainnet19518,
  mon19901,
  entropy19911,
  atrnxos19966,
  sup19998,
  mandala20010,
  mandalaTestnet20011,
  agls20033,
  nch20250,
  alpen20310,
  efik20488,
  fluentTestnet20994,
  flashnet21021,
  flashnetTestnet21022,
  autheoTestnet21270,
  apchain21970,
  cles22225,
  incentiv24101,
  agentscoin24368,
  fluent25363,
  h2lambda25821,
  tcent28802,
  alpen29032,
  taic30181,
  ethiq30303,
  trxc30485,
  dawnMainnet30715,
  zksyncPrividiumMainnet30716,
  bvm2031338,
  paix32380,
  zil32769,
  ecx32904,
  zeroBeacon33000,
  zeroSystem33001,
  zeroInterop33002,
  zeroAtlas33003,
  zeroPrivate33004,
  zilTestnet33101,
  ecxTestnet33160,
  qom33303,
  zq2Devnet33469,
  morphtachyonTestnet34952,
  trct35935,
  tc36000,
  abcore36888,
  weichain37771,
  igra38833,
  igraTestnet38836,
  cin39500,
  salt40204,
  rootVX41295,
  nesa41444,
  eduChain41923,
  tempoModerato42431,
  zeroBeaconTestnet43000,
  zeroSystemTestnet43001,
  zeroInteropTestnet43002,
  zeroAtlasTestnet43003,
  zeroPrivateTestnet43004,
  ricTest45578,
  robinhoodchaintestnet46630,
  txcl47294,
  bitbadges50024,
  bitbadgesTestnet50025,
  somniaTestnet50312,
  risa51014,
  mementoMainnet51888,
  lazai52924,
  datahaven55930,
  datahaven55931,
  zktanenbaum57057,
  mevCommit57173,
  jello61564,
  mova61900,
  apollo62606,
  veri563868,
  gald64137,
  omachainTestnet66238,
  nxpc68414,
  eto69670,
  pyra70003,
  seven70007,
  eki70101,
  cxTestnet70707,
  wcnTestnet71117,
  rLS72957,
  seleman73571,
  carrchain76672,
  ventures77717,
  bsos77888,
  bradi78168,
  pexliTestnet78901,
  hpx80808,
  onyx80888,
  codex81224,
  steemvm81630,
  ticko84256,
  tickoTestnet84257,
  plus88088,
  ptek88788,
  qtschain88868,
  chiliz88888,
  valuex90000,
  apaw90025,
  watrTestnet92870,
  pepu97741,
  gOGO99001,
  mC99002,
  trct99566,
  elysiumTestnet99801,
  elysium99901,
  qsn99991,
  ctc102030,
  ctctest102031,
  ctcdev102032,
  mtf114514,
  swss122605,
  ids123999,
  mitosis124816,
  grav127001,
  etls127823,
  fuelSepolia129514,
  rphx130526,
  aria134235,
  midxt139420,
  bexchain140586,
  kasplex167012,
  wcn171717,
  lit175200,
  dpn179205,
  hppSepolia181228,
  gomchainMainnet190278,
  hppMainnet190415,
  r0ar193939,
  eadx198724,
  nos200024,
  fsc201022,
  dfn202110,
  sVS202308,
  propulenceTestnet202500,
  aurext202506,
  kasplex202555,
  ju202599,
  roninSaigon202601,
  miama202610,
  juchain210000,
  klt220312,
  sivzMainnet222345,
  mocat222888,
  ares232425,
  codeNektMainnet235235,
  ulaloMainnet237007,
  sin250225,
  kub259251,
  datachain271828,
  mbtx271831,
  mbtxl2271832,
  creatorChainTestnet278701,
  valuechain286623,
  pmt290290,
  t1299792,
  t1t299892,
  axion303030,
  vcr314169,
  dCommMainnet326663,
  lax333222,
  denMainnet369369,
  teqoin420377,
  infinite421018,
  mtx478549,
  btcwchain482120,
  commons510003,
  alpha511111,
  tone612044,
  one612055,
  galactica613419,
  tgald641371,
  mdx648529,
  eduChainTestnet656476,
  aztec677868,
  pharosTestnet688688,
  pharosAtlantic688689,
  marschain704851,
  marschainTestnet704852,
  drama710520,
  prana712217,
  zbx728990,
  cx737373,
  toog777001,
  makaChainMainnet777178,
  flxg778400,
  ust778889,
  nvnmChainDevnet787222,
  nvnmChainTestnet787223,
  spaceosTestnet800000,
  zug824642,
  bini837291,
  hypercluster838838,
  galacticaTestnet843843,
  haqqTestethiq853211,
  wrg882026,
  zenithEvmTestnet936485,
  primox970803,
  qantera974621,
  brevisProvernetTestnet999983,
  xo1000101,
  wirexTestnet1001996,
  roonchain1314520,
  xrplevm1440000,
  vxsTestnet1618032,
  duck2026001,
  cashcat2274228,
  prvTestnet2718281,
  arcTestnet5042002,
  ethereal5064014,
  loot5151706,
  wIND5552020,
  dogeosChikyu6281971,
  jmdt7000700,
  nvm7575757,
  dogita7770777,
  gravityTestnet7771625,
  vpc8678671,
  daventre8770570,
  ccTestnet11111110,
  cc11111111,
  cwnTestnet11111327,
  celoSep11142220,
  riseTestnet11155931,
  r0art11166111,
  winmar12142816,
  roonchain13145201,
  etherealTestnet013374202,
  hp13600000,
  sis13863860,
  bleno15112026,
  tips19251925,
  ma20260131,
  gridmindt20260532,
  cook20261001,
  zagros21072026,
  tjrDevnet21519080,
  nowaTestnet22052010,
  pecu27272727,
  gbdo38391207,
  tensora44444444,
  unp47382916,
  elyon55452773,
  aut65000000,
  autBakerloo65010004,
  sovra65536001,
  kryvora73829164,
  sxToronto79479957,
  baseVibenet84538453,
  shinzoTestnet91273001,
  prsm101001000,
  istchainMainnet286022981,
  dnachainMainnet287022981,
  slcchainMainnet288022981,
  pas420420417,
  ksm420420418,
  dot420420419,
  infiniteTestnet421018001,
  sophonOsTestnet531050204,
  zen845320009,
  mirasmanda1213549903,
  mirasmandaUat1215655279,
  itani1229800785,
  omega1313161916,
  rari1380012617,
  lumiaBeamTestnet2030232745,
  edent3735928814,
  fco11111111111,
  bUB30143370385,
  sobya357812033857,
  gxy420420420420,
  strato123354377739506,
];

export function getChainById(chainId: number): Chain | undefined {
  return allChains.find((chain) => chain.chainId === chainId);
}

export const chainById: Record<number, Chain> = Object.fromEntries(
  allChains.map((chain) => [chain.chainId, chain])
);