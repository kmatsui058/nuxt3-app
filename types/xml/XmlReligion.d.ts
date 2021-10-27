
declare namespace XmlReligion {
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
  iCostBase: ZType | string;
  iCostPerCity?: ZType;
  iCostPerChange: ZType | string;
  iSpreadPercent?: ZType | string;
  iRequiresCitizens?: ZType | string;
  bDisabled?: ZType;
  Achievement: ZType | string;
  EffectCity: ZType | string;
  EffectPlayerState: ZType | string;
  EffectPlayerUpkeep?: ZType | string;
  PaganNation?: ZType | string;
  RequiresReligion?: ZType | string;
  RequiresTech?: ZType | string;
  SpreadUnit?: ZType | string;
  aiRequiresImprovement?: ZType;
  aiRequiresImprovementClass?: ZType;
  aiRequiresSpecialist?: AiRequiresSpecialist;
  aiRequiresSpecialistClass?: AiRequiresSpecialist;
  aiRequiresReligion?: AiRequiresReligion;
}
export interface AiRequiresReligion {
  Pair?: Pair[] | Pair;
}
export interface AiRequiresSpecialist {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
