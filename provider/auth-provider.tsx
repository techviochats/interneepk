"use client";

import { ChildrenTypes } from "@/@types";
import { useUser } from "@/hooks/use-current-user";
import React from "react";

const AuthProvider = ({ children }: ChildrenTypes) => {
  const { addData } = useUser();
  const provideData = React.useCallback(addData, []);
  React.useEffect(() => {
    provideData();
  }, [provideData]);
  
  return children;
};

export default AuthProvider;
