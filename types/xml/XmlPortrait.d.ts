
declare namespace XmlPortrait {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  bCommunityContribution?: ZType | string;
  Source?: ZType | string;
}
export interface ZType {
}

}
