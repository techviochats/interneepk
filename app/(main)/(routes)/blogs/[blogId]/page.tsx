import React, { Suspense } from "react";
import Blogs from "../_components/blogs";
import Loading from "@/components/loading";

const BlogIdPage = ({ params }: { params: { blogId: string } }) => {
  return (
    <div className="px-6 py-8 space-y-5 w-full h-full flex flex-col">
      <Suspense
        fallback={
          <div className="h-60">
            <Loading />
          </div>
        }
      >
        <Blogs params={params} />
      </Suspense>
    </div>
  );
};

export default BlogIdPage;
