import React, { Suspense } from "react";
import { getAllUserInServer } from "@/actions/get-all-user";
import UserLists from "./user-lists";
import UserPagination from "./user-pagination";

const User = async ({
  searchParams,
}: {
  searchParams: { lastId?: string; page?: string; startId?: string };
}) => {
  const docInPage: number = 10;
  const { users, total } = await getAllUserInServer(
    searchParams.lastId,
    docInPage,
    searchParams.startId
  );
  const totalpage = Math.ceil(total / docInPage);
  const lastId = users[users.length - 1]?.$id;
  const startId = users[0]?.$id;
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
      <Suspense fallback={null}>
        <UserPagination
          lastId={lastId}
          totalpage={totalpage}
          startId={startId}
          uriPage={Number(searchParams?.page)}
        />
      </Suspense>
    </div>
  );
};

export default User;
