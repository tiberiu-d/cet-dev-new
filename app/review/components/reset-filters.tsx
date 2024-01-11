import { Button } from "@/components/ui/button";

import { useSearchParams } from "@/hooks/useSearch";
import { SearchParamsType } from "@/types/search";

const ResetFilters = () => {
  const [params, setParams] = useSearchParams();

  const resetParams: SearchParamsType = {
    q: "",
    cust: "All available",
  };

  return (
    <Button
      type="button"
      variant="destructive"
      className="w-1/2"
      onClick={() => {
        setParams(resetParams);
      }}
    >
      Reset filters
    </Button>
  );
};
export default ResetFilters;
