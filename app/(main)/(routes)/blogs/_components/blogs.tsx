import React from "react";

import Editor from "./editor";
import { getSingleBlogs } from "@/actions/get-single-blogs";

const Blogs = async ({ params }: { params: { blogId: string } }) => {
  const { data, error, blogId } = await getSingleBlogs(params?.blogId);
  const [blogs, user] = data;
  console.log(blogs);
  if (error) {
    return (
      <div>
        {JSON.stringify(error)}
        {blogId}
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-3xl font-bold">{(blogs as any)?.main_heading}</h1>
      <p className="text-muted-foreground text-sm italic">
        {(blogs as any)?.description}
      </p>
      <Editor blogs={(blogs as any)?.blogs} />
    </div>
  );
};

export default Blogs;
