
declare namespace XmlMarkup {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zTag: ZType | string;
  zOpening: ZType | string;
  zClosing: ZType | string;
}
export interface ZType {
}

}
