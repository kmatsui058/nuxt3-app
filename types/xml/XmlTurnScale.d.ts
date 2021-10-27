
declare namespace XmlTurnScale {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  ScaleSingular: ZType | string;
  ScalePlural: ZType | string;
  ScaleShort: ZType | string;
  bEnabled?: ZType | string;
  iCognomenModifier?: ZType | string;
  azTurnNames?: AzTurnNames;
}
export interface AzTurnNames {
  zValue?: string[];
}
export interface ZType {
}

}
