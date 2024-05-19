import { Metadata } from "next";

import React, { Suspense } from "react";

import Category from "./_components/category";
import Loading from "@/components/loading";
import { getAllCategory } from "@/actions/get-all-category";

export const metadata: Metadata = {
  title: "Internee.pk | Job Details",
  description: "Job Details of Internee.pk",
};

const CategoriesPage = ({ params }: { params: { categories: string } }) => {
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
        <Suspense
          fallback={
            <div className="w-full h-72">
              <Loading />
            </div>
          }
        >
          <Category params={params} />
        </Suspense>
      </div>
    </>
  );
};

export default CategoriesPage;

export async function generateStaticParams() {
  const paramsValue = await getAllCategory();
  return paramsValue?.data?.map((value) => ({
    categories: (value as any)?.category_name,
  }));
}
