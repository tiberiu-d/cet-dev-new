import { useMutation, useQueryClient } from "@tanstack/react-query";

import { LevelType } from "@/types/masterdata";

// import functions
import { postLevel, putLevelByID, deleteLevelByID } from "./api";

function usePostLevel() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["postLevel"],
    mutationFn: (data: LevelType) => postLevel(data),

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

function usePutLevelByID() {}

function useDeleteLevelByID() {}

// export the things
export { usePostLevel, usePutLevelByID, useDeleteLevelByID };
