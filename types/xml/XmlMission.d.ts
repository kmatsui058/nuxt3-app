
declare namespace XmlMission {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  NameTarget?: ZType | string;
  NameCharacter?: ZType | string;
  zIcon?: ZType | string;
  iXP?: ZType | string;
  iMissionTurns?: ZType | string;
  iMissionTurnsScaled?: ZType | string;
  bBlockDiplomacy?: ZType | string;
  bTestMission?: ZType | string;
  bVisibleCharacter?: ZType | string;
  bVisibleTarget?: ZType | string;
  bVisibleAlways?: ZType | string;
  bNoPopup?: ZType | string;
  bCharacterNoEvents?: ZType | string;
  bTargetNoEvents?: ZType | string;
  bCharacterUs?: ZType | string;
  bDisabled?: ZType;
  bEncyclopedia?: ZType | string;
  MissionRoot?: ZType | string;
  TechPrereq?: ZType | string;
  SubjectPlayerEnabled?: ZType | string;
  SubjectCharacter?: ZType | string;
  SubjectCharacterEnabled?: ZType | string;
  SubjectCharacterDisabled?: ZType | string;
  SubjectTarget?: ZType | string;
  SubjectTargetStart?: ZType | string;
  SubjectTargetEnabled?: ZType | string;
  SubjectTargetDisabled?: ZType | string;
  SubjectRelationStart?: ZType | string;
  SubjectRelationEnabled?: ZType | string;
  SubjectRelationDisabled?: ZType;
  aiResultDie: AiResultDie;
  aiYieldCost?: AiResultDie;
  aiYieldCostOpinion?: AiYieldCostOpinion;
}
export interface AiYieldCostOpinion {
  Pair?: Pair;
}
export interface AiResultDie {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
