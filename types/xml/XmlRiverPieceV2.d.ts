
declare namespace XmlRiverPieceV2 {
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
  bLandStart?: ZType | string;
  bLakeStart?: ZType | string;
  bCoastEnd?: ZType | string;
  bLakeEnd?: ZType | string;
}
export interface ZType {
}

}
