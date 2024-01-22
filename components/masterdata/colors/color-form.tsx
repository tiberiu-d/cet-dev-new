"use client";

// libs
import * as z from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { HexColorPicker } from "react-colorful";

//hooks
import useColorModal from "@/hooks/modals/useColorModal";
import { useForm } from "react-hook-form";
import {
  usePostColor,
  useUpdateColor,
} from "@/services/masterdata/colors/mutations";

// components
import { Card } from "@/components/ui/card";
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
  ID: z.number().optional(),
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

const ColorForm = () => {
  const colorModalInstance = useColorModal();
  const createColorMutation = usePostColor();
  const updateColorMutation = useUpdateColor();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: colorModalInstance.defaultValues,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (values.ID === 0) {
      createColorMutation.mutate(values);
      toast.success("Successfully added new Color");
      setTimeout(() => colorModalInstance.onClose(), 500);

      form.reset();
    } else {
      updateColorMutation.mutate(values);

      if (updateColorMutation.isError) {
        toast.error("Successfully edited the Color");
      } else {
        toast.success("Successfully edited the Color");
        setTimeout(() => colorModalInstance.onClose(), 500);

        form.reset();
      }
    }
  };

  return (
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
                <FormControl>
                  <Input placeholder="..." {...field} />
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
                <FormControl>
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
            disabled={false}
          >
            <SaveAllIcon className="h-4 w-4 mr-4" />
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default ColorForm;
