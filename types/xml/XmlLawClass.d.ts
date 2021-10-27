
declare namespace XmlLawClass {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  StartingLaw?: ZType | string;
  TechPrereq?: ZType | string;
  bSuccession?: ZType | string;
}
export interface ZType {
}

}
