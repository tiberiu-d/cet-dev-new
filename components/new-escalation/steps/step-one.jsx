"use client";

// hooks
import useEscalStore from "../store/useEscalStore";
import { Controller } from "react-hook-form";
import { useState, useEffect } from "react";

import FormWrapper from "../components/wrapper";

// UI components
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import dayjs from "dayjs";
import { Calendar as CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";

const StepOne = ({
  escal_status,
  escal_date,
  type,
  title,
  description,
  recurrence,
  descal_date,
  updateFields,
}) => {
  const [dateEscal, setDateEscal] = useState("");
  const [dateDescal, setDateDescal] = useState("");

  useEffect(() => {
    setDateEscal(escal_date);
    setDateDescal(descal_date);
  }, [escal_date, descal_date]);

  const escal_dateFn = (value) => {
    setDateEscal(value);
    updateFields({ escal_date: dayjs(value).format("DD.MM.YYYY") });
  };
  const descal_dateFn = (value) => {
    setDateDescal(value);
    updateFields({ descal_date: dayjs(value).format("DD.MM.YYYY") });
  };

  return (
    <FormWrapper>
      <div className="text-sm">
        <div className="row-1 row grid grid-cols-4 gap-5">
          <div className="formBox">
            <Label>Escalation Status</Label>
            <Select
              name="escal_status"
              value={escal_status}
              onValueChange={(value) => updateFields({ escal_status: value })}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="select one..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="formBox">
            <Label>
              Escalation Type{" "}
              <span className="text-xs">
                (<span className="font-bold text-red-500">*</span>)
              </span>
            </Label>
            <Select
              name="type"
              value={type}
              onValueChange={(value) => updateFields({ type: value })}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="select one..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0km">0km</SelectItem>
                <SelectItem value="0km&field">0km and Field</SelectItem>
                <SelectItem value="audit">Audit</SelectItem>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="field">Field</SelectItem>
                <SelectItem value="launch">Launch</SelectItem>
                <SelectItem value="logistics">Logistics</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="formBox">
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
                  {escal_date ? escal_date : <span>select one...</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  required
                  mode="single"
                  selected={dateEscal}
                  onSelect={escal_dateFn}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="formBox">
            <Label>De-Escalation Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {descal_date ? descal_date : <span>select one...</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  required
                  mode="single"
                  selected={dateDescal}
                  onSelect={descal_dateFn}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="row-2 row grid grid-cols-4 gap-5 mt-6">
          <div className="col-span-2">
            <div className="cell1 formBox2">
              <Label>
                Escalation Title{" "}
                <span className="text-xs">
                  (<span className="font-bold text-red-500">*</span>)
                </span>
              </Label>
              <Input
                value={title}
                placeholder="type value..."
                onChange={(field) =>
                  updateFields({ title: field.target.value })
                }
              />
            </div>
            <div className="cell2 flex items-center gap-5 mt-5">
              <Label>Is recurring?</Label>
              <Switch
                checked={recurrence}
                onCheckedChange={(field) => updateFields({ recurrence: field })}
              />
            </div>
          </div>
          <div className="col-span-2 formBox2">
            <Label>Escalation Description</Label>
            <Textarea
              rows={13}
              value={description}
              placeholder="type value..."
              onChange={(field) =>
                updateFields({ description: field.target.value })
              }
            />
          </div>
        </div>
      </div>
    </FormWrapper>
  );
};
export default StepOne;
