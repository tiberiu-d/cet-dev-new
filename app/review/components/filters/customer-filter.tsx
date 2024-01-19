"use client";

import axios from "axios";
import { useState } from "react";
import { cn } from "@/lib/utils";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "@/hooks/useSearch";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { SearchParamsType } from "@/types/search";

// fetch data function
const fetchData = async (params: SearchParamsType) => {
  const TARGET = `${params.target}/api/masterdata/customers`;

  const response = await axios.get(TARGET);
  return response.data.results;
};

type CustomerType = {
  LABEL: string;
  VALUE: string;
};

const CustomerFilter = () => {
  const [open, setOpen] = useState(false);
  const [params, setParams] = useSearchParams();

  const { data: customers } = useQuery<CustomerType[]>({
    queryKey: ["customers", params],
    queryFn: () => fetchData(params),
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[220px] justify-between"
        >
          {params.cust
            ? customers?.find(
                (customer) =>
                  customer.VALUE.toLowerCase() === params.cust.toLowerCase()
              )?.LABEL
            : "Select customer..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[220px] p-0">
        <Command>
          <CommandInput placeholder="Search customer..." className="h-9" />
          <CommandEmpty>No customer found.</CommandEmpty>
          <CommandGroup className="max-h-[300px] hover:overflow-y-scroll">
            {customers?.map((customer) => (
              <CommandItem
                key={customer.VALUE}
                value={customer.VALUE}
                onSelect={(currentValue) => {
                  setParams({ ...params, cust: currentValue });
                  setOpen(false);
                }}
              >
                {customer.LABEL}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    params.cust === customer.VALUE.toLowerCase()
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default CustomerFilter;
