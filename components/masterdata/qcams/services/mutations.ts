import { useMutation, useQueryClient } from "@tanstack/react-query";

// types
import { QCAMVizType } from "../types/qcams";

// handlers
import { postQCAM, putQCAMByID, deleteQCAMByID } from "./api";

// ------------------
// | Hooks Defs
// ------------------

function usePostQCAM() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["postQCAM"],
    mutationFn: (data: Partial<QCAMVizType>) => postQCAM(data),

    onError: (_, error, variables) => {
      console.log("[usePostQCAM] onError: " + error);
      console.log(variables);
    },
    onSettled: async (_, error, variables) => {
      if (error) {
        console.log("[usePostQCAM] onSettled: " + error.message);
        console.log(variables);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["allQCAMs"],
        });
      }
    },
  });
}

function usePutQCAMByID() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateQCAM"],
    mutationFn: (data: Partial<QCAMVizType>) => putQCAMByID(data),

    onError: (_, error, variables) => {
      console.log("[usePutQCAMByID] onError: " + error);
      console.log(variables);
    },
    onSettled: async (_, error, variables) => {
      if (error) {
        console.log("[usePutQCAMByID] error updating QCAM: " + error);
        console.log(variables);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["allQCAMs"] });
      }
    },
  });
}

function useDeleteQCAMByID() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteQCAM"],
    mutationFn: (ID: number) => deleteQCAMByID(ID),

    onError: (_, error, variables) => {
      console.log("[useDeleteQCAMByID] onError: " + error);
      console.log(variables);
    },
    onSettled: async (_, error, variables) => {
      if (error) {
        console.log("[useDeleteQCAMByID] error deleting QCAM: " + error);
        console.log(variables);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["allQCAMs"] });
      }
    },
  });
}

// export hooks
export { usePostQCAM, usePutQCAMByID, useDeleteQCAMByID };
