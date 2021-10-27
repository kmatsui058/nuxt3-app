
declare namespace XmlCognomen {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  iLegitimacy?: ZType | string;
  iMinValue?: ZType | string;
  Achievement?: ZType | string;
  aiStatValue?: AiStatValue;
}
export interface AiStatValue {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
