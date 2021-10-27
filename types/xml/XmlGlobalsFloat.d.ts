
declare namespace XmlGlobalsFloat {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  fValue: ZType | string;
}
export interface ZType {
}

}
