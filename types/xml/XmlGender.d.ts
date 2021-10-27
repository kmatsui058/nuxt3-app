
declare namespace XmlGender {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  bMasculine: ZType | string;
  iMaxFertile: ZType | string;
  iMaxSpouseAgeDifference: ZType | string;
  iMarriageDelayTurns: ZType | string;
  LeaderTitle: ZType | string;
}
export interface ZType {
}

}
