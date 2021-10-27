
declare namespace XmlTurnStyle {
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
  iTimeModifier?: ZType | string;
  iCombatModifier: ZType | string;
  bSimultaneous?: ZType | string;
  bTeamSplit?: ZType | string;
  bNoCooldown?: ZType | string;
  bNoBuild?: ZType | string;
  bNoMilitary?: ZType | string;
}
export interface ZType {
}

}
