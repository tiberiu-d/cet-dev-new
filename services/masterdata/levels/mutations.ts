import { useMutation, useQueryClient } from "@tanstack/react-query";

import { LevelType } from "@/types/masterdata";

// import functions
import { postLevel, putLevelByID, deleteLevelByID } from "./api";


// handler functions
function usePostLevel() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["postLevel"],
    mutationFn: (data: Partial<LevelType>) => postLevel(data),

    onError: (error) => console.log("[usePostLevel] onError: " + error.message),

    onSettled: async (_, error) => {
      if (error) {
        console.log("[usePostLevel] onSettled: " + error.message);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["allLevels"],
        });
      }
    },
  });
}

function usePutLevelByID() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateLevel"],

    mutationFn: (data: Partial<LevelType>) => putLevelByID(data),

    onSettled: async (_, error, variables) => {
      if (error) {
        console.log("[level] error updating level: " + error);
        console.log(variables);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["allLevels"] });
      }
    },
  });
}

function useDeleteLevelByID() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteLevel"],
    mutationFn: (ID: number) => deleteLevelByID(ID),

    onSettled: async (_, error) => {
      if (error) {
        console.log("[delete] something went wrong");
      } else {
        queryClient.invalidateQueries({ queryKey: ["allLevels"] });
      }
    },
  });
}

// export the things
export { usePostLevel, usePutLevelByID, useDeleteLevelByID };
