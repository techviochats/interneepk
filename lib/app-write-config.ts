import { Account, Client, Databases, Query, ID, Storage } from "appwrite";
import { APP_WRITE_PROJECT_ID, APP_WRITE_URL } from "@/constant";

const client = new Client()
  .setEndpoint(APP_WRITE_URL!)
  .setProject(APP_WRITE_PROJECT_ID!);
const account = new Account(client);
const database = new Databases(client);
const storageClient = new Storage(client);

export {
  client,
  account,
  database,
  Query as QueryClient,
  ID as clientId,
  storageClient,
};
