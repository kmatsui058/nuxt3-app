
declare namespace XmlAssetVariation {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  aiValidRotations: ZType | string;
  SingleAsset?: ZType | string;
  bShowBuildings?: ZType | string;
  aiRandomAssets?: AiRandomAssets;
}
export interface AiRandomAssets {
  Pair?: Pair[];
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
