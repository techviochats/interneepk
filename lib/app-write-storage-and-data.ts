import * as z from "zod";

import { SettingSchema } from "@/schemas";
import { storageClient, database, account } from "./app-write-config";
import {
  APP_WRITE_BUCKET_ID,
  APP_WRITE_COLLECTION_ID,
  APP_WRITE_DATABASE_ID,
  APP_WRITE_PROJECT_ID,
} from "@/constant";

export const createDoc = () => {};

const PartialSettingSchema = SettingSchema.partial();
type PartialSettingType = z.infer<typeof PartialSettingSchema>;

export const setPic = async (userId: string, file: File | null | undefined) => {
  try {
    if (!file && !userId) {
      return { url: "", error: "File is not existed" };
    }
    let id = userId + Date.now();

    const image = await storageClient.createFile(
      APP_WRITE_BUCKET_ID!,
      id,
      file!
    );

    let urlString = `https://cloud.appwrite.io/v1/storage/buckets/internee_user_image_bucket/files/${image.$id}/view?project=${APP_WRITE_PROJECT_ID}&mode=admin`;
    return { url: urlString, error: "" };
  } catch (error) {
    return {
      url: "",
      error:
        "Some Error Occurred  while uploading image please try again later",
    };
  }
};

export const addInDbInfo = async (
  values: PartialSettingType,
  url: string,
  userId: string
) => {
  if (!userId) return { error: "User Id is not existed" };
  if (!url) return { error: "Url is not existed" };
  await database.updateDocument(
    APP_WRITE_DATABASE_ID!,
    APP_WRITE_COLLECTION_ID!,
    userId,
    {
      full_name: values.name,
      user_image: url,
    }
  );
  await account.updateName(values.name!);
};
