
declare namespace XmlEventCity {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Text: ZType | string;
  iDie: ZType | string;
  Bonus: ZType | string;
}
export interface ZType {
}

}
