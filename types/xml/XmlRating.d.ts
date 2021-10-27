
declare namespace XmlRating {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zColor: ZType | string;
  Name: ZType | string;
  Help: ZType | string;
  GainTexts: GainTexts;
  LoseTexts: GainTexts;
  zIconName: ZType | string;
  iAttackModifier?: ZType | string;
  iDefenseModifier?: ZType | string;
  iCriticalChance?: ZType | string;
  iUnitXP?: ZType | string;
  aiYieldCourtRate: AiYieldCourtRate;
  aiYieldGovernorModifier: AiYieldCourtRate;
  aiYieldAgentPercent: AiYieldCourtRate;
}
export interface AiYieldCourtRate {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface GainTexts {
  zValue?: string[];
}
export interface ZType {
}

}
