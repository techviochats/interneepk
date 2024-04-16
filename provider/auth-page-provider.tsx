"use client";
import React, { useEffect } from "react";
import { ChildrenTypes } from "@/@types";
import { useUser } from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";
import { deepClone } from "@/lib/deep-clone";

const AuthPageProvider = ({ children }: ChildrenTypes) => {
  const { userData } = useUser();
  const data = deepClone(userData);
  const router = useRouter();

  if (data && data?.$id) {
    router.push("/");
    return;
  }

  return children;
};

export default AuthPageProvider;
