"use client";
import { ALLSOCIALLINKS, APP_DOMAIN, AllComponentIds } from "@/constant";
import { toScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import {
  ArrowUp,
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
    <footer className="mt-32 z-10 sm:h-48 bg-internee-absoluteTheme px-4 sm:px-44 py-5 relative">
      <div
        className={cn(
          "absolute -top-6 right-5 h-12 w-12 rounded-full bg-internee-theme flex items-center justify-center cursor-pointer transition-all hover:bg-internee-theme/80 hover:-top-7 shadow-2xl"
        )}
        onClick={() => toScroll(AllComponentIds["hero"])}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </div>
      <div className="flex justify-between flex-col sm:flex-row gap-y-8 sm:gap-y-0">
        <Link className="px-2" href={"/"}>
          <Image
            src={"/logo.webp"}
            alt="logo"
            width={250}
            height={163}
            className="object-cover"
          />
        </Link>
        <div className="flex gap-x-20 flex-col sm:flex-row gap-y-6">
          <div className="flex flex-col gap-y-2 text-sm text-muted-foreground">
            <h1 className="font-semibold text-black">Company</h1>
            <Link href={`${APP_DOMAIN}/privacy.html`} target="blank">
              Contact Us
            </Link>
            <Link href={`${APP_DOMAIN}/privacy.html`} target="blank">
              Privacy Policy
            </Link>
            <Link href={`${APP_DOMAIN}/policy.html`} target="blank">
              Terms and Conditions
            </Link>
          </div>
          <div className="flex flex-col gap-y-2 text-sm text-muted-foreground">
            <h1 className="font-semibold text-black">Get Help</h1>
            <a href="" target="_blank" >Training Videos</a>
            <a target="_blank" href="/privacy.html">Request Help</a>
          </div>
          <div className="flex flex-col gap-y-2 text-xs">
            <h1 className="font-semibold text-black">Socialize with us</h1>
            {/* icons */}
            <div className="flex gap-x-2">
              <a
                className="w-7 h-7 rounded-full bg-[#FEBA18] flex items-center justify-center cursor-pointer"
                href={ALLSOCIALLINKS["facebook"]}
                target={"_blank"}
              >
                <FacebookIcon className="text-white w-5 h-5" />
              </a>
              <a
                className="w-7 h-7 rounded-full bg-[#FEBA18] flex items-center justify-center cursor-pointer"
                href={ALLSOCIALLINKS["youtube"]}
                target={"_blank"}
              >
                <YoutubeIcon className="text-white w-5 h-5" />
              </a>
              <a
                className="w-7 h-7 rounded-full bg-[#FEBA18] flex items-center justify-center cursor-pointer"
                href={ALLSOCIALLINKS["instagram"]}
                target={"_blank"}
              >
                <InstagramIcon className="text-white w-5 h-5" />
              </a>
              <a
                className="w-7 h-7 rounded-full bg-[#FEBA18] flex items-center justify-center cursor-pointer"
                href={ALLSOCIALLINKS["twitter"]}
                target={"_blank"}
              >
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
