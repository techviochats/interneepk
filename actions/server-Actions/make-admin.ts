"use server";
import { userSdk, database } from "@/lib/app-write-sdk-config";
import { APP_WRITE_COLLECTION_ID, APP_WRITE_DATABASE_ID } from "@/constant";
export const makeAdmin = async (id: string) => {
  try {
    const data = await database.getDocument(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_COLLECTION_ID!,
      id
    );
    if (!data) {
      return { error: "There are no entries in the database" };
    }
    if ((data as any).is_admin) {
      return { error: "User already is an Admin" };
    }
    await userSdk.updateLabels(id, ["admin"]);

    await database.updateDocument(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_COLLECTION_ID!,
      id,
      {
        is_admin: true,
      }
    );
    return { message: "Successfully Made Admin" };
  } catch (error) {
    console.log(error);
    return { error: "Something Went Wrong!" };
  }
};
