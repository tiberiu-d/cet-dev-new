"use client";

import dayjs from "dayjs";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import Select from "react-select";

// icons
import { Calendar as CalendarIcon } from "lucide-react";

// options
const escalationStatusOptions = [
  { value: "in_progress", label: "In Progress" },
  { value: "closed", label: "Closed" },
];
const escalationTypesOptions = [
  { value: "0km", label: "0 kilometers" },
  { value: "0kmfield", label: "0 kilometers & Field" },
  { value: "audit", label: "Audit" },
  { value: "development", label: "Development" },
  { value: "field", label: "Field" },
  { value: "launch", label: "Launch" },
  { value: "logistics", label: "Logistics" },
];

const StepOne = ({
  TYPE,
  STATUS,
  TITLE,
  DESCRIPTION,
  ESCAL_DATE,
  DESCAL_DATE,
  RECURRING,
  updateFields,
}) => {
  const escal_dateFn = (value) => {
    updateFields({ ESCAL_DATE: dayjs(value).format("DD.MM.YYYY") });
  };
  const descal_dateFn = (value) => {
    updateFields({ DESCAL_DATE: dayjs(value).format("DD.MM.YYYY") });
  };
  return (
    <div className="grid grid-cols-4 gap-5 justify-start w-[1152px]">
      <div>
        <Label>Escalation Status</Label>
        <Select
          name="STATUS"
          defaultValue={STATUS}
          options={escalationStatusOptions}
          onChange={(value) => updateFields({ STATUS: value })}
        />
      </div>
      <div>
        <Label>
          Escalation Type{" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Select
          name="TYPE"
          defaultValue={TYPE}
          options={escalationTypesOptions}
          onChange={(value) => updateFields({ TYPE: value })}
        />
      </div>
      <div>
        <Label>
          Escalation Date{" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {ESCAL_DATE ? ESCAL_DATE : <span>select one...</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              required
              mode="single"
              selected={ESCAL_DATE}
              onSelect={escal_dateFn}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Label>
          De-Escalation Date{" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {DESCAL_DATE ? DESCAL_DATE : <span>select one...</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              required
              mode="single"
              selected={DESCAL_DATE}
              onSelect={descal_dateFn}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="col-span-2">
        <Label>
          Escalation Title{" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Input
          value={TITLE}
          placeholder="type value..."
          onChange={(field) => updateFields({ TITLE: field.target.value })}
        />
      </div>
      <div />
      <div className="flex items-center gap-5">
        <Label>Is recurring?</Label>
        <Switch
          checked={RECURRING}
          onCheckedChange={(field) => updateFields({ RECURRING: field })}
        />
      </div>
      <div className="col-span-4">
        <Label>
          Escalation Description{" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Textarea
          rows={8}
          value={DESCRIPTION}
          placeholder="type value..."
          onChange={(field) =>
            updateFields({ DESCRIPTION: field.target.value })
          }
        />
      </div>
    </div>
  );
};
export default StepOne;
