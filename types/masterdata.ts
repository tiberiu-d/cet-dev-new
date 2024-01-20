export type MasterdataParamsType = {
  target: number;
};

// colors
export type ColorType = {
  ID: number;
  LABEL: string;
  VALUE: string;
  EXPLANATION: string;
};
export type PartialColorType = Partial<ColorType>;

// levels
export type LevelType = {
  ID: number;
  GROUP_ID: string;
  COLOR_ID: number;
  VALUE: string;
  EXPLANATION: string;
};
export type PartialLevelType = Partial<LevelType>;
