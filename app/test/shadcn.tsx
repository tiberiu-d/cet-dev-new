"use client";

// libs
import * as z from "zod";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// components
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { group } from "console";

// types
type CustomerType = {
  label: string;
  value: string;
};

type ColorType = {
  label: string;
  value: string;
  code: string;
};

type ShadcnFormProps = {
  customers: CustomerType[];
  colors: ColorType[];
};

// form schema
const formSchema = z.object({
  group: z.string(),
  level: z.string(),
  color: z.string(),
  explanation: z.string(),
})

const ShadcnForm = ({ customers, colors }: ShadcnFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      group: "",
      level: "",
      color: "",
      explanation: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  if (customers && colors) return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className={`w-4 h-4 rounded-full bg-[#D7004B]`} />
        <FormField
          control={form.control}
          name="level"
          render={({field}) => (
            <FormItem>
              <FormLabel>Escalation Level</FormLabel>
              <FormControl>
                <Input placeholder="..." {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField control={form.control} name="group" render={({field})=>(
          <FormItem>
            <FormLabel>Customer Group</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select one..." />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {customers.map((elem)=>
                <SelectItem key={elem.label} value={elem.value}>{elem.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </FormItem>
        )}/>
        <FormField control={form.control} name="color" render={({field})=>(
          <FormItem>
            <FormLabel>Level Color</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select one..." />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {colors.map((elem)=> {
                  console.log(`w-4 h-4 rounded-full bg-[${elem.code}]`);
                  return (
                    <SelectItem key={elem.label} value={elem.value} className="flex items-center justify-between gap-5">
                      <div className={`w-4 h-4 rounded-full bg-[${elem.code}]`}>{elem.code}</div>
                      <div>{elem.label}</div>
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </FormItem>
        )}/>
        <Separator className="my-5"/>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )

  return <div>Missing Props</div>
};
export default ShadcnForm;
