"use client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import NewEscalationForm from "@/components/multistep-form/form-new";
import { GridLoader } from "react-spinners";

// settings and stuff
const API_PORT = 1999;
const API_URL = `http://localhost:${API_PORT}/api/escals/`;
const axiosInstance = axios.create({ baseURL: API_URL });

const SpecificPage = ({ params }: any) => {
  const { data, isLoading } = useQuery({
    queryKey: ["editEscalation", params.escalation_id],
    queryFn: async (ID) => {
      return (await axiosInstance.get(`/${params.escalation_id}`)).data;
    },
  });

  if (isLoading)
    return (
      <div className="h-full w-full flex flex-col items-center justify-center gap-10">
        <GridLoader color="#36d7b7" size={15} speedMultiplier={1} />
        <span>data is loading, hold on for a minute or two ...</span>
      </div>
    );

  if (data)
    return (
      <section className="flex items-center justify-center w-full">
        <NewEscalationForm INITIAL_DATA={data} />
      </section>
    );
};
export default SpecificPage;
