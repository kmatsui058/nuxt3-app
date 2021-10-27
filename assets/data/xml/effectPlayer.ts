
    const data: XmlEffectPlayer.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "Source": {
          
        },
        "zIconName": {
          
        },
        "SourceCouncil": {
          
        },
        "SourceDifficulty": {
          
        },
        "SourceImprovement": {
          
        },
        "SourceLaw": {
          
        },
        "SourceNation": {
          
        },
        "SourceReligionState": {
          
        },
        "SourceTech": {
          
        },
        "SourceTrait": {
          
        },
        "EffectPlayer": {
          
        },
        "EffectCity": {
          
        },
        "EffectCityExtra": {
          
        },
        "StateReligionEffectCity": {
          
        },
        "CapitalEffectCity": {
          
        },
        "EffectUnit": {
          
        },
        "StartBonus": {
          
        },
        "FoundBonus": {
          
        },
        "iVP": {
          
        },
        "iMaxActions": {
          
        },
        "iXPIdleTurn": {
          
        },
        "iXPModifier": {
          
        },
        "iHarvestModifier": {
          
        },
        "iConsumptionModifier": {
          
        },
        "iWonderModifier": {
          
        },
        "iStartLawModifier": {
          
        },
        "iSwitchLawModifier": {
          
        },
        "iTrainingOrderModifier": {
          
        },
        "iBuildTurnChange": {
          
        },
        "iFatigueLimitChange": {
          
        },
        "iVisionChange": {
          
        },
        "iTechsAvailableChange": {
          
        },
        "iLeaderOpinionChange": {
          
        },
        "iReligionOpinionChange": {
          
        },
        "iFamilyOpinionChange": {
          
        },
        "bStartMusic": {
          
        },
        "bRedrawTechs": {
          
        },
        "bAddRoad": {
          
        },
        "bAddUrban": {
          
        },
        "bUpgradeImprovement": {
          
        },
        "bMultipleWorkers": {
          
        },
        "bBuyTile": {
          
        },
        "bAgent": {
          
        },
        "bRiverMovement": {
          
        },
        "bNoSellPenalty": {
          
        },
        "bNoUnitConsumption": {
          
        },
        "bPurgeReligions": {
          
        },
        "bBuildAllReligions": {
          
        },
        "bPaganStateReligion": {
          
        },
        "bLegitimacyOrders": {
          
        },
        "bRecruitMercenaries": {
          
        },
        "bHireMercenaries": {
          
        },
        "bAutomateWorkers": {
          
        },
        "bAutomateScouts": {
          
        },
        "aiMilitaryKillYield": {
          
        },
        "aiWarYield": {
          
        },
        "aiYieldRate": {
          
        },
        "aiYieldRateLaws": {
          
        },
        "aiYieldUpkeep": {
          
        },
        "aeEffectUnit": {
          
        },
        "aeTradeYield": {
          
        },
        "aeWaterUnit": {
          
        },
        "aeInvisibleUnit": {
          
        }
      },
      {
        "zType": "EFFECTPLAYER_BASE",
        "Name": "TEXT_EFFECTPLAYER_BASE"
      },
      {
        "zType": "EFFECTPLAYER_ADVANTAGE_LOW",
        "Name": "TEXT_ADVANTAGE_LOW",
        "EffectCity": "EFFECTCITY_ADVANTAGE_LOW",
        "iConsumptionModifier": "-5",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "10"
            }
          ]
        }
      },
      {
        "zType": "EFFECTPLAYER_ADVANTAGE_MEDIUM",
        "Name": "TEXT_ADVANTAGE_MEDIUM",
        "EffectCity": "EFFECTCITY_ADVANTAGE_MEDIUM",
        "iConsumptionModifier": "-10",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "250"
            },
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "250"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "25"
            }
          ]
        }
      },
      {
        "zType": "EFFECTPLAYER_ADVANTAGE_HIGH",
        "Name": "TEXT_ADVANTAGE_HIGH",
        "EffectCity": "EFFECTCITY_ADVANTAGE_HIGH",
        "iConsumptionModifier": "-25",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "500"
            },
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "500"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EFFECTPLAYER_ADVANTAGE_VERY_HIGH",
        "Name": "TEXT_ADVANTAGE_VERY_HIGH",
        "EffectCity": "EFFECTCITY_ADVANTAGE_VERY_HIGH",
        "iConsumptionModifier": "-50",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "1000"
            },
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1000"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "100"
            }
          ]
        }
      },
      {
        "zType": "EFFECTPLAYER_COUNCIL_SPYMASTER",
        "Name": "TEXT_EFFECTPLAYER_COUNCIL_SPYMASTER",
        "SourceCouncil": "COUNCIL_SPYMASTER",
        "bAgent": "1"
      },
      {
        "zType": "EFFECTPLAYER_DIFFICULTY_ABLE",
        "Name": "TEXT_EFFECTPLAYER_DIFFICULTY_ABLE",
        "SourceDifficulty": "DIFFICULTY_ABLE",
        "EffectCity": "EFFECTCITY_DIFFICULTY_ABLE",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "200"
            },
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "200"
            },
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "100"
            }
          ]
        }
      },
      {
        "zType": "EFFECTPLAYER_DIFFICULTY_JUST",
        "Name": "TEXT_EFFECTPLAYER_DIFFICULTY_JUST",
        "SourceDifficulty": "DIFFICULTY_JUST",
        "EffectCity": "EFFECTCITY_DIFFICULTY_JUST",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "100"
            }
          ]
        }
      },
      {
        "zType": "EFFECTPLAYER_DIFFICULTY_GOOD",
        "Name": "TEXT_EFFECTPLAYER_DIFFICULTY_GOOD",
        "SourceDifficulty": "DIFFICULTY_GOOD",
        "EffectCity": "EFFECTCITY_DIFFICULTY_GOOD",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "100"
            }
          ]
        }
      },
      {
        "zType": "EFFECTPLAYER_DIFFICULTY_STRONG",
        "Name": "TEXT_EFFECTPLAYER_DIFFICULTY_STRONG",
        "SourceDifficulty": "DIFFICULTY_STRONG",
        "EffectCity": "EFFECTCITY_DIFFICULTY_STRONG",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "90"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "90"
            }
          ]
        }
      },
      {
        "zType": "EFFECTPLAYER_DIFFICULTY_NOBLE",
        "Name": "TEXT_EFFECTPLAYER_DIFFICULTY_NOBLE",
        "SourceDifficulty": "DIFFICULTY_NOBLE",
        "EffectCity": "EFFECTCITY_DIFFICULTY_NOBLE",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "80"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "80"
            }
          ]
        }
      },
      {
        "zType": "EFFECTPLAYER_DIFFICULTY_GLORIOUS",
        "Name": "TEXT_EFFECTPLAYER_DIFFICULTY_GLORIOUS",
        "SourceDifficulty": "DIFFICULTY_GLORIOUS",
        "EffectCity": "EFFECTCITY_DIFFICULTY_GLORIOUS",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "70"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "70"
            }
          ]
        }
      },
      {
        "zType": "EFFECTPLAYER_DIFFICULTY_MAGNIFICENT",
        "Name": "TEXT_EFFECTPLAYER_DIFFICULTY_MAGNIFICENT",
        "SourceDifficulty": "DIFFICULTY_MAGNIFICENT",
        "EffectCity": "EFFECTCITY_DIFFICULTY_MAGNIFICENT",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "60"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "60"
            }
          ]
        }
      },
      {
        "zType": "EFFECTPLAYER_DIFFICULTY_GREAT",
        "Name": "TEXT_EFFECTPLAYER_DIFFICULTY_GREAT",
        "SourceDifficulty": "DIFFICULTY_GREAT",
        "EffectCity": "EFFECTCITY_DIFFICULTY_GREAT",
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "EFFECTPLAYER_IMPROVEMENT_PYRAMIDS",
        "Name": "TEXT_IMPROVEMENT_PYRAMIDS",
        "SourceImprovement": "IMPROVEMENT_PYRAMIDS",
        "iStartLawModifier": "-50"
      },
      {
        "zType": "EFFECTPLAYER_IMPROVEMENT_GREAT_ZIGGURAT",
        "Name": "TEXT_IMPROVEMENT_GREAT_ZIGGURAT",
        "SourceImprovement": "IMPROVEMENT_GREAT_ZIGGURAT",
        "EffectCity": "EFFECTCITY_IMPROVEMENT_GREAT_ZIGGURAT_ALL",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_IMPROVEMENT_ORACLE",
        "Name": "TEXT_IMPROVEMENT_ORACLE",
        "SourceImprovement": "IMPROVEMENT_ORACLE",
        "iTechsAvailableChange": "1"
      },
      {
        "zType": "EFFECTPLAYER_IMPROVEMENT_HANGING_GARDENS",
        "Name": "TEXT_IMPROVEMENT_HANGING_GARDENS",
        "SourceImprovement": "IMPROVEMENT_HANGING_GARDENS",
        "EffectCity": "EFFECTCITY_IMPROVEMENT_HANGING_GARDENS_ALL"
      },
      {
        "zType": "EFFECTPLAYER_IMPROVEMENT_NECROPOLIS",
        "Name": "TEXT_IMPROVEMENT_NECROPOLIS",
        "SourceImprovement": "IMPROVEMENT_NECROPOLIS",
        "EffectCity": "EFFECTCITY_IMPROVEMENT_NECROPOLIS_ALL"
      },
      {
        "zType": "EFFECTPLAYER_IMPROVEMENT_LIGHTHOUSE",
        "Name": "TEXT_IMPROVEMENT_LIGHTHOUSE",
        "SourceImprovement": "IMPROVEMENT_LIGHTHOUSE",
        "EffectCity": "EFFECTCITY_IMPROVEMENT_LIGHTHOUSE_ALL"
      },
      {
        "zType": "EFFECTPLAYER_IMPROVEMENT_APADANA",
        "Name": "TEXT_IMPROVEMENT_APADANA",
        "SourceImprovement": "IMPROVEMENT_APADANA",
        "EffectCity": "EFFECTCITY_IMPROVEMENT_APADANA_ALL",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_IMPROVEMENT_MAUSOLEUM",
        "Name": "TEXT_IMPROVEMENT_MAUSOLEUM",
        "SourceImprovement": "IMPROVEMENT_MAUSOLEUM",
        "EffectCity": "EFFECTCITY_IMPROVEMENT_MAUSOLEUM_ALL"
      },
      {
        "zType": "EFFECTPLAYER_IMPROVEMENT_ACROPOLIS",
        "Name": "TEXT_IMPROVEMENT_ACROPOLIS",
        "SourceImprovement": "IMPROVEMENT_ACROPOLIS",
        "EffectCity": "EFFECTCITY_IMPROVEMENT_ACROPOLIS_ALL"
      },
      {
        "zType": "EFFECTPLAYER_IMPROVEMENT_COLOSSUS",
        "Name": "TEXT_IMPROVEMENT_COLOSSUS",
        "SourceImprovement": "IMPROVEMENT_COLOSSUS",
        "EffectCity": "EFFECTCITY_IMPROVEMENT_COLOSSUS_ALL"
      },
      {
        "zType": "EFFECTPLAYER_IMPROVEMENT_MUSAEUM",
        "Name": "TEXT_IMPROVEMENT_MUSAEUM",
        "SourceImprovement": "IMPROVEMENT_MUSAEUM",
        "EffectCity": "EFFECTCITY_IMPROVEMENT_MUSAEUM_ALL"
      },
      {
        "zType": "EFFECTPLAYER_IMPROVEMENT_CIRCUS_MAXIMUS",
        "Name": "TEXT_IMPROVEMENT_CIRCUS_MAXIMUS",
        "SourceImprovement": "IMPROVEMENT_CIRCUS_MAXIMUS",
        "EffectCity": "EFFECTCITY_IMPROVEMENT_CIRCUS_MAXIMUS_ALL",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_IMPROVEMENT_PANTHEON",
        "Name": "TEXT_IMPROVEMENT_PANTHEON",
        "SourceImprovement": "IMPROVEMENT_PANTHEON",
        "StateReligionEffectCity": "EFFECTCITY_IMPROVEMENT_PANTHEON_STATE",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_IMPROVEMENT_HAGIA_SOPHIA",
        "Name": "TEXT_IMPROVEMENT_HAGIA_SOPHIA",
        "SourceImprovement": "IMPROVEMENT_HAGIA_SOPHIA",
        "EffectCity": "EFFECTCITY_IMPROVEMENT_HAGIA_SOPHIA_ALL"
      },
      {
        "zType": "EFFECTPLAYER_IMPROVEMENT_VIA_RECTA_SOUK",
        "Name": "TEXT_IMPROVEMENT_VIA_RECTA_SOUK",
        "SourceImprovement": "IMPROVEMENT_VIA_RECTA_SOUK",
        "EffectCity": "EFFECTCITY_IMPROVEMENT_VIA_RECTA_SOUK_ALL"
      },
      {
        "zType": "EFFECTPLAYER_LAW_EPICS",
        "Name": "TEXT_LAW_EPICS",
        "SourceLaw": "LAW_EPICS",
        "aiMilitaryKillYield": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_LAW_EXPLORATION",
        "Name": "TEXT_LAW_EXPLORATION",
        "SourceLaw": "LAW_EXPLORATION",
        "bNoUnitConsumption": "1",
        "aeWaterUnit": {
          "zValue": "UNIT_SCOUT"
        }
      },
      {
        "zType": "EFFECTPLAYER_LAW_SLAVERY",
        "Name": "TEXT_LAW_SLAVERY",
        "SourceLaw": "LAW_SLAVERY",
        "EffectCity": "EFFECTCITY_LAW_SLAVERY",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_LAW_FREEDOM",
        "Name": "TEXT_LAW_FREEDOM",
        "SourceLaw": "LAW_FREEDOM",
        "EffectCity": "EFFECTCITY_LAW_FREEDOM"
      },
      {
        "zType": "EFFECTPLAYER_LAW_CENTRALIZATION",
        "Name": "TEXT_LAW_CENTRALIZATION",
        "SourceLaw": "LAW_CENTRALIZATION",
        "CapitalEffectCity": "EFFECTCITY_LAW_CENTRALIZATION_CAPITAL",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_LAW_VASSALAGE",
        "Name": "TEXT_LAW_VASSALAGE",
        "SourceLaw": "LAW_VASSALAGE",
        "iConsumptionModifier": "-50"
      },
      {
        "zType": "EFFECTPLAYER_LAW_TYRANNY",
        "Name": "TEXT_LAW_TYRANNY",
        "SourceLaw": "LAW_TYRANNY",
        "EffectCity": "EFFECTCITY_LAW_TYRANNY",
        "aiYieldRate": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_LAW_CONSTITUTION",
        "Name": "TEXT_LAW_CONSTITUTION",
        "SourceLaw": "LAW_CONSTITUTION",
        "EffectPlayer": "EFFECTPLAYER_LAW_CONSTITUTION_DECREE",
        "EffectCity": "EFFECTCITY_LAW_CONSTITUTION"
      },
      {
        "zType": "EFFECTPLAYER_LAW_CONSTITUTION_DECREE",
        "Name": "TEXT_EFFECTPLAYER_LAW_CONSTITUTION_DECREE",
        "Source": "TEXT_EFFECTPLAYER_CAPITAL_SOURCE",
        "SourceLaw": "LAW_CONSTITUTION"
      },
      {
        "zType": "EFFECTPLAYER_LAW_COLONIES",
        "Name": "TEXT_LAW_COLONIES",
        "SourceLaw": "LAW_COLONIES",
        "bBuyTile": "1",
        "bRiverMovement": "1"
      },
      {
        "zType": "EFFECTPLAYER_LAW_SERFDOM",
        "Name": "TEXT_LAW_SERFDOM",
        "SourceLaw": "LAW_SERFDOM",
        "EffectCity": "EFFECTCITY_LAW_SERFDOM"
      },
      {
        "zType": "EFFECTPLAYER_LAW_MONOTHEISM",
        "Name": "TEXT_LAW_MONOTHEISM",
        "SourceLaw": "LAW_MONOTHEISM",
        "StateReligionEffectCity": "EFFECTCITY_LAW_MONOTHEISM_STATE"
      },
      {
        "zType": "EFFECTPLAYER_LAW_POLYTHEISM",
        "Name": "TEXT_LAW_POLYTHEISM",
        "SourceLaw": "LAW_POLYTHEISM",
        "EffectCity": "EFFECTCITY_LAW_POLYTHEISM"
      },
      {
        "zType": "EFFECTPLAYER_LAW_DIVINE_RULE",
        "Name": "TEXT_LAW_DIVINE_RULE",
        "SourceLaw": "LAW_DIVINE_RULE",
        "EffectCity": "EFFECTCITY_LAW_DIVINE_RULE",
        "bPaganStateReligion": "1"
      },
      {
        "zType": "EFFECTPLAYER_LAW_LEGAL_CODE",
        "Name": "TEXT_LAW_LEGAL_CODE",
        "SourceLaw": "LAW_LEGAL_CODE",
        "aiYieldRateLaws": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_LAW_TOLERANCE",
        "Name": "TEXT_LAW_TOLERANCE",
        "SourceLaw": "LAW_TOLERANCE",
        "EffectCity": "EFFECTCITY_LAW_TOLERANCE",
        "bBuildAllReligions": "1"
      },
      {
        "zType": "EFFECTPLAYER_LAW_ORTHODOXY",
        "Name": "TEXT_LAW_ORTHODOXY",
        "SourceLaw": "LAW_ORTHODOXY",
        "StateReligionEffectCity": "EFFECTCITY_LAW_ORTHODOXY_STATE",
        "bPurgeReligions": "1"
      },
      {
        "zType": "EFFECTPLAYER_LAW_PROFESSIONAL_ARMY",
        "Name": "TEXT_LAW_PROFESSIONAL_ARMY",
        "SourceLaw": "LAW_PROFESSIONAL_ARMY",
        "EffectCity": "EFFECTCITY_LAW_PROFESSIONAL_ARMY",
        "iXPModifier": "50"
      },
      {
        "zType": "EFFECTPLAYER_LAW_VOLUNTEERS",
        "Name": "TEXT_LAW_VOLUNTEERS",
        "SourceLaw": "LAW_VOLUNTEERS",
        "EffectCity": "EFFECTCITY_LAW_VOLUNTEERS",
        "aiWarYield": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_LAW_PHILOSOPHY",
        "Name": "TEXT_LAW_PHILOSOPHY",
        "SourceLaw": "LAW_PHILOSOPHY",
        "EffectCity": "EFFECTCITY_LAW_PHILOSOPHY",
        "EffectCityExtra": "EFFECTCITY_LAW_PHILOSOPHY_EXTRA"
      },
      {
        "zType": "EFFECTPLAYER_LAW_ENGINEERING",
        "Name": "TEXT_LAW_ENGINEERING",
        "SourceLaw": "LAW_ENGINEERING",
        "iWonderModifier": "-25",
        "iBuildTurnChange": "-1"
      },
      {
        "zType": "EFFECTPLAYER_LAW_ICONOGRAPHY",
        "Name": "TEXT_LAW_ICONOGRAPHY",
        "SourceLaw": "LAW_ICONOGRAPHY",
        "EffectCity": "EFFECTCITY_LAW_ICONOGRAPHY",
        "EffectCityExtra": "EFFECTCITY_LAW_ICONOGRAPHY_EXTRA"
      },
      {
        "zType": "EFFECTPLAYER_LAW_CALLIGRAPHY",
        "Name": "TEXT_LAW_CALLIGRAPHY",
        "SourceLaw": "LAW_CALLIGRAPHY",
        "EffectCity": "EFFECTCITY_LAW_CALLIGRAPHY",
        "EffectCityExtra": "EFFECTCITY_LAW_CALLIGRAPHY_EXTRA"
      },
      {
        "zType": "EFFECTPLAYER_LAW_PILGRIMAGE",
        "Name": "TEXT_LAW_PILGRIMAGE",
        "SourceLaw": "LAW_PILGRIMAGE",
        "EffectCity": "EFFECTCITY_LAW_PILGRIMAGE",
        "EffectCityExtra": "EFFECTCITY_LAW_PILGRIMAGE_EXTRA"
      },
      {
        "zType": "EFFECTPLAYER_LAW_HOLY_WAR",
        "Name": "TEXT_LAW_HOLY_WAR",
        "SourceLaw": "LAW_HOLY_WAR",
        "EffectCity": "EFFECTCITY_LAW_HOLY_WAR",
        "StateReligionEffectCity": "EFFECTCITY_LAW_HOLY_WAR_STATE"
      },
      {
        "zType": "EFFECTPLAYER_LAW_GUILDS",
        "Name": "TEXT_LAW_GUILDS",
        "SourceLaw": "LAW_GUILDS",
        "EffectCity": "EFFECTCITY_LAW_GUILDS",
        "EffectCityExtra": "EFFECTCITY_LAW_GUILDS_EXTRA"
      },
      {
        "zType": "EFFECTPLAYER_LAW_ELITES",
        "Name": "TEXT_LAW_ELITES",
        "SourceLaw": "LAW_ELITES",
        "EffectCity": "EFFECTCITY_LAW_ELITES",
        "iMaxActions": "100"
      },
      {
        "zType": "EFFECTPLAYER_LAW_AUTARKY",
        "Name": "TEXT_LAW_AUTARKY",
        "SourceLaw": "LAW_AUTARKY",
        "EffectCity": "EFFECTCITY_LAW_AUTARKY",
        "EffectCityExtra": "EFFECTCITY_LAW_AUTARKY_EXTRA"
      },
      {
        "zType": "EFFECTPLAYER_LAW_TRADE_LEAGUE",
        "Name": "TEXT_LAW_TRADE_LEAGUE",
        "SourceLaw": "LAW_TRADE_LEAGUE",
        "EffectPlayer": "EFFECTPLAYER_LAW_TRADE_LEAGUE_CONVOY",
        "bNoSellPenalty": "1"
      },
      {
        "zType": "EFFECTPLAYER_LAW_TRADE_LEAGUE_CONVOY",
        "Name": "TEXT_PROJECT_CONVOY",
        "SourceLaw": "LAW_TRADE_LEAGUE"
      },
      {
        "zType": "EFFECTPLAYER_LAW_COIN_DEBASEMENT",
        "Name": "TEXT_LAW_COIN_DEBASEMENT",
        "SourceLaw": "LAW_COIN_DEBASEMENT",
        "aeTradeYield": {
          "zValue": "YIELD_ORDERS"
        }
      },
      {
        "zType": "EFFECTPLAYER_LAW_MONETARY_REFORM",
        "Name": "TEXT_LAW_MONETARY_REFORM",
        "SourceLaw": "LAW_MONETARY_REFORM",
        "EffectCity": "EFFECTCITY_LAW_MONETARY_REFORM"
      },
      {
        "zType": "EFFECTPLAYER_NATION_ASSYRIA",
        "Name": "TEXT_NATION_ASSYRIA",
        "SourceNation": "NATION_ASSYRIA",
        "EffectCity": "EFFECTCITY_NATION_ASSYRIA",
        "EffectUnit": "EFFECTUNIT_ASSYRIA",
        "aiMilitaryKillYield": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_NATION_BABYLONIA",
        "Name": "TEXT_NATION_BABYLONIA",
        "SourceNation": "NATION_BABYLONIA",
        "EffectCity": "EFFECTCITY_NATION_BABYLONIA"
      },
      {
        "zType": "EFFECTPLAYER_NATION_CARTHAGE",
        "Name": "TEXT_NATION_CARTHAGE",
        "SourceNation": "NATION_CARTHAGE",
        "EffectCity": "EFFECTCITY_NATION_CARTHAGE",
        "FoundBonus": "BONUS_NATION_CARTHAGE",
        "bHireMercenaries": "1"
      },
      {
        "zType": "EFFECTPLAYER_NATION_EGYPT",
        "Name": "TEXT_NATION_EGYPT",
        "SourceNation": "NATION_EGYPT",
        "EffectCity": "EFFECTCITY_NATION_EGYPT",
        "EffectCityExtra": "EFFECTCITY_NATION_EGYPT_EXTRA",
        "StartBonus": "BONUS_NATION_EGYPT"
      },
      {
        "zType": "EFFECTPLAYER_NATION_GREECE",
        "Name": "TEXT_NATION_GREECE",
        "SourceNation": "NATION_GREECE",
        "EffectPlayer": "EFFECTPLAYER_NATION_GREECE_OLYMPICS",
        "EffectCity": "EFFECTCITY_NATION_GREECE"
      },
      {
        "zType": "EFFECTPLAYER_NATION_GREECE_OLYMPICS",
        "Name": "TEXT_PROJECT_OLYMPICS",
        "SourceNation": "NATION_GREECE"
      },
      {
        "zType": "EFFECTPLAYER_NATION_PERSIA",
        "Name": "TEXT_NATION_PERSIA",
        "SourceNation": "NATION_PERSIA",
        "EffectCity": "EFFECTCITY_NATION_PERSIA",
        "iHarvestModifier": "50"
      },
      {
        "zType": "EFFECTPLAYER_NATION_ROME",
        "Name": "TEXT_NATION_ROME",
        "SourceNation": "NATION_ROME",
        "EffectCity": "EFFECTCITY_NATION_ROME",
        "iFatigueLimitChange": "1"
      },
      {
        "zType": "EFFECTPLAYER_RELIGION_PAGAN",
        "Name": "TEXT_RELIGION_PAGAN",
        "StateReligionEffectCity": "EFFECTCITY_RELIGION_PAGAN_STATE"
      },
      {
        "zType": "EFFECTPLAYER_RELIGION_ZOROASTRIANISM",
        "Name": "TEXT_RELIGION_ZOROASTRIANISM",
        "SourceReligionState": "RELIGION_ZOROASTRIANISM",
        "StateReligionEffectCity": "EFFECTCITY_RELIGION_ZOROASTRIANISM_STATE"
      },
      {
        "zType": "EFFECTPLAYER_RELIGION_JUDAISM",
        "Name": "TEXT_RELIGION_JUDAISM",
        "SourceReligionState": "RELIGION_JUDAISM",
        "StateReligionEffectCity": "EFFECTCITY_RELIGION_JUDAISM_STATE"
      },
      {
        "zType": "EFFECTPLAYER_RELIGION_CHRISTIANITY",
        "Name": "TEXT_RELIGION_CHRISTIANITY",
        "SourceReligionState": "RELIGION_CHRISTIANITY",
        "StateReligionEffectCity": "EFFECTCITY_RELIGION_CHRISTIANITY_STATE"
      },
      {
        "zType": "EFFECTPLAYER_RELIGION_MANICHAEISM",
        "Name": "TEXT_RELIGION_MANICHAEISM",
        "SourceReligionState": "RELIGION_MANICHAEISM",
        "StateReligionEffectCity": "EFFECTCITY_RELIGION_MANICHAEISM_STATE"
      },
      {
        "zType": "EFFECTPLAYER_TECH_LABOR_FORCE",
        "Name": "TEXT_EFFECTPLAYER_TECH_LABOR_FORCE",
        "zIconName": "ADD_ROAD",
        "SourceTech": "TECH_LABOR_FORCE",
        "bAddRoad": "1"
      },
      {
        "zType": "EFFECTPLAYER_TECH_DRAMA",
        "Name": "TEXT_EFFECTPLAYER_TECH_DRAMA",
        "zIconName": "START_MUSIC",
        "SourceTech": "TECH_DRAMA",
        "bStartMusic": "1"
      },
      {
        "zType": "EFFECTPLAYER_TECH_COINAGE",
        "Name": "TEXT_EFFECTPLAYER_TECH_COINAGE",
        "zIconName": "WORKER_AUTOMATE",
        "SourceTech": "TECH_MANOR",
        "bAutomateWorkers": "1"
      },
      {
        "zType": "EFFECTPLAYER_TECH_NAVIGATION",
        "Name": "TEXT_EFFECTPLAYER_TECH_NAVIGATION",
        "zIconName": "WORKER_AUTOMATE",
        "SourceTech": "TECH_NAVIGATION",
        "bAutomateScouts": "1"
      },
      {
        "zType": "EFFECTPLAYER_TECH_INDUSTRIAL_PROGRESS",
        "Name": "TEXT_TECH_INDUSTRIAL_PROGRESS",
        "zIconName": "GOAL_STARTED",
        "SourceTech": "TECH_INDUSTRIAL_PROGRESS",
        "iVP": "1"
      },
      {
        "zType": "EFFECTPLAYER_TECH_MILITARY_PRESTIGE",
        "Name": "TEXT_TECH_MILITARY_PRESTIGE",
        "zIconName": "GOAL_STARTED",
        "SourceTech": "TECH_MILITARY_PRESTIGE",
        "iVP": "1"
      },
      {
        "zType": "EFFECTPLAYER_TECH_ECONOMIC_REFORM",
        "Name": "TEXT_TECH_ECONOMIC_REFORM",
        "zIconName": "GOAL_STARTED",
        "SourceTech": "TECH_ECONOMIC_REFORM",
        "iVP": "1"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_HERO_ARCHETYPE",
        "Name": "TEXT_EFFECTPLAYER_TRAIT_HERO_ARCHETYPE",
        "SourceTrait": "TRAIT_HERO_ARCHETYPE",
        "aiMilitaryKillYield": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "50"
          }
        },
        "aeEffectUnit": {
          "Pair": {
            "zIndex": "UNITTRAIT_MELEE",
            "zValue": "EFFECTUNIT_HERO_MELEE"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_COMMANDER_ARCHETYPE",
        "Name": "TEXT_EFFECTPLAYER_TRAIT_COMMANDER_ARCHETYPE",
        "SourceTrait": "TRAIT_COMMANDER_ARCHETYPE",
        "CapitalEffectCity": "EFFECTCITY_TRAIT_COMMANDER_ARCHETYPE_CAPITAL",
        "iXPIdleTurn": "10",
        "aeEffectUnit": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "zValue": "EFFECTUNIT_COMMANDER_INFANTRY"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_TACTICIAN_ARCHETYPE",
        "Name": "TEXT_EFFECTPLAYER_TRAIT_TACTICIAN_ARCHETYPE",
        "SourceTrait": "TRAIT_TACTICIAN_ARCHETYPE",
        "iVisionChange": "2",
        "aeEffectUnit": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "zValue": "EFFECTUNIT_TACTICIAN_RANGED"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_ZEALOT_ARCHETYPE",
        "Name": "TEXT_EFFECTPLAYER_TRAIT_ZEALOT_ARCHETYPE",
        "SourceTrait": "TRAIT_ZEALOT_ARCHETYPE",
        "EffectCity": "EFFECTCITY_TRAIT_ZEALOT_ARCHETYPE_ALL",
        "StateReligionEffectCity": "EFFECTCITY_TRAIT_ZEALOT_ARCHETYPE_STATE",
        "iFatigueLimitChange": "1"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_JUDGE_ARCHETYPE",
        "Name": "TEXT_EFFECTPLAYER_TRAIT_JUDGE_ARCHETYPE",
        "SourceTrait": "TRAIT_JUDGE_ARCHETYPE",
        "iSwitchLawModifier": "-50",
        "bUpgradeImprovement": "1"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_ORATOR_ARCHETYPE",
        "Name": "TEXT_EFFECTPLAYER_TRAIT_ORATOR_ARCHETYPE",
        "SourceTrait": "TRAIT_ORATOR_ARCHETYPE",
        "EffectCity": "EFFECTCITY_TRAIT_ORATOR_ARCHETYPE_ALL",
        "iReligionOpinionChange": "40",
        "bRecruitMercenaries": "1"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_SCHOLAR_ARCHETYPE",
        "Name": "TEXT_EFFECTPLAYER_TRAIT_SCHOLAR_ARCHETYPE",
        "SourceTrait": "TRAIT_SCHOLAR_ARCHETYPE",
        "EffectPlayer": "EFFECTPLAYER_TRAIT_SCHOLAR_ARCHETYPE_INQUIRY",
        "bRedrawTechs": "1"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_SCHOLAR_ARCHETYPE_INQUIRY",
        "Name": "TEXT_EFFECTPLAYER_TRAIT_SCHOLAR_ARCHETYPE_INQUIRY",
        "Source": "TEXT_EFFECTPLAYER_CAPITAL_SOURCE",
        "SourceTrait": "TRAIT_SCHOLAR_ARCHETYPE"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_BUILDER_ARCHETYPE",
        "Name": "TEXT_EFFECTPLAYER_TRAIT_BUILDER_ARCHETYPE",
        "SourceTrait": "TRAIT_BUILDER_ARCHETYPE",
        "EffectCity": "EFFECTCITY_TRAIT_BUILDER_ARCHETYPE_ALL",
        "bAddUrban": "1",
        "bMultipleWorkers": "1"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_SCHEMER_ARCHETYPE",
        "Name": "TEXT_EFFECTPLAYER_TRAIT_SCHEMER_ARCHETYPE",
        "SourceTrait": "TRAIT_SCHEMER_ARCHETYPE",
        "bLegitimacyOrders": "1",
        "aiWarYield": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "20"
          }
        },
        "aeInvisibleUnit": {
          "zValue": "UNIT_SCOUT"
        }
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_DIPLOMAT_ARCHETYPE",
        "Name": "TEXT_EFFECTPLAYER_TRAIT_DIPLOMAT_ARCHETYPE",
        "SourceTrait": "TRAIT_DIPLOMAT_ARCHETYPE",
        "iLeaderOpinionChange": "60"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_AFFABLE",
        "Name": "TEXT_TRAIT_AFFABLE",
        "SourceTrait": "TRAIT_AFFABLE",
        "EffectCity": "EFFECTCITY_TRAIT_AFFABLE_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_CRUEL",
        "Name": "TEXT_TRAIT_CRUEL",
        "SourceTrait": "TRAIT_CRUEL",
        "EffectCity": "EFFECTCITY_TRAIT_CRUEL_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_ELOQUENT",
        "Name": "TEXT_TRAIT_ELOQUENT",
        "SourceTrait": "TRAIT_ELOQUENT",
        "EffectCity": "EFFECTCITY_TRAIT_ELOQUENT_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_INTOLERANT",
        "Name": "TEXT_TRAIT_INTOLERANT",
        "SourceTrait": "TRAIT_INTOLERANT",
        "EffectCity": "EFFECTCITY_TRAIT_INTOLERANT_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_WARLIKE",
        "Name": "TEXT_TRAIT_WARLIKE",
        "SourceTrait": "TRAIT_WARLIKE",
        "EffectCity": "EFFECTCITY_TRAIT_WARLIKE_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_SLOTHFUL",
        "Name": "TEXT_TRAIT_SLOTHFUL",
        "SourceTrait": "TRAIT_SLOTHFUL",
        "EffectCity": "EFFECTCITY_TRAIT_SLOTHFUL_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_INSPIRING",
        "Name": "TEXT_TRAIT_INSPIRING",
        "SourceTrait": "TRAIT_INSPIRING",
        "EffectCity": "EFFECTCITY_TRAIT_INSPIRING_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_UNCOUTH",
        "Name": "TEXT_TRAIT_UNCOUTH",
        "SourceTrait": "TRAIT_UNCOUTH",
        "EffectCity": "EFFECTCITY_TRAIT_UNCOUTH_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_INTELLIGENT",
        "Name": "TEXT_TRAIT_INTELLIGENT",
        "SourceTrait": "TRAIT_INTELLIGENT",
        "EffectCity": "EFFECTCITY_TRAIT_INTELLIGENT_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_FOOLISH",
        "Name": "TEXT_TRAIT_FOOLISH",
        "SourceTrait": "TRAIT_FOOLISH",
        "EffectCity": "EFFECTCITY_TRAIT_FOOLISH_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_PROSPEROUS",
        "Name": "TEXT_TRAIT_PROSPEROUS",
        "SourceTrait": "TRAIT_PROSPEROUS",
        "EffectCity": "EFFECTCITY_TRAIT_PROSPEROUS_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_EXTRAVAGANT",
        "Name": "TEXT_TRAIT_EXTRAVAGANT",
        "SourceTrait": "TRAIT_EXTRAVAGANT",
        "EffectCity": "EFFECTCITY_TRAIT_EXTRAVAGANT_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_FRUGAL",
        "Name": "TEXT_TRAIT_FRUGAL",
        "SourceTrait": "TRAIT_FRUGAL",
        "EffectCity": "EFFECTCITY_TRAIT_FRUGAL_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_CORRUPT",
        "Name": "TEXT_TRAIT_CORRUPT",
        "SourceTrait": "TRAIT_CORRUPT",
        "EffectCity": "EFFECTCITY_TRAIT_CORRUPT_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_RIGHTEOUS",
        "Name": "TEXT_TRAIT_RIGHTEOUS",
        "SourceTrait": "TRAIT_RIGHTEOUS",
        "EffectCity": "EFFECTCITY_TRAIT_RIGHTEOUS_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_DEBAUCHED",
        "Name": "TEXT_TRAIT_DEBAUCHED",
        "SourceTrait": "TRAIT_DEBAUCHED",
        "EffectCity": "EFFECTCITY_TRAIT_DEBAUCHED_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_ROBUST",
        "Name": "TEXT_TRAIT_ROBUST",
        "SourceTrait": "TRAIT_ROBUST",
        "EffectCity": "EFFECTCITY_TRAIT_ROBUST_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_VIGILANT",
        "Name": "TEXT_TRAIT_VIGILANT",
        "SourceTrait": "TRAIT_VIGILANT",
        "EffectCity": "EFFECTCITY_TRAIT_VIGILANT_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_STRICT",
        "Name": "TEXT_TRAIT_STRICT",
        "SourceTrait": "TRAIT_STRICT",
        "EffectCity": "EFFECTCITY_TRAIT_STRICT_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_EQUESTRIAN",
        "Name": "TEXT_TRAIT_EQUESTRIAN",
        "SourceTrait": "TRAIT_EQUESTRIAN",
        "EffectCity": "EFFECTCITY_TRAIT_EQUESTRIAN_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_CARPENTER",
        "Name": "TEXT_TRAIT_CARPENTER",
        "SourceTrait": "TRAIT_CARPENTER",
        "EffectCity": "EFFECTCITY_TRAIT_CARPENTER_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_PATHFINDER",
        "Name": "TEXT_TRAIT_PATHFINDER",
        "SourceTrait": "TRAIT_PATHFINDER",
        "EffectCity": "EFFECTCITY_TRAIT_PATHFINDER_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_CULTIVATOR",
        "Name": "TEXT_TRAIT_CULTIVATOR",
        "SourceTrait": "TRAIT_CULTIVATOR",
        "EffectCity": "EFFECTCITY_TRAIT_CULTIVATOR_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_NATURALIST",
        "Name": "TEXT_TRAIT_NATURALIST",
        "SourceTrait": "TRAIT_NATURALIST",
        "EffectCity": "EFFECTCITY_TRAIT_NATURALIST_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_DELVER",
        "Name": "TEXT_TRAIT_DELVER",
        "SourceTrait": "TRAIT_DELVER",
        "EffectCity": "EFFECTCITY_TRAIT_DELVER_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_TRACKER",
        "Name": "TEXT_TRAIT_TRACKER",
        "SourceTrait": "TRAIT_TRACKER",
        "EffectUnit": "EFFECTUNIT_TRACKER_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_SWIFT",
        "Name": "TEXT_TRAIT_SWIFT",
        "SourceTrait": "TRAIT_SWIFT",
        "EffectUnit": "EFFECTUNIT_SWIFT_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_BESIEGER",
        "Name": "TEXT_TRAIT_BESIEGER",
        "SourceTrait": "TRAIT_BESIEGER",
        "EffectUnit": "EFFECTUNIT_BESIEGER_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_TOUGH",
        "Name": "TEXT_TRAIT_TOUGH",
        "SourceTrait": "TRAIT_TOUGH",
        "EffectUnit": "EFFECTUNIT_TOUGH_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_BLOODTHIRSTY",
        "Name": "TEXT_TRAIT_BLOODTHIRSTY",
        "SourceTrait": "TRAIT_BLOODTHIRSTY",
        "EffectUnit": "EFFECTUNIT_BLOODTHIRSTY_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_HECKLER",
        "Name": "TEXT_TRAIT_HECKLER",
        "SourceTrait": "TRAIT_HECKLER",
        "EffectUnit": "EFFECTUNIT_HECKLER_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_STEADFAST",
        "Name": "TEXT_TRAIT_STEADFAST",
        "SourceTrait": "TRAIT_STEADFAST",
        "EffectUnit": "EFFECTUNIT_STEADFAST_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_HERBALIST",
        "Name": "TEXT_TRAIT_HERBALIST",
        "SourceTrait": "TRAIT_HERBALIST",
        "EffectUnit": "EFFECTUNIT_HERBALIST_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_HIGHLANDER",
        "Name": "TEXT_TRAIT_HIGHLANDER",
        "SourceTrait": "TRAIT_HIGHLANDER",
        "EffectUnit": "EFFECTUNIT_HIGHLANDER_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_RANGER",
        "Name": "TEXT_TRAIT_RANGER",
        "SourceTrait": "TRAIT_RANGER",
        "EffectUnit": "EFFECTUNIT_RANGER_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_BRAVE",
        "Name": "TEXT_TRAIT_BRAVE",
        "SourceTrait": "TRAIT_BRAVE",
        "EffectUnit": "EFFECTUNIT_BRAVE_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_SHIELDBEARER",
        "Name": "TEXT_TRAIT_SHIELDBEARER",
        "SourceTrait": "TRAIT_SHIELDBEARER",
        "EffectUnit": "EFFECTUNIT_SHIELDBEARER_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_FIERCE",
        "Name": "TEXT_TRAIT_FIERCE",
        "SourceTrait": "TRAIT_FIERCE",
        "EffectUnit": "EFFECTUNIT_FIERCE_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_HORSEBANE",
        "Name": "TEXT_TRAIT_HORSEBANE",
        "SourceTrait": "TRAIT_HORSEBANE",
        "EffectUnit": "EFFECTUNIT_HORSEBANE_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_ENGINEER",
        "Name": "TEXT_TRAIT_ENGINEER",
        "SourceTrait": "TRAIT_ENGINEER",
        "EffectUnit": "EFFECTUNIT_ENGINEER_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_DRUNK",
        "Name": "TEXT_TRAIT_DRUNK",
        "SourceTrait": "TRAIT_DRUNK",
        "iLeaderOpinionChange": "-40"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_MISERABLE",
        "Name": "TEXT_TRAIT_MISERABLE",
        "SourceTrait": "TRAIT_MISERABLE",
        "EffectCity": "EFFECTCITY_TRAIT_MISERABLE_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_FAMOUS",
        "Name": "TEXT_TRAIT_FAMOUS",
        "SourceTrait": "TRAIT_FAMOUS",
        "iFamilyOpinionChange": "40"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_INFAMOUS",
        "Name": "TEXT_TRAIT_INFAMOUS",
        "SourceTrait": "TRAIT_INFAMOUS",
        "iFamilyOpinionChange": "-40"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_MOURNING",
        "Name": "TEXT_TRAIT_MOURNING",
        "SourceTrait": "TRAIT_MOURNING",
        "EffectCity": "EFFECTCITY_TRAIT_MOURNING_ALL"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_CUNNING",
        "Name": "TEXT_TRAIT_CUNNING",
        "SourceTrait": "TRAIT_CUNNING",
        "iLeaderOpinionChange": "20"
      },
      {
        "zType": "EFFECTPLAYER_TRAIT_DROUGHT_STRICKEN",
        "Name": "TEXT_TRAIT_DROUGHT_STRICKEN",
        "SourceTrait": "TRAIT_DROUGHT_STRICKEN",
        "EffectCity": "EFFECTCITY_TRAIT_DROUGHT_STRICKEN_ALL"
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_HIGH_SCIENCE",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_HIGH_SCIENCE",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_VERY_HIGH_SCIENCE",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_VERY_HIGH_SCIENCE",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_MEDIUM_ORDERS",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_MEDIUM_ORDERS",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-2"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_HIGH_ORDERS",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_HIGH_ORDERS",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-5"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_VERY_HIGH_ORDERS",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_VERY_HIGH_ORDERS",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_LOW_CIVICS",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_LOW_CIVICS",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_MEDIUM_CIVICS",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_MEDIUM_CIVICS",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_HIGH_CIVICS",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_HIGH_CIVICS",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-30"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_VERY_HIGH_CIVICS",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_VERY_HIGH_CIVICS",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "-40"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_LOW_TRAINING",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_LOW_TRAINING",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-20"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_MEDIUM_TRAINING",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_MEDIUM_TRAINING",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-30"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_HIGH_TRAINING",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_HIGH_TRAINING",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-40"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_VERY_HIGH_TRAINING",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_VERY_HIGH_TRAINING",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "-50"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_LOW_MONEY",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_LOW_MONEY",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-40"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_MEDIUM_MONEY",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_MEDIUM_MONEY",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-60"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_HIGH_MONEY",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_HIGH_MONEY",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-80"
          }
        }
      },
      {
        "zType": "EFFECTPLAYER_UPKEEP_VERY_HIGH_MONEY",
        "Name": "TEXT_EFFECTPLAYER_UPKEEP_VERY_HIGH_MONEY",
        "aiYieldUpkeep": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "-100"
          }
        }
      }
    ]
  }
}
    export default data
    