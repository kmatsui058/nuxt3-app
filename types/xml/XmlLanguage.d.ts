
declare namespace XmlLanguage {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  Name?: ZType | string;
  zFieldName?: ZType | string;
  zISOCode?: ZType | string;
  iExportColumn?: ZType | string;
  bPublicBuild: ZType | string;
  bDebug?: ZType | string;
  zSingularExpression: ZType | string;
  zPluralExpression?: ZType;
  zThousandsSeparator: ZType | string;
  zDecimalSeparator: ZType | string;
  zCurrencyPrefix: ZType | string;
  zCurrencyPostfix?: ZType;
  zThousandPostfix: ZType | string;
  zMillionPostfix: ZType | string;
}
export interface ZType {
}

}
