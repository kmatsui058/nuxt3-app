
declare namespace XmlTextPromotion {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  English: ZType | string;
}
export interface ZType {
}

}
