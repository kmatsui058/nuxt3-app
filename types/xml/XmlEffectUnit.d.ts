
declare namespace XmlEffectUnit {
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
  Class?: ZType | string;
  SourceUnitTrait?: ZType | string;
  iClassNum?: ZType | string;
  iStrengthModifier?: ZType | string;
  iAttackModifier?: ZType | string;
  iDefenseModifier?: ZType | string;
  iCriticalChance?: ZType | string;
  iEnlistOnKillChance?: ZType | string;
  iVisionExtra?: ZType | string;
  iMovementExtra?: ZType | string;
  iFatigueExtra?: ZType | string;
  iRangeExtra?: ZType | string;
  iWaterControlExtra?: ZType | string;
  iPillageYieldModifier?: ZType | string;
  iRiverAttackModifier?: ZType | string;
  iWaterLandAttackModifier?: ZType | string;
  iHomeModifier?: ZType | string;
  iSettlementAttackModifier?: ZType | string;
  iUrbanAttackModifier?: ZType | string;
  iUrbanDefenseModifier?: ZType | string;
  iDamagedUsModifier?: ZType | string;
  iDamagedThemModifier?: ZType | string;
  iGeneralModifier?: ZType | string;
  iFlankingAttackModifier?: ZType | string;
  iAdjacentSameModifier?: ZType | string;
  iAdjacentSameDefenseModifier?: ZType | string;
  iHealExtra?: ZType | string;
  iHealAlways?: ZType | string;
  bSkipIcon?: ZType | string;
  bMultiTeams?: ZType | string;
  bMeleeCounter?: ZType | string;
  bRout?: ZType | string;
  bPush?: ZType | string;
  bPushWater?: ZType | string;
  bStun?: ZType | string;
  bStunWater?: ZType | string;
  bLastStand?: ZType | string;
  bIgnoresDistance?: ZType | string;
  bCriticalImmune?: ZType | string;
  bHealNeutral?: ZType | string;
  bLaunchOffensive?: ZType | string;
  bNoRoadCooldown?: ZType | string;
  aiAttackValue?: AiAttackValue;
  aiAttackPercent?: AiAttackValue;
  aiTerrainFromModifier?: AiAttackValue;
  aiHeightFromModifier?: AiAttackValue;
  aiVegetationFromModifier?: AiAttackValue;
  aiUnitTraitModifier?: AiUnitTraitModifier;
  aiUnitTraitModifierAttack?: AiAttackValue;
  aiUnitTraitModifierDefense?: AiAttackValue;
  aiUnitTraitModifierMelee?: AiAttackValue;
  aiMilitaryKillYield?: AiAttackValue;
  abHideVegetation?: AbHideVegetation;
  abUnitTraitValid?: AbUnitTraitValid;
  abUnitTraitInvalid?: AbHideVegetation;
  aeUnitTraitZOC?: AeUnitTraitZOC;
}
export interface AeUnitTraitZOC {
  zValue?: string;
}
export interface AbUnitTraitValid {
  Pair?: Pair2 | Pair2[];
}
export interface AbHideVegetation {
  Pair?: Pair2;
}
export interface Pair2 {
  zIndex: string;
  bValue: string;
}
export interface AiUnitTraitModifier {
  Pair?: Pair[] | Pair;
}
export interface AiAttackValue {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
