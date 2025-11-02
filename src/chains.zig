// This file is auto-generated from DefiLlama/chainlist
// Do not edit manually - run `bun run generate` to regenerate

const std = @import("std");

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
pub const CHAIN_ID_NOMINA_166: u64 = 166;
pub const CHAIN_ID_WATR_MAINNET_192: u64 = 192;
pub const CHAIN_ID_TACCHAIN_239: u64 = 239;
pub const CHAIN_ID_KSS_347: u64 = 347;
pub const CHAIN_ID_AREUM_463: u64 = 463;
pub const CHAIN_ID_LCAI_504: u64 = 504;
pub const CHAIN_ID_SYNDICATE_510: u64 = 510;
pub const CHAIN_ID_CAPY_586: u64 = 586;
pub const CHAIN_ID_JASMY_681: u64 = 681;
pub const CHAIN_ID_UNIOCEAN_684: u64 = 684;
pub const CHAIN_ID_CAPX_TESTNET_756: u64 = 756;
pub const CHAIN_ID_CAPX_757: u64 = 757;
pub const CHAIN_ID_BINARYHOLDINGS_MAINNET_836: u64 = 836;
pub const CHAIN_ID_AMN_870: u64 = 870;
pub const CHAIN_ID_STABLE_988: u64 = 988;
pub const CHAIN_ID_HYPER_EVM_999: u64 = 999;
pub const CHAIN_ID_BDAG_1043: u64 = 1043;
pub const CHAIN_ID_REALCHAIN_1098: u64 = 1098;
pub const CHAIN_ID_ECM_1124: u64 = 1124;
pub const CHAIN_ID_TAKER_1125: u64 = 1125;
pub const CHAIN_ID_INTUITION_MAINNET_1155: u64 = 1155;
pub const CHAIN_ID_FITOCHAIN_1233: u64 = 1233;
pub const CHAIN_ID_VFL_1408: u64 = 1408;
pub const CHAIN_ID_TVFL_1409: u64 = 1409;
pub const CHAIN_ID_INJECTIVE_TESTNET_1439: u64 = 1439;
pub const CHAIN_ID_TREX_1628: u64 = 1628;
pub const CHAIN_ID_INJECTIVE_1776: u64 = 1776;
pub const CHAIN_ID_EPIX_1916: u64 = 1916;
pub const CHAIN_ID_QIEV3_1990: u64 = 1990;
pub const CHAIN_ID_RONIN_2020: u64 = 2020;
pub const CHAIN_ID_EROL_2027: u64 = 2027;
pub const CHAIN_ID_REALCHAINTEST_2098: u64 = 2098;
pub const CHAIN_ID_IBVM_2105: u64 = 2105;
pub const CHAIN_ID_IBVMT_2107: u64 = 2107;
pub const CHAIN_ID_STABLE_2201: u64 = 2201;
pub const CHAIN_ID_MOCA_2288: u64 = 2288;
pub const CHAIN_ID_BESC_2372: u64 = 2372;
pub const CHAIN_ID_SPLD_2691: u64 = 2691;
pub const CHAIN_ID_SPLDT_2692: u64 = 2692;
pub const CHAIN_ID_ALPEN_2892: u64 = 2892;
pub const CHAIN_ID_SVM_3109: u64 = 3109;
pub const CHAIN_ID_HAUST_NETWORK_3864: u64 = 3864;
pub const CHAIN_ID_GAN_4048: u64 = 4048;
pub const CHAIN_ID_HASHFIRE_4227: u64 = 4227;
pub const CHAIN_ID_SC_4509: u64 = 4509;
pub const CHAIN_ID_PRODAO_4936: u64 = 4936;
pub const CHAIN_ID_SOMNIA_5031: u64 = 5031;
pub const CHAIN_ID_MOCAT_5151: u64 = 5151;
pub const CHAIN_ID_YEYING_5432: u64 = 5432;
pub const CHAIN_ID_DUKONG_5887: u64 = 5887;
pub const CHAIN_ID_GROWFITTER_MAINNET_7084: u64 = 7084;
pub const CHAIN_ID_VRCN_7131: u64 = 7131;
pub const CHAIN_ID_CARRCHAIN_7667: u64 = 7667;
pub const CHAIN_ID_PTB_7820: u64 = 7820;
pub const CHAIN_ID_PCN_7890: u64 = 7890;
pub const CHAIN_ID_BMN_8006: u64 = 8006;
pub const CHAIN_ID_LERAX_8125: u64 = 8125;
pub const CHAIN_ID_SVM_TESTNET_8163: u64 = 8163;
pub const CHAIN_ID_FORKNET_8338: u64 = 8338;
pub const CHAIN_ID_ACN_8700: u64 = 8700;
pub const CHAIN_ID_EBC_8721: u64 = 8721;
pub const CHAIN_ID_WARD_8765: u64 = 8765;
pub const CHAIN_ID_TICS_9030: u64 = 9030;
pub const CHAIN_ID_KUB_9601: u64 = 9601;
pub const CHAIN_ID_PLASMA_9745: u64 = 9745;
pub const CHAIN_ID_PLASMA_TESTNET_9746: u64 = 9746;
pub const CHAIN_ID_PLASMA_DEVNET_9747: u64 = 9747;
pub const CHAIN_ID_ETHW_10001: u64 = 10001;
pub const CHAIN_ID_GATELAYER_10088: u64 = 10088;
pub const CHAIN_ID_OZONE_10120: u64 = 10120;
pub const CHAIN_ID_OZONE_10121: u64 = 10121;
pub const CHAIN_ID_MOVA_10323: u64 = 10323;
pub const CHAIN_ID_KUDORA_12000: u64 = 12000;
pub const CHAIN_ID_ELA_12343: u64 = 12343;
pub const CHAIN_ID_LIBERLAND_TESTNET_12865: u64 = 12865;
pub const CHAIN_ID_BRIDGELESS_13441: u64 = 13441;
pub const CHAIN_ID_INTUITION_TESTNET_13579: u64 = 13579;
pub const CHAIN_ID_SONIC_TESTNET_14601: u64 = 14601;
pub const CHAIN_ID_QUAIT_15000: u64 = 15000;
pub const CHAIN_ID__0G_GALILEO_16601: u64 = 16601;
pub const CHAIN_ID__0G_16661: u64 = 16661;
pub const CHAIN_ID_INCENTIV_24101: u64 = 24101;
pub const CHAIN_ID_TCENT_28802: u64 = 28802;
pub const CHAIN_ID_PAIX_32380: u64 = 32380;
pub const CHAIN_ID_ZIL_32769: u64 = 32769;
pub const CHAIN_ID_ZIL_TESTNET_33101: u64 = 33101;
pub const CHAIN_ID_ZQ2_DEVNET_33469: u64 = 33469;
pub const CHAIN_ID_ABCORE_36888: u64 = 36888;
pub const CHAIN_ID_WEICHAIN_37771: u64 = 37771;
pub const CHAIN_ID_ROOTVX_41295: u64 = 41295;
pub const CHAIN_ID_RISA_51014: u64 = 51014;
pub const CHAIN_ID_LAZAI_52924: u64 = 52924;
pub const CHAIN_ID_MOVA_61900: u64 = 61900;
pub const CHAIN_ID_OMACHAIN_TESTNET_66238: u64 = 66238;
pub const CHAIN_ID_CARRCHAIN_76672: u64 = 76672;
pub const CHAIN_ID_ONYX_80888: u64 = 80888;
pub const CHAIN_ID_CODEX_81224: u64 = 81224;
pub const CHAIN_ID_CHILIZ_88888: u64 = 88888;
pub const CHAIN_ID_APAW_90025: u64 = 90025;
pub const CHAIN_ID_WATR_TESTNET_92870: u64 = 92870;
pub const CHAIN_ID_PEPU_97741: u64 = 97741;
pub const CHAIN_ID_CTC_102030: u64 = 102030;
pub const CHAIN_ID_CTCTEST_102031: u64 = 102031;
pub const CHAIN_ID_CTCDEV_102032: u64 = 102032;
pub const CHAIN_ID_MITOSIS_124816: u64 = 124816;
pub const CHAIN_ID_FUEL_SEPOLIA_129514: u64 = 129514;
pub const CHAIN_ID_ARIA_134235: u64 = 134235;
pub const CHAIN_ID_KASPLEX_167012: u64 = 167012;
pub const CHAIN_ID_LIT_175200: u64 = 175200;
pub const CHAIN_ID_HPP_SEPOLIA_181228: u64 = 181228;
pub const CHAIN_ID_GOMCHAIN_MAINNET_190278: u64 = 190278;
pub const CHAIN_ID_HPP_MAINNET_190415: u64 = 190415;
pub const CHAIN_ID_EADX_198724: u64 = 198724;
pub const CHAIN_ID_NOS_200024: u64 = 200024;
pub const CHAIN_ID_PROPULENCE_TESTNET_202500: u64 = 202500;
pub const CHAIN_ID_AUREXT_202506: u64 = 202506;
pub const CHAIN_ID_KASPLEX_202555: u64 = 202555;
pub const CHAIN_ID_JU_202599: u64 = 202599;
pub const CHAIN_ID_JUCHAIN_210000: u64 = 210000;
pub const CHAIN_ID_KLT_220312: u64 = 220312;
pub const CHAIN_ID_SIVZ_MAINNET_222345: u64 = 222345;
pub const CHAIN_ID_MOCAT_222888: u64 = 222888;
pub const CHAIN_ID_CODENEKT_MAINNET_235235: u64 = 235235;
pub const CHAIN_ID_ULALO_MAINNET_237007: u64 = 237007;
pub const CHAIN_ID_KUB_259251: u64 = 259251;
pub const CHAIN_ID_T1_299792: u64 = 299792;
pub const CHAIN_ID_T1T_299892: u64 = 299892;
pub const CHAIN_ID_DCOMM_MAINNET_326663: u64 = 326663;
pub const CHAIN_ID_LAX_333222: u64 = 333222;
pub const CHAIN_ID_MTX_478549: u64 = 478549;
pub const CHAIN_ID_COMMONS_510003: u64 = 510003;
pub const CHAIN_ID_TCROSS_612044: u64 = 612044;
pub const CHAIN_ID_CROSS_612055: u64 = 612055;
pub const CHAIN_ID_GALACTICA_613419: u64 = 613419;
pub const CHAIN_ID_MDX_648529: u64 = 648529;
pub const CHAIN_ID_PHAROS_TESTNET_688688: u64 = 688688;
pub const CHAIN_ID_PHAROS_ATLANTIC_688689: u64 = 688689;
pub const CHAIN_ID_GALACTICA_TESTNET_843843: u64 = 843843;
pub const CHAIN_ID_HAQQ_TESTETHIQ_853211: u64 = 853211;
pub const CHAIN_ID_ROONCHAIN_1314520: u64 = 1314520;
pub const CHAIN_ID_XRPLEVM_1440000: u64 = 1440000;
pub const CHAIN_ID_ETHEREAL_5064014: u64 = 5064014;
pub const CHAIN_ID_LOOT_5151706: u64 = 5151706;
pub const CHAIN_ID_JMDT_7000700: u64 = 7000700;
pub const CHAIN_ID_VPC_8678671: u64 = 8678671;
pub const CHAIN_ID_CELO_SEP_11142220: u64 = 11142220;
pub const CHAIN_ID_ROONCHAIN_13145201: u64 = 13145201;
pub const CHAIN_ID_ETHEREAL_TESTNET_0_13374202: u64 = 13374202;
pub const CHAIN_ID_SIS_13863860: u64 = 13863860;
pub const CHAIN_ID_UNP_47382916: u64 = 47382916;
pub const CHAIN_ID_AUT_65000000: u64 = 65000000;
pub const CHAIN_ID_AUT_BAKERLOO_65010004: u64 = 65010004;
pub const CHAIN_ID_SOVRA_65536001: u64 = 65536001;
pub const CHAIN_ID_ISTCHAIN_MAINNET_286022981: u64 = 286022981;
pub const CHAIN_ID_DNACHAIN_MAINNET_287022981: u64 = 287022981;
pub const CHAIN_ID_SLCCHAIN_MAINNET_288022981: u64 = 288022981;
pub const CHAIN_ID_SOPHON_TESTNET_531050204: u64 = 531050204;
pub const CHAIN_ID_ZEN_845320009: u64 = 845320009;
pub const CHAIN_ID_RARI_1380012617: u64 = 1380012617;
pub const CHAIN_ID_LUMIA_BEAM_TESTNET_2030232745: u64 = 2030232745;
pub const CHAIN_ID_GXY_420420420420: u64 = 420420420420;

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
        .name = "gasUSDT",
        .symbol = "gasUSDT",
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
};

pub const hyper_evm_999_explorers = [_]Explorer{
    .{
        .name = "Purrsec",
        .url = "https://purrsec.com/",
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

pub const injective_1776_rpcs = [_][]const u8{
    "https://sentry.evm-rpc.injective.network",
    "https://injectiveevm-rpc.polkachu.com",
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

pub const ronin_2020_rpcs = [_][]const u8{
    "https://api.roninchain.com/rpc",
    "https://api-gateway.skymavis.com/rpc?apikey=9aqYLBbxSC6LROynQJBvKkEIsioqwHmr",
    "https://ronin.lgns.net/rpc",
    "https://ronin.drpc.org",
};

pub const ronin_2020_explorers = [_]Explorer{
    .{
        .name = "Ronin Explorer",
        .url = "https://app.roninchain.com/",
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
        .name = "IBVM Bitcoin",
        .symbol = "BTC",
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
        .url = "https://testnet-explorer.ibvm.io",
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
        .symbol = "BTC",
        .decimals = 18,
    },
    .info_url = "https://ibvm.io/",
    .explorers = &IBVMT_2107_explorers,
};

pub const stable_2201_rpcs = [_][]const u8{
    "https://stable-jsonrpc.testnet.chain0.dev",
};

pub const stable_2201_explorers = [_]Explorer{
    .{
        .name = "Stable Explorer",
        .url = "https://stable-explorer.testnet.chain0.dev",
    },
};

pub const stable_2201 = Chain{
    .name = "Stable Testnet",
    .chain = "stabletestnet_2201-1",
    .chain_id = 2201,
    .network_id = 2201,
    .short_name = "stable",
    .rpc = &stable_2201_rpcs,
    .native_currency = .{
        .name = "USDT",
        .symbol = "USDT",
        .decimals = 18,
    },
    .info_url = "https://docs.partners.stable.xyz/testnet/testnet-information",
    .explorers = &stable_2201_explorers,
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

pub const Somnia_5031_rpcs = [_][]const u8{
    "https://api.infra.mainnet.somnia.network",
    "https://somnia-json-rpc.stakely.io",
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

pub const pcn_7890_rpcs = [_][]const u8{
    "https://publicrpc.panchain.io",
};

pub const pcn_7890_explorers = [_]Explorer{
    .{
        .name = "Blockscout",
        .url = "https://scan.panchain.io",
    },
};

pub const pcn_7890 = Chain{
    .name = "Panchain Mainnet",
    .chain = "PC",
    .chain_id = 7890,
    .network_id = 7890,
    .short_name = "pcn",
    .rpc = &pcn_7890_rpcs,
    .native_currency = .{
        .name = "Pan Coin",
        .symbol = "PC",
        .decimals = 18,
    },
    .info_url = "https://panchain.io",
    .explorers = &pcn_7890_explorers,
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
        .name = "EBC Scan",
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
    .info_url = "https://ebcscan.net",
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

pub const fuel_sepolia_129514_rpcs = [_][]const u8{
    "https://fuel-testnet.zappayment.org",
};

pub const fuel_sepolia_129514_explorers = [_]Explorer{
    .{
        .name = "Fuel Sepolia Testnet Explorer",
        .url = "https://app-testnet.fuel.network",
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
    .network_id = undefined,
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
    .network_id = undefined,
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

pub const tcross_612044_rpcs = [_][]const u8{
    "https://testnet.crosstoken.io:22001",
};

pub const tcross_612044_explorers = [_]Explorer{
    .{
        .name = "CROSS Testnet Explorer",
        .url = "https://testnet.crossscan.io",
    },
};

pub const tcross_612044 = Chain{
    .name = "CROSS Testnet",
    .chain = "TCROSS",
    .chain_id = 612044,
    .network_id = 612044,
    .short_name = "tcross",
    .rpc = &tcross_612044_rpcs,
    .native_currency = .{
        .name = "TestnetCROSS",
        .symbol = "tCROSS",
        .decimals = 18,
    },
    .info_url = "https://to.nexus",
    .explorers = &tcross_612044_explorers,
};

pub const cross_612055_rpcs = [_][]const u8{
    "https://mainnet.crosstoken.io:22001",
};

pub const cross_612055_explorers = [_]Explorer{
    .{
        .name = "CROSS Explorer",
        .url = "https://www.crossscan.io",
    },
};

pub const cross_612055 = Chain{
    .name = "CROSS Mainnet",
    .chain = "CROSS",
    .chain_id = 612055,
    .network_id = 612055,
    .short_name = "cross",
    .rpc = &cross_612055_rpcs,
    .native_currency = .{
        .name = "CROSS",
        .symbol = "CROSS",
        .decimals = 18,
    },
    .info_url = "https://to.nexus",
    .explorers = &cross_612055_explorers,
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
    "https://rpc.testethiq.haqq.network",
};

pub const haqq_testethiq_853211_explorers = [_]Explorer{
    .{
        .name = "HAQQ Testethiq Blockscout",
        .url = "https://explorer.testethiq.haqq.network",
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
    .info_url = "https://www.haqq.network",
    .explorers = &haqq_testethiq_853211_explorers,
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

pub const sophon_testnet_531050204_rpcs = [_][]const u8{
    "https://zksync-os-testnet-sophon.zksync.dev/",
};

pub const sophon_testnet_531050204_explorers = [_]Explorer{
    .{
        .name = "Sophon zkSync Testnet Explorer",
        .url = "https://block-explorer.zksync-os-testnet-sophon.zksync.dev/",
    },
};

pub const sophon_testnet_531050204 = Chain{
    .name = "Sophon zkSync-OS Testnet",
    .chain = "Sophon",
    .chain_id = 531050204,
    .network_id = 531050204,
    .short_name = "sophon-testnet",
    .rpc = &sophon_testnet_531050204_rpcs,
    .native_currency = .{
        .name = "Sophon",
        .symbol = "SOPH",
        .decimals = 18,
    },
    .info_url = "https://sophon.xyz/",
    .explorers = &sophon_testnet_531050204_explorers,
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

pub const all_chains = [_]Chain{
    quai_9,
    flr_14,
    nomina_166,
    watr_mainnet_192,
    tacchain_239,
    kss_347,
    areum_463,
    lcai_504,
    syndicate_510,
    capy_586,
    jasmy_681,
    uniocean_684,
    capx_testnet_756,
    capx_757,
    binaryholdings_mainnet_836,
    AMN_870,
    stable_988,
    hyper_evm_999,
    bdag_1043,
    realchain_1098,
    ecm_1124,
    taker_1125,
    intuition_mainnet_1155,
    fitochain_1233,
    vfl_1408,
    tvfl_1409,
    injective_testnet_1439,
    TREX_1628,
    injective_1776,
    epix_1916,
    QIEV3_1990,
    ronin_2020,
    erol_2027,
    realchaintest_2098,
    IBVM_2105,
    IBVMT_2107,
    stable_2201,
    moca_2288,
    besc_2372,
    spld_2691,
    spldt_2692,
    alpen_2892,
    svm_3109,
    haust_network_3864,
    gan_4048,
    hashfire_4227,
    SC_4509,
    prodao_4936,
    Somnia_5031,
    mocat_5151,
    YeYing_5432,
    dukong_5887,
    Growfitter_mainnet_7084,
    vrcn_7131,
    carrchain_7667,
    ptb_7820,
    pcn_7890,
    bmn_8006,
    lerax_8125,
    svm_testnet_8163,
    forknet_8338,
    ACN_8700,
    ebc_8721,
    ward_8765,
    TICS_9030,
    kub_9601,
    plasma_9745,
    plasma_testnet_9746,
    plasma_devnet_9747,
    ethw_10001,
    GateLayer_10088,
    ozone_10120,
    ozone_10121,
    mova_10323,
    kudora_12000,
    ela_12343,
    liberland_testnet_12865,
    bridgeless_13441,
    intuition_testnet_13579,
    sonic_testnet_14601,
    quait_15000,
    _0g_galileo_16601,
    _0g_16661,
    incentiv_24101,
    tcent_28802,
    paix_32380,
    zil_32769,
    zil_testnet_33101,
    zq2_devnet_33469,
    abcore_36888,
    weichain_37771,
    rootVX_41295,
    risa_51014,
    lazai_52924,
    mova_61900,
    omachain_testnet_66238,
    carrchain_76672,
    onyx_80888,
    codex_81224,
    chiliz_88888,
    apaw_90025,
    watr_testnet_92870,
    pepu_97741,
    ctc_102030,
    ctctest_102031,
    ctcdev_102032,
    mitosis_124816,
    fuel_sepolia_129514,
    aria_134235,
    kasplex_167012,
    lit_175200,
    hpp_sepolia_181228,
    gomchain_mainnet_190278,
    hpp_mainnet_190415,
    eadx_198724,
    nos_200024,
    Propulence_testnet_202500,
    aurext_202506,
    kasplex_202555,
    ju_202599,
    juchain_210000,
    klt_220312,
    sivz_mainnet_222345,
    mocat_222888,
    CodeNekt_mainnet_235235,
    ulalo_mainnet_237007,
    kub_259251,
    t1_299792,
    t1t_299892,
    DComm_mainnet_326663,
    lax_333222,
    mtx_478549,
    commons_510003,
    tcross_612044,
    cross_612055,
    galactica_613419,
    mdx_648529,
    pharos_testnet_688688,
    pharos_atlantic_688689,
    galactica_testnet_843843,
    haqq_testethiq_853211,
    roonchain_1314520,
    xrplevm_1440000,
    ethereal_5064014,
    loot_5151706,
    jmdt_7000700,
    vpc_8678671,
    celo_sep_11142220,
    roonchain_13145201,
    ethereal_testnet_0_13374202,
    sis_13863860,
    unp_47382916,
    aut_65000000,
    aut_bakerloo_65010004,
    sovra_65536001,
    istchain_mainnet_286022981,
    dnachain_mainnet_287022981,
    slcchain_mainnet_288022981,
    sophon_testnet_531050204,
    zen_845320009,
    rari_1380012617,
    lumia_beam_testnet_2030232745,
    gxy_420420420420,
};

pub fn getChainById(chain_id: u64) ?Chain {
    for (all_chains) |chain| {
        if (chain.chain_id == chain_id) return chain;
    }
    return null;
}