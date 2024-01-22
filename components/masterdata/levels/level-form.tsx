"use client";

// libs
import * as z from "zod";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

// hooks
import { useForm } from "react-hook-form";

// additional components
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import useLevelModal from "@/hooks/modals/useLevelModal";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  usePostLevel,
  usePutLevelByID,
} from "@/services/masterdata/levels/mutations";

// -------------------------------------------
// here comes trouble
type CustomerType = {
  label: string;
  value: string;
};
type ColorType = {
  id: string;
  label: string;
  value: string;
  code: string;
};

const fetchCustomers = async () => {
  const TARGET = `http://localhost:1999/api/masterdata/customers`;

  const response = await axios.get(TARGET);

  // change the thing to the thing because of the thing and the other thing
  var results = [
    response.data.results.map((elem: any) => {
      return { label: elem.LABEL, value: elem.GROUP_ID };
    }),
  ];

  // export the thing while considering the other thing and the thing
  return results[0];
};
const fetchColors = async () => {
  const TARGET = `http://localhost:1999/api/masterdata/colors`;

  const response = await axios.get(TARGET);

  var results = [
    response.data.map((elem: any) => {
      return {
        label: elem.EXPLANATION,
        value: elem.ID,
        code: elem.VALUE,
      };
    }),
  ];
  return results[0];
};
// -------------------------------------------

// form schema definition
const formSchema = z.object({
  ID: z.number().optional(),
  GROUP_ID: z.string().min(2, {
    message: "please select a customer group from the list",
  }),
  COLOR_ID: z.string().min(1, "please select a color code for this level"),
  VALUE: z.string().min(2, {
    message: "every level needs a name, make it a good one",
  }),
  EXPLANATION: z.string().min(2, {
    message: "give the new level a description, some details about it",
  }),
});

const LevelForm = () => {
  // danger
  const { data: customers } = useQuery<CustomerType[]>({
    queryKey: ["customers"],
    queryFn: () => fetchCustomers(),
  });

  const { data: colors } = useQuery<ColorType[]>({
    queryKey: ["colors"],
    queryFn: () => fetchColors(),
  });
  // end of danger

  // instantiate all the hooks and stuff
  const storeLevelModal = useLevelModal();
  const postLevel = usePostLevel();
  const editLevel = usePutLevelByID();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: storeLevelModal.defaultValues,
  });

  // function handlers
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (values.ID === 0) {
      postLevel.mutate(values);

      toast.success("Successfully added new Escalation Level");
      setTimeout(() => storeLevelModal.onClose(), 500);

      form.reset();
    } else {
      editLevel.mutate(values);
      toast.success("Successfully edited the Color");
      setTimeout(() => storeLevelModal.onClose(), 500);

      form.reset();
    }
  };

  if (customers && colors)
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <Card className="p-4 shadow-lg bg-slate-50">
            {/* GROUP_ID */}
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
                      {customers.map((elem) => (
                        <SelectItem key={elem.label} value={elem.value}>
                          {elem.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* COLOR_ID */}
            <FormField
              control={form.control}
              name="COLOR_ID"
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
                      {colors.map((elem) => {
                        return (
                          <SelectItem
                            key={elem.id}
                            value={elem.value.toString()}
                          >
                            <div
                              key={elem.id}
                              className="flex items-center justify-between gap-5"
                            >
                              <div
                                key={elem.id}
                                style={{ backgroundColor: `${elem.code}` }}
                                className={cn("w-4 h-4 rounded-full border")}
                              />
                              <div key={elem.id}>{elem.label}</div>
                            </div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* VALUE */}
            <FormField
              control={form.control}
              name="VALUE"
              render={({ field }) => (
                <FormItem className="pb-5">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* EXPLANATION */}
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
export default LevelForm;
