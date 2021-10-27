
declare namespace XmlBonusUnitClass {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  aiBonusUnit: AiBonusUnit;
}
export interface AiBonusUnit {
  Pair?: Pair[];
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
