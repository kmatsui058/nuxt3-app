
declare namespace XmlDifficulty {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  iRaidProbCity?: ZType | string;
  iRaidNumCity?: ZType | string;
  bNoDeclareWar?: ZType | string;
  EffectPlayer: ZType | string;
  aiYieldStockpile: AiYieldStockpile;
  aiYieldThresholdBase: AiYieldStockpile;
  aiYieldThresholdPer: AiYieldStockpile;
  aiEffectCityRebelProb?: AiEffectCityRebelProb;
}
export interface AiEffectCityRebelProb {
  Pair?: Pair[] | Pair;
}
export interface AiYieldStockpile {
  Pair?: Pair[];
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
