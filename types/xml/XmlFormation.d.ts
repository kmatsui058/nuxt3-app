
declare namespace XmlFormation {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  UnitAsset?: ZType | string;
  UnitPortraitAsset?: ZType | string;
  UnitProjectileAsset?: ZType | string;
  UnitProjectileImpactAudio?: ZType | string;
  UnitProjectileImpactAudioEarly?: ZType | string;
  eGender?: ZType | string;
  bLand: ZType | string;
  bWater?: ZType | string;
  bHeadControl?: ZType | string;
  lf3FrontRow: Lf3FrontRow;
  lf3BackRow?: Lf3BackRow;
}
export interface Lf3BackRow {
  f3Value?: string[];
}
export interface Lf3FrontRow {
  f3Value?: string[] | string;
}
export interface ZType {
}

}
