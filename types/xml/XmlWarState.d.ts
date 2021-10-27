
declare namespace XmlWarState {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name: ZType | string;
  iThreshold?: ZType | string;
  iTruceModifier?: ZType | string;
}
export interface ZType {
}

}
