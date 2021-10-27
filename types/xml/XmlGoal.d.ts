
declare namespace XmlGoal {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  HelpText?: ZType;
  iAmbitionClass?: ZType | string;
  iMaxTurns?: ZType | string;
  iMinTier?: ZType | string;
  iMaxTier?: ZType | string;
  TechPrereq?: ZType | TechPrereq2 | string;
  TechObsolete?: ZType | TechPrereq2 | string;
  NationPrereq?: ZType | TechPrereq2 | string;
  StartLaw?: ZType | TechPrereq2 | string;
  EstablishTheology?: ZType | string;
  DiplomacyAll?: ZType | string;
  MinOpinionFamily?: ZType | string;
  FinishBonus?: ZType;
  iLegitimacy?: ZType;
  iCities?: ZType | string;
  iConnectedCities?: ZType | string;
  iCitizens?: ZType;
  iSpecialists?: ZType | string;
  iPopulation?: ZType | string;
  iLuxuries?: ZType | TechPrereq2 | string;
  iPlayerLuxuries?: ZType | TechPrereq2 | string;
  iTribeLuxuries?: ZType | TechPrereq2 | string;
  iFamilyLuxuries?: ZType | TechPrereq2 | string;
  iUrbanTiles?: ZType | TechPrereq2 | string;
  iUrbanImprovements?: ZType | TechPrereq2 | string;
  iWonders?: ZType | string;
  iLaws?: ZType | TechPrereq2 | string;
  iRevealLand?: ZType | string;
  iMilitaryUnits?: ZType | TechPrereq2 | string;
  iMaxLevelUnits?: IMaxLevelUnits;
  iGeneralCount?: ZType | string;
  iGovernorCount?: ZType | string;
  iAgentCount?: ZType;
  iImprovementClassThreshold?: ZType | TechPrereq2 | string;
  iUnitThreshold?: ZType | TechPrereq2 | string;
  iPlayerCapturedData?: ZType | TechPrereq2 | string;
  iTribeClearedData?: ZType | TechPrereq2 | string;
  iTribeSettledData?: IMaxLevelUnits;
  iPlayerKilledData?: ZType | TechPrereq2 | string;
  iTribeKilledData?: ZType | TechPrereq2 | string;
  bBlockComplete?: IMaxLevelUnits;
  bVictoryEligible?: ZType | string;
  bStateReligion?: ZType | string;
  bPlayerDead?: ZType;
  bTribeDead?: ZType;
  bScenario?: ZType;
  aiFamilyClassWeight?: AiFamilyClassWeight;
  aiDiplomacyCount?: AiDiplomacyCount;
  aiTribesKilledData?: AiTribesKilledData;
  aiYieldProducedData?: AiDiplomacyCount;
  aiYieldRate?: AiYieldRate;
  aiYieldCount?: AiTribesKilledData;
  aiResourceRevealed?: TechPrereq2;
  aiLuxuryCount?: IMaxLevelUnits;
  aiPlayerLuxuryCount?: IMaxLevelUnits;
  aiTribeLuxuryCount?: IMaxLevelUnits;
  aiFamilyLuxuryCount?: IMaxLevelUnits;
  aiImprovementCount?: AiImprovementCount;
  aiCityImprovementCount?: ZType;
  aiImprovementClassCount?: AiImprovementCount;
  aiCityImprovementClassCount?: ZType;
  aiCultureCount?: AiDiplomacyCount;
  aiCultureWonders?: AiDiplomacyCount;
  aiSpecialistCount?: AiTribesKilledData;
  aiCitySpecialistCount?: ZType;
  aiProjectCount?: AiImprovementCount;
  aiCityProjectCount?: ZType;
  aiEffectCityCount?: AiTribesKilledData;
  aiCityEffectCityCount?: ZType;
  aiUnitCount?: AiTribesKilledData;
  aiUnitTraitCount?: AiImprovementCount;
  aiUnitTraitMaxLevelCount?: AiYieldRate;
  aiStatCount?: IMaxLevelUnits;
  aiStatCountData?: AiTribesKilledData;
  aeTechsAcquired?: AeTechsAcquired;
  aeThresholdImprovementClasses?: AeTechsAcquired;
  aeThresholdUnits?: AeTechsAcquired;
}
export interface AeTechsAcquired {
  comment?: string;
  zValue?: string[];
}
export interface AiImprovementCount {
  comment?: string;
  Pair?: Pair[] | Pair;
}
export interface AiYieldRate {
  Pair?: Pair[];
}
export interface AiTribesKilledData {
  comment?: string;
  Pair?: Pair;
}
export interface AiDiplomacyCount {
  Pair?: Pair;
}
export interface AiFamilyClassWeight {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface IMaxLevelUnits {
  comment?: string;
}
export interface TechPrereq2 {
  comment: string;
}
export interface ZType {
}

}
