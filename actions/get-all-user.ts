import { userSdk } from "@/lib/app-write-sdk-config";
export const getAllUser = async () => {
  try {
    const promise = await userSdk.list();
    return { users: promise.users, total: promise.total };
  } catch (error) {
    console.log(error);
    return { users: [], total: 0 };
  }
};
