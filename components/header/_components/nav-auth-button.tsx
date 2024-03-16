"use client";
import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/use-current-user";
import { deepClone } from "@/lib/deep-clone";
import { account } from "@/lib/app-write-config";
import { Loader2 } from "lucide-react";
import { APP_DOMAIN } from "@/constant";

const NavAuthButton = () => {
  const [loadingLogout, setLoadingLogout] = React.useState<boolean>(false);
  const { isError, userData, isLoading, isAdmin } = useUser();
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
        href={`${APP_DOMAIN}/coming-soon.html`}
        target="_blank"
          className="text-internee-theme font-semibold px-5 py-3 rounded-full border-2 border-internee-theme hover:border-internee-theme/60 hover:text-internee-theme/60 transition-all duration-300 ease-in-out"
        >
          Internee&apos;s Login
        </Link>
      ) : (
        <Button
          disabled={loadingLogout}
          className="disabled:opacity-50 transition-all duration-300 ease-in-out disabled:cursor-not-allowed"
          onClick={async () => {
            setLoadingLogout(true);
            await account.deleteSession("current");
            setLoadingLogout(false);
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
