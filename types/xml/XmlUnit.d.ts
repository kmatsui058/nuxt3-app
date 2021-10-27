
declare namespace XmlUnit {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zIconName: ZType | string;
  zPortraitName: ZType | string;
  zBackgroundName: ZType | string;
  zAudioSelectionType: ZType | string;
  zAudioMovementType: ZType | string;
  zAudioAttackType: ZType | string;
  zAudioDamagedByProjectileType: ZType | string;
  azGenderIconName?: ZType;
  azGenderPortraitName?: AzGenderPortraitName;
  azBarbarianPortraitName?: AzBarbarianPortraitName;
  aeFormations: AeFormations;
  Achievement?: ZType | string;
  UnitCycle: ZType | string;
  TechPrereq?: ZType | string;
  NationPrereq?: ZType | string;
  CulturePrereq?: ZType | string;
  EffectCityPrereq?: ZType | string;
  ImprovementPrereq?: ZType | string;
  ImprovementObsolete?: ZType | string;
  RequiresReligion?: ZType | string;
  SpreadReligion?: ZType | string;
  BuildReligion?: ZType | string;
  ProductionType?: ZType | string;
  iMovement: ZType | string;
  iVision: ZType | string;
  iReveal?: ZType | string;
  iFatigue: ZType | string;
  iWaterControl?: ZType | string;
  iStrength: ZType | string;
  iRangeMin?: ZType | string;
  iRangeMax?: ZType | string;
  iHPMax: ZType | string;
  iProduction?: ZType | string;
  iProductionPer?: ZType | string;
  iPopulationCost?: ZType;
  iUpgradeCost?: ZType | string;
  iStartFirst?: ZType | string;
  fAttackDuration?: ZType | string;
  fAnimNormalMoveDuration?: ZType | string;
  fAnimNormalMoveSpeed?: ZType | string;
  fAnimIntermediateMoveDuration?: ZType | string;
  fAnimIntermediateMoveSpeed?: ZType | string;
  fAnimFastMoveDuration?: ZType | string;
  fAnimFastMoveSpeed?: ZType | string;
  bWater?: ZType | string;
  bAmphibious?: ZType | string;
  bTerritoryWater?: ZType | string;
  bMelee?: ZType | string;
  bRangeFlat?: ZType | string;
  bOutsideOpinion?: ZType | string;
  bZOC?: ZType | string;
  bIgnoreZOC?: ZType | string;
  bBlocks?: ZType | string;
  bFortify?: ZType | string;
  bTestudo?: ZType | string;
  bPillage?: ZType | string;
  bUnlimber?: ZType | string;
  bAnchor?: ZType | string;
  bFound?: ZType | string;
  bHarvest?: ZType | string;
  bBuild?: ZType | string;
  bAgent?: ZType | string;
  bCaravan?: ZType | string;
  bTheology?: ZType | string;
  bReligious?: ZType | string;
  bPromote?: ZType | string;
  bGeneral?: ZType | string;
  bBarbCity?: ZType | string;
  bBarbRaid?: ZType | string;
  bNoHurry?: ZType;
  aiStartDifficulty?: AiStartDifficulty;
  aiUnitTraitModifier?: AiUnitTraitModifier;
  aiUnitTraitModifierAttack?: AiUnitTraitModifier;
  aiUnitTraitModifierDefense?: AiUnitTraitModifier;
  aiUnitTraitModifierMelee?: AiUnitTraitModifier;
  aiYieldCost?: AiStartDifficulty;
  aiYieldConsumption?: AiStartDifficulty;
  aiAttackValue?: AiStartDifficulty;
  aiAttackPercent?: AiStartDifficulty;
  aeObsoleteTech?: AeObsoleteTech;
  aeUpgradeUnit?: AeObsoleteTech;
  aeTribeUpgradeUnit?: AzBarbarianPortraitName;
  aeUnitTrait: AeObsoleteTech;
  aeEffectUnit?: AeObsoleteTech;
  aeRemoveVegetation?: AeFormations;
  aaiImprovementYieldRate?: AaiImprovementYieldRate;
}
export interface AaiImprovementYieldRate {
  Pair?: Pair3[];
}
export interface Pair3 {
  zIndex: string;
  SubPair: SubPair;
}
export interface SubPair {
  zSubIndex: string;
  iValue: string;
}
export interface AeObsoleteTech {
  zValue?: string[] | string;
}
export interface AiUnitTraitModifier {
  Pair?: Pair2;
}
export interface AiStartDifficulty {
  Pair?: Pair2[] | Pair2;
}
export interface Pair2 {
  zIndex: string;
  iValue: string;
}
export interface AeFormations {
  zValue?: string[];
}
export interface AzBarbarianPortraitName {
  Pair?: Pair[] | Pair;
}
export interface AzGenderPortraitName {
  Pair?: Pair[];
}
export interface Pair {
  zIndex: string;
  zValue: string;
}
export interface ZType {
}

}
