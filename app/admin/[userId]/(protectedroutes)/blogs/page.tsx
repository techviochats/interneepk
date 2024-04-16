import React, { Suspense } from "react";
import Blog from "./_components/blog";

const BlogPage = ({ params }: { params: { userId: string } }) => {
  return (
    <div className="px-6 py-8 space-y-5 w-full h-full flex flex-col">
      <h1 className="capitalize text-3xl font-semibold text-internee-text">
        All Blogs
      </h1>
      <Suspense>
        <Blog userId={params.userId} />
      </Suspense>
    </div>
  );
};

export default BlogPage;
