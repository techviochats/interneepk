import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

interface IntenshipState {
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  allInternships: any[];
  setAllInternships: (data: any[]) => void;
  rerenderInternship: boolean;
  setReRenderInternship: () => void;
}

const sidebarStore = create<IntenshipState>((set, get) => ({
  rerenderInternship: false,
  setReRenderInternship: () =>
    set({ rerenderInternship: !get().rerenderInternship }),
  categoryFilter: "",
  setCategoryFilter: (category: string) => set({ categoryFilter: category }),
  allInternships: [],
  setAllInternships: (data: any[]) => set({ allInternships: data }),
}));

const useInternshipHook = () => {
  const {
    allInternships,
    categoryFilter,
    setAllInternships,
    setCategoryFilter,
    rerenderInternship,
    setReRenderInternship,
  } = sidebarStore(
    useShallow((state) => ({
      categoryFilter: state.categoryFilter,
      setCategoryFilter: state.setCategoryFilter,
      allInternships: state.allInternships,
      setAllInternships: state.setAllInternships,
      rerenderInternship: state.rerenderInternship,
      setReRenderInternship: state.setReRenderInternship,
    }))
  );
  return {
    allInternships,
    categoryFilter,
    setAllInternships,
    setCategoryFilter,
    rerenderInternship,
    setReRenderInternship,
  };
};

export { useInternshipHook };
