import Image from "next/image";
import React from "react";
import TypeWriter from "@/components/ui/type-writer";

const HeroBanner = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="px-12 h-screen max-h-[1080px]">
      <div className="flex gap-x-4">
        <div className="flex flex-col gap-y-2 w-[45%] transition-all">
          <h1 className="text-5xl font-semibold tracking-tighter leading-[3.5rem]">
            Looking for dream internship?
          </h1>
          <h1 className="text-5xl font-semibold tracking-tighter leading-[3.5rem] text-internee-theme h-32">
            <TypeWriter />
          </h1>
          <h3 className="text-base text-internee-text">
            Internee.pk kickstart student's tech careers with first internships,
            providing industry exposure, practical skills, and networking
            opportunities, paving the way for their success in the tech
            industry.
          </h3>
          {/* pic */}
          <div className="flex items-center gap-x-1">
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
            <button className="border-2 border-internee-theme text-internee-theme py-3 px-10 rounded-full text-sm hover:border-internee-theme/60 hover:text-internee-theme/90">
              Job Portal
            </button>
            <button className="border-2 button-gradient text-white py-3 px-10 rounded-full text-sm hover:bg-internee-theme/80">
              Our Lms
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center bg-yellow-300 w-[calc(100%-45%-16px)]">
          <div className="relative bg-green-200 w-full aspect-square">
            <Image src={"/hero.webp"} alt="hero" fill className="bg-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
