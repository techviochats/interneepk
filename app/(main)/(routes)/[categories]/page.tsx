import { Metadata } from "next";

import Link from "next/link";
import React from "react";

import { Clock5, MapPin } from "lucide-react";

import {
  allCategories,
  chatBot,
  cloudComputing,
  cybersecurity,
  graphic,
  machinelearning,
  mobileDevelopment,
  paramsValue,
  socialMedia,
  videoEditing,
  webDesign,
  webDevelopment,
} from "@/data/categories-data";
import { categoryParamsType } from "@/@types";
import NotFound from "@/components/not-found";

export const metadata: Metadata = {
  title: "Internee.pk | Job Details",
  description: "Job Details of Internee.pk",
};

type dataType = {
  id: number;
  title: string;
  link: string;
};

const CategoriesPage = ({
  params,
}: {
  params: { categories: categoryParamsType };
}) => {
  let data: dataType[] = [];
  if (params.categories === "websitedesign") {
    data = webDesign;
  } else if (params.categories === "webdevelopment") {
    data = webDevelopment;
  } else if (params.categories === "chatbot") {
    data = chatBot;
  } else if (params.categories === "graphic") {
    data = graphic;
  } else if (params.categories === "mobiledevelopment") {
    data = mobileDevelopment;
  } else if (params.categories === "cloud") {
    data = cloudComputing;
  } else if (params.categories === "socialmedia") {
    data = socialMedia;
  } else if (params.categories === "cybersecurity") {
    data = cybersecurity;
  } else if (params.categories === "videoediting") {
    data = videoEditing;
  } else if (params.categories === "machinelearning") {
    data = machinelearning;
  } else if (params.categories === "allcategories") {
    data = allCategories;
  } else {
    return <NotFound />;
  }

  return (
    <>
      <div className="px-5 py-10 md:px-28">
        <div className="pt-8 text-center">
          <h1 className="text-[48px] font-semibold">Featured Internship</h1>
          <p className="text-muted-foreground text-lg">
            Grab your <span className="font-semibold">Internships</span> on your
            favourite domain now..!
          </p>
        </div>
        {/* container */}
        <div className="flex flex-col gap-y-8 pt-6">
          {data
            ?.sort((a, b) => a.title.localeCompare(b.title))
            .map((cur) => (
              <div
                className="bg-white rounded-md p-4 px-6 transition-all hover:transition hover:shadow-2xl flex flex-col justify-center group"
                key={cur?.id}
              >
                <div className="flex sm:flex-row flex-col gap-x-5 items-center">
                  {/* Name */}
                  <div className="w-20 h-20 p-4 rounded-full flex items-center justify-center bg-white shadow-2xl relative text-3xl font-bold group-hover:text-[#8c52fe] transition-all duration-300">
                    {cur?.title?.[0]}
                  </div>
                  <div className="font-semibold text-[32px] flex flex-col sm:flex-1 w-full">
                    <span className="text-black group-hover:text-[#8c52fe] transition-all duration-300">
                      {cur?.title}
                    </span>
                    {/* for location and these thing */}
                    <div className="gap-x-4 sm:gap-x-10 flex sm:flex-row gap-y-2 my-3 sm:my-0  flex-col items-center">
                      <div className="text-[#43a724] text-sm flex items-start">
                        <MapPin className="mr-2 w-5 h-5" />
                        <span>Karachi, Pakistan</span>
                      </div>
                      <div className="text-[#43a724] text-sm flex items-start">
                        <Clock5 className="mr-2 w-5 h-5" />
                        <span>1 Month</span>
                      </div>
                    </div>
                  </div>
                  {/* apply now */}
                  <a
                    href={cur?.link}
                    target="_blank"
                    className="px-5 py-3 flex items-center rounded-full bg-[#8C52FE] text-white"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;

export async function generateStaticParams() {
  return paramsValue?.map((value) => ({
    categories: value,
  }));
}
