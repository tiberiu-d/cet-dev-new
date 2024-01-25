"use client";

// hooks
import useEscalStore from "../store/useEscalStore";
import { Controller } from "react-hook-form";
import { useState, useEffect } from "react";

import FormWrapper from "../components/wrapper";
import "react-calendar/dist/Calendar.css";

// UI components
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
// import { Calendar } from "@/components/ui/calendar";
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
import DatePicker from "react-date-picker";
import Calendar from "react-calendar";

const StepOne = ({ control, register, formData, formState }) => {
  return (
    <FormWrapper>
      <div className="grid grid-cols-4 gap-5">
        {/* TITLE */}
        <div className="flex flex-col gap-3">
          <Label htmlFor="TITLE">Escalation Title</Label>
          <Input
            {...register("TITLE", {
              required: "what, no title?!",
              minLength: {
                value: 5,
                message: "an escalation title must have at least 5 characters",
              },
            })}
            name="TITLE"
            type="text"
            placeholder="..."
          />
          {formState.errors.TITLE && (
            <div className="text-red-500">{formState.errors.TITLE.message}</div>
          )}
        </div>
        {/* DESCRIPTION */}
        <div className="flex flex-col gap-3">
          <Label htmlFor="DESCRIPTION">Escalation Description</Label>
          <Input
            {...register("DESCRIPTION", {
              required: "what, no description?!",
              minLength: {
                value: 5,
                message:
                  "an escalation description must have at least 5 characters",
              },
            })}
            name="DESCRIPTION"
            type="text"
            placeholder="..."
          />
          {formState.errors.DESCRIPTION && (
            <div className="text-red-500">
              {formState.errors.DESCRIPTION.message}
            </div>
          )}
        </div>
        {/* STATUS */}
        <div className="flex flex-col gap-3">
          <Label htmlFor="STATUS" className="w-full">
            Escalation Status
          </Label>
          <Controller
            {...register("STATUS", {
              required: "we need a status for this escalation",
            })}
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger>
                  <SelectValue placeholder="select one..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">In Progress</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        {/* ESCAL_DATE */}
        <div className="flex flex-col gap-3">
          <Label htmlFor="ESCAL_DATE">Escalation Date</Label>
          <Controller
            control={control}
            {...register("ESCAL_DATE", {
              required: "we need the escalation date",
            })}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                value={field.value}
                onChangeCapture={field.onChange}
              />
            )}
          />
        </div>
        {/* boolean stuff */}
        <div className="flex flex-col gap-3">
          <Label htmlFor="RECURRING">Recurring?</Label>
          <Controller
            control={control}
            {...register("RECURRING")}
            render={({ field }) => (
              <Switch
                {...field}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>
      </div>
    </FormWrapper>
  );
};
export default StepOne;
