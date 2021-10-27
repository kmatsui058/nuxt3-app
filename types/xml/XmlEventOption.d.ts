
declare namespace XmlEventOption {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  EventLinkAdd?: ZType | EventLinkAdd2 | string;
  EventLinkStart?: ZType | EventLinkAdd2 | string;
  Text?: ZType | EventLinkAdd2 | string;
  HelpText?: ZType | EventLinkAdd2 | string;
  zIcon?: EventLinkAdd2 | string;
  aeBonuses?: AeBonuses;
  aeTriggers?: AeTriggers;
  PlayerSubject?: ZType | EventLinkAdd2 | string;
  LeaderSubject?: ZType | EventLinkAdd2 | string;
  LeaderSubjectAny?: LeaderSubjectAny;
  OpenTabOverlay?: ZType | EventLinkAdd2 | string;
  bKeepOpen?: ZType | EventLinkAdd2 | string;
  bMainMenu?: ZType | EventLinkAdd2 | string;
  bHidePrereqs?: ZType | EventLinkAdd2 | string;
  bHideInvalid?: ZType | EventLinkAdd2 | string;
  bFutureEvents?: ZType | EventLinkAdd2 | string;
  aiMinPrice?: AiMinPrice;
  aiMaxPrice?: AiMinPrice;
  aiEventOptionProb?: AiEventOptionProb;
  beginGroup?: string;
}
export interface AiEventOptionProb {
  comment?: string;
  Pair?: Pair[];
}
export interface AiMinPrice {
  comment?: string;
  Pair?: Pair;
}
export interface Pair {
  zIndex: string;
  iValue: string;
}
export interface LeaderSubjectAny {
  comment?: string;
  zValue?: string[] | string;
}
export interface AeTriggers {
  comment?: string;
  zValue?: (ZType | string)[];
}
export interface AeBonuses {
  comment?: string;
  zValue?: string[] | (ZType | string)[] | ZType[] | ZType | string;
}
export interface EventLinkAdd2 {
  comment: string;
}
export interface ZType {
}

}
