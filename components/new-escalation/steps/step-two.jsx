"use client";

// hooks
import useEscalStore from "../store/useEscalStore";
import { Controller } from "react-hook-form";

// wrapper
import FormWrapper from "../components/wrapper";

// UI libs
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const StepTwo = ({ control, formData, formState }) => {
  // hook instance
  const escalationInstance = useEscalStore();

  return (
    <FormWrapper>
      {/* STATUS */}
      <div className="flex flex-col items-start justify-start w-full gap-3">
        <div>
          <Label htmlFor="TITLE">Title</Label>
          <Controller
            name="TITLE"
            control={control}
            value="open"
            render={({ field }) => <Input {...field} />}
          />
        </div>
      </div>
    </FormWrapper>
  );
};
export default StepTwo;
