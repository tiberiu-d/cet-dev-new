"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { OnePagerType } from "@/types/escalation";
type OnePagerProps = {
  ESCALATION_ID: string;
};

import CustomerBranch from "./customer-branch";
import VitescoBranch from "./vitesco-branch";

import { SearchParamsType } from "@/types/search";
import { useSearchParams } from "@/hooks/useSearch";

// get the data
const getOnePagerData = async (
  escalationID: string,
  { target }: SearchParamsType
): Promise<OnePagerType> => {
  const response = await axios.get(`${target}/api/escalations/${escalationID}`);
  return response.data.result[0];
};

const OnePager = ({ ESCALATION_ID }: OnePagerProps) => {
  const [params, setParams] = useSearchParams();

  const {
    data: onePager,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["specificEntry", ESCALATION_ID, params],
    queryFn: () => getOnePagerData(ESCALATION_ID, params),
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
        <div className="w-full grid grid-cols-2 gap-5 mx-auto pt-6">
          <div className="coloana1 flex flex-col items-start gap-5 relative rounded-md border-2">
            <span className="p-2 rounded-xl border-2 absolute left-6 -top-5 bg-blue-100 text-sm shadow-md">
              Customer Details
            </span>
            <div className="w-full pt-8 px-4 text-justify">
              <CustomerBranch data={onePager} />
            </div>
          </div>
          <div className="coloana2 w-full flex flex-col items-start gap-5 relative rounded-md border-2">
            <span className="p-2 rounded-xl border-2 absolute right-5 -top-5 bg-green-100 text-sm shadow-md">
              Vitesco Details
            </span>
            <div className="w-full pt-8 px-4 text-justify">
              <VitescoBranch data={onePager} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default OnePager;
