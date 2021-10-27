
declare namespace XmlCharacterAgeGroup {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  iStartAge?: ZType | string;
  iEndAge?: ZType | string;
}
export interface ZType {
}

}
