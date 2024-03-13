import { account } from "@/lib/app-write-config";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { userState } from "@/@types";

const sidebarStore = create<userState>((set) => ({
  userData: {},
  isLoading: false,
  isError: false,
  isAdmin: false,
  addData: () => {
    set({ isLoading: true });
    account
      .get()
      .then((res) => {
        const isAdmin: boolean = res.labels.includes("admin");
        set({ isLoading: false, userData: res, isAdmin: isAdmin });
      })
      .catch((res) => {
        if (res.code === 401) {
          set({
            isLoading: false,
            isError: false,
            userData: {},
            isAdmin: false,
          });
          return;
        }
        set({ isLoading: false, isError: false, userData: {}, isAdmin: false });
      });
  },
}));

const useUser = () => {
  const { addData, userData, isError, isLoading, isAdmin } = sidebarStore(
    useShallow((state) => ({
      userData: state.userData,
      addData: state.addData,
      isLoading: state.isLoading,
      isError: state.isError,
      isAdmin: state.isAdmin,
    }))
  );
  return { addData, userData, isError, isLoading, isAdmin };
};

export { useUser };
