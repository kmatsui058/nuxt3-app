
declare namespace XmlTech {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Advice: ZType | string;
  zIconName: ZType | string;
  Achievement?: ZType | string;
  BonusDiscover?: ZType | string;
  EffectPlayer?: ZType | string;
  iCost: ZType | string;
  iColumn?: ZType | string;
  iRow?: ZType | string;
  bHide?: ZType | string;
  bTrash?: ZType | string;
  bNoFree?: ZType | string;
  bReturn?: ZType | string;
  bValidAll?: ZType | string;
  abNationValid?: AbNationValid;
  abTechPrereq?: AbTechPrereq;
}
export interface AbTechPrereq {
  Pair?: Pair | Pair[];
}
export interface AbNationValid {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  bValue: string;
}
export interface ZType {
}

}
