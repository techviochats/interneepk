import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import MotionDiv from "@/components/framer/isInView";
import { Boxes } from "lucide-react";

const InterneeFeature = () => {
  const data = [
    {
      id: "1",
      Icon: "/assets/svg1.svg",
      label: "5500+ Students already registered",
    },
    {
      id: "2",
      Icon: "/assets/svg1.svg",
      label: "Task based projects that based on hands on experience",
    },
    {
      id: "3",
      Icon: "/assets/svg1.svg",
      label: "Massive Courses with high-quality videos on LMS",
    },
    {
      id: "4",
      Icon: "/assets/svg1.svg",
      label: "Empowering youth towards IT revolution & technology",
    },
    {
      id: "5",
      Icon: "/assets/svg1.svg",
      label: "Hands on Experience via Virtual internship",
    },
    {
      id: "6",
      Icon: "/assets/svg1.svg",
      label: "Complete your task and get market competent job",
    },
    {
      id: "7",
      Icon: "/assets/svg2.svg",
      label: "Direct Collaboration with companies for direct hiring",
    },
  ];
  return (
    <div className="space-y-12 pl-4 sm:px-48 relative pb-10">
      <div className="absolute -top-10 w-[42%] bg-internee-absoluteTheme h-[120vh] right-0 rounded-xl -z-[10] max-h-[680px] hidden sm:block" />
      <h1 className="capitalize text-4xl sm:text-5xl font-semibold tracking-tighter">
        Why Internee.pk?
      </h1>
      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 w-full z-10">
        {/* svg with data */}
        <div className="flex h-full flex-col">
          {data?.map((val, index) => (
            <div className="flex gap-x-4" key={val.id}>
              <MotionDiv
                className="-mt-0.5 relative"
                x1="0"
                x2="0"
                y1="0"
                y2="-50%"
              >
                <Image
                  src={val.Icon}
                  alt={val.label}
                  width={50}
                  height={50}
                  // className="w-10 h-10 sm:w-[50px] sm:h-[50px] "
                />
                <Boxes
                  className={cn(
                    "w-4 h-4 absolute top-[22%] left-[36%] text-internee-theme",
                    data.length - 1 === index && "top-[28%]"
                  )}
                />
              </MotionDiv>

              <p
                className={cn(
                  "font-semibold h-full sm:my-auto sm:text-sm sm:w-[80%] w-full text-xs",
                  data.length - 1 !== index && "pb-5"
                )}
              >
                {val.label}
              </p>
            </div>
          ))}
        </div>
        {/* image */}
        <div className="p-1 overflow-hidden pr-4 sm:pr-4">
          <MotionDiv className="relative w-72 sm:h-[90%]" x1="0" x2="50%">
            <DirectionAwareHover imageUrl={"/assets/programing.webp"} />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default InterneeFeature;
