
    const data: XmlCouncil.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "zIconName": {
          
        },
        "TechPrereq": {
          
        },
        "iXP": {
          
        },
        "iOpinion": {
          
        },
        "bDisable": {
          
        },
        "EffectPlayer": {
          
        },
        "AssignMission": {
          
        },
        "aiPlayerOpinion": {
          
        },
        "aiTribeOpinion": {
          
        },
        "aiReligionOpinion": {
          
        },
        "aiFamilyOpinion": {
          
        },
        "abTraitPrereq": {
          
        },
        "aaiRatingYieldGlobal": {
          
        },
        "aaiRatingYieldCity": {
          
        }
      },
      {
        "zType": "COUNCIL_AMBASSADOR",
        "Name": "TEXT_COUNCIL_AMBASSADOR",
        "zIconName": "COUNCIL_AMBASSADOR",
        "TechPrereq": "TECH_ARISTOCRACY",
        "iXP": "5",
        "iOpinion": "40",
        "AssignMission": "MISSION_AMBASSADOR",
        "aiPlayerOpinion": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "3"
          }
        },
        "aiTribeOpinion": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "iValue": "3"
          }
        },
        "aiReligionOpinion": {
          "Pair": {
            "zIndex": "RATING_DISCIPLINE",
            "iValue": "3"
          }
        },
        "abTraitPrereq": {
          "Pair": [
            {
              "zIndex": "TRAIT_COMMANDER_ARCHETYPE",
              "bValue": "1"
            },
            {
              "zIndex": "TRAIT_ORATOR_ARCHETYPE",
              "bValue": "1"
            },
            {
              "zIndex": "TRAIT_DIPLOMAT_ARCHETYPE",
              "bValue": "1"
            }
          ]
        },
        "aaiRatingYieldCity": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "SubPair": {
              "zSubIndex": "YIELD_CULTURE",
              "iValue": "5"
            }
          }
        }
      },
      {
        "zType": "COUNCIL_CHANCELLOR",
        "Name": "TEXT_COUNCIL_CHANCELLOR",
        "zIconName": "COUNCIL_CHANCELLOR",
        "TechPrereq": "TECH_SPOKED_WHEEL",
        "iXP": "5",
        "iOpinion": "40",
        "AssignMission": "MISSION_CHANCELLOR",
        "abTraitPrereq": {
          "Pair": [
            {
              "zIndex": "TRAIT_ZEALOT_ARCHETYPE",
              "bValue": "1"
            },
            {
              "zIndex": "TRAIT_JUDGE_ARCHETYPE",
              "bValue": "1"
            },
            {
              "zIndex": "TRAIT_BUILDER_ARCHETYPE",
              "bValue": "1"
            }
          ]
        },
        "aaiRatingYieldGlobal": {
          "Pair": [
            {
              "zIndex": "RATING_CHARISMA",
              "SubPair": {
                "zSubIndex": "YIELD_CIVICS",
                "iValue": "10"
              }
            },
            {
              "zIndex": "RATING_COURAGE",
              "SubPair": {
                "zSubIndex": "YIELD_TRAINING",
                "iValue": "15"
              }
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "SubPair": {
                "zSubIndex": "YIELD_MONEY",
                "iValue": "30"
              }
            }
          ]
        },
        "aaiRatingYieldCity": {
          "Pair": {
            "zIndex": "RATING_WISDOM",
            "SubPair": {
              "zSubIndex": "YIELD_GROWTH",
              "iValue": "5"
            }
          }
        }
      },
      {
        "zType": "COUNCIL_SPYMASTER",
        "Name": "TEXT_COUNCIL_SPYMASTER",
        "zIconName": "COUNCIL_SPYMASTER",
        "TechPrereq": "TECH_PORTCULLIS",
        "iXP": "5",
        "iOpinion": "40",
        "EffectPlayer": "EFFECTPLAYER_COUNCIL_SPYMASTER",
        "AssignMission": "MISSION_SPYMASTER",
        "aiFamilyOpinion": {
          "Pair": {
            "zIndex": "RATING_CHARISMA",
            "iValue": "3"
          }
        },
        "abTraitPrereq": {
          "Pair": [
            {
              "zIndex": "TRAIT_TACTICIAN_ARCHETYPE",
              "bValue": "1"
            },
            {
              "zIndex": "TRAIT_SCHEMER_ARCHETYPE",
              "bValue": "1"
            },
            {
              "zIndex": "TRAIT_SCHOLAR_ARCHETYPE",
              "bValue": "1"
            }
          ]
        },
        "aaiRatingYieldGlobal": {
          "Pair": [
            {
              "zIndex": "RATING_WISDOM",
              "SubPair": {
                "zSubIndex": "YIELD_SCIENCE",
                "iValue": "5"
              }
            },
            {
              "zIndex": "RATING_DISCIPLINE",
              "SubPair": {
                "zSubIndex": "YIELD_ORDERS",
                "iValue": "2"
              }
            }
          ]
        },
        "aaiRatingYieldCity": {
          "Pair": {
            "zIndex": "RATING_COURAGE",
            "SubPair": {
              "zSubIndex": "YIELD_DISCONTENT",
              "iValue": "-2"
            }
          }
        }
      }
    ]
  }
}
    export default data
    