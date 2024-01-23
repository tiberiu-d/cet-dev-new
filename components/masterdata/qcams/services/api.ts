import { axiosInstance } from "@/services/settings";

// API target endpoint
const END_POINT = "masterdata/QCAMs";

// types
import {
  BasicQCAMType,
  BasicAllocationType,
  QCAMVizType,
} from "../types/qcams";

// -----------------
// CRUD operations
// -----------------

const postQCAM = async (data: Partial<QCAMVizType>) => {
  await axiosInstance.post(`${END_POINT}`, data);
};

const getQCAMs = async () => {
  return (await axiosInstance.get<QCAMVizType[]>(`${END_POINT}`)).data;
};

const getQCAMByID = async (ID: number) => {
  return (await axiosInstance.get<QCAMVizType>(`${END_POINT}/${ID}`)).data;
};

const putQCAMByID = async (data: Partial<QCAMVizType>) => {
  await axiosInstance.put(`${END_POINT}/${data.ID}`, data);
};

const deleteQCAMByID = async (ID: number) => {
  await axiosInstance.delete(`${END_POINT}/${ID}`);
};

//  export OPs
export { postQCAM, getQCAMs, getQCAMByID, putQCAMByID, deleteQCAMByID };
