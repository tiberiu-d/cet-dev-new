"use client";

import { cn } from "@/lib/utils";
import { useEscalation } from "../use-escalation";
import { Search } from "lucide-react";

import { Escalation } from "@/database/dummy_PreviewEscalations";

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

interface EscalationsPreviewProps {
  escalations: Escalation[];
}

const EscalationsPreview = ({ escalations }: EscalationsPreviewProps) => {
  const [escalation] = useEscalation();

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border h-full w-full"
      >
        <ResizablePanel collapsible defaultSize={25} minSize={25} maxSize={30}>
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
                <form>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search" className="pl-8" />
                  </div>
                </form>
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
                  (item) => item.level.color.toLowerCase() === "yellow"
                )}
              />
            </TabsContent>
            <TabsContent value="red" className="m-0">
              <EscalationList
                items={escalations.filter(
                  (item) => item.level.color.toLowerCase() === "red"
                )}
              />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75} className="w-full p-4">
          <EscalationDisplay
            escalation={
              escalations.find((item) => item.id === escalation.selected_id) ||
              null
            }
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
};
export default EscalationsPreview;
