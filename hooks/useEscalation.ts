import { atom, useAtom } from "jotai";
import { EscalationType } from "@/types/escalation";

type Config = {
  selected_id: EscalationType["ID"] | null;
};

const configAtom = atom<Config>({
  selected_id: null,
});

export function useEscalation() {
  return useAtom(configAtom);
}
