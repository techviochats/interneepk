import Image from "next/image";
import React from "react";
import { Cloud, SearchCheck, AlertCircle, Copy } from "lucide-react";

const JobPortal = () => {
  const data = [
    {
      id: "1",
      Icon: <Cloud className="w-6 h-6 text-internee-theme" />,
      title: "100% Mobile friendly",
      description: "online art approvals",
    },
    {
      id: "2",
      Icon: <SearchCheck className="w-6 h-6 text-internee-theme" />,
      title: "Speed up the design process",
      description: "Everything is done online, from mockup to final design.",
    },
    {
      id: "3",
      Icon: <AlertCircle className="w-6 h-6 text-internee-theme" />,
      title: "Communicate easier",
      description:
        "Add multiple recipients to an Art Approval to reduce traditional email clutter.",
    },
    {
      id: "4",
      Icon: <Copy className="w-6 h-6 text-internee-theme" />,
      title: "Add changes faster",
      description:
        "Students can add comments to approvals for changes, saving you both time on finalizing designs.",
    },
  ];
  return (
    <div className="flex h-[35rem] bg-white gap-x-5 mt-20 relative">
      <div className="bg-[#F5F6F7] absolute top-0 left-0 h-72 rounded-full w-72"></div>

      <div
        style={{ "clipPath": "polygon(100% 0, 3% 100%, 100% 100%);" }}
        className="w-full h-96 absolute bottom-0 left-0 bg-[#F5F6F7] z-0"
      ></div>
      <div className="w-[50%] flex flex-col items-end z-10">
        <div className="w-[78%] h-full flex flex-col gap-y-4">
          <div className="leading-none">
            <h2 className="font-semibold">
              Already have a good skill but looking for job?
            </h2>
            <h1 className="text-4xl tracking-tight font-semibold">
              Job Portal, Ultimate Place To Find The Best Job
            </h1>
          </div>
          <p className="text-sm">
            Streamline the approval process with your customer to quickly close
            the deal, get the sale, and start production.
          </p>
          <div className="w-full h-full grid grid-cols-2">
            {data.map((Item) => (
              <div key={Item.id} className="flex gap-x-2">
                <div>{Item.Icon}</div>
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
      <div className="w-[40%] flex h-full justify-end items-center">
        <div className="w-full relative aspect-square">
          <Image
            src={"/assets/task-four.webp"}
            alt="task-four"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default JobPortal;
