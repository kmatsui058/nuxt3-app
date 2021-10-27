
declare namespace XmlTeamColor {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  TeamPlayerColor: ZType | string;
  bNation?: ZType | string;
  aePlayerColors: AePlayerColors;
  aeBorderPatterns: AePlayerColors;
}
export interface AePlayerColors {
  zValue?: string[] | string;
}
export interface ZType {
}

}
