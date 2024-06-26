import React from "react";

import { getAllBlogs } from "@/actions/get-all-blogs";

import BlogCardAction from "./blog-card-action";
import BlogList from "./blog-list";

type BlogType = {
  user_id?: string;
  is_published?: string;
};
const AllBlogs = async ({
  searchParams,
}: {
  searchParams: {
    filters: string | boolean;
  };
}) => {
  const value = [searchParams.filters];
  const filterVal: BlogType = value?.reduce((acc, curr) => {
    if (curr === "true") {
      return { ...acc, is_published: curr };
    } else if (curr === "false") {
      return { ...acc, is_published: curr };
    } else {
      return { ...acc, user_id: curr };
    }
  }, {});

  const blogs = await getAllBlogs(filterVal?.user_id, filterVal?.is_published);

  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 ">
      {blogs?.data.map((blog) => (
        <BlogList
          key={blog.$id}
          $id={blog?.$id}
          description={(blog as any)?.description}
          main_heading={(blog as any)?.main_heading}
          published_date={(blog as any)?.published_date}
          is_published={(blog as any)?.is_published}
          
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
