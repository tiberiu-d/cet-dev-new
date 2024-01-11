import { SearchParamsType } from "@/types/search";
import { useEffect, useState } from "react";

export default function useDebounce(data: SearchParamsType, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(data);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(data);
    }, delay);

    return () => clearTimeout(handler);
  }, [data, delay]);

  return debouncedValue;
}
