
declare namespace XmlUnitCycle {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  eUnitCycle: ZType | string;
}
export interface ZType {
}

}
