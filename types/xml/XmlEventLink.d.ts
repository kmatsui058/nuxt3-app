
declare namespace XmlEventLink {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  iTurnLimit?: ZType | string;
  aeSubjectClasses?: AeSubjectClasses;
  beginGroup?: string;
}
export interface AeSubjectClasses {
  zValue?: string[] | string;
}
export interface ZType {
}

}
