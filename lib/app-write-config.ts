import { APP_WRITE_PROJECT_ID, APP_WRITE_URL } from "@/constant";
import { Client, Permission } from "appwrite";

const client = new Client()
  .setEndpoint(APP_WRITE_URL!)
  .setProject(APP_WRITE_PROJECT_ID!);
export { client };
