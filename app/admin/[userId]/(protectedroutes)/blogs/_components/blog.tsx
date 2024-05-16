import React, { Suspense } from "react";
import Link from "next/link";

import AllBlogs from "./all-blogs";
import { Plus } from "@/constant";
import Loading from "@/components/loading";
import BlogSelect from "./blog-select";

interface BlogProps {
  userId: string;
  searchParams: {
    filters: string | boolean;
  };
}

const Blog = ({ userId, searchParams }: BlogProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Link
        href={`/admin/${userId}/blogs/new`}
        className="h-10 px-4 py-2 text-internee-absoluteTheme font-semibold justify-center whitespace-nowrap rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-internee-theme flex items-center gap-x-2 hover:bg-internee-theme/80 transition-all hover:transition-all"
      >
        <Plus className="w-5 h-5" /> Add Blogs
      </Link>
      <div className="flex items-end flex-col">
        <BlogSelect />
      </div>
      <Suspense fallback={<Loading />}>
        <AllBlogs searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default Blog;
