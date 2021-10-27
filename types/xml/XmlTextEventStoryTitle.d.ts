
declare namespace XmlTextEventStoryTitle {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  English?: ZType | string;
  beginGroup?: string;
}
export interface ZType {
}

}
