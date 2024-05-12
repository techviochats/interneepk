import { userSdk, Query } from "@/lib/app-write-sdk-config";


export const getAllUserInServer = async (
  lastId?: string | null | undefined,
  limit: number = 10,
  startId?: string | null | undefined
) => {
  try {
    if (lastId) {
      const promise = await userSdk.list([
        Query.limit(limit),
        Query.cursorAfter(lastId),
      ]);
      return { users: promise.users, total: promise.total };
    }
    if (startId) {
      const promise = await userSdk.list([
        Query.limit(limit),
        Query.cursorBefore(startId),
      ]);
      return { users: promise.users, total: promise.total };
    }

    const promise = await userSdk.list([Query.limit(limit)]);
    return { users: promise.users, total: promise.total };
  } catch (error) {
    console.log(error);
    return { users: [], total: 0 };
  }
};
