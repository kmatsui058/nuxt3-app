
    const data: XmlHotkeys.RootObject = {
  "Root": {
    "Entry": [
      {
        "zType": {
          
        },
        "Name": {
          
        },
        "HotkeyClass": {
          
        },
        "Keys": {
          
        },
        "bKeyboardMap": {
          
        },
        "bHold": {
          
        },
        "bOnDown": {
          
        },
        "fRepeatDelay": {
          
        },
        "bIgnoreMouse": {
          
        },
        "IgnoreHotkeys": {
          
        }
      },
      {
        "zType": "HOTKEY_MOVE_CAMERA_NORTH",
        "Name": "TEXT_HOTKEY_MOVE_CAMERA_NORTH",
        "HotkeyClass": "HOTKEYCLASS_CAMERA",
        "Keys": "W,UpArrow",
        "bKeyboardMap": "1",
        "bHold": "1",
        "IgnoreHotkeys": {
          "zValue": [
            "HOTKEY_MOVE_CAMERA_WEST",
            "HOTKEY_MOVE_CAMERA_SOUTH",
            "HOTKEY_MOVE_CAMERA_EAST"
          ]
        }
      },
      {
        "zType": "HOTKEY_MOVE_CAMERA_WEST",
        "Name": "TEXT_HOTKEY_MOVE_CAMERA_WEST",
        "HotkeyClass": "HOTKEYCLASS_CAMERA",
        "Keys": "A,LeftArrow",
        "bKeyboardMap": "1",
        "bHold": "1",
        "IgnoreHotkeys": {
          "zValue": [
            "HOTKEY_MOVE_CAMERA_NORTH",
            "HOTKEY_MOVE_CAMERA_SOUTH",
            "HOTKEY_MOVE_CAMERA_EAST"
          ]
        }
      },
      {
        "zType": "HOTKEY_MOVE_CAMERA_SOUTH",
        "Name": "TEXT_HOTKEY_MOVE_CAMERA_SOUTH",
        "HotkeyClass": "HOTKEYCLASS_CAMERA",
        "Keys": "S,DownArrow",
        "bKeyboardMap": "1",
        "bHold": "1",
        "IgnoreHotkeys": {
          "zValue": [
            "HOTKEY_MOVE_CAMERA_NORTH",
            "HOTKEY_MOVE_CAMERA_WEST",
            "HOTKEY_MOVE_CAMERA_EAST"
          ]
        }
      },
      {
        "zType": "HOTKEY_MOVE_CAMERA_EAST",
        "Name": "TEXT_HOTKEY_MOVE_CAMERA_EAST",
        "HotkeyClass": "HOTKEYCLASS_CAMERA",
        "Keys": "D,RightArrow",
        "bKeyboardMap": "1",
        "bHold": "1",
        "IgnoreHotkeys": {
          "zValue": [
            "HOTKEY_MOVE_CAMERA_NORTH",
            "HOTKEY_MOVE_CAMERA_WEST",
            "HOTKEY_MOVE_CAMERA_SOUTH"
          ]
        }
      },
      {
        "zType": "HOTKEY_CAMERA_ZOOM_IN",
        "Name": "TEXT_HOTKEY_CAMERA_ZOOM_IN",
        "HotkeyClass": "HOTKEYCLASS_CAMERA",
        "Keys": "PageDown",
        "bHold": "1",
        "bIgnoreMouse": "1"
      },
      {
        "zType": "HOTKEY_CAMERA_ZOOM_OUT",
        "Name": "TEXT_HOTKEY_CAMERA_ZOOM_OUT",
        "HotkeyClass": "HOTKEYCLASS_CAMERA",
        "Keys": "PageUp",
        "bHold": "1",
        "bIgnoreMouse": "1"
      },
      {
        "zType": "HOTKEY_HIDE_VEGETATION",
        "Name": "TEXT_HOTKEY_HIDE_VEGETATION",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "Z",
        "bKeyboardMap": "1",
        "bHold": "1",
        "bIgnoreMouse": "1"
      },
      {
        "zType": "HOTKEY_HIDE_IMPROVEMENTS",
        "Name": "TEXT_HOTKEY_HIDE_IMPROVEMENTS",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "LeftShift+Z,RightShift+Z",
        "bKeyboardMap": "1",
        "bHold": "1",
        "bIgnoreMouse": "1"
      },
      {
        "zType": "HOTKEY_HIDE_UNITS",
        "Name": "TEXT_HOTKEY_HIDE_UNITS",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "LeftAlt+Z,RightAlt+Z",
        "bKeyboardMap": "1",
        "bHold": "1",
        "bIgnoreMouse": "1"
      },
      {
        "zType": "HOTKEY_HIDE_ALL",
        "Name": "TEXT_HOTKEY_HIDE_ALL",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "LeftShift+LeftAlt+Z,RightShift+LeftAlt+Z,LeftShift+RightAlt+Z,RightShift+RightAlt+Z",
        "bKeyboardMap": "1",
        "bHold": "1",
        "bIgnoreMouse": "1"
      },
      {
        "zType": "HOTKEY_LOCK_ZOC",
        "Name": "TEXT_HOTKEY_LOCK_ZOC",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "LeftShift+X,RightShift+X",
        "bKeyboardMap": "1"
      },
      {
        "zType": "HOTKEY_LOCK_DANGER_TILES",
        "Name": "TEXT_HOTKEY_LOCK_DANGER_TILES",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "LeftShift+C,RightShift+C",
        "bKeyboardMap": "1"
      },
      {
        "zType": "HOTKEY_LOCK_IDLE_UNITS",
        "Name": "TEXT_HOTKEY_LOCK_IDLE_UNITS",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "LeftShift+V,RightShift+V",
        "bKeyboardMap": "1"
      },
      {
        "zType": "HOTKEY_LOCK_TRADE_NETWORK",
        "Name": "TEXT_HOTKEY_LOCK_TRADE_NETWORK",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "LeftShift+B,RightShift+B",
        "bKeyboardMap": "1"
      },
      {
        "zType": "HOTKEY_LOCK_ROADS_RIVERS",
        "Name": "TEXT_HOTKEY_LOCK_ROADS_RIVERS",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "LeftShift+N,RightShift+N",
        "bKeyboardMap": "1"
      },
      {
        "zType": "HOTKEY_LOCK_TILE_YIELDS",
        "Name": "TEXT_HOTKEY_LOCK_TILE_YIELDS",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "LeftShift+M,RightShift+M",
        "bKeyboardMap": "1"
      },
      {
        "zType": "HOTKEY_LOCK_TILE_SPECIALISTS",
        "Name": "TEXT_HOTKEY_LOCK_TILE_SPECIALISTS",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "LeftShift+Comma,RightShift+Comma",
        "bKeyboardMap": "1"
      },
      {
        "zType": "HOTKEY_SHOW_ZOC",
        "Name": "TEXT_HOTKEY_SHOW_ZOC",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "X",
        "bKeyboardMap": "1",
        "bHold": "1",
        "bIgnoreMouse": "1"
      },
      {
        "zType": "HOTKEY_SHOW_DANGER_TILES",
        "Name": "TEXT_HOTKEY_SHOW_DANGER_TILES",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "C",
        "bKeyboardMap": "1",
        "bHold": "1",
        "bIgnoreMouse": "1"
      },
      {
        "zType": "HOTKEY_SHOW_IDLE_UNITS",
        "Name": "TEXT_HOTKEY_SHOW_IDLE_UNITS",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "V",
        "bKeyboardMap": "1",
        "bHold": "1",
        "bIgnoreMouse": "1"
      },
      {
        "zType": "HOTKEY_SHOW_TRADE_NETWORK",
        "Name": "TEXT_HOTKEY_SHOW_TRADE_NETWORK",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "B",
        "bKeyboardMap": "1",
        "bHold": "1",
        "bIgnoreMouse": "1"
      },
      {
        "zType": "HOTKEY_SHOW_ROADS_RIVERS",
        "Name": "TEXT_HOTKEY_SHOW_ROADS_RIVERS",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "N",
        "bKeyboardMap": "1",
        "bHold": "1",
        "bIgnoreMouse": "1"
      },
      {
        "zType": "HOTKEY_SHOW_TILE_YIELDS",
        "Name": "TEXT_HOTKEY_SHOW_TILE_YIELDS",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "M",
        "bKeyboardMap": "1",
        "bHold": "1",
        "bIgnoreMouse": "1"
      },
      {
        "zType": "HOTKEY_SHOW_TILE_SPECIALISTS",
        "Name": "TEXT_HOTKEY_SHOW_TILE_SPECIALISTS",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "Comma",
        "bKeyboardMap": "1",
        "bHold": "1",
        "bIgnoreMouse": "1"
      },
      {
        "zType": "HOTKEY_TOGGLE_HEX_GRID",
        "Name": "TEXT_HOTKEY_TOGGLE_HEX_GRID",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "LeftShift+Slash,RightShift+Slash"
      },
      {
        "zType": "HOTKEY_HIDE_UI",
        "Name": "TEXT_HOTKEY_HIDE_UI",
        "HotkeyClass": "HOTKEYCLASS_OVERLAYS",
        "Keys": "LeftAlt+X,RightAlt+X",
        "bHold": "1",
        "bIgnoreMouse": "1"
      },
      {
        "zType": "HOTKEY_ROAD_TO",
        "Name": "TEXT_HOTKEY_ROAD_TO",
        "HotkeyClass": "HOTKEYCLASS_GAMEPLAY",
        "Keys": "LeftControl+R, RightControl+R"
      },
      {
        "zType": "HOTKEY_REMOVE_VEGETATION",
        "Name": "TEXT_HOTKEY_REMOVE_VEGETATION",
        "HotkeyClass": "HOTKEYCLASS_GAMEPLAY",
        "Keys": "F"
      },
      {
        "zType": "HOTKEY_SPEND_TRAINING_FOR_ORDERS",
        "Name": "TEXT_HOTKEY_SPEND_TRAINING_FOR_ORDERS",
        "HotkeyClass": "HOTKEYCLASS_GAMEPLAY",
        "Keys": "O"
      },
      {
        "zType": "HOTKEY_PAUSE",
        "Name": "TEXT_HOTKEY_PAUSE",
        "HotkeyClass": "HOTKEYCLASS_GAMEPLAY",
        "Keys": "Pause"
      },
      {
        "zType": "HOTKEY_INCREASE_TURN_STYLE",
        "Name": "TEXT_HOTKEY_INCREASE_TURN_STYLE",
        "HotkeyClass": "HOTKEYCLASS_GAMEPLAY",
        "Keys": "LeftShift+Equals,RightShift+Equals"
      },
      {
        "zType": "HOTKEY_DECREASE_TURN_STYLE",
        "Name": "TEXT_HOTKEY_DECREASE_TURN_STYLE",
        "HotkeyClass": "HOTKEYCLASS_GAMEPLAY",
        "Keys": "LeftShift+Minus,RightShift+Minus"
      },
      {
        "zType": "HOTKEY_INCREASE_TURN_TIMER",
        "Name": "TEXT_HOTKEY_INCREASE_TURN_TIMER",
        "HotkeyClass": "HOTKEYCLASS_GAMEPLAY",
        "Keys": "Equals"
      },
      {
        "zType": "HOTKEY_DECREASE_TURN_TIMER",
        "Name": "TEXT_HOTKEY_DECREASE_TURN_TIMER",
        "HotkeyClass": "HOTKEYCLASS_GAMEPLAY",
        "Keys": "Minus"
      },
      {
        "zType": "HOTKEY_MUTE",
        "Name": "TEXT_HOTKEY_MUTE",
        "HotkeyClass": "HOTKEYCLASS_GAMEPLAY",
        "Keys": "LeftControl+Slash,RightControl+Slash"
      },
      {
        "zType": "HOTKEY_CLEAR_SELECTION",
        "Name": "TEXT_HOTKEY_CLEAR_SELECTION",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "Escape"
      },
      {
        "zType": "HOTKEY_CYCLE_IDLE_1",
        "Name": "TEXT_HOTKEY_CYCLE_IDLE_1",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "Alpha1"
      },
      {
        "zType": "HOTKEY_CYCLE_PASS_IDLE_1",
        "Name": "TEXT_HOTKEY_CYCLE_PASS_IDLE_1",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "LeftShift+Alpha1,RightShift+Alpha1"
      },
      {
        "zType": "HOTKEY_CYCLE_IDLE_2",
        "Name": "TEXT_HOTKEY_CYCLE_IDLE_2",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "Alpha2"
      },
      {
        "zType": "HOTKEY_CYCLE_PASS_IDLE_2",
        "Name": "TEXT_HOTKEY_CYCLE_PASS_IDLE_2",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "LeftShift+Alpha2,RightShift+Alpha2"
      },
      {
        "zType": "HOTKEY_CYCLE_IDLE_3",
        "Name": "TEXT_HOTKEY_CYCLE_IDLE_3",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "Alpha3"
      },
      {
        "zType": "HOTKEY_CYCLE_PASS_IDLE_3",
        "Name": "TEXT_HOTKEY_CYCLE_PASS_IDLE_3",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "LeftShift+Alpha3,RightShift+Alpha3"
      },
      {
        "zType": "HOTKEY_CYCLE_IDLE_4",
        "Name": "TEXT_HOTKEY_CYCLE_IDLE_4",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "Alpha4"
      },
      {
        "zType": "HOTKEY_CYCLE_PASS_IDLE_4",
        "Name": "TEXT_HOTKEY_CYCLE_PASS_IDLE_4",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "LeftShift+Alpha4,RightShift+Alpha4"
      },
      {
        "zType": "HOTKEY_CYCLE_IDLE_5",
        "Name": "TEXT_HOTKEY_CYCLE_IDLE_5",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "Alpha5"
      },
      {
        "zType": "HOTKEY_CYCLE_PASS_IDLE_5",
        "Name": "TEXT_HOTKEY_CYCLE_PASS_IDLE_5",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "LeftShift+Alpha5,RightShift+Alpha5"
      },
      {
        "zType": "HOTKEY_END_TURN",
        "Name": "TEXT_HOTKEY_END_TURN",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "Alpha6"
      },
      {
        "zType": "HOTKEY_END_TURN_FORCE",
        "Name": "TEXT_HOTKEY_END_TURN_FORCE",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "LeftShift+Alpha6,RightShift+Alpha6"
      },
      {
        "zType": "HOTKEY_PASS",
        "Name": "TEXT_HOTKEY_PASS",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "Space"
      },
      {
        "zType": "HOTKEY_SLEEP",
        "Name": "TEXT_HOTKEY_SLEEP",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "LeftShift+Space,RightShift+Space"
      },
      {
        "zType": "HOTKEY_SENTRY",
        "Name": "TEXT_HOTKEY_SENTRY",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "LeftControl+Space, RightControl+Space"
      },
      {
        "zType": "HOTKEY_CYCLE_ALL",
        "Name": "TEXT_HOTKEY_CYCLE_ALL",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "Tab,Mouse4"
      },
      {
        "zType": "HOTKEY_CYCLE_ALL_REVERSE",
        "Name": "TEXT_HOTKEY_CYCLE_ALL_REVERSE",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "LeftShift+Tab,Mouse3,RightShift+Tab"
      },
      {
        "zType": "HOTKEY_UNDO",
        "Name": "TEXT_HOTKEY_UNDO",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "LeftControl+Z,RightControl+Z"
      },
      {
        "zType": "HOTKEY_REDO",
        "Name": "TEXT_HOTKEY_REDO",
        "HotkeyClass": "HOTKEYCLASS_NAVIGATION",
        "Keys": "LeftControl+Y,RightControl+Y"
      },
      {
        "zType": "HOTKEY_PING",
        "Name": "TEXT_HOTKEY_PING",
        "HotkeyClass": "HOTKEYCLASS_COMMUNICATION",
        "Keys": "LeftAlt",
        "bHold": "1",
        "bIgnoreMouse": "1"
      },
      {
        "zType": "HOTKEY_CHAT",
        "Name": "TEXT_HOTKEY_CHAT",
        "HotkeyClass": "HOTKEYCLASS_COMMUNICATION",
        "Keys": "Return,KeypadEnter"
      },
      {
        "zType": "HOTKEY_CHAT_ALL",
        "Name": "TEXT_HOTKEY_CHAT_ALL",
        "HotkeyClass": "HOTKEYCLASS_COMMUNICATION",
        "Keys": "LeftShift+Return,LeftShift+KeypadEnter,RightShift+Return,RightShift+KeypadEnter"
      },
      {
        "zType": "HOTKEY_VICTORY_SCREEN",
        "Name": "TEXT_HOTKEY_VICTORY_SCREEN",
        "HotkeyClass": "HOTKEYCLASS_SCREENS",
        "Keys": "F2"
      },
      {
        "zType": "HOTKEY_INHERITANCE_SCREEN",
        "Name": "TEXT_HOTKEY_INHERITANCE_SCREEN",
        "HotkeyClass": "HOTKEYCLASS_SCREENS",
        "Keys": "F3"
      },
      {
        "zType": "HOTKEY_LAWS_SCREEN",
        "Name": "TEXT_HOTKEY_LAWS_SCREEN",
        "HotkeyClass": "HOTKEYCLASS_SCREENS",
        "Keys": "F4"
      },
      {
        "zType": "HOTKEY_LOG_SCREEN",
        "Name": "TEXT_HOTKEY_LOG_SCREEN",
        "HotkeyClass": "HOTKEYCLASS_SCREENS",
        "Keys": "F5"
      },
      {
        "zType": "HOTKEY_TECH_SCREEN",
        "Name": "TEXT_HOTKEY_TECH_SCREEN",
        "HotkeyClass": "HOTKEYCLASS_SCREENS",
        "Keys": "F6"
      },
      {
        "zType": "HOTKEY_CITY_LIST",
        "Name": "TEXT_HOTKEY_CITY_LIST",
        "HotkeyClass": "HOTKEYCLASS_SCREENS",
        "Keys": "F7"
      },
      {
        "zType": "HOTKEY_HELP_SCREEN",
        "Name": "TEXT_HOTKEY_HELP_SCREEN",
        "HotkeyClass": "HOTKEYCLASS_SCREENS",
        "Keys": "F1"
      },
      {
        "zType": "HOTKEY_AI_LOG",
        "Name": "TEXT_HOTKEY_AI_LOG",
        "HotkeyClass": "HOTKEYCLASS_SCREENS",
        "Keys": "F10"
      },
      {
        "zType": "HOTKEY_PREVIOUS_TAB",
        "Name": "TEXT_HOTKEY_PREVIOUS_TAB",
        "HotkeyClass": "HOTKEYCLASS_SCREENS",
        "Keys": "Q",
        "bKeyboardMap": "1"
      },
      {
        "zType": "HOTKEY_NEXT_TAB",
        "Name": "TEXT_HOTKEY_NEXT_TAB",
        "HotkeyClass": "HOTKEYCLASS_SCREENS",
        "Keys": "E",
        "bKeyboardMap": "1"
      },
      {
        "zType": "HOTKEY_GAME_EDITOR",
        "Name": "TEXT_HOTKEY_GAME_EDITOR",
        "HotkeyClass": "HOTKEYCLASS_SCREENS",
        "Keys": "LeftShift+Backquote"
      },
      {
        "zType": "HOTKEY_CONSOLE",
        "Name": "TEXT_HOTKEY_CONSOLE",
        "HotkeyClass": "HOTKEYCLASS_SCREENS",
        "Keys": "LeftControl+LeftShift+Backquote"
      },
      {
        "zType": "HOTKEY_CLOSE_POPUP",
        "Name": "TEXT_HOTKEY_CLOSE_POPUP",
        "HotkeyClass": "HOTKEYCLASS_POPUPS",
        "Keys": "Escape"
      },
      {
        "zType": "HOTKEY_EXPAND_TOOLTIP",
        "Name": "TEXT_HOTKEY_EXPAND_TOOLTIP",
        "HotkeyClass": "HOTKEYCLASS_TOOLTIPS",
        "Keys": "LeftAlt,RightAlt",
        "bHold": "1",
        "IgnoreHotkeys": {
          "zValue": [
            "HOTKEY_LOCK_TOOLTIP",
            "HOTKEY_FREEZE_TOOLTIP"
          ]
        }
      },
      {
        "zType": "HOTKEY_LOCK_TOOLTIP",
        "Name": "TEXT_HOTKEY_LOCK_TOOLTIP",
        "HotkeyClass": "HOTKEYCLASS_TOOLTIPS",
        "Keys": "Mouse2",
        "IgnoreHotkeys": {
          "zValue": [
            "HOTKEY_FREEZE_TOOLTIP",
            "HOTKEY_EXPAND_TOOLTIP"
          ]
        }
      },
      {
        "zType": "HOTKEY_FREEZE_TOOLTIP",
        "Name": "TEXT_HOTKEY_FREEZE_TOOLTIP",
        "HotkeyClass": "HOTKEYCLASS_TOOLTIPS",
        "Keys": "LeftShift,RightShift",
        "bHold": "1",
        "bIgnoreMouse": "1",
        "IgnoreHotkeys": {
          "zValue": [
            "HOTKEY_LOCK_TOOLTIP",
            "HOTKEY_EXPAND_TOOLTIP"
          ]
        }
      },
      {
        "zType": "HOTKEY_SAVE",
        "Name": "TEXT_HOTKEY_SAVE",
        "HotkeyClass": "HOTKEYCLASS_SAVES",
        "Keys": "F11,LeftControl+S,RightControl+S"
      },
      {
        "zType": "HOTKEY_QUICK_LOAD",
        "Name": "TEXT_HOTKEY_QUICK_LOAD",
        "HotkeyClass": "HOTKEYCLASS_SAVES",
        "Keys": "F12"
      },
      {
        "zType": "HOTKEY_AUTO_LOAD",
        "Name": "TEXT_HOTKEY_AUTO_LOAD",
        "HotkeyClass": "HOTKEYCLASS_SAVES",
        "Keys": "LeftShift+F12,RightShift+F12"
      },
      {
        "zType": "HOTKEY_DEBUG_MENU",
        "Name": "TEXT_HOTKEY_DEBUG_MENU",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftAlt+D,RightAlt+D"
      },
      {
        "zType": "HOTKEY_REVEAL_MAP",
        "Name": "TEXT_HOTKEY_REVEAL_MAP",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftControl+M,RightControl+M"
      },
      {
        "zType": "HOTKEY_FULLY_REVEAL_MAP",
        "Name": "TEXT_HOTKEY_FULLY_REVEAL_MAP",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftControl+LeftShift+M,RightControl+RightShift+M,RightControl+LeftShift+M,LeftControl+RightShift+M"
      },
      {
        "zType": "HOTKEY_UNLOCK_NEXT_TECH",
        "Name": "TEXT_HOTKEY_UNLOCK_NEXT_TECH",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftControl+T,RightControl+T"
      },
      {
        "zType": "HOTKEY_UNLOCK_ALL_TECHS",
        "Name": "TEXT_HOTKEY_UNLOCK_ALL_TECHS",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftShift+T,RightShift+T"
      },
      {
        "zType": "HOTKEY_RELOAD_INFOS",
        "Name": "TEXT_HOTKEY_RELOAD_INFOS",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftControl+LeftShift+R,RightControl+RightShift+R"
      },
      {
        "zType": "HOTKEY_GRANT_RESOURCES",
        "Name": "TEXT_HOTKEY_GRANT_RESOURCES",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftShift+R,RightShift+R"
      },
      {
        "zType": "HOTKEY_TOGGLE_FLYING_CAMERA",
        "Name": "TEXT_HOTKEY_TOGGLE_FLYING_CAMERA",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftShift+F,RightShift+F"
      },
      {
        "zType": "HOTKEY_TOGGLE_TOP_DOWN_CAMERA",
        "Name": "TEXT_HOTKEY_TOGGLE_TOP_DOWN_CAMERA",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftControl+F,RightControl+F"
      },
      {
        "zType": "HOTKEY_TEST_LOAD_SAVE_CONSISTENCY",
        "Name": "TEXT_HOTKEY_TEST_LOAD_SAVE_CONSISTENCY",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftControl+F12,RightControl+F12"
      },
      {
        "zType": "HOTKEY_TOGGLE_AUTOPLAY",
        "Name": "TEXT_HOTKEY_TOGGLE_AUTOPLAY",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftControl+F11,RightControl+F11"
      },
      {
        "zType": "HOTKEY_MENU_DEBUG_OPTIONS",
        "Name": "TEXT_HOTKEY_MENU_DEBUG_OPTIONS",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "Escape+LeftShift,Escape+RightShift"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_PAINT",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_PAINT",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "B"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_FILL",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_FILL",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "LeftShift+F,RightShift+F"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_ERASE",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_ERASE",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "E"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_TERRAIN",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_TERRAIN",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "T"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_HEIGHT",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_HEIGHT",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "H"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_RESOURCES",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_RESOURCES",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "R"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_VEGETATION",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_VEGETATION",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "F"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_UNDO",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_UNDO",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "Z,LeftControl+Z"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_REDO",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_REDO",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "LeftShift+Z,LeftShift+LeftControl+Z"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_SAVE",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_SAVE",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "LeftControl+S,LeftAlt+S"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_INCREASE_SIZE",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_INCREASE_SIZE",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "RightBracket",
        "bHold": "1",
        "fRepeatDelay": ".1"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_DECREASE_SIZE",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_DECREASE_SIZE",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "LeftBracket",
        "bHold": "1",
        "fRepeatDelay": ".1"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_UTILITIES_PANEL",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_UTILITIES_PANEL",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "U"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_INFO_PANEL",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_INFO_PANEL",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "I"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_PROJECTOR",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_PROJECTOR",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "P"
      },
      {
        "zType": "HOTKEY_MAP_EDITOR_FLYING_CAMERA",
        "Name": "TEXT_HOTKEY_MAP_EDITOR_FLYING_CAMERA",
        "HotkeyClass": "HOTKEYCLASS_MAP_EDITOR",
        "Keys": "LeftControl+F,RightControl+F"
      },
      {
        "zType": "HOTKEY_EVENT_BROWSER_NEXT_INPUT",
        "Name": "TEXT_HOTKEY_EVENT_BROWSER_NEXT_INPUT",
        "HotkeyClass": "HOTKEYCLASS_EVENT_BROWSER",
        "Keys": "Tab",
        "bOnDown": "1"
      },
      {
        "zType": "HOTKEY_EVENT_BROWSER_PREVIOUS_INPUT",
        "Name": "TEXT_HOTKEY_EVENT_BROWSER_PREVIOUS_INPUT",
        "HotkeyClass": "HOTKEYCLASS_EVENT_BROWSER",
        "Keys": "LeftShift+Tab",
        "bOnDown": "1"
      },
      {
        "zType": "HOTKEY_CYCLE_PLAYER_1",
        "Name": "TEXT_HOTKEY_CYCLE_PLAYER_1",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftAlt+Alpha1,RightAlt+Alpha1"
      },
      {
        "zType": "HOTKEY_CYCLE_PLAYER_2",
        "Name": "TEXT_HOTKEY_CYCLE_PLAYER_2",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftAlt+Alpha2,RightAlt+Alpha2"
      },
      {
        "zType": "HOTKEY_CYCLE_PLAYER_3",
        "Name": "TEXT_HOTKEY_CYCLE_PLAYER_3",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftAlt+Alpha3,RightAlt+Alpha3"
      },
      {
        "zType": "HOTKEY_CYCLE_PLAYER_4",
        "Name": "TEXT_HOTKEY_CYCLE_PLAYER_4",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftAlt+Alpha4,RightAlt+Alpha4"
      },
      {
        "zType": "HOTKEY_CYCLE_PLAYER_5",
        "Name": "TEXT_HOTKEY_CYCLE_PLAYER_5",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftAlt+Alpha5,RightAlt+Alpha5"
      },
      {
        "zType": "HOTKEY_CYCLE_PLAYER_6",
        "Name": "TEXT_HOTKEY_CYCLE_PLAYER_6",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftAlt+Alpha6,RightAlt+Alpha6"
      },
      {
        "zType": "HOTKEY_CYCLE_PLAYER_7",
        "Name": "TEXT_HOTKEY_CYCLE_PLAYER_7",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftAlt+Alpha7,RightAlt+Alpha7"
      },
      {
        "zType": "HOTKEY_CYCLE_PLAYER_8",
        "Name": "TEXT_HOTKEY_CYCLE_PLAYER_8",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftAlt+Alpha8,RightAlt+Alpha8"
      },
      {
        "zType": "HOTKEY_CYCLE_PLAYER_9",
        "Name": "TEXT_HOTKEY_CYCLE_PLAYER_9",
        "HotkeyClass": "HOTKEYCLASS_DEBUG",
        "Keys": "LeftAlt+Alpha9,RightAlt+Alpha9"
      }
    ]
  }
}
    export default data
    