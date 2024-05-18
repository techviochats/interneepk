import React from "react";

export interface ChildrenTypes {
  children: React.ReactNode;
}

export type oAuthType = "github" | "google" | "facebook" | "twitter";

export type userDataType = {
  user_id: string;
  full_name: string;
  user_image: string | null;
  isAdmin: boolean;
  email_verification: boolean;
  email: string;
};
type userDbDataType = {
  user_id: string;
  full_name: string;
  user_image: string | null;
  email_verification: boolean;
  email: string;
  is_admin: boolean;
  [key: string]: any;
};
export interface userState {
  userData: Object;
  isLoading: boolean;
  isError: boolean;
  isAdmin: boolean;
  userDbData: Partial<userDbDataType>;
  addData: () => void;
  logOut: () => void;
  updateDbData: () => void;
}

export interface breadCrumbsTypes {
  path: string[];
}

export type categoryType =
  | "/webdevelopment"
  | "/graphic"
  | "/mobiledevelopment"
  | "/chatbot"
  | "/websitedesign"
  | "/cloud"
  | "/socialmedia"
  | "/videoediting"
  | "/machinelearning"
  | "/cybersecurity"
  | "/";

export type categoryParamsType =
  | "webdevelopment"
  | "graphic"
  | "mobiledevelopment"
  | "chatbot"
  | "websitedesign"
  | "cloud"
  | "socialmedia"
  | "videoediting"
  | "machinelearning"
  | "cybersecurity"
  | "allcategories";

export type userType = {
  name: string;
  designation: categoryType;
  image: string;
  badge: string;
  id?:string
}[];

export type BlogTypes = {
  blogs: string;
  main_heading: string;
  description: string;
  published_date: Date | null;
  is_published: boolean;
  user_id: string;
};
