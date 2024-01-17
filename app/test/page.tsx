"use client";

// stuff
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// hooks
import { useSearchParams } from "@/hooks/useSearch";

// types
import { SearchParamsType } from "@/types/search";
type CustomerType = {
  label: string;
  value: string;
};
type ColorType = {
  label: string;
  value: string;
  code: string;
};

// my components
import AntdForm from "./antd";
import ShadcnForm from "./shadcn";

// search fct for Customer Groups
const fetchData = async (params: SearchParamsType) => {
  const TARGET = `${params.target}/api/customers`;

  const response = await axios.get(TARGET);

  // change the thing to the thing because of the thing and the other thing
  var results = [
    response.data.results.map((elem: any) => {
      return { label: elem.LABEL, value: elem.GROUP_ID };
    }),
  ];

  // export the thing while considering the other thing and the thing
  return results[0];
};

const fetchColors = async (params: SearchParamsType) => {
  const TARGET = `${params.target}/api/colors`;

  const response = await axios.get(TARGET);
  var results = [
    response.data.results.map((elem: any) => {
      return { label: elem.VALUE, value: elem.LABEL, code: elem.COLOR_CODE };
    }),
  ];
  return results[0];
};

const TestPage = () => {
  const [params, setParams] = useSearchParams();

  const { data: customers } = useQuery<CustomerType[]>({
    queryKey: ["customers", params],
    queryFn: () => fetchData(params),
  });

  const { data: colors } = useQuery<ColorType[]>({
    queryKey: ["colors", params],
    queryFn: () => fetchColors(params),
  });

  if (customers && colors)
    return (
      <div className="form_container flex items-center gap-20 mx-auto">
        <AntdForm customers={customers} colors={colors} />
        <ShadcnForm customers={customers} colors={colors} />
      </div>
    );
};
export default TestPage;
