export type MasterdataParamsType = {
  target: number;
};

// colors
export type MasterdataColorType = {
  ID: number;
  LABEL: string;
  VALUE: string;
  EXPLANATION: string;
};
export type PartialMasterdataColorType = Partial<MasterdataColorType>;

// levels
export type MasterdataLevelType = {
  ID: number;
  GROUP_ID: string;
  COLOR_ID: number;
  VALUE: string;
  EXPLANATION: string;
};
export type PartialMasterdataLevelType = Partial<MasterdataLevelType>;
