
declare namespace XmlTutorial {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zVideoAsset?: ZVideoAsset | string;
  zUnit?: ZType | string;
  zLink?: ZType;
  zHelpText: ZType | string;
}
export interface ZVideoAsset {
  comment: string;
}
export interface ZType {
}

}
