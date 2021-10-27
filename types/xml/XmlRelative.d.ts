
declare namespace XmlRelative {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Text: ZType | string;
  bClose?: ZType | string;
}
export interface ZType {
}

}
