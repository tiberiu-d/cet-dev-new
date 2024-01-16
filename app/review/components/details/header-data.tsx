import CustomerLogo from "./customer-logo";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// icons and graphics
import { Clock, MoreVertical } from "lucide-react";

// types & stuff
import { PartialEscalationType } from "@/types/escalation";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const HeaderData = (escalation: PartialEscalationType) => {
  return (
    <TooltipProvider>
      <div className="w-full p-4 flex items-center text-justify gap-5">
        <CustomerLogo />
        <div className="w-full flex flex-col items-start gap-2">
          <div className="w-full text-xl font-bold flex flex-row justify-between gap-4">
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <Badge className="hover:cursor-help px-2">
                      {escalation.ID}
                    </Badge>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <span className="font-normal text-sm">
                    escalation identifier
                  </span>
                </TooltipContent>
              </Tooltip>
              <div>{escalation.TITLE}</div>
            </div>
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <Badge className="hover:cursor-help px-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{escalation.ESCAL_DATE}</span>
                    </Badge>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <span className="font-normal text-sm">creation date</span>
                </TooltipContent>
              </Tooltip>
              <Separator orientation="vertical" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={false}>
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Quick Action #1</DropdownMenuItem>
                  <DropdownMenuItem>Quick Action #2</DropdownMenuItem>
                  <DropdownMenuItem>Quick Action #3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="description pb-4">{escalation.DESCRIPTION}</div>
          <div className="flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Badge
                    className={cn(
                      escalation.LEVEL_COLOR?.toLowerCase() === "y" &&
                        "bg-yellow-300 text-black hover:bg-yellow-300",
                      escalation.LEVEL_COLOR?.toLowerCase() === "r" &&
                        "bg-red-500 text-white hover:bg-red-500",
                      escalation.LEVEL_COLOR?.toLowerCase() === "n" &&
                        "bg-neutral-400 text-white hover:bg-neutral-400",
                      "font-thin text-xs hover:cursor-help px-2"
                    )}
                  >
                    {escalation.LEVEL}
                  </Badge>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span className="font-normal text-sm">
                  customer escalation level
                </span>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Badge className="hover:cursor-help px-2">
                    {escalation.DESCAL_DATE}
                  </Badge>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span className="font-normal text-sm">de-escalation date</span>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Badge className="hover:cursor-help px-2">
                    {escalation.DESCAL_DATE}
                  </Badge>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <span className="font-normal text-sm">
                  <span className="text-red-500 font-bold">estimated</span>{" "}
                  de-escalation date
                </span>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};
export default HeaderData;
