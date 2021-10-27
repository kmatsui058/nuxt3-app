
declare namespace XmlOpponentLevel {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  iWarModifier?: ZType | string;
  iStartWarMinTurn: ZType | string;
  iEndWarMinTurns: ZType | string;
}
export interface ZType {
}

}
