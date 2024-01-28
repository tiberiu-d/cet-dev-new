import dayjs from "dayjs";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Select from "react-select";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// icons
import { Calendar as CalendarIcon } from "lucide-react";

const ASTATUS_OPTIONS = [
  { value: "in_progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
];

const StepFour = ({
  ASTATUS,
  ARESPONSIBLE,
  ADUEDATE,
  ADESCRIPTION,
  updateFields,
}) => {
  return (
    <div className="grid grid-cols-4 gap-5 justify-start w-[1152px]">
      <div>
        <Label>Action Status</Label>
        <Select
          name="ASTATUS"
          defaultValue={ASTATUS}
          options={ASTATUS_OPTIONS}
          onChange={(value) => updateFields({ ASTATUS: value })}
        />
      </div>
      <div>
        <Label>Action Due Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {ADUEDATE ? ADUEDATE : <span>select one...</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              required
              mode="single"
              selected={ADUEDATE}
              onSelect={(value) =>
                updateFields({ ADUEDATE: dayjs(value).format("DD.MM.YYYY") })
              }
            />
          </PopoverContent>
        </Popover>
      </div>
      <div />
      <div>
        <Label>Action Responsible</Label>
        <Input
          type="text"
          value={ARESPONSIBLE}
          placeholder="type here..."
          onChange={(field) =>
            updateFields({ ARESPONSIBLE: field.target.value })
          }
        />
      </div>
      <div className="col-span-4">
        <Label>Action Description</Label>
        <Textarea
          rows={4}
          value={ADESCRIPTION}
          placeholder="type value..."
          onChange={(field) =>
            updateFields({ ADESCRIPTION: field.target.value })
          }
        />
      </div>
      <div className="col-span-4" />
      <div className="col-span-4" />
      <div className="col-span-4" />
      <div className="col-span-4" />
      <div className="col-span-4" />
      <div className="col-span-4" />
      <div className="col-span-4" />
      <div className="col-span-4" />
      <div className="col-span-4" />
    </div>
  );
};
export default StepFour;
