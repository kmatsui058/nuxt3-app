
declare namespace XmlAdvantage {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  EffectPlayer?: ZType | string;
}
export interface ZType {
}

}
