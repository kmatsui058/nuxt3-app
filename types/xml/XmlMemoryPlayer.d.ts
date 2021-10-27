
declare namespace XmlMemoryPlayer {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Text?: Text | string;
  MemoryLevel?: ZType | string;
  iValue?: Text | string;
  iTurns?: Text | string;
  bName?: Text | string;
  bVisible?: Text | string;
  beginGroup?: string;
}
export interface Text {
  comment: string;
}
export interface ZType {
}

}
