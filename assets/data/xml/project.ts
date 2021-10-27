
    const data: XmlProject.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "zIcon": {
          
        },
        "ProjectAsset": {
          
        },
        "iCivics": {
          
        },
        "iMaxCount": {
          
        },
        "iFreeNoCharacters": {
          
        },
        "iExtraPopRequired": {
          
        },
        "bHidden": {
          
        },
        "bRepeat": {
          
        },
        "bNoHurry": {
          
        },
        "bRequiresRiver": {
          
        },
        "bRequiresCoast": {
          
        },
        "bRequiresDamage": {
          
        },
        "bCaptureDestroy": {
          
        },
        "Bonus": {
          
        },
        "CityProject": {
          
        },
        "EffectCity": {
          
        },
        "EffectCityExtra": {
          
        },
        "EffectPlayer": {
          
        },
        "MinimumCulture": {
          
        },
        "RequiresCulture": {
          
        },
        "TechPrereq": {
          
        },
        "ProjectPrereq": {
          
        },
        "EffectCityPrereq": {
          
        },
        "EffectPlayerPrereq": {
          
        },
        "CapitalEffectPlayerPrereq": {
          
        },
        "aiYieldCost": {
          
        },
        "aiYieldModifier": {
          
        },
        "abInvalidBy": {
          
        }
      },
      {
        "zType": "PROJECT_REPAIR",
        "Name": "TEXT_PROJECT_REPAIR",
        "zIcon": "PROJECT_REPAIR",
        "bRepeat": "1",
        "bNoHurry": "1",
        "bRequiresDamage": "1",
        "Bonus": "BONUS_PROJECT_REPAIRS"
      },
      {
        "zType": "PROJECT_GOVERNOR",
        "Name": "TEXT_PROJECT_GOVERNOR",
        "zIcon": "PROJECT_GOVERNOR",
        "iFreeNoCharacters": "1",
        "bHidden": "1",
        "CityProject": "PROJECT_GOVERNOR",
        "EffectCity": "EFFECTCITY_PROJECT_GOVERNOR"
      },
      {
        "zType": "PROJECT_WALLS",
        "Name": "TEXT_PROJECT_WALLS",
        "zIcon": "PROJECT_WALLS",
        "ProjectAsset": "ASSET_VARIATION_PROJECT_WALLS",
        "iCivics": "60",
        "iMaxCount": "1",
        "bCaptureDestroy": "1",
        "CityProject": "PROJECT_WALLS",
        "EffectCity": "EFFECTCITY_PROJECT_WALLS",
        "TechPrereq": "TECH_POLIS",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "40"
          }
        }
      },
      {
        "zType": "PROJECT_MOAT",
        "Name": "TEXT_PROJECT_MOAT",
        "zIcon": "PROJECT_MOAT",
        "ProjectAsset": "ASSET_VARIATION_PROJECT_MOAT",
        "iCivics": "80",
        "iMaxCount": "1",
        "bCaptureDestroy": "1",
        "CityProject": "PROJECT_MOAT",
        "EffectCity": "EFFECTCITY_PROJECT_MOAT",
        "TechPrereq": "TECH_PORTCULLIS",
        "ProjectPrereq": "PROJECT_WALLS",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "60"
          }
        }
      },
      {
        "zType": "PROJECT_TOWERS",
        "Name": "TEXT_PROJECT_TOWERS",
        "zIcon": "PROJECT_TOWERS",
        "ProjectAsset": "ASSET_VARIATION_PROJECT_TOWERS",
        "iCivics": "100",
        "iMaxCount": "1",
        "bCaptureDestroy": "1",
        "CityProject": "PROJECT_TOWERS",
        "EffectCity": "EFFECTCITY_PROJECT_TOWERS",
        "TechPrereq": "TECH_MARTIAL_CODE",
        "ProjectPrereq": "PROJECT_MOAT",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "PROJECT_TREASURY_1",
        "Name": "TEXT_PROJECT_TREASURY_1",
        "zIcon": "PROJECT_TREASURY_1",
        "iCivics": "40",
        "iMaxCount": "1",
        "Bonus": "BONUS_PROJECT_TREASURY_1",
        "CityProject": "PROJECT_TREASURY_1",
        "EffectCity": "EFFECTCITY_PROJECT_TREASURY_1",
        "EffectCityExtra": "EFFECTCITY_PROJECT_TREASURY",
        "MinimumCulture": "CULTURE_WEAK",
        "TechPrereq": "TECH_ADMINISTRATION",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "20"
          }
        },
        "abInvalidBy": {
          "Pair": [
            {
              "zIndex": "PROJECT_TREASURY_2",
              "bValue": "1"
            },
            {
              "zIndex": "PROJECT_TREASURY_3",
              "bValue": "1"
            },
            {
              "zIndex": "PROJECT_TREASURY_4",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "PROJECT_TREASURY_2",
        "Name": "TEXT_PROJECT_TREASURY_2",
        "zIcon": "PROJECT_TREASURY_2",
        "iCivics": "60",
        "iMaxCount": "1",
        "Bonus": "BONUS_PROJECT_TREASURY_2",
        "CityProject": "PROJECT_TREASURY_2",
        "EffectCity": "EFFECTCITY_PROJECT_TREASURY_2",
        "EffectCityExtra": "EFFECTCITY_PROJECT_TREASURY",
        "MinimumCulture": "CULTURE_DEVELOPING",
        "ProjectPrereq": "PROJECT_TREASURY_1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "40"
          }
        },
        "abInvalidBy": {
          "Pair": [
            {
              "zIndex": "PROJECT_TREASURY_3",
              "bValue": "1"
            },
            {
              "zIndex": "PROJECT_TREASURY_4",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "PROJECT_TREASURY_3",
        "Name": "TEXT_PROJECT_TREASURY_3",
        "zIcon": "PROJECT_TREASURY_3",
        "iCivics": "80",
        "iMaxCount": "1",
        "Bonus": "BONUS_PROJECT_TREASURY_3",
        "CityProject": "PROJECT_TREASURY_3",
        "EffectCity": "EFFECTCITY_PROJECT_TREASURY_3",
        "EffectCityExtra": "EFFECTCITY_PROJECT_TREASURY",
        "MinimumCulture": "CULTURE_STRONG",
        "ProjectPrereq": "PROJECT_TREASURY_2",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "60"
          }
        },
        "abInvalidBy": {
          "Pair": {
            "zIndex": "PROJECT_TREASURY_4",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "PROJECT_TREASURY_4",
        "Name": "TEXT_PROJECT_TREASURY_4",
        "zIcon": "PROJECT_TREASURY_4",
        "iCivics": "100",
        "iMaxCount": "1",
        "Bonus": "BONUS_PROJECT_TREASURY_4",
        "CityProject": "PROJECT_TREASURY_4",
        "EffectCity": "EFFECTCITY_PROJECT_TREASURY_4",
        "EffectCityExtra": "EFFECTCITY_PROJECT_TREASURY",
        "MinimumCulture": "CULTURE_LEGENDARY",
        "ProjectPrereq": "PROJECT_TREASURY_3",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "PROJECT_FORUM_1",
        "Name": "TEXT_PROJECT_FORUM_1",
        "zIcon": "PROJECT_FORUM_1",
        "iCivics": "40",
        "iMaxCount": "1",
        "Bonus": "BONUS_PROJECT_FORUM_1",
        "CityProject": "PROJECT_FORUM_1",
        "EffectCity": "EFFECTCITY_PROJECT_FORUM_1",
        "EffectCityExtra": "EFFECTCITY_PROJECT_FORUM",
        "MinimumCulture": "CULTURE_WEAK",
        "TechPrereq": "TECH_RHETORIC",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "20"
          }
        },
        "abInvalidBy": {
          "Pair": [
            {
              "zIndex": "PROJECT_FORUM_2",
              "bValue": "1"
            },
            {
              "zIndex": "PROJECT_FORUM_3",
              "bValue": "1"
            },
            {
              "zIndex": "PROJECT_FORUM_4",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "PROJECT_FORUM_2",
        "Name": "TEXT_PROJECT_FORUM_2",
        "zIcon": "PROJECT_FORUM_2",
        "iCivics": "60",
        "iMaxCount": "1",
        "Bonus": "BONUS_PROJECT_FORUM_2",
        "CityProject": "PROJECT_FORUM_2",
        "EffectCity": "EFFECTCITY_PROJECT_FORUM_2",
        "EffectCityExtra": "EFFECTCITY_PROJECT_FORUM",
        "MinimumCulture": "CULTURE_DEVELOPING",
        "ProjectPrereq": "PROJECT_FORUM_1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "40"
          }
        },
        "abInvalidBy": {
          "Pair": [
            {
              "zIndex": "PROJECT_FORUM_3",
              "bValue": "1"
            },
            {
              "zIndex": "PROJECT_FORUM_4",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "PROJECT_FORUM_3",
        "Name": "TEXT_PROJECT_FORUM_3",
        "zIcon": "PROJECT_FORUM_3",
        "iCivics": "80",
        "iMaxCount": "1",
        "Bonus": "BONUS_PROJECT_FORUM_3",
        "CityProject": "PROJECT_FORUM_3",
        "EffectCity": "EFFECTCITY_PROJECT_FORUM_3",
        "EffectCityExtra": "EFFECTCITY_PROJECT_FORUM",
        "MinimumCulture": "CULTURE_STRONG",
        "ProjectPrereq": "PROJECT_FORUM_2",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "60"
          }
        },
        "abInvalidBy": {
          "Pair": {
            "zIndex": "PROJECT_FORUM_4",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "PROJECT_FORUM_4",
        "Name": "TEXT_PROJECT_FORUM_4",
        "zIcon": "PROJECT_FORUM_4",
        "iCivics": "100",
        "iMaxCount": "1",
        "Bonus": "BONUS_PROJECT_FORUM_4",
        "CityProject": "PROJECT_FORUM_4",
        "EffectCity": "EFFECTCITY_PROJECT_FORUM_4",
        "EffectCityExtra": "EFFECTCITY_PROJECT_FORUM",
        "MinimumCulture": "CULTURE_LEGENDARY",
        "ProjectPrereq": "PROJECT_FORUM_3",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "PROJECT_ARCHIVE_1",
        "Name": "TEXT_PROJECT_ARCHIVE_1",
        "zIcon": "PROJECT_ARCHIVE_1",
        "iCivics": "40",
        "iMaxCount": "1",
        "Bonus": "BONUS_PROJECT_ARCHIVE_1",
        "CityProject": "PROJECT_ARCHIVE_1",
        "EffectCity": "EFFECTCITY_PROJECT_ARCHIVE_1",
        "EffectCityExtra": "EFFECTCITY_PROJECT_ARCHIVE",
        "MinimumCulture": "CULTURE_WEAK",
        "TechPrereq": "TECH_METAPHYSICS",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "20"
          }
        },
        "abInvalidBy": {
          "Pair": [
            {
              "zIndex": "PROJECT_ARCHIVE_2",
              "bValue": "1"
            },
            {
              "zIndex": "PROJECT_ARCHIVE_3",
              "bValue": "1"
            },
            {
              "zIndex": "PROJECT_ARCHIVE_4",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "PROJECT_ARCHIVE_2",
        "Name": "TEXT_PROJECT_ARCHIVE_2",
        "zIcon": "PROJECT_ARCHIVE_2",
        "iCivics": "60",
        "iMaxCount": "1",
        "Bonus": "BONUS_PROJECT_ARCHIVE_2",
        "CityProject": "PROJECT_ARCHIVE_2",
        "EffectCity": "EFFECTCITY_PROJECT_ARCHIVE_2",
        "EffectCityExtra": "EFFECTCITY_PROJECT_ARCHIVE",
        "MinimumCulture": "CULTURE_DEVELOPING",
        "ProjectPrereq": "PROJECT_ARCHIVE_1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "40"
          }
        },
        "abInvalidBy": {
          "Pair": [
            {
              "zIndex": "PROJECT_ARCHIVE_3",
              "bValue": "1"
            },
            {
              "zIndex": "PROJECT_ARCHIVE_4",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "PROJECT_ARCHIVE_3",
        "Name": "TEXT_PROJECT_ARCHIVE_3",
        "zIcon": "PROJECT_ARCHIVE_3",
        "iCivics": "80",
        "iMaxCount": "1",
        "Bonus": "BONUS_PROJECT_ARCHIVE_3",
        "CityProject": "PROJECT_ARCHIVE_3",
        "EffectCity": "EFFECTCITY_PROJECT_ARCHIVE_3",
        "EffectCityExtra": "EFFECTCITY_PROJECT_ARCHIVE",
        "MinimumCulture": "CULTURE_STRONG",
        "ProjectPrereq": "PROJECT_ARCHIVE_2",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "60"
          }
        },
        "abInvalidBy": {
          "Pair": {
            "zIndex": "PROJECT_ARCHIVE_4",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "PROJECT_ARCHIVE_4",
        "Name": "TEXT_PROJECT_ARCHIVE_4",
        "zIcon": "PROJECT_ARCHIVE_4",
        "iCivics": "100",
        "iMaxCount": "1",
        "Bonus": "BONUS_PROJECT_ARCHIVE_4",
        "CityProject": "PROJECT_ARCHIVE_4",
        "EffectCity": "EFFECTCITY_PROJECT_ARCHIVE_4",
        "EffectCityExtra": "EFFECTCITY_PROJECT_ARCHIVE",
        "MinimumCulture": "CULTURE_LEGENDARY",
        "ProjectPrereq": "PROJECT_ARCHIVE_3",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "80"
          }
        }
      },
      {
        "zType": "PROJECT_DECREE_1",
        "Name": "TEXT_PROJECT_DECREE_1",
        "zIcon": "PROJECT_DECREE_1",
        "iCivics": "40",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_DECREE_1",
        "RequiresCulture": "CULTURE_WEAK",
        "EffectCityPrereq": "EFFECTCITY_FAMILYCLASS_STATESMEN_SEAT_DECREE",
        "CapitalEffectPlayerPrereq": "EFFECTPLAYER_LAW_CONSTITUTION_DECREE"
      },
      {
        "zType": "PROJECT_DECREE_2",
        "Name": "TEXT_PROJECT_DECREE_2",
        "zIcon": "PROJECT_DECREE_2",
        "iCivics": "60",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_DECREE_2",
        "RequiresCulture": "CULTURE_DEVELOPING",
        "EffectCityPrereq": "EFFECTCITY_FAMILYCLASS_STATESMEN_SEAT_DECREE",
        "CapitalEffectPlayerPrereq": "EFFECTPLAYER_LAW_CONSTITUTION_DECREE"
      },
      {
        "zType": "PROJECT_DECREE_3",
        "Name": "TEXT_PROJECT_DECREE_3",
        "zIcon": "PROJECT_DECREE_3",
        "iCivics": "80",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_DECREE_3",
        "RequiresCulture": "CULTURE_STRONG",
        "EffectCityPrereq": "EFFECTCITY_FAMILYCLASS_STATESMEN_SEAT_DECREE",
        "CapitalEffectPlayerPrereq": "EFFECTPLAYER_LAW_CONSTITUTION_DECREE"
      },
      {
        "zType": "PROJECT_DECREE_4",
        "Name": "TEXT_PROJECT_DECREE_4",
        "zIcon": "PROJECT_DECREE_4",
        "iCivics": "100",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_DECREE_4",
        "RequiresCulture": "CULTURE_LEGENDARY",
        "EffectCityPrereq": "EFFECTCITY_FAMILYCLASS_STATESMEN_SEAT_DECREE",
        "CapitalEffectPlayerPrereq": "EFFECTPLAYER_LAW_CONSTITUTION_DECREE"
      },
      {
        "zType": "PROJECT_FESTIVAL",
        "Name": "TEXT_PROJECT_FESTIVAL",
        "zIcon": "PROJECT_FESTIVAL_1",
        "bHidden": "1",
        "EffectCity": "EFFECTCITY_PROJECT_FESTIVAL"
      },
      {
        "zType": "PROJECT_FESTIVAL_1",
        "Name": "TEXT_PROJECT_FESTIVAL_1",
        "zIcon": "PROJECT_FESTIVAL_1",
        "iCivics": "40",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_FESTIVAL_1",
        "CityProject": "PROJECT_FESTIVAL",
        "RequiresCulture": "CULTURE_WEAK"
      },
      {
        "zType": "PROJECT_FESTIVAL_2",
        "Name": "TEXT_PROJECT_FESTIVAL_2",
        "zIcon": "PROJECT_FESTIVAL_2",
        "iCivics": "60",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_FESTIVAL_2",
        "CityProject": "PROJECT_FESTIVAL",
        "RequiresCulture": "CULTURE_DEVELOPING"
      },
      {
        "zType": "PROJECT_FESTIVAL_3",
        "Name": "TEXT_PROJECT_FESTIVAL_3",
        "zIcon": "PROJECT_FESTIVAL_3",
        "iCivics": "80",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_FESTIVAL_3",
        "CityProject": "PROJECT_FESTIVAL",
        "RequiresCulture": "CULTURE_STRONG"
      },
      {
        "zType": "PROJECT_FESTIVAL_4",
        "Name": "TEXT_PROJECT_FESTIVAL_4",
        "zIcon": "PROJECT_FESTIVAL_4",
        "iCivics": "100",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_FESTIVAL_4",
        "CityProject": "PROJECT_FESTIVAL",
        "RequiresCulture": "CULTURE_LEGENDARY"
      },
      {
        "zType": "PROJECT_INQUIRY",
        "Name": "TEXT_PROJECT_INQUIRY",
        "zIcon": "PROJECT_INQUIRY_1",
        "bHidden": "1",
        "EffectCity": "EFFECTCITY_PROJECT_INQUIRY",
        "EffectCityPrereq": "EFFECTCITY_FAMILYCLASS_SAGES_SEAT_INQUIRY",
        "CapitalEffectPlayerPrereq": "EFFECTPLAYER_TRAIT_SCHOLAR_ARCHETYPE_INQUIRY"
      },
      {
        "zType": "PROJECT_INQUIRY_1",
        "Name": "TEXT_PROJECT_INQUIRY_1",
        "zIcon": "PROJECT_INQUIRY_1",
        "iCivics": "40",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_INQUIRY_1",
        "CityProject": "PROJECT_INQUIRY",
        "RequiresCulture": "CULTURE_WEAK",
        "EffectCityPrereq": "EFFECTCITY_FAMILYCLASS_SAGES_SEAT_INQUIRY",
        "CapitalEffectPlayerPrereq": "EFFECTPLAYER_TRAIT_SCHOLAR_ARCHETYPE_INQUIRY"
      },
      {
        "zType": "PROJECT_INQUIRY_2",
        "Name": "TEXT_PROJECT_INQUIRY_2",
        "zIcon": "PROJECT_INQUIRY_2",
        "iCivics": "60",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_INQUIRY_2",
        "CityProject": "PROJECT_INQUIRY",
        "RequiresCulture": "CULTURE_DEVELOPING",
        "EffectCityPrereq": "EFFECTCITY_FAMILYCLASS_SAGES_SEAT_INQUIRY",
        "CapitalEffectPlayerPrereq": "EFFECTPLAYER_TRAIT_SCHOLAR_ARCHETYPE_INQUIRY"
      },
      {
        "zType": "PROJECT_INQUIRY_3",
        "Name": "TEXT_PROJECT_INQUIRY_3",
        "zIcon": "PROJECT_INQUIRY_3",
        "iCivics": "80",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_INQUIRY_3",
        "CityProject": "PROJECT_INQUIRY",
        "RequiresCulture": "CULTURE_STRONG",
        "EffectCityPrereq": "EFFECTCITY_FAMILYCLASS_SAGES_SEAT_INQUIRY",
        "CapitalEffectPlayerPrereq": "EFFECTPLAYER_TRAIT_SCHOLAR_ARCHETYPE_INQUIRY"
      },
      {
        "zType": "PROJECT_INQUIRY_4",
        "Name": "TEXT_PROJECT_INQUIRY_4",
        "zIcon": "PROJECT_INQUIRY_4",
        "iCivics": "100",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_INQUIRY_4",
        "CityProject": "PROJECT_INQUIRY",
        "RequiresCulture": "CULTURE_LEGENDARY",
        "EffectCityPrereq": "EFFECTCITY_FAMILYCLASS_SAGES_SEAT_INQUIRY",
        "CapitalEffectPlayerPrereq": "EFFECTPLAYER_TRAIT_SCHOLAR_ARCHETYPE_INQUIRY"
      },
      {
        "zType": "PROJECT_HUNT",
        "Name": "TEXT_PROJECT_HUNT",
        "zIcon": "PROJECT_HUNT_1",
        "bHidden": "1",
        "EffectCity": "EFFECTCITY_PROJECT_HUNT",
        "EffectCityPrereq": "EFFECTCITY_FAMILYCLASS_HUNTERS_SEAT_HUNT"
      },
      {
        "zType": "PROJECT_HUNT_1",
        "Name": "TEXT_PROJECT_HUNT_1",
        "zIcon": "PROJECT_HUNT_1",
        "iCivics": "40",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_HUNT_1",
        "CityProject": "PROJECT_HUNT",
        "RequiresCulture": "CULTURE_WEAK",
        "EffectCityPrereq": "EFFECTCITY_FAMILYCLASS_HUNTERS_SEAT_HUNT"
      },
      {
        "zType": "PROJECT_HUNT_2",
        "Name": "TEXT_PROJECT_HUNT_2",
        "zIcon": "PROJECT_HUNT_2",
        "iCivics": "60",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_HUNT_2",
        "CityProject": "PROJECT_HUNT",
        "RequiresCulture": "CULTURE_DEVELOPING",
        "EffectCityPrereq": "EFFECTCITY_FAMILYCLASS_HUNTERS_SEAT_HUNT"
      },
      {
        "zType": "PROJECT_HUNT_3",
        "Name": "TEXT_PROJECT_HUNT_3",
        "zIcon": "PROJECT_HUNT_3",
        "iCivics": "80",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_HUNT_3",
        "CityProject": "PROJECT_HUNT",
        "RequiresCulture": "CULTURE_STRONG",
        "EffectCityPrereq": "EFFECTCITY_FAMILYCLASS_HUNTERS_SEAT_HUNT"
      },
      {
        "zType": "PROJECT_HUNT_4",
        "Name": "TEXT_PROJECT_HUNT_4",
        "zIcon": "PROJECT_HUNT_4",
        "iCivics": "100",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_HUNT_4",
        "CityProject": "PROJECT_HUNT",
        "RequiresCulture": "CULTURE_LEGENDARY",
        "EffectCityPrereq": "EFFECTCITY_FAMILYCLASS_HUNTERS_SEAT_HUNT"
      },
      {
        "zType": "PROJECT_OLYMPICS",
        "Name": "TEXT_PROJECT_OLYMPICS",
        "zIcon": "PROJECT_OLYMPICS_1",
        "bHidden": "1",
        "EffectCity": "EFFECTCITY_PROJECT_OLYMPICS",
        "EffectPlayerPrereq": "EFFECTPLAYER_NATION_GREECE_OLYMPICS"
      },
      {
        "zType": "PROJECT_OLYMPICS_1",
        "Name": "TEXT_PROJECT_OLYMPICS_1",
        "zIcon": "PROJECT_OLYMPICS_1",
        "iCivics": "40",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_OLYMPICS_1",
        "CityProject": "PROJECT_OLYMPICS",
        "RequiresCulture": "CULTURE_WEAK",
        "EffectPlayerPrereq": "EFFECTPLAYER_NATION_GREECE_OLYMPICS"
      },
      {
        "zType": "PROJECT_OLYMPICS_2",
        "Name": "TEXT_PROJECT_OLYMPICS_2",
        "zIcon": "PROJECT_OLYMPICS_2",
        "iCivics": "60",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_OLYMPICS_2",
        "CityProject": "PROJECT_OLYMPICS",
        "RequiresCulture": "CULTURE_DEVELOPING",
        "EffectPlayerPrereq": "EFFECTPLAYER_NATION_GREECE_OLYMPICS"
      },
      {
        "zType": "PROJECT_OLYMPICS_3",
        "Name": "TEXT_PROJECT_OLYMPICS_3",
        "zIcon": "PROJECT_OLYMPICS_3",
        "iCivics": "80",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_OLYMPICS_3",
        "CityProject": "PROJECT_OLYMPICS",
        "RequiresCulture": "CULTURE_STRONG",
        "EffectPlayerPrereq": "EFFECTPLAYER_NATION_GREECE_OLYMPICS"
      },
      {
        "zType": "PROJECT_OLYMPICS_4",
        "Name": "TEXT_PROJECT_OLYMPICS_4",
        "zIcon": "PROJECT_OLYMPICS_4",
        "iCivics": "100",
        "bRepeat": "1",
        "Bonus": "BONUS_PROJECT_OLYMPICS_4",
        "CityProject": "PROJECT_OLYMPICS",
        "RequiresCulture": "CULTURE_LEGENDARY",
        "EffectPlayerPrereq": "EFFECTPLAYER_NATION_GREECE_OLYMPICS"
      },
      {
        "zType": "PROJECT_CONVOY",
        "Name": "TEXT_PROJECT_CONVOY",
        "zIcon": "PROJECT_CONVOY_1",
        "bHidden": "1",
        "EffectCity": "EFFECTCITY_PROJECT_CONVOY",
        "EffectPlayerPrereq": "EFFECTPLAYER_LAW_TRADE_LEAGUE_CONVOY"
      },
      {
        "zType": "PROJECT_CONVOY_1",
        "Name": "TEXT_PROJECT_CONVOY_1",
        "zIcon": "PROJECT_CONVOY_1",
        "iCivics": "40",
        "bRepeat": "1",
        "bNoHurry": "1",
        "Bonus": "BONUS_PROJECT_CONVOY_1",
        "CityProject": "PROJECT_CONVOY",
        "RequiresCulture": "CULTURE_WEAK",
        "EffectPlayerPrereq": "EFFECTPLAYER_LAW_TRADE_LEAGUE_CONVOY"
      },
      {
        "zType": "PROJECT_CONVOY_2",
        "Name": "TEXT_PROJECT_CONVOY_2",
        "zIcon": "PROJECT_CONVOY_2",
        "iCivics": "60",
        "bRepeat": "1",
        "bNoHurry": "1",
        "Bonus": "BONUS_PROJECT_CONVOY_2",
        "CityProject": "PROJECT_CONVOY",
        "RequiresCulture": "CULTURE_DEVELOPING",
        "EffectPlayerPrereq": "EFFECTPLAYER_LAW_TRADE_LEAGUE_CONVOY"
      },
      {
        "zType": "PROJECT_CONVOY_3",
        "Name": "TEXT_PROJECT_CONVOY_3",
        "zIcon": "PROJECT_CONVOY_3",
        "iCivics": "80",
        "bRepeat": "1",
        "bNoHurry": "1",
        "Bonus": "BONUS_PROJECT_CONVOY_3",
        "CityProject": "PROJECT_CONVOY",
        "RequiresCulture": "CULTURE_STRONG",
        "EffectPlayerPrereq": "EFFECTPLAYER_LAW_TRADE_LEAGUE_CONVOY"
      },
      {
        "zType": "PROJECT_CONVOY_4",
        "Name": "TEXT_PROJECT_CONVOY_4",
        "zIcon": "PROJECT_CONVOY_4",
        "iCivics": "100",
        "bRepeat": "1",
        "bNoHurry": "1",
        "Bonus": "BONUS_PROJECT_CONVOY_4",
        "CityProject": "PROJECT_CONVOY",
        "RequiresCulture": "CULTURE_LEGENDARY",
        "EffectPlayerPrereq": "EFFECTPLAYER_LAW_TRADE_LEAGUE_CONVOY"
      },
      {
        "zType": "PROJECT_COUNCIL_1",
        "Name": "TEXT_PROJECT_COUNCIL_1",
        "zIcon": "PROJECT_COUNCIL_1",
        "bRepeat": "1",
        "bNoHurry": "1",
        "RequiresCulture": "CULTURE_WEAK",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "60"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "60"
            }
          ]
        }
      },
      {
        "zType": "PROJECT_COUNCIL_2",
        "Name": "TEXT_PROJECT_COUNCIL_2",
        "zIcon": "PROJECT_COUNCIL_2",
        "bRepeat": "1",
        "bNoHurry": "1",
        "RequiresCulture": "CULTURE_DEVELOPING",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "70"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "70"
            }
          ]
        }
      },
      {
        "zType": "PROJECT_COUNCIL_3",
        "Name": "TEXT_PROJECT_COUNCIL_3",
        "zIcon": "PROJECT_COUNCIL_3",
        "bRepeat": "1",
        "bNoHurry": "1",
        "RequiresCulture": "CULTURE_STRONG",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "80"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "80"
            }
          ]
        }
      },
      {
        "zType": "PROJECT_COUNCIL_4",
        "Name": "TEXT_PROJECT_COUNCIL_4",
        "zIcon": "PROJECT_COUNCIL_4",
        "bRepeat": "1",
        "bNoHurry": "1",
        "RequiresCulture": "CULTURE_LEGENDARY",
        "aiYieldModifier": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "90"
            },
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "90"
            }
          ]
        }
      }
    ]
  }
}
    export default data
    