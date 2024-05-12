import React, { Suspense } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import User from "./_components/users";
import UserLoading from "./_components/user-loading";

const ProtectedPage = ({ searchParams }: { searchParams: string }) => {
  const decodeUrl = Object.keys(searchParams).join().split("&");

  const searchParamObject = decodeUrl?.reduce((acc, item) => {
    const [key, value] = item?.split("=");
    return { ...acc, [key]: value };
  }, {});

  return (
    <div className="px-6 py-8 space-y-5 w-full h-full flex flex-col">
      <h1 className="capitalize text-3xl font-semibold text-internee-text">
        All User
      </h1>
      <ScrollArea
        className="w-full flex-grow shrink-0 h-[80%]"
        scrollHideDelay={0}
      >
        <Suspense fallback={<UserLoading />}>
          <User searchParams={searchParamObject} />
        </Suspense>
      </ScrollArea>
    </div>
  );
};

export default ProtectedPage;
