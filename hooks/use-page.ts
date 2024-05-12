import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

interface PageState {
  page: number;
  setPage: (page: number) => void;
}

const paginationStore = create<PageState>((set) => ({
  page: 1,
  setPage: (page: number) => set({ page: page }),
}));

const usePaginationHook = () => {
  const { page, setPage } = paginationStore(
    useShallow((state) => ({
      page: state.page,
      setPage: state.setPage,
    }))
  );
  return { page, setPage };
};

export { usePaginationHook };
