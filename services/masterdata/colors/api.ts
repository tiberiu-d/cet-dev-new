import { axiosInstance } from "@/services/settings";

// API target endpoint
const END_POINT = "masterdata/colors";

// types
import { ColorType } from "@/types/masterdata";

export const postColor = async (data: Partial<ColorType>) => {
  await axiosInstance.post(`${END_POINT}`, data);
};

export const getColors = async () => {
  return (await axiosInstance.get<ColorType[]>(`${END_POINT}`)).data;
};

export const getColorByID = async (ID: number) => {
  return (await axiosInstance.get<ColorType>(`${END_POINT}/${ID}`)).data;
};

// update

// delete
