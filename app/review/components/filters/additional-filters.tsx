import { Separator } from "@/components/ui/separator";
import CustomerFilter from "./customer-filter";
import ResetFilters from "./reset-filters";

const AdditionalFilters = () => {
  return (
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Additional Filters</h4>
        <p className="text-sm text-muted-foreground">
          set additional filters for advanced search
        </p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-row items-center justify-between w-full">
          <label className="text-sm">Customer</label>
          <CustomerFilter />
        </div>
        <div>
          <p>... and more more more, if you want ...</p>
        </div>
        <Separator />
        <ResetFilters />
      </div>
    </div>
  );
};
export default AdditionalFilters;
