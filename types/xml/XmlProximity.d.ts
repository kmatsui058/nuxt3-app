
declare namespace XmlProximity {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  iDistance?: ZType | string;
  iTruceModifier?: ZType | string;
  iWarModifier?: ZType | string;
  iPlayerOpinion?: ZType | string;
  bDeclareWar?: ZType | string;
  bNoTribeWar?: ZType | string;
  bNoTribeOfferHuman?: ZType | string;
}
export interface ZType {
}

}
