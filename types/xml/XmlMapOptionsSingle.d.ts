
declare namespace XmlMapOptionsSingle {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Description: ZType | string;
  bDefault?: ZType;
  bSinglePlayerValid?: ZType | string;
  bMultiPlayerValid?: ZType;
}
export interface ZType {
}

}
