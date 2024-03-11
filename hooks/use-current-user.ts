import { account } from "@/lib/app-write-auth";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { userState } from "@/@types";

const sidebarStore = create<userState>((set) => ({
  userData: {},
  isLoading: false,
  isError: false,
  addData: () => {
    set({ isLoading: true });
    account
      .get()
      .then((res) => {
        set({ isLoading: false, userData: res });
      })
      .catch(() => {
        set({ isLoading: false, isError: true, userData: {} });
      });
  },
}));

const useUser = () => {
  const { addData, userData, isError, isLoading } = sidebarStore(
    useShallow((state) => ({
      userData: state.userData,
      addData: state.addData,
      isLoading: state.isLoading,
      isError: state.isError,
    }))
  );
  return { addData, userData, isError, isLoading };
};

export { useUser };
