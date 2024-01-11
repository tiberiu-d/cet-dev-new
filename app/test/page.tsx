"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "./useSearch";

import { SearchParamsType } from "@/types/search";
import axios from "axios";
import useDebounce from "@/hooks/useDebounce";

const fetchData = async ({ q, cust }: SearchParamsType) => {
  if (q === "") q = "all";
  if (cust === "") cust = "all";

  const TARGET = `http://localhost:2999/api/sidebar_data?q=${q}&cust=${cust}`;

  const response = await axios.get(TARGET);
  return response.data.results;
};

const TestPage = () => {
  const [params, setParams] = useSearchParams();

  const debouncedSearchItems = useDebounce(params, 500);

  const { data, isLoading, isError } = useQuery<any>({
    queryKey: ["todos", debouncedSearchItems],
    queryFn: () => fetchData(debouncedSearchItems),
  });

  if (isLoading) {
    return <div>still loading the data ....</div>;
  }

  if (isError) {
    return <div>something went wrong on the way to heaven...</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="mb-10">
        <input
          type="search"
          placeholder="search ..."
          className="p-2 rounded border"
          value={params.q}
          onChange={(e) => setParams({ ...params, q: e.target.value })}
        />
      </div>
      <div>
        {data?.map((item: any) => (
          <div key={item.id}>{item.TITLE}</div>
        ))}
      </div>
    </div>
  );
};
export default TestPage;
