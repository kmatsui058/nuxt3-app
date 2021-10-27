
    const data: XmlGoal.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "HelpText": {
          
        },
        "iAmbitionClass": {
          
        },
        "iMaxTurns": {
          
        },
        "iMinTier": {
          
        },
        "iMaxTier": {
          
        },
        "TechPrereq": {
          "comment": "Goal cannot activate until this tech type is learned."
        },
        "TechObsolete": {
          "comment": "Goal can no longer activate after this tech type is learned."
        },
        "NationPrereq": {
          "comment": "This goal will activate only for the specified Nation type."
        },
        "StartLaw": {
          "comment": "This goal objective completes when the player adopts this Law."
        },
        "EstablishTheology": {
          
        },
        "DiplomacyAll": {
          
        },
        "MinOpinionFamily": {
          
        },
        "FinishBonus": {
          
        },
        "iLegitimacy": {
          
        },
        "iCities": {
          
        },
        "iConnectedCities": {
          
        },
        "iCitizens": {
          
        },
        "iSpecialists": {
          
        },
        "iPopulation": {
          
        },
        "iLuxuries": {
          "comment": "Counts Luxuries of any type."
        },
        "iPlayerLuxuries": {
          "comment": "Luxuries given to another Player."
        },
        "iTribeLuxuries": {
          "comment": "Luxuries given to a Tribe."
        },
        "iFamilyLuxuries": {
          "comment": "Luxuries given to a Family."
        },
        "iUrbanTiles": {
          "comment": "Counts Urban Tiles."
        },
        "iUrbanImprovements": {
          "comment": "Counts Urban Improvements of any type."
        },
        "iWonders": {
          
        },
        "iLaws": {
          "comment": "Counts total Laws active. Does not count changes within a Law Pair."
        },
        "iRevealLand": {
          
        },
        "iMilitaryUnits": {
          "comment": "Counts military units of any type. Does not include civilian units such as Settlers, Workers, Scouts, Disciples."
        },
        "iMaxLevelUnits": {
          "comment": "Counts units who have obtained the maximum-allowed XP and the promotions/levels obtained via XP. (Does not track Promotions via other sources.)"
        },
        "iGeneralCount": {
          
        },
        "iGovernorCount": {
          
        },
        "iAgentCount": {
          
        },
        "iImprovementClassThreshold": {
          "comment": "Pairs with aeThresholdImprovementClasses to target a specific number of any improvements drawn from the listed classes."
        },
        "iUnitThreshold": {
          "comment": "Pairs with aeThresholdUnits to target a specific number of any unit types drawn from the list."
        },
        "iPlayerCapturedData": {
          "comment": "Applies to a Player (not us) Subject in the activating event. Attach Bonus effect to that Subject. Tracks cities captured. Allows events to determine the Nation target."
        },
        "iTribeClearedData": {
          "comment": "Applies to a Barbarian Subject in the activating event. Attach Bonus effect to that Subject. Tracks camps cleared. Allows events to determine the Tribal target."
        },
        "iTribeSettledData": {
          "comment": "Applies to a Barbarian Subject in the activating event. Attach Bonus effect to that Subject. Tracks cities settled on their former territory. Allows events to determine the Tribal target."
        },
        "iPlayerKilledData": {
          "comment": "Applies to a Player (not us) Subject in the activating event. Attach Bonus effect to that Subject. Tracks units killed. Allows events to determine the Nation target."
        },
        "iTribeKilledData": {
          "comment": "Applies to a Barbarian Subject in the activating event. Attach Bonus effect to that Subject. Tracks units killed. Allows events to determine the Tribal target."
        },
        "bBlockComplete": {
          "comment": "Use of this flag renders the goal never-completable, EXCEPT via an event with Bonus effect of 'FinishGoal'."
        },
        "bVictoryEligible": {
          
        },
        "bStateReligion": {
          
        },
        "bPlayerDead": {
          
        },
        "bTribeDead": {
          
        },
        "bScenario": {
          
        },
        "aiFamilyClassWeight": {
          
        },
        "aiDiplomacyCount": {
          
        },
        "aiTribesKilledData": {
          "comment": "Specify the Tribe type(s) to kill and the amount for each. Does not require a Barbarian Subject. Does require hardcoding the Tribe types into the goal object."
        },
        "aiYieldProducedData": {
          
        },
        "aiYieldRate": {
          
        },
        "aiYieldCount": {
          "comment": "Specify the Yield type(s) and the amount (to possess in the stockpile / treasury) for each."
        },
        "aiResourceRevealed": {
          "comment": "Specify the number of each Resource which has been discovered."
        },
        "aiLuxuryCount": {
          "comment": "Specify the Luxury type(s) to have hooked up via Improvements and the amount for each."
        },
        "aiPlayerLuxuryCount": {
          "comment": "Specify the Luxury type(s) to be given to another Player."
        },
        "aiTribeLuxuryCount": {
          "comment": "Specify the Luxury type(s) to be given to another Player."
        },
        "aiFamilyLuxuryCount": {
          "comment": "Specify the Luxury type(s) to be given to another Player."
        },
        "aiImprovementCount": {
          "comment": "Use this field for specific Improvements, which either do not have multiple versions or you want a specific version."
        },
        "aiCityImprovementCount": {
          
        },
        "aiImprovementClassCount": {
          "comment": "Use this field when you want all member types from an ImprovementClass to be counted."
        },
        "aiCityImprovementClassCount": {
          
        },
        "aiCultureCount": {
          
        },
        "aiCultureWonders": {
          
        },
        "aiSpecialistCount": {
          "comment": "Specify the Specialist type(s) and the amount for each."
        },
        "aiCitySpecialistCount": {
          
        },
        "aiProjectCount": {
          "comment": "Specify the Project type(s) and the amount for each."
        },
        "aiCityProjectCount": {
          
        },
        "aiEffectCityCount": {
          "comment": "Specify the EffectCity type(s) and the amount for each."
        },
        "aiCityEffectCityCount": {
          
        },
        "aiUnitCount": {
          "comment": "Specify the ? type(s) and the amount for each."
        },
        "aiUnitTraitCount": {
          "comment": "Specify the ? type(s) and the amount for each."
        },
        "aiUnitTraitMaxLevelCount": {
          
        },
        "aiStatCount": {
          "comment": "Counts all stats, ever, during the game."
        },
        "aiStatCountData": {
          "comment": "Counts only new stats accumulated after the Goal is activated."
        },
        "aeTechsAcquired": {
          "comment": "Requires all techs listed to be acquired, before this objective completes."
        },
        "aeThresholdImprovementClasses": {
          "comment": "Pairs with iImprovementClassThreshold."
        },
        "aeThresholdUnits": {
          "comment": "Pairs with iUnitThreshold."
        }
      },
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "HelpText": {
          
        },
        "iAmbitionClass": {
          
        },
        "iMaxTurns": {
          
        },
        "iMinTier": {
          
        },
        "iMaxTier": {
          
        },
        "TechPrereq": {
          
        },
        "TechObsolete": {
          
        },
        "NationPrereq": {
          
        },
        "StartLaw": {
          
        },
        "EstablishTheology": {
          
        },
        "DiplomacyAll": {
          
        },
        "MinOpinionFamily": {
          
        },
        "FinishBonus": {
          
        },
        "iLegitimacy": {
          
        },
        "iCities": {
          
        },
        "iConnectedCities": {
          
        },
        "iCitizens": {
          
        },
        "iSpecialists": {
          
        },
        "iPopulation": {
          
        },
        "iLuxuries": {
          
        },
        "iPlayerLuxuries": {
          
        },
        "iTribeLuxuries": {
          
        },
        "iFamilyLuxuries": {
          
        },
        "iUrbanTiles": {
          
        },
        "iUrbanImprovements": {
          
        },
        "iWonders": {
          
        },
        "iLaws": {
          
        },
        "iRevealLand": {
          
        },
        "iMilitaryUnits": {
          
        },
        "iMaxLevelUnits": {
          
        },
        "iGeneralCount": {
          
        },
        "iGovernorCount": {
          
        },
        "iAgentCount": {
          
        },
        "iImprovementClassThreshold": {
          
        },
        "iUnitThreshold": {
          
        },
        "iPlayerCapturedData": {
          
        },
        "iTribeClearedData": {
          
        },
        "iTribeSettledData": {
          
        },
        "iPlayerKilledData": {
          
        },
        "iTribeKilledData": {
          
        },
        "bBlockComplete": {
          
        },
        "bVictoryEligible": {
          
        },
        "bStateReligion": {
          
        },
        "bPlayerDead": {
          
        },
        "bTribeDead": {
          
        },
        "bScenario": {
          
        },
        "aiFamilyClassWeight": {
          
        },
        "aiDiplomacyCount": {
          
        },
        "aiTribesKilledData": {
          
        },
        "aiYieldProducedData": {
          
        },
        "aiYieldRate": {
          
        },
        "aiYieldCount": {
          
        },
        "aiLuxuryCount": {
          
        },
        "aiPlayerLuxuryCount": {
          
        },
        "aiTribeLuxuryCount": {
          
        },
        "aiFamilyLuxuryCount": {
          
        },
        "aiImprovementCount": {
          
        },
        "aiCityImprovementCount": {
          
        },
        "aiImprovementClassCount": {
          
        },
        "aiCityImprovementClassCount": {
          
        },
        "aiCultureCount": {
          
        },
        "aiCultureWonders": {
          
        },
        "aiSpecialistCount": {
          
        },
        "aiCitySpecialistCount": {
          
        },
        "aiProjectCount": {
          
        },
        "aiCityProjectCount": {
          
        },
        "aiEffectCityCount": {
          
        },
        "aiCityEffectCityCount": {
          
        },
        "aiUnitCount": {
          
        },
        "aiUnitTraitCount": {
          
        },
        "aiUnitTraitMaxLevelCount": {
          
        },
        "aiStatCount": {
          
        },
        "aiStatCountData": {
          
        },
        "aeTechsAcquired": {
          
        },
        "aeThresholdImprovementClasses": {
          
        },
        "aeThresholdUnits": {
          
        }
      },
      {
        "zType": "GOAL_EPICS",
        "Name": "TEXT_GOAL_EPICS",
        "iAmbitionClass": "1",
        "iMinTier": "1",
        "iMaxTier": "2",
        "TechObsolete": "TECH_RHETORIC",
        "StartLaw": "LAW_EPICS",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_ARTISANS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_EXPLORATION",
        "Name": "TEXT_GOAL_EXPLORATION",
        "iAmbitionClass": "1",
        "iMinTier": "1",
        "iMaxTier": "2",
        "TechObsolete": "TECH_RHETORIC",
        "StartLaw": "LAW_EXPLORATION",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_HUNTERS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_SLAVERY",
        "Name": "TEXT_GOAL_SLAVERY",
        "iAmbitionClass": "1",
        "iMinTier": "1",
        "iMaxTier": "2",
        "TechObsolete": "TECH_LABOR_FORCE",
        "StartLaw": "LAW_SLAVERY",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_FREEDOM",
        "Name": "TEXT_GOAL_FREEDOM",
        "iAmbitionClass": "1",
        "iMinTier": "1",
        "iMaxTier": "2",
        "TechObsolete": "TECH_LABOR_FORCE",
        "StartLaw": "LAW_FREEDOM",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_HUNTERS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_CENTRALIZATION",
        "Name": "TEXT_GOAL_CENTRALIZATION",
        "iAmbitionClass": "1",
        "iMinTier": "1",
        "iMaxTier": "2",
        "TechObsolete": "TECH_ARISTOCRACY",
        "StartLaw": "LAW_CENTRALIZATION",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_VASSALAGE",
        "Name": "TEXT_GOAL_VASSALAGE",
        "iAmbitionClass": "1",
        "iMinTier": "1",
        "iMaxTier": "2",
        "TechObsolete": "TECH_ARISTOCRACY",
        "StartLaw": "LAW_VASSALAGE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_TYRANNY",
        "Name": "TEXT_GOAL_TYRANNY",
        "iAmbitionClass": "1",
        "iMinTier": "2",
        "iMaxTier": "3",
        "TechObsolete": "TECH_SOVEREIGNTY",
        "StartLaw": "LAW_TYRANNY",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_CONSTITUTION",
        "Name": "TEXT_GOAL_CONSTITUTION",
        "iAmbitionClass": "1",
        "iMinTier": "2",
        "iMaxTier": "3",
        "TechObsolete": "TECH_SOVEREIGNTY",
        "StartLaw": "LAW_CONSTITUTION",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_COLONIES",
        "Name": "TEXT_GOAL_COLONIES",
        "iAmbitionClass": "1",
        "iMinTier": "2",
        "iMaxTier": "3",
        "TechObsolete": "TECH_NAVIGATION",
        "StartLaw": "LAW_COLONIES",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_SERFDOM",
        "Name": "TEXT_GOAL_SERFDOM",
        "iAmbitionClass": "1",
        "iMinTier": "2",
        "iMaxTier": "3",
        "TechObsolete": "TECH_NAVIGATION",
        "StartLaw": "LAW_SERFDOM",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_MONOTHEISM",
        "Name": "TEXT_GOAL_MONOTHEISM",
        "iAmbitionClass": "1",
        "iMinTier": "2",
        "iMaxTier": "3",
        "TechObsolete": "TECH_MONASTICISM",
        "StartLaw": "LAW_MONOTHEISM",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CLERICS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_POLYTHEISM",
        "Name": "TEXT_GOAL_POLYTHEISM",
        "iAmbitionClass": "1",
        "iMinTier": "2",
        "iMaxTier": "3",
        "TechObsolete": "TECH_MONASTICISM",
        "StartLaw": "LAW_POLYTHEISM",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_DIVINE_RULE",
        "Name": "TEXT_GOAL_DIVINE_RULE",
        "iAmbitionClass": "1",
        "iMinTier": "3",
        "iMaxTier": "4",
        "TechObsolete": "TECH_CITIZENSHIP",
        "StartLaw": "LAW_DIVINE_RULE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CLERICS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_LEGAL_CODE",
        "Name": "TEXT_GOAL_LEGAL_CODE",
        "iAmbitionClass": "1",
        "iMinTier": "3",
        "iMaxTier": "4",
        "TechObsolete": "TECH_CITIZENSHIP",
        "StartLaw": "LAW_LEGAL_CODE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_SAGES",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_TOLERANCE",
        "Name": "TEXT_GOAL_TOLERANCE",
        "iAmbitionClass": "1",
        "iMinTier": "3",
        "iMaxTier": "4",
        "TechObsolete": "TECH_DOCTRINE",
        "StartLaw": "LAW_TOLERANCE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_SAGES",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_ORTHODOXY",
        "Name": "TEXT_GOAL_ORTHODOXY",
        "iAmbitionClass": "1",
        "iMinTier": "3",
        "iMaxTier": "4",
        "TechObsolete": "TECH_DOCTRINE",
        "StartLaw": "LAW_ORTHODOXY",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CLERICS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_PROFESSIONAL_ARMY",
        "Name": "TEXT_GOAL_PROFESSIONAL_ARMY",
        "iAmbitionClass": "1",
        "iMinTier": "3",
        "iMaxTier": "4",
        "TechObsolete": "TECH_MANOR",
        "StartLaw": "LAW_PROFESSIONAL_ARMY",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_RIDERS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_VOLUNTEERS",
        "Name": "TEXT_GOAL_VOLUNTEERS",
        "iAmbitionClass": "1",
        "iMinTier": "3",
        "iMaxTier": "4",
        "TechObsolete": "TECH_MANOR",
        "StartLaw": "LAW_VOLUNTEERS",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_PHILOSOPHY",
        "Name": "TEXT_GOAL_PHILOSOPHY",
        "iAmbitionClass": "1",
        "iMinTier": "4",
        "iMaxTier": "5",
        "TechObsolete": "TECH_ARCHITECTURE",
        "StartLaw": "LAW_PHILOSOPHY",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_SAGES",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_ENGINEERING",
        "Name": "TEXT_GOAL_ENGINEERING",
        "iAmbitionClass": "1",
        "iMinTier": "4",
        "iMaxTier": "5",
        "TechObsolete": "TECH_ARCHITECTURE",
        "StartLaw": "LAW_ENGINEERING",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_ICONOGRAPHY",
        "Name": "TEXT_GOAL_ICONOGRAPHY",
        "iAmbitionClass": "1",
        "iMinTier": "4",
        "iMaxTier": "5",
        "TechObsolete": "TECH_VAULTING",
        "StartLaw": "LAW_ICONOGRAPHY",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_CALLIGRAPHY",
        "Name": "TEXT_GOAL_CALLIGRAPHY",
        "iAmbitionClass": "1",
        "iMinTier": "4",
        "iMaxTier": "5",
        "TechObsolete": "TECH_VAULTING",
        "StartLaw": "LAW_CALLIGRAPHY",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_ARTISANS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_PILGRIMAGE",
        "Name": "TEXT_GOAL_PILGRIMAGE",
        "iAmbitionClass": "1",
        "iMinTier": "4",
        "iMaxTier": "5",
        "TechObsolete": "TECH_MARTIAL_CODE",
        "StartLaw": "LAW_PILGRIMAGE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_HUNTERS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_HOLY_WAR",
        "Name": "TEXT_GOAL_HOLY_WAR",
        "iAmbitionClass": "1",
        "iMinTier": "4",
        "iMaxTier": "5",
        "TechObsolete": "TECH_MARTIAL_CODE",
        "StartLaw": "LAW_HOLY_WAR",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CLERICS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_GUILDS",
        "Name": "TEXT_GOAL_GUILDS",
        "iAmbitionClass": "1",
        "iMinTier": "5",
        "iMaxTier": "6",
        "TechObsolete": "TECH_JURISPRUDENCE",
        "StartLaw": "LAW_GUILDS",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_ELITES",
        "Name": "TEXT_GOAL_ELITES",
        "iAmbitionClass": "1",
        "iMinTier": "5",
        "iMaxTier": "6",
        "TechObsolete": "TECH_JURISPRUDENCE",
        "StartLaw": "LAW_ELITES",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_AUTARKY",
        "Name": "TEXT_GOAL_AUTARKY",
        "iAmbitionClass": "1",
        "iMinTier": "5",
        "iMaxTier": "6",
        "TechObsolete": "TECH_LATEEN_SAIL",
        "StartLaw": "LAW_AUTARKY",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_RIDERS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_TRADE_LEAGUE",
        "Name": "TEXT_GOAL_TRADE_LEAGUE",
        "iAmbitionClass": "1",
        "iMinTier": "5",
        "iMaxTier": "6",
        "TechObsolete": "TECH_LATEEN_SAIL",
        "StartLaw": "LAW_TRADE_LEAGUE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_COIN_DEBASEMENT",
        "Name": "TEXT_GOAL_COIN_DEBASEMENT",
        "iAmbitionClass": "1",
        "iMinTier": "5",
        "iMaxTier": "6",
        "TechObsolete": "TECH_FISCAL_POLICY",
        "StartLaw": "LAW_COIN_DEBASEMENT",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_MONETARY_REFORM",
        "Name": "TEXT_GOAL_MONETARY_REFORM",
        "iAmbitionClass": "1",
        "iMinTier": "5",
        "iMaxTier": "6",
        "TechObsolete": "TECH_FISCAL_POLICY",
        "StartLaw": "LAW_MONETARY_REFORM",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "900"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_LAWS",
        "Name": "TEXT_GOAL_FOUR_LAWS",
        "iAmbitionClass": "1",
        "iMinTier": "2",
        "iMaxTier": "4",
        "iLaws": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "GOAL_EIGHT_LAWS",
        "Name": "TEXT_GOAL_EIGHT_LAWS",
        "iAmbitionClass": "1",
        "iMinTier": "5",
        "iMaxTier": "7",
        "iLaws": "8",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "GOAL_ALL_LAWS_FRIENDLY",
        "Name": "TEXT_GOAL_ALL_LAWS_FRIENDLY",
        "iAmbitionClass": "1",
        "iMinTier": "10",
        "iMaxTier": "10",
        "MinOpinionFamily": "OPINIONFAMILY_FRIENDLY",
        "iLaws": "15",
        "bVictoryEligible": "1",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_SAGES",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_VENERATION",
        "Name": "TEXT_GOAL_VENERATION",
        "iAmbitionClass": "2",
        "iMinTier": "3",
        "iMaxTier": "4",
        "EstablishTheology": "THEOLOGY_VENERATION",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_MYTHOLOGY",
        "Name": "TEXT_GOAL_MYTHOLOGY",
        "iAmbitionClass": "2",
        "iMinTier": "3",
        "iMaxTier": "4",
        "EstablishTheology": "THEOLOGY_MYTHOLOGY",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_LEGALISM",
        "Name": "TEXT_GOAL_LEGALISM",
        "iAmbitionClass": "2",
        "iMinTier": "3",
        "iMaxTier": "4",
        "EstablishTheology": "THEOLOGY_LEGALISM",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_REVELATION",
        "Name": "TEXT_GOAL_REVELATION",
        "iAmbitionClass": "2",
        "iMinTier": "4",
        "iMaxTier": "5",
        "EstablishTheology": "THEOLOGY_REVELATION",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_DUALISM",
        "Name": "TEXT_GOAL_DUALISM",
        "iAmbitionClass": "2",
        "iMinTier": "4",
        "iMaxTier": "5",
        "EstablishTheology": "THEOLOGY_DUALISM",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_SAGES",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_GNOSTICISM",
        "Name": "TEXT_GOAL_GNOSTICISM",
        "iAmbitionClass": "2",
        "iMinTier": "4",
        "iMaxTier": "5",
        "EstablishTheology": "THEOLOGY_GNOSTICISM",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_ENLIGHTENMENT",
        "Name": "TEXT_GOAL_ENLIGHTENMENT",
        "iAmbitionClass": "2",
        "iMinTier": "5",
        "iMaxTier": "6",
        "EstablishTheology": "THEOLOGY_ENLIGHTENMENT",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_REDEMPTION",
        "Name": "TEXT_GOAL_REDEMPTION",
        "iAmbitionClass": "2",
        "iMinTier": "5",
        "iMaxTier": "6",
        "EstablishTheology": "THEOLOGY_REDEMPTION",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_FOUR_CITIES",
        "Name": "TEXT_GOAL_FOUR_CITIES",
        "iAmbitionClass": "3",
        "iMinTier": "1",
        "iMaxTier": "2",
        "iCities": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "GOAL_SEVEN_CITIES",
        "Name": "TEXT_GOAL_SEVEN_CITIES",
        "iAmbitionClass": "3",
        "iMinTier": "3",
        "iMaxTier": "5",
        "iCities": "7",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "GOAL_TEN_CITIES",
        "Name": "TEXT_GOAL_TEN_CITIES",
        "iAmbitionClass": "3",
        "iMinTier": "6",
        "iMaxTier": "8",
        "iCities": "10",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "GOAL_THREE_CONNECTED_CITIES",
        "Name": "TEXT_GOAL_THREE_CONNECTED_CITIES",
        "iAmbitionClass": "3",
        "iMinTier": "1",
        "iMaxTier": "2",
        "iConnectedCities": "3",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_SIX_CONNECTED_CITIES",
        "Name": "TEXT_GOAL_SIX_CONNECTED_CITIES",
        "iAmbitionClass": "3",
        "iMinTier": "3",
        "iMaxTier": "5",
        "iConnectedCities": "6",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_NINE_CONNECTED_CITIES",
        "Name": "TEXT_GOAL_NINE_CONNECTED_CITIES",
        "iAmbitionClass": "3",
        "iMinTier": "6",
        "iMaxTier": "8",
        "iConnectedCities": "9",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_GAULS_5",
        "Name": "TEXT_GOAL_GAULS_5",
        "iAmbitionClass": "4",
        "iMinTier": "2",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "1000"
          }
        },
        "aiTribesKilledData": {
          "Pair": {
            "zIndex": "TRIBE_GAULS",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_VANDALS_5",
        "Name": "TEXT_GOAL_VANDALS_5",
        "iAmbitionClass": "4",
        "iMinTier": "2",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "1000"
          }
        },
        "aiTribesKilledData": {
          "Pair": {
            "zIndex": "TRIBE_VANDALS",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_DANES_5",
        "Name": "TEXT_GOAL_DANES_5",
        "iAmbitionClass": "4",
        "iMinTier": "2",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "1000"
          }
        },
        "aiTribesKilledData": {
          "Pair": {
            "zIndex": "TRIBE_DANES",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_THRACIANS_5",
        "Name": "TEXT_GOAL_THRACIANS_5",
        "iAmbitionClass": "4",
        "iMinTier": "2",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "1000"
          }
        },
        "aiTribesKilledData": {
          "Pair": {
            "zIndex": "TRIBE_THRACIANS",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_SCYTHIANS_5",
        "Name": "TEXT_GOAL_SCYTHIANS_5",
        "iAmbitionClass": "4",
        "iMinTier": "2",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_RIDERS",
            "iValue": "1000"
          }
        },
        "aiTribesKilledData": {
          "Pair": {
            "zIndex": "TRIBE_SCYTHIANS",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_NUMIDIANS_5",
        "Name": "TEXT_GOAL_NUMIDIANS_5",
        "iAmbitionClass": "4",
        "iMinTier": "2",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_RIDERS",
            "iValue": "1000"
          }
        },
        "aiTribesKilledData": {
          "Pair": {
            "zIndex": "TRIBE_NUMIDIANS",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_FOOD_400",
        "Name": "TEXT_GOAL_FOOD_400",
        "iAmbitionClass": "5",
        "iMinTier": "1",
        "iMaxTier": "2",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        },
        "aiYieldProducedData": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "GOAL_FOOD_800",
        "Name": "TEXT_GOAL_FOOD_800",
        "iAmbitionClass": "5",
        "iMinTier": "3",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        },
        "aiYieldProducedData": {
          "Pair": {
            "zIndex": "YIELD_FOOD",
            "iValue": "800"
          }
        }
      },
      {
        "zType": "GOAL_WOOD_400",
        "Name": "TEXT_GOAL_WOOD_400",
        "iAmbitionClass": "5",
        "iMinTier": "1",
        "iMaxTier": "2",
        "TechPrereq": "TECH_FORESTRY",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_ARTISANS",
            "iValue": "1000"
          }
        },
        "aiYieldProducedData": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "GOAL_WOOD_800",
        "Name": "TEXT_GOAL_WOOD_800",
        "iAmbitionClass": "5",
        "iMinTier": "3",
        "iMaxTier": "4",
        "TechPrereq": "TECH_FORESTRY",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_ARTISANS",
            "iValue": "1000"
          }
        },
        "aiYieldProducedData": {
          "Pair": {
            "zIndex": "YIELD_WOOD",
            "iValue": "800"
          }
        }
      },
      {
        "zType": "GOAL_STONE_400",
        "Name": "TEXT_GOAL_STONE_400",
        "iAmbitionClass": "5",
        "iMinTier": "1",
        "iMaxTier": "2",
        "TechPrereq": "TECH_STONECUTTING",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiYieldProducedData": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "GOAL_STONE_800",
        "Name": "TEXT_GOAL_STONE_800",
        "iAmbitionClass": "5",
        "iMinTier": "3",
        "iMaxTier": "4",
        "TechPrereq": "TECH_STONECUTTING",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiYieldProducedData": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "800"
          }
        }
      },
      {
        "zType": "GOAL_IRON_400",
        "Name": "TEXT_GOAL_IRON_400",
        "iAmbitionClass": "5",
        "iMinTier": "1",
        "iMaxTier": "2",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "1000"
          }
        },
        "aiYieldProducedData": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "GOAL_IRON_800",
        "Name": "TEXT_GOAL_IRON_800",
        "iAmbitionClass": "5",
        "iMinTier": "3",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "1000"
          }
        },
        "aiYieldProducedData": {
          "Pair": {
            "zIndex": "YIELD_IRON",
            "iValue": "800"
          }
        }
      },
      {
        "zType": "GOAL_20_GOODS_TURN",
        "Name": "TEXT_GOAL_20_GOODS_TURN",
        "iAmbitionClass": "5",
        "iMinTier": "4",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            }
          ]
        },
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "20"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "20"
            }
          ]
        }
      },
      {
        "zType": "GOAL_50_GOODS_TURN",
        "Name": "TEXT_GOAL_50_GOODS_TURN",
        "iAmbitionClass": "5",
        "iMinTier": "6",
        "iMaxTier": "7",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            }
          ]
        },
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "50"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "50"
            }
          ]
        }
      },
      {
        "zType": "GOAL_100_GOODS_TURN",
        "Name": "TEXT_GOAL_100_GOODS_TURN",
        "iAmbitionClass": "5",
        "iMinTier": "8",
        "iMaxTier": "9",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            }
          ]
        },
        "aiYieldRate": {
          "Pair": [
            {
              "zIndex": "YIELD_FOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_IRON",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_WOOD",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_STONE",
              "iValue": "100"
            }
          ]
        }
      },
      {
        "zType": "GOAL_CIVICS_2000",
        "Name": "TEXT_GOAL_CIVICS_2000",
        "iAmbitionClass": "6",
        "iMinTier": "2",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            }
          ]
        },
        "aiYieldCount": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "2000"
          }
        }
      },
      {
        "zType": "GOAL_TRAINING_2000",
        "Name": "TEXT_GOAL_TRAINING_2000",
        "iAmbitionClass": "6",
        "iMinTier": "2",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiYieldCount": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "2000"
          }
        }
      },
      {
        "zType": "GOAL_MONEY_2000",
        "Name": "TEXT_GOAL_MONEY_2000",
        "iAmbitionClass": "6",
        "iMinTier": "3",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        },
        "aiYieldCount": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "2000"
          }
        }
      },
      {
        "zType": "GOAL_MONEY_5000",
        "Name": "TEXT_GOAL_MONEY_5000",
        "iAmbitionClass": "6",
        "iMinTier": "4",
        "iMaxTier": "6",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        },
        "aiYieldCount": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "5000"
          }
        }
      },
      {
        "zType": "GOAL_MONEY_10000",
        "Name": "TEXT_GOAL_MONEY_10000",
        "iAmbitionClass": "6",
        "iMinTier": "5",
        "iMaxTier": "7",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        },
        "aiYieldCount": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "10000"
          }
        }
      },
      {
        "zType": "GOAL_FIVE_WORKERS",
        "Name": "TEXT_GOAL_FIVE_WORKERS",
        "iAmbitionClass": "7",
        "iMinTier": "1",
        "iMaxTier": "2",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_WORKER",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_SIX_FARMS",
        "Name": "TEXT_GOAL_SIX_FARMS",
        "iAmbitionClass": "7",
        "iMinTier": "1",
        "iMaxTier": "2",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_FARM",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_SIX_MINES",
        "Name": "TEXT_GOAL_SIX_MINES",
        "iAmbitionClass": "7",
        "iMinTier": "1",
        "iMaxTier": "2",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_MINE",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_SIX_QUARRIES",
        "Name": "TEXT_GOAL_SIX_QUARRIES",
        "iAmbitionClass": "7",
        "iMinTier": "1",
        "iMaxTier": "2",
        "TechPrereq": "TECH_STONECUTTING",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_QUARRY",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_SIX_LUMBERMILLS",
        "Name": "TEXT_GOAL_SIX_LUMBERMILLS",
        "iAmbitionClass": "7",
        "iMinTier": "2",
        "iMaxTier": "3",
        "TechPrereq": "TECH_FORESTRY",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_ARTISANS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_LUMBERMILL",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_SIX_PASTURES",
        "Name": "TEXT_GOAL_SIX_PASTURES",
        "iAmbitionClass": "7",
        "iMinTier": "2",
        "iMaxTier": "3",
        "TechPrereq": "TECH_HUSBANDRY",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_PASTURE",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_SIX_CAMPS",
        "Name": "TEXT_GOAL_SIX_CAMPS",
        "iAmbitionClass": "7",
        "iMinTier": "1",
        "iMaxTier": "2",
        "TechPrereq": "TECH_TRAPPING",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_HUNTERS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_CAMP",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_SIX_GROVES",
        "Name": "TEXT_GOAL_SIX_GROVES",
        "iAmbitionClass": "7",
        "iMinTier": "3",
        "iMaxTier": "4",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_GROVE",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_SIX_NETS",
        "Name": "TEXT_GOAL_SIX_NETS",
        "iAmbitionClass": "7",
        "iMinTier": "3",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_HUNTERS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_NETS",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_HARBORS",
        "Name": "TEXT_GOAL_FOUR_HARBORS",
        "iAmbitionClass": "8",
        "iMinTier": "5",
        "iMaxTier": "7",
        "TechPrereq": "TECH_HYDRAULICS",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_ARTISANS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_HARBOR",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_GRANARY",
        "Name": "TEXT_GOAL_FOUR_GRANARY",
        "iAmbitionClass": "8",
        "iMinTier": "2",
        "iMaxTier": "4",
        "TechPrereq": "TECH_ADMINISTRATION",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_GRANARY",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_SIX_BARRACKS_RANGES",
        "Name": "TEXT_GOAL_SIX_BARRACKS_RANGES",
        "iAmbitionClass": "8",
        "iMinTier": "2",
        "iMaxTier": "4",
        "iImprovementClassThreshold": "6",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aeThresholdImprovementClasses": {
          "zValue": [
            "IMPROVEMENTCLASS_BARRACKS",
            "IMPROVEMENTCLASS_RANGE"
          ]
        }
      },
      {
        "zType": "GOAL_EIGHT_TOWNS",
        "Name": "TEXT_GOAL_EIGHT_TOWNS",
        "iAmbitionClass": "8",
        "iMinTier": "8",
        "iMaxTier": "9",
        "TechPrereq": "TECH_POLIS",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_TOWN",
            "iValue": "8"
          }
        }
      },
      {
        "zType": "GOAL_SIX_RESOURCE_IMPROVEMENTS",
        "Name": "TEXT_GOAL_SIX_RESOURCE_IMPROVEMENTS",
        "iAmbitionClass": "8",
        "iMinTier": "2",
        "iMaxTier": "4",
        "iImprovementClassThreshold": "6",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        },
        "aeThresholdImprovementClasses": {
          "zValue": [
            "IMPROVEMENTCLASS_PASTURE",
            "IMPROVEMENTCLASS_CAMP",
            "IMPROVEMENTCLASS_GROVE",
            "IMPROVEMENTCLASS_NETS"
          ]
        }
      },
      {
        "zType": "GOAL_SIX_REPAIRED",
        "Name": "TEXT_GOAL_SIX_REPAIRED",
        "iAmbitionClass": "8",
        "iMinTier": "2",
        "iMaxTier": "6",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_IMPROVEMENT_REPAIRED",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_EIGHT_REPAIRED",
        "Name": "TEXT_GOAL_EIGHT_REPAIRED",
        "iAmbitionClass": "8",
        "iMinTier": "3",
        "iMaxTier": "7",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_IMPROVEMENT_REPAIRED",
            "iValue": "8"
          }
        }
      },
      {
        "zType": "GOAL_PYRAMIDS",
        "Name": "TEXT_GOAL_PYRAMIDS",
        "iAmbitionClass": "9",
        "iMinTier": "3",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_PYRAMIDS",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_GREAT_ZIGGURAT",
        "Name": "TEXT_GOAL_GREAT_ZIGGURAT",
        "iAmbitionClass": "9",
        "iMinTier": "3",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_GREAT_ZIGGURAT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_ORACLE",
        "Name": "TEXT_GOAL_ORACLE",
        "iAmbitionClass": "9",
        "iMinTier": "3",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_SAGES",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_ORACLE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_HANGING_GARDENS",
        "Name": "TEXT_GOAL_HANGING_GARDENS",
        "iAmbitionClass": "9",
        "iMinTier": "3",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_SAGES",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_HANGING_GARDENS",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_NECROPOLIS",
        "Name": "TEXT_GOAL_NECROPOLIS",
        "iAmbitionClass": "9",
        "iMinTier": "4",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_NECROPOLIS",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_ISHTAR_GATE",
        "Name": "TEXT_GOAL_ISHTAR_GATE",
        "iAmbitionClass": "9",
        "iMinTier": "4",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_ISHTAR_GATE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_LIGHTHOUSE",
        "Name": "TEXT_GOAL_LIGHTHOUSE",
        "iAmbitionClass": "9",
        "iMinTier": "4",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_LIGHTHOUSE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_APADANA",
        "Name": "TEXT_GOAL_APADANA",
        "iAmbitionClass": "9",
        "iMinTier": "4",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_APADANA",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_MAUSOLEUM",
        "Name": "TEXT_GOAL_MAUSOLEUM",
        "iAmbitionClass": "9",
        "iMinTier": "5",
        "iMaxTier": "6",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_MAUSOLEUM",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_ACROPOLIS",
        "Name": "TEXT_GOAL_ACROPOLIS",
        "iAmbitionClass": "9",
        "iMinTier": "5",
        "iMaxTier": "6",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_ACROPOLIS",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_COLOSSUS",
        "Name": "TEXT_GOAL_COLOSSUS",
        "iAmbitionClass": "9",
        "iMinTier": "5",
        "iMaxTier": "6",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_COLOSSUS",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_MUSAEUM",
        "Name": "TEXT_GOAL_MUSAEUM",
        "iAmbitionClass": "9",
        "iMinTier": "5",
        "iMaxTier": "6",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_SAGES",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_MUSAEUM",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_CIRCUS_MAXIMUS",
        "Name": "TEXT_GOAL_CIRCUS_MAXIMUS",
        "iAmbitionClass": "9",
        "iMinTier": "6",
        "iMaxTier": "7",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_RIDERS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_CIRCUS_MAXIMUS",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_PANTHEON",
        "Name": "TEXT_GOAL_PANTHEON",
        "iAmbitionClass": "9",
        "iMinTier": "6",
        "iMaxTier": "7",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_PANTHEON",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_HAGIA_SOPHIA",
        "Name": "TEXT_GOAL_HAGIA_SOPHIA",
        "iAmbitionClass": "9",
        "iMinTier": "6",
        "iMaxTier": "7",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_HAGIA_SOPHIA",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_VIA_RECTA_SOUK",
        "Name": "TEXT_GOAL_VIA_RECTA_SOUK",
        "iAmbitionClass": "9",
        "iMinTier": "6",
        "iMaxTier": "7",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_VIA_RECTA_SOUK",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_FIVE_DEVELOPING",
        "Name": "TEXT_GOAL_FIVE_DEVELOPING",
        "iAmbitionClass": "10",
        "iMinTier": "2",
        "iMaxTier": "3",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiCultureCount": {
          "Pair": {
            "zIndex": "CULTURE_DEVELOPING",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_STRONG",
        "Name": "TEXT_GOAL_FOUR_STRONG",
        "iAmbitionClass": "10",
        "iMinTier": "4",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiCultureCount": {
          "Pair": {
            "zIndex": "CULTURE_STRONG",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_THREE_LEGENDARY",
        "Name": "TEXT_GOAL_THREE_LEGENDARY",
        "iAmbitionClass": "10",
        "iMinTier": "6",
        "iMaxTier": "7",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiCultureCount": {
          "Pair": {
            "zIndex": "CULTURE_LEGENDARY",
            "iValue": "3"
          }
        }
      },
      {
        "zType": "GOAL_SIX_LEGENDARY",
        "Name": "TEXT_GOAL_SIX_LEGENDARY",
        "iAmbitionClass": "10",
        "iMinTier": "10",
        "iMaxTier": "10",
        "bVictoryEligible": "1",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiCultureCount": {
          "Pair": {
            "zIndex": "CULTURE_LEGENDARY",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_TWO_WONDERS",
        "Name": "TEXT_GOAL_TWO_WONDERS",
        "iAmbitionClass": "10",
        "iMinTier": "5",
        "iMaxTier": "7",
        "iWonders": "2",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiCultureWonders": {
          "Pair": {
            "zIndex": "CULTURE_STRONG",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_WONDERS",
        "Name": "TEXT_GOAL_FOUR_WONDERS",
        "iAmbitionClass": "10",
        "iMinTier": "8",
        "iMaxTier": "9",
        "iWonders": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiCultureWonders": {
          "Pair": {
            "zIndex": "CULTURE_LEGENDARY",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_SEVEN_WONDERS",
        "Name": "TEXT_GOAL_SEVEN_WONDERS",
        "iAmbitionClass": "10",
        "iMinTier": "10",
        "iMaxTier": "10",
        "iWonders": "7",
        "bVictoryEligible": "1",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_FOUR_FARMERS",
        "Name": "TEXT_GOAL_FOUR_FARMERS",
        "iAmbitionClass": "11",
        "iMinTier": "1",
        "iMaxTier": "2",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        },
        "aiSpecialistCount": {
          "Pair": {
            "zIndex": "SPECIALIST_FARMER",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_MINERS",
        "Name": "TEXT_GOAL_FOUR_MINERS",
        "iAmbitionClass": "11",
        "iMinTier": "2",
        "iMaxTier": "3",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "1000"
          }
        },
        "aiSpecialistCount": {
          "Pair": {
            "zIndex": "SPECIALIST_MINER",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_STONECUTTERS",
        "Name": "TEXT_GOAL_FOUR_STONECUTTERS",
        "iAmbitionClass": "11",
        "iMinTier": "3",
        "iMaxTier": "4",
        "TechPrereq": "TECH_STONECUTTING",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiSpecialistCount": {
          "Pair": {
            "zIndex": "SPECIALIST_STONECUTTER",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_WOODCUTTERS",
        "Name": "TEXT_GOAL_FOUR_WOODCUTTERS",
        "iAmbitionClass": "11",
        "iMinTier": "3",
        "iMaxTier": "5",
        "TechPrereq": "TECH_FORESTRY",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_SAGES",
            "iValue": "1000"
          }
        },
        "aiSpecialistCount": {
          "Pair": {
            "zIndex": "SPECIALIST_WOODCUTTER",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_TWO_ACOYLTES",
        "Name": "TEXT_GOAL_TWO_ACOLYTES",
        "iAmbitionClass": "12",
        "iMinTier": "2",
        "iMaxTier": "4",
        "TechPrereq": "TECH_DIVINATION",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CLERICS",
            "iValue": "1000"
          }
        },
        "aiSpecialistCount": {
          "Pair": {
            "zIndex": "SPECIALIST_ACOLYTE_3",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_POETS",
        "Name": "TEXT_GOAL_TWO_POETS",
        "iAmbitionClass": "12",
        "iMinTier": "3",
        "iMaxTier": "5",
        "TechPrereq": "TECH_DRAMA",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiSpecialistCount": {
          "Pair": {
            "zIndex": "SPECIALIST_POET_3",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_OFFICERS",
        "Name": "TEXT_GOAL_TWO_OFFICERS",
        "iAmbitionClass": "12",
        "iMinTier": "3",
        "iMaxTier": "5",
        "TechPrereq": "TECH_MILITARY_DRILL",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiSpecialistCount": {
          "Pair": {
            "zIndex": "SPECIALIST_OFFICER_3",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_SCRIBES",
        "Name": "TEXT_GOAL_TWO_SCRIBES",
        "iAmbitionClass": "12",
        "iMinTier": "3",
        "iMaxTier": "5",
        "TechPrereq": "TECH_CITIZENSHIP",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        },
        "aiSpecialistCount": {
          "Pair": {
            "zIndex": "SPECIALIST_SCRIBE_3",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_MONKS",
        "Name": "TEXT_GOAL_TWO_MONKS",
        "iAmbitionClass": "12",
        "iMinTier": "4",
        "iMaxTier": "6",
        "TechPrereq": "TECH_MONASTICISM",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            }
          ]
        },
        "aiSpecialistCount": {
          "Pair": {
            "zIndex": "SPECIALIST_MONK_3",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_DOCTORS",
        "Name": "TEXT_GOAL_TWO_DOCTORS",
        "iAmbitionClass": "12",
        "iMinTier": "4",
        "iMaxTier": "6",
        "TechPrereq": "TECH_PORTCULLIS",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_SAGES",
              "iValue": "1000"
            }
          ]
        },
        "aiSpecialistCount": {
          "Pair": {
            "zIndex": "SPECIALIST_DOCTOR_3",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_PRIESTS",
        "Name": "TEXT_GOAL_TWO_PRIESTS",
        "iAmbitionClass": "12",
        "iMinTier": "5",
        "iMaxTier": "7",
        "TechPrereq": "TECH_DOCTRINE",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            }
          ]
        },
        "aiSpecialistCount": {
          "Pair": {
            "zIndex": "SPECIALIST_PRIEST_3",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_SHOPKEEPERS",
        "Name": "TEXT_GOAL_TWO_SHOPKEEPERS",
        "iAmbitionClass": "12",
        "iMinTier": "5",
        "iMaxTier": "7",
        "TechPrereq": "TECH_COINAGE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        },
        "aiSpecialistCount": {
          "Pair": {
            "zIndex": "SPECIALIST_SHOPKEEPER_3",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_PHILOSOPHERS",
        "Name": "TEXT_GOAL_TWO_PHILOSOPHERS",
        "iAmbitionClass": "12",
        "iMinTier": "5",
        "iMaxTier": "7",
        "TechPrereq": "TECH_SCHOLARSHIP",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_SAGES",
            "iValue": "1000"
          }
        },
        "aiSpecialistCount": {
          "Pair": {
            "zIndex": "SPECIALIST_PHILOSOPHER_3",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_THREE_SPECIALISTS",
        "Name": "TEXT_GOAL_THREE_SPECIALISTS",
        "iAmbitionClass": "12",
        "iMinTier": "1",
        "iMaxTier": "2",
        "iSpecialists": "3",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_10_SPECIALISTS",
        "Name": "TEXT_GOAL_10_SPECIALISTS",
        "iAmbitionClass": "12",
        "iMinTier": "3",
        "iMaxTier": "4",
        "iSpecialists": "10",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_20_SPECIALISTS",
        "Name": "TEXT_GOAL_20_SPECIALISTS",
        "iAmbitionClass": "12",
        "iMinTier": "5",
        "iMaxTier": "6",
        "iSpecialists": "20",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_5_ELDER_SPECIALISTS",
        "Name": "TEXT_GOAL_5_ELDER_SPECIALISTS",
        "iAmbitionClass": "12",
        "iMinTier": "6",
        "iMaxTier": "7",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            }
          ]
        },
        "aiEffectCityCount": {
          "Pair": {
            "zIndex": "EFFECTCITY_SPECIALIST_ELDER",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_10_ELDER_SPECIALISTS",
        "Name": "TEXT_GOAL_10_ELDER_SPECIALISTS",
        "iAmbitionClass": "12",
        "iMinTier": "8",
        "iMaxTier": "9",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_LANDOWNERS",
              "iValue": "1000"
            }
          ]
        },
        "aiEffectCityCount": {
          "Pair": {
            "zIndex": "EFFECTCITY_SPECIALIST_ELDER",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "GOAL_SIX_WALLS",
        "Name": "TEXT_GOAL_SIX_WALLS",
        "iAmbitionClass": "13",
        "iMinTier": "2",
        "iMaxTier": "3",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            }
          ]
        },
        "aiProjectCount": {
          "Pair": {
            "zIndex": "PROJECT_WALLS",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_SIX_MOATS",
        "Name": "TEXT_GOAL_SIX_MOATS",
        "iAmbitionClass": "13",
        "iMinTier": "3",
        "iMaxTier": "4",
        "TechPrereq": "TECH_POLIS",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            }
          ]
        },
        "aiProjectCount": {
          "Pair": {
            "zIndex": "PROJECT_MOAT",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_SIX_TOWERS",
        "Name": "TEXT_GOAL_SIX_TOWERS",
        "iAmbitionClass": "13",
        "iMinTier": "4",
        "iMaxTier": "5",
        "TechPrereq": "TECH_ARCHITECTURE",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            }
          ]
        },
        "aiProjectCount": {
          "Pair": {
            "zIndex": "PROJECT_TOWERS",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_SIX_TREASURIES",
        "Name": "TEXT_GOAL_SIX_TREASURIES",
        "iAmbitionClass": "13",
        "iMinTier": "2",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            }
          ]
        },
        "aiEffectCityCount": {
          "Pair": {
            "zIndex": "EFFECTCITY_PROJECT_TREASURY",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_SIX_FORUMS",
        "Name": "TEXT_GOAL_SIX_FORUMS",
        "iAmbitionClass": "13",
        "iMinTier": "2",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        },
        "aiEffectCityCount": {
          "Pair": {
            "zIndex": "EFFECTCITY_PROJECT_FORUM",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_SIX_ARCHIVES",
        "Name": "TEXT_GOAL_SIX_ARCHIVES",
        "iAmbitionClass": "13",
        "iMinTier": "2",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_SAGES",
              "iValue": "1000"
            }
          ]
        },
        "aiEffectCityCount": {
          "Pair": {
            "zIndex": "EFFECTCITY_PROJECT_ARCHIVE",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_SIX_FESTIVALS",
        "Name": "TEXT_GOAL_SIX_FESTIVALS",
        "iAmbitionClass": "13",
        "iMinTier": "1",
        "iMaxTier": "3",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        },
        "aiProjectCount": {
          "Pair": {
            "zIndex": "PROJECT_FESTIVAL",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_SIX_CONVOYS",
        "Name": "TEXT_GOAL_SIX_CONVOYS",
        "iAmbitionClass": "13",
        "iMinTier": "4",
        "iMaxTier": "6",
        "TechPrereq": "TECH_JURISPRUDENCE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        },
        "aiProjectCount": {
          "Pair": {
            "zIndex": "PROJECT_CONVOY",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_LEGENDARY_PROJECTS",
        "Name": "TEXT_GOAL_LEGENDARY_PROJECTS",
        "iAmbitionClass": "13",
        "iMinTier": "7",
        "iMaxTier": "8",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            }
          ]
        },
        "aiProjectCount": {
          "Pair": [
            {
              "zIndex": "PROJECT_TREASURY_4",
              "iValue": "1"
            },
            {
              "zIndex": "PROJECT_FORUM_4",
              "iValue": "1"
            },
            {
              "zIndex": "PROJECT_ARCHIVE_4",
              "iValue": "1"
            }
          ]
        }
      },
      {
        "zType": "GOAL_THREE_TRIBE_CLEARED",
        "Name": "TEXT_GOAL_THREE_TRIBE_CLEARED",
        "iAmbitionClass": "14",
        "iMinTier": "1",
        "iMaxTier": "2",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_TRIBE_CLEARED",
            "iValue": "3"
          }
        }
      },
      {
        "zType": "GOAL_FIVE_TRIBE_CLEARED",
        "Name": "TEXT_GOAL_FIVE_TRIBE_CLEARED",
        "iAmbitionClass": "14",
        "iMinTier": "2",
        "iMaxTier": "3",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_TRIBE_CLEARED",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_SEVEN_TRIBE_CLEARED",
        "Name": "TEXT_GOAL_SEVEN_TRIBE_CLEARED",
        "iAmbitionClass": "14",
        "iMinTier": "3",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_TRIBE_CLEARED",
            "iValue": "7"
          }
        }
      },
      {
        "zType": "GOAL_TRIBE_PEACE",
        "Name": "TEXT_GOAL_TRIBE_PEACE",
        "iAmbitionClass": "14",
        "iMinTier": "2",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_TRIBE_PEACE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_TRIBE_ALLIANCE",
        "Name": "TEXT_GOAL_TRIBE_ALLIANCE",
        "iAmbitionClass": "14",
        "iMinTier": "3",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_TRIBE_ALLIANCE",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_THREE_PEACE",
        "Name": "TEXT_GOAL_THREE_PEACE",
        "iAmbitionClass": "14",
        "iMinTier": "5",
        "iMaxTier": "7",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        },
        "aiDiplomacyCount": {
          "Pair": {
            "zIndex": "DIPLOMACY_PEACE",
            "iValue": "3"
          }
        }
      },
      {
        "zType": "GOAL_ALL_PEACE",
        "Name": "TEXT_GOAL_ALL_PEACE",
        "iAmbitionClass": "14",
        "iMinTier": "10",
        "iMaxTier": "10",
        "DiplomacyAll": "DIPLOMACY_PEACE",
        "bVictoryEligible": "1",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "GOAL_STATE_RELIGION",
        "Name": "TEXT_GOAL_STATE_RELIGION",
        "iAmbitionClass": "15",
        "iMinTier": "2",
        "iMaxTier": "3",
        "bStateReligion": "1",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CLERICS",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "GOAL_FOUND_WORLD_RELIGION",
        "Name": "TEXT_GOAL_FOUND_WORLD_RELIGION",
        "iAmbitionClass": "15",
        "iMinTier": "3",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_WORLD_RELIGION_FOUNDED",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_ESTABLISH_THEOLOGY",
        "Name": "TEXT_GOAL_ESTABLISH_THEOLOGY",
        "iAmbitionClass": "15",
        "iMinTier": "4",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CLERICS",
            "iValue": "1000"
          }
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_THEOLOGY_ESTABLISHED",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_RELIGION_SPREAD",
        "Name": "TEXT_GOAL_FOUR_RELIGION_SPREAD",
        "iAmbitionClass": "15",
        "iMinTier": "3",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CLERICS",
            "iValue": "1000"
          }
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_RELIGION_SPREAD",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_EIGHT_RELIGION_SPREAD",
        "Name": "TEXT_GOAL_EIGHT_RELIGION_SPREAD",
        "iAmbitionClass": "15",
        "iMinTier": "4",
        "iMaxTier": "6",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CLERICS",
            "iValue": "1000"
          }
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_RELIGION_SPREAD",
            "iValue": "8"
          }
        }
      },
      {
        "zType": "GOAL_SIX_TECHS",
        "Name": "TEXT_GOAL_SIX_TECHS",
        "iAmbitionClass": "16",
        "iMinTier": "1",
        "iMaxTier": "3",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_SAGES",
            "iValue": "1000"
          }
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_TECH_DISCOVERED",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_EIGHT_TECHS",
        "Name": "TEXT_GOAL_EIGHT_TECHS",
        "iAmbitionClass": "16",
        "iMinTier": "4",
        "iMaxTier": "6",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_SAGES",
            "iValue": "1000"
          }
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_TECH_DISCOVERED",
            "iValue": "8"
          }
        }
      },
      {
        "zType": "GOAL_SCHOLARSHIP_VAULTING",
        "Name": "TEXT_GOAL_SCHOLARSHIP_VAULTING",
        "iAmbitionClass": "16",
        "iMinTier": "7",
        "iMaxTier": "8",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_SAGES",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            }
          ]
        },
        "aeTechsAcquired": {
          "zValue": [
            "TECH_SCHOLARSHIP",
            "TECH_VAULTING"
          ]
        }
      },
      {
        "zType": "GOAL_ARCHITECTURE_JURISPRUDENCE",
        "Name": "TEXT_GOAL_ARCHITECTURE_JURISPRUDENCE",
        "iAmbitionClass": "16",
        "iMinTier": "7",
        "iMaxTier": "8",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            }
          ]
        },
        "aeTechsAcquired": {
          "zValue": [
            "TECH_ARCHITECTURE",
            "TECH_JURISPRUDENCE"
          ]
        }
      },
      {
        "zType": "GOAL_COINAGE_FISCAL_POLICY",
        "Name": "TEXT_GOAL_COINAGE_FISCAL_POLICY",
        "iAmbitionClass": "16",
        "iMinTier": "7",
        "iMaxTier": "8",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        },
        "aeTechsAcquired": {
          "zValue": [
            "TECH_COINAGE",
            "TECH_FISCAL_POLICY"
          ]
        }
      },
      {
        "zType": "GOAL_HYDRAULICS_CHAIN_DRIVE",
        "Name": "TEXT_GOAL_HYDRAULICS_CHAIN_DRIVE",
        "iAmbitionClass": "16",
        "iMinTier": "7",
        "iMaxTier": "8",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        },
        "aeTechsAcquired": {
          "zValue": [
            "TECH_HYDRAULICS",
            "TECH_CHAIN_DRIVE"
          ]
        }
      },
      {
        "zType": "GOAL_COHORTS_MARTIAL_CODE",
        "Name": "TEXT_GOAL_COHORTS_MARTIAL_CODE",
        "iAmbitionClass": "16",
        "iMinTier": "7",
        "iMaxTier": "8",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_CLERICS",
              "iValue": "1000"
            }
          ]
        },
        "aeTechsAcquired": {
          "zValue": [
            "TECH_COHORTS",
            "TECH_MARTIAL_CODE"
          ]
        }
      },
      {
        "zType": "GOAL_BODKIN_ARROW_BALLISTICS",
        "Name": "TEXT_GOAL_BODKIN_ARROW_BALLISTICS",
        "iAmbitionClass": "16",
        "iMinTier": "7",
        "iMaxTier": "8",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_HUNTERS",
            "iValue": "1000"
          }
        },
        "aeTechsAcquired": {
          "zValue": [
            "TECH_BODKIN_ARROW",
            "TECH_BALLISTICS"
          ]
        }
      },
      {
        "zType": "GOAL_WINDLASS_LATEEN_SAIL",
        "Name": "TEXT_GOAL_WINDLASS_LATEEN_SAIL",
        "iAmbitionClass": "16",
        "iMinTier": "7",
        "iMaxTier": "8",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aeTechsAcquired": {
          "zValue": [
            "TECH_WINDLASS",
            "TECH_LATEEN_SAIL"
          ]
        }
      },
      {
        "zType": "GOAL_BARDING_INFANTRY_SQUARE",
        "Name": "TEXT_GOAL_BARDING_INFANTRY_SQUARE",
        "iAmbitionClass": "16",
        "iMinTier": "7",
        "iMaxTier": "8",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_RIDERS",
            "iValue": "1000"
          }
        },
        "aeTechsAcquired": {
          "zValue": [
            "TECH_BARDING",
            "TECH_INFANTRY_SQUARE"
          ]
        }
      },
      {
        "zType": "GOAL_5_KILLS",
        "Name": "TEXT_GOAL_5_KILLS",
        "iAmbitionClass": "17",
        "iMinTier": "1",
        "iMaxTier": "2",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_UNIT_MILITARY_KILLED",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_10_KILLS",
        "Name": "TEXT_GOAL_10_KILLS",
        "iAmbitionClass": "17",
        "iMinTier": "3",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_UNIT_MILITARY_KILLED",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "GOAL_15_KILLS",
        "Name": "TEXT_GOAL_15_KILLS",
        "iAmbitionClass": "17",
        "iMinTier": "5",
        "iMaxTier": "6",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_UNIT_MILITARY_KILLED",
            "iValue": "15"
          }
        }
      },
      {
        "zType": "GOAL_20_KILLS",
        "Name": "TEXT_GOAL_20_KILLS",
        "iAmbitionClass": "17",
        "iMinTier": "7",
        "iMaxTier": "8",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_UNIT_MILITARY_KILLED",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "GOAL_5_KILLS_GENERAL",
        "Name": "TEXT_GOAL_5_KILLS_GENERAL",
        "iAmbitionClass": "17",
        "iMinTier": "3",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_UNIT_MILITARY_KILLED_GENERAL",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_10_KILLS_GENERAL",
        "Name": "TEXT_GOAL_10_KILLS_GENERAL",
        "iAmbitionClass": "17",
        "iMinTier": "6",
        "iMaxTier": "8",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_UNIT_MILITARY_KILLED_GENERAL",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "GOAL_FIVE_PROMOTIONS",
        "Name": "TEXT_GOAL_FIVE_PROMOTIONS",
        "iAmbitionClass": "18",
        "iMinTier": "1",
        "iMaxTier": "2",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_UNIT_PROMOTED",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_TEN_PROMOTIONS",
        "Name": "TEXT_GOAL_TEN_PROMOTIONS",
        "iAmbitionClass": "18",
        "iMinTier": "3",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_UNIT_PROMOTED",
            "iValue": "10"
          }
        }
      },
      {
        "zType": "GOAL_TWO_MAX_LEVEL_UNIT",
        "Name": "TEXT_GOAL_TWO_MAX_LEVEL_UNIT",
        "iAmbitionClass": "18",
        "iMinTier": "5",
        "iMaxTier": "6",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiUnitTraitMaxLevelCount": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_MELEE",
              "iValue": "1"
            },
            {
              "zIndex": "UNITTRAIT_RANGED",
              "iValue": "1"
            }
          ]
        }
      },
      {
        "zType": "GOAL_FIVE_MILITARY",
        "Name": "TEXT_GOAL_FIVE_MILITARY",
        "iAmbitionClass": "19",
        "iMinTier": "1",
        "iMaxTier": "2",
        "iMilitaryUnits": "5",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_FIVE_RANGED",
        "Name": "TEXT_GOAL_FIVE_RANGED",
        "iAmbitionClass": "19",
        "iMinTier": "2",
        "iMaxTier": "3",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_HUNTERS",
            "iValue": "1000"
          }
        },
        "aiUnitTraitCount": {
          "Pair": {
            "zIndex": "UNITTRAIT_RANGED",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_FIVE_MOUNTED",
        "Name": "TEXT_GOAL_FIVE_MOUNTED",
        "iAmbitionClass": "19",
        "iMinTier": "3",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_RIDERS",
            "iValue": "1000"
          }
        },
        "aiUnitTraitCount": {
          "Pair": {
            "zIndex": "UNITTRAIT_MOUNTED",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_FIVE_SIEGE",
        "Name": "TEXT_GOAL_FIVE_SIEGE",
        "iAmbitionClass": "19",
        "iMinTier": "4",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_ARTISANS",
            "iValue": "1000"
          }
        },
        "aiUnitTraitCount": {
          "Pair": {
            "zIndex": "UNITTRAIT_SIEGE",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_TWO_RANGED_MOUNTED",
        "Name": "TEXT_GOAL_TWO_RANGED_MOUNTED",
        "iAmbitionClass": "19",
        "iMinTier": "2",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiUnitTraitCount": {
          "Pair": [
            {
              "zIndex": "UNITTRAIT_RANGED",
              "iValue": "2"
            },
            {
              "zIndex": "UNITTRAIT_MOUNTED",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "GOAL_FIVE_LONGBOWMAN_CROSSBOWMAN",
        "Name": "TEXT_GOAL_FIVE_LONGBOWMAN_CROSSBOWMAN",
        "iAmbitionClass": "19",
        "iMinTier": "5",
        "iMaxTier": "6",
        "TechPrereq": "TECH_MACHINERY",
        "iUnitThreshold": "5",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_HUNTERS",
            "iValue": "1000"
          }
        },
        "aeThresholdUnits": {
          "zValue": [
            "UNIT_LONGBOWMAN",
            "UNIT_CROSSBOWMAN"
          ]
        }
      },
      {
        "zType": "GOAL_FIVE_POLYBOLOS_CATAPHRACT",
        "Name": "TEXT_GOAL_FIVE_POLYBOLOS_CATAPHRACT",
        "iAmbitionClass": "19",
        "iMinTier": "6",
        "iMaxTier": "7",
        "TechPrereq": "TECH_BATTLELINE",
        "iUnitThreshold": "5",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aeThresholdUnits": {
          "zValue": [
            "UNIT_POLYBOLOS",
            "UNIT_CATAPHRACT"
          ]
        }
      },
      {
        "zType": "GOAL_FIVE_SWORDSMAN_PIKEMAN",
        "Name": "TEXT_GOAL_FIVE_SWORDSMAN_PIKEMAN",
        "iAmbitionClass": "19",
        "iMinTier": "6",
        "iMaxTier": "7",
        "TechPrereq": "TECH_SCHOLARSHIP",
        "iUnitThreshold": "5",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "1000"
          }
        },
        "aeThresholdUnits": {
          "zValue": [
            "UNIT_SWORDSMAN",
            "UNIT_PIKEMAN"
          ]
        }
      },
      {
        "zType": "GOAL_20_UNITS",
        "Name": "TEXT_GOAL_20_UNITS",
        "iAmbitionClass": "19",
        "iMinTier": "8",
        "iMaxTier": "9",
        "iMilitaryUnits": "20",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_CATAPHRACT",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_TWO_BATTERING_RAM",
        "Name": "TEXT_GOAL_TWO_BATTERING_RAM",
        "iAmbitionClass": "20",
        "iMinTier": "3",
        "iMaxTier": "5",
        "TechPrereq": "TECH_DRAMA",
        "NationPrereq": "NATION_ASSYRIA",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_ARTISANS",
            "iValue": "1000"
          }
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_BATTERING_RAM",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_SIEGE_TOWER",
        "Name": "TEXT_GOAL_TWO_SIEGE_TOWER",
        "iAmbitionClass": "20",
        "iMinTier": "5",
        "iMaxTier": "7",
        "TechPrereq": "TECH_MACHINERY",
        "NationPrereq": "NATION_ASSYRIA",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_ARTISANS",
            "iValue": "1000"
          }
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_SIEGE_TOWER",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_AKKADIAN_ARCHER",
        "Name": "TEXT_GOAL_TWO_AKKADIAN_ARCHER",
        "iAmbitionClass": "20",
        "iMinTier": "3",
        "iMaxTier": "5",
        "TechPrereq": "TECH_IRONWORKING",
        "NationPrereq": "NATION_BABYLONIA",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_HUNTERS",
            "iValue": "1000"
          }
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_AKKADIAN_ARCHER",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_CIMMERIAN_ARCHER",
        "Name": "TEXT_GOAL_TWO_CIMMERIAN_ARCHER",
        "iAmbitionClass": "20",
        "iMinTier": "5",
        "iMaxTier": "7",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "NationPrereq": "NATION_BABYLONIA",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_HUNTERS",
            "iValue": "1000"
          }
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_CIMMERIAN_ARCHER",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_AFRICAN_ELEPHANT",
        "Name": "TEXT_GOAL_TWO_AFRICAN_ELEPHANT",
        "iAmbitionClass": "20",
        "iMinTier": "3",
        "iMaxTier": "5",
        "TechPrereq": "TECH_MILITARY_DRILL",
        "NationPrereq": "NATION_CARTHAGE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "1000"
          }
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_AFRICAN_ELEPHANT",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_TURRETED_ELEPHANT",
        "Name": "TEXT_GOAL_TWO_TURRETED_ELEPHANT",
        "iAmbitionClass": "20",
        "iMinTier": "5",
        "iMaxTier": "7",
        "TechPrereq": "TECH_PORTCULLIS",
        "NationPrereq": "NATION_CARTHAGE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "1000"
          }
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_TURRETED_ELEPHANT",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_LIGHT_CHARIOT",
        "Name": "TEXT_GOAL_TWO_LIGHT_CHARIOT",
        "iAmbitionClass": "20",
        "iMinTier": "3",
        "iMaxTier": "5",
        "TechPrereq": "TECH_IRONWORKING",
        "NationPrereq": "NATION_EGYPT",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_LIGHT_CHARIOT",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_KUSHITE_CAVALRY",
        "Name": "TEXT_GOAL_TWO_KUSHITE_CAVALRY",
        "iAmbitionClass": "20",
        "iMinTier": "5",
        "iMaxTier": "7",
        "TechPrereq": "TECH_LAND_CONSOLIDATION",
        "NationPrereq": "NATION_EGYPT",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_KUSHITE_CAVALRY",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_HOPLITE",
        "Name": "TEXT_GOAL_TWO_HOPLITE",
        "iAmbitionClass": "20",
        "iMinTier": "3",
        "iMaxTier": "5",
        "TechPrereq": "TECH_LABOR_FORCE",
        "NationPrereq": "NATION_GREECE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_HOPLITE",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_PHALANGITE",
        "Name": "TEXT_GOAL_TWO_PHALANGITE",
        "iAmbitionClass": "20",
        "iMinTier": "5",
        "iMaxTier": "7",
        "TechPrereq": "TECH_BODKIN_ARROW",
        "NationPrereq": "NATION_GREECE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_PHALANGITE",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_PALTON_CAVALRY",
        "Name": "TEXT_GOAL_TWO_PALTON_CAVALRY",
        "iAmbitionClass": "20",
        "iMinTier": "3",
        "iMaxTier": "5",
        "TechPrereq": "TECH_RHETORIC",
        "NationPrereq": "NATION_PERSIA",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_RIDERS",
            "iValue": "1000"
          }
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_PALTON_CAVALRY",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_CATAPHRACT_ARCHER",
        "Name": "TEXT_GOAL_TWO_CATAPHRACT_ARCHER",
        "iAmbitionClass": "20",
        "iMinTier": "5",
        "iMaxTier": "7",
        "TechPrereq": "TECH_CARTOGRAPHY",
        "NationPrereq": "NATION_PERSIA",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_RIDERS",
            "iValue": "1000"
          }
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_CATAPHRACT_ARCHER",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_HASTATUS",
        "Name": "TEXT_GOAL_TWO_HASTATUS",
        "iAmbitionClass": "20",
        "iMinTier": "3",
        "iMaxTier": "5",
        "TechPrereq": "TECH_MILITARY_DRILL",
        "NationPrereq": "NATION_ROME",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "1000"
          }
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_HASTATUS",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_LEGIONARY",
        "Name": "TEXT_GOAL_TWO_LEGIONARY",
        "iAmbitionClass": "20",
        "iMinTier": "5",
        "iMaxTier": "7",
        "TechPrereq": "TECH_MACHINERY",
        "NationPrereq": "NATION_ROME",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CHAMPIONS",
            "iValue": "1000"
          }
        },
        "aiUnitCount": {
          "Pair": {
            "zIndex": "UNIT_LEGIONARY",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_COURTIERS",
        "Name": "TEXT_GOAL_TWO_COURTIERS",
        "iAmbitionClass": "21",
        "iMinTier": "2",
        "iMaxTier": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_COURTIER_ADDED",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_COURTIERS",
        "Name": "TEXT_GOAL_FOUR_COURTIERS",
        "iAmbitionClass": "21",
        "iMinTier": "5",
        "iMaxTier": "7",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_COURTIER_ADDED",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_GENERALS",
        "Name": "TEXT_GOAL_FOUR_GENERALS",
        "iAmbitionClass": "21",
        "iMinTier": "2",
        "iMaxTier": "4",
        "iGeneralCount": "4",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_THREE_GOVERNORS",
        "Name": "TEXT_GOAL_THREE_GOVERNORS",
        "iAmbitionClass": "21",
        "iMinTier": "3",
        "iMaxTier": "5",
        "iGovernorCount": "3",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_EIGHT_GENERALS",
        "Name": "TEXT_GOAL_EIGHT_GENERALS",
        "iAmbitionClass": "21",
        "iMinTier": "4",
        "iMaxTier": "6",
        "iGeneralCount": "8",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_SIX_GOVERNORS",
        "Name": "TEXT_GOAL_SIX_GOVERNORS",
        "iAmbitionClass": "21",
        "iMinTier": "5",
        "iMaxTier": "7",
        "iGovernorCount": "6",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_REVEAL_40",
        "Name": "TEXT_GOAL_REVEAL_40",
        "iAmbitionClass": "22",
        "iMinTier": "3",
        "iMaxTier": "4",
        "iRevealLand": "40",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_REVEAL_60",
        "Name": "TEXT_GOAL_REVEAL_60",
        "iAmbitionClass": "22",
        "iMinTier": "5",
        "iMaxTier": "6",
        "iRevealLand": "60",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_REVEAL_80",
        "Name": "TEXT_GOAL_REVEAL_80",
        "iAmbitionClass": "22",
        "iMinTier": "7",
        "iMaxTier": "8",
        "iRevealLand": "80",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_TWO_CARAVANS",
        "Name": "TEXT_GOAL_TWO_CARAVANS",
        "iAmbitionClass": "23",
        "iMinTier": "2",
        "iMaxTier": "3",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_CARAVAN_ARRIVED",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_CARAVANS",
        "Name": "TEXT_GOAL_FOUR_CARAVANS",
        "iAmbitionClass": "23",
        "iMinTier": "4",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_CARAVAN_ARRIVED",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_TWO_TRIBAL_LUXURIES",
        "Name": "TEXT_GOAL_TWO_TRIBAL_LUXURIES",
        "iAmbitionClass": "24",
        "iMinTier": "2",
        "iMaxTier": "4",
        "TechPrereq": "TECH_FORESTRY",
        "iTribeLuxuries": "2",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_PLAYER_LUXURIES",
        "Name": "TEXT_GOAL_FOUR_PLAYER_LUXURIES",
        "iAmbitionClass": "24",
        "iMinTier": "3",
        "iMaxTier": "5",
        "TechPrereq": "TECH_FORESTRY",
        "iPlayerLuxuries": "4",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "GOAL_SIX_FAMILY_LUXURIES",
        "Name": "TEXT_GOAL_SIX_FAMILY_LUXURIES",
        "iAmbitionClass": "24",
        "iMinTier": "4",
        "iMaxTier": "6",
        "TechPrereq": "TECH_FORESTRY",
        "iFamilyLuxuries": "6",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "GOAL_EIGHT_LUXURIES",
        "Name": "TEXT_GOAL_EIGHT_LUXURIES",
        "iAmbitionClass": "24",
        "iMinTier": "5",
        "iMaxTier": "7",
        "TechPrereq": "TECH_FORESTRY",
        "iLuxuries": "8",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "GOAL_ONE_RECAPTURE_CITY",
        "Name": "TEXT_GOAL_ONE_RECAPTURE_CITY",
        "iAmbitionClass": "25",
        "iMinTier": "3",
        "iMaxTier": "6",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_CITY_RECAPTURED",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_TWO_RECAPTURE_CITY",
        "Name": "TEXT_GOAL_TWO_RECAPTURE_CITY",
        "iAmbitionClass": "25",
        "iMinTier": "5",
        "iMaxTier": "8",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_CITY_RECAPTURED",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_TWO_CAPTURE_CITIES",
        "Name": "TEXT_GOAL_TWO_CAPTURE_CITIES",
        "iAmbitionClass": "25",
        "iMinTier": "4",
        "iMaxTier": "5",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_CITY_CAPTURED",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "GOAL_ONE_CAPITAL",
        "Name": "TEXT_GOAL_ONE_CAPITAL",
        "iAmbitionClass": "25",
        "iMinTier": "6",
        "iMaxTier": "7",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_CAPITAL_CAPTURED",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_FIVE_CAPTURE_CITIES",
        "Name": "TEXT_GOAL_FIVE_CAPTURE_CITIES",
        "iAmbitionClass": "25",
        "iMinTier": "8",
        "iMaxTier": "9",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_CHAMPIONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_RIDERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_HUNTERS",
              "iValue": "1000"
            }
          ]
        },
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_CITY_CAPTURED",
            "iValue": "5"
          }
        }
      },
      {
        "zType": "GOAL_TEN_POPULATION",
        "Name": "TEXT_GOAL_TEN_POPULATION",
        "iAmbitionClass": "26",
        "iMinTier": "1",
        "iMaxTier": "3",
        "iPopulation": "10",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "GOAL_30_POPULATION",
        "Name": "TEXT_GOAL_30_POPULATION",
        "iAmbitionClass": "26",
        "iMinTier": "3",
        "iMaxTier": "5",
        "iPopulation": "30",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "GOAL_100_POPULATION",
        "Name": "TEXT_GOAL_100_POPULATION",
        "iAmbitionClass": "26",
        "iMinTier": "5",
        "iMaxTier": "7",
        "iPopulation": "100",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_LANDOWNERS",
            "iValue": "1000"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_BATHS_1",
        "Name": "TEXT_GOAL_FOUR_BATHS_1",
        "iAmbitionClass": "27",
        "iMinTier": "4",
        "iMaxTier": "5",
        "TechPrereq": "TECH_ARCHITECTURE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_SAGES",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_BATHS_1",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_BATHS_2",
        "Name": "TEXT_GOAL_FOUR_BATHS_2",
        "iAmbitionClass": "27",
        "iMinTier": "6",
        "iMaxTier": "7",
        "TechPrereq": "TECH_ARCHITECTURE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_SAGES",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_BATHS_2",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_BATHS_3",
        "Name": "TEXT_GOAL_FOUR_BATHS_3",
        "iAmbitionClass": "27",
        "iMinTier": "8",
        "iMaxTier": "9",
        "TechPrereq": "TECH_ARCHITECTURE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_SAGES",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_BATHS_3",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_THEATER_1",
        "Name": "TEXT_GOAL_FOUR_THEATER_1",
        "iAmbitionClass": "27",
        "iMinTier": "2",
        "iMaxTier": "3",
        "TechPrereq": "TECH_DRAMA",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_THEATER_1",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_THEATER_2",
        "Name": "TEXT_GOAL_FOUR_THEATER_2",
        "iAmbitionClass": "27",
        "iMinTier": "4",
        "iMaxTier": "5",
        "TechPrereq": "TECH_DRAMA",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_THEATER_2",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_THEATER_3",
        "Name": "TEXT_GOAL_FOUR_THEATER_3",
        "iAmbitionClass": "27",
        "iMinTier": "6",
        "iMaxTier": "7",
        "TechPrereq": "TECH_DRAMA",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_PATRONS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_THEATER_3",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_MARKET_1",
        "Name": "TEXT_GOAL_FOUR_MARKET_1",
        "iAmbitionClass": "27",
        "iMinTier": "4",
        "iMaxTier": "5",
        "TechPrereq": "TECH_COINAGE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_MARKET_1",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_MARKET_2",
        "Name": "TEXT_GOAL_FOUR_MARKET_2",
        "iAmbitionClass": "27",
        "iMinTier": "6",
        "iMaxTier": "7",
        "TechPrereq": "TECH_COINAGE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_MARKET_2",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_MARKET_3",
        "Name": "TEXT_GOAL_FOUR_MARKET_3",
        "iAmbitionClass": "27",
        "iMinTier": "8",
        "iMaxTier": "9",
        "TechPrereq": "TECH_COINAGE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_TRADERS",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_MARKET_3",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_LIBRARY_1",
        "Name": "TEXT_GOAL_FOUR_LIBRARY_1",
        "iAmbitionClass": "27",
        "iMinTier": "4",
        "iMaxTier": "5",
        "TechPrereq": "TECH_SCHOLARSHIP",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_SAGES",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_LIBRARY_1",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_LIBRARY_2",
        "Name": "TEXT_GOAL_FOUR_LIBRARY_2",
        "iAmbitionClass": "27",
        "iMinTier": "6",
        "iMaxTier": "7",
        "TechPrereq": "TECH_SCHOLARSHIP",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_SAGES",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_LIBRARY_2",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_LIBRARY_3",
        "Name": "TEXT_GOAL_FOUR_LIBRARY_3",
        "iAmbitionClass": "27",
        "iMinTier": "8",
        "iMaxTier": "9",
        "TechPrereq": "TECH_SCHOLARSHIP",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_SAGES",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_LIBRARY_3",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_COURTHOUSE_1",
        "Name": "TEXT_GOAL_FOUR_COURTHOUSE_1",
        "iAmbitionClass": "27",
        "iMinTier": "4",
        "iMaxTier": "5",
        "TechPrereq": "TECH_CITIZENSHIP",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_COURTHOUSE_1",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_COURTHOUSE_2",
        "Name": "TEXT_GOAL_FOUR_COURTHOUSE_2",
        "iAmbitionClass": "27",
        "iMinTier": "6",
        "iMaxTier": "7",
        "TechPrereq": "TECH_CITIZENSHIP",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_COURTHOUSE_2",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_COURTHOUSE_3",
        "Name": "TEXT_GOAL_FOUR_COURTHOUSE_3",
        "iAmbitionClass": "27",
        "iMinTier": "8",
        "iMaxTier": "9",
        "TechPrereq": "TECH_CITIZENSHIP",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_COURTHOUSE_3",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_GARRISON_1",
        "Name": "TEXT_GOAL_FOUR_GARRISON_1",
        "iAmbitionClass": "27",
        "iMinTier": "2",
        "iMaxTier": "3",
        "TechPrereq": "TECH_SOVEREIGNTY",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_GARRISON_1",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_GARRISON_2",
        "Name": "TEXT_GOAL_FOUR_GARRISON_2",
        "iAmbitionClass": "27",
        "iMinTier": "4",
        "iMaxTier": "5",
        "TechPrereq": "TECH_SOVEREIGNTY",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_GARRISON_2",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_GARRISON_3",
        "Name": "TEXT_GOAL_FOUR_GARRISON_3",
        "iAmbitionClass": "27",
        "iMinTier": "6",
        "iMaxTier": "7",
        "TechPrereq": "TECH_SOVEREIGNTY",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_STATESMEN",
            "iValue": "1000"
          }
        },
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_GARRISON_3",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_LEGENDARY_IMPROVEMENTS_1",
        "Name": "TEXT_GOAL_LEGENDARY_IMPROVEMENTS_1",
        "iAmbitionClass": "27",
        "iMinTier": "8",
        "iMaxTier": "9",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENT_THEATER_3",
              "iValue": "1"
            },
            {
              "zIndex": "IMPROVEMENT_BATHS_3",
              "iValue": "1"
            },
            {
              "zIndex": "IMPROVEMENT_MARKET_3",
              "iValue": "1"
            }
          ]
        }
      },
      {
        "zType": "GOAL_LEGENDARY_IMPROVEMENTS_2",
        "Name": "TEXT_GOAL_LEGENDARY_IMPROVEMENTS_2",
        "iAmbitionClass": "27",
        "iMinTier": "8",
        "iMaxTier": "9",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_SAGES",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            }
          ]
        },
        "aiImprovementCount": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENT_LIBRARY_3",
              "iValue": "1"
            },
            {
              "zIndex": "IMPROVEMENT_COURTHOUSE_3",
              "iValue": "1"
            },
            {
              "zIndex": "IMPROVEMENT_GARRISON_3",
              "iValue": "1"
            }
          ]
        }
      },
      {
        "zType": "GOAL_EIGHT_SHRINES",
        "Name": "TEXT_GOAL_EIGHT_SHRINES",
        "iAmbitionClass": "28",
        "iMinTier": "3",
        "iMaxTier": "5",
        "TechPrereq": "TECH_MONASTICISM",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CLERICS",
            "iValue": "1000"
          }
        },
        "aiImprovementClassCount": {
          "Pair": {
            "zIndex": "IMPROVEMENTCLASS_SHRINE",
            "iValue": "8"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_MONASTERY",
        "Name": "TEXT_GOAL_FOUR_MONASTERY",
        "iAmbitionClass": "28",
        "iMinTier": "4",
        "iMaxTier": "6",
        "TechPrereq": "TECH_MONASTICISM",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CLERICS",
            "iValue": "1000"
          }
        },
        "aiImprovementClassCount": {
          "Pair": {
            "zIndex": "IMPROVEMENTCLASS_MONASTERY",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_FOUR_TEMPLE",
        "Name": "TEXT_GOAL_FOUR_TEMPLE",
        "iAmbitionClass": "28",
        "iMinTier": "5",
        "iMaxTier": "7",
        "TechPrereq": "TECH_DOCTRINE",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CLERICS",
            "iValue": "1000"
          }
        },
        "aiImprovementClassCount": {
          "Pair": {
            "zIndex": "IMPROVEMENTCLASS_TEMPLE",
            "iValue": "4"
          }
        }
      },
      {
        "zType": "GOAL_THREE_CATHEDRAL",
        "Name": "TEXT_GOAL_THREE_CATHEDRAL",
        "iAmbitionClass": "28",
        "iMinTier": "6",
        "iMaxTier": "8",
        "TechPrereq": "TECH_VAULTING",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CLERICS",
            "iValue": "1000"
          }
        },
        "aiImprovementClassCount": {
          "Pair": {
            "zIndex": "IMPROVEMENTCLASS_CATHEDRAL",
            "iValue": "3"
          }
        }
      },
      {
        "zType": "GOAL_TWO_HOLY_SITE_SIX_CATHEDRAL",
        "Name": "TEXT_GOAL_TWO_HOLY_SITE_SIX_CATHEDRAL",
        "iAmbitionClass": "28",
        "iMinTier": "10",
        "iMaxTier": "10",
        "bVictoryEligible": "1",
        "aiFamilyClassWeight": {
          "Pair": {
            "zIndex": "FAMILYCLASS_CLERICS",
            "iValue": "1000"
          }
        },
        "aiImprovementClassCount": {
          "Pair": [
            {
              "zIndex": "IMPROVEMENTCLASS_CATHEDRAL",
              "iValue": "6"
            },
            {
              "zIndex": "IMPROVEMENTCLASS_HOLY_SITE",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "GOAL_SIX_URBAN_IMPROVEMENTS",
        "Name": "TEXT_GOAL_SIX_URBAN_IMPROVEMENTS",
        "iAmbitionClass": "29",
        "iMinTier": "2",
        "iMaxTier": "4",
        "iUrbanImprovements": "6",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_SAGES",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_20_URBAN_TILES",
        "Name": "TEXT_GOAL_20_URBAN_TILES",
        "iAmbitionClass": "29",
        "iMinTier": "3",
        "iMaxTier": "5",
        "iUrbanTiles": "20",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_20_URBAN_IMPROVEMENTS",
        "Name": "TEXT_GOAL_20_URBAN_IMPROVEMENTS",
        "iAmbitionClass": "29",
        "iMinTier": "4",
        "iMaxTier": "6",
        "iUrbanImprovements": "20",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_TRADERS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_SAGES",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_50_URBAN_TILES",
        "Name": "TEXT_GOAL_50_URBAN_TILES",
        "iAmbitionClass": "29",
        "iMinTier": "5",
        "iMaxTier": "7",
        "iUrbanTiles": "50",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_50_URBAN_IMPROVEMENTS",
        "Name": "TEXT_GOAL_50_URBAN_IMPROVEMENTS",
        "iAmbitionClass": "29",
        "iMinTier": "6",
        "iMaxTier": "8",
        "iUrbanImprovements": "50",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_100_URBAN_TILES",
        "Name": "TEXT_GOAL_100_URBAN_TILES",
        "iAmbitionClass": "29",
        "iMinTier": "7",
        "iMaxTier": "9",
        "iUrbanTiles": "100",
        "aiFamilyClassWeight": {
          "Pair": [
            {
              "zIndex": "FAMILYCLASS_PATRONS",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_STATESMEN",
              "iValue": "1000"
            },
            {
              "zIndex": "FAMILYCLASS_ARTISANS",
              "iValue": "1000"
            }
          ]
        }
      },
      {
        "zType": "GOAL_THREE_CITIES_FOREIGN",
        "Name": "TEXT_GOAL_THREE_CITIES_FOREIGN",
        "iMinTier": "2",
        "iMaxTier": "7",
        "iPlayerCapturedData": "3"
      },
      {
        "zType": "GOAL_FOUR_CITIES_FOREIGN",
        "Name": "TEXT_GOAL_FOUR_CITIES_FOREIGN",
        "iMinTier": "3",
        "iMaxTier": "8",
        "iPlayerCapturedData": "4"
      },
      {
        "zType": "GOAL_CLEAR_THREE_BARBS",
        "Name": "TEXT_GOAL_CLEAR_THREE_BARBS",
        "iMinTier": "2",
        "iMaxTier": "6",
        "iTribeClearedData": "3"
      },
      {
        "zType": "GOAL_SIX_TEMPLES_ZOROASTRIANISM",
        "Name": "TEXT_GOAL_SIX_TEMPLES_ZOROASTRIANISM",
        "iMinTier": "5",
        "iMaxTier": "8",
        "TechPrereq": "TECH_DOCTRINE",
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_TEMPLE_ZOROASTRIANISM",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_SIX_TEMPLES_JUDAISM",
        "Name": "TEXT_GOAL_SIX_TEMPLES_JUDAISM",
        "iMinTier": "5",
        "iMaxTier": "8",
        "TechPrereq": "TECH_DOCTRINE",
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_TEMPLE_JUDAISM",
            "iValue": "6"
          }
        }
      },
      {
        "zType": "GOAL_THREE_CATHEDRALS_CHRISTIANITY",
        "Name": "TEXT_GOAL_THREE_CATHEDRALS_CHRISTIANITY",
        "iMinTier": "6",
        "iMaxTier": "9",
        "TechPrereq": "TECH_VAULTING",
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_CATHEDRAL_CHRISTIANITY",
            "iValue": "3"
          }
        }
      },
      {
        "zType": "GOAL_THREE_CATHEDRALS_MANICHAEISM",
        "Name": "TEXT_GOAL_THREE_CATHEDRALS_MANICHAEISM",
        "iMinTier": "6",
        "iMaxTier": "9",
        "TechPrereq": "TECH_VAULTING",
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_CATHEDRAL_MANICHAEISM",
            "iValue": "3"
          }
        }
      },
      {
        "zType": "GOAL_QUEST_INQUIRING_MINDS",
        "Name": "TEXT_GOAL_QUEST_INQUIRING_MINDS",
        "iMaxTurns": "20",
        "aiProjectCount": {
          "Pair": {
            "zIndex": "PROJECT_INQUIRY",
            "iValue": "3"
          }
        }
      },
      {
        "zType": "GOAL_QUEST_FOUNDING_SIGNS",
        "Name": "TEXT_GOAL_QUEST_FOUNDING_SIGNS",
        "iMaxTurns": "20",
        "aiStatCountData": {
          "Pair": {
            "zIndex": "STAT_CITY_FOUNDED",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_QUEST_KILL_5_ENEMIES",
        "Name": "TEXT_GOAL_QUEST_KILL_5_ENEMIES",
        "iMaxTurns": "10",
        "iPlayerKilledData": "5"
      },
      {
        "zType": "GOAL_QUEST_KILL_5_BARBS",
        "Name": "TEXT_GOAL_QUEST_KILL_5_BARBS",
        "iMaxTurns": "10",
        "iTribeKilledData": "5"
      },
      {
        "zType": "GOAL_QUEST_PHILOSOPHY",
        "Name": "TEXT_GOAL_QUEST_PHILOSOPHY",
        "iMaxTurns": "20",
        "StartLaw": "LAW_PHILOSOPHY"
      },
      {
        "zType": "GOAL_QUEST_ENACT_ORTHODOXY",
        "Name": "TEXT_GOAL_QUEST_ENACT_ORTHODOXY",
        "iMaxTurns": "20"
      },
      {
        "zType": "GOAL_QUEST_COLOSSUS",
        "Name": "TEXT_GOAL_QUEST_COLOSSUS",
        "iMaxTurns": "20",
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_COLOSSUS",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_HOLY_SITE_ZOROASTRIANISM",
        "Name": "TEXT_GOAL_HOLY_SITE_ZOROASTRIANISM",
        "iMinTier": "4",
        "iMaxTier": "6",
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_HOLY_SITE_ZOROASTRIANISM",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_HOLY_SITE_JUDAISM",
        "Name": "TEXT_GOAL_HOLY_SITE_JUDAISM",
        "iMinTier": "4",
        "iMaxTier": "6",
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_HOLY_SITE_JUDAISM",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_HOLY_SITE_CHRISTIANITY",
        "Name": "TEXT_GOAL_HOLY_SITE_CHRISTIANITY",
        "iMinTier": "4",
        "iMaxTier": "6",
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_HOLY_SITE_CHRISTIANITY",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "GOAL_HOLY_SITE_MANICHAEISM",
        "Name": "TEXT_GOAL_HOLY_SITE_MANICHAEISM",
        "iMinTier": "4",
        "iMaxTier": "6",
        "aiImprovementCount": {
          "Pair": {
            "zIndex": "IMPROVEMENT_HOLY_SITE_MANICHAEISM",
            "iValue": "1"
          }
        }
      }
    ]
  }
}
    export default data
    