import { atom, useAtom } from "jotai";
import { SearchParamsType } from "@/types/search";

type SearchConfig = {
  q: SearchParamsType["q"];
  cust: SearchParamsType["cust"];
};

const configSearchAtom = atom<SearchConfig>({
  q: "",
  cust: "",
});

export function useSearchParams() {
  return useAtom(configSearchAtom);
}
