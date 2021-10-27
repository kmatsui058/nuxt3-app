
    const data: XmlImprovementClass.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "CustomName": {
          
        },
        "iMaxCultureCount": {
          
        },
        "bNoAdjacent": {
          
        },
        "bHelpAll": {
          
        },
        "TechPrereq": {
          
        },
        "EffectCity": {
          
        },
        "SpecialistClass": {
          
        },
        "aiAdjacentImprovementClassModifier": {
          
        },
        "aiAdjacentResourceYieldOutput": {
          
        },
        "abResourceValid": {
          
        },
        "aeTheologyCityEffect": {
          
        },
        "aeResourceCityEffect": {
          
        },
        "aaiTheologyYieldOutput": {
          
        },
        "aaiResourceYieldOutput": {
          
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_FORT",
        "Name": "TEXT_IMPROVEMENTCLASS_FORT",
        "TechPrereq": "TECH_STONECUTTING"
      },
      {
        "zType": "IMPROVEMENTCLASS_FARM",
        "Name": "TEXT_IMPROVEMENTCLASS_FARM",
        "SpecialistClass": "SPECIALISTCLASS_FARMER",
        "abResourceValid": {
          "Pair": [
            {
              "zIndex": "RESOURCE_WHEAT",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_BARLEY",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_SORGHUM",
              "bValue": "1"
            }
          ]
        },
        "aeResourceCityEffect": {
          "Pair": [
            {
              "zIndex": "RESOURCE_WHEAT",
              "zValue": "EFFECTCITY_RESOURCE_WHEAT"
            },
            {
              "zIndex": "RESOURCE_BARLEY",
              "zValue": "EFFECTCITY_RESOURCE_BARLEY"
            },
            {
              "zIndex": "RESOURCE_SORGHUM",
              "zValue": "EFFECTCITY_RESOURCE_SORGHUM"
            }
          ]
        },
        "aaiResourceYieldOutput": {
          "Pair": [
            {
              "zIndex": "RESOURCE_WHEAT",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_BARLEY",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_SORGHUM",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_MINE",
        "Name": "TEXT_IMPROVEMENTCLASS_MINE",
        "SpecialistClass": "SPECIALISTCLASS_MINER",
        "abResourceValid": {
          "Pair": [
            {
              "zIndex": "RESOURCE_ORE",
              "bValue": "1"
            },
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
        "aeResourceCityEffect": {
          "Pair": [
            {
              "zIndex": "RESOURCE_ORE",
              "zValue": "EFFECTCITY_RESOURCE_ORE"
            },
            {
              "zIndex": "RESOURCE_SALT",
              "zValue": "EFFECTCITY_RESOURCE_SALT"
            },
            {
              "zIndex": "RESOURCE_GEM",
              "zValue": "EFFECTCITY_RESOURCE_GEM"
            },
            {
              "zIndex": "RESOURCE_GOLD",
              "zValue": "EFFECTCITY_RESOURCE_GOLD"
            },
            {
              "zIndex": "RESOURCE_SILVER",
              "zValue": "EFFECTCITY_RESOURCE_SILVER"
            }
          ]
        },
        "aaiResourceYieldOutput": {
          "Pair": [
            {
              "zIndex": "RESOURCE_ORE",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_TRAINING",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_IRON",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_SALT",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_MONEY",
                  "iValue": "200"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_GEM",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_MONEY",
                  "iValue": "200"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_GOLD",
              "SubPair": {
                "zSubIndex": "YIELD_MONEY",
                "iValue": "400"
              }
            },
            {
              "zIndex": "RESOURCE_SILVER",
              "SubPair": {
                "zSubIndex": "YIELD_MONEY",
                "iValue": "400"
              }
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_QUARRY",
        "Name": "TEXT_IMPROVEMENTCLASS_QUARRY",
        "TechPrereq": "TECH_STONECUTTING",
        "SpecialistClass": "SPECIALISTCLASS_STONECUTTER",
        "abResourceValid": {
          "Pair": {
            "zIndex": "RESOURCE_MARBLE",
            "bValue": "1"
          }
        },
        "aeResourceCityEffect": {
          "Pair": {
            "zIndex": "RESOURCE_MARBLE",
            "zValue": "EFFECTCITY_RESOURCE_MARBLE"
          }
        },
        "aaiResourceYieldOutput": {
          "Pair": {
            "zIndex": "RESOURCE_MARBLE",
            "SubPair": [
              {
                "zSubIndex": "YIELD_CIVICS",
                "iValue": "20"
              },
              {
                "zSubIndex": "YIELD_STONE",
                "iValue": "50"
              }
            ]
          }
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_LUMBERMILL",
        "Name": "TEXT_IMPROVEMENTCLASS_LUMBERMILL",
        "TechPrereq": "TECH_FORESTRY",
        "SpecialistClass": "SPECIALISTCLASS_WOODCUTTER"
      },
      {
        "zType": "IMPROVEMENTCLASS_PASTURE",
        "Name": "TEXT_IMPROVEMENTCLASS_PASTURE",
        "TechPrereq": "TECH_HUSBANDRY",
        "SpecialistClass": "SPECIALISTCLASS_RANCHER",
        "abResourceValid": {
          "Pair": [
            {
              "zIndex": "RESOURCE_HORSE",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_CATTLE",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_SHEEP",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_PIG",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_GOAT",
              "bValue": "1"
            }
          ]
        },
        "aeResourceCityEffect": {
          "Pair": [
            {
              "zIndex": "RESOURCE_HORSE",
              "zValue": "EFFECTCITY_RESOURCE_HORSE"
            },
            {
              "zIndex": "RESOURCE_CATTLE",
              "zValue": "EFFECTCITY_RESOURCE_CATTLE"
            },
            {
              "zIndex": "RESOURCE_SHEEP",
              "zValue": "EFFECTCITY_RESOURCE_SHEEP"
            },
            {
              "zIndex": "RESOURCE_PIG",
              "zValue": "EFFECTCITY_RESOURCE_PIG"
            },
            {
              "zIndex": "RESOURCE_GOAT",
              "zValue": "EFFECTCITY_RESOURCE_GOAT"
            }
          ]
        },
        "aaiResourceYieldOutput": {
          "Pair": [
            {
              "zIndex": "RESOURCE_HORSE",
              "SubPair": {
                "zSubIndex": "YIELD_ORDERS",
                "iValue": "5"
              }
            },
            {
              "zIndex": "RESOURCE_CATTLE",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_SHEEP",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_PIG",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_GOAT",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_CAMP",
        "Name": "TEXT_IMPROVEMENTCLASS_CAMP",
        "TechPrereq": "TECH_TRAPPING",
        "SpecialistClass": "SPECIALISTCLASS_TRAPPER",
        "abResourceValid": {
          "Pair": [
            {
              "zIndex": "RESOURCE_CAMEL",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_ELEPHANT",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_FUR",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_GAME",
              "bValue": "1"
            }
          ]
        },
        "aeResourceCityEffect": {
          "Pair": [
            {
              "zIndex": "RESOURCE_CAMEL",
              "zValue": "EFFECTCITY_RESOURCE_CAMEL"
            },
            {
              "zIndex": "RESOURCE_ELEPHANT",
              "zValue": "EFFECTCITY_RESOURCE_ELEPHANT"
            },
            {
              "zIndex": "RESOURCE_FUR",
              "zValue": "EFFECTCITY_RESOURCE_FUR"
            },
            {
              "zIndex": "RESOURCE_GAME",
              "zValue": "EFFECTCITY_RESOURCE_GAME"
            }
          ]
        },
        "aaiResourceYieldOutput": {
          "Pair": [
            {
              "zIndex": "RESOURCE_CAMEL",
              "SubPair": {
                "zSubIndex": "YIELD_ORDERS",
                "iValue": "5"
              }
            },
            {
              "zIndex": "RESOURCE_ELEPHANT",
              "SubPair": {
                "zSubIndex": "YIELD_ORDERS",
                "iValue": "5"
              }
            },
            {
              "zIndex": "RESOURCE_GAME",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_FUR",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_MONEY",
                  "iValue": "200"
                }
              ]
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_GROVE",
        "Name": "TEXT_IMPROVEMENTCLASS_GROVE",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "SpecialistClass": "SPECIALISTCLASS_GARDENER",
        "abResourceValid": {
          "Pair": [
            {
              "zIndex": "RESOURCE_CITRUS",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_HONEY",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_INCENSE",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_LAVENDER",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_OLIVE",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_WINE",
              "bValue": "1"
            }
          ]
        },
        "aeResourceCityEffect": {
          "Pair": [
            {
              "zIndex": "RESOURCE_CITRUS",
              "zValue": "EFFECTCITY_RESOURCE_CITRUS"
            },
            {
              "zIndex": "RESOURCE_HONEY",
              "zValue": "EFFECTCITY_RESOURCE_HONEY"
            },
            {
              "zIndex": "RESOURCE_INCENSE",
              "zValue": "EFFECTCITY_RESOURCE_INCENSE"
            },
            {
              "zIndex": "RESOURCE_LAVENDER",
              "zValue": "EFFECTCITY_RESOURCE_LAVENDER"
            },
            {
              "zIndex": "RESOURCE_OLIVE",
              "zValue": "EFFECTCITY_RESOURCE_OLIVE"
            },
            {
              "zIndex": "RESOURCE_WINE",
              "zValue": "EFFECTCITY_RESOURCE_WINE"
            }
          ]
        },
        "aaiResourceYieldOutput": {
          "Pair": [
            {
              "zIndex": "RESOURCE_CITRUS",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_HONEY",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_INCENSE",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_MONEY",
                  "iValue": "200"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_LAVENDER",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_MONEY",
                  "iValue": "200"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_OLIVE",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_WINE",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_NETS",
        "Name": "TEXT_IMPROVEMENTCLASS_NETS",
        "SpecialistClass": "SPECIALISTCLASS_FISHER",
        "abResourceValid": {
          "Pair": [
            {
              "zIndex": "RESOURCE_DYE",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_PEARL",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_FISH",
              "bValue": "1"
            },
            {
              "zIndex": "RESOURCE_CRAB",
              "bValue": "1"
            }
          ]
        },
        "aeResourceCityEffect": {
          "Pair": [
            {
              "zIndex": "RESOURCE_DYE",
              "zValue": "EFFECTCITY_RESOURCE_DYE"
            },
            {
              "zIndex": "RESOURCE_PEARL",
              "zValue": "EFFECTCITY_RESOURCE_PEARL"
            },
            {
              "zIndex": "RESOURCE_FISH",
              "zValue": "EFFECTCITY_RESOURCE_FISH"
            },
            {
              "zIndex": "RESOURCE_CRAB",
              "zValue": "EFFECTCITY_RESOURCE_CRAB"
            }
          ]
        },
        "aaiResourceYieldOutput": {
          "Pair": [
            {
              "zIndex": "RESOURCE_DYE",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_MONEY",
                  "iValue": "100"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_PEARL",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_CULTURE",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_MONEY",
                  "iValue": "100"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_FISH",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            },
            {
              "zIndex": "RESOURCE_CRAB",
              "SubPair": [
                {
                  "zSubIndex": "YIELD_GROWTH",
                  "iValue": "20"
                },
                {
                  "zSubIndex": "YIELD_FOOD",
                  "iValue": "50"
                }
              ]
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_HARBOR",
        "Name": "TEXT_IMPROVEMENTCLASS_HARBOR",
        "iMaxCultureCount": "1",
        "TechPrereq": "TECH_CARTOGRAPHY",
        "aiAdjacentResourceYieldOutput": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_GRANARY",
        "Name": "TEXT_IMPROVEMENTCLASS_GRANARY",
        "iMaxCultureCount": "1",
        "TechPrereq": "TECH_ADMINISTRATION"
      },
      {
        "zType": "IMPROVEMENTCLASS_MILL",
        "Name": "TEXT_IMPROVEMENTCLASS_MILL",
        "iMaxCultureCount": "1",
        "bHelpAll": "1",
        "TechPrereq": "TECH_HYDRAULICS",
        "aiAdjacentImprovementClassModifier": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENTCLASS_MINE",
              "iValue": "60"
            },
            {
              "zIndex": "IMPROVEMENTCLASS_QUARRY",
              "iValue": "60"
            },
            {
              "zIndex": "IMPROVEMENTCLASS_LUMBERMILL",
              "iValue": "60"
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_HAMLET",
        "Name": "TEXT_IMPROVEMENTCLASS_HAMLET",
        "iMaxCultureCount": "1",
        "TechPrereq": "TECH_POLIS",
        "aiAdjacentImprovementClassModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENTCLASS_ODEON",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_BARRACKS",
        "Name": "TEXT_IMPROVEMENTCLASS_BARRACKS",
        "TechPrereq": "TECH_MILITARY_DRILL",
        "SpecialistClass": "SPECIALISTCLASS_OFFICER"
      },
      {
        "zType": "IMPROVEMENTCLASS_RANGE",
        "Name": "TEXT_IMPROVEMENTCLASS_RANGE",
        "TechPrereq": "TECH_MACHINERY",
        "SpecialistClass": "SPECIALISTCLASS_OFFICER"
      },
      {
        "zType": "IMPROVEMENTCLASS_ODEON",
        "Name": "TEXT_IMPROVEMENTCLASS_ODEON",
        "TechPrereq": "TECH_DRAMA",
        "EffectCity": "EFFECTCITY_IMPROVEMENTCLASS_ODEON",
        "SpecialistClass": "SPECIALISTCLASS_POET"
      },
      {
        "zType": "IMPROVEMENTCLASS_BATHS",
        "Name": "TEXT_IMPROVEMENTCLASS_BATHS",
        "TechPrereq": "TECH_ARCHITECTURE",
        "SpecialistClass": "SPECIALISTCLASS_DOCTOR"
      },
      {
        "zType": "IMPROVEMENTCLASS_MARKET",
        "Name": "TEXT_IMPROVEMENTCLASS_MARKET",
        "TechPrereq": "TECH_COINAGE",
        "EffectCity": "EFFECTCITY_IMPROVEMENTCLASS_MARKET",
        "SpecialistClass": "SPECIALISTCLASS_SHOPKEEPER",
        "aiAdjacentImprovementClassModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENTCLASS_HARBOR",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_LIBRARY",
        "Name": "TEXT_IMPROVEMENTCLASS_LIBRARY",
        "TechPrereq": "TECH_SCHOLARSHIP",
        "EffectCity": "EFFECTCITY_IMPROVEMENTCLASS_LIBRARY",
        "SpecialistClass": "SPECIALISTCLASS_PHILOSOPHER",
        "aiAdjacentResourceYieldOutput": {
          "Pair": {
            "zIndex": "YIELD_SCIENCE",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_COURTHOUSE",
        "Name": "TEXT_IMPROVEMENTCLASS_COURTHOUSE",
        "TechPrereq": "TECH_CITIZENSHIP",
        "EffectCity": "EFFECTCITY_IMPROVEMENTCLASS_COURTHOUSE",
        "SpecialistClass": "SPECIALISTCLASS_SCRIBE"
      },
      {
        "zType": "IMPROVEMENTCLASS_GARRISON",
        "Name": "TEXT_IMPROVEMENTCLASS_GARRISON",
        "bHelpAll": "1"
      },
      {
        "zType": "IMPROVEMENTCLASS_SHRINE",
        "Name": "TEXT_IMPROVEMENTCLASS_SHRINE",
        "bNoAdjacent": "1",
        "bHelpAll": "1",
        "TechPrereq": "TECH_DIVINATION",
        "SpecialistClass": "SPECIALISTCLASS_ACOLYTE"
      },
      {
        "zType": "IMPROVEMENTCLASS_MONASTERY",
        "Name": "TEXT_IMPROVEMENTCLASS_MONASTERY",
        "CustomName": "TEXT_IMPROVEMENTCLASS_MONASTERY_CUSTOM",
        "TechPrereq": "TECH_MONASTICISM",
        "SpecialistClass": "SPECIALISTCLASS_MONK",
        "aiAdjacentImprovementClassModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENTCLASS_GROVE",
            "iValue": "60"
          }
        },
        "aaiTheologyYieldOutput": {
          "Pair": [
            {
              "zIndex": "THEOLOGY_MYTHOLOGY",
              "SubPair": {
                "zSubIndex": "YIELD_CULTURE",
                "iValue": "40"
              }
            },
            {
              "zIndex": "THEOLOGY_VENERATION",
              "SubPair": {
                "zSubIndex": "YIELD_MONEY",
                "iValue": "200"
              }
            },
            {
              "zIndex": "THEOLOGY_LEGALISM",
              "SubPair": {
                "zSubIndex": "YIELD_CIVICS",
                "iValue": "20"
              }
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_TEMPLE",
        "Name": "TEXT_IMPROVEMENTCLASS_TEMPLE",
        "CustomName": "TEXT_IMPROVEMENTCLASS_TEMPLE_CUSTOM",
        "TechPrereq": "TECH_DOCTRINE",
        "EffectCity": "EFFECTCITY_IMPROVEMENTCLASS_TEMPLE",
        "SpecialistClass": "SPECIALISTCLASS_PRIEST",
        "aiAdjacentImprovementClassModifier": {
          "Pair": {
            "zIndex": "IMPROVEMENTCLASS_MONASTERY",
            "iValue": "20"
          }
        },
        "aeTheologyCityEffect": {
          "Pair": {
            "zIndex": "THEOLOGY_GNOSTICISM",
            "zValue": "EFFECTCITY_IMPROVEMENTCLASS_TEMPLE_GNOSTICISM"
          }
        },
        "aaiTheologyYieldOutput": {
          "Pair": [
            {
              "zIndex": "THEOLOGY_REVELATION",
              "SubPair": {
                "zSubIndex": "YIELD_ORDERS",
                "iValue": "5"
              }
            },
            {
              "zIndex": "THEOLOGY_DUALISM",
              "SubPair": {
                "zSubIndex": "YIELD_DISCONTENT",
                "iValue": "-10"
              }
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_CATHEDRAL",
        "Name": "TEXT_IMPROVEMENTCLASS_CATHEDRAL",
        "CustomName": "TEXT_IMPROVEMENTCLASS_CATHEDRAL_CUSTOM",
        "TechPrereq": "TECH_VAULTING",
        "EffectCity": "EFFECTCITY_IMPROVEMENTCLASS_CATHEDRAL",
        "SpecialistClass": "SPECIALISTCLASS_BISHOP",
        "aeTheologyCityEffect": {
          "Pair": [
            {
              "zIndex": "THEOLOGY_REDEMPTION",
              "zValue": "EFFECTCITY_IMPROVEMENTCLASS_CATHEDRAL_REDEMPTION"
            },
            {
              "zIndex": "THEOLOGY_ENLIGHTENMENT",
              "zValue": "EFFECTCITY_IMPROVEMENTCLASS_CATHEDRAL_ENLIGHTENMENT"
            }
          ]
        }
      },
      {
        "zType": "IMPROVEMENTCLASS_HOLY_SITE",
        "Name": "TEXT_IMPROVEMENTCLASS_HOLY_SITE",
        "EffectCity": "EFFECTCITY_IMPROVEMENTCLASS_HOLY_SITE"
      }
    ]
  }
}
    export default data
    