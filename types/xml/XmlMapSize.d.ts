
declare namespace XmlMapSize {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  iWidth: ZType | string;
  iHeight: ZType | string;
  iWidthMPTwoTeams: ZType | string;
  iHeightMPTwoTeams: ZType | string;
  iMaxOpponents: ZType | string;
  iVP: ZType | string;
}
export interface ZType {
}

}
