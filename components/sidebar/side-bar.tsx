"use client";
import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useSidebarHook } from "@/hooks/use-modals";
import Link from "next/link";
import Image from "next/image";
import {
  SquareIcon,
  Building2,
  TabletSmartphone,
  PackageSearch,
  LogIn,
} from "lucide-react";
import { APP_DOMAIN } from "@/constant";
const SideBar = () => {
  const { close, isOpen, open } = useSidebarHook();

  return (
    <Sheet open={isOpen} onOpenChange={() => (isOpen ? close() : open())}>
      <SheetContent side={"left"} className="z-[999999] p-0 w-full">
        <div className="flex flex-col">
          <div className="border-b">
            <Link
              href={"/"}
              className="w-full flex py-4 px-3 items-center"
              onClick={() => {
                close();
              }}
            >
              <Image src={"/logo.webp"} alt="alt" width={200} height={200} />
            </Link>
          </div>
          {sidebarLink?.map((sideNav) => (
            <Link
              href={sideNav.href}
              className="py-4 px-3 hover:bg-internee-theme/30 group transition-all duration-300 w-full"
              key={sideNav.id}
              onClick={() => {
                close();
              }}
            >
              <p className="text-muted-foreground text-sm group-hover:text-internee-theme font-medium flex">
                <sideNav.icon className="w-5 h-5 mr-2" />
                {sideNav.label}
              </p>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
const sidebarLink = [
  {
    id: 1,
    label: "Blogs",
    href: "/coming-soon.html",
    icon: SquareIcon,
  },
  {
    id: 2,
    label: "Company Collaboration",
    href: `${APP_DOMAIN}/coming-soon.html`,
    icon: Building2,
  },
  {
    id: 3,
    label: "Mobile Apps",
    href: `${APP_DOMAIN}/coming-soon.html`,
    icon: TabletSmartphone,
  },
  {
    id: 4,
    label: "Job Portal",
    href: `${APP_DOMAIN}/coming-soon.html`,
    icon: PackageSearch,
  },
  {
    id: 5,
    label: "Internee's Login",
    href: `${APP_DOMAIN}/coming-soon.html`,
    icon: LogIn,
  },
];
