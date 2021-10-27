
declare namespace XmlHotkeys {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  HotkeyClass: ZType | string;
  Keys: ZType | string;
  bKeyboardMap?: ZType | string;
  bHold?: ZType | string;
  bOnDown?: ZType | string;
  fRepeatDelay?: ZType | string;
  bIgnoreMouse?: ZType | string;
  IgnoreHotkeys?: IgnoreHotkeys;
}
export interface IgnoreHotkeys {
  zValue?: string[];
}
export interface ZType {
}

}
