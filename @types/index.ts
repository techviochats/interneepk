import React from "react";

export interface ChildrenTypes {
  children: React.ReactNode;
}

export type oAuthType = "github" | "google" | "facebook" | "twitter";

export interface userState {
  userData: Object;
  isLoading: boolean;
  isError: boolean;
  isAdmin: boolean;
  addData: () => void;
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
}[];
