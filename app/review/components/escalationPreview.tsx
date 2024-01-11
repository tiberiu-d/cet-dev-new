"use client";

import { useEscalation } from "../use-escalation";
import { Search } from "lucide-react";

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

import EscalationList from "./escalation-list";
import EscalationDisplay from "./escalation-display";
import AdditionalFilters from "./additional-filters";

// type definition
type EscalationType = {
  ID: string;
  ESCAL_DATE: string;
  DESCAL_DATE: string;
  TITLE: string;
  DESCRIPTION: string;
  CUSTOMER_GROUP: string;
  LEVEL: string;
  LEVEL_COLOR: string;
};
interface EscalationsPreviewProps {
  escalations: EscalationType[];
}

const EscalationsPreview = ({ escalations }: EscalationsPreviewProps) => {
  const [escalation] = useEscalation();

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border h-full w-full"
      >
        <ResizablePanel collapsible defaultSize={30} minSize={25} maxSize={30}>
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
                    placeholder="Search"
                    className="pl-8"
                    onChange={(e) => console.log(e.target.value)}
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
                  <PopoverContent className="w-80 shadow-xl">
                    <AdditionalFilters />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <TabsContent
              value="all"
              className="m-0 overflow-auto w-full flex-1"
            >
              <EscalationList items={escalations} />
            </TabsContent>
            <TabsContent value="yellow" className="m-0">
              <EscalationList
                items={escalations.filter(
                  (item) => item.LEVEL_COLOR.toLowerCase() === "y"
                )}
              />
            </TabsContent>
            <TabsContent value="red" className="m-0">
              <EscalationList
                items={escalations.filter(
                  (item) => item.LEVEL_COLOR.toLowerCase() === "r"
                )}
              />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70} className="w-full">
          <EscalationDisplay
            escalation={
              escalations.find((item) => item.ID === escalation.selected_id) ||
              null
            }
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
};
export default EscalationsPreview;
