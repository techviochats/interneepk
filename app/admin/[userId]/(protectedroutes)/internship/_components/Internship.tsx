import React from "react";

import { getAllInternship } from "@/actions/get-all-internship";

import Error from "@/components/error";

import InternshipList from "./internship-list";

const Internship = async ({
  searchParams,
}: {
  searchParams: { category: string };
}) => {
  const { data, error, total } = await getAllInternship(searchParams.category);
  if (error) {
    return <Error href="/" error="Something went wrong 500" />;
  }

  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid grid-cols-3 gap-y-6 gap-x-4">
        {data?.map((internship: any) => (
          <InternshipList
            key={internship.$id}
            category={internship.internship_category}
            id={internship.$id}
            name={internship.internship_name}
          />
        ))}
        {data.length === 0 && (
          <div className="flex justify-center items-center w-full col-span-1  sm:col-span-2 md:col-span-2 lg:col-span-3 text-muted-foreground text-sm">
            No Internships Available
          </div>
        )}
      </div>
    </div>
  );
};

export default Internship;
