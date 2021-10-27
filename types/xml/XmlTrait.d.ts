
declare namespace XmlTrait {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  NameFem?: ZType;
  Description?: ZType | string;
  Nickname?: ZType | string;
  GainTexts?: GainTexts;
  LoseTexts?: GainTexts;
  zIconName?: ZType | string;
  iMinAge?: ZType | string;
  iAdjectiveDie?: ZType | string;
  iNoFamilyDie?: ZType | string;
  iBarbDie?: ZType | string;
  iInjuryDie?: ZType | string;
  iAdultProb?: ZType | string;
  iDieProb?: ZType | string;
  iRemoveProb?: ZType | string;
  iOpinion?: ZType | string;
  iOpinionSame?: ZType | string;
  iOpinionFamily?: ZType | string;
  iOpinionReligion?: ZType | string;
  iOpinionProximity?: ZType | string;
  iOpinionStrength?: ZType | string;
  iOpinionKnowledge?: ZType | string;
  iOpinionGenerals?: ZType | string;
  iOpinionGovernors?: ZType | string;
  iOpinionWonders?: ZType | string;
  iOpinionLaws?: ZType | string;
  iOpinionCognomen?: ZType | string;
  iOpinionTrades?: ZType | string;
  iBirthModifier?: ZType | string;
  iTribeAllianceModifier?: ZType | string;
  iAllianceModifier?: ZType | string;
  iPeaceModifier?: ZType | string;
  iTruceModifier?: ZType | string;
  iWarModifier?: ZType | string;
  bArchetype?: ZType | string;
  bStrength?: ZType | string;
  bWeakness?: ZType | string;
  bNickname?: ZType | string;
  bDisplay?: ZType | string;
  bUpgrade?: ZType | string;
  bNoEvents?: ZType | string;
  bNoMissions?: ZType | string;
  bNoMarry?: ZType | string;
  bNoSpouse?: ZType | string;
  bNoBirth?: ZType | string;
  bNoHeir?: ZType | string;
  bNoJob?: ZType | string;
  bNoCourtier?: ZType | string;
  bNoFamilyHead?: ZType | string;
  bNoReligionHead?: ZType | string;
  bNoReligion?: ZType;
  bGeneralPrereq?: ZType | string;
  bGeneralAll?: ZType;
  bGovernorPrereq?: ZType | string;
  bGovernorAll?: ZType;
  bAgentPrereq?: ZType | string;
  bRemoveLeader?: ZType | string;
  bRemoveDeath?: ZType | string;
  bDoomed?: ZType | string;
  bGiveBirth?: ZType;
  LeaderEffectPlayer?: ZType | string;
  GovernorEffectCity?: ZType | string;
  GeneralEffectUnit?: ZType | string;
  LeaderEffectUnit?: ZType | string;
  AdjacentEffectUnit?: ZType;
  MemoryCharacter?: ZType | string;
  aiRating?: AiRating;
  aiTraitOpinion?: AiTraitOpinion;
  aiTraitProb?: AiRating;
  aiLawOpinion?: AiRating;
  aiMortalityDieProb?: AiMortalityDieProb;
  aiDecadeProb?: AiDecadeProb;
  aeTraitInvalid?: GainTexts;
  aePositiveRating?: AePositiveRating;
  aeNegativeRating?: AePositiveRating;
}
export interface AePositiveRating {
  zValue?: string;
}
export interface AiDecadeProb {
  iValue?: string[];
}
export interface AiMortalityDieProb {
  Pair?: Pair[];
}
export interface AiTraitOpinion {
  Pair?: Pair;
}
export interface AiRating {
  Pair?: Pair[] | Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface GainTexts {
  zValue?: string[] | string;
}
export interface ZType {
}

}
