import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

import { userState } from "@/@types";
import { account } from "@/lib/app-write-config";
import { getUserFromDb } from "@/lib/app-write-utils";
// import { addUserInDb } from "@/lib/app-write-utils";

const sidebarStore = create<userState>((set) => ({
  userData: {},
  isLoading: false,
  isError: false,
  isAdmin: false,
  userDbData: {},
  addData: () => {
    set({ isLoading: true, isError: false, userData: {}, userDbData: {} });
    account
      .get()
      .then(async (res) => {
        const userDbData = await getUserFromDb(res);
        const isAdmin: boolean = res.labels.includes("admin");
        set({
          isLoading: false,
          userData: res,
          isAdmin: isAdmin,
          userDbData: { ...userDbData.data },
        });
      })
      .catch((res) => {
        set({
          isLoading: false,
          isError: false,
          userData: {},
          isAdmin: false,
          userDbData: {},
        });
      });
  },
  updateDbData: async () => {
    account
      .get()
      .then(async (res) => {
        const userDbData = await getUserFromDb(res);
        const isAdmin: boolean = res.labels.includes("admin");
        set({
          isLoading: false,
          userData: res,
          isAdmin: isAdmin,
          userDbData: { ...userDbData.data },
        });
      })
      .catch((res) => {
        set({
          isLoading: false,
          isError: false,
          userData: {},
          isAdmin: false,
          userDbData: {},
        });
      });
  },
  async logOut() {
    await account.deleteSession("current");
    set({ userData: {}, isAdmin: false, isLoading: false, isError: false });
    window.location.reload();
  },
}));

const useUser = () => {
  const {
    addData,
    userData,
    isError,
    isLoading,
    isAdmin,
    logOut,
    userDbData,
    updateDbData,
  } = sidebarStore(
    useShallow((state) => ({
      userData: state.userData,
      addData: state.addData,
      isLoading: state.isLoading,
      isError: state.isError,
      isAdmin: state.isAdmin,
      logOut: state.logOut,
      userDbData: state.userDbData,
      updateDbData: state.updateDbData,
    }))
  );
  return {
    addData,
    userData,
    isError,
    isLoading,
    isAdmin,
    logOut,
    userDbData,
    updateDbData,
  };
};

export { useUser };
