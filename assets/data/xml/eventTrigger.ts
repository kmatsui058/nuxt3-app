
    const data: XmlEventTrigger.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Data": {
          "comment": "The Event requires this Data type"
        },
        "SubjectClass": {
          "comment": "The Event can test for this Subject via TriggerSubject"
        },
        "ExtraClass": {
          "comment": "The Event can test for this Subject via TriggerExtra"
        },
        "iMinTurns": {
          "comment": "The minimum turns for this trigger to fire any Event"
        },
        "iProb": {
          "comment": "The probability of an Event if this Trigger occurs"
        },
        "iSortOrder": {
          "comment": "The order in which Events are sorted (higher means earlier)"
        },
        "bLevel": {
          "comment": "The probability of an Event is modifier by EventLevel"
        },
        "bModal": {
          "comment": "The event will popup immediately"
        }
      },
      {
        "zType": "EVENTTRIGGER_START_GAME",
        "iSortOrder": "10",
        "bModal": "1"
      },
      {
        "comment": "Data = VictoryType",
        "zType": "EVENTTRIGGER_WIN_GAME",
        "Data": "VICTORY",
        "iSortOrder": "10",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_WIN_GAME_ALLIANCE",
        "iSortOrder": "10",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_LOSE_GAME",
        "iSortOrder": "10",
        "bModal": "1"
      },
      {
        "zType": "EVENTTRIGGER_NEW_TURN"
      },
      {
        "comment": "Subject = Character",
        "zType": "EVENTTRIGGER_NEW_TURN_CHARACTER",
        "SubjectClass": "SUBJECTCLASS_CHARACTER"
      },
      {
        "comment": "Data = TechType",
        "zType": "EVENTTRIGGER_TECHNOLOGY",
        "Data": "TECH",
        "bLevel": "1"
      },
      {
        "comment": "Subject = City, Extra = Religion",
        "zType": "EVENTTRIGGER_RELIGION_FOUNDED_US",
        "SubjectClass": "SUBJECTCLASS_CITY",
        "ExtraClass": "SUBJECTCLASS_RELIGION",
        "iSortOrder": "5"
      },
      {
        "comment": "Subject = City, Extra = Religion",
        "zType": "EVENTTRIGGER_RELIGION_FOUNDED_THEM",
        "SubjectClass": "SUBJECTCLASS_CITY",
        "ExtraClass": "SUBJECTCLASS_RELIGION",
        "iSortOrder": "5"
      },
      {
        "comment": "Subject = City, Extra = Religion",
        "zType": "EVENTTRIGGER_RELIGION_SPREAD",
        "SubjectClass": "SUBJECTCLASS_CITY",
        "ExtraClass": "SUBJECTCLASS_RELIGION",
        "iProb": "10",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = City, Extra = Religion",
        "zType": "EVENTTRIGGER_RELIGION_REMOVE",
        "SubjectClass": "SUBJECTCLASS_CITY",
        "ExtraClass": "SUBJECTCLASS_RELIGION",
        "iProb": "10",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = City, Extra = Theology",
        "zType": "EVENTTRIGGER_THEOLOGY_ESTABLISHED",
        "SubjectClass": "SUBJECTCLASS_RELIGION",
        "ExtraClass": "SUBJECTCLASS_THEOLOGY",
        "iProb": "10",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Tribe, Extra = Tile",
        "zType": "EVENTTRIGGER_TRIBE_CONTACT",
        "SubjectClass": "SUBJECTCLASS_TRIBE",
        "ExtraClass": "SUBJECTCLASS_TILE",
        "bModal": "1"
      },
      {
        "comment": "Subject = Tribe",
        "zType": "EVENTTRIGGER_TRIBE_PEACE_OFFER",
        "SubjectClass": "SUBJECTCLASS_TRIBE"
      },
      {
        "comment": "Subject = Tribe",
        "zType": "EVENTTRIGGER_TRIBE_TRUCE_OFFER",
        "SubjectClass": "SUBJECTCLASS_TRIBE"
      },
      {
        "comment": "Subject = Tribe",
        "zType": "EVENTTRIGGER_TRIBE_WAR_OFFER",
        "SubjectClass": "SUBJECTCLASS_TRIBE",
        "iSortOrder": "2"
      },
      {
        "comment": "Subject = Tribe, Extra = Tile",
        "zType": "EVENTTRIGGER_TRIBE_RAID",
        "SubjectClass": "SUBJECTCLASS_TRIBE",
        "ExtraClass": "SUBJECTCLASS_TILE"
      },
      {
        "comment": "Subject = Player, Extra = Tile",
        "zType": "EVENTTRIGGER_PLAYER_CONTACT",
        "SubjectClass": "SUBJECTCLASS_PLAYER",
        "ExtraClass": "SUBJECTCLASS_TILE",
        "bModal": "1"
      },
      {
        "comment": "Subject = Player",
        "zType": "EVENTTRIGGER_PLAYER_PEACE_OFFER",
        "SubjectClass": "SUBJECTCLASS_PLAYER"
      },
      {
        "comment": "Subject = Player",
        "zType": "EVENTTRIGGER_PLAYER_TRUCE_OFFER",
        "SubjectClass": "SUBJECTCLASS_PLAYER"
      },
      {
        "comment": "Subject = Player",
        "zType": "EVENTTRIGGER_PLAYER_WAR_OFFER",
        "SubjectClass": "SUBJECTCLASS_PLAYER",
        "iSortOrder": "2"
      },
      {
        "comment": "Subject = Player",
        "zType": "EVENTTRIGGER_PLAYER_WAR_DECLARE",
        "SubjectClass": "SUBJECTCLASS_PLAYER",
        "iSortOrder": "3"
      },
      {
        "comment": "Subject = Player",
        "zType": "EVENTTRIGGER_PLAYER_DIPLOMACY_OFFER",
        "SubjectClass": "SUBJECTCLASS_PLAYER"
      },
      {
        "comment": "Subject = Player, Extra = City",
        "zType": "EVENTTRIGGER_PLAYER_POACHED_CITY",
        "SubjectClass": "SUBJECTCLASS_PLAYER",
        "ExtraClass": "SUBJECTCLASS_CITY"
      },
      {
        "comment": "Subject = Player, Extra = Tile",
        "zType": "EVENTTRIGGER_PLAYER_STOLE_CITY_SITE",
        "SubjectClass": "SUBJECTCLASS_PLAYER",
        "ExtraClass": "SUBJECTCLASS_TILE"
      },
      {
        "comment": "Subject = City",
        "zType": "EVENTTRIGGER_CITY_FOUNDED",
        "SubjectClass": "SUBJECTCLASS_CITY",
        "bModal": "1"
      },
      {
        "comment": "Subject = Player, Extra = City",
        "zType": "EVENTTRIGGER_CITY_LOST",
        "SubjectClass": "SUBJECTCLASS_PLAYER",
        "ExtraClass": "SUBJECTCLASS_CITY",
        "iProb": "10"
      },
      {
        "comment": "Subject = Player, Extra = City",
        "zType": "EVENTTRIGGER_CITY_BREACHED",
        "SubjectClass": "SUBJECTCLASS_PLAYER",
        "ExtraClass": "SUBJECTCLASS_CITY",
        "iProb": "10",
        "bModal": "1"
      },
      {
        "comment": "Subject = Player, Extra = Tile",
        "zType": "EVENTTRIGGER_CITY_RAZED",
        "SubjectClass": "SUBJECTCLASS_TILE",
        "ExtraClass": "SUBJECTCLASS_PLAYER",
        "bModal": "1"
      },
      {
        "comment": "Subject = City",
        "zType": "EVENTTRIGGER_CITY_CULTURE",
        "SubjectClass": "SUBJECTCLASS_CITY"
      },
      {
        "comment": "Subject = City",
        "zType": "EVENTTRIGGER_CITY_DISCONTENT",
        "SubjectClass": "SUBJECTCLASS_CITY"
      },
      {
        "comment": "Subject = City",
        "zType": "EVENTTRIGGER_CITY_DISTANT_RAID",
        "SubjectClass": "SUBJECTCLASS_CITY",
        "iProb": "25"
      },
      {
        "comment": "Subject = City, Data = ProjectType",
        "zType": "EVENTTRIGGER_PRODUCTION_PROJECT",
        "Data": "PROJECT",
        "SubjectClass": "SUBJECTCLASS_CITY",
        "bLevel": "1"
      },
      {
        "comment": "Subject = City, Data = SpecialistType",
        "zType": "EVENTTRIGGER_PRODUCTION_SPECIALIST",
        "Data": "SPECIALIST",
        "SubjectClass": "SUBJECTCLASS_CITY",
        "bLevel": "1"
      },
      {
        "comment": "Subject = City, Extra = Unit, Data = UnitType",
        "zType": "EVENTTRIGGER_PRODUCTION_UNIT",
        "Data": "UNIT",
        "SubjectClass": "SUBJECTCLASS_CITY",
        "ExtraClass": "SUBJECTCLASS_UNIT",
        "bLevel": "1"
      },
      {
        "comment": "Subject = City, Extra = Tile, Data = ImprovementType",
        "zType": "EVENTTRIGGER_IMPROVEMENT_FINISHED",
        "Data": "IMPROVEMENT",
        "SubjectClass": "SUBJECTCLASS_CITY",
        "ExtraClass": "SUBJECTCLASS_TILE",
        "bLevel": "1"
      },
      {
        "comment": "Subject = Tribe, Extra = Tile",
        "zType": "EVENTTRIGGER_IMPROVEMENT_PILLAGED_TRIBE",
        "SubjectClass": "SUBJECTCLASS_TRIBE",
        "ExtraClass": "SUBJECTCLASS_TILE",
        "iProb": "10",
        "bLevel": "1"
      },
      {
        "comment": "Subject = Player, Extra = Tile",
        "zType": "EVENTTRIGGER_IMPROVEMENT_PILLAGED_ENEMY",
        "SubjectClass": "SUBJECTCLASS_PLAYER",
        "ExtraClass": "SUBJECTCLASS_TILE",
        "iProb": "10",
        "bLevel": "1"
      },
      {
        "comment": "Subject = Player, Extra = Tile",
        "zType": "EVENTTRIGGER_IMPROVEMENT_PILLAGED_US",
        "SubjectClass": "SUBJECTCLASS_PLAYER",
        "ExtraClass": "SUBJECTCLASS_TILE",
        "iProb": "10",
        "bLevel": "1"
      },
      {
        "zType": "EVENTTRIGGER_CHOOSE_AMBITION",
        "iProb": "10"
      },
      {
        "comment": "Data = GoalType",
        "zType": "EVENTTRIGGER_AMBITION_FINISHED",
        "Data": "GOAL",
        "bModal": "1"
      },
      {
        "comment": "Data = GoalType",
        "zType": "EVENTTRIGGER_QUEST_FINISHED",
        "Data": "GOAL",
        "bModal": "1"
      },
      {
        "comment": "Data = GoalType",
        "zType": "EVENTTRIGGER_QUEST_FAILED",
        "Data": "GOAL",
        "bModal": "1"
      },
      {
        "comment": "Extra = Character, Data = MissionType",
        "zType": "EVENTTRIGGER_MISSION_FINISHED",
        "Data": "MISSION",
        "ExtraClass": "SUBJECTCLASS_CHARACTER",
        "iSortOrder": "4",
        "bModal": "1"
      },
      {
        "comment": "Subject = Character",
        "zType": "EVENTTRIGGER_MARRIAGE_OFFER",
        "SubjectClass": "SUBJECTCLASS_CHARACTER"
      },
      {
        "comment": "Subject = Character, Extra = Character",
        "zType": "EVENTTRIGGER_MARRIAGE",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_CHARACTER",
        "iProb": "25",
        "bLevel": "1"
      },
      {
        "comment": "Subject = Character",
        "zType": "EVENTTRIGGER_BIRTH",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "iProb": "25",
        "bLevel": "1"
      },
      {
        "comment": "Subject = Character",
        "zType": "EVENTTRIGGER_DEATH",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "iSortOrder": "7"
      },
      {
        "comment": "Subject = Character",
        "zType": "EVENTTRIGGER_ADULTHOOD",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "iProb": "25",
        "bLevel": "1"
      },
      {
        "comment": "Subject = Character",
        "zType": "EVENTTRIGGER_COURTIER",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "bModal": "1"
      },
      {
        "comment": "Subject = Character, Extra = Character",
        "zType": "EVENTTRIGGER_ADOPTED",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_CHARACTER",
        "iProb": "25",
        "bLevel": "1"
      },
      {
        "comment": "Subject = Character, Extra = Character",
        "zType": "EVENTTRIGGER_DIVORCE",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_CHARACTER",
        "iProb": "25",
        "bLevel": "1"
      },
      {
        "comment": "Subject = Character, Data = CognomenType",
        "zType": "EVENTTRIGGER_COGNOMEN",
        "Data": "COGNOMEN",
        "SubjectClass": "SUBJECTCLASS_CHARACTER"
      },
      {
        "comment": "Subject = Character, Extra = Character",
        "zType": "EVENTTRIGGER_SUCCESSION_US",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_CHARACTER",
        "iSortOrder": "6"
      },
      {
        "comment": "Subject = Character, Extra = Character",
        "zType": "EVENTTRIGGER_SUCCESSION_THEM",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_CHARACTER"
      },
      {
        "comment": "Subject = Character, Extra = Character",
        "zType": "EVENTTRIGGER_SUCCESSION_TRIBE",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_CHARACTER"
      },
      {
        "comment": "Subject = Unit, Extra = Unit",
        "zType": "EVENTTRIGGER_UNIT_COMBAT",
        "SubjectClass": "SUBJECTCLASS_UNIT",
        "ExtraClass": "SUBJECTCLASS_UNIT",
        "iProb": "1",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Unit, Extra = Unit",
        "zType": "EVENTTRIGGER_UNIT_COMBAT_WATER",
        "SubjectClass": "SUBJECTCLASS_UNIT",
        "ExtraClass": "SUBJECTCLASS_UNIT",
        "iProb": "1",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = City, Extra = Unit",
        "zType": "EVENTTRIGGER_ATTACKED_CITY",
        "SubjectClass": "SUBJECTCLASS_CITY",
        "ExtraClass": "SUBJECTCLASS_UNIT",
        "iProb": "5",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = City, Extra = Player",
        "zType": "EVENTTRIGGER_CITY_ATTACKED",
        "SubjectClass": "SUBJECTCLASS_CITY",
        "ExtraClass": "SUBJECTCLASS_PLAYER",
        "iProb": "5",
        "bLevel": "1"
      },
      {
        "comment": "Subject = Unit, Extra = Player",
        "zType": "EVENTTRIGGER_UNIT_KILL",
        "SubjectClass": "SUBJECTCLASS_UNIT",
        "ExtraClass": "SUBJECTCLASS_PLAYER",
        "iProb": "1",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Unit, Extra = Player",
        "zType": "EVENTTRIGGER_UNIT_KILL_WATER",
        "SubjectClass": "SUBJECTCLASS_UNIT",
        "ExtraClass": "SUBJECTCLASS_PLAYER",
        "iProb": "1",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Unit",
        "zType": "EVENTTRIGGER_UNIT_ROUT",
        "SubjectClass": "SUBJECTCLASS_UNIT",
        "iProb": "1",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Unit",
        "zType": "EVENTTRIGGER_UNIT_CAPTURED",
        "SubjectClass": "SUBJECTCLASS_UNIT",
        "iProb": "1",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Character, Extra = Player",
        "zType": "EVENTTRIGGER_GENERAL_KILL",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_PLAYER",
        "iProb": "5",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Character, Extra = Player",
        "zType": "EVENTTRIGGER_GENERAL_KILL_WATER",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_PLAYER",
        "iProb": "5",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Character, Extra = Player",
        "zType": "EVENTTRIGGER_GENERAL_ATTACK",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_PLAYER",
        "iProb": "5",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Character, Extra = Player",
        "zType": "EVENTTRIGGER_GENERAL_ATTACK_WATER",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_PLAYER",
        "iProb": "5",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Character, Extra = Player",
        "zType": "EVENTTRIGGER_GENERAL_DUEL",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_CHARACTER",
        "iProb": "25",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Character, Extra = Player",
        "zType": "EVENTTRIGGER_GENERAL_DUEL_WATER",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_CHARACTER",
        "iProb": "25",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Character, Extra = Player",
        "zType": "EVENTTRIGGER_GENERAL_CRITICAL",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_PLAYER",
        "iProb": "10",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Character, Extra = Player",
        "zType": "EVENTTRIGGER_GENERAL_CRITICAL_WATER",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_PLAYER",
        "iProb": "10",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Character, Extra = Player",
        "zType": "EVENTTRIGGER_GENERAL_INJURY",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_PLAYER",
        "iProb": "10",
        "bModal": "1"
      },
      {
        "comment": "Subject = Character, Extra = Player",
        "zType": "EVENTTRIGGER_GENERAL_INJURY_WATER",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_PLAYER",
        "iProb": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Character, Extra = Player",
        "zType": "EVENTTRIGGER_GENERAL_UNIT_KILLED",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_PLAYER",
        "iProb": "10",
        "bLevel": "1"
      },
      {
        "comment": "Subject = Character, Extra = Player",
        "zType": "EVENTTRIGGER_GENERAL_UNIT_KILLED_WATER",
        "SubjectClass": "SUBJECTCLASS_CHARACTER",
        "ExtraClass": "SUBJECTCLASS_PLAYER",
        "iProb": "10",
        "bLevel": "1"
      },
      {
        "comment": "Subject = Unit, Data = PromotionType",
        "zType": "EVENTTRIGGER_UNIT_PROMOTION",
        "Data": "PROMOTION",
        "SubjectClass": "SUBJECTCLASS_UNIT",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Unit, Extra = Tile",
        "zType": "EVENTTRIGGER_SET_TILE",
        "SubjectClass": "SUBJECTCLASS_UNIT",
        "ExtraClass": "SUBJECTCLASS_TILE",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Tile, Extra = Unit",
        "zType": "EVENTTRIGGER_RESOURCE_HARVESTED",
        "SubjectClass": "SUBJECTCLASS_TILE",
        "ExtraClass": "SUBJECTCLASS_UNIT",
        "iProb": "10",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Tile, Extra = Unit",
        "zType": "EVENTTRIGGER_RUINS_EXPLORED",
        "SubjectClass": "SUBJECTCLASS_TILE",
        "ExtraClass": "SUBJECTCLASS_UNIT",
        "iSortOrder": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Tile",
        "zType": "EVENTTRIGGER_LANDMARK_DISCOVERED",
        "SubjectClass": "SUBJECTCLASS_TILE",
        "iProb": "10",
        "bLevel": "1",
        "bModal": "1"
      },
      {
        "comment": "Subject = Tile, Extra = Unit",
        "zType": "EVENTTRIGGER_TRIBE_CLEARED",
        "SubjectClass": "SUBJECTCLASS_TILE",
        "ExtraClass": "SUBJECTCLASS_UNIT",
        "bModal": "1"
      },
      {
        "comment": "Subject = Tile, Extra = Unit",
        "zType": "EVENTTRIGGER_TRIBE_ELIMINATED",
        "SubjectClass": "SUBJECTCLASS_TILE",
        "ExtraClass": "SUBJECTCLASS_UNIT",
        "bModal": "1"
      },
      {
        "comment": "Subject = Player, Extra = Player",
        "zType": "EVENTTRIGGER_PLAYER_ELIMINATED",
        "SubjectClass": "SUBJECTCLASS_PLAYER",
        "ExtraClass": "SUBJECTCLASS_PLAYER",
        "bModal": "1"
      },
      {
        "comment": "Subject = Unit, Data = UnitType",
        "zType": "EVENTTRIGGER_UNIT_SELECTED",
        "Data": "UNIT",
        "SubjectClass": "SUBJECTCLASS_UNIT",
        "bModal": "1"
      },
      {
        "comment": "Subject = Unit",
        "zType": "EVENTTRIGGER_UNIT_ATTACK_COOLDOWN",
        "SubjectClass": "SUBJECTCLASS_UNIT",
        "bModal": "1"
      },
      {
        "comment": "Subject = Unit",
        "zType": "EVENTTRIGGER_UNIT_MOVE_COOLDOWN",
        "SubjectClass": "SUBJECTCLASS_UNIT",
        "bModal": "1"
      },
      {
        "comment": "Subject = Unit",
        "zType": "EVENTTRIGGER_UNIT_IS_FATIGUED",
        "SubjectClass": "SUBJECTCLASS_UNIT",
        "bModal": "1"
      },
      {
        "comment": "Subject = Unit",
        "zType": "EVENTTRIGGER_UNIT_NO_ORDERS",
        "SubjectClass": "SUBJECTCLASS_UNIT",
        "bModal": "1"
      }
    ]
  }
}
    export default data
    