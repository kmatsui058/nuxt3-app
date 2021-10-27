
declare namespace XmlGlobalsInt {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  iValue: ZType | string;
}
export interface ZType {
}

}
