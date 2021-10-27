
    const data: XmlTech.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "Advice": {
          
        },
        "zIconName": {
          
        },
        "Achievement": {
          
        },
        "BonusDiscover": {
          
        },
        "EffectPlayer": {
          
        },
        "iCost": {
          
        },
        "iColumn": {
          
        },
        "iRow": {
          
        },
        "bHide": {
          
        },
        "bTrash": {
          
        },
        "bNoFree": {
          
        },
        "bReturn": {
          
        },
        "bValidAll": {
          
        },
        "abNationValid": {
          
        },
        "abTechPrereq": {
          
        }
      },
      {
        "zType": "TECH_IRONWORKING",
        "Name": "TEXT_TECH_IRONWORKING",
        "Advice": "TEXT_GUIDE_TECH_IRONWORKING",
        "zIconName": "TECH_IRONWORKING",
        "iCost": "80",
        "iColumn": "0",
        "iRow": "2",
        "bValidAll": "1"
      },
      {
        "zType": "TECH_STONECUTTING",
        "Name": "TEXT_TECH_STONECUTTING",
        "Advice": "TEXT_GUIDE_TECH_STONECUTTING",
        "zIconName": "TECH_STONECUTTING",
        "iCost": "80",
        "iColumn": "0",
        "iRow": "5",
        "bValidAll": "1"
      },
      {
        "zType": "TECH_STONECUTTING_BONUS_STONE",
        "Name": "TEXT_TECH_STONECUTTING_BONUS_STONE",
        "Advice": "TEXT_GUIDE_TECH_STONECUTTING_BONUS_STONE",
        "zIconName": "BOOST_STONE",
        "BonusDiscover": "BONUS_TECH_STONECUTTING_BONUS_STONE",
        "iCost": "40",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_STONECUTTING",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_TRAPPING",
        "Name": "TEXT_TECH_TRAPPING",
        "Advice": "TEXT_GUIDE_TECH_TRAPPING",
        "zIconName": "TECH_TRAPPING",
        "iCost": "80",
        "iColumn": "0",
        "iRow": "7",
        "bValidAll": "1"
      },
      {
        "zType": "TECH_DIVINATION",
        "Name": "TEXT_TECH_DIVINATION",
        "Advice": "TEXT_GUIDE_TECH_DIVINATION",
        "zIconName": "TECH_DIVINATION",
        "iCost": "80",
        "iColumn": "0",
        "iRow": "8",
        "bValidAll": "1"
      },
      {
        "zType": "TECH_ADMINISTRATION",
        "Name": "TEXT_TECH_ADMINISTRATION",
        "Advice": "TEXT_GUIDE_TECH_ADMINISTRATION",
        "zIconName": "TECH_ADMINISTRATION",
        "iCost": "80",
        "iColumn": "0",
        "iRow": "10",
        "bValidAll": "1"
      },
      {
        "zType": "TECH_LABOR_FORCE",
        "Name": "TEXT_TECH_LABOR_FORCE",
        "Advice": "TEXT_GUIDE_TECH_LABOR_FORCE",
        "zIconName": "TECH_LABOR_FORCE",
        "EffectPlayer": "EFFECTPLAYER_TECH_LABOR_FORCE",
        "iCost": "120",
        "iColumn": "1",
        "iRow": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_IRONWORKING",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_HUSBANDRY",
        "Name": "TEXT_TECH_HUSBANDRY",
        "Advice": "TEXT_GUIDE_TECH_HUSBANDRY",
        "zIconName": "TECH_HUSBANDRY",
        "iCost": "120",
        "iColumn": "1",
        "iRow": "3",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_IRONWORKING",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_HUSBANDRY_BONUS_FOOD",
        "Name": "TEXT_TECH_HUSBANDRY_BONUS_FOOD",
        "Advice": "TEXT_GUIDE_TECH_HUSBANDRY_BONUS_FOOD",
        "zIconName": "BONUS_FOOD",
        "BonusDiscover": "BONUS_TECH_HUSBANDRY_BONUS_FOOD",
        "iCost": "60",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_HUSBANDRY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_DRAMA",
        "Name": "TEXT_TECH_DRAMA",
        "Advice": "TEXT_GUIDE_TECH_DRAMA",
        "zIconName": "TECH_DRAMA",
        "EffectPlayer": "EFFECTPLAYER_TECH_DRAMA",
        "iCost": "120",
        "iColumn": "1",
        "iRow": "4",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_STONECUTTING",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_DRAMA_BONUS_SETTLER",
        "Name": "TEXT_TECH_DRAMA_BONUS_SETTLER",
        "Advice": "TEXT_GUIDE_TECH_DRAMA_BONUS_SETTLER",
        "zIconName": "BONUS_SETTLER",
        "BonusDiscover": "BONUS_TECH_DRAMA_BONUS_SETTLER",
        "iCost": "60",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_DRAMA",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_POLIS",
        "Name": "TEXT_TECH_POLIS",
        "Advice": "TEXT_GUIDE_TECH_POLIS",
        "zIconName": "TECH_POLIS",
        "iCost": "120",
        "iColumn": "1",
        "iRow": "5",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_STONECUTTING",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_POLIS_BONUS_WORKER",
        "Name": "TEXT_TECH_POLIS_BONUS_WORKER",
        "Advice": "TEXT_GUIDE_TECH_POLIS_BONUS_WORKER",
        "zIconName": "BONUS_WORKER",
        "BonusDiscover": "BONUS_TECH_POLIS_BONUS_WORKER",
        "iCost": "60",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_POLIS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_MILITARY_DRILL",
        "Name": "TEXT_TECH_MILITARY_DRILL",
        "Advice": "TEXT_GUIDE_TECH_MILITARY_DRILL",
        "zIconName": "TECH_MILITARY_DRILL",
        "iCost": "120",
        "iColumn": "1",
        "iRow": "7",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_TRAPPING",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_ARISTOCRACY",
        "Name": "TEXT_TECH_ARISTOCRACY",
        "Advice": "TEXT_GUIDE_TECH_ARISTOCRACY",
        "zIconName": "TECH_ARISTOCRACY",
        "iCost": "120",
        "iColumn": "1",
        "iRow": "8",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_DIVINATION",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_ARISTOCRACY_BONUS_BORDERS",
        "Name": "TEXT_TECH_ARISTOCRACY_BONUS_BORDERS",
        "Advice": "TEXT_GUIDE_TECH_ARISTOCRACY_BONUS_BORDERS",
        "zIconName": "BOOST_BORDER",
        "BonusDiscover": "BONUS_TECH_ARISTOCRACY_BONUS_BORDERS",
        "iCost": "60",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_ARISTOCRACY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_RHETORIC",
        "Name": "TEXT_TECH_RHETORIC",
        "Advice": "TEXT_GUIDE_TECH_RHETORIC",
        "zIconName": "TECH_RHETORIC",
        "iCost": "120",
        "iColumn": "1",
        "iRow": "10",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_ADMINISTRATION",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_NAVIGATION",
        "Name": "TEXT_TECH_NAVIGATION",
        "Advice": "TEXT_GUIDE_TECH_NAVIGATION",
        "zIconName": "TECH_NAVIGATION",
        "EffectPlayer": "EFFECTPLAYER_TECH_NAVIGATION",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "0",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_LABOR_FORCE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_NAVIGATION_BONUS_BIREME",
        "Name": "TEXT_TECH_NAVIGATION_BONUS_BIREME",
        "Advice": "TEXT_GUIDE_TECH_NAVIGATION_BONUS_BIREME",
        "zIconName": "BONUS_BIREME",
        "BonusDiscover": "BONUS_TECH_NAVIGATION_BONUS_BIREME",
        "iCost": "100",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_NAVIGATION",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_PHALANX",
        "Name": "TEXT_TECH_PHALANX",
        "Advice": "TEXT_GUIDE_TECH_PHALANX",
        "zIconName": "TECH_PHALANX",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "2",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_LABOR_FORCE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_PHALANX_BONUS_ORDERS",
        "Name": "TEXT_TECH_PHALANX_BONUS_ORDERS",
        "Advice": "TEXT_GUIDE_TECH_PHALANX_BONUS_ORDERS",
        "zIconName": "BOOST_ORDERS",
        "BonusDiscover": "BONUS_TECH_PHALANX_BONUS_ORDERS",
        "iCost": "100",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_PHALANX",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_SPOKED_WHEEL",
        "Name": "TEXT_TECH_SPOKED_WHEEL",
        "Advice": "TEXT_GUIDE_TECH_SPOKED_WHEEL",
        "zIconName": "TECH_SPOKED_WHEEL",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "3",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_HUSBANDRY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_SPOKED_WHEEL_BONUS_CHARIOT",
        "Name": "TEXT_TECH_SPOKED_WHEEL_BONUS_CHARIOT",
        "Advice": "TEXT_GUIDE_TECH_SPOKED_WHEEL_BONUS_CHARIOT",
        "zIconName": "BONUS_CHARIOT",
        "BonusDiscover": "BONUS_TECH_SPOKED_WHEEL_BONUS_CHARIOT",
        "iCost": "100",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_SPOKED_WHEEL",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_FORESTRY",
        "Name": "TEXT_TECH_FORESTRY",
        "Advice": "TEXT_GUIDE_TECH_FORESTRY",
        "zIconName": "TECH_FORESTRY",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "5",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_POLIS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_FORESTRY_BONUS_SCIENTIST",
        "Name": "TEXT_TECH_FORESTRY_BONUS_SCIENTIST",
        "Advice": "TEXT_GUIDE_TECH_FORESTRY_BONUS_SCIENTIST",
        "zIconName": "BONUS_COURTIER",
        "BonusDiscover": "BONUS_TECH_FORESTRY_BONUS_SCIENTIST",
        "iCost": "100",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_FORESTRY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_STEEL",
        "Name": "TEXT_TECH_STEEL",
        "Advice": "TEXT_GUIDE_TECH_STEEL",
        "zIconName": "TECH_STEEL",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "7",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_IRONWORKING",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_MILITARY_DRILL",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_SOVEREIGNTY",
        "Name": "TEXT_TECH_SOVEREIGNTY",
        "Advice": "TEXT_GUIDE_TECH_SOVEREIGNTY",
        "zIconName": "TECH_SOVEREIGNTY",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "9",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_ARISTOCRACY",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_RHETORIC",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_SOVEREIGNITY_BONUS_CIVICS",
        "Name": "TEXT_TECH_SOVEREIGNITY_BONUS_CIVICS",
        "Advice": "TEXT_GUIDE_TECH_SOVEREIGNITY_BONUS_CIVICS",
        "zIconName": "BONUS_CIVICS",
        "BonusDiscover": "BONUS_TECH_SOVEREIGNITY_BONUS_CIVICS",
        "iCost": "100",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_SOVEREIGNTY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_METAPHYSICS",
        "Name": "TEXT_TECH_METAPHYSICS",
        "Advice": "TEXT_GUIDE_TECH_METAPHYSICS",
        "zIconName": "TECH_METAPHYSICS",
        "iCost": "200",
        "iColumn": "2",
        "iRow": "10",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_RHETORIC",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_COINAGE",
        "Name": "TEXT_TECH_COINAGE",
        "Advice": "TEXT_GUIDE_TECH_COINAGE",
        "zIconName": "TECH_COINAGE",
        "EffectPlayer": "EFFECTPLAYER_TECH_COINAGE",
        "iCost": "400",
        "iColumn": "3",
        "iRow": "0",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_NAVIGATION",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_COINAGE_BONUS_MONEY",
        "Name": "TEXT_TECH_COINAGE_BONUS_MONEY",
        "Advice": "TEXT_GUIDE_TECH_COINAGE_BONUS_MONEY",
        "zIconName": "BOOST_MONEY",
        "BonusDiscover": "BONUS_TECH_COINAGE_BONUS_MONEY",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_COINAGE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_CITIZENSHIP",
        "Name": "TEXT_TECH_CITIZENSHIP",
        "Advice": "TEXT_GUIDE_TECH_CITIZENSHIP",
        "zIconName": "TECH_CITIZENSHIP",
        "iCost": "400",
        "iColumn": "3",
        "iRow": "2",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_PHALANX",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_CITIZENSHIP_BONUS_MINISTER",
        "Name": "TEXT_TECH_CITIZENSHIP_BONUS_MINISTER",
        "Advice": "TEXT_GUIDE_TECH_CITIZENSHIP_BONUS_MINISTER",
        "zIconName": "BONUS_COURTIER",
        "BonusDiscover": "BONUS_TECH_CITIZENSHIP_BONUS_MINISTER",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_CITIZENSHIP",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_PORTCULLIS",
        "Name": "TEXT_TECH_PORTCULLIS",
        "Advice": "TEXT_GUIDE_TECH_PORTCULLIS",
        "zIconName": "TECH_PORTCULLIS",
        "iCost": "400",
        "iColumn": "3",
        "iRow": "4",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_SPOKED_WHEEL",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_DRAMA",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_PORTCULLIS_BONUS_MACEMAN",
        "Name": "TEXT_TECH_PORTCULLIS_BONUS_MACEMAN",
        "Advice": "TEXT_GUIDE_TECH_PORTCULLIS_BONUS_MACEMAN",
        "zIconName": "BONUS_MACEMAN",
        "BonusDiscover": "BONUS_TECH_PORTCULLIS_BONUS_MACEMAN",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_PORTCULLIS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_LAND_CONSOLIDATION",
        "Name": "TEXT_TECH_LAND_CONSOLIDATION",
        "Advice": "TEXT_GUIDE_TECH_LAND_CONSOLIDATION",
        "zIconName": "TECH_LAND_CONSOLIDATION",
        "iCost": "400",
        "iColumn": "3",
        "iRow": "5",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_FORESTRY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_LAND_CONSOLIDATION_BONUS_CAMEL_ARCHER",
        "Name": "TEXT_TECH_LAND_CONSOLIDATION_BONUS_CAMEL_ARCHER",
        "Advice": "TEXT_GUIDE_TECH_LAND_CONSOLIDATION_BONUS_CAMEL_ARCHER",
        "zIconName": "BONUS_CAMEL_ARCHER",
        "BonusDiscover": "BONUS_TECH_LAND_CONSOLIDATION_BONUS_CAMEL_ARCHER",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_LAND_CONSOLIDATION",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_LAND_CONSOLIDATION_BONUS_WAR_ELEPHANT",
        "Name": "TEXT_TECH_LAND_CONSOLIDATION_BONUS_WAR_ELEPHANT",
        "Advice": "TEXT_GUIDE_TECH_LAND_CONSOLIDATION_BONUS_WAR_ELEPHANT",
        "zIconName": "BONUS_WAR_ELEPHANT",
        "BonusDiscover": "BONUS_TECH_LAND_CONSOLIDATION_BONUS_WAR_ELEPHANT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_LAND_CONSOLIDATION",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_COMPOSITE_BOW",
        "Name": "TEXT_TECH_COMPOSITE_BOW",
        "Advice": "TEXT_GUIDE_TECH_COMPOSITE_BOW",
        "zIconName": "TECH_COMPOSITE_BOW",
        "iCost": "400",
        "iColumn": "3",
        "iRow": "6",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_MILITARY_DRILL",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_COMPOSITE_BOW_BONUS_ARCHER",
        "Name": "TEXT_TECH_COMPOSITE_BOW_BONUS_ARCHER",
        "Advice": "TEXT_GUIDE_TECH_COMPOSITE_BOW_BONUS_ARCHER",
        "zIconName": "BONUS_ARCHER",
        "BonusDiscover": "BONUS_TECH_COMPOSITE_BOW_BONUS_ARCHER",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_COMPOSITE_BOW",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_MONASTICISM",
        "Name": "TEXT_TECH_MONASTICISM",
        "Advice": "TEXT_GUIDE_TECH_MONASTICISM",
        "zIconName": "TECH_MONASTICISM",
        "iCost": "400",
        "iColumn": "3",
        "iRow": "8",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_ARISTOCRACY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_MACHINERY",
        "Name": "TEXT_TECH_MACHINERY",
        "Advice": "TEXT_GUIDE_TECH_MACHINERY",
        "zIconName": "TECH_MACHINERY",
        "iCost": "400",
        "iColumn": "3",
        "iRow": "9",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_SOVEREIGNTY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_MACHINERY_BONUS_ONAGER",
        "Name": "TEXT_TECH_MACHINERY_BONUS_ONAGER",
        "Advice": "TEXT_GUIDE_TECH_MACHINERY_BONUS_ONAGER",
        "zIconName": "BONUS_ONAGER",
        "BonusDiscover": "BONUS_TECH_MACHINERY_BONUS_ONAGER",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_MACHINERY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_SCHOLARSHIP",
        "Name": "TEXT_TECH_SCHOLARSHIP",
        "Advice": "TEXT_GUIDE_TECH_SCHOLARSHIP",
        "zIconName": "TECH_SCHOLARSHIP",
        "iCost": "600",
        "iColumn": "4",
        "iRow": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_CITIZENSHIP",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_SCHOLARSHIP_BONUS_SCIENTIST",
        "Name": "TEXT_TECH_SCHOLARSHIP_BONUS_SCIENTIST",
        "Advice": "TEXT_GUIDE_TECH_SCHOLARSHIP_BONUS_SCIENTIST",
        "zIconName": "BONUS_COURTIER",
        "BonusDiscover": "BONUS_TECH_SCHOLARSHIP_BONUS_SCIENTIST",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_SCHOLARSHIP",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_STIRRUPS",
        "Name": "TEXT_TECH_STIRRUPS",
        "Advice": "TEXT_GUIDE_TECH_STIRRUPS",
        "zIconName": "TECH_STIRRUPS",
        "iCost": "600",
        "iColumn": "4",
        "iRow": "3",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_SPOKED_WHEEL",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_CITIZENSHIP",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_STIRRUPS_BONUS_HORSEMAN",
        "Name": "TEXT_TECH_STIRRUPS_BONUS_HORSEMAN",
        "Advice": "TEXT_GUIDE_TECH_STIRRUPS_BONUS_HORSEMAN",
        "zIconName": "BONUS_HORSEMAN",
        "BonusDiscover": "BONUS_TECH_STIRRUPS_BONUS_HORSEMAN",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_STIRRUPS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_STIRRUPS_BONUS_HORSE_ARCHER",
        "Name": "TEXT_TECH_STIRRUPS_BONUS_HORSE_ARCHER",
        "Advice": "TEXT_GUIDE_TECH_STIRRUPS_BONUS_HORSE_ARCHER",
        "zIconName": "BONUS_HORSE_ARCHER",
        "BonusDiscover": "BONUS_TECH_STIRRUPS_BONUS_HORSE_ARCHER",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_STIRRUPS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_ARCHITECTURE",
        "Name": "TEXT_TECH_ARCHITECTURE",
        "Advice": "TEXT_GUIDE_TECH_ARCHITECTURE",
        "zIconName": "TECH_ARCHITECTURE",
        "iCost": "600",
        "iColumn": "4",
        "iRow": "4",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_PORTCULLIS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_MANOR",
        "Name": "TEXT_TECH_MANOR",
        "Advice": "TEXT_GUIDE_TECH_MANOR",
        "zIconName": "TECH_MANOR",
        "iCost": "600",
        "iColumn": "4",
        "iRow": "5",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_LAND_CONSOLIDATION",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_COMPOSITE_BOW",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_MANOR_BONUS_GOODS",
        "Name": "TEXT_TECH_MANOR_BONUS_GOODS",
        "Advice": "TEXT_GUIDE_TECH_MANOR_BONUS_GOODS",
        "zIconName": "BONUS_GOODS",
        "BonusDiscover": "BONUS_TECH_MANOR_BONUS_GOODS",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_MANOR",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_BATTLELINE",
        "Name": "TEXT_TECH_BATTLELINE",
        "Advice": "TEXT_GUIDE_TECH_BATTLELINE",
        "zIconName": "TECH_BATTLELINE",
        "iCost": "600",
        "iColumn": "4",
        "iRow": "7",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_PHALANX",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_STEEL",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_BATTLELINE_BONUS_SOLDIER",
        "Name": "TEXT_TECH_BATTLELINE_BONUS_SOLDIER",
        "Advice": "TEXT_GUIDE_TECH_BATTLELINE_BONUS_SOLDIER",
        "zIconName": "BONUS_COURTIER",
        "BonusDiscover": "BONUS_TECH_BATTLELINE_BONUS_SOLDIER",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_BATTLELINE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_DOCTRINE",
        "Name": "TEXT_TECH_DOCTRINE",
        "Advice": "TEXT_GUIDE_TECH_DOCTRINE",
        "zIconName": "TECH_DOCTRINE",
        "iCost": "600",
        "iColumn": "4",
        "iRow": "8",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_MONASTICISM",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_TORSION",
        "Name": "TEXT_TECH_TORSION",
        "Advice": "TEXT_GUIDE_TECH_TORSION",
        "zIconName": "TECH_TORSION",
        "iCost": "600",
        "iColumn": "4",
        "iRow": "9",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_MACHINERY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_TORSION_BONUS_BALLISTA",
        "Name": "TEXT_TECH_TORSION_BONUS_BALLISTA",
        "Advice": "TEXT_GUIDE_TECH_TORSION_BONUS_BALLISTA",
        "zIconName": "BONUS_BALLISTA",
        "BonusDiscover": "BONUS_TECH_TORSION_BONUS_BALLISTA",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_TORSION",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_CARTOGRAPHY",
        "Name": "TEXT_TECH_CARTOGRAPHY",
        "Advice": "TEXT_GUIDE_TECH_CARTOGRAPHY",
        "zIconName": "TECH_CARTOGRAPHY",
        "iCost": "600",
        "iColumn": "4",
        "iRow": "10",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_NAVIGATION",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_METAPHYSICS",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_CARTOGRAPHY_BONUS_TRIREME",
        "Name": "TEXT_TECH_CARTOGRAPHY_BONUS_TRIREME",
        "Advice": "TEXT_GUIDE_TECH_CARTOGRAPHY_BONUS_TRIREME",
        "zIconName": "BONUS_TRIREME",
        "BonusDiscover": "BONUS_TECH_CARTOGRAPHY_BONUS_TRIREME",
        "iCost": "400",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_CARTOGRAPHY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_HYDRAULICS",
        "Name": "TEXT_TECH_HYDRAULICS",
        "Advice": "TEXT_GUIDE_TECH_HYDRAULICS",
        "zIconName": "TECH_HYDRAULICS",
        "iCost": "800",
        "iColumn": "5",
        "iRow": "0",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_COINAGE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_HYDRAULICS_BONUS_MERCHANT",
        "Name": "TEXT_TECH_HYDRAULICS_BONUS_MERCHANT",
        "Advice": "TEXT_GUIDE_TECH_HYDRAULICS_BONUS_MERCHANT",
        "zIconName": "BONUS_COURTIER",
        "BonusDiscover": "BONUS_TECH_HYDRAULICS_BONUS_MERCHANT",
        "iCost": "600",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_HYDRAULICS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_JURISPRUDENCE",
        "Name": "TEXT_TECH_JURISPRUDENCE",
        "Advice": "TEXT_GUIDE_TECH_JURISPRUDENCE",
        "zIconName": "TECH_JURISPRUDENCE",
        "iCost": "800",
        "iColumn": "5",
        "iRow": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_SCHOLARSHIP",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_MARTIAL_CODE",
        "Name": "TEXT_TECH_MARTIAL_CODE",
        "Advice": "TEXT_GUIDE_TECH_MARTIAL_CODE",
        "zIconName": "TECH_MARTIAL_CODE",
        "iCost": "800",
        "iColumn": "5",
        "iRow": "3",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_STIRRUPS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_VAULTING",
        "Name": "TEXT_TECH_VAULTING",
        "Advice": "TEXT_GUIDE_TECH_VAULTING",
        "zIconName": "TECH_VAULTING",
        "iCost": "800",
        "iColumn": "5",
        "iRow": "4",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_ARCHITECTURE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_VAULTING_BONUS_DISCONTENT",
        "Name": "TEXT_TECH_VAULTING_BONUS_DISCONTENT",
        "Advice": "TEXT_GUIDE_TECH_VAULTING_BONUS_DISCONTENT",
        "zIconName": "BOOST_DISCONTENT",
        "BonusDiscover": "BONUS_TECH_VAULTING_BONUS_DISCONTENT",
        "iCost": "600",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_VAULTING",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_BODKIN_ARROW",
        "Name": "TEXT_TECH_BODKIN_ARROW",
        "Advice": "TEXT_GUIDE_TECH_BODKIN_ARROW",
        "zIconName": "TECH_BODKIN_ARROW",
        "iCost": "800",
        "iColumn": "5",
        "iRow": "5",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_MANOR",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_BODKIN_ARROW_BONUS_TRAINING",
        "Name": "TEXT_TECH_BODKIN_ARROW_BONUS_TRAINING",
        "Advice": "TEXT_GUIDE_TECH_BODKIN_ARROW_BONUS_TRAINING",
        "zIconName": "BONUS_TRAINING",
        "BonusDiscover": "BONUS_TECH_BODKIN_ARROW_BONUS_TRAINING",
        "iCost": "600",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_BODKIN_ARROW",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_COHORTS",
        "Name": "TEXT_TECH_COHORTS",
        "Advice": "TEXT_GUIDE_TECH_COHORTS",
        "zIconName": "TECH_COHORTS",
        "iCost": "800",
        "iColumn": "5",
        "iRow": "7",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_CITIZENSHIP",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_BATTLELINE",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_WINDLASS",
        "Name": "TEXT_TECH_WINDLASS",
        "Advice": "TEXT_GUIDE_TECH_WINDLASS",
        "zIconName": "TECH_WINDLASS",
        "iCost": "800",
        "iColumn": "5",
        "iRow": "9",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_TORSION",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_WINDLASS_BONUS_CROSSBOWMAN",
        "Name": "TEXT_TECH_WINDLASS_BONUS_CROSSBOWMAN",
        "Advice": "TEXT_GUIDE_TECH_WINDLASS_BONUS_CROSSBOWMAN",
        "zIconName": "BONUS_CROSSBOWMAN",
        "BonusDiscover": "BONUS_TECH_WINDLASS_BONUS_CROSSBOWMAN",
        "iCost": "600",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_WINDLASS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_LATEEN_SAIL",
        "Name": "TEXT_TECH_LATEEN_SAIL",
        "Advice": "TEXT_GUIDE_TECH_LATEEN_SAIL",
        "zIconName": "TECH_LATEEN_SAIL",
        "iCost": "1000",
        "iColumn": "6",
        "iRow": "0",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_HYDRAULICS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_LATEEN_SAIL_BONUS_DROMON",
        "Name": "TEXT_TECH_LATEEN_SAIL_BONUS_DROMON",
        "Advice": "TEXT_GUIDE_TECH_LATEEN_SAIL_BONUS_DROMON",
        "zIconName": "BONUS_DROMON",
        "BonusDiscover": "BONUS_TECH_LATEEN_SAIL_BONUS_DROMON",
        "iCost": "800",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_LATEEN_SAIL",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_FISCAL_POLICY",
        "Name": "TEXT_TECH_FISCAL_POLICY",
        "Advice": "TEXT_GUIDE_TECH_FISCAL_POLICY",
        "zIconName": "TECH_FISCAL_POLICY",
        "iCost": "1000",
        "iColumn": "6",
        "iRow": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_JURISPRUDENCE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_FISCAL_POLICY_BONUS_MERCHANT",
        "Name": "TEXT_TECH_FISCAL_POLICY_BONUS_MERCHANT",
        "Advice": "TEXT_GUIDE_TECH_FISCAL_POLICY_BONUS_MERCHANT",
        "zIconName": "BONUS_COURTIER",
        "BonusDiscover": "BONUS_TECH_FISCAL_POLICY_BONUS_MERCHANT",
        "iCost": "800",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_FISCAL_POLICY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_BARDING",
        "Name": "TEXT_TECH_BARDING",
        "Advice": "TEXT_GUIDE_TECH_BARDING",
        "zIconName": "TECH_BARDING",
        "iCost": "1000",
        "iColumn": "6",
        "iRow": "3",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_STEEL",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_MARTIAL_CODE",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_INFANTRY_SQUARE",
        "Name": "TEXT_TECH_INFANTRY_SQUARE",
        "Advice": "TEXT_GUIDE_TECH_INFANTRY_SQUARE",
        "zIconName": "TECH_INFANTRY_SQUARE",
        "iCost": "1000",
        "iColumn": "6",
        "iRow": "5",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_BODKIN_ARROW",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_INFANTRY_SQUARE_BONUS_SOLDIER",
        "Name": "TEXT_TECH_INFANTRY_SQUARE_BONUS_SOLDIER",
        "Advice": "TEXT_GUIDE_TECH_INFANTRY_SQUARE_BONUS_SOLDIER",
        "zIconName": "BONUS_COURTIER",
        "BonusDiscover": "BONUS_TECH_INFANTRY_SQUARE_BONUS_SOLDIER",
        "iCost": "600",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_INFANTRY_SQUARE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_CHAIN_DRIVE",
        "Name": "TEXT_TECH_CHAIN_DRIVE",
        "Advice": "TEXT_GUIDE_TECH_CHAIN_DRIVE",
        "zIconName": "TECH_CHAIN_DRIVE",
        "iCost": "1000",
        "iColumn": "6",
        "iRow": "9",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_WINDLASS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_CHAIN_DRIVE_BONUS_MINISTER",
        "Name": "TEXT_TECH_CHAIN_DRIVE_BONUS_MINISTER",
        "Advice": "TEXT_GUIDE_TECH_CHAIN_DRIVE_BONUS_MINISTER",
        "zIconName": "BONUS_COURTIER",
        "BonusDiscover": "BONUS_TECH_CHAIN_DRIVE_BONUS_MINISTER",
        "iCost": "600",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_CHAIN_DRIVE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_BALLISTICS",
        "Name": "TEXT_TECH_BALLISTICS",
        "Advice": "TEXT_GUIDE_TECH_BALLISTICS",
        "zIconName": "TECH_BALLISTICS",
        "iCost": "1000",
        "iColumn": "6",
        "iRow": "10",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_CARTOGRAPHY",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_TORSION",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_ECONOMIC_REFORM",
        "Name": "TEXT_TECH_ECONOMIC_REFORM",
        "Advice": "TEXT_GUIDE_TECH_ECONOMIC_REFORM",
        "zIconName": "TECH_ECONOMIC_REFORM",
        "Achievement": "ACHIEVEMENT_TECH_ECONOMIC_REFORM",
        "BonusDiscover": "BONUS_TECH_ECONOMIC_REFORM",
        "EffectPlayer": "EFFECTPLAYER_TECH_ECONOMIC_REFORM",
        "iCost": "1200",
        "iColumn": "7",
        "iRow": "1",
        "bNoFree": "1",
        "bReturn": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_FISCAL_POLICY",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_LATEEN_SAIL",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_MILITARY_PRESTIGE",
        "Name": "TEXT_TECH_MILITARY_PRESTIGE",
        "Advice": "TEXT_GUIDE_TECH_MILITARY_PRESTIGE",
        "zIconName": "TECH_MILITARY_PRESTIGE",
        "Achievement": "ACHIEVEMENT_TECH_MILITARY_PRESTIGE",
        "BonusDiscover": "BONUS_TECH_MILITARY_PRESTIGE",
        "EffectPlayer": "EFFECTPLAYER_TECH_MILITARY_PRESTIGE",
        "iCost": "1200",
        "iColumn": "7",
        "iRow": "4",
        "bNoFree": "1",
        "bReturn": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_BARDING",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_INFANTRY_SQUARE",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_INDUSTRIAL_PROGRESS",
        "Name": "TEXT_TECH_INDUSTRIAL_PROGRESS",
        "Advice": "TEXT_GUIDE_TECH_INDUSTRIAL_PROGRESS",
        "zIconName": "TECH_INDUSTRIAL_PROGRESS",
        "Achievement": "ACHIEVEMENT_TECH_INDUSTRIAL_PROGRESS",
        "BonusDiscover": "BONUS_TECH_INDUSTRIAL_PROGRESS",
        "EffectPlayer": "EFFECTPLAYER_TECH_INDUSTRIAL_PROGRESS",
        "iCost": "1200",
        "iColumn": "7",
        "iRow": "9",
        "bNoFree": "1",
        "bReturn": "1",
        "bValidAll": "1",
        "abTechPrereq": {
          "Pair": [
            {
              "zIndex": "TECH_CHAIN_DRIVE",
              "bValue": "1"
            },
            {
              "zIndex": "TECH_BALLISTICS",
              "bValue": "1"
            }
          ]
        }
      },
      {
        "zType": "TECH_BATTERING_RAM_BONUS",
        "Name": "TEXT_TECH_BATTERING_RAM_BONUS",
        "Advice": "TEXT_GUIDE_TECH_BATTERING_RAM_BONUS",
        "zIconName": "BONUS_BATTERING_RAM",
        "BonusDiscover": "BONUS_TECH_BATTERING_RAM_UNIT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_ASSYRIA",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_PORTCULLIS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_SIEGE_TOWER_BONUS",
        "Name": "TEXT_TECH_SIEGE_TOWER_BONUS",
        "Advice": "TEXT_GUIDE_TECH_SIEGE_TOWER_BONUS",
        "zIconName": "BONUS_SIEGE_TOWER",
        "BonusDiscover": "BONUS_TECH_SIEGE_TOWER_UNIT",
        "iCost": "800",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_ASSYRIA",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_ARCHITECTURE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_AKKADIAN_ARCHER_BONUS",
        "Name": "TEXT_TECH_AKKADIAN_ARCHER_BONUS",
        "Advice": "TEXT_GUIDE_TECH_AKKADIAN_ARCHER_BONUS",
        "zIconName": "BONUS_AKKADIAN",
        "BonusDiscover": "BONUS_TECH_AKKADIAN_ARCHER_UNIT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_BABYLONIA",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_COMPOSITE_BOW",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_CIMMERIAN_ARCHER_BONUS",
        "Name": "TEXT_TECH_CIMMERIAN_ARCHER_BONUS",
        "Advice": "TEXT_GUIDE_TECH_CIMMERIAN_ARCHER_BONUS",
        "zIconName": "BONUS_CIMMERIAN_ARCHER",
        "BonusDiscover": "BONUS_TECH_CIMMERIAN_ARCHER_UNIT",
        "iCost": "800",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_BABYLONIA",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_BODKIN_ARROW",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_AFRICAN_ELEPHANT_BONUS",
        "Name": "TEXT_TECH_AFRICAN_ELEPHANT_BONUS",
        "Advice": "TEXT_GUIDE_TECH_AFRICAN_ELEPHANT_BONUS",
        "zIconName": "BONUS_AFRICAN_ELEPHANT",
        "BonusDiscover": "BONUS_TECH_AFRICAN_ELEPHANT_UNIT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_CARTHAGE",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_STEEL",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_TURRETED_ELEPHANT_BONUS",
        "Name": "TEXT_TECH_TURRETED_ELEPHANT_BONUS",
        "Advice": "TEXT_GUIDE_TECH_TURRETED_ELEPHANT_BONUS",
        "zIconName": "BONUS_TURRETED_ELEPHANT",
        "BonusDiscover": "BONUS_TECH_TURRETED_ELEPHANT_UNIT",
        "iCost": "800",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_CARTHAGE",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_MANOR",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_LIGHT_CHARIOT_BONUS",
        "Name": "TEXT_TECH_LIGHT_CHARIOT_BONUS",
        "Advice": "TEXT_GUIDE_TECH_LIGHT_CHARIOT_BONUS",
        "zIconName": "BONUS_LIGHT_CHARIOT",
        "BonusDiscover": "BONUS_TECH_LIGHT_CHARIOT_UNIT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_EGYPT",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_FORESTRY",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_KUSHITE_CAVALRY_BONUS",
        "Name": "TEXT_TECH_KUSHITE_CAVALRY_BONUS",
        "Advice": "TEXT_GUIDE_TECH_KUSHITE_CAVALRY_BONUS",
        "zIconName": "BONUS_KUSHITE_CAVALRY",
        "BonusDiscover": "BONUS_TECH_KUSHITE_CAVALRY_UNIT",
        "iCost": "800",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_EGYPT",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_STIRRUPS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_HOPLITE_BONUS",
        "Name": "TEXT_TECH_HOPLITE_BONUS",
        "Advice": "TEXT_GUIDE_TECH_HOPLITE_BONUS",
        "zIconName": "BONUS_HOPLITE",
        "BonusDiscover": "BONUS_TECH_HOPLITE_UNIT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_GREECE",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_PHALANX",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_PHALANGITE_BONUS",
        "Name": "TEXT_TECH_PHALANGITE_BONUS",
        "Advice": "TEXT_GUIDE_TECH_PHALANGITE_BONUS",
        "zIconName": "BONUS_PHALANGITE",
        "BonusDiscover": "BONUS_TECH_PHALANGITE_UNIT",
        "iCost": "800",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_GREECE",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_INFANTRY_SQUARE",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_PALTON_CAVALRY_BONUS",
        "Name": "TEXT_TECH_PALTON_CAVALRY_BONUS",
        "Advice": "TEXT_GUIDE_TECH_PALTON_CAVALRY_BONUS",
        "zIconName": "BONUS_PALTON_CAVALRY",
        "BonusDiscover": "BONUS_TECH_PALTON_CAVALRY_UNIT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_PERSIA",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_COMPOSITE_BOW",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_CATAPHRACT_ARCHER_BONUS",
        "Name": "TEXT_TECH_CATAPHRACT_ARCHER_BONUS",
        "Advice": "TEXT_GUIDE_TECH_CATAPHRACT_ARCHER_BONUS",
        "zIconName": "BONUS_CATAPHRACT_ARCHER",
        "BonusDiscover": "BONUS_TECH_CATAPHRACT_ARCHER_UNIT",
        "iCost": "800",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_PERSIA",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_WINDLASS",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_HASTATUS_BONUS",
        "Name": "TEXT_TECH_HASTATUS_BONUS",
        "Advice": "TEXT_GUIDE_TECH_HASTATUS_BONUS",
        "zIconName": "BONUS_HASTATUS",
        "BonusDiscover": "BONUS_TECH_HASTATUS_UNIT",
        "iCost": "200",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_ROME",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_STEEL",
            "bValue": "1"
          }
        }
      },
      {
        "zType": "TECH_LEGIONARY_BONUS",
        "Name": "TEXT_TECH_LEGIONARY_BONUS",
        "Advice": "TEXT_GUIDE_TECH_LEGIONARY_BONUS",
        "zIconName": "BONUS_LEGIONARY",
        "BonusDiscover": "BONUS_TECH_LEGIONARY_UNIT",
        "iCost": "800",
        "bHide": "1",
        "bTrash": "1",
        "bNoFree": "1",
        "abNationValid": {
          "Pair": {
            "zIndex": "NATION_ROME",
            "bValue": "1"
          }
        },
        "abTechPrereq": {
          "Pair": {
            "zIndex": "TECH_COHORTS",
            "bValue": "1"
          }
        }
      }
    ]
  }
}
    export default data
    