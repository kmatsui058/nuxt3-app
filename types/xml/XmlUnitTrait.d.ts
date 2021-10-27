
declare namespace XmlUnitTrait {
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
  iMinAITargetPercent?: ZType | string;
  iMaxAITargetPercent?: ZType | string;
  EffectUnit: ZType | string;
}
export interface ZType {
}

}
