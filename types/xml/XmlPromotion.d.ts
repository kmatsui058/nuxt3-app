
declare namespace XmlPromotion {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  PromotionPrereq?: ZType | string;
  NationPrereq?: ZType;
  EffectUnit: ZType | string;
  bPriority?: ZType | string;
  bUpgrade?: ZType | string;
}
export interface ZType {
}

}
