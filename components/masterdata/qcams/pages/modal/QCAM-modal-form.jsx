"use client";

// libs
import * as z from "zod";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

// hooks
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useQCAMModal from "../../hooks/useQCAMModal";
import { useQuery } from "@tanstack/react-query";

// 3rd party components
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Select from "react-select";

// icons
import { SaveAllIcon } from "lucide-react";

// other things I initially forgot about

// form schema
const formSchema = z.object({
  ID: z.number().optional(),
  FIRST_NAME: z
    .string()
    .min(2, { message: "surely there is a first name, right? right?" }),
  LAST_NAME: z
    .string()
    .min(2, { message: "don't forget about the last name, it's important" }),
  EMAIL: z.string().email(),
  ALLOCATIONS: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .array()
    .optional(),
});

// test stuff
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
// test stuff

const QCAMForm = () => {
  // instantiate the things
  const modalInstance = useQCAMModal();

  const form = useForm({
    defaultValues: {
      ID: 0,
      FIRST_NAME: "",
      LAST_NAME: "",
      EMAIL: "",
      ALLOCATIONS: [],
    },
  });

  // function handlers
  const onSubmit = (values) => {
    console.log(values);

    modalInstance.onClose();
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
    >
      <Card className="p-4 shadow-lg bg-slate-50">
        {/* FIRST_NAME */}
        <div>
          <Label htmlFor="FIRST_NAME">First Name</Label>
          <Input
            {...form.register("FIRST_NAME")}
            name="FIRST_NAME"
            type="text"
            placeholder="..."
          />
        </div>
        {/* LAST_NAME */}
        <div>
          <Label htmlFor="LAST_NAME">Last Name</Label>
          <Input
            {...form.register("LAST_NAME")}
            name="LAST_NAME"
            type="text"
            placeholder="..."
          />
        </div>
        {/* EMAIL */}
        <div>
          <Label htmlFor="EMAIL">Email</Label>
          <Input
            {...form.register("EMAIL")}
            name="EMAIL"
            type="email"
            placeholder="..."
          />
        </div>
        {/* ALLOCATIONS */}
        <div>
          <Label htmlFor="ALLOCATIONS">Select Option</Label>
          <Controller
            name="ALLOCATIONS"
            control={form.control}
            defaultValue={[]}
            render={({ field }) => (
              <Select
                {...field}
                options={options}
                isMulti
                isClearable
                closeMenuOnSelect={false}
                className="w-full"
              />
            )}
          />
        </div>
        {form.formState.errors && (
          <div className="text-red-600">
            {form.formState.errors.root?.message}
          </div>
        )}
      </Card>
      <div className="flex items-center justify-between">
        <Badge variant="outline">step 1 of 1</Badge>
        <Button
          variant="default"
          type="submit"
          className="flex items-center"
          disabled={false}
        >
          <SaveAllIcon className="h-4 w-4 mr-4" />
          Save
        </Button>
      </div>
    </form>
  );
};

export default QCAMForm;
