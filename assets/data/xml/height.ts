
    const data: XmlHeight.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "zIconName": {
          
        },
        "iMovementCost": {
          
        },
        "iRangeChange": {
          
        },
        "iRevealChange": {
          
        },
        "iBuildChange": {
          
        },
        "iBorderValue": {
          
        },
        "iLandValueAdjacent": {
          
        },
        "bNoVegetation": {
          
        },
        "bImpassable": {
          
        },
        "bCitySite": {
          
        },
        "bRangedAttackBlock": {
          
        },
        "Color": {
          
        },
        "aiRoadCost": {
          
        },
        "aiUrbanCost": {
          
        },
        "aiDefendMeleeEffectUnit": {
          
        }
      },
      {
        "zType": "HEIGHT_OCEAN",
        "Name": "TEXT_HEIGHT_OCEAN",
        "zIconName": "OceanEditorIcon",
        "bNoVegetation": "1"
      },
      {
        "zType": "HEIGHT_COAST",
        "Name": "TEXT_HEIGHT_COAST",
        "zIconName": "CoastEditorIcon",
        "iLandValueAdjacent": "10",
        "bNoVegetation": "1"
      },
      {
        "zType": "HEIGHT_LAKE",
        "Name": "TEXT_HEIGHT_LAKE",
        "zIconName": "LakeEditorIcon",
        "iLandValueAdjacent": "20",
        "bNoVegetation": "1"
      },
      {
        "zType": "HEIGHT_FLAT",
        "Name": "TEXT_HEIGHT_FLAT",
        "zIconName": "FlatEditorIcon",
        "iRevealChange": "1",
        "aiRoadCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "10"
          }
        },
        "aiUrbanCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "10"
          }
        },
        "aiDefendMeleeEffectUnit": {
          "Pair": {
            "zIndex": "EFFECTUNIT_MOUNTED",
            "iValue": "-25"
          }
        }
      },
      {
        "zType": "HEIGHT_HILL",
        "Name": "TEXT_HEIGHT_HILL",
        "zIconName": "HillsEditorIcon",
        "iMovementCost": "9",
        "iRangeChange": "1",
        "iRevealChange": "2",
        "iBuildChange": "1",
        "iBorderValue": "200",
        "bCitySite": "1",
        "Color": "COLOR_HEIGHT_HILL",
        "aiRoadCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "20"
          }
        },
        "aiUrbanCost": {
          "Pair": {
            "zIndex": "YIELD_STONE",
            "iValue": "20"
          }
        }
      },
      {
        "zType": "HEIGHT_MOUNTAIN",
        "Name": "TEXT_HEIGHT_MOUNTAIN",
        "zIconName": "MountainEditorIcon",
        "iRangeChange": "2",
        "iRevealChange": "3",
        "iBorderValue": "-1",
        "iLandValueAdjacent": "40",
        "bNoVegetation": "1",
        "bImpassable": "1",
        "bRangedAttackBlock": "1"
      },
      {
        "zType": "HEIGHT_VOLCANO",
        "Name": "TEXT_HEIGHT_VOLCANO",
        "zIconName": "VolcanoEditorIcon",
        "iRangeChange": "2",
        "iRevealChange": "3",
        "iBorderValue": "-1",
        "iLandValueAdjacent": "40",
        "bNoVegetation": "1",
        "bImpassable": "1",
        "bRangedAttackBlock": "1"
      }
    ]
  }
}
    export default data
    