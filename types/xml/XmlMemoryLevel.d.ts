
declare namespace XmlMemoryLevel {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  iValue: ZType | string;
  iTurns?: ZType | string;
}
export interface ZType {
}

}
