import React, { Suspense } from "react";
import Blogs from "../_components/blogs";
import Loading from "@/components/loading";
import { getAllBlogs } from "@/actions/get-all-blogs";

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

export async function generateStaticParams() {
  const paramsValue = await getAllBlogs("", "true");
  return paramsValue?.data?.map((value) => ({
    blogId: (value as any)?.$id,
  }));
}

export default BlogIdPage;
