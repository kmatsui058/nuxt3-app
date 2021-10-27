
declare namespace XmlBuild {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  bHurryCivics: ZType | string;
  bHurryTraining?: ZType;
  bHurryMoney?: ZType;
  bHurryPopulation?: ZType;
  bHurryOrders?: ZType;
}
export interface ZType {
}

}
