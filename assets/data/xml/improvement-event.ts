
    const data: XmlImprovementEvent.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "Hint": {
          
        },
        "Class": {
          
        },
        "AssetVariation": {
          
        },
        "AssetConstruction": {
          
        },
        "WorkerAnimation": {
          
        },
        "zIconName": {
          
        },
        "iBuildTurns": {
          
        },
        "iBuildCost": {
          
        },
        "iDevelopTurns": {
          
        },
        "iDevelopRand": {
          
        },
        "iPillageTurns": {
          
        },
        "iRevealChange": {
          
        },
        "iVisionChange": {
          
        },
        "iDefenseModifier": {
          
        },
        "iFreshWaterModifier": {
          
        },
        "iRiverModifier": {
          
        },
        "iSpecialistCost": {
          
        },
        "iVP": {
          
        },
        "iMaxCityCount": {
          
        },
        "iMaxFamilyCount": {
          
        },
        "iMaxPlayerCount": {
          
        },
        "iPrereqLaws": {
          
        },
        "iCitySiteUnits": {
          
        },
        "iDefendUnits": {
          
        },
        "iUnitTurns": {
          
        },
        "iUnitHeal": {
          
        },
        "iLegitimacy": {
          
        },
        "iOpinionReligion": {
          
        },
        "bBuild": {
          
        },
        "bHolyCity": {
          
        },
        "bTerritoryOnly": {
          
        },
        "bUrban": {
          
        },
        "bRequiresUrban": {
          
        },
        "bSpreadsBorders": {
          
        },
        "bNoAdjacentReligion": {
          
        },
        "bNoVegetation": {
          
        },
        "bFreshWaterSource": {
          
        },
        "bFreshWaterValid": {
          
        },
        "bRiverValid": {
          
        },
        "bRotateTowardsLand": {
          
        },
        "bRotateToRiverEdge": {
          
        },
        "bCoastLandValid": {
          
        },
        "bCoastWaterValid": {
          
        },
        "bCityValid": {
          
        },
        "bHolyCityValid": {
          
        },
        "bPermanent": {
          
        },
        "bWonder": {
          
        },
        "bPause": {
          
        },
        "bHeal": {
          
        },
        "bBonus": {
          
        },
        "bCitySite": {
          
        },
        "bTribe": {
          
        },
        "bRemoveBorder": {
          
        },
        "bRemoveBonus": {
          
        },
        "bNoAnalytics": {
          
        },
        "bText": {
          
        },
        "Achievement": {
          
        },
        "NationPrereq": {
          
        },
        "ReligionPrereq": {
          
        },
        "ReligionSpread": {
          
        },
        "CulturePrereq": {
          
        },
        "AdjacentImprovementPrereq": {
          
        },
        "AdjacentImprovementClassPrereq": {
          
        },
        "ImprovementPrereq": {
          
        },
        "UpgradeImprovement": {
          
        },
        "DevelopImprovement": {
          
        },
        "BonusImprovement": {
          
        },
        "EffectCityPrereq": {
          
        },
        "EffectCity": {
          
        },
        "EffectPlayer": {
          
        },
        "UnitDefend": {
          
        },
        "Bonus": {
          
        },
        "BonusCities": {
          
        },
        "aiYieldCost": {
          
        },
        "aiYieldOutput": {
          
        },
        "aiWonderYieldOutput": {
          
        },
        "aiAdjacentResourceYieldOutput": {
          
        },
        "aiTradeNetworkYieldOutput": {
          
        },
        "aiYieldPillage": {
          
        },
        "aiYieldFreshWaterModifier": {
          
        },
        "aiYieldRiverModifier": {
          
        },
        "aiAdjacentImprovementModifier": {
          
        },
        "aiAdjacentImprovementClassModifier": {
          
        },
        "aiUnitTraitHeal": {
          
        },
        "aiUnitTraitXP": {
          
        },
        "aiUnitDie": {
          
        },
        "aiBonusDie": {
          
        },
        "abTerrainValid": {
          
        },
        "abTerrainInvalid": {
          
        },
        "abHeightValid": {
          
        },
        "abHeightInvalid": {
          
        },
        "abHeightAdjacentValid": {
          
        },
        "abVegetationValid": {
          
        },
        "abNoBaseOutput": {
          
        },
        "aeResourceAssetVariation": {
          
        },
        "aeTribeUnitDefend": {
          
        },
        "aaiAdjacentImprovementClassYield": {
          
        },
        "aaiTerrainYieldModifier": {
          
        },
        "aaiHeightYieldModifier": {
          
        },
        "aaiAdjacentHeightYieldModifier": {
          
        },
        "aaiTribeUnitDie": {
          
        },
        "zAudioLoopWhenBuilding": {
          
        },
        "zAudioSwitchName": {
          
        }
      },
      {
        "zType": "IMPROVEMENT_LAURION_MINE",
        "Name": "TEXT_IMPROVEMENT_LAURION_MINE",
        "Class": "IMPROVEMENTCLASS_MINE",
        "AssetVariation": "ASSET_VARIATION_IMPROVEMENT_LAURION_MINE",
        "zIconName": "IMPROVEMENT_MINE",
        "iPillageTurns": "10",
        "bTerritoryOnly": "1",
        "bNoVegetation": "1",
        "bText": "1",
        "aiYieldOutput": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "100"
          }
        },
        "aiYieldPillage": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "20"
          }
        },
        "aiAdjacentImprovementModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENT_MINE",
            "iValue": "20"
          }
        },
        "abTerrainValid": {
          "Pair": [
            {
              "zIndex": "TERRAIN_LUSH",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_TEMPERATE",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_ARID",
              "bValue": "1"
            }
          ]
        },
        "abHeightValid": {
          "Pair": {
            "zIndex": "HEIGHT_HILL",
            "bValue": "1"
          }
        },
        "abNoBaseOutput": {
          "Pair": [
            {
              "zIndex": "RESOURCE_SALT",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_GEM",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_GOLD",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_SILVER",
              "bValue": "1"
            }
          ]
        },
        "aeResourceAssetVariation": {
          "Pair": [
            {
              "zIndex": "RESOURCE_ORE",
              "zValue": "ASSET_VARIATION_IMPROVEMENT_MINE_ORE"
            },
            {
              "zIndex": "RESOURCE_GOLD",
              "zValue": "ASSET_VARIATION_IMPROVEMENT_MINE_GOLD"
            },
            {
              "zIndex": "RESOURCE_GEM",
              "zValue": "ASSET_VARIATION_IMPROVEMENT_MINE_GEM"
            },
            {
              "zIndex": "RESOURCE_SILVER",
              "zValue": "ASSET_VARIATION_IMPROVEMENT_MINE_SILVER"
            },
            {
              "zIndex": "RESOURCE_SALT",
              "zValue": "ASSET_VARIATION_IMPROVEMENT_MINE_SALT"
            }
          ]
        },
        "aaiTerrainYieldModifier": {
          "Pair": {
            "zIndex": "TERRAIN_TUNDRA",
            "SubPair": {
              "zSubIndex": "YIELD_IRON",
              "iValue": "-20"
            }
          }
        },
        "aaiHeightYieldModifier": {
          "Pair": {
            "zIndex": "HEIGHT_HILL",
            "SubPair": {
              "zSubIndex": "YIELD_IRON",
              "iValue": "50"
            }
          }
        }
      },
      {
        "zType": "IMPROVEMENT_FOREST_FIRE_TOMB",
        "Name": "TEXT_IMPROVEMENT_FOREST_FIRE_TOMB",
        "AssetVariation": "ASSET_VARIATION_IMPROVEMENT_SHRINE_UNDERWORLD",
        "zIconName": "IMPROVEMENT_SHRINE_UNDERWORLD",
        "iPillageTurns": "10",
        "bTerritoryOnly": "1",
        "bNoVegetation": "1",
        "bText": "1",
        "aiYieldOutput": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "20"
          }
        },
        "aiYieldPillage": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "50"
          }
        },
        "abTerrainValid": {
          "Pair": [
            {
              "zIndex": "TERRAIN_LUSH",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_TEMPERATE",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_ARID",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENT_FOREST_FIRE_MONUMENT",
        "Name": "TEXT_IMPROVEMENT_FOREST_FIRE_MONUMENT",
        "AssetVariation": "ASSET_VARIATION_IMPROVEMENT_SHRINE_WAR",
        "zIconName": "IMPROVEMENT_SHRINE_WAR",
        "iPillageTurns": "10",
        "bTerritoryOnly": "1",
        "bNoVegetation": "1",
        "bText": "1",
        "aiYieldOutput": {
          "Pair": [
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "40"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "100"
            }
          ]
        },
        "aiYieldPillage": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "50"
          }
        },
        "abTerrainValid": {
          "Pair": [
            {
              "zIndex": "TERRAIN_LUSH",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_TEMPERATE",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_ARID",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENT_GODS_CONSORT_SHRINE",
        "Name": "TEXT_IMPROVEMENT_GODS_CONSORT_SHRINE",
        "AssetVariation": "ASSET_VARIATION_IMPROVEMENT_SHRINE_LOVE",
        "zIconName": "IMPROVEMENT_SHRINE_LOVE",
        "iPillageTurns": "10",
        "bTerritoryOnly": "1",
        "bUrban": "1",
        "bRequiresUrban": "1",
        "bNoVegetation": "1",
        "bText": "1",
        "EffectCity": "EFFECTCITY_IMPROVEMENT_GODS_CONSORT_SHRINE",
        "aiYieldOutput": {
          "Pair": {
            "zIndex": "YIELD_CULTURE",
            "iValue": "20"
          }
        },
        "aiYieldPillage": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "20"
          }
        },
        "abTerrainValid": {
          "Pair": [
            {
              "zIndex": "TERRAIN_URBAN",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_LUSH",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_TEMPERATE",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_ARID",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENT_SHRINE_TRIBE_PAGANISM",
        "Name": "TEXT_IMPROVEMENT_SHRINE_TRIBE_PAGANISM",
        "AssetVariation": "ASSET_VARIATION_IMPROVEMENT_SHRINE_WISDOM",
        "zIconName": "IMPROVEMENT_SHRINE_WISDOM",
        "iPillageTurns": "10",
        "bTerritoryOnly": "1",
        "bUrban": "1",
        "bNoVegetation": "1",
        "bText": "1",
        "aiYieldOutput": {
          "Pair": [
            {
              "zIndex": "YIELD_CULTURE",
              "iValue": "30"
            },
            {
              "zIndex": "YIELD_SCIENCE",
              "iValue": "30"
            }
          ]
        },
        "aiYieldPillage": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "20"
          }
        },
        "abTerrainValid": {
          "Pair": [
            {
              "zIndex": "TERRAIN_URBAN",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_LUSH",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_TEMPERATE",
              "bValue": "1"
            },
            {
              "zIndex": "TERRAIN_ARID",
              "bValue": "1"
            }
          ]
        }
      }
    ]
  }
}
    export default data
    