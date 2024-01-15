import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CustomerLogo = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="w-[100px] h-[100px] rounded-full border border-blue-500 flex items-center justify-center mr-4 hover:cursor-help">
            CustomerLogo
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <span>this is the customer</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default CustomerLogo;
