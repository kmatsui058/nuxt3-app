
    const data: XmlTerrain.RootObject = {
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
        "iBorderValue": {
          
        },
        "bWater": {
          
        },
        "bUrban": {
          
        },
        "bNoVegetation": {
          
        },
        "bCitySite": {
          
        },
        "bStart": {
          
        },
        "bRoadValid": {
          
        },
        "DefaultHeight": {
          
        },
        "aiDefendMeleeEffectUnit": {
          
        },
        "aeHeightAsset": {
          
        },
        "AssetVariation": {
          
        }
      },
      {
        "zType": "TERRAIN_WATER",
        "Name": "TEXT_TERRAIN_WATER",
        "zIconName": "TERRAIN_WATER",
        "iMovementCost": "9",
        "iBorderValue": "-1",
        "bWater": "1",
        "bNoVegetation": "1",
        "DefaultHeight": "HEIGHT_COAST",
        "aeHeightAsset": {
          "Pair": [
            {
              "zIndex": "HEIGHT_COAST",
              "zValue": "ASSET_VARIATION_TILE_COAST"
            },
            {
              "zIndex": "HEIGHT_OCEAN",
              "zValue": "ASSET_VARIATION_TILE_OCEAN"
            },
            {
              "zIndex": "HEIGHT_LAKE",
              "zValue": "ASSET_VARIATION_TILE_LAKE"
            }
          ]
        }
      },
      {
        "zType": "TERRAIN_URBAN",
        "Name": "TEXT_TERRAIN_URBAN",
        "zIconName": "TERRAIN_URBAN",
        "iMovementCost": "9",
        "bUrban": "1",
        "bNoVegetation": "1",
        "bCitySite": "1",
        "bRoadValid": "1",
        "DefaultHeight": "HEIGHT_FLAT",
        "aeHeightAsset": {
          "Pair": [
            {
              "zIndex": "HEIGHT_FLAT",
              "zValue": "ASSET_VARIATION_TILE_URBAN_FLAT"
            },
            {
              "zIndex": "HEIGHT_HILL",
              "zValue": "ASSET_VARIATION_TILE_URBAN_FLAT"
            }
          ]
        }
      },
      {
        "zType": "TERRAIN_LUSH",
        "Name": "TEXT_TERRAIN_LUSH",
        "zIconName": "TERRAIN_LUSH",
        "iMovementCost": "9",
        "iBorderValue": "500",
        "bCitySite": "1",
        "bStart": "1",
        "bRoadValid": "1",
        "DefaultHeight": "HEIGHT_FLAT",
        "aeHeightAsset": {
          "Pair": [
            {
              "zIndex": "HEIGHT_FLAT",
              "zValue": "ASSET_VARIATION_TILE_LUSH_FLAT"
            },
            {
              "zIndex": "HEIGHT_HILL",
              "zValue": "ASSET_VARIATION_TILE_LUSH_FLAT"
            },
            {
              "zIndex": "HEIGHT_MOUNTAIN",
              "zValue": "ASSET_VARIATION_TILE_LUSH_FLAT"
            },
            {
              "zIndex": "HEIGHT_VOLCANO",
              "zValue": "ASSET_VARIATION_TILE_LUSH_FLAT"
            }
          ]
        },
        "AssetVariation": "ASSET_VARIATION_TILE_HILL_LUSH"
      },
      {
        "zType": "TERRAIN_TEMPERATE",
        "Name": "TEXT_TERRAIN_TEMPERATE",
        "zIconName": "TERRAIN_TEMPERATE",
        "iMovementCost": "9",
        "iBorderValue": "400",
        "bCitySite": "1",
        "bStart": "1",
        "bRoadValid": "1",
        "DefaultHeight": "HEIGHT_FLAT",
        "aeHeightAsset": {
          "Pair": [
            {
              "zIndex": "HEIGHT_FLAT",
              "zValue": "ASSET_VARIATION_TILE_TEMPERATE_FLAT"
            },
            {
              "zIndex": "HEIGHT_HILL",
              "zValue": "ASSET_VARIATION_TILE_TEMPERATE_FLAT"
            },
            {
              "zIndex": "HEIGHT_MOUNTAIN",
              "zValue": "ASSET_VARIATION_TILE_TEMPERATE_FLAT"
            },
            {
              "zIndex": "HEIGHT_VOLCANO",
              "zValue": "ASSET_VARIATION_TILE_TEMPERATE_FLAT"
            }
          ]
        },
        "AssetVariation": "ASSET_VARIATION_TILE_HILL_TEMPERATE"
      },
      {
        "zType": "TERRAIN_ARID",
        "Name": "TEXT_TERRAIN_ARID",
        "zIconName": "TERRAIN_ARID",
        "iMovementCost": "9",
        "iBorderValue": "300",
        "bCitySite": "1",
        "bRoadValid": "1",
        "DefaultHeight": "HEIGHT_FLAT",
        "aeHeightAsset": {
          "Pair": [
            {
              "zIndex": "HEIGHT_FLAT",
              "zValue": "ASSET_VARIATION_TILE_ARID_FLAT"
            },
            {
              "zIndex": "HEIGHT_HILL",
              "zValue": "ASSET_VARIATION_TILE_ARID_FLAT"
            },
            {
              "zIndex": "HEIGHT_MOUNTAIN",
              "zValue": "ASSET_VARIATION_TILE_ARID_FLAT"
            },
            {
              "zIndex": "HEIGHT_VOLCANO",
              "zValue": "ASSET_VARIATION_TILE_ARID_FLAT"
            }
          ]
        },
        "AssetVariation": "ASSET_VARIATION_TILE_HILL_ARID"
      },
      {
        "zType": "TERRAIN_SAND",
        "Name": "TEXT_TERRAIN_SAND",
        "zIconName": "TERRAIN_SAND",
        "iMovementCost": "18",
        "bNoVegetation": "1",
        "DefaultHeight": "HEIGHT_FLAT",
        "aeHeightAsset": {
          "Pair": [
            {
              "zIndex": "HEIGHT_FLAT",
              "zValue": "ASSET_VARIATION_TILE_SAND_FLAT"
            },
            {
              "zIndex": "HEIGHT_HILL",
              "zValue": "ASSET_VARIATION_TILE_SAND_FLAT"
            },
            {
              "zIndex": "HEIGHT_MOUNTAIN",
              "zValue": "ASSET_VARIATION_TILE_SAND_FLAT"
            },
            {
              "zIndex": "HEIGHT_VOLCANO",
              "zValue": "ASSET_VARIATION_TILE_SAND_FLAT"
            }
          ]
        },
        "AssetVariation": "ASSET_VARIATION_TILE_HILL_DESERT"
      },
      {
        "zType": "TERRAIN_TUNDRA",
        "Name": "TEXT_TERRAIN_TUNDRA",
        "zIconName": "TERRAIN_TUNDRA",
        "iMovementCost": "9",
        "iBorderValue": "100",
        "bRoadValid": "1",
        "DefaultHeight": "HEIGHT_FLAT",
        "aeHeightAsset": {
          "Pair": [
            {
              "zIndex": "HEIGHT_FLAT",
              "zValue": "ASSET_VARIATION_TILE_TUNDRA_FLAT"
            },
            {
              "zIndex": "HEIGHT_HILL",
              "zValue": "ASSET_VARIATION_TILE_TUNDRA_FLAT"
            },
            {
              "zIndex": "HEIGHT_MOUNTAIN",
              "zValue": "ASSET_VARIATION_TILE_TUNDRA_FLAT"
            },
            {
              "zIndex": "HEIGHT_VOLCANO",
              "zValue": "ASSET_VARIATION_TILE_TUNDRA_FLAT"
            }
          ]
        },
        "AssetVariation": "ASSET_VARIATION_TILE_HILL_TUNDRA"
      }
    ]
  }
}
    export default data
    