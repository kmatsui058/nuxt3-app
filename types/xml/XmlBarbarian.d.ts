
declare namespace XmlBarbarian {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  bTribe?: ZType | string;
  Crest: ZType | string;
  Diplomacy: ZType | string;
  aeFirstNamesMale?: AeFirstNamesMale;
  aeFirstNamesFemale?: AeFirstNamesMale;
  aeCognomen?: AeCognomen;
  zPortraitBackground: ZType | string;
  zCharacterPortraitBackground?: ZType | string;
  aeCharacterPortraits?: AeFirstNamesMale;
}
export interface AeCognomen {
  zValue?: string;
}
export interface AeFirstNamesMale {
  zValue?: string[];
}
export interface ZType {
}

}
