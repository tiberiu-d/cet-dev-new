// HANA table(s) based basic type defs
export type BasicQCAMType = {
  ID?: number;
  FIRST_NAME: string;
  LAST_NAME: string;
  EMAIL: string;
};

export type BasicAllocationType = {
  ID?: number;
  QCAM_ID: number;
  GROUP_ID: string;
};

// strictly for visualization
export type QCAMVizType = BasicQCAMType & {
  ALLOCATIONS?: Array<{
    GROUP_ID: string;
    GROUP_NAME: string;
  }>;
};
