import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 h-28 py-8 px-12 z-[999] bg-white">
      <div className="w-full flex justify-between items-center transition-all">
        <div className="w-40 h-10 relative">
          <Image src="/logo.webp" alt="logo" fill className="object-contain" />
        </div>
        <div className="flex gap-x-8 h-full items-center text-sm">
          <Link
            href="/"
            className="text-internee-text font-semibold hover:text-internee-text/50"
          >
            Blogs
          </Link>
          <Link
            href="/"
            className="text-internee-text font-semibold hover:text-internee-text/50"
          >
            Company Collaboration
          </Link>
          <Link
            href="/"
            className="text-internee-text font-semibold hover:text-internee-text/50"
          >
            Mobile Apps
          </Link>
          <Link
            href="/"
            className="text-white font-semibold px-5 py-3 rounded-full bg-internee-theme hover:bg-internee-theme/60 transition-all duration-300 ease-in-out"
          >
            Job Portal
          </Link>
          <Link
            href="/"
            className="text-internee-theme font-semibold px-5 py-3 rounded-full border-2 border-internee-theme hover:border-internee-theme/60 hover:text-internee-theme/60 transition-all duration-300 ease-in-out"
          >
            Internee's Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
