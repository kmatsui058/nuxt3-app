
declare namespace XmlEventClass {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  iLevelProb?: ILevelProb | string;
  iPlayerProb?: ILevelProb | string;
  iCharacterProb?: ILevelProb | string;
  iMinTurns?: ILevelProb | string;
  iMinRepeat: ILevelProb | string;
}
export interface ILevelProb {
  comment: string;
}
export interface ZType {
}

}
