"use client";

import toast from "react-hot-toast";
import { HexColorPicker } from "react-colorful";

// hooks
import { useForm } from "react-hook-form";
import {
  usePostColor,
  useUpdateColor,
} from "@/services/masterdata/colors/mutations";
import { useColorsByID } from "@/services/masterdata/colors/queries";

// libs
import * as z from "zod";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

// components
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// icons
import { SaveAllIcon } from "lucide-react";

// form schema definition
const formSchema = z.object({
  ID: z.number(),
  LABEL: z.string().min(2, {
    message: "please give the new color a reference name",
  }),
  VALUE: z.string().min(2, {
    message: "every color needs a color code, select one",
  }),
  EXPLANATION: z.string().min(2, {
    message: "give the new color a description, when would it be used?",
  }),
});

type UpdateColorProps = {
  ID: number;
};

const UpdateColor = ({ ID }: UpdateColorProps) => {
  const ColorsByIDQuery = useColorsByID(ID);
  const updateQuery = useUpdateColor();

  console.log(ColorsByIDQuery.data);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ID: ColorsByIDQuery.data?.ID,
      LABEL: ColorsByIDQuery.data?.LABEL,
      VALUE: ColorsByIDQuery.data?.VALUE,
      EXPLANATION: ColorsByIDQuery.data?.EXPLANATION,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    updateQuery.mutate(values);

    if (updateQuery.isSuccess) {
      toast.success("Successfully modified the Color");
    }

    if (updateQuery.isError) {
      toast.error("Something went wrong when saving data...");
    }

    form.reset();
  };

  return (
    <>
      <CardHeader className="pb-4 px-2 pt-0 text-lg font-bold">
        Modify Color
      </CardHeader>
      <CardDescription className="pb-4 px-2 pt-2 text-justify">
        Errors will be higlighted and you can only save once you fixed them all.
      </CardDescription>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <Card className="p-4 shadow-lg bg-slate-50">
            <FormField
              control={form.control}
              name="LABEL"
              render={({ field }) => (
                <FormItem className="pb-5">
                  <FormLabel>Color Label</FormLabel>
                  <FormControl className="w-[350px]">
                    <Input
                      placeholder="..."
                      {...field}
                      defaultValue={ColorsByIDQuery.data?.LABEL}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="VALUE"
              render={({ field }) => (
                <FormItem className="pb-5">
                  <FormLabel>Hex-code Value</FormLabel>
                  <FormControl>
                    <HexColorPicker
                      style={{ width: "100%" }}
                      color={field.value}
                      onChange={(color: any) => field.onChange(color)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="EXPLANATION"
              render={({ field }) => (
                <FormItem className="pb-5">
                  <FormLabel>Additional Information</FormLabel>
                  <FormControl className="w-[350px]">
                    <Textarea
                      placeholder="..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Card>
          <div className="flex items-center justify-between">
            <Badge variant="outline">step 1 of 1</Badge>
            <Button
              variant="default"
              type="submit"
              className="flex items-center"
              disabled={updateQuery.isPending}
            >
              <SaveAllIcon className="h-4 w-4 mr-4" />
              {updateQuery.isPending ? "Updating..." : "Update"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
export default UpdateColor;
