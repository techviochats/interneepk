import Image from "next/image";
import React from "react";
import { MonitorPlay, UserPlus, ListChecks } from "lucide-react";

import MotionDiv from "@/components/framer/isInView";

const CourseCreate = () => {
  const data = [
    {
      id: "1",
      Icon: <MonitorPlay className="w-6 h-6 text-internee-theme" />,
      title: "Upload Tutorials & Excersice",
      description:
        "Transform your expertise into impactful learning materials. As an instructor on Internee.pk LMS, you can effortlessly upload tutorials and exercises, shaping the educational experience for countless learners.",
    },
    {
      id: "2",
      Icon: <UserPlus className="w-6 h-6 text-internee-theme" />,
      title: "Generate Revenue",
      description:
        "Teach what you love and earn what you deserve. Internee.pk LMS offers instructors the opportunity to generate revenue. Monetize your expertise, reach a global audience, and make a meaningful income from your passion.",
    },
    {
      id: "3",
      Icon: <ListChecks className="w-6 h-6 text-internee-theme" />,
      title: "Instructor Identity",
      description:
        "Internee.pk LMS provides a platform for instructors to build their brand. Showcase your skills, experience, and teaching style, creating a unique and recognizable identity in the world of online education.",
    },
    {
      id: "4",
      Icon: <MonitorPlay className="w-6 h-6 text-internee-theme" />,
      title: "Perfact Share Ratio",
      description:
        "We believe in fair partnerships. we enjoy a perfect share ratio that ensures transparency and fairness. Your hard work deserves to be rewarded, and we make sure you get your share",
    },
  ];
  return (
    <div className="flex h-[50rem] bg-white gap-x-5 mt-20 relative">
      <div className="bg-[#F5F6F7] absolute top-0 left-0 h-72 rounded-full w-72"></div>
      <div className="bg-[#F5F6F7] absolute top-1/3 right-24 h-72 rounded-full w-72 z-0"></div>
      <div className="bg-[#F5F6F7] absolute bottom-0 left-24 h-72 rounded-full w-72 z-0"></div>
      {/* image */}
      <div className="w-[45%] flex h-full items-center -ml-5 overflow-hidden">
        <MotionDiv className="w-full relative aspect-square " x1="0" x2="-50%">
          <Image
            src={"/assets/task-three.webp"}
            alt="task-one"
            fill
            className="object-cover bg-right"
          />
        </MotionDiv>
      </div>
      <div className="w-[50%] z-10">
        <div className=" w-[84%] h-full flex flex-col gap-y-4">
          <div className="leading-none">
            <h2 className="font-semibold">
              Are you Tech Instructor or Content Creator?
            </h2>
            <h1 className="text-4xl tracking-tight font-semibold">
              Create Courses In Local Language & Generate Income
            </h1>
          </div>
          <p className="text-sm">
            Are you a professional want to start your journey as a tech
            instructor and content creator to make some revenue? Just visit Our
            LMS Intructor Portal
          </p>
          <div className="w-full h-full grid grid-cols-2">
            {data.map((Item) => (
              <div key={Item.id} className="flex gap-x-2">
                <MotionDiv x1="0" x2="0" y1="0" y2="50%">
                  {Item.Icon}
                </MotionDiv>
                <div className="flex flex-col">
                  <h3 className="font-semibold">{Item.title}</h3>
                  <p className="text-sm">{Item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCreate;
