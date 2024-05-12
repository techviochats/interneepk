import React from "react";
import InternshipList from "./internship-list";
import { getAllInternship } from "@/actions/get-all-internship";

const Internship = async ({
  searchParams,
}: {
  searchParams: { category: string };
}) => {
  const { data, error, total } = await getAllInternship(searchParams.category);
  if (error) {
    return (
      <div className="text-destructive font-bold text-[50px] h-full w-full flex items-center justify-center">
        Oops! Error
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid grid-cols-3 gap-y-6 gap-x-4">
        {data.map((internship: any) => (
          <InternshipList
            key={internship.$id}
            category={internship.internship_category}
            id={internship.$id}
            name={internship.internship_name}
          />
        ))}
      </div>
    </div>
  );
};

export default Internship;
