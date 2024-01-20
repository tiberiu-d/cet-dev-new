"use client";

import { Button } from "@/components/ui/button";
import { usePostColor } from "@/services/masterdata/colors/mutations";

// hooks
import { useColors } from "@/services/masterdata/colors/queries";
import { ColorType } from "@/types/masterdata";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginPage = () => {
  const ColorQuery = useColors();

  const { register, handleSubmit } = useForm<ColorType>();
  const createColorMutation = usePostColor();
  const handleCreateColorSubmit: SubmitHandler<ColorType> = (
    data: Partial<ColorType>
  ) => {
    createColorMutation.mutate(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleCreateColorSubmit)}
        className="flex flex-col gap-2"
      >
        <h4>New Color</h4>
        <input placeholder="label..." {...register("LABEL")} />
        <input placeholder="value..." {...register("VALUE")} />
        <input placeholder="explanation..." {...register("EXPLANATION")} />
        <br />
        <Button type="submit" variant="default">
          submit
        </Button>
      </form>
      <ul>
        {ColorQuery.data?.map((color) => (
          <li key={color.ID} className="w-full flex items-center">
            <div className="border p-1 min-w-[150px]">{color.ID}</div>
            <div className="border p-1 min-w-[150px]">{color.LABEL}</div>
            <div className="border p-1 min-w-[150px]">{color.VALUE}</div>
            <div className="border p-1 min-w-[550px]">{color.EXPLANATION}</div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default LoginPage;
