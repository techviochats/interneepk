import {
  APP_WRITE_DATABASE_ID,
  APP_WRITE_BLOG_COLLECTION_ID,
} from "@/constant";
import { database, Query } from "@/lib/app-write-sdk-config";
import { unlink } from "fs/promises";

export const getAllBlogs = async (user_id?: string, is_published?: string) => {
  try {
    if (user_id) {
      const promise = await database.listDocuments(
        APP_WRITE_DATABASE_ID!,
        APP_WRITE_BLOG_COLLECTION_ID!,
        [Query.equal("user_id", user_id)]
      );
      return { data: promise.documents, total: promise.total };
    }
    if (is_published === "true") {
      const promise = await database.listDocuments(
        APP_WRITE_DATABASE_ID!,
        APP_WRITE_BLOG_COLLECTION_ID!,
        [Query.equal("is_published", true)]
      );
      return { data: promise.documents, total: promise.total };
    }
    if (is_published === "false") {
      const promise = await database.listDocuments(
        APP_WRITE_DATABASE_ID!,
        APP_WRITE_BLOG_COLLECTION_ID!,
        [Query.equal("is_published", false)]
      );
      return { data: promise.documents, total: promise.total };
    }
    const promise = await database.listDocuments(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_BLOG_COLLECTION_ID!
    );
    return { data: promise.documents, total: promise.total };
  } catch (error) {
    return { error: "Something went wrong", data: [] };
  }
};
