import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 z-10 h-48 bg-internee-absoluteTheme px-0 md:px-44 py-5">
      <div className="flex justify-between">
        <Link className="px-2" href={"/"}>
          <Image
            src={"/logo.webp"}
            alt="logo"
            width={250}
            height={163}
            className="object-cover"
          />
        </Link>
        <div className="flex gap-x-20">
          <div className="flex flex-col gap-y-2 text-sm text-muted-foreground">
            <h1 className="font-semibold text-black">Company</h1>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/careers">Careers</Link>
          </div>
          <div className="flex flex-col gap-y-2 text-sm text-muted-foreground">
            <h1 className="font-semibold text-black">Get Help</h1>
            <Link href="/about">Training Videos</Link>
            <Link href="/contact">Request Help</Link>
          </div>
          <div className="flex flex-col gap-y-2 text-xs">
            <h1 className="font-semibold text-black">Socialize with us</h1>
            {/* icons */}
            <div className="flex gap-x-2">
              <a className="w-7 h-7 rounded-full bg-[#FEBA18] flex items-center justify-center cursor-pointer">
                <FacebookIcon className="text-white w-5 h-5" />
              </a>
              <a className="w-7 h-7 rounded-full bg-[#FEBA18] flex items-center justify-center cursor-pointer">
                <YoutubeIcon className="text-white w-5 h-5" />
              </a>
              <a className="w-7 h-7 rounded-full bg-[#FEBA18] flex items-center justify-center cursor-pointer">
                <InstagramIcon className="text-white w-5 h-5" />
              </a>
              <a className="w-7 h-7 rounded-full bg-[#FEBA18] flex items-center justify-center cursor-pointer">
                <TwitterIcon className="text-white w-5 h-5" />
              </a>
            </div>
            <div className="mt-4 text-[9px] text-muted-foreground">
              Copyright &copy;{new Date().getFullYear()} internee.pk Pvt Ltd.{" "}
              <br />
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
