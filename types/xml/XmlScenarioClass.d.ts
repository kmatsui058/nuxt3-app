
declare namespace XmlScenarioClass {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zIcon: ZType | string;
}
export interface ZType {
}

}
