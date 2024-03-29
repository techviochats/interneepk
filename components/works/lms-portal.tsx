import Image from "next/image";
import React from "react";
import { Cloud, SearchCheck, AlertCircle, Copy } from "lucide-react";
import MotionDiv from "@/components/framer/isInView";

const LmsPortal = () => {
  const data = [
    {
      id: "1",
      Icon: <Cloud className="w-6 h-6 text-internee-theme" />,
      title: "Sell Courses and Earn",
      description:
        "Are you an expert in your field? Share your knowledge on our LMS. Create and sell courses, or contribute as an instructor. Empower others on their learning journey while earning rewards for your expertise.",
    },
    {
      id: "2",
      Icon: <SearchCheck className="w-6 h-6 text-internee-theme" />,
      title: "Certification ",
      description:
        "Complete courses on our LMS and earn certifications that validate your expertise. Showcase your accomplishments to potential employers and stand out in a competitive landscape.",
    },
    {
      id: "3",
      Icon: <AlertCircle className="w-6 h-6 text-internee-theme" />,
      title: "Courses in Urdu",
      description:
        "Dive into the world of knowledge with our courses in Urdu. Breaking language barriers, Our LMS ensures that education is accessible and relatable for everyone. Learn, grow, and excel in a language that feels like home.",
    },
    {
      id: "4",
      Icon: <Copy className="w-6 h-6 text-internee-theme" />,
      title: "Practice Exercises",
      description:
        "Theory is just the beginning. Our LMS goes beyond by offering practical exercises that challenge and refine your skills. Apply your knowledge in real-world scenarios, solidifying your understanding and boosting your confidence",
    },
  ];
  return (
    <div className="flex sm:flex-row flex-col gap-y-4 sm:h-[50rem] bg-white gap-x-5 mt-20 relative px-4 sm:px-0">
      <div className="bg-[#F5F6F7] absolute top-0 left-0 sm:h-72 rounded-full sm:w-72 w-52 h-52"></div>
      <div className="bg-[#F5F6F7] absolute bottom-0 right-0 sm:h-72 rounded-full sm:w-72 z-0 w-52 h-52"></div>

      <div className="w-full sm:w-[50%] flex flex-col items-end z-10">
        <div className="w-full sm:w-[78%] h-full flex flex-col gap-y-4">
          <div className="leading-none">
            <h2 className="font-semibold">Our LMS</h2>
            <h1 className="text-4xl tracking-tight font-semibold">
              Guided Tutorials in Learning Management System
            </h1>
          </div>
          <p className="text-sm">
            Want to learn something but don&apos;t know what&apos;s the roadmap
            or your english is not too good? That&apos;s why we launch LMS for
            you.
          </p>
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-0">
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
      {/* image */}
      <div className="w-full sm:w-[40%] flex h-full items-center overflow-hidden">
        <MotionDiv className="w-full relative aspect-square" x1="0" x2="50%">
          <Image
            src={"/assets/task-two.webp"}
            alt="task-two"
            fill
            className="object-cover bg-right"
          />
        </MotionDiv>
      </div>
    </div>
  );
};

export default LmsPortal;
