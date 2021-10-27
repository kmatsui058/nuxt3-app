
declare namespace XmlOpinionReligion {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Range: ZType | string;
  Color: ZType | string;
  iThreshold?: ZType | string;
  aeReligionEffectCity?: AeReligionEffectCity;
}
export interface AeReligionEffectCity {
  Pair?: Pair[];
}
export interface Pair {
  zIndex: string;
  zValue: string;
}
export interface ZType {
}

}
