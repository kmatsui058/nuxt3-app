
declare namespace XmlBarbarianLevel {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zName: ZType | string;
  iScenarioTime?: ZType | string;
  iScenarioTimePercent?: ZType | string;
  iEmptySites?: ZType | string;
  iBarbSites?: ZType | string;
  iImprovementUpgradeModifier?: ZType | string;
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
  iBarbarianFatigue?: ZType | string;
  iWarOfferTurn?: ZType | string;
  iAIModifier?: ZType | string;
  bPassive?: ZType | string;
  bNoBarbs?: ZType | string;
}
export interface ZType {
}

}
