import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Map } from "lucide-react";

type FormFeedbackType = {
  currentStepIdx: number;
  maxSteps: number;
  isLastStep: boolean;
  stepName: string;
};

const FormFeedback = ({
  currentStepIdx,
  maxSteps,
  isLastStep,
  stepName,
}: FormFeedbackType) => {
  return (
    <div className="text-xs flex flex-col gap-3">
      <div className="flex gap-3">
        {isLastStep ? null : (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Badge
                  variant={"outline"}
                  className={`cursor-pointer shadow-sm ${
                    isLastStep ? "bg-green-300" : null
                  }`}
                >
                  step {currentStepIdx} of {maxSteps}
                </Badge>
              </TooltipTrigger>
              <TooltipContent className="text-xs flex flex-row gap-4 items-center justify-center">
                <AlertTriangle className="text-yellow-500 font-bold" />
                <div className="message">
                  <p>you will be able to save </p>
                  <p>once all steps are done</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Badge variant={"outline"}>{stepName}</Badge>
            </TooltipTrigger>
            <TooltipContent className="text-xs flex flex-row gap-4 items-center justify-center">
              <Map className="font-bold" />
              <div className="message">
                <p>you are here</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div>
        (<span className="font-bold text-red-500">*</span>) represents required
        field(s)
      </div>
    </div>
  );
};
export default FormFeedback;
