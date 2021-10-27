
declare namespace XmlColor {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  ColorClass: ZType | string;
  zHexValue: ZType | string;
}
export interface ZType {
}

}
