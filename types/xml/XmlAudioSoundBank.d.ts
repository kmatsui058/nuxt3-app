
declare namespace XmlAudioSoundBank {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zBankFile: ZType | string;
  bStayLoadedPermanently: ZType | string;
  bBuiltin: ZType | string;
}
export interface ZType {
  comment: string;
}

}
