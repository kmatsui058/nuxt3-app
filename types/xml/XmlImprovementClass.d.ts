
declare namespace XmlImprovementClass {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  CustomName?: ZType | string;
  iMaxCultureCount?: ZType | string;
  bNoAdjacent?: ZType | string;
  bHelpAll?: ZType | string;
  TechPrereq?: ZType | string;
  EffectCity?: ZType | string;
  SpecialistClass?: ZType | string;
  aiAdjacentImprovementClassModifier?: AiAdjacentImprovementClassModifier;
  aiAdjacentResourceYieldOutput?: AiAdjacentResourceYieldOutput;
  abResourceValid?: AbResourceValid;
  aeTheologyCityEffect?: AeTheologyCityEffect;
  aeResourceCityEffect?: AeTheologyCityEffect;
  aaiTheologyYieldOutput?: AaiTheologyYieldOutput;
  aaiResourceYieldOutput?: AaiResourceYieldOutput;
}
export interface AaiResourceYieldOutput {
  Pair?: Pair5[] | Pair22[] | Pair22;
}
export interface Pair22 {
  zIndex: string;
  SubPair: SubPair[];
}
export interface Pair5 {
  zIndex: string;
  SubPair: SubPair | SubPair[];
}
export interface AaiTheologyYieldOutput {
  Pair?: Pair4[];
}
export interface Pair4 {
  zIndex: string;
  SubPair: SubPair;
}
export interface SubPair {
  zSubIndex: string;
  iValue: string;
}
export interface AeTheologyCityEffect {
  Pair?: Pair3[] | Pair3;
}
export interface Pair3 {
  zIndex: string;
  zValue: string;
}
export interface AbResourceValid {
  Pair?: Pair2 | Pair2[];
}
export interface Pair2 {
  zIndex: string;
  bValue: string;
}
export interface AiAdjacentResourceYieldOutput {
  Pair?: Pair;
}
export interface AiAdjacentImprovementClassModifier {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
