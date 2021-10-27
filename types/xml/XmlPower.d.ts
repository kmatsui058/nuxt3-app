
declare namespace XmlPower {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  iPercent?: ZType | string;
  iTruceModifier?: ZType | string;
  iWarModifier?: ZType | string;
  bDeclareWar?: ZType | string;
  bNoTribePeace?: ZType | string;
  bNoTribeOfferHuman?: ZType | string;
}
export interface ZType {
}

}
