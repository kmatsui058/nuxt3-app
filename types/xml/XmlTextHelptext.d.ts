
declare namespace XmlTextHelptext {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  English: ZType | string;
  comment?: string;
}
export interface ZType {
}

}
