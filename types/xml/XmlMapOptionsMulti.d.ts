
declare namespace XmlMapOptionsMulti {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Choices: Choices;
  Default: ZType | string;
  bSinglePlayerValid?: ZType | string;
  bMultiPlayerValid?: ZType | string;
}
export interface Choices {
  zValue?: string[];
}
export interface ZType {
}

}
