import { APP_WRITE_PROJECT_ID, APP_WRITE_URL } from "@/constant";
import { Account, Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint(APP_WRITE_URL!)
  .setProject(APP_WRITE_PROJECT_ID!);
const account = new Account(client);
const database = new Databases(client);
export { client, account, database };
