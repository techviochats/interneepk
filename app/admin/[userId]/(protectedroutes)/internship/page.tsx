import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "@/constant";
import InternshipSelect from "./_components/intern-select";
import { Link } from "next-view-transitions";

const InternshipPage = ({ params }: { params: { userId: string } }) => {
  return (
    <div className="px-6 py-8 space-y-5 w-full h-full flex flex-col">
      <h1 className="capitalize text-3xl font-semibold text-internee-text">
        Internships
      </h1>
      <div className="flex justify-between">
        <Link
          href={`/admin/${params.userId}/internship/new`}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground bg-internee-theme hover:bg-internee-theme/80 h-10 px-4 py-2"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Internship
        </Link>
        <InternshipSelect />
      </div>
    </div>
  );
};

export default InternshipPage;
