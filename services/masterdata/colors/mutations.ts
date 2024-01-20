import { useMutation, useQueryClient } from "@tanstack/react-query";

// types
import { ColorType } from "@/types/masterdata";

// fct
import { postColor } from "./api";

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
