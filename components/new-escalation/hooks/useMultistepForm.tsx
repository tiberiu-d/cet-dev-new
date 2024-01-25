import { ReactElement, useState } from "react";

type MultistepFormType = {
  title: string;
  component: ReactElement;
};

const useMultistepForm = (steps: MultistepFormType[]) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const navigateForward = () => {
    // go forward/submit button logic
    // -------------------
    // get the current idx (current step) and
    // check to see if you can go forward or not
    setCurrentStepIdx((idx) => {
      if (idx >= steps.length - 1) return idx;
      return idx + 1;
    });
  };
  const navigateBack = () => {
    // go back button
    // -------------------
    // get the current idx (current step) and
    // check to see if you can go forward or not
    setCurrentStepIdx((idx) => {
      if (idx <= 0) return idx;
      return idx - 1;
    });
  };
  const goTo = (idx: number) => {
    // navigate to a specific step
    setCurrentStepIdx(idx);
  };

  return {
    steps,
    currentStepIdx,
    step: steps[currentStepIdx],
    goTo,
    navigateBack,
    navigateForward,
    isFirstStep: currentStepIdx === 0,
    isLastStep: currentStepIdx === steps.length - 1,
  };
};

export { useMultistepForm };
