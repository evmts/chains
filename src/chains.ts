// This file is auto-generated from DefiLlama/chainlist
// Do not edit manually - run `bun run generate` to regenerate

export interface NativeCurrency {
  name: string;
  symbol: string;
  decimals: number;
}

export interface Explorer {
  name: string;
  url: string;
  standard?: string;
}

export interface Chain {
  name: string;
  chain: string;
  chainId: number;
  networkId: number;
  shortName: string;
  rpc: string[];
  nativeCurrency: NativeCurrency;
  infoURL?: string;
  explorers?: Explorer[];
}

// Chain IDs
export const CHAIN_ID_QUAI_9 = 9;
export const CHAIN_ID_FLR_14 = 14;
export const CHAIN_ID_NOMINA_166 = 166;
export const CHAIN_ID_WATR_MAINNET_192 = 192;
export const CHAIN_ID_TACCHAIN_239 = 239;
export const CHAIN_ID_KSS_347 = 347;
export const CHAIN_ID_AREUM_463 = 463;
export const CHAIN_ID_LCAI_504 = 504;
export const CHAIN_ID_SYNDICATE_510 = 510;
export const CHAIN_ID_CAPY_586 = 586;
export const CHAIN_ID_JASMY_681 = 681;
export const CHAIN_ID_UNIOCEAN_684 = 684;
export const CHAIN_ID_CAPX_TESTNET_756 = 756;
export const CHAIN_ID_CAPX_757 = 757;
export const CHAIN_ID_BINARYHOLDINGS_MAINNET_836 = 836;
export const CHAIN_ID_AMN_870 = 870;
export const CHAIN_ID_STABLE_988 = 988;
export const CHAIN_ID_HYPER_EVM_999 = 999;
export const CHAIN_ID_BDAG_1043 = 1043;
export const CHAIN_ID_REALCHAIN_1098 = 1098;
export const CHAIN_ID_ECM_1124 = 1124;
export const CHAIN_ID_TAKER_1125 = 1125;
export const CHAIN_ID_INTUITION_MAINNET_1155 = 1155;
export const CHAIN_ID_FITOCHAIN_1233 = 1233;
export const CHAIN_ID_VFL_1408 = 1408;
export const CHAIN_ID_TVFL_1409 = 1409;
export const CHAIN_ID_INJECTIVE_TESTNET_1439 = 1439;
export const CHAIN_ID_TREX_1628 = 1628;
export const CHAIN_ID_INJECTIVE_1776 = 1776;
export const CHAIN_ID_EPIX_1916 = 1916;
export const CHAIN_ID_QIEV3_1990 = 1990;
export const CHAIN_ID_RONIN_2020 = 2020;
export const CHAIN_ID_EROL_2027 = 2027;
export const CHAIN_ID_REALCHAINTEST_2098 = 2098;
export const CHAIN_ID_IBVM_2105 = 2105;
export const CHAIN_ID_IBVMT_2107 = 2107;
export const CHAIN_ID_STABLE_2201 = 2201;
export const CHAIN_ID_MOCA_2288 = 2288;
export const CHAIN_ID_BESC_2372 = 2372;
export const CHAIN_ID_SPLD_2691 = 2691;
export const CHAIN_ID_SPLDT_2692 = 2692;
export const CHAIN_ID_ALPEN_2892 = 2892;
export const CHAIN_ID_SVM_3109 = 3109;
export const CHAIN_ID_HAUST_NETWORK_3864 = 3864;
export const CHAIN_ID_GAN_4048 = 4048;
export const CHAIN_ID_HASHFIRE_4227 = 4227;
export const CHAIN_ID_SC_4509 = 4509;
export const CHAIN_ID_PRODAO_4936 = 4936;
export const CHAIN_ID_SOMNIA_5031 = 5031;
export const CHAIN_ID_MOCAT_5151 = 5151;
export const CHAIN_ID_YEYING_5432 = 5432;
export const CHAIN_ID_DUKONG_5887 = 5887;
export const CHAIN_ID_GROWFITTER_MAINNET_7084 = 7084;
export const CHAIN_ID_VRCN_7131 = 7131;
export const CHAIN_ID_CARRCHAIN_7667 = 7667;
export const CHAIN_ID_PTB_7820 = 7820;
export const CHAIN_ID_PCN_7890 = 7890;
export const CHAIN_ID_BMN_8006 = 8006;
export const CHAIN_ID_LERAX_8125 = 8125;
export const CHAIN_ID_SVM_TESTNET_8163 = 8163;
export const CHAIN_ID_FORKNET_8338 = 8338;
export const CHAIN_ID_ACN_8700 = 8700;
export const CHAIN_ID_EBC_8721 = 8721;
export const CHAIN_ID_WARD_8765 = 8765;
export const CHAIN_ID_TICS_9030 = 9030;
export const CHAIN_ID_KUB_9601 = 9601;
export const CHAIN_ID_PLASMA_9745 = 9745;
export const CHAIN_ID_PLASMA_TESTNET_9746 = 9746;
export const CHAIN_ID_PLASMA_DEVNET_9747 = 9747;
export const CHAIN_ID_ETHW_10001 = 10001;
export const CHAIN_ID_GATELAYER_10088 = 10088;
export const CHAIN_ID_OZONE_10120 = 10120;
export const CHAIN_ID_OZONE_10121 = 10121;
export const CHAIN_ID_MOVA_10323 = 10323;
export const CHAIN_ID_KUDORA_12000 = 12000;
export const CHAIN_ID_ELA_12343 = 12343;
export const CHAIN_ID_LIBERLAND_TESTNET_12865 = 12865;
export const CHAIN_ID_BRIDGELESS_13441 = 13441;
export const CHAIN_ID_INTUITION_TESTNET_13579 = 13579;
export const CHAIN_ID_SONIC_TESTNET_14601 = 14601;
export const CHAIN_ID_QUAIT_15000 = 15000;
export const CHAIN_ID__0G_GALILEO_16601 = 16601;
export const CHAIN_ID__0G_16661 = 16661;
export const CHAIN_ID_INCENTIV_24101 = 24101;
export const CHAIN_ID_TCENT_28802 = 28802;
export const CHAIN_ID_PAIX_32380 = 32380;
export const CHAIN_ID_ZIL_32769 = 32769;
export const CHAIN_ID_ZIL_TESTNET_33101 = 33101;
export const CHAIN_ID_ZQ2_DEVNET_33469 = 33469;
export const CHAIN_ID_ABCORE_36888 = 36888;
export const CHAIN_ID_WEICHAIN_37771 = 37771;
export const CHAIN_ID_ROOTVX_41295 = 41295;
export const CHAIN_ID_RISA_51014 = 51014;
export const CHAIN_ID_LAZAI_52924 = 52924;
export const CHAIN_ID_MOVA_61900 = 61900;
export const CHAIN_ID_OMACHAIN_TESTNET_66238 = 66238;
export const CHAIN_ID_CARRCHAIN_76672 = 76672;
export const CHAIN_ID_ONYX_80888 = 80888;
export const CHAIN_ID_CODEX_81224 = 81224;
export const CHAIN_ID_CHILIZ_88888 = 88888;
export const CHAIN_ID_APAW_90025 = 90025;
export const CHAIN_ID_WATR_TESTNET_92870 = 92870;
export const CHAIN_ID_PEPU_97741 = 97741;
export const CHAIN_ID_CTC_102030 = 102030;
export const CHAIN_ID_CTCTEST_102031 = 102031;
export const CHAIN_ID_CTCDEV_102032 = 102032;
export const CHAIN_ID_MITOSIS_124816 = 124816;
export const CHAIN_ID_FUEL_SEPOLIA_129514 = 129514;
export const CHAIN_ID_ARIA_134235 = 134235;
export const CHAIN_ID_KASPLEX_167012 = 167012;
export const CHAIN_ID_LIT_175200 = 175200;
export const CHAIN_ID_HPP_SEPOLIA_181228 = 181228;
export const CHAIN_ID_GOMCHAIN_MAINNET_190278 = 190278;
export const CHAIN_ID_HPP_MAINNET_190415 = 190415;
export const CHAIN_ID_EADX_198724 = 198724;
export const CHAIN_ID_NOS_200024 = 200024;
export const CHAIN_ID_PROPULENCE_TESTNET_202500 = 202500;
export const CHAIN_ID_AUREXT_202506 = 202506;
export const CHAIN_ID_KASPLEX_202555 = 202555;
export const CHAIN_ID_JU_202599 = 202599;
export const CHAIN_ID_JUCHAIN_210000 = 210000;
export const CHAIN_ID_KLT_220312 = 220312;
export const CHAIN_ID_SIVZ_MAINNET_222345 = 222345;
export const CHAIN_ID_MOCAT_222888 = 222888;
export const CHAIN_ID_CODENEKT_MAINNET_235235 = 235235;
export const CHAIN_ID_ULALO_MAINNET_237007 = 237007;
export const CHAIN_ID_KUB_259251 = 259251;
export const CHAIN_ID_T1_299792 = 299792;
export const CHAIN_ID_T1T_299892 = 299892;
export const CHAIN_ID_DCOMM_MAINNET_326663 = 326663;
export const CHAIN_ID_LAX_333222 = 333222;
export const CHAIN_ID_MTX_478549 = 478549;
export const CHAIN_ID_COMMONS_510003 = 510003;
export const CHAIN_ID_TCROSS_612044 = 612044;
export const CHAIN_ID_CROSS_612055 = 612055;
export const CHAIN_ID_GALACTICA_613419 = 613419;
export const CHAIN_ID_MDX_648529 = 648529;
export const CHAIN_ID_PHAROS_TESTNET_688688 = 688688;
export const CHAIN_ID_PHAROS_ATLANTIC_688689 = 688689;
export const CHAIN_ID_GALACTICA_TESTNET_843843 = 843843;
export const CHAIN_ID_HAQQ_TESTETHIQ_853211 = 853211;
export const CHAIN_ID_ROONCHAIN_1314520 = 1314520;
export const CHAIN_ID_XRPLEVM_1440000 = 1440000;
export const CHAIN_ID_ETHEREAL_5064014 = 5064014;
export const CHAIN_ID_LOOT_5151706 = 5151706;
export const CHAIN_ID_JMDT_7000700 = 7000700;
export const CHAIN_ID_VPC_8678671 = 8678671;
export const CHAIN_ID_CELO_SEP_11142220 = 11142220;
export const CHAIN_ID_ROONCHAIN_13145201 = 13145201;
export const CHAIN_ID_ETHEREAL_TESTNET_0_13374202 = 13374202;
export const CHAIN_ID_SIS_13863860 = 13863860;
export const CHAIN_ID_UNP_47382916 = 47382916;
export const CHAIN_ID_AUT_65000000 = 65000000;
export const CHAIN_ID_AUT_BAKERLOO_65010004 = 65010004;
export const CHAIN_ID_SOVRA_65536001 = 65536001;
export const CHAIN_ID_ISTCHAIN_MAINNET_286022981 = 286022981;
export const CHAIN_ID_DNACHAIN_MAINNET_287022981 = 287022981;
export const CHAIN_ID_SLCCHAIN_MAINNET_288022981 = 288022981;
export const CHAIN_ID_SOPHON_TESTNET_531050204 = 531050204;
export const CHAIN_ID_ZEN_845320009 = 845320009;
export const CHAIN_ID_RARI_1380012617 = 1380012617;
export const CHAIN_ID_LUMIA_BEAM_TESTNET_2030232745 = 2030232745;
export const CHAIN_ID_GXY_420420420420 = 420420420420;

export const quai_9: Chain = {
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

export const flr_14: Chain = {
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

export const nomina_166: Chain = {
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

export const watr_mainnet_192: Chain = {
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

export const tacchain_239: Chain = {
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

export const kss_347: Chain = {
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

export const areum_463: Chain = {
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

export const lcai_504: Chain = {
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

export const syndicate_510: Chain = {
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

export const capy_586: Chain = {
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

export const jasmy_681: Chain = {
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

export const uniocean_684: Chain = {
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

export const capx_testnet_756: Chain = {
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

export const capx_757: Chain = {
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

export const binaryholdings_mainnet_836: Chain = {
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

export const AMN_870: Chain = {
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

export const stable_988: Chain = {
  "name": "Stable Mainnet",
  "chain": "stable",
  "rpc": [
    "https://rpc.stable.xyz"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "gasUSDT",
    "symbol": "gasUSDT",
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

export const hyper_evm_999: Chain = {
  "name": "HyperEVM",
  "chain": "HYPE",
  "icon": "hyperliquid",
  "rpc": [
    "https://rpc.hyperliquid.xyz/evm",
    "https://rpc.hypurrscan.io",
    "https://hyperliquid-json-rpc.stakely.io",
    "https://hyperliquid.drpc.org",
    "wss://hyperliquid.drpc.org",
    "https://rpc.hyperlend.finance"
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
      "name": "Purrsec",
      "url": "https://purrsec.com/"
    }
  ]
};

export const bdag_1043: Chain = {
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

export const realchain_1098: Chain = {
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

export const ecm_1124: Chain = {
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

export const taker_1125: Chain = {
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

export const intuition_mainnet_1155: Chain = {
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

export const fitochain_1233: Chain = {
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

export const vfl_1408: Chain = {
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

export const tvfl_1409: Chain = {
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

export const injective_testnet_1439: Chain = {
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

export const TREX_1628: Chain = {
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

export const injective_1776: Chain = {
  "name": "Injective",
  "chain": "Injective",
  "icon": "injective",
  "rpc": [
    "https://sentry.evm-rpc.injective.network",
    "wss://sentry.evm-ws.injective.network",
    "https://injectiveevm-rpc.polkachu.com",
    "wss://injectiveevm-ws.polkachu.com"
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

export const epix_1916: Chain = {
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

export const QIEV3_1990: Chain = {
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

export const ronin_2020: Chain = {
  "name": "Ronin",
  "chain": "RON",
  "icon": "ronin",
  "rpc": [
    "https://api.roninchain.com/rpc",
    "https://api-gateway.skymavis.com/rpc?apikey=9aqYLBbxSC6LROynQJBvKkEIsioqwHmr",
    "https://ronin.lgns.net/rpc",
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
      "url": "https://app.roninchain.com/"
    }
  ]
};

export const erol_2027: Chain = {
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

export const realchaintest_2098: Chain = {
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

export const IBVM_2105: Chain = {
  "name": "IBVM Mainnet",
  "chain": "IBVM Mainnet",
  "icon": "ibvm",
  "rpc": [
    "https://rpc-mainnet.ibvm.io/"
  ],
  "nativeCurrency": {
    "name": "IBVM Bitcoin",
    "symbol": "BTC",
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

export const IBVMT_2107: Chain = {
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
    "symbol": "BTC",
    "decimals": 18
  },
  "infoURL": "https://ibvm.io/",
  "shortName": "IBVMT",
  "chainId": 2107,
  "networkId": 2107,
  "explorers": [
    {
      "name": "IBVM Testnet explorer",
      "url": "https://testnet-explorer.ibvm.io",
      "standard": "EIP3091"
    }
  ],
  "status": "active"
};

export const stable_2201: Chain = {
  "name": "Stable Testnet",
  "chain": "stabletestnet_2201-1",
  "rpc": [
    "https://stable-jsonrpc.testnet.chain0.dev"
  ],
  "icon": "stable",
  "faucets": [
    "https://demo.testnet.chain0.dev/faucet"
  ],
  "nativeCurrency": {
    "name": "USDT",
    "symbol": "USDT",
    "decimals": 18
  },
  "features": [
    {
      "name": "EIP1559"
    }
  ],
  "infoURL": "https://docs.partners.stable.xyz/testnet/testnet-information",
  "shortName": "stable",
  "chainId": 2201,
  "networkId": 2201,
  "explorers": [
    {
      "name": "Stable Explorer",
      "url": "https://stable-explorer.testnet.chain0.dev",
      "standard": "EIP3091"
    }
  ]
};

export const moca_2288: Chain = {
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

export const besc_2372: Chain = {
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

export const spld_2691: Chain = {
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

export const spldt_2692: Chain = {
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

export const alpen_2892: Chain = {
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

export const svm_3109: Chain = {
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

export const haust_network_3864: Chain = {
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

export const gan_4048: Chain = {
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

export const hashfire_4227: Chain = {
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

export const SC_4509: Chain = {
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

export const prodao_4936: Chain = {
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

export const Somnia_5031: Chain = {
  "name": "Somnia Mainnet",
  "chain": "SOMNIA",
  "rpc": [
    "https://api.infra.mainnet.somnia.network",
    "https://somnia-json-rpc.stakely.io"
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

export const mocat_5151: Chain = {
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

export const YeYing_5432: Chain = {
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

export const dukong_5887: Chain = {
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

export const Growfitter_mainnet_7084: Chain = {
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

export const vrcn_7131: Chain = {
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

export const carrchain_7667: Chain = {
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

export const ptb_7820: Chain = {
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

export const pcn_7890: Chain = {
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
  "shortName": "pcn",
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

export const bmn_8006: Chain = {
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

export const lerax_8125: Chain = {
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

export const svm_testnet_8163: Chain = {
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

export const forknet_8338: Chain = {
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

export const ACN_8700: Chain = {
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

export const ebc_8721: Chain = {
  "name": "EB-Chain",
  "chain": "EBC",
  "rpc": [
    "https://rpc.ebcscan.net"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "EBC Token",
    "symbol": "EBC",
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
  "infoURL": "https://ebcscan.net",
  "shortName": "ebc",
  "chainId": 8721,
  "networkId": 8721,
  "icon": "ebc",
  "explorers": [
    {
      "name": "EBC Scan",
      "url": "https://ebcscan.net",
      "icon": "ebc",
      "standard": "EIP3091"
    }
  ]
};

export const ward_8765: Chain = {
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

export const TICS_9030: Chain = {
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

export const kub_9601: Chain = {
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

export const plasma_9745: Chain = {
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

export const plasma_testnet_9746: Chain = {
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

export const plasma_devnet_9747: Chain = {
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

export const ethw_10001: Chain = {
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

export const GateLayer_10088: Chain = {
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

export const ozone_10120: Chain = {
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

export const ozone_10121: Chain = {
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

export const mova_10323: Chain = {
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

export const kudora_12000: Chain = {
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

export const ela_12343: Chain = {
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

export const liberland_testnet_12865: Chain = {
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

export const bridgeless_13441: Chain = {
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

export const intuition_testnet_13579: Chain = {
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

export const sonic_testnet_14601: Chain = {
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

export const quait_15000: Chain = {
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

export const _0g_galileo_16601: Chain = {
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

export const _0g_16661: Chain = {
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

export const incentiv_24101: Chain = {
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

export const tcent_28802: Chain = {
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

export const paix_32380: Chain = {
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

export const zil_32769: Chain = {
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

export const zil_testnet_33101: Chain = {
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

export const zq2_devnet_33469: Chain = {
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

export const abcore_36888: Chain = {
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

export const weichain_37771: Chain = {
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

export const rootVX_41295: Chain = {
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

export const risa_51014: Chain = {
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

export const lazai_52924: Chain = {
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

export const mova_61900: Chain = {
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

export const omachain_testnet_66238: Chain = {
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

export const carrchain_76672: Chain = {
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

export const onyx_80888: Chain = {
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

export const codex_81224: Chain = {
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

export const chiliz_88888: Chain = {
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

export const apaw_90025: Chain = {
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

export const watr_testnet_92870: Chain = {
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

export const pepu_97741: Chain = {
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

export const ctc_102030: Chain = {
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

export const ctctest_102031: Chain = {
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

export const ctcdev_102032: Chain = {
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

export const mitosis_124816: Chain = {
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

export const fuel_sepolia_129514: Chain = {
  "name": "Fuel Sepolia Testnet",
  "chain": "ETH",
  "icon": "fuel",
  "rpc": [
    "https://fuel-testnet.zappayment.org"
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
      "url": "https://app-testnet.fuel.network",
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

export const aria_134235: Chain = {
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

export const kasplex_167012: Chain = {
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

export const lit_175200: Chain = {
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

export const hpp_sepolia_181228: Chain = {
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

export const gomchain_mainnet_190278: Chain = {
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

export const hpp_mainnet_190415: Chain = {
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

export const eadx_198724: Chain = {
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

export const nos_200024: Chain = {
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

export const Propulence_testnet_202500: Chain = {
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

export const aurext_202506: Chain = {
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

export const kasplex_202555: Chain = {
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

export const ju_202599: Chain = {
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

export const juchain_210000: Chain = {
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

export const klt_220312: Chain = {
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

export const sivz_mainnet_222345: Chain = {
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

export const mocat_222888: Chain = {
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

export const CodeNekt_mainnet_235235: Chain = {
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

export const ulalo_mainnet_237007: Chain = {
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

export const kub_259251: Chain = {
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

export const t1_299792: Chain = {
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

export const t1t_299892: Chain = {
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

export const DComm_mainnet_326663: Chain = {
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

export const lax_333222: Chain = {
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

export const mtx_478549: Chain = {
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

export const commons_510003: Chain = {
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

export const tcross_612044: Chain = {
  "name": "CROSS Testnet",
  "chain": "TCROSS",
  "rpc": [
    "https://testnet.crosstoken.io:22001",
    "wss://testnet.crosstoken.io:32001"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "TestnetCROSS",
    "symbol": "tCROSS",
    "decimals": 18
  },
  "infoURL": "https://to.nexus",
  "shortName": "tcross",
  "chainId": 612044,
  "networkId": 612044,
  "icon": "cross",
  "slip44": 1,
  "explorers": [
    {
      "name": "CROSS Testnet Explorer",
      "url": "https://testnet.crossscan.io",
      "icon": "cross",
      "standard": "EIP3091"
    }
  ]
};

export const cross_612055: Chain = {
  "name": "CROSS Mainnet",
  "chain": "CROSS",
  "rpc": [
    "https://mainnet.crosstoken.io:22001",
    "wss://mainnet.crosstoken.io:32001"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "CROSS",
    "symbol": "CROSS",
    "decimals": 18
  },
  "infoURL": "https://to.nexus",
  "shortName": "cross",
  "chainId": 612055,
  "networkId": 612055,
  "icon": "cross",
  "slip44": 1100,
  "explorers": [
    {
      "name": "CROSS Explorer",
      "url": "https://www.crossscan.io",
      "icon": "cross",
      "standard": "EIP3091"
    }
  ]
};

export const galactica_613419: Chain = {
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

export const mdx_648529: Chain = {
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

export const pharos_testnet_688688: Chain = {
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

export const pharos_atlantic_688689: Chain = {
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

export const galactica_testnet_843843: Chain = {
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

export const haqq_testethiq_853211: Chain = {
  "name": "HAQQ Testethiq (L2 Sepolia Testnet)",
  "chain": "ETH",
  "rpc": [
    "https://rpc.testethiq.haqq.network",
    "wss://rpc.testethiq.haqq.network"
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
  "infoURL": "https://www.haqq.network",
  "shortName": "haqq-testethiq",
  "chainId": 853211,
  "networkId": 853211,
  "testnet": true,
  "icon": "haqq",
  "explorers": [
    {
      "name": "HAQQ Testethiq Blockscout",
      "url": "https://explorer.testethiq.haqq.network",
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

export const roonchain_1314520: Chain = {
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

export const xrplevm_1440000: Chain = {
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

export const ethereal_5064014: Chain = {
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

export const loot_5151706: Chain = {
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

export const jmdt_7000700: Chain = {
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

export const vpc_8678671: Chain = {
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

export const celo_sep_11142220: Chain = {
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

export const roonchain_13145201: Chain = {
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

export const ethereal_testnet_0_13374202: Chain = {
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

export const sis_13863860: Chain = {
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

export const unp_47382916: Chain = {
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

export const aut_65000000: Chain = {
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

export const aut_bakerloo_65010004: Chain = {
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

export const sovra_65536001: Chain = {
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

export const istchain_mainnet_286022981: Chain = {
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

export const dnachain_mainnet_287022981: Chain = {
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

export const slcchain_mainnet_288022981: Chain = {
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

export const sophon_testnet_531050204: Chain = {
  "name": "Sophon zkSync-OS Testnet",
  "chain": "Sophon",
  "rpc": [
    "https://zksync-os-testnet-sophon.zksync.dev/"
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
  "shortName": "sophon-testnet",
  "chainId": 531050204,
  "networkId": 531050204,
  "explorers": [
    {
      "name": "Sophon zkSync Testnet Explorer",
      "url": "https://block-explorer.zksync-os-testnet-sophon.zksync.dev/",
      "standard": "EIP3091"
    }
  ]
};

export const zen_845320009: Chain = {
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

export const rari_1380012617: Chain = {
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

export const lumia_beam_testnet_2030232745: Chain = {
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

export const gxy_420420420420: Chain = {
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

export const allChains: Chain[] = [
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
];

export function getChainById(chainId: number): Chain | undefined {
  return allChains.find((chain) => chain.chainId === chainId);
}

export const chainById: Record<number, Chain> = Object.fromEntries(
  allChains.map((chain) => [chain.chainId, chain])
);