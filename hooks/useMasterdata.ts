import { atom, useAtom } from "jotai";
import { MasterdataParamsType } from "@/types/masterdata";

type MasterdataConfig = {
  selected_target: MasterdataParamsType["target"] | null;
};

const configAtomMasterdata = atom<MasterdataConfig>({ selected_target: null });

export function useMasterdata() {
  return useAtom(configAtomMasterdata);
}
