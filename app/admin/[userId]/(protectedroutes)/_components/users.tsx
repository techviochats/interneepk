import React from "react";
import { getAllUser } from "@/actions/get-all-user";
import UserLists from "./user-lists";

const User = async () => {
  const { users, total } = await getAllUser();

  return (
    <div className="flex flex-col gap-y-8">
      <div className="text-right px-4 text-muted-foreground capitalize">
        total user: {total}
      </div>
      {users.map((user) => (
        <UserLists
          key={user.$id}
          $id={user.$id}
          email={user.email}
          labels={user.labels}
          name={user.name}
        />
      ))}
      {users.length === 0 && (
        <div className="text-center text-muted-foreground">No user found</div>
      )}
    </div>
  );
};

export default User;
