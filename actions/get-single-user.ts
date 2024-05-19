import { APP_WRITE_COLLECTION_ID, APP_WRITE_DATABASE_ID } from "@/constant";
import { database } from "@/lib/app-write-sdk-config";
import React from "react";

export const getSingleUser = async (id: string) => {
  try {
    const user = await database.getDocument(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_COLLECTION_ID!,
      id
    );
    return { data: user };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};
