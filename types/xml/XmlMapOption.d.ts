
declare namespace XmlMapOption {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Description: ZType | string;
}
export interface ZType {
}

}
