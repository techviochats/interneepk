"use client";
import React from "react";
import { Link } from "next-view-transitions";

import { useUser } from "@/hooks/use-current-user";
import { deepClone } from "@/lib/deep-clone";
import { Loader2, APP_DOMAIN } from "@/constant";

import NavAuthButtonDropdown from "./nav-auth-button-dropdown";

const NavAuthButton = () => {
  const { isError, userData, isLoading} = useUser();
  const data = deepClone(userData);

  if (isLoading) {
    return (
      <div className="animate-spin">
        <Loader2 className="w-5 h-5 text-internee-theme" />
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        Oops Some Error Occured <br />
        <span className="text-muted-foreground text-xs">
          Contact to internee.pk with your email
        </span>
      </div>
    );
  }
  return (
    <>
      {!!data.email === false ? (
        <Link
          href={`${APP_DOMAIN}/sign-in`}
          className="text-internee-theme font-semibold px-5 py-3 rounded-full border-2 border-internee-theme hover:border-internee-theme/60 hover:text-internee-theme/60 transition-all duration-300 ease-in-out"
        >
          Internee&apos;s Login
        </Link>
      ) : (
        <NavAuthButtonDropdown />
      )}
    </>
  );
};

export default NavAuthButton;
