
declare namespace XmlFamily {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  NameFemale: ZType | string;
  iColorIndex: ZType | string;
  Nation: ZType | string;
  FamilyClass: ZType | string;
}
export interface ZType {
}

}
