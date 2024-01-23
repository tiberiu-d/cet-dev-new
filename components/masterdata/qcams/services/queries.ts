// imports
import { useQuery } from "@tanstack/react-query";

// handlers
import { getQCAMs, getQCAMByID } from "./api";

// ------------------
// | Hooks Defs
// ------------------

function useGetQCAMs() {
  return useQuery({
    queryKey: ["allQCAMs"],
    queryFn: getQCAMs,
  });
}

function useGetQCAMByID(ID: number) {
  return useQuery({
    queryKey: ["singleQCAM", ID],
    queryFn: () => getQCAMByID(ID),
  });
}

// export GET hooks
export { useGetQCAMs, useGetQCAMByID };
