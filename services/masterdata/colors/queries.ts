import { useQuery } from "@tanstack/react-query";

import { getColors, getColorByID } from "./api";

// getColors
export function useColors() {
  return useQuery({
    queryKey: ["allColors"],
    queryFn: getColors,
  });
}

// getColorsByID
export function useColorsByID(ID:number) {
  return useQuery({
    queryKey: ["singleColor", ID],
    queryFn: () => getColorByID(ID)
  });
}
