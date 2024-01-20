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
export const updateColorByID = async (data: Partial<ColorType>) => {
  console.log("PUT");
  console.log(data);
  await axiosInstance.put(`${END_POINT}/${data.ID}`, data);
};

// delete
export const deleteColorByID = async (ID: number) => {
  await axiosInstance.delete(`${END_POINT}/${ID}`);
};
