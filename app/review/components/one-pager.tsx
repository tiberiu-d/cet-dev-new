"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type OnePagerProps = {
  ESCALATION_ID: string;
};

// get the data
const fetchData = async (escalationID: string) => {
  const response = await axios.get(
    `http://localhost:2999/api/escalations/${escalationID}`
  );
  return response.data.results;
};

const OnePager = ({ ESCALATION_ID }: OnePagerProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["specificEntry", ESCALATION_ID],
    queryFn: () => fetchData(ESCALATION_ID),
  });

  if (isLoading) {
    return <div>Loading Escalation details</div>;
  }

  if (isError) {
    return <div>some error</div>;
  }

  return <div>OnePager details and stuff - {ESCALATION_ID}</div>;
};
export default OnePager;
