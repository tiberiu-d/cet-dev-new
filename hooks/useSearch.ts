import { atom, useAtom } from "jotai";
import { SearchParamsType } from "@/types/search";

type SearchConfig = {
  target: SearchParamsType["target"];
  q: SearchParamsType["q"];
  cust: SearchParamsType["cust"];
};

const configSearchAtom = atom<SearchConfig>({
  target: "http://localhost:1999",
  q: "",
  cust: "",
});

export function useSearchParams() {
  return useAtom(configSearchAtom);
}
