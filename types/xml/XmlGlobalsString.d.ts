
declare namespace XmlGlobalsString {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zValue: ZType | string;
}
export interface ZType {
}

}
