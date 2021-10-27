
declare namespace XmlEventLevel {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Help: ZType | string;
  iPercent: ZType | string;
  iTurns: ZType | string;
}
export interface ZType {
}

}
