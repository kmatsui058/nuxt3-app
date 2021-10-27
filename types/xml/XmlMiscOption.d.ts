
declare namespace XmlMiscOption {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  eName: ZType | string;
  eDesc: ZType | string;
}
export interface ZType {
}

}
