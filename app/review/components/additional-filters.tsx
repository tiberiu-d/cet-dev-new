import { Separator } from "@/components/ui/separator";

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
      <div className="grid gap-2">test test test</div>
    </div>
  );
};
export default AdditionalFilters;
