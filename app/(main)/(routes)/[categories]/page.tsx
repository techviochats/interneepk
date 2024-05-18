import { Metadata } from "next";

import Link from "next/link";
import React, { Suspense } from "react";

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

import Category from "./_components/category";
import Loading from "@/components/loading";

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
  return paramsValue?.map((value) => ({
    categories: value,
  }));
}
