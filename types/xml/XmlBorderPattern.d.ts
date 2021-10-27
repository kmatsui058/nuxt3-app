
declare namespace XmlBorderPattern {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  TextureAsset: ZType | string;
  f3Position: ZType | string;
  f3Rotation: ZType | string;
  f3Scale: ZType | string;
  fSpacing: ZType | string;
}
export interface ZType {
}

}
