import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { getAllCategory } from "@/actions/get-all-category";

export async function HeroScroll() {
  const categories = await getAllCategory();
  const formattedCategories = categories?.data?.map((category) => ({
    name: (category as any)?.category_name as string,
    id: (category as any)?.$id as string,
    image: (category as any)?.category_image as string,
    designation: `/${(
      category as any
    )?.category_name?.toLowerCase()}` as string,
    badge: "Mentor",
  }));
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={formattedCategories}
        titleComponent={
          <div className="mb-8 flex justify-center items-center ">
            <h1 className="sm:text-4xl text-2xl font-semibold sm:w-[60%] w-full text-black dark:text-white flex flex-col justify-center items-center">
              Who is internee.pk? <br />
              <span className="text-sm mt-1 leading-tight font-normal">
                The ultimate platform designed to turbocharge the IT sector in
                Pakistan! We recognize the immense potential of talented
                individuals in the country and aim to bridge the gap between
                them and the thriving IT industry. Internee.pk offers a
                comprehensive range of virtual internship opportunities
                exclusively in the IT field.
              </span>
            </h1>
          </div>
        }
      />
    </div>
  );
}
