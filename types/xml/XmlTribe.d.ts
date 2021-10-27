
declare namespace XmlTribe {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  Help?: ZType | string;
  TeamColor: ZType | string;
  iLatitude?: ZType | string;
  bDiplomacy?: ZType | string;
  bMercenary?: ZType | string;
  bPersistent?: ZType | string;
  bWaterMove?: ZType | string;
  Crest: ZType | string;
  Diplomacy: ZType | string;
  aeFirstNamesMale?: AeFirstNamesMale;
  aeFirstNamesFemale?: AeFirstNamesMale;
  azNicknames?: AzNicknames;
  zPortraitBackground: ZType | string;
  zCharacterPortraitBackground?: ZType | string;
  aeCharacterPortraits?: AeFirstNamesMale;
}
export interface AzNicknames {
  zValue?: string;
}
export interface AeFirstNamesMale {
  zValue?: string[];
}
export interface ZType {
}

}
