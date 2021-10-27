
declare namespace XmlBonus {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name?: ZType | Name2 | string;
  zIcon?: ZType | Name2 | string;
  CharacterName?: CharacterName;
  CityName?: CharacterName;
  UnitName?: CharacterName;
  Victory?: CharacterName;
  Achievement?: ZType | Name2 | string;
  MemoryPlayer?: ZType | Name2 | string;
  MemoryPlayerOther?: ZType | Name2 | string;
  ForgetPlayer?: CharacterName;
  MemoryAllPlayers?: ZType | Name2 | string;
  MemoryTribe?: ZType | Name2 | string;
  ForgetTribe?: CharacterName;
  MemoryAllTribes?: ZType | Name2 | string;
  MemoryReligion?: ZType | Name2 | string;
  ForgetReligion?: CharacterName;
  MemoryFamily?: ZType | Name2 | string;
  ForgetFamily?: CharacterName;
  MemoryAllFamilies?: ZType | Name2 | string;
  MemoryCharacter?: ZType | Name2 | string;
  ForgetCharacter?: CharacterName;
  AddLeaderRelationship?: ZType | Name2 | string;
  RemoveLeaderRelationship?: ZType | Name2 | string;
  DiplomacyPlayerFrom?: ZType | Name2 | string;
  DiplomacyPlayerTo?: ZType | Name2 | string;
  DiplomacyTribe?: ZType | Name2 | string;
  MakeCourtier?: ZType | Name2 | string;
  StartLaw?: CharacterName;
  EndLaw?: CharacterName;
  FreeLaw?: CharacterName;
  FoundReligion?: CharacterName;
  FreeTheology?: CharacterName;
  Quest?: CharacterName;
  QuestForce?: CharacterName;
  Ambition?: ZType | Name2 | string;
  FinishGoal?: CharacterName;
  FailGoal?: CharacterName;
  Mission?: CharacterName;
  Council?: ZType | Name2 | string;
  SetArchetype?: ZType | Name2 | string;
  SetName?: CharacterName;
  SetVegetation?: CharacterName;
  SetResource?: CharacterName;
  AddResource?: ZType | Name2 | string;
  SetImprovement?: CharacterName;
  AddImprovement?: ZType | Name2 | string;
  SetSpecialist?: CharacterName;
  iSpreadUnits?: CharacterName;
  iRevealRange?: ZType | Name2 | string;
  iCitizens?: ZType | Name2 | string;
  iBorderGrowth?: ZType | Name2 | string;
  iCultureLevels?: ZType | Name2 | string;
  iDiscontentLevels?: ZType | Name2 | string;
  iRebelUnits?: ZType | Name2 | string;
  iDestroyImprovements?: CharacterName;
  iHPCity?: ZType | Name2 | string;
  iHPUnit?: ZType | Name2 | string;
  iXPUnit?: ZType | Name2 | string;
  iXPCharacter?: ZType | Name2 | string;
  iLegitimacy?: ZType | Name2 | string;
  iTradeTurns?: CharacterName;
  iTributeTurns?: CharacterName;
  iContactSubject?: Name2;
  iAllianceSubject?: CharacterName;
  iMarrySubject?: ZType | Name2 | string;
  iPolyMarrySubject?: CharacterName;
  iDivorcedBySubject?: ZType | Name2 | string;
  iBirthWithSubject?: CharacterName;
  iAdoptedBySubject?: ZType | Name2 | string;
  iConvertedBySubject?: CharacterName;
  iGovernorOfSubject?: CharacterName;
  iGeneralOfSubject?: CharacterName;
  iJoinSubject?: CharacterName;
  iJoinReverse?: ZType | Name2 | string;
  iSeizeThroneSubject?: CharacterName;
  iSpreadToSubject?: CharacterName;
  iRemoveFromSubject?: CharacterName;
  iConvertReligionSubject?: ZType | Name2 | string;
  iHeadReligionSubject?: CharacterName;
  iHeadFamilySubject?: CharacterName;
  iAcquireTechSubject?: CharacterName;
  iTradeResourceSubject?: CharacterName;
  iAgentCitySubject?: CharacterName;
  iTradeCitySubject?: CharacterName;
  iConvertUnitSubject?: CharacterName;
  iMissionSubject?: CharacterName;
  iMissionReverse?: CharacterName;
  iAmbitionFamilySubject?: CharacterName;
  bMissionFree?: CharacterName;
  bMercenaryUnit?: CharacterName;
  bRevealTerritory?: ZType | Name2 | string;
  bHolyCityAgents?: ZType | Name2 | string;
  bCancelTrade?: ZType | Name2 | string;
  bTeamAlliance?: ZType | Name2 | string;
  bTeamAllianceEnd?: ZType | Name2 | string;
  bTribeAlliance?: ZType | Name2 | string;
  bTribeAllianceEnd?: ZType | Name2 | string;
  bTribeInvade?: ZType | Name2 | string;
  bAdoptReligion?: ZType | Name2 | string;
  bStateReligion?: ZType | Name2 | string;
  bStateReligionEnd?: ZType | Name2 | string;
  bFoundReligion?: CharacterName;
  bFoundReligionCity?: ZType | Name2 | string;
  bStartLaw?: ZType | Name2 | string;
  bFreeLaw?: ZType | Name2 | string;
  bFreeTheology?: ZType | Name2 | string;
  bRandomTech?: ZType | Name2 | string;
  bDistantRaid?: CharacterName;
  bConvertStateReligion?: ZType | Name2 | string;
  bNoCourtier?: ZType | Name2 | string;
  bLeaveCouncil?: ZType | Name2 | string;
  bReleaseGeneral?: CharacterName;
  bReleaseGovernor?: CharacterName;
  bReleaseAgent?: ZType | Name2 | string;
  bChangeSuccession?: CharacterName;
  bAbdicate?: ZType | Name2 | string;
  bChosenHeir?: ZType | Name2 | string;
  bKillCharacter?: ZType | Name2 | string;
  bKillCharacterSafe?: Name2;
  bHaveBastard?: ZType | Name2 | string;
  bKillUnit?: ZType | Name2 | string;
  bRemoveVegetation?: CharacterName;
  bClearImprovement?: CharacterName;
  bPillageImprovement?: CharacterName;
  bTribeRaid?: ZType | Name2 | string;
  bRazeCity?: CharacterName;
  bRazeCityNoCitySite?: CharacterName;
  bDefeat?: CharacterName;
  aiCityYields?: AiCityYields;
  aiGlobalYields?: AiCityYields;
  aiGlobalYieldsBase?: AiGlobalYieldsBase;
  aiGlobalYieldsPer?: AiGlobalYieldsBase;
  aiOtherYieldsBase?: AiGlobalYieldsBase;
  aiOtherYieldsPer?: AiGlobalYieldsBase;
  aiYieldsSendBase?: AiGlobalYieldsBase;
  aiYieldsSendPerUs?: AiGlobalYieldsBase;
  aiYieldsSendPerThem?: CharacterName;
  aiYieldsTradeBase?: CharacterName;
  aiYieldsTradePerUs?: CharacterName;
  aiYieldsTradePerThem?: CharacterName;
  aiYieldsTributeBase?: AiGlobalYieldsBase;
  aiYieldsTributePerUs?: AiGlobalYieldsBase;
  aiYieldsTributePerThem?: AiGlobalYieldsBase;
  aiUnits?: AiGlobalYieldsBase;
  aiTribeUnits?: CharacterName;
  aiBonusUnits?: AiGlobalYieldsBase;
  aiRebelUnits?: CharacterName;
  aiLawOpinion?: CharacterName;
  aiRatings?: AiGlobalYieldsBase;
  aeAddProjects?: AeAddProjects;
  aeRemoveProjects?: CharacterName;
  aeAddSpecialistClasses?: CharacterName;
  aePromotions?: CharacterName;
  aeRandomTrait?: CharacterName;
  aeAddTraits?: AeAddTraits;
  aeRemoveTraits?: AeAddProjects;
  aeRandomLeaderRelationship?: CharacterName;
  aeTechs?: AeAddProjects;
  aeCultureProject?: CharacterName;
  aaiCultureYield?: AaiCultureYield;
  aeBonuses?: AeAddProjects;
  aeFamilyBonuses?: CharacterName;
  aeAllCityBonuses?: AeAddProjects;
  DiplomacySubjects?: CharacterName;
  AddRelationshipSubjects?: CharacterName;
  AddRelationshipReverse?: CharacterName;
  RemoveRelationshipSubjects?: CharacterName;
  RemoveRelationshipReverse?: CharacterName;
  AddCourtierForce?: AddCourtierForce;
  AddCourtier?: AddCourtierForce;
  AddCourtierOther?: CharacterName;
}
export interface AddCourtierForce {
  comment?: string;
  Pair?: Pair3;
}
export interface Pair3 {
  zIndex: string;
  zValue: ZType;
}
export interface AaiCultureYield {
  comment?: string;
  Pair?: Pair2[];
}
export interface Pair2 {
  zIndex: string;
  SubPair: SubPair;
}
export interface SubPair {
  zSubIndex: string;
  iValue: string;
}
export interface AeAddTraits {
  comment?: string;
  zValue?: string[] | string;
}
export interface AeAddProjects {
  comment?: string;
  zValue?: string;
}
export interface AiGlobalYieldsBase {
  comment?: string;
  Pair?: Pair;
}
export interface AiCityYields {
  comment?: string;
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface CharacterName {
  comment?: string;
}
export interface Name2 {
  comment: string;
}
export interface ZType {
}

}
