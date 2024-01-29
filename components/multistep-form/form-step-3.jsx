"use client";
import dayjs from "dayjs";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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

// settings and stuff
const API_PORT = 1999;
const API_URL = `http://localhost:${API_PORT}/api/multistep/`;
const axiosInstance = axios.create({ baseURL: API_URL });

const CASTATUS_OPTIONS = [
  { value: "in_progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
];

const StepThree = ({
  updateFields,
  ESTDESCAL_DATE,
  VQTSPN,
  SUPPLIER,
  PARTS,
  DIVISION,
  BU,
  SEGMENT,
  SUBSEGMENT,
  ADDBUS,
  PLANTS,
  CASTATUS,
  CADESCRIPTION,
}) => {
  const { data: PlantsData, isLoading: Plants_isLoading } = useQuery({
    queryKey: ["Plants"],
    queryFn: async () => {
      return (await axiosInstance.get("plants")).data;
    },
  });
  const { data: AddBUsData, isLoading: AddBUs_isLoading } = useQuery({
    queryKey: ["AdditionalBUs"],
    queryFn: async () => {
      return (await axiosInstance.get("bus")).data;
    },
  });
  const { data: DivisionsData, isLoading: Divisions_isLoading } = useQuery({
    queryKey: ["Divisions"],
    queryFn: async () => {
      return (await axiosInstance.get("divisions")).data;
    },
  });
  const { data: BUsData, isLoading: BUs_isLoading } = useQuery({
    queryKey: ["BusinessUnits", DIVISION.value],
    queryFn: async () => {
      return (await axiosInstance.get(`bus/${DIVISION.value}`)).data;
    },
  });
  const { data: SegmentsData, isLoading: Segments_isLoading } = useQuery({
    queryKey: ["Segments", BU.value],
    queryFn: async () => {
      return (await axiosInstance.get(`segments/${BU.value}`)).data;
    },
  });
  const { data: SubSegmentsData, isLoading: SubSegments_isLoading } = useQuery({
    queryKey: ["SubSegments", SEGMENT.value],
    queryFn: async () => {
      return (await axiosInstance.get(`subsegments/${SEGMENT.value}`)).data;
    },
  });
  return (
    <div className="grid grid-cols-4 gap-5 justify-start w-[1152px]">
      <div>
        <Label>
          Estimated De-escalation Date{" "}
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
              {ESTDESCAL_DATE ? ESTDESCAL_DATE : <span>select one...</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              required
              mode="single"
              selected={ESTDESCAL_DATE}
              onSelect={(value) =>
                updateFields({
                  ESTDESCAL_DATE: dayjs(value).format("DD.MM.YYYY"),
                })
              }
            />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Label>
          VQTS Part Number{" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Input
          type="text"
          value={VQTSPN}
          defaultValue={VQTSPN}
          placeholder="type value..."
          onChange={(field) => updateFields({ VQTSPN: field.target.value })}
        />
      </div>
      <div>
        <Label>
          Supplier{" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Input
          type="text"
          value={SUPPLIER}
          defaultValue={SUPPLIER}
          placeholder="type value..."
          onChange={(field) => updateFields({ SUPPLIER: field.target.value })}
        />
      </div>
      <div>
        <Label>Number of Affected Parts</Label>
        <Input
          type="number"
          value={PARTS}
          defaultValue={0}
          placeholder="type value..."
          onChange={(field) => updateFields({ PARTS: field.target.value })}
        />
      </div>
      <div>
        <Label>
          Vitesco Division{" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Select
          isSearchable
          name="DIVISION"
          defaultValue={DIVISION}
          options={DivisionsData}
          isLoading={Divisions_isLoading}
          onChange={(value) => updateFields({ DIVISION: value })}
        />
      </div>
      <div>
        <Label>
          Vitesco Business Unit{" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Select
          isSearchable
          name="BU"
          defaultValue={BU}
          options={BUsData}
          isLoading={BUs_isLoading}
          onChange={(value) => updateFields({ BU: value })}
        />
      </div>
      <div>
        <Label>
          Vitesco Segment{" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Select
          isSearchable
          name="SEGMENT"
          defaultValue={SEGMENT}
          options={SegmentsData}
          isLoading={Segments_isLoading}
          onChange={(value) => updateFields({ SEGMENT: value })}
        />
      </div>
      <div>
        <Label>
          Vitesco Sub-Segment{" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Select
          isSearchable
          name="SUBSEGMENT"
          defaultValue={SUBSEGMENT}
          options={SubSegmentsData}
          isLoading={SubSegments_isLoading}
          onChange={(value) => updateFields({ SUBSEGMENT: value })}
        />
      </div>
      <div className="col-span-2">
        <Label>Additional Business Units</Label>
        <Select
          isMulti
          isSearchable
          isClearable
          closeMenuOnSelect={false}
          name="ADDBUS"
          defaultValue={ADDBUS}
          options={AddBUsData}
          isLoading={AddBUs_isLoading}
          onChange={(value) => updateFields({ ADDBUS: value })}
        />
      </div>
      <div className="col-span-2">
        <Label>
          Affected Vitesco Plan(s){" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Select
          isMulti
          isSearchable
          isClearable
          closeMenuOnSelect={false}
          name="PLANTS"
          defaultValue={PLANTS}
          options={PlantsData}
          isLoading={Plants_isLoading}
          onChange={(value) => updateFields({ PLANTS: value })}
        />
      </div>
      <div>
        <Label>Containment Action</Label>
        <Select
          name="CASTATUS"
          defaultValue={CASTATUS}
          options={CASTATUS_OPTIONS}
          onChange={(value) => updateFields({ CASTATUS: value })}
        />
      </div>
      <div className="col-span-3">
        <Label>Containment Action Description</Label>
        <Textarea
          rows={2}
          value={CADESCRIPTION}
          placeholder="type value..."
          onChange={(field) =>
            updateFields({ CADESCRIPTION: field.target.value })
          }
        />
      </div>
    </div>
  );
};
export default StepThree;
