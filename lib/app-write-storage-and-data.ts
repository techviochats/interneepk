import * as z from "zod";

import { SettingSchema, internshipSchema } from "@/schemas";
import {
  storageClient,
  database,
  account,
  clientId,
  QueryClient,
} from "./app-write-config";
import {
  APP_WRITE_BUCKET_ID,
  APP_WRITE_COLLECTION_ID,
  APP_WRITE_CATEGORY_COLLECTION_ID,
  APP_WRITE_DATABASE_ID,
  APP_WRITE_PROJECT_ID,
  APP_WRITE_INTERNSHIP_COLLECTION_ID,
} from "@/constant";

export const createDoc = () => {};

const PartialSettingSchema = SettingSchema.partial();
type PartialSettingType = z.infer<typeof PartialSettingSchema>;

/**
 * add image in database
 * @param userId
 * @param file
 * @returns
 */
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
/**
 * add info in database
 * @param values
 * @param url
 * @param userId
 * @returns
 */
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

/**
 * add category in database
 * @param categoryName
 * @returns
 */

export const addCategoryInDb = async (categoryName: string) => {
  try {
    if (!categoryName) return;
    const data = await database.listDocuments(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_CATEGORY_COLLECTION_ID!,
      [QueryClient.equal("category_name", categoryName.toLowerCase())]
    );
    if (data.documents.length > 0) return { error: "Category already exists" };
    await database.createDocument(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_CATEGORY_COLLECTION_ID!,
      clientId.unique(),
      {
        category_name: categoryName,
      }
    );
    return { message: "Category added successfully" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

/**
 * get list of category from database
 * @returns
 */

export const getListCategory = async () => {
  try {
    const data = await database.listDocuments(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_CATEGORY_COLLECTION_ID!
    );
    if (data.documents.length === 0)
      return { error: "No Category Found", data: [] };

    return { data: data.documents };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
/**
 * Delete category from database
 * @param categoryId
 * @returns
 */
export const deleteCategoryInDb = async (categoryId: string) => {
  try {
    await database.deleteDocument(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_CATEGORY_COLLECTION_ID!,
      categoryId
    );

    return { message: "Deleted Successfully" };
  } catch (error) {
    console.log(error);
    return { error: "Oops! Something wrong. Contact to developer" };
  }
};

/**
 * add internship data in database
 * @param internship
 * @returns
 */
export const addInternshipInDb = async (
  internship: z.infer<typeof internshipSchema>
) => {
  try {
    const validate = await internshipSchema.safeParseAsync(internship);
    if (!validate.success) return { error: "Please fill all the fields" };

    await database.createDocument(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_INTERNSHIP_COLLECTION_ID!,
      clientId.unique(),
      {
        internship_category: internship.internship_category,
        internship_name: internship.internship_name,
        internship_docLink: internship.internship_docLink,
      }
    );
    return { message: "Internship added successfully" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

/**
 * get single Internship from database
 * @param internshipId
 * @returns
 */
export const getSingleInternshipFromDb = async (internshipId: string) => {
  if (!internshipId || internshipId === "new") return;
  try {
    const res = await database.getDocument(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_INTERNSHIP_COLLECTION_ID!,
      internshipId
    );
    return { data: res };
  } catch (error) {
    console.log(error);
    return { error: "Something Went Wrong" };
  }
};

/**
 * update Internship from database
 * @param internshipId and @param internship
 * @returns message or error
 */
export const updateInternshipInDb = async (
  internship: z.infer<typeof internshipSchema>,
  internshipId: string
) => {
  try {
    const validate = await internshipSchema.safeParseAsync(internship);
    if (!validate.success) return { error: "Please fill all the fields" };
    if (!internshipId) return { error: "Internship Id is not existed" };

    await database.updateDocument(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_INTERNSHIP_COLLECTION_ID!,
      internshipId,
      {
        internship_category: internship.internship_category,
        internship_name: internship.internship_name,
        internship_docLink: internship.internship_docLink,
      }
    );
    return { message: "Internship updated successfully" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

/**
 * this function will delete Internship from database
 * @param internshipId
 * @returns message or error
 */
export const deleteInternshipInDb = async (internshipId: string) => {
  try {
    if (!internshipId) return { error: "Internship Id is not existed" };

    await database.deleteDocument(
      APP_WRITE_DATABASE_ID!,
      APP_WRITE_INTERNSHIP_COLLECTION_ID!,
      internshipId
    );
    return { message: "Internship deleted successfully" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
