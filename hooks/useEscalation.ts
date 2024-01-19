import { atom, useAtom } from "jotai";
import { EscalationType } from "@/types/escalation";

type EscalationConfig = {
  selected_id: EscalationType["ID"] | null;
};

const configAtomEscalation = atom<EscalationConfig>({
  selected_id: null,
});

export function useEscalation() {
  return useAtom(configAtomEscalation);
}
