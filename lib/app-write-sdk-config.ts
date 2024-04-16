import sdk, { ID, Query } from "node-appwrite";
import {
  APP_WRITE_API_ENDPOINT_KEY,
  APP_WRITE_URL,
  APP_WRITE_PROJECT_ID,
} from "@/constant";

export const appWriteNodeInstance = new sdk.Client()
  .setEndpoint(APP_WRITE_URL!)
  .setProject(APP_WRITE_PROJECT_ID!)
  .setKey(APP_WRITE_API_ENDPOINT_KEY!);

export const database = new sdk.Databases(appWriteNodeInstance);
export const storageBucket = new sdk.Storage(appWriteNodeInstance);
export const accountSdk = new sdk.Account(appWriteNodeInstance);
export const userSdk = new sdk.Users(appWriteNodeInstance);
export { ID as nodeId, Query };
