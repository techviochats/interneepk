import React, { Suspense } from "react";

import { getAllBlogs } from "@/actions/get-all-blogs";

import Error from "@/components/error";

import AllBlogs from "./_components/all-blogs";
import Loading from "@/components/loading";

const BlogPage = async () => {
  return (
    <div className="px-6 py-8 space-y-5 w-full h-full flex flex-col">
      <h1 className="capitalize text-3xl font-semibold text-internee-text">
        All Blogs
      </h1>
      <Suspense fallback={<Loading />}>
        <AllBlogs />
      </Suspense>
    </div>
  );
};

export default BlogPage;
