
declare namespace XmlYield {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Color: ZType | string;
  Help: ZType | string;
  Encyclopedia?: ZType | string;
  zIconName: ZType | string;
  iMinimum?: ZType | string;
  iLeaderGovernor?: ZType | string;
  iForeignPopulation?: ZType | string;
  iPerMissingFamily?: ZType | string;
  iPerUrbanTile?: ZType | string;
  iPerEmptyImprovement?: ZType | string;
  iPerConnectedForeign?: ZType | string;
  iPerLivingRoyal?: ZType | string;
  iPerLivingCourtier?: ZType | string;
  iPerCapitalDist?: ZType | string;
  iPerLegitimacy?: ZType | string;
  iHurryModifier?: ZType | string;
  iDiscontentModifier?: ZType | string;
  iPrice?: ZType | string;
  iMinPrice?: ZType | string;
  iMaxPrice?: ZType | string;
  iDemand?: ZType | string;
  iVolitility?: ZType | string;
  iGeneralCost?: ZType | string;
  iGovernorCost?: ZType | string;
  iOffensiveCost?: ZType | string;
  iHireMercenaryCost?: ZType | string;
  iDowryYieldBase?: ZType | string;
  iDowryYieldPer?: ZType | string;
  iUIPosition?: ZType | string;
  bGlobal?: ZType | string;
  bStockpile?: ZType | string;
  bNoDamage?: ZType | string;
  bNoAssimilate?: ZType | string;
  bWarning?: ZType | string;
  bNegative?: ZType | string;
  bFloor?: ZType | string;
  bShortfall?: ZType | string;
  bCanSell?: ZType | string;
  bCanBuy?: ZType | string;
  bCanGift?: ZType | string;
  bSellDebt?: ZType | string;
  AddToYield?: ZType | string;
  aiOpinionCharacterRate?: AiOpinionCharacterRate;
}
export interface AiOpinionCharacterRate {
  Pair?: Pair[];
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
