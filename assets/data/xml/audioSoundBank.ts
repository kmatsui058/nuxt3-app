
    const data: XmlAudioSoundBank.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          "comment": "unique name for the bank"
        },
        "zBankFile": {
          "comment": "name of a file for a soundbank that will be loaded. leave off the .bnk extension"
        },
        "bStayLoadedPermanently": {
          "comment": "set true for core built-in banks that will always remain loaded. set false for mods"
        },
        "bBuiltin": {
          "comment": "if false, assume it's for a mod. modifies things like path search settings"
        }
      },
      {
        "zType": "SOUNDBANK_BUILTIN_EVENTS",
        "zBankFile": "Events",
        "bStayLoadedPermanently": "1",
        "bBuiltin": "1"
      },
      {
        "zType": "SOUNDBANK_BUILTIN_AUDIO_GLOBAL",
        "zBankFile": "Audio_Global",
        "bStayLoadedPermanently": "1",
        "bBuiltin": "1"
      },
      {
        "zType": "SOUNDBANK_BUILTIN_AUDIO_2D",
        "zBankFile": "Audio_2D",
        "bStayLoadedPermanently": "1",
        "bBuiltin": "1"
      },
      {
        "zType": "SOUNDBANK_BUILTIN_AUDIO_3D",
        "zBankFile": "Audio_3D",
        "bStayLoadedPermanently": "1",
        "bBuiltin": "1"
      },
      {
        "zType": "SOUNDBANK_BUILTIN_AUDIO_AMBIENCE",
        "zBankFile": "Audio_Ambience",
        "bStayLoadedPermanently": "1",
        "bBuiltin": "1"
      },
      {
        "zType": "SOUNDBANK_BUILTIN_AUDIO_ANIMATION",
        "zBankFile": "Audio_Animation",
        "bStayLoadedPermanently": "1",
        "bBuiltin": "1"
      },
      {
        "zType": "SOUNDBANK_BUILTIN_AUDIO_MUSIC",
        "zBankFile": "Audio_Music",
        "bStayLoadedPermanently": "1",
        "bBuiltin": "1"
      }
    ]
  }
}
    export default data
    