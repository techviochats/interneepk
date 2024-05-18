import React from "react";
import { Clock5, MapPin } from "@/constant";
import { getAllInternship } from "@/actions/get-all-internship";
type dataType = {
  id: string;
  title: string;

  link: string;
};
const Category = async ({ params }: { params: { categories: string } }) => {
  const decodedParams = decodeURIComponent(params?.categories);
  const internships = await getAllInternship(decodedParams);

  let data: dataType[] = internships?.data?.map((internship) => ({
    id: (internship as any).$id,
    link: (internship as any).internship_docLink,
    title: (internship as any).internship_name,
  }));

  return (
    <div className="flex flex-col gap-y-8 pt-6">
      {data
        ?.sort((a, b) => a.title.localeCompare(b.title))
        ?.map((cur) => (
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
      {data?.length === 0 && (
        <div className="text-center text-sm text-muted-foreground">
          No Internships Available
        </div>
      )}
    </div>
  );
};

export default Category;
