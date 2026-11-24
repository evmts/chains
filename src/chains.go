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
	Name           string         `json:"name"`
	Chain          string         `json:"chain"`
	ChainID        uint64         `json:"chainId"`
	NetworkID      uint64         `json:"networkId"`
	ShortName      string         `json:"shortName"`
	RPC            []string       `json:"rpc"`
	NativeCurrency NativeCurrency `json:"nativeCurrency"`
	InfoURL        *string        `json:"infoURL,omitempty"`
	Explorers      []Explorer     `json:"explorers,omitempty"`
}

// Chain IDs
const (
	ChainIDQUAI9                          uint64 = 9
	ChainIDFLR14                          uint64 = 14
	ChainIDPLATO53                        uint64 = 53
	ChainIDPLATO62                        uint64 = 62
	ChainIDAMZG65                         uint64 = 65
	ChainIDPLATO71                        uint64 = 71
	ChainIDSHIBARIUMECOSYSTEM109          uint64 = 109
	ChainIDMONAD143                       uint64 = 143
	ChainIDJITO149149                     uint64 = 149
	ChainIDFARM165                        uint64 = 165
	ChainIDNOMINA166                      uint64 = 166
	ChainIDWATR_MAINNET192                uint64 = 192
	ChainIDVC_TESTNET206                  uint64 = 206
	ChainIDVC207                          uint64 = 207
	ChainIDIOPN222                        uint64 = 222
	ChainIDTACCHAIN239                    uint64 = 239
	ChainIDORBINUM270                     uint64 = 270
	ChainIDDRBY275                        uint64 = 275
	ChainIDNETX287                        uint64 = 287
	ChainIDHSP292292                      uint64 = 292
	ChainIDGOLIATH327                     uint64 = 327
	ChainIDVIRBICOIN329                   uint64 = 329
	ChainIDBOURSE343                      uint64 = 343
	ChainIDKSS347                         uint64 = 347
	ChainIDDNC362                         uint64 = 362
	ChainIDLNR389                         uint64 = 389
	ChainIDACTUMIC402                     uint64 = 402
	ChainIDD_TESTNET430                   uint64 = 430
	ChainIDD_MAINNET433                   uint64 = 433
	ChainIDAREUM463                       uint64 = 463
	ChainIDCAMPMAINNET484                 uint64 = 484
	ChainIDLCAI504                        uint64 = 504
	ChainIDDOTO505                        uint64 = 505
	ChainIDBTB509                         uint64 = 509
	ChainIDSYNDICATE510                   uint64 = 510
	ChainIDFYRO511                        uint64 = 511
	ChainIDMAWARI576                      uint64 = 576
	ChainIDCAPY586                        uint64 = 586
	ChainIDNETX_TESTNET587                uint64 = 587
	ChainIDBATTLECHAIN_TESTNET627         uint64 = 627
	ChainIDBOT677                         uint64 = 677
	ChainIDJASMY681                       uint64 = 681
	ChainIDUNIOCEAN684                    uint64 = 684
	ChainIDLXON724                        uint64 = 724
	ChainIDCAPX_TESTNET756                uint64 = 756
	ChainIDCAPX757                        uint64 = 757
	ChainIDQRDX762                        uint64 = 762
	ChainIDQELT770                        uint64 = 770
	ChainIDQELT_TESTNET771                uint64 = 771
	ChainIDRITUAL784                      uint64 = 784
	ChainIDBINARYHOLDINGS_MAINNET836      uint64 = 836
	ChainIDA_M_N870                       uint64 = 870
	ChainIDMARS890                        uint64 = 890
	ChainIDWBTC892                        uint64 = 892
	ChainIDFENE920                        uint64 = 920
	ChainIDZEL935                         uint64 = 935
	ChainIDIOPN984                        uint64 = 984
	ChainIDSTABLE988                      uint64 = 988
	ChainIDHYPER_EVM999                   uint64 = 999
	ChainIDNURA1020                       uint64 = 1020
	ChainIDBDAG1043                       uint64 = 1043
	ChainIDANTA1082                       uint64 = 1082
	ChainIDXENEA1096                      uint64 = 1096
	ChainIDREALCHAIN1098                  uint64 = 1098
	ChainIDGRX1110                        uint64 = 1110
	ChainIDECM1124                        uint64 = 1124
	ChainIDTAKER1125                      uint64 = 1125
	ChainIDQRY1129                        uint64 = 1129
	ChainIDION1143                        uint64 = 1143
	ChainIDINTUITION_MAINNET1155          uint64 = 1155
	ChainIDJOA1191                        uint64 = 1191
	ChainIDBMC1199                        uint64 = 1199
	ChainIDFITOCHAIN1233                  uint64 = 1233
	ChainIDONN1330                        uint64 = 1330
	ChainIDBIE1342                        uint64 = 1342
	ChainIDMIDX1394                       uint64 = 1394
	ChainIDBDAG1404                       uint64 = 1404
	ChainIDVFL1408                        uint64 = 1408
	ChainIDTVFL1409                       uint64 = 1409
	ChainIDLRX1410                        uint64 = 1410
	ChainIDINJECTIVE_TESTNET1439          uint64 = 1439
	ChainIDCMXR1475                       uint64 = 1475
	ChainIDROONCHAIN1492                  uint64 = 1492
	ChainIDMIDL1500                       uint64 = 1500
	ChainIDDOLPHINET_TESTNET1519          uint64 = 1519
	ChainIDDOLPHINET1520                  uint64 = 1520
	ChainIDMAWARI1576                     uint64 = 1576
	ChainIDNVNM_EVM1611                   uint64 = 1611
	ChainIDT_R_E_X1628                    uint64 = 1628
	ChainIDXGR1643                        uint64 = 1643
	ChainIDPHAROS1672                     uint64 = 1672
	ChainIDO_B_S1719                      uint64 = 1719
	ChainIDINJECTIVE1776                  uint64 = 1776
	ChainIDRUBY_TESTNET1810               uint64 = 1810
	ChainIDW_C_H_SEPOLIA1874              uint64 = 1874
	ChainIDXGRT1879                       uint64 = 1879
	ChainIDRECR1888                       uint64 = 1888
	ChainIDEPIX1916                       uint64 = 1916
	ChainIDTURKCHAIN1919                  uint64 = 1919
	ChainIDTPC1925                        uint64 = 1925
	ChainIDEGOLD1932                      uint64 = 1932
	ChainIDTOKB1952                       uint64 = 1952
	ChainIDQ_I_E_V31990                   uint64 = 1990
	ChainIDDNA1991                        uint64 = 1991
	ChainIDRONIN2020                      uint64 = 2020
	ChainIDEROL2027                       uint64 = 2027
	ChainIDARMA_TESTNET2028               uint64 = 2028
	ChainIDFST2034                        uint64 = 2034
	ChainIDNTX2070                        uint64 = 2070
	ChainIDREALCHAINTEST2098              uint64 = 2098
	ChainIDI_B_V_M2105                    uint64 = 2105
	ChainIDI_B_V_M_T2107                  uint64 = 2107
	ChainIDPARALLAX2110                   uint64 = 2110
	ChainIDAUTHEO2127                     uint64 = 2127
	ChainIDMEMENTO_TESTNET2129            uint64 = 2129
	ChainIDMORPHTACHYON2184               uint64 = 2184
	ChainIDSTABLE_TESTNET2201             uint64 = 2201
	ChainIDMOCA2288                       uint64 = 2288
	ChainIDBESC2372                       uint64 = 2372
	ChainIDT_HAUS2443                     uint64 = 2443
	ChainIDCCC2500                        uint64 = 2500
	ChainIDSVP_TESTNET2517                uint64 = 2517
	ChainIDSVP2518                        uint64 = 2518
	ChainIDANUBI2526                      uint64 = 2526
	ChainIDH22582                         uint64 = 2582
	ChainIDKTO2643                        uint64 = 2643
	ChainIDSPLD2691                       uint64 = 2691
	ChainIDSPLDT2692                      uint64 = 2692
	ChainIDORBINUM2700                    uint64 = 2700
	ChainIDCLAW_WORLD_BOX2721             uint64 = 2721
	ChainIDCREATOR_CHAIN_MAINNET2787      uint64 = 2787
	ChainIDAERE2800                       uint64 = 2800
	ChainIDALPEN2892                      uint64 = 2892
	ChainIDMORPH2910                      uint64 = 2910
	ChainIDBGG3005                        uint64 = 3005
	ChainIDAIC3018                        uint64 = 3018
	ChainIDSVM3109                        uint64 = 3109
	ChainIDALPHA3111                      uint64 = 3111
	ChainIDB_K_C3188                      uint64 = 3188
	ChainIDQBC3303                        uint64 = 3303
	ChainIDVORA3318                       uint64 = 3318
	ChainIDAET3355                        uint64 = 3355
	ChainIDTJR3377                        uint64 = 3377
	ChainIDBYTECHAINTEST3399              uint64 = 3399
	ChainIDAMX3535                        uint64 = 3535
	ChainIDTRUSTGREEN3567                 uint64 = 3567
	ChainIDAI_FI3600                      uint64 = 3600
	ChainIDINRI3777                       uint64 = 3777
	ChainIDHAUST_NETWORK3864              uint64 = 3864
	ChainIDN_E_X3945                      uint64 = 3945
	ChainIDNEX3946                        uint64 = 3946
	ChainIDGAN4048                        uint64 = 4048
	ChainIDECNA4111                       uint64 = 4111
	ChainIDTECNA4112                      uint64 = 4112
	ChainIDCITREA4114                     uint64 = 4114
	ChainIDRISE4153                       uint64 = 4153
	ChainIDSX_MAINNET4162                 uint64 = 4162
	ChainIDTEMPO_PRESTO4217               uint64 = 4217
	ChainIDGENLAYER_TESTNETS4221          uint64 = 4221
	ChainIDHASHFIRE4227                   uint64 = 4227
	ChainIDTPIX4289                       uint64 = 4289
	ChainIDMEGAETH4326                    uint64 = 4326
	ChainIDLITEFORGE4441                  uint64 = 4441
	ChainIDDEN_TESTNET4442                uint64 = 4442
	ChainIDOXIN4457                       uint64 = 4457
	ChainIDS_C4509                        uint64 = 4509
	ChainIDGTBS4599                       uint64 = 4599
	ChainIDHSP46114611                    uint64 = 4611
	ChainIDHSP46124612                    uint64 = 4612
	ChainIDROBINHOODCHAIN4663             uint64 = 4663
	ChainIDB_S_U_R_E4848                  uint64 = 4848
	ChainIDPRODAO4936                     uint64 = 4936
	ChainIDM_A_T_R_I_X4959                uint64 = 4959
	ChainIDHYPR_TESTNET4978               uint64 = 4978
	ChainIDSOMNIA5031                     uint64 = 5031
	ChainIDARC5042                        uint64 = 5042
	ChainIDFUSIONLAYER5070                uint64 = 5070
	ChainIDA_N_C5108                      uint64 = 5108
	ChainIDMOCAT5151                      uint64 = 5151
	ChainIDSBTC5200                       uint64 = 5200
	ChainIDYE_YING5432                    uint64 = 5432
	ChainIDTAAQO5566                      uint64 = 5566
	ChainIDTREASURENET5570                uint64 = 5570
	ChainIDMSC5577                        uint64 = 5577
	ChainIDEVO_NOVA5641                   uint64 = 5641
	ChainIDTBURN5800                      uint64 = 5800
	ChainIDSHIB5816                       uint64 = 5816
	ChainIDDUKONG5887                     uint64 = 5887
	ChainIDTEA6122                        uint64 = 6122
	ChainIDBMZ6162                        uint64 = 6162
	ChainIDB_M_Z6163                      uint64 = 6163
	ChainIDBMZ6165                        uint64 = 6165
	ChainIDDUAL6301                       uint64 = 6301
	ChainIDLRB6359                        uint64 = 6359
	ChainIDYNXTEST6423                    uint64 = 6423
	ChainIDAWAJI6497                      uint64 = 6497
	ChainIDMIZUHIKI6498                   uint64 = 6498
	ChainIDKALIS6533                      uint64 = 6533
	ChainIDOMA_MAINNET6623                uint64 = 6623
	ChainIDANUBI6714                      uint64 = 6714
	ChainIDVEX6736                        uint64 = 6736
	ChainIDLUST6923                       uint64 = 6923
	ChainIDGROWFITTER_MAINNET7084         uint64 = 7084
	ChainIDSRX7119                        uint64 = 7119
	ChainIDSRX_TESTNET7120                uint64 = 7120
	ChainIDVRCN7131                       uint64 = 7131
	ChainIDVYRE_TESTNET7357               uint64 = 7357
	ChainIDCMXR_L27373                    uint64 = 7373
	ChainIDLIBERTAS7474                   uint64 = 7474
	ChainIDCARRCHAIN7667                  uint64 = 7667
	ChainIDTJR_TESTNET7733                uint64 = 7733
	ChainIDEMBR7773                       uint64 = 7773
	ChainIDPANDA_SEA_MAINNET7776          uint64 = 7776
	ChainIDPTB7820                        uint64 = 7820
	ChainIDHYVE7847                       uint64 = 7847
	ChainIDPC7890                         uint64 = 7890
	ChainIDUNIVEX7932                     uint64 = 7932
	ChainIDBMN8006                        uint64 = 8006
	ChainIDLERAX8125                      uint64 = 8125
	ChainIDALPEN8150                      uint64 = 8150
	ChainIDSVM_TESTNET8163                uint64 = 8163
	ChainIDLCAI_T8200                     uint64 = 8200
	ChainIDFORKNET8338                    uint64 = 8338
	ChainIDBRY8379                        uint64 = 8379
	ChainIDA_C_N8700                      uint64 = 8700
	ChainIDEBC8721                        uint64 = 8721
	ChainIDWARD8765                       uint64 = 8765
	ChainIDT_I_C_S9030                    uint64 = 9030
	ChainIDXYB_TESTNET9194                uint64 = 9194
	ChainIDLCAI9200                       uint64 = 9200
	ChainIDZEL9350                        uint64 = 9350
	ChainIDKUB9601                        uint64 = 9601
	ChainIDPLASMA9745                     uint64 = 9745
	ChainIDPLASMA_TESTNET9746             uint64 = 9746
	ChainIDPLASMA_DEVNET9747              uint64 = 9747
	ChainIDTIMP9818                       uint64 = 9818
	ChainIDIMP9819                        uint64 = 9819
	ChainIDBYTECHAIN9933                  uint64 = 9933
	ChainIDBREVIS_NETWORK9973             uint64 = 9973
	ChainIDETHW10001                      uint64 = 10001
	ChainIDGATE_LAYER10088                uint64 = 10088
	ChainIDOZONE10120                     uint64 = 10120
	ChainIDOZONE10121                     uint64 = 10121
	ChainIDMOVA10323                      uint64 = 10323
	ChainIDLIMONATA_TESTNET10777          uint64 = 10777
	ChainIDGLEEC11169                     uint64 = 11169
	ChainIDETH11417                       uint64 = 11417
	ChainIDNKM11941                       uint64 = 11941
	ChainIDKUDORA12000                    uint64 = 12000
	ChainIDMOC12026                       uint64 = 12026
	ChainIDL2P12216                       uint64 = 12216
	ChainIDAMAX12248                      uint64 = 12248
	ChainIDCTCCHAIN12301                  uint64 = 12301
	ChainIDCTCCHAIN12302                  uint64 = 12302
	ChainIDELA12343                       uint64 = 12343
	ChainIDC_L_Y12369                     uint64 = 12369
	ChainIDBRICK12786                     uint64 = 12786
	ChainIDLIBERLAND_TESTNET12865         uint64 = 12865
	ChainIDRNTX13113                      uint64 = 13113
	ChainIDB_K_C13188                     uint64 = 13188
	ChainIDMEE13390                       uint64 = 13390
	ChainIDBRIDGELESS13441                uint64 = 13441
	ChainIDINTUITION_TESTNET13579         uint64 = 13579
	ChainIDBTZ14204                       uint64 = 14204
	ChainIDSONIC_TESTNET14601             uint64 = 14601
	ChainIDQUAIT15000                     uint64 = 15000
	ChainIDMIDL_TESTNET15001              uint64 = 15001
	ChainIDINFRA_TESTNET15324             uint64 = 15324
	ChainIDBIMBO15497                     uint64 = 15497
	ChainIDNRXN15526                      uint64 = 15526
	ChainIDHOLO15675                      uint64 = 15675
	ChainIDHOLO_TESTNET15676              uint64 = 15676
	ChainID0G_GALILEO16601                uint64 = 16601
	ChainID0G16661                        uint64 = 16661
	ChainIDBOTCY16963                     uint64 = 16963
	ChainIDDMD17771                       uint64 = 17771
	ChainIDTRECR18882                     uint64 = 18882
	ChainIDYUUCHAIN19001                  uint64 = 19001
	ChainIDIGRA_CARAVEL_TESTNET19416      uint64 = 19416
	ChainIDSTC_TESTNET19517               uint64 = 19517
	ChainIDSTC_MAINNET19518               uint64 = 19518
	ChainIDMON19901                       uint64 = 19901
	ChainIDENTROPY19911                   uint64 = 19911
	ChainIDATRNXOS19966                   uint64 = 19966
	ChainIDSUP19998                       uint64 = 19998
	ChainIDMANDALA20010                   uint64 = 20010
	ChainIDMANDALA_TESTNET20011           uint64 = 20011
	ChainIDAGLS20033                      uint64 = 20033
	ChainIDNCH20250                       uint64 = 20250
	ChainIDALPEN20310                     uint64 = 20310
	ChainIDEFIK20488                      uint64 = 20488
	ChainIDFLUENT_TESTNET20994            uint64 = 20994
	ChainIDFLASHNET21021                  uint64 = 21021
	ChainIDFLASHNET_TESTNET21022          uint64 = 21022
	ChainIDAUTHEO_TESTNET21270            uint64 = 21270
	ChainIDAPCHAIN21970                   uint64 = 21970
	ChainIDCLES22225                      uint64 = 22225
	ChainIDINCENTIV24101                  uint64 = 24101
	ChainIDAGENTSCOIN24368                uint64 = 24368
	ChainIDFLUENT25363                    uint64 = 25363
	ChainIDH2LAMBDA25821                  uint64 = 25821
	ChainIDTCENT28802                     uint64 = 28802
	ChainIDALPEN29032                     uint64 = 29032
	ChainIDTAIC30181                      uint64 = 30181
	ChainIDETHIQ30303                     uint64 = 30303
	ChainIDTRXC30485                      uint64 = 30485
	ChainIDDAWN_MAINNET30715              uint64 = 30715
	ChainIDZKSYNC_PRIVIDIUM_MAINNET30716  uint64 = 30716
	ChainIDBVM2031338                     uint64 = 31338
	ChainIDPAIX32380                      uint64 = 32380
	ChainIDZIL32769                       uint64 = 32769
	ChainIDECX32904                       uint64 = 32904
	ChainIDZERO_BEACON33000               uint64 = 33000
	ChainIDZERO_SYSTEM33001               uint64 = 33001
	ChainIDZERO_INTEROP33002              uint64 = 33002
	ChainIDZERO_ATLAS33003                uint64 = 33003
	ChainIDZERO_PRIVATE33004              uint64 = 33004
	ChainIDZIL_TESTNET33101               uint64 = 33101
	ChainIDECX_TESTNET33160               uint64 = 33160
	ChainIDQOM33303                       uint64 = 33303
	ChainIDZQ2_DEVNET33469                uint64 = 33469
	ChainIDMORPHTACHYON_TESTNET34952      uint64 = 34952
	ChainIDTRCT35935                      uint64 = 35935
	ChainIDTC36000                        uint64 = 36000
	ChainIDABCORE36888                    uint64 = 36888
	ChainIDWEICHAIN37771                  uint64 = 37771
	ChainIDIGRA38833                      uint64 = 38833
	ChainIDIGRA_TESTNET38836              uint64 = 38836
	ChainIDCIN39500                       uint64 = 39500
	ChainIDSALT40204                      uint64 = 40204
	ChainIDROOT_V_X41295                  uint64 = 41295
	ChainIDNESA41444                      uint64 = 41444
	ChainIDEDU_CHAIN41923                 uint64 = 41923
	ChainIDTEMPO_MODERATO42431            uint64 = 42431
	ChainIDZERO_BEACON_TESTNET43000       uint64 = 43000
	ChainIDZERO_SYSTEM_TESTNET43001       uint64 = 43001
	ChainIDZERO_INTEROP_TESTNET43002      uint64 = 43002
	ChainIDZERO_ATLAS_TESTNET43003        uint64 = 43003
	ChainIDZERO_PRIVATE_TESTNET43004      uint64 = 43004
	ChainIDRIC_TEST45578                  uint64 = 45578
	ChainIDROBINHOODCHAINTESTNET46630     uint64 = 46630
	ChainIDTXCL47294                      uint64 = 47294
	ChainIDBITBADGES50024                 uint64 = 50024
	ChainIDBITBADGES_TESTNET50025         uint64 = 50025
	ChainIDSOMNIA_TESTNET50312            uint64 = 50312
	ChainIDRISA51014                      uint64 = 51014
	ChainIDMEMENTO_MAINNET51888           uint64 = 51888
	ChainIDLAZAI52924                     uint64 = 52924
	ChainIDDATAHAVEN55930                 uint64 = 55930
	ChainIDDATAHAVEN55931                 uint64 = 55931
	ChainIDZKTANENBAUM57057               uint64 = 57057
	ChainIDMEV_COMMIT57173                uint64 = 57173
	ChainIDJELLO61564                     uint64 = 61564
	ChainIDMOVA61900                      uint64 = 61900
	ChainIDAPOLLO62606                    uint64 = 62606
	ChainIDVERI563868                     uint64 = 63868
	ChainIDGALD64137                      uint64 = 64137
	ChainIDOMACHAIN_TESTNET66238          uint64 = 66238
	ChainIDNXPC68414                      uint64 = 68414
	ChainIDETO69670                       uint64 = 69670
	ChainIDPYRA70003                      uint64 = 70003
	ChainIDSEVEN70007                     uint64 = 70007
	ChainIDEKI70101                       uint64 = 70101
	ChainIDCX_TESTNET70707                uint64 = 70707
	ChainIDWCN_TESTNET71117               uint64 = 71117
	ChainIDR_L_S72957                     uint64 = 72957
	ChainIDSELEMAN73571                   uint64 = 73571
	ChainIDCARRCHAIN76672                 uint64 = 76672
	ChainIDVENTURES77717                  uint64 = 77717
	ChainIDBSOS77888                      uint64 = 77888
	ChainIDBRADI78168                     uint64 = 78168
	ChainIDPEXLI_TESTNET78901             uint64 = 78901
	ChainIDHPX80808                       uint64 = 80808
	ChainIDONYX80888                      uint64 = 80888
	ChainIDCODEX81224                     uint64 = 81224
	ChainIDSTEEMVM81630                   uint64 = 81630
	ChainIDTICKO84256                     uint64 = 84256
	ChainIDTICKO_TESTNET84257             uint64 = 84257
	ChainIDPLUS88088                      uint64 = 88088
	ChainIDPTEK88788                      uint64 = 88788
	ChainIDQTSCHAIN88868                  uint64 = 88868
	ChainIDCHILIZ88888                    uint64 = 88888
	ChainIDVALUEX90000                    uint64 = 90000
	ChainIDAPAW90025                      uint64 = 90025
	ChainIDWATR_TESTNET92870              uint64 = 92870
	ChainIDPEPU97741                      uint64 = 97741
	ChainIDG_O_G_O99001                   uint64 = 99001
	ChainIDM_C99002                       uint64 = 99002
	ChainIDTRCT99566                      uint64 = 99566
	ChainIDELYSIUM_TESTNET99801           uint64 = 99801
	ChainIDELYSIUM99901                   uint64 = 99901
	ChainIDQSN99991                       uint64 = 99991
	ChainIDCTC102030                      uint64 = 102030
	ChainIDCTCTEST102031                  uint64 = 102031
	ChainIDCTCDEV102032                   uint64 = 102032
	ChainIDMTF114514                      uint64 = 114514
	ChainIDSWSS122605                     uint64 = 122605
	ChainIDIDS123999                      uint64 = 123999
	ChainIDMITOSIS124816                  uint64 = 124816
	ChainIDGRAV127001                     uint64 = 127001
	ChainIDETLS127823                     uint64 = 127823
	ChainIDFUEL_SEPOLIA129514             uint64 = 129514
	ChainIDRPHX130526                     uint64 = 130526
	ChainIDARIA134235                     uint64 = 134235
	ChainIDMIDXT139420                    uint64 = 139420
	ChainIDBEXCHAIN140586                 uint64 = 140586
	ChainIDKASPLEX167012                  uint64 = 167012
	ChainIDWCN171717                      uint64 = 171717
	ChainIDLIT175200                      uint64 = 175200
	ChainIDDPN179205                      uint64 = 179205
	ChainIDHPP_SEPOLIA181228              uint64 = 181228
	ChainIDGOMCHAIN_MAINNET190278         uint64 = 190278
	ChainIDHPP_MAINNET190415              uint64 = 190415
	ChainIDR0AR193939                     uint64 = 193939
	ChainIDEADX198724                     uint64 = 198724
	ChainIDNOS200024                      uint64 = 200024
	ChainIDFSC201022                      uint64 = 201022
	ChainIDDFN202110                      uint64 = 202110
	ChainIDS_V_S202308                    uint64 = 202308
	ChainIDPROPULENCE_TESTNET202500       uint64 = 202500
	ChainIDAUREXT202506                   uint64 = 202506
	ChainIDKASPLEX202555                  uint64 = 202555
	ChainIDJU202599                       uint64 = 202599
	ChainIDRONIN_SAIGON202601             uint64 = 202601
	ChainIDMIAMA202610                    uint64 = 202610
	ChainIDJUCHAIN210000                  uint64 = 210000
	ChainIDKLT220312                      uint64 = 220312
	ChainIDSIVZ_MAINNET222345             uint64 = 222345
	ChainIDMOCAT222888                    uint64 = 222888
	ChainIDARES232425                     uint64 = 232425
	ChainIDCODE_NEKT_MAINNET235235        uint64 = 235235
	ChainIDULALO_MAINNET237007            uint64 = 237007
	ChainIDSIN250225                      uint64 = 250225
	ChainIDKUB259251                      uint64 = 259251
	ChainIDDATACHAIN271828                uint64 = 271828
	ChainIDMBTX271831                     uint64 = 271831
	ChainIDMBTXL2271832                   uint64 = 271832
	ChainIDCREATOR_CHAIN_TESTNET278701    uint64 = 278701
	ChainIDVALUECHAIN286623               uint64 = 286623
	ChainIDPMT290290                      uint64 = 290290
	ChainIDT1299792                       uint64 = 299792
	ChainIDT1T299892                      uint64 = 299892
	ChainIDAXION303030                    uint64 = 303030
	ChainIDVCR314169                      uint64 = 314169
	ChainIDD_COMM_MAINNET326663           uint64 = 326663
	ChainIDLAX333222                      uint64 = 333222
	ChainIDDEN_MAINNET369369              uint64 = 369369
	ChainIDTEQOIN420377                   uint64 = 420377
	ChainIDINFINITE421018                 uint64 = 421018
	ChainIDMTX478549                      uint64 = 478549
	ChainIDBTCWCHAIN482120                uint64 = 482120
	ChainIDCOMMONS510003                  uint64 = 510003
	ChainIDALPHA511111                    uint64 = 511111
	ChainIDTONE612044                     uint64 = 612044
	ChainIDONE612055                      uint64 = 612055
	ChainIDGALACTICA613419                uint64 = 613419
	ChainIDTGALD641371                    uint64 = 641371
	ChainIDMDX648529                      uint64 = 648529
	ChainIDEDU_CHAIN_TESTNET656476        uint64 = 656476
	ChainIDAZTEC677868                    uint64 = 677868
	ChainIDPHAROS_TESTNET688688           uint64 = 688688
	ChainIDPHAROS_ATLANTIC688689          uint64 = 688689
	ChainIDMARSCHAIN704851                uint64 = 704851
	ChainIDMARSCHAIN_TESTNET704852        uint64 = 704852
	ChainIDDRAMA710520                    uint64 = 710520
	ChainIDPRANA712217                    uint64 = 712217
	ChainIDZBX728990                      uint64 = 728990
	ChainIDCX737373                       uint64 = 737373
	ChainIDTOOG777001                     uint64 = 777001
	ChainIDMAKA_CHAIN_MAINNET777178       uint64 = 777178
	ChainIDFLXG778400                     uint64 = 778400
	ChainIDUST778889                      uint64 = 778889
	ChainIDNVNM_CHAIN_DEVNET787222        uint64 = 787222
	ChainIDNVNM_CHAIN_TESTNET787223       uint64 = 787223
	ChainIDSPACEOS_TESTNET800000          uint64 = 800000
	ChainIDZUG824642                      uint64 = 824642
	ChainIDBINI837291                     uint64 = 837291
	ChainIDHYPERCLUSTER838838             uint64 = 838838
	ChainIDGALACTICA_TESTNET843843        uint64 = 843843
	ChainIDHAQQ_TESTETHIQ853211           uint64 = 853211
	ChainIDWRG882026                      uint64 = 882026
	ChainIDZENITH_EVM_TESTNET936485       uint64 = 936485
	ChainIDPRIMOX970803                   uint64 = 970803
	ChainIDQANTERA974621                  uint64 = 974621
	ChainIDBREVIS_PROVERNET_TESTNET999983 uint64 = 999983
	ChainIDXO1000101                      uint64 = 1000101
	ChainIDWIREX_TESTNET1001996           uint64 = 1001996
	ChainIDROONCHAIN1314520               uint64 = 1314520
	ChainIDXRPLEVM1440000                 uint64 = 1440000
	ChainIDVXS_TESTNET1618032             uint64 = 1618032
	ChainIDDUCK2026001                    uint64 = 2026001
	ChainIDCASHCAT2274228                 uint64 = 2274228
	ChainIDPRV_TESTNET2718281             uint64 = 2718281
	ChainIDARC_TESTNET5042002             uint64 = 5042002
	ChainIDETHEREAL5064014                uint64 = 5064014
	ChainIDLOOT5151706                    uint64 = 5151706
	ChainIDW_I_N_D5552020                 uint64 = 5552020
	ChainIDDOGEOS_CHIKYU6281971           uint64 = 6281971
	ChainIDJMDT7000700                    uint64 = 7000700
	ChainIDNVM7575757                     uint64 = 7575757
	ChainIDDOGITA7770777                  uint64 = 7770777
	ChainIDGRAVITY_TESTNET7771625         uint64 = 7771625
	ChainIDVPC8678671                     uint64 = 8678671
	ChainIDDAVENTRE8770570                uint64 = 8770570
	ChainIDCC_TESTNET11111110             uint64 = 11111110
	ChainIDCC11111111                     uint64 = 11111111
	ChainIDCWN_TESTNET11111327            uint64 = 11111327
	ChainIDCELO_SEP11142220               uint64 = 11142220
	ChainIDRISE_TESTNET11155931           uint64 = 11155931
	ChainIDR0ART11166111                  uint64 = 11166111
	ChainIDWINMAR12142816                 uint64 = 12142816
	ChainIDROONCHAIN13145201              uint64 = 13145201
	ChainIDETHEREAL_TESTNET013374202      uint64 = 13374202
	ChainIDHP13600000                     uint64 = 13600000
	ChainIDSIS13863860                    uint64 = 13863860
	ChainIDBLENO15112026                  uint64 = 15112026
	ChainIDTIPS19251925                   uint64 = 19251925
	ChainIDMA20260131                     uint64 = 20260131
	ChainIDGRIDMINDT20260532              uint64 = 20260532
	ChainIDCOOK20261001                   uint64 = 20261001
	ChainIDZAGROS21072026                 uint64 = 21072026
	ChainIDTJR_DEVNET21519080             uint64 = 21519080
	ChainIDNOWA_TESTNET22052010           uint64 = 22052010
	ChainIDPECU27272727                   uint64 = 27272727
	ChainIDGBDO38391207                   uint64 = 38391207
	ChainIDTENSORA44444444                uint64 = 44444444
	ChainIDUNP47382916                    uint64 = 47382916
	ChainIDELYON55452773                  uint64 = 55452773
	ChainIDAUT65000000                    uint64 = 65000000
	ChainIDAUT_BAKERLOO65010004           uint64 = 65010004
	ChainIDSOVRA65536001                  uint64 = 65536001
	ChainIDKRYVORA73829164                uint64 = 73829164
	ChainIDSX_TORONTO79479957             uint64 = 79479957
	ChainIDBASE_VIBENET84538453           uint64 = 84538453
	ChainIDSHINZO_TESTNET91273001         uint64 = 91273001
	ChainIDPRSM101001000                  uint64 = 101001000
	ChainIDISTCHAIN_MAINNET286022981      uint64 = 286022981
	ChainIDDNACHAIN_MAINNET287022981      uint64 = 287022981
	ChainIDSLCCHAIN_MAINNET288022981      uint64 = 288022981
	ChainIDPAS420420417                   uint64 = 420420417
	ChainIDKSM420420418                   uint64 = 420420418
	ChainIDDOT420420419                   uint64 = 420420419
	ChainIDINFINITE_TESTNET421018001      uint64 = 421018001
	ChainIDSOPHON_OS_TESTNET531050204     uint64 = 531050204
	ChainIDZEN845320009                   uint64 = 845320009
	ChainIDMIRASMANDA1213549903           uint64 = 1213549903
	ChainIDMIRASMANDA_UAT1215655279       uint64 = 1215655279
	ChainIDITANI1229800785                uint64 = 1229800785
	ChainIDOMEGA1313161916                uint64 = 1313161916
	ChainIDRARI1380012617                 uint64 = 1380012617
	ChainIDLUMIA_BEAM_TESTNET2030232745   uint64 = 2030232745
	ChainIDEDENT3735928814                uint64 = 3735928814
	ChainIDFCO11111111111                 uint64 = 11111111111
	ChainIDB_U_B30143370385               uint64 = 30143370385
	ChainIDSOBYA357812033857              uint64 = 357812033857
	ChainIDGXY420420420420                uint64 = 420420420420
	ChainIDSTRATO123354377739506          uint64 = 123354377739506
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
			Name:     "Quaiscan",
			URL:      "https://quaiscan.io",
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
			Name:     "blockscout",
			URL:      "https://flare-explorer.flare.network",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "Routescan",
			URL:      "https://mainnet.flarescan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Plato53 = Chain{
	Name:      "Plato Mainnet",
	Chain:     "Plato",
	ChainID:   53,
	NetworkID: 53,
	ShortName: "plato",
	RPC: []string{
		"https://api-mainnet.plato.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Plato USDC",
		Symbol:   "USDC",
		Decimals: 6,
	},
	Explorers: []Explorer{
		{
			Name: "Plato Mainnet Explorer",
			URL:  "https://app.plato.xyz/explorer",
		},
	},
}

var Plato62 = Chain{
	Name:      "Plato Testnet",
	Chain:     "Plato",
	ChainID:   62,
	NetworkID: 62,
	ShortName: "plato",
	RPC: []string{
		"https://api-testnet.plato.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Plato USDC",
		Symbol:   "USDC",
		Decimals: 6,
	},
	Explorers: []Explorer{
		{
			Name: "Plato Testnet Explorer",
			URL:  "https://app.plato.xyz/explorer",
		},
	},
}

var Amzg65 = Chain{
	Name:      "Amazonic Blockchain",
	Chain:     "AMZG",
	ChainID:   65,
	NetworkID: 65,
	ShortName: "amzg",
	RPC: []string{
		"https://rpc.amz1.com.br",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Amazonic Green",
		Symbol:   "AMZG",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://amazonicone.com.br"}[0],
	Explorers: []Explorer{
		{
			Name:     "AMZ Scan",
			URL:      "https://amzexplorer.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Plato71 = Chain{
	Name:      "Plato Devnet",
	Chain:     "Plato",
	ChainID:   71,
	NetworkID: 71,
	ShortName: "plato",
	RPC: []string{
		"https://api-devnet.plato.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Plato USDC",
		Symbol:   "USDC",
		Decimals: 6,
	},
	Explorers: []Explorer{
		{
			Name: "Plato Devnet Explorer",
			URL:  "https://dev.plato.xyz/explorer",
		},
	},
}

var Shibariumecosystem109 = Chain{
	Name:      "Shibarium",
	Chain:     "Shibarium",
	ChainID:   109,
	NetworkID: 109,
	ShortName: "shibariumecosystem",
	RPC: []string{
		"https://rpc.shibarium.shib.io",
		"https://rpc.shibrpc.com",
		"https://shib.nownodes.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BONE Shibarium",
		Symbol:   "BONE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://shibariumecosystem.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "shibariumscan",
			URL:      "https://shibariumscan.io",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Monad143 = Chain{
	Name:      "Monad",
	Chain:     "MON",
	ChainID:   143,
	NetworkID: 143,
	ShortName: "monad",
	RPC: []string{
		"https://rpc.monad.xyz",
		"https://rpc1.monad.xyz",
		"https://rpc2.monad.xyz",
		"https://rpc3.monad.xyz",
		"https://rpc4.monad.xyz",
		"https://rpc-mainnet.monadinfra.com",
		"https://monad.rpc.blxrbdn.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Monad",
		Symbol:   "MON",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://monad.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Monad Vision",
			URL:      "https://monadvision.com",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "Monadscan",
			URL:      "https://monadscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "Valopers",
			URL:      "https://monad.valopers.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Jito149149 = Chain{
	Name:      "JITO Public Network",
	Chain:     "JITO",
	ChainID:   149,
	NetworkID: 149,
	ShortName: "jito149",
	RPC: []string{
		"https://rpc.flowpe.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "JITO",
		Symbol:   "JITO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://jito.flowpe.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "jito-explorer",
			URL:      "https://explorer.flowpe.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Farm165 = Chain{
	Name:      "Farm Chain",
	Chain:     "Farm Chain",
	ChainID:   165,
	NetworkID: 165,
	ShortName: "Farm",
	RPC: []string{
		"https://rpc.fmcscan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Farm Coin",
		Symbol:   "FMC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://fmcscan.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "FMCScan",
			URL:      "https://fmcscan.com",
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
			Name:     "Nomina Explorer",
			URL:      "https://nomscan.io/",
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
			Name:     "Watr Explorer",
			URL:      "https://explorer.watr.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var VcTestnet206 = Chain{
	Name:      "VinuChain Testnet",
	Chain:     "VC",
	ChainID:   206,
	NetworkID: 206,
	ShortName: "vc-testnet",
	RPC: []string{
		"https://testnet-rpc.vinuchain.org",
		"https://vinufoundation-rpc.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "VinuChain",
		Symbol:   "VC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://vinuchain.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "VinuExplorer Testnet",
			URL:      "https://testnet.vinuexplorer.org",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "VinuScan Testnet",
			URL:      "https://testnet.vinuscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Vc207 = Chain{
	Name:      "VinuChain",
	Chain:     "VC",
	ChainID:   207,
	NetworkID: 207,
	ShortName: "vc",
	RPC: []string{
		"https://rpc.vinuchain.org",
		"https://vinuchain-rpc.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "VinuChain",
		Symbol:   "VC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://vinuchain.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "VinuExplorer",
			URL:      "https://vinuexplorer.org",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "VinuScan",
			URL:      "https://mainnet.vinuscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Iopn222 = Chain{
	Name:      "OPN Chain Mainnet",
	Chain:     "IOPN",
	ChainID:   222,
	NetworkID: 222,
	ShortName: "iopn",
	RPC: []string{
		"https://mainnet-rpc.iopn.tech",
		"https://mainnet-rpc2.iopn.tech",
		"https://mainnet-rpc3.iopn.tech",
	},
	NativeCurrency: NativeCurrency{
		Name:     "IOPN",
		Symbol:   "IOPN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://chain.iopn.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "OPNScan",
			URL:      "https://opnscan.io",
			Standard: &[]string{"none"}[0],
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
			Name:     "TAC Explorer",
			URL:      "https://explorer.tac.build",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "Blockscout",
			URL:      "https://tac.blockscout.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Orbinum270 = Chain{
	Name:      "Orbinum",
	Chain:     "ORB",
	ChainID:   270,
	NetworkID: 270,
	ShortName: "orbinum",
	RPC: []string{
		"https://rpc-1.orbinum.io",
		"https://rpc-2.orbinum.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ORB",
		Symbol:   "ORB",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.orbinum.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "Orbinum Privacy Explorer",
			URL:      "https://explorer.orbinum.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Drby275 = Chain{
	Name:      "DrilByte Mainnet",
	Chain:     "DRBY",
	ChainID:   275,
	NetworkID: 275,
	ShortName: "drby",
	RPC: []string{
		"https://rpc.drilbyte.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "DrilByte",
		Symbol:   "DRBY",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://drilbyte.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "DrilByte Explorer",
			URL:      "https://explorer.drilbyte.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Netx287 = Chain{
	Name:      "NetX Mainnet",
	Chain:     "NETX",
	ChainID:   287,
	NetworkID: 287,
	ShortName: "netx",
	RPC: []string{
		"https://rpc.netxscan.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "NETX",
		Symbol:   "NETX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://netxscan.io/"}[0],
	Explorers: []Explorer{
		{
			Name:     "NetXScan",
			URL:      "https://netxscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Hsp292292 = Chain{
	Name:      "HashSphere Private Network 292",
	Chain:     "HashSphere-292",
	ChainID:   292,
	NetworkID: 292,
	ShortName: "hsp-292",
	RPC: []string{
		"http://rpc-292.champagnesphere.net/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "hbar",
		Symbol:   "HBAR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://hashgraph.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "HashSphere Explorer 292",
			URL:      "http://explorer-292.champagnesphere.net",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Goliath327 = Chain{
	Name:      "Goliath",
	Chain:     "GOLIATH",
	ChainID:   327,
	NetworkID: 327,
	ShortName: "goliath",
	RPC: []string{
		"https://rpc.goliath.net",
	},
	NativeCurrency: NativeCurrency{
		Name:     "XCN",
		Symbol:   "XCN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.goliath.net"}[0],
	Explorers: []Explorer{
		{
			Name:     "Goliath Explorer",
			URL:      "https://explorer.goliath.net",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Virbicoin329 = Chain{
	Name:      "VirBiCoin",
	Chain:     "VBC",
	ChainID:   329,
	NetworkID: 329,
	ShortName: "virbicoin",
	RPC: []string{
		"https://rpc.digitalregion.jp",
	},
	NativeCurrency: NativeCurrency{
		Name:     "VBC",
		Symbol:   "VBC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://vbc.digitalregion.jp"}[0],
	Explorers: []Explorer{
		{
			Name:     "VirBiCoin Explorer",
			URL:      "https://explorer.digitalregion.jp",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Bourse343 = Chain{
	Name:      "Capital Exchange",
	Chain:     "BOURSE",
	ChainID:   343,
	NetworkID: 343,
	ShortName: "bourse",
	RPC: []string{
		"https://rpc.capitalexchange.com",
		"https://rpc.capitalexchange.digital",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Bourse",
		Symbol:   "BOURSE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://about.capitalexchange.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Capital Exchange | Digital",
			URL:      "https://bourse.capitalexchange.com",
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
			Name:     "Kross Network Explorer",
			URL:      "https://explorer.kross.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Dnc362 = Chain{
	Name:      "Dancore",
	Chain:     "DNC",
	ChainID:   362,
	NetworkID: 362,
	ShortName: "dnc",
	RPC: []string{
		"https://rpc.dancorescan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Dancore",
		Symbol:   "DNC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://dancore.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "dancorescan",
			URL:      "https://dancorescan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Lnr389 = Chain{
	Name:      "LunaroChain Mainnet",
	Chain:     "LNR",
	ChainID:   389,
	NetworkID: 389,
	ShortName: "lnr",
	RPC: []string{
		"https://rpc.lunaro.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Lunaro",
		Symbol:   "LNR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://lunaro.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "LunaroScan",
			URL:      "https://scan.lunaro.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Actumic402 = Chain{
	Name:      "Actumic Mainnet",
	Chain:     "actumic",
	ChainID:   402,
	NetworkID: 402,
	ShortName: "actumic",
	RPC: []string{
		"https://scan.actumic.com/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "USD Coin",
		Symbol:   "USDC",
		Decimals: 6,
	},
	InfoURL: &[]string{"https://actumic.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Actumic Explorer",
			URL:      "https://scan.actumic.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var DTestnet430 = Chain{
	Name:      "D Testnet",
	Chain:     "Dchain",
	ChainID:   430,
	NetworkID: 430,
	ShortName: "d-testnet",
	RPC: []string{
		"https://eth-testnet.platformd.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Dchain",
		Symbol:   "DT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://platformd.io"}[0],
}

var DMainnet433 = Chain{
	Name:      "D Mainnet",
	Chain:     "Dchain",
	ChainID:   433,
	NetworkID: 433,
	ShortName: "d-mainnet",
	RPC: []string{
		"https://eth.platformd.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Dchain",
		Symbol:   "DT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://platformd.io"}[0],
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
			Name:     "Areum Explorer",
			URL:      "https://explorer.areum.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Campmainnet484 = Chain{
	Name:      "Camp Network Mainnet",
	Chain:     "CAMP",
	ChainID:   484,
	NetworkID: 484,
	ShortName: "campmainnet",
	RPC: []string{
		"https://rpc-mainnet.campnetwork.xyz/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CAMP",
		Symbol:   "CAMP",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.campnetwork.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://camp.cloud.blockscout.com",
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
			Name:     "lightchain explorer",
			URL:      "https://testnet.lightscan.app",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Doto505 = Chain{
	Name:      "DotOne Smart Chain",
	Chain:     "DOTO",
	ChainID:   505,
	NetworkID: 505,
	ShortName: "doto",
	RPC: []string{
		"https://rpc.dotone.online",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Doto",
		Symbol:   "DOTO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://dotone.online"}[0],
	Explorers: []Explorer{
		{
			Name:     "dotscan",
			URL:      "https://dotscan.one",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Btb509 = Chain{
	Name:      "BTB Chain Mainnet",
	Chain:     "BTB",
	ChainID:   509,
	NetworkID: 509,
	ShortName: "btb",
	RPC: []string{
		"https://btb-dataseed.btbchain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BitTap Chain Token",
		Symbol:   "BTB",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.btbchain.org/"}[0],
	Explorers: []Explorer{
		{
			Name:     "BTB Chain Explorer",
			URL:      "https://btb-explorer.btbchain.org",
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
			Name:     "Syndicate Explorer",
			URL:      "https://explorer.syndicate.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Fyro511 = Chain{
	Name:      "FyroChain Mainnet",
	Chain:     "FYRO",
	ChainID:   511,
	NetworkID: 511,
	ShortName: "fyro",
	RPC: []string{
		"https://rpc.fyrochain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Fyro",
		Symbol:   "FYRO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://fyrochain.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "FyroScan",
			URL:      "https://fyrochain.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Mawari576 = Chain{
	Name:      "Mawari Testnet",
	Chain:     "MAWARI",
	ChainID:   576,
	NetworkID: 576,
	ShortName: "mawari",
	RPC: []string{
		"https://rpc.testnet.mawari.net/http",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Mawari",
		Symbol:   "MAWARI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://testnet.mawari.net"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://explorer.testnet.mawari.net/",
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

var NetxTestnet587 = Chain{
	Name:      "NetX Testnet",
	Chain:     "NETX",
	ChainID:   587,
	NetworkID: 587,
	ShortName: "netx-testnet",
	RPC: []string{
		"https://testnetrpc.netxscan.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "NETX",
		Symbol:   "NETX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://netx.world/"}[0],
	Explorers: []Explorer{
		{
			Name:     "NetXScan Testnet",
			URL:      "https://testnet.netxscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var BattlechainTestnet627 = Chain{
	Name:      "BattleChain Testnet",
	Chain:     "BattleChain",
	ChainID:   627,
	NetworkID: 627,
	ShortName: "battlechain-testnet",
	RPC: []string{
		"https://testnet.battlechain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://battlechain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "BattleChain Testnet Explorer",
			URL:      "https://explorer.testnet.battlechain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Bot677 = Chain{
	Name:      "BOT Chain Mainnet",
	Chain:     "BOT",
	ChainID:   677,
	NetworkID: 677,
	ShortName: "bot",
	RPC: []string{
		"https://rpc.botchain.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BOT",
		Symbol:   "BOT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.botchain.ai/"}[0],
	Explorers: []Explorer{
		{
			Name: "botscan",
			URL:  "https://scan.botchain.ai/",
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
			Name:     "JASMY Chain Testnet Explorer",
			URL:      "https://jasmy-chain-testnet-explorer.alt.technology",
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
			Name:     "Uniocean Explorer",
			URL:      "https://explorer.testnet.uniocean.network",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Lxon724 = Chain{
	Name:      "LXON Mainnet",
	Chain:     "LXON",
	ChainID:   724,
	NetworkID: 724,
	ShortName: "lxon",
	RPC: []string{
		"https://rpc.lxon.in",
	},
	NativeCurrency: NativeCurrency{
		Name:     "LXON",
		Symbol:   "XON",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.lxon.in"}[0],
	Explorers: []Explorer{
		{
			Name:     "LXON Explorer",
			URL:      "https://explorer.lxon.in",
			Standard: &[]string{"EIP3091"}[0],
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
			Name:     "blockscout",
			URL:      "https://testnet.capxscan.com",
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
			Name:     "blockscout",
			URL:      "https://capxscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Qrdx762 = Chain{
	Name:      "QRDX Mainnet",
	Chain:     "QRDX",
	ChainID:   762,
	NetworkID: 762,
	ShortName: "qrdx",
	RPC: []string{
		"https://rpc.qrdx.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "QRDX",
		Symbol:   "QRDX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://qrdx.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "qrdx-explorer",
			URL:      "https://explorer.qrdx.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Qelt770 = Chain{
	Name:      "QELT Mainnet",
	Chain:     "QELT",
	ChainID:   770,
	NetworkID: 770,
	ShortName: "qelt",
	RPC: []string{
		"https://mainnet.qelt.ai",
		"https://mainnet2.qelt.ai",
		"https://mainnet3.qelt.ai",
		"https://mainnet4.qelt.ai",
		"https://mainnet5.qelt.ai",
		"https://archivem.qelt.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "QELT",
		Symbol:   "QELT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://qelt.ai"}[0],
	Explorers: []Explorer{
		{
			Name:     "QELTScan",
			URL:      "https://qeltscan.ai",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var QeltTestnet771 = Chain{
	Name:      "QELT Testnet",
	Chain:     "QELT",
	ChainID:   771,
	NetworkID: 771,
	ShortName: "qelt-testnet",
	RPC: []string{
		"https://testnet.qelt.ai",
		"https://archive.qelt.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "QELT",
		Symbol:   "QELT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://qelt.ai"}[0],
	Explorers: []Explorer{
		{
			Name:     "QELTScan Testnet",
			URL:      "https://testnet.qeltscan.ai",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ritual784 = Chain{
	Name:      "Ritual Network",
	Chain:     "Ritual Network",
	ChainID:   784,
	NetworkID: 784,
	ShortName: "ritual",
	RPC: []string{
		"https://rpc.ritualfoundation.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ritual",
		Symbol:   "RITUAL",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.ritualfoundation.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "Ritual Network Explorer",
			URL:      "https://explorer.ritualfoundation.org",
			Standard: &[]string{"none"}[0],
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
			Name:     "Binary Explorer",
			URL:      "https://explorer-binaryholdings.cogitus.io",
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

var Mars890 = Chain{
	Name:      "Marschain",
	Chain:     "MARS",
	ChainID:   890,
	NetworkID: 890,
	ShortName: "mars",
	RPC: []string{
		"https://rpcs.marschain.net/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Mars",
		Symbol:   "MARSCHAIN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://marschain.net"}[0],
	Explorers: []Explorer{
		{
			Name:     "Mars Explorer",
			URL:      "https://explorer.marschain.net",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Wbtc892 = Chain{
	Name:      "Advance Blockchain Mainnet",
	Chain:     "ABC",
	ChainID:   892,
	NetworkID: 892,
	ShortName: "wbtc",
	RPC: []string{
		"https://rpc1.advanceblockchain.io",
		"https://rpc2.advanceblockchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "White Bitcoin",
		Symbol:   "WBTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://advanceblockchain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "advanceblockchainexplorer",
			URL:      "https://explorer.advanceblockchain.io/",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Fene920 = Chain{
	Name:      "Fenine Testnet",
	Chain:     "Fenine",
	ChainID:   920,
	NetworkID: 920,
	ShortName: "fene",
	RPC: []string{
		"https://rpc.fene.app",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Fenine",
		Symbol:   "FENE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://fene.app"}[0],
	Explorers: []Explorer{
		{
			Name:     "Fenscan Testnet",
			URL:      "https://explorer.fene.app",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Zel935 = Chain{
	Name:      "Zano Execution Layer",
	Chain:     "ZEL",
	ChainID:   935,
	NetworkID: 935,
	ShortName: "zel",
	RPC: []string{
		"https://eth-rpc.node1.zano.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Zel",
		Symbol:   "ZEL",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://zano.com"}[0],
}

var Iopn984 = Chain{
	Name:      "OPN Chain Testnet",
	Chain:     "IOPN",
	ChainID:   984,
	NetworkID: 984,
	ShortName: "iopn",
	RPC: []string{
		"https://testnet-rpc.iopn.tech",
		"https://testnet-rpc2.iopn.tech",
	},
	NativeCurrency: NativeCurrency{
		Name:     "IOPN",
		Symbol:   "IOPN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://chain.iopn.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "OPNScan Testnet",
			URL:      "https://testnet.iopn.tech",
			Standard: &[]string{"none"}[0],
		},
	},
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
		Name:     "USDT0",
		Symbol:   "USDT0",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://stable.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "stablescan",
			URL:      "https://stablescan.xyz",
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
		"https://hyperliquid.api.onfinality.io/evm/public",
		"https://hyperliquid.rpc.blxrbdn.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "HYPE",
		Symbol:   "HYPE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://hyperfoundation.org/"}[0],
	Explorers: []Explorer{
		{
			Name: "HyperEVMScan",
			URL:  "https://hyperevmscan.io/",
		},
	},
}

var Nura1020 = Chain{
	Name:      "Nura Chain",
	Chain:     "Nura",
	ChainID:   1020,
	NetworkID: 1020,
	ShortName: "nura",
	RPC: []string{
		"https://rpc.nurachain.net",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Nura Coin",
		Symbol:   "NURA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://nurachain.net"}[0],
	Explorers: []Explorer{
		{
			Name:     "Nura Explorer",
			URL:      "https://explorer.nurachain.net",
			Standard: &[]string{"EIP3091"}[0],
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

var Anta1082 = Chain{
	Name:      "Anannta",
	Chain:     "ANANT",
	ChainID:   1082,
	NetworkID: 1082,
	ShortName: "anta",
	RPC: []string{
		"https://rpc-anant.ananntascan.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Anannta",
		Symbol:   "ANANT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://anannta.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "Anannta Explorer",
			URL:      "https://ananntascan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Xenea1096 = Chain{
	Name:      "Xenea Ubusuna Testnet",
	Chain:     "TXENE",
	ChainID:   1096,
	NetworkID: 1096,
	ShortName: "Xenea",
	RPC: []string{
		"https://rpc-ubusuna.xeneascan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Xenea Ubusuna Testnet Token",
		Symbol:   "TXENE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://xenea.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "Xenea Ubusuna Testnet Explorer",
			URL:      "https://ubusuna.xeneascan.com",
			Standard: &[]string{"EIP3091"}[0],
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

var Grx1110 = Chain{
	Name:      "GRX Mainnet",
	Chain:     "GRX",
	ChainID:   1110,
	NetworkID: 1110,
	ShortName: "grx",
	RPC: []string{
		"https://rpc.grxchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "GRX",
		Symbol:   "GRX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.grxchain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "grxscan",
			URL:      "https://grxscan.io",
			Standard: &[]string{"EIP3091"}[0],
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
			Name:     "ecmscan",
			URL:      "https://explorer.testnet.ecmscan.io/",
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
			Name:     "TakerScan",
			URL:      "https://explorer.taker.xyz",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Qry1129 = Chain{
	Name:      "QuarryChain Testnet",
	Chain:     "QuarryChain",
	ChainID:   1129,
	NetworkID: 1129,
	ShortName: "qry",
	RPC: []string{
		"https://rpc.testnet.quarrychain.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Quarry",
		Symbol:   "QRY",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://quarrychain.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "QuarryScan",
			URL:      "https://explorer.testnet.quarrychain.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ion1143 = Chain{
	Name:      "ION Network",
	Chain:     "ION",
	ChainID:   1143,
	NetworkID: 1143,
	ShortName: "ion",
	RPC: []string{
		"https://ion.qaflanti.ir/api/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ION",
		Symbol:   "ION",
		Decimals: 4,
	},
	InfoURL: &[]string{"https://ion.qaflanti.ir"}[0],
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
			Name:     "Intuition Explorer (Mainnet)",
			URL:      "https://intuition.calderaexplorer.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "Intuition Explorer (Mainnet)",
			URL:      "https://explorer.intuition.systems",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Joa1191 = Chain{
	Name:      "JOA Chain",
	Chain:     "JOA",
	ChainID:   1191,
	NetworkID: 1191,
	ShortName: "joa",
	RPC: []string{
		"https://rpc.joachain.live",
	},
	NativeCurrency: NativeCurrency{
		Name:     "JOA Coin",
		Symbol:   "JOA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://joachain.live"}[0],
	Explorers: []Explorer{
		{
			Name:     "JOA Explorer",
			URL:      "https://scan.joachain.live",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Bmc1199 = Chain{
	Name:      "BMC Chain",
	Chain:     "BMC",
	ChainID:   1199,
	NetworkID: 1199,
	ShortName: "bmc",
	RPC: []string{
		"https://mainnet-rpc.bmcscan.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Bitmeta Coin",
		Symbol:   "BMC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://bmcscan.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "BMCScan",
			URL:      "https://bmcscan.io",
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
			Name:     "Fitochain Explorer",
			URL:      "https://explorer.fitochain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Onn1330 = Chain{
	Name:      "ONNChain",
	Chain:     "ONN",
	ChainID:   1330,
	NetworkID: 1330,
	ShortName: "onn",
	RPC: []string{
		"https://mainnet.onnscan.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ONN",
		Symbol:   "ONN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://onnscan.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "ONNChain Explorer",
			URL:      "https://onnscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Bie1342 = Chain{
	Name:      "BIE",
	Chain:     "BIE",
	ChainID:   1342,
	NetworkID: 1342,
	ShortName: "bie",
	RPC: []string{
		"https://rpc.bie.ai",
		"https://api.bie.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BIE",
		Symbol:   "BIE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://bie.ai"}[0],
	Explorers: []Explorer{
		{
			Name:     "BIE Explorer",
			URL:      "https://app.bie.ai/explorer",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Midx1394 = Chain{
	Name:      "Midpoint Cross",
	Chain:     "MIDX",
	ChainID:   1394,
	NetworkID: 1394,
	ShortName: "midx",
	RPC: []string{
		"https://mainnet.midpointcross.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Midpoint Cross",
		Symbol:   "MIDX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.midpointcross.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Midpoint Cross",
			URL:      "https://transactions.midpointcross.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Bdag1404 = Chain{
	Name:      "BlockDAG Network",
	Chain:     "BDAG",
	ChainID:   1404,
	NetworkID: 1404,
	ShortName: "bdag",
	RPC: []string{
		"https://rpc.bdagscan.com",
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
			URL:  "https://bdagscan.com/",
		},
		{
			Name:     "WelshDAG Explorer",
			URL:      "https://scan.welshdag.trade",
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
			Name:     "subscan",
			URL:      "https://vflow.subscan.io",
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
			Name:     "subscan",
			URL:      "https://vflow-testnet.subscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Lrx1410 = Chain{
	Name:      "Liberty Reserve Chain",
	Chain:     "LRX",
	ChainID:   1410,
	NetworkID: 1410,
	ShortName: "lrx",
	RPC: []string{
		"https://rpc.lrxmining.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Liberty Reserve",
		Symbol:   "LRX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://lrxmining.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "LRXScan",
			URL:      "https://scan.lrxmining.com",
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
			Name:     "blockscout",
			URL:      "https://testnet.blockscout.injective.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Cmxr1475 = Chain{
	Name:      "CRYMAD Chain",
	Chain:     "CMX",
	ChainID:   1475,
	NetworkID: 1475,
	ShortName: "cmxr",
	RPC: []string{
		"https://rpc.cmxofficial.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CryMadX",
		Symbol:   "CMX-R",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://cmxofficial.com/"}[0],
	Explorers: []Explorer{
		{
			Name: "CRYMAD Chain Explorer",
			URL:  "https://explorer.cmxofficial.com/",
		},
	},
}

var Roonchain1492 = Chain{
	Name:      "ROON Mainnet",
	Chain:     "ROON",
	ChainID:   1492,
	NetworkID: 1492,
	ShortName: "roonchain",
	RPC: []string{
		"https://rpc.roonchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ROON",
		Symbol:   "ROON",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://roonchain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Roon Mainnet explorer",
			URL:      "https://browser.roonchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Midl1500 = Chain{
	Name:      "Midl Mainnet",
	Chain:     "MIDL",
	ChainID:   1500,
	NetworkID: 1500,
	ShortName: "midl",
	RPC: []string{
		"https://rpc.midl.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Bitcoin",
		Symbol:   "BTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://midl.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Midl Mainnet Explorer",
			URL:      "blockscout.midl.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var DolphinetTestnet1519 = Chain{
	Name:      "Dolphinet Testnet",
	Chain:     "DOL",
	ChainID:   1519,
	NetworkID: 1519,
	ShortName: "dolphinet-testnet",
	RPC: []string{
		"https://rpc-testnet.dolphinode.world",
	},
	NativeCurrency: NativeCurrency{
		Name:     "DOL",
		Symbol:   "DOL",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://explorer-testnet.dolphinode.world/"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://explorer-testnet.dolphinode.world/",
		},
	},
}

var Dolphinet1520 = Chain{
	Name:      "Dolphinet Mainnet",
	Chain:     "DOL",
	ChainID:   1520,
	NetworkID: 1520,
	ShortName: "dolphinet",
	RPC: []string{
		"https://rpc.dolphinode.world",
		"https://rpc-dev01.dolphinode.world",
	},
	NativeCurrency: NativeCurrency{
		Name:     "DOL",
		Symbol:   "DOL",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://chain.dolphinode.world/"}[0],
	Explorers: []Explorer{
		{
			Name: "blockscout",
			URL:  "https://explorer.dolphinode.world/",
		},
	},
}

var Mawari1576 = Chain{
	Name:      "Mawari Mainnet",
	Chain:     "MAWARI",
	ChainID:   1576,
	NetworkID: 1576,
	ShortName: "mawari",
	RPC: []string{
		"https://rpc.mawari.net/http",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MAWARI",
		Symbol:   "MAWARI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mawari.net"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://explorer.mainnet.mawari.net",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var NvnmEvm1611 = Chain{
	Name:      "NVNM Mainnet EVM",
	Chain:     "NVNM",
	ChainID:   1611,
	NetworkID: 1611,
	ShortName: "nvnm-evm",
	RPC: []string{
		"https://evm.nvnmchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MANTRA USD",
		Symbol:   "MANTRAUSD",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.nvnmchain.io/"}[0],
	Explorers: []Explorer{
		{
			Name:     "NVNM Chain Mainnet explorer",
			URL:      "https://explorer.evm.nvnmchain.io/",
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
			Name:     "T-REX blockchain explorer",
			URL:      "https://explorer.trex.xyz",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Xgr1643 = Chain{
	Name:      "XGR Mainnet",
	Chain:     "XGR",
	ChainID:   1643,
	NetworkID: 1643,
	ShortName: "xgr",
	RPC: []string{
		"https://rpc.xgr.network",
		"https://rpc1.xgr.network",
		"https://rpc2.xgr.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "XGR",
		Symbol:   "XGR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://xgr.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "XGR Explorer",
			URL:      "https://explorer.xgr.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Pharos1672 = Chain{
	Name:      "Pharos Mainnet",
	Chain:     "Pharos",
	ChainID:   1672,
	NetworkID: 1672,
	ShortName: "pharos",
	RPC: []string{
		"https://rpc.pharos.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "PharosCoin",
		Symbol:   "PROS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://pharos.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Pharos Explorer",
			URL:      "https://pharosscan.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var OBS1719 = Chain{
	Name:      "Obsidian Mainnet",
	Chain:     "OBS",
	ChainID:   1719,
	NetworkID: 1719,
	ShortName: "OBS",
	RPC: []string{
		"https://kr-4.pixelzx.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Obsidian",
		Symbol:   "OBS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://pistonx.neocities.org/"}[0],
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
		"https://injective-evm-rpc.scvsecurity.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Injective",
		Symbol:   "INJ",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://injective.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://blockscout.injective.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var RubyTestnet1810 = Chain{
	Name:      "Ruby Chain Testnet",
	Chain:     "RUBY",
	ChainID:   1810,
	NetworkID: 1810,
	ShortName: "ruby-testnet",
	RPC: []string{
		"https://rpc.ruby.testnet.finetry.win",
		"https://rpc2.ruby.testnet.finetry.win",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ruby",
		Symbol:   "RUBY",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://elektrum.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "Ruby Chain Explorer",
			URL:      "https://explorer.ruby.testnet.finetry.win",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var WCHSepolia1874 = Chain{
	Name:      "Whitechain Sepolia",
	Chain:     "WCH",
	ChainID:   1874,
	NetworkID: 1874,
	ShortName: "WCH Sepolia",
	RPC: []string{
		"https://rpc.testnet.whitechain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "WBT",
		Symbol:   "WBT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.whitechain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "Whitechain Testnet Explorer",
			URL:      "https://explorer.testnet.whitechain.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Xgrt1879 = Chain{
	Name:      "XGR Testnet",
	Chain:     "XGR",
	ChainID:   1879,
	NetworkID: 1879,
	ShortName: "xgrt",
	RPC: []string{
		"https://rpc.testnet.xgr.network",
		"https://rpc1.testnet.xgr.network",
		"https://rpc2.testnet.xgr.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "XGR",
		Symbol:   "XGR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://xgr.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "XGR Testnet Explorer",
			URL:      "https://explorer.testnet.xgr.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Recr1888 = Chain{
	Name:      "RecorderCoin Mainnet",
	Chain:     "RECR",
	ChainID:   1888,
	NetworkID: 223344,
	ShortName: "recr",
	RPC: []string{
		"https://rpc.recordercoin.org",
		"https://rpc1.recordercoin.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "RecorderCoin",
		Symbol:   "RECR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://recordercoin.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "RecorderCoin Explorer",
			URL:      "https://explorer.recordercoin.org",
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
			Name:     "Epix Explorer",
			URL:      "http://scan.epix.zone/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Turkchain1919 = Chain{
	Name:      "Turkchain",
	Chain:     "Turkchain",
	ChainID:   1919,
	NetworkID: 1919,
	ShortName: "turkchain",
	RPC: []string{
		"https://rpc.turkscan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "TC",
		Symbol:   "TURK",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://turkchain1919.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "TURKCHAIN Explorer",
			URL:      "https://turkscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Tpc1925 = Chain{
	Name:      "Tipschain Mainnet",
	Chain:     "TPC",
	ChainID:   1925,
	NetworkID: 1925,
	ShortName: "tpc",
	RPC: []string{
		"https://rpc.tipschain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Tipscoin",
		Symbol:   "TPC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tipschain.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "Tipschainscan",
			URL:      "https://tipschain.online",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Egold1932 = Chain{
	Name:      "EGoldChain Mainnet",
	Chain:     "EGold",
	ChainID:   1932,
	NetworkID: 1932,
	ShortName: "egold",
	RPC: []string{
		"https://rpc.goldscan.gold",
	},
	NativeCurrency: NativeCurrency{
		Name:     "EGold",
		Symbol:   "XAU",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://webgold.gold/"}[0],
	Explorers: []Explorer{
		{
			Name:     "GoldScan Explorer",
			URL:      "https://goldscan.gold",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Tokb1952 = Chain{
	Name:      "X Layer Testnet",
	Chain:     "X Layer",
	ChainID:   1952,
	NetworkID: 1952,
	ShortName: "tokb",
	RPC: []string{
		"https://testrpc.xlayer.tech",
		"https://xlayertestrpc.okx.com",
		"https://endpoints.omniatech.io/v1/xlayer/testnet/public",
		"https://rpc.ankr.com/xlayer_testnet",
		"https://xlayer-testnet.drpc.org",
		"https://moonbase-rpc.dwellir.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "X Layer Global Utility Token in testnet",
		Symbol:   "OKB",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.okx.com/xlayer"}[0],
	Explorers: []Explorer{
		{
			Name:     "OKLink",
			URL:      "https://www.oklink.com/xlayer-test",
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

var Dna1991 = Chain{
	Name:      "DNetwork",
	Chain:     "DNetwork",
	ChainID:   1991,
	NetworkID: 1991,
	ShortName: "dna",
	RPC: []string{
		"https://rpc.dnetwork.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "D Network Asset",
		Symbol:   "DNA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://dnetwork.ai"}[0],
	Explorers: []Explorer{
		{
			Name:     "DNetwork Scan",
			URL:      "https://scan.dnetwork.ai",
			Standard: &[]string{"EIP3091"}[0],
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
			URL:  "https://explorer.roninchain.com/",
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
			Name:     "routescan",
			URL:      "https://devnet.routescan.io/?rpc=https://rpc1.martianchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "subnets avax",
			URL:      "https://subnets.avax.network/subnets/28aQXYENwytzxEwyYMZDtGjpUmP67eWkyoHdGGyid6gEACeg9x",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "ErolExplorer",
			URL:      "https://explorer.martianchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var ArmaTestnet2028 = Chain{
	Name:      "ArmaChain Testnet",
	Chain:     "ArmaChain",
	ChainID:   2028,
	NetworkID: 2028,
	ShortName: "arma-testnet",
	RPC: []string{
		"https://rpc.armascan.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Testnet ARMA",
		Symbol:   "tARMA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://armadex.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "ArmaScan",
			URL:      "https://armascan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Fst2034 = Chain{
	Name:      "FST Smart Chain",
	Chain:     "FST",
	ChainID:   2034,
	NetworkID: 2034,
	ShortName: "fst",
	RPC: []string{
		"https://mainnet.fenixst.io",
		"https://node2.fenixst.io",
		"https://node3.fenixst.io",
		"https://node4.fenixst.io",
		"https://node5.fenixst.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "FST",
		Symbol:   "FST",
		Decimals: 18,
	},
	Explorers: []Explorer{
		{
			Name:     "FSTScan",
			URL:      "https://fstscan.fenixst.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ntx2070 = Chain{
	Name:      "NeutronX Mainnet",
	Chain:     "NTX",
	ChainID:   2070,
	NetworkID: 2070,
	ShortName: "ntx",
	RPC: []string{
		"https://rpc.neutronchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "NeutronX",
		Symbol:   "NTX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://neutronx.com"}[0],
	Explorers: []Explorer{
		{
			Name: "NeutronX Explorer",
			URL:  "https://explorer.neutronchain.io",
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
		Name:     "IBVM",
		Symbol:   "IBVM",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ibvm.io/"}[0],
	Explorers: []Explorer{
		{
			Name:     "IBVM explorer",
			URL:      "https://ibvmscan.io",
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
		Symbol:   "IBVM",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ibvm.io/"}[0],
	Explorers: []Explorer{
		{
			Name:     "IBVM Testnet explorer",
			URL:      "https://testnet.ibvmscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Parallax2110 = Chain{
	Name:      "Parallax",
	Chain:     "PARALLAX",
	ChainID:   2110,
	NetworkID: 2110,
	ShortName: "parallax",
	RPC: []string{
		"https://rpc.parallaxprotocol.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Parallax",
		Symbol:   "LAX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://parallaxprotocol.org"}[0],
	Explorers: []Explorer{
		{
			Name: "Parallax Blockscout",
			URL:  "https://explorer.parallaxprotocol.org",
		},
	},
}

var Autheo2127 = Chain{
	Name:      "Autheo Mainnet",
	Chain:     "Autheo",
	ChainID:   2127,
	NetworkID: 2127,
	ShortName: "autheo",
	RPC: []string{
		"https://rpc1.autheo.com",
		"https://rpc2.autheo.com",
		"https://rpc3.autheo.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "THEO",
		Symbol:   "THEO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://autheo.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Autheo Cosmos Explorer",
			URL:      "https://cosmos.autheo.com",
			Standard: &[]string{"none"}[0],
		},
		{
			Name:     "Autheo Mainnet EVM Explorer",
			URL:      "https://evm-explorer.autheo.com",
			Standard: &[]string{"none"}[0],
		},
	},
}

var MementoTestnet2129 = Chain{
	Name:      "Memento Testnet",
	Chain:     "Memento",
	ChainID:   2129,
	NetworkID: 2129,
	ShortName: "memento-testnet",
	RPC: []string{
		"https://rpc.memento.zeeve.online",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mementoblockchain.com/zk-chain"}[0],
}

var Morphtachyon2184 = Chain{
	Name:      "Morph Tachyon",
	Chain:     "Morph Tachyon",
	ChainID:   2184,
	NetworkID: 2184,
	ShortName: "morphtachyon",
	RPC: []string{
		"https://api.popdex.xyz/api/v1/web3/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BGB",
		Symbol:   "BGB",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://popdex.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Morph Tachyon Explorer",
			URL:      "https://app.popdex.xyz/explorer",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var StableTestnet2201 = Chain{
	Name:      "Stable Testnet",
	Chain:     "stable",
	ChainID:   2201,
	NetworkID: 2201,
	ShortName: "stable-testnet",
	RPC: []string{
		"https://rpc.testnet.stable.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "USDT0",
		Symbol:   "USDT0",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://stable.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Stablescan",
			URL:      "https://testnet.stablescan.xyz",
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
			Name:     "Moca Chain Scan",
			URL:      "https://scan.mocachain.org",
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
			Name:     "BESC Explorer",
			URL:      "https://explorer.beschyperchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var THaus2443 = Chain{
	Name:      "Haus Chain Testnet",
	Chain:     "HAUS",
	ChainID:   2443,
	NetworkID: 2443,
	ShortName: "t-haus",
	RPC: []string{
		"https://rpc-testnet.hausserver.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Haus",
		Symbol:   "HAUS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.hausserver.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Haus Chain Testnet Explorer",
			URL:      "https://explorer-testnet.hausserver.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ccc2500 = Chain{
	Name:      "CChain",
	Chain:     "CChain",
	ChainID:   2500,
	NetworkID: 2500,
	ShortName: "ccc",
	RPC: []string{
		"https://rpc.cchain.cc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CCC",
		Symbol:   "CCC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://cchain.cc"}[0],
	Explorers: []Explorer{
		{
			Name:     "cchainscan",
			URL:      "https://cchainscan.cc",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var SvpTestnet2517 = Chain{
	Name:      "SVP Chain Testnet",
	Chain:     "SVPTEST",
	ChainID:   2517,
	NetworkID: 2517,
	ShortName: "svp-testnet",
	RPC: []string{
		"https://svp-dataseed1-testnet.svpchain.org",
		"https://svp-dataseed2-testnet.svpchain.org",
		"https://svp-dataseed3-testnet.svpchain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SVP Coin",
		Symbol:   "SVP",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://svpchain.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "SVP Testnet Explorer",
			URL:      "https://testnet.svpchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Svp2518 = Chain{
	Name:      "SVP Chain",
	Chain:     "SVP",
	ChainID:   2518,
	NetworkID: 2518,
	ShortName: "svp",
	RPC: []string{
		"https://svp-dataseed1.svpchain.org",
		"https://svp-dataseed2.svpchain.org",
		"https://svp-dataseed3.svpchain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SVP Coin",
		Symbol:   "SVP",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://svpchain.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "SVP Explorer",
			URL:      "https://explorer.svpchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Anubi2526 = Chain{
	Name:      "ANUBIS Testnet",
	Chain:     "ANUBIS",
	ChainID:   2526,
	NetworkID: 2526,
	ShortName: "anubi",
	RPC: []string{
		"https://test-rpc.anubispace.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ANUBI",
		Symbol:   "ANUBI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.anubispace.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "anubiscan",
			URL:      "https://test-scan.anubispace.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var H22582 = Chain{
	Name:      "H2",
	Chain:     "H2",
	ChainID:   2582,
	NetworkID: 2582,
	ShortName: "h2",
	RPC: []string{
		"https://rpc.h2chain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "H2",
		Symbol:   "H2",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://h2chain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "H2Scan",
			URL:      "https://h2scan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Kto2643 = Chain{
	Name:      "Notes Network Mainnet",
	Chain:     "NOTES",
	ChainID:   2643,
	NetworkID: 2643,
	ShortName: "kto",
	RPC: []string{
		"https://rpc-mainnet.noschain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Kto",
		Symbol:   "KTO",
		Decimals: 11,
	},
	InfoURL: &[]string{"https://note.bet"}[0],
	Explorers: []Explorer{
		{
			Name:     "NosScan",
			URL:      "https://nosscan.noschain.org",
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
			Name:     "Splendor Explorer",
			URL:      "https://explorer.splendor.org",
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
			Name:     "Splendor Testnet Explorer",
			URL:      "https://testnet-explorer.splendor.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Orbinum2700 = Chain{
	Name:      "Orbinum Testnet",
	Chain:     "ORB",
	ChainID:   2700,
	NetworkID: 2700,
	ShortName: "orbinum",
	RPC: []string{
		"https://rpc.testnet.orbinum.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ORB",
		Symbol:   "ORB",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.orbinum.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "Orbinum Privacy Explorer",
			URL:      "https://explorer.testnet.orbinum.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var ClawWorldBox2721 = Chain{
	Name:      "claw world box",
	Chain:     "AGW",
	ChainID:   2721,
	NetworkID: 2721,
	ShortName: "claw-world-box",
	RPC: []string{
		"https://rpc.clawworldbox.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "DA",
		Symbol:   "DA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.clawworldbox.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Claw World Box Explorer",
			URL:      "https://explorer.clawworldbox.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var CreatorChainMainnet2787 = Chain{
	Name:      "Creator Chain Mainnet",
	Chain:     "Creator Chain",
	ChainID:   2787,
	NetworkID: 2787,
	ShortName: "creator-chain-mainnet",
	RPC: []string{
		"https://rpc.mainnet.oncreator.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.oncreator.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Creator Chain Mainnet Explorer",
			URL:      "https://explorer.mainnet.oncreator.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Aere2800 = Chain{
	Name:      "AERE Network",
	Chain:     "AERE",
	ChainID:   2800,
	NetworkID: 2800,
	ShortName: "aere",
	RPC: []string{
		"https://rpc.aere.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "AERE",
		Symbol:   "AERE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://aere.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "AERE Explorer",
			URL:      "https://explorer.aere.network",
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

var Morph2910 = Chain{
	Name:      "Morph Hoodi",
	Chain:     "ETH",
	ChainID:   2910,
	NetworkID: 2910,
	ShortName: "morph",
	RPC: []string{
		"https://rpc-hoodi-bgw.morph.network",
		"https://rpc-hoodi.morph.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.morph.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "Morph Hoodi Testnet Explorer",
			URL:      "https://explorer-hoodi.morph.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Bgg3005 = Chain{
	Name:      "BGGChain",
	Chain:     "BGG",
	ChainID:   3005,
	NetworkID: 3005,
	ShortName: "bgg",
	RPC: []string{
		"https://rpc.bggchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BGGChain",
		Symbol:   "BGG",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://bggchain.com/"}[0],
	Explorers: []Explorer{
		{
			Name:     "bggchain",
			URL:      "https://bggscan.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Aic3018 = Chain{
	Name:      "AICChain Mainnet",
	Chain:     "AIC",
	ChainID:   3018,
	NetworkID: 3018,
	ShortName: "aic",
	RPC: []string{
		"https://rpc.aicchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "AICChain",
		Symbol:   "AIC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.aicchain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "AICChain Explorer",
			URL:      "https://scan.aicchain.io",
			Standard: &[]string{"EIP3091"}[0],
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

var Alpha3111 = Chain{
	Name:      "Alpha Chain Mainnet",
	Chain:     "Alpha Chain",
	ChainID:   3111,
	NetworkID: 3111,
	ShortName: "alpha",
	RPC: []string{
		"https://rpc.goalpha.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.alphatoken.com/AlphaChain/about-alpha-chain"}[0],
	Explorers: []Explorer{
		{
			Name:     "Alpha Chain Scan",
			URL:      "https://scan.goalpha.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var BKC3188 = Chain{
	Name:      "BeeChain Mainnet",
	Chain:     "BKC",
	ChainID:   3188,
	NetworkID: 3188,
	ShortName: "BKC",
	RPC: []string{
		"https://rpc.beechain.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BeeChain",
		Symbol:   "BKC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://beechain.ai"}[0],
	Explorers: []Explorer{
		{
			Name:     "BeeChainScan",
			URL:      "https://scan.beechain.ai",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Qbc3303 = Chain{
	Name:      "Qubitcoin",
	Chain:     "QBC",
	ChainID:   3303,
	NetworkID: 3303,
	ShortName: "qbc",
	RPC: []string{
		"https://qbc.network/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Qubitcoin",
		Symbol:   "QBC",
		Decimals: 8,
	},
	InfoURL: &[]string{"https://qbc.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "Qubitcoin Explorer",
			URL:      "https://qbc.network/explorer",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Vora3318 = Chain{
	Name:      "VORA Chain",
	Chain:     "VORA",
	ChainID:   3318,
	NetworkID: 3318,
	ShortName: "vora",
	RPC: []string{
		"https://vorascan.io/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "VORA",
		Symbol:   "VRA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://vorachain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "vorascan",
			URL:      "https://vorascan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Aet3355 = Chain{
	Name:      "AETRON Mainnet",
	Chain:     "AETRON",
	ChainID:   3355,
	NetworkID: 3355,
	ShortName: "aet",
	RPC: []string{
		"https://entrypoint-mainnet.aetron.ai/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "AETRON",
		Symbol:   "AET",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://aetron.io"}[0],
}

var Tjr3377 = Chain{
	Name:      "Tajirchain",
	Chain:     "TJR",
	ChainID:   3377,
	NetworkID: 3377,
	ShortName: "tjr",
	RPC: []string{
		"https://rpc.tajirchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Tajir",
		Symbol:   "TJR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tajirchain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Tajirchain Explorer",
			URL:      "https://tjrscan.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Bytechaintest3399 = Chain{
	Name:      "ByteChain Testnet",
	Chain:     "tBEXC",
	ChainID:   3399,
	NetworkID: 3399,
	ShortName: "bytechaintest",
	RPC: []string{
		"https://test-rpc.bexc.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BEXC",
		Symbol:   "BEXC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://bexc.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "ByteChain Testnet Explorer",
			URL:      "https://testnet.bexc.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Amx3535 = Chain{
	Name:      "Amero X Network",
	Chain:     "AMX",
	ChainID:   3535,
	NetworkID: 3535,
	ShortName: "amx",
	RPC: []string{
		"https://amxrpc.link/public/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Amero X",
		Symbol:   "AMX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://amxscan.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Amero X Scan",
			URL:      "https://amxscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Trustgreen3567 = Chain{
	Name:      "Trustgreen Chain",
	Chain:     "Trustgreen",
	ChainID:   3567,
	NetworkID: 3567,
	ShortName: "Trustgreen",
	RPC: []string{
		"https://rpc.trustgreenscan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Trustgreen",
		Symbol:   "IT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://trustgreenchain.com/"}[0],
	Explorers: []Explorer{
		{
			Name:     "trustgreenscan",
			URL:      "https://trustgreenscan.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var AiFi3600 = Chain{
	Name:      "AiFinance Smart Chain",
	Chain:     "AiFi",
	ChainID:   3600,
	NetworkID: 3600,
	ShortName: "AiFi",
	RPC: []string{
		"https://rpc.aifisc.io",
		"https://rpc.ascscan.io",
		"https://rpc.aifiv2.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "AIFI",
		Symbol:   "AIFI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://aifisc.io/"}[0],
	Explorers: []Explorer{
		{
			Name:     "AiFiScan",
			URL:      "https://ascscan.io/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Inri3777 = Chain{
	Name:      "INRI CHAIN",
	Chain:     "INRI",
	ChainID:   3777,
	NetworkID: 3777,
	ShortName: "inri",
	RPC: []string{
		"https://rpc.inri.life",
		"https://rpc-chain.inri.life",
	},
	NativeCurrency: NativeCurrency{
		Name:     "INRI",
		Symbol:   "INRI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://inri.life"}[0],
	Explorers: []Explorer{
		{
			Name:     "INRI Explorer",
			URL:      "https://explorer.inri.life",
			Standard: &[]string{"EIP3091"}[0],
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
			Name:     "Haust Network blockchain explorer",
			URL:      "https://haustscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var NEX3945 = Chain{
	Name:      "Nexus Testnet",
	Chain:     "Nexus Testnet",
	ChainID:   3945,
	NetworkID: 3495,
	ShortName: "NEX",
	RPC: []string{
		"https://testnet.rpc.nexus.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Nexus",
		Symbol:   "NEX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://nexus.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Nexus Testnet Explorer",
			URL:      "https://nexus.testnet.blockscout.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Nex3946 = Chain{
	Name:      "Nexus Mainnet",
	Chain:     "NEX",
	ChainID:   3946,
	NetworkID: 3946,
	ShortName: "nex",
	RPC: []string{
		"https://mainnet.rpc.nexus.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Nexus",
		Symbol:   "NEX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://nexus.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Nexus Explorer",
			URL:      "https://explorer.nexus.xyz",
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
			Name:     "ganscan",
			URL:      "https://ganscan.gpu.net",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ecna4111 = Chain{
	Name:      "E Canna Mainnet",
	Chain:     "ECNA",
	ChainID:   4111,
	NetworkID: 4111,
	ShortName: "ecna",
	RPC: []string{
		"https://rpc.ecnascan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "E Canna",
		Symbol:   "ECNA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ecnascan.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "ecnascan",
			URL:      "https://explorer.ecnascan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Tecna4112 = Chain{
	Name:      "E Canna Testnet",
	Chain:     "tECNA",
	ChainID:   4112,
	NetworkID: 4112,
	ShortName: "tecna",
	RPC: []string{
		"https://testnetrpc.ecnascan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "E Canna Testnet",
		Symbol:   "tECNA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ecnascan.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "ecnascan-testnet",
			URL:      "https://testnetexplorer.ecnascan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Citrea4114 = Chain{
	Name:      "Citrea Mainnet",
	Chain:     "Citrea",
	ChainID:   4114,
	NetworkID: 4114,
	ShortName: "citrea",
	RPC: []string{
		"https://rpc.mainnet.citrea.xyz/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Citrea BTC",
		Symbol:   "cBTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://citrea.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Citrea Mainnet Explorer",
			URL:      "https://explorer.mainnet.citrea.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Rise4153 = Chain{
	Name:      "RISE",
	Chain:     "ETH",
	ChainID:   4153,
	NetworkID: 4153,
	ShortName: "rise",
	RPC: []string{
		"https://rpc.risechain.com/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://risechain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Blockscout",
			URL:      "https://explorer.risechain.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var SxMainnet4162 = Chain{
	Name:      "SX Network",
	Chain:     "SXR",
	ChainID:   4162,
	NetworkID: 4162,
	ShortName: "sx-mainnet",
	RPC: []string{
		"https://rpc-rollup.sx.technology",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SX Token",
		Symbol:   "SX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://sx.technology"}[0],
	Explorers: []Explorer{
		{
			Name:     "SX Explorer",
			URL:      "https://explorer.sx.technology",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var TempoPresto4217 = Chain{
	Name:      "Tempo Mainnet",
	Chain:     "Tempo",
	ChainID:   4217,
	NetworkID: 4217,
	ShortName: "tempo-presto",
	RPC: []string{
		"https://tempo-mainnet.drpc.org",
		"https://rpc.mainnet.tempo.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "US Dollar",
		Symbol:   "USD",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tempo.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Tempo Explorer",
			URL:      "https://explore.tempo.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var GenlayerTestnets4221 = Chain{
	Name:      "GenLayer Testnets",
	Chain:     "GenLayer",
	ChainID:   4221,
	NetworkID: 4221,
	ShortName: "genlayer-testnets",
	RPC: []string{
		"https://zksync-os-testnet-genlayer.zksync.dev",
	},
	NativeCurrency: NativeCurrency{
		Name:     "GEN Token",
		Symbol:   "GEN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.genlayer.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "GenLayer Testnets Explorer",
			URL:      "https://zksync-os-testnet-genlayer.explorer.zksync.dev",
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
			Name:     "Avalanche L1 Explorer",
			URL:      "https://subnets-test.avax.network/hashfire/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Tpix4289 = Chain{
	Name:      "TPIX Chain",
	Chain:     "TPIX",
	ChainID:   4289,
	NetworkID: 4289,
	ShortName: "tpix",
	RPC: []string{
		"https://rpc.tpix.online",
	},
	NativeCurrency: NativeCurrency{
		Name:     "TPIX",
		Symbol:   "TPIX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tpix.online"}[0],
	Explorers: []Explorer{
		{
			Name:     "TPIX Explorer",
			URL:      "https://explorer.tpix.online",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Megaeth4326 = Chain{
	Name:      "MegaETH",
	Chain:     "MEGA",
	ChainID:   4326,
	NetworkID: 4326,
	ShortName: "megaeth",
	RPC: []string{
		"https://mainnet.megaeth.com/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.megaeth.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Etherscan",
			URL:      "https://mega.etherscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "Blockscout",
			URL:      "https://megaeth.blockscout.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Liteforge4441 = Chain{
	Name:      "LitVM Liteforge Testnet",
	Chain:     "Liteforge",
	ChainID:   4441,
	NetworkID: 4441,
	ShortName: "liteforge",
	RPC: []string{
		"https://rpc.testnet.liteforge.zeeve.net/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "zkLTC",
		Symbol:   "zkLTC",
		Decimals: 18,
	},
	Explorers: []Explorer{
		{
			Name:     "Liteforge Explorer",
			URL:      "https://explorer.testnet.liteforge.zeeve.net",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var DenTestnet4442 = Chain{
	Name:      "Denergy Testnet",
	Chain:     "DEN",
	ChainID:   4442,
	NetworkID: 4442,
	ShortName: "den-testnet",
	RPC: []string{
		"https://rpc.denergytestnet.com/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "WATT",
		Symbol:   "WATT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://d.energy/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Denergy Explorer",
			URL:      "https://explorer.denergytestnet.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Oxin4457 = Chain{
	Name:      "Oxin Chain",
	Chain:     "OXIN",
	ChainID:   4457,
	NetworkID: 4457,
	ShortName: "oxin",
	RPC: []string{
		"https://rpc.oxinchain.io",
		"https://rpc1.oxinchain.io",
		"https://rpc2.oxinchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Oxin",
		Symbol:   "OXIN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://oxinchain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "oxinscan",
			URL:      "https://scan.oxinchain.io",
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
			Name:     "Studio Chain explorer",
			URL:      "https://studiochain-cf4a1621.calderaexplorer.xyz/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Gtbs4599 = Chain{
	Name:      "GTBS Chain",
	Chain:     "GTBS",
	ChainID:   4599,
	NetworkID: 4599,
	ShortName: "gtbs",
	RPC: []string{
		"https://mainnet-rpc.gtbsblockchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "GTBS",
		Symbol:   "GTBS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://gtbs.live"}[0],
	Explorers: []Explorer{
		{
			Name:     "gtbs",
			URL:      "https://gtbsblockchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Hsp46114611 = Chain{
	Name:      "HashSphere Private Network 4611",
	Chain:     "hsphere-private-4611",
	ChainID:   4611,
	NetworkID: 4611,
	ShortName: "hsp-4611",
	RPC: []string{
		"http://rpc-4611.champagnesphere.net/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "hbar",
		Symbol:   "HBAR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://hashgraph.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "HashSphere Explorer 4611",
			URL:      "http://explorer-4611.champagnesphere.net",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Hsp46124612 = Chain{
	Name:      "HashSphere Private Network 4612",
	Chain:     "hsphere-private-4612",
	ChainID:   4612,
	NetworkID: 4612,
	ShortName: "hsp-4612",
	RPC: []string{
		"http://rpc-4612.champagnesphere.net/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "hbar",
		Symbol:   "HBAR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://hashgraph.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "HashSphere Explorer 4612",
			URL:      "http://explorer-4612.champagnesphere.net",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Robinhoodchain4663 = Chain{
	Name:      "Robinhood Chain",
	Chain:     "Robinhood Chain",
	ChainID:   4663,
	NetworkID: 4663,
	ShortName: "robinhoodchain",
	RPC: []string{
		"https://rpc.mainnet.chain.robinhood.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.robinhood.com/chain"}[0],
	Explorers: []Explorer{
		{
			Name:     "Robinhood Chain Blockscout Explorer",
			URL:      "https://robinhoodchain.blockscout.com",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "RobinScanner",
			URL:      "https://robinscanner.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var BSURE4848 = Chain{
	Name:      "BlockSurety",
	Chain:     "BSURE",
	ChainID:   4848,
	NetworkID: 4848,
	ShortName: "BSURE",
	RPC: []string{
		"https://rpc.blocksurety.net/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BSURE",
		Symbol:   "BSURE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://rpc.blocksurety.net/"}[0],
	Explorers: []Explorer{
		{
			Name:     "BlockSurety Explorer",
			URL:      "https://blocksurety.net",
			Standard: &[]string{"none"}[0],
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
			Name:     "ProDAO Explorer",
			URL:      "https://explorer.prodao.club",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var MATRIX4959 = Chain{
	Name:      "Matrix AI Network",
	Chain:     "MATRIX",
	ChainID:   4959,
	NetworkID: 4959,
	ShortName: "MATRIX",
	RPC: []string{
		"https://rpc.matrix.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Matrix AI Network",
		Symbol:   "MAN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://matrix.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://scan.matrix.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var HyprTestnet4978 = Chain{
	Name:      "hypr testnet",
	Chain:     "HYPR",
	ChainID:   4978,
	NetworkID: 4978,
	ShortName: "hypr-testnet",
	RPC: []string{
		"https://hypr-testnet.tail9d9f7e.ts.net",
	},
	NativeCurrency: NativeCurrency{
		Name:     "hypr testnet",
		Symbol:   "HYPR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://hypr-testnet.tail9d9f7e.ts.net"}[0],
	Explorers: []Explorer{
		{
			Name:     "hypr testnet explorer",
			URL:      "https://hypr-testnet.tail9d9f7e.ts.net",
			Standard: &[]string{"none"}[0],
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
		"https://somnia-rpc.publicnode.com",
		"https://rpc.ankr.com/somnia_mainnet",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SOMI",
		Symbol:   "SOMI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://somnia.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "Somnia Explorer",
			URL:      "https://explorer.somnia.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Arc5042 = Chain{
	Name:      "Arc",
	Chain:     "arc",
	ChainID:   5042,
	NetworkID: 5042,
	ShortName: "arc",
	RPC: []string{
		"https://rpc.mainnet.arc.io",
		"https://rpc.blockdaemon.mainnet.arc.io",
		"https://rpc.drpc.mainnet.arc.io",
		"https://rpc.quicknode.mainnet.arc.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "USDC",
		Symbol:   "USDC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.arc.io/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Arc Explorer",
			URL:      "https://explorer.arc.io/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Fusionlayer5070 = Chain{
	Name:      "FusionLayer",
	Chain:     "FusionLayer",
	ChainID:   5070,
	NetworkID: 5070,
	ShortName: "fusionlayer",
	RPC: []string{
		"https://rpc.fusionlayer.org",
		"https://rpc.fusionscan.net",
	},
	NativeCurrency: NativeCurrency{
		Name:     "FusionLayer",
		Symbol:   "FXL",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://fusionlayer.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "FusionScan",
			URL:      "https://fusionscan.net",
			Standard: &[]string{"none"}[0],
		},
	},
}

var ANC5108 = Chain{
	Name:      "AnyChain",
	Chain:     "ANC",
	ChainID:   5108,
	NetworkID: 5108,
	ShortName: "ANC",
	RPC: []string{
		"https://mainnet.anychainscan.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ANC",
		Symbol:   "ANC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://anychainscan.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "AnyChain Explorer",
			URL:      "https://anychainscan.com",
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
			Name:     "Moca Chain Scan",
			URL:      "https://devnet-scan.mocachain.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Sbtc5200 = Chain{
	Name:      "SilverBitcoin",
	Chain:     "SBTC",
	ChainID:   5200,
	NetworkID: 5200,
	ShortName: "sbtc",
	RPC: []string{
		"https://rpc.silverbitcoin.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SilverBitcoin",
		Symbol:   "SBTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://silverbitcoin.org/"}[0],
	Explorers: []Explorer{
		{
			Name:     "SilverBitcoin Explorer",
			URL:      "https://explorer.silverbitcoin.org/",
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
			Name:     "YeYing Blockscout",
			URL:      "https://blockscout.yeying.pub",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Taaqo5566 = Chain{
	Name:      "TAAQO Mainnet",
	Chain:     "TAAQO",
	ChainID:   5566,
	NetworkID: 5566,
	ShortName: "taaqo",
	RPC: []string{
		"https://rpc.taaqo.com",
		"https://rpc2.taaqo.com",
		"https://rpc3.taaqo.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "TAAQO",
		Symbol:   "TAAQO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://taaqo.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "TAAQO Scan",
			URL:      "https://taaqoscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Treasurenet5570 = Chain{
	Name:      "Treasurenet Aurora",
	Chain:     "Treasurenet Aurora",
	ChainID:   5570,
	NetworkID: 5570,
	ShortName: "treasurenet",
	RPC: []string{
		"https://rpc.treasurenet.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "UNIT",
		Symbol:   "UNIT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.treasurenet.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "Treasurenet EVM BlockExplorer",
			URL:      "https://scan.treasurenet.io",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Msc5577 = Chain{
	Name:      "MSC Blockchain",
	Chain:     "MSC",
	ChainID:   5577,
	NetworkID: 5577,
	ShortName: "msc",
	RPC: []string{
		"https://rpc.taaqo.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MSC Token",
		Symbol:   "MSC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://taaqo.com"}[0],
}

var EvoNova5641 = Chain{
	Name:      "Evorium Nova Testnet",
	Chain:     "EvoriumEVM",
	ChainID:   5641,
	NetworkID: 5641,
	ShortName: "evo-nova",
	RPC: []string{
		"https://rpc-nova.evorium.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Testnet EVO",
		Symbol:   "tEVO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://evorium.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "Evorium Nova Explorer",
			URL:      "https://testnet.evorium.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Tburn5800 = Chain{
	Name:      "TBURN Mainnet",
	Chain:     "TBURN",
	ChainID:   5800,
	NetworkID: 5800,
	ShortName: "tburn",
	RPC: []string{
		"https://rpc.tburn.io",
		"https://rpc2.tburn.io",
		"https://rpc3.tburn.io",
		"https://rpc4.tburn.io",
		"https://rpc5.tburn.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "TBURN",
		Symbol:   "TBURN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tburn.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "TBURNScan",
			URL:      "https://scan.tburn.io/scan",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Shib5816 = Chain{
	Name:      "Shib Mainnet",
	Chain:     "SHIB",
	ChainID:   5816,
	NetworkID: 5816,
	ShortName: "shib",
	RPC: []string{
		"https://rpc.shib.club/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SHIB",
		Symbol:   "SHIB",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://doc.shib.club/"}[0],
	Explorers: []Explorer{
		{
			Name: "Shib Explorer",
			URL:  "https://explorer.shib.club/",
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
			Name:     "Dukong Explorer",
			URL:      "http://mantrascan.io",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Tea6122 = Chain{
	Name:      "Tea Mainnet",
	Chain:     "TEA",
	ChainID:   6122,
	NetworkID: 6122,
	ShortName: "tea",
	RPC: []string{
		"https://rpc.tea.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Tea",
		Symbol:   "TEA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tea.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Blockscout",
			URL:      "https://explorer.tea.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Bmz6162 = Chain{
	Name:      "Blockmaze Testnet V2",
	Chain:     "BLOCKMAZE",
	ChainID:   6162,
	NetworkID: 6162,
	ShortName: "bmz",
	RPC: []string{
		"https://testnet-evm-rpc.blockmaze.com",
		"https://testnet-evm-rpc-arc.blockmaze.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BMZ",
		Symbol:   "BMZ",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://blockmaze.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Blockmaze testnet explorer",
			URL:  "https://testnet-explorer.bmzscan.com/",
		},
	},
}

var BMZ6163 = Chain{
	Name:      "Blockmaze Testnet",
	Chain:     "BLOCKMAZE",
	ChainID:   6163,
	NetworkID: 6163,
	ShortName: "BMZ",
	RPC: []string{
		"https://evm-rpc.testnet.stackflow.site",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BMZ",
		Symbol:   "BMZ",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://blockmaze.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Blockmaze testnet explorer",
			URL:  "https://explorer.testnet.stackflow.site",
		},
	},
}

var Bmz6165 = Chain{
	Name:      "Blockmaze Mainnet",
	Chain:     "BLOCKMAZE",
	ChainID:   6165,
	NetworkID: 6165,
	ShortName: "bmz",
	RPC: []string{
		"https://rpc.blockmaze.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BMZ",
		Symbol:   "BMZ",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://blockmaze.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Blockmaze mainnet explorer",
			URL:  "https://bmzscan.com/",
		},
	},
}

var Dual6301 = Chain{
	Name:      "dual network",
	Chain:     "DUAL",
	ChainID:   6301,
	NetworkID: 6301,
	ShortName: "dual",
	RPC: []string{
		"https://rpc.dual.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "dual",
		Symbol:   "dual",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://dual.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "Dual Network",
			URL:      "https://blockscout.dual.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Lrb6359 = Chain{
	Name:      "LoraChain Mainnet",
	Chain:     "LRB",
	ChainID:   6359,
	NetworkID: 6359,
	ShortName: "lrb",
	RPC: []string{
		"https://rpc.lorachain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "LRB",
		Symbol:   "LRB",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.deeplink.world"}[0],
	Explorers: []Explorer{
		{
			Name:     "lorachain",
			URL:      "https://explorer.lorachain.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ynxtest6423 = Chain{
	Name:      "YNX Testnet",
	Chain:     "YNX",
	ChainID:   6423,
	NetworkID: 6423,
	ShortName: "ynxtest",
	RPC: []string{
		"https://evm.ynxweb4.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "YNXT",
		Symbol:   "YNXT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ynxweb4.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "YNX Explorer",
			URL:      "https://explorer.ynxweb4.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Awaji6497 = Chain{
	Name:      "MIZUHIKI Testnet Awaji",
	Chain:     "MIZU",
	ChainID:   6497,
	NetworkID: 6497,
	ShortName: "awaji",
	RPC: []string{
		"https://rpc.awaji.mizuhiki.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MIZU",
		Symbol:   "MIZU",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mizuhiki.io/"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://awaji.blockscout.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Mizuhiki6498 = Chain{
	Name:      "MIZUHIKI Mainnet",
	Chain:     "MIZU",
	ChainID:   6498,
	NetworkID: 6498,
	ShortName: "mizuhiki",
	RPC: []string{
		"https://rpc.mizuhiki.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MIZU",
		Symbol:   "MIZU",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mizuhiki.io/"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://mizuhiki.blockscout.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Kalis6533 = Chain{
	Name:      "Kalichain",
	Chain:     "Kalichain",
	ChainID:   6533,
	NetworkID: 6533,
	ShortName: "kalis",
	RPC: []string{
		"https://subnets.avax.network/kalichain/mainnet/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Kalis",
		Symbol:   "KALIS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://kalichain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Kalichain Explorer",
			URL:      "https://scan.kalichain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var OmaMainnet6623 = Chain{
	Name:      "OMAChain Mainnet",
	Chain:     "OMAChain",
	ChainID:   6623,
	NetworkID: 6623,
	ShortName: "oma-mainnet",
	RPC: []string{
		"https://rpc.omachain.org/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "OMA",
		Symbol:   "OMA",
		Decimals: 18,
	},
	Explorers: []Explorer{
		{
			Name:     "OMAChain Explorer",
			URL:      "https://explorer.omachain.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Anubi6714 = Chain{
	Name:      "ANUBIS Mainnet",
	Chain:     "ANUBIS",
	ChainID:   6714,
	NetworkID: 6714,
	ShortName: "anubi",
	RPC: []string{
		"https://rpc.anubispace.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "gasDAI",
		Symbol:   "gasDAI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.anubispace.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "browser",
			URL:      "https://browser.anubispace.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Vex6736 = Chain{
	Name:      "Vexanium Mainnet",
	Chain:     "VEX",
	ChainID:   6736,
	NetworkID: 6736,
	ShortName: "vex",
	RPC: []string{
		"https://vexascan.com/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Vexanium",
		Symbol:   "VEX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://vexascan.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Vexascan",
			URL:      "https://vexascan.com/evm",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "WIND Explorer",
			URL:      "https://explorer.windcrypto.com/evm",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Lust6923 = Chain{
	Name:      "LUST Chain",
	Chain:     "LUST",
	ChainID:   6923,
	NetworkID: 6923,
	ShortName: "lust",
	RPC: []string{
		"https://rpc.lustchain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "LUST",
		Symbol:   "LST",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://lustchain.org/"}[0],
	Explorers: []Explorer{
		{
			Name:     "LUST Explorer",
			URL:      "https://explorer.lustchain.org/",
			Standard: &[]string{"EIP3091"}[0],
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
			Name:     "Growfitter Explorer",
			URL:      "https://explorer-growfitter-mainnet.cogitus.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Srx7119 = Chain{
	Name:      "Sentrix Chain",
	Chain:     "SRX",
	ChainID:   7119,
	NetworkID: 7119,
	ShortName: "srx",
	RPC: []string{
		"https://rpc.sentrixchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Sentrix",
		Symbol:   "SRX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://sentrixchain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Sentrix Scan",
			URL:      "https://scan.sentrixchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var SrxTestnet7120 = Chain{
	Name:      "Sentrix Testnet",
	Chain:     "SRX",
	ChainID:   7120,
	NetworkID: 7120,
	ShortName: "srx-testnet",
	RPC: []string{
		"https://testnet-rpc.sentrixchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Sentrix",
		Symbol:   "SRX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://sentrixchain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Sentrix Scan (Testnet)",
			URL:      "https://scan-testnet.sentrixchain.com",
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
			Name:     "VRC Explorer",
			URL:      "https://explorer.vrcchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "VRCNChain",
			URL:      "https://vrcchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "dxbchain",
			URL:      "https://dxb.vrcchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var VyreTestnet7357 = Chain{
	Name:      "VYRE Testnet",
	Chain:     "VYRE",
	ChainID:   7357,
	NetworkID: 7357,
	ShortName: "vyre-testnet",
	RPC: []string{
		"https://testnet-rpc.vyrechain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "USDC",
		Symbol:   "USDC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://vyrechain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "VYRE Testnet Explorer",
			URL:      "https://explorer.vyrechain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var CmxrL27373 = Chain{
	Name:      "CRYMAD Chain Mainnet L2 Network",
	Chain:     "CMX",
	ChainID:   7373,
	NetworkID: 7373,
	ShortName: "cmxr-l2",
	RPC: []string{
		"https://rpcl2.cmxofficial.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CRYMADX REAL",
		Symbol:   "CMX-R",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://cmxofficial.com/"}[0],
}

var Libertas7474 = Chain{
	Name:      "LIBERTAS Mainnet",
	Chain:     "LBT",
	ChainID:   7474,
	NetworkID: 7474,
	ShortName: "libertas",
	RPC: []string{
		"https://rpc.libertas.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Libertas Token",
		Symbol:   "LBT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://closefast.tech"}[0],
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
			Name:     "CarrScan",
			URL:      "https://carrscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var TjrTestnet7733 = Chain{
	Name:      "Tajirchain Testnet",
	Chain:     "TJR",
	ChainID:   7733,
	NetworkID: 7733,
	ShortName: "tjr-testnet",
	RPC: []string{
		"https://rpc.testnet.tajirchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Tajirchain Test Token",
		Symbol:   "TJR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tajirchain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "TJR Scan",
			URL:      "https://testnet.tjrscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Embr7773 = Chain{
	Name:      "Emberchain",
	Chain:     "EMBR",
	ChainID:   7773,
	NetworkID: 7773,
	ShortName: "embr",
	RPC: []string{
		"https://emberchain.org/api/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ember",
		Symbol:   "EMBR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://emberchain.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "Emberchain Explorer",
			URL:      "https://emberchain.org/ledger",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var PandaSeaMainnet7776 = Chain{
	Name:      "PandaSea Mainnet",
	Chain:     "PandaSea",
	ChainID:   7776,
	NetworkID: 7776,
	ShortName: "PandaSea mainnet",
	RPC: []string{
		"https://rpc-mainnet-pandasea-rl.cogitus.io/ext/bc/2gYSmRb7tjS4wb5FHFx8NBhwQgARWEdr8MGVC7v8UWJJFkEpTj/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "PANDA",
		Symbol:   "PANDA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://pandasea.io/"}[0],
	Explorers: []Explorer{
		{
			Name:     "PandaSea Explorer",
			URL:      "https://explorer.pandasea.io",
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
			Name:     "Portal-To-Bitcoin Explorer",
			URL:      "https://explorer.portaltobitcoin.net",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Hyve7847 = Chain{
	Name:      "HyveChain",
	Chain:     "HYVE",
	ChainID:   7847,
	NetworkID: 7847,
	ShortName: "hyve",
	RPC: []string{
		"https://rpc.hyvechain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "HYVE",
		Symbol:   "HYVE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://hyvechain.com"}[0],
	Explorers: []Explorer{
		{
			Name: "HyveChain Explorer",
			URL:  "https://explorer.hyvechain.com",
		},
	},
}

var Pc7890 = Chain{
	Name:      "Panchain Mainnet",
	Chain:     "PC",
	ChainID:   7890,
	NetworkID: 7890,
	ShortName: "pc",
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
			Name:     "Blockscout",
			URL:      "https://scan.panchain.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Univex7932 = Chain{
	Name:      "Univex Network",
	Chain:     "UNIVEX",
	ChainID:   7932,
	NetworkID: 7932,
	ShortName: "univex",
	RPC: []string{
		"https://rpc.univexnetwork.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Univex",
		Symbol:   "UNIVEX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://univexnetwork.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "Univex Explorer",
			URL:      "https://explorer.univexnetwork.org",
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
			Name:     "bmnscan",
			URL:      "https://bmnscan.com",
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
			Name:     "Leraxscan Testnet",
			URL:      "https://testnet.leraxscan.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Alpen8150 = Chain{
	Name:      "Alpen Testnet II",
	Chain:     "Alpen",
	ChainID:   8150,
	NetworkID: 8150,
	ShortName: "alpen",
	RPC: []string{
		"https://rpc.testnet.alpenlabs.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Signet BTC",
		Symbol:   "sBTC",
		Decimals: 8,
	},
	InfoURL: &[]string{"https://docs.alpenlabs.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "Alpen Testnet Explorer",
			URL:      "https://explorer.testnet.alpenlabs.io",
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
			Name:     "SVM Scan",
			URL:      "https://svmscan.blazeapps.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var LcaiT8200 = Chain{
	Name:      "LightchainAI Testnet",
	Chain:     "LCAI",
	ChainID:   8200,
	NetworkID: 8200,
	ShortName: "lcai-t",
	RPC: []string{
		"https://rpc.testnet.lightchain.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "LightchainAI",
		Symbol:   "LCAI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://lightchain.ai"}[0],
	Explorers: []Explorer{
		{
			Name:     "Lightchain Testnet Explorer",
			URL:      "https://testnet.lightscan.app",
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

var Bry8379 = Chain{
	Name:      "Bery",
	Chain:     "BRY",
	ChainID:   8379,
	NetworkID: 8379,
	ShortName: "bry",
	RPC: []string{
		"https://bery.in/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BRY",
		Symbol:   "BRY",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://bery.in"}[0],
	Explorers: []Explorer{
		{
			Name:     "Bery Explorer",
			URL:      "https://bery.in/explorer",
			Standard: &[]string{"EIP3091"}[0],
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
			Name:     "Autonomys Chronos Testnet Explorer",
			URL:      "https://explorer.auto-evm.chronos.autonomys.xyz",
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
	InfoURL: &[]string{"https://eb-chain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "EBCScan",
			URL:      "https://ebcscan.net",
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

var XybTestnet9194 = Chain{
	Name:      "Xyberchain Testnet",
	Chain:     "XYB",
	ChainID:   9194,
	NetworkID: 9194,
	ShortName: "xyb-testnet",
	RPC: []string{
		"https://xyberchain-rpc.xyz/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "XYB",
		Symbol:   "XYB",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.xyberchain.network/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Xyberchain Explorer",
			URL:      "https://xyberchainexplorer.xyz/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Lcai9200 = Chain{
	Name:      "LightchainAI Mainnet",
	Chain:     "LCAI",
	ChainID:   9200,
	NetworkID: 9200,
	ShortName: "lcai",
	RPC: []string{
		"https://rpc.mainnet.lightchain.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "LightchainAI",
		Symbol:   "LCAI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://lightchain.ai"}[0],
	Explorers: []Explorer{
		{
			Name:     "Lightchain Explorer",
			URL:      "https://lightscan.app",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Zel9350 = Chain{
	Name:      "Zano Execution Layer Testnet",
	Chain:     "ZEL",
	ChainID:   9350,
	NetworkID: 9350,
	ShortName: "zel",
	RPC: []string{
		"https://eth-rpc.node1.testnet.zano.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Zel",
		Symbol:   "ZEL",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://zano.com"}[0],
	Explorers: []Explorer{
		{
			Name: "zel",
			URL:  "https://explorer.testnet.zano.org/",
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
			Name:     "KUB Layer 2 Mainnet Explorer",
			URL:      "https://kublayer2.kubscan.com",
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
			Name:     "Routescan",
			URL:      "https://plasmascan.to",
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
			Name:     "Routescan",
			URL:      "https://testnet.plasmascan.to",
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

var Timp9818 = Chain{
	Name:      "Imperium Testnet",
	Chain:     "tIMP",
	ChainID:   9818,
	NetworkID: 9818,
	ShortName: "timp",
	RPC: []string{
		"https://rpc-testnet.imperiumscan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Test Imperium",
		Symbol:   "tIMP",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://imperiumscan.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Imperium Scan",
			URL:      "https://imperiumscan.com",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Imp9819 = Chain{
	Name:      "Imperium Mainnet",
	Chain:     "IMP",
	ChainID:   9819,
	NetworkID: 9819,
	ShortName: "imp",
	RPC: []string{
		"https://rpc.imperiumscan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Imperium",
		Symbol:   "IMP",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://imperiumscan.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Imperium Scan",
			URL:      "https://imperiumscan.com",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Bytechain9933 = Chain{
	Name:      "ByteChain Mainnet",
	Chain:     "BEXC",
	ChainID:   9933,
	NetworkID: 9933,
	ShortName: "bytechain",
	RPC: []string{
		"https://rpc.bexc.io",
		"https://rpc2.bexc.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BEXC",
		Symbol:   "BEXC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://bexc.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "ByteChain Explorer",
			URL:      "https://mainnet.bexc.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var BrevisNetwork9973 = Chain{
	Name:      "Breivs ProverNet",
	Chain:     "BREV",
	ChainID:   9973,
	NetworkID: 9973,
	ShortName: "brevis-network",
	RPC: []string{
		"https://evmrpc.brevis.network/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://brevis.network/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Breivs ProverNet Explorer",
			URL:      "https://provernet.brevis.network/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
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
			Name:     "GateLayer",
			URL:      "https://www.gatescan.org/gatelayer",
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
			Name:     "marsscan",
			URL:      "https://scan.mars.movachain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var LimonataTestnet10777 = Chain{
	Name:      "Limonata Testnet",
	Chain:     "LIMO",
	ChainID:   10777,
	NetworkID: 10777,
	ShortName: "limonata-testnet",
	RPC: []string{
		"https://rpc.limonata.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Limonata",
		Symbol:   "LIMO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://limonata.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Limonata Explorer",
			URL:      "https://explorer.limonata.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Gleec11169 = Chain{
	Name:      "Gleec Mainnet",
	Chain:     "GLEEC",
	ChainID:   11169,
	NetworkID: 11169,
	ShortName: "gleec",
	RPC: []string{
		"https://evm-rpc.gleec.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "GLEEC",
		Symbol:   "GLEEC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://evm-info.gleec.com/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Gleec EVM Explorer",
			URL:      "https://evm-explorer.gleec.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Eth11417 = Chain{
	Name:      "Anq World Testnet",
	Chain:     "ETH",
	ChainID:   11417,
	NetworkID: 11417,
	ShortName: "eth",
	RPC: []string{
		"https://rpc-public-test.anq.world",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://anquantum.com/chain"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://blockscout-test.anq.world",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Nkm11941 = Chain{
	Name:      "NAKAM Chain",
	Chain:     "NKM",
	ChainID:   11941,
	NetworkID: 11941,
	ShortName: "nkm",
	RPC: []string{
		"https://rpc.nakamcoin.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "NAKAM",
		Symbol:   "NKM",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://nakamcoin.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "NAKAM Explorer",
			URL:      "https://explorer.nakamcoin.com",
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

var Moc12026 = Chain{
	Name:      "MOC Blockchain",
	Chain:     "MOC",
	ChainID:   12026,
	NetworkID: 12026,
	ShortName: "moc",
	RPC: []string{
		"https://mochan.org/api/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MOC",
		Symbol:   "MOC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mochan.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "MOC Explorer",
			URL:      "https://mochan.org/explorer",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var L2p12216 = Chain{
	Name:      "L2 Protocol Mainnet",
	Chain:     "L2P",
	ChainID:   12216,
	NetworkID: 12216,
	ShortName: "l2p",
	RPC: []string{
		"https://rpc.l2protocol.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "L2P",
		Symbol:   "L2P",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://l2protocol.com"}[0],
	Explorers: []Explorer{
		{
			Name: "L2 Protocol explorer",
			URL:  "https://l2pscan.com",
		},
	},
}

var Amax12248 = Chain{
	Name:      "Armonia Eva Chain Testnet",
	Chain:     "AMAX",
	ChainID:   12248,
	NetworkID: 12248,
	ShortName: "amax",
	RPC: []string{
		"https://tntrpc.evascan.io/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "AMAX",
		Symbol:   "AMAX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://amax.network/"}[0],
	Explorers: []Explorer{
		{
			Name:     "evascan",
			URL:      "https://testnet.evascan.io/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ctcchain12301 = Chain{
	Name:      "CTC Chain Mainnet",
	Chain:     "CTC",
	ChainID:   12301,
	NetworkID: 12301,
	ShortName: "ctcchain",
	RPC: []string{
		"https://rpc.tantin.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CTC",
		Symbol:   "CTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tantin.com/"}[0],
	Explorers: []Explorer{
		{
			Name: "CTC Chain Explorer",
			URL:  "https://scan.tantin.com",
		},
	},
}

var Ctcchain12302 = Chain{
	Name:      "CTC Chain Testnet",
	Chain:     "CTC",
	ChainID:   12302,
	NetworkID: 12302,
	ShortName: "ctcchain",
	RPC: []string{
		"https://test-rpc.tantin.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CTC",
		Symbol:   "CTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tantin.com/"}[0],
	Explorers: []Explorer{
		{
			Name: "CTC Chain Testnet Explorer",
			URL:  "https://test-scan.tantin.com",
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

var CLY12369 = Chain{
	Name:      "Calyra",
	Chain:     "CLY",
	ChainID:   12369,
	NetworkID: 12369,
	ShortName: "CLY",
	RPC: []string{
		"https://mainnet.calyra.cloud/evm",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Calyra",
		Symbol:   "CLY",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://calyra.cloud"}[0],
	Explorers: []Explorer{
		{
			Name:     "calyrascan",
			URL:      "https://calyrascan.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Brick12786 = Chain{
	Name:      "BrickChain",
	Chain:     "BRKG",
	ChainID:   12786,
	NetworkID: 12786,
	ShortName: "brick",
	RPC: []string{
		"https://rpc.firstbrick.cloud",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Brick Gas",
		Symbol:   "BRKG",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://firstbrick.cloud"}[0],
	Explorers: []Explorer{
		{
			Name:     "BrickChain Explorer",
			URL:      "https://explorer.firstbrick.cloud",
			Standard: &[]string{"EIP3091"}[0],
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

var Rntx13113 = Chain{
	Name:      "RANNTA X-Chain",
	Chain:     "RANNTA",
	ChainID:   13113,
	NetworkID: 13113,
	ShortName: "rntx",
	RPC: []string{
		"https://rpc.rannta.com/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "RANNTA Core X",
		Symbol:   "RNTX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://rannta.com/"}[0],
	Explorers: []Explorer{
		{
			Name:     "RANNTA X-Chain Explorer",
			URL:      "https://explorer.rannta.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var BKC13188 = Chain{
	Name:      "BeeChain Testnet",
	Chain:     "BKC",
	ChainID:   13188,
	NetworkID: 13188,
	ShortName: "BKC",
	RPC: []string{
		"https://rpctest.beechain.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BeeChain",
		Symbol:   "BKC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://beechain.ai"}[0],
	Explorers: []Explorer{
		{
			Name:     "BeeChainScan",
			URL:      "https://scantest.beechain.ai",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Mee13390 = Chain{
	Name:      "MeeChain Network",
	Chain:     "MeeChain",
	ChainID:   13390,
	NetworkID: 13390,
	ShortName: "mee",
	RPC: []string{
		"https://rpc.meechain.live/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Mee",
		Symbol:   "MEE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://scan.meechain.live"}[0],
	Explorers: []Explorer{
		{
			Name:     "MeeScan",
			URL:      "https://scan.meechain.live",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
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
			Name:     "IntuitionScan (Testnet)",
			URL:      "https://testnet.explorer.intuition.systems",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Btz14204 = Chain{
	Name:      "BTZ Chain",
	Chain:     "BTZ",
	ChainID:   14204,
	NetworkID: 14204,
	ShortName: "btz",
	RPC: []string{
		"https://rpc.btzchain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BTZ",
		Symbol:   "BTZ",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://btzchain.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "BTZ Chain Explorer",
			URL:      "https://explorer.btzchain.org",
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
			Name:     "Sonic Testnet Explorer",
			URL:      "https://explorer.testnet.soniclabs.com",
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
			Name:     "Orchard Quaiscan",
			URL:      "https://orchard.quaiscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var MidlTestnet15001 = Chain{
	Name:      "Midl Testnet",
	Chain:     "MIDL",
	ChainID:   15001,
	NetworkID: 15001,
	ShortName: "midl-testnet",
	RPC: []string{
		"https://rpc.testnet.midl.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Bitcoin",
		Symbol:   "BTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://midl.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Midl Testnet Explorer",
			URL:      "blockscout.regtest.midl.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var InfraTestnet15324 = Chain{
	Name:      "INFRA-testnet",
	Chain:     "INFRA",
	ChainID:   15324,
	NetworkID: 15324,
	ShortName: "infra-testnet",
	RPC: []string{
		"https://ppprototype.vercel.app/api/infra-rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "reAED",
		Symbol:   "reAED",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://infrablockchain.com/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Block Explorer",
			URL:      "http://208.115.109.202",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Bimbo15497 = Chain{
	Name:      "Bimbo Chain",
	Chain:     "BMC",
	ChainID:   15497,
	NetworkID: 15497,
	ShortName: "bimbo",
	RPC: []string{
		"https://bimborpc.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Bimbo Coin",
		Symbol:   "BMC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://bimbochain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "bimboscan",
			URL:      "https://bimboscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Nrxn15526 = Chain{
	Name:      "NirmalX Smart Chain",
	Chain:     "NRXN",
	ChainID:   15526,
	NetworkID: 15526,
	ShortName: "nrxn",
	RPC: []string{
		"https://rpc.nirmalxscan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "NirmalX Smart Chain",
		Symbol:   "NRXN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://nirmalxscan.com/"}[0],
	Explorers: []Explorer{
		{
			Name:     "NirmalX Explorer",
			URL:      "https://nirmalxscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Holo15675 = Chain{
	Name:      "HOLODAO Mainnet",
	Chain:     "HOLODAO",
	ChainID:   15675,
	NetworkID: 15675,
	ShortName: "holo",
	RPC: []string{
		"https://rpc.holodao.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "HOLO COIN",
		Symbol:   "HOLO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://holodao.ai"}[0],
	Explorers: []Explorer{
		{
			Name: "holoscan",
			URL:  "https://holoscan.holodao.ai",
		},
	},
}

var HoloTestnet15676 = Chain{
	Name:      "HOLODAO TESTNET",
	Chain:     "HOLODAO",
	ChainID:   15676,
	NetworkID: 15676,
	ShortName: "holo-testnet",
	RPC: []string{
		"https://rpc-testnet.holodao.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "HOLO COIN",
		Symbol:   "HOLO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://holodao.ai"}[0],
	Explorers: []Explorer{
		{
			Name: "holoscan",
			URL:  "https://holoscan-testnet.holodao.ai",
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
			Name:     "0G Chain Explorer",
			URL:      "https://chainscan-galileo.0g.ai",
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
			Name:     "0G Chain Explorer",
			URL:      "https://chainscan.0g.ai",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Botcy16963 = Chain{
	Name:      "BotCash Sovereign L2",
	Chain:     "BOTCY",
	ChainID:   16963,
	NetworkID: 16963,
	ShortName: "botcy",
	RPC: []string{
		"https://rpc.botcash.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Bot Cash",
		Symbol:   "BOTCY",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://botcash.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "CashScan",
			URL:      "https://scan.botcash.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Dmd17771 = Chain{
	Name:      "DMD Diamond",
	Chain:     "DMD",
	ChainID:   17771,
	NetworkID: 17771,
	ShortName: "dmd",
	RPC: []string{
		"https://rpc.bit.diamonds",
	},
	NativeCurrency: NativeCurrency{
		Name:     "DMD",
		Symbol:   "DMD",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://bit.diamonds"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://explorer.bit.diamonds",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Trecr18882 = Chain{
	Name:      "RecorderCoin Testnet",
	Chain:     "tRECR",
	ChainID:   18882,
	NetworkID: 2233441,
	ShortName: "trecr",
	RPC: []string{
		"https://testnet-rpc.recordercoin.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Test RecorderCoin",
		Symbol:   "tRECR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://recordercoin.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "RecorderCoin Testnet Explorer",
			URL:      "https://explorer-testnet.recordercoin.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Yuuchain19001 = Chain{
	Name:      "YuuChain",
	Chain:     "YUU",
	ChainID:   19001,
	NetworkID: 19001,
	ShortName: "yuuchain",
	RPC: []string{
		"https://rpc.theyuusystem.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Yuu",
		Symbol:   "YUU",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://theyuusystem.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "YuuChain Explorer",
			URL:      "https://explorer.theyuusystem.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var IgraCaravelTestnet19416 = Chain{
	Name:      "Igra Caravel Testnet",
	Chain:     "IGRA",
	ChainID:   19416,
	NetworkID: 19416,
	ShortName: "igra-caravel-testnet",
	RPC: []string{
		"https://caravel.igralabs.com:8545",
	},
	NativeCurrency: NativeCurrency{
		Name:     "iKAS",
		Symbol:   "iKAS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.igralabs.com/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Igra Explorer",
			URL:      "https://explorer.caravel.igralabs.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var StcTestnet19517 = Chain{
	Name:      "Smart Technology Chain Testnet",
	Chain:     "Smart Technology Chain",
	ChainID:   19517,
	NetworkID: 19517,
	ShortName: "stc-testnet",
	RPC: []string{
		"https://testnet-rpc.stcexplorer.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SEP",
		Symbol:   "SEP",
		Decimals: 18,
	},
	Explorers: []Explorer{
		{
			Name:     "Smart Technology Chain Explorer",
			URL:      "https://testnet.stcexplorer.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var StcMainnet19518 = Chain{
	Name:      "Smart Technology Chain",
	Chain:     "Smart Technology Chain",
	ChainID:   19518,
	NetworkID: 19518,
	ShortName: "stc-mainnet",
	RPC: []string{
		"https://rpc.stcexplorer.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SEP",
		Symbol:   "SEP",
		Decimals: 18,
	},
	Explorers: []Explorer{
		{
			Name:     "Smart Technology Chain Explorer",
			URL:      "https://stcexplorer.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Mon19901 = Chain{
	Name:      "MON CHAIN",
	Chain:     "MON",
	ChainID:   19901,
	NetworkID: 19901,
	ShortName: "mon",
	RPC: []string{
		"https://rpc.monlite.online",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Monetae",
		Symbol:   "MON",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://monlite.online"}[0],
	Explorers: []Explorer{
		{
			Name: "MON CHAIN Explorer",
			URL:  "https://scan.monlite.online",
		},
	},
}

var Entropy19911 = Chain{
	Name:      "Entropy Chain",
	Chain:     "Entropy",
	ChainID:   19911,
	NetworkID: 19911,
	ShortName: "entropy",
	RPC: []string{
		"https://rpc-mainnet.entropychain.live",
	},
	NativeCurrency: NativeCurrency{
		Name:     "KGFe",
		Symbol:   "KGFe",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://entropychain.live"}[0],
	Explorers: []Explorer{
		{
			Name:     "Entropy Explorer",
			URL:      "https://scan.entropychain.live",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Atrnxos19966 = Chain{
	Name:      "ATRNXOS Chain",
	Chain:     "ATRNXOS",
	ChainID:   19966,
	NetworkID: 19966,
	ShortName: "atrnxos",
	RPC: []string{
		"https://rpc.bas.atrnx.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ATRNXOS",
		Symbol:   "EATB",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://atrnx.org"}[0],
	Explorers: []Explorer{
		{
			Name: "ATRNXOS Explorer",
			URL:  "https://explorer.bas.atrnx.com",
		},
	},
}

var Sup19998 = Chain{
	Name:      "SuperAIChain Mainnet",
	Chain:     "SuperAIChain",
	ChainID:   19998,
	NetworkID: 19998,
	ShortName: "sup",
	RPC: []string{
		"https://rpc.superaichain.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SUP",
		Symbol:   "SUP",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://superaichain.ai"}[0],
	Explorers: []Explorer{
		{
			Name:     "SuperAIChain Explorer",
			URL:      "https://scan.superaichain.ai",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Mandala20010 = Chain{
	Name:      "Mandala Chain",
	Chain:     "MANDALA",
	ChainID:   20010,
	NetworkID: 20010,
	ShortName: "mandala",
	RPC: []string{
		"https://rpc1-mainnet.mandalachain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Kepeng",
		Symbol:   "KPG",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mandalachain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "Blockscout",
			URL:      "https://explorer.mandalachain.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var MandalaTestnet20011 = Chain{
	Name:      "Mandala Chain Testnet",
	Chain:     "MANDALA",
	ChainID:   20011,
	NetworkID: 20011,
	ShortName: "mandala-testnet",
	RPC: []string{
		"https://rpc1-testnet.mandalachain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mandalachain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "Blockscout",
			URL:      "https://explorer.testnet.mandalachain.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Agls20033 = Chain{
	Name:      "Aglais Testnet (Quip Network)",
	Chain:     "AGLS",
	ChainID:   20033,
	NetworkID: 20033,
	ShortName: "agls",
	RPC: []string{
		"https://evm-rpc.aglais.quip.network:20049",
	},
	NativeCurrency: NativeCurrency{
		Name:     "AGLS",
		Symbol:   "AGLS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://agls.quip.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "Aglais Explorer",
			URL:      "https://explorer.aglais.quip.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Nch20250 = Chain{
	Name:      "CHEESE Blockchain",
	Chain:     "CHEESE",
	ChainID:   20250,
	NetworkID: 20250,
	ShortName: "nch",
	RPC: []string{
		"https://cheeseblockchain.com/api/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Native Cheesecoin",
		Symbol:   "NCH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://cheeseblockchain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "CHEESE Blockchain Explorer",
			URL:      "https://cheeseblockchain.com/explorer",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Alpen20310 = Chain{
	Name:      "Alpen Testnet III",
	Chain:     "Alpen",
	ChainID:   20310,
	NetworkID: 20310,
	ShortName: "alpen",
	RPC: []string{
		"https://alpen.testnet.alpen.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Signet BTC",
		Symbol:   "sBTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.alpenlabs.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "Alpen Testnet Explorer",
			URL:      "https://explorer.testnet.alpen.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Efik20488 = Chain{
	Name:      "Efikcoin Mainnet",
	Chain:     "EFIK",
	ChainID:   20488,
	NetworkID: 20488,
	ShortName: "efik",
	RPC: []string{
		"https://rpc.efikcoin.com/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Efikcoin",
		Symbol:   "EFIK",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://efikcoin.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "EfikcoinScan",
			URL:      "https://explorer.efikcoin.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var FluentTestnet20994 = Chain{
	Name:      "Fluent Testnet",
	Chain:     "FLUENT",
	ChainID:   20994,
	NetworkID: 20994,
	ShortName: "fluent-testnet",
	RPC: []string{
		"https://rpc.testnet.fluent.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.fluent.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Fluent Testnet Explorer",
			URL:      "https://testnet.fluentscan.xyz/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Flashnet21021 = Chain{
	Name:      "Flashnet Mainnet",
	Chain:     "Flashnet",
	ChainID:   21021,
	NetworkID: 21021,
	ShortName: "flashnet",
	RPC: []string{
		"https://rpc.flashnet.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Bitcoin",
		Symbol:   "BTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://flashnet.xyz"}[0],
}

var FlashnetTestnet21022 = Chain{
	Name:      "Flashnet Testnet",
	Chain:     "Flashnet",
	ChainID:   21022,
	NetworkID: 21022,
	ShortName: "flashnet-testnet",
	RPC: []string{
		"https://rpc.makebitcoingreatagain.dev",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Bitcoin",
		Symbol:   "BTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://flashnet.xyz"}[0],
}

var AutheoTestnet21270 = Chain{
	Name:      "Autheo Testnet",
	Chain:     "Autheo",
	ChainID:   21270,
	NetworkID: 21270,
	ShortName: "autheo-testnet",
	RPC: []string{
		"https://rpc.testnet.autheo.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "THEO",
		Symbol:   "THEO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://autheo.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Autheo Testnet Cosmos Explorer",
			URL:      "https://cosmos.testnet.autheo.com",
			Standard: &[]string{"none"}[0],
		},
		{
			Name:     "Autheo Testnet EVM Explorer",
			URL:      "https://evm-explorer.testnet.autheo.com",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Apchain21970 = Chain{
	Name:      "APChain",
	Chain:     "AP",
	ChainID:   21970,
	NetworkID: 21970,
	ShortName: "apchain",
	RPC: []string{
		"https://rpc.apchain.io/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "APX",
		Symbol:   "APX",
		Decimals: 18,
	},
	InfoURL: &[]string{"http://scan.apchain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "APChain Scan",
			URL:      "http://scan.apchain.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Cles22225 = Chain{
	Name:      "Celes Testnet",
	Chain:     "CLES",
	ChainID:   22225,
	NetworkID: 22225,
	ShortName: "cles",
	RPC: []string{
		"https://rpc-testnet.celeschain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CLES",
		Symbol:   "CLES",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://celeschain.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "Celes Testnet Explorer",
			URL:      "https://testnet-explorer.celeschain.org",
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
			Name:     "Incentiv Mainnet Explorer",
			URL:      "https://explorer.incentiv.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Agentscoin24368 = Chain{
	Name:      "AgentsCoin",
	Chain:     "AGENT",
	ChainID:   24368,
	NetworkID: 24368,
	ShortName: "agentscoin",
	RPC: []string{
		"https://rpc.agents-coin.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "AgentsCoin",
		Symbol:   "AGENT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://agents-coin.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Blockscout",
			URL:      "https://explorer.agents-coin.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Fluent25363 = Chain{
	Name:      "Fluent",
	Chain:     "FLUENT",
	ChainID:   25363,
	NetworkID: 25363,
	ShortName: "fluent",
	RPC: []string{
		"https://rpc.fluent.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.fluent.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Fluent Explorer",
			URL:      "https://fluentscan.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var H2lambda25821 = Chain{
	Name:      "H2 Lambda",
	Chain:     "H2",
	ChainID:   25821,
	NetworkID: 25821,
	ShortName: "h2lambda",
	RPC: []string{
		"https://rpc.h-1.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "H2",
		Symbol:   "H2",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://h2chain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "H2Scan",
			URL:      "https://lambda.h2scan.io",
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
			Name:     "Incentiv Testnet Explorer",
			URL:      "https://explorer-testnet.incentiv.io/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Alpen29032 = Chain{
	Name:      "Alpen",
	Chain:     "Alpen",
	ChainID:   29032,
	NetworkID: 29032,
	ShortName: "alpen",
	RPC: []string{
		"https://alpen.mainnet.alpen.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BTC",
		Symbol:   "BTC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.alpen.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "Alpen Explorer",
			URL:      "https://explorer.mainnet.alpen.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Taic30181 = Chain{
	Name:      "AICChain Testnet",
	Chain:     "tAIC",
	ChainID:   30181,
	NetworkID: 30181,
	ShortName: "taic",
	RPC: []string{
		"https://testrpc.aicchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "AICChain Testnet",
		Symbol:   "tAIC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.aicchain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "AICChain Testnet Explorer",
			URL:      "https://testscan.aicchain.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ethiq30303 = Chain{
	Name:      "Ethiq",
	Chain:     "ETH",
	ChainID:   30303,
	NetworkID: 30303,
	ShortName: "Ethiq",
	RPC: []string{
		"https://rpc.ethiq.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ETH",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.ethiq.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "Ethiq Blockscout",
			URL:      "https://explorer.ethiq.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Trxc30485 = Chain{
	Name:      "Tron Classic",
	Chain:     "TRXC",
	ChainID:   30485,
	NetworkID: 30485,
	ShortName: "trxc",
	RPC: []string{
		"https://rpc.tronclassicscan.org:8545",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Tron Classic",
		Symbol:   "TRXC",
		Decimals: 6,
	},
	InfoURL: &[]string{"https://trxclassic.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "TronClassicScan",
			URL:      "https://tronclassicscan.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var DawnMainnet30715 = Chain{
	Name:      "Dawn Mainnet",
	Chain:     "Dawn",
	ChainID:   30715,
	NetworkID: 30715,
	ShortName: "dawn-mainnet",
	RPC:       []string{},
	NativeCurrency: NativeCurrency{
		Name:     "ZKsync",
		Symbol:   "ZK",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.zksync.io"}[0],
}

var ZksyncPrividiumMainnet30716 = Chain{
	Name:      "ZKsync Prividium Mainnet",
	Chain:     "ZKsync Prividium",
	ChainID:   30716,
	NetworkID: 30716,
	ShortName: "zksync-prividium-mainnet",
	RPC:       []string{},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.zksync.io"}[0],
}

var Bvm2031338 = Chain{
	Name:      "BitVault BVM20",
	Chain:     "BVM20",
	ChainID:   31338,
	NetworkID: 31338,
	ShortName: "bvm20",
	RPC: []string{
		"https://rpc.bitvault.club",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BitVault",
		Symbol:   "BVT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://bitvault.club"}[0],
	Explorers: []Explorer{
		{
			Name:     "BitVault Explorer",
			URL:      "https://explorer.bitvault.club",
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
			Name:     "PAIX BlockScout",
			URL:      "https://blockscout.ppaix.com",
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
			Name:     "Zilliqa 2 Mainnet Explorer",
			URL:      "https://zilliqa.blockscout.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ecx32904 = Chain{
	Name:      "Snowside",
	Chain:     "ECX",
	ChainID:   32904,
	NetworkID: 32904,
	ShortName: "ecx",
	RPC: []string{
		"https://rpc.snowside.network/mainnet",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ECash",
		Symbol:   "ECX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://snowside.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "Snowside Explorer",
			URL:      "https://explorer.snowside.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var ZeroBeacon33000 = Chain{
	Name:      "Zero Beacon",
	Chain:     "ZERO",
	ChainID:   33000,
	NetworkID: 33000,
	ShortName: "zero-beacon",
	RPC:       []string{},
	NativeCurrency: NativeCurrency{
		Name:     "ZRO",
		Symbol:   "ZRO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://layerzero.network"}[0],
}

var ZeroSystem33001 = Chain{
	Name:      "Zero System Zone",
	Chain:     "ZERO",
	ChainID:   33001,
	NetworkID: 33001,
	ShortName: "zero-system",
	RPC:       []string{},
	NativeCurrency: NativeCurrency{
		Name:     "ZRO",
		Symbol:   "ZRO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://layerzero.network"}[0],
}

var ZeroInterop33002 = Chain{
	Name:      "Zero Interop Zone",
	Chain:     "ZERO",
	ChainID:   33002,
	NetworkID: 33002,
	ShortName: "zero-interop",
	RPC:       []string{},
	NativeCurrency: NativeCurrency{
		Name:     "ZRO",
		Symbol:   "ZRO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://layerzero.network"}[0],
}

var ZeroAtlas33003 = Chain{
	Name:      "LayerZero ATLAS",
	Chain:     "ZERO",
	ChainID:   33003,
	NetworkID: 33003,
	ShortName: "zero-atlas",
	RPC:       []string{},
	NativeCurrency: NativeCurrency{
		Name:     "ZRO",
		Symbol:   "ZRO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://layerzero.network"}[0],
}

var ZeroPrivate33004 = Chain{
	Name:      "Zero Private Zone",
	Chain:     "ZERO",
	ChainID:   33004,
	NetworkID: 33004,
	ShortName: "zero-private",
	RPC:       []string{},
	NativeCurrency: NativeCurrency{
		Name:     "ZRO",
		Symbol:   "ZRO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://layerzero.network"}[0],
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
			Name:     "Zilliqa 2 Testnet Explorer",
			URL:      "https://testnet.zilliqa.blockscout.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var EcxTestnet33160 = Chain{
	Name:      "Snowside Testnet",
	Chain:     "ECX",
	ChainID:   33160,
	NetworkID: 33160,
	ShortName: "ecx-testnet",
	RPC: []string{
		"https://rpc.snowside.network/testnet",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ECash",
		Symbol:   "ECX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://snowside.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "Snowside Testnet Explorer",
			URL:      "https://explorer-testnet.snowside.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Qom33303 = Chain{
	Name:      "QOM",
	Chain:     "QOM",
	ChainID:   33303,
	NetworkID: 33303,
	ShortName: "qom",
	RPC: []string{
		"https://rpc.qomx.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "QOMX",
		Symbol:   "QOMX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://qomx.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "QOM Explorer",
			URL:      "https://scan.qomx.io",
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
			Name:     "Zilliqa 2 Devnet Explorer",
			URL:      "https://otterscan.zq2-devnet.zilliqa.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var MorphtachyonTestnet34952 = Chain{
	Name:      "Morph Tachyon Testnet",
	Chain:     "Morph Tachyon",
	ChainID:   34952,
	NetworkID: 34952,
	ShortName: "morphtachyon testnet",
	RPC: []string{
		"https://testnet-api.popdex.xyz/api/v1/web3/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BGB",
		Symbol:   "BGB",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://popdex.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Morph Tachyon Testnet Explorer",
			URL:      "https://testnet-app.popdex.xyz/explorer",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Trct35935 = Chain{
	Name:      "Tractsafe Testnet",
	Chain:     "TRCT",
	ChainID:   35935,
	NetworkID: 35935,
	ShortName: "trct",
	RPC: []string{
		"https://tapi.tractsafe.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Tractsafe",
		Symbol:   "TRCT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tractsafe.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "tractsafescan",
			URL:      "https://testnet.tractsafe.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Tc36000 = Chain{
	Name:      "Voidchain Mainnet",
	Chain:     "TC",
	ChainID:   36000,
	NetworkID: 36000,
	ShortName: "tc",
	RPC: []string{
		"https://wallet.voidchain.net/api",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Voidchain",
		Symbol:   "TC",
		Decimals: 9,
	},
	InfoURL: &[]string{"https://ethereum.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "voidchainscan",
			URL:      "https://explorer.voidchain.net",
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
			Name:     "AB Core Explorer",
			URL:      "https://explorer.core.ab.org",
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
			Name:     "weichainscan",
			URL:      "http://1.15.137.12:5200/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Igra38833 = Chain{
	Name:      "Igra Mainnet",
	Chain:     "Igra",
	ChainID:   38833,
	NetworkID: 38833,
	ShortName: "igra",
	RPC: []string{
		"https://rpc.igralabs.com:8545",
	},
	NativeCurrency: NativeCurrency{
		Name:     "IKas",
		Symbol:   "IKAS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://igralabs.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Igra Explorer",
			URL:      "https://explorer.igralabs.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var IgraTestnet38836 = Chain{
	Name:      "Igra Testnet",
	Chain:     "Igra",
	ChainID:   38836,
	NetworkID: 38836,
	ShortName: "igra-testnet",
	RPC: []string{
		"https://galleon-testnet.igralabs.com:8545",
	},
	NativeCurrency: NativeCurrency{
		Name:     "IKas",
		Symbol:   "IKAS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://igralabs.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Igra Testnet Explorer",
			URL:      "https://explorer.galleon-testnet.igralabs.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Cin39500 = Chain{
	Name:      "Cincoin Mainnet",
	Chain:     "CIN",
	ChainID:   39500,
	NetworkID: 39500,
	ShortName: "cin",
	RPC: []string{
		"https://rpc.cincoin.asia/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Cincoin",
		Symbol:   "CIN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://cincoin.asia"}[0],
	Explorers: []Explorer{
		{
			Name:     "cincoin explorer",
			URL:      "https://scan.cincoin.asia",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Salt40204 = Chain{
	Name:      "Citrate Testnet",
	Chain:     "CITRATE",
	ChainID:   40204,
	NetworkID: 40204,
	ShortName: "salt",
	RPC: []string{
		"https://rpc.citrate.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SALT",
		Symbol:   "SALT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://citrate.ai"}[0],
	Explorers: []Explorer{
		{
			Name:     "Citrate Explorer",
			URL:      "https://explorer.citrate.ai",
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
			Name:     "rootVXscan",
			URL:      "https://explorer.rootvx.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Nesa41444 = Chain{
	Name:      "Nesa",
	Chain:     "NES",
	ChainID:   41444,
	NetworkID: 41444,
	ShortName: "nesa",
	RPC: []string{
		"https://erpc.nesa.ai",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Nesa",
		Symbol:   "NES",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://nesa.ai"}[0],
	Explorers: []Explorer{
		{
			Name:     "Nesa EVM Explorer",
			URL:      "https://explorer-evm.nesa.ai",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var EduChain41923 = Chain{
	Name:      "EDU Chain",
	Chain:     "EDU Chain",
	ChainID:   41923,
	NetworkID: 41923,
	ShortName: "edu-chain",
	RPC: []string{
		"https://rpc.educhain.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "EDU",
		Symbol:   "EDU",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.educhain.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name:     "EDU Chain Explorer",
			URL:      "https://explorer.educhain.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var TempoModerato42431 = Chain{
	Name:      "Tempo Testnet",
	Chain:     "Tempo",
	ChainID:   42431,
	NetworkID: 42431,
	ShortName: "tempo-moderato",
	RPC: []string{
		"https://rpc.testnet.tempo.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "US Dollar",
		Symbol:   "USD",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tempo.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Tempo Testnet Explorer",
			URL:      "https://explore.testnet.tempo.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var ZeroBeaconTestnet43000 = Chain{
	Name:      "Zero Beacon Testnet",
	Chain:     "ZERO",
	ChainID:   43000,
	NetworkID: 43000,
	ShortName: "zero-beacon-testnet",
	RPC:       []string{},
	NativeCurrency: NativeCurrency{
		Name:     "ZRO",
		Symbol:   "ZRO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://layerzero.network"}[0],
}

var ZeroSystemTestnet43001 = Chain{
	Name:      "Zero System Zone Testnet",
	Chain:     "ZERO",
	ChainID:   43001,
	NetworkID: 43001,
	ShortName: "zero-system-testnet",
	RPC:       []string{},
	NativeCurrency: NativeCurrency{
		Name:     "ZRO",
		Symbol:   "ZRO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://layerzero.network"}[0],
}

var ZeroInteropTestnet43002 = Chain{
	Name:      "Zero Interop Zone Testnet",
	Chain:     "ZERO",
	ChainID:   43002,
	NetworkID: 43002,
	ShortName: "zero-interop-testnet",
	RPC:       []string{},
	NativeCurrency: NativeCurrency{
		Name:     "ZRO",
		Symbol:   "ZRO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://layerzero.network"}[0],
}

var ZeroAtlasTestnet43003 = Chain{
	Name:      "LayerZero ATLAS Testnet",
	Chain:     "ZERO",
	ChainID:   43003,
	NetworkID: 43003,
	ShortName: "zero-atlas-testnet",
	RPC:       []string{},
	NativeCurrency: NativeCurrency{
		Name:     "ZRO",
		Symbol:   "ZRO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://layerzero.network"}[0],
}

var ZeroPrivateTestnet43004 = Chain{
	Name:      "Zero Private Zone Testnet",
	Chain:     "ZERO",
	ChainID:   43004,
	NetworkID: 43004,
	ShortName: "zero-private-testnet",
	RPC:       []string{},
	NativeCurrency: NativeCurrency{
		Name:     "ZRO",
		Symbol:   "ZRO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://layerzero.network"}[0],
}

var RicTest45578 = Chain{
	Name:      "Riche Chain Testnet",
	Chain:     "RIC",
	ChainID:   45578,
	NetworkID: 45578,
	ShortName: "ric-test",
	RPC: []string{
		"https://rpcrichechain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Riche",
		Symbol:   "RIC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://rpcrichechain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "RicheScan",
			URL:      "https://richescan-testnet.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Robinhoodchaintestnet46630 = Chain{
	Name:      "Robinhood Chain Testnet",
	Chain:     "Robinhood Chain Testnet",
	ChainID:   46630,
	NetworkID: 46630,
	ShortName: "robinhoodchaintestnet",
	RPC: []string{
		"https://rpc.testnet.chain.robinhood.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.robinhood.com/chain"}[0],
	Explorers: []Explorer{
		{
			Name:     "Robinhood Chain Testnet Explorer",
			URL:      "https://explorer.testnet.chain.robinhood.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Txcl47294 = Chain{
	Name:      "TradeXcele",
	Chain:     "TXCL",
	ChainID:   47294,
	NetworkID: 47294,
	ShortName: "txcl",
	RPC: []string{
		"https://tradexcele.cloud/rpc/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "TXCL",
		Symbol:   "TXCL",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tradexcele.com/chain"}[0],
	Explorers: []Explorer{
		{
			Name: "TXCL Explorer",
			URL:  "https://tradexcele.cloud/chain",
		},
	},
}

var Bitbadges50024 = Chain{
	Name:      "BitBadges",
	Chain:     "BitBadges",
	ChainID:   50024,
	NetworkID: 50024,
	ShortName: "bitbadges",
	RPC: []string{
		"https://evm-rpc.bitbadges.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BitBadges",
		Symbol:   "BADGE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://bitbadges.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "BitBadges Explorer",
			URL:      "https://evm.explorer.bitbadges.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var BitbadgesTestnet50025 = Chain{
	Name:      "BitBadges Testnet",
	Chain:     "BitBadges",
	ChainID:   50025,
	NetworkID: 50025,
	ShortName: "bitbadges-testnet",
	RPC: []string{
		"https://evm-rpc-testnet.bitbadges.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BitBadges",
		Symbol:   "BADGE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://bitbadges.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "BitBadges Testnet Explorer",
			URL:      "https://evm-testnet.explorer.bitbadges.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var SomniaTestnet50312 = Chain{
	Name:      "Somnia Testnet",
	Chain:     "Somnia",
	ChainID:   50312,
	NetworkID: 50312,
	ShortName: "SomniaTestnet",
	RPC: []string{
		"https://api.infra.testnet.somnia.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Somnia Testnet",
		Symbol:   "STT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://somnia.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "Shannon Explorer",
			URL:      "https://shannon-explorer.somnia.network",
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
			Name:     "Risa Testnet Explorer",
			URL:      "https://explorer.testnet.syndicate.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var MementoMainnet51888 = Chain{
	Name:      "Memento Mainnet",
	Chain:     "Memento",
	ChainID:   51888,
	NetworkID: 51888,
	ShortName: "memento-mainnet",
	RPC: []string{
		"https://rpc.mementoblockchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
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
			Name:     "LazAI Mainnet Explorer",
			URL:      "https://explorer.mainnet.lazai.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Datahaven55930 = Chain{
	Name:      "DataHaven Mainnet",
	Chain:     "datahaven",
	ChainID:   55930,
	NetworkID: 55930,
	ShortName: "datahaven",
	RPC: []string{
		"https://services.datahaven-mainnet.network/mainnet",
	},
	NativeCurrency: NativeCurrency{
		Name:     "HAVE",
		Symbol:   "HAVE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://datahaven.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Blockscout",
			URL:      "https://dhscan.io",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Datahaven55931 = Chain{
	Name:      "DataHaven Testnet",
	Chain:     "datahaven-testnet",
	ChainID:   55931,
	NetworkID: 55931,
	ShortName: "datahaven",
	RPC: []string{
		"https://services.datahaven-testnet.network/testnet",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MOCK",
		Symbol:   "MOCK",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://datahaven.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Blockscout",
			URL:      "https://testnet.dhscan.io",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Zktanenbaum57057 = Chain{
	Name:      "zkTanenbaum Testnet",
	Chain:     "ZKSYS",
	ChainID:   57057,
	NetworkID: 57057,
	ShortName: "zktanenbaum",
	RPC: []string{
		"https://rpc-zk.tanenbaum.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Testnet Syscoin",
		Symbol:   "TSYS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://syscoin.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "zkTanenbaum Block Explorer",
			URL:      "https://explorer-zk.tanenbaum.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var MevCommit57173 = Chain{
	Name:      "mev-commit Mainnet",
	Chain:     "mev-commit",
	ChainID:   57173,
	NetworkID: 57173,
	ShortName: "mev-commit",
	RPC: []string{
		"https://chainrpc.mev-commit.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.primev.xyz"}[0],
	Explorers: []Explorer{
		{
			Name: "mev-commit Xplorer",
			URL:  "https://www.mev-commit.xyz",
		},
	},
}

var Jello61564 = Chain{
	Name:      "Gelatine Network",
	Chain:     "JELLO",
	ChainID:   61564,
	NetworkID: 61564,
	ShortName: "jello",
	RPC: []string{
		"https://rpc.pine.ink",
	},
	NativeCurrency: NativeCurrency{
		Name:     "JELLO",
		Symbol:   "JELLO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://gelatine.pine.ink"}[0],
	Explorers: []Explorer{
		{
			Name:     "Gelatine Explorer",
			URL:      "https://explorer.pine.ink",
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
			Name:     "movascan",
			URL:      "https://scan.movachain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Apollo62606 = Chain{
	Name:      "Apollo Mainnet",
	Chain:     "APOLLO",
	ChainID:   62606,
	NetworkID: 62606,
	ShortName: "apollo",
	RPC: []string{
		"https://mainnet-rpc.apolloscan.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Apollo",
		Symbol:   "APOLLO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://apolloscan.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "Apollo Mainnet Explorer",
			URL:      "https://apolloscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Veri563868 = Chain{
	Name:      "Veri5",
	Chain:     "VERI5",
	ChainID:   63868,
	NetworkID: 63868,
	ShortName: "veri5",
	RPC: []string{
		"https://rpc0.veri5.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Unit",
		Symbol:   "UNIT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://veri5.technology"}[0],
	Explorers: []Explorer{
		{
			Name:     "Veri5 Explorer",
			URL:      "https://explorer.veri5.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Gald64137 = Chain{
	Name:      "Galdrion Mainnet",
	Chain:     "GALD",
	ChainID:   64137,
	NetworkID: 64137,
	ShortName: "gald",
	RPC: []string{
		"https://rpc-mainnet.galdrionscan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Galdrion",
		Symbol:   "GALD",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://galdrion.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "GaldrionScan",
			URL:      "https://galdrionscan.com",
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
			Name:     "OMAChain Testnet Explorer",
			URL:      "https://explorer.testnet.chain.oma3.org/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Nxpc68414 = Chain{
	Name:      "Henesys",
	Chain:     "Henesys",
	ChainID:   68414,
	NetworkID: 68414,
	ShortName: "nxpc",
	RPC: []string{
		"https://henesys-rpc.msu.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Nexpace",
		Symbol:   "NXPC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://nexpace.io/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Xangle MSU Explorer",
			URL:      "https://msu-explorer.xangle.io",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "Avalanche Explorer",
			URL:      "https://subnets.avax.network/henesys",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Eto69670 = Chain{
	Name:      "ETO L1",
	Chain:     "ETO",
	ChainID:   69670,
	NetworkID: 69670,
	ShortName: "eto",
	RPC: []string{
		"https://eto.ash.center/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "eGAS",
		Symbol:   "eGAS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://eto.ash.center"}[0],
	Explorers: []Explorer{
		{
			Name: "ETO Explorer",
			URL:  "https://eto-explorer.ash.center",
		},
	},
}

var Pyra70003 = Chain{
	Name:      "Pyra Chain",
	Chain:     "PYRA",
	ChainID:   70003,
	NetworkID: 70003,
	ShortName: "pyra",
	RPC: []string{
		"https://rpc.pyrachain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "PYRA",
		Symbol:   "PYRA",
		Decimals: 9,
	},
	InfoURL: &[]string{"https://pyrachain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "Pyra Chain Explorer",
			URL:      "https://explorer.pyrachain.io",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Seven70007 = Chain{
	Name:      "Seven Chain",
	Chain:     "SEVEN",
	ChainID:   70007,
	NetworkID: 70007,
	ShortName: "seven",
	RPC: []string{
		"https://theseven.meme/api/seven-chain/jsonrpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Seven",
		Symbol:   "SEVEN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://theseven.meme"}[0],
	Explorers: []Explorer{
		{
			Name:     "Seven Chain Explorer",
			URL:      "https://theseven.meme/blockchain/explorer",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Eki70101 = Chain{
	Name:      "EKI Chain",
	Chain:     "EKI",
	ChainID:   70101,
	NetworkID: 70101,
	ShortName: "eki",
	RPC: []string{
		"https://eki-chain.onrender.com/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "EKI",
		Symbol:   "EKI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://eki-chain.onrender.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "EKI Explorer",
			URL:      "https://eki-chain.onrender.com",
			Standard: &[]string{"none"}[0],
		},
	},
}

var CxTestnet70707 = Chain{
	Name:      "CX Chain Testnet",
	Chain:     "CX",
	ChainID:   70707,
	NetworkID: 70707,
	ShortName: "cx-testnet",
	RPC: []string{
		"https://subnets.avax.network/cxctestnet/testnet/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CX",
		Symbol:   "CX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.cxchain.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name: "CX Chain Testnet Explorer",
			URL:  "https://subnets-test.avax.network/cxctestnet",
		},
	},
}

var WcnTestnet71117 = Chain{
	Name:      "W Chain Testnet",
	Chain:     "WCN",
	ChainID:   71117,
	NetworkID: 71117,
	ShortName: "wcn-testnet",
	RPC: []string{
		"https://rpc-testnet.w-chain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "W Coin",
		Symbol:   "WCO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://w-chain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "W Scan Testnet",
			URL:      "https://scan-testnet.w-chain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var RLS72957 = Chain{
	Name:      "Rayls Mainnet",
	Chain:     "RLS",
	ChainID:   72957,
	NetworkID: 72957,
	ShortName: "RLS",
	RPC: []string{
		"https://mainnet-rpc.rayls.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "USD Rayls",
		Symbol:   "USDr",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://rayls.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Rayls Mainnet Explorer",
			URL:      "https://explorer.rayls.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Seleman73571 = Chain{
	Name:      "SELEMAN Chain",
	Chain:     "SMN",
	ChainID:   73571,
	NetworkID: 73571,
	ShortName: "seleman",
	RPC: []string{
		"https://explorer.primevertexlabs.com.mx/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SELEMAN",
		Symbol:   "SMN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://explorer.primevertexlabs.com.mx/explorer"}[0],
	Explorers: []Explorer{
		{
			Name:     "seleman",
			URL:      "https://explorer.primevertexlabs.com.mx",
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
			Name:     "CarrScan",
			URL:      "https://testnet.carrscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ventures77717 = Chain{
	Name:      "Ventures Blockchain",
	Chain:     "Ventures",
	ChainID:   77717,
	NetworkID: 77717,
	ShortName: "ventures",
	RPC: []string{
		"https://rpc.venturesblockchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ventures Coin",
		Symbol:   "VC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.venturesblockchain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "Ventures Explorer",
			URL:      "https://explorer.venturesblockchain.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Bsos77888 = Chain{
	Name:      "BSOS Chain",
	Chain:     "BSOS",
	ChainID:   77888,
	NetworkID: 77888,
	ShortName: "bsos",
	RPC: []string{
		"https://rpc.one.bsos.co",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BSOS",
		Symbol:   "BSOS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.bsos.co"}[0],
	Explorers: []Explorer{
		{
			Name:     "BSOS Chain Explorer",
			URL:      "https://explorer.one.bsos.co",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Bradi78168 = Chain{
	Name:      "Bradicoin",
	Chain:     "BRADI",
	ChainID:   78168,
	NetworkID: 78168,
	ShortName: "bradi",
	RPC: []string{
		"https://bradicoin-api.onrender.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Bradicoin",
		Symbol:   "BRD",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.bradichain.com"}[0],
}

var PexliTestnet78901 = Chain{
	Name:      "Pexli Testnet",
	Chain:     "PEX",
	ChainID:   78901,
	NetworkID: 78901,
	ShortName: "pexli-testnet",
	RPC: []string{
		"https://testrpc.pex.li",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Pexli",
		Symbol:   "PEX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://pex.li"}[0],
	Explorers: []Explorer{
		{
			Name:     "Pexli Explorer",
			URL:      "https://explorer.pex.li",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Hpx80808 = Chain{
	Name:      "HyperX",
	Chain:     "HPX",
	ChainID:   80808,
	NetworkID: 80808,
	ShortName: "hpx",
	RPC: []string{
		"https://rpc.hyperx.technology",
	},
	NativeCurrency: NativeCurrency{
		Name:     "HPX",
		Symbol:   "HPX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://hyperx.technology"}[0],
	Explorers: []Explorer{
		{
			Name:     "HyperX Explorer",
			URL:      "https://scan.hyperx.technology",
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
			Name:     "blockscout",
			URL:      "https://explorer.onyx.org",
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
			Name:     "blockscout",
			URL:      "https://explorer.codex.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Steemvm81630 = Chain{
	Name:      "SteemVM",
	Chain:     "SVM",
	ChainID:   81630,
	NetworkID: 81630,
	ShortName: "steemvm",
	RPC: []string{
		"https://evm.steemvmscan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "STEEM",
		Symbol:   "STEEM",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://steemvmscan.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "SVM EVM Scan",
			URL:      "https://evmscan.steemvmscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ticko84256 = Chain{
	Name:      "Ticko",
	Chain:     "Ticko",
	ChainID:   84256,
	NetworkID: 84256,
	ShortName: "ticko",
	RPC: []string{
		"https://miner.ticko.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ticko.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name:     "ticko explorer",
			URL:      "https://app.ticko.xyz/explorer",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var TickoTestnet84257 = Chain{
	Name:      "Ticko Testnet",
	Chain:     "Ticko",
	ChainID:   84257,
	NetworkID: 84257,
	ShortName: "ticko-testnet",
	RPC: []string{
		"https://miner.testnet.ticko.xyz:4556",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://testnet.ticko.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name:     "ticko explorer",
			URL:      "https://testnet.ticko.xyz/explorer",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Plus88088 = Chain{
	Name:      "PLUS Mainnet",
	Chain:     "PLUS",
	ChainID:   88088,
	NetworkID: 88088,
	ShortName: "plus",
	RPC: []string{
		"https://plusmain.net/api/rpc",
		"https://rpc.plusmain.net",
	},
	NativeCurrency: NativeCurrency{
		Name:     "PLUS Coin",
		Symbol:   "PLUS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://plusmain.net"}[0],
	Explorers: []Explorer{
		{
			Name:     "PLUS Mainnet Explorer",
			URL:      "https://scan.plusmain.net",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ptek88788 = Chain{
	Name:      "PropTech Mainnet",
	Chain:     "PTEK",
	ChainID:   88788,
	NetworkID: 88788,
	ShortName: "ptek",
	RPC: []string{
		"https://mainnet.ptekcoin.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "PropTech Token",
		Symbol:   "PTEK",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ptekcoin.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "PropTech Blockchain Explorer",
			URL:      "https://explorer.ptekcoin.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Qtschain88868 = Chain{
	Name:      "QTSCHAIN Mainnet",
	Chain:     "QTS",
	ChainID:   88868,
	NetworkID: 88868,
	ShortName: "qtschain",
	RPC: []string{
		"https://rpc-1.qts-chain.com",
		"https://rpc-2.qts-chain.com",
		"https://rpc-3.qts-chain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "QTS",
		Symbol:   "QTS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://qts-chain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "QTS Explorer",
			URL:      "https://explorer.qts-chain.com",
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
			Name:     "Chiliscan",
			URL:      "https://chiliscan.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name: "Scan Chiliz",
			URL:  "https://scan.chiliz.com",
		},
	},
}

var Valuex90000 = Chain{
	Name:      "ValueX Chain",
	Chain:     "VLX",
	ChainID:   90000,
	NetworkID: 90000,
	ShortName: "valuex",
	RPC: []string{
		"https://node.valuex-foundation.com/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ValueX Token",
		Symbol:   "VLX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://valuex-foundation.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "VLX Explorer",
			URL:      "https://scan.valuex-foundation.com",
			Standard: &[]string{"EIP3091"}[0],
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
			Name:     "Watr Explorer",
			URL:      "https://explorer.testnet.watr.org",
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

var GOGO99001 = Chain{
	Name:      "Gogo Mainnet",
	Chain:     "GOGO",
	ChainID:   99001,
	NetworkID: 99001,
	ShortName: "GOGO",
	RPC: []string{
		"https://gogoblockchain.wuaze.com/node_rpc.php",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Gogo",
		Symbol:   "GOGO",
		Decimals: 18,
	},
	Explorers: []Explorer{
		{
			Name:     "GogoScan",
			URL:      "https://gogoblockchain.wuaze.com/explorer.php",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var MC99002 = Chain{
	Name:      "Mars Mainnet",
	Chain:     "MC",
	ChainID:   99002,
	NetworkID: 99002,
	ShortName: "MC",
	RPC: []string{
		"https://mars.free.nf/rpc.php",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Mars Coin",
		Symbol:   "MC",
		Decimals: 18,
	},
	Explorers: []Explorer{
		{
			Name:     "MarsScan",
			URL:      "https://mars.free.nf/explorer.php",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Trct99566 = Chain{
	Name:      "Tractsafe Mainnet",
	Chain:     "TRCT",
	ChainID:   99566,
	NetworkID: 99566,
	ShortName: "trct",
	RPC: []string{
		"https://xapi.tractsafe.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Tractsafe",
		Symbol:   "TRCT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tractsafe.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "tractsafescan",
			URL:      "https://explorer.tractsafe.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var ElysiumTestnet99801 = Chain{
	Name:      "Elysium Testnet",
	Chain:     "Elysium Testnet",
	ChainID:   99801,
	NetworkID: 99801,
	ShortName: "elysium-testnet",
	RPC: []string{
		"https://testnet-rpc.elysium.kinetiq.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "HYPE",
		Symbol:   "HYPE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://elysium.kinetiq.xyz/docs/what-is-elysium"}[0],
	Explorers: []Explorer{
		{
			Name: "Elysium Testnet Explorer",
			URL:  "https://testnet.elysium.kinetiq.xyz",
		},
	},
}

var Elysium99901 = Chain{
	Name:      "Elysium",
	Chain:     "Elysium",
	ChainID:   99901,
	NetworkID: 99901,
	ShortName: "elysium",
	RPC: []string{
		"https://rpc.elysium.kinetiq.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "HYPE",
		Symbol:   "HYPE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://elysium.kinetiq.xyz/docs/what-is-elysium"}[0],
	Explorers: []Explorer{
		{
			Name: "Elysium Explorer",
			URL:  "https://elysium.kinetiq.xyz",
		},
	},
}

var Qsn99991 = Chain{
	Name:      "Quantum Sharded Network Testnet",
	Chain:     "QSN",
	ChainID:   99991,
	NetworkID: 99991,
	ShortName: "qsn",
	RPC: []string{
		"https://node.qsnchain.com/testnet/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Quantum Sharded Network",
		Symbol:   "tQSN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://qsnchain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "QSN Explorer",
			URL:      "https://qsnscan.io",
			Standard: &[]string{"EIP3091"}[0],
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
			Name:     "blockscout",
			URL:      "https://creditcoin.blockscout.com",
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
			Name:     "blockscout",
			URL:      "https://creditcoin-testnet.blockscout.com",
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
			Name:     "blockscout",
			URL:      "https://creditcoin-devnet.blockscout.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Mtf114514 = Chain{
	Name:      "MetaFlux Testnet",
	Chain:     "MetaFluxEVM",
	ChainID:   114514,
	NetworkID: 114514,
	ShortName: "mtf",
	RPC: []string{
		"https://api.testnet.mtf.exchange/evm",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MetaFlux",
		Symbol:   "MTF",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mtf.exchange"}[0],
}

var Swss122605 = Chain{
	Name:      "SWSS Chain",
	Chain:     "SWSS",
	ChainID:   122605,
	NetworkID: 122605,
	ShortName: "swss",
	RPC: []string{
		"https://swssrpc.swss.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SWSS Coin",
		Symbol:   "SWSS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://swss.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "SWSS Chain Scan",
			URL:      "https://swssscan.swss.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ids123999 = Chain{
	Name:      "Nobody Mainnet",
	Chain:     "IDS",
	ChainID:   123999,
	NetworkID: 123999,
	ShortName: "ids",
	RPC: []string{
		"https://a-rpc.nobody.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "IDS",
		Symbol:   "IDS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.nobody.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "nobodyscan",
			URL:      "https://a-scan.nobody.network",
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
			Name:     "Mitoscan",
			URL:      "https://mitoscan.io/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Grav127001 = Chain{
	Name:      "Gravity",
	Chain:     "Gravity",
	ChainID:   127001,
	NetworkID: 127001,
	ShortName: "grav",
	RPC: []string{
		"https://mainnet-rpc.gravity.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Gravity",
		Symbol:   "G",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://gravity.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Gravity Mainnet Explorer",
			URL:      "https://mainnet-explorer.gravity.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Etls127823 = Chain{
	Name:      "Etherlink Shadownet Testnet",
	Chain:     "Etherlink",
	ChainID:   127823,
	NetworkID: 127823,
	ShortName: "etls",
	RPC: []string{
		"https://node.shadownet.etherlink.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "tez",
		Symbol:   "XTZ",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://etherlink.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Etherlink Shadownet Explorer",
			URL:      "https://shadownet.explorer.etherlink.com",
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
		"https://fuel-testnet-rpc.getzapped.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ethereum",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://fuel.network/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Fuel Sepolia Testnet Explorer",
			URL:      "https://fuel-testnet-explorer.getzapped.org",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Rphx130526 = Chain{
	Name:      "RPHX Mainnet",
	Chain:     "RPHX",
	ChainID:   130526,
	NetworkID: 130526,
	ShortName: "rphx",
	RPC: []string{
		"https://rpc.rphxscan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "RPHX",
		Symbol:   "RPHX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://rphxscan.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "RphxScan",
			URL:      "https://rphxscan.com",
			Standard: &[]string{"EIP3091"}[0],
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
			Name:     "ARIA Explorer",
			URL:      "https://explorer.ariascan.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Midxt139420 = Chain{
	Name:      "Midpoint Cross Testnet",
	Chain:     "MIDX",
	ChainID:   139420,
	NetworkID: 139420,
	ShortName: "midxt",
	RPC: []string{
		"https://testnet.midpointcross.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Midpoint Cross Testnet",
		Symbol:   "tMIDX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.midpointcross.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Midpoint Cross Testnet",
			URL:      "https://testnet-transactions.midpointcross.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Bexchain140586 = Chain{
	Name:      "BEXChain",
	Chain:     "BEX",
	ChainID:   140586,
	NetworkID: 140586,
	ShortName: "bexchain",
	RPC: []string{
		"https://rpc.bexchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BEX",
		Symbol:   "BEX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://bexchain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "BEXChain Scan",
			URL:      "https://scan.bexchain.com",
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

var Wcn171717 = Chain{
	Name:      "W Chain Mainnet",
	Chain:     "WCN",
	ChainID:   171717,
	NetworkID: 171717,
	ShortName: "wcn",
	RPC: []string{
		"https://rpc.w-chain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "W Coin",
		Symbol:   "WCO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://w-chain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "W Scan",
			URL:      "https://scan.w-chain.com",
			Standard: &[]string{"EIP3091"}[0],
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
			Name:     "Lit Chain Explorer",
			URL:      "https://lit-chain-explorer.litprotocol.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Dpn179205 = Chain{
	Name:      "Dinari Financial Network Paper",
	Chain:     "DFNP",
	ChainID:   179205,
	NetworkID: 179205,
	ShortName: "dpn",
	RPC: []string{
		"https://subnets.avax.network/dfnpaper/testnet/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Dinari Gas",
		Symbol:   "DGAS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://dinari.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Dinari Paper Ledger",
			URL:  "https://subnets-test.avax.network/dfnpaper",
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
			Name:     "HPP Sepolia Explorer",
			URL:      "https://sepolia-explorer.hpp.io",
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
			Name:     "gomscan",
			URL:      "https://scan.gomchain.com",
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
			Name:     "HPP Mainnet Explorer",
			URL:      "https://explorer.hpp.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var R0ar193939 = Chain{
	Name:      "R0AR Chain",
	Chain:     "R0AR",
	ChainID:   193939,
	NetworkID: 193939,
	ShortName: "r0ar",
	RPC: []string{
		"https://rpc-r0ar.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://r0ar.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "R0ARscan",
			URL:      "https://r0arscan.io",
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
			Name:     "EADX Explorer",
			URL:      "https://explorer.eadx.network",
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
			Name:     "nitroscan",
			URL:      "https://explorer-testnet.nitrograph.foundation",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Fsc201022 = Chain{
	Name:      "FONChain Mainnet",
	Chain:     "FSC",
	ChainID:   201022,
	NetworkID: 201022,
	ShortName: "fsc",
	RPC: []string{
		"https://fsc-dataseed1.fonscan.io",
		"https://fsc-dataseed2.fonscan.io",
		"https://fsc-dataseed3.fonscan.io",
		"https://fsc-dataseed4.fonscan.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "FON",
		Symbol:   "FON",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://fonchain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "fonscan",
			URL:      "https://fonscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Dfn202110 = Chain{
	Name:      "Dinari Financial Network",
	Chain:     "DFN",
	ChainID:   202110,
	NetworkID: 202110,
	ShortName: "dfn",
	RPC: []string{
		"https://subnets.avax.network/dinari/mainnet/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Dinari Gas",
		Symbol:   "DGAS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://dinari.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Dinari Ledger",
			URL:  "https://subnets.avax.network/dinari",
		},
	},
}

var SVS202308 = Chain{
	Name:      "StarChain",
	Chain:     "SVS",
	ChainID:   202308,
	NetworkID: 202308,
	ShortName: "SVS",
	RPC: []string{
		"https://rpc.starryscan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SVS",
		Symbol:   "SVS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.starrychain.net"}[0],
	Explorers: []Explorer{
		{
			Name:     "starryscan",
			URL:      "https://www.starryscan.com",
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
			Name:     "Propulence Testnet Explorer",
			URL:      "https://explorer.testnet.thepropulence.com",
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
			Name:     "Aurex Testnet Explorer",
			URL:      "https://aurexgold.com:4001",
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
			Name:     "juscan-testnet",
			URL:      "https://testnet.juscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var RoninSaigon202601 = Chain{
	Name:      "Ronin Saigon Testnet",
	Chain:     "RON",
	ChainID:   202601,
	NetworkID: 202601,
	ShortName: "ronin-saigon",
	RPC: []string{
		"https://saigon-testnet.roninchain.com/rpc",
		"https://ronin-saigon.gateway.tatum.io/",
		"https://ronin-saigon.drpc.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ronin",
		Symbol:   "RON",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://roninchain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Ronin Saigon Explorer",
			URL:      "https://saigon-explorer.roninchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Miama202610 = Chain{
	Name:      "MIAMA Chain",
	Chain:     "MIAMA",
	ChainID:   202610,
	NetworkID: 202610,
	ShortName: "miama",
	RPC: []string{
		"https://miama.vidainnovasystem.top/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MIAMA",
		Symbol:   "MIAMA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://miama.vidainnovasystem.top"}[0],
	Explorers: []Explorer{
		{
			Name:     "miama-explorer",
			URL:      "https://miama.vidainnovasystem.top/explorador",
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
			Name:     "juscan",
			URL:      "https://juscan.io",
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
			Name:     "KultChain Explorer",
			URL:      "https://explorer.kultchain.com",
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
			Name:     "SSHIVANSH Explorer",
			URL:      "https://explorer.sshivanshcoin.com",
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
			Name:     "Moca Chain Scan",
			URL:      "https://testnet-scan.mocachain.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ares232425 = Chain{
	Name:      "Aries Chain Mainnet",
	Chain:     "ARES",
	ChainID:   232425,
	NetworkID: 232425,
	ShortName: "ares",
	RPC: []string{
		"https://rpc.arieschain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Aries",
		Symbol:   "ARES",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://arieschain.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "AriesScan",
			URL:      "https://scan.arieschain.org",
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
			Name:     "CodeNekt Explorer",
			URL:      "https://explorer-codenekt-mainnet.cogitus.io",
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
			Name:     "ULALO Explorer",
			URL:      "https://tracehawk.ulalo.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Sin250225 = Chain{
	Name:      "Sintrop Impact Blockchain",
	Chain:     "SINTROP",
	ChainID:   250225,
	NetworkID: 250225,
	ShortName: "sin",
	RPC: []string{
		"https://rpc.sintrop.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Sintrop",
		Symbol:   "SIN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://sintrop.com"}[0],
	Explorers: []Explorer{
		{
			Name: "Sintrop Explorer",
			URL:  "https://explorer.sintrop.com",
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
			Name:     "KUB Layer2 Testnet Explorer",
			URL:      "https://kublayer2.testnet.kubscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Datachain271828 = Chain{
	Name:      "Datachain Rope",
	Chain:     "DATACHAIN",
	ChainID:   271828,
	NetworkID: 271828,
	ShortName: "datachain",
	RPC: []string{
		"https://erpc.datachain.network",
		"https://ws.datachain.network",
		"https://erpc.rope.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "DC FAT",
		Symbol:   "FAT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://datachain.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "DC Scan",
			URL:      "https://dcscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Mbtx271831 = Chain{
	Name:      "MBTX Mainnet",
	Chain:     "MBTX",
	ChainID:   271831,
	NetworkID: 271831,
	ShortName: "mbtx",
	RPC: []string{
		"https://candied-undecided-straggler.ngrok-free.dev/l1",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MBTX",
		Symbol:   "MBTX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mbtux.uxi.rocks/mbtx"}[0],
	Explorers: []Explorer{
		{
			Name:     "MBTX Explorer",
			URL:      "https://mbtux.uxi.rocks/mbtx",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Mbtxl2271832 = Chain{
	Name:      "MBTX Nexus",
	Chain:     "MBTX",
	ChainID:   271832,
	NetworkID: 271832,
	ShortName: "mbtxl2",
	RPC: []string{
		"https://candied-undecided-straggler.ngrok-free.dev/l2",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://mbtux.uxi.rocks/mbtx"}[0],
	Explorers: []Explorer{
		{
			Name:     "MBTX Nexus Explorer",
			URL:      "https://mbtux.uxi.rocks/mbtx/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var CreatorChainTestnet278701 = Chain{
	Name:      "Creator Chain Testnet",
	Chain:     "Creator Chain",
	ChainID:   278701,
	NetworkID: 278701,
	ShortName: "creator-chain-testnet",
	RPC: []string{
		"https://rpc.testnet.oncreator.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.oncreator.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Creator Chain Testnet Explorer",
			URL:      "https://explorer.testnet.oncreator.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Valuechain286623 = Chain{
	Name:      "ValueChain",
	Chain:     "SOSO",
	ChainID:   286623,
	NetworkID: 286623,
	ShortName: "valuechain",
	RPC: []string{
		"https://mainnet.valuechain.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SoSoValue",
		Symbol:   "SOSO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://sodex.com/"}[0],
	Explorers: []Explorer{
		{
			Name:     "ValueChain Explorer",
			URL:      "https://main-scan.valuechain.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Pmt290290 = Chain{
	Name:      "PMT Mainnet",
	Chain:     "PMT",
	ChainID:   290290,
	NetworkID: 290290,
	ShortName: "pmt",
	RPC: []string{
		"https://node1.pmtchain.com",
		"https://node2.pmtchain.com",
		"https://node3.pmtchain.com",
		"https://node4.pmtchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "PMT",
		Symbol:   "PMT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://publicmasterpiece.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "PMTScan",
			URL:      "https://pmtscan.com",
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
			Name:     "t1 Explorer",
			URL:      "https://explorer.mainnet.t1protocol.com",
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
			Name:     "t1 Explorer",
			URL:      "https://explorer.testnet.t1protocol.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Axion303030 = Chain{
	Name:      "AXION Mainnet",
	Chain:     "AXION",
	ChainID:   303030,
	NetworkID: 303030,
	ShortName: "axion",
	RPC: []string{
		"https://rpc.axiondefi.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "AXION",
		Symbol:   "AXION",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.axiondefi.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "AXSCAN",
			URL:      "https://axscan.axiondefi.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Vcr314169 = Chain{
	Name:      "VCR Chain",
	Chain:     "VCR",
	ChainID:   314169,
	NetworkID: 314169,
	ShortName: "vcr",
	RPC: []string{
		"https://rpc.vcrchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CCR",
		Symbol:   "CCR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.vcrchain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "VCR Chain Explorer",
			URL:      "https://scan.vcrchain.com",
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
			Name:     "DComm Explorer",
			URL:      "https://explorer-dcomm.cogitus.io",
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
			Name:     "Laxaum Explorer",
			URL:      "http://54.252.195.55:3002",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var DenMainnet369369 = Chain{
	Name:      "Denergy Network",
	Chain:     "DEN",
	ChainID:   369369,
	NetworkID: 369369,
	ShortName: "den-mainnet",
	RPC: []string{
		"https://rpc.d.energy/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "WATT",
		Symbol:   "WATT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://d.energy/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Denergy Explorer",
			URL:      "https://explorer.denergychain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Teqoin420377 = Chain{
	Name:      "TeQoin Sepolia Testnet",
	Chain:     "ETH",
	ChainID:   420377,
	NetworkID: 420377,
	ShortName: "teqoin",
	RPC: []string{
		"https://rpc.teqoin.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Sepolia Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://teqoin.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "TeQoin Blockscan Testnet",
			URL:      "https://testnet-blockscan.teqoin.io/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Infinite421018 = Chain{
	Name:      "Infinite Drive",
	Chain:     "INFINITE",
	ChainID:   421018,
	NetworkID: 421018,
	ShortName: "infinite",
	RPC: []string{
		"https://evm.infinitedrive.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Improbability",
		Symbol:   "42",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://infinitedrive.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Infinite Drive Explorer",
			URL:      "https://scan.infinitedrive.xyz",
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
			Name:     "Mintrax Explorer",
			URL:      "https://explorer.mintrax.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Btcwchain482120 = Chain{
	Name:      "Bitcoin Swap",
	Chain:     "BTCw",
	ChainID:   482120,
	NetworkID: 482120,
	ShortName: "btcwchain",
	RPC: []string{
		"https://rpc.btcw.tech",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Bitcoin Swap",
		Symbol:   "BTCw",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://btcw.tech"}[0],
	Explorers: []Explorer{
		{
			Name:     "Bitcoin Swap Explorer",
			URL:      "https://explorer.btcw.tech",
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
			Name:     "Commons Explorer",
			URL:      "https://explorer.commons.syndicate.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Alpha511111 = Chain{
	Name:      "Alpha Chain Testnet",
	Chain:     "Alpha Chain",
	ChainID:   511111,
	NetworkID: 511111,
	ShortName: "alpha",
	RPC: []string{
		"https://testnet-rpc.goalpha.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.alphatoken.com/AlphaChain/about-alpha-chain"}[0],
	Explorers: []Explorer{
		{
			Name:     "Alpha Chain Scan",
			URL:      "https://testnet-scan.goalpha.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Tone612044 = Chain{
	Name:      "ONE Chain Testnet",
	Chain:     "ONE",
	ChainID:   612044,
	NetworkID: 612044,
	ShortName: "tone",
	RPC: []string{
		"https://testnet.onechain.nexus:22001",
	},
	NativeCurrency: NativeCurrency{
		Name:     "TestnetONE",
		Symbol:   "tONE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://onechain.nexus"}[0],
	Explorers: []Explorer{
		{
			Name:     "ONE Testnet Explorer",
			URL:      "https://explorer.onechain.nexus",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var One612055 = Chain{
	Name:      "ONE Chain Mainnet",
	Chain:     "ONE",
	ChainID:   612055,
	NetworkID: 612055,
	ShortName: "one",
	RPC: []string{
		"https://mainnet.onechain.nexus:22001",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ONE",
		Symbol:   "ONE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://onechain.nexus"}[0],
	Explorers: []Explorer{
		{
			Name:     "ONE Explorer",
			URL:      "https://explorer.onechain.nexus",
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
			Name:     "Blockscout",
			URL:      "https://explorer.galactica.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Tgald641371 = Chain{
	Name:      "Galdrion Testnet",
	Chain:     "tGALD",
	ChainID:   641371,
	NetworkID: 641371,
	ShortName: "tgald",
	RPC: []string{
		"https://rpc-testnet.galdrionscan.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Testnet Galdrion",
		Symbol:   "tGALD",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://galdrion.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "GaldrionScan Testnet",
			URL:      "https://galdrionscan.com",
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

var EduChainTestnet656476 = Chain{
	Name:      "EDU Chain Testnet",
	Chain:     "EDU Chain Testnet",
	ChainID:   656476,
	NetworkID: 656476,
	ShortName: "edu-chain-testnet",
	RPC: []string{
		"https://rpc.testnet.educhain.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "EDU",
		Symbol:   "EDU",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.educhain.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name:     "EDU Chain Testnet Explorer",
			URL:      "https://explorer.testnet.educhain.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Aztec677868 = Chain{
	Name:      "Aztec Mainnet",
	Chain:     "Aztec",
	ChainID:   677868,
	NetworkID: 677868,
	ShortName: "aztec",
	RPC: []string{
		"https://aztec-mainnet.drpc.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://aztec.network/"}[0],
	Explorers: []Explorer{
		{
			Name:     "AztecScan",
			URL:      "https://aztecscan.xyz/",
			Standard: &[]string{"EIP3091"}[0],
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
			Name:     "Pharos Testnet Explorer",
			URL:      "https://testnet.pharosscan.xyz",
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
			Name:     "Pharos Atlantic Testnet Explorer",
			URL:      "https://atlantic.pharosscan.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Marschain704851 = Chain{
	Name:      "Mars Chain",
	Chain:     "MARS",
	ChainID:   704851,
	NetworkID: 704851,
	ShortName: "marschain",
	RPC: []string{
		"https://rpc.mars-scan.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Mars Coin",
		Symbol:   "MarsC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://explorer.mars-chain.io/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Mars Chain Explorer",
			URL:      "https://explorer.mars-chain.io/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var MarschainTestnet704852 = Chain{
	Name:      "Mars Chain Testnet",
	Chain:     "MARS",
	ChainID:   704852,
	NetworkID: 704852,
	ShortName: "marschain-testnet",
	RPC: []string{
		"https://testnet-rpc.mars-chain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Mars Coin",
		Symbol:   "MarsC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://testnet-explorer.mars-chain.io/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Mars Chain Testnet Explorer",
			URL:      "https://testnet-explorer.mars-chain.io/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Drama710520 = Chain{
	Name:      "Drama",
	Chain:     "DRAMA",
	ChainID:   710520,
	NetworkID: 710520,
	ShortName: "drama",
	RPC: []string{
		"https://rpc.drama.center",
	},
	NativeCurrency: NativeCurrency{
		Name:     "DRAMA",
		Symbol:   "DRAMA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://drama.center"}[0],
	Explorers: []Explorer{
		{
			Name:     "Drama Explorer",
			URL:      "https://scan.drama.center",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Prana712217 = Chain{
	Name:      "PRANA Mainnet",
	Chain:     "PRANA",
	ChainID:   712217,
	NetworkID: 712217,
	ShortName: "prana",
	RPC: []string{
		"https://rpc.prana.melek.salon",
	},
	NativeCurrency: NativeCurrency{
		Name:     "PRANA",
		Symbol:   "PRANA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://wiki.soapbox.community/wiki/PRANA"}[0],
	Explorers: []Explorer{
		{
			Name:     "PRANAScan",
			URL:      "https://pranascan.soapbox.community",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Zbx728990 = Chain{
	Name:      "Zebvix Mainnet",
	Chain:     "ZBX",
	ChainID:   728990,
	NetworkID: 728990,
	ShortName: "zbx",
	RPC: []string{
		"https://rpc.zebvixchain.com/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Zebvix",
		Symbol:   "ZBX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://zebvixchain.com/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Zebvix Scan",
			URL:      "https://scan.zebvixchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Cx737373 = Chain{
	Name:      "CX Chain Mainnet",
	Chain:     "CX",
	ChainID:   737373,
	NetworkID: 737373,
	ShortName: "cx",
	RPC: []string{
		"https://subnets.avax.network/cx/mainnet/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "CX",
		Symbol:   "CX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.cxchain.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name: "CX Chain Mainnet Explorer",
			URL:  "https://subnets.avax.network/cx",
		},
	},
}

var Toog777001 = Chain{
	Name:      "TOOG Chain",
	Chain:     "TOOG",
	ChainID:   777001,
	NetworkID: 777001,
	ShortName: "toog",
	RPC: []string{
		"https://toog-proxy.toog-chain.workers.dev/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "TEST",
		Symbol:   "TEST",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://toogchain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "TOOG Explorer",
			URL:      "https://toog-proxy.toog-chain.workers.dev/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var MakaChainMainnet777178 = Chain{
	Name:      "MakaChain Mainnet",
	Chain:     "MakaChain",
	ChainID:   777178,
	NetworkID: 777178,
	ShortName: "MakaChain mainnet",
	RPC: []string{
		"https://api.makachain.io/ext/bc/2TfGh1pyDoumsDgTxDmWoseRD7GGRwrpX19HLsQdeCRqwK9BqZ/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MFUEL",
		Symbol:   "MFUEL",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://makachain.io/"}[0],
	Explorers: []Explorer{
		{
			Name:     "MakaChain Explorer",
			URL:      "https://makascan.io/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Flxg778400 = Chain{
	Name:      "Felix Smart Chain",
	Chain:     "FLXG",
	ChainID:   778400,
	NetworkID: 778400,
	ShortName: "flxg",
	RPC: []string{
		"https://rpc.felixexplorer.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "FLXG",
		Symbol:   "FLXG",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://felixexplorer.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Felix Smart Chain Explorer",
			URL:      "https://felixexplorer.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ust778889 = Chain{
	Name:      "Unitsky String Technologies",
	Chain:     "Unitsky",
	ChainID:   778889,
	NetworkID: 778889,
	ShortName: "ust",
	RPC: []string{
		"https://147-45-143-23.sslip.io/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Unitsky Token",
		Symbol:   "UST",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://147-45-143-23.sslip.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "Unitsky Explorer",
			URL:      "https://147-45-143-23.sslip.io",
			Standard: &[]string{"none"}[0],
		},
	},
}

var NvnmChainDevnet787222 = Chain{
	Name:      "NVNM Chain Devnet",
	Chain:     "NVNM",
	ChainID:   787222,
	NetworkID: 787222,
	ShortName: "nvnm-chain-devnet",
	RPC: []string{
		"https://rpc.nvnm.canary.mantrachain.dev",
	},
	NativeCurrency: NativeCurrency{
		Name:     "NVNM USD",
		Symbol:   "nUSD",
		Decimals: 6,
	},
	InfoURL: &[]string{"https://www.nvnmchain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "NVNM Explorer",
			URL:      "https://explorer.nvnm.canary.mantrachain.dev",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "NVNM Tempo Explorer",
			URL:      "https://scan.nvnm.canary.mantrachain.dev",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var NvnmChainTestnet787223 = Chain{
	Name:      "NVNM Chain Testnet",
	Chain:     "NVNM",
	ChainID:   787223,
	NetworkID: 787223,
	ShortName: "nvnm-chain-testnet",
	RPC: []string{
		"https://rpc.nvnm.testnet.nvnmchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "NVNM USD",
		Symbol:   "nUSD",
		Decimals: 6,
	},
	InfoURL: &[]string{"https://www.nvnmchain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "NVNM Explorer",
			URL:      "https://explorer.nvnm.testnet.nvnmchain.io",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "NVNM Tempo Explorer",
			URL:      "https://scan.nvnm.testnet.nvnmchain.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var SpaceosTestnet800000 = Chain{
	Name:      "SPACE OS Testnet",
	Chain:     "SPACE",
	ChainID:   800000,
	NetworkID: 800000,
	ShortName: "spaceos-testnet",
	RPC: []string{
		"https://testnet.evm.spaceos.com/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SPACE",
		Symbol:   "SPACE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://spaceos.com/"}[0],
	Explorers: []Explorer{
		{
			Name:     "SPACE OS Explorer",
			URL:      "https://testnet.evm-explorer.spaceos.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Zug824642 = Chain{
	Name:      "ZugChain Testnet",
	Chain:     "ZUG",
	ChainID:   824642,
	NetworkID: 824642,
	ShortName: "zug",
	RPC: []string{
		"https://rpc.zugchain.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ZUG",
		Symbol:   "ZUG",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://zugchain.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "ZugChain Explorer",
			URL:      "https://explorer.zugchain.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Bini837291 = Chain{
	Name:      "BiniChain",
	Chain:     "BINI",
	ChainID:   837291,
	NetworkID: 837291,
	ShortName: "bini",
	RPC: []string{
		"https://rpc.binibit.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BINI",
		Symbol:   "BINI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://binibit.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://scan.binibit.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Hypercluster838838 = Chain{
	Name:      "HyperCluster",
	Chain:     "HyperCluster",
	ChainID:   838838,
	NetworkID: 838838,
	ShortName: "hypercluster",
	RPC: []string{
		"https://rpc.hypercluster.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "HYPEC",
		Symbol:   "HYPEC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://hypercluster.org/"}[0],
	Explorers: []Explorer{
		{
			Name:     "HyperCluster Explorer",
			URL:      "https://explorer.hypercluster.org/",
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
			Name:     "Blockscout",
			URL:      "https://galactica-cassiopeia.explorer.alchemy.com",
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
		"https://rpc.testnet.ethiq.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ETH",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ethiq.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "HAQQ Testethiq Blockscout",
			URL:      "https://explorer.testnet.ethiq.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Wrg882026 = Chain{
	Name:      "Warga Network L1",
	Chain:     "WRG",
	ChainID:   882026,
	NetworkID: 882026,
	ShortName: "wrg",
	RPC: []string{
		"https://umkmrumahan.com/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Warga Coin",
		Symbol:   "WRG",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://umkmrumahan.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Warga Explorer",
			URL:      "https://umkmrumahan.com/explorer",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var ZenithEvmTestnet936485 = Chain{
	Name:      "Zenith EVM Testnet",
	Chain:     "ZENITH",
	ChainID:   936485,
	NetworkID: 936485,
	ShortName: "zenith-evm-testnet",
	RPC: []string{
		"https://rpc.testnet.zenith.network/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Zenith token",
		Symbol:   "ZTH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.zenith.network/zenith-testnet"}[0],
	Explorers: []Explorer{
		{
			Name:     "Zenith EVM Explorer",
			URL:      "https://explorer.testnet.zenith.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Primox970803 = Chain{
	Name:      "Primox Chain",
	Chain:     "PXC",
	ChainID:   970803,
	NetworkID: 970803,
	ShortName: "primox",
	RPC: []string{
		"https://rpc.primox.online",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Primox Token",
		Symbol:   "PXT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://chain.primox.online"}[0],
	Explorers: []Explorer{
		{
			Name:     "Primox Scan",
			URL:      "https://scan.primox.online/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Qantera974621 = Chain{
	Name:      "QanTera Testnet",
	Chain:     "QTER",
	ChainID:   974621,
	NetworkID: 974621,
	ShortName: "qantera",
	RPC: []string{
		"https://rpc1.qantera.network",
		"https://rpc2.qantera.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "QanTera",
		Symbol:   "QTER",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://qantera.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "QanTera Explorer",
			URL:      "https://explorer.qantera.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var BrevisProvernetTestnet999983 = Chain{
	Name:      "Breivs ProverNet Testnet",
	Chain:     "BREV",
	ChainID:   999983,
	NetworkID: 999983,
	ShortName: "brevis-provernet-testnet",
	RPC: []string{
		"https://evmrpc-testnet.brevis.network/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Brevis Token",
		Symbol:   "BREV",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://brevis.network/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Breivs ProverNet Testnet Explorer",
			URL:      "https://blockscout-testnet.brevis.network/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Xo1000101 = Chain{
	Name:      "XO Chain Testnet",
	Chain:     "XO",
	ChainID:   1000101,
	NetworkID: 1000101,
	ShortName: "xo",
	RPC: []string{
		"https://testnet-rpc-1.xo.market",
	},
	NativeCurrency: NativeCurrency{
		Name:     "XO Token",
		Symbol:   "XO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://xo.market"}[0],
	Explorers: []Explorer{
		{
			Name:     "xo explorer",
			URL:      "https://explorer-testnet.xo.market",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var WirexTestnet1001996 = Chain{
	Name:      "Wirex Pay Testnet",
	Chain:     "WirexPay",
	ChainID:   1001996,
	NetworkID: 1001996,
	ShortName: "wirex-testnet",
	RPC: []string{
		"https://rpc-dev.wirexpaychain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.wirexpaychain.com/tech/wirex-pay-chain"}[0],
	Explorers: []Explorer{
		{
			Name:     "Wirex Pay Testnet Explorer",
			URL:      "https://explorer-dev.wirexpaychain.com",
			Standard: &[]string{"none"}[0],
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
			Name:     "RoonChain Mainnet explorer",
			URL:      "https://mainnet.roonchain.com",
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

var VxsTestnet1618032 = Chain{
	Name:      "Vexidus Testnet",
	Chain:     "VXS",
	ChainID:   1618032,
	NetworkID: 1618032,
	ShortName: "vxs-testnet",
	RPC: []string{
		"https://testnet.vexidus.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Vexidus",
		Symbol:   "VXS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://vexidus.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "VexScan",
			URL:      "https://vexscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Duck2026001 = Chain{
	Name:      "Duckpot Testnet",
	Chain:     "DUCK",
	ChainID:   2026001,
	NetworkID: 2026001,
	ShortName: "duck",
	RPC: []string{
		"https://rpc.duckpot.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Duckpot",
		Symbol:   "DUCK",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://duckpot-nexus.lovable.app"}[0],
	Explorers: []Explorer{
		{
			Name:     "Duckpot Explorer",
			URL:      "https://duckpot-nexus.lovable.app/explorer",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Cashcat2274228 = Chain{
	Name:      "CashCat Chain",
	Chain:     "CASHCAT",
	ChainID:   2274228,
	NetworkID: 2274228,
	ShortName: "cashcat",
	RPC: []string{
		"https://rpc.cashcat.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Cash Cat",
		Symbol:   "CASHCAT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://cashcat.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "CashCat Explorer",
			URL:      "https://explorer.cashcat.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var PrvTestnet2718281 = Chain{
	Name:      "PrivateRounds Testnet",
	Chain:     "PRV",
	ChainID:   2718281,
	NetworkID: 2718281,
	ShortName: "prv-testnet",
	RPC: []string{
		"https://rpc.privaterounds.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "PrivateRounds",
		Symbol:   "PRV",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://privaterounds.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "PrivateRounds Explorer",
			URL:      "https://explorer.privaterounds.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var ArcTestnet5042002 = Chain{
	Name:      "Arc Testnet",
	Chain:     "arc-testnet",
	ChainID:   5042002,
	NetworkID: 5042002,
	ShortName: "arc-testnet",
	RPC: []string{
		"https://rpc.testnet.arc.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "USDC",
		Symbol:   "USDC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.arc.network/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Arc Testnet Explorer",
			URL:      "https://testnet.arcscan.app/",
			Standard: &[]string{"none"}[0],
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
			Name:     "blockscout",
			URL:      "https://explorer.ethereal.trade",
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

var WIND5552020 = Chain{
	Name:      "Windpay Mainnet",
	Chain:     "WIND",
	ChainID:   5552020,
	NetworkID: 5552020,
	ShortName: "WIND",
	RPC: []string{
		"https://rpc.windpay.org/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Windpay",
		Symbol:   "WIND",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://windpay.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "windpay explorer",
			URL:      "https://explorer.windpay.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var DogeosChikyu6281971 = Chain{
	Name:      "DogeOS Chikyū Testnet",
	Chain:     "DogeOS",
	ChainID:   6281971,
	NetworkID: 6281971,
	ShortName: "dogeos-chikyu",
	RPC: []string{
		"https://rpc.testnet.dogeos.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Dogecoin",
		Symbol:   "DOGE",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.dogeos.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "DogeOS Chikyū Testnet Explorer",
			URL:      "https://blockscout.testnet.dogeos.com",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "L2Scan",
			URL:      "https://dogeos-testnet.l2scan.co",
			Standard: &[]string{"EIP3091"}[0],
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
			Name:     "JMDT Explorer",
			URL:      "https://explorer.jmdt.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Nvm7575757 = Chain{
	Name:      "NovaMoney",
	Chain:     "NVM",
	ChainID:   7575757,
	NetworkID: 7575757,
	ShortName: "nvm",
	RPC: []string{
		"http://rpc.novamoney.site",
	},
	NativeCurrency: NativeCurrency{
		Name:     "NovaMoney",
		Symbol:   "NVM",
		Decimals: 18,
	},
	InfoURL: &[]string{"http://novamoney.site"}[0],
	Explorers: []Explorer{
		{
			Name:     "NovaMoney Explorer",
			URL:      "http://explorer.novamoney.site",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Dogita7770777 = Chain{
	Name:      "Dogita Chain",
	Chain:     "DOGA",
	ChainID:   7770777,
	NetworkID: 7770777,
	ShortName: "dogita",
	RPC: []string{
		"http://2.25.155.110:8545",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Dogita",
		Symbol:   "DOGA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://dogita-website.netlify.app"}[0],
	Explorers: []Explorer{
		{
			Name:     "Dogita Explorer",
			URL:      "http://2.25.155.110:8080",
			Standard: &[]string{"none"}[0],
		},
	},
}

var GravityTestnet7771625 = Chain{
	Name:      "Gravity Longevity Testnet",
	Chain:     "Gravity",
	ChainID:   7771625,
	NetworkID: 7771625,
	ShortName: "gravity-testnet",
	RPC: []string{
		"https://rpc-testnet.gravity.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Gravity",
		Symbol:   "G",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://gravity.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Gravity Testnet Explorer",
			URL:      "https://explorer-testnet.gravity.xyz",
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
			Name:     "vncscan",
			URL:      "https://beta.vncscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Daventre8770570 = Chain{
	Name:      "daventre Chain",
	Chain:     "DEV",
	ChainID:   8770570,
	NetworkID: 8770570,
	ShortName: "daventre",
	RPC: []string{
		"https://rpc.8770570.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "DEV",
		Symbol:   "DEV",
		Decimals: 18,
	},
	InfoURL: &[]string{"http://8770570.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "daventre Explorer",
			URL:      "https://explorer.8770570.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var CcTestnet11111110 = Chain{
	Name:      "ClawCoin Testnet",
	Chain:     "CC",
	ChainID:   11111110,
	NetworkID: 11111110,
	ShortName: "cc-testnet",
	RPC: []string{
		"https://evm-testnet.clawcoin.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ClawCoin",
		Symbol:   "CC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://clawcoin.com"}[0],
}

var Cc11111111 = Chain{
	Name:      "ClawCoin",
	Chain:     "CC",
	ChainID:   11111111,
	NetworkID: 11111111,
	ShortName: "cc",
	RPC: []string{
		"https://evm.clawcoin.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ClawCoin",
		Symbol:   "CC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://clawcoin.com"}[0],
}

var CwnTestnet11111327 = Chain{
	Name:      "Commonworld Testnet",
	Chain:     "CWN",
	ChainID:   11111327,
	NetworkID: 11111327,
	ShortName: "cwn-testnet",
	RPC: []string{
		"https://rpc-testnet.commonworld.one",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Test Commonworld",
		Symbol:   "tCWN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://commonworld.one/"}[0],
	Explorers: []Explorer{
		{
			Name: "Commonworld Testnet Explorer",
			URL:  "https://explorer-testnet.commonworld.one",
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

var RiseTestnet11155931 = Chain{
	Name:      "RISE Testnet",
	Chain:     "ETH",
	ChainID:   11155931,
	NetworkID: 11155931,
	ShortName: "rise-testnet",
	RPC: []string{
		"https://testnet.riselabs.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "RISE Testnet Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.riselabs.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://explorer.testnet.riselabs.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var R0art11166111 = Chain{
	Name:      "R0AR Testnet",
	Chain:     "R0AR",
	ChainID:   11166111,
	NetworkID: 11166111,
	ShortName: "r0art",
	RPC: []string{
		"https://testnet.rpc-r0ar.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://r0ar.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "R0ARscan (testnet)",
			URL:      "https://testnet.r0arscan.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Winmar12142816 = Chain{
	Name:      "Winmar Chain",
	Chain:     "WMC",
	ChainID:   12142816,
	NetworkID: 12142816,
	ShortName: "winmar",
	RPC: []string{
		"https://rpc.winmarchain.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Winmar Coin",
		Symbol:   "WMC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://winmarchain.io"}[0],
	Explorers: []Explorer{
		{
			Name:     "Winmar Chain Explorer",
			URL:      "https://scan.winmarchain.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
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
			Name:     "RoonChain Testnet explorer",
			URL:      "https://testnets.roonchain.com",
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
			Name:     "blockscout",
			URL:      "https://explorer.etherealtest.net",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Hp13600000 = Chain{
	Name:      "Humanity",
	Chain:     "Humanity",
	ChainID:   13600000,
	NetworkID: 13600000,
	ShortName: "hp",
	RPC: []string{
		"https://humanity-main.g.alchemy.com/public",
	},
	NativeCurrency: NativeCurrency{
		Name:     "H",
		Symbol:   "H",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://humanity.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "Humanity Mainnet explorer",
			URL:      "https://humanity-main.explorer.alchemy.com",
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

var Bleno15112026 = Chain{
	Name:      "Bleno Network",
	Chain:     "BLENO",
	ChainID:   15112026,
	NetworkID: 15112026,
	ShortName: "bleno",
	RPC: []string{
		"https://bleno.com.br/hub/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Bleno",
		Symbol:   "BLENO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://bleno.com.br/hub/welcome.html"}[0],
	Explorers: []Explorer{
		{
			Name:     "BlenoScan",
			URL:      "https://bleno.com.br",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Tips19251925 = Chain{
	Name:      "Tipschain TESTNET",
	Chain:     "Tipschain TESTNET",
	ChainID:   19251925,
	NetworkID: 19251925,
	ShortName: "tips",
	RPC: []string{
		"http://rpc2.tipspay.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Tipschain Coin",
		Symbol:   "TPC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tipspay.org"}[0],
	Explorers: []Explorer{
		{
			Name:     "tipscan",
			URL:      "https://scan.tipspay.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Ma20260131 = Chain{
	Name:      "Meta Assets Chain",
	Chain:     "MA",
	ChainID:   20260131,
	NetworkID: 20260131,
	ShortName: "ma",
	RPC: []string{
		"https://rpc.ma-chain.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "MetaAssets",
		Symbol:   "MA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://ma-chain.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Meta Assets Chain Explorer",
			URL:      "https://ma-chain.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Gridmindt20260532 = Chain{
	Name:      "GridMind Testnet",
	Chain:     "GRD",
	ChainID:   20260532,
	NetworkID: 20260532,
	ShortName: "gridmindt",
	RPC: []string{
		"https://testnet-rpc.grid-mind.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "GridMind Test GRD",
		Symbol:   "testGRD",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.grid-mind.com/blockchain"}[0],
	Explorers: []Explorer{
		{
			Name:     "GridMind Testnet Explorer",
			URL:      "https://gridmindblockchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "GridMind Technical Explorer",
			URL:      "https://testnet-explorer.grid-mind.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Cook20261001 = Chain{
	Name:      "Cookchain Mainnet",
	Chain:     "COOK",
	ChainID:   20261001,
	NetworkID: 20261001,
	ShortName: "cook",
	RPC: []string{
		"https://rpc.cookscan.net/evm",
		"https://rpc.cookdex.net",
		"https://rpc.ldbl.net",
		"https://rpc.zeven.zone",
	},
	NativeCurrency: NativeCurrency{
		Name:     "COOK",
		Symbol:   "COOK",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://cookscan.net"}[0],
	Explorers: []Explorer{
		{
			Name:     "Cookscan",
			URL:      "https://cookscan.net",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Zagros21072026 = Chain{
	Name:      "Zagros Mainnet",
	Chain:     "ZAGROS",
	ChainID:   21072026,
	NetworkID: 21072026,
	ShortName: "zagros",
	RPC: []string{
		"https://rpc.zagros.network",
		"https://rpc.zagrosnetwork.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Zagros",
		Symbol:   "ZAGROS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://zagros.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "ZagrosRadar",
			URL:      "https://zagrosradar.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var TjrDevnet21519080 = Chain{
	Name:      "Tajirchain Devnet",
	Chain:     "TJR",
	ChainID:   21519080,
	NetworkID: 21519080,
	ShortName: "tjr-devnet",
	RPC: []string{
		"https://rpc.devnet.tajirchain.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Tajirchain Test Token",
		Symbol:   "tTJR",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tajirchain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Blockscout",
			URL:      "https://explorer.devnet.tajirchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var NowaTestnet22052010 = Chain{
	Name:      "Nowa Testnet",
	Chain:     "NOWA",
	ChainID:   22052010,
	NetworkID: 22052010,
	ShortName: "nowa-testnet",
	RPC: []string{
		"https://tnode1.nowa.finance",
		"https://tnode2.nowa.finance",
		"https://tnode3.nowa.finance",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Nowa",
		Symbol:   "NOWA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://nowa.finance"}[0],
	Explorers: []Explorer{
		{
			Name:     "Nowa Testnet Explorer",
			URL:      "https://testnet.nowa.finance",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Pecu27272727 = Chain{
	Name:      "Pecu Novus Mainnet",
	Chain:     "PECU",
	ChainID:   27272727,
	NetworkID: 27272727,
	ShortName: "pecu",
	RPC: []string{
		"https://mainnet.pecunovus.net",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Pecu Novus",
		Symbol:   "PECU",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.pecunovus.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "pecuscan",
			URL:      "https://www.pecuscan.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Gbdo38391207 = Chain{
	Name:      "GLOBALCHAIN",
	Chain:     "GBDo",
	ChainID:   38391207,
	NetworkID: 38391207,
	ShortName: "gbdo",
	RPC: []string{
		"https://rpc.brantley-global.com",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Global Dollar",
		Symbol:   "GBDo",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://brantley-global.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "globaldash",
			URL:      "https://brantley-global.com/dashboard",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Tensora44444444 = Chain{
	Name:      "Tensora",
	Chain:     "Tensora",
	ChainID:   44444444,
	NetworkID: 44444444,
	ShortName: "tensora",
	RPC: []string{
		"https://rpc.tensora.sh",
		"http://63.250.32.66:8545",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BNB",
		Symbol:   "BNB",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://tensora.ai"}[0],
	Explorers: []Explorer{
		{
			Name:     "Tensora Explorer",
			URL:      "https://explorer.tensora.sh",
			Standard: &[]string{"EIP3091"}[0],
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
			Name:     "UNP Chain Explorer",
			URL:      "https://explorer.unpchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Elyon55452773 = Chain{
	Name:      "ElyonChain",
	Chain:     "ELN",
	ChainID:   55452773,
	NetworkID: 55452773,
	ShortName: "elyon",
	RPC: []string{
		"https://mainnet.elyon.network/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "ELN",
		Symbol:   "ELN",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://elyon.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "Elyon Explorer",
			URL:      "https://explorer.elyon.network",
			Standard: &[]string{"none"}[0],
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
			Name:     "Sovra Explorer",
			URL:      "https://explorer.sovra.io",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Kryvora73829164 = Chain{
	Name:      "Kryvora Testnet",
	Chain:     "KRY",
	ChainID:   73829164,
	NetworkID: 73829164,
	ShortName: "kryvora",
	RPC: []string{
		"https://rpc-testnet.kryvora.network/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://kryvora.network"}[0],
	Explorers: []Explorer{
		{
			Name:     "Kryvora Explorer",
			URL:      "https://explorer-testnet.kryvora.network",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var SxToronto79479957 = Chain{
	Name:      "SX Toronto Network",
	Chain:     "SXR",
	ChainID:   79479957,
	NetworkID: 79479957,
	ShortName: "sx-toronto",
	RPC: []string{
		"https://rpc-rollup.toronto.sx.technology",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SX Token",
		Symbol:   "SX",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://sx.technology"}[0],
	Explorers: []Explorer{
		{
			Name:     "SX Toronto Explorer",
			URL:      "https://explorerl2.toronto.sx.technology/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var BaseVibenet84538453 = Chain{
	Name:      "Base Vibenet",
	Chain:     "ETH",
	ChainID:   84538453,
	NetworkID: 84538453,
	ShortName: "base-vibenet",
	RPC: []string{
		"https://rpc.vibes.base.org",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Ether",
		Symbol:   "ETH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://docs.base.org/base-chain/quickstart/connecting-to-base"}[0],
	Explorers: []Explorer{
		{
			Name:     "Base Vibenet Explorer",
			URL:      "https://chain.base.org/vibenet/explorer",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var ShinzoTestnet91273001 = Chain{
	Name:      "Shinzo Testnet",
	Chain:     "SHNZ",
	ChainID:   91273001,
	NetworkID: 91273001,
	ShortName: "shinzo-testnet",
	RPC: []string{
		"https://shinzo-testnet.web3cdn.rest",
		"http://testnet.shinzo.network:8545",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Shinzo",
		Symbol:   "SHNZ",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://shinzo.network"}[0],
}

var Prsm101001000 = Chain{
	Name:      "Prismo Glassnet",
	Chain:     "PRISMO",
	ChainID:   101001000,
	NetworkID: 101001000,
	ShortName: "prsm",
	RPC: []string{
		"https://rpc.glassnet.prismo.network",
	},
	NativeCurrency: NativeCurrency{
		Name:     "USDC",
		Symbol:   "USDC",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://prismo.technology"}[0],
	Explorers: []Explorer{
		{
			Name:     "Glassnet Explorer",
			URL:      "https://explorer.glassnet.prismo.network",
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
			Name:     "istscan",
			URL:      "https://scan.istchain.org",
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
			Name:     "dnascan",
			URL:      "https://scan.gene.network",
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
			Name:     "slcscan",
			URL:      "https://scan.sl.cool",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Pas420420417 = Chain{
	Name:      "Polkadot Testnet",
	Chain:     "PAS",
	ChainID:   420420417,
	NetworkID: 420420417,
	ShortName: "pas",
	RPC: []string{
		"https://eth-rpc-testnet.polkadot.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "PAS",
		Symbol:   "PAS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://polkadot.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://blockscout-testnet.polkadot.io",
			Standard: &[]string{"none"}[0],
		},
		{
			Name:     "routescan",
			URL:      "https://polkadot.testnet.routescan.io",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Ksm420420418 = Chain{
	Name:      "Kusama",
	Chain:     "KSM",
	ChainID:   420420418,
	NetworkID: 420420418,
	ShortName: "ksm",
	RPC: []string{
		"https://eth-rpc-kusama.polkadot.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "KSM",
		Symbol:   "KSM",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://polkadot.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://blockscout-kusama.polkadot.io",
			Standard: &[]string{"none"}[0],
		},
	},
}

var Dot420420419 = Chain{
	Name:      "Polkadot",
	Chain:     "DOT",
	ChainID:   420420419,
	NetworkID: 420420419,
	ShortName: "dot",
	RPC: []string{
		"https://eth-rpc.polkadot.io",
	},
	NativeCurrency: NativeCurrency{
		Name:     "DOT",
		Symbol:   "DOT",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://polkadot.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://blockscout.polkadot.io",
			Standard: &[]string{"none"}[0],
		},
		{
			Name:     "routescan",
			URL:      "https://polkadot.routescan.io",
			Standard: &[]string{"none"}[0],
		},
	},
}

var InfiniteTestnet421018001 = Chain{
	Name:      "Infinite Improbability Drive Testnet",
	Chain:     "INFINITE",
	ChainID:   421018001,
	NetworkID: 421018001,
	ShortName: "infinite-testnet",
	RPC: []string{
		"https://evm-rpc-testnet.infinitedrive.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "TestImprobability",
		Symbol:   "TEST42",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://infinitedrive.xyz"}[0],
	Explorers: []Explorer{
		{
			Name:     "Infinite Drive Explorer - Testnet",
			URL:      "https://testnet-scan.infinitedrive.xyz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var SophonOsTestnet531050204 = Chain{
	Name:      "Sophon OS Testnet",
	Chain:     "Sophon OS",
	ChainID:   531050204,
	NetworkID: 531050204,
	ShortName: "sophon-os-testnet",
	RPC: []string{
		"https://rpc.testnet.os.sophon.com/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Sophon",
		Symbol:   "SOPH",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://sophon.xyz/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Sophscan Testnet",
			URL:      "https://testnet.sophscan.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
		{
			Name:     "Sophon OS Testnet Explorer",
			URL:      "https://explorer.testnet.os.sophon.com/",
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
			Name:     "blockscout",
			URL:      "https://horizen-explorer-testnet.appchain.base.org/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Mirasmanda1213549903 = Chain{
	Name:      "Mirasmanda",
	Chain:     "MIRASMANDA",
	ChainID:   1213549903,
	NetworkID: 1213549903,
	ShortName: "mirasmanda",
	RPC: []string{
		"https://rpc.evm.mirasmanda.uz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Gas",
		Symbol:   "GAS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://asterium.uz"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://blockscout.evm.mirasmanda.uz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var MirasmandaUat1215655279 = Chain{
	Name:      "Mirasmanda UAT",
	Chain:     "MIRASMANDA",
	ChainID:   1215655279,
	NetworkID: 1215655279,
	ShortName: "mirasmanda-uat",
	RPC: []string{
		"https://rpc-uat.evm.mirasmanda.uz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Gas",
		Symbol:   "GAS",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://asterium.uz"}[0],
	Explorers: []Explorer{
		{
			Name:     "blockscout",
			URL:      "https://blockscout-uat.evm.mirasmanda.uz",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Itani1229800785 = Chain{
	Name:      "iTani Network Chain",
	Chain:     "ITANI",
	ChainID:   1229800785,
	NetworkID: 1229800785,
	ShortName: "itani",
	RPC: []string{
		"https://rpc.itaninetworkchain.com/jsonrpc",
		"https://node.itaninetworkchain.com/jsonrpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "iTani",
		Symbol:   "ITANI",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://www.itaninetworkchain.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "iTani Explorer",
			URL:      "https://explorer.itaninetworkchain.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Omega1313161916 = Chain{
	Name:      "Omega Mainnet",
	Chain:     "Omega",
	ChainID:   1313161916,
	NetworkID: 1313161916,
	ShortName: "omega",
	RPC: []string{
		"https://0x4e4542bc.rpc.aurora-cloud.dev/",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Omega",
		Symbol:   "OMEGA",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://omeganetwork.co/"}[0],
	Explorers: []Explorer{
		{
			Name: "Omega Mainnet",
			URL:  "https://0x4e4542bc.explorer.aurora-cloud.dev/",
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
			Name:     "Lumia Beam Testnet Explorer",
			URL:      "https://beam-explorer.lumia.org",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Edent3735928814 = Chain{
	Name:      "Eden testnet",
	Chain:     "Eden testnet",
	ChainID:   3735928814,
	NetworkID: 3735928814,
	ShortName: "edent",
	RPC: []string{
		"https://rpc.testnet.eden.gateway.fm",
	},
	NativeCurrency: NativeCurrency{
		Name:     "TIA",
		Symbol:   "TIA",
		Decimals: 18,
	},
	Explorers: []Explorer{
		{
			Name:     "Eden Testnet Explorer",
			URL:      "https://eden-testnet.blockscout.com",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Fco11111111111 = Chain{
	Name:      "Fanatico",
	Chain:     "FCO",
	ChainID:   11111111111,
	NetworkID: 11111111111,
	ShortName: "fco",
	RPC: []string{
		"https://rpc.fanati.co",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Fanatico",
		Symbol:   "FCO",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://chain.fanati.co"}[0],
	Explorers: []Explorer{
		{
			Name:     "Fanatico Explorer",
			URL:      "https://explorer.fanati.co",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var BUB30143370385 = Chain{
	Name:      "Buburuza Mainnet",
	Chain:     "BUBU",
	ChainID:   30143370385,
	NetworkID: 30143370385,
	ShortName: "BUB",
	RPC: []string{
		"https://rpc-mainnet.buburuza.com/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "BUBU",
		Symbol:   "BUB",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://buburuza.com"}[0],
	Explorers: []Explorer{
		{
			Name:     "Buburuza Explorer",
			URL:      "https://explorer-mainnet.buburuza.com/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Sobya357812033857 = Chain{
	Name:      "SOBYA Mainnet",
	Chain:     "SOBYA",
	ChainID:   357812033857,
	NetworkID: 357812033857,
	ShortName: "sobya",
	RPC: []string{
		"https://sobya-evm-rpc.nodesafe-app.xyz",
	},
	NativeCurrency: NativeCurrency{
		Name:     "SOBYA",
		Symbol:   "SOBY",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://github.com/snforem-cpu/sobya-chain"}[0],
	Explorers: []Explorer{
		{
			Name:     "SOBYA Explorer",
			URL:      "https://explorer.nodesafe-app.xyz/sobya",
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
			Name:     "blockscout",
			URL:      "https://scan.galaxychain.co",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

var Strato123354377739506 = Chain{
	Name:      "Strato",
	Chain:     "Strato",
	ChainID:   123354377739506,
	NetworkID: 123354377739506,
	ShortName: "strato",
	RPC: []string{
		"https://noderpc.strato.nexus/rpc",
	},
	NativeCurrency: NativeCurrency{
		Name:     "Strato USDST",
		Symbol:   "USDST",
		Decimals: 18,
	},
	InfoURL: &[]string{"https://strato.nexus/"}[0],
	Explorers: []Explorer{
		{
			Name:     "Strato Explorer",
			URL:      "https://stratoscan.strato.nexus/",
			Standard: &[]string{"EIP3091"}[0],
		},
	},
}

const ChainIDSTABLE2201 = ChainIDSTABLE_TESTNET2201

var Stable2201 = StableTestnet2201

const ChainIDPCN7890 = ChainIDPC7890

var Pcn7890 = Pc7890

const ChainIDTCROSS612044 = ChainIDTONE612044

var Tcross612044 = Tone612044

const ChainIDCROSS612055 = ChainIDONE612055

var Cross612055 = One612055

const ChainIDSOPHON_TESTNET531050204 = ChainIDSOPHON_OS_TESTNET531050204

var SophonTestnet531050204 = SophonOsTestnet531050204

// AllChains contains all chain configurations
var AllChains = []Chain{
	Quai9,
	Flr14,
	Plato53,
	Plato62,
	Amzg65,
	Plato71,
	Shibariumecosystem109,
	Monad143,
	Jito149149,
	Farm165,
	Nomina166,
	WatrMainnet192,
	VcTestnet206,
	Vc207,
	Iopn222,
	Tacchain239,
	Orbinum270,
	Drby275,
	Netx287,
	Hsp292292,
	Goliath327,
	Virbicoin329,
	Bourse343,
	Kss347,
	Dnc362,
	Lnr389,
	Actumic402,
	DTestnet430,
	DMainnet433,
	Areum463,
	Campmainnet484,
	Lcai504,
	Doto505,
	Btb509,
	Syndicate510,
	Fyro511,
	Mawari576,
	Capy586,
	NetxTestnet587,
	BattlechainTestnet627,
	Bot677,
	Jasmy681,
	Uniocean684,
	Lxon724,
	CapxTestnet756,
	Capx757,
	Qrdx762,
	Qelt770,
	QeltTestnet771,
	Ritual784,
	BinaryholdingsMainnet836,
	AMN870,
	Mars890,
	Wbtc892,
	Fene920,
	Zel935,
	Iopn984,
	Stable988,
	HyperEvm999,
	Nura1020,
	Bdag1043,
	Anta1082,
	Xenea1096,
	Realchain1098,
	Grx1110,
	Ecm1124,
	Taker1125,
	Qry1129,
	Ion1143,
	IntuitionMainnet1155,
	Joa1191,
	Bmc1199,
	Fitochain1233,
	Onn1330,
	Bie1342,
	Midx1394,
	Bdag1404,
	Vfl1408,
	Tvfl1409,
	Lrx1410,
	InjectiveTestnet1439,
	Cmxr1475,
	Roonchain1492,
	Midl1500,
	DolphinetTestnet1519,
	Dolphinet1520,
	Mawari1576,
	NvnmEvm1611,
	TREX1628,
	Xgr1643,
	Pharos1672,
	OBS1719,
	Injective1776,
	RubyTestnet1810,
	WCHSepolia1874,
	Xgrt1879,
	Recr1888,
	Epix1916,
	Turkchain1919,
	Tpc1925,
	Egold1932,
	Tokb1952,
	QIEV31990,
	Dna1991,
	Ronin2020,
	Erol2027,
	ArmaTestnet2028,
	Fst2034,
	Ntx2070,
	Realchaintest2098,
	IBVM2105,
	IBVMT2107,
	Parallax2110,
	Autheo2127,
	MementoTestnet2129,
	Morphtachyon2184,
	StableTestnet2201,
	Moca2288,
	Besc2372,
	THaus2443,
	Ccc2500,
	SvpTestnet2517,
	Svp2518,
	Anubi2526,
	H22582,
	Kto2643,
	Spld2691,
	Spldt2692,
	Orbinum2700,
	ClawWorldBox2721,
	CreatorChainMainnet2787,
	Aere2800,
	Alpen2892,
	Morph2910,
	Bgg3005,
	Aic3018,
	Svm3109,
	Alpha3111,
	BKC3188,
	Qbc3303,
	Vora3318,
	Aet3355,
	Tjr3377,
	Bytechaintest3399,
	Amx3535,
	Trustgreen3567,
	AiFi3600,
	Inri3777,
	HaustNetwork3864,
	NEX3945,
	Nex3946,
	Gan4048,
	Ecna4111,
	Tecna4112,
	Citrea4114,
	Rise4153,
	SxMainnet4162,
	TempoPresto4217,
	GenlayerTestnets4221,
	Hashfire4227,
	Tpix4289,
	Megaeth4326,
	Liteforge4441,
	DenTestnet4442,
	Oxin4457,
	SC4509,
	Gtbs4599,
	Hsp46114611,
	Hsp46124612,
	Robinhoodchain4663,
	BSURE4848,
	Prodao4936,
	MATRIX4959,
	HyprTestnet4978,
	Somnia5031,
	Arc5042,
	Fusionlayer5070,
	ANC5108,
	Mocat5151,
	Sbtc5200,
	YeYing5432,
	Taaqo5566,
	Treasurenet5570,
	Msc5577,
	EvoNova5641,
	Tburn5800,
	Shib5816,
	Dukong5887,
	Tea6122,
	Bmz6162,
	BMZ6163,
	Bmz6165,
	Dual6301,
	Lrb6359,
	Ynxtest6423,
	Awaji6497,
	Mizuhiki6498,
	Kalis6533,
	OmaMainnet6623,
	Anubi6714,
	Vex6736,
	Lust6923,
	GrowfitterMainnet7084,
	Srx7119,
	SrxTestnet7120,
	Vrcn7131,
	VyreTestnet7357,
	CmxrL27373,
	Libertas7474,
	Carrchain7667,
	TjrTestnet7733,
	Embr7773,
	PandaSeaMainnet7776,
	Ptb7820,
	Hyve7847,
	Pc7890,
	Univex7932,
	Bmn8006,
	Lerax8125,
	Alpen8150,
	SvmTestnet8163,
	LcaiT8200,
	Forknet8338,
	Bry8379,
	ACN8700,
	Ebc8721,
	Ward8765,
	TICS9030,
	XybTestnet9194,
	Lcai9200,
	Zel9350,
	Kub9601,
	Plasma9745,
	PlasmaTestnet9746,
	PlasmaDevnet9747,
	Timp9818,
	Imp9819,
	Bytechain9933,
	BrevisNetwork9973,
	Ethw10001,
	GateLayer10088,
	Ozone10120,
	Ozone10121,
	Mova10323,
	LimonataTestnet10777,
	Gleec11169,
	Eth11417,
	Nkm11941,
	Kudora12000,
	Moc12026,
	L2p12216,
	Amax12248,
	Ctcchain12301,
	Ctcchain12302,
	Ela12343,
	CLY12369,
	Brick12786,
	LiberlandTestnet12865,
	Rntx13113,
	BKC13188,
	Mee13390,
	Bridgeless13441,
	IntuitionTestnet13579,
	Btz14204,
	SonicTestnet14601,
	Quait15000,
	MidlTestnet15001,
	InfraTestnet15324,
	Bimbo15497,
	Nrxn15526,
	Holo15675,
	HoloTestnet15676,
	_0gGalileo16601,
	_0g16661,
	Botcy16963,
	Dmd17771,
	Trecr18882,
	Yuuchain19001,
	IgraCaravelTestnet19416,
	StcTestnet19517,
	StcMainnet19518,
	Mon19901,
	Entropy19911,
	Atrnxos19966,
	Sup19998,
	Mandala20010,
	MandalaTestnet20011,
	Agls20033,
	Nch20250,
	Alpen20310,
	Efik20488,
	FluentTestnet20994,
	Flashnet21021,
	FlashnetTestnet21022,
	AutheoTestnet21270,
	Apchain21970,
	Cles22225,
	Incentiv24101,
	Agentscoin24368,
	Fluent25363,
	H2lambda25821,
	Tcent28802,
	Alpen29032,
	Taic30181,
	Ethiq30303,
	Trxc30485,
	DawnMainnet30715,
	ZksyncPrividiumMainnet30716,
	Bvm2031338,
	Paix32380,
	Zil32769,
	Ecx32904,
	ZeroBeacon33000,
	ZeroSystem33001,
	ZeroInterop33002,
	ZeroAtlas33003,
	ZeroPrivate33004,
	ZilTestnet33101,
	EcxTestnet33160,
	Qom33303,
	Zq2Devnet33469,
	MorphtachyonTestnet34952,
	Trct35935,
	Tc36000,
	Abcore36888,
	Weichain37771,
	Igra38833,
	IgraTestnet38836,
	Cin39500,
	Salt40204,
	RootVX41295,
	Nesa41444,
	EduChain41923,
	TempoModerato42431,
	ZeroBeaconTestnet43000,
	ZeroSystemTestnet43001,
	ZeroInteropTestnet43002,
	ZeroAtlasTestnet43003,
	ZeroPrivateTestnet43004,
	RicTest45578,
	Robinhoodchaintestnet46630,
	Txcl47294,
	Bitbadges50024,
	BitbadgesTestnet50025,
	SomniaTestnet50312,
	Risa51014,
	MementoMainnet51888,
	Lazai52924,
	Datahaven55930,
	Datahaven55931,
	Zktanenbaum57057,
	MevCommit57173,
	Jello61564,
	Mova61900,
	Apollo62606,
	Veri563868,
	Gald64137,
	OmachainTestnet66238,
	Nxpc68414,
	Eto69670,
	Pyra70003,
	Seven70007,
	Eki70101,
	CxTestnet70707,
	WcnTestnet71117,
	RLS72957,
	Seleman73571,
	Carrchain76672,
	Ventures77717,
	Bsos77888,
	Bradi78168,
	PexliTestnet78901,
	Hpx80808,
	Onyx80888,
	Codex81224,
	Steemvm81630,
	Ticko84256,
	TickoTestnet84257,
	Plus88088,
	Ptek88788,
	Qtschain88868,
	Chiliz88888,
	Valuex90000,
	Apaw90025,
	WatrTestnet92870,
	Pepu97741,
	GOGO99001,
	MC99002,
	Trct99566,
	ElysiumTestnet99801,
	Elysium99901,
	Qsn99991,
	Ctc102030,
	Ctctest102031,
	Ctcdev102032,
	Mtf114514,
	Swss122605,
	Ids123999,
	Mitosis124816,
	Grav127001,
	Etls127823,
	FuelSepolia129514,
	Rphx130526,
	Aria134235,
	Midxt139420,
	Bexchain140586,
	Kasplex167012,
	Wcn171717,
	Lit175200,
	Dpn179205,
	HppSepolia181228,
	GomchainMainnet190278,
	HppMainnet190415,
	R0ar193939,
	Eadx198724,
	Nos200024,
	Fsc201022,
	Dfn202110,
	SVS202308,
	PropulenceTestnet202500,
	Aurext202506,
	Kasplex202555,
	Ju202599,
	RoninSaigon202601,
	Miama202610,
	Juchain210000,
	Klt220312,
	SivzMainnet222345,
	Mocat222888,
	Ares232425,
	CodeNektMainnet235235,
	UlaloMainnet237007,
	Sin250225,
	Kub259251,
	Datachain271828,
	Mbtx271831,
	Mbtxl2271832,
	CreatorChainTestnet278701,
	Valuechain286623,
	Pmt290290,
	T1299792,
	T1t299892,
	Axion303030,
	Vcr314169,
	DCommMainnet326663,
	Lax333222,
	DenMainnet369369,
	Teqoin420377,
	Infinite421018,
	Mtx478549,
	Btcwchain482120,
	Commons510003,
	Alpha511111,
	Tone612044,
	One612055,
	Galactica613419,
	Tgald641371,
	Mdx648529,
	EduChainTestnet656476,
	Aztec677868,
	PharosTestnet688688,
	PharosAtlantic688689,
	Marschain704851,
	MarschainTestnet704852,
	Drama710520,
	Prana712217,
	Zbx728990,
	Cx737373,
	Toog777001,
	MakaChainMainnet777178,
	Flxg778400,
	Ust778889,
	NvnmChainDevnet787222,
	NvnmChainTestnet787223,
	SpaceosTestnet800000,
	Zug824642,
	Bini837291,
	Hypercluster838838,
	GalacticaTestnet843843,
	HaqqTestethiq853211,
	Wrg882026,
	ZenithEvmTestnet936485,
	Primox970803,
	Qantera974621,
	BrevisProvernetTestnet999983,
	Xo1000101,
	WirexTestnet1001996,
	Roonchain1314520,
	Xrplevm1440000,
	VxsTestnet1618032,
	Duck2026001,
	Cashcat2274228,
	PrvTestnet2718281,
	ArcTestnet5042002,
	Ethereal5064014,
	Loot5151706,
	WIND5552020,
	DogeosChikyu6281971,
	Jmdt7000700,
	Nvm7575757,
	Dogita7770777,
	GravityTestnet7771625,
	Vpc8678671,
	Daventre8770570,
	CcTestnet11111110,
	Cc11111111,
	CwnTestnet11111327,
	CeloSep11142220,
	RiseTestnet11155931,
	R0art11166111,
	Winmar12142816,
	Roonchain13145201,
	EtherealTestnet013374202,
	Hp13600000,
	Sis13863860,
	Bleno15112026,
	Tips19251925,
	Ma20260131,
	Gridmindt20260532,
	Cook20261001,
	Zagros21072026,
	TjrDevnet21519080,
	NowaTestnet22052010,
	Pecu27272727,
	Gbdo38391207,
	Tensora44444444,
	Unp47382916,
	Elyon55452773,
	Aut65000000,
	AutBakerloo65010004,
	Sovra65536001,
	Kryvora73829164,
	SxToronto79479957,
	BaseVibenet84538453,
	ShinzoTestnet91273001,
	Prsm101001000,
	IstchainMainnet286022981,
	DnachainMainnet287022981,
	SlcchainMainnet288022981,
	Pas420420417,
	Ksm420420418,
	Dot420420419,
	InfiniteTestnet421018001,
	SophonOsTestnet531050204,
	Zen845320009,
	Mirasmanda1213549903,
	MirasmandaUat1215655279,
	Itani1229800785,
	Omega1313161916,
	Rari1380012617,
	LumiaBeamTestnet2030232745,
	Edent3735928814,
	Fco11111111111,
	BUB30143370385,
	Sobya357812033857,
	Gxy420420420420,
	Strato123354377739506,
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
