
declare namespace XmlCharacterPortrait {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Gender: ZType | string;
  azAgeGroupSpriteNames: AzAgeGroupSpriteNames;
}
export interface AzAgeGroupSpriteNames {
  Pair?: Pair[];
}
export interface Pair {
  zIndex: string;
  zValue: string;
}
export interface ZType {
}

}
