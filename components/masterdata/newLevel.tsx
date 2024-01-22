"use client";

import axios from "axios";
import toast from "react-hot-toast";

// hooks
import { useSearchParams } from "@/hooks/useSearch";
import { useForm } from "react-hook-form";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// icons
import { SaveAllIcon } from "lucide-react";

// types
import { CustomerType, ColorType } from "@/types/general";

type NewEscalationLevelProps = {
  customers: Partial<CustomerType>[];
  colors: Partial<ColorType>[];
};

// form schema
const formSchema = z.object({
  GROUP_ID: z.string().min(2, {
    message: "please select a customer group for the new level",
  }),
  VALUE: z.string().min(1, {
    message: "please give the new level a proper name",
  }),
  LABEL: z.string().min(1, {
    message: "please assign a color / urgency to the new level",
  }),
  EXPLANATION: z.string(),
});

const NewEscalationLevel = () => {
  const [params, setParams] = useSearchParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      GROUP_ID: "",
      LABEL: "",
      VALUE: "",
      EXPLANATION: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const API_SERVER = `${params.target}/api/masterdata/level`;
    try {
      const response = await axios.post(API_SERVER, values);
      if (response) {
        toast.success("Successfully created!");
      }
    } catch (error) {
      console.log(error);
    }
    form.reset();
  };

  return (
    <Card className="px-4 py-4 w-[420px]">
      <CardHeader className="pb-4 px-2 pt-0 text-lg font-bold">
        New Escalation Level
      </CardHeader>
      <CardDescription className="pb-4 px-2 pt-2 text-justify">
        Please take the time to properly add a new escalation level. Errors will
        be higlighted and you can only save once you fixed them all.
      </CardDescription>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <Card className="p-4 shadow-lg bg-slate-50">
            <FormField
              control={form.control}
              name="GROUP_ID"
              render={({ field }) => (
                <FormItem className="pb-5">
                  <FormLabel>Customer Group</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select one..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="a">One thing</SelectItem>
                      <SelectItem value="b">One thing</SelectItem>
                      <SelectItem value="c">One thing</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="VALUE"
              render={({ field }) => (
                <FormItem className="pb-5">
                  <FormLabel>Escalation Level</FormLabel>
                  <FormControl className="w-[350px]">
                    <Input placeholder="..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="LABEL"
              render={({ field }) => (
                <FormItem className="pb-5">
                  <FormLabel>Level Color</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select one..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectContent>
                        <SelectItem value="a">One thing</SelectItem>
                        <SelectItem value="b">One thing</SelectItem>
                        <SelectItem value="c">One thing</SelectItem>
                      </SelectContent>
                    </SelectContent>
                  </Select>
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
            >
              <SaveAllIcon className="h-4 w-4 mr-4" />
              Save
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );

  return <div>Missing Props</div>;
};
export default NewEscalationLevel;
