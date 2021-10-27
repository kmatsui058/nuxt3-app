
declare namespace XmlPlayerColor {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  AssetColor: ZType | string;
  TextColor: ZType | string;
  BorderColor: ZType | string;
  CrestColor: ZType | string;
}
export interface ZType {
}

}
