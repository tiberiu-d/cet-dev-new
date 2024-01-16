import OnePager from "@/app/review/components/details/one-pager";

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

export type OnePagerType = {
  ID: string;
  QKAM: string;
  CREATED_ON: string;
  STATUS: string;
  TYPE: string;
  ESCAL_DATE: string;
  DESCAL_DATE: string;
  CUSTOMER_GROUP_CODE: string;
  CUSTOMER_GROUP: string;
  CUSTOMER_BRAND_CODE: string;
  CUSTOMER_BRAND: string;
  CUSTOMER_LOCATIONS: string;
  LEVEL: string;
  ADDITIONAL_BRANDS: string;
  VT_DIVISION_CODE: string;
  VT_DIVISION_NAME: string;
  VT_BUSINESS_UNIT_CODE: string;
  VT_BUSINESS_UNIT_NAME: string;
  VT_PLANT_CODE: string;
  VT_PLANT: string;
  TITLE: string;
  AFFECTED_PARTS: number;
  AFFECTED_VEHICLES: number;
  DESCRIPTION: string;
  CUSTOMER_IMPACT: string;
  RECURRING: boolean;
  SUPPLIER: string;
  CONSUMER_IMPACT: string;
  CAR_MODELS: string;
  CAR_PLATFORMS: string;
};

export type PartialOnePagerType = Partial<OnePagerType>;
