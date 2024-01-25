"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// formSchema def
const formSchema = z.object({
  // page1
  STATUS: z.string().min(1, "STATUS is required"),
  TYPE: z.string().min(1, "STATUS is required"),
  ESCAL_DATE: z.date(),
  DESCAL_DATE: z.date(),
  TITLE: z.string().min(5, "Give the title at least 5 characters"),
  DESCRIPTION: z.string().min(5, "Give the title at least 5 characters"),
  RECURRING: z.boolean(),
  // page2
});

type Inputs = z.infer<typeof formSchema>;
type FieldName = keyof Inputs;

const steps = [
  {
    id: "Step 1",
    name: "Basic Information",
    fields: [],
  },
  { id: "Step 2", name: "Customer Information", fields: [] },
  { id: "Step 3", name: "Vitesco Information", fields: [] },
  { id: "Step 4", name: "Something else", fields: [] },
  { id: "Step 5", name: "Completed!" },
];

const TestPage = () => {
  // basic states
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
  });

  // handlers
  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  // nav functions
  const goForwards = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const goBackwards = async () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <section className="flex flex-col justify-between w-[1152px]">
        {/* steps */}
        <nav aria-label="Progress" className="mb-10">
          <ol
            role="list"
            className="space-y-4 md:flex md:space-x-8 md:space-y-0"
          >
            {steps.map((step, index) => (
              <li key={step.name} className="md:flex-1">
                {currentStep > index ? (
                  <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-sky-600 transition-colors ">
                      {step.id}
                    </span>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                ) : currentStep === index ? (
                  <div
                    className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                    aria-current="step"
                  >
                    <span className="text-sm font-medium text-sky-600">
                      {step.id}
                    </span>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                ) : (
                  <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-gray-500 transition-colors">
                      {step.id}
                    </span>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <Separator />

        {/* Form */}
        {currentStep === 0 && <p>Hello world</p>}
        {currentStep === 1 && (
          <>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Step 2
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Do your thing
            </p>
          </>
        )}
        {currentStep === 2 && (
          <>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Step 3
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Do your thing
            </p>
          </>
        )}
        {currentStep === 3 && (
          <>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Step 4
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Do your thing
            </p>
          </>
        )}
        {currentStep === 4 && (
          <>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Finish!
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Thank you!</p>
          </>
        )}

        {/* navigation */}
        <div className="mt-8 pt-5">
          <div className="flex justify-between">
            <Button
              type="button"
              onClick={goBackwards}
              disabled={currentStep === 0}
            >
              Go Back
            </Button>
            <Button
              type="button"
              onClick={goForwards}
              disabled={currentStep === steps.length - 1}
            >
              Go Forward
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default TestPage;
