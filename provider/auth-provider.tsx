"use client";

import React from "react";

import { ChildrenTypes } from "@/@types";
import { useUser } from "@/hooks/use-current-user";

const AuthProvider = ({ children }: ChildrenTypes) => {
  const { addData } = useUser();
  const provideData = React.useCallback(addData, []);
  React.useEffect(() => {
    provideData();
  }, [provideData]);

  return children;
};

export default AuthProvider;
