import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

type modalTypesValue = "addInternshipCategory" | "deleteInternshipCategory";
type categoryDetailsTypes = {
  categoryName: string;
  categoryId: string;
};
interface DialogState {
  rerender?: boolean;
  isOpen: boolean;
  categoryDetails?: Partial<categoryDetailsTypes> | undefined | null;
  modalTypes: modalTypesValue;
  rerenderFunc: () => void;
  open: (
    types: modalTypesValue,
    categoryId?: Partial<categoryDetailsTypes>
  ) => void;
  close: () => void;
}

const dialogStore = create<DialogState>((set, get) => ({
  rerender: false,
  isOpen: false,
  categoryDetails: {},
  modalTypes: "addInternshipCategory",
  rerenderFunc: () => set({ rerender: !get().rerender }),
  open: (types, categoryDetails) =>
    set({ isOpen: true, modalTypes: types, categoryDetails: categoryDetails }),
  close: () => set({ isOpen: false }),
}));

const useDialogHook = () => {
  const {
    close,
    isOpen,
    open,
    modalTypes,
    categoryDetails,
    rerender,
    rerenderFunc,
  } = dialogStore(
    useShallow((state) => ({
      isOpen: state.isOpen,
      open: state.open,
      close: state.close,
      modalTypes: state.modalTypes,
      categoryDetails: state.categoryDetails,
      rerenderFunc: state.rerenderFunc,
      rerender: state.rerender,
    }))
  );
  return {
    close,
    isOpen,
    open,
    modalTypes,
    categoryDetails,
    rerender,
    rerenderFunc,
  };
};

export { useDialogHook };
