"use client";

import axios from "axios";

// hooks
import { useSearchParams } from "@/hooks/useSearch";
import useDebounce from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { useEscalation } from "@/hooks/useEscalation";

// types
import { SearchParamsType } from "@/types/search";
import { EscalationType } from "@/types/escalation";

// icons
import { Search } from "lucide-react";

// 3rd party components
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// extra components
import EscalationList from "./components/escalation-list";
import EscalationDisplay from "./components/escalation-display";
import AdditionalFilters from "./components/filters/additional-filters";

// fetch data function
const fetchData = async ({ q, cust }: SearchParamsType) => {
  if (q === "") q = "all";
  if (cust === "" || cust.toLowerCase() === "all available") cust = "all";

  const TARGET = `http://localhost:1999/api/sidebar_data?q=${q}&cust=${cust}`;

  const response = await axios.get(TARGET);
  return response.data.results;
};

const EscalationsPreview = () => {
  const [escalation, setEscalation] = useEscalation();

  const [params, setParams] = useSearchParams();
  const debouncedSearchItems = useDebounce(params, 500);

  const { data: escalations } = useQuery<EscalationType[]>({
    queryKey: ["escalations", debouncedSearchItems],
    queryFn: () => fetchData(debouncedSearchItems),
  });

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border h-full w-full"
      >
        <ResizablePanel collapsible defaultSize={25} minSize={25} maxSize={25}>
          <Tabs defaultValue="all" className="flex flex-col h-full">
            <div className="flex flex-col items-center justify-between p-4 w-full">
              <div className="flex w-full justify-between items-center pb-4">
                <h1 className="text-2xl font-bold">Escalations</h1>
                <TabsList>
                  <TabsTrigger value="all" className="text-xs">
                    All levels
                  </TabsTrigger>
                  <TabsTrigger value="yellow" className="text-xs">
                    <span className="flex h-2 w-2 rounded-full bg-yellow-400 mr-2" />
                    Yellow
                  </TabsTrigger>
                  <TabsTrigger value="red" className="text-xs">
                    <span className="flex h-2 w-2 rounded-full bg-red-500 mr-2" />
                    Red
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search ..."
                    className="pl-8"
                    value={params.q}
                    onChange={(e) =>
                      setParams({ ...params, q: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex w-full text-xs">
                <Popover>
                  <PopoverTrigger asChild>
                    <p className="underline text-blue-600 ml-auto py-2 hover:cursor-pointer">
                      adv. search
                    </p>
                  </PopoverTrigger>
                  <PopoverContent className="shadow-xl flex flex-col w-96">
                    <AdditionalFilters />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <TabsContent
              value="all"
              className="m-0 overflow-auto w-full flex-1"
            >
              {escalations && <EscalationList items={escalations} />}
            </TabsContent>

            <TabsContent value="yellow" className="m-0">
              {escalations ? (
                <EscalationList
                  items={escalations.filter(
                    (item) => item.LEVEL_COLOR?.toLowerCase() === "y"
                  )}
                />
              ) : (
                <p>no data to show, check filters</p>
              )}
            </TabsContent>
            <TabsContent value="red" className="m-0">
              {escalations && (
                <EscalationList
                  items={escalations.filter(
                    (item) => item.LEVEL_COLOR.toLowerCase() === "r"
                  )}
                />
              )}
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75} className="w-full">
          {escalations && (
            <EscalationDisplay
              escalation={
                escalations.find(
                  (item) => item.ID === escalation.selected_id
                ) || null
              }
            />
          )}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
};
export default EscalationsPreview;
