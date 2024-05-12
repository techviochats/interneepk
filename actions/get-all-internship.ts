import {
  APP_WRITE_DATABASE_ID,
  APP_WRITE_INTERNSHIP_COLLECTION_ID,
} from "@/constant";
import { database, Query } from "@/lib/app-write-sdk-config";

export const getAllInternship = async (category: string) => {
  try {
    if (category) {
      const promise = await database.listDocuments(
        APP_WRITE_DATABASE_ID!,
        APP_WRITE_INTERNSHIP_COLLECTION_ID!,
        [Query.equal("internship_category", category.toLowerCase())]
      );
      return { data: promise.documents, total: promise.total };
    }
    const promise = await database.listDocuments(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_INTERNSHIP_COLLECTION_ID!
    );
    return { data: promise.documents, total: promise.total };
  } catch (error) {
    return { error: "Something went wrong", data: [] };
  }
};
