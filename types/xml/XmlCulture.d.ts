
declare namespace XmlCulture {
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
  iThreshold: ZType | string;
  iVP: ZType | string;
  iXP: ZType | string;
  iExtraCaptureTurns?: ZType | string;
  iExtraAssimilateTurns?: ZType | string;
  EffectCity: ZType | string;
  DefaultProject: ZType | string;
  ShortfallProject: ZType | string;
}
export interface ZType {
}

}
