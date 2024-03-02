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
    <div className="space-y-12 px-48 relative pb-10">
      <div className="absolute -top-10 w-[42%] bg-internee-absoluteTheme h-[120vh] right-0 rounded-xl -z-[10] max-h-[680px]" />
      <h1 className="capitalize text-5xl font-semibold tracking-tighter">
        Why Internee.pk?
      </h1>
      <div className="flex gap-x-4 w-full z-10">
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
                <Image src={val.Icon} alt={val.label} width={50} height={50} />
                <Boxes
                  className={cn(
                    "w-4 h-4 absolute top-[22%] left-[36%] text-internee-theme",
                    data.length - 1 === index && "top-[28%]"
                  )}
                />
              </MotionDiv>

              <p
                className={cn(
                  "font-semibold h-full my-auto text-sm w-[80%]",
                  data.length - 1 !== index && "pb-5"
                )}
              >
                {val.label}
              </p>
            </div>
          ))}
        </div>
        {/* image */}
        <div className="p-1 overflow-hidden">
          <MotionDiv className="relative w-72 h-[90%] " x1="0" x2="50%">
            <DirectionAwareHover imageUrl={"/assets/programing.webp"} />
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default InterneeFeature;
