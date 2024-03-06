import Image from "next/image";
import React from "react";
import { MonitorPlay, UserPlus, AppWindow, ListChecks } from "lucide-react";
import MotionDiv from "@/components/framer/isInView";

const OurTaskPortal = () => {
  const data = [
    {
      id: "1",
      Icon: <MonitorPlay className="w-6 h-6 text-internee-theme" />,
      title: "Hands on Projects",
      description:
        "We believe in learning by doing. Dive into hands-on projects that simulate real-world scenarios. From coding challenges to creative projects, every task is crafted to impart practical skills that resonate in professional environments.",
    },
    {
      id: "2",
      Icon: <UserPlus className="w-6 h-6 text-internee-theme" />,
      title: "How to represent yourself",
      description:
        "More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities.",
    },
    {
      id: "3",
      Icon: <ListChecks className="w-6 h-6 text-internee-theme" />,
      title: "SDLC Techniques",
      description:
        "Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency.",
    },
    {
      id: "4",
      Icon: <MonitorPlay className="w-6 h-6 text-internee-theme" />,
      title: "Easy to understand",
      description:
        "Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone. Whether you're a seasoned professional or a beginner.",
    },
  ];
  return (
    <div className="flex sm:flex-row flex-col sm:h-[50rem] bg-white sm:gap-x-5 gap-y-10 mt-20 px-4 relative sm:px-0">
      <div className="bg-[#F5F6F7] absolute top-0 left-0 sm:h-72 rounded-full sm:w-72 w-52 h-52"></div>
      <div className="bg-[#F5F6F7] absolute top-1/3 right-24 sm:h-72 rounded-full sm:w-72 w-52 h-52 z-0"></div>
      {/* image */}
      <div className="w-full sm:w-[50%] flex h-full items-start sm:-ml-24">
        <MotionDiv className="w-full aspect-[1/0.5] relative mt-28">
          <Image
            src={"/assets/task-one.webp"}
            alt="task-one"
            fill
            className="object-cover"
            
          />
        </MotionDiv>
      </div>
      <div className="w-full sm:w-[50%] z-10">
        <div className="w-full sm:w-[84%] h-full flex flex-col gap-y-4">
          <div className="leading-none">
            <h2 className="font-semibold">Our own task portal</h2>
            <h1 className="text-5xl tracking-tight font-semibold">
              Manage Project Via Own Task Portal
            </h1>
          </div>
          <p className="text-sm">
            Welcome to internee.pk task portal. Where Tasks Transform Into
            Skills
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-4">
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

export default OurTaskPortal;
