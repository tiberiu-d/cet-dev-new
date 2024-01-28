"use client";

import { useEffect, useState } from "react";

const StepFive = ({ data, validateForm }) => {
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    // step1
    if (data.STATUS === "")
      setValidationErrors((prev) => [
        ...prev,
        { step: 1, message: "STATUS is needed" },
      ]);

    if (data.TYPE === "")
      setValidationErrors((prev) => [
        ...prev,
        { step: 1, message: "TYPE is needed" },
      ]);

    if (data.ESCAL_DATE === "")
      setValidationErrors((prev) => [
        ...prev,
        { step: 1, message: "Escalation Date is needed" },
      ]);
    if (data.DESCAL_DATE === "")
      setValidationErrors((prev) => [
        ...prev,
        { step: 1, message: "De-Escalation Date is needed" },
      ]);
    if (data.TITLE === "")
      setValidationErrors((prev) => [
        ...prev,
        { step: 1, message: "Escalation needs a TITLE" },
      ]);
    if (data.DESCRIPTION === "")
      setValidationErrors((prev) => [
        ...prev,
        { step: 1, message: "don't forget the DESCRIPTION" },
      ]);

    // step2
    if (data.CUSTOMER === "")
      setValidationErrors((prev) => [
        ...prev,
        { step: 2, message: "a CUSTOMER is needed" },
      ]);
    if (data.BRAND === "")
      setValidationErrors((prev) => [
        ...prev,
        { step: 2, message: "select a customer BRAND" },
      ]);
    if (data.LEVEL === "")
      setValidationErrors((prev) => [
        ...prev,
        { step: 2, message: "LEVEL is crucial" },
      ]);
    if (data.LOCATIONS === "")
      setValidationErrors((prev) => [
        ...prev,
        { step: 2, message: "no LOCATION(s) selected" },
      ]);
  }, [data]);

  function removeDuplicates(data) {
    const uniqueSet = new Set(data.map((item) => JSON.stringify(item)));
    const uniqueArray = Array.from(uniqueSet).map((item) => JSON.parse(item));
    return uniqueArray;
  }

  const FormErrors = removeDuplicates(validationErrors);

  if (!FormErrors.length) {
    validateForm(true);
  } else {
    validateForm(false);
  }

  //////
  const transformedErrors = FormErrors.reduce((acc, error) => {
    const existingError = acc.find((item) => item.step === error.step);

    if (existingError) {
      existingError.messages.push(error.message);
    } else {
      acc.push({ step: error.step, messages: [error.message] });
    }

    return acc;
  }, []);

  return (
    <div className="w-[1152px]">
      <div className="flex flex-col gap-2">
        {transformedErrors.map((item, idx) => (
          <div key={idx}>{item.messages}</div>
        ))}
      </div>
    </div>
  );
};
export default StepFive;
