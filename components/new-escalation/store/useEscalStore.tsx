import { create } from "zustand";

interface EscalModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  defaultValues: {
    // page 1
    ID: number;
    STATUS: string;
    TYPE: string;
    ESCAL_DATE: string;
    DESCAL_DATE: string;
    TITLE: string;
    DESCRIPTION: string;
    RECURRING: boolean;
  };
}

const useEscalStore = create<EscalModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  defaultValues: {
    // page1
    ID: 0,
    STATUS: "open",
    TYPE: "",
    ESCAL_DATE: "1981-09-20",
    DESCAL_DATE: "",
    TITLE: "",
    DESCRIPTION: "",
    RECURRING: false,
    // page2
  },
}));

export default useEscalStore;
