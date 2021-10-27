
declare namespace XmlConcept {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zLink?: ZType | string;
  zHelpText?: ZType | string;
}
export interface ZType {
}

}
