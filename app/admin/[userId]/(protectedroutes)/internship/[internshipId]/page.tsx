import React from "react";
import InternForm from "../_components/intern-form";

const InternshipIdPage = ({ params }: { params: { internshipId: string } }) => {
  return (
    <div className="px-6 py-8 space-y-5 w-full h-full flex flex-col">
      <h1 className="capitalize text-3xl font-semibold text-internee-text">
        {params?.internshipId !== "new" ? "Update" : "Add"} Internship
      </h1>
      <InternForm internshipId={params.internshipId} />
    </div>
  );
};

export default InternshipIdPage;
