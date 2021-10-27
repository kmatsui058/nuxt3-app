
declare namespace XmlNation {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  TeamColor: ZType | string;
  Crest: ZType | string;
  zAttackPortraitName: ZType | string;
  zCharacterPortraitBackground: ZType | string;
  CapitalAsset: ZType | string;
  CityAsset: ZType | string;
  UrbanAsset: ZType | string;
  Founder: ZType | string;
  FirstRuler: ZType | string;
  FirstBuild: ZType | string;
  EffectPlayer: ZType | string;
  MapElementNames: ZType | string;
  iFirstBuildPercent: ZType | string;
  bShowSurname?: ZType;
  bPlayable?: ZType;
  bDisabled?: ZType;
  aiStartUnit: AiStartUnit;
  aiCityUnit: AiCityUnit;
  aiNationOpinion?: AiStartUnit;
  aeStartingTech: AeStartingTech;
  aeStartingLaw?: ZType;
  aeImprovementNotValid?: ZType;
  aeProjectNotValid?: ZType;
  aeTechNotValid?: ZType;
  aeUnitNotValid?: ZType;
  aeFirstNamesMale: AeStartingTech;
  aeFirstNamesFemale: AeStartingTech;
  aeCityNames: AeStartingTech;
  aeCharacterPortraits: AeStartingTech;
  Story: ZType | string;
}
export interface AeStartingTech {
  zValue?: string[];
}
export interface AiCityUnit {
  Pair?: Pair[];
}
export interface AiStartUnit {
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface ZType {
}

}
