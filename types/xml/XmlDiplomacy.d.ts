
declare namespace XmlDiplomacy {
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
  zColor: ZType | string;
  zInactiveColor: ZType | string;
  iOpinion?: ZType | string;
  iOpinionEnemy?: ZType | string;
  iOpinionEthnicity?: ZType | string;
  iOpinionReligion?: ZType | string;
  iWarModifier?: ZType | string;
  bHostile?: ZType | string;
  bPeace?: ZType | string;
}
export interface ZType {
}

}
