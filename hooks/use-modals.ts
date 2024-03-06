import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

interface ModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const sidebarStore = create<ModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

const useSidebarHook = () => {
  const { close, isOpen, open } = sidebarStore(
    useShallow((state) => ({
      isOpen: state.isOpen,
      open: state.open,
      close: state.close,
    }))
  );
  return { close, isOpen, open };
};

export { useSidebarHook };
