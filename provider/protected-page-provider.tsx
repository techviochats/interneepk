"use client";
import React, { useEffect } from "react";

import { ChildrenTypes } from "@/@types";
import { useUser } from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";
import { deepClone } from "@/lib/deep-clone";

interface ChildrenTypesProps extends ChildrenTypes {
  userId: string;
}
const ProtectedPageProvider = ({ children, userId }: ChildrenTypesProps) => {
  const router = useRouter();

  const { userData, isAdmin } = useUser();

  const data = deepClone(userData);
  if (!userId) {
    router.push("/");
    return null;
  }

  useEffect(() => {
    if (!!userData.hasOwnProperty("$id") === true) {
      if (data?.$id !== userId) {
        router.push("/");
        return;
      }
      if (!isAdmin) {
        router.push("/");
        return;
      }
    }
  }, [userData, userId, router]);
  return children;
};

export default ProtectedPageProvider;
