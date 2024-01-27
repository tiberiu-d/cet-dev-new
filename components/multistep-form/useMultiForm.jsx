"use client";

import { useState } from "react";

export function useMultistepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function nextStep() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function backStep() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function gotoStep(index) {
    setCurrentStepIndex(index);
  }

  return {
    step: steps[currentStepIndex],
    steps,
    currentStepIndex,
    nextStep,
    backStep,
    gotoStep,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
}
