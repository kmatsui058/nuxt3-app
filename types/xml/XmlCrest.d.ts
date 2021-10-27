
declare namespace XmlCrest {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zSpriteName: ZType | string;
}
export interface ZType {
}

}
