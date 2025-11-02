// This file is auto-generated from DefiLlama/chainlist
// Do not edit manually - run `bun run generate` to regenerate

package chains

type NativeCurrency struct {
	Name     string `json:"name"`
	Symbol   string `json:"symbol"`
	Decimals uint8  `json:"decimals"`
}

type Explorer struct {
	Name     string  `json:"name"`
	URL      string  `json:"url"`
	Standard *string `json:"standard,omitempty"`
}

type Chain struct {
	Name           string           `json:"name"`
	Chain          string           `json:"chain"`
	ChainID        uint64           `json:"chainId"`
	NetworkID      uint64           `json:"networkId"`
	ShortName      string           `json:"shortName"`
	RPC            []string         `json:"rpc"`
	NativeCurrency NativeCurrency   `json:"nativeCurrency"`
	InfoURL        *string          `json:"infoURL,omitempty"`
	Explorers      []Explorer       `json:"explorers,omitempty"`
}

// Chain IDs
const (
	ChainIDQUAI9 uint64 = 9
	ChainIDFLR14 uint64 = 14
	ChainIDNOMINA166 uint64 = 166
	ChainIDWATR_MAINNET192 uint64 = 192
	ChainIDTACCHAIN239 uint64 = 239
	ChainIDKSS347 uint64 = 347
	ChainIDAREUM463 uint64 = 463
	ChainIDLCAI504 uint64 = 504
	ChainIDSYNDICATE510 uint64 = 510
	ChainIDCAPY586 uint64 = 586
	ChainIDJASMY681 uint64 = 681
	ChainIDUNIOCEAN684 uint64 = 684
	ChainIDCAPX_TESTNET756 uint64 = 756
	ChainIDCAPX757 uint64 = 757
	ChainIDBINARYHOLDINGS_MAINNET836 uint64 = 836
	ChainIDA_M_N870 uint64 = 870
	ChainIDSTABLE988 uint64 = 988
	ChainIDHYPER_EVM999 uint64 = 999
	ChainIDBDAG1043 uint64 = 1043
	ChainIDREALCHAIN1098 uint64 = 1098
	ChainIDECM1124 uint64 = 1124
	ChainIDTAKER1125 uint64 = 1125
	ChainIDINTUITION_MAINNET1155 uint64 = 1155
	ChainIDFITOCHAIN1233 uint64 = 1233
	ChainIDVFL1408 uint64 = 1408
	ChainIDTVFL1409 uint64 = 1409
	ChainIDINJECTIVE_TESTNET1439 uint64 = 1439
	ChainIDT_R_E_X1628 uint64 = 1628
	ChainIDINJECTIVE1776 uint64 = 1776
	ChainIDEPIX1916 uint64 = 1916
	ChainIDQ_I_E_V31990 uint64 = 1990
	ChainIDRONIN2020 uint64 = 2020
	ChainIDEROL2027 uint64 = 2027
	ChainIDREALCHAINTEST2098 uint64 = 2098
	ChainIDI_B_V_M2105 uint64 = 2105
	ChainIDI_B_V_M_T2107 uint64 = 2107
	ChainIDSTABLE2201 uint64 = 2201
	ChainIDMOCA2288 uint64 = 2288
	ChainIDBESC2372 uint64 = 2372
	ChainIDSPLD2691 uint64 = 2691
	ChainIDSPLDT2692 uint64 = 2692
	ChainIDALPEN2892 uint64 = 2892
	ChainIDSVM3109 uint64 = 3109
	ChainIDHAUST_NETWORK3864 uint64 = 3864
	ChainIDGAN4048 uint64 = 4048
	ChainIDHASHFIRE4227 uint64 = 4227
	ChainIDS_C4509 uint64 = 4509
	ChainIDPRODAO4936 uint64 = 4936
	ChainIDSOMNIA5031 uint64 = 5031
	ChainIDMOCAT5151 uint64 = 5151
	ChainIDYE_YING5432 uint64 = 5432
	ChainIDDUKONG5887 uint64 = 5887
	ChainIDGROWFITTER_MAINNET7084 uint64 = 7084
	ChainIDVRCN7131 uint64 = 7131
	ChainIDCARRCHAIN7667 uint64 = 7667
	ChainIDPTB7820 uint64 = 7820
	ChainIDPCN7890 uint64 = 7890
	ChainIDBMN8006 uint64 = 8006
	ChainIDLERAX8125 uint64 = 8125
	ChainIDSVM_TESTNET8163 uint64 = 8163
	ChainIDFORKNET8338 uint64 = 8338
	ChainIDA_C_N8700 uint64 = 8700
	ChainIDEBC8721 uint64 = 8721
	ChainIDWARD8765 uint64 = 8765
	ChainIDT_I_C_S9030 uint64 = 9030
	ChainIDKUB9601 uint64 = 9601
	ChainIDPLASMA9745 uint64 = 9745
	ChainIDPLASMA_TESTNET9746 uint64 = 9746
	ChainIDPLASMA_DEVNET9747 uint64 = 9747
	ChainIDETHW10001 uint64 = 10001
	ChainIDGATE_LAYER10088 uint64 = 10088
	ChainIDOZONE10120 uint64 = 10120
	ChainIDOZONE10121 uint64 = 10121
	ChainIDMOVA10323 uint64 = 10323
	ChainIDKUDORA12000 uint64 = 12000
	ChainIDELA12343 uint64 = 12343
	ChainIDLIBERLAND_TESTNET12865 uint64 = 12865
	ChainIDBRIDGELESS13441 uint64 = 13441
	ChainIDINTUITION_TESTNET13579 uint64 = 13579
	ChainIDSONIC_TESTNET14601 uint64 = 14601
	ChainIDQUAIT15000 uint64 = 15000
	ChainID0G_GALILEO16601 uint64 = 16601
	ChainID0G16661 uint64 = 16661
	ChainIDINCENTIV24101 uint64 = 24101
	ChainIDTCENT28802 uint64 = 28802
	ChainIDPAIX32380 uint64 = 32380
	ChainIDZIL32769 uint64 = 32769
	ChainIDZIL_TESTNET33101 uint64 = 33101
	ChainIDZQ2_DEVNET33469 uint64 = 33469
	ChainIDABCORE36888 uint64 = 36888
	ChainIDWEICHAIN37771 uint64 = 37771
	ChainIDROOT_V_X41295 uint64 = 41295
	ChainIDRISA51014 uint64 = 51014
	ChainIDLAZAI52924 uint64 = 52924
	ChainIDMOVA61900 uint64 = 61900
	ChainIDOMACHAIN_TESTNET66238 uint64 = 66238
	ChainIDCARRCHAIN76672 uint64 = 76672
	ChainIDONYX80888 uint64 = 80888
	ChainIDCODEX81224 uint64 = 81224
	ChainIDCHILIZ88888 uint64 = 88888
	ChainIDAPAW90025 uint64 = 90025
	ChainIDWATR_TESTNET92870 uint64 = 92870
	ChainIDPEPU97741 uint64 = 97741
	ChainIDCTC102030 uint64 = 102030
	ChainIDCTCTEST102031 uint64 = 102031
	ChainIDCTCDEV102032 uint64 = 102032
	ChainIDMITOSIS124816 uint64 = 124816
	ChainIDFUEL_SEPOLIA129514 uint64 = 129514
	ChainIDARIA134235 uint64 = 134235
	ChainIDKASPLEX167012 uint64 = 167012
	ChainIDLIT175200 uint64 = 175200
	ChainIDHPP_SEPOLIA181228 uint64 = 181228
	ChainIDGOMCHAIN_MAINNET190278 uint64 = 190278
	ChainIDHPP_MAINNET190415 uint64 = 190415
	ChainIDEADX198724 uint64 = 198724
	ChainIDNOS200024 uint64 = 200024
	ChainIDPROPULENCE_TESTNET202500 uint64 = 202500
	ChainIDAUREXT202506 uint64 = 202506
	ChainIDKASPLEX202555 uint64 = 202555
	ChainIDJU202599 uint64 = 202599
	ChainIDJUCHAIN210000 uint64 = 210000
	ChainIDKLT220312 uint64 = 220312
	ChainIDSIVZ_MAINNET222345 uint64 = 222345
	ChainIDMOCAT222888 uint64 = 222888
	ChainIDCODE_NEKT_MAINNET235235 uint64 = 235235
	ChainIDULALO_MAINNET237007 uint64 = 237007
	ChainIDKUB259251 uint64 = 259251
	ChainIDT1299792 uint64 = 299792
	ChainIDT1T299892 uint64 = 299892
	ChainIDD_COMM_MAINNET326663 uint64 = 326663
	ChainIDLAX333222 uint64 = 333222
	ChainIDMTX478549 uint64 = 478549
	ChainIDCOMMONS510003 uint64 = 510003
	ChainIDTCROSS612044 uint64 = 612044
	ChainIDCROSS612055 uint64 = 612055
	ChainIDGALACTICA613419 uint64 = 613419
	ChainIDMDX648529 uint64 = 648529
	ChainIDPHAROS_TESTNET688688 uint64 = 688688
	ChainIDPHAROS_ATLANTIC688689 uint64 = 688689
	ChainIDGALACTICA_TESTNET843843 uint64 = 843843
	ChainIDHAQQ_TESTETHIQ853211 uint64 = 853211
	ChainIDROONCHAIN1314520 uint64 = 1314520
	ChainIDXRPLEVM1440000 uint64 = 1440000
	ChainIDETHEREAL5064014 uint64 = 5064014
	ChainIDLOOT5151706 uint64 = 5151706
	ChainIDJMDT7000700 uint64 = 7000700
	ChainIDVPC8678671 uint64 = 8678671
	ChainIDCELO_SEP11142220 uint64 = 11142220
	ChainIDROONCHAIN13145201 uint64 = 13145201
	ChainIDETHEREAL_TESTNET013374202 uint64 = 13374202
	ChainIDSIS13863860 uint64 = 13863860
	ChainIDUNP47382916 uint64 = 47382916
	ChainIDAUT65000000 uint64 = 65000000
	ChainIDAUT_BAKERLOO65010004 uint64 = 65010004
	ChainIDSOVRA65536001 uint64 = 65536001
	ChainIDISTCHAIN_MAINNET286022981 uint64 = 286022981
	ChainIDDNACHAIN_MAINNET287022981 uint64 = 287022981
	ChainIDSLCCHAIN_MAINNET288022981 uint64 = 288022981
	ChainIDSOPHON_TESTNET531050204 uint64 = 531050204
	ChainIDZEN845320009 uint64 = 845320009
	ChainIDRARI1380012617 uint64 = 1380012617
	ChainIDLUMIA_BEAM_TESTNET2030232745 uint64 = 2030232745
	ChainIDGXY420420420420 uint64 = 420420420420
)

// Chain constants
var Quai9 = Chain{
	Name:      "Quai Mainnet",
	Chain:     "QUAI",
	ChainID:   9,
	NetworkID: 9,
	ShortName: "quai",
	RPC: []string{
		"https://rpc.quai.network/cyprus1",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Quai",
		Symbol:   "QUAI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://qu.ai"}[0],
	Explorers: []Explorer{
		{
			Name: "Quaiscan",
			URL:  "https://quaiscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Flr14 = Chain{
	Name:      "Flare Mainnet",
	Chain:     "FLR",
	ChainID:   14,
	NetworkID: 14,
	ShortName: "flr",
	RPC: []string{
		"https://flare-api.flare.network/ext/C/rpc",
		"https://flare.rpc.thirdweb.com",
		"https://flare-bundler.etherspot.io",
		"https://rpc.ankr.com/flare",
		"https://rpc.au.cc/flare",
		"https://flare.enosys.global/ext/C/rpc",
		"https://flare.solidifi.app/ext/C/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Flare",
		Symbol:   "FLR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://flare.network"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://flare-explorer.flare.network",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name: "Routescan",
			URL:  "https://mainnet.flarescan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Nomina166 = Chain{
	Name:      "Nomina Mainnet",
	Chain:     "NOM",
	ChainID:   166,
	NetworkID: 166,
	ShortName: "nomina",
	RPC: []string{
		"https://mainnet.nomina.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "NOM",
		Symbol:   "NOM",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.nomina.io"}[0],
	Explorers: []Explorer{
		{
			Name: "Nomina Explorer",
			URL:  "https://nomscan.io/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var WatrMainnet192 = Chain{
	Name:      "Watr Mainnet",
	Chain:     "WATR",
	ChainID:   192,
	NetworkID: 192,
	ShortName: "watr-mainnet",
	RPC: []string{
		"https://rpc.watr.org/ext/bc/EypLFUSzC2wdbFJovYS3Af1E7ch1DJf7KxKoGR5QFPErxQkG1/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "WAT",
		Symbol:   "WAT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.watr.org"}[0],
	Explorers: []Explorer{
		{
			Name: "Watr Explorer",
			URL:  "https://explorer.watr.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Tacchain239 = Chain{
	Name:      "TAC Mainnet",
	Chain:     "TAC",
	ChainID:   239,
	NetworkID: 239,
	ShortName: "tacchain",
	RPC: []string{
		"https://rpc.tac.build",
		"https://rpc.ankr.com/tac",
		"https://ws.rpc.tac.build",
	},
	NativeCurrency: NativeCurrency{
		Name:     "TAC",
		Symbol:   "TAC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tac.build/"}[0],
	Explorers: []Explorer{
		{
			Name: "TAC Explorer",
			URL:  "https://explorer.tac.build",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name: "Blockscout",
			URL:  "https://tac.blockscout.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Kss347 = Chain{
	Name:      "Kross Network Mainnet",
	Chain:     "KSS",
	ChainID:   347,
	NetworkID: 347,
	ShortName: "kss",
	RPC: []string{
		"https://rpc-v1.kross.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Kross",
		Symbol:   "KSS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://kross.network"}[0],
	Explorers: []Explorer{
		{
			Name: "Kross Network Explorer",
			URL:  "https://explorer.kross.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Areum463 = Chain{
	Name:      "Areum Mainnet",
	Chain:     "AREUM",
	ChainID:   463,
	NetworkID: 463,
	ShortName: "areum",
	RPC: []string{
		"https://mainnet-rpc.areum.network",
		"https://mainnet-rpc2.areum.network",
		"https://mainnet-rpc3.areum.network",
		"https://mainnet-rpc4.areum.network",
		"https://mainnet-rpc5.areum.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Areum",
		Symbol:   "AREA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://areum.network"}[0],
	Explorers: []Explorer{
		{
			Name: "Areum Explorer",
			URL:  "https://explorer.areum.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Lcai504 = Chain{
	Name:      "LightchainAI Testnet",
	Chain:     "LCAI",
	ChainID:   504,
	NetworkID: 504,
	ShortName: "lcai",
	RPC: []string{
		"https://light-testnet-rpc.lightchain.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "LightchainAI",
		Symbol:   "LCAI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://lightchain.ai"}[0],
	Explorers: []Explorer{
		{
			Name: "lightchain explorer",
			URL:  "https://testnet.lightscan.app",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Syndicate510 = Chain{
	Name:      "Syndicate Mainnet",
	Chain:     "Syndicate",
	ChainID:   510,
	NetworkID: 510,
	ShortName: "syndicate",
	RPC: []string{
		"https://rpc.syndicate.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Syndicate",
		Symbol:   "SYND",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://syndicate.io"}[0],
	Explorers: []Explorer{
		{
			Name: "Syndicate Explorer",
			URL:  "https://explorer.syndicate.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Capy586 = Chain{
	Name:      "MarketCapy TestNet 1",
	Chain:     "CAPY",
	ChainID:   586,
	NetworkID: 586,
	ShortName: "capy",
	RPC: []string{
		"https://fraa-flashbox-4646-rpc.a.stagenet.tanssi.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CAPY",
		Symbol:   "CAPY",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://marketcapy.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name: "Capy Explorer",
			URL:  "https://explorer.marketcapy.xyz/",
		},
	},
}

var Jasmy681 = Chain{
	Name:      "JASMY Chain Testnet",
	Chain:     "JASMY",
	ChainID:   681,
	NetworkID: 681,
	ShortName: "jasmy",
	RPC: []string{
		"https://jasmy-chain-testnet.alt.technology",
	},
	NativeCurrency: NativeCurrency{
		Name:     "JasmyCoin",
		Symbol:   "JASMY",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.jasmy.co.jp/en.html"}[0],
	Explorers: []Explorer{
		{
			Name: "JASMY Chain Testnet Explorer",
			URL:  "https://jasmy-chain-testnet-explorer.alt.technology",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Uniocean684 = Chain{
	Name:      "Uniocean Testnet",
	Chain:     "Uniocean",
	ChainID:   684,
	NetworkID: 684,
	ShortName: "uniocean",
	RPC: []string{
		"https://rpc1.testnet.uniocean.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "OCEANX",
		Symbol:   "OCEANX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.uniocean.network"}[0],
	Explorers: []Explorer{
		{
			Name: "Uniocean Explorer",
			URL:  "https://explorer.testnet.uniocean.network",
			Standard: &[]string{"none"}[0],
		},
	},
}

var CapxTestnet756 = Chain{
	Name:      "CAPX Testnet",
	Chain:     "CAPX",
	ChainID:   756,
	NetworkID: 756,
	ShortName: "capx-testnet",
	RPC: []string{
		"https://capx-testnet-c1.rpc.caldera.xyz/http",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CAPX",
		Symbol:   "CAPX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.capx.ai/"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://testnet.capxscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Capx757 = Chain{
	Name:      "CAPX",
	Chain:     "CAPX",
	ChainID:   757,
	NetworkID: 757,
	ShortName: "capx",
	RPC: []string{
		"https://capx-mainnet.calderachain.xyz/http",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CAPX",
		Symbol:   "CAPX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.capx.ai/"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://capxscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var BinaryholdingsMainnet836 = Chain{
	Name:      "BinaryHoldings Mainnet",
	Chain:     "BnryMainnet",
	ChainID:   836,
	NetworkID: 836,
	ShortName: "binaryholdings-mainnet",
	RPC: []string{
		"https://rpc-binaryholdings.cogitus.io/ext/bc/J3MYb3rDARLmB7FrRybinyjKqVTqmerbCr9bAXDatrSaHiLxQ/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BNRY",
		Symbol:   "BNRY",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.thebinaryholdings.com/"}[0],
	Explorers: []Explorer{
		{
			Name: "Binary Explorer",
			URL:  "https://explorer-binaryholdings.cogitus.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var AMN870 = Chain{
	Name:      "Autonomys Mainnet",
	Chain:     "autonomys-mainnet",
	ChainID:   870,
	NetworkID: 870,
	ShortName: "AMN",
	RPC: []string{
		"https://auto-evm.mainnet.autonomys.xyz/ws",
	},
	NativeCurrency: NativeCurrency{
		Name:     "AI3",
		Symbol:   "AI3",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.autonomys.xyz"}[0],
}

var Stable988 = Chain{
	Name:      "Stable Mainnet",
	Chain:     "stable",
	ChainID:   988,
	NetworkID: 988,
	ShortName: "stable",
	RPC: []string{
		"https://rpc.stable.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "gasUSDT",
		Symbol:   "gasUSDT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://stable.xyz"}[0],
	Explorers: []Explorer{
		{
			Name: "stablescan",
			URL:  "https://stablescan.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var HyperEvm999 = Chain{
	Name:      "HyperEVM",
	Chain:     "HYPE",
	ChainID:   999,
	NetworkID: 999,
	ShortName: "hyper_evm",
	RPC: []string{
		"https://rpc.hyperliquid.xyz/evm",
		"https://rpc.hypurrscan.io",
		"https://hyperliquid-json-rpc.stakely.io",
		"https://hyperliquid.drpc.org",
		"https://rpc.hyperlend.finance",
	},
	NativeCurrency: NativeCurrency{
		Name:     "HYPE",
		Symbol:   "HYPE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://hyperfoundation.org/"}[0],
	Explorers: []Explorer{
		{
			Name: "Purrsec",
			URL:  "https://purrsec.com/",
		},
	},
}

var Bdag1043 = Chain{
	Name:      "Awakening Testnet",
	Chain:     "BDAG",
	ChainID:   1043,
	NetworkID: 1043,
	ShortName: "bdag",
	RPC: []string{
		"https://relay.awakening.bdagscan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BlockDAG",
		Symbol:   "BDAG",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.blockdag.network/"}[0],
	Explorers: []Explorer{
		{
			Name: "BlockDAG Explorer",
			URL:  "https://awakening.bdagscan.com/",
		},
	},
}

var Realchain1098 = Chain{
	Name:      "RealChain Mainnet",
	Chain:     "RealChain",
	ChainID:   1098,
	NetworkID: 1098,
	ShortName: "realchain",
	RPC: []string{
		"https://rpc.realchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "RealCoin",
		Symbol:   "R",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.realchain.io/"}[0],
	Explorers: []Explorer{
		{
			Name: "RealChain explorer",
			URL:  "https://scan.realchain.io/",
		},
	},
}

var Ecm1124 = Chain{
	Name:      "ECM Chain Testnet",
	Chain:     "ECM Chain",
	ChainID:   1124,
	NetworkID: 1124,
	ShortName: "ecm",
	RPC: []string{
		"https://rpc.testnet.ecmscan.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ECM",
		Symbol:   "ECM",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ecmcoin.com"}[0],
	Explorers: []Explorer{
		{
			Name: "ecmscan",
			URL:  "https://explorer.testnet.ecmscan.io/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Taker1125 = Chain{
	Name:      "Taker Chain Mainnet",
	Chain:     "Taker",
	ChainID:   1125,
	NetworkID: 1125,
	ShortName: "taker",
	RPC: []string{
		"https://rpc-mainnet.taker.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Taker",
		Symbol:   "TAKER",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.taker.xyz"}[0],
	Explorers: []Explorer{
		{
			Name: "TakerScan",
			URL:  "https://explorer.taker.xyz",
			Standard: &[]string{"none"}[0],
		},
	},
}

var IntuitionMainnet1155 = Chain{
	Name:      "Intuition Mainnet",
	Chain:     "INTUITION",
	ChainID:   1155,
	NetworkID: 1155,
	ShortName: "intuition-mainnet",
	RPC: []string{
		"https://intuition.calderachain.xyz/http",
		"https://rpc.intuition.systems",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Intuition",
		Symbol:   "TRUST",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://intuition.systems"}[0],
	Explorers: []Explorer{
		{
			Name: "Intuition Explorer (Mainnet)",
			URL:  "https://intuition.calderaexplorer.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name: "Intuition Explorer (Mainnet)",
			URL:  "https://explorer.intuition.systems",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Fitochain1233 = Chain{
	Name:      "Fitochain",
	Chain:     "FITO",
	ChainID:   1233,
	NetworkID: 1233,
	ShortName: "fitochain",
	RPC: []string{
		"https://rpc.fitochain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "FITO",
		Symbol:   "FITO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://fitochain.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Fitochain Explorer",
			URL:  "https://explorer.fitochain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Vfl1408 = Chain{
	Name:      "VFlow",
	Chain:     "VFL",
	ChainID:   1408,
	NetworkID: 1408,
	ShortName: "vfl",
	RPC: []string{
		"https://vflow-rpc.zkverify.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "zkVerify",
		Symbol:   "VFY",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://zkverify.io"}[0],
	Explorers: []Explorer{
		{
			Name: "subscan",
			URL:  "https://vflow.subscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Tvfl1409 = Chain{
	Name:      "VFlow Volta Testnet",
	Chain:     "TVFL",
	ChainID:   1409,
	NetworkID: 1409,
	ShortName: "tvfl",
	RPC: []string{
		"https://vflow-volta-rpc.zkverify.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Testnet zkVerify",
		Symbol:   "tVFY",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://zkverify.io"}[0],
	Explorers: []Explorer{
		{
			Name: "subscan",
			URL:  "https://vflow-testnet.subscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var InjectiveTestnet1439 = Chain{
	Name:      "Injective Testnet",
	Chain:     "Injective",
	ChainID:   1439,
	NetworkID: 1439,
	ShortName: "injective-testnet",
	RPC: []string{
		"https://testnet.sentry.chain.json-rpc.injective.network",
		"https://injectiveevm-testnet-rpc.polkachu.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Injective",
		Symbol:   "INJ",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://injective.com"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://testnet.blockscout.injective.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var TREX1628 = Chain{
	Name:      "T-Rex",
	Chain:     "T-Rex",
	ChainID:   1628,
	NetworkID: 1628,
	ShortName: "TREX",
	RPC: []string{
		"https://rpc.trex.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://trex.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name: "T-REX blockchain explorer",
			URL:  "https://explorer.trex.xyz",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Injective1776 = Chain{
	Name:      "Injective",
	Chain:     "Injective",
	ChainID:   1776,
	NetworkID: 1776,
	ShortName: "injective",
	RPC: []string{
		"https://sentry.evm-rpc.injective.network",
		"https://injectiveevm-rpc.polkachu.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Injective",
		Symbol:   "INJ",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://injective.com"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://blockscout.injective.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Epix1916 = Chain{
	Name:      "Epix",
	Chain:     "EPIX",
	ChainID:   1916,
	NetworkID: 1916,
	ShortName: "epix",
	RPC: []string{
		"https://evmrpc.epix.zone/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Epix",
		Symbol:   "EPIX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://epix.zone"}[0],
	Explorers: []Explorer{
		{
			Name: "Epix Explorer",
			URL:  "http://scan.epix.zone/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var QIEV31990 = Chain{
	Name:      "QIEMainnet",
	Chain:     "QIEV3",
	ChainID:   1990,
	NetworkID: 1990,
	ShortName: "QIEV3",
	RPC: []string{
		"https://rpc1mainnet.qie.digital",
		"https://rpc5mainnet.qie.digital",
	},
	NativeCurrency: NativeCurrency{
		Name:     "QIE",
		Symbol:   "QIE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.qie.digital/"}[0],
	Explorers: []Explorer{
		{
			Name: "QIE mainnet explorer",
			URL:  "https://mainnet.qie.digital/",
		},
	},
}

var Ronin2020 = Chain{
	Name:      "Ronin",
	Chain:     "RON",
	ChainID:   2020,
	NetworkID: 2020,
	ShortName: "ronin",
	RPC: []string{
		"https://api.roninchain.com/rpc",
		"https://api-gateway.skymavis.com/rpc?apikey=9aqYLBbxSC6LROynQJBvKkEIsioqwHmr",
		"https://ronin.lgns.net/rpc",
		"https://ronin.drpc.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ronin",
		Symbol:   "RON",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://roninchain.com/"}[0],
	Explorers: []Explorer{
		{
			Name: "Ronin Explorer",
			URL:  "https://app.roninchain.com/",
		},
	},
}

var Erol2027 = Chain{
	Name:      "Martian Chain",
	Chain:     "EROL",
	ChainID:   2027,
	NetworkID: 2027,
	ShortName: "erol",
	RPC: []string{
		"https://martian-rpc1.martianchain.com",
		"https://martian-rpc2.martianchain.com",
		"https://martian-rpc3.martianchain.com",
		"https://martian-rpc4.martianchain.com",
		"https://martian-rpc5.martianchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Erol Musk",
		Symbol:   "EROL",
		Decimals: 18,
	},
	InfoURL: &[]string{"martianchain.com"}[0],
	Explorers: []Explorer{
		{
			Name: "routescan",
			URL:  "https://devnet.routescan.io/?rpc=https://rpc1.martianchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name: "subnets avax",
			URL:  "https://subnets.avax.network/subnets/28aQXYENwytzxEwyYMZDtGjpUmP67eWkyoHdGGyid6gEACeg9x",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name: "ErolExplorer",
			URL:  "https://explorer.martianchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Realchaintest2098 = Chain{
	Name:      "RealChain Testnet",
	Chain:     "RealChainTest",
	ChainID:   2098,
	NetworkID: 2098,
	ShortName: "realchaintest",
	RPC: []string{
		"https://rlc.devlab.vip/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "RealCoinTest",
		Symbol:   "RT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.realchain.io/"}[0],
	Explorers: []Explorer{
		{
			Name: "RealChainTest explorer",
			URL:  "https://rlc.devlab.vip/",
		},
	},
}

var IBVM2105 = Chain{
	Name:      "IBVM Mainnet",
	Chain:     "IBVM Mainnet",
	ChainID:   2105,
	NetworkID: 2105,
	ShortName: "IBVM",
	RPC: []string{
		"https://rpc-mainnet.ibvm.io/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "IBVM Bitcoin",
		Symbol:   "BTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ibvm.io/"}[0],
	Explorers: []Explorer{
		{
			Name: "IBVM explorer",
			URL:  "https://ibvmscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var IBVMT2107 = Chain{
	Name:      "IBVM Testnet",
	Chain:     "IBVM Testnet",
	ChainID:   2107,
	NetworkID: 2107,
	ShortName: "IBVMT",
	RPC: []string{
		"https://rpc-testnet.ibvm.io/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "IBVM Bitcoin",
		Symbol:   "BTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ibvm.io/"}[0],
	Explorers: []Explorer{
		{
			Name: "IBVM Testnet explorer",
			URL:  "https://testnet-explorer.ibvm.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Stable2201 = Chain{
	Name:      "Stable Testnet",
	Chain:     "stabletestnet_2201-1",
	ChainID:   2201,
	NetworkID: 2201,
	ShortName: "stable",
	RPC: []string{
		"https://stable-jsonrpc.testnet.chain0.dev",
	},
	NativeCurrency: NativeCurrency{
		Name:     "USDT",
		Symbol:   "USDT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.partners.stable.xyz/testnet/testnet-information"}[0],
	Explorers: []Explorer{
		{
			Name: "Stable Explorer",
			URL:  "https://stable-explorer.testnet.chain0.dev",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Moca2288 = Chain{
	Name:      "Moca Chain Mainnet",
	Chain:     "Moca Chain",
	ChainID:   2288,
	NetworkID: 2288,
	ShortName: "moca",
	RPC: []string{
		"https://rpc.mocachain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MOCA",
		Symbol:   "MOCA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mocachain.org"}[0],
	Explorers: []Explorer{
		{
			Name: "Moca Chain Scan",
			URL:  "https://scan.mocachain.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Besc2372 = Chain{
	Name:      "BESC HYPERCHAIN",
	Chain:     "BESC",
	ChainID:   2372,
	NetworkID: 2372,
	ShortName: "besc",
	RPC: []string{
		"https://rpc.beschyperchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BESC HyperChain",
		Symbol:   "BESC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://beschyperchain.com"}[0],
	Explorers: []Explorer{
		{
			Name: "BESC Explorer",
			URL:  "https://explorer.beschyperchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Spld2691 = Chain{
	Name:      "Splendor Mainnet",
	Chain:     "SPLENDOR",
	ChainID:   2691,
	NetworkID: 2691,
	ShortName: "spld",
	RPC: []string{
		"https://mainnet-rpc.splendor.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Splendor Token",
		Symbol:   "SPLD",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://splendor.org"}[0],
	Explorers: []Explorer{
		{
			Name: "Splendor Explorer",
			URL:  "https://explorer.splendor.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Spldt2692 = Chain{
	Name:      "Splendor Testnet",
	Chain:     "SPLD-TESTNET",
	ChainID:   2692,
	NetworkID: 2692,
	ShortName: "spldt",
	RPC: []string{
		"https://testnet-rpc.splendor.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Splendor Test Token",
		Symbol:   "SPLDT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://splendor.org"}[0],
	Explorers: []Explorer{
		{
			Name: "Splendor Testnet Explorer",
			URL:  "https://testnet-explorer.splendor.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Alpen2892 = Chain{
	Name:      "Alpen Testnet",
	Chain:     "Alpen",
	ChainID:   2892,
	NetworkID: 2892,
	ShortName: "alpen",
	RPC: []string{
		"https://rpc.testnet.alpenlabs.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Signet BTC",
		Symbol:   "sBTC",
		Decimals: 8,
	},
	Explorers: []Explorer{
		{
			Name: "explorer",
			URL:  "https://explorer.testnet.alpenlabs.io",
		},
	},
}

var Svm3109 = Chain{
	Name:      "SatoshiVM",
	Chain:     "BTC",
	ChainID:   3109,
	NetworkID: 3109,
	ShortName: "svm",
	RPC: []string{
		"https://alpha-rpc-node-http.svmscan.io/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SatoshiVM",
		Symbol:   "BTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.satoshivm.io/"}[0],
	Explorers: []Explorer{
		{
			Name: "Svmscan",
			URL:  "https://svmscan.io/",
		},
	},
}

var HaustNetwork3864 = Chain{
	Name:      "Haust Network",
	Chain:     "HAUST",
	ChainID:   3864,
	NetworkID: 3864,
	ShortName: "haust-network",
	RPC: []string{
		"https://haust-network-rpc.eu-north-2.gateway.fm/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Haust",
		Symbol:   "HAUST",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://haust.network/"}[0],
	Explorers: []Explorer{
		{
			Name: "Haust Network blockchain explorer",
			URL:  "https://haustscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Gan4048 = Chain{
	Name:      "GANchain L1",
	Chain:     "GAN",
	ChainID:   4048,
	NetworkID: 4048,
	ShortName: "gan",
	RPC: []string{
		"https://rpc.gpu.net",
	},
	NativeCurrency: NativeCurrency{
		Name:     "GPUnet",
		Symbol:   "GPU",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://gpu.net"}[0],
	Explorers: []Explorer{
		{
			Name: "ganscan",
			URL:  "https://ganscan.gpu.net",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Hashfire4227 = Chain{
	Name:      "Hashfire Testnet",
	Chain:     "Hashfire Testnet",
	ChainID:   4227,
	NetworkID: 4227,
	ShortName: "hashfire",
	RPC: []string{
		"https://subnets.avax.network/hashfire/testnet/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "HASHD",
		Symbol:   "HASHD",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://hashfire.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name: "Avalanche L1 Explorer",
			URL:  "https://subnets-test.avax.network/hashfire/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var SC4509 = Chain{
	Name:      "Studio Chain",
	Chain:     "SC",
	ChainID:   4509,
	NetworkID: 4509,
	ShortName: "SC",
	RPC: []string{
		"https://studiochain-cf4a1621.calderachain.xyz/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Karrat coin",
		Symbol:   "KARRAT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://studiochain-cf4a1621.hub.caldera.xyz"}[0],
	Explorers: []Explorer{
		{
			Name: "Studio Chain explorer",
			URL:  "https://studiochain-cf4a1621.calderaexplorer.xyz/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Prodao4936 = Chain{
	Name:      "Prodao Mainnet",
	Chain:     "PROD",
	ChainID:   4936,
	NetworkID: 4936,
	ShortName: "prodao",
	RPC: []string{
		"https://rpc.prodao.club",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ProDAO Token",
		Symbol:   "PROD",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://prodao.club"}[0],
	Explorers: []Explorer{
		{
			Name: "ProDAO Explorer",
			URL:  "https://explorer.prodao.club",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Somnia5031 = Chain{
	Name:      "Somnia Mainnet",
	Chain:     "SOMNIA",
	ChainID:   5031,
	NetworkID: 5031,
	ShortName: "Somnia",
	RPC: []string{
		"https://api.infra.mainnet.somnia.network",
		"https://somnia-json-rpc.stakely.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SOMI",
		Symbol:   "SOMI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://somnia.network"}[0],
	Explorers: []Explorer{
		{
			Name: "Somnia Explorer",
			URL:  "https://explorer.somnia.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Mocat5151 = Chain{
	Name:      "Moca Chain Devnet",
	Chain:     "Moca Chain",
	ChainID:   5151,
	NetworkID: 5151,
	ShortName: "mocat",
	RPC: []string{
		"https://devnet-rpc.mocachain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MOCA",
		Symbol:   "MOCA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mocachain.org"}[0],
	Explorers: []Explorer{
		{
			Name: "Moca Chain Scan",
			URL:  "https://devnet-scan.mocachain.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var YeYing5432 = Chain{
	Name:      "YeYing Network",
	Chain:     "YeYing",
	ChainID:   5432,
	NetworkID: 5432,
	ShortName: "YeYing",
	RPC: []string{
		"https://blockchain.yeying.pub",
	},
	NativeCurrency: NativeCurrency{
		Name:     "YeYing Token",
		Symbol:   "YYT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://yeying.pub"}[0],
	Explorers: []Explorer{
		{
			Name: "YeYing Blockscout",
			URL:  "https://blockscout.yeying.pub",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Dukong5887 = Chain{
	Name:      "MANTRACHAIN Testnet",
	Chain:     "Dukong",
	ChainID:   5887,
	NetworkID: 5887,
	ShortName: "dukong",
	RPC: []string{
		"https://evm.dukong.mantrachain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "OM",
		Symbol:   "OM",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mantrachain.io"}[0],
	Explorers: []Explorer{
		{
			Name: "Dukong Explorer",
			URL:  "http://mantrascan.io",
			Standard: &[]string{"none"}[0],
		},
	},
}

var GrowfitterMainnet7084 = Chain{
	Name:      "Growfitter Mainnet",
	Chain:     "Growfitter",
	ChainID:   7084,
	NetworkID: 7084,
	ShortName: "Growfitter-mainnet",
	RPC: []string{
		"https://rpc-mainnet-growfitter-rl.cogitus.io/ext/bc/2PdUCtQocNDvbVWy8ch4PdaicTHA2h5keHLAAPcs9Pr8tYaUg3/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "GFIT",
		Symbol:   "GFIT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.growfitter.com/"}[0],
	Explorers: []Explorer{
		{
			Name: "Growfitter Explorer",
			URL:  "https://explorer-growfitter-mainnet.cogitus.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Vrcn7131 = Chain{
	Name:      "VRCN Chain Mainnet",
	Chain:     "VRCN",
	ChainID:   7131,
	NetworkID: 7131,
	ShortName: "vrcn",
	RPC: []string{
		"https://rpc-mainnet-4.vrcchain.com/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "VRCN Chain",
		Symbol:   "VRCN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://vrccoin.com"}[0],
	Explorers: []Explorer{
		{
			Name: "VRC Explorer",
			URL:  "https://explorer.vrcchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name: "VRCNChain",
			URL:  "https://vrcchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name: "dxbchain",
			URL:  "https://dxb.vrcchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Carrchain7667 = Chain{
	Name:      "CarrChain Mainnet",
	Chain:     "CARR",
	ChainID:   7667,
	NetworkID: 7667,
	ShortName: "carrchain",
	RPC: []string{
		"https://rpc.carrchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CARR",
		Symbol:   "CARR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://carrchain.io"}[0],
	Explorers: []Explorer{
		{
			Name: "CarrScan",
			URL:  "https://carrscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ptb7820 = Chain{
	Name:      "Portal-To-Bitcoin Mainnet",
	Chain:     "PTB",
	ChainID:   7820,
	NetworkID: 7820,
	ShortName: "ptb",
	RPC: []string{
		"https://mainnet.portaltobitcoin.net",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Portal-To-Bitcoin",
		Symbol:   "PTB",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://portaltobitcoin.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Portal-To-Bitcoin Explorer",
			URL:  "https://explorer.portaltobitcoin.net",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Pcn7890 = Chain{
	Name:      "Panchain Mainnet",
	Chain:     "PC",
	ChainID:   7890,
	NetworkID: 7890,
	ShortName: "pcn",
	RPC: []string{
		"https://publicrpc.panchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Pan Coin",
		Symbol:   "PC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://panchain.io"}[0],
	Explorers: []Explorer{
		{
			Name: "Blockscout",
			URL:  "https://scan.panchain.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Bmn8006 = Chain{
	Name:      "BMN Smart Chain",
	Chain:     "BMN",
	ChainID:   8006,
	NetworkID: 8006,
	ShortName: "bmn",
	RPC: []string{
		"https://connect.bmnscan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BMN Coin",
		Symbol:   "BMN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://bmncoin.com"}[0],
	Explorers: []Explorer{
		{
			Name: "bmnscan",
			URL:  "https://bmnscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Lerax8125 = Chain{
	Name:      "Lerax Chain Testnet",
	Chain:     "LERAX",
	ChainID:   8125,
	NetworkID: 8125,
	ShortName: "lerax",
	RPC: []string{
		"https://rpc-testnet-dataseed.lerax.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Lerax",
		Symbol:   "tLRX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://lerax.org/"}[0],
	Explorers: []Explorer{
		{
			Name: "Leraxscan Testnet",
			URL:  "https://testnet.leraxscan.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var SvmTestnet8163 = Chain{
	Name:      "Steem Virtual Machine Testnet",
	Chain:     "SVM",
	ChainID:   8163,
	NetworkID: 8163,
	ShortName: "svm-testnet",
	RPC: []string{
		"https://evmrpc.blazescanner.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "STEEM",
		Symbol:   "STEEM",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://svmscan.blazeapps.org"}[0],
	Explorers: []Explorer{
		{
			Name: "SVM Scan",
			URL:  "https://svmscan.blazeapps.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Forknet8338 = Chain{
	Name:      "Forknet",
	Chain:     "Forknet",
	ChainID:   8338,
	NetworkID: 8338,
	ShortName: "forknet",
	RPC: []string{
		"https://rpc-forknet.t.conduit.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://forknet.io"}[0],
	Explorers: []Explorer{
		{
			Name: "forkscan",
			URL:  "https://forkscan.org",
		},
	},
}

var ACN8700 = Chain{
	Name:      "Autonomys Chronos Testnet",
	Chain:     "Autonomys EVM Chronos",
	ChainID:   8700,
	NetworkID: 8700,
	ShortName: "ACN",
	RPC: []string{
		"https://auto-evm.chronos.autonomys.xyz/ws",
	},
	NativeCurrency: NativeCurrency{
		Name:     "tAI3",
		Symbol:   "tAI3",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.autonomys.xyz"}[0],
	Explorers: []Explorer{
		{
			Name: "Autonomys Chronos Testnet Explorer",
			URL:  "https://explorer.auto-evm.chronos.autonomys.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ebc8721 = Chain{
	Name:      "EB-Chain",
	Chain:     "EBC",
	ChainID:   8721,
	NetworkID: 8721,
	ShortName: "ebc",
	RPC: []string{
		"https://rpc.ebcscan.net",
	},
	NativeCurrency: NativeCurrency{
		Name:     "EBC Token",
		Symbol:   "EBC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ebcscan.net"}[0],
	Explorers: []Explorer{
		{
			Name: "EBC Scan",
			URL:  "https://ebcscan.net",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ward8765 = Chain{
	Name:      "Warden",
	Chain:     "WARD",
	ChainID:   8765,
	NetworkID: 8765,
	ShortName: "ward",
	RPC: []string{
		"https://evm.wardenprotocol.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "WARD",
		Symbol:   "WARD",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://wardenprotocol.org/"}[0],
	Explorers: []Explorer{
		{
			Name: "Warden Labs",
			URL:  "https://explorer.wardenprotocol.org",
		},
	},
}

var TICS9030 = Chain{
	Name:      "Qubetics Mainnet",
	Chain:     "QUBETICS",
	ChainID:   9030,
	NetworkID: 9030,
	ShortName: "TICS",
	RPC: []string{
		"https://rpc.qubetics.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "TICS",
		Symbol:   "TICS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.qubetics.com"}[0],
	Explorers: []Explorer{
		{
			Name: "QUBETICS mainnet explorer",
			URL:  "https://ticsscan.com",
		},
	},
}

var Kub9601 = Chain{
	Name:      "KUB Layer 2 Mainnet",
	Chain:     "KUB",
	ChainID:   9601,
	NetworkID: 9601,
	ShortName: "kub",
	RPC: []string{
		"https://kublayer2.kubchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "KUB",
		Symbol:   "KUB",
		Decimals: 18,
	},
	Explorers: []Explorer{
		{
			Name: "KUB Layer 2 Mainnet Explorer",
			URL:  "https://kublayer2.kubscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Plasma9745 = Chain{
	Name:      "Plasma Mainnet",
	Chain:     "Plasma",
	ChainID:   9745,
	NetworkID: 9745,
	ShortName: "plasma",
	RPC: []string{
		"https://rpc.plasma.to",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Plasma",
		Symbol:   "XPL",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://plasma.to"}[0],
	Explorers: []Explorer{
		{
			Name: "Routescan",
			URL:  "https://plasmascan.to",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var PlasmaTestnet9746 = Chain{
	Name:      "Plasma Testnet",
	Chain:     "Plasma",
	ChainID:   9746,
	NetworkID: 9746,
	ShortName: "plasma-testnet",
	RPC: []string{
		"https://testnet-rpc.plasma.to",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Plasma",
		Symbol:   "XPL",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://plasma.to"}[0],
	Explorers: []Explorer{
		{
			Name: "Routescan",
			URL:  "https://testnet.plasmascan.to",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var PlasmaDevnet9747 = Chain{
	Name:      "Plasma Devnet",
	Chain:     "Plasma",
	ChainID:   9747,
	NetworkID: 9747,
	ShortName: "plasma-devnet",
	RPC: []string{
		"https://devnet-rpc.plasma.to",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Plasma",
		Symbol:   "XPL",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://plasma.to"}[0],
}

var Ethw10001 = Chain{
	Name:      "ETHW-mainnet",
	Chain:     "ETHW",
	ChainID:   10001,
	NetworkID: 10001,
	ShortName: "ethw",
	RPC: []string{
		"https://mainnet.ethereumpow.org/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "EthereumPoW",
		Symbol:   "ETHW",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ethereumpow.org/"}[0],
	Explorers: []Explorer{
		{
			Name: "Oklink",
			URL:  "https://www.oklink.com/ethw/",
		},
	},
}

var GateLayer10088 = Chain{
	Name:      "Gate Layer",
	Chain:     "GT",
	ChainID:   10088,
	NetworkID: 10088,
	ShortName: "GateLayer",
	RPC: []string{
		"https://gatelayer-mainnet.gatenode.cc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "GT",
		Symbol:   "GT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://gatechain.io/gatelayer"}[0],
	Explorers: []Explorer{
		{
			Name: "GateLayer",
			URL:  "https://www.gatescan.org/gatelayer",
			Standard: &[]string{"EIP-1559"}[0],
		},
	},
}

var Ozone10120 = Chain{
	Name:      "Ozone Testnet",
	Chain:     "OZONE",
	ChainID:   10120,
	NetworkID: 10120,
	ShortName: "ozone",
	RPC: []string{
		"https://rpc-testnet.ozonescan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "TestOzone",
		Symbol:   "tOZONE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ozonechain.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Ozone Chain Explorer",
			URL:  "https://testnet.ozonescan.com",
		},
	},
}

var Ozone10121 = Chain{
	Name:      "Ozone Mainnet",
	Chain:     "OZONE",
	ChainID:   10121,
	NetworkID: 10121,
	ShortName: "ozone",
	RPC: []string{
		"https://chain.ozonescan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ozone",
		Symbol:   "OZONE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ozonechain.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Ozone Chain Explorer",
			URL:  "https://ozonescan.com",
		},
	},
}

var Mova10323 = Chain{
	Name:      "Mova Beta",
	Chain:     "MOVA",
	ChainID:   10323,
	NetworkID: 10323,
	ShortName: "mova",
	RPC: []string{
		"https://mars.rpc.movachain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MARS Testnet GasCoin",
		Symbol:   "MARS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://movachain.com"}[0],
	Explorers: []Explorer{
		{
			Name: "marsscan",
			URL:  "https://scan.mars.movachain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Kudora12000 = Chain{
	Name:      "Kudora Mainnet",
	Chain:     "KUD",
	ChainID:   12000,
	NetworkID: 12000,
	ShortName: "kudora",
	RPC: []string{
		"https://rpc.kudora.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Kudo",
		Symbol:   "KUD",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://kudora.org/"}[0],
	Explorers: []Explorer{
		{
			Name: "Kudora Explorer",
			URL:  "https://blockscout.kudora.org",
		},
	},
}

var Ela12343 = Chain{
	Name:      "ECO Mainnet",
	Chain:     "ECO",
	ChainID:   12343,
	NetworkID: 12343,
	ShortName: "ela",
	RPC: []string{
		"https://api.elastos.io/eco",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ELA",
		Symbol:   "ELA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://eco.elastos.io/"}[0],
	Explorers: []Explorer{
		{
			Name: "ECO Explorer",
			URL:  "https://eco.elastos.io/",
		},
	},
}

var LiberlandTestnet12865 = Chain{
	Name:      "Liberland testnet",
	Chain:     "LLT",
	ChainID:   12865,
	NetworkID: 12865,
	ShortName: "liberland-testnet",
	RPC: []string{
		"https://testnet.liberland.org:9944",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Liberland Dollar",
		Symbol:   "LDN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://testnet.liberland.org"}[0],
}

var Bridgeless13441 = Chain{
	Name:      "Bridgeless Mainnet",
	Chain:     "BRIDGELESS",
	ChainID:   13441,
	NetworkID: 13441,
	ShortName: "bridgeless",
	RPC: []string{
		"https://eth-rpc.node0.mainnet.bridgeless.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Bridge",
		Symbol:   "BRIDGE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://bridgeless.com"}[0],
	Explorers: []Explorer{
		{
			Name: "bridgeless",
			URL:  "https://explorer.mainnet.bridgeless.com/",
		},
	},
}

var IntuitionTestnet13579 = Chain{
	Name:      "Intuition Testnet",
	Chain:     "INTUITION",
	ChainID:   13579,
	NetworkID: 13579,
	ShortName: "intuition-testnet",
	RPC: []string{
		"https://testnet.rpc.intuition.systems",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Testnet TRUST",
		Symbol:   "TTRUST",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://intuition.systems"}[0],
	Explorers: []Explorer{
		{
			Name: "IntuitionScan (Testnet)",
			URL:  "https://testnet.explorer.intuition.systems",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var SonicTestnet14601 = Chain{
	Name:      "Sonic Testnet",
	Chain:     "sonic-testnet",
	ChainID:   14601,
	NetworkID: 14601,
	ShortName: "sonic-testnet",
	RPC: []string{
		"https://rpc.testnet.soniclabs.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Sonic",
		Symbol:   "S",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://testnet.soniclabs.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Sonic Testnet Explorer",
			URL:  "https://explorer.testnet.soniclabs.com",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Quait15000 = Chain{
	Name:      "Quai Orchard Testnet",
	Chain:     "QUAI",
	ChainID:   15000,
	NetworkID: 15000,
	ShortName: "quait",
	RPC: []string{
		"https://orchard.rpc.quai.network/cyprus1",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Quai",
		Symbol:   "QUAI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://qu.ai"}[0],
	Explorers: []Explorer{
		{
			Name: "Orchard Quaiscan",
			URL:  "https://orchard.quaiscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var _0gGalileo16601 = Chain{
	Name:      "0G-Galileo-Testnet",
	Chain:     "0G",
	ChainID:   16601,
	NetworkID: 16601,
	ShortName: "0g-galileo",
	RPC: []string{
		"https://evmrpc-testnet.0g.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "OG",
		Symbol:   "OG",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://0g.ai"}[0],
	Explorers: []Explorer{
		{
			Name: "0G Chain Explorer",
			URL:  "https://chainscan-galileo.0g.ai",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var _0g16661 = Chain{
	Name:      "0G Mainnet",
	Chain:     "0G",
	ChainID:   16661,
	NetworkID: 16661,
	ShortName: "0g",
	RPC: []string{
		"https://evmrpc.0g.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "0G",
		Symbol:   "0G",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://0g.ai"}[0],
	Explorers: []Explorer{
		{
			Name: "0G Chain Explorer",
			URL:  "https://chainscan.0g.ai",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Incentiv24101 = Chain{
	Name:      "Incentiv",
	Chain:     "Incentiv",
	ChainID:   24101,
	NetworkID: 24101,
	ShortName: "incentiv",
	RPC: []string{
		"https://rpc.incentiv.io",
		"https://rpc-archive.incentiv.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CENT",
		Symbol:   "CENT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://incentiv.io"}[0],
	Explorers: []Explorer{
		{
			Name: "Incentiv Mainnet Explorer",
			URL:  "https://explorer.incentiv.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Tcent28802 = Chain{
	Name:      "Incentiv Testnet",
	Chain:     "TCENT",
	ChainID:   28802,
	NetworkID: 28802,
	ShortName: "tcent",
	RPC: []string{
		"https://rpc3.testnet.incentiv.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Testnet Incentiv Coin",
		Symbol:   "TCENT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://incentiv.net"}[0],
	Explorers: []Explorer{
		{
			Name: "Incentiv Testnet Explorer",
			URL:  "https://explorer-testnet.incentiv.io/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Paix32380 = Chain{
	Name:      "PAIX Development Network",
	Chain:     "PAIX",
	ChainID:   32380,
	NetworkID: 32380,
	ShortName: "paix",
	RPC: []string{
		"https://devnet.ppaix.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "PAIX Token",
		Symbol:   "PAIX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ppaix.com"}[0],
	Explorers: []Explorer{
		{
			Name: "PAIX BlockScout",
			URL:  "https://blockscout.ppaix.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Zil32769 = Chain{
	Name:      "Zilliqa 2",
	Chain:     "ZIL",
	ChainID:   32769,
	NetworkID: 32769,
	ShortName: "zil",
	RPC: []string{
		"https://api.zilliqa.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Zilliqa",
		Symbol:   "ZIL",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.zilliqa.com/"}[0],
	Explorers: []Explorer{
		{
			Name: "Zilliqa 2 Mainnet Explorer",
			URL:  "https://zilliqa.blockscout.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var ZilTestnet33101 = Chain{
	Name:      "Zilliqa 2 Testnet",
	Chain:     "ZIL",
	ChainID:   33101,
	NetworkID: 33101,
	ShortName: "zil-testnet",
	RPC: []string{
		"https://api.testnet.zilliqa.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Zilliqa",
		Symbol:   "ZIL",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.zilliqa.com/"}[0],
	Explorers: []Explorer{
		{
			Name: "Zilliqa 2 Testnet Explorer",
			URL:  "https://testnet.zilliqa.blockscout.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Zq2Devnet33469 = Chain{
	Name:      "Zilliqa 2 Devnet",
	Chain:     "ZIL",
	ChainID:   33469,
	NetworkID: 33469,
	ShortName: "zq2-devnet",
	RPC: []string{
		"https://api.zq2-devnet.zilliqa.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Zilliqa",
		Symbol:   "ZIL",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.zilliqa.com/"}[0],
	Explorers: []Explorer{
		{
			Name: "Zilliqa 2 Devnet Explorer",
			URL:  "https://otterscan.zq2-devnet.zilliqa.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Abcore36888 = Chain{
	Name:      "AB Core Mainnet",
	Chain:     "AB",
	ChainID:   36888,
	NetworkID: 36888,
	ShortName: "abcore",
	RPC: []string{
		"https://rpc.core.ab.org",
		"https://rpc1.core.ab.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "AB",
		Symbol:   "AB",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ab.org"}[0],
	Explorers: []Explorer{
		{
			Name: "AB Core Explorer",
			URL:  "https://explorer.core.ab.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Weichain37771 = Chain{
	Name:      "Weichain net",
	Chain:     "Weichain",
	ChainID:   37771,
	NetworkID: 37771,
	ShortName: "weichain",
	RPC: []string{
		"http://1.15.137.12:8545",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Weichain",
		Symbol:   "WeiC",
		Decimals: 18,
	},
	Explorers: []Explorer{
		{
			Name: "weichainscan",
			URL:  "http://1.15.137.12:5200/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var RootVX41295 = Chain{
	Name:      "rootVX testnet",
	Chain:     "rootVX",
	ChainID:   41295,
	NetworkID: 42079,
	ShortName: "rootVX",
	RPC: []string{
		"http://34.60.253.118:9545",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://rootvx.com"}[0],
	Explorers: []Explorer{
		{
			Name: "rootVXscan",
			URL:  "https://explorer.rootvx.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Risa51014 = Chain{
	Name:      "Risa Testnet",
	Chain:     "Risa Testnet",
	ChainID:   51014,
	NetworkID: 51014,
	ShortName: "risa",
	RPC: []string{
		"https://rpc.testnet.syndicate.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Testnet Syndicate",
		Symbol:   "SYND",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://syndicate.io"}[0],
	Explorers: []Explorer{
		{
			Name: "Risa Testnet Explorer",
			URL:  "https://explorer.testnet.syndicate.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Lazai52924 = Chain{
	Name:      "LazAI Mainnet",
	Chain:     "LazAI",
	ChainID:   52924,
	NetworkID: 52924,
	ShortName: "lazai",
	RPC: []string{
		"https://mainnet.lazai.network/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "METIS Token",
		Symbol:   "METIS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://lazai.network"}[0],
	Explorers: []Explorer{
		{
			Name: "LazAI Mainnet Explorer",
			URL:  "https://explorer.mainnet.lazai.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Mova61900 = Chain{
	Name:      "Mova Mainnet",
	Chain:     "MOVA",
	ChainID:   61900,
	NetworkID: 61900,
	ShortName: "mova",
	RPC: []string{
		"https://rpc.movachain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MOVA Mainnet GasCoin",
		Symbol:   "MOVA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://movachain.com"}[0],
	Explorers: []Explorer{
		{
			Name: "movascan",
			URL:  "https://scan.movachain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var OmachainTestnet66238 = Chain{
	Name:      "OMAChain Testnet",
	Chain:     "OMAChain",
	ChainID:   66238,
	NetworkID: 66238,
	ShortName: "omachain-testnet",
	RPC: []string{
		"https://rpc.testnet.chain.oma3.org/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "OMA",
		Symbol:   "OMA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.oma3.org/"}[0],
	Explorers: []Explorer{
		{
			Name: "OMAChain Testnet Explorer",
			URL:  "https://explorer.testnet.chain.oma3.org/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Carrchain76672 = Chain{
	Name:      "CarrChain Testnet",
	Chain:     "CARR",
	ChainID:   76672,
	NetworkID: 76672,
	ShortName: "carrchain",
	RPC: []string{
		"https://rpc-testnet.carrchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CARR",
		Symbol:   "CARR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://carrchain.io"}[0],
	Explorers: []Explorer{
		{
			Name: "CarrScan",
			URL:  "https://testnet.carrscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Onyx80888 = Chain{
	Name:      "Onyx",
	Chain:     "onyx",
	ChainID:   80888,
	NetworkID: 80888,
	ShortName: "onyx",
	RPC: []string{
		"https://rpc.onyx.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Onyxcoin",
		Symbol:   "XCN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://onyx.org"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://explorer.onyx.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Codex81224 = Chain{
	Name:      "Codex Mainnet",
	Chain:     "CODEX",
	ChainID:   81224,
	NetworkID: 81224,
	ShortName: "codex",
	RPC: []string{
		"https://rpc.codex.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.codex.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://explorer.codex.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Chiliz88888 = Chain{
	Name:      "Chiliz Chain",
	Chain:     "CHZ",
	ChainID:   88888,
	NetworkID: 88888,
	ShortName: "chiliz",
	RPC: []string{
		"https://rpc.chiliz.com",
		"https://rpc.ankr.com/chiliz/",
		"https://chiliz.publicnode.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Chiliz",
		Symbol:   "CHZ",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.chiliz.com/"}[0],
	Explorers: []Explorer{
		{
			Name: "Chiliscan",
			URL:  "https://chiliscan.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name: "Scan Chiliz",
			URL:  "https://scan.chiliz.com",
		},
	},
}

var Apaw90025 = Chain{
	Name:      "AIPaw Mainnet",
	Chain:     "aipaw",
	ChainID:   90025,
	NetworkID: 90025,
	ShortName: "apaw",
	RPC: []string{
		"https://rpc.aipaw.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Aipaw",
		Symbol:   "AIPAW",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://aipaw.top"}[0],
}

var WatrTestnet92870 = Chain{
	Name:      "Watr Testnet",
	Chain:     "WATR",
	ChainID:   92870,
	NetworkID: 92870,
	ShortName: "watr-testnet",
	RPC: []string{
		"https://rpc.testnet.watr.org/ext/bc/2ZZiR6T2sJjebQguABb53rRpzme8zfK4R9zt5vMM8MX1oUm3g/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Watr",
		Symbol:   "WATR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.watr.org"}[0],
	Explorers: []Explorer{
		{
			Name: "Watr Explorer",
			URL:  "https://explorer.testnet.watr.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Pepu97741 = Chain{
	Name:      "PEPE Unchained",
	Chain:     "PEPU",
	ChainID:   97741,
	NetworkID: 97741,
	ShortName: "pepu",
	RPC: []string{
		"https://rpc-pepu-v2-mainnet-0.t.conduit.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Pepe Unchained",
		Symbol:   "PEPU",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://pepeunchained.com/"}[0],
	Explorers: []Explorer{
		{
			Name: "PEPUScan",
			URL:  "https://pepuscan.com/",
		},
	},
}

var Ctc102030 = Chain{
	Name:      "Creditcoin",
	Chain:     "CTC",
	ChainID:   102030,
	NetworkID: 102030,
	ShortName: "ctc",
	RPC: []string{
		"https://mainnet3.creditcoin.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CTC",
		Symbol:   "CTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://creditcoin.org"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://creditcoin.blockscout.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ctctest102031 = Chain{
	Name:      "Creditcoin Testnet",
	Chain:     "CTC",
	ChainID:   102031,
	NetworkID: 102031,
	ShortName: "ctctest",
	RPC: []string{
		"https://rpc.cc3-testnet.creditcoin.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Testnet CTC",
		Symbol:   "tCTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://creditcoin.org"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://creditcoin-testnet.blockscout.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ctcdev102032 = Chain{
	Name:      "Creditcoin Devnet",
	Chain:     "CTC",
	ChainID:   102032,
	NetworkID: 102032,
	ShortName: "ctcdev",
	RPC: []string{
		"https://rpc.cc3-devnet.creditcoin.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Devnet CTC",
		Symbol:   "devCTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://creditcoin.org"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://creditcoin-devnet.blockscout.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Mitosis124816 = Chain{
	Name:      "Mitosis",
	Chain:     "MITO",
	ChainID:   124816,
	NetworkID: 124816,
	ShortName: "mitosis",
	RPC: []string{
		"https://rpc.mitosis.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Mitosis",
		Symbol:   "MITO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mitosis.org"}[0],
	Explorers: []Explorer{
		{
			Name: "Mitoscan",
			URL:  "https://mitoscan.io/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var FuelSepolia129514 = Chain{
	Name:      "Fuel Sepolia Testnet",
	Chain:     "ETH",
	ChainID:   129514,
	NetworkID: 129514,
	ShortName: "fuel-sepolia",
	RPC: []string{
		"https://fuel-testnet.zappayment.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ethereum",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://fuel.network/"}[0],
	Explorers: []Explorer{
		{
			Name: "Fuel Sepolia Testnet Explorer",
			URL:  "https://app-testnet.fuel.network",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Aria134235 = Chain{
	Name:      "ARIA Chain",
	Chain:     "ARIA",
	ChainID:   134235,
	NetworkID: 134235,
	ShortName: "aria",
	RPC: []string{
		"https://rpc.ariascan.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ARIA",
		Symbol:   "ARIA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ariascan.org"}[0],
	Explorers: []Explorer{
		{
			Name: "ARIA Explorer",
			URL:  "https://explorer.ariascan.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Kasplex167012 = Chain{
	Name:      "Kasplex zkEVM Testnet",
	Chain:     "KASPLEX",
	ChainID:   167012,
	NetworkID: 167012,
	ShortName: "kasplex",
	RPC: []string{
		"https://rpc.kasplextest.xyz/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "KAS",
		Symbol:   "KAS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://kasplex.org/"}[0],
	Explorers: []Explorer{
		{
			Name: "Kasplex Explorer",
			URL:  "https://explorer.testnet.kasplextest.xyz/",
		},
	},
}

var Lit175200 = Chain{
	Name:      "Lit Chain Mainnet",
	Chain:     "LITKEY",
	ChainID:   175200,
	NetworkID: 175200,
	ShortName: "lit",
	RPC: []string{
		"https://lit-chain-rpc.litprotocol.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Lit Protocol",
		Symbol:   "LITKEY",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://litprotocol.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Lit Chain Explorer",
			URL:  "https://lit-chain-explorer.litprotocol.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var HppSepolia181228 = Chain{
	Name:      "HPP Sepolia",
	Chain:     "HPP",
	ChainID:   181228,
	NetworkID: 181228,
	ShortName: "hpp-sepolia",
	RPC: []string{
		"https://sepolia.hpp.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.hpp.io"}[0],
	Explorers: []Explorer{
		{
			Name: "HPP Sepolia Explorer",
			URL:  "https://sepolia-explorer.hpp.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var GomchainMainnet190278 = Chain{
	Name:      "GomChain Mainnet",
	Chain:     "GomChain",
	ChainID:   190278,
	NetworkID: 190278,
	ShortName: "gomchain-mainnet",
	RPC: []string{
		"https://rpc.gomchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "GOM",
		Symbol:   "GOM",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://gomchain.com"}[0],
	Explorers: []Explorer{
		{
			Name: "gomscan",
			URL:  "https://scan.gomchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var HppMainnet190415 = Chain{
	Name:      "HPP Mainnet",
	Chain:     "HPP",
	ChainID:   190415,
	NetworkID: 190415,
	ShortName: "hpp-mainnet",
	RPC: []string{
		"https://mainnet.hpp.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.hpp.io"}[0],
	Explorers: []Explorer{
		{
			Name: "HPP Mainnet Explorer",
			URL:  "https://explorer.hpp.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Eadx198724 = Chain{
	Name:      "EADX Network",
	Chain:     "EADX",
	ChainID:   198724,
	NetworkID: 198724,
	ShortName: "eadx",
	RPC: []string{
		"https://rpc.eadx.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "EADX",
		Symbol:   "EDX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://eadxexchange.com"}[0],
	Explorers: []Explorer{
		{
			Name: "EADX Explorer",
			URL:  "https://explorer.eadx.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Nos200024 = Chain{
	Name:      "NitroGraph Testnet",
	Chain:     "NOS",
	ChainID:   200024,
	NetworkID: 200024,
	ShortName: "nos",
	RPC: []string{
		"https://rpc-testnet.nitrograph.foundation",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Nitro",
		Symbol:   "NOS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://nitrograph.com"}[0],
	Explorers: []Explorer{
		{
			Name: "nitroscan",
			URL:  "https://explorer-testnet.nitrograph.foundation",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var PropulenceTestnet202500 = Chain{
	Name:      "Propulence Testnet",
	Chain:     "Propulence",
	ChainID:   202500,
	NetworkID: 202500,
	ShortName: "Propulence-testnet",
	RPC: []string{
		"https://rpc.testnet.thepropulence.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Propulence",
		Symbol:   "PROPX",
		Decimals: 18,
	},
	Explorers: []Explorer{
		{
			Name: "Propulence Testnet Explorer",
			URL:  "https://explorer.testnet.thepropulence.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Aurext202506 = Chain{
	Name:      "Aurex Testnet",
	Chain:     "AUREX",
	ChainID:   202506,
	NetworkID: 202506,
	ShortName: "aurext",
	RPC: []string{
		"https://aurexgold.com:3000",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Aurex",
		Symbol:   "AUREX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://aurexgold.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Aurex Testnet Explorer",
			URL:  "https://aurexgold.com:4001",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Kasplex202555 = Chain{
	Name:      "Kasplex zkEVM Mainnet",
	Chain:     "KASPLEX",
	ChainID:   202555,
	NetworkID: 202555,
	ShortName: "kasplex",
	RPC: []string{
		"https://evmrpc.kasplex.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "KAS",
		Symbol:   "KAS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://kasplex.org/"}[0],
	Explorers: []Explorer{
		{
			Name: "Kasplex Explorer",
			URL:  "https://explorer.kasplex.org",
		},
	},
}

var Ju202599 = Chain{
	Name:      "JuChain Testnet",
	Chain:     "JU",
	ChainID:   202599,
	NetworkID: 202599,
	ShortName: "ju",
	RPC: []string{
		"https://testnet-rpc.juchain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "JUcoin",
		Symbol:   "JU",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://juchain.org"}[0],
	Explorers: []Explorer{
		{
			Name: "juscan-testnet",
			URL:  "https://testnet.juscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Juchain210000 = Chain{
	Name:      "JuChain Mainnet",
	Chain:     "JU",
	ChainID:   210000,
	NetworkID: 210000,
	ShortName: "juchain",
	RPC: []string{
		"https://rpc.juchain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "JUcoin",
		Symbol:   "JU",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://juchain.org"}[0],
	Explorers: []Explorer{
		{
			Name: "juscan",
			URL:  "https://juscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Klt220312 = Chain{
	Name:      "KultChain",
	Chain:     "KLT",
	ChainID:   220312,
	NetworkID: 220312,
	ShortName: "klt",
	RPC: []string{
		"https://rpc.kultchain.com",
		"http://217.154.10.57:8545",
	},
	NativeCurrency: NativeCurrency{
		Name:     "KultCoin",
		Symbol:   "KLT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://kultchain.com"}[0],
	Explorers: []Explorer{
		{
			Name: "KultChain Explorer",
			URL:  "https://explorer.kultchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var SivzMainnet222345 = Chain{
	Name:      "SSHIVANSH Mainnet",
	Chain:     "SSHIVANSH",
	ChainID:   222345,
	NetworkID: 222345,
	ShortName: "sivz-mainnet",
	RPC: []string{
		"https://apiprod.sshivanshcoin.com/ext/bc/2XWN3PW4Qdjw3AtG6eqH8PCzj49G9Qay6SLNWbGLjsDF1qPgsW/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SIVZ",
		Symbol:   "SIVZ",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://sshivanshcoin.com"}[0],
	Explorers: []Explorer{
		{
			Name: "SSHIVANSH Explorer",
			URL:  "https://explorer.sshivanshcoin.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Mocat222888 = Chain{
	Name:      "Moca Chain Testnet",
	Chain:     "Moca Chain",
	ChainID:   222888,
	NetworkID: 222888,
	ShortName: "mocat",
	RPC: []string{
		"https://testnet-rpc.mocachain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MOCA",
		Symbol:   "MOCA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mocachain.org"}[0],
	Explorers: []Explorer{
		{
			Name: "Moca Chain Scan",
			URL:  "https://testnet-scan.mocachain.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var CodeNektMainnet235235 = Chain{
	Name:      "CodeNekt Mainnet",
	Chain:     "CodeNekt",
	ChainID:   235235,
	NetworkID: 235235,
	ShortName: "CodeNekt-mainnet",
	RPC: []string{
		"https://rpc-mainnet-codenekt-rl.cogitus.io/ext/bc/ZG7cT4B1u3y7piZ9CzfejnTKnNAoehcifbJWUwBqgyD3RuEqK/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CDK",
		Symbol:   "CDK",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://codenekt-ecosystem.io/"}[0],
	Explorers: []Explorer{
		{
			Name: "CodeNekt Explorer",
			URL:  "https://explorer-codenekt-mainnet.cogitus.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var UlaloMainnet237007 = Chain{
	Name:      "ULALO Mainnet",
	Chain:     "ULALO",
	ChainID:   237007,
	NetworkID: 237007,
	ShortName: "ulalo-mainnet",
	RPC: []string{
		"https://grpc.ulalo.xyz/ext/bc/2uN4Y9JHkLeAJK85Y48LExpNnEiepf7VoZAtmjnwDSZzpZcNig/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ULA",
		Symbol:   "ULA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ulalo.xyz"}[0],
	Explorers: []Explorer{
		{
			Name: "ULALO Explorer",
			URL:  "https://tracehawk.ulalo.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Kub259251 = Chain{
	Name:      "KUB Layer 2 Testnet",
	Chain:     "KUB",
	ChainID:   259251,
	NetworkID: 259251,
	ShortName: "kub",
	RPC: []string{
		"https://kublayer2.testnet.kubchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "tKUB",
		Symbol:   "tKUB",
		Decimals: 18,
	},
	Explorers: []Explorer{
		{
			Name: "KUB Layer2 Testnet Explorer",
			URL:  "https://kublayer2.testnet.kubscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var T1299792 = Chain{
	Name:      "t1 Mainnet",
	Chain:     "t1",
	ChainID:   299792,
	NetworkID: 299792,
	ShortName: "t1",
	RPC: []string{
		"https://rpc.mainnet.t1protocol.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mainnet.t1protocol.com/"}[0],
	Explorers: []Explorer{
		{
			Name: "t1 Explorer",
			URL:  "https://explorer.mainnet.t1protocol.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var T1t299892 = Chain{
	Name:      "t1 Testnet",
	Chain:     "t1",
	ChainID:   299892,
	NetworkID: 299892,
	ShortName: "t1t",
	RPC: []string{
		"https://rpc.testnet.t1protocol.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://testnet.t1protocol.com/"}[0],
	Explorers: []Explorer{
		{
			Name: "t1 Explorer",
			URL:  "https://explorer.testnet.t1protocol.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var DCommMainnet326663 = Chain{
	Name:      "DComm Mainnet",
	Chain:     "DComm",
	ChainID:   326663,
	NetworkID: 326663,
	ShortName: "DComm-mainnet",
	RPC: []string{
		"https://rpc-mainnet-dcomm-rl.cogitus.io/ext/bc/2QJ6d1ue6UyXNXrMdGnELFc2AjMdMqs8YbX3sT3k4Nin2RcWSm/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "DCM",
		Symbol:   "DCM",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.dcomm.community/"}[0],
	Explorers: []Explorer{
		{
			Name: "DComm Explorer",
			URL:  "https://explorer-dcomm.cogitus.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Lax333222 = Chain{
	Name:      "Laxaum Testnet",
	Chain:     "LXM",
	ChainID:   333222,
	NetworkID: 333222,
	ShortName: "lax",
	RPC: []string{
		"http://54.252.195.55:9945",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Laxaum",
		Symbol:   "LXM",
		Decimals: 18,
	},
	InfoURL: &[]string{"http://www.laxaum.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Laxaum Explorer",
			URL:  "http://54.252.195.55:3002",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Mtx478549 = Chain{
	Name:      "MintraxChain",
	Chain:     "MTX",
	ChainID:   478549,
	NetworkID: 478549,
	ShortName: "mtx",
	RPC: []string{
		"https://rpc.mintrax.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Mintrax",
		Symbol:   "MTX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mintrax.network"}[0],
	Explorers: []Explorer{
		{
			Name: "Mintrax Explorer",
			URL:  "https://explorer.mintrax.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Commons510003 = Chain{
	Name:      "Syndicate Commons",
	Chain:     "Commons",
	ChainID:   510003,
	NetworkID: 510003,
	ShortName: "commons",
	RPC: []string{
		"https://commons.rpc.syndicate.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Syndicate",
		Symbol:   "SYND",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://syndicate.io"}[0],
	Explorers: []Explorer{
		{
			Name: "Commons Explorer",
			URL:  "https://explorer.commons.syndicate.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Tcross612044 = Chain{
	Name:      "CROSS Testnet",
	Chain:     "TCROSS",
	ChainID:   612044,
	NetworkID: 612044,
	ShortName: "tcross",
	RPC: []string{
		"https://testnet.crosstoken.io:22001",
	},
	NativeCurrency: NativeCurrency{
		Name:     "TestnetCROSS",
		Symbol:   "tCROSS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://to.nexus"}[0],
	Explorers: []Explorer{
		{
			Name: "CROSS Testnet Explorer",
			URL:  "https://testnet.crossscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Cross612055 = Chain{
	Name:      "CROSS Mainnet",
	Chain:     "CROSS",
	ChainID:   612055,
	NetworkID: 612055,
	ShortName: "cross",
	RPC: []string{
		"https://mainnet.crosstoken.io:22001",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CROSS",
		Symbol:   "CROSS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://to.nexus"}[0],
	Explorers: []Explorer{
		{
			Name: "CROSS Explorer",
			URL:  "https://www.crossscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Galactica613419 = Chain{
	Name:      "Galactica Mainnet",
	Chain:     "GNET",
	ChainID:   613419,
	NetworkID: 613419,
	ShortName: "galactica",
	RPC: []string{
		"https://galactica-mainnet.g.alchemy.com/public",
	},
	NativeCurrency: NativeCurrency{
		Name:     "GNET",
		Symbol:   "GNET",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://galactica.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Blockscout",
			URL:  "https://explorer.galactica.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Mdx648529 = Chain{
	Name:      "Modulax Mainnet",
	Chain:     "MDX",
	ChainID:   648529,
	NetworkID: 648529,
	ShortName: "mdx",
	RPC: []string{
		"https://rpc.modulax.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Modulax",
		Symbol:   "MDX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://modulax.org"}[0],
	Explorers: []Explorer{
		{
			Name: "modulax",
			URL:  "https://explorer.modulax.org",
		},
	},
}

var PharosTestnet688688 = Chain{
	Name:      "Pharos Testnet",
	Chain:     "Pharos",
	ChainID:   688688,
	NetworkID: 688688,
	ShortName: "pharos-testnet",
	RPC: []string{
		"https://testnet.dplabs-internal.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "PHRS",
		Symbol:   "PHRS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://testnet.pharosnetwork.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name: "Pharos Testnet Explorer",
			URL:  "https://testnet.pharosscan.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var PharosAtlantic688689 = Chain{
	Name:      "Pharos Atlantic Testnet",
	Chain:     "Pharos",
	ChainID:   688689,
	NetworkID: 688689,
	ShortName: "pharos-atlantic",
	RPC: []string{
		"https://atlantic.dplabs-internal.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "PHRS",
		Symbol:   "PHRS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://atlantic.pharosnetwork.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name: "Pharos Atlantic Testnet Explorer",
			URL:  "https://atlantic.pharosscan.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var GalacticaTestnet843843 = Chain{
	Name:      "Galactica Testnet",
	Chain:     "GNET",
	ChainID:   843843,
	NetworkID: 843843,
	ShortName: "galactica-testnet",
	RPC: []string{
		"https://galactica-cassiopeia.g.alchemy.com/public",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Gnet",
		Symbol:   "GNET",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://galactica.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Blockscout",
			URL:  "https://galactica-cassiopeia.explorer.alchemy.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var HaqqTestethiq853211 = Chain{
	Name:      "HAQQ Testethiq (L2 Sepolia Testnet)",
	Chain:     "ETH",
	ChainID:   853211,
	NetworkID: 853211,
	ShortName: "haqq-testethiq",
	RPC: []string{
		"https://rpc.testethiq.haqq.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ETH",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.haqq.network"}[0],
	Explorers: []Explorer{
		{
			Name: "HAQQ Testethiq Blockscout",
			URL:  "https://explorer.testethiq.haqq.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Roonchain1314520 = Chain{
	Name:      "RoonChain Mainnet",
	Chain:     "ROON",
	ChainID:   1314520,
	NetworkID: 1314520,
	ShortName: "roonchain",
	RPC: []string{
		"https://mainnet-rpc.roonchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ROON",
		Symbol:   "ROON",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://roonchain.com"}[0],
	Explorers: []Explorer{
		{
			Name: "RoonChain Mainnet explorer",
			URL:  "https://mainnet.roonchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Xrplevm1440000 = Chain{
	Name:      "XRPL EVM",
	Chain:     "XRPL",
	ChainID:   1440000,
	NetworkID: 1440000,
	ShortName: "xrplevm",
	RPC: []string{
		"https://rpc.xrplevm.org/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "XRP",
		Symbol:   "XRP",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.xrplevm.org/"}[0],
	Explorers: []Explorer{
		{
			Name: "XRPL EVM Explorer",
			URL:  "https://explorer.xrplevm.org",
		},
	},
}

var Ethereal5064014 = Chain{
	Name:      "Ethereal Mainnet",
	Chain:     "Ethereal",
	ChainID:   5064014,
	NetworkID: 5064014,
	ShortName: "ethereal",
	RPC: []string{
		"https://rpc.ethereal.trade",
	},
	NativeCurrency: NativeCurrency{
		Name:     "USDe",
		Symbol:   "USDe",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.ethereal.trade"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://explorer.ethereal.trade",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Loot5151706 = Chain{
	Name:      "Loot Mainnet",
	Chain:     "LOOT",
	ChainID:   5151706,
	NetworkID: 5151706,
	ShortName: "loot",
	RPC: []string{
		"https://rpc.lootchain.com/http/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Adventure Gold",
		Symbol:   "AGLD",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://adventuregold.org/"}[0],
	Explorers: []Explorer{
		{
			Name: "Lootscan",
			URL:  "https://explorer.lootchain.com/",
		},
	},
}

var Jmdt7000700 = Chain{
	Name:      "JMDT Mainnet",
	Chain:     "JMDT",
	ChainID:   7000700,
	NetworkID: 7000700,
	ShortName: "jmdt",
	RPC: []string{
		"https://rpc.jmdt.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "JMDT",
		Symbol:   "JMDT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://jmdt.io"}[0],
	Explorers: []Explorer{
		{
			Name: "JMDT Explorer",
			URL:  "https://explorer.jmdt.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Vpc8678671 = Chain{
	Name:      "VinaChain Mainnet",
	Chain:     "VPC",
	ChainID:   8678671,
	NetworkID: 8678671,
	ShortName: "vpc",
	RPC: []string{
		"https://vncscan.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "VPC",
		Symbol:   "VPC",
		Decimals: 18,
	},
	Explorers: []Explorer{
		{
			Name: "vncscan",
			URL:  "https://beta.vncscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var CeloSep11142220 = Chain{
	Name:      "Celo Sepolia Testnet",
	Chain:     "CELO",
	ChainID:   11142220,
	NetworkID: 11142220,
	ShortName: "celo-sep",
	RPC: []string{
		"https://forno.celo-sepolia.celo-testnet.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CELO-S",
		Symbol:   "CELO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://sepolia.celoscan.io/"}[0],
}

var Roonchain13145201 = Chain{
	Name:      "RoonChain Testnet",
	Chain:     "ROON",
	ChainID:   13145201,
	NetworkID: 13145201,
	ShortName: "roonchain",
	RPC: []string{
		"https://testnet-rpc.roonchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ROON",
		Symbol:   "ROON",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://roonchain.com"}[0],
	Explorers: []Explorer{
		{
			Name: "RoonChain Testnet explorer",
			URL:  "https://testnets.roonchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var EtherealTestnet013374202 = Chain{
	Name:      "Ethereal Testnet",
	Chain:     "Ethereal",
	ChainID:   13374202,
	NetworkID: 13374202,
	ShortName: "ethereal-testnet-0",
	RPC: []string{
		"https://rpc.etherealtest.net",
		"https://rpc-ethereal-testnet-0.t.conduit.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "USDe",
		Symbol:   "USDe",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.ethereal.trade/"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://explorer.etherealtest.net",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Sis13863860 = Chain{
	Name:      "Symbiosis",
	Chain:     "SIS",
	ChainID:   13863860,
	NetworkID: 13863860,
	ShortName: "sis",
	RPC: []string{
		"https://symbiosis.calderachain.xyz/http",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Symbiosis",
		Symbol:   "SIS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://symbiosis.finance"}[0],
	Explorers: []Explorer{
		{
			Name: "Symbiosis explorer",
			URL:  "https://symbiosis.calderaexplorer.xyz",
		},
	},
}

var Unp47382916 = Chain{
	Name:      "Unipoly Chain Mainnet",
	Chain:     "UNP",
	ChainID:   47382916,
	NetworkID: 47382916,
	ShortName: "unp",
	RPC: []string{
		"https://rpc.unpchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Unipoly Coin",
		Symbol:   "UNP",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://unipoly.network"}[0],
	Explorers: []Explorer{
		{
			Name: "UNP Chain Explorer",
			URL:  "https://explorer.unpchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Aut65000000 = Chain{
	Name:      "Autonity Mainnet",
	Chain:     "AUT",
	ChainID:   65000000,
	NetworkID: 65000000,
	ShortName: "aut",
	RPC: []string{
		"https://autonity.rpc.web3cdn.network",
		"https://autonity.rpc.subquery.network/public",
		"https://rpc.autonity-apis.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Auton",
		Symbol:   "ATN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://autonity.org/"}[0],
	Explorers: []Explorer{
		{
			Name: "autonityscan",
			URL:  "https://autonityscan.org",
		},
	},
}

var AutBakerloo65010004 = Chain{
	Name:      "Autonity Bakerloo (Nile) Testnet",
	Chain:     "AUT",
	ChainID:   65010004,
	NetworkID: 65010004,
	ShortName: "aut-bakerloo",
	RPC: []string{
		"https://autonity.rpc.web3cdn.network/testnet",
		"https://bakerloo.autonity-apis.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Bakerloo Auton",
		Symbol:   "ATN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://autonity.org/"}[0],
	Explorers: []Explorer{
		{
			Name: "autonity-bakerloo-explorer",
			URL:  "https://bakerloo.autonity.org",
		},
	},
}

var Sovra65536001 = Chain{
	Name:      "Sovra",
	Chain:     "Sovra",
	ChainID:   65536001,
	NetworkID: 65536001,
	ShortName: "sovra",
	RPC: []string{
		"https://rpc.sovra.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://sovra.io"}[0],
	Explorers: []Explorer{
		{
			Name: "Sovra Explorer",
			URL:  "https://explorer.sovra.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var IstchainMainnet286022981 = Chain{
	Name:      "ISTChain Mainnet",
	Chain:     "Openverse",
	ChainID:   286022981,
	NetworkID: 286022981,
	ShortName: "istchain-mainnet",
	RPC: []string{
		"https://rpc1.istchain.org",
		"https://rpc2.istchain.org",
		"https://rpc3.istchain.org",
		"https://rpc4.istchain.org",
		"https://rpc5.istchain.org",
		"https://rpc6.istchain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "IST",
		Symbol:   "IST",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://istchain.org"}[0],
	Explorers: []Explorer{
		{
			Name: "istscan",
			URL:  "https://scan.istchain.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var DnachainMainnet287022981 = Chain{
	Name:      "DNAChain Mainnet",
	Chain:     "Openverse",
	ChainID:   287022981,
	NetworkID: 287022981,
	ShortName: "dnachain-mainnet",
	RPC: []string{
		"https://rpc1.gene.network",
		"https://rpc2.gene.network",
		"https://rpc3.gene.network",
		"https://rpc4.gene.network",
		"https://rpc5.gene.network",
		"https://rpc6.gene.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "DNA",
		Symbol:   "DNA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://gene.network"}[0],
	Explorers: []Explorer{
		{
			Name: "dnascan",
			URL:  "https://scan.gene.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var SlcchainMainnet288022981 = Chain{
	Name:      "SLCChain Mainnet",
	Chain:     "Openverse",
	ChainID:   288022981,
	NetworkID: 288022981,
	ShortName: "slcchain-mainnet",
	RPC: []string{
		"https://rpc1.sl.cool",
		"https://rpc2.sl.cool",
		"https://rpc3.sl.cool",
		"https://rpc4.sl.cool",
		"https://rpc5.sl.cool",
		"https://rpc6.sl.cool",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Super Link Coin",
		Symbol:   "SLC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://sl.cool"}[0],
	Explorers: []Explorer{
		{
			Name: "slcscan",
			URL:  "https://scan.sl.cool",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var SophonTestnet531050204 = Chain{
	Name:      "Sophon zkSync-OS Testnet",
	Chain:     "Sophon",
	ChainID:   531050204,
	NetworkID: 531050204,
	ShortName: "sophon-testnet",
	RPC: []string{
		"https://zksync-os-testnet-sophon.zksync.dev/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Sophon",
		Symbol:   "SOPH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://sophon.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name: "Sophon zkSync Testnet Explorer",
			URL:  "https://block-explorer.zksync-os-testnet-sophon.zksync.dev/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Zen845320009 = Chain{
	Name:      "Horizen Testnet",
	Chain:     "ZEN",
	ChainID:   845320009,
	NetworkID: 845320009,
	ShortName: "zen",
	RPC: []string{
		"https://horizen-rpc-testnet.appchain.base.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.horizen.io/"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://horizen-explorer-testnet.appchain.base.org/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Rari1380012617 = Chain{
	Name:      "RARI Chain",
	Chain:     "RARI",
	ChainID:   1380012617,
	NetworkID: 1380012617,
	ShortName: "rari",
	RPC: []string{
		"https://mainnet.rpc.rarichain.org/http/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ethereum",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://rarichain.org/"}[0],
	Explorers: []Explorer{
		{
			Name: "Blockscout",
			URL:  "https://mainnet.explorer.rarichain.org/",
		},
	},
}

var LumiaBeamTestnet2030232745 = Chain{
	Name:      "Lumia Beam Testnet",
	Chain:     "ETH",
	ChainID:   2030232745,
	NetworkID: 2030232745,
	ShortName: "lumia-beam-testnet",
	RPC: []string{
		"https://beam-rpc.lumia.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Lumia",
		Symbol:   "LUMIA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://lumia.org"}[0],
	Explorers: []Explorer{
		{
			Name: "Lumia Beam Testnet Explorer",
			URL:  "https://beam-explorer.lumia.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Gxy420420420420 = Chain{
	Name:      "Galaxy Chain",
	Chain:     "GALAXY",
	ChainID:   420420420420,
	NetworkID: 420420420420,
	ShortName: "gxy",
	RPC: []string{
		"https://archive.galaxychain.co",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Star",
		Symbol:   "STAR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://galaxychain.co"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://scan.galaxychain.co",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

// AllChains contains all chain configurations
var AllChains = []Chain{
	Quai9,
	Flr14,
	Nomina166,
	WatrMainnet192,
	Tacchain239,
	Kss347,
	Areum463,
	Lcai504,
	Syndicate510,
	Capy586,
	Jasmy681,
	Uniocean684,
	CapxTestnet756,
	Capx757,
	BinaryholdingsMainnet836,
	AMN870,
	Stable988,
	HyperEvm999,
	Bdag1043,
	Realchain1098,
	Ecm1124,
	Taker1125,
	IntuitionMainnet1155,
	Fitochain1233,
	Vfl1408,
	Tvfl1409,
	InjectiveTestnet1439,
	TREX1628,
	Injective1776,
	Epix1916,
	QIEV31990,
	Ronin2020,
	Erol2027,
	Realchaintest2098,
	IBVM2105,
	IBVMT2107,
	Stable2201,
	Moca2288,
	Besc2372,
	Spld2691,
	Spldt2692,
	Alpen2892,
	Svm3109,
	HaustNetwork3864,
	Gan4048,
	Hashfire4227,
	SC4509,
	Prodao4936,
	Somnia5031,
	Mocat5151,
	YeYing5432,
	Dukong5887,
	GrowfitterMainnet7084,
	Vrcn7131,
	Carrchain7667,
	Ptb7820,
	Pcn7890,
	Bmn8006,
	Lerax8125,
	SvmTestnet8163,
	Forknet8338,
	ACN8700,
	Ebc8721,
	Ward8765,
	TICS9030,
	Kub9601,
	Plasma9745,
	PlasmaTestnet9746,
	PlasmaDevnet9747,
	Ethw10001,
	GateLayer10088,
	Ozone10120,
	Ozone10121,
	Mova10323,
	Kudora12000,
	Ela12343,
	LiberlandTestnet12865,
	Bridgeless13441,
	IntuitionTestnet13579,
	SonicTestnet14601,
	Quait15000,
	_0gGalileo16601,
	_0g16661,
	Incentiv24101,
	Tcent28802,
	Paix32380,
	Zil32769,
	ZilTestnet33101,
	Zq2Devnet33469,
	Abcore36888,
	Weichain37771,
	RootVX41295,
	Risa51014,
	Lazai52924,
	Mova61900,
	OmachainTestnet66238,
	Carrchain76672,
	Onyx80888,
	Codex81224,
	Chiliz88888,
	Apaw90025,
	WatrTestnet92870,
	Pepu97741,
	Ctc102030,
	Ctctest102031,
	Ctcdev102032,
	Mitosis124816,
	FuelSepolia129514,
	Aria134235,
	Kasplex167012,
	Lit175200,
	HppSepolia181228,
	GomchainMainnet190278,
	HppMainnet190415,
	Eadx198724,
	Nos200024,
	PropulenceTestnet202500,
	Aurext202506,
	Kasplex202555,
	Ju202599,
	Juchain210000,
	Klt220312,
	SivzMainnet222345,
	Mocat222888,
	CodeNektMainnet235235,
	UlaloMainnet237007,
	Kub259251,
	T1299792,
	T1t299892,
	DCommMainnet326663,
	Lax333222,
	Mtx478549,
	Commons510003,
	Tcross612044,
	Cross612055,
	Galactica613419,
	Mdx648529,
	PharosTestnet688688,
	PharosAtlantic688689,
	GalacticaTestnet843843,
	HaqqTestethiq853211,
	Roonchain1314520,
	Xrplevm1440000,
	Ethereal5064014,
	Loot5151706,
	Jmdt7000700,
	Vpc8678671,
	CeloSep11142220,
	Roonchain13145201,
	EtherealTestnet013374202,
	Sis13863860,
	Unp47382916,
	Aut65000000,
	AutBakerloo65010004,
	Sovra65536001,
	IstchainMainnet286022981,
	DnachainMainnet287022981,
	SlcchainMainnet288022981,
	SophonTestnet531050204,
	Zen845320009,
	Rari1380012617,
	LumiaBeamTestnet2030232745,
	Gxy420420420420,
}

// GetChainByID returns a chain by its chain ID
func GetChainByID(chainID uint64) *Chain {
	for i := range AllChains {
		if AllChains[i].ChainID == chainID {
			return &AllChains[i]
		}
	}
	return nil
}

// ChainByID is a map of chain ID to Chain
var ChainByID = func() map[uint64]*Chain {
	m := make(map[uint64]*Chain)
	for i := range AllChains {
		m[AllChains[i].ChainID] = &AllChains[i]
	}
	return m
}()