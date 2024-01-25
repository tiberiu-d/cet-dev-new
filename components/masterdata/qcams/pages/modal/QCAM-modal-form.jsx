"use client";

// libs
import * as z from "zod";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
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
import { PulseLoader } from "react-spinners";

// --- query fetch functions
const fetchCustomers = async () => {
  const TARGET = `http://localhost:1999/api/masterdata/customers`;
  const response = await axios.get(TARGET);

  var results = [
    response.data.results.map((elem) => {
      return { value: elem.GROUP_ID, label: elem.LABEL };
    }),
  ];

  return results[0];
};
// ---

// other things I initially forgot about
import { usePostQCAM, usePutQCAMByID } from "../../services/mutations";

const QCAMForm = () => {
  // get data for customers dropdown
  const { data: customers, isLoading: customersLoading } = useQuery({
    queryKey: ["allCustomers"],
    queryFn: () => fetchCustomers(),
  });

  // instantiate the hooks
  const modalInstance = useQCAMModal();
  const postQCAM = usePostQCAM();
  const editQCAM = usePutQCAMByID();
  const form = useForm({
    defaultValues: modalInstance.defaultValues,
  });

  // function handlers
  const onSubmit = (values) => {
    if (values.ID === 0) {
      // add
      postQCAM.mutate(values);
    } else {
      // edit
      editQCAM.mutate(values);
    }

    modalInstance.onClose();
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
    >
      <Card className="p-4 shadow-lg bg-slate-50 flex flex-col gap-4">
        {/* FIRST_NAME */}
        <div className="flex flex-col items-start justify-start w-full gap-3">
          <Label htmlFor="FIRST_NAME">First Name</Label>
          <Input
            {...form.register("FIRST_NAME", {
              required: "please assign a first name",
              minLength: {
                value: 2,
                message: "first name must have at least 2 characters",
              },
            })}
            name="FIRST_NAME"
            type="text"
            placeholder="..."
          />
          {form.formState.errors.FIRST_NAME && (
            <div className="text-red-500">
              {form.formState.errors.FIRST_NAME.message}
            </div>
          )}
        </div>
        {/* LAST_NAME */}
        <div className="flex flex-col items-start justify-start w-full gap-3">
          <Label htmlFor="LAST_NAME">Last Name</Label>
          <Input
            {...form.register("LAST_NAME", {
              required: "we need this ...",
              minLength: {
                value: 2,
                message: "last name must have at least 2 characters",
              },
            })}
            name="LAST_NAME"
            type="text"
            placeholder="..."
          />
          {form.formState.errors.LAST_NAME && (
            <div className="text-red-500">
              {form.formState.errors.LAST_NAME.message}
            </div>
          )}
        </div>
        {/* EMAIL */}
        <div className="flex flex-col items-start justify-start w-full gap-3">
          <Label htmlFor="EMAIL">Email</Label>
          <Input
            {...form.register("EMAIL", {
              required: "we need an email to keep in contact",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9._-]+\.[a-z]{2,4}$/,
                message: "must be a proper email",
              },
            })}
            name="EMAIL"
            type="text"
            placeholder="..."
          />
          {form.formState.errors.EMAIL && (
            <div className="text-red-500">
              {form.formState.errors.EMAIL.message}
            </div>
          )}
        </div>
        {/* ALLOCATIONS */}
        <div className="flex flex-col items-start justify-start w-full gap-3">
          <Label htmlFor="ALLOCATIONS">Allocate Customer Group(s)</Label>
          <Controller
            name="ALLOCATIONS"
            control={form.control}
            defaultValue={[]}
            render={({ field }) => (
              <Select
                {...field}
                options={customers}
                isMulti
                isClearable
                placeholder="select at least one option, if applicable"
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
