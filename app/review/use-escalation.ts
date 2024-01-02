import { atom, useAtom } from "jotai";

import {
  Escalation,
  dbPreviewEscalations,
} from "@/database/dummy_PreviewEscalations";

type Config = {
  selected_id: Escalation["id"] | null;
};

const configAtom = atom<Config>({
  selected_id: dbPreviewEscalations[0].id,
});

export function useEscalation() {
  return useAtom(configAtom);
}
