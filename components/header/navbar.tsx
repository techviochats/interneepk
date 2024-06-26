"use client";
import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Link } from "next-view-transitions";

import NavbarButton from "./_components/navbar-button";
import NavAuthButton from "./_components/nav-auth-button";
import { APP_DOMAIN, AllComponentIds } from "@/constant";
import { toScroll, useShadow } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const navbarImageClick = () => {
    if (pathName === "/") {
      toScroll(AllComponentIds["hero"]);
    } else {
      router.push("/");
    }
  };
  const shadow = useShadow();
  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 h-28 py-8 px-4 md:px-12 z-[999] sm:border-none shadow-none transition-all bg-white",
        shadow && "shadow-2xl border-2 sm:border-none"
      )}
    >
      <div className="w-full flex justify-between items-center transition-all">
        <div
          className="w-40 h-10 relative cursor-pointer"
          onClick={navbarImageClick}
        >
          <Image src="/logo.webp" alt="logo" fill className="object-contain" />
        </div>
        <div className="sm:hidden flex items-center justify-center">
          <NavbarButton />
        </div>
        <div className="sm:flex gap-x-8 h-full items-center text-sm hidden">
          <Link
            href={`/blogs`}
            className="text-internee-text font-semibold hover:text-internee-text/50"
          >
            Blogs
          </Link>
          <Link
            href={`${APP_DOMAIN}/coming-soon.html`}
            target="_blank"
            className="text-internee-text font-semibold hover:text-internee-text/50"
          >
            Company Collaboration
          </Link>
          <Link
            href={`${APP_DOMAIN}/coming-soon.html`}
            target="_blank"
            className="text-internee-text font-semibold hover:text-internee-text/50"
          >
            Mobile Apps
          </Link>
          <Link
            href={`https://job.internee.pk/`}
            target="_blank"
            className="text-white font-semibold px-5 py-3 rounded-full bg-internee-theme hover:bg-internee-theme/60 transition-all duration-300 ease-in-out"
          >
            Job Portal
          </Link>
          <NavAuthButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
