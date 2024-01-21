import { create } from "zustand";

interface ColorModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  defaultValues: {
    ID: number;
    LABEL: string;
    VALUE: string;
    EXPLANATION: string;
  };
}

const useColorModal = create<ColorModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  defaultValues: {
    ID: 0,
    LABEL: "",
    VALUE: "#000000",
    EXPLANATION: "",
  },
}));

export default useColorModal;
