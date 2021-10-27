
declare namespace XmlGameOption {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  zHelp: ZType | string;
  bDefaultSinglePlayer?: ZType;
  bDefaultMultiPlayer?: ZType | string;
  bSinglePlayer?: ZType | string;
  bMultiPlayer?: ZType | string;
  bDebug?: ZType | string;
}
export interface ZType {
}

}
