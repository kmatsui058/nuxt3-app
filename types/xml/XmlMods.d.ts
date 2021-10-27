
declare namespace XmlMods {
  export interface RootObject {
  ModInfo: ModInfo;
}
export interface ModInfo {
  'xmlns:xsd': string;
  'xmlns:xsi': string;
  description: string;
  singlePlayer: string;
  multiplayer: string;
}

}
