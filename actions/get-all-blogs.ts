import {
  APP_WRITE_DATABASE_ID,
  APP_WRITE_BLOG_COLLECTION_ID,
  APP_WRITE_COLLECTION_ID,
} from "@/constant";
import { database, Query } from "@/lib/app-write-sdk-config";

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
    const users = await database.listDocuments(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_COLLECTION_ID!
    );
    const allUser: { [key: string]: any } = users.documents.reduce(
      (acc, user) => {
        return {
          ...acc,
          [(user as any)?.user_id]: {
            user_id: (user as any)?.user_id,
            full_name: (user as any)?.full_name,
          },
        };
      },
      {}
    );

    const allblogs = promise?.documents?.map((blog) => ({
      ...blog,
      user: allUser[(blog as any)?.user_id],
    }));

    return { data: allblogs, total: promise.total };
  } catch (error) {
    return { error: "Something went wrong", data: [] };
  }
};
