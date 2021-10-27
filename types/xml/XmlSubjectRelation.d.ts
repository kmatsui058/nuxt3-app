
declare namespace XmlSubjectRelation {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name?: ZType | string;
  Relative?: ZType | string;
  RelationshipPrereq?: ZType | string;
  RelationshipInvalid?: ZType | string;
  MinDiplomacyPlayer?: ZType | string;
  MaxDiplomacyPlayer?: ZType | string;
  MinDiplomacyTribe?: ZType | string;
  MaxDiplomacyTribe?: ZType | string;
  MinProximityPlayer?: ZType | string;
  MaxProximityPlayer?: ZType | string;
  MinProximityTribe?: ZType | string;
  MaxProximityTribe?: ZType | string;
  MinPowerPlayer?: ZType | string;
  MaxPowerPlayer?: ZType | string;
  MinPowerTribe?: ZType | string;
  MaxPowerTribe?: ZType | string;
  MinKnowledgePlayer?: ZType | string;
  MaxKnowledgePlayer?: ZType | string;
  MinWarStatePlayer?: ZType | string;
  MaxWarStatePlayer?: ZType | string;
  MinWarStateTribe?: ZType | string;
  MaxWarStateTribe?: ZType | string;
  MinOpinionPlayer?: ZType | string;
  MaxOpinionPlayer?: ZType | string;
  MinOpinionTribe?: ZType | string;
  MaxOpinionTribe?: ZType | string;
  MinOpinionReligion?: ZType;
  MaxOpinionReligion?: ZType | string;
  MinOpinionFamily?: ZType | string;
  MaxOpinionFamily?: ZType | string;
  MinOpinionCharacter?: ZType | string;
  MaxOpinionCharacter?: ZType | string;
  iMinDistance?: ZType;
  iMaxDistance?: ZType | string;
  bAnyDescendant?: ZType | string;
  bNotDescendant?: ZType | string;
  bBehindSuccession?: ZType | string;
  bCanAdopt?: ZType | string;
  bAttractedTo?: ZType | string;
  bAttractedMutual?: ZType | string;
  bGenderSame?: ZType | string;
  bGenderDiff?: ZType | string;
  bYounger?: ZType | string;
  bOlder?: ZType | string;
  bSimilarAge?: ZType | string;
  bArchetypeSame?: ZType | string;
  bArchetypeDiff?: ZType | string;
  bArchetypeDislikes?: ZType | string;
  bPlayerSame?: ZType | string;
  bPlayerDiff?: ZType | string;
  bNationEthnicity?: ZType | string;
  bNationSame?: ZType | string;
  bNationDiff?: ZType | string;
  bTeamAlliance?: ZType | string;
  bNotTeamAlliance?: ZType | string;
  bCanTeamAlliance?: ZType | string;
  bCanEndWar?: ZType | string;
  bMinTreatyTurns?: ZType | string;
  bTribeEthnicity?: ZType | string;
  bTribeSame?: ZType | string;
  bTribeDiff?: ZType | string;
  bTribeAlliance?: ZType | string;
  bNotTribeAlliance?: ZType | string;
  bCanTribeAlliance?: ZType | string;
  bFamilySame?: ZType | string;
  bFamilyDiff?: ZType | string;
  bReligionSame?: ZType | string;
  bReligionDiff?: ZType | string;
  bReligionPagan?: ZType | string;
  bReligionState?: ZType | string;
  bReligionStateNo?: ZType | string;
  bReligionPlayer?: ZType | string;
  bReligionPlayerNo?: ZType | string;
  bReligionCity?: ZType | string;
  bReligionCityNo?: ZType | string;
  bReligionHolyCity?: ZType | string;
  bReligionHead?: ZType | string;
  bTechAcquired?: ZType | string;
  bTechNotAcquired?: ZType | string;
  bTechAnyDeck?: ZType | string;
  bTechSameCost?: ZType | string;
  bLawActive?: ZType | string;
  bLawInactive?: ZType | string;
  bLawPositive?: ZType | string;
  bLawMinNeutral?: ZType | string;
  bLawMaxNeutral?: ZType | string;
  bLawNegative?: ZType | string;
  bLawClassSame?: ZType | string;
  bTheologyActive?: ZType | string;
  bPlayerLuxury?: ZType | string;
  bFamilyMissing?: ZType | string;
  bTileResource?: ZType | string;
  bCitySame?: ZType | string;
  bCityDiff?: ZType | string;
  bCityOriginal?: ZType | string;
  bCityClosest?: ZType | string;
  bCityTerritorySame?: ZType | string;
  bFirstPlayer?: ZType | string;
  bUnitSame?: ZType | string;
  bTileSame?: ZType | string;
  bTileAdjacent?: ZType | string;
  bNoDebugHelp?: ZType | string;
}
export interface ZType {
}

}
