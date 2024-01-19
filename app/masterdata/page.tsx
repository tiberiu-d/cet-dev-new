"use client";

import axios from "axios";

// hooks
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "@/hooks/useSearch";

// UI components
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";

// custom components
import MasterdataList from "./components/masterdata-list";
import MasterdataDisplay from "./components/masterdata-display";

// types
import { SearchParamsType } from "@/types/search";

const fetchData = async (params: SearchParamsType) => {
  const TARGET = `${params.target}/api/masterdata/sidebar`;

  const response = await axios.get(TARGET);
  return response.data.results;
};

const Masterdata = () => {
  const [params, setParams] = useSearchParams();

  const { data: masterdata_entries } = useQuery<any[]>({
    queryKey: ["masterdata", params],
    queryFn: () => fetchData(params),
  });
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border h-full w-full"
    >
      <ResizablePanel collapsible defaultSize={25} minSize={25} maxSize={25}>
        <div className="flex flex-col items-center justify-between p-4 w-full">
          <div className="flex w-full justify-between items-center pb-4">
            <h1 className="text-2xl font-bold">Masterdata</h1>
          </div>
          <div className="flex w-full justify-between items-center pb-4">
            <h3 className="text-sm font-normal">
              <p>Browse through all available masterdata entries.</p>
              <p>
                Select a category from the list below to open the contents in
                order to add, delete or edit entries.
              </p>
            </h3>
          </div>
          <Separator />
          {masterdata_entries && <MasterdataList items={masterdata_entries} />}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75} className="w-full">
        <MasterdataDisplay />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
export default Masterdata;
