
    const data: XmlEventClass.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "iLevelProb": {
          "comment": "Every turn, there is this percent chance of an Event of this Class happening (modified by EventLevel)."
        },
        "iPlayerProb": {
          "comment": "Every turn, there is this percent chance of an Event of this Class happening."
        },
        "iCharacterProb": {
          "comment": "Every turn and for each Character, there is this percent chance of an Event of this Class happening."
        },
        "iMinTurns": {
          "comment": "Events of this Class can't happen until this turn"
        },
        "iMinRepeat": {
          "comment": "Events of this Class can't happen more frequently than once per this number of turns"
        }
      },
      {
        "zType": "EVENTCLASS_LEADER_SPOUSE",
        "iLevelProb": "10",
        "iMinTurns": "10",
        "iMinRepeat": "20"
      },
      {
        "zType": "EVENTCLASS_COURTIER",
        "iLevelProb": "10",
        "iMinTurns": "20",
        "iMinRepeat": "30"
      },
      {
        "zType": "EVENTCLASS_MOURNING",
        "iPlayerProb": "30",
        "iMinRepeat": "2"
      },
      {
        "zType": "EVENTCLASS_AWAY_FROM_COURT",
        "iPlayerProb": "30",
        "iMinRepeat": "2"
      },
      {
        "zType": "EVENTCLASS_SUDDEN_DEATH",
        "iMinTurns": "20",
        "iMinRepeat": "20"
      },
      {
        "zType": "EVENTCLASS_STUDY",
        "iCharacterProb": "60",
        "iMinRepeat": "2"
      },
      {
        "zType": "EVENTCLASS_RELATIONSHIP_PLAYER",
        "iLevelProb": "5",
        "iMinTurns": "20",
        "iMinRepeat": "5"
      },
      {
        "zType": "EVENTCLASS_LAW",
        "iPlayerProb": "100",
        "iMinRepeat": "1"
      },
      {
        "zType": "EVENTCLASS_MISSION",
        "iPlayerProb": "50",
        "iMinRepeat": "5"
      },
      {
        "zType": "EVENTCLASS_LAW_OPINION",
        "iMinTurns": "40",
        "iMinRepeat": "20"
      },
      {
        "zType": "EVENTCLASS_NO_HEIRS",
        "iPlayerProb": "50",
        "iMinTurns": "30",
        "iMinRepeat": "5"
      },
      {
        "zType": "EVENTCLASS_REIGN",
        "iLevelProb": "20",
        "iMinTurns": "20",
        "iMinRepeat": "20"
      },
      {
        "zType": "EVENTCLASS_MERCENARY",
        "iMinTurns": "20",
        "iMinRepeat": "20"
      },
      {
        "zType": "EVENTCLASS_PETS_AND_ODDITIES",
        "iPlayerProb": "40",
        "iMinRepeat": "2"
      },
      {
        "zType": "EVENTCLASS_HARVESTING",
        "iMinTurns": "10",
        "iMinRepeat": "2"
      },
      {
        "zType": "EVENTCLASS_YOUNG_RULER",
        "iCharacterProb": "50",
        "iMinRepeat": "3"
      },
      {
        "zType": "EVENTCLASS_IRON_SHARPENS",
        "iMinRepeat": "20"
      },
      {
        "zType": "EVENTCLASS_TRAIT_INHERITANCE",
        "iMinRepeat": "2"
      },
      {
        "zType": "EVENTCLASS_GENERAL_DUEL",
        "iMinRepeat": "5"
      }
    ]
  }
}
    export default data
    