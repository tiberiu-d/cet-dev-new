import { useQuery } from "@tanstack/react-query";

import { getLevels, getLevelsByID } from "./api";

// getLevels
function useGetLevels() {
  return useQuery({
    queryKey: ["allLevels"],
    queryFn: getLevels,
  });
}

function useGetLevelByID(ID: number) {
  return useQuery({
    queryKey: ["singleLevel", ID],
    queryFn: () => getLevelsByID(ID),
  });
}

// export the GET hooks
export { useGetLevels, useGetLevelByID };
