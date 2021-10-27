
declare namespace XmlMapClass {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zScriptType?: ZType;
  Help: ZType | string;
  bRandom: ZType | string;
  bHidden?: ZType;
  bIncludeRandom?: ZType;
}
export interface ZType {
}

}
