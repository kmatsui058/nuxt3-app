
declare namespace XmlMemoryBarbarian {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zText: ZText | string;
  iValue?: ZText | string;
  iTurns?: ZText | string;
  bName?: ZText;
  beginGroup?: string;
}
export interface ZText {
  comment: string;
}
export interface ZType {
}

}
