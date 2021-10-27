
declare namespace XmlRelationship {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  NameVerb: ZType | string;
  iOpinion?: ZType | string;
  iMinAgeUs?: ZType | string;
  iMinAgeThem?: ZType | string;
  aeInvalidateRelationship?: AeInvalidateRelationship;
}
export interface AeInvalidateRelationship {
  zValue?: string[] | string;
}
export interface ZType {
}

}
