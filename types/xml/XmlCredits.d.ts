
declare namespace XmlCredits {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  zDescription?: ZType | string;
  zPortrait?: ZType | string;
  Section?: ZType | string;
}
export interface ZType {
}

}
