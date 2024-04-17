"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";

import { useUser } from "@/hooks/use-current-user";

import { deepClone } from "@/lib/deep-clone";
import { cn } from "@/lib/utils";

import { ProfileIcon } from "@/constant";

import UserDropdownList from "./user-dropdown-list";

interface UserListsProps {
  $id: string;
  name: string;
  labels: string[];
  email: string;
}
const UserLists = ({ $id, email, labels, name }: UserListsProps) => {
  const isAdmin = labels.includes("admin");

  const { userData } = useUser();
  const data = deepClone(userData);
  const amI = React.useMemo(
    () => isAdmin && data?.$id === $id,
    [userData, $id]
  );

  return (
    <div
      className={cn(
        "shadow-lg py-8 rounded-md bg-white flex justify-between w-full px-4 items-center border group transition-all hover:shadow-2xl",
        amI ? "order-1" : isAdmin ? "order-2" : "order-3"
      )}
    >
      <div className="flex items-center gap-x-2">
        <ProfileIcon size={36} className="text-muted-foreground ml-2 mr-2" />
        <div className="flex flex-col gap-y-1 text-internee-text">
          <h3 className="font-semibold text-xl">{name}</h3>
          <div className="text-sm space-x-2 flex ">
            <span>{email}</span>
            <div>
              {isAdmin ? (
                <Badge variant={"admin"}>Admin</Badge>
              ) : (
                <Badge variant={"default"}>User</Badge>
              )}
            </div>
          </div>
        </div>
      </div>
      {!amI && !isAdmin && <UserDropdownList isAdmin={isAdmin} id={$id} />}
    </div>
  );
};

export default UserLists;
