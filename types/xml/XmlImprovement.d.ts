
declare namespace XmlImprovement {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Hint?: ZType | string;
  Class?: ZType | string;
  AssetVariation: ZType | string;
  AssetConstruction?: ZType | string;
  WorkerAnimation?: ZType | string;
  zIconName: ZType | string;
  iBuildTurns?: ZType | string;
  iBuildCost?: ZType | string;
  iDevelopTurns?: ZType | string;
  iDevelopRand?: ZType | string;
  iPillageTurns?: ZType | string;
  iRevealChange?: ZType | string;
  iVisionChange?: ZType | string;
  iDefenseModifier?: ZType | string;
  iFreshWaterModifier?: ZType;
  iRiverModifier?: ZType;
  iSpecialistCost?: ZType | string;
  iVP?: ZType | string;
  iMaxCityCount?: ZType | string;
  iMaxFamilyCount?: ZType | string;
  iMaxPlayerCount?: ZType | string;
  iPrereqLaws?: ZType | string;
  iCitySiteUnits?: ZType | string;
  iDefendUnits?: ZType | string;
  iUnitTurns?: ZType | string;
  iUnitHeal?: ZType | string;
  iLegitimacy?: ZType | string;
  iOpinionReligion?: ZType | string;
  bBuild?: ZType | string;
  bHolyCity?: ZType | string;
  bTerritoryOnly?: ZType | string;
  bUrban?: ZType | string;
  bRequiresUrban?: ZType | string;
  bSpreadsBorders?: ZType | string;
  bNoAdjacentReligion?: ZType | string;
  bNoVegetation?: ZType | string;
  bFreshWaterSource?: ZType;
  bFreshWaterValid?: ZType | string;
  bRiverValid?: ZType | string;
  bRotateTowardsLand?: ZType | string;
  bRotateToRiverEdge?: ZType | string;
  bCoastLandValid?: ZType;
  bCoastWaterValid?: ZType | string;
  bCityValid?: ZType | string;
  bHolyCityValid?: ZType | string;
  bPermanent?: ZType | string;
  bWonder?: ZType | string;
  bPause?: ZType | string;
  bHeal?: ZType | string;
  bBonus?: ZType | string;
  bCitySite?: ZType | string;
  bTribe?: ZType | string;
  bRemoveBorder?: ZType | string;
  bRemoveBonus?: ZType | string;
  bNoAnalytics?: ZType | string;
  bText?: ZType | string;
  Achievement?: ZType | string;
  NationPrereq?: ZType | string;
  ReligionPrereq?: ZType | string;
  ReligionSpread?: ZType | string;
  CulturePrereq?: ZType | string;
  AdjacentImprovementPrereq?: ZType | string;
  AdjacentImprovementClassPrereq?: ZType | string;
  ImprovementPrereq?: ZType | string;
  UpgradeImprovement?: ZType | string;
  DevelopImprovement?: ZType | string;
  BonusImprovement?: ZType | string;
  EffectCityPrereq?: ZType;
  EffectCity?: ZType | string;
  EffectPlayer?: ZType | string;
  UnitDefend?: ZType | string;
  Bonus?: ZType | string;
  BonusCities?: ZType | string;
  aiYieldCost?: AiYieldCost;
  aiYieldOutput?: AiYieldCost;
  aiWonderYieldOutput?: AiWonderYieldOutput;
  aiAdjacentResourceYieldOutput?: AiWonderYieldOutput;
  aiTradeNetworkYieldOutput?: AiWonderYieldOutput;
  aiYieldPillage?: AiWonderYieldOutput;
  aiYieldFreshWaterModifier?: AiWonderYieldOutput;
  aiYieldRiverModifier?: AiWonderYieldOutput;
  aiAdjacentImprovementModifier?: AiWonderYieldOutput;
  aiAdjacentImprovementClassModifier?: AiWonderYieldOutput;
  aiUnitTraitHeal?: ZType;
  aiUnitTraitXP?: AiWonderYieldOutput;
  aiUnitDie?: AiWonderYieldOutput;
  aiBonusDie?: AiBonusDie;
  abTerrainValid?: AbTerrainValid;
  abTerrainInvalid?: AbTerrainInvalid;
  abHeightValid?: AbTerrainInvalid;
  abHeightInvalid?: AbTerrainInvalid;
  abHeightAdjacentValid?: AbTerrainValid;
  abVegetationValid?: AbTerrainInvalid;
  abNoBaseOutput?: AbTerrainValid;
  aeResourceAssetVariation?: AeResourceAssetVariation;
  aeTribeUnitDefend?: AeTribeUnitDefend;
  aaiAdjacentImprovementClassYield?: AaiAdjacentImprovementClassYield;
  aaiTerrainYieldModifier?: AaiTerrainYieldModifier;
  aaiHeightYieldModifier?: AaiAdjacentImprovementClassYield;
  aaiAdjacentHeightYieldModifier?: AaiTerrainYieldModifier;
  aaiTribeUnitDie?: AaiTribeUnitDie;
  zAudioLoopWhenBuilding?: ZType | string;
  zAudioSwitchName?: ZType | string;
}
export interface AaiTribeUnitDie {
  Pair?: Pair5[];
}
export interface Pair5 {
  zIndex: string;
  SubPair: SubPair[];
}
export interface AaiTerrainYieldModifier {
  Pair?: Pair4[] | Pair4;
}
export interface AaiAdjacentImprovementClassYield {
  Pair?: Pair4;
}
export interface Pair4 {
  zIndex: string;
  SubPair: SubPair;
}
export interface SubPair {
  zSubIndex: string;
  iValue: string;
}
export interface AeTribeUnitDefend {
  Pair?: Pair3[];
}
export interface AeResourceAssetVariation {
  Pair?: Pair3[] | Pair3;
}
export interface Pair3 {
  zIndex: string;
  zValue: string;
}
export interface AbTerrainInvalid {
  Pair?: Pair2;
}
export interface AbTerrainValid {
  Pair?: Pair2[];
}
export interface Pair2 {
  zIndex: string;
  bValue: string;
}
export interface AiBonusDie {
  Pair?: Pair[];
}
export interface AiWonderYieldOutput {
  Pair?: Pair;
}
export interface AiYieldCost {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
