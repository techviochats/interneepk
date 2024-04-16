"use client";
import React from "react";

import { useUser } from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";

const SettingForm = () => {
  const { userData, userDbData } = useUser();
  const router = useRouter();

  React.useEffect(() => {
    const time = setTimeout(() => {
      if (!!userData.hasOwnProperty("$id") === false) {
        router.push("/");
      }
    }, 1500);
    return () => clearTimeout(time);
  }, [userData]);

  return <div>SettingForm</div>;
};

export default SettingForm;
