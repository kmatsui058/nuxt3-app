
declare namespace XmlOpinionCharacter {
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
  iBirthModifier?: ZType | string;
  iMissionCostModifier?: ZType | string;
  iRateModifier?: ZType | string;
  iStrengthModifier?: ZType | string;
}
export interface ZType {
}

}
