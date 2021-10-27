
declare namespace XmlTurnTimer {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  iBase?: ZType | string;
  iPerCity?: ZType | string;
  iPerUnit?: ZType | string;
  bOff?: ZType | string;
  bDynamic?: ZType | string;
}
export interface ZType {
}

}
