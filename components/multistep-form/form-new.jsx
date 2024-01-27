"use client";

import FormLogo from "./form-logo";
import FormFeedback from "./form-feedback";

import { useState } from "react";
import { useMultistepForm } from "./useMultiForm";

import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

import { ChevronRightSquare, ChevronLeftSquare, SaveAll } from "lucide-react";

import StepOne from "./form-step-1";

const INITIAL_DATA = {
  TYPE: "",
  STATUS: { value: "in_progress", label: "In Progress" },
  TITLE: "",
  DESCRIPTION: "",
};

const NewEscalationForm = () => {
  const [isValid, setIsValid] = useState(true);
  const [data, setData] = useState(INITIAL_DATA);

  // handlers
  const onFormValidate = (flag) => {
    setIsValid(flag);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!formInstance.isLastStep) {
      formInstance.nextStep();
    } else {
      if (isValid) {
        console.log(data);
      } else {
        console.log("something went wrong");
      }
    }
  };

  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const formSteps = [
    {
      title: "basic info",
      component: <StepOne {...data} updateFields={updateFields} />,
    },
    {
      title: "customer info",
      component: <div>step 2</div>,
    },
    {
      title: "vitesco info",
      component: <div>step 3</div>,
    },
    {
      title: "follow-up info",
      component: <div>step 4</div>,
    },
    {
      title: "review and feedback",
      component: <div>final</div>,
    },
  ];

  // hooks
  const formInstance = useMultistepForm(formSteps);

  return (
    <div className="flex flex-col items-center justify-center shadow-xl rounded-xl">
      <form onSubmit={onFormSubmit}>
        <Card className="main-card flex flex-col justify-between rounded-xl shadow-2xl border-2 border-gray-200">
          <div className="flex flex-col h-full">
            <CardHeader className="relative flex flex-row items-center justify-between bg-cyan-50 border-b-2 border-gray-200 rounded-t-xl">
              <span className="text-xl font-bold">Add New Escalation</span>
              <FormLogo />
            </CardHeader>
            <CardContent className="flex-grow shadow-md pt-6 flex justify-start gap-3 min-h-[450px]">
              {formInstance.step.component}
            </CardContent>
            <CardFooter className="border-t border-gray-200 pt-5 flex justify-between">
              {/* form feedback */}
              <FormFeedback
                currentStep={formInstance.currentStepIndex}
                maxSteps={formInstance.steps.length - 1}
                isLastStep={formInstance.isLastStep}
                stepName={formInstance.step.title}
              />
              {/* navigation controls */}
              <div className="flex gap-2">
                {!formInstance.isFirstStep && (
                  <Button
                    size="sm"
                    type={"button"}
                    onClick={formInstance.backStep}
                  >
                    <ChevronLeftSquare className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                )}

                {formInstance.isLastStep ? (
                  <Button size="sm" disabled={!isValid}>
                    <SaveAll className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                ) : (
                  <Button size="sm">
                    <ChevronRightSquare className="h-4 w-4 mr-2" />
                    Next
                  </Button>
                )}
              </div>
            </CardFooter>
          </div>
        </Card>
      </form>
    </div>
  );
};
export default NewEscalationForm;
