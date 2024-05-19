"use client";

import React from "react";

import { ChildrenTypes } from "@/@types";
import { useUser } from "@/hooks/use-current-user";

const AuthProvider = ({ children }: ChildrenTypes) => {
  const { addData, created } = useUser();
  const provideData = React.useCallback(addData, [created]);
  React.useEffect(() => {
    provideData();
  }, [provideData]);

  return children;
};

export default AuthProvider;
