
declare namespace XmlFont {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zFontAsset: ZType | string;
  zFontMaterialAsset: ZType | string;
}
export interface ZType {
}

}
