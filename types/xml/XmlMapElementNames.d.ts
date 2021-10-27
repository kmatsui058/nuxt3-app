
declare namespace XmlMapElementNames {
  export interface RootObject {
  Root: Root;
}
export interface Root {
  Entry: Entry[];
}
export interface Entry {
  zType: ZType | string;
  azVolcanoNames?: AzVolcanoNames;
  azMountainRangeNames: AzMountainRangeNames;
  azPeakNames: AzVolcanoNames;
  azRiverNames: AzVolcanoNames;
  azForestNames?: AzMountainRangeNames;
  azHeathNames?: AzMountainRangeNames;
  azPlainNames: AzMountainRangeNames;
  azDesertNames?: AzMountainRangeNames;
  azPlateauNames: AzVolcanoNames;
  azValleyNames?: AzMountainRangeNames;
  azOceanNames?: AzMountainRangeNames;
  azSeaNames: AzVolcanoNames;
  azBayNames: AzMountainRangeNames;
  azLakeNames: AzVolcanoNames;
  azIslandNames: AzVolcanoNames;
}
export interface AzMountainRangeNames {
  zValue?: string[] | string;
}
export interface AzVolcanoNames {
  zValue?: string[];
}
export interface ZType {
}

}
