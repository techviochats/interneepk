import {
  APP_WRITE_DATABASE_ID,
  APP_WRITE_BLOG_COLLECTION_ID,
  APP_WRITE_COLLECTION_ID,
} from "@/constant";
import { database, Query } from "@/lib/app-write-sdk-config";

export const getSingleBlogs = async (blogId: string) => {
  if (!blogId) return { error: "Blog ID is required", data: [] };
  try {
    const blogs = await database.getDocument(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_BLOG_COLLECTION_ID!,
      blogId!
    );
    if (!blogs) return { error: "Blog Not Found", data: [], blogId: blogId };
    const user = await database
      .getDocument(
        APP_WRITE_DATABASE_ID!,
        APP_WRITE_COLLECTION_ID!,
        (blogs as any)?.user_id
      )
      .catch(() => {
        return { error: "User Not Found", data: [], blogId: blogId };
      });
    if (!user) return { error: "User Not Found", data: [], blogId: blogId };
    return { data: [blogs, user] };
  } catch (error) {
    return { error: JSON.stringify(error), data: [], blogId: blogId };
  }
};
