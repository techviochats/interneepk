import { Account, ID, Permission, Role } from "appwrite";
import * as z from "zod";

import { client } from "@/lib/app-write-config";
import { oAuthType } from "@/@types";
import { RegisterSchema } from "@/schemas/register-schema";
import { LoginSchema } from "@/schemas/login-schema";
import { APP_DOMAIN } from "@/constant";

const account = new Account(client);

export const getRegister = async (values: z.infer<typeof RegisterSchema>) => {
  const validateField = RegisterSchema.safeParse(values);
  if (!validateField.success) {
    return { error: "Invalid Input" };
  }
  try {
    await account.create(
      ID.unique(),
      values.email,
      values.password,
      values.fullName
    );
    const session = await account.createEmailSession(
      values.email,
      values.password
    );
    await account.createVerification(APP_DOMAIN!);
    console.log("Verification Email Sent");
    await account.deleteSession(session.$id);
    return { data: "Verification Email Sent" };
  } catch (error: any) {
    console.log(error);
    return { error: error.response.message || "Invalid Input" };
  }
};

export const getLogin = async (values: z.infer<typeof LoginSchema>) => {
  const validateField = LoginSchema.safeParse(values);
  if (!validateField.success) {
    return { error: "Invalid Input" };
  }
  try {
    const promise = await account.createEmailSession(
      values.email,
      values.password
    );
    const getVerifiedUser = await account.get();
    if (!getVerifiedUser.emailVerification) {
      await account.deleteSession(promise.$id);
      return { error: "Email not verified" };
    }
    return { data: getVerifiedUser };
  } catch (error: any) {
    return { error: error?.response?.message || "Some error Occurred" };
  }
};

export const getOAuthLogin = async (provider: oAuthType) => {
  if (provider !== "github") {
    return { error: "Invalid Input" };
  }

  try {
    // const promise = account.createOAuth2Session(provider,");
  } catch (error) {
    console.log(error);
  }
};

export const getVerifiedEmail = async (
  userId: string,
  secret: string,
  date: Date
) => {
  try {
    const isExpire = date.getTime() < new Date().getTime();
    if (isExpire) {
      return { error: "Token is expired" };
    }
    const promise = await account.updateVerification(userId, secret);
    return { data: promise };
  } catch (error: any) {
    console.log(error);
    return { error: error?.response?.message || "Some error Occurred" };
  }
};
