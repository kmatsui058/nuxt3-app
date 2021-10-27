
declare namespace XmlTribeLevel {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  iEmptySites?: ZType | string;
  iBarbSites?: ZType | string;
  iImprovementDevelopModifier?: ZType | string;
  iDefendUnits?: ZType | string;
  iMaxUnitsRange?: ZType | string;
  iTurnUnitModifier?: ZType | string;
  iTurnCityProb?: ZType | string;
  iUnitUpgrade?: ZType | string;
  iTribeConvertTurn?: ZType | string;
  iTribeConvertProb?: ZType | string;
  iRaidStartTurn?: ZType | string;
  iRaidProbTile?: ZType | string;
  iRaidProbUnit?: ZType | string;
  iRaidRange?: ZType | string;
  iFatigue?: ZType | string;
  iActiveHeal?: ZType | string;
  iWarOfferTurn?: ZType | string;
  iWarModifier?: ZType | string;
  iAIModifier?: ZType | string;
  bNoTribe?: ZType | string;
}
export interface ZType {
}

}
