"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BlogIcon, InternshipIcon, UserIcon } from "@/constant";

const SidebarAdminAction = ({ userId }: { userId: string }) => {
  const pathName = usePathname();
  const actions = [
    {
      id: "1",
      label: "User",
      href: `/admin/${userId}`,
      isActive: pathName === `/admin/${userId}`,
      Icon: UserIcon,
    },
    {
      id: "2",
      label: "Blogs",
      href: `/admin/${userId}/blogs`,
      isActive: pathName === `/admin/${userId}/blogs`,
      Icon: BlogIcon,
    },
    {
      id: "3",
      label: "Add Internships",
      href: `/admin/${userId}/internship`,
      isActive: pathName === `/admin/${userId}/internship`,
      Icon: InternshipIcon,
    },
  ];
  return (
    <ScrollArea className="flex-grow" scrollHideDelay={0}>
      {actions.map((action) => (
        <div key={action?.id} className="w-full flex flex-col group">
          <Link
            href={action?.href}
            className={cn(
              "w-full cursor-pointer group px-4 py-5 group-hover:bg-internee-theme transition-all text-internee-text group-hover:text-internee-absoluteTheme flex gap-x-2 items-center rounded-md",
              action?.isActive &&
                "bg-internee-theme text-internee-absoluteTheme"
            )}
          >
            <action.Icon className="w-5 h-5" />
            {action.label}
          </Link>
        </div>
      ))}
    </ScrollArea>
  );
};

export default SidebarAdminAction;
