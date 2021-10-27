
declare namespace XmlRiverPiece {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Asset: ZType | string;
  zDownstreamPattern?: ZType | string;
  bWaterStart?: ZType | string;
  bLandStart?: ZType | string;
}
export interface ZType {
}

}
