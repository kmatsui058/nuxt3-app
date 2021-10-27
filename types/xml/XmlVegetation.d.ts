
declare namespace XmlVegetation {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  NameRemove: ZType | string;
  AssetVariation: ZType | string;
  zIconName: ZType | string;
  zRemoveIcon: ZType | string;
  zRemovalAudio?: ZType | string;
  iMovementCost?: ZType | string;
  iRemoveCost?: ZType | string;
  iRemoveStat: ZType | string;
  iBuildCost: ZType | string;
  iGrowthRoll?: ZType | string;
  iSpreadRoll?: ZType | string;
  iBorderValue?: ZType | string;
  iRevealChange?: ZType | string;
  VegetationRemove?: ZType | string;
  VegetationGrow?: ZType | string;
  VegetationSpread?: ZType | string;
  aiYieldRemove: AiYieldRemove;
  aiYieldBuild: AiYieldRemove;
  aiDefendEffectUnit?: AiYieldRemove;
  aeTerrainAssetVariation?: AeTerrainAssetVariation;
}
export interface AeTerrainAssetVariation {
  Triple?: Triple[] | Triple2;
}
export interface Triple2 {
  First: ZType;
  Second: string;
  Third: string;
}
export interface Triple {
  First: ZType | string;
  Second: ZType | string;
  Third: string;
}
export interface AiYieldRemove {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
