
    const data: XmlEffectUnit.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "zIconName": {
          
        },
        "Class": {
          
        },
        "SourceUnitTrait": {
          
        },
        "iClassNum": {
          
        },
        "iStrengthModifier": {
          
        },
        "iAttackModifier": {
          
        },
        "iDefenseModifier": {
          
        },
        "iCriticalChance": {
          
        },
        "iEnlistOnKillChance": {
          
        },
        "iVisionExtra": {
          
        },
        "iMovementExtra": {
          
        },
        "iFatigueExtra": {
          
        },
        "iRangeExtra": {
          
        },
        "iWaterControlExtra": {
          
        },
        "iPillageYieldModifier": {
          
        },
        "iRiverAttackModifier": {
          
        },
        "iWaterLandAttackModifier": {
          
        },
        "iHomeModifier": {
          
        },
        "iSettlementAttackModifier": {
          
        },
        "iUrbanAttackModifier": {
          
        },
        "iUrbanDefenseModifier": {
          
        },
        "iDamagedUsModifier": {
          
        },
        "iDamagedThemModifier": {
          
        },
        "iGeneralModifier": {
          
        },
        "iFlankingAttackModifier": {
          
        },
        "iAdjacentSameModifier": {
          
        },
        "iAdjacentSameDefenseModifier": {
          
        },
        "iHealExtra": {
          
        },
        "iHealAlways": {
          
        },
        "bSkipIcon": {
          
        },
        "bMultiTeams": {
          
        },
        "bMeleeCounter": {
          
        },
        "bRout": {
          
        },
        "bPush": {
          
        },
        "bPushWater": {
          
        },
        "bStun": {
          
        },
        "bStunWater": {
          
        },
        "bLastStand": {
          
        },
        "bIgnoresDistance": {
          
        },
        "bCriticalImmune": {
          
        },
        "bHealNeutral": {
          
        },
        "bLaunchOffensive": {
          
        },
        "bNoRoadCooldown": {
          
        },
        "aiAttackValue": {
          
        },
        "aiAttackPercent": {
          
        },
        "aiTerrainFromModifier": {
          
        },
        "aiHeightFromModifier": {
          
        },
        "aiVegetationFromModifier": {
          
        },
        "aiUnitTraitModifier": {
          
        },
        "aiUnitTraitModifierAttack": {
          
        },
        "aiUnitTraitModifierDefense": {
          
        },
        "aiUnitTraitModifierMelee": {
          
        },
        "aiMilitaryKillYield": {
          
        },
        "abHideVegetation": {
          
        },
        "abUnitTraitValid": {
          
        },
        "abUnitTraitInvalid": {
          
        },
        "aeUnitTraitZOC": {
          
        }
      },
      {
        "zType": "EFFECTUNIT_COMBAT1",
        "Name": "TEXT_EFFECTUNIT_COMBAT1",
        "zIconName": "EFFECTUNIT_COMBAT1",
        "Class": "EFFECTUNITCLASS_COMBAT",
        "iClassNum": "1",
        "iStrengthModifier": "5"
      },
      {
        "zType": "EFFECTUNIT_COMBAT2",
        "Name": "TEXT_EFFECTUNIT_COMBAT2",
        "zIconName": "EFFECTUNIT_COMBAT2",
        "Class": "EFFECTUNITCLASS_COMBAT",
        "iClassNum": "2",
        "iStrengthModifier": "10"
      },
      {
        "zType": "EFFECTUNIT_COMBAT3",
        "Name": "TEXT_EFFECTUNIT_COMBAT3",
        "zIconName": "EFFECTUNIT_COMBAT3",
        "Class": "EFFECTUNITCLASS_COMBAT",
        "iClassNum": "3",
        "iStrengthModifier": "15"
      },
      {
        "zType": "EFFECTUNIT_STRIKE1",
        "Name": "TEXT_EFFECTUNIT_STRIKE1",
        "zIconName": "EFFECTUNIT_STRIKE1",
        "Class": "EFFECTUNITCLASS_STRIKE",
        "iClassNum": "1",
        "iAttackModifier": "10",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_STRIKE2",
        "Name": "TEXT_EFFECTUNIT_STRIKE2",
        "zIconName": "EFFECTUNIT_STRIKE2",
        "Class": "EFFECTUNITCLASS_STRIKE",
        "iClassNum": "2",
        "iAttackModifier": "15",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_STRIKE3",
        "Name": "TEXT_EFFECTUNIT_STRIKE3",
        "zIconName": "EFFECTUNIT_STRIKE3",
        "Class": "EFFECTUNITCLASS_STRIKE",
        "iClassNum": "3",
        "iAttackModifier": "20",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_GUARD1",
        "Name": "TEXT_EFFECTUNIT_GUARD1",
        "zIconName": "EFFECTUNIT_GUARD1",
        "Class": "EFFECTUNITCLASS_GUARD",
        "iClassNum": "1",
        "iDefenseModifier": "10",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_GUARD2",
        "Name": "TEXT_EFFECTUNIT_GUARD2",
        "zIconName": "EFFECTUNIT_GUARD2",
        "Class": "EFFECTUNITCLASS_GUARD",
        "iClassNum": "2",
        "iDefenseModifier": "15",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_GUARD3",
        "Name": "TEXT_EFFECTUNIT_GUARD3",
        "zIconName": "EFFECTUNIT_GUARD3",
        "Class": "EFFECTUNITCLASS_GUARD",
        "iClassNum": "3",
        "iDefenseModifier": "20",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_FOCUS1",
        "Name": "TEXT_EFFECTUNIT_FOCUS1",
        "zIconName": "EFFECTUNIT_FOCUS1",
        "Class": "EFFECTUNITCLASS_FOCUS",
        "iClassNum": "1",
        "iCriticalChance": "10"
      },
      {
        "zType": "EFFECTUNIT_FOCUS2",
        "Name": "TEXT_EFFECTUNIT_FOCUS2",
        "zIconName": "EFFECTUNIT_FOCUS2",
        "Class": "EFFECTUNITCLASS_FOCUS",
        "iClassNum": "2",
        "iCriticalChance": "15"
      },
      {
        "zType": "EFFECTUNIT_FOCUS3",
        "Name": "TEXT_EFFECTUNIT_FOCUS3",
        "zIconName": "EFFECTUNIT_FOCUS3",
        "Class": "EFFECTUNITCLASS_FOCUS",
        "iClassNum": "3",
        "iCriticalChance": "20"
      },
      {
        "zType": "EFFECTUNIT_TRACKER",
        "Name": "TEXT_EFFECTUNIT_TRACKER",
        "zIconName": "EFFECTUNIT_TRACKER",
        "iVisionExtra": "3",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_MOUNTED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_SWIFT",
        "Name": "TEXT_EFFECTUNIT_SWIFT",
        "zIconName": "EFFECTUNIT_SWIFT",
        "iMovementExtra": "1",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_MOUNTED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_EAGLE_EYE",
        "Name": "TEXT_EFFECTUNIT_EAGLE_EYE",
        "zIconName": "EFFECTUNIT_EAGLE_EYE",
        "bIgnoresDistance": "1",
        "abUnitTraitValid": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "bValue": "1"
          }
        },
        "abUnitTraitInvalid": {
          "Pair": {
            "zIndex": "UNITTRAIT_SIEGE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_MARKSMAN",
        "Name": "TEXT_EFFECTUNIT_MARKSMAN",
        "zIconName": "EFFECTUNIT_MARKSMAN",
        "iRangeExtra": "1",
        "abUnitTraitValid": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_AMPHIBIOUS",
        "Name": "TEXT_EFFECTUNIT_AMPHIBIOUS",
        "zIconName": "EFFECTUNIT_AMPHIBIOUS",
        "iRiverAttackModifier": "50",
        "iWaterLandAttackModifier": "50",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_BESIEGER",
        "Name": "TEXT_EFFECTUNIT_BESIEGER",
        "zIconName": "EFFECTUNIT_BESIEGER",
        "iUrbanAttackModifier": "25",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SIEGE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_WARDEN",
        "Name": "TEXT_EFFECTUNIT_WARDEN",
        "zIconName": "EFFECTUNIT_WARDEN",
        "aiTerrainFromModifier": {
          "Pair": {
            "zIndex": "TERRAIN_URBAN",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SIEGE",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_TOUGH",
        "Name": "TEXT_EFFECTUNIT_TOUGH",
        "zIconName": "EFFECTUNIT_TOUGH",
        "iDamagedUsModifier": "10"
      },
      {
        "zType": "EFFECTUNIT_BLOODTHIRSTY",
        "Name": "TEXT_EFFECTUNIT_BLOODTHIRSTY",
        "zIconName": "EFFECTUNIT_BLOODTHIRSTY",
        "iDamagedThemModifier": "10"
      },
      {
        "zType": "EFFECTUNIT_HECKLER",
        "Name": "TEXT_EFFECTUNIT_HECKLER",
        "zIconName": "EFFECTUNIT_HECKLER",
        "iGeneralModifier": "25"
      },
      {
        "zType": "EFFECTUNIT_STEADFAST",
        "Name": "TEXT_EFFECTUNIT_STEADFAST",
        "zIconName": "EFFECTUNIT_STEADFAST",
        "bMultiTeams": "1",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_TRIBAL",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_HERBALIST",
        "Name": "TEXT_EFFECTUNIT_HERBALIST",
        "zIconName": "EFFECTUNIT_HERBALIST",
        "iHealExtra": "4"
      },
      {
        "zType": "EFFECTUNIT_HEALER",
        "Name": "TEXT_EFFECTUNIT_HEALER",
        "zIconName": "EFFECTUNIT_HEALER",
        "iHealAlways": "1"
      },
      {
        "zType": "EFFECTUNIT_NOMAD",
        "Name": "TEXT_EFFECTUNIT_NOMAD",
        "zIconName": "EFFECTUNIT_NOMAD",
        "aiTerrainFromModifier": {
          "Pair": {
            "zIndex": "TERRAIN_SAND",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_MOUNTED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_COLD",
        "Name": "TEXT_EFFECTUNIT_COLD",
        "zIconName": "EFFECTUNIT_COLD",
        "aiTerrainFromModifier": {
          "Pair": {
            "zIndex": "TERRAIN_TUNDRA",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_MOUNTED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_HIGHLANDER",
        "Name": "TEXT_EFFECTUNIT_HIGHLANDER",
        "zIconName": "EFFECTUNIT_HIGHLANDER",
        "aiHeightFromModifier": {
          "Pair": {
            "zIndex": "HEIGHT_HILL",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_RANGER",
        "Name": "TEXT_EFFECTUNIT_RANGER",
        "zIconName": "EFFECTUNIT_RANGER",
        "aiVegetationFromModifier": {
          "Pair": {
            "zIndex": "VEGETATION_TREES",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_BRAVE",
        "Name": "TEXT_EFFECTUNIT_BRAVE",
        "zIconName": "EFFECTUNIT_BRAVE",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_MELEE",
            "iValue": "10"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_SHIELDBEARER",
        "Name": "TEXT_EFFECTUNIT_SHIELDBEARER",
        "zIconName": "EFFECTUNIT_SHIELDBEARER",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "iValue": "10"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_FIERCE",
        "Name": "TEXT_EFFECTUNIT_FIERCE",
        "zIconName": "EFFECTUNIT_FIERCE",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "iValue": "10"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_HORSEBANE",
        "Name": "TEXT_EFFECTUNIT_HORSEBANE",
        "zIconName": "EFFECTUNIT_HORSEBANE",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_ENGINEER",
        "Name": "TEXT_EFFECTUNIT_ENGINEER",
        "zIconName": "EFFECTUNIT_ENGINEER",
        "aiUnitTraitModifier": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_SIEGE",
              "iValue": "25"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "iValue": "25"
            }
          ]
        },
        "abUnitTraitValid": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_SHRAPNEL",
        "Name": "TEXT_EFFECTUNIT_SHRAPNEL",
        "zIconName": "EFFECTUNIT_SHRAPNEL",
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_SPLASH",
            "iValue": "25"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_COCKSWAIN",
        "Name": "TEXT_EFFECTUNIT_COCKSWAIN",
        "zIconName": "EFFECTUNIT_COCKSWAIN",
        "bRout": "1",
        "abUnitTraitValid": {
          "Pair": {
            "zIndex": "UNITTRAIT_SHIP",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_GRAPPLER",
        "Name": "TEXT_EFFECTUNIT_GRAPPLER",
        "zIconName": "EFFECTUNIT_GRAPPLER",
        "iStrengthModifier": "-20",
        "bStunWater": "1",
        "abUnitTraitValid": {
          "Pair": {
            "zIndex": "UNITTRAIT_SHIP",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_SEABORN",
        "Name": "TEXT_EFFECTUNIT_SEABORN",
        "zIconName": "EFFECTUNIT_SEABORN",
        "aiHeightFromModifier": {
          "Pair": {
            "zIndex": "HEIGHT_OCEAN",
            "iValue": "20"
          }
        },
        "abUnitTraitValid": {
          "Pair": {
            "zIndex": "UNITTRAIT_SHIP",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_OVERWHELM",
        "Name": "TEXT_EFFECTUNIT_OVERWHELM",
        "zIconName": "EFFECTUNIT_OVERWHELM",
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_CLEAVE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_CLEAVE",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": {
            "zIndex": "UNITTRAIT_SHIP",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_FIRESHIP",
        "Name": "TEXT_EFFECTUNIT_FIRESHIP",
        "zIconName": "EFFECTUNIT_FIRESHIP",
        "bPushWater": "1",
        "aiUnitTraitModifierAttack": {
          "Pair": {
            "zIndex": "UNITTRAIT_SHIP",
            "iValue": "10"
          }
        },
        "abUnitTraitValid": {
          "Pair": {
            "zIndex": "UNITTRAIT_SHIP",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_LADING",
        "Name": "TEXT_EFFECTUNIT_LADING",
        "zIconName": "EFFECTUNIT_LADING",
        "iWaterControlExtra": "1",
        "abUnitTraitValid": {
          "Pair": {
            "zIndex": "UNITTRAIT_SHIP",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_INGENUITY",
        "Name": "TEXT_EFFECTUNIT_INGENUITY",
        "zIconName": "EFFECTUNIT_INGENUITY",
        "iStrengthModifier": "20"
      },
      {
        "zType": "EFFECTUNIT_SADDLEBORN",
        "Name": "TEXT_EFFECTUNIT_SADDLEBORN",
        "zIconName": "EFFECTUNIT_SADDLEBORN",
        "aiUnitTraitModifierDefense": {
          "Pair": {
            "zIndex": "UNITTRAIT_MELEE",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_SENTINEL",
        "Name": "TEXT_EFFECTUNIT_SENTINEL",
        "zIconName": "EFFECTUNIT_SENTINEL",
        "iHomeModifier": "20"
      },
      {
        "zType": "EFFECTUNIT_TRACKER_ALL",
        "Name": "TEXT_EFFECTUNIT_TRACKER_ALL",
        "zIconName": "EFFECTUNIT_TRACKER_ALL",
        "iVisionExtra": "2",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_MOUNTED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_SWIFT_ALL",
        "Name": "TEXT_EFFECTUNIT_SWIFT_ALL",
        "zIconName": "EFFECTUNIT_SWIFT_ALL",
        "iFatigueExtra": "1",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_MOUNTED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_BESIEGER_ALL",
        "Name": "TEXT_EFFECTUNIT_BESIEGER_ALL",
        "zIconName": "EFFECTUNIT_BESIEGER_ALL",
        "iUrbanAttackModifier": "10",
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SIEGE",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_TOUGH_ALL",
        "Name": "TEXT_EFFECTUNIT_TOUGH_ALL",
        "zIconName": "EFFECTUNIT_TOUGH_ALL",
        "iDamagedUsModifier": "5"
      },
      {
        "zType": "EFFECTUNIT_BLOODTHIRSTY_ALL",
        "Name": "TEXT_EFFECTUNIT_BLOODTHIRSTY_ALL",
        "zIconName": "EFFECTUNIT_BLOODTHIRSTY_ALL",
        "iDamagedThemModifier": "5"
      },
      {
        "zType": "EFFECTUNIT_HECKLER_ALL",
        "Name": "TEXT_EFFECTUNIT_HECKLER_ALL",
        "zIconName": "EFFECTUNIT_HECKLER_ALL",
        "iGeneralModifier": "10"
      },
      {
        "zType": "EFFECTUNIT_STEADFAST_ALL",
        "Name": "TEXT_EFFECTUNIT_STEADFAST_ALL",
        "zIconName": "EFFECTUNIT_STEADFAST_ALL",
        "bMultiTeams": "1",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_TRIBAL",
            "iValue": "25"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_HERBALIST_ALL",
        "Name": "TEXT_EFFECTUNIT_HERBALIST_ALL",
        "zIconName": "EFFECTUNIT_HERBALIST_ALL",
        "iHealExtra": "2"
      },
      {
        "zType": "EFFECTUNIT_HIGHLANDER_ALL",
        "Name": "TEXT_EFFECTUNIT_HIGHLANDER_ALL",
        "zIconName": "EFFECTUNIT_HIGHLANDER_ALL",
        "aiHeightFromModifier": {
          "Pair": {
            "zIndex": "HEIGHT_HILL",
            "iValue": "10"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_RANGER_ALL",
        "Name": "TEXT_EFFECTUNIT_RANGER_ALL",
        "zIconName": "EFFECTUNIT_RANGER_ALL",
        "aiVegetationFromModifier": {
          "Pair": {
            "zIndex": "VEGETATION_TREES",
            "iValue": "10"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_INFANTRY",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_BRAVE_ALL",
        "Name": "TEXT_EFFECTUNIT_BRAVE_ALL",
        "zIconName": "EFFECTUNIT_BRAVE_ALL",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_MELEE",
            "iValue": "5"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_SHIELDBEARER_ALL",
        "Name": "TEXT_EFFECTUNIT_SHIELDBEARER_ALL",
        "zIconName": "EFFECTUNIT_SHIELDBEARER_ALL",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "iValue": "5"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_HORSEBANE_ALL",
        "Name": "TEXT_EFFECTUNIT_HORSEBANE_ALL",
        "zIconName": "EFFECTUNIT_HORSEBANE_ALL",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "10"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_ENGINEER_ALL",
        "Name": "TEXT_EFFECTUNIT_ENGINEER_ALL",
        "zIconName": "EFFECTUNIT_ENGINEER_ALL",
        "aiUnitTraitModifier": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_SIEGE",
              "iValue": "10"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "iValue": "10"
            }
          ]
        },
        "abUnitTraitValid": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_FIERCE_ALL",
        "Name": "TEXT_EFFECTUNIT_FIERCE_ALL",
        "zIconName": "EFFECTUNIT_FIERCE_ALL",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "iValue": "5"
          }
        },
        "abUnitTraitValid": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "bValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_SHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "EFFECTUNIT_ROUT",
        "Name": "TEXT_EFFECTUNIT_ROUT",
        "zIconName": "EFFECTUNIT_ROUT",
        "bRout": "1"
      },
      {
        "zType": "EFFECTUNIT_PANIC",
        "Name": "TEXT_EFFECTUNIT_PANIC",
        "zIconName": "EFFECTUNIT_PANIC",
        "bPush": "1"
      },
      {
        "zType": "EFFECTUNIT_STEALTH",
        "Name": "TEXT_EFFECTUNIT_STEALTH",
        "zIconName": "EFFECTUNIT_STEALTH",
        "abHideVegetation": {
          "Pair": {
            "zIndex": "VEGETATION_TREES",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_ASSAULT",
        "Name": "TEXT_EFFECTUNIT_ASSAULT",
        "zIconName": "EFFECTUNIT_ASSAULT",
        "iSettlementAttackModifier": "50",
        "iUrbanAttackModifier": "25"
      },
      {
        "zType": "EFFECTUNIT_FORMATION",
        "Name": "TEXT_EFFECTUNIT_FORMATION",
        "zIconName": "EFFECTUNIT_FORMATION",
        "iAdjacentSameDefenseModifier": "20"
      },
      {
        "zType": "EFFECTUNIT_CRIPPLED",
        "Name": "TEXT_EFFECTUNIT_CRIPPLED",
        "zIconName": "EFFECTUNIT_CRIPPLED",
        "iFatigueExtra": "-1"
      },
      {
        "zType": "EFFECTUNIT_SOLDIER",
        "Name": "TEXT_EFFECTUNIT_SOLDIER",
        "zIconName": "EFFECTUNIT_SOLDIER",
        "aiMilitaryKillYield": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_PROPHET",
        "Name": "TEXT_EFFECTUNIT_PROPHET",
        "zIconName": "EFFECTUNIT_PROPHET",
        "aiMilitaryKillYield": {
          "Pair": {
            "zIndex": "YIELD_DISCONTENT",
            "iValue": "-10"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_SURVEYOR",
        "Name": "TEXT_EFFECTUNIT_SURVEYOR",
        "zIconName": "EFFECTUNIT_SURVEYOR",
        "bNoRoadCooldown": "1"
      },
      {
        "zType": "EFFECTUNIT_ASSYRIA",
        "Name": "TEXT_EFFECTUNIT_ASSYRIA",
        "zIconName": "EFFECTUNIT_ASSYRIA",
        "iPillageYieldModifier": "100"
      },
      {
        "zType": "EFFECTUNIT_HERO",
        "Name": "TEXT_EFFECTUNIT_HERO",
        "zIconName": "EFFECTUNIT_HERO",
        "bSkipIcon": "1",
        "bHealNeutral": "1"
      },
      {
        "zType": "EFFECTUNIT_HERO_LEADER",
        "Name": "TEXT_EFFECTUNIT_HERO_LEADER",
        "zIconName": "EFFECTUNIT_HERO_LEADER",
        "bSkipIcon": "1",
        "bLaunchOffensive": "1"
      },
      {
        "zType": "EFFECTUNIT_HERO_MELEE",
        "Name": "TEXT_EFFECTUNIT_HERO_MELEE",
        "zIconName": "EFFECTUNIT_HERO_MELEE",
        "iAttackModifier": "10",
        "bSkipIcon": "1"
      },
      {
        "zType": "EFFECTUNIT_COMMANDER",
        "Name": "TEXT_EFFECTUNIT_COMMANDER",
        "zIconName": "EFFECTUNIT_COMMANDER",
        "iAdjacentSameModifier": "20",
        "bSkipIcon": "1"
      },
      {
        "zType": "EFFECTUNIT_COMMANDER_LEADER",
        "Name": "TEXT_EFFECTUNIT_COMMANDER_LEADER",
        "zIconName": "EFFECTUNIT_COMMANDER_LEADER",
        "iFlankingAttackModifier": "20",
        "bSkipIcon": "1"
      },
      {
        "zType": "EFFECTUNIT_COMMANDER_INFANTRY",
        "Name": "TEXT_EFFECTUNIT_COMMANDER_INFANTRY",
        "zIconName": "EFFECTUNIT_COMMANDER_INFANTRY",
        "iDefenseModifier": "10",
        "bSkipIcon": "1"
      },
      {
        "zType": "EFFECTUNIT_TACTICIAN_RANGED",
        "Name": "TEXT_EFFECTUNIT_TACTICIAN_RANGED",
        "zIconName": "EFFECTUNIT_TACTICIAN_RANGED",
        "bSkipIcon": "1",
        "abHideVegetation": {
          "Pair": {
            "zIndex": "VEGETATION_TREES",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_TACTICIAN",
        "Name": "TEXT_EFFECTUNIT_TACTICIAN",
        "zIconName": "EFFECTUNIT_TACTICIAN",
        "bSkipIcon": "1",
        "bCriticalImmune": "1"
      },
      {
        "zType": "EFFECTUNIT_TACTICIAN_LEADER",
        "Name": "TEXT_EFFECTUNIT_TACTICIAN_LEADER",
        "zIconName": "EFFECTUNIT_TACTICIAN_LEADER",
        "iStrengthModifier": "-20",
        "bSkipIcon": "1",
        "bStun": "1"
      },
      {
        "zType": "EFFECTUNIT_ZEALOT",
        "Name": "TEXT_EFFECTUNIT_ZEALOT",
        "zIconName": "EFFECTUNIT_ZEALOT",
        "bSkipIcon": "1",
        "bLastStand": "1"
      },
      {
        "zType": "EFFECTUNIT_ZEALOT_LEADER",
        "Name": "TEXT_EFFECTUNIT_ZEALOT_LEADER",
        "zIconName": "EFFECTUNIT_ZEALOT_LEADER",
        "iEnlistOnKillChance": "10",
        "bSkipIcon": "1"
      },
      {
        "zType": "EFFECTUNIT_OPINIONFAMILY_FURIOUS",
        "Name": "TEXT_EFFECTUNIT_OPINIONFAMILY_FURIOUS",
        "zIconName": "EFFECTUNIT_FURIOUS",
        "iStrengthModifier": "-20"
      },
      {
        "zType": "EFFECTUNIT_OPINIONFAMILY_ANGRY",
        "Name": "TEXT_EFFECTUNIT_OPINIONFAMILY_ANGRY",
        "zIconName": "EFFECTUNIT_ANGRY",
        "iStrengthModifier": "-10"
      },
      {
        "zType": "EFFECTUNIT_OPINIONFAMILY_UPSET",
        "Name": "TEXT_EFFECTUNIT_OPINIONFAMILY_UPSET",
        "zIconName": "EFFECTUNIT_UPSET",
        "iStrengthModifier": "-5"
      },
      {
        "zType": "EFFECTUNIT_OPINIONFAMILY_PLEASED",
        "Name": "TEXT_EFFECTUNIT_OPINIONFAMILY_PLEASED",
        "zIconName": "EFFECTUNIT_PLEASED",
        "iStrengthModifier": "5"
      },
      {
        "zType": "EFFECTUNIT_OPINIONFAMILY_FRIENDLY",
        "Name": "TEXT_EFFECTUNIT_OPINIONFAMILY_FRIENDLY",
        "zIconName": "EFFECTUNIT_FRIENDLY",
        "iStrengthModifier": "10"
      },
      {
        "zType": "EFFECTUNIT_SWORD_OF_THE_GODS",
        "Name": "TEXT_EFFECTUNIT_SWORD_OF_THE_GODS",
        "zIconName": "EFFECTUNIT_EVENT",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_MELEE",
        "Name": "TEXT_UNITTRAIT_MELEE",
        "zIconName": "UNITTRAIT_MELEE",
        "SourceUnitTrait": "UNITTRAIT_MELEE",
        "iRiverAttackModifier": "-50",
        "bMeleeCounter": "1"
      },
      {
        "zType": "EFFECTUNIT_RANGED",
        "Name": "TEXT_UNITTRAIT_RANGED",
        "zIconName": "UNITTRAIT_RANGED",
        "SourceUnitTrait": "UNITTRAIT_RANGED"
      },
      {
        "zType": "EFFECTUNIT_INFANTRY",
        "Name": "TEXT_UNITTRAIT_INFANTRY",
        "zIconName": "UNITTRAIT_INFANTRY",
        "SourceUnitTrait": "UNITTRAIT_INFANTRY",
        "iUrbanDefenseModifier": "25"
      },
      {
        "zType": "EFFECTUNIT_POLEARM",
        "Name": "TEXT_UNITTRAIT_POLEARM",
        "zIconName": "UNITTRAIT_POLEARM",
        "SourceUnitTrait": "UNITTRAIT_POLEARM",
        "aeUnitTraitZOC": {
          "zValue": "UNITTRAIT_MOUNTED"
        }
      },
      {
        "zType": "EFFECTUNIT_MOUNTED",
        "Name": "TEXT_UNITTRAIT_MOUNTED",
        "zIconName": "UNITTRAIT_MOUNTED",
        "SourceUnitTrait": "UNITTRAIT_MOUNTED",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_SIEGE",
            "iValue": "50"
          }
        }
      },
      {
        "zType": "EFFECTUNIT_HORSE",
        "Name": "TEXT_UNITTRAIT_HORSE",
        "zIconName": "UNITTRAIT_HORSE",
        "SourceUnitTrait": "UNITTRAIT_HORSE"
      },
      {
        "zType": "EFFECTUNIT_CAMEL",
        "Name": "TEXT_UNITTRAIT_CAMEL",
        "zIconName": "UNITTRAIT_CAMEL",
        "SourceUnitTrait": "UNITTRAIT_CAMEL"
      },
      {
        "zType": "EFFECTUNIT_ELEPHANT",
        "Name": "TEXT_UNITTRAIT_ELEPHANT",
        "zIconName": "UNITTRAIT_ELEPHANT",
        "SourceUnitTrait": "UNITTRAIT_ELEPHANT"
      },
      {
        "zType": "EFFECTUNIT_SIEGE",
        "Name": "TEXT_UNITTRAIT_SIEGE",
        "zIconName": "UNITTRAIT_SIEGE",
        "SourceUnitTrait": "UNITTRAIT_SIEGE",
        "iUrbanAttackModifier": "50",
        "bIgnoresDistance": "1"
      },
      {
        "zType": "EFFECTUNIT_SHIP",
        "Name": "TEXT_UNITTRAIT_SHIP",
        "zIconName": "UNITTRAIT_SHIP",
        "SourceUnitTrait": "UNITTRAIT_SHIP"
      },
      {
        "zType": "EFFECTUNIT_TRIBAL",
        "Name": "TEXT_UNITTRAIT_TRIBAL",
        "zIconName": "UNITTRAIT_TRIBAL",
        "SourceUnitTrait": "UNITTRAIT_TRIBAL"
      }
    ]
  }
}
    export default data
    