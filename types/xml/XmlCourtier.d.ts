
declare namespace XmlCourtier {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  zIconName: ZType | string;
  aiRatingBase: AiRatingBase;
  aiRatingRand: AiRatingBase;
  aiAdjectiveDie: AiAdjectiveDie;
  aiArchetypeDie: AiAdjectiveDie;
  azNicknames: AzNicknames;
}
export interface AzNicknames {
  zValue?: string;
}
export interface AiAdjectiveDie {
  Pair?: Pair[];
}
export interface AiRatingBase {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
