import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";

import { PartialEscalationType } from "@/types/escalation";
type CustomerLogoProps = {
  data: PartialEscalationType;
};

const CustomerLogo = (escalation: CustomerLogoProps) => {
  const IMG_SRC = `/customers/${escalation.data.CUSTOMER_GROUP_ID}.png`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center mr-4 hover:cursor-help">
            <Image alt="customer logo" src={IMG_SRC} width={100} height={100} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <span>{escalation.data.CUSTOMER_GROUP}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default CustomerLogo;
