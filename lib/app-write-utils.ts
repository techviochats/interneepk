// import { account , database as db } from "./app-write-config";
import { database } from "./app-write-config";
import { APP_WRITE_DATABASE_ID, APP_WRITE_COLLECTION_ID } from "@/constant";

export const getUserFromDb = async (promise: any) => {
  try {
    if (!promise) {
      return { error: "Login First" };
    }
    const user = await checkUserInDb(promise.$id);
    if (user) {
      return { data: user };
    }
    const userCreated = await database.createDocument(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_COLLECTION_ID!,
      promise.$id,
      {
        user_id: promise.$id,
        email: promise.email,
        full_name: promise.name,
        is_admin: promise.labels.includes("admin"),
        email_verification: promise.emailVerification,
      }
    );
    return { data: userCreated };
  } catch (error: any) {
    return { error: error?.response?.message || "Some error Occurred" };
  }
};

export const checkUserInDb = async (userId: string) => {
  if (!userId) return false;
  try {
    const data = await database.getDocument(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_COLLECTION_ID!,
      userId
    );
    if (!data) {
      return false;
    }
    return data;
  } catch (error: any) {
    console.log(error);
    return false;
  }
};
