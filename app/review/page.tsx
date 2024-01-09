"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import EscalationsPreview from "./components/escalationPreview";

// dummy data
import { dbPreviewEscalations } from "@/database/dummy_PreviewEscalations";

// get the data
const fetchData = async () => {
  const response = await axios.get("http://localhost:2999/api/sidebar_data");
  return response.data.results;
};

export default function ReviewPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["escalations"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return (
      <div className="flex w-full h-full">
        Please be patient while data is being loaded...
      </div>
    );
  }

  return (
    <div className="flex w-full h-full">
      <EscalationsPreview escalations={data} />
    </div>
  );
}
