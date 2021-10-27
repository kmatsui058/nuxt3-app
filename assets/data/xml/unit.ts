
    const data: XmlUnit.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "zIconName": {
          
        },
        "zPortraitName": {
          
        },
        "zBackgroundName": {
          
        },
        "zAudioSelectionType": {
          
        },
        "zAudioMovementType": {
          
        },
        "zAudioAttackType": {
          
        },
        "zAudioDamagedByProjectileType": {
          
        },
        "azGenderIconName": {
          
        },
        "azGenderPortraitName": {
          
        },
        "azBarbarianPortraitName": {
          
        },
        "aeFormations": {
          
        },
        "Achievement": {
          
        },
        "UnitCycle": {
          
        },
        "TechPrereq": {
          
        },
        "NationPrereq": {
          
        },
        "CulturePrereq": {
          
        },
        "EffectCityPrereq": {
          
        },
        "ImprovementPrereq": {
          
        },
        "ImprovementObsolete": {
          
        },
        "RequiresReligion": {
          
        },
        "SpreadReligion": {
          
        },
        "BuildReligion": {
          
        },
        "ProductionType": {
          
        },
        "iMovement": {
          
        },
        "iVision": {
          
        },
        "iReveal": {
          
        },
        "iFatigue": {
          
        },
        "iWaterControl": {
          
        },
        "iStrength": {
          
        },
        "iRangeMin": {
          
        },
        "iRangeMax": {
          
        },
        "iHPMax": {
          
        },
        "iProduction": {
          
        },
        "iProductionPer": {
          
        },
        "iPopulationCost": {
          
        },
        "iUpgradeCost": {
          
        },
        "iStartFirst": {
          
        },
        "fAttackDuration": {
          
        },
        "fAnimNormalMoveDuration": {
          
        },
        "fAnimNormalMoveSpeed": {
          
        },
        "fAnimIntermediateMoveDuration": {
          
        },
        "fAnimIntermediateMoveSpeed": {
          
        },
        "fAnimFastMoveDuration": {
          
        },
        "fAnimFastMoveSpeed": {
          
        },
        "bWater": {
          
        },
        "bAmphibious": {
          
        },
        "bTerritoryWater": {
          
        },
        "bMelee": {
          
        },
        "bRangeFlat": {
          
        },
        "bOutsideOpinion": {
          
        },
        "bZOC": {
          
        },
        "bIgnoreZOC": {
          
        },
        "bBlocks": {
          
        },
        "bFortify": {
          
        },
        "bTestudo": {
          
        },
        "bPillage": {
          
        },
        "bUnlimber": {
          
        },
        "bAnchor": {
          
        },
        "bFound": {
          
        },
        "bHarvest": {
          
        },
        "bBuild": {
          
        },
        "bAgent": {
          
        },
        "bCaravan": {
          
        },
        "bTheology": {
          
        },
        "bReligious": {
          
        },
        "bPromote": {
          
        },
        "bGeneral": {
          
        },
        "bBarbCity": {
          
        },
        "bBarbRaid": {
          
        },
        "bNoHurry": {
          
        },
        "aiStartDifficulty": {
          
        },
        "aiUnitTraitModifier": {
          
        },
        "aiUnitTraitModifierAttack": {
          
        },
        "aiUnitTraitModifierDefense": {
          
        },
        "aiUnitTraitModifierMelee": {
          
        },
        "aiYieldCost": {
          
        },
        "aiYieldConsumption": {
          
        },
        "aiAttackValue": {
          
        },
        "aiAttackPercent": {
          
        },
        "aeObsoleteTech": {
          
        },
        "aeUpgradeUnit": {
          
        },
        "aeTribeUpgradeUnit": {
          
        },
        "aeUnitTrait": {
          
        },
        "aeEffectUnit": {
          
        },
        "aeRemoveVegetation": {
          
        },
        "aaiImprovementYieldRate": {
          
        }
      },
      {
        "zType": "UNIT_SETTLER",
        "Name": "TEXT_UNIT_SETTLER",
        "zIconName": "UNIT_SETTLER",
        "zPortraitName": "UNIT_SETTLER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SETTLER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "GENERIC",
        "zAudioDamagedByProjectileType": "flesh",
        "aeFormations": {
          "zValue": [
            "FORMATION_SETTLER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_FOUND",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "80",
        "iProductionPer": "10",
        "iStartFirst": "1",
        "fAnimNormalMoveDuration": "1",
        "fAnimNormalMoveSpeed": "1.2",
        "fAnimIntermediateMoveDuration": ".6",
        "fAnimIntermediateMoveSpeed": "1.4",
        "fAnimFastMoveDuration": ".2",
        "fAnimFastMoveSpeed": "2",
        "bOutsideOpinion": "1",
        "bFound": "1",
        "bHarvest": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "100"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "2"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_WORKER"
        },
        "aeUnitTrait": {
          "zValue": "UNITTRAIT_INFANTRY"
        }
      },
      {
        "zType": "UNIT_WORKER",
        "Name": "TEXT_UNIT_WORKER",
        "zIconName": "UNIT_WORKER",
        "zPortraitName": "UNIT_WORKER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "WORKER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "azGenderPortraitName": {
          "Pair": [
            {
              "zIndex": "GENDER_MALE",
              "zValue": "UNIT_WORKER"
            },
            {
              "zIndex": "GENDER_FEMALE",
              "zValue": "UNIT_FEMALE_WORKER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_WORKER",
            "FORMATION_WORKER_FEMALE",
            "FORMATION_WORKER_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_WORKER",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "50",
        "iProductionPer": "5",
        "iUpgradeCost": "80",
        "bTerritoryWater": "1",
        "bOutsideOpinion": "1",
        "bHarvest": "1",
        "bBuild": "1",
        "aiStartDifficulty": {
          "Pair": {
            "zIndex": "DIFFICULTY_ABLE",
            "iValue": "1"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "2"
          }
        },
        "aeUnitTrait": {
          "zValue": "UNITTRAIT_INFANTRY"
        },
        "aeRemoveVegetation": {
          "zValue": [
            "VEGETATION_TREES",
            "VEGETATION_TREES_CUT",
            "VEGETATION_SCRUB",
            "VEGETATION_SCRUB_CUT"
          ]
        }
      },
      {
        "zType": "UNIT_SCOUT",
        "Name": "TEXT_UNIT_SCOUT",
        "zIconName": "UNIT_SCOUT",
        "zPortraitName": "UNIT_SCOUT",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SCOUT",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "GENERIC",
        "zAudioDamagedByProjectileType": "flesh",
        "azGenderPortraitName": {
          "Pair": [
            {
              "zIndex": "GENDER_MALE",
              "zValue": "UNIT_SCOUT"
            },
            {
              "zIndex": "GENDER_FEMALE",
              "zValue": "UNIT_FEMALE_SCOUT"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_SCOUT",
            "FORMATION_SCOUT_FEMALE",
            "FORMATION_SCOUT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_SCOUT",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "3",
        "iVision": "5",
        "iReveal": "1",
        "iFatigue": "4",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "50",
        "iProductionPer": "5",
        "bIgnoreZOC": "1",
        "bHarvest": "1",
        "bAgent": "1",
        "aiStartDifficulty": {
          "Pair": [
            {
              "zIndex": "DIFFICULTY_ABLE",
              "iValue": "1"
            },
            {
              "zIndex": "DIFFICULTY_JUST",
              "iValue": "1"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": "UNITTRAIT_INFANTRY"
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_STEALTH"
        }
      },
      {
        "zType": "UNIT_CARAVAN",
        "Name": "TEXT_UNIT_CARAVAN",
        "zIconName": "UNIT_CARAVAN",
        "zPortraitName": "UNIT_CARAVAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "CARAVAN",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "aeFormations": {
          "zValue": [
            "FORMATION_CARAVAN",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_CARAVAN",
        "EffectCityPrereq": "EFFECTCITY_UNIT_CARAVAN",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "2",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "60",
        "iProductionPer": "5",
        "fAnimNormalMoveDuration": "1.2",
        "fAnimNormalMoveSpeed": "2",
        "fAnimIntermediateMoveDuration": ".8",
        "fAnimIntermediateMoveSpeed": "3",
        "fAnimFastMoveDuration": ".6",
        "fAnimFastMoveSpeed": "4",
        "bAmphibious": "1",
        "bCaravan": "1",
        "aeUnitTrait": {
          "zValue": "UNITTRAIT_MOUNTED"
        }
      },
      {
        "zType": "UNIT_ZOROASTRIANISM_DISCIPLE",
        "Name": "TEXT_UNIT_RELIGION_DISCIPLE",
        "zIconName": "UNIT_ZOROASTRIANISM_DISCIPLE",
        "zPortraitName": "UNIT_ZOROASTRIANISM_DISCIPLE",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "DISCIPLE",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "GENERIC",
        "zAudioDamagedByProjectileType": "flesh",
        "aeFormations": {
          "zValue": [
            "FORMATION_ZOROASTRIANISM_DISCIPLE",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_DISCIPLE",
        "RequiresReligion": "RELIGION_ZOROASTRIANISM",
        "SpreadReligion": "RELIGION_ZOROASTRIANISM",
        "BuildReligion": "RELIGION_ZOROASTRIANISM",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "3",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "80",
        "iProductionPer": "5",
        "bTheology": "1",
        "bReligious": "1",
        "aeUnitTrait": {
          "zValue": "UNITTRAIT_INFANTRY"
        },
        "aaiImprovementYieldRate": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENT_MONASTERY_ZOROASTRIANISM",
              "SubPair": {
                "zSubIndex": "YIELD_SCIENCE",
                "iValue": "10"
              }
            },
            {
              "zIndex": "IMPROVEMENT_TEMPLE_ZOROASTRIANISM",
              "SubPair": {
                "zSubIndex": "YIELD_MONEY",
                "iValue": "50"
              }
            },
            {
              "zIndex": "IMPROVEMENT_CATHEDRAL_ZOROASTRIANISM",
              "SubPair": {
                "zSubIndex": "YIELD_ORDERS",
                "iValue": "10"
              }
            }
          ]
        }
      },
      {
        "zType": "UNIT_JUDAISM_DISCIPLE",
        "Name": "TEXT_UNIT_RELIGION_DISCIPLE",
        "zIconName": "UNIT_JUDAISM_DISCIPLE",
        "zPortraitName": "UNIT_JUDAISM_DISCIPLE",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "DISCIPLE",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "GENERIC",
        "zAudioDamagedByProjectileType": "flesh",
        "aeFormations": {
          "zValue": [
            "FORMATION_JUDAISM_DISCIPLE",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_DISCIPLE",
        "RequiresReligion": "RELIGION_JUDAISM",
        "SpreadReligion": "RELIGION_JUDAISM",
        "BuildReligion": "RELIGION_JUDAISM",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "3",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "80",
        "iProductionPer": "5",
        "bTheology": "1",
        "bReligious": "1",
        "aeUnitTrait": {
          "zValue": "UNITTRAIT_INFANTRY"
        },
        "aaiImprovementYieldRate": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENT_MONASTERY_JUDAISM",
              "SubPair": {
                "zSubIndex": "YIELD_SCIENCE",
                "iValue": "10"
              }
            },
            {
              "zIndex": "IMPROVEMENT_TEMPLE_JUDAISM",
              "SubPair": {
                "zSubIndex": "YIELD_MONEY",
                "iValue": "50"
              }
            },
            {
              "zIndex": "IMPROVEMENT_CATHEDRAL_JUDAISM",
              "SubPair": {
                "zSubIndex": "YIELD_ORDERS",
                "iValue": "10"
              }
            }
          ]
        }
      },
      {
        "zType": "UNIT_CHRISTIANITY_DISCIPLE",
        "Name": "TEXT_UNIT_RELIGION_DISCIPLE",
        "zIconName": "UNIT_CHRISTIANITY_DISCIPLE",
        "zPortraitName": "UNIT_CHRISTIANITY_DISCIPLE",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "DISCIPLE",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "GENERIC",
        "zAudioDamagedByProjectileType": "flesh",
        "aeFormations": {
          "zValue": [
            "FORMATION_CHRISTIANITY_DISCIPLE",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_DISCIPLE",
        "RequiresReligion": "RELIGION_CHRISTIANITY",
        "SpreadReligion": "RELIGION_CHRISTIANITY",
        "BuildReligion": "RELIGION_CHRISTIANITY",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "3",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "80",
        "iProductionPer": "5",
        "bTheology": "1",
        "bReligious": "1",
        "aeUnitTrait": {
          "zValue": "UNITTRAIT_INFANTRY"
        },
        "aaiImprovementYieldRate": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENT_MONASTERY_CHRISTIANITY",
              "SubPair": {
                "zSubIndex": "YIELD_SCIENCE",
                "iValue": "10"
              }
            },
            {
              "zIndex": "IMPROVEMENT_TEMPLE_CHRISTIANITY",
              "SubPair": {
                "zSubIndex": "YIELD_MONEY",
                "iValue": "50"
              }
            },
            {
              "zIndex": "IMPROVEMENT_CATHEDRAL_CHRISTIANITY",
              "SubPair": {
                "zSubIndex": "YIELD_ORDERS",
                "iValue": "10"
              }
            }
          ]
        }
      },
      {
        "zType": "UNIT_MANICHAEISM_DISCIPLE",
        "Name": "TEXT_UNIT_RELIGION_DISCIPLE",
        "zIconName": "UNIT_MANICHAEISM_DISCIPLE",
        "zPortraitName": "UNIT_MANICHAEISM_DISCIPLE",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "DISCIPLE",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "GENERIC",
        "zAudioDamagedByProjectileType": "flesh",
        "aeFormations": {
          "zValue": [
            "FORMATION_MANICHAEISM_DISCIPLE",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_DISCIPLE",
        "RequiresReligion": "RELIGION_MANICHAEISM",
        "SpreadReligion": "RELIGION_MANICHAEISM",
        "BuildReligion": "RELIGION_MANICHAEISM",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "3",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "80",
        "iProductionPer": "5",
        "bTheology": "1",
        "bReligious": "1",
        "aeUnitTrait": {
          "zValue": "UNITTRAIT_INFANTRY"
        },
        "aaiImprovementYieldRate": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENT_MONASTERY_MANICHAEISM",
              "SubPair": {
                "zSubIndex": "YIELD_SCIENCE",
                "iValue": "10"
              }
            },
            {
              "zIndex": "IMPROVEMENT_TEMPLE_MANICHAEISM",
              "SubPair": {
                "zSubIndex": "YIELD_MONEY",
                "iValue": "50"
              }
            },
            {
              "zIndex": "IMPROVEMENT_CATHEDRAL_MANICHAEISM",
              "SubPair": {
                "zSubIndex": "YIELD_ORDERS",
                "iValue": "10"
              }
            }
          ]
        }
      },
      {
        "zType": "UNIT_MILITIA",
        "Name": "TEXT_UNIT_MILITIA",
        "zIconName": "UNIT_MILITIA",
        "zPortraitName": "UNIT_MILITIA",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MILITIA",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_MILITIA",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "30",
        "iHPMax": "20",
        "iProduction": "60",
        "iProductionPer": "2",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "1"
          }
        },
        "aeObsoleteTech": {
          "zValue": "TECH_MANOR"
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_CONSCRIPT"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_CONSCRIPT",
        "Name": "TEXT_UNIT_CONSCRIPT",
        "zIconName": "UNIT_LEVY",
        "zPortraitName": "UNIT_LEVY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "CONSCRIPT",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_CONSCRIPT",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "TechPrereq": "TECH_MANOR",
        "ProductionType": "YIELD_GROWTH",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "50",
        "iHPMax": "20",
        "iProduction": "80",
        "iProductionPer": "2",
        "iUpgradeCost": "80",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "25"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "2"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_POLEARM"
          ]
        }
      },
      {
        "zType": "UNIT_WARRIOR",
        "Name": "TEXT_UNIT_WARRIOR",
        "zIconName": "UNIT_WARRIOR",
        "zPortraitName": "UNIT_WARRIOR",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SWORD",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "aeFormations": {
          "zValue": [
            "FORMATION_WARRIOR",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "TechPrereq": "TECH_IRONWORKING",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "40",
        "iHPMax": "20",
        "iProduction": "60",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "50"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "1"
          }
        },
        "aeObsoleteTech": {
          "zValue": [
            "TECH_STEEL",
            "TECH_PHALANX"
          ]
        },
        "aeUpgradeUnit": {
          "zValue": [
            "UNIT_AXEMAN",
            "UNIT_SPEARMAN"
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_AXEMAN",
        "Name": "TEXT_UNIT_AXEMAN",
        "zIconName": "UNIT_AXEMAN",
        "zPortraitName": "UNIT_AXEMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MACE",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_AXEMAN",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "TechPrereq": "TECH_STEEL",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "50",
        "iHPMax": "20",
        "iProduction": "80",
        "iUpgradeCost": "80",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_POLEARM",
            "iValue": "25"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "100"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "2"
          }
        },
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
        "aeObsoleteTech": {
          "zValue": "TECH_COHORTS"
        },
        "aeUpgradeUnit": {
          "zValue": [
            "UNIT_MACEMAN",
            "UNIT_SWORDSMAN"
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_SPEARMAN",
        "Name": "TEXT_UNIT_SPEARMAN",
        "zIconName": "UNIT_SPEARMAN",
        "zPortraitName": "UNIT_SPEARMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SPEAR",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "aeFormations": {
          "zValue": [
            "FORMATION_SPEARMAN",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "TechPrereq": "TECH_PHALANX",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "50",
        "iHPMax": "20",
        "iProduction": "80",
        "iUpgradeCost": "80",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "2"
          }
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "25"
          }
        },
        "aeObsoleteTech": {
          "zValue": "TECH_INFANTRY_SQUARE"
        },
        "aeUpgradeUnit": {
          "zValue": [
            "UNIT_PIKEMAN",
            "UNIT_SWORDSMAN"
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_POLEARM"
          ]
        }
      },
      {
        "zType": "UNIT_MACEMAN",
        "Name": "TEXT_UNIT_MACEMAN",
        "zIconName": "UNIT_MACEMAN",
        "zPortraitName": "UNIT_MACEMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "AXE",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_MACEMAN",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "TechPrereq": "TECH_BATTLELINE",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "60",
        "iHPMax": "20",
        "iProduction": "100",
        "iUpgradeCost": "100",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "iValue": "25"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "150"
          }
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "3"
            }
          ]
        },
        "aeObsoleteTech": {
          "zValue": "TECH_COHORTS"
        },
        "aeUpgradeUnit": {
          "zValue": [
            "UNIT_PIKEMAN",
            "UNIT_SWORDSMAN"
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_SWORDSMAN",
        "Name": "TEXT_UNIT_SWORDSMAN",
        "zIconName": "UNIT_SWORDSMAN",
        "zPortraitName": "UNIT_SWORDSMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SWORD",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "aeFormations": {
          "zValue": [
            "FORMATION_SWORDSMAN",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "TechPrereq": "TECH_COHORTS",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "80",
        "iHPMax": "20",
        "iProduction": "120",
        "iUpgradeCost": "120",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "200"
          }
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "4"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_CLEAVE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_CLEAVE",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_PIKEMAN",
        "Name": "TEXT_UNIT_PIKEMAN",
        "zIconName": "UNIT_PIKEMAN",
        "zPortraitName": "UNIT_PIKEMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SPEAR",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "aeFormations": {
          "zValue": [
            "FORMATION_PIKEMAN",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "TechPrereq": "TECH_INFANTRY_SQUARE",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "80",
        "iHPMax": "20",
        "iProduction": "120",
        "iUpgradeCost": "120",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "100"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "4"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_POLEARM"
          ]
        }
      },
      {
        "zType": "UNIT_SLINGER",
        "Name": "TEXT_UNIT_SLINGER",
        "zIconName": "UNIT_SLINGER",
        "zPortraitName": "UNIT_SLINGER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SLINGER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "aeFormations": {
          "zValue": [
            "FORMATION_SLINGER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "TechPrereq": "TECH_TRAPPING",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "40",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iProduction": "60",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "50"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "1"
          }
        },
        "aeObsoleteTech": {
          "zValue": "TECH_WINDLASS"
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_ARCHER"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_ARCHER",
        "Name": "TEXT_UNIT_ARCHER",
        "zIconName": "UNIT_ARCHER",
        "zPortraitName": "UNIT_ARCHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "BOW",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_chain_mail",
        "azGenderPortraitName": {
          "Pair": [
            {
              "zIndex": "GENDER_MALE",
              "zValue": "UNIT_ARCHER"
            },
            {
              "zIndex": "GENDER_FEMALE",
              "zValue": "UNIT_FEMALE_ARCHER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ARCHER",
            "FORMATION_ARCHER_FEMALE",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "TechPrereq": "TECH_COMPOSITE_BOW",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "50",
        "iRangeMax": "3",
        "iHPMax": "20",
        "iProduction": "80",
        "iUpgradeCost": "80",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "100"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "2"
          }
        },
        "aeObsoleteTech": {
          "zValue": "TECH_BODKIN_ARROW"
        },
        "aeUpgradeUnit": {
          "zValue": [
            "UNIT_LONGBOWMAN",
            "UNIT_CROSSBOWMAN"
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_LONGBOWMAN",
        "Name": "TEXT_UNIT_LONGBOWMAN",
        "zIconName": "UNIT_LONGBOWMAN",
        "zPortraitName": "UNIT_LONGBOWMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "LONGBOW",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "aeFormations": {
          "zValue": [
            "FORMATION_LONGBOWMAN",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "TechPrereq": "TECH_BODKIN_ARROW",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "80",
        "iRangeMax": "3",
        "iHPMax": "20",
        "iProduction": "100",
        "iUpgradeCost": "100",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "150"
          }
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "3"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_CROSSBOWMAN",
        "Name": "TEXT_UNIT_CROSSBOWMAN",
        "zIconName": "UNIT_CROSSBOWMAN",
        "zPortraitName": "UNIT_CROSSBOWMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "CROSSBOW",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "aeFormations": {
          "zValue": [
            "FORMATION_CROSSBOWMAN",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "TechPrereq": "TECH_WINDLASS",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "80",
        "iRangeMax": "1",
        "iHPMax": "20",
        "iProduction": "100",
        "iUpgradeCost": "100",
        "fAttackDuration": "2",
        "bRangeFlat": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_MELEE",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "3"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_CHARIOT",
        "Name": "TEXT_UNIT_CHARIOT",
        "zIconName": "UNIT_CHARIOT",
        "zPortraitName": "UNIT_CHARIOT",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "CHARIOT",
        "zAudioMovementType": "CHARIOT_BUGGY",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "aeFormations": {
          "zValue": [
            "FORMATION_CHARIOT",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "TechPrereq": "TECH_SPOKED_WHEEL",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "5",
        "iFatigue": "3",
        "iStrength": "50",
        "iHPMax": "20",
        "iProduction": "80",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "2"
          }
        },
        "aeObsoleteTech": {
          "zValue": "TECH_STIRRUPS"
        },
        "aeUpgradeUnit": {
          "zValue": [
            "UNIT_HORSEMAN",
            "UNIT_HORSE_ARCHER"
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_ROUT"
        }
      },
      {
        "zType": "UNIT_HORSEMAN",
        "Name": "TEXT_UNIT_HORSEMAN",
        "zIconName": "UNIT_HORSEMAN",
        "zPortraitName": "UNIT_HORSEMAN",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "HORSEMAN",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "aeFormations": {
          "zValue": [
            "FORMATION_HORSEMAN",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "TechPrereq": "TECH_STIRRUPS",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "5",
        "iFatigue": "3",
        "iStrength": "60",
        "iHPMax": "20",
        "iProduction": "100",
        "iUpgradeCost": "100",
        "fAttackDuration": "2",
        "fAnimNormalMoveDuration": ".5",
        "fAnimNormalMoveSpeed": "1.5",
        "fAnimIntermediateMoveDuration": ".3",
        "fAnimIntermediateMoveSpeed": "1.2",
        "fAnimFastMoveDuration": ".2",
        "fAnimFastMoveSpeed": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "3"
            }
          ]
        },
        "aeObsoleteTech": {
          "zValue": "TECH_BARDING"
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_CATAPHRACT"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_ROUT"
        }
      },
      {
        "zType": "UNIT_CATAPHRACT",
        "Name": "TEXT_UNIT_CATAPHRACT",
        "zIconName": "UNIT_CATAPHRACT",
        "zPortraitName": "UNIT_CATAPHRACT",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "CATAPHRACT",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "aeFormations": {
          "zValue": [
            "FORMATION_CATAPHRACT",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "TechPrereq": "TECH_BARDING",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "5",
        "iFatigue": "3",
        "iStrength": "100",
        "iHPMax": "20",
        "iProduction": "160",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "4"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_CIRCLE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_CIRCLE",
            "iValue": "25"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_ROUT"
        }
      },
      {
        "zType": "UNIT_HORSE_ARCHER",
        "Name": "TEXT_UNIT_HORSE_ARCHER",
        "zIconName": "UNIT_HORSE_ARCHER",
        "zPortraitName": "UNIT_HORSE_ARCHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "HORSEARCHER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "aeFormations": {
          "zValue": [
            "FORMATION_HORSE_ARCHER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "TechPrereq": "TECH_STIRRUPS",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "5",
        "iFatigue": "3",
        "iStrength": "60",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iProduction": "100",
        "iUpgradeCost": "100",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "3"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        }
      },
      {
        "zType": "UNIT_CAMEL_ARCHER",
        "Name": "TEXT_UNIT_CAMEL_ARCHER",
        "zIconName": "UNIT_CAMEL_ARCHER",
        "zPortraitName": "UNIT_CAMEL_ARCHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "CAMEL_ARCHER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "aeFormations": {
          "zValue": [
            "FORMATION_CAMEL_ARCHER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_CAMEL",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "5",
        "iFatigue": "4",
        "iStrength": "50",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iProduction": "80",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_HORSE",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "3"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_CAMEL"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_NOMAD"
        }
      },
      {
        "zType": "UNIT_WAR_ELEPHANT",
        "Name": "TEXT_UNIT_WAR_ELEPHANT",
        "zIconName": "UNIT_WAR_ELEPHANT",
        "zPortraitName": "UNIT_WAR_ELEPHANT",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELEPHANT",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_WAR_ELEPHANT",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_ELEPHANT",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "60",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": "2.5",
        "fAnimNormalMoveDuration": "2.5",
        "fAnimNormalMoveSpeed": "2",
        "fAnimIntermediateMoveDuration": "1.5",
        "fAnimIntermediateMoveSpeed": "3",
        "fAnimFastMoveDuration": ".75",
        "fAnimFastMoveSpeed": "4",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "3"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_ELEPHANT"
          ]
        },
        "aeEffectUnit": {
          "zValue": [
            "EFFECTUNIT_ROUT",
            "EFFECTUNIT_PANIC"
          ]
        }
      },
      {
        "zType": "UNIT_BALLISTA",
        "Name": "TEXT_UNIT_BALLISTA",
        "zIconName": "UNIT_BALLISTA",
        "zPortraitName": "UNIT_BALLISTA",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "BALLISTA",
        "zAudioMovementType": "SIEGE_METAL",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_metal_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_BALLISTA",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_SIEGE",
        "TechPrereq": "TECH_TORSION",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "1",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "50",
        "iRangeMax": "1",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": "2",
        "fAnimNormalMoveDuration": "1",
        "fAnimNormalMoveSpeed": "1",
        "fAnimIntermediateMoveDuration": ".5",
        "fAnimIntermediateMoveSpeed": "1.2",
        "fAnimFastMoveDuration": ".3",
        "fAnimFastMoveSpeed": "2",
        "bRangeFlat": "1",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiUnitTraitModifierAttack": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "iValue": "100"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "3"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "2"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "50"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_POLYBOLOS"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_SIEGE"
          ]
        }
      },
      {
        "zType": "UNIT_POLYBOLOS",
        "Name": "TEXT_UNIT_POLYBOLOS",
        "zIconName": "UNIT_POLYBOLOS",
        "zPortraitName": "UNIT_POLYBOLOS",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "POLYBOLOS",
        "zAudioMovementType": "SIEGE_METAL",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_metal_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_POLYBOLOS",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "TechPrereq": "TECH_CHAIN_DRIVE",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "100",
        "iRangeMax": "1",
        "iHPMax": "20",
        "iProduction": "120",
        "iUpgradeCost": "120",
        "fAttackDuration": "2",
        "bRangeFlat": "1",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "bBarbCity": "1",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "4"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": [
            {
              "zIndex": "ATTACK_PIERCE",
              "iValue": "1"
            },
            {
              "zIndex": "ATTACK_CLEAVE",
              "iValue": "1"
            }
          ]
        },
        "aiAttackPercent": {
          "Pair": [
            {
              "zIndex": "ATTACK_PIERCE",
              "iValue": "50"
            },
            {
              "zIndex": "ATTACK_CLEAVE",
              "iValue": "50"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_SIEGE"
          ]
        }
      },
      {
        "zType": "UNIT_ONAGER",
        "Name": "TEXT_UNIT_ONAGER",
        "zIconName": "UNIT_ONAGER",
        "zPortraitName": "UNIT_ONAGER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ONAGER",
        "zAudioMovementType": "SIEGE_WOOD_MEDIUM",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_metal_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_ONAGER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_SIEGE",
        "TechPrereq": "TECH_MACHINERY",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "1",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "60",
        "iRangeMin": "2",
        "iRangeMax": "4",
        "iHPMax": "20",
        "iProduction": "100",
        "fAttackDuration": "2",
        "fAnimNormalMoveDuration": "1",
        "fAnimNormalMoveSpeed": "1",
        "fAnimIntermediateMoveDuration": ".5",
        "fAnimIntermediateMoveSpeed": "1.2",
        "fAnimFastMoveDuration": ".3",
        "fAnimFastMoveSpeed": "2",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bUnlimber": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "3"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_SPLASH",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_SPLASH",
            "iValue": "25"
          }
        },
        "aeObsoleteTech": {
          "zValue": "TECH_BALLISTICS"
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_MANGONEL"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_SIEGE"
          ]
        }
      },
      {
        "zType": "UNIT_MANGONEL",
        "Name": "TEXT_UNIT_MANGONEL",
        "zIconName": "UNIT_MANGONEL",
        "zPortraitName": "UNIT_MANGONEL",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MANGONEL",
        "zAudioMovementType": "SIEGE_WOOD_METAL_LARGE",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_metal_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_MANGONEL",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_SIEGE",
        "TechPrereq": "TECH_BALLISTICS",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "1",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "80",
        "iRangeMin": "2",
        "iRangeMax": "5",
        "iHPMax": "20",
        "iProduction": "120",
        "iUpgradeCost": "120",
        "fAttackDuration": "2",
        "fAnimNormalMoveDuration": ".7",
        "fAnimNormalMoveSpeed": "1",
        "fAnimIntermediateMoveDuration": ".5",
        "fAnimIntermediateMoveSpeed": "1.2",
        "fAnimFastMoveDuration": ".3",
        "fAnimFastMoveSpeed": "2",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bUnlimber": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "4"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_SPLASH",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_SPLASH",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_SIEGE"
          ]
        }
      },
      {
        "zType": "UNIT_BIREME",
        "Name": "TEXT_UNIT_BIREME",
        "zIconName": "UNIT_BIREME",
        "zPortraitName": "UNIT_BIREME",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "NAVAL",
        "zAudioMovementType": "NAVAL",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_metal_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_BIREME",
            "FORMATION_BIREME_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_WATER",
        "TechPrereq": "TECH_NAVIGATION",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "5",
        "iReveal": "1",
        "iFatigue": "3",
        "iWaterControl": "3",
        "iStrength": "60",
        "iRangeMax": "1",
        "iHPMax": "20",
        "iProduction": "80",
        "fAttackDuration": "2",
        "bWater": "1",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bAnchor": "1",
        "bHarvest": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "2"
          }
        },
        "aeObsoleteTech": {
          "zValue": "TECH_CARTOGRAPHY"
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_TRIREME"
        },
        "aeUnitTrait": {
          "zValue": "UNITTRAIT_SHIP"
        }
      },
      {
        "zType": "UNIT_TRIREME",
        "Name": "TEXT_UNIT_TRIREME",
        "zIconName": "UNIT_TRIREME",
        "zPortraitName": "UNIT_TRIREME",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "NAVAL",
        "zAudioMovementType": "NAVAL",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_metal_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_TRIREME",
            "FORMATION_TRIREME_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_WATER",
        "TechPrereq": "TECH_CARTOGRAPHY",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "4",
        "iVision": "6",
        "iReveal": "1",
        "iFatigue": "3",
        "iWaterControl": "4",
        "iStrength": "80",
        "iRangeMax": "1",
        "iHPMax": "20",
        "iProduction": "100",
        "iUpgradeCost": "100",
        "fAttackDuration": "2",
        "bWater": "1",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bAnchor": "1",
        "bHarvest": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "3"
            }
          ]
        },
        "aeObsoleteTech": {
          "zValue": "TECH_LATEEN_SAIL"
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_DROMON"
        },
        "aeUnitTrait": {
          "zValue": "UNITTRAIT_SHIP"
        }
      },
      {
        "zType": "UNIT_DROMON",
        "Name": "TEXT_UNIT_DROMON",
        "zIconName": "UNIT_DROMON",
        "zPortraitName": "UNIT_DROMON",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "NAVAL",
        "zAudioMovementType": "NAVAL",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_metal_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_DROMON",
            "FORMATION_DROMON_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_WATER",
        "TechPrereq": "TECH_LATEEN_SAIL",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "5",
        "iVision": "7",
        "iReveal": "1",
        "iFatigue": "3",
        "iWaterControl": "5",
        "iStrength": "100",
        "iRangeMax": "1",
        "iHPMax": "20",
        "iProduction": "120",
        "iUpgradeCost": "120",
        "fAttackDuration": "2",
        "bWater": "1",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bAnchor": "1",
        "bHarvest": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "150"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "4"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": "UNITTRAIT_SHIP"
        }
      },
      {
        "zType": "UNIT_BATTERING_RAM",
        "Name": "TEXT_UNIT_BATTERING_RAM",
        "zIconName": "UNIT_BATTERING_RAM",
        "zPortraitName": "UNIT_BATTERING_RAM",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "BATTERING_RAM",
        "zAudioMovementType": "SIEGE_WOOD_METAL_LARGE",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_metal_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_BATTERING_RAM",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_SIEGE",
        "NationPrereq": "NATION_ASSYRIA",
        "CulturePrereq": "CULTURE_DEVELOPING",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_2",
        "ImprovementObsolete": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "1",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "60",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": "2",
        "fAnimNormalMoveDuration": ".7",
        "fAnimNormalMoveSpeed": "1",
        "fAnimIntermediateMoveDuration": ".5",
        "fAnimIntermediateMoveSpeed": "1.2",
        "fAnimFastMoveDuration": ".3",
        "fAnimFastMoveSpeed": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiUnitTraitModifierDefense": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "iValue": "25"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "2"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_SIEGE_TOWER"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_SIEGE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_ASSAULT"
        }
      },
      {
        "zType": "UNIT_SIEGE_TOWER",
        "Name": "TEXT_UNIT_SIEGE_TOWER",
        "zIconName": "UNIT_SIEGE_TOWER",
        "zPortraitName": "UNIT_SIEGE_TOWER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SIEGE_TOWER",
        "zAudioMovementType": "SIEGE_WOOD_LARGE",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_metal_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_SIEGE_TOWER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "Achievement": "ACHIEVEMENT_UNIT_SIEGE_TOWER",
        "UnitCycle": "UNITCYCLE_MILITARY_SIEGE",
        "NationPrereq": "NATION_ASSYRIA",
        "CulturePrereq": "CULTURE_STRONG",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "1",
        "iVision": "3",
        "iFatigue": "3",
        "iStrength": "80",
        "iHPMax": "20",
        "iProduction": "160",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "fAnimNormalMoveDuration": ".7",
        "fAnimNormalMoveSpeed": "1",
        "fAnimIntermediateMoveDuration": ".5",
        "fAnimIntermediateMoveSpeed": "1.2",
        "fAnimFastMoveDuration": ".3",
        "fAnimFastMoveSpeed": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiUnitTraitModifierDefense": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "iValue": "25"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "3"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_SIEGE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_ASSAULT"
        }
      },
      {
        "zType": "UNIT_AKKADIAN_ARCHER",
        "Name": "TEXT_UNIT_AKKADIAN_ARCHER",
        "zIconName": "UNIT_AKKADIAN_ARCHER",
        "zPortraitName": "UNIT_AKKADIAN_ARCHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "BOW",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "aeFormations": {
          "zValue": [
            "FORMATION_AKKADIAN_ARCHER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "NationPrereq": "NATION_BABYLONIA",
        "CulturePrereq": "CULTURE_DEVELOPING",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_2",
        "ImprovementObsolete": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "60",
        "iRangeMax": "3",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "150"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "2"
          }
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_SPLASH",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_SPLASH",
            "iValue": "25"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_CIMMERIAN_ARCHER"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_CIMMERIAN_ARCHER",
        "Name": "TEXT_UNIT_CIMMERIAN_ARCHER",
        "zIconName": "UNIT_CIMMERIAN_ARCHER",
        "zPortraitName": "UNIT_CIMMERIAN_ARCHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "BOW",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "aeFormations": {
          "zValue": [
            "FORMATION_CIMMERIAN_ARCHER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "Achievement": "ACHIEVEMENT_UNIT_CIMMERIAN_ARCHER",
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "NationPrereq": "NATION_BABYLONIA",
        "CulturePrereq": "CULTURE_STRONG",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "80",
        "iRangeMax": "3",
        "iHPMax": "20",
        "iProduction": "160",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "200"
          }
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "3"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_SPLASH",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_SPLASH",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_AFRICAN_ELEPHANT",
        "Name": "TEXT_UNIT_AFRICAN_ELEPHANT",
        "zIconName": "UNIT_AFRICAN_ELEPHANT",
        "zPortraitName": "UNIT_AFRICAN_ELEPHANT",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELEPHANT",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_AFRICAN_ELEPHANT",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "NationPrereq": "NATION_CARTHAGE",
        "CulturePrereq": "CULTURE_DEVELOPING",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_ELEPHANT",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_2",
        "ImprovementObsolete": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "5",
        "iFatigue": "3",
        "iStrength": "60",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": "2.5",
        "fAnimNormalMoveDuration": "2.5",
        "fAnimNormalMoveSpeed": "2",
        "fAnimIntermediateMoveDuration": "1.5",
        "fAnimIntermediateMoveSpeed": "3",
        "fAnimFastMoveDuration": ".75",
        "fAnimFastMoveSpeed": "4",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "3"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_CIRCLE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_CIRCLE",
            "iValue": "25"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_TURRETED_ELEPHANT"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_ELEPHANT"
          ]
        },
        "aeEffectUnit": {
          "zValue": [
            "EFFECTUNIT_ROUT",
            "EFFECTUNIT_PANIC"
          ]
        }
      },
      {
        "zType": "UNIT_TURRETED_ELEPHANT",
        "Name": "TEXT_UNIT_TURRETED_ELEPHANT",
        "zIconName": "UNIT_TURRETED_ELEPHANT",
        "zPortraitName": "UNIT_TURRETED_ELEPHANT",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELEPHANT",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "aeFormations": {
          "zValue": [
            "FORMATION_TURRETED_ELEPHANT",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "Achievement": "ACHIEVEMENT_UNIT_TURRETED_ELEPHANT",
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "NationPrereq": "NATION_CARTHAGE",
        "CulturePrereq": "CULTURE_STRONG",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_ELEPHANT",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "5",
        "iFatigue": "3",
        "iStrength": "80",
        "iHPMax": "20",
        "iProduction": "160",
        "iUpgradeCost": "160",
        "fAttackDuration": "2.5",
        "fAnimNormalMoveDuration": "2.5",
        "fAnimNormalMoveSpeed": "2",
        "fAnimIntermediateMoveDuration": "1.5",
        "fAnimIntermediateMoveSpeed": "3",
        "fAnimFastMoveDuration": ".75",
        "fAnimFastMoveSpeed": "4",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "4"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_CIRCLE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_CIRCLE",
            "iValue": "25"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_ELEPHANT"
          ]
        },
        "aeEffectUnit": {
          "zValue": [
            "EFFECTUNIT_ROUT",
            "EFFECTUNIT_PANIC"
          ]
        }
      },
      {
        "zType": "UNIT_LIGHT_CHARIOT",
        "Name": "TEXT_UNIT_LIGHT_CHARIOT",
        "zIconName": "UNIT_LIGHT_CHARIOT",
        "zPortraitName": "UNIT_LIGHT_CHARIOT",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "CHARIOT",
        "zAudioMovementType": "LIGHT_CHARIOT_BUGGY",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "aeFormations": {
          "zValue": [
            "FORMATION_LIGHT_CHARIOT",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "NationPrereq": "NATION_EGYPT",
        "CulturePrereq": "CULTURE_DEVELOPING",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_2",
        "ImprovementObsolete": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "4",
        "iVision": "6",
        "iFatigue": "3",
        "iStrength": "60",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "2"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_KUSHITE_CAVALRY"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        }
      },
      {
        "zType": "UNIT_KUSHITE_CAVALRY",
        "Name": "TEXT_UNIT_KUSHITE_CAVALRY",
        "zIconName": "UNIT_KUSHITE_CAVALRY",
        "zPortraitName": "UNIT_KUSHITE_CAVALRY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "NOMAD_MARAUDER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "aeFormations": {
          "zValue": [
            "FORMATION_KUSHITE_CAVALRY",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "Achievement": "ACHIEVEMENT_UNIT_KUSHITE_CAVALRY",
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "NationPrereq": "NATION_EGYPT",
        "CulturePrereq": "CULTURE_STRONG",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "4",
        "iVision": "6",
        "iFatigue": "3",
        "iStrength": "80",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iProduction": "160",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "1"
            },
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "3"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        }
      },
      {
        "zType": "UNIT_HOPLITE",
        "Name": "TEXT_UNIT_HOPLITE",
        "zIconName": "UNIT_HOPLITE",
        "zPortraitName": "UNIT_HOPLITE",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "HOPLITE",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "aeFormations": {
          "zValue": [
            "FORMATION_HOPLITE",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "NationPrereq": "NATION_GREECE",
        "CulturePrereq": "CULTURE_DEVELOPING",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_2",
        "ImprovementObsolete": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "60",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "50"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "2"
          }
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "25"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_PHALANGITE"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_POLEARM"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_FORMATION"
        }
      },
      {
        "zType": "UNIT_PHALANGITE",
        "Name": "TEXT_UNIT_PHALANGITE",
        "zIconName": "UNIT_PHALANGITE",
        "zPortraitName": "UNIT_PHALANGITE",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "PHALANGITE",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "aeFormations": {
          "zValue": [
            "FORMATION_PHALANGITE",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "Achievement": "ACHIEVEMENT_UNIT_PHALANGITE",
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "NationPrereq": "NATION_GREECE",
        "CulturePrereq": "CULTURE_STRONG",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "80",
        "iHPMax": "20",
        "iProduction": "160",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiUnitTraitModifierMelee": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "100"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "4"
            }
          ]
        },
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "2"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "25"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_POLEARM"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_FORMATION"
        }
      },
      {
        "zType": "UNIT_PALTON_CAVALRY",
        "Name": "TEXT_UNIT_PALTON_CAVALRY",
        "zIconName": "UNIT_PALTON_CAVALRY",
        "zPortraitName": "UNIT_PALTON_CAVALRY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "NOMAD_MARAUDER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "aeFormations": {
          "zValue": [
            "FORMATION_PALTON_CAVALRY",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "NationPrereq": "NATION_PERSIA",
        "CulturePrereq": "CULTURE_DEVELOPING",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_2",
        "ImprovementObsolete": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "60",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "2"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_CATAPHRACT_ARCHER"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_ROUT"
        }
      },
      {
        "zType": "UNIT_CATAPHRACT_ARCHER",
        "Name": "TEXT_UNIT_CATAPHRACT_ARCHER",
        "zIconName": "UNIT_CATAPHRACT_ARCHER",
        "zPortraitName": "UNIT_CATAPHRACT_ARCHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "CATAPHRACT_ARCHER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "aeFormations": {
          "zValue": [
            "FORMATION_CATAPHRACT_ARCHER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "Achievement": "ACHIEVEMENT_UNIT_CATAPHRACT_ARCHER",
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "NationPrereq": "NATION_PERSIA",
        "CulturePrereq": "CULTURE_STRONG",
        "EffectCityPrereq": "EFFECTCITY_RESOURCE_HORSE",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "3",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "80",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iProduction": "160",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            }
          ]
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "4"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_ROUT"
        }
      },
      {
        "zType": "UNIT_HASTATUS",
        "Name": "TEXT_UNIT_HASTATUS",
        "zIconName": "UNIT_HASTATUS",
        "zPortraitName": "UNIT_HASTATUS",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "HASTATUS",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_wood",
        "aeFormations": {
          "zValue": [
            "FORMATION_HASTATUS",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "NationPrereq": "NATION_ROME",
        "CulturePrereq": "CULTURE_DEVELOPING",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_2",
        "ImprovementObsolete": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "60",
        "iHPMax": "20",
        "iProduction": "120",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bTestudo": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "iValue": "25"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "150"
          }
        },
        "aiYieldConsumption": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "2"
          }
        },
        "aeUpgradeUnit": {
          "zValue": "UNIT_LEGIONARY"
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_LEGIONARY",
        "Name": "TEXT_UNIT_LEGIONARY",
        "zIconName": "UNIT_LEGIONARY",
        "zPortraitName": "UNIT_LEGIONARY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "LEGIONARY",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "aeFormations": {
          "zValue": [
            "FORMATION_LEGIONARY",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "Achievement": "ACHIEVEMENT_UNIT_LEGIONARY",
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "NationPrereq": "NATION_ROME",
        "CulturePrereq": "CULTURE_STRONG",
        "ImprovementPrereq": "IMPROVEMENT_GARRISON_3",
        "ProductionType": "YIELD_TRAINING",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "3",
        "iStrength": "80",
        "iHPMax": "20",
        "iProduction": "160",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bFortify": "1",
        "bTestudo": "1",
        "bPillage": "1",
        "bPromote": "1",
        "bGeneral": "1",
        "aiUnitTraitModifier": {
          "Pair": {
            "zIndex": "UNITTRAIT_INFANTRY",
            "iValue": "25"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "200"
          }
        },
        "aiYieldConsumption": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "2"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "4"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY"
          ]
        }
      },
      {
        "zType": "UNIT_MARAUDER_1",
        "Name": "TEXT_UNIT_MARAUDER_1",
        "zIconName": "UNIT_MARAUDER",
        "zPortraitName": "UNIT_MARAUDER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "MARAUDER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "TRIBE_BARBARIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_MARAUDER"
            },
            {
              "zIndex": "TRIBE_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_MARAUDER"
            },
            {
              "zIndex": "TRIBE_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_MARAUDER"
            },
            {
              "zIndex": "TRIBE_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_MARAUDER"
            },
            {
              "zIndex": "TRIBE_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_MARAUDER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_MARAUDER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "30",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeTribeUpgradeUnit": {
          "Pair": [
            {
              "zIndex": "TRIBE_BARBARIANS",
              "zValue": "UNIT_MARAUDER_2"
            },
            {
              "zIndex": "TRIBE_GAULS",
              "zValue": "UNIT_MARAUDER_2"
            },
            {
              "zIndex": "TRIBE_VANDALS",
              "zValue": "UNIT_MARAUDER_2"
            },
            {
              "zIndex": "TRIBE_DANES",
              "zValue": "UNIT_MARAUDER_2"
            },
            {
              "zIndex": "TRIBE_THRACIANS",
              "zValue": "UNIT_MARAUDER_2"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        }
      },
      {
        "zType": "UNIT_SKIRMISHER_1",
        "Name": "TEXT_UNIT_SKIRMISHER_1",
        "zIconName": "UNIT_SKIRMISHER",
        "zPortraitName": "UNIT_SKIRMISHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "SKIRMISHER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "TRIBE_BARBARIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "TRIBE_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "TRIBE_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "TRIBE_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "TRIBE_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_SKIRMISHER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_SKIRMISHER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "30",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeTribeUpgradeUnit": {
          "Pair": [
            {
              "zIndex": "TRIBE_BARBARIANS",
              "zValue": "UNIT_SKIRMISHER_2"
            },
            {
              "zIndex": "TRIBE_GAULS",
              "zValue": "UNIT_SKIRMISHER_2"
            },
            {
              "zIndex": "TRIBE_VANDALS",
              "zValue": "UNIT_SKIRMISHER_2"
            },
            {
              "zIndex": "TRIBE_DANES",
              "zValue": "UNIT_SKIRMISHER_2"
            },
            {
              "zIndex": "TRIBE_THRACIANS",
              "zValue": "UNIT_SKIRMISHER_2"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        }
      },
      {
        "zType": "UNIT_NOMAD_MARAUDER_1",
        "Name": "TEXT_UNIT_NOMAD_MARAUDER_1",
        "zIconName": "UNIT_NOMAD_MARAUDER",
        "zPortraitName": "UNIT_NOMAD_MARAUDER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "NOMAD_MARAUDER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "TRIBE_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_NOMAD_MARAUDER"
            },
            {
              "zIndex": "TRIBE_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_NOMAD_MARAUDER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_NOMAD_MARAUDER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "5",
        "iFatigue": "1",
        "iStrength": "30",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "fAnimNormalMoveDuration": ".5",
        "fAnimNormalMoveSpeed": "1.5",
        "fAnimIntermediateMoveDuration": ".3",
        "fAnimIntermediateMoveSpeed": "1.2",
        "fAnimFastMoveDuration": ".2",
        "fAnimFastMoveSpeed": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeTribeUpgradeUnit": {
          "Pair": [
            {
              "zIndex": "TRIBE_SCYTHIANS",
              "zValue": "UNIT_NOMAD_MARAUDER_2"
            },
            {
              "zIndex": "TRIBE_NUMIDIANS",
              "zValue": "UNIT_NOMAD_MARAUDER_2"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE",
            "UNITTRAIT_TRIBAL"
          ]
        }
      },
      {
        "zType": "UNIT_NOMAD_SKIRMISHER_1",
        "Name": "TEXT_UNIT_NOMAD_SKIRMISHER_1",
        "zIconName": "UNIT_NOMAD_SKIRMISHER",
        "zPortraitName": "UNIT_NOMAD_SKIRMISHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "NOMAD_SKIRMISHER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "TRIBE_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_NOMAD_SKIRMISHER"
            },
            {
              "zIndex": "TRIBE_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_NOMAD_SKIRMISHER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_NOMAD_SKIRMISHER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "5",
        "iFatigue": "1",
        "iStrength": "30",
        "iRangeMax": "2",
        "iHPMax": "20",
        "fAttackDuration": "2",
        "fAnimNormalMoveDuration": ".5",
        "fAnimNormalMoveSpeed": "1.5",
        "fAnimIntermediateMoveDuration": ".3",
        "fAnimIntermediateMoveSpeed": "1.2",
        "fAnimFastMoveDuration": ".2",
        "fAnimFastMoveSpeed": "2",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeTribeUpgradeUnit": {
          "Pair": [
            {
              "zIndex": "TRIBE_SCYTHIANS",
              "zValue": "UNIT_NOMAD_SKIRMISHER_2"
            },
            {
              "zIndex": "TRIBE_NUMIDIANS",
              "zValue": "UNIT_NOMAD_SKIRMISHER_2"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE",
            "UNITTRAIT_TRIBAL"
          ]
        }
      },
      {
        "zType": "UNIT_MARAUDER_2",
        "Name": "TEXT_UNIT_MARAUDER_2",
        "zIconName": "UNIT_ELITE_MARAUDER",
        "zPortraitName": "UNIT_ELITE_MARAUDER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELITE_MARAUDER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_wood",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "TRIBE_BARBARIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_MARAUDER"
            },
            {
              "zIndex": "TRIBE_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_MARAUDER"
            },
            {
              "zIndex": "TRIBE_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_MARAUDER"
            },
            {
              "zIndex": "TRIBE_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_MARAUDER"
            },
            {
              "zIndex": "TRIBE_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_MARAUDER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_MARAUDER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "40",
        "iHPMax": "20",
        "iUpgradeCost": "120",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeTribeUpgradeUnit": {
          "Pair": [
            {
              "zIndex": "TRIBE_GAULS",
              "zValue": "UNIT_GAESATA_1"
            },
            {
              "zIndex": "TRIBE_VANDALS",
              "zValue": "UNIT_WARLORD_1"
            },
            {
              "zIndex": "TRIBE_DANES",
              "zValue": "UNIT_HUSCARL_1"
            },
            {
              "zIndex": "TRIBE_THRACIANS",
              "zValue": "UNIT_WARLORD_1"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        }
      },
      {
        "zType": "UNIT_SKIRMISHER_2",
        "Name": "TEXT_UNIT_SKIRMISHER_2",
        "zIconName": "UNIT_ELITE_SKIRMISHER",
        "zPortraitName": "UNIT_ELITE_SKIRMISHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELITE_SKIRMISHER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "TRIBE_BARBARIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "TRIBE_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "TRIBE_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "TRIBE_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_SKIRMISHER"
            },
            {
              "zIndex": "TRIBE_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_SKIRMISHER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_SKIRMISHER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "40",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iUpgradeCost": "120",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeTribeUpgradeUnit": {
          "Pair": [
            {
              "zIndex": "TRIBE_GAULS",
              "zValue": "UNIT_JAVELINEER_1"
            },
            {
              "zIndex": "TRIBE_VANDALS",
              "zValue": "UNIT_CLUBTHROWER_1"
            },
            {
              "zIndex": "TRIBE_DANES",
              "zValue": "UNIT_JAVELINEER_1"
            },
            {
              "zIndex": "TRIBE_THRACIANS",
              "zValue": "UNIT_PELTAST_1"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        }
      },
      {
        "zType": "UNIT_NOMAD_MARAUDER_2",
        "Name": "TEXT_UNIT_NOMAD_MARAUDER_2",
        "zIconName": "UNIT_ELITE_NOMAD_MARAUDER",
        "zPortraitName": "UNIT_ELITE_NOMAD_MARAUDER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELITE_NOMAD_MARAUDER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "TRIBE_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_NOMAD_MARAUDER"
            },
            {
              "zIndex": "TRIBE_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_NOMAD_MARAUDER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_NOMAD_MARAUDER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "5",
        "iFatigue": "1",
        "iStrength": "40",
        "iHPMax": "20",
        "iUpgradeCost": "120",
        "fAttackDuration": "2",
        "fAnimNormalMoveDuration": ".5",
        "fAnimNormalMoveSpeed": "1.5",
        "fAnimIntermediateMoveDuration": ".3",
        "fAnimIntermediateMoveSpeed": "1.2",
        "fAnimFastMoveDuration": ".2",
        "fAnimFastMoveSpeed": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeTribeUpgradeUnit": {
          "Pair": [
            {
              "zIndex": "TRIBE_SCYTHIANS",
              "zValue": "UNIT_NOMAD_WARLORD_1"
            },
            {
              "zIndex": "TRIBE_NUMIDIANS",
              "zValue": "UNIT_NOMAD_WARLORD_1"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE",
            "UNITTRAIT_TRIBAL"
          ]
        }
      },
      {
        "zType": "UNIT_NOMAD_SKIRMISHER_2",
        "Name": "TEXT_UNIT_NOMAD_SKIRMISHER_2",
        "zIconName": "UNIT_ELITE_NOMAD_SKIRMISHER",
        "zPortraitName": "UNIT_ELITE_NOMAD_SKIRMISHER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELITE_NOMAD_SKIRMISHER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "TRIBE_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_NOMAD_SKIRMISHER"
            },
            {
              "zIndex": "TRIBE_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_NOMAD_SKIRMISHER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_NOMAD_SKIRMISHER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "5",
        "iFatigue": "1",
        "iStrength": "40",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iUpgradeCost": "120",
        "fAttackDuration": "2",
        "fAnimNormalMoveDuration": ".5",
        "fAnimNormalMoveSpeed": "1.5",
        "fAnimIntermediateMoveDuration": ".3",
        "fAnimIntermediateMoveSpeed": "1.2",
        "fAnimFastMoveDuration": ".2",
        "fAnimFastMoveSpeed": "2",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeTribeUpgradeUnit": {
          "Pair": [
            {
              "zIndex": "TRIBE_SCYTHIANS",
              "zValue": "UNIT_AMAZON_CAVALRY_1"
            },
            {
              "zIndex": "TRIBE_NUMIDIANS",
              "zValue": "UNIT_LIBYAN_CAVALRY_1"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE",
            "UNITTRAIT_TRIBAL"
          ]
        }
      },
      {
        "zType": "UNIT_WARLORD_1",
        "Name": "TEXT_UNIT_WARLORD_1",
        "zIconName": "UNIT_WARLORD",
        "zPortraitName": "UNIT_WARLORD",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "WARLORD",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_wood",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "TRIBE_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_WARLORD"
            },
            {
              "zIndex": "TRIBE_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_WARLORD"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_WARLORD",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "50",
        "iHPMax": "20",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeTribeUpgradeUnit": {
          "Pair": [
            {
              "zIndex": "TRIBE_VANDALS",
              "zValue": "UNIT_WARLORD_2"
            },
            {
              "zIndex": "TRIBE_THRACIANS",
              "zValue": "UNIT_WARLORD_2"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        }
      },
      {
        "zType": "UNIT_JAVELINEER_1",
        "Name": "TEXT_UNIT_JAVELINEER_1",
        "zIconName": "UNIT_JAVELINEER",
        "zPortraitName": "UNIT_JAVELINEER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "JAVELINEER",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_chain_mail",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "TRIBE_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_JAVELINEER"
            },
            {
              "zIndex": "TRIBE_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_JAVELINEER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_JAVELINEER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "50",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeTribeUpgradeUnit": {
          "Pair": [
            {
              "zIndex": "TRIBE_GAULS",
              "zValue": "UNIT_JAVELINEER_2"
            },
            {
              "zIndex": "TRIBE_DANES",
              "zValue": "UNIT_JAVELINEER_2"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        }
      },
      {
        "zType": "UNIT_NOMAD_WARLORD_1",
        "Name": "TEXT_UNIT_NOMAD_WARLORD_1",
        "zIconName": "UNIT_NOMAD_WARLORD",
        "zPortraitName": "UNIT_NOMAD_WARLORD",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "NOMAD_WARLORD",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_metal",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "TRIBE_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_NOMAD_WARLORD"
            },
            {
              "zIndex": "TRIBE_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_NOMAD_WARLORD"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_NOMAD_WARLORD",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "5",
        "iFatigue": "1",
        "iStrength": "50",
        "iHPMax": "20",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeTribeUpgradeUnit": {
          "Pair": [
            {
              "zIndex": "TRIBE_SCYTHIANS",
              "zValue": "UNIT_NOMAD_WARLORD_2"
            },
            {
              "zIndex": "TRIBE_NUMIDIANS",
              "zValue": "UNIT_NOMAD_WARLORD_2"
            }
          ]
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE",
            "UNITTRAIT_TRIBAL"
          ]
        }
      },
      {
        "zType": "UNIT_GAESATA_1",
        "Name": "TEXT_UNIT_GAESATA_1",
        "zIconName": "UNIT_GAESATA",
        "zPortraitName": "UNIT_GAESATA",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "GAESATA",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_chain_mail",
        "azBarbarianPortraitName": {
          "Pair": {
            "zIndex": "TRIBE_GAULS",
            "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_GAESATA"
          }
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_GAESATA_GAULS",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "50",
        "iHPMax": "20",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "50"
          }
        },
        "aeTribeUpgradeUnit": {
          "Pair": {
            "zIndex": "TRIBE_GAULS",
            "zValue": "UNIT_GAESATA_2"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_RANGER"
        }
      },
      {
        "zType": "UNIT_HUSCARL_1",
        "Name": "TEXT_UNIT_HUSCARL_1",
        "zIconName": "UNIT_HUSCARL",
        "zPortraitName": "UNIT_HUSCARL",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "HUSCARL",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_wood",
        "azBarbarianPortraitName": {
          "Pair": {
            "zIndex": "TRIBE_DANES",
            "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_HUSCARL"
          }
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_HUSCARL_DANES",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "50",
        "iHPMax": "20",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_CLEAVE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_CLEAVE",
            "iValue": "50"
          }
        },
        "aeTribeUpgradeUnit": {
          "Pair": {
            "zIndex": "TRIBE_DANES",
            "zValue": "UNIT_HUSCARL_2"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_COLD"
        }
      },
      {
        "zType": "UNIT_CLUBTHROWER_1",
        "Name": "TEXT_UNIT_CLUBTHROWER_1",
        "zIconName": "UNIT_CLUBTHROWER",
        "zPortraitName": "UNIT_CLUBTHROWER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "CLUBTHROWER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_chain_mail",
        "azBarbarianPortraitName": {
          "Pair": {
            "zIndex": "TRIBE_VANDALS",
            "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_CLUBTHROWER"
          }
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_CLUBTHROWER_VANDALS",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "50",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeTribeUpgradeUnit": {
          "Pair": {
            "zIndex": "TRIBE_VANDALS",
            "zValue": "UNIT_CLUBTHROWER_2"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_FIERCE"
        }
      },
      {
        "zType": "UNIT_PELTAST_1",
        "Name": "TEXT_UNIT_PELTAST_1",
        "zIconName": "UNIT_PELTAST",
        "zPortraitName": "UNIT_PELTAST",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "PELTAST",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_chain_mail",
        "azBarbarianPortraitName": {
          "Pair": {
            "zIndex": "TRIBE_THRACIANS",
            "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_PELTAST"
          }
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_PELTAST_THRACIANS",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "50",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeTribeUpgradeUnit": {
          "Pair": {
            "zIndex": "TRIBE_THRACIANS",
            "zValue": "UNIT_PELTAST_2"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_HIGHLANDER"
        }
      },
      {
        "zType": "UNIT_AMAZON_CAVALRY_1",
        "Name": "TEXT_UNIT_AMAZON_CAVALRY_1",
        "zIconName": "UNIT_AMAZON_CAVALRY",
        "zPortraitName": "UNIT_AMAZON_CAVALRY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "AMAZON_CAVALRY",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "azBarbarianPortraitName": {
          "Pair": {
            "zIndex": "TRIBE_SCYTHIANS",
            "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_AMAZON_CAVALRY"
          }
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_AMAZON_CAVALRY_SCYTHIANS",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "5",
        "iFatigue": "1",
        "iStrength": "50",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "fAnimNormalMoveDuration": ".5",
        "fAnimNormalMoveSpeed": "1.5",
        "fAnimIntermediateMoveDuration": ".3",
        "fAnimIntermediateMoveSpeed": "1.2",
        "fAnimFastMoveDuration": ".2",
        "fAnimFastMoveSpeed": "2",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeTribeUpgradeUnit": {
          "Pair": {
            "zIndex": "TRIBE_SCYTHIANS",
            "zValue": "UNIT_AMAZON_CAVALRY_2"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE",
            "UNITTRAIT_TRIBAL"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_SHIELDBEARER"
        }
      },
      {
        "zType": "UNIT_LIBYAN_CAVALRY_1",
        "Name": "TEXT_UNIT_LIBYAN_CAVALRY_1",
        "zIconName": "UNIT_LIBYAN_CAVALRY",
        "zPortraitName": "UNIT_LIBYAN_CAVALRY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "LIBYAN_CAVALRY",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "azBarbarianPortraitName": {
          "Pair": {
            "zIndex": "TRIBE_NUMIDIANS",
            "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_LIBYAN_CAVALRY"
          }
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_LIBYAN_CAVALRY_NUMIDIANS",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "5",
        "iFatigue": "1",
        "iStrength": "50",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iUpgradeCost": "160",
        "fAttackDuration": "2",
        "fAnimNormalMoveDuration": ".5",
        "fAnimNormalMoveSpeed": "1.5",
        "fAnimIntermediateMoveDuration": ".3",
        "fAnimIntermediateMoveSpeed": "1.2",
        "fAnimFastMoveDuration": ".2",
        "fAnimFastMoveSpeed": "2",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeTribeUpgradeUnit": {
          "Pair": {
            "zIndex": "TRIBE_NUMIDIANS",
            "zValue": "UNIT_LIBYAN_CAVALRY_2"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE",
            "UNITTRAIT_TRIBAL"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_NOMAD"
        }
      },
      {
        "zType": "UNIT_WARLORD_2",
        "Name": "TEXT_UNIT_WARLORD_2",
        "zIconName": "UNIT_ELITE_WARLORD",
        "zPortraitName": "UNIT_ELITE_WARLORD",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELITE_WARLORD",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_chain_mail",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "TRIBE_VANDALS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_WARLORD"
            },
            {
              "zIndex": "TRIBE_THRACIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_WARLORD"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_WARLORD",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "60",
        "iHPMax": "20",
        "iUpgradeCost": "200",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        }
      },
      {
        "zType": "UNIT_JAVELINEER_2",
        "Name": "TEXT_UNIT_JAVELINEER_2",
        "zIconName": "UNIT_ELITE_JAVELINEER",
        "zPortraitName": "UNIT_ELITE_JAVELINEER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELITE_JAVELINEER",
        "zAudioMovementType": "GENERIC",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_chain_mail",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "TRIBE_GAULS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_JAVELINEER"
            },
            {
              "zIndex": "TRIBE_DANES",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_JAVELINEER"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_JAVELINEER",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "60",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iUpgradeCost": "200",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        }
      },
      {
        "zType": "UNIT_NOMAD_WARLORD_2",
        "Name": "TEXT_UNIT_NOMAD_WARLORD_2",
        "zIconName": "UNIT_ELITE_NOMAD_WARLORD",
        "zPortraitName": "UNIT_ELITE_NOMAD_WARLORD",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELITE_NOMAD_WARLORD",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_chain_mail",
        "azBarbarianPortraitName": {
          "Pair": [
            {
              "zIndex": "TRIBE_SCYTHIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_NOMAD_WARLORD"
            },
            {
              "zIndex": "TRIBE_NUMIDIANS",
              "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_NOMAD_WARLORD"
            }
          ]
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_NOMAD_WARLORD",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "5",
        "iFatigue": "1",
        "iStrength": "60",
        "iHPMax": "20",
        "iUpgradeCost": "200",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE",
            "UNITTRAIT_TRIBAL"
          ]
        }
      },
      {
        "zType": "UNIT_GAESATA_2",
        "Name": "TEXT_UNIT_GAESATA_2",
        "zIconName": "UNIT_ELITE_GAESATA",
        "zPortraitName": "UNIT_ELITE_GAESATA",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELITE_GAESATA",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_chain_mail",
        "azBarbarianPortraitName": {
          "Pair": {
            "zIndex": "TRIBE_GAULS",
            "zValue": "BARBARIANPORTRAIT_BARBARIAN_GAULS_UNIT_GAESATA"
          }
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_GAESATA_GAULS",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "60",
        "iHPMax": "20",
        "iUpgradeCost": "200",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_PIERCE",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_RANGER"
        }
      },
      {
        "zType": "UNIT_HUSCARL_2",
        "Name": "TEXT_UNIT_HUSCARL_2",
        "zIconName": "UNIT_ELITE_HUSCARL",
        "zPortraitName": "UNIT_ELITE_HUSCARL",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELITE_HUSCARL",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_chain_mail",
        "azBarbarianPortraitName": {
          "Pair": {
            "zIndex": "TRIBE_DANES",
            "zValue": "BARBARIANPORTRAIT_BARBARIAN_DANES_UNIT_HUSCARL"
          }
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_HUSCARL_DANES",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_INFANTRY",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "60",
        "iHPMax": "20",
        "iUpgradeCost": "200",
        "fAttackDuration": "2",
        "bMelee": "1",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aiAttackValue": {
          "Pair": {
            "zIndex": "ATTACK_CLEAVE",
            "iValue": "1"
          }
        },
        "aiAttackPercent": {
          "Pair": {
            "zIndex": "ATTACK_CLEAVE",
            "iValue": "50"
          }
        },
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_MELEE",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_COLD"
        }
      },
      {
        "zType": "UNIT_CLUBTHROWER_2",
        "Name": "TEXT_UNIT_CLUBTHROWER_2",
        "zIconName": "UNIT_ELITE_CLUBTHROWER",
        "zPortraitName": "UNIT_ELITE_CLUBTHROWER",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELITE_CLUBTHROWER",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_chain_mail",
        "azBarbarianPortraitName": {
          "Pair": {
            "zIndex": "TRIBE_VANDALS",
            "zValue": "BARBARIANPORTRAIT_BARBARIAN_VANDALS_UNIT_CLUBTHROWER"
          }
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_CLUBTHROWER_VANDALS",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "60",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iUpgradeCost": "200",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_FIERCE"
        }
      },
      {
        "zType": "UNIT_PELTAST_2",
        "Name": "TEXT_UNIT_PELTAST_2",
        "zIconName": "UNIT_ELITE_PELTAST",
        "zPortraitName": "UNIT_ELITE_PELTAST",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELITE_PELTAST",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_chain_mail",
        "azBarbarianPortraitName": {
          "Pair": {
            "zIndex": "TRIBE_THRACIANS",
            "zValue": "BARBARIANPORTRAIT_BARBARIAN_THRACIANS_UNIT_PELTAST"
          }
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_PELTAST_THRACIANS",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_RANGED",
        "iMovement": "2",
        "iVision": "4",
        "iFatigue": "1",
        "iStrength": "60",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iUpgradeCost": "200",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_INFANTRY",
            "UNITTRAIT_TRIBAL"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_HIGHLANDER"
        }
      },
      {
        "zType": "UNIT_AMAZON_CAVALRY_2",
        "Name": "TEXT_UNIT_AMAZON_CAVALRY_2",
        "zIconName": "UNIT_ELITE_AMAZON_CAVALRY",
        "zPortraitName": "UNIT_ELITE_AMAZON_CAVALRY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELITE_AMAZON_CAVALRY",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "combo_flesh_chain_mail",
        "azBarbarianPortraitName": {
          "Pair": {
            "zIndex": "TRIBE_SCYTHIANS",
            "zValue": "BARBARIANPORTRAIT_BARBARIAN_SCYTHIANS_UNIT_AMAZON_CAVALRY"
          }
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_AMAZON_CAVALRY_SCYTHIANS",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "5",
        "iFatigue": "1",
        "iStrength": "60",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iUpgradeCost": "200",
        "fAttackDuration": "2",
        "fAnimNormalMoveDuration": ".5",
        "fAnimNormalMoveSpeed": "1.5",
        "fAnimIntermediateMoveDuration": ".3",
        "fAnimIntermediateMoveSpeed": "1.2",
        "fAnimFastMoveDuration": ".2",
        "fAnimFastMoveSpeed": "2",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE",
            "UNITTRAIT_TRIBAL"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_SHIELDBEARER"
        }
      },
      {
        "zType": "UNIT_LIBYAN_CAVALRY_2",
        "Name": "TEXT_UNIT_LIBYAN_CAVALRY_2",
        "zIconName": "UNIT_ELITE_LIBYAN_CAVALRY",
        "zPortraitName": "UNIT_ELITE_LIBYAN_CAVALRY",
        "zBackgroundName": "GenericUnitAttackBackground",
        "zAudioSelectionType": "ELITE_LIBYAN_CAVALRY",
        "zAudioMovementType": "ANIMATED",
        "zAudioAttackType": "ANIMATED",
        "zAudioDamagedByProjectileType": "flesh",
        "azBarbarianPortraitName": {
          "Pair": {
            "zIndex": "TRIBE_NUMIDIANS",
            "zValue": "BARBARIANPORTRAIT_BARBARIAN_NUMIDIANS_UNIT_LIBYAN_CAVALRY"
          }
        },
        "aeFormations": {
          "zValue": [
            "FORMATION_ELITE_LIBYAN_CAVALRY_NUMIDIANS",
            "FORMATION_DEFAULT_WATER"
          ]
        },
        "UnitCycle": "UNITCYCLE_MILITARY_MOUNTED",
        "iMovement": "3",
        "iVision": "5",
        "iFatigue": "1",
        "iStrength": "60",
        "iRangeMax": "2",
        "iHPMax": "20",
        "iUpgradeCost": "200",
        "fAttackDuration": "2",
        "bOutsideOpinion": "1",
        "bIgnoreZOC": "1",
        "bBlocks": "1",
        "bPillage": "1",
        "bGeneral": "1",
        "bBarbRaid": "1",
        "aeUnitTrait": {
          "zValue": [
            "UNITTRAIT_RANGED",
            "UNITTRAIT_MOUNTED",
            "UNITTRAIT_HORSE",
            "UNITTRAIT_TRIBAL"
          ]
        },
        "aeEffectUnit": {
          "zValue": "EFFECTUNIT_NOMAD"
        }
      }
    ]
  }
}
    export default data
    