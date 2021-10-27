
declare namespace XmlSpecialistClass {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  bUrban?: ZType | string;
  aeResourceCityEffect?: AeResourceCityEffect;
}
export interface AeResourceCityEffect {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  zValue: string;
}
export interface ZType {
}

}
