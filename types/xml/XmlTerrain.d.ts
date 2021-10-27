
declare namespace XmlTerrain {
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
  iMovementCost: ZType | string;
  iBorderValue?: ZType | string;
  bWater?: ZType | string;
  bUrban?: ZType | string;
  bNoVegetation?: ZType | string;
  bCitySite?: ZType | string;
  bStart?: ZType | string;
  bRoadValid?: ZType | string;
  DefaultHeight: ZType | string;
  aiDefendMeleeEffectUnit?: ZType;
  aeHeightAsset: AeHeightAsset;
  AssetVariation?: ZType | string;
}
export interface AeHeightAsset {
  Pair?: Pair[];
}
export interface Pair {
  zIndex: string;
  zValue: string;
}
export interface ZType {
}

}
