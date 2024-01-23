"use client";

import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Select from "react-select";

const options: { value: string; label: string }[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const TestPage = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="selectOption">Select Option</label>
        <Controller
          name="selectOption"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <Select
              {...field}
              options={options}
              isMulti
              className="w-[300px]"
            />
          )}
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};
export default TestPage;
