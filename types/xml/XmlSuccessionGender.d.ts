
declare namespace XmlSuccessionGender {
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
  bSingleGender?: ZType | string;
  Gender?: ZType | string;
}
export interface ZType {
}

}
