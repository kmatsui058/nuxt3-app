
declare namespace XmlTerrainStamp {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  AssetVariation: ZType | string;
  Height: ZType | string;
  Vegetation?: ZType;
  aeFootprint: AeFootprint;
}
export interface AeFootprint {
  zValue?: string[];
}
export interface ZType {
}

}
