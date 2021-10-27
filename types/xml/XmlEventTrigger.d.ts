
declare namespace XmlEventTrigger {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Data?: Datum | string;
  SubjectClass?: Datum | string;
  ExtraClass?: Datum | string;
  iMinTurns?: Datum;
  iProb?: Datum | string;
  iSortOrder?: Datum | string;
  bLevel?: Datum | string;
  bModal?: Datum | string;
  comment?: string;
}
export interface Datum {
  comment: string;
}
export interface ZType {
}

}
