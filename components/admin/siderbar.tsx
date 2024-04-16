import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import SidebarAdminAction from "./_components/sidebar-admin-action";

const SiderbarAdmin = ({ userId }: { userId: string }) => {
  return (
    <aside className="fixed w-72 inset-y-0 flex-col border-r-2 border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center w-full py-5">
          <Link href={`/admin/${userId}`}>
            <Image
              src={"/logo.webp"}
              alt="logo"
              className="object-cover"
              width={200}
              height={30}
            />
          </Link>
        </div>
        <Separator />
        <SidebarAdminAction userId={userId} />
        <div className="py-5 px-5 flex items-center justify-center">
          <Link
            href={"/"}
            className="w-full py-5 bg-gradient-to-r from-internee-theme via-internee-theme/60 to-internee-theme/30 text-center text-white font-bold rounded-md hover:bg-gradient-to-r transition-all duration-300 ease-in-out hover:shadow-xl text-lg"
          >
            Exit
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SiderbarAdmin;
