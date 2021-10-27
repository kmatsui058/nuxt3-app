
declare namespace XmlScenario {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  SubTitle: ZType | string;
  ScenarioClass?: ZType | string;
  zIcon: ZType | string;
  bPublic?: ZType | string;
  zMapFile?: ZType | string;
  bAllowMap?: ZType | string;
  zMapScript?: ZType;
  zModName: ZType | string;
  azAchievements?: AzAchievements;
  bContinue?: ZType | string;
  Prereq?: ZType | string;
  Nation?: ZType | string;
  Difficulty: ZType | string;
  TurnScale?: ZType | string;
  abOpponents?: ZType;
  OpponentLevel?: ZType;
  DevelopmentLevel?: ZType;
  abTribes?: ZType;
  TribeLevel: ZType | string;
  DisableOptions?: ZType | string;
  abVictoryEnabled?: ZType;
  abOptionEnabled?: ZType;
  abOptionValid?: AbOptionValid;
  azParametersInvalid?: AzParametersInvalid;
}
export interface AzParametersInvalid {
  zValue?: string[];
}
export interface AbOptionValid {
  Pair?: Pair[];
}
export interface Pair {
  zIndex: string;
  bValue: string;
}
export interface AzAchievements {
  zValue?: string[] | string;
}
export interface ZType {
}

}
