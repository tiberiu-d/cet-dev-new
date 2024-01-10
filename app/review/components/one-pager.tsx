"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type OnePagerProps = {
  ESCALATION_ID: string;
};

// get the data
const getOnePagerData = async (escalationID: string) => {
  const response = await axios.get(
    `http://localhost:2999/api/escalations/${escalationID}`
  );
  return response.data.result[0];
};

const OnePager = ({ ESCALATION_ID }: OnePagerProps) => {
  const {
    data: onePager,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["specificEntry", ESCALATION_ID],
    queryFn: () => getOnePagerData(ESCALATION_ID),
  });

  if (isLoading) {
    return <div>Loading Escalation details</div>;
  }

  if (isError) {
    return <div>some error</div>;
  }

  return <div>OnePager details and stuff - {onePager.QKAM}</div>;
};
export default OnePager;
