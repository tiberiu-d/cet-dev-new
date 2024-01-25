"use client";

// form steps
import StepOne from "./steps/step-one";
import StepTwo from "./steps/step-two";
import StepThree from "./steps/step-three";
import StepFour from "./steps/step-four";

// hooks
import { useMultistepForm } from "./hooks/useMultistepForm";
import { useState, forwardRef } from "react";
import { useForm, Controller } from "react-hook-form";
import useEscalStore from "./store/useEscalStore";

// UI
import { Button } from "@/components/ui/button";
import {
  Card,
  CardFooter,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

// icons
import { ChevronRightSquare, ChevronLeftSquare, SaveAll } from "lucide-react";

// my components
import FormLogo from "./components/logo";
import FormFeedback from "./components/feedback";

// initial data
import { INITIAL_DATA } from "./config";

const MultistepForm = () => {
  const escalationInstance = useEscalStore();
  const { control, register, handleSubmit, watch, formState } = useForm({
    defaultValues: escalationInstance.defaultValues,
  });

  // states
  const [isValid, setIsValid] = useState(true);
  const [data, setData] = useState(INITIAL_DATA);

  // handler functions
  const updateFields = (fields) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const onFormValidate = (flag) => {
    setIsValid(flag);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
  };

  const mySubmitFunction = (values) => {
    console.log(values);
  };

  // config
  const formSteps = [
    {
      title: "basic info",
      component: (
        <StepOne
          key={1}
          control={control}
          register={register}
          formData={watch()}
          formState={formState}
        />
      ),
    },
    // {
    //   title: "customer info",
    //   component: <StepTwo key={2} {...data} updateFields={updateFields} />,
    // },
    // {
    //   title: "vitesco info",
    //   component: <StepThree key={3} {...data}></StepThree>,
    // },
    // {
    //   title: "follow-up info",
    //   component: <StepFour key={3} {...data}></StepFour>,
    // },
  ];
  const MultistepForm_Instance = useMultistepForm(formSteps);

  return (
    <div className="bg-neutral-100/70 backdrop-blur-xs fixed inset-0 w-full h-full flex items-center justify-center z-[2]">
      <form onSubmit={handleSubmit(mySubmitFunction)} className="z-[3]">
        <Card className="main-card flex flex-col justify-between rounded-xl shadow-2xl border-2 border-gray-200">
          <div className="flex flex-col">
            <CardHeader className="relative flex flex-row items-center justify-between bg-cyan-50 border-b-2 border-gray-200 rounded-t-xl">
              <span className="text-xl font-bold">Add New Escalation</span>
              <FormLogo />
            </CardHeader>
            <CardContent>{MultistepForm_Instance.step.component}</CardContent>
            <CardFooter className="border-t border-gray-200 pt-5 flex justify-between">
              <FormFeedback
                currentStepIdx={MultistepForm_Instance.currentStepIdx + 1}
                maxSteps={MultistepForm_Instance.steps.length - 1}
                isLastStep={MultistepForm_Instance.isLastStep}
                stepName={MultistepForm_Instance.step.title}
              />
              <div className="flex gap-2">
                {!MultistepForm_Instance.isFirstStep && (
                  <Button
                    size="sm"
                    type={"button"}
                    onClick={MultistepForm_Instance.navigateBack}
                  >
                    <ChevronLeftSquare className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                )}
                {MultistepForm_Instance.isLastStep ? (
                  <Button size="sm" disabled={!isValid}>
                    <SaveAll className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    onClick={MultistepForm_Instance.navigateForward}
                  >
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

export default MultistepForm;
