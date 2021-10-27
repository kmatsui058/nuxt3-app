
declare namespace XmlDifficultyMode {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Difficulty?: ZType | string;
  Development?: ZType | string;
  OpponentLevel?: ZType | string;
  TribeLevel?: ZType | string;
  Advantage?: ZType | string;
}
export interface ZType {
}

}
