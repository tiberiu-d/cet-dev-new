"use client";

// components
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

const ShadcnForm = ({ customers, colors }: ShadcnFormProps) => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  if (customers && colors) return <div>ShadcnForm</div>;

  return <div>Missing Props</div>;
};
export default ShadcnForm;
