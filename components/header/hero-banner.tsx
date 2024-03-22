import Image from "next/image";
import React from "react";
import TypeWriter from "@/components/ui/type-writer";
import { APP_DOMAIN, AllComponentIds } from "@/constant";
import HeroBannerComment from "./_components/hero-banner-comment";
const HeroBanner = () => {
  return (
    <div
      className="sm:px-12 px-4 sm:h-screen max-h-[1080px]"
      id={AllComponentIds["hero"]}>
      <div className="flex gap-x-4 sm:flex-row flex-col gap-y-6">
        <div className="flex flex-col gap-y-2 sm:w-[45%] w-full transition-all">
          <HeroBannerComment />
          <h1 className="text-4xl px-1 sm:px-0 font-semibold tracking-tighter leading-[3.5rem] text-internee-theme ">
            <TypeWriter />
          </h1>
          <h3 className="text-base text-internee-text">
            Internee.pk kickstart student{"`"}s tech careers with first
            internships, providing industry exposure, practical skills, and
            networking opportunities, paving the way for their success in the
            tech industry.
          </h3>
          {/* pic */}
          <div className="flex items-center gap-x-2 flex-wrap sm:gap-y-0 sm:gap-x-1 gap-y-1">
            <Image
              src="/assets/incubation.webp"
              alt="play"
              height={200}
              width={200}
              className="object-cover"
            />
            <Image
              src="/assets/nep.webp"
              alt="play"
              height={70}
              width={70}
              className="object-cover"
            />
            <Image
              src="/assets/nic.webp"
              alt="play"
              height={100}
              width={100}
              className="object-cover"
            />
          </div>
          {/* button */}
          <div className="flex gap-x-3">
            <a
              href={`https://job.internee.pk/`}
              target="_blank"
              className="border-2 border-internee-theme text-internee-theme py-3 px-4 sm:px-10 rounded-full text-sm hover:border-internee-theme/60 hover:text-internee-theme/90"
            >
              Job Portal
            </a>
            <a
              href={`https://learn.internee.pk/`}
              target="_blank"
              className="border-2 bg-internee-theme text-white py-3 px-4 sm:px-10 rounded-full text-sm hover:bg-internee-theme/80"
            >
              Our Lms
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center w-full sm:w-[calc(100%-45%-16px)]">
          <div
            className="relative bg-green-200 w-full aspect-square"
            data-scroll
            data-scroll-speed="0.8"
            // data-scroll-position="start"
          >
            <Image src={"/hero.webp"} alt="hero" fill className="bg-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
