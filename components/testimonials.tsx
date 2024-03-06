import React from "react";
import EmblaCarousel from "./ui/embla-carousels";

import { EmblaOptionsType } from "embla-carousel";
import { CheckSquare, ShieldCheck } from "lucide-react";
import MotionDiv from "./framer/isInView";

const OPTIONS: EmblaOptionsType = {
  active: true,
  inViewThreshold: 0,
  startIndex: 0,
};
const SLIDE_COUNT = 7;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const Testimonials = () => {
  return (
    <div className="mt-40 pl-0 sm:pl-44 relative">
      <div className="absolute -top-20 h-[135vh] max-h-[900px] bg-internee-absoluteTheme sm:w-[80%] left-0 rounded-2xl -z-10 " />
      <h1 className="capitalize text-xl sm:text-4xl font-semibold tracking-tighter z-10 px-2 sm:px-0">
        What Students are saying <br />
        about internee.pk
      </h1>
      <div className="z-10">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="mt-20 w-full sm:w-[78%] flex gap-x-24 flex-col sm:flex-row px-4">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl capitalize flex font-semibold">
            <MotionDiv x1="0" x2="0" y1="0" y2="50%" className="flex">
              <ShieldCheck className="mr-2 w-8 h-8 text-internee-theme" />
              Safe and secure
            </MotionDiv>
          </h1>
          <ul className="list-disc ml-16 text-sm font-light">
            <li>Powered by Microsoft Azure cloud technology.</li>
            <li>Encrypted at rest and in transit.</li>
            <li>Data resides in US-based data centers.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2 overflow-hidden">
          <h1 className="text-2xl capitaliz flex font-semibold ">
            <MotionDiv x1="0" x2="0" y1="0" y2="50%" className="flex">
              <CheckSquare className="mr-2 w-8 h-8 text-internee-theme" />
            </MotionDiv>
            Free From Internship To Certification
          </h1>
          <ul className="list-disc ml-16 text-sm font-light">
            <li>Charge Nothing From Students</li>
            <li>LMS is also free</li>
            <li>Scale up or down anytime.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
