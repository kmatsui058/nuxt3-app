
declare namespace XmlProject {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zIcon: ZType | string;
  ProjectAsset?: ZType | string;
  iCivics?: ZType | string;
  iMaxCount?: ZType | string;
  iFreeNoCharacters?: ZType | string;
  iExtraPopRequired?: ZType;
  bHidden?: ZType | string;
  bRepeat?: ZType | string;
  bNoHurry?: ZType | string;
  bRequiresRiver?: ZType;
  bRequiresCoast?: ZType;
  bRequiresDamage?: ZType | string;
  bCaptureDestroy?: ZType | string;
  Bonus?: ZType | string;
  CityProject?: ZType | string;
  EffectCity?: ZType | string;
  EffectCityExtra?: ZType | string;
  EffectPlayer?: ZType;
  MinimumCulture?: ZType | string;
  RequiresCulture?: ZType | string;
  TechPrereq?: ZType | string;
  ProjectPrereq?: ZType | string;
  EffectCityPrereq?: ZType | string;
  EffectPlayerPrereq?: ZType | string;
  CapitalEffectPlayerPrereq?: ZType | string;
  aiYieldCost?: AiYieldCost;
  aiYieldModifier?: AiYieldModifier;
  abInvalidBy?: AbInvalidBy;
}
export interface AbInvalidBy {
  Pair?: Pair2 | Pair2[];
}
export interface Pair2 {
  zIndex: string;
  bValue: string;
}
export interface AiYieldModifier {
  Pair?: Pair[];
}
export interface AiYieldCost {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
