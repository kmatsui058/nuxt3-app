
    const data: XmlMission.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "NameTarget": {
          
        },
        "NameCharacter": {
          
        },
        "zIcon": {
          
        },
        "iXP": {
          
        },
        "iMissionTurns": {
          
        },
        "iMissionTurnsScaled": {
          
        },
        "bBlockDiplomacy": {
          
        },
        "bTestMission": {
          
        },
        "bVisibleCharacter": {
          
        },
        "bVisibleTarget": {
          
        },
        "bVisibleAlways": {
          
        },
        "bNoPopup": {
          
        },
        "bCharacterNoEvents": {
          
        },
        "bTargetNoEvents": {
          
        },
        "bCharacterUs": {
          
        },
        "bDisabled": {
          
        },
        "bEncyclopedia": {
          
        },
        "MissionRoot": {
          
        },
        "TechPrereq": {
          
        },
        "SubjectPlayerEnabled": {
          
        },
        "SubjectCharacter": {
          
        },
        "SubjectCharacterEnabled": {
          
        },
        "SubjectCharacterDisabled": {
          
        },
        "SubjectTarget": {
          
        },
        "SubjectTargetStart": {
          
        },
        "SubjectTargetEnabled": {
          
        },
        "SubjectTargetDisabled": {
          
        },
        "SubjectRelationStart": {
          
        },
        "SubjectRelationEnabled": {
          
        },
        "SubjectRelationDisabled": {
          
        },
        "aiResultDie": {
          
        },
        "aiYieldCost": {
          
        },
        "aiYieldCostOpinion": {
          
        }
      },
      {
        "zType": "MISSION_AMBASSADOR",
        "Name": "TEXT_MISSION_AMBASSADOR",
        "zIcon": "MISSION_MAKE_AMBASSADOR",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "SubjectCharacter": "SUBJECT_NON_LEADER_US",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_AMBASSADOR",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_CHANCELLOR",
        "Name": "TEXT_MISSION_CHANCELLOR",
        "zIcon": "MISSION_CHANCELLOR",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "SubjectCharacter": "SUBJECT_NON_LEADER_US",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_CHANCELLOR",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_SPYMASTER",
        "Name": "TEXT_MISSION_SPYMASTER",
        "zIcon": "MISSION_SPYMASTER",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "SubjectCharacter": "SUBJECT_NON_LEADER_US",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_SPYMASTER",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_LEAVE_COUNCIL",
        "Name": "TEXT_MISSION_LEAVE_COUNCIL",
        "zIcon": "MISSION_LEAVE_COUNCIL",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "bCharacterUs": "1",
        "SubjectCharacter": "SUBJECT_COUNCIL",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_LEAVE_COUNCIL",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_ALLIANCE",
        "Name": "TEXT_MISSION_PLAYER_ALLIANCE",
        "NameTarget": "TEXT_MISSION_PLAYER_ALLIANCE_TARGET",
        "zIcon": "MISSION_TEAM_ALLIANCE",
        "iMissionTurns": "2",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bNoPopup": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "SubjectCharacterEnabled": "SUBJECT_LEADER_DIPLOMAT",
        "SubjectTarget": "SUBJECT_PLAYER_CAN_ALLIANCE",
        "SubjectTargetEnabled": "SUBJECT_PLAYER_PEACE_FRIENDLY",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_TEAM_ALLIANCE_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "400"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_PLAYER_ALLIANCE_HUMAN",
        "Name": "TEXT_MISSION_PLAYER_ALLIANCE_HUMAN",
        "zIcon": "MISSION_TEAM_ALLIANCE",
        "bVisibleTarget": "1",
        "SubjectTarget": "SUBJECT_PLAYER_CAN_ALLIANCE_PEACE_HUMAN",
        "SubjectTargetEnabled": "SUBJECT_PLAYER_HUMAN_DIPLOMACY_NOT_FOUND",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_TEAM_ALLIANCE_HUMAN_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_PEACE",
        "Name": "TEXT_MISSION_PLAYER_PEACE",
        "NameTarget": "TEXT_MISSION_PLAYER_PEACE_TARGET",
        "NameCharacter": "TEXT_MISSION_PLAYER_PEACE_CHARACTER",
        "zIcon": "MISSION_PLAYER_PEACE",
        "bTestMission": "1",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bNoPopup": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectTarget": "SUBJECT_PLAYER_TRUCE",
        "SubjectTargetEnabled": "SUBJECT_PLAYER_MIN_PLEASED",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_PEACE_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_PEACE_OFFER_TRIBUTE",
        "Name": "TEXT_MISSION_PLAYER_PEACE_OFFER_TRIBUTE",
        "NameTarget": "TEXT_MISSION_PLAYER_PEACE_OFFER_TRIBUTE_TARGET",
        "iXP": "20",
        "iMissionTurns": "2",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "MissionRoot": "MISSION_PLAYER_PEACE",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectTarget": "SUBJECT_PLAYER_TRUCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_PEACE_OFFER_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_PEACE_NO_TRIBUTE",
        "Name": "TEXT_MISSION_PLAYER_PEACE_NO_TRIBUTE",
        "NameTarget": "TEXT_MISSION_PLAYER_PEACE_NO_TRIBUTE_TARGET",
        "iXP": "20",
        "iMissionTurns": "2",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "MissionRoot": "MISSION_PLAYER_PEACE",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectTarget": "SUBJECT_PLAYER_TRUCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_PEACE_NO_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_PEACE_DEMAND_TRIBUTE",
        "Name": "TEXT_MISSION_PLAYER_PEACE_DEMAND_TRIBUTE",
        "NameTarget": "TEXT_MISSION_PLAYER_PEACE_DEMAND_TRIBUTE_TARGET",
        "iXP": "20",
        "iMissionTurns": "2",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "MissionRoot": "MISSION_PLAYER_PEACE",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectTarget": "SUBJECT_PLAYER_TRUCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_PEACE_DEMAND_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_PEACE_HUMAN",
        "Name": "TEXT_MISSION_PLAYER_PEACE_HUMAN",
        "zIcon": "MISSION_PLAYER_PEACE",
        "bVisibleTarget": "1",
        "SubjectTarget": "SUBJECT_PLAYER_TRUCE_HUMAN",
        "SubjectTargetEnabled": "SUBJECT_PLAYER_HUMAN_DIPLOMACY_NOT_FOUND",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_PEACE_HUMAN_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_TRUCE",
        "Name": "TEXT_MISSION_PLAYER_TRUCE",
        "NameTarget": "TEXT_MISSION_PLAYER_TRUCE_TARGET",
        "NameCharacter": "TEXT_MISSION_PLAYER_TRUCE_CHARACTER",
        "zIcon": "MISSION_PLAYER_TRUCE",
        "bBlockDiplomacy": "1",
        "bTestMission": "1",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bNoPopup": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectTarget": "SUBJECT_PLAYER_WAR",
        "SubjectRelationStart": "SUBJECTRELATION_CAN_END_WAR",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_TRUCE_EVENT",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_TRUCE_OFFER_TRIBUTE",
        "Name": "TEXT_MISSION_PLAYER_TRUCE_OFFER_TRIBUTE",
        "NameTarget": "TEXT_MISSION_PLAYER_TRUCE_OFFER_TRIBUTE_TARGET",
        "iXP": "20",
        "iMissionTurns": "2",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "MissionRoot": "MISSION_PLAYER_TRUCE",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectTarget": "SUBJECT_PLAYER_WAR",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_TRUCE_OFFER_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_TRUCE_NO_TRIBUTE",
        "Name": "TEXT_MISSION_PLAYER_TRUCE_NO_TRIBUTE",
        "NameTarget": "TEXT_MISSION_PLAYER_TRUCE_NO_TRIBUTE_TARGET",
        "iXP": "20",
        "iMissionTurns": "2",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "MissionRoot": "MISSION_PLAYER_TRUCE",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectTarget": "SUBJECT_PLAYER_WAR",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_TRUCE_NO_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_TRUCE_DEMAND_TRIBUTE",
        "Name": "TEXT_MISSION_PLAYER_TRUCE_DEMAND_TRIBUTE",
        "NameTarget": "TEXT_MISSION_PLAYER_TRUCE_DEMAND_TRIBUTE_TARGET",
        "iXP": "20",
        "iMissionTurns": "2",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "MissionRoot": "MISSION_PLAYER_TRUCE",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectTarget": "SUBJECT_PLAYER_WAR",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_TRUCE_DEMAND_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_TRUCE_HUMAN",
        "Name": "TEXT_MISSION_PLAYER_TRUCE_HUMAN",
        "zIcon": "MISSION_PLAYER_TRUCE",
        "bVisibleTarget": "1",
        "SubjectTarget": "SUBJECT_PLAYER_WAR_HUMAN",
        "SubjectTargetEnabled": "SUBJECT_PLAYER_HUMAN_DIPLOMACY_NOT_FOUND",
        "SubjectRelationStart": "SUBJECTRELATION_CAN_END_WAR",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_TRUCE_HUMAN_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_DECLARE_WAR",
        "Name": "TEXT_MISSION_PLAYER_DECLARE_WAR",
        "zIcon": "MISSION_PLAYER_DECLARE_WAR",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectTarget": "SUBJECT_PLAYER_TRUCE",
        "SubjectTargetEnabled": "SUBJECT_PLAYER_NOT_MIN_CONFLICT_TURNS",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_DECLARE_WAR_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_DECLARE_WAR_HUMAN",
        "Name": "TEXT_MISSION_PLAYER_DECLARE_WAR",
        "zIcon": "MISSION_PLAYER_DECLARE_WAR",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectTarget": "SUBJECT_PLAYER_PEACE_OR_TRUCE_HUMAN",
        "SubjectTargetEnabled": "SUBJECT_PLAYER_NOT_MIN_CONFLICT_TURNS_HUMAN",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_DECLARE_WAR_HUMAN_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_BREAK_PEACE",
        "Name": "TEXT_MISSION_PLAYER_BREAK_PEACE",
        "zIcon": "MISSION_PLAYER_BREAK_PEACE",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "SubjectTarget": "SUBJECT_PLAYER_PEACE",
        "SubjectTargetEnabled": "SUBJECT_PLAYER_NO_ALLIANCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_BREAK_PEACE_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_BREAK_PEACE_HUMAN",
        "Name": "TEXT_MISSION_PLAYER_BREAK_PEACE",
        "zIcon": "MISSION_PLAYER_BREAK_PEACE",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "SubjectTarget": "SUBJECT_PLAYER_PEACE_HUMAN",
        "SubjectTargetEnabled": "SUBJECT_PLAYER_NO_ALLIANCE_HUMAN",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_BREAK_PEACE_HUMAN_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_END_ALLIANCE",
        "Name": "TEXT_MISSION_PLAYER_END_ALLIANCE",
        "zIcon": "MISSION_PLAYER_END_ALLIANCE",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "SubjectTarget": "SUBJECT_PLAYER_ALLIANCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_END_ALLIANCE_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_END_ALLIANCE_HUMAN",
        "Name": "TEXT_MISSION_PLAYER_END_ALLIANCE",
        "zIcon": "MISSION_PLAYER_END_ALLIANCE",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "SubjectTarget": "SUBJECT_PLAYER_ALLIANCE_HUMAN",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_END_ALLIANCE_HUMAN_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_PLAYER_CANCEL_TRADE",
        "Name": "TEXT_MISSION_PLAYER_CANCEL_TRADE",
        "zIcon": "MISSION_PLAYER_CANCEL_TRADE",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "SubjectTarget": "SUBJECT_PLAYER_TRADING",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_CANCEL_TRADE_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_TRIBE_ALLIANCE",
        "Name": "TEXT_MISSION_TRIBE_ALLIANCE",
        "NameTarget": "TEXT_MISSION_TRIBE_ALLIANCE_TARGET",
        "NameCharacter": "TEXT_MISSION_TRIBE_ALLIANCE_CHARACTER",
        "zIcon": "MISSION_TRIBE_ALLIANCE",
        "iMissionTurns": "2",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bNoPopup": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "SubjectCharacterEnabled": "SUBJECT_LEADER_DIPLOMAT",
        "SubjectTarget": "SUBJECT_TRIBE_CAN_ALLIANCE",
        "SubjectTargetEnabled": "SUBJECT_TRIBE_PEACE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_TRIBE_ALLIANCE_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "400"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_TRIBE_PEACE",
        "Name": "TEXT_MISSION_TRIBE_PEACE",
        "NameTarget": "TEXT_MISSION_TRIBE_PEACE_TARGET",
        "NameCharacter": "TEXT_MISSION_TRIBE_PEACE_CHARACTER",
        "zIcon": "MISSION_TRIBE_PEACE",
        "iXP": "20",
        "iMissionTurns": "2",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectTarget": "SUBJECT_TRIBE_TRUCE",
        "SubjectTargetEnabled": "SUBJECT_TRIBE_MIN_PLEASED",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_TRIBE_PEACE_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_TRIBE_TRUCE",
        "Name": "TEXT_MISSION_TRIBE_TRUCE",
        "NameTarget": "TEXT_MISSION_TRIBE_TRUCE_TARGET",
        "NameCharacter": "TEXT_MISSION_TRIBE_TRUCE_CHARACTER",
        "zIcon": "MISSION_TRIBE_TRUCE",
        "iXP": "20",
        "iMissionTurns": "2",
        "bBlockDiplomacy": "1",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectTarget": "SUBJECT_TRIBE_WAR",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_TRIBE_TRUCE_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_TRIBE_DECLARE_WAR",
        "Name": "TEXT_MISSION_TRIBE_DECLARE_WAR",
        "zIcon": "MISSION_TRIBE_DECLARE_WAR",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectTarget": "SUBJECT_TRIBE_TRUCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_TRIBE_DECLARE_WAR_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_TRIBE_BREAK_PEACE",
        "Name": "TEXT_MISSION_TRIBE_BREAK_PEACE",
        "zIcon": "MISSION_TRIBE_BREAK_PEACE",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "SubjectTarget": "SUBJECT_TRIBE_PEACE",
        "SubjectTargetEnabled": "SUBJECT_TRIBE_NO_ALLIANCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_TRIBE_BREAK_PEACE_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_TRIBE_END_ALLIANCE",
        "Name": "TEXT_MISSION_TRIBE_END_ALLIANCE",
        "zIcon": "MISSION_TRIBE_END_ALLIANCE",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "SubjectTarget": "SUBJECT_TRIBE_ALLIANCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_TRIBE_END_ALLIANCE_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_ADOPT_RELIGION",
        "Name": "TEXT_MISSION_ADOPT_RELIGION",
        "zIcon": "MISSION_ADOPT_RELIGION",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectPlayerEnabled": "SUBJECT_PLAYER_NO_ADOPTED_RELIGION",
        "SubjectTarget": "SUBJECT_RELIGION_STATE_NO",
        "SubjectTargetEnabled": "SUBJECT_RELIGION_UNLOCKED",
        "SubjectRelationEnabled": "SUBJECTRELATION_RELIGION_PLAYER",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_ADOPT_RELIGION_EVENT",
            "iValue": "1"
          }
        }
      },
      {
        "zType": "MISSION_LEAVE_RELIGION",
        "Name": "TEXT_MISSION_LEAVE_RELIGION",
        "zIcon": "MISSION_LEAVE_RELIGION",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "SubjectTarget": "SUBJECT_RELIGION_STATE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_LEAVE_RELIGION",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "MISSION_SEND_COURTIER",
        "Name": "TEXT_MISSION_SEND_COURTIER",
        "NameTarget": "TEXT_MISSION_SEND_COURTIER_TARGET",
        "NameCharacter": "TEXT_MISSION_SEND_COURTIER",
        "zIcon": "MISSION_SEND_COURTIER",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_COURTIER",
        "SubjectTarget": "SUBJECT_PLAYER_TEAM_HUMAN_OR_AI",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_SEND_COURTIER",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_PLAYER_MARRIAGE",
        "Name": "TEXT_MISSION_PLAYER_MARRIAGE",
        "NameTarget": "TEXT_MISSION_PLAYER_MARRIAGE",
        "NameCharacter": "TEXT_MISSION_PLAYER_MARRIAGE",
        "zIcon": "PLAYER_MARRIAGE",
        "iMissionTurns": "1",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_CAN_MARRY",
        "SubjectCharacterEnabled": "SUBJECT_LEADER_OR_DESCENDANT",
        "SubjectTarget": "SUBJECT_PLAYER_PEACE_OR_TRUCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_MARRIAGE_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_TRIBE_MARRIAGE",
        "Name": "TEXT_MISSION_TRIBE_MARRIAGE",
        "NameTarget": "TEXT_MISSION_TRIBE_MARRIAGE",
        "NameCharacter": "TEXT_MISSION_TRIBE_MARRIAGE",
        "zIcon": "TRIBE_MARRIAGE",
        "iMissionTurns": "1",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_CAN_MARRY",
        "SubjectCharacterEnabled": "SUBJECT_LEADER_OR_DESCENDANT",
        "SubjectTarget": "SUBJECT_TRIBE_PEACE_OR_TRUCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_TRIBE_MARRIAGE_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_FAMILY_MARRIAGE",
        "Name": "TEXT_MISSION_FAMILY_MARRIAGE",
        "NameTarget": "TEXT_MISSION_FAMILY_MARRIAGE",
        "NameCharacter": "TEXT_MISSION_FAMILY_MARRIAGE",
        "zIcon": "FAMILY_MARRIAGE",
        "iMissionTurns": "1",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_CAN_MARRY",
        "SubjectCharacterEnabled": "SUBJECT_LEADER_OR_DESCENDANT",
        "SubjectTarget": "SUBJECT_FAMILY_US",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_FAMILY_MARRIAGE_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_MARRY_COURTIER",
        "Name": "TEXT_MISSION_MARRY_COURTIER",
        "NameTarget": "TEXT_MISSION_MARRY_COURTIER_TARGET",
        "NameCharacter": "TEXT_MISSION_MARRY_COURTIER_CHARACTER",
        "zIcon": "FAMILY_MARRIAGE",
        "iMissionTurns": "1",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bCharacterNoEvents": "1",
        "bTargetNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_CAN_MARRY",
        "SubjectCharacterEnabled": "SUBJECT_LEADER_OR_DESCENDANT",
        "SubjectTarget": "SUBJECT_COURTIER_US",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_MARRY_COURTIER",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_RALLY_TROOPS",
        "Name": "TEXT_MISSION_RALLY_TROOPS",
        "zIcon": "MISSION_RALLY_TROOPS",
        "iXP": "20",
        "iMissionTurns": "2",
        "bVisibleCharacter": "1",
        "bVisibleAlways": "1",
        "bCharacterNoEvents": "1",
        "bEncyclopedia": "1",
        "TechPrereq": "TECH_MILITARY_DRILL",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "SubjectCharacterEnabled": "SUBJECT_ADULT",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_RALLY_TROOPS",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_RALLY_TROOPS_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_HOLD_COURT",
        "Name": "TEXT_MISSION_HOLD_COURT",
        "zIcon": "MISSION_HOLD_COURT",
        "iXP": "20",
        "iMissionTurns": "2",
        "bVisibleCharacter": "1",
        "bVisibleAlways": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_LEADER_JUDGE",
        "SubjectCharacterEnabled": "SUBJECT_ADULT",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_HOLD_COURT",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_HOLD_COURT_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_ABDICATE",
        "Name": "TEXT_MISSION_ABDICATE",
        "zIcon": "MISSION_ABDICATE2",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "bEncyclopedia": "1",
        "SubjectPlayerEnabled": "SUBJECT_PLAYER_HAS_HEIRS",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_ABDICATE",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_INFLUENCE",
        "Name": "TEXT_MISSION_INFLUENCE",
        "NameCharacter": "TEXT_MISSION_INFLUENCE_CHARACTER",
        "zIcon": "MISSION_INFLUENCE",
        "iXP": "20",
        "iMissionTurns": "1",
        "iMissionTurnsScaled": "1",
        "bVisibleTarget": "1",
        "bTargetNoEvents": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "SubjectCharacterEnabled": "SUBJECT_TEENAGER_OR_ADULT",
        "SubjectTarget": "SUBJECT_CHARACTER_US_OR_THEM",
        "SubjectTargetStart": "SUBJECT_CHARACTER_NOT_ME",
        "SubjectTargetEnabled": "SUBJECT_TEENAGER_OR_ADULT",
        "SubjectTargetDisabled": "SUBJECT_INFLUENCED_BY_LEADER",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_INFLUENCE",
              "iValue": "2"
            },
            {
              "zIndex": "MISSIONRESULT_INFLUENCE_WEAKEN",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_INFLUENCE_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "200"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_CONVERT_SELF",
        "Name": "TEXT_MISSION_CONVERT_SELF",
        "NameTarget": "TEXT_MISSION_CONVERT_SELF_TARGET",
        "zIcon": "SPREAD_RELIGION_TRIBE",
        "bVisibleCharacter": "1",
        "bVisibleTarget": {
          
        },
        "bNoPopup": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "SubjectCharacterEnabled": "SUBJECT_ADULT",
        "SubjectCharacterDisabled": "SUBJECT_RELIGION_HEAD",
        "SubjectTarget": "SUBJECT_RELIGION_PLAYER",
        "SubjectRelationStart": "SUBJECTRELATION_RELIGION_DIFF",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_CONVERT_SELF",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_CONVERT_SELF_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_CONVERT_STATE",
        "Name": "TEXT_MISSION_CONVERT_STATE",
        "zIcon": "SPREAD_RELIGION_TRIBE",
        "iXP": "20",
        "iMissionTurns": "2",
        "bVisibleTarget": "1",
        "bTargetNoEvents": "1",
        "bEncyclopedia": "1",
        "TechPrereq": "TECH_METAPHYSICS",
        "SubjectPlayerEnabled": "SUBJECT_PLAYER_STATE_RELIGION",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "SubjectCharacterEnabled": "SUBJECT_CHARACTER_OF_STATE_RELIGION",
        "SubjectTarget": "SUBJECT_CHARACTER_US",
        "SubjectTargetStart": "SUBJECT_CHARACTER_RELIGION_DIFF",
        "SubjectTargetEnabled": "SUBJECT_ADULT",
        "SubjectTargetDisabled": "SUBJECT_RELIGION_HEAD",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_CONVERT_STATE",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_CONVERT_STATE_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_CONVERT_RELIGION",
        "Name": "TEXT_MISSION_CONVERT_RELIGION",
        "NameCharacter": "TEXT_MISSION_CONVERT_RELIGION_CHARACTER",
        "zIcon": "SPREAD_RELIGION_TRIBE",
        "iXP": "20",
        "iMissionTurns": "1",
        "iMissionTurnsScaled": "1",
        "bVisibleTarget": "1",
        "bCharacterNoEvents": "1",
        "bTargetNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_RELIGION_HEAD_US",
        "SubjectCharacterEnabled": "SUBJECT_CHARACTER_MIN_PLEASED",
        "SubjectTarget": "SUBJECT_CHARACTER_US",
        "SubjectTargetStart": "SUBJECT_CHARACTER_NOT_ME",
        "SubjectTargetEnabled": "SUBJECT_ADULT",
        "SubjectTargetDisabled": "SUBJECT_RELIGION_HEAD",
        "SubjectRelationStart": "SUBJECTRELATION_RELIGION_DIFF",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_CONVERT_RELIGION",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_CONVERT_RELIGION_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_INTERCESSION_RELIGION",
        "Name": "TEXT_MISSION_INTERCESSION_RELIGION",
        "NameCharacter": "TEXT_MISSION_INTERCESSION_CHARACTER",
        "zIcon": "MISSION_INTERCESSION",
        "iXP": "20",
        "iMissionTurns": "1",
        "iMissionTurnsScaled": "1",
        "bVisibleTarget": "1",
        "bCharacterNoEvents": "1",
        "bTargetNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_RELIGION_HEAD_US",
        "SubjectCharacterEnabled": "SUBJECT_CHARACTER_MIN_PLEASED",
        "SubjectTarget": "SUBJECT_CHARACTER_US_OR_THEM",
        "SubjectTargetStart": "SUBJECT_CHARACTER_NOT_ME",
        "SubjectTargetEnabled": "SUBJECT_TEENAGER_OR_ADULT",
        "SubjectTargetDisabled": "SUBJECT_INTERCEDED_FOR_LEADER",
        "SubjectRelationStart": "SUBJECTRELATION_RELIGION_SAME",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_INTERCESSION",
              "iValue": "2"
            },
            {
              "zIndex": "MISSIONRESULT_INTERCESSION_WEAKEN",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_INTERCESSION_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_INTERCESSION_FAMILY",
        "Name": "TEXT_MISSION_INTERCESSION_FAMILY",
        "NameCharacter": "TEXT_MISSION_INTERCESSION_CHARACTER",
        "zIcon": "MISSION_INTERCESSION",
        "iXP": "20",
        "iMissionTurns": "1",
        "iMissionTurnsScaled": "1",
        "bVisibleTarget": "1",
        "bCharacterNoEvents": "1",
        "bTargetNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_FAMILY_HEAD_US",
        "SubjectCharacterEnabled": "SUBJECT_CHARACTER_MIN_PLEASED",
        "SubjectTarget": "SUBJECT_CHARACTER_FAMILY_US",
        "SubjectTargetStart": "SUBJECT_CHARACTER_NOT_ME",
        "SubjectTargetEnabled": "SUBJECT_TEENAGER_OR_ADULT",
        "SubjectTargetDisabled": "SUBJECT_INTERCEDED_FOR_LEADER",
        "SubjectRelationStart": "SUBJECTRELATION_FAMILY_SAME",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_INTERCESSION",
              "iValue": "2"
            },
            {
              "zIndex": "MISSIONRESULT_INTERCESSION_WEAKEN",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_INTERCESSION_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_ADOPT",
        "Name": "TEXT_MISSION_ADOPT",
        "zIcon": "MISSION_ADOPT",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "bTargetNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_LEADER_SCHEMER",
        "SubjectTarget": "SUBJECT_NOT_ADULT_US",
        "SubjectRelationStart": "SUBJECTRELATION_CAN_ADOPT",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_ADOPT",
              "iValue": "4"
            },
            {
              "zIndex": "MISSIONRESULT_ADOPT_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_LEGITIMIZE",
        "Name": "TEXT_MISSION_LEGITIMIZE",
        "zIcon": "MISSION_LEGITIMIZE",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_BASTARD",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_LEGITIMIZE",
              "iValue": "4"
            },
            {
              "zIndex": "MISSIONRESULT_LEGITIMIZE_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "MISSION_CHOSEN_HEIR",
        "Name": "TEXT_MISSION_CHOSEN_HEIR",
        "zIcon": "MISSION_MAKE_HEIR",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_ROYAL_NON_LEADER_OR_HEIR_OR_BASTARD",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_CHOSEN_HEIR",
              "iValue": "4"
            },
            {
              "zIndex": "MISSIONRESULT_CHOSEN_HEIR_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_INFILTRATE",
        "Name": "TEXT_MISSION_INFILTRATE",
        "NameTarget": "TEXT_MISSION_INFILTRATE_TARGET",
        "NameCharacter": "TEXT_MISSION_INFILTRATE_CHARACTER",
        "zIcon": "MISSION_INFILTRATE",
        "iXP": "20",
        "iMissionTurns": "3",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_SPYMASTER",
        "SubjectTarget": "SUBJECT_PLAYER_NOT_TEAM_HUMAN_OR_AI",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_INFILTRATE_REVEAL",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_INFILTRATE_REVEAL_EXPOSED",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_INFILTRATE_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "MISSION_SLANDER",
        "Name": "TEXT_MISSION_SLANDER",
        "NameTarget": "TEXT_MISSION_SLANDER_TARGET",
        "NameCharacter": "TEXT_MISSION_SLANDER_CHARACTER",
        "zIcon": "MISSION_SLANDER",
        "iXP": "20",
        "iMissionTurns": "3",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_SPYMASTER",
        "SubjectTarget": "SUBJECT_PLAYER_NOT_TEAM",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_SLANDER_SUCCESS",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_SLANDER_SUCCESS_EXPOSED",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_SLANDER_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "MISSION_STEAL_RESEARCH",
        "Name": "TEXT_MISSION_STEAL_RESEARCH",
        "NameTarget": "TEXT_MISSION_STEAL_RESEARCH_TARGET",
        "NameCharacter": "TEXT_MISSION_STEAL_RESEARCH_CHARACTER",
        "zIcon": "MISSION_STEAL_RESEARCH",
        "iXP": "20",
        "iMissionTurns": "3",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "TechPrereq": "TECH_CARTOGRAPHY",
        "SubjectCharacter": "SUBJECT_SPYMASTER",
        "SubjectTarget": "SUBJECT_PLAYER_NOT_TEAM_HUMAN_OR_AI",
        "SubjectTargetEnabled": "SUBJECT_PLAYER_MIN_COMPETENT",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_STEAL_RESEARCH_SUCCESS",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_STEAL_RESEARCH_SUCCESS_EXPOSED",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_STEAL_RESEARCH_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "MISSION_ASSASSINATE",
        "Name": "TEXT_MISSION_ASSASSINATE",
        "NameCharacter": "TEXT_MISSION_ASSASSINATE_CHARACTER",
        "zIcon": "MISSION_ASSASSINATE",
        "iXP": "20",
        "iMissionTurns": "2",
        "bVisibleTarget": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_SPYMASTER",
        "SubjectTarget": "SUBJECT_CHARACTER_US_OR_THEM",
        "SubjectTargetStart": "SUBJECT_CHARACTER_NOT_ME",
        "SubjectTargetEnabled": "SUBJECT_NON_LEADER",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_ASSASSINATE_KILL",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_ASSASSINATE_KILL_EXPOSED",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_ASSASSINATE_FAIL_EXPOSED",
              "iValue": "2"
            },
            {
              "zIndex": "MISSIONRESULT_ASSASSINATE_EVENT",
              "iValue": "2"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "MISSION_TREACHERY",
        "Name": "TEXT_MISSION_TREACHERY",
        "NameTarget": "TEXT_MISSION_TREACHERY_TARGET",
        "zIcon": "MISSION_TREACHERY",
        "iXP": "20",
        "iMissionTurns": "3",
        "bVisibleCharacter": "1",
        "bVisibleAlways": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_AGENT",
        "SubjectTarget": "SUBJECT_CITY_THEM",
        "SubjectRelationStart": "SUBJECTRELATION_CITY_SAME",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_TREACHERY_SUCCESS",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_TREACHERY_FAILURE",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_TREACHERY_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "MISSION_INSURRECTION",
        "Name": "TEXT_MISSION_INSURRECTION",
        "NameTarget": "TEXT_MISSION_INSURRECTION_TARGET",
        "zIcon": "MISSION_INSURRECTION",
        "iXP": "20",
        "iMissionTurns": "3",
        "bVisibleCharacter": "1",
        "bVisibleAlways": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "TechPrereq": "TECH_JURISPRUDENCE",
        "SubjectCharacter": "SUBJECT_AGENT",
        "SubjectTarget": "SUBJECT_CITY_THEM",
        "SubjectRelationStart": "SUBJECTRELATION_CITY_SAME",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_INSURRECTION_REVOLT",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_INSURRECTION_DISCONTENT",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_INSURRECTION_FAILURE",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_INSURRECTION_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "MISSION_DEMAND_TRIBUTE",
        "Name": "TEXT_MISSION_DEMAND_TRIBUTE",
        "NameTarget": "TEXT_MISSION_DEMAND_TRIBUTE_TARGET",
        "NameCharacter": "TEXT_MISSION_DEMAND_TRIBUTE_CHARACTER",
        "zIcon": "MISSION_DEMAND_TRIBUTE",
        "iXP": "20",
        "iMissionTurns": "3",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectTarget": "SUBJECT_PLAYER_TRUCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_DEMAND_TRIBUTE_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "MISSION_TRADE_MISSION",
        "Name": "TEXT_MISSION_TRADE_MISSION",
        "NameTarget": "TEXT_MISSION_TRADE_MISSION_TARGET",
        "NameCharacter": "TEXT_MISSION_TRADE_MISSION_CHARACTER",
        "zIcon": "MISSION_TRADE_MISSION",
        "iXP": "20",
        "iMissionTurns": "3",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bNoPopup": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectTarget": "SUBJECT_PLAYER_PEACE_OR_TRUCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_TRADE_MISSION_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "MISSION_HIGH_SYNOD",
        "Name": "TEXT_MISSION_HIGH_SYNOD",
        "NameTarget": "TEXT_MISSION_HIGH_SYNOD_TARGET",
        "NameCharacter": "TEXT_MISSION_HIGH_SYNOD_CHARACTER",
        "zIcon": "MISSION_HIGH_SYNOD",
        "iXP": "20",
        "iMissionTurns": "3",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "TechPrereq": "TECH_METAPHYSICS",
        "SubjectCharacter": "SUBJECT_AMBASSADOR",
        "SubjectTarget": "SUBJECT_RELIGION_WORLD",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_HIGH_SYNOD_SUCCESS",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_HIGH_SYNOD_FAILURE",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_HIGH_SYNOD_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "MISSION_FAMILY_GIFT",
        "Name": "TEXT_MISSION_FAMILY_GIFT",
        "NameCharacter": "TEXT_MISSION_FAMILY_GIFT_CHARACTER",
        "zIcon": "MISSION_FAMILY_GIFT",
        "iXP": "20",
        "iMissionTurns": "3",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_CHANCELLOR",
        "SubjectTarget": "SUBJECT_FAMILY_US",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_FAMILY_GIFT_SUCCESS",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_FAMILY_GIFT_SUCCESS_WEAKEN",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_FAMILY_GIFT_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "400"
          }
        }
      },
      {
        "zType": "MISSION_PACIFY_CITY",
        "Name": "TEXT_MISSION_PACIFY_CITY",
        "NameTarget": "TEXT_MISSION_PACIFY_CITY_TARGET",
        "NameCharacter": "TEXT_MISSION_PACIFY_CITY_CHARACTER",
        "zIcon": "MISSION_PACIFY_CITY",
        "iXP": "20",
        "iMissionTurns": "3",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bVisibleAlways": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "TechPrereq": "TECH_COINAGE",
        "SubjectCharacter": "SUBJECT_CHANCELLOR",
        "SubjectTarget": "SUBJECT_CITY_US",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_PACIFY_CITY_SUCCESS",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_PACIFY_CITY_SUCCESS_WEAKEN",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_PACIFY_CITY_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_CIVICS",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "MISSION_IMPRISON",
        "Name": "TEXT_MISSION_IMPRISON",
        "NameCharacter": "TEXT_MISSION_IMPRISON_CHARACTER",
        "zIcon": "MISSION_IMPRISON",
        "iXP": "20",
        "iMissionTurns": "1",
        "bVisibleTarget": "1",
        "bCharacterNoEvents": "1",
        "bTargetNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_CHANCELLOR",
        "SubjectTarget": "SUBJECT_NON_LEADER_US",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_IMPRISON_JUST",
              "iValue": "10"
            },
            {
              "zIndex": "MISSIONRESULT_IMPRISON_UNJUST",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_IMPRISON_ESCAPE",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_IMPRISON_EVENT",
              "iValue": "2"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_TRAINING",
            "iValue": "100"
          }
        }
      },
      {
        "zType": "MISSION_RELEASE",
        "Name": "TEXT_MISSION_RELEASE",
        "zIcon": "MISSION_RELEASE",
        "bVisibleCharacter": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_IMPRISONED",
        "SubjectCharacterEnabled": "SUBJECT_CHARACTER_NO_IMPRISONED_RECENTLY",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_RELEASE_GRATEFUL",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_RELEASE_BITTER",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_RELEASE_UNJUST",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        }
      },
      {
        "zType": "MISSION_CAPTURE",
        "Name": "TEXT_MISSION_CAPTURE",
        "zIcon": "MISSION_CAPTURE",
        "iMissionTurns": "2",
        "bVisibleCharacter": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_FUGITIVE",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_CAPTURE_SURRENDER",
              "iValue": "3"
            },
            {
              "zIndex": "MISSIONRESULT_CAPTURE_KILLED",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_CAPTURE_FLEE",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_PAY_RANSOM",
        "Name": "TEXT_MISSION_PAY_RANSOM",
        "zIcon": "MISSION_PAY_RANSOM",
        "iMissionTurns": "1",
        "bVisibleCharacter": "1",
        "bCharacterNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_CAPTURED",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PAY_RANSOM",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_MONEY",
              "iValue": "400"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_DIVORCE",
        "Name": "TEXT_MISSION_DIVORCE",
        "NameTarget": "TEXT_MISSION_DIVORCE_TARGET",
        "zIcon": "MISSION_DIVORCE",
        "iMissionTurns": "1",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_LEADER_US",
        "SubjectTarget": "SUBJECT_SPOUSE_OF_LEADER_US",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_DIVORCE",
              "iValue": "4"
            },
            {
              "zIndex": "MISSIONRESULT_DIVORCE_EVENT",
              "iValue": "1"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "100"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_TUTOR",
        "Name": "TEXT_MISSION_TUTOR_COURTIER",
        "NameTarget": "TEXT_MISSION_TUTOR_TARGET",
        "NameCharacter": "TEXT_MISSION_TUTOR_CHARACTER",
        "zIcon": "MISSION_TUTOR",
        "iMissionTurns": "2",
        "iMissionTurnsScaled": "1",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bCharacterNoEvents": "1",
        "bTargetNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_TUTOR_US",
        "SubjectCharacterEnabled": "SUBJECT_NO_JOB",
        "SubjectTarget": "SUBJECT_CHARACTER_US",
        "SubjectTargetStart": "SUBJECT_TUTOR_STUDENT",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_TUTOR_WISDOM",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_TUTOR_CHARISMA",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_TUTOR_COURAGE",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_TUTOR_DISCIPLINE",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_TUTOR_EVENT",
              "iValue": "2"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_TUTOR_SCHOLAR",
        "Name": "TEXT_MISSION_TUTOR_LEADER",
        "NameTarget": "TEXT_MISSION_TUTOR_TARGET",
        "NameCharacter": "TEXT_MISSION_TUTOR_CHARACTER",
        "zIcon": "MISSION_TUTOR",
        "iMissionTurns": "2",
        "iMissionTurnsScaled": "1",
        "bVisibleCharacter": "1",
        "bVisibleTarget": "1",
        "bCharacterNoEvents": "1",
        "bTargetNoEvents": "1",
        "bCharacterUs": "1",
        "bEncyclopedia": "1",
        "SubjectCharacter": "SUBJECT_LEADER_SCHOLAR",
        "SubjectCharacterEnabled": "SUBJECT_NO_JOB",
        "SubjectTarget": "SUBJECT_CHARACTER_US",
        "SubjectTargetStart": "SUBJECT_TUTOR_STUDENT",
        "aiResultDie": {
          "Pair": [
            {
              "zIndex": "MISSIONRESULT_TUTOR_WISDOM",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_TUTOR_CHARISMA",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_TUTOR_COURAGE",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_TUTOR_DISCIPLINE",
              "iValue": "1"
            },
            {
              "zIndex": "MISSIONRESULT_TUTOR_EVENT",
              "iValue": "2"
            }
          ]
        },
        "aiYieldCost": {
          "Pair": {
            "zIndex": "YIELD_ORDERS",
            "iValue": "2"
          }
        },
        "aiYieldCostOpinion": {
          "Pair": {
            "zIndex": "YIELD_MONEY",
            "iValue": "200"
          }
        }
      },
      {
        "zType": "MISSION_TRIBE_PLAYER_WAR",
        "Name": "TEXT_MISSION_TRIBE_PLAYER_WAR",
        "NameTarget": "TEXT_MISSION_TRIBE_PLAYER_WAR_TARGET",
        "zIcon": "MISSION_PLAYER_TRIBE_WAR",
        "iMissionTurns": "2",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_TRIBE_PEACE_OR_TRUCE",
        "SubjectCharacterEnabled": "SUBJECT_TRIBE_MIN_PLEASED",
        "SubjectTarget": "SUBJECT_PLAYER_THEM_HUMAN_OR_AI",
        "SubjectTargetStart": "SUBJECT_PLAYER_DIFF_TEAM",
        "SubjectRelationStart": "SUBJECTRELATION_TRIBE_PEACE_OR_TRUCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_TRIBE_PLAYER_WAR_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_TRAINING",
              "iValue": "200"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_PLAYER_TRIBE_WAR",
        "Name": "TEXT_MISSION_PLAYER_TRIBE_WAR",
        "NameTarget": "TEXT_MISSION_PLAYER_TRIBE_WAR_TARGET",
        "zIcon": "MISSION_PLAYER_TRIBE_WAR",
        "iMissionTurns": "2",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "SubjectCharacter": "SUBJECT_LEADER_PEACE_OR_TRUCE",
        "SubjectCharacterEnabled": "SUBJECT_PLAYER_MIN_PLEASED",
        "SubjectTarget": "SUBJECT_TRIBE_NO_ALLIANCE",
        "SubjectRelationStart": "SUBJECTRELATION_TRIBE_PEACE_OR_TRUCE",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_TRIBE_WAR_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "200"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      },
      {
        "zType": "MISSION_PLAYER_PLAYER_WAR",
        "Name": "TEXT_MISSION_PLAYER_PLAYER_WAR",
        "NameTarget": "TEXT_MISSION_PLAYER_PLAYER_WAR_TARGET",
        "zIcon": "MISSION_PLAYER_BREAK_PEACE",
        "iMissionTurns": "2",
        "bVisibleCharacter": "1",
        "bNoPopup": "1",
        "TechPrereq": "TECH_POLIS",
        "SubjectCharacter": "SUBJECT_LEADER_PEACE_OR_TRUCE",
        "SubjectCharacterEnabled": "SUBJECT_PLAYER_MIN_FRIENDLY",
        "SubjectTarget": "SUBJECT_PLAYER_THEM_HUMAN_OR_AI",
        "SubjectTargetStart": "SUBJECT_PLAYER_DIFF_TEAM",
        "SubjectRelationStart": "SUBJECTRELATION_MISSION_PLAYER_PLAYER_WAR",
        "SubjectRelationEnabled": "SUBJECTRELATION_MIN_CONFLICT_TURNS",
        "aiResultDie": {
          "Pair": {
            "zIndex": "MISSIONRESULT_PLAYER_PLAYER_WAR_EVENT",
            "iValue": "1"
          }
        },
        "aiYieldCost": {
          "Pair": [
            {
              "zIndex": "YIELD_CIVICS",
              "iValue": "200"
            },
            {
              "zIndex": "YIELD_ORDERS",
              "iValue": "2"
            }
          ]
        }
      }
    ]
  }
}
    export default data
    