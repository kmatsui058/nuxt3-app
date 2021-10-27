
declare namespace XmlTheology {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zIconName: ZType | string;
  iTier: ZType | string;
  iCost: ZType | string;
  iSpreadChange: ZType | string;
  Achievement: ZType | string;
  EffectCity?: ZType | string;
  aiLawOpinion: AiLawOpinion;
  abPrereqTheology?: ZType;
}
export interface AiLawOpinion {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
