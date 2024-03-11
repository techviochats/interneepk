"use client";
import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/use-current-user";
import { deepClone } from "@/lib/deep-clone";
import { account } from "@/lib/app-write-auth";

const NavAuthButton = () => {
  const { isError, userData, isLoading } = useUser();
  const data = deepClone(userData);
  console.log(data);
  return (
    <>
      {!!data.email === false ? (
        <Link
          href="/sign-in"
          className="text-internee-theme font-semibold px-5 py-3 rounded-full border-2 border-internee-theme hover:border-internee-theme/60 hover:text-internee-theme/60 transition-all duration-300 ease-in-out"
        >
          Internee&apos;s Login
        </Link>
      ) : (
        <Button
          onClick={async () => {
            await account.deleteSession("current");
            window.location.reload();
          }}
        >
          Logout
        </Button>
      )}
    </>
  );
};

export default NavAuthButton;
