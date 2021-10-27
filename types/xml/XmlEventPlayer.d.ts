
declare namespace XmlEventPlayer {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  iDie: ZType | string;
  Bonus: ZType | string;
}
export interface ZType {
}

}
