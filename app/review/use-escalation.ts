import { atom, useAtom } from "jotai";
import { Escalation } from "@/database/dummy_PreviewEscalations";

type Config = {
  selected_id: Escalation["id"] | null;
};

const configAtom = atom<Config>({
  selected_id: null,
});

export function useEscalation() {
  return useAtom(configAtom);
}
