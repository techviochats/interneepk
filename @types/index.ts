import React from "react";

export interface ChildrenTypes {
  children: React.ReactNode;
}

export type oAuthType = "github" | "google" | "facebook" | "twitter";

export interface userState {
  userData: Object;
  isLoading: boolean;
  isError: boolean;
  addData: () => void;
}