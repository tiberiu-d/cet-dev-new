import { axiosInstance } from "@/services/settings";

// API target endpoint
const END_POINT = "masterdata/levels";
// types
import type { LevelType, LevelVizType } from "@/types/masterdata";

// -----------------
// CRUD operations
// -----------------

const postLevel = async (data: Partial<LevelType>) => {
  await axiosInstance.post(`${END_POINT}`, data);
};

const getLevels = async () => {
  return (await axiosInstance.get<LevelVizType[]>(`${END_POINT}`)).data;
};

const getLevelsByID = async (ID: number) => {
  return (await axiosInstance.get<LevelType>(`${END_POINT}/${ID}`)).data;
};

const putLevelByID = async (data: Partial<LevelType>) => {
  await axiosInstance.put(`${END_POINT}/${data.ID}`, data);
};

const deleteLevelByID = async (ID: number) => {
  await axiosInstance.delete(`${END_POINT}/${ID}`);
};

// export the OPs
export { postLevel, getLevels, getLevelsByID, putLevelByID, deleteLevelByID };
