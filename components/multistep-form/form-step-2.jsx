"use client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Select from "react-select";

// settings and stuff
const API_PORT = 1999;
const API_URL = `http://localhost:${API_PORT}/api/multistep/`;
const axiosInstance = axios.create({ baseURL: API_URL });

const StepTwo = ({
  CUSTOMER,
  BRAND,
  LEVEL,
  VEHICLES,
  BRANDS,
  LOCATIONS,
  MODELS,
  PLATFORMS,
  CUSTOMER_IMPACT,
  CONSUMER_IMPACT,
  updateFields,
}) => {
  // do some stuff
  const { data: CGData, isLoading: CG_isLoading } = useQuery({
    queryKey: ["CustomerGroups"],
    queryFn: async () => {
      return (await axiosInstance.get("customers")).data;
    },
  });
  const { data: BData, isLoading: B_isLoading } = useQuery({
    queryKey: ["Brands"],
    queryFn: async () => {
      return (await axiosInstance.get(`brands`)).data;
    },
  });
  const { data: CBData, isLoading: CB_isLoading } = useQuery({
    queryKey: ["CustomerBrands", CUSTOMER.value],
    queryFn: async () => {
      return (await axiosInstance.get(`brands/${CUSTOMER.value}`)).data;
    },
  });
  const { data: LData, isLoading: L_isLoading } = useQuery({
    queryKey: ["CustomerLocations", CUSTOMER.value],
    queryFn: async () => {
      return (await axiosInstance.get(`locations/${CUSTOMER.value}`)).data;
    },
  });
  const { data: LevelData, isLoading: Level_isLoading } = useQuery({
    queryKey: ["CustomerLevels", CUSTOMER.value],
    queryFn: async () => {
      return (await axiosInstance.get(`levels/${CUSTOMER.value}`)).data;
    },
  });

  // do some stuff
  return (
    <div className="grid grid-cols-4 gap-5 justify-start w-[1152px]">
      <div>
        <Label>
          Customer Group{" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Select
          name="CUSTOMER"
          defaultValue={CUSTOMER}
          options={CGData}
          isLoading={CG_isLoading}
          onChange={(value) => {
            updateFields({ CUSTOMER: value });
          }}
        />
      </div>
      <div>
        <Label>
          Customer Brand{" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Select
          name="BRAND"
          defaultValue={BRAND}
          isLoading={CB_isLoading}
          options={CBData}
          onChange={(value) => updateFields({ BRAND: value })}
        />
      </div>
      <div>
        <Label>
          Escalation Level{" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Select
          name="LEVEL"
          defaultValue={LEVEL}
          options={LevelData}
          isLoading={Level_isLoading}
          onChange={(value) => updateFields({ LEVEL: value })}
        />
      </div>
      <div>
        <Label>Number of Affected Vehicles</Label>
        <Input
          type="number"
          value={VEHICLES}
          placeholder="type value..."
          onChange={(field) => updateFields({ VEHICLES: field.target.value })}
        />
      </div>
      <div className="col-span-2">
        <Label>
          Customer Location(s){" "}
          <span className="text-xs">
            (<span className="font-bold text-red-500">*</span>)
          </span>
        </Label>
        <Select
          isMulti
          isSearchable
          isClearable
          closeMenuOnSelect={false}
          name="LOCATIONS"
          defaultValue={LOCATIONS}
          options={LData}
          isLoading={L_isLoading}
          onChange={(value) => updateFields({ LOCATIONS: value })}
        />
      </div>
      <div className="col-span-2">
        <Label>Additional Affected Brands(s)</Label>
        <Select
          isMulti
          isSearchable
          isClearable
          closeMenuOnSelect={false}
          isLoading={B_isLoading}
          name="BRANDS"
          defaultValue={BRANDS}
          options={BData}
          onChange={(value) => updateFields({ BRANDS: value })}
        />
      </div>
      <div className="col-span-2">
        <Label>Affected car Model(s)</Label>
        <Input
          type="text"
          value={MODELS}
          placeholder="type values here..."
          onChange={(field) => updateFields({ MODELS: field.target.value })}
        />
      </div>
      <div className="col-span-2">
        <Label>Affected car Platform(s)</Label>
        <Input
          type="text"
          value={PLATFORMS}
          placeholder="type values here..."
          onChange={(field) => updateFields({ PLATFORMS: field.target.value })}
        />
      </div>
      <div className="col-span-2">
        <Label>Customer Impact</Label>
        <Textarea
          rows={3}
          value={CUSTOMER_IMPACT}
          placeholder="type value..."
          onChange={(field) =>
            updateFields({ CUSTOMER_IMPACT: field.target.value })
          }
        />
      </div>
      <div className="col-span-2">
        <Label>Consumer Impact</Label>
        <Textarea
          rows={3}
          value={CONSUMER_IMPACT}
          placeholder="type value..."
          onChange={(field) =>
            updateFields({ CONSUMER_IMPACT: field.target.value })
          }
        />
      </div>
    </div>
  );
};
export default StepTwo;
