
declare namespace XmlAchievement {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Victory: ZType | string;
  EventLevel: ZType | string;
  Mortality: ZType | string;
  Difficulty: ZType | string;
  Nation: ZType | string;
  FamilyClass: ZType | string;
  aiCultureCount: AiCultureCount;
  aiStatCount: AiCultureCount;
  aeGameOptions: AeGameOptions;
  bGOTW?: ZType | string;
  bTrueFaith?: ZType | string;
  iNumOpponents?: ZType | string;
  iNumCities?: ZType | string;
  iNumFamilies?: ZType | string;
}
export interface AeGameOptions {
  zValue?: string[] | string;
}
export interface AiCultureCount {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
