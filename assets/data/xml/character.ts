
    const data: XmlCharacter.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Gender": {
          
        },
        "FirstName": {
          
        },
        "PreferredPortrait": {
          
        },
        "Cognomen": {
          
        },
        "PlayerNation": {
          
        },
        "Nation": {
          
        },
        "Tribe": {
          
        },
        "Family": {
          
        },
        "Father": {
          
        },
        "Mother": {
          
        },
        "Spouse": {
          
        },
        "CharacterSelectPortrait": {
          
        },
        "iBirth": {
          
        },
        "iAge": {
          
        },
        "iRating": {
          
        },
        "bInfertile": {
          
        },
        "bNoNickname": {
          
        },
        "bSuitorTemp": {
          
        },
        "aeTraits": {
          
        },
        "aeRelationships": {
          
        }
      },
      {
        "zType": "CHARACTER_SUITOR_TEMP",
        "bSuitorTemp": "1"
      },
      {
        "zType": "CHARACTER_SUITOR_TEMP_BAD",
        "iRating": "-2",
        "bSuitorTemp": "1"
      },
      {
        "zType": "CHARACTER_SUITOR_PREGNANT",
        "Gender": "GENDER_FEMALE",
        "bSuitorTemp": "1",
        "aeTraits": {
          "zValue": "TRAIT_PREGNANT"
        }
      },
      {
        "zType": "CHARACTER_ASHURBANIPAL",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_ASHURBANIPAL",
        "PreferredPortrait": "CHARACTER_PORTRAIT_ASHURBANIPAL",
        "PlayerNation": "NATION_ASSYRIA",
        "Father": "CHARACTER_ESARHADDON",
        "CharacterSelectPortrait": "CHARACTER_SELECT_ASHURBANIPAL",
        "iAge": "22",
        "aeTraits": {
          "zValue": [
            "TRAIT_ZEALOT_ARCHETYPE",
            "TRAIT_EDUCATED"
          ]
        }
      },
      {
        "zType": "CHARACTER_ESARHADDON",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_ESARHADDON",
        "PreferredPortrait": "CHARACTER_PORTRAIT_ASSYRIA_LEADER_MALE_11",
        "PlayerNation": "NATION_ASSYRIA",
        "iBirth": "-6",
        "iAge": "44",
        "aeTraits": {
          "zValue": [
            "TRAIT_JUDGE_ARCHETYPE",
            "TRAIT_TOUGH"
          ]
        }
      },
      {
        "zType": "CHARACTER_SHAMASH_SHUM",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_SHAMASH_SHUM",
        "PreferredPortrait": "CHARACTER_PORTRAIT_ASSYRIA_LEADER_MALE_02",
        "PlayerNation": "NATION_ASSYRIA",
        "Father": "CHARACTER_ESARHADDON",
        "iAge": "27",
        "aeTraits": {
          "zValue": [
            "TRAIT_HERO_ARCHETYPE",
            "TRAIT_PIOUS"
          ]
        },
        "aeRelationships": {
          "Pair": {
            "zIndex": "CHARACTER_ASHURBANIPAL",
            "zValue": "RELATIONSHIP_VENGEFUL_AGAINST"
          }
        }
      },
      {
        "zType": "CHARACTER_NEBUCHADNEZZAR",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_NEBUCHADNEZZAR",
        "PreferredPortrait": "CHARACTER_PORTRAIT_NEBUCHANEZZAR",
        "PlayerNation": "NATION_BABYLONIA",
        "Father": "CHARACTER_NABOPOLASSAR",
        "Spouse": "CHARACTER_AMYTIS",
        "CharacterSelectPortrait": "CHARACTER_SELECT_NEBUCHADNEZZAR",
        "iAge": "27",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHOLAR_ARCHETYPE",
            "TRAIT_PROSPEROUS"
          ]
        }
      },
      {
        "zType": "CHARACTER_NABOPOLASSAR",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_NABOPOLASSAR",
        "PreferredPortrait": "CHARACTER_PORTRAIT_BABYLONIA_LEADER_MALE_13",
        "PlayerNation": "NATION_BABYLONIA",
        "iBirth": "-18",
        "iAge": "53",
        "aeTraits": {
          "zValue": "TRAIT_HERO_ARCHETYPE"
        }
      },
      {
        "zType": "CHARACTER_AMYTIS",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_AMYTIS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_BABYLONIA_LEADER_FEMALE_01",
        "PlayerNation": "NATION_BABYLONIA",
        "Spouse": "CHARACTER_NEBUCHADNEZZAR",
        "iAge": "24",
        "aeTraits": {
          "zValue": "TRAIT_DIPLOMAT_ARCHETYPE"
        }
      },
      {
        "zType": "CHARACTER_KASHSHAYA",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_KASHSHAYA",
        "PreferredPortrait": "CHARACTER_PORTRAIT_BABYLONIA_LEADER_FEMALE_11",
        "PlayerNation": "NATION_BABYLONIA",
        "Father": "CHARACTER_NEBUCHADNEZZAR",
        "Mother": "CHARACTER_AMYTIS",
        "iAge": "9",
        "aeTraits": {
          "zValue": "TRAIT_SCHEMER_ARCHETYPE"
        },
        "aeRelationships": {
          "Pair": {
            "zIndex": "CHARACTER_MARDUK_NADIN_AHI",
            "zValue": "RELATIONSHIP_VENGEFUL_AGAINST"
          }
        }
      },
      {
        "zType": "CHARACTER_MARDUK_NADIN_AHI",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_MARDUK_NADIN_AHI",
        "PreferredPortrait": "CHARACTER_PORTRAIT_BABYLONIA_LEADER_MALE_04",
        "PlayerNation": "NATION_BABYLONIA",
        "Father": "CHARACTER_NEBUCHADNEZZAR",
        "Mother": "CHARACTER_AMYTIS",
        "iAge": "1",
        "aeTraits": {
          "zValue": "TRAIT_ILL"
        }
      },
      {
        "zType": "CHARACTER_DIDO",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_DIDO",
        "PreferredPortrait": "CHARACTER_PORTRAIT_DIDO",
        "PlayerNation": "NATION_CARTHAGE",
        "Father": "CHARACTER_MATTAN",
        "Spouse": "CHARACTER_ACERBAS",
        "CharacterSelectPortrait": "CHARACTER_SELECT_DIDO",
        "iAge": "23",
        "aeTraits": {
          "zValue": [
            "TRAIT_DIPLOMAT_ARCHETYPE",
            "TRAIT_CUNNING"
          ]
        },
        "aeRelationships": {
          "Pair": {
            "zIndex": "CHARACTER_PYGMALION",
            "zValue": "RELATIONSHIP_VENGEFUL_AGAINST"
          }
        }
      },
      {
        "zType": "CHARACTER_MATTAN",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_MATTAN",
        "PreferredPortrait": "CHARACTER_PORTRAIT_CARTHAGE_LEADER_MALE_03",
        "PlayerNation": "NATION_CARTHAGE",
        "iBirth": "-18",
        "iAge": "32",
        "aeTraits": {
          "zValue": [
            "TRAIT_DIPLOMAT_ARCHETYPE",
            "TRAIT_KING_OF_TYRE"
          ]
        }
      },
      {
        "zType": "CHARACTER_PYGMALION",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_PYGMALION",
        "PreferredPortrait": "CHARACTER_PORTRAIT_CARTHAGE_LEADER_MALE_01",
        "PlayerNation": "NATION_CARTHAGE",
        "Father": "CHARACTER_MATTAN",
        "iAge": "27",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHEMER_ARCHETYPE",
            "TRAIT_KING_OF_TYRE"
          ]
        },
        "aeRelationships": {
          "Pair": {
            "zIndex": "CHARACTER_DIDO",
            "zValue": "RELATIONSHIP_SUSPICIOUS_OF"
          }
        }
      },
      {
        "zType": "CHARACTER_ACERBAS",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_ACERBAS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_CARTHAGE_LEADER_MALE_02",
        "PlayerNation": "NATION_CARTHAGE",
        "Spouse": "CHARACTER_DIDO",
        "iBirth": "-11",
        "iAge": "39",
        "aeTraits": {
          "zValue": [
            "TRAIT_BUILDER_ARCHETYPE",
            "TRAIT_GREEDY",
            "TRAIT_CHEIF_PRIEST_OF_MELQUART"
          ]
        },
        "aeRelationships": {
          "Pair": {
            "zIndex": "CHARACTER_PYGMALION",
            "zValue": "RELATIONSHIP_ASSASSINATED_BY"
          }
        }
      },
      {
        "zType": "CHARACTER_HATSHEPSUT",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_HATSHEPSUT",
        "PreferredPortrait": "CHARACTER_PORTRAIT_HATSHEPSUT",
        "PlayerNation": "NATION_EGYPT",
        "Spouse": "CHARACTER_THUTMOSE_II",
        "CharacterSelectPortrait": "CHARACTER_SELECT_HATSHEPSUT",
        "iAge": "35",
        "bInfertile": "1",
        "aeTraits": {
          "zValue": [
            "TRAIT_BUILDER_ARCHETYPE",
            "TRAIT_INSPIRING"
          ]
        }
      },
      {
        "zType": "CHARACTER_THUTMOSE_II",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_THUTMOSE",
        "PreferredPortrait": "CHARACTER_PORTRAIT_EGYPT_LEADER_MALE_01",
        "PlayerNation": "NATION_EGYPT",
        "iBirth": "-8",
        "iAge": "31",
        "aeTraits": {
          "zValue": [
            "TRAIT_BUILDER_ARCHETYPE",
            "TRAIT_SLOTHFUL"
          ]
        }
      },
      {
        "zType": "CHARACTER_ISIS",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_ISIS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_EGYPT_LEADER_FEMALE_05",
        "PlayerNation": "NATION_EGYPT",
        "Spouse": "CHARACTER_THUTMOSE_II",
        "iAge": "32",
        "aeTraits": {
          "zValue": [
            "TRAIT_ZEALOT_ARCHETYPE",
            "TRAIT_EXTRAVAGANT"
          ]
        },
        "aeRelationships": {
          "Pair": {
            "zIndex": "CHARACTER_HATSHEPSUT",
            "zValue": "RELATIONSHIP_SUSPICIOUS_OF"
          }
        }
      },
      {
        "zType": "CHARACTER_NEFERURE",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_NEFERURE",
        "PreferredPortrait": "CHARACTER_PORTRAIT_EGYPT_LEADER_FEMALE_01",
        "PlayerNation": "NATION_EGYPT",
        "Father": "CHARACTER_THUTMOSE_II",
        "Mother": "CHARACTER_HATSHEPSUT",
        "iAge": "12",
        "aeRelationships": {
          "Pair": {
            "zIndex": "CHARACTER_HATSHEPSUT",
            "zValue": "RELATIONSHIP_ENDEARED_TO"
          }
        }
      },
      {
        "zType": "CHARACTER_THUTMOSE_III",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_THUTMOSE",
        "PreferredPortrait": "CHARACTER_PORTRAIT_EGYPT_LEADER_MALE_05",
        "PlayerNation": "NATION_EGYPT",
        "Father": "CHARACTER_THUTMOSE_II",
        "Mother": "CHARACTER_ISIS",
        "iAge": "9",
        "aeRelationships": {
          "Pair": {
            "zIndex": "CHARACTER_HATSHEPSUT",
            "zValue": "RELATIONSHIP_SUSPICIOUS_OF"
          }
        }
      },
      {
        "zType": "CHARACTER_PHILIP",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_PHILIP",
        "PreferredPortrait": "CHARACTER_PORTRAIT_PHILIP",
        "PlayerNation": "NATION_GREECE",
        "Spouse": "CHARACTER_OLYMPIAS",
        "CharacterSelectPortrait": "CHARACTER_SELECT_PHILIP",
        "iAge": "39",
        "aeTraits": {
          "zValue": [
            "TRAIT_COMMANDER_ARCHETYPE",
            "TRAIT_BOLD"
          ]
        }
      },
      {
        "zType": "CHARACTER_OLYMPIAS",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_OLYMPIAS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_GREECE_LEADER_FEMALE_01",
        "PlayerNation": "NATION_GREECE",
        "iAge": "32",
        "aeTraits": {
          "zValue": [
            "TRAIT_DEBAUCHED",
            "TRAIT_SCHEMER_ARCHETYPE"
          ]
        },
        "aeRelationships": {
          "Pair": {
            "zIndex": "CHARACTER_PHILIP",
            "zValue": "RELATIONSHIP_JEALOUS_ABOUT"
          }
        }
      },
      {
        "zType": "CHARACTER_ALEXANDER",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_ALEXANDER",
        "PreferredPortrait": "CHARACTER_PORTRAIT_GREECE_LEADER_MALE_01",
        "PlayerNation": "NATION_GREECE",
        "Father": "CHARACTER_PHILIP",
        "Mother": "CHARACTER_OLYMPIAS",
        "iAge": "13",
        "aeTraits": {
          "zValue": [
            "TRAIT_HERO_ARCHETYPE",
            "TRAIT_BOLD"
          ]
        },
        "aeRelationships": {
          "Pair": {
            "zIndex": "CHARACTER_PHILIP",
            "zValue": "RELATIONSHIP_SUSPICIOUS_OF"
          }
        }
      },
      {
        "zType": "CHARACTER_CYRUS",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_CYRUS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_CYRUS",
        "PlayerNation": "NATION_PERSIA",
        "Mother": "CHARACTER_MANDANA",
        "CharacterSelectPortrait": "CHARACTER_SELECT_CYRUS",
        "iAge": "26",
        "aeTraits": {
          "zValue": [
            "TRAIT_HERO_ARCHETYPE",
            "TRAIT_TOUGH"
          ]
        }
      },
      {
        "zType": "CHARACTER_ASTYAGES",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_ASTYAGES",
        "PreferredPortrait": "CHARACTER_PORTRAIT_PERSIA_LEADER_MALE_20",
        "PlayerNation": "NATION_PERSIA",
        "iAge": "65",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHEMER_ARCHETYPE",
            "TRAIT_BITTER",
            "TRAIT_ABDICATED"
          ]
        },
        "aeRelationships": {
          "Pair": {
            "zIndex": "CHARACTER_CYRUS",
            "zValue": "RELATIONSHIP_SUSPICIOUS_OF"
          }
        }
      },
      {
        "zType": "CHARACTER_MANDANA",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_MANDANA",
        "PreferredPortrait": "CHARACTER_PORTRAIT_PERSIA_LEADER_FEMALE_13",
        "PlayerNation": "NATION_PERSIA",
        "Father": "CHARACTER_ASTYAGES",
        "iBirth": "-5",
        "iAge": "25",
        "aeTraits": {
          "zValue": [
            "TRAIT_BUILDER_ARCHETYPE",
            "TRAIT_EDUCATED"
          ]
        }
      },
      {
        "zType": "CHARACTER_ROMULUS",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_ROMULUS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_ROMULUS",
        "PlayerNation": "NATION_ROME",
        "Mother": "CHARACTER_ILIA",
        "CharacterSelectPortrait": "CHARACTER_SELECT_ROMULUS",
        "iAge": "22",
        "aeTraits": {
          "zValue": [
            "TRAIT_TACTICIAN_ARCHETYPE",
            "TRAIT_RUTHLESS"
          ]
        }
      },
      {
        "zType": "CHARACTER_ILIA",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_ILIA",
        "PreferredPortrait": "CHARACTER_PORTRAIT_ROME_LEADER_FEMALE_01",
        "PlayerNation": "NATION_ROME",
        "iAge": "44",
        "aeTraits": {
          "zValue": [
            "TRAIT_ORATOR_ARCHETYPE",
            "TRAIT_ROMANTIC"
          ]
        }
      },
      {
        "zType": "CHARACTER_REMUS",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_REMUS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_ROMAN_LEADER_MALE_02",
        "PlayerNation": "NATION_ROME",
        "Mother": "CHARACTER_ILIA",
        "iAge": "22",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHEMER_ARCHETYPE",
            "TRAIT_BOLD"
          ]
        },
        "aeRelationships": {
          "Pair": {
            "zIndex": "CHARACTER_ROMULUS",
            "zValue": "RELATIONSHIP_VENGEFUL_AGAINST"
          }
        }
      },
      {
        "zType": "CHARACTER_MATCH_FEMALE_BAD",
        "Gender": "GENDER_FEMALE",
        "iAge": "22",
        "iRating": "-3"
      },
      {
        "zType": "CHARACTER_MATCH_FEMALE_NEUTRAL",
        "Gender": "GENDER_FEMALE",
        "iAge": "22",
        "iRating": "0"
      },
      {
        "zType": "CHARACTER_MATCH_FEMALE_GOOD",
        "Gender": "GENDER_FEMALE",
        "iAge": "22",
        "iRating": "3"
      },
      {
        "zType": "CHARACTER_YOUNG_HOSTAGE",
        "Gender": "GENDER_MALE",
        "iAge": "16",
        "aeTraits": {
          "zValue": [
            "TRAIT_HERO_ARCHETYPE",
            "TRAIT_INSPIRING"
          ]
        }
      },
      {
        "zType": "CHARACTER_WITCH_QUEEN",
        "Gender": "GENDER_FEMALE",
        "iAge": "20",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHEMER_ARCHETYPE",
            "TRAIT_ELOQUENT"
          ]
        }
      },
      {
        "zType": "CHARACTER_TEACHING_THE_ENEMY",
        "Gender": "GENDER_MALE",
        "iAge": "30",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHOLAR_ARCHETYPE",
            "TRAIT_INTELLIGENT"
          ]
        }
      },
      {
        "zType": "CHARACTER_KINGS_RANSOM_MOTHER",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_STATEIRA",
        "PreferredPortrait": "CHARACTER_PORTRAIT_THRACIAN_FEMALE_01",
        "iAge": "30",
        "aeTraits": {
          "zValue": [
            "TRAIT_ZEALOT_ARCHETYPE",
            "TRAIT_FOOLISH",
            "TRAIT_STRICT"
          ]
        }
      },
      {
        "zType": "CHARACTER_KINGS_RANSOM_DAUGHTER",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_BARSINE",
        "PreferredPortrait": "CHARACTER_PORTRAIT_SCYTHIAN_FEMALE_01",
        "Mother": "CHARACTER_KINGS_RANSOM_MOTHER",
        "iAge": "14",
        "aeTraits": {
          "zValue": [
            "TRAIT_TOUGH",
            "TRAIT_TRACKER",
            "TRAIT_RIGHTEOUS"
          ]
        }
      },
      {
        "zType": "CHARACTER_TRIBE_PRINCE",
        "Gender": "GENDER_MALE",
        "iAge": "12",
        "aeTraits": {
          "zValue": "TRAIT_ROBUST"
        }
      },
      {
        "zType": "CHARACTER_TRIBE_SHEPARD",
        "Gender": "GENDER_FEMALE",
        "iAge": "16",
        "aeTraits": {
          "zValue": "TRAIT_CULTIVATOR"
        }
      },
      {
        "zType": "CHARACTER_BARDIYA",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_BARDIYA",
        "PreferredPortrait": "CHARACTER_PORTRAIT_BARDIYA",
        "iAge": "35",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHEMER_ARCHETYPE",
            "TRAIT_INTELLIGENT",
            "TRAIT_CUNNING"
          ]
        }
      },
      {
        "zType": "CHARACTER_ZAMRA",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_ZAMRA",
        "PreferredPortrait": "CHARACTER_PORTRAIT_ZAMRA",
        "iAge": "20",
        "aeTraits": {
          "zValue": [
            "TRAIT_ORATOR_ARCHETYPE",
            "TRAIT_ELOQUENT"
          ]
        }
      },
      {
        "zType": "CHARACTER_MYSTERIOUS_INFANT",
        "Gender": "GENDER_MALE",
        "iAge": "1",
        "aeTraits": {
          "zValue": "TRAIT_BLESSED"
        }
      },
      {
        "zType": "CHARACTER_ATOSSA",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_ATOSSA",
        "PreferredPortrait": "CHARACTER_PORTRAIT_ATOSSA",
        "iAge": "30",
        "aeTraits": {
          "zValue": [
            "TRAIT_DIPLOMAT_ARCHETYPE",
            "TRAIT_EXOTIC",
            "TRAIT_BOLD"
          ]
        }
      },
      {
        "zType": "CHARACTER_FOREST_FIRE_ORPHAN",
        "Gender": "GENDER_FEMALE",
        "iAge": "19",
        "aeTraits": {
          "zValue": [
            "TRAIT_JUDGE_ARCHETYPE",
            "TRAIT_INTELLIGENT",
            "TRAIT_FRUGAL"
          ]
        }
      },
      {
        "zType": "CHARACTER_VERY_CHARMING",
        "Gender": "GENDER_FEMALE",
        "iAge": "18",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHEMER_ARCHETYPE",
            "TRAIT_BOLD"
          ]
        }
      },
      {
        "zType": "CHARACTER_DEAR_COMPANION",
        "Gender": "GENDER_MALE",
        "iAge": "21",
        "aeTraits": {
          "zValue": [
            "TRAIT_HERO_ARCHETYPE",
            "TRAIT_BOLD"
          ]
        }
      },
      {
        "zType": "CHARACTER_CATO",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_CATO",
        "PreferredPortrait": "CHARACTER_PORTRAIT_CATO",
        "iAge": "40",
        "iRating": "3",
        "aeTraits": {
          "zValue": [
            "TRAIT_JUDGE_ARCHETYPE",
            "TRAIT_INTELLIGENT",
            "TRAIT_COMPASSIONATE"
          ]
        }
      },
      {
        "zType": "CHARACTER_HIARBAS",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_HIARBAS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_HIARBAS",
        "iAge": "35",
        "iRating": "1",
        "aeTraits": {
          "zValue": [
            "TRAIT_ZEALOT_ARCHETYPE",
            "TRAIT_CUNNING",
            "TRAIT_INTOLERANT"
          ]
        }
      },
      {
        "zType": "CHARACTER_AUGUSTINE",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_AUGUSTINE",
        "PreferredPortrait": "CHARACTER_PORTRAIT_HIARBAS",
        "iAge": "50",
        "iRating": "1",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHOLAR_ARCHETYPE",
            "TRAIT_PIOUS",
            "TRAIT_INTELLIGENT",
            "TRAIT_ELOQUENT"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_ROME_LIVIUS_ANDRONICUS",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_LIVIUS_ANDRONICUS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_TUTOR_LIVIUS_ANDRONICUS",
        "iAge": "80",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHOLAR_ARCHETYPE",
            "TRAIT_VIGILANT",
            "TRAIT_INSPIRING",
            "TRAIT_ELOQUENT"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_ROME_PLINY_THE_ELDER",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_PLINY_THE_ELDER",
        "PreferredPortrait": "CHARACTER_PORTRAIT_TUTOR_PLINY_THE_ELDER",
        "iAge": "50",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_TACTICIAN_ARCHETYPE",
            "TRAIT_HUMBLE",
            "TRAIT_NATURALIST",
            "TRAIT_INTELLIGENT"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_ROME_CORNELIA",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_TUTOR_CORNELIA",
        "PreferredPortrait": "CHARACTER_PORTRAIT_TUTOR_CORNELIA",
        "iAge": "60",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_ORATOR_ARCHETYPE",
            "TRAIT_COMPASSIONATE",
            "TRAIT_FIERCE",
            "TRAIT_LOYAL"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_GREECE_AGNODICE",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_TUTOR_AGNODICE",
        "PreferredPortrait": "CHARACTER_PORTRAIT_TUTOR_AGNODICE",
        "iAge": "40",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHOLAR_ARCHETYPE",
            "TRAIT_HERBALIST",
            "TRAIT_COMPASSIONATE",
            "TRAIT_BOLD"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_GREECE_ARISTOTLE",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_ARISTOTLE",
        "PreferredPortrait": "CHARACTER_PORTRAIT_TUTOR_ARISTOTLE",
        "iAge": "70",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHOLAR_ARCHETYPE",
            "TRAIT_INTELLIGENT",
            "TRAIT_INSPIRING",
            "TRAIT_ELOQUENT"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_GREECE_PYTHAGORAS",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_PYTHAGORAS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_TUTOR_PYTHAGORAS",
        "iAge": "60",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_ZEALOT_ARCHETYPE",
            "TRAIT_VIGILANT",
            "TRAIT_SUPERSTITIOUS",
            "TRAIT_PROUD"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_ASSYRIA_BARDAISAN",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_BARDAISAN",
        "PreferredPortrait": "CHARACTER_PORTRAIT_TUTOR_BARDAISAN",
        "iAge": "60",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_BUILDER_ARCHETYPE",
            "TRAIT_BLESSED",
            "TRAIT_RANGER",
            "TRAIT_INTELLIGENT"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_SCYTHIAN_ANACHARSIS",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_ANACHARSIS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_TUTOR_ANACHARSIS",
        "iAge": "50",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_DIPLOMAT_ARCHETYPE",
            "TRAIT_HUMBLE",
            "TRAIT_VIGILANT",
            "TRAIT_EXOTIC"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_ASSYRIA_OSTANES",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_OSTANES",
        "PreferredPortrait": "CHARACTER_PORTRAIT_TUTOR_OSTANES",
        "iAge": "80",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_ZEALOT_ARCHETYPE",
            "TRAIT_DIVINE",
            "TRAIT_CUNNING",
            "TRAIT_DELVER"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_CARTHAGE_HANNO",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_HANNO",
        "PreferredPortrait": "CHARACTER_PORTRAIT_TUTOR_HANNO",
        "iAge": "45",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_COMMANDER_ARCHETYPE",
            "TRAIT_ROBUST",
            "TRAIT_PATHFINDER",
            "TRAIT_INTELLIGENT"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_CARTHAGE_CLITOMACHUS",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_CLITOMACHUS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_TUTOR_CLITOMACHUS",
        "iAge": "60",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHEMER_ARCHETYPE",
            "TRAIT_BITTER",
            "TRAIT_INTELLIGENT",
            "TRAIT_STRICT"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_CARTHAGE_MAGO",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_MAGO",
        "PreferredPortrait": "CHARACTER_PORTRAIT_TUTOR_MAGO",
        "iAge": "50",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHOLAR_ARCHETYPE",
            "TRAIT_CULTIVATOR",
            "TRAIT_HIGHLANDER",
            "TRAIT_HUMBLE"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_BABYLONIA_ESAGIL_KIN_APLI",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_ESAGIL_KIN_APLI",
        "PreferredPortrait": "CHARACTER_PORTRAIT_NAME_TUTOR_ESAGIL_KIN_APLI",
        "iAge": "70",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHOLAR_ARCHETYPE",
            "TRAIT_SUPERSTITIOUS",
            "TRAIT_HERBALIST",
            "TRAIT_BOLD"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_BABYLONIA_SERUA_ETERAT",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_TUTOR_SERUA_ETERAT",
        "PreferredPortrait": "CHARACTER_PORTRAIT_NAME_TUTOR_SERUA_ETERAT",
        "iAge": "50",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_DIPLOMAT_ARCHETYPE",
            "TRAIT_AFFABLE",
            "TRAIT_DEALMAKER",
            "TRAIT_INTELLIGENT"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_BABYLONIA_SIN_LEQI_UNNINNI",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_SIN_LEQI_UNNINNI",
        "PreferredPortrait": "CHARACTER_PORTRAIT_NAME_TUTOR_SIN_LEQI_UNNINNI",
        "iAge": "60",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHOLAR_ARCHETYPE",
            "TRAIT_ELOQUENT",
            "TRAIT_FRUGAL",
            "TRAIT_ROMANTIC"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_EGYPT_PTAHHOTEP",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_PTAHHOTEP",
        "PreferredPortrait": "CHARACTER_PORTRAIT_NAME_TUTOR_PTAHHOTEP",
        "iAge": "40",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_DIPLOMAT_ARCHETYPE",
            "TRAIT_PIOUS",
            "TRAIT_STRICT",
            "TRAIT_INTELLIGENT"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_EGYPT_SENENMUT",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_SENENMUT",
        "PreferredPortrait": "CHARACTER_PORTRAIT_NAME_TUTOR_SENENMUT",
        "iAge": "60",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_BUILDER_ARCHETYPE",
            "TRAIT_ENGINEER",
            "TRAIT_LOYAL",
            "TRAIT_VIGILANT"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_EGYPT_CLEOPATRA_SELENE",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_TUTOR_CLEOPATRA_SELENE",
        "PreferredPortrait": "CHARACTER_PORTRAIT_NAME_TUTOR_CLEOPATRA_SELENE",
        "iAge": "25",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_ELOQUENT",
            "TRAIT_PROSPEROUS",
            "TRAIT_BITTER",
            "TRAIT_INTELLIGENT"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_PERSIA_HARPAGUS",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_HARPAGUS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_NAME_TUTOR_HARPAGUS",
        "iAge": "60",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHEMER_ARCHETYPE",
            "TRAIT_TOUGH",
            "TRAIT_LOYAL",
            "TRAIT_INTELLIGENT"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_PERSIA_AVICENNA",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_AVICENNA",
        "PreferredPortrait": "CHARACTER_PORTRAIT_TUTOR_AVICENNA",
        "iAge": "40",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHOLAR_ARCHETYPE",
            "TRAIT_BOLD",
            "TRAIT_VIGILANT",
            "TRAIT_RIGHTEOUS"
          ]
        }
      },
      {
        "zType": "CHARACTER_TUTOR_PERSIA_KARTIR",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_TUTOR_KARTIR",
        "PreferredPortrait": "CHARACTER_PORTRAIT_TUTOR_KARTIR",
        "iAge": "40",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_ZEALOT_ARCHETYPE",
            "TRAIT_CORRUPT",
            "TRAIT_EXTRAVAGANT",
            "TRAIT_AFFABLE"
          ]
        }
      },
      {
        "zType": "CHARACTER_PIEFACE",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_PIEFACE",
        "PreferredPortrait": "CHARACTER_PORTRAIT_PIEFACE",
        "iAge": "40",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_ORATOR_ARCHETYPE",
            "TRAIT_DRUNK",
            "TRAIT_UNCOUTH",
            "TRAIT_FOOLISH"
          ]
        }
      },
      {
        "zType": "CHARACTER_CIMON_THE_FOREIGNER",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_CIMON_THE_FOREIGNER",
        "PreferredPortrait": "CHARACTER_PORTRAIT_CIMON_THE_FOREIGNER",
        "iAge": "35",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_EXOTIC",
            "TRAIT_VIGILANT",
            "TRAIT_TIMID"
          ]
        }
      },
      {
        "zType": "CHARACTER_CONFUCIUS",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_CONFUCIUS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_CONFUCIUS",
        "iAge": "40",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHOLAR_ARCHETYPE",
            "TRAIT_HUMBLE",
            "TRAIT_GRACIOUS"
          ]
        }
      },
      {
        "zType": "CHARACTER_BOUDICEA",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_BOUDICEA",
        "PreferredPortrait": "CHARACTER_PORTRAIT_BOUDICEA",
        "iAge": "30",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_HERO_ARCHETYPE",
            "TRAIT_WARLIKE",
            "TRAIT_BOLD"
          ]
        }
      },
      {
        "zType": "CHARACTER_EPICTETUS",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_EPICTETUS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_EPICTETUS",
        "iAge": "35",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHOLAR_ARCHETYPE",
            "TRAIT_INTELLIGENT",
            "TRAIT_STRICT"
          ]
        }
      },
      {
        "zType": "CHARACTER_ZENOBIA",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_ZENOBIA",
        "PreferredPortrait": "CHARACTER_PORTRAIT_ZENOBIA",
        "iAge": "26",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_JUDGE_ARCHETYPE",
            "TRAIT_BOLD",
            "TRAIT_EDUCATED"
          ]
        }
      },
      {
        "zType": "CHARACTER_THE_ORPHAN_EATER",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_THE_ORPHAN_EATER",
        "PreferredPortrait": "CHARACTER_PORTRAIT_THE_ORPHAN_EATER",
        "iAge": "40",
        "iRating": "2",
        "bNoNickname": "1",
        "aeTraits": {
          "zValue": [
            "TRAIT_COMMANDER_ARCHETYPE",
            "TRAIT_RUTHLESS",
            "TRAIT_BLOODTHIRSTY",
            "TRAIT_WARLIKE"
          ]
        }
      },
      {
        "zType": "CHARACTER_PROPHET",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_PROPHET",
        "PreferredPortrait": "CHARACTER_PORTRAIT_PROPHET",
        "iAge": "31",
        "iRating": "2",
        "bNoNickname": "1",
        "aeTraits": {
          "zValue": [
            "TRAIT_ZEALOT_ARCHETYPE",
            "TRAIT_PROPHET",
            "TRAIT_RIGHTEOUS",
            "TRAIT_INTELLIGENT"
          ]
        }
      },
      {
        "zType": "CHARACTER_SEER",
        "Gender": "GENDER_FEMALE",
        "FirstName": "NAME_SEER",
        "PreferredPortrait": "CHARACTER_PORTRAIT_SEER",
        "iAge": "31",
        "iRating": "2",
        "bNoNickname": "1",
        "aeTraits": {
          "zValue": [
            "TRAIT_SCHEMER_ARCHETYPE",
            "TRAIT_CUNNING",
            "TRAIT_DIVINE",
            "TRAIT_INTELLIGENT"
          ]
        }
      },
      {
        "zType": "CHARACTER_INCITATUS",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_INCITATUS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_INCITATUS",
        "iAge": "18",
        "bNoNickname": "1",
        "aeTraits": {
          "zValue": [
            "TRAIT_HORSE",
            "TRAIT_ZEALOT_ARCHETYPE"
          ]
        }
      },
      {
        "zType": "CHARACTER_DIEGYLIS",
        "Gender": "GENDER_MALE",
        "FirstName": "NAME_DIEGYLIS",
        "PreferredPortrait": "CHARACTER_PORTRAIT_THRACIAN_MALE_01",
        "Tribe": "TRIBE_THRACIANS",
        "iAge": "35",
        "iRating": "2",
        "aeTraits": {
          "zValue": [
            "TRAIT_HERO_ARCHETYPE",
            "TRAIT_BLOODTHIRSTY",
            "TRAIT_BOLD",
            "TRAIT_SCARRED"
          ]
        }
      },
      {
        "zType": "CHARACTER_REBEL_SLAVE",
        "iAge": "28",
        "aeTraits": {
          "zValue": [
            "TRAIT_HERO_ARCHETYPE",
            "TRAIT_BOLD",
            "TRAIT_TOUGH",
            "TRAIT_REBEL_SLAVE"
          ]
        }
      }
    ]
  }
}
    export default data
    