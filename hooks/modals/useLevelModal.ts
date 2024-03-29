import { create } from "zustand";

interface LevelModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  defaultValues: {
    ID: number;
    GROUP_ID: string;
    COLOR_ID: string;
    VALUE: string;
    EXPLANATION: string;
  };
}

const useLevelModal = create<LevelModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  defaultValues: {
    ID: 0,
    GROUP_ID: "",
    COLOR_ID: "",
    VALUE: "",
    EXPLANATION: "",
  },
}));

export default useLevelModal;
