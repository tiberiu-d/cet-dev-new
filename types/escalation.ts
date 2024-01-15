export type EscalationType = {
  ID: string;
  ESCAL_DATE: string;
  DESCAL_DATE: string;
  TITLE: string;
  DESCRIPTION: string;
  CUSTOMER_GROUP: string;
  LEVEL: string;
  LEVEL_COLOR: string;
};

export type PartialEscalationType = Partial<EscalationType>;
