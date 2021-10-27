
declare namespace XmlVictory {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  bToggle?: ZType | string;
  bConquest?: ZType | string;
  bAmbitions?: ZType | string;
  iPercentVP?: ZType | string;
  iOpponentMaxPointPercent?: ZType | string;
  iMinTurns?: ZType | string;
  Help: ZType | string;
}
export interface ZType {
}

}
