import { create } from "zustand";

interface QCAMModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  defaultValues: {
    ID?: number;
    FIRST_NAME: string;
    LAST_NAME: string;
    EMAIL: string;
    ALLOCATIONS?: Array<string>;
  };
}

const useQCAMModal = create<QCAMModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  defaultValues: {
    ID: 0,
    FIRST_NAME: "",
    LAST_NAME: "",
    EMAIL: "",
    ALLOCATIONS: [],
  },
}));

export default useQCAMModal;
