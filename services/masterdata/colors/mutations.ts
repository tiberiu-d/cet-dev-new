import { useMutation, useQueryClient } from "@tanstack/react-query";

// types
import { ColorType } from "@/types/masterdata";

// fct
import { deleteColorByID, postColor, updateColorByID } from "./api";

export function usePostColor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["postColor"],

    mutationFn: (data: Partial<ColorType>) => postColor(data),

    onError: (error) => console.log("[color] mutation error: " + error),

    onSettled: async (_, error) => {
      if (error) {
        console.log("[color] error on settled: " + error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["allColors"],
        });
      }
    },
  });
}

export function useUpdateColor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateColor"],

    mutationFn: (data: ColorType) => updateColorByID(data),

    onMutate: (data: ColorType) => console.log(data),

    onSettled: async (_, error, variables) => {
      if (error) {
        console.log("[color] error updating color: " + error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["allColors"] });
      }
    },
  });
}

export function useDeleteColorByID() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteColor"],
    mutationFn: (ID: number) => deleteColorByID(ID),

    onSuccess: () => {
      console.log("deleted");
    },

    onSettled: async (_, error) => {
      if (error) {
        console.log("[delete] something went wrong");
      } else {
        queryClient.invalidateQueries({ queryKey: ["allColors"] });
      }
    },
  });
}
