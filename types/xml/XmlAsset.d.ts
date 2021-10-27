
declare namespace XmlAsset {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zAsset: ZType | string;
}
export interface ZType {
}

}
