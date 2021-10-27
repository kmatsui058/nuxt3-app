
declare namespace XmlSpriteGroup {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  aeSpriteSheets: AeSpriteSheets;
}
export interface AeSpriteSheets {
  zValue?: string[] | string;
}
export interface ZType {
}

}
