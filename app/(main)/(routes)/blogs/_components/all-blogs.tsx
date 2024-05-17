import React from "react";

import { getAllBlogs } from "@/actions/get-all-blogs";

import BlogList from "./blog-list";

const AllBlogs = async () => {
  const blogs = await getAllBlogs("", "true");

  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 ">
      {blogs?.data?.map((blog) => (
        <BlogList
          key={blog.$id}
          $id={blog?.$id}
          description={(blog as any)?.description}
          main_heading={(blog as any)?.main_heading}
          published_date={(blog as any)?.published_date}
          is_published={(blog as any)?.is_published}
          full_name={(blog as any)?.user?.full_name}
        />
      ))}
      {blogs?.data.length === 0 && (
        <div className="flex justify-center items-center w-full col-span-1  sm:col-span-2 md:col-span-2 lg:col-span-3 text-muted-foreground text-sm">
          No Blogs Available
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
