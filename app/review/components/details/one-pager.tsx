"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { OnePagerType } from "@/types/escalation";
type OnePagerProps = {
  ESCALATION_ID: string;
};

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import ReviewLeaf from "./review-leaf";

// get the data
const getOnePagerData = async (escalationID: string): Promise<OnePagerType> => {
  const response = await axios.get(
    `http://localhost:1999/api/escalations/${escalationID}`
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

  if (onePager) {
    return (
      <div className="w-full h-full flex flex-col items-start">
        <div className=""></div>
      </div>
    );
  }
};
export default OnePager;
