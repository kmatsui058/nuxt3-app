
declare namespace XmlEventStory {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name?: ZType | Name2 | string;
  Text?: ZType | Name2 | string;
  zBackgroundName?: ZType | string;
  zFrameType?: ZFrameType;
  zVideoAsset?: Name2 | string;
  zEventURL?: ZType | Name2 | string;
  zCommunityContribution?: Name2 | string;
  zAudioTrigger?: ZType | Name2 | string;
  zAuthor: ZType | Name2 | string;
  zNotes?: ZFrameType;
  aeSubjects: AeSubjects;
  SubjectRepeatTurns?: SubjectRepeatTurns;
  SubjectExtras?: SubjectRepeatTurns;
  SubjectNotExtras?: SubjectRepeatTurns;
  SubjectAny?: SubjectAny;
  SubjectRelations?: SubjectRelations;
  SubjectNotRelations?: SubjectRelations;
  aeBonuses?: AeBonuses;
  aeOptions: AeSubjects;
  Class?: ZType | Name2 | string;
  Trigger?: ZType | Name2 | string;
  TriggerData?: ZType | Name2 | string;
  iTriggerSubject?: ZType | Name2 | string;
  iTriggerExtra?: ZType | Name2 | string;
  iImageSubject?: ZType | Name2 | string;
  iImageExtra?: ZType | Name2 | string;
  iImageOther?: ZType | Name2 | string;
  zHighlightAttribute?: Name2;
  iTagIndex?: Name2;
  iLookAtSubject?: ZType | Name2 | string;
  iMarryTempSubject?: ZType | Name2 | string;
  iSortOrder?: ZType | Name2 | string;
  EventLinkPrereq?: ZType | Name2 | string;
  iEventLinkTurns?: ZType | Name2 | string;
  LawPrereq?: ZType | Name2 | string;
  CouncilInvalid?: ZType | Name2 | string;
  MinOpponentLevel?: ZType | Name2 | string;
  MaxOpponentLevel?: ZFrameType;
  MinDifficulty?: ZType | Name2 | string;
  MaxDifficulty?: ZFrameType;
  iMinLeader?: ZType | Name2 | string;
  iMinTurns?: ZType | Name2 | string;
  iMaxTurns?: ZType | Name2 | string;
  iPriority?: ZType | Name2 | string;
  iWeight?: ZType | Name2 | string;
  iProb?: ZType | Name2 | string;
  iRepeatTurns: ZType | Name2 | string;
  bHidePrereqs?: ZType | Name2 | string;
  bNoCharacters?: ZType | Name2 | string;
  bAllOptions?: ZType | Name2 | string;
  bIgnoreOptions?: ZType | Name2 | string;
  bAlwaysTriggers?: ZType | Name2 | string;
  bTutorial?: ZType | Name2 | string;
  bHidden?: ZType | Name2 | string;
  bMultiples?: ZType | Name2 | string;
  aiRatingWeight?: AiRatingWeight;
  aiMortalitySkipProb?: AiRatingWeight;
  aeLawInvalid?: AeSubjects;
  aeEventStoryRepeatTurns?: AeSubjects;
  beginGroup?: string;
}
export interface AiRatingWeight {
  comment?: string;
  Pair?: Pair2[] | Pair2;
}
export interface Pair2 {
  zIndex: string;
  iValue: string;
}
export interface AeBonuses {
  comment?: string;
  zValue?: string[] | ZType[] | (ZType | string)[] | string;
}
export interface SubjectRelations {
  comment?: string;
  Triple?: Triple | Triple[];
}
export interface Triple {
  First: string;
  Second: string;
  Third: string;
}
export interface SubjectAny {
  comment?: string;
  Pair?: Pair[];
}
export interface SubjectRepeatTurns {
  comment?: string;
  Pair?: Pair[] | Pair;
}
export interface Pair {
  First: string;
  Second: string;
}
export interface AeSubjects {
  comment?: string;
  zValue?: string[] | string;
}
export interface ZFrameType {
  comment?: string;
}
export interface Name2 {
  comment: string;
}
export interface ZType {
}

}
