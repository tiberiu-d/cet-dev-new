import { Button } from "@/components/ui/button";

import { useSearchParams } from "@/hooks/useSearch";

const ResetFilters = () => {
  const [params, setParams] = useSearchParams();

  return (
    <Button
      type="button"
      variant="destructive"
      className="w-1/2"
      onClick={() => {
        setParams({ ...params, q: "", cust: "All available" });
      }}
    >
      Reset filters
    </Button>
  );
};
export default ResetFilters;
