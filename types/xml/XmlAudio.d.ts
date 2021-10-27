
declare namespace XmlAudio {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  zAsset: ZType | string;
  bOnlyAllowOnePerFrame?: BOnlyAllowOnePerFrame | string;
  Creators?: Creators;
  zInstrumentation?: ZType | string;
  zTags?: ZType | string;
  Artist?: BOnlyAllowOnePerFrame | ZType | string;
  Description?: ZType | string;
}
export interface Creators {
  comment?: string;
  Creator?: Creator;
}
export interface Creator {
  zCreatorName: string;
  zPercentage: string;
  zAffiliation: string;
}
export interface BOnlyAllowOnePerFrame {
}
export interface ZType {
  comment: string;
}

}
